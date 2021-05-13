
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/choose/choose-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd05919cBRDMbpAcmU8if2h', 'choose-model01-v1');
// prefabLibrary/models/choose/choose-model01-v1.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-12 16:23:45
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var choose_model01_v1 = /** @class */ (function (_super) {
    __extends(choose_model01_v1, _super);
    function choose_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 选项集合
        _this._options = [];
        _this._cache = {};
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(choose_model01_v1.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (v) {
            this.updateUi(this._state, v);
            this._state = v;
            this.mergeState();
        },
        enumerable: false,
        configurable: true
    });
    choose_model01_v1.prototype.onLoad = function () {
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
        if (this._submit)
            this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        this._title = this._view.getChild("title").asButton;
        var optionGroup = this._view.getChild("optionBox").asGroup;
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == optionGroup) {
                var btn = this._view.getChildAt(i).asButton;
                btn.on(fgui.Event.CLICK, this._clickOption, this);
                this._options.push(btn);
            }
        }
        // 初始化state
        this._state = {
            option: 0,
            title: false,
            submit: false,
            checkAnswer: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    choose_model01_v1.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var pathConfig, model, components, Package, GComponent, _a, answer, ae, v, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        GComponent = model.uiPath;
                        _a = model.config, answer = _a.answer, ae = _a.ae;
                        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                        // 动效注册
                        for (v in ae) {
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
                        if (!components) return [3 /*break*/, 5];
                        _b = [];
                        for (_c in components)
                            _b.push(_c);
                        _i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 5];
                        key = _b[_i];
                        componentPath = "" + pathConfig.remoteUrl + pathConfig.componentBundlePath + components[key].bundleName;
                        return [4 /*yield*/, loadBundle(componentPath)];
                    case 2:
                        componentBundle = _d.sent();
                        return [4 /*yield*/, loadPrefab(componentBundle, components[key].prefabName)];
                    case 3:
                        componentPrefab = _d.sent();
                        this[key] = componentPrefab;
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    choose_model01_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    choose_model01_v1.prototype._clickOption = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var option = fgui.GObject.cast(evt.currentTarget);
        var optionIndex = this._options.findIndex(function (v) { return v == option; });
        state.option = optionIndex + 1;
        this.updateState(state);
    };
    choose_model01_v1.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.answer = state.option == this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    choose_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    choose_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    choose_model01_v1.prototype.updateUi = function (oldState, state) {
        if (!globalThis._.isEqual(oldState.option, state.option)) {
            this._c1.selectedIndex = state.option;
        }
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                state.option ? this.afterSubmit() : this.onHandleGuide();
            }
        }
        if (!globalThis._.isEqual(oldState.checkAnswer, state.checkAnswer)) {
            if (state.checkAnswer) {
                this.answerFeedback(state.answer);
            }
        }
    };
    choose_model01_v1.prototype.playTitle = function (bool) {
        return __awaiter(this, void 0, void 0, function () {
            var item, audio, audioId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._c2.selectedIndex = bool ? 1 : 0;
                        if (!bool) return [3 /*break*/, 2];
                        cc.audioEngine.stopAll();
                        this.forbidHandle();
                        item = fgui.UIPackage.getItemByURL(this._title["_sound"]);
                        return [4 /*yield*/, loadResource(item.file, cc.AudioClip)];
                    case 1:
                        audio = _a.sent();
                        audioId = cc.audioEngine.play(audio, false, 1);
                        cc.audioEngine.setFinishCallback(audioId, function () {
                            var state = globalThis._.cloneDeep(_this._state);
                            state.title = false;
                            _this.updateState(state);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        this.disableForbidHandle();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    choose_model01_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
        if (!this.feedback)
            return;
        var state = globalThis._.cloneDeep(this._state);
        var feedback = cc.instantiate(this.feedback);
        feedback.x = 960;
        feedback.y = 540;
        var feedbackJs = feedback.getComponent(cc.Component);
        feedbackJs.init(bool);
        feedback.parent = cc.find("Canvas").parent;
        setTimeout(function () {
            feedback.destroy();
            state.submit = false;
            state.checkAnswer = false;
            _this.updateState(state);
        }, 2000);
    };
    // 提交后 动画
    choose_model01_v1.prototype.afterSubmit = function () {
        var _this = this;
        var state = globalThis._.cloneDeep(this._state);
        var t = this._view.getTransition("t1");
        t.play(function () {
            state.answer = state.option == _this._answer;
            state.submit = false;
            state.checkAnswer = true;
            _this.updateState(state);
        }, 1);
    };
    // 操作提示
    choose_model01_v1.prototype.onHandleGuide = function () {
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
    // 运行时 禁止操作
    choose_model01_v1.prototype.forbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (!handleMask) {
            var handleMask_1 = new cc.Node('handleMask');
            handleMask_1.addComponent(cc.BlockInputEvents);
            handleMask_1.parent = this._worldRoot;
            handleMask_1.width = 1920;
            handleMask_1.height = 1080;
            handleMask_1.x = 960;
            handleMask_1.y = 540;
        }
    };
    // 消除禁止
    choose_model01_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 注册状态，及获取状态的方法
    choose_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    choose_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    choose_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    choose_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    choose_model01_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    choose_model01_v1 = __decorate([
        ccclass
    ], choose_model01_v1);
    return choose_model01_v1;
}(cc.Component));
exports.default = choose_model01_v1;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxjaG9vc2VcXGNob29zZS1tb2RlbDAxLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQTJDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQXBFLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsWUFBWSxrQkFBZ0MsQ0FBQztBQUNyRSxJQUFBLGVBQWUsR0FBSyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxnQkFBL0IsQ0FBZ0M7QUFFakQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUF1UkM7UUF2UUcsT0FBTztRQUNDLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLFlBQU0sR0FBRyxFQUFFLENBQUM7O0lBa1F4QixDQUFDO0lBaFFHLHNCQUFJLG9DQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFRRCxrQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FB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QzdCLENBQUM7SUF0UmdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBdVJyQztJQUFELHdCQUFDO0NBdlJELEFBdVJDLENBdlI4QyxFQUFFLENBQUMsU0FBUyxHQXVSMUQ7a0JBdlJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTEyIDE2OjIzOjQ1XHJcbiAqL1xyXG5jb25zdCB7IGxvYWRCdW5kbGUsIGxvYWRQcmVmYWIsIGxvYWRSZXNvdXJjZSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5jb25zdCB7IHBvaW50QmVsb25nQXJlYSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10udXRpbHM7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hvb3NlX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHdWlkZTogYW55O1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIC8vIOmAiemhuembhuWQiFxyXG4gICAgcHJpdmF0ZSBfb3B0aW9ucyA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY2FjaGUgPSB7fTtcclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICB0aGlzLl92aWV3LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5fdmlldy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG4gICAgICAgIC8vIOiHqOaZglxyXG4gICAgICAgIC8vIGJ1ZyDliJ3lp4vorr7nva7kuI3mkq3mlL7kuI3nlJ/mlYhcclxuICAgICAgICBpZiAodGhpcy5fYzIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25Hcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJvcHRpb25Cb3hcIikuYXNHcm91cDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IG9wdGlvbkdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tPcHRpb24sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wdGlvbjowLFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNoZWNrQW5zd2VyOmZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkuLTml7Yg56aB5q2i5pON5L2c5pyf6Ze0IOWIh+mhtVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlIH0gPSBtb2RlbC5jb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcblxyXG4gICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXIpIHRoaXMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tUaXRsZShldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUudGl0bGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrT3B0aW9uKGV2dDogYW55KXtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBvcHRpb246IGFueSA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgb3B0aW9uSW5kZXg6bnVtYmVyID0gdGhpcy5fb3B0aW9ucy5maW5kSW5kZXgoKHY6YW55KSA9PiB2ID09IG9wdGlvbik7XHJcbiAgICAgICAgc3RhdGUub3B0aW9uID0gb3B0aW9uSW5kZXggKyAxO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpOyBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1N1Ym1pdChldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcblxyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLm9wdGlvbiA9PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLm9wdGlvbiwgc3RhdGUub3B0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jMS5zZWxlY3RlZEluZGV4ID0gc3RhdGUub3B0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnRpdGxlLCBzdGF0ZS50aXRsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5VGl0bGUoc3RhdGUudGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5zdWJtaXQsIHN0YXRlLnN1Ym1pdCkpIHtcclxuICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgIHN0YXRlLm9wdGlvbiA/IHRoaXMuYWZ0ZXJTdWJtaXQoKSA6IHRoaXMub25IYW5kbGVHdWlkZSgpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuY2hlY2tBbnN3ZXIsIHN0YXRlLmNoZWNrQW5zd2VyKSkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuY2hlY2tBbnN3ZXIpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5VGl0bGUoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSBib29sID8gMSA6IDA7XHJcblxyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwodGhpcy5fdGl0bGVbXCJfc291bmRcIl0pO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5mZWVkYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZlZWRiYWNrKTtcclxuICAgICAgICBmZWVkYmFjay54ID0gOTYwO1xyXG4gICAgICAgIGZlZWRiYWNrLnkgPSA1NDA7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrSnM6IGFueSA9IGZlZWRiYWNrLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZlZWRiYWNrSnMuaW5pdChib29sKTtcclxuICAgICAgICBmZWVkYmFjay5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS5jaGVja0Fuc3dlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmj5DkuqTlkI4g5Yqo55S7XHJcbiAgICBhZnRlclN1Ym1pdCgpe1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuX3ZpZXcuZ2V0VHJhbnNpdGlvbihcInQxXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5vcHRpb24gPT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RhdGUuY2hlY2tBbnN3ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDov5DooYzml7Yg56aB5q2i5pON5L2cXHJcbiAgICBmb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoIWhhbmRsZU1hc2spIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSBuZXcgY2MuTm9kZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5wYXJlbnQgPSB0aGlzLl93b3JsZFJvb3Q7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sud2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueCA9IDk2MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay55ID0gNTQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==