"use strict";
cc._RF.push(module, 'e2903Q08CdDsbxFFPnHTXWq', 'radioSwitch-model01-v1');
// prefabLibrary/models/radioSwitch/radioSwitch-model01-v1.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 14:41:05
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var radioSwitch_model01_v1 = /** @class */ (function (_super) {
    __extends(radioSwitch_model01_v1, _super);
    function radioSwitch_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(radioSwitch_model01_v1.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (v) {
            this._state = v;
            this.updateUi(this._state);
            this.mergeState();
        },
        enumerable: false,
        configurable: true
    });
    radioSwitch_model01_v1.prototype.onLoad = function () {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        fgui.GRoot.inst.addChild(this._view);
        // radioSwitch 题型
        // 1.切换控制器
        this._radioSwitch1 = this._view.getController("radioSwitch1");
        this._radioSwitch1.on(fgui.Event.STATUS_CHANGED, this.onSwitchChanged, this);
        // 初始化state
        this._state = {
            selectedIndex: this._radioSwitch1.selectedIndex
        };
    };
    radioSwitch_model01_v1.prototype.init = function (data) {
        var Package = data.Package, GComponent = data.GComponent;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
    };
    // 切换
    radioSwitch_model01_v1.prototype.onSwitchChanged = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.selectedIndex = evt._selectedIndex;
        this.updateState(state);
    };
    // 获取状态
    radioSwitch_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    radioSwitch_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    radioSwitch_model01_v1.prototype.updateUi = function (state) {
        // 切换
        if (state.selectedIndex !== this._radioSwitch1.selectedIndex) {
            this._radioSwitch1.selectedIndex = state.selectedIndex;
        }
    };
    // 注册状态，及获取状态的方法
    radioSwitch_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    radioSwitch_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    radioSwitch_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    radioSwitch_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    radioSwitch_model01_v1.prototype.onDisable = function () {
        this.relieveState();
    };
    radioSwitch_model01_v1 = __decorate([
        ccclass
    ], radioSwitch_model01_v1);
    return radioSwitch_model01_v1;
}(cc.Component));
exports.default = radioSwitch_model01_v1;

cc._RF.pop();