/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-05-07 14:34:26
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-26 16:23:56
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;

const { ccclass, property } = cc._decorator;


interface StateType {
    gameStart: boolean,
    isShowEnd: boolean,
    clickImgs: boolean[],
    checkAnswer: boolean,



   
    title: boolean,
    submit: boolean,
    answer: boolean,
}

const IMAGE_MOVE_TIME = 0.2;

@ccclass
export default class chooseMoreAnswer_t2_04_l2 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;

    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _submit: fgui.GButton;
    private _startBtn: fgui.GButton;

    private _title: fgui.GButton;

    private _titleTrigger: fgui.GLoader;

    // fairygui 组件
    private handleGuide: any;
    private lineBlink: any;

    private _scrollingImage: fgui.GImage[] = [];
    private _clickImage: fgui.GButton[] = [];

    // 远程动态组件
    private feedback: any;

    private _cache = {};

    private _answer = 0;

    private _state: StateType = {} as StateType;

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
        this._c2 = this._view.getController("c2");
        // 臨時
        // bug 初始设置不播放不生效
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }

        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        // this._checkAnswer = this._view.getChild("result").asButton;
        // if (this._checkAnswer) this._checkAnswer.on(fgui.Event.CLICK, this._checkAnswerCb, this);

        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        this._startBtn = this._view.getChild("startBtn").asButton;
        if (this._startBtn) this._startBtn.on(fgui.Event.CLICK, this._clickStartBtn, this);

        let scrollingImage = this._view.getChild("moveImage").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == scrollingImage) {
                let img: fgui.GImage = this._view.getChildAt(i).asImage;
                img.x = 0;
                this._scrollingImage.push(img);
            }
        }
        let clickImage = this._view.getChild('clickImage').asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == clickImage) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                btn.on(fgui.Event.CLICK, this._clickChooseImage, this);
                this._clickImage.push(btn);
            }
        }

        // 初始化state
        this._state = {
            gameStart: false,
            isShowEnd: false,
            clickImgs: [false, false, false, false],
            checkAnswer: false,

           
            title: false,
            submit: false,
            answer: false,
        }

        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback: any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
    }

    _clickChooseImage(evt: any) {
        let target: any = fgui.GObject.cast(evt.currentTarget);
        let index = this._clickImage.findIndex(btn => btn == target);
        if (index != -1) {
            let state: StateType = globalThis._.cloneDeep(this._state);
            state.clickImgs[index] = state.clickImgs[index] ? false : true;
            console.log('state.clickImgs:', state.clickImgs);
            this.updateState(state);
        }
    }

    showScrollImage() {
        let index = 0;
        let showAni = (i: number) => {
            let node: cc.Node = this._scrollingImage[i].node;
            cc.tween(node).to(IMAGE_MOVE_TIME, { position: cc.v3(node.x + this._view.width + node.width, node.y, 0) }).call(() => {
                let next = ++index;
                if (next >= this._scrollingImage.length) {
                    index = undefined;
                    let state: StateType = globalThis._.cloneDeep(this._state);
                    state.isShowEnd = true;
                    this.updateState(state);
                } else {
                    showAni(next);
                }
            }).start();
        }
        showAni(index);
    }


    setINitPos() {

    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;


        if (model.uiPath) {
            let GComponent = model.uiPath;
            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        }

        if (model.config) {
            let { answer, ae, selfIndex } = model.config;
            if (answer) this._answer = answer;
            // 动效注册
            if (ae) {
                for (let v in ae) {
                    if (ae[v]) {
                        this[v] = {};
                        if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                        if (ae[v].pos) this[v].pos = ae[v].pos;
                    }
                }
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

    getOriginValue(v: any) {
        return {
            x: v.x,
            y: v.y
        }
    }


    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private _clickSubmit(evt: any) {
        cc.log('here', evt)
        let state: StateType = globalThis._.cloneDeep(this._state);
        // let tempState = state.checkAnswer
        state.checkAnswer = !state.checkAnswer;
        state.submit = true;
        state.answer = state.clickImgs.every(v => v);
        this.updateState(state);
    }
    private _clickStartBtn(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.gameStart = true;
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
    updateUi(oldState: StateType, state: StateType) {
        if (!globalThis._.isEqual(oldState.gameStart, state.gameStart)) {
            this._c1.selectedIndex = 1;
            this.showScrollImage();
        }
        if (!globalThis._.isEqual(oldState.isShowEnd, state.isShowEnd)) {
            this._c1.selectedIndex = 2;
            // this.showScrollImage();
        }
        if (!globalThis._.isEqual(oldState.clickImgs, state.clickImgs)) {
            //此处处理图片选中与否
            console.log('click image');
            this._clickImage.map((v,k)=>{
                v.selected = state.clickImgs[k];
            })
        }
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            //此处处理图片选中与否
            console.warn('click image');
            if (state.submit) {
                if (state.answer) {
                    this.answerFeedback(state.answer);
                } else {
                    let isTips = state.clickImgs.every(v => !v);
                    isTips ? this.onHandleGuide() : this.answerFeedback(state.answer);
                }
            }
        }

    }

    playSound(url: string) {
        let s = this;
        let item = fgui.UIPackage.getItemByURL(url);
        loadResource(item.file, cc.AudioClip).then((audio: cc.AudioClip) => {
            cc.audioEngine.play(audio, false, 1);
        });
    }

    // 播放 放置声效
    async playPlace() {
        cc.audioEngine.stopAll();
        let place = this._view.getChild("place").asButton;
        if (place) {
            let item = fgui.UIPackage.getItemByURL(place["_sound"]);
            let audio: cc.AudioClip = await loadResource(item.file, cc.AudioClip);
            cc.audioEngine.play(audio, false, 1);
        }
    }

    async playTitle(bool: boolean) {
        this._c2.selectedIndex = bool ? 1 : 0;
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

    /**
     * @name: 获取距离
     * @msg: 
     * @param {any} self
     * @param {any} area
     * @return {*}
     */
    private _getDistance(self: any, area: any) {
        let width = (self.x + self.width / 2) - (area.x + area.width / 2);
        let height = (self.y + self.height / 2) - (area.y + area.height / 2);
        let distance = Math.sqrt(width * width + height * height);
        return distance;
    }

    /**
     * @name: 区域所属判断
     * @msg: 
     * @param {any} self
     * @param {any} area
     * @param {number} gap
     * @return {*}
     */
    private _belongArea(self: any, area: any, gap: number = 10) {
        let width = (self.x + self.width / 2) - (area.x + area.width / 2);
        let height = (self.y + self.height / 2) - (area.y + area.height / 2);
        let distance = Math.sqrt(width * width + height * height);
        return distance < gap;
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
            state.submit = false;
            this.updateState(state);
        }, 2000);
    }

    // 格子闪烁 提示
    onFlicker(answer: any) {
        if (answer) {
            // let t: fgui.Transition = this._view.getTransition("t0");
            // t.play(() => {
            this.answerFeedback(answer);
            // });
        } else {
            this.answerFeedback(answer);
        }
    }

    // 操作提示
    onHandleGuide() {
        if (!this.handleGuide) return;
        let state: any = globalThis._.cloneDeep(this._state);
        fgui.GRoot.inst.addChild(this.handleGuide.component);
        if (this.handleGuide.pos) {
            this.handleGuide.component.x = (fgui.GRoot.inst.width - this.handleGuide.component.width) / 2 + this.handleGuide.pos.x;
            this.handleGuide.component.y = (fgui.GRoot.inst.height - this.handleGuide.component.height) / 2 + this.handleGuide.pos.y;
        } else {
            this.handleGuide.component.y = (fgui.GRoot.inst.height - this.handleGuide.component.height) / 2;
        }

        let t: fgui.Transition = this.handleGuide.component.getTransition("t0");
        t.play(() => {
            fgui.GRoot.inst.removeChild(this.handleGuide.component);
            state.submit = false;
            this.updateState(state);
        }, 2);
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

    // 临时
    // 拖拽定时器
    // dragSchedule() {
    //     if (this._dragging) {
    //         let state: any = globalThis._.cloneDeep(this._state);
    //         state.drag = "move";
    //         state.collider[state.colliderIndex] = {
    //             x: this._colliderBox[state.colliderIndex].x,
    //             y: this._colliderBox[state.colliderIndex].y,
    //         };
    //         this.updateState(state);
    //     }
    // }

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
        // this.schedule(this.dragSchedule, this._scheduleTime);
    }

    onDisable() {
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
