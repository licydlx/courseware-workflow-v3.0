"use strict";
cc._RF.push(module, '5424aSAddlL8rVGcxjgry3C', 'clickAnswer-model01-v1');
// prefabLibrary/models/clickAnswer/clickAnswer-model01-v1.ts

"use strict";
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
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-20 18:48:26
 */
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var clcikAnswer_model01_v1 = /** @class */ (function (_super) {
    __extends(clcikAnswer_model01_v1, _super);
    function clcikAnswer_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._grids = [];
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(clcikAnswer_model01_v1.prototype, "state", {
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
    clcikAnswer_model01_v1.prototype.onLoad = function () {
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
        var aGroup = this._btnBox.getChild("grids").asGroup;
        for (var i = 0; i < this._btnBox.numChildren; i++) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                var grid = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }
        // 初始化state
        this._state = {
            drops: 0,
            submit: false,
            answer: false
        };
    };
    clcikAnswer_model01_v1.prototype.init = function (data) {
        // 临时 model component json 配置加载
        var Package = data.Package, GComponent = data.GComponent, config = data.config;
        var answer = config.answer;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        this._handleGuide01 = fgui.UIPackage.createObject(Package, "handleGuide01").asCom;
        this._lineBlink01 = fgui.UIPackage.createObject(Package, "lineBlink01").asCom;
        if (answer)
            this._answer = answer;
    };
    // 点击天枰 消除一个
    clcikAnswer_model01_v1.prototype._clickLibra = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var index = this._grids.findIndex(function (v) { return v.url === null; });
        if (index !== 0) {
            var grid = this._grids[index == -1 ? this._grids.length - 1 : index - 1];
            grid.url = null;
            state.drops = state.drops - 1;
            state.answer = state.drops === this._answer;
            this.updateState(state);
        }
    };
    // 触发器点击
    clcikAnswer_model01_v1.prototype._clickTrigger = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var icon = this._trigger.getChild("icon").asLoader;
        var grid = this._grids.find(function (v) { return v.url === null; });
        if (grid) {
            grid.url = icon.url;
            state.drops = state.drops + 1;
        }
        state.answer = state.drops === this._answer;
        this.updateState(state);
    };
    // 提交点击
    clcikAnswer_model01_v1.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.answer = state.drops === this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    clcikAnswer_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    clcikAnswer_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    clcikAnswer_model01_v1.prototype.updateUi = function (state) {
        for (var i = 0; i < this._grids.length; i++) {
            var grid = this._grids[i];
            if (state.drops > i) {
                if (!grid.url) {
                    var icon = this._trigger.getChild("icon").asLoader;
                    grid.url = icon.url;
                }
            }
            else {
                if (grid.url)
                    grid.url = null;
            }
        }
        this._c1.selectedIndex = state.drops;
        if (state.submit) {
            if (state.drops) {
                if (state.answer) {
                }
                else {
                }
            }
            else {
                this.handleGuide();
            }
        }
    };
    // 天枰提示
    clcikAnswer_model01_v1.prototype.libraHint = function () {
        var _this = this;
        fgui.GRoot.inst.addChild(this._lineBlink01);
        this._lineBlink01.y = (fgui.GRoot.inst.height - this._lineBlink01.height) / 2;
        var t = this._lineBlink01.getTransition("t0");
        t.play(function () {
            fgui.GRoot.inst.removeChild(_this._lineBlink01);
        });
    };
    // 操作提示
    clcikAnswer_model01_v1.prototype.handleGuide = function () {
        var _this = this;
        var state = globalThis._.cloneDeep(this._state);
        fgui.GRoot.inst.addChild(this._handleGuide01);
        this._handleGuide01.y = (fgui.GRoot.inst.height - this._handleGuide01.height) / 2;
        var t = this._handleGuide01.getTransition("t0");
        t.play(function () {
            fgui.GRoot.inst.removeChild(_this._handleGuide01);
            state.submit = false;
            _this.updateState(state);
        }, 2);
    };
    // 注册状态，及获取状态的方法
    clcikAnswer_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    clcikAnswer_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    clcikAnswer_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    clcikAnswer_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    clcikAnswer_model01_v1.prototype.onDisable = function () {
        this.relieveState();
    };
    clcikAnswer_model01_v1 = __decorate([
        ccclass
    ], clcikAnswer_model01_v1);
    return clcikAnswer_model01_v1;
}(cc.Component));
exports.default = clcikAnswer_model01_v1;

cc._RF.pop();