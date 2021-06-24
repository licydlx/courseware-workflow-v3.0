
/*
 * @Descripttion: 
 * @version: 
 * @Author: ruzhuan
 * @Date: 2021-06-08 18:00:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-06-08 18:00:00
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass, property } = cc._decorator;

@ccclass
export default class t4_05_model_v1 extends cc.Component {
    private _worldRoot: cc.Node;

    private _view: fgui.GComponent;

    private _c1: fgui.Controller;

    private _title: fgui.GButton;

    private _titleTrigger: fgui.GLoader;

    private _submitBtn: fgui.GButton;

    private _package: any;

    private _selectMap: any = {};

    private _textMap: any = {};

    private _kuangNameArr: any = [];

    private submitType: any = cc.Enum({

        No: 0,
        GuideShow: 1,
        WrongFeed: 2,
        RightFeed: 3
    });

    // 远程动态组件
    private feedback: any;

    private _state = {};

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;
        this.mergeState();
    }

    async onLoad() {
        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;

        fgui.GRoot.inst.addChild(this._view);

        this._c1 = this._view.getController("c1");

        // 臨時
        // bug 初始设置不播放不生效
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;

        this._submitBtn = this._view.getChild("submit").asButton;
        if (this._submitBtn) this._submitBtn.on(fgui.Event.CLICK, this._clickSubmit, this);

        let tempAnswerMap = {};
        let kuangGroup = this._view.getChild("kuangGroup").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == kuangGroup) {
                let btn = this._view.getChildAt(i).asButton;
                console.log('=== name ===' + btn.name);
                this._kuangNameArr.push(btn.name);
                tempAnswerMap[btn.name] = '';
                btn.on(fgui.Event.CLICK, this._clickKuang, this);
            }
        }

        let selectGroup = this._view.getChild("selectGroup").asGroup;
        let indexTemp = 0;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == selectGroup) {
                let img = this._view.getChildAt(i).asImage;
                this._selectMap[this._kuangNameArr[indexTemp]] = img;
                img.visible = false;
                indexTemp++;
            }
        }

        indexTemp = 0;
        let textGroup = this._view.getChild("textGroup").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == textGroup) {
                let label = this._view.getChildAt(i).asLabel;
                this._textMap[this._kuangNameArr[indexTemp]] = label;
                indexTemp++;
            }
        }

        let keyGroup = this._view.getChild("key").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == keyGroup) {
                let keyBtn = this._view.getChildAt(i).asButton;
                keyBtn.on(fgui.Event.CLICK, this._clickKey, this);
            }
        }

        // 初始化state
        this._state = {
            title: false,
            submit: this.submitType.No,
            selectKuangName: '',
            keyNumber: '',
            answerMap: tempAnswerMap,
        }
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { boxSoundUrl, guidIndex } = model.config;
        this._package = Package;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        // let item = fgui.UIPackage.getItemByURL(boxSoundUrl);
        // this._boxSound = await loadResource(item.file, cc.AudioClip);


        // 动效注册
        // for (let v in ae) {
        //     if (ae[v]) {
        //         this[v] = {};
        //         if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
        //         if (ae[v].pos) this[v].pos = ae[v].pos;
        //     }
        // }

        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
    }

    private _clickKey(evt: any) {

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let subName = btn.name.substring('input'.length);
        console.log('==== subName ==' + subName);
        let state: any = globalThis._.cloneDeep(this._state);
        state.keyNumber = subName;
        this.updateState(state);
    }

    private _clickKuang(evt: any) {

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let state: any = globalThis._.cloneDeep(this._state);
        if (state.selectKuangName === btn.name) {
            state.selectKuangName = '';
        } else {

            state.selectKuangName = btn.name;
        }

        this.updateState(state);
    }

    private _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.submit = this.submitType.GuideShow;
        state.submit = this.submitType.WrongFeed;
        state.submit = this.submitType.RightFeed;

        this.updateState(state);
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }


    // 获取状态
    getState(data: any) {
        this.updateState(data);
    }

    // 更新状态层
    updateState(curState: any) {
        if (globalThis._.isEqual(this._state, curState)) return;
        this.state = curState;
    }

    // 更新ui层
    updateUi(oldState: any, state: any) {

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            if (state.submit === this.submitType.RightFeed) {

                this.answerFeedback(true);

            } else if (state.submit === this.submitType.WrongFeed) {

                this.answerFeedback(false);

            } else if (state.submit === this.submitType.GuideShow) {

            }
        }
        if (!globalThis._.isEqual(oldState.keyNumber, state.keyNumber)) {

            if (state.keyNumber != '') {

                if (oldState.selectKuangName != state.selectKuangName) {

                    if (state.keyNumber === 'x') {

                    } else {
                        state.answerMap[state.selectKuangName] = state.keyNumber;
                    }

                } else {

                    if (state.keyNumber === 'x') {

                    } else {

                        state.answerMap[state.selectKuangName] += state.keyNumber;
                    }

                }

                setTimeout(() => {

                    let state2: any = globalThis._.cloneDeep(this._state);
                    state2.keyNumber = '';
                    state2.answerMap = state.answerMap;
                    this.updateState(state2);

                }, 0.02);
            }
        }

        if (!globalThis._.isEqual(oldState.answerMap, state.answerMap)) {

            for (let key in state.answerMap) {

                this._textMap[key].text = state.answerMap[key];
            }

        }


        if (!globalThis._.isEqual(oldState.selectKuangName, state.selectKuangName)) {


            if (state.selectKuangName != '') {

                this._selectMap[state.selectKuangName].visible = true;
            }

            if (oldState.selectKuangName != '') {

                this._selectMap[oldState.selectKuangName].visible = false;
            }
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    }


    async playTitle(bool: boolean) {
        this._c1.selectedIndex = bool ? 1 : 0;
        if (bool) {
            cc.audioEngine.stopAll();
            this.forbidHandle();
            let item = fgui.UIPackage.getItemByURL(this._title["_sound"]);
            let audio: cc.AudioClip = await loadResource(item.file, cc.AudioClip);
            let audioId = cc.audioEngine.play(audio, false, 1);
            cc.audioEngine.setFinishCallback(audioId, () => {
                let state: any = globalThis._.cloneDeep(this._state);
                state.title = false;
                this.updateState(state);
            });
        } else {
            this.disableForbidHandle();
        }
    }

    answerFeedback(bool: boolean) {
        if (!this.feedback) return;
        let feedback: any = cc.instantiate(this.feedback);
        feedback.x = 960;
        feedback.y = 540;
        let feedbackJs: any = feedback.getComponent(cc.Component);
        feedbackJs.init(bool);
        feedback.parent = cc.find("Canvas").parent;

        setTimeout(() => {
            feedback.destroy();
            let state: any = globalThis._.cloneDeep(this._state);
            state.submit = this.submitType.No;
            this.updateState(state);
        }, 2000);
    }


    /**
     * 点击指引
     * @param obj 点击对象
     */
    handTips2(obj: fgui.GObject) {
        let hand = fgui.UIPackage.createObject(this._package, 'hand');
        this._view.addChild(hand);
        let tempX = obj.x;
        let tempY = obj.y;

        hand.x = tempX;
        hand.y = tempY;

        cc.tween(hand).to(0.3, {
            x: tempX - 30,
            y: tempY - 30
        }).to(0.3, {
            x: tempX,
            y: tempY
        }).to(0.3, {
            x: tempX - 30,
            y: tempY - 30
        }).to(0.3, {
            x: tempX,
            y: tempY
        }).call(() => {
            this._view.removeChild(hand);
            hand = null;
            let state: any = globalThis._.cloneDeep(this._state);
            state.submit = this.submitType.No;
            this.updateState(state)
        }).start();
    }

    // 运行时 禁止操作
    forbidHandle() {
        console.log('===  运行时 禁止操作 =====');
        let handleMask = this._worldRoot.getChildByName('handleMask');
        if (!handleMask) {
            let handleMask = new cc.Node('handleMask');
            handleMask.addComponent(cc.BlockInputEvents);
            handleMask.parent = this._worldRoot;
            handleMask.width = 1920;
            handleMask.height = 1080;
            handleMask.x = 960;
            handleMask.y = 540;
        }
    }

    // 消除禁止
    disableForbidHandle() {
        let handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask) handleMask.destroy();
    }

    // 注册状态，及获取状态的方法
    registerState() {
        if (window['GlobalData'].sample.registerState) window['GlobalData'].sample.registerState.call(this);
    }

    // 解除状态，及获取状态的方法
    relieveState() {
        if (window['GlobalData'].sample.relieveState) window['GlobalData'].sample.relieveState.call(this);
    }

    // 本组件状态合并到全局
    mergeState() {
        if (window['GlobalData'].sample.mergeState) window['GlobalData'].sample.mergeState.call(this);
    }

    onEnable() {
        this.registerState();
    }

    onDisable() {
        cc.tween(this).stop();
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
