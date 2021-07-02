
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

    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    // 选项集合
    private _options = {};

    private _lightSelect = {};

    private _rightSoundFile = [];

    private _magicPen: fgui.GButton;

    private _magicPenData = [];

    private _optionsRect = {};

    private _package: any;

    private _labaguai: fgui.GButton;

    private _isAnimateShow: boolean = false;

    private _soundFile = {};

    private _animateName = {};

    private _rigthName = [];

    private _clickSound: cc.AudioClip;

    private _dragSound: cc.AudioClip;

    private _laba2: fgui.GLoader3D;

    private _guideName: string;

    private _overAnimShow: fgui.GGroup;
    private _overObjs = {};

    private _scheduleTime = 0.3;
    private _dragging = false;
    private _cachDragPos = { x: 0, y: 0 }

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

        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;
        let optionGroup = this._view.getChild("optionBox").asGroup;

        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == optionGroup) {
                let btn = null;
                if (this._isAnimateShow) {

                    btn = this._view.getChildAt(i) as fgui.GLoader3D;
                    btn.animationName = this._animateName[btn.name].idle;
                    btn.skinName = this._animateName[btn.name].skin;
                    btn.url = "ui://733aoo45gzaz72";

                } else {
                    btn = this._view.getChildAt(i).asButton;
                }

                btn.on(fgui.Event.CLICK, this._clickOption, this);
                this._options[btn.name] = btn;
            }
        }

        let lightGroup = this._view.getChild("selectLight").asGroup;
        let tempLight = {};

        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == lightGroup) {
                let node: fgui.GImage = this._view.getChildAt(i).asImage;
                node.visible = false;
                let subName = node.name.substring(0, node.name.indexOf('_'));
                this._lightSelect[subName] = node;
                tempLight[subName] = false;
            }
        }

        this._labaguai = this._view.getChild("labaguai").asButton;
        if (this._labaguai) this._labaguai.on(fgui.Event.CLICK, this._clickLaBaGuai, this);

        this._laba2 = this._view.getChild("laba2") as fgui.GLoader3D;
        this._laba2.animationName = 'idle';
        if (this._laba2) this._laba2.on(fgui.Event.CLICK, this._clickLaBaGuai, this);

        this._magicPen = this._view.getChild("magicPen").asButton;
        this._magicPen.draggable = true;
        this._cachDragPos.x = this._magicPen.x;
        this._cachDragPos.y = this._magicPen.y;

        this._magicPenData = [{ icon: this._magicPen.icon, x: 1743, y: 466 }, { icon: this._magicPen.selectedIcon, x: 1743, y: 466 }];

        this._magicPen.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
        this._magicPen.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        this._magicPen.on(fgui.Event.TOUCH_END, this._onDragEnd, this);

        // 初始化state
        this._state = {
            title: false,
            laBaGuaiPlay: false,
            submit: false,
            lightSelect: tempLight,
            clickPlayName: '',
            magicDragPen: this._cachDragPos,
            drag: 'no',
            isLabaguaiHaveClick: false,
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
        let { isAnimateShow, soundFile, rightSoundFile, animateName, rightName, optionsRect, guideName } = model.config;
        this._package = Package;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        if (isAnimateShow) this._isAnimateShow = isAnimateShow;
        if (soundFile) this._soundFile = soundFile;
        if (rightSoundFile) {

            for (let i = 0; i < rightSoundFile.length; i++) {
                let item = fgui.UIPackage.getItemByURL(rightSoundFile[i].path);
                let tempMap = { 'path': item, 'time': rightSoundFile[i].time };
                this._rightSoundFile.push(tempMap);
            }
        }
        if (animateName) this._animateName = animateName;
        if (rightName) this._rigthName = rightName;

        if (optionsRect) {

            for (var key in optionsRect) {

                let tempRect = new cc.Rect(optionsRect[key].x, optionsRect[key].y, optionsRect[key].width, optionsRect[key].height);
                this._optionsRect[key] = tempRect;
            }
        }

        if (guideName) this._guideName = guideName;

        let item = fgui.UIPackage.getItemByURL('ui://733aoo45r3754k');
        this._clickSound = await loadResource(item.file, cc.AudioClip);

        item = fgui.UIPackage.getItemByURL('ui://733aoo45r3754l');
        this._dragSound = await loadResource(item.file, cc.AudioClip);

        this._overAnimShow = this._view.getChild("overAnimShow").asGroup;
        this._overAnimShow.visible = false;

        let len = 0;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == this._overAnimShow) {
                let btn = this._view.getChildAt(i) as fgui.GLoader3D;
                if (btn.name === 'overBg') {
                    continue;
                }
                btn.name = this._rigthName[len];
                btn.animationName = this._animateName[btn.name].idle;
                btn.skinName = this._animateName[btn.name].skin;
                btn.url = "ui://733aoo45gzaz72";
                this._overObjs[btn.name] = btn;
                len++;
            }
        }

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
        state.drag = 'start';
        this.updateState(state);

    }

    private _onDragMove(evt: fgui.Event): void {

        this._dragging = true;

    }

    private _onDragEnd(evt: fgui.Event): void {
        this._dragging = false;

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let btnRect = new cc.Rect(btn.x - btn.width / 2, btn.y - btn.height / 2, btn.width, btn.height);

        let state: any = globalThis._.cloneDeep(this._state);
        state.drag = 'end';
        for (var key in this._optionsRect) {

            let rect = this._optionsRect[key];
            if (rect.intersects(btnRect)) {

                state.lightSelect[key] = !state.lightSelect[key];
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

        let state: any = globalThis._.cloneDeep(this._state);
        state.laBaGuaiPlay = true;
        state.clickPlayName = '';
        if (!state.isLabaguaiHaveClick) {
            state.isLabaguaiHaveClick = true;
        }
        this.updateState(state);
    }

    private async _clickOption(evt: any) {

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let state: any = globalThis._.cloneDeep(this._state);
        state.clickPlayName = btn.name;
        this.updateState(state);
    }

    private _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        let num = 0;
        let submitNames = [];
        for (var key in state.lightSelect) {

            if (state.lightSelect[key]) {
                num++;
                submitNames.push(key);
            }
        }
        if (num === 0) {
            state.submit = this.submitType.GuideShow;
        } else {

            let submitNamesTemp = submitNames.sort();
            let right = this._rigthName.sort();
            if (JSON.stringify(submitNamesTemp) === JSON.stringify(right)) {
                state.submit = this.submitType.RightFeed;

            } else {
                state.submit = this.submitType.WrongFeed;
            }
        }
        this.updateState(state);
    }

    // 临时
    // 拖拽定时器
    dragSchedule() {
        if (this._dragging) {
            let state: any = globalThis._.cloneDeep(this._state);
            state.drag = "move";
            state.magicDragPen = {
                x: this._magicPen.x,
                y: this._magicPen.y,
            };
            this.updateState(state);
        }
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

        if (state.drag == "move") {

            this._magicPen.x = state.magicDragPen.x;
            this._magicPen.y = state.magicDragPen.y;

        } else if (state.drag == "start") {

            cc.audioEngine.playEffect(this._clickSound, false);
            this._magicPen.icon = this._magicPenData[1].icon;

        } else if (state.drag == "end") {

            cc.audioEngine.playEffect(this._dragSound, false);

            this._magicPen.x = this._cachDragPos.x;
            this._magicPen.y = this._cachDragPos.y;

            this._magicPen.icon = this._magicPenData[0].icon;

            setTimeout(() => {
                let state2: any = globalThis._.cloneDeep(this._state);
                state2.drag = 'no';
                this.updateState(state2);

            }, 50);
        }

        if (!globalThis._.isEqual(oldState.isLabaguaiHaveClick, state.isLabaguaiHaveClick)) {

            if (state.isLabaguaiHaveClick) {

                for (let key in this._options) {

                    let btn = this._options[key];
                    btn.touchable = false;
                }

            } else {

                for (let key in this._options) {

                    let btn = this._options[key];
                    btn.touchable = true;
                }
            }

        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            if (state.submit !== this.submitType.No) {
                cc.audioEngine.playEffect(this._clickSound, false);
            }

            // 控制反馈动画和指引动画
            if (state.submit === this.submitType.GuideShow) {

                this.handTips1(this._magicPen, this._options[this._guideName]);

            } else if (state.submit === this.submitType.WrongFeed) {
                this.answerFeedback(false);
            } else if (state.submit === this.submitType.RightFeed) {

                this.playOverShowAnimate();
            }
        }

        if (!globalThis._.isEqual(oldState.clickPlayName, state.clickPlayName)) {

            if (state.clickPlayName != '') {

                this.playClickYueQi(state.clickPlayName);
            }
        }

        if (!globalThis._.isEqual(oldState.laBaGuaiPlay, state.laBaGuaiPlay)) {
            this.playLaBaGuai(state.laBaGuaiPlay);
        }

        if (!globalThis._.isEqual(oldState.lightSelect, state.lightSelect)) {

            for (var key in state.lightSelect) {

                this._lightSelect[key].visible = state.lightSelect[key];
            }
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    }


    async playOverShowAnimate() {

        cc.audioEngine.stopAllEffects();
        this._overAnimShow.visible = true;

        let item1 = fgui.UIPackage.getItemByURL(this._soundFile[this._rigthName[0]].path);
        let audio: cc.AudioClip = await loadResource(item1.file, cc.AudioClip);
        cc.audioEngine.play(audio, false, 1);

        this._overObjs[this._rigthName[0]].animationName = this._animateName[this._rigthName[0]].play;

        cc.tween(this._overObjs[this._rigthName[0]])
            .delay(this._soundFile[this._rigthName[0]].time)
            .call(() => {

                this._overObjs[this._rigthName[0]].animationName = this._animateName[this._rigthName[0]].idle;

                if (this._soundFile[this._rigthName[0]].time >= this._soundFile[this._rigthName[1]].time) {

                    this._overAnimShow.visible = false;
                    this.answerFeedback(true);
                }

            })
            .start();

        let item2 = fgui.UIPackage.getItemByURL(this._soundFile[this._rigthName[1]].path);
        let audio2: cc.AudioClip = await loadResource(item2.file, cc.AudioClip);
        cc.audioEngine.play(audio2, false, 1);

        this._overObjs[this._rigthName[1]].animationName = this._animateName[this._rigthName[1]].play;

        cc.tween(this._overObjs[this._rigthName[1]])
            .delay(this._soundFile[this._rigthName[1]].time)
            .call(() => {

                this._overObjs[this._rigthName[1]].animationName = this._animateName[this._rigthName[1]].idle;
                if (this._soundFile[this._rigthName[1]].time > this._soundFile[this._rigthName[0]].time) {

                    this._overAnimShow.visible = false;
                    this.answerFeedback(true);
                }
            })
            .start();
    }

    async playClickYueQi(name: string) {

        cc.audioEngine.stopAllEffects();
        if (this._isAnimateShow) {
            for (let key in this._options) {

                let btn1 = this._options[key];
                let btnTemp1 = btn1 as fgui.GLoader3D;
                btnTemp1.animationName = this._animateName[btn1.name].idle;
            }
        }

        let btn = this._options[name];
        let item = null;
        item = fgui.UIPackage.getItemByURL(this._soundFile[name].path);
        let audio: cc.AudioClip = await loadResource(item.file, cc.AudioClip);
        cc.audioEngine.play(audio, false, 1);
        if (this._isAnimateShow) {

            let btnTemp = btn as fgui.GLoader3D;
            btnTemp.animationName = this._animateName[btn.name].play;
        }

        cc.tween(this)
            .delay(this._soundFile[name].time)
            .call(() => {

                if (this._isAnimateShow) {

                    let btnTemp = btn as fgui.GLoader3D;
                    btnTemp.animationName = this._animateName[btn.name].idle;
                }

                let state: any = globalThis._.cloneDeep(this._state);
                state.clickPlayName = '';
                this.updateState(state);

            })
            .start();


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
            cc.audioEngine.stopAll();
            this.forbidHandle();
            let curIndex = 0;
            this._laba2.animationName = 'play';
            this.playRightSound(curIndex);

        } else {
            this.disableForbidHandle();
        }
    }

    async playRightSound(curIndex: number) {

        let audio: cc.AudioClip = await loadResource(this._rightSoundFile[curIndex].path.file, cc.AudioClip);
        cc.audioEngine.play(audio, false, 1);

        cc.tween(this._labaguai)
            .delay(this._rightSoundFile[curIndex].time)
            .call(() => {

                if (curIndex >= this._rightSoundFile.length - 1) {

                    this._laba2.animationName = 'idle';
                    let state: any = globalThis._.cloneDeep(this._state);
                    state.laBaGuaiPlay = false;
                    this.updateState(state);

                } else {

                    cc.tween(this)
                        .delay(1.0)
                        .call(() => {
                            curIndex++;
                            this.playRightSound(curIndex);

                        })
                        .start()
                }

            })
            .start();
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
    * 拖动指引
    * @param fromObj start
    * @param toObj end
    */
    handTips1(fromObj: fgui.GObject, toObj: fgui.GObject) {
        let hand = fgui.UIPackage.createObject(this._package, 'hand');
        this._view.addChild(hand);
        hand.x = fromObj.x;
        hand.y = fromObj.y;
        cc.tween(hand).to(0.8, {
            x: toObj.x,
            y: toObj.y
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
        this.schedule(this.dragSchedule, this._scheduleTime);
    }

    onDisable() {
        cc.Tween.stopAll();
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
