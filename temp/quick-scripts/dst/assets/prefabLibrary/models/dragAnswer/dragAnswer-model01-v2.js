
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f908Bl1PlGabQ0oWxCLVqT', 'dragAnswer-model01-v2');
// prefabLibrary/models/dragAnswer/dragAnswer-model01-v2.ts

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
 * @Date: 2021-05-07 14:34:26
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-21 11:57:00
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var dragAnswer_model01_v2 = /** @class */ (function (_super) {
    __extends(dragAnswer_model01_v2, _super);
    function dragAnswer_model01_v2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colliderBox = [];
        _this._collideredBox = [];
        _this._cache = {};
        _this._scheduleTime = .3;
        _this._dragging = false;
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model01_v2.prototype, "state", {
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
    dragAnswer_model01_v2.prototype.onLoad = function () {
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
        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        var colliderGroup = this._view.getChild("colliderBox").asGroup;
        var collideredGroup = this._view.getChild("collideredBox").asGroup;
        this._cache["colliderBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == colliderGroup) {
                var btn = this._view.getChildAt(i).asButton;
                this._cache["colliderBox"].push({ x: btn.x, y: btn.y, belong: null });
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                var btn = this._view.getChildAt(i).asButton;
                this._collideredBox.push(btn);
            }
        }
        // 初始化state
        this._state = {
            drag: "end",
            collider: this._cache["colliderBox"].map(function (v) { return v; }),
            colliderIndex: null,
            title: false,
            submit: false,
            answer: false
        };
        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        var feedback = this._worldRoot.getChildByName("feedback");
        if (feedback)
            feedback.destroy();
    };
    dragAnswer_model01_v2.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var pathConfig, model, components, Package, GComponent, _a, answer, ae, v, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        if (model.uiPath) {
                            GComponent = model.uiPath;
                            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                        }
                        if (model.config) {
                            _a = model.config, answer = _a.answer, ae = _a.ae;
                            if (answer)
                                this._answer = answer;
                            // 动效注册
                            if (ae) {
                                for (v in ae) {
                                    if (ae[v]) {
                                        this[v] = {};
                                        if (ae[v].component)
                                            this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                                        if (ae[v].pos)
                                            this[v].pos = ae[v].pos;
                                    }
                                }
                            }
                        }
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
    dragAnswer_model01_v2.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    dragAnswer_model01_v2.prototype._onDragStart = function (evt) {
        evt.captureTouch();
        var state = globalThis._.cloneDeep(this._state);
        var collider = fgui.GObject.cast(evt.currentTarget);
        var colliderIndex = this._colliderBox.findIndex(function (v) { return v == collider; });
        state.colliderIndex = colliderIndex;
        this.updateState(state);
    };
    dragAnswer_model01_v2.prototype._onDragMove = function (evt) {
        this._dragging = true;
    };
    dragAnswer_model01_v2.prototype._onDragEnd = function (evt) {
        var _this = this;
        // 临时
        // 两个被拖拽物 同时被松开 会触发2次回调
        if (!this._dragging)
            return;
        this._dragging = false;
        var collider = fgui.GObject.cast(evt.currentTarget);
        var colliderIndex = this._colliderBox.findIndex(function (v) { return v == collider; });
        var arr = [];
        var collidered;
        this._collideredBox.forEach(function (v, i) {
            if (_this._belongArea(collider, v, 110) == true)
                arr.push(v);
        });
        arr.forEach(function (v, i) {
            if (i == 0) {
                collidered = v;
            }
            else {
                var pd = _this._getDistance(collider, arr[i - 1]);
                var cd = _this._getDistance(collider, v);
                if (cd < pd)
                    collidered = v;
            }
        });
        var collideredIndex = this._collideredBox.findIndex(function (v) { return v == collidered; });
        var state = globalThis._.cloneDeep(this._state);
        if (collideredIndex == -1) {
            state.collider[colliderIndex] = {
                x: this._cache["colliderBox"][colliderIndex].x,
                y: this._cache["colliderBox"][colliderIndex].y,
                belong: null,
            };
        }
        else {
            var x_1 = this._collideredBox[collideredIndex].x + this._collideredBox[collideredIndex].width / 2 - this._colliderBox[colliderIndex].width / 2;
            var y_1 = this._collideredBox[collideredIndex].y + this._collideredBox[collideredIndex].height / 2 - this._colliderBox[colliderIndex].height / 2;
            var bool = state.collider.find(function (v) { return v.x == x_1 && Math.abs(v.y - y_1) < 55; });
            state.collider[colliderIndex] = {
                x: bool ? this._cache["colliderBox"][colliderIndex].x : x_1,
                y: bool ? this._cache["colliderBox"][colliderIndex].y : y_1,
                belong: bool ? null : collideredIndex,
            };
        }
        // let answerBool: boolean = state.collider.every((v: any, i: any) => !globalThis._.isEqual(v, this._cache["colliderBox"][i]));
        // state.answer = answerBool;
        // if (answerBool) {
        //     state.submit = true;
        // }
        state.submit = false;
        state.drag = "end";
        state.colliderIndex = colliderIndex;
        this.updateState(state);
    };
    dragAnswer_model01_v2.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model01_v2.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var answer = state.collider.map(function (v) { return v.belong; }).filter(function (v) { return v || v === 0; }).join("");
        state.answer = answer == this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    dragAnswer_model01_v2.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model01_v2.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model01_v2.prototype.updateUi = function (oldState, state) {
        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
        }
        if (state.drag == "end") {
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                for (var i = 0; i < state.collider.length; i++) {
                    this._colliderBox[i].x = state.collider[i].x;
                    this._colliderBox[i].y = state.collider[i].y;
                }
            }
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    var nv_1 = this._colliderBox.map(function (v) { return { "x": v.x, "y": v.y }; });
                    var bool = this._cache["colliderBox"].every(function (v, i) { return v.x == nv_1[i].x && v.y == nv_1[i].y; });
                    bool ? this.onHandleGuide() : this.onFlicker(state.answer);
                }
                else {
                    this.disableForbidHandle();
                }
            }
        }
    };
    dragAnswer_model01_v2.prototype.playTitle = function (bool) {
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
    /**
     * @name: 获取距离
     * @msg:
     * @param {any} self
     * @param {any} area
     * @return {*}
     */
    dragAnswer_model01_v2.prototype._getDistance = function (self, area) {
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance;
    };
    /**
     * @name: 区域所属判断
     * @msg:
     * @param {any} self
     * @param {any} area
     * @param {number} gap
     * @return {*}
     */
    dragAnswer_model01_v2.prototype._belongArea = function (self, area, gap) {
        if (gap === void 0) { gap = 10; }
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance < gap;
    };
    dragAnswer_model01_v2.prototype.answerFeedback = function (bool) {
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
            _this.updateState(state);
        }, 2000);
    };
    // 格子闪烁 提示
    dragAnswer_model01_v2.prototype.onFlicker = function (answer) {
        var _this = this;
        if (answer) {
            var t = this._view.getTransition("t0");
            t.play(function () {
                _this.answerFeedback(answer);
            });
        }
        else {
            this.answerFeedback(answer);
        }
    };
    // 操作提示
    dragAnswer_model01_v2.prototype.onHandleGuide = function () {
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
    dragAnswer_model01_v2.prototype.forbidHandle = function () {
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
    dragAnswer_model01_v2.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model01_v2.prototype.dragSchedule = function () {
        if (this._dragging) {
            var state = globalThis._.cloneDeep(this._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
            };
            this.updateState(state);
        }
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model01_v2.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model01_v2.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model01_v2.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model01_v2.prototype.onEnable = function () {
        this.registerState();
        this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model01_v2.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model01_v2 = __decorate([
        ccclass
    ], dragAnswer_model01_v2);
    return dragAnswer_model01_v2;
}(cc.Component));
exports.default = dragAnswer_model01_v2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDEtdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBRXZFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBK2FDO1FBM1pXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQWtaeEIsQ0FBQztJQWhaRyxzQkFBSSx3Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsc0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENB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XHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDUtMDcgMTQ6MzQ6MjZcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMjEgMTE6NTc6MDBcclxuICovXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZHJhZ0Fuc3dlcl9tb2RlbDAxX3YyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3dvcmxkUm9vdDogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9jMTogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBfYzI6IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuXHJcbiAgICBwcml2YXRlIF90aXRsZTogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHdWlkZTogYW55O1xyXG4gICAgcHJpdmF0ZSBsaW5lQmxpbms6IGFueTtcclxuXHJcbiAgICAvLyDov5znqIvliqjmgIHnu4Tku7ZcclxuICAgIHByaXZhdGUgZmVlZGJhY2s6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJlZEJveCA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2NhY2hlID0ge307XHJcbiAgICBwcml2YXRlIF9zY2hlZHVsZVRpbWUgPSAuMztcclxuICAgIHByaXZhdGUgX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfYW5zd2VyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZSA9IHt9O1xyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVaSh0aGlzLl9zdGF0ZSwgdik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl93b3JsZFJvb3QgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLl92aWV3LndpZHRoKSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcbiAgICAgICAgLy8g6Ieo5pmCXHJcbiAgICAgICAgLy8gYnVnIOWIneWni+iuvue9ruS4jeaSreaUvuS4jeeUn+aViFxyXG4gICAgICAgIGlmICh0aGlzLl9jMikge1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zdWJtaXQgPSB0aGlzLl92aWV3LmdldENoaWxkKFwic3VibWl0XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJtaXQpIHRoaXMuX3N1Ym1pdC5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1N1Ym1pdCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX3RpdGxlVHJpZ2dlciA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVRyaWdnZXJcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlVHJpZ2dlcikgdGhpcy5fdGl0bGVUcmlnZ2VyLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrVGl0bGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgY29sbGlkZXJHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlckJveFwiKS5hc0dyb3VwO1xyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkR3JvdXAgPSB0aGlzLl92aWV3LmdldENoaWxkKFwiY29sbGlkZXJlZEJveFwiKS5hc0dyb3VwO1xyXG5cclxuICAgICAgICB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl92aWV3Lm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5ncm91cCA9PSBjb2xsaWRlckdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLnB1c2goeyB4OiBidG4ueCwgeTogYnRuLnksIGJlbG9uZzogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIGJ0bi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCB0aGlzLl9vbkRyYWdFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3gucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyZWRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjogZmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmFzQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJlZEJveC5wdXNoKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyYWc6IFwiZW5kXCIsXHJcbiAgICAgICAgICAgIGNvbGxpZGVyOiB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLm1hcCgodjogYW55KSA9PiB2KSxcclxuICAgICAgICAgICAgY29sbGlkZXJJbmRleDogbnVsbCxcclxuICAgICAgICAgICAgdGl0bGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkuLTml7YgXHJcbiAgICAgICAgLy8g56aB5q2i5pON5L2c5pyf6Ze0IOWIh+mhtVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgIC8vIOmUgOavgeWPjemmiFxyXG4gICAgICAgIGxldCBmZWVkYmFjazphbnkgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoXCJmZWVkYmFja1wiKTtcclxuICAgICAgICBpZiAoZmVlZGJhY2spIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOS4tOaXtiBtb2RlbCBjb21wb25lbnQganNvbiDphY3nva7liqDovb1cclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcblxyXG5cclxuICAgICAgICBpZiAobW9kZWwudWlQYXRoKSB7XHJcbiAgICAgICAgICAgIGxldCBHQ29tcG9uZW50ID0gbW9kZWwudWlQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLmNvbmZpZykge1xyXG4gICAgICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlIH0gPSBtb2RlbC5jb25maWc7XHJcbiAgICAgICAgICAgIGlmIChhbnN3ZXIpIHRoaXMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICAgICAgLy8g5Yqo5pWI5rOo5YaMXHJcbiAgICAgICAgICAgIGlmIChhZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdiBpbiBhZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XS5jb21wb25lbnQpIHRoaXNbdl0uY29tcG9uZW50ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIGFlW3ZdLmNvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XS5wb3MpIHRoaXNbdl0ucG9zID0gYWVbdl0ucG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFBhdGg6IGFueSA9IGAke3BhdGhDb25maWcucmVtb3RlVXJsfSR7cGF0aENvbmZpZy5jb21wb25lbnRCdW5kbGVQYXRofSR7Y29tcG9uZW50c1trZXldLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbXBvbmVudEJ1bmRsZSwgY29tcG9uZW50c1trZXldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29tcG9uZW50UHJlZmFiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE9yaWdpblZhbHVlKHY6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHYueCxcclxuICAgICAgICAgICAgeTogdi55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2dC5jYXB0dXJlVG91Y2goKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgY29sbGlkZXI6IGFueSA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgY29sbGlkZXJJbmRleDogbnVtYmVyID0gdGhpcy5fY29sbGlkZXJCb3guZmluZEluZGV4KCh2OiBhbnkpID0+IHYgPT0gY29sbGlkZXIpO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVySW5kZXggPSBjb2xsaWRlckluZGV4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ01vdmUoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0VuZChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyDkuLTml7ZcclxuICAgICAgICAvLyDkuKTkuKrooqvmi5bmi73niakg5ZCM5pe26KKr5p2+5byAIOS8muinpuWPkTLmrKHlm57osINcclxuICAgICAgICBpZiAoIXRoaXMuX2RyYWdnaW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpZGVyOiBhbnkgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVySW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyQm94LmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgbGV0IGFycjogYW55ID0gW107XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWQ6IGFueTtcclxuICAgICAgICB0aGlzLl9jb2xsaWRlcmVkQm94LmZvckVhY2goKHY6IGFueSwgaTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9iZWxvbmdBcmVhKGNvbGxpZGVyLCB2LCAxMTApID09IHRydWUpIGFyci5wdXNoKHYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcnIuZm9yRWFjaCgodjogYW55LCBpOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZXJlZCA9IHY7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGQgPSB0aGlzLl9nZXREaXN0YW5jZShjb2xsaWRlciwgYXJyW2kgLSAxXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2QgPSB0aGlzLl9nZXREaXN0YW5jZShjb2xsaWRlciwgdik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2QgPCBwZCkgY29sbGlkZXJlZCA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWRJbmRleDogbnVtYmVyID0gdGhpcy5fY29sbGlkZXJlZEJveC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjb2xsaWRlcmVkKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBpZiAoY29sbGlkZXJlZEluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyW2NvbGxpZGVySW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXVtjb2xsaWRlckluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXVtjb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICAgICAgYmVsb25nOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS54ICsgdGhpcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdLndpZHRoIC8gMiAtIHRoaXMuX2NvbGxpZGVyQm94W2NvbGxpZGVySW5kZXhdLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgbGV0IHk6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS55ICsgdGhpcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdLmhlaWdodCAvIDIgLSB0aGlzLl9jb2xsaWRlckJveFtjb2xsaWRlckluZGV4XS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICBsZXQgYm9vbDogYm9vbGVhbiA9IHN0YXRlLmNvbGxpZGVyLmZpbmQoKHY6IGFueSkgPT4gdi54ID09IHggJiYgTWF0aC5hYnModi55IC0geSkgPCA1NSk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltjb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGJvb2wgPyB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLnggOiB4LFxyXG4gICAgICAgICAgICAgICAgeTogYm9vbCA/IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueSA6IHksXHJcbiAgICAgICAgICAgICAgICBiZWxvbmc6IGJvb2wgPyBudWxsIDogY29sbGlkZXJlZEluZGV4LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXQgYW5zd2VyQm9vbDogYm9vbGVhbiA9IHN0YXRlLmNvbGxpZGVyLmV2ZXJ5KCh2OiBhbnksIGk6IGFueSkgPT4gIWdsb2JhbFRoaXMuXy5pc0VxdWFsKHYsIHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1baV0pKTtcclxuICAgICAgICAvLyBzdGF0ZS5hbnN3ZXIgPSBhbnN3ZXJCb29sO1xyXG4gICAgICAgIC8vIGlmIChhbnN3ZXJCb29sKSB7XHJcbiAgICAgICAgLy8gICAgIHN0YXRlLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmRyYWcgPSBcImVuZFwiO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVySW5kZXggPSBjb2xsaWRlckluZGV4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrVGl0bGUoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnRpdGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1N1Ym1pdChldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGFuc3dlcjogYW55ID0gc3RhdGUuY29sbGlkZXIubWFwKCh2OiBhbnkpID0+IHYuYmVsb25nKS5maWx0ZXIoKHY6IGFueSkgPT4gdiB8fCB2ID09PSAwKS5qb2luKFwiXCIpO1xyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IGFuc3dlciA9PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS54ID0gc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0ueDtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueSA9IHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcImVuZFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuY29sbGlkZXIsIHN0YXRlLmNvbGxpZGVyKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb2xsaWRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLnggPSBzdGF0ZS5jb2xsaWRlcltpXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLnkgPSBzdGF0ZS5jb2xsaWRlcltpXS55O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnRpdGxlLCBzdGF0ZS50aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVRpdGxlKHN0YXRlLnRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5zdWJtaXQsIHN0YXRlLnN1Ym1pdCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmoLnmja5jb2xsaWRlciDliJ3lp4vkvY3nva4g5Yik5patIOaYr+WQpuiiq+aTjeS9nOi/h1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBudjogYW55ID0gdGhpcy5fY29sbGlkZXJCb3gubWFwKCh2OiBhbnkpID0+IHsgcmV0dXJuIHsgXCJ4XCI6IHYueCwgXCJ5XCI6IHYueSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib29sOiBib29sZWFuID0gdGhpcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXS5ldmVyeSgodjogYW55LCBpOiBhbnkpID0+IHYueCA9PSBudltpXS54ICYmIHYueSA9PSBudltpXS55KTtcclxuICAgICAgICAgICAgICAgICAgICBib29sID8gdGhpcy5vbkhhbmRsZUd1aWRlKCkgOiB0aGlzLm9uRmxpY2tlcihzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5VGl0bGUoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSBib29sID8gMSA6IDA7XHJcblxyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwodGhpcy5fdGl0bGVbXCJfc291bmRcIl0pO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZTog6I635Y+W6Led56a7XHJcbiAgICAgKiBAbXNnOiBcclxuICAgICAqIEBwYXJhbSB7YW55fSBzZWxmXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gYXJlYVxyXG4gICAgICogQHJldHVybiB7Kn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0RGlzdGFuY2Uoc2VsZjogYW55LCBhcmVhOiBhbnkpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWU6IOWMuuWfn+aJgOWxnuWIpOaWrVxyXG4gICAgICogQG1zZzogXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gc2VsZlxyXG4gICAgICogQHBhcmFtIHthbnl9IGFyZWFcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBnYXBcclxuICAgICAqIEByZXR1cm4geyp9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2JlbG9uZ0FyZWEoc2VsZjogYW55LCBhcmVhOiBhbnksIGdhcDogbnVtYmVyID0gMTApIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgZ2FwO1xyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmoLzlrZDpl6rng4Eg5o+Q56S6XHJcbiAgICBvbkZsaWNrZXIoYW5zd2VyOiBhbnkpIHtcclxuICAgICAgICBpZiAoYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLl92aWV3LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soYW5zd2VyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhhbnN3ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDov5DooYzml7Yg56aB5q2i5pON5L2cXHJcbiAgICBmb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoIWhhbmRsZU1hc2spIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSBuZXcgY2MuTm9kZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5wYXJlbnQgPSB0aGlzLl93b3JsZFJvb3Q7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sud2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueCA9IDk2MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay55ID0gNTQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Li05pe2XHJcbiAgICAvLyDmi5bmi73lrprml7blmahcclxuICAgIGRyYWdTY2hlZHVsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZyA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmRyYWdTY2hlZHVsZSwgdGhpcy5fc2NoZWR1bGVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19