
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
export default class choose_model03_v3 extends cc.Component {
    private _worldRoot: cc.Node;

    private _view: fgui.GComponent;

    private _c1: fgui.Controller;

    private _c2: fgui.Controller;

    private _paoShow: any = [];

    private _chooseBtn: any = [];

    private _selectIcons: any = [];

    private _chooseCach: any = [];

    private _title: fgui.GButton;

    private _titleTrigger: fgui.GLoader;

    private _submitBtn: fgui.GButton;

    private _package: any;

    private _boxSound: cc.AudioClip;

    private _mask: fgui.GGraph;

    private _guidIndex: number = 0;

    private _box3D: fgui.GLoader3D;

    private _boxSoundTime: number;

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


        this._mask = this._view.getChild('maskBg').asGraph;
        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");

        // 臨時
        // bug 初始设置不播放不生效
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        this._box3D = this._view.getChild("box") as fgui.GLoader3D;
        this._box3D.on(fgui.Event.CLICK, this._clickBox, this);
        this._box3D.url = "ui://733aoo45gzaz75";
        this._box3D.animationName = 'sjq_idle';

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;

        this._submitBtn = this._view.getChild("submit").asButton;
        if (this._submitBtn) this._submitBtn.on(fgui.Event.CLICK, this._clickSubmit, this);

        let paoGroup = this._view.getChild("pao").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == paoGroup) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                btn.alpha = 0;
                this._paoShow.push(btn);
            }
        }

        let chooseGroup = this._view.getChild("choose").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == chooseGroup) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                btn.data = { index: this._chooseCach.length };
                let temp = { index: this._chooseCach.length, selected: false };
                this._chooseCach.push(temp);
                this._chooseBtn.push(btn);
                btn.on(fgui.Event.CLICK, this._clickChoose, this);
            }
        }

        let selectedGroup = this._view.getChild("select").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == selectedGroup) {
                let icon: fgui.GImage = this._view.getChildAt(i).asImage;
                icon.visible = false;
                this._selectIcons.push(icon);
            }
        }

        // 初始化state
        this._state = {
            title: false,
            boxPlay: false,
            canChoose: false,
            chooseCach: this._chooseCach,
            submit: this.submitType.No,
        }

        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback: any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
        cc.audioEngine.stopAll();
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { boxSoundUrl, guidIndex, boxSoundTime } = model.config;
        this._package = Package;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        let item = fgui.UIPackage.getItemByURL(boxSoundUrl);
        this._boxSound = await loadResource(item.file, cc.AudioClip);

        if (guidIndex) this._guidIndex = guidIndex;

        if (boxSoundTime) this._boxSoundTime = boxSoundTime;

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

    private _clickChoose(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        let obj: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let btn: fgui.GButton = obj.asButton;

        for (let i = 0; i < state.chooseCach.length; i++) {
            state.chooseCach[i].selected = false;
        }
        for (let i = 0; i < state.chooseCach.length; i++) {
            if (state.chooseCach[i].index === btn.data.index) {
                state.chooseCach[i].selected = true;
                break;
            }
        }
        this.updateState(state);
    }

    private _clickSubmit(evt: any) {

        let state: any = globalThis._.cloneDeep(this._state);

        let isHave = 0;
        for (let i = 0; i < state.chooseCach.length; i++) {

            if (state.chooseCach[i].selected) {
                isHave++;
            }
        }

        if (isHave === 0) {
            state.submit = this.submitType.GuideShow;
        } else if (isHave === 1) {

            state.submit = this.submitType.WrongFeed;

            for (let i = 0; i < state.chooseCach.length; i++) {

                if (state.chooseCach[i].selected && state.chooseCach[i].index === 0) {

                    state.submit = this.submitType.RightFeed;
                    break;
                }
            }

        } else {
            state.submit = this.submitType.WrongFeed;
        }

        this.updateState(state);
    }

    private _clickBox(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.boxPlay = true;
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

        if (!globalThis._.isEqual(oldState.boxPlay, state.boxPlay)) {
            if (state.boxPlay) {
                this.playBoxSpeak(state.boxPlay);
            } else {
                this._box3D.animationName = 'sjq_idle';
                this._c2.selectedIndex = 0;
            }
        }

        if (!globalThis._.isEqual(oldState.chooseCach, state.chooseCach)) {

            for (let i = 0; i < state.chooseCach.length; i++) {

                for (let j = 0; j < this._selectIcons.length; j++) {
                    if (state.chooseCach[i].index === j) {
                        this._selectIcons[j].visible = state.chooseCach[i].selected;
                        break;
                    }
                }
            }
        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            if (state.submit === this.submitType.RightFeed) {

                this.answerFeedback(true);

            } else if (state.submit === this.submitType.WrongFeed) {

                this.answerFeedback(false);

            } else if (state.submit === this.submitType.GuideShow) {

                this.handTips2(this._chooseBtn[this._guidIndex]);
            }
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }

        if (!globalThis._.isEqual(oldState.canChoose, state.canChoose)) {
            this._mask.visible = !state.canChoose;
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

    playBoxSpeak(bool: boolean) {
        if (bool) {

            this._box3D.animationName = 'sjq_idle1to2';

            cc.tween(this._box3D)
                .delay(0.3)
                .call(() => {
                    this._box3D.animationName = 'sjq_idle2';
                })
                .start()

            cc.audioEngine.stopAll();
            this.forbidHandle();
            this.playBoxSound();

        } else {
            this._c2.selectedIndex = 0;
            this.disableForbidHandle();
        }
    }

    async playBoxSound() {

        for (let i = 0; i < this._paoShow.length; i++) {
            this._paoShow[i].alpha = 0;
        }

        cc.tween(this)
            .delay(0.5)
            .call(() => {

                this._c2.selectedIndex = 1;
                this.playPaoShowAnimate(0);
            })
            .start();

        cc.audioEngine.play(this._boxSound, false, 1);

        cc.tween(this)
            .delay(this._boxSoundTime)
            .call(() => {

                this._box3D.animationName = 'sjq_idle';
                this.disableForbidHandle();
                for (let i = 0; i < this._paoShow.length; i++) {
                    this._paoShow[i].alpha = 0;
                }
                this._c2.selectedIndex = 0;
                let state: any = globalThis._.cloneDeep(this._state);
                state.boxPlay = false;
                state.canChoose = true;
                this.updateState(state);

            })
            .start();
    }

    playPaoShowAnimate(index: number) {

        cc.tween(this._paoShow[index])
            .to(1.0, { alpha: 1 })
            .call(() => {
                if (!this._paoShow) {
                    return;
                }
                index++;
                if (index < this._paoShow.length) {
                    this.playPaoShowAnimate(index);
                }
            })
            .start()

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

        cc.Tween.stopAll();
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
