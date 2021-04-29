/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-29 17:39:12
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass, property } = cc._decorator;

@ccclass
export default class inputChoose_model01_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;         // 主界面
    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _chooseBox: fgui.GButton;       // 输入盒子
    private _numInput: fgui.GButton;        // 文本显示框
    private _clearBtn: fgui.GButton;        // 清空按钮
    private _finishBtn: fgui.GButton;       // 输入完成按钮
    private _deleteBtn: fgui.GButton;       // 删去按钮
    private _submit: fgui.GButton;          // 提交
    private _numBtns = [];
    private _answer = 0;                    // 答案

    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    // fairygui 组件
    // 动效
    private handleGuide: any;
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

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;

        this._numInput = this._view.getChild("numInput").asButton;
        this._numInput.on(fgui.Event.CLICK, this._clickNumInput, this);

        this._chooseBox = this._view.getChild("chooseBox").asButton;
        this._chooseBox.visible = false;

        this._finishBtn = this._chooseBox.getChild("finishBtn").asButton;
        this._finishBtn.on(fgui.Event.CLICK, this._clickFinishBtn, this);

        this._deleteBtn = this._chooseBox.getChild("deleteBtn").asButton;
        this._deleteBtn.on(fgui.Event.CLICK, this._clickDeleteBtn, this);

        // numBtn 组
        let aGroup = this._chooseBox.getChild("numBox").asGroup;
        for (let i = 0; i < this._chooseBox.numChildren; i++) {
            if (this._chooseBox.getChildAt(i).group == aGroup) {
                let numBtn: fgui.GButton = this._chooseBox.getChildAt(i).asButton;
                this._numBtns.push(numBtn);
                numBtn.on(fgui.Event.CLICK, this._clickNumBtn, this);
            }
        }

        // 初始化state
        this._state = {
            numInput: "",
            chooseBox: false,
            submit: false,
            answer: false,
            title: false,
        }

        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { answer, ae } = model.config;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        // 动效注册
        for (let v in ae) {
            if (ae[v]) {
                this[v] = {};
                if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                if (ae[v].pos) this[v].pos = ae[v].pos;
            }
        }

        if (answer) this._answer = answer;
        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    // 点击 显示输入处
    private _clickNumInput(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);
        state.chooseBox = !state.chooseBox;

        state.answer = parseInt(state.numInput) === this._answer;
        this.updateState(state);
    }

    // // 点击 清空输入
    // private _clickClearBtn(evt: any): void {
    //     let state: any = globalThis._.cloneDeep(this._state);
    //     state.numInput = "";
    //     state.answer = state.drops === this._answer;
    //     this.updateState(state);
    // }


    // 输入完成 隐藏输入框
    private _clickFinishBtn(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);
        state.chooseBox = false;
        state.answer = parseInt(state.numInput) === this._answer;
        this.updateState(state);
    }

    // 删去一位
    private _clickDeleteBtn(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);

        if (state.numInput) {
            state.numInput = state.numInput.substring(0, state.numInput.length - 1);
        }

        state.answer = parseInt(state.numInput) === this._answer;
        this.updateState(state);
    }

    // 点击 文本框输入数字
    private _clickNumBtn(evt: any): void {
        let curObj: any = fgui.GObject.cast(evt.currentTarget);
        let index = this._numBtns.findIndex((v: any) => v == curObj);

        if (index !== -1) {
            let state: any = globalThis._.cloneDeep(this._state);
            if (state.numInput.length < 2) {
                state.numInput = state.numInput + index + "";
                state.answer = parseInt(state.numInput) === this._answer;
                this.updateState(state);
            }
        }
    }

    // 提交点击
    private _clickSubmit(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);

        state.chooseBox = false;
        state.answer = parseInt(state.numInput) === this._answer;
        state.submit = true;
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
        if (!globalThis._.isEqual(oldState.chooseBox, state.chooseBox)) {
            this._chooseBox.visible = state.chooseBox;
        }

        if (!globalThis._.isEqual(oldState.numInput, state.numInput)) {
            let title: fgui.GObject = this._numInput.getChild("title");
            title.text = state.numInput;
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                if (state.numInput) {
                    this.answerFeedback(state.answer);
                } else {
                    this.onHandleGuide();
                }
            }
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
