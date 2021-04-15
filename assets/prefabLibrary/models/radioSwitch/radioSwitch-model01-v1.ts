/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-14 14:19:39
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class radioSwitch_model01_v1 extends cc.Component {
    private _view: fgui.GComponent;
    private _radioSwitch1: fgui.Controller;  // 控制器1

    private _state = {}

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

        // radioSwitch 题型
        // 1.切换控制器
        this._radioSwitch1 = this._view.getController("radioSwitch1");
        this._radioSwitch1.on(fgui.Event.STATUS_CHANGED, this.onSwitchChanged, this);

        // 初始化state
        this._state = {
            selectedIndex:this._radioSwitch1.selectedIndex
        }
    }

    init(data: any) {
        let { Package, GComponent } = data;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
    }

    // 切换
    onSwitchChanged(evt:any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.selectedIndex = evt._selectedIndex;
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
        // 切换
        if (state.selectedIndex !== this._radioSwitch1.selectedIndex) {
            this._radioSwitch1.selectedIndex = state.selectedIndex;
        }
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
