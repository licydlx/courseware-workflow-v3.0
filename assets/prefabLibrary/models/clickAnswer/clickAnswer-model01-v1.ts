/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-20 18:48:26
 */
const { pointBelongArea } = window['GlobalData'].utils;

const { ccclass, property } = cc._decorator;

@ccclass
export default class clcikAnswer_model01_v1 extends cc.Component {
    private _view: fgui.GComponent;
    private _c1: fgui.Controller;
    private _btnBox: fgui.GButton;
    private _submit: fgui.GButton;
    private _trigger: fgui.GButton;
    private _handleGuide01: fgui.GComponent;
    private _lineBlink01: fgui.GComponent;

    private _grids = [];
    private _answer = 0;

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

        // 控制器
        this._c1 = this._view.getController("c1");

        // submit 提交按钮
        this._submit = this._view.getChild("submit").asButton;
        this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        // trigger 触发器按钮
        this._trigger = this._view.getChild("triggerBtn").asButton;
        this._trigger.on(fgui.Event.CLICK, this._clickTrigger, this);

        // 容器天枰
        this._btnBox = this._view.getChild("btnBox").asButton;
        this._btnBox.on(fgui.Event.CLICK, this._clickLibra, this);

        // 天枰 子栏
        let aGroup = this._btnBox.getChild("grids").asGroup;
        for (let i = 0; i < this._btnBox.numChildren; i++) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                let grid: fgui.GLoader = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }

        // 初始化state
        this._state = {
            drops: 0,
            submit: false,
            answer: false
        }

    }

    init(data: any) {
        // 临时 model component json 配置加载
        let { Package, GComponent, config } = data;
        let { answer } = config;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        this._handleGuide01 = fgui.UIPackage.createObject(Package, "handleGuide01").asCom;
        this._lineBlink01 = fgui.UIPackage.createObject(Package, "lineBlink01").asCom;

        if (answer) this._answer = answer;
    }

    // 点击天枰 消除一个
    private _clickLibra(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);

        let index: number = this._grids.findIndex((v: any) => v.url === null);
        if (index !== 0) {
            let grid: fgui.GLoader = this._grids[index == -1 ? this._grids.length - 1 : index - 1];
            grid.url = null;

            state.drops = state.drops - 1;
            state.answer = state.drops === this._answer;
            this.updateState(state);
        }
    }

    // 触发器点击
    private _clickTrigger(evt: any): void {

        let state: any = globalThis._.cloneDeep(this._state);
        let icon: fgui.GLoader = this._trigger.getChild("icon").asLoader;
        let grid: fgui.GLoader = this._grids.find(v => v.url === null);
        if (grid) {
            grid.url = icon.url;
            state.drops = state.drops + 1;
        }

        state.answer = state.drops === this._answer;
        this.updateState(state);
    }

    // 提交点击
    private _clickSubmit(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);

        state.answer = state.drops === this._answer;
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
        for (let i = 0; i < this._grids.length; i++) {
            let grid: fgui.GLoader = this._grids[i];
            if (state.drops > i) {
                if (!grid.url) {
                    let icon: fgui.GLoader = this._trigger.getChild("icon").asLoader;
                    grid.url = icon.url;
                }
            } else {
                if (grid.url) grid.url = null;
            }
        }

        this._c1.selectedIndex = state.drops;

        if (state.submit) {
            if (state.drops) {
                if (state.answer) {

                } else {

                }
            } else {
                this.handleGuide();
            }
        }
    }

    // 天枰提示
    libraHint() {
        fgui.GRoot.inst.addChild(this._lineBlink01);
        this._lineBlink01.y = (fgui.GRoot.inst.height - this._lineBlink01.height) / 2;

        let t: fgui.Transition = this._lineBlink01.getTransition("t0");
        t.play(() => {
            fgui.GRoot.inst.removeChild(this._lineBlink01);
        });
    }

    // 操作提示
    handleGuide() {
        let state: any = globalThis._.cloneDeep(this._state);

        fgui.GRoot.inst.addChild(this._handleGuide01);
        this._handleGuide01.y = (fgui.GRoot.inst.height - this._handleGuide01.height) / 2;

        let t: fgui.Transition = this._handleGuide01.getTransition("t0");
        t.play(() => {
            fgui.GRoot.inst.removeChild(this._handleGuide01);

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
