
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/choose/choose-model02-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41ef5ejRahHr5aGeE9q9lTi', 'choose-model02-v1');
// prefabLibrary/models/choose/choose-model02-v1.ts

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
 * @LastEditTime: 2021-05-11 21:34:36
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var choose_model02_v1 = /** @class */ (function (_super) {
    __extends(choose_model02_v1, _super);
    function choose_model02_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 选项集合
        _this._options = [];
        _this._cache = {};
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(choose_model02_v1.prototype, "state", {
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
    choose_model02_v1.prototype.onLoad = function () {
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
            option: null,
            title: false,
            submit: false,
            checkAnswer: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    choose_model02_v1.prototype.init = function (data) {
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
    choose_model02_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    choose_model02_v1.prototype._clickOption = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var option = fgui.GObject.cast(evt.currentTarget);
        var optionIndex = this._options.findIndex(function (v) { return v == option; });
        // if (state.option.includes(optionIndex)) {
        //     state.option = state.option.filter((v:any) => v != optionIndex )
        // } else {
        //     state.option.push(optionIndex);
        // }
        state.option = state.option === optionIndex ? null : optionIndex;
        this.updateState(state);
    };
    choose_model02_v1.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        // state.answer = state.option.join("") == this._answer;
        state.answer = state.option == this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    choose_model02_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    choose_model02_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    choose_model02_v1.prototype.updateUi = function (oldState, state) {
        if (!globalThis._.isEqual(oldState.option, state.option)) {
            // let index:any;
            // let tName:any;
            // if (state.option.length > oldState.option.length) {
            //     index = state.option.find((v:any) => oldState.option.includes(v) == false);
            //     tName = "t0";
            // } else if(oldState.option.length > state.option.length) {
            //     index = oldState.option.find((v:any) => state.option.includes(v) == false);
            //     tName = "t1";
            // }
            // let t: fgui.Transition = this._options[index].getTransition(tName);
            // t.play();
            if (state.option || state.option === 0) {
                if (oldState.option || oldState.option === 0) {
                    var t1 = this._options[oldState.option].getTransition("t1");
                    t1.play();
                }
                var t0 = this._options[state.option].getTransition("t0");
                t0.play();
            }
            if (state.option === null) {
                var t1 = this._options[oldState.option].getTransition("t1");
                t1.play();
            }
        }
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                state.option || state.option === 0 ? this.afterSubmit() : this.onHandleGuide();
            }
        }
        if (!globalThis._.isEqual(oldState.checkAnswer, state.checkAnswer)) {
            if (state.checkAnswer) {
                this.answerFeedback(state.answer);
            }
        }
    };
    choose_model02_v1.prototype.playTitle = function (bool) {
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
    choose_model02_v1.prototype.answerFeedback = function (bool) {
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
    choose_model02_v1.prototype.afterSubmit = function () {
        var state = globalThis._.cloneDeep(this._state);
        // state.answer = state.option.join("") == this._answer;
        state.answer = state.option == this._answer;
        state.submit = false;
        state.checkAnswer = true;
        this.updateState(state);
    };
    // 操作提示
    choose_model02_v1.prototype.onHandleGuide = function () {
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
    choose_model02_v1.prototype.forbidHandle = function () {
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
    choose_model02_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 注册状态，及获取状态的方法
    choose_model02_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    choose_model02_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    choose_model02_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    choose_model02_v1.prototype.onEnable = function () {
        this.registerState();
    };
    choose_model02_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    choose_model02_v1 = __decorate([
        ccclass
    ], choose_model02_v1);
    return choose_model02_v1;
}(cc.Component));
exports.default = choose_model02_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxjaG9vc2VcXGNob29zZS1tb2RlbDAyLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQTJDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQXBFLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsWUFBWSxrQkFBZ0MsQ0FBQztBQUN2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQThTQztRQTlSRyxPQUFPO1FBQ0MsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRVosWUFBTSxHQUFHLEVBQUUsQ0FBQzs7SUF5UnhCLENBQUM7SUF2Ukcsc0JBQUksb0NBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDOzs7T0FOQTtJQVFELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRTNDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJ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QztJQUVELGdCQUFnQjtJQUNoQix3Q0FBWSxHQUFaO1FBQ0ksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVk7WUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELGFBQWE7SUFDYixzQ0FBVSxHQUFWO1FBQ0ksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBN1NnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQThTckM7SUFBRCx3QkFBQztDQTlTRCxBQThTQyxDQTlTOEMsRUFBRSxDQUFDLFNBQVMsR0E4UzFEO2tCQTlTb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wMy0yNiAxODowNToxMlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMSAyMTozNDozNlxyXG4gKi9cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNob29zZV9tb2RlbDAyX3YxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3dvcmxkUm9vdDogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX2MxOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF9jMjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHdWlkZTogYW55O1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIC8vIOmAiemhuembhuWQiFxyXG4gICAgcHJpdmF0ZSBfb3B0aW9ucyA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY2FjaGUgPSB7fTtcclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2MxID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICAgICAgdGhpcy5fYzIgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMlwiKTtcclxuICAgICAgICAvLyDoh6jmmYJcclxuICAgICAgICAvLyBidWcg5Yid5aeL6K6+572u5LiN5pKt5pS+5LiN55Sf5pWIXHJcbiAgICAgICAgaWYgKHRoaXMuX2MyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlXCIpLmFzQnV0dG9uO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9uR3JvdXAgPSB0aGlzLl92aWV3LmdldENoaWxkKFwib3B0aW9uQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl92aWV3Lm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5ncm91cCA9PSBvcHRpb25Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjogZmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmFzQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrT3B0aW9uLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJZzdGF0ZVxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xyXG4gICAgICAgICAgICBvcHRpb246IG51bGwsXHJcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VibWl0OiBmYWxzZSxcclxuICAgICAgICAgICAgY2hlY2tBbnN3ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkuLTml7Yg56aB5q2i5pON5L2c5pyf6Ze0IOWIh+mhtVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlIH0gPSBtb2RlbC5jb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcblxyXG4gICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXIpIHRoaXMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tUaXRsZShldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUudGl0bGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrT3B0aW9uKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgb3B0aW9uOiBhbnkgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbkluZGV4OiBudW1iZXIgPSB0aGlzLl9vcHRpb25zLmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IG9wdGlvbik7XHJcbiAgICAgICAgLy8gaWYgKHN0YXRlLm9wdGlvbi5pbmNsdWRlcyhvcHRpb25JbmRleCkpIHtcclxuICAgICAgICAvLyAgICAgc3RhdGUub3B0aW9uID0gc3RhdGUub3B0aW9uLmZpbHRlcigodjphbnkpID0+IHYgIT0gb3B0aW9uSW5kZXggKVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHN0YXRlLm9wdGlvbi5wdXNoKG9wdGlvbkluZGV4KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgc3RhdGUub3B0aW9uID0gc3RhdGUub3B0aW9uID09PSBvcHRpb25JbmRleCA/IG51bGwgOiBvcHRpb25JbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1N1Ym1pdChldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgLy8gc3RhdGUuYW5zd2VyID0gc3RhdGUub3B0aW9uLmpvaW4oXCJcIikgPT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLm9wdGlvbiA9PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLm9wdGlvbiwgc3RhdGUub3B0aW9uKSkge1xyXG4gICAgICAgICAgICAvLyBsZXQgaW5kZXg6YW55O1xyXG4gICAgICAgICAgICAvLyBsZXQgdE5hbWU6YW55O1xyXG4gICAgICAgICAgICAvLyBpZiAoc3RhdGUub3B0aW9uLmxlbmd0aCA+IG9sZFN0YXRlLm9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gICAgIGluZGV4ID0gc3RhdGUub3B0aW9uLmZpbmQoKHY6YW55KSA9PiBvbGRTdGF0ZS5vcHRpb24uaW5jbHVkZXModikgPT0gZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyAgICAgdE5hbWUgPSBcInQwXCI7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZihvbGRTdGF0ZS5vcHRpb24ubGVuZ3RoID4gc3RhdGUub3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyAgICAgaW5kZXggPSBvbGRTdGF0ZS5vcHRpb24uZmluZCgodjphbnkpID0+IHN0YXRlLm9wdGlvbi5pbmNsdWRlcyh2KSA9PSBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0TmFtZSA9IFwidDFcIjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5fb3B0aW9uc1tpbmRleF0uZ2V0VHJhbnNpdGlvbih0TmFtZSk7XHJcbiAgICAgICAgICAgIC8vIHQucGxheSgpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUub3B0aW9uIHx8IHN0YXRlLm9wdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFN0YXRlLm9wdGlvbiB8fCBvbGRTdGF0ZS5vcHRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdDE6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuX29wdGlvbnNbb2xkU3RhdGUub3B0aW9uXS5nZXRUcmFuc2l0aW9uKFwidDFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdDEucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHQwOiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLl9vcHRpb25zW3N0YXRlLm9wdGlvbl0uZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgICAgICAgICAgdDAucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUub3B0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdDE6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuX29wdGlvbnNbb2xkU3RhdGUub3B0aW9uXS5nZXRUcmFuc2l0aW9uKFwidDFcIik7XHJcbiAgICAgICAgICAgICAgICB0MS5wbGF5KCk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnRpdGxlLCBzdGF0ZS50aXRsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5VGl0bGUoc3RhdGUudGl0bGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5zdWJtaXQsIHN0YXRlLnN1Ym1pdCkpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUub3B0aW9uIHx8IHN0YXRlLm9wdGlvbiA9PT0gMCA/IHRoaXMuYWZ0ZXJTdWJtaXQoKSA6IHRoaXMub25IYW5kbGVHdWlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmNoZWNrQW5zd2VyLCBzdGF0ZS5jaGVja0Fuc3dlcikpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmNoZWNrQW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RhdGUuY2hlY2tBbnN3ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5o+Q5Lqk5ZCOIOWKqOeUu1xyXG4gICAgYWZ0ZXJTdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAvLyBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5vcHRpb24uam9pbihcIlwiKSA9PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUub3B0aW9uID09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5jaGVja0Fuc3dlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6Zmk56aB5q2iXHJcbiAgICBkaXNhYmxlRm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hc2spIGhhbmRsZU1hc2suZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxufVxyXG4iXX0=