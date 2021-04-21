/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-21 22:28:42
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
    
    private handleGuide: any;
    private lineBlink: any;
    private rightFeed: any;
    private errorFeed: any;

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
                this.answerFeedback(state.answer);
            } else {
                this.onHandleGuide();
            }
        } else {
            if (!state.answer) {
                this.onLibraHint();
            }
        }
    }

    answerFeedback(bool:boolean){
        let state: any = globalThis._.cloneDeep(this._state);
        let component:any;
        let pos:any;
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

    // 天枰提示
    onLibraHint() {
        if (!this.lineBlink) return;
        fgui.GRoot.inst.addChild(this.lineBlink.component);
        if (this.lineBlink.pos) {
            this.lineBlink.component.x = (fgui.GRoot.inst.width - this.lineBlink.component.width) / 2 + this.lineBlink.pos.x;
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2 + this.lineBlink.pos.y;
        } else {
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2;
        }

        let t: fgui.Transition = this.lineBlink.component.getTransition("t0");
        t.play(() => {
            fgui.GRoot.inst.removeChild(this.lineBlink.component);
        });
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
