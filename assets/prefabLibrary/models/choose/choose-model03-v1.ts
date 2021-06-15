/*
 * @Descripttion: 
 * @version: 
 * @Author: ruzhuan
 * @Date: 2021-06-07 14:40:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-06-07 14:40:00
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass, property } = cc._decorator;

@ccclass
export default class choose_model03_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    // 选项集合
    private _options = [];

    private _selectLights = [];

    private _rightSoundFile = [];

    private _magicPen: fgui.GButton;

    private _magicPenData = [];

    private _optionsRect = [];

    private _package: any;

    private _maskBg: fgui.GGraph;

    private _labaguai: fgui.GButton;

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

    onLoad() {
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

        this._maskBg = this._view.getChild("maskBg").asGraph;
        this._maskBg.visible = true;

        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;
        let optionGroup = this._view.getChild("optionBox").asGroup;

        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == optionGroup) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                btn.on(fgui.Event.CLICK, this._clickOption, this);
                this._options.push(btn);

                let tempRect = new cc.Rect(btn.x - btn.width / 2, btn.y - btn.height / 2, btn.width, btn.height);
                this._optionsRect.push(tempRect);

                if (this._options.length <= 2) {
                    let item = fgui.UIPackage.getItemByURL(btn.sound);
                    this._rightSoundFile.push(item.file);
                }
            }
        }

        let lightGroup = this._view.getChild("selectLight").asGroup;

        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == lightGroup) {
                let node: fgui.GImage = this._view.getChildAt(i).asImage;
                node.visible = false;
                this._selectLights.push(node);
            }
        }


        this._labaguai = this._view.getChild("labaguai").asButton;
        if (this._labaguai) this._labaguai.on(fgui.Event.CLICK, this._clickLaBaGuai, this);

        this._magicPen = this._view.getChild("magicPen").asButton;
        this._magicPen.draggable = true;

        this._magicPenData = [{ icon: this._magicPen.icon, x: 1743, y: 466 }, { icon: this._magicPen.selectedIcon, x: 1743, y: 466 }];

        this._magicPen.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
        this._magicPen.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        this._magicPen.on(fgui.Event.TOUCH_END, this._onDragEnd, this);

        // 初始化state
        this._state = {
            title: false,
            laBaGuaiPlay: false,
            submit: false,
            move: false,
            lightSelect: []
        }

        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback: any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { type, ae } = model.config;
        this._package = Package;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

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

    private _onDragStart(evt: fgui.Event): void {
        evt.captureTouch();
        let state: any = globalThis._.cloneDeep(this._state);
        state.move = true;

        this.updateState(state);

    }

    private _onDragMove(evt: fgui.Event): void {



    }

    private _onDragEnd(evt: fgui.Event): void {

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let btnRect = new cc.Rect(btn.x - btn.width / 2, btn.y - btn.height / 2, btn.width, btn.height);

        let state: any = globalThis._.cloneDeep(this._state);
        state.move = false;
        for (let i = 0; i < this._optionsRect.length; i++) {

            if (this._optionsRect[i].intersects(btnRect)) {
                state.lightSelect.push(i);
                break;
            }
        }

        this.updateState(state);
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private _clickLaBaGuai(evt: any) {
        console.log('=== 点击喇叭怪 ====');
        let state: any = globalThis._.cloneDeep(this._state);
        state.laBaGuaiPlay = true;
        this.updateState(state);
    }

    private async _clickOption(evt: any) {
        cc.audioEngine.stopAllEffects();

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        var btn2: fgui.GButton = btn.asButton;
        let item = fgui.UIPackage.getItemByURL(btn2.sound);
        let audio: cc.AudioClip = await loadResource(item.file, cc.AudioClip);
        cc.audioEngine.play(audio, false, 1);
    }

    private _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        if (state.lightSelect.length === 0) {
            state.submit = this.submitType.GuideShow;
        } else {

            let isHave0 = false;
            let isHave1 = false;
            for (let i = 0; i < state.lightSelect.length; i++) {
                if (state.lightSelect[i] === 0) {
                    isHave0 = true;
                } else if (state.lightSelect[i] === 1) {
                    isHave1 = true;
                }
            }
            if (isHave0 && isHave1) {
                state.submit = this.submitType.RightFeed;
            } else {
                state.submit = this.submitType.WrongFeed;
            }
        }

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

            // 控制反馈动画和指引动画
            if (state.submit === this.submitType.GuideShow) {

                this.handTips2(this._labaguai);
            } else if (state.submit === this.submitType.WrongFeed) {
                this.answerFeedback(false);
            } else if (state.submit === this.submitType.RightFeed) {

                this.answerFeedback(true);
            }
        }

        if (!globalThis._.isEqual(oldState.laBaGuaiPlay, state.laBaGuaiPlay)) {
            this.playLaBaGuai(state.laBaGuaiPlay);
        }

        if (!globalThis._.isEqual(oldState.move, state.move)) {

            if (state.move) {

                this._magicPen.icon = this._magicPenData[1].icon;

            } else {

                this._magicPen.icon = this._magicPenData[0].icon;
                this._magicPen.x = this._magicPenData[0].x;
                this._magicPen.y = this._magicPenData[0].y;
            }
        }

        if (!globalThis._.isEqual(oldState.lightSelect, state.lightSelect)) {

            for (let i = 0; i < this._selectLights.length; i++) {

                let isHave = false;
                for (let j = 0; j < state.lightSelect.length; j++) {

                    if (i === state.lightSelect[j]) {

                        isHave = true;
                        break;
                    }
                }
                if (isHave) {
                    this._selectLights[i].visible = true;
                } else {
                    this._selectLights[i].visible = false;
                }
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

    playLaBaGuai(bool: boolean) {
        if (bool) {
            console.log('===== playLaBaGuai 111 ====' + bool);
            cc.audioEngine.stopAll();
            this.forbidHandle();
            let curIndex = 0;
            this.playRightSound(curIndex);

        } else {
            this.disableForbidHandle();
        }
    }

    async playRightSound(curIndex: number) {

        console.log('===== playLaBaGuai 2222 ====' + this._rightSoundFile[curIndex]);

        let audio: cc.AudioClip = await loadResource(this._rightSoundFile[curIndex], cc.AudioClip);
        let audioId = cc.audioEngine.play(audio, false, 1);
        cc.audioEngine.setFinishCallback(audioId, () => {
            if (curIndex >= this._rightSoundFile.length - 1) {

                this._maskBg.visible = false;

                let state: any = globalThis._.cloneDeep(this._state);
                state.laBaGuaiPlay = false;
                this.updateState(state);

            } else {
                curIndex++;
                this.playRightSound(curIndex);
            }

        });

    }

    answerFeedback(bool: boolean) {
        if (!this.feedback) return;
        let state: any = globalThis._.cloneDeep(this._state);
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
        let tempX = obj.x + obj.width / 2;
        let tempY = obj.y + obj.height / 2;

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
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
