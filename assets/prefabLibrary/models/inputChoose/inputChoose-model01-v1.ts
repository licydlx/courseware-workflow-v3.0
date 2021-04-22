/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-22 21:05:08
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class inputChoose_model01_v1 extends cc.Component {
    private _view: fgui.GComponent;         // 主界面
    private _chooseBox: fgui.GButton;       // 输入盒子
    private _numInput: fgui.GButton;        // 文本显示框
    private _clearBtn: fgui.GButton;        // 清空按钮
    private _submit: fgui.GButton;          // 提交
    private _numBtns = [];
    private _answer = 0;                    // 答案

    private handleGuide: any;
    private rightFeed: any;
    private errorFeed: any;

    private _state = {};

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this._state = v;
        this.updateUi(this._state);
        this.mergeState();
    }

    onLoad() {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        fgui.GRoot.inst.addChild(this._view);
        
        this._submit = this._view.getChild("submit").asButton;
        this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._numInput = this._view.getChild("numInput").asButton;
        this._numInput.on(fgui.Event.CLICK, this._clickNumInput, this);

        this._chooseBox = this._view.getChild("chooseBox").asButton;
        this._chooseBox.visible = false;

        this._clearBtn = this._chooseBox.getChild("clearBtn").asButton;
        this._clearBtn.on(fgui.Event.CLICK, this._clickClearBtn, this);

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
            answer: false
        }

    }

    init(data: any) {
        
        // 临时 model component json 配置加载
        let { Package, GComponent, config } = data;
        let { answer, ae } = config;

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
    }

    // 点击 显示输入处
    private _clickNumInput(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);
        state.chooseBox = !state.chooseBox;
        
        state.answer =  parseInt(state.numInput) === this._answer;
        this.updateState(state);
    }

    // 点击 清空输入
    private _clickClearBtn(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);
        state.numInput = "";
        state.answer = state.drops === this._answer;
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
    updateUi(state: any) {
        this._chooseBox.visible = state.chooseBox;
        let title:fgui.GObject = this._numInput.getChild("title");
        title.text = state.numInput;
        if (state.submit) {
            if (state.numInput) {
                this.answerFeedback(state.answer);
            } else {
                this.onHandleGuide();
            }
        }
    }

    answerFeedback(bool: boolean) {
        let state: any = globalThis._.cloneDeep(this._state);
        let component: any;
        let pos: any;
        if (bool) {
            component = this.rightFeed.component;
            pos = this.rightFeed.pos;
        } else {
            component = this.errorFeed.component;
            pos = this.errorFeed.pos;
        }

        fgui.GRoot.inst.addChild(component);
        if (pos) {
            component.x = (fgui.GRoot.inst.width - component.width) / 2 + pos.x;
            component.y = (fgui.GRoot.inst.height - component.height) / 2 + pos.y;
        } else {
            component.y = (fgui.GRoot.inst.height - component.height) / 2;
        }

        let t: fgui.Transition = component.getTransition("t0");
        t.play(() => {
            fgui.GRoot.inst.removeChild(component);

            state.submit = false;
            this.updateState(state);
        }, 2);
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
    }

}
