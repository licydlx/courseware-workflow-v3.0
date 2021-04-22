"use strict";
cc._RF.push(module, '74bc4Chi+lGqY2ii2x4oIJq', 'inputChoose-model01-v1');
// prefabLibrary/models/inputChoose/inputChoose-model01-v1.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-22 21:05:08
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
var inputChoose_model01_v1 = /** @class */ (function (_super) {
    __extends(inputChoose_model01_v1, _super);
    function inputChoose_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._numBtns = [];
        _this._answer = 0; // 答案
        _this._state = {};
        return _this;
    }
    Object.defineProperty(inputChoose_model01_v1.prototype, "state", {
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
    inputChoose_model01_v1.prototype.onLoad = function () {
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
        var aGroup = this._chooseBox.getChild("numBox").asGroup;
        for (var i = 0; i < this._chooseBox.numChildren; i++) {
            if (this._chooseBox.getChildAt(i).group == aGroup) {
                var numBtn = this._chooseBox.getChildAt(i).asButton;
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
        };
    };
    inputChoose_model01_v1.prototype.init = function (data) {
        // 临时 model component json 配置加载
        var Package = data.Package, GComponent = data.GComponent, config = data.config;
        var answer = config.answer, ae = config.ae;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        // 动效注册
        for (var v in ae) {
            if (ae[v]) {
                this[v] = {};
                if (ae[v].component)
                    this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                if (ae[v].pos)
                    this[v].pos = ae[v].pos;
            }
        }
        if (answer)
            this._answer = answer;
    };
    // 点击 显示输入处
    inputChoose_model01_v1.prototype._clickNumInput = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.chooseBox = !state.chooseBox;
        state.answer = parseInt(state.numInput) === this._answer;
        this.updateState(state);
    };
    // 点击 清空输入
    inputChoose_model01_v1.prototype._clickClearBtn = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.numInput = "";
        state.answer = state.drops === this._answer;
        this.updateState(state);
    };
    // 点击 文本框输入数字
    inputChoose_model01_v1.prototype._clickNumBtn = function (evt) {
        var curObj = fgui.GObject.cast(evt.currentTarget);
        var index = this._numBtns.findIndex(function (v) { return v == curObj; });
        if (index !== -1) {
            var state = globalThis._.cloneDeep(this._state);
            if (state.numInput.length < 2) {
                state.numInput = state.numInput + index + "";
                state.answer = parseInt(state.numInput) === this._answer;
                this.updateState(state);
            }
        }
    };
    // 提交点击
    inputChoose_model01_v1.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.chooseBox = false;
        state.answer = parseInt(state.numInput) === this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    inputChoose_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    inputChoose_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    inputChoose_model01_v1.prototype.updateUi = function (state) {
        this._chooseBox.visible = state.chooseBox;
        var title = this._numInput.getChild("title");
        title.text = state.numInput;
        if (state.submit) {
            if (state.numInput) {
                this.answerFeedback(state.answer);
            }
            else {
                this.onHandleGuide();
            }
        }
    };
    inputChoose_model01_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
        var state = globalThis._.cloneDeep(this._state);
        var component;
        var pos;
        if (bool) {
            component = this.rightFeed.component;
            pos = this.rightFeed.pos;
        }
        else {
            component = this.errorFeed.component;
            pos = this.errorFeed.pos;
        }
        fgui.GRoot.inst.addChild(component);
        if (pos) {
            component.x = (fgui.GRoot.inst.width - component.width) / 2 + pos.x;
            component.y = (fgui.GRoot.inst.height - component.height) / 2 + pos.y;
        }
        else {
            component.y = (fgui.GRoot.inst.height - component.height) / 2;
        }
        var t = component.getTransition("t0");
        t.play(function () {
            fgui.GRoot.inst.removeChild(component);
            state.submit = false;
            _this.updateState(state);
        }, 2);
    };
    // 操作提示
    inputChoose_model01_v1.prototype.onHandleGuide = function () {
        var _this = this;
        if (!this.handleGuide)
            return;
        var state = globalThis._.cloneDeep(this._state);
        fgui.GRoot.inst.addChild(this.handleGuide.component);
        if (this.handleGuide.pos) {
            this.handleGuide.component.x = (fgui.GRoot.inst.width - this.handleGuide.component.width) / 2 + this.handleGuide.pos.x;
            this.handleGuide.component.y = (fgui.GRoot.inst.height - this.handleGuide.component.height) / 2 + this.handleGuide.pos.y;
        }
        else {
            this.handleGuide.component.y = (fgui.GRoot.inst.height - this.handleGuide.component.height) / 2;
        }
        var t = this.handleGuide.component.getTransition("t0");
        t.play(function () {
            fgui.GRoot.inst.removeChild(_this.handleGuide.component);
            state.submit = false;
            _this.updateState(state);
        }, 2);
    };
    // 注册状态，及获取状态的方法
    inputChoose_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    inputChoose_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    inputChoose_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    inputChoose_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    inputChoose_model01_v1.prototype.onDisable = function () {
        this.relieveState();
    };
    inputChoose_model01_v1 = __decorate([
        ccclass
    ], inputChoose_model01_v1);
    return inputChoose_model01_v1;
}(cc.Component));
exports.default = inputChoose_model01_v1;

cc._RF.pop();