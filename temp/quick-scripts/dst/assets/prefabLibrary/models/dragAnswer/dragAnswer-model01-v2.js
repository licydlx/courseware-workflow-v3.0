
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
 * @LastEditTime: 2021-05-11 21:07:19
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
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
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
            _this.disableForbidHandle();
            feedback.destroy();
            state.submit = false;
            _this.updateState(state);
        }, 2000);
    };
    // 格子闪烁 提示
    dragAnswer_model01_v2.prototype.onFlicker = function (answer) {
        var _this = this;
        var t = this._view.getTransition("t0");
        t.play(function () {
            _this.answerFeedback(answer);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDEtdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBRXZFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBc2FDO1FBbFpXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQXlZeEIsQ0FBQztJQXZZRyxzQkFBSSx3Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsc0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsS0FBSztRQUNMLGlCQUFpQjtRQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDbEUsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFeEYsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQy9ELElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUVuRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksYUFBYSxFQUFFO2dCQUNqRCxJQUFJLEdBQUcsR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDckIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDL0I7U0FDSjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxlQUFlLEVBQUU7Z0JBQ25ELElBQUksR0FBRyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7UUFFRCxXQUFXO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQztZQUN2RCxhQUFhLEVBQUUsSUFBSTtZQUNuQixLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQTtRQUVELGVBQWU7UUFDZixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUssb0NBQUksR0FBVixVQUFXLElBQVM7Ozs7Ozt3QkFFVixVQUFVLEdBQXdCLElBQUksV0FBNUIsRUFBRSxLQUFLLEdBQWlCLElBQUksTUFBckIsRUFBRSxVQUFVLEdBQUssSUFBSSxXQUFULENBQVU7d0JBQ3pDLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO3dCQUdyQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7NEJBQ1YsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7NEJBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQzt5QkFDdkU7d0JBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFOzRCQUNWLEtBQWlCLEtBQUssQ0FBQyxNQUFNLEVBQTNCLE1BQU0sWUFBQSxFQUFFLEVBQUUsUUFBQSxDQUFrQjs0QkFDbEMsSUFBSSxNQUFNO2dDQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzRCQUNsQyxPQUFPOzRCQUNQLElBQUksRUFBRSxFQUFFO2dDQUNKLEtBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQ0FDZCxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTt3Q0FDUCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dDQUNiLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7NENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3Q0FDckcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs0Q0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7cUNBQzFDO2lDQUNKOzZCQUNKO3lCQUNKOzZCQUVHLFVBQVUsRUFBVix3QkFBVTs7bUNBQ1EsVUFBVTs7Ozs7Ozt3QkFDcEIsYUFBYSxHQUFRLEtBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVksQ0FBQzt3QkFDdEYscUJBQU0sVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFBOzt3QkFBdEQsZUFBZSxHQUFRLFNBQStCO3dCQUMvQixxQkFBTSxVQUFVLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQXBGLGVBQWUsR0FBUSxTQUE2RDt3QkFDeEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQzs7Ozs7Ozs7O0tBR3ZDO0lBRUQsOENBQWMsR0FBZCxVQUFlLENBQU07UUFDakIsT0FBTztZQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNOLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNULENBQUE7SUFDTCxDQUFDO0lBRU8sNENBQVksR0FBcEIsVUFBcUIsR0FBZTtRQUNoQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFbkIsSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLGFBQWEsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsSUFBSSxRQUFRLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDbkYsS0FBSyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sMkNBQVcsR0FBbkIsVUFBb0IsR0FBZTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRU8sMENBQVUsR0FBbEIsVUFBbUIsR0FBZTtRQUFsQyxpQkF1REM7UUF0REcsS0FBSztRQUNMLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLGFBQWEsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsSUFBSSxRQUFRLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFFbkYsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLElBQUksVUFBZSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07WUFDdkMsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSTtnQkFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDUixVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNILElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksRUFBRSxHQUFHLEVBQUU7b0JBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUMvQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxlQUFlLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLElBQUksVUFBVSxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBRXpGLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLGVBQWUsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN2QixLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHO2dCQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLEVBQUUsSUFBSTthQUNmLENBQUE7U0FDSjthQUFNO1lBQ0gsSUFBSSxHQUFDLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNySixJQUFJLEdBQUMsR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZKLElBQUksSUFBSSxHQUFZLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1lBRXhGLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUc7Z0JBQzVCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDO2dCQUN6RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQztnQkFDekQsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlO2FBQ3hDLENBQUE7U0FDSjtRQUVELCtIQUErSDtRQUMvSCw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLDJCQUEyQjtRQUMzQixJQUFJO1FBQ0osS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sMkNBQVcsR0FBbkIsVUFBb0IsR0FBUTtRQUN4QixJQUFJLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sNENBQVksR0FBcEIsVUFBcUIsR0FBUTtRQUN6QixJQUFJLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxNQUFNLEdBQVEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxFQUFSLENBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE9BQU87SUFDUCx3Q0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDUiwyQ0FBVyxHQUFYLFVBQVksUUFBYTtRQUNyQixJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQUUsT0FBTztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUTtJQUNSLHdDQUFRLEdBQVIsVUFBUyxRQUFhLEVBQUUsS0FBVTtRQUM5QixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRjtRQUVELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMxRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEQ7YUFDSjtZQUVELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7WUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDZCw0QkFBNEI7b0JBQzVCLElBQUksSUFBRSxHQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBTSxJQUFPLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25GLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztvQkFDM0csSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM5RDthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUsseUNBQVMsR0FBZixVQUFnQixJQUFhOzs7Ozs7O3dCQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUVsQyxJQUFJLEVBQUosd0JBQUk7d0JBQ0osRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxxQkFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFqRSxLQUFLLEdBQWlCLFNBQTJDO3dCQUNqRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDbkQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7NEJBQ3RDLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDckQsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7NEJBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzVCLENBQUMsQ0FBQyxDQUFDOzs7d0JBRUgsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Ozs7OztLQUVsQztJQUVEOzs7Ozs7T0FNRztJQUNLLDRDQUFZLEdBQXBCLFVBQXFCLElBQVMsRUFBRSxJQUFTO1FBQ3JDLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDMUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSywyQ0FBVyxHQUFuQixVQUFvQixJQUFTLEVBQUUsSUFBUyxFQUFFLEdBQWdCO1FBQWhCLG9CQUFBLEVBQUEsUUFBZ0I7UUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxRCxPQUFPLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQUVELDhDQUFjLEdBQWQsVUFBZSxJQUFhO1FBQTVCLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzNCLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLFFBQVEsR0FBUSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLFVBQVUsR0FBUSxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFM0MsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFFM0IsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELFVBQVU7SUFDVix5Q0FBUyxHQUFULFVBQVUsTUFBVztRQUFyQixpQkFLQztRQUpHLElBQUksQ0FBQyxHQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxPQUFPO0lBQ1AsNkNBQWEsR0FBYjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzlCLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZILElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVIO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25HO1FBRUQsSUFBSSxDQUFDLEdBQW9CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEQsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsV0FBVztJQUNYLDRDQUFZLEdBQVo7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2IsSUFBSSxZQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLFlBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDN0MsWUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3BDLFlBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLFlBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLFlBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ25CLFlBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELE9BQU87SUFDUCxtREFBbUIsR0FBbkI7UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5RCxJQUFJLFVBQVU7WUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELEtBQUs7SUFDTCxRQUFRO0lBQ1IsNENBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFDcEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUc7Z0JBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzthQUM5QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsNkNBQWEsR0FBYjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsNENBQVksR0FBWjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2IsMENBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBcmFnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQXNhekM7SUFBRCw0QkFBQztDQXRhRCxBQXNhQyxDQXRha0QsRUFBRSxDQUFDLFNBQVMsR0FzYTlEO2tCQXRhb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wNS0wNyAxNDozNDoyNlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMSAyMTowNzoxOVxyXG4gKi9cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDFfdjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2MxOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF9jMjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGVUcmlnZ2VyOiBmZ3VpLkdMb2FkZXI7XHJcblxyXG4gICAgLy8gZmFpcnlndWkg57uE5Lu2XHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcbiAgICBwcml2YXRlIGxpbmVCbGluazogYW55O1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQm94ID0gW107XHJcbiAgICBwcml2YXRlIF9jb2xsaWRlcmVkQm94ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FjaGUgPSB7fTtcclxuICAgIHByaXZhdGUgX3NjaGVkdWxlVGltZSA9IC4zO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9hbnN3ZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcbiAgICAgICAgLy8g6Ieo5pmCXHJcbiAgICAgICAgLy8gYnVnIOWIneWni+iuvue9ruS4jeaSreaUvuS4jeeUn+aViFxyXG4gICAgICAgIGlmICh0aGlzLl9jMikge1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zdWJtaXQgPSB0aGlzLl92aWV3LmdldENoaWxkKFwic3VibWl0XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJtaXQpIHRoaXMuX3N1Ym1pdC5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1N1Ym1pdCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX3RpdGxlVHJpZ2dlciA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVRyaWdnZXJcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlVHJpZ2dlcikgdGhpcy5fdGl0bGVUcmlnZ2VyLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrVGl0bGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBsZXQgY29sbGlkZXJHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlckJveFwiKS5hc0dyb3VwO1xyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkR3JvdXAgPSB0aGlzLl92aWV3LmdldENoaWxkKFwiY29sbGlkZXJlZEJveFwiKS5hc0dyb3VwO1xyXG5cclxuICAgICAgICB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl92aWV3Lm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5ncm91cCA9PSBjb2xsaWRlckdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLnB1c2goeyB4OiBidG4ueCwgeTogYnRuLnksIGJlbG9uZzogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIGJ0bi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCB0aGlzLl9vbkRyYWdFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3gucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyZWRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjogZmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmFzQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJlZEJveC5wdXNoKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyYWc6IFwiZW5kXCIsXHJcbiAgICAgICAgICAgIGNvbGxpZGVyOiB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLm1hcCgodjogYW55KSA9PiB2KSxcclxuICAgICAgICAgICAgY29sbGlkZXJJbmRleDogbnVsbCxcclxuICAgICAgICAgICAgdGl0bGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkuLTml7Yg56aB5q2i5pON5L2c5pyf6Ze0IOWIh+mhtVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuXHJcblxyXG4gICAgICAgIGlmIChtb2RlbC51aVBhdGgpIHtcclxuICAgICAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kZWwuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGxldCB7IGFuc3dlciwgYWUgfSA9IG1vZGVsLmNvbmZpZztcclxuICAgICAgICAgICAgaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICAgICAgaWYgKGFlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JpZ2luVmFsdWUodjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdi54LFxyXG4gICAgICAgICAgICB5OiB2LnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnU3RhcnQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZ0LmNhcHR1cmVUb3VjaCgpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlcjogYW55ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlckJveC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjb2xsaWRlcik7XHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJJbmRleCA9IGNvbGxpZGVySW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnTW92ZShldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kcmFnZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnRW5kKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOS4tOaXtlxyXG4gICAgICAgIC8vIOS4pOS4quiiq+aLluaLveeJqSDlkIzml7booqvmnb7lvIAg5Lya6Kem5Y+RMuasoeWbnuiwg1xyXG4gICAgICAgIGlmICghdGhpcy5fZHJhZ2dpbmcpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgY29sbGlkZXI6IGFueSA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgY29sbGlkZXJJbmRleDogbnVtYmVyID0gdGhpcy5fY29sbGlkZXJCb3guZmluZEluZGV4KCh2OiBhbnkpID0+IHYgPT0gY29sbGlkZXIpO1xyXG5cclxuICAgICAgICBsZXQgYXJyOiBhbnkgPSBbXTtcclxuICAgICAgICBsZXQgY29sbGlkZXJlZDogYW55O1xyXG4gICAgICAgIHRoaXMuX2NvbGxpZGVyZWRCb3guZm9yRWFjaCgodjogYW55LCBpOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2JlbG9uZ0FyZWEoY29sbGlkZXIsIHYsIDExMCkgPT0gdHJ1ZSkgYXJyLnB1c2godik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFyci5mb3JFYWNoKCh2OiBhbnksIGk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkID0gdjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwZCA9IHRoaXMuX2dldERpc3RhbmNlKGNvbGxpZGVyLCBhcnJbaSAtIDFdKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZCA9IHRoaXMuX2dldERpc3RhbmNlKGNvbGxpZGVyLCB2KTtcclxuICAgICAgICAgICAgICAgIGlmIChjZCA8IHBkKSBjb2xsaWRlcmVkID0gdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgY29sbGlkZXJlZEluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlcmVkQm94LmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IGNvbGxpZGVyZWQpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGlmIChjb2xsaWRlcmVkSW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLnksXHJcbiAgICAgICAgICAgICAgICBiZWxvbmc6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgeDogbnVtYmVyID0gdGhpcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdLnggKyB0aGlzLl9jb2xsaWRlcmVkQm94W2NvbGxpZGVyZWRJbmRleF0ud2lkdGggLyAyIC0gdGhpcy5fY29sbGlkZXJCb3hbY29sbGlkZXJJbmRleF0ud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBsZXQgeTogbnVtYmVyID0gdGhpcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdLnkgKyB0aGlzLl9jb2xsaWRlcmVkQm94W2NvbGxpZGVyZWRJbmRleF0uaGVpZ2h0IC8gMiAtIHRoaXMuX2NvbGxpZGVyQm94W2NvbGxpZGVySW5kZXhdLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgIGxldCBib29sOiBib29sZWFuID0gc3RhdGUuY29sbGlkZXIuZmluZCgodjogYW55KSA9PiB2LnggPT0geCAmJiBNYXRoLmFicyh2LnkgLSB5KSA8IDU1KTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyW2NvbGxpZGVySW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgeDogYm9vbCA/IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueCA6IHgsXHJcbiAgICAgICAgICAgICAgICB5OiBib29sID8gdGhpcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXVtjb2xsaWRlckluZGV4XS55IDogeSxcclxuICAgICAgICAgICAgICAgIGJlbG9uZzogYm9vbCA/IG51bGwgOiBjb2xsaWRlcmVkSW5kZXgsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxldCBhbnN3ZXJCb29sOiBib29sZWFuID0gc3RhdGUuY29sbGlkZXIuZXZlcnkoKHY6IGFueSwgaTogYW55KSA9PiAhZ2xvYmFsVGhpcy5fLmlzRXF1YWwodiwgdGhpcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXVtpXSkpO1xyXG4gICAgICAgIC8vIHN0YXRlLmFuc3dlciA9IGFuc3dlckJvb2w7XHJcbiAgICAgICAgLy8gaWYgKGFuc3dlckJvb2wpIHtcclxuICAgICAgICAvLyAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuZHJhZyA9IFwiZW5kXCI7XHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJJbmRleCA9IGNvbGxpZGVySW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tUaXRsZShldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUudGl0bGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrU3VibWl0KGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgYW5zd2VyOiBhbnkgPSBzdGF0ZS5jb2xsaWRlci5tYXAoKHY6IGFueSkgPT4gdi5iZWxvbmcpLmZpbHRlcigodjogYW55KSA9PiB2IHx8IHYgPT09IDApLmpvaW4oXCJcIik7XHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gYW5zd2VyID09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkob2xkU3RhdGU6IGFueSwgc3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwibW92ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnggPSBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XS54O1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55ID0gc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0ueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwiZW5kXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5jb2xsaWRlciwgc3RhdGUuY29sbGlkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvbGxpZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0ueCA9IHN0YXRlLmNvbGxpZGVyW2ldLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0ueSA9IHN0YXRlLmNvbGxpZGVyW2ldLnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUudGl0bGUsIHN0YXRlLnRpdGxlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5VGl0bGUoc3RhdGUudGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNrmNvbGxpZGVyIOWIneWni+S9jee9riDliKTmlq0g5piv5ZCm6KKr5pON5L2c6L+HXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG52OiBhbnkgPSB0aGlzLl9jb2xsaWRlckJveC5tYXAoKHY6IGFueSkgPT4geyByZXR1cm4geyBcInhcIjogdi54LCBcInlcIjogdi55IH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2w6IGJvb2xlYW4gPSB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLmV2ZXJ5KCh2OiBhbnksIGk6IGFueSkgPT4gdi54ID09IG52W2ldLnggJiYgdi55ID09IG52W2ldLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb2wgPyB0aGlzLm9uSGFuZGxlR3VpZGUoKSA6IHRoaXMub25GbGlja2VyKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWU6IOiOt+WPlui3neemu1xyXG4gICAgICogQG1zZzogXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gc2VsZlxyXG4gICAgICogQHBhcmFtIHthbnl9IGFyZWFcclxuICAgICAqIEByZXR1cm4geyp9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dldERpc3RhbmNlKHNlbGY6IGFueSwgYXJlYTogYW55KSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gKHNlbGYueCArIHNlbGYud2lkdGggLyAyKSAtIChhcmVhLnggKyBhcmVhLndpZHRoIC8gMik7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IChzZWxmLnkgKyBzZWxmLmhlaWdodCAvIDIpIC0gKGFyZWEueSArIGFyZWEuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBuYW1lOiDljLrln5/miYDlsZ7liKTmlq1cclxuICAgICAqIEBtc2c6IFxyXG4gICAgICogQHBhcmFtIHthbnl9IHNlbGZcclxuICAgICAqIEBwYXJhbSB7YW55fSBhcmVhXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZ2FwXHJcbiAgICAgKiBAcmV0dXJuIHsqfVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9iZWxvbmdBcmVhKHNlbGY6IGFueSwgYXJlYTogYW55LCBnYXA6IG51bWJlciA9IDEwKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gKHNlbGYueCArIHNlbGYud2lkdGggLyAyKSAtIChhcmVhLnggKyBhcmVhLndpZHRoIC8gMik7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IChzZWxmLnkgKyBzZWxmLmhlaWdodCAvIDIpIC0gKGFyZWEueSArIGFyZWEuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8IGdhcDtcclxuICAgIH1cclxuXHJcbiAgICBhbnN3ZXJGZWVkYmFjayhib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZlZWRiYWNrKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgZmVlZGJhY2s6IGFueSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmVlZGJhY2spO1xyXG4gICAgICAgIGZlZWRiYWNrLnggPSA5NjA7XHJcbiAgICAgICAgZmVlZGJhY2sueSA9IDU0MDtcclxuICAgICAgICBsZXQgZmVlZGJhY2tKczogYW55ID0gZmVlZGJhY2suZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZmVlZGJhY2tKcy5pbml0KGJvb2wpO1xyXG4gICAgICAgIGZlZWRiYWNrLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcblxyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmoLzlrZDpl6rng4Eg5o+Q56S6XHJcbiAgICBvbkZsaWNrZXIoYW5zd2VyOiBhbnkpIHtcclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5fdmlldy5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhhbnN3ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaTjeS9nOaPkOekulxyXG4gICAgb25IYW5kbGVHdWlkZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlR3VpZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlR3VpZGUucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQud2lkdGgpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/kOihjOaXtiDnpoHmraLmk43kvZxcclxuICAgIGZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmICghaGFuZGxlTWFzaykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlTWFzayA9IG5ldyBjYy5Ob2RlKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnBhcmVudCA9IHRoaXMuX3dvcmxkUm9vdDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay53aWR0aCA9IDE5MjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suaGVpZ2h0ID0gMTA4MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay54ID0gOTYwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnkgPSA1NDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa2iOmZpOemgeatolxyXG4gICAgZGlzYWJsZUZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmIChoYW5kbGVNYXNrKSBoYW5kbGVNYXNrLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLTml7ZcclxuICAgIC8vIOaLluaLveWumuaXtuWZqFxyXG4gICAgZHJhZ1NjaGVkdWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnZ2luZykge1xyXG4gICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5kcmFnID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZHJhZ1NjaGVkdWxlLCB0aGlzLl9zY2hlZHVsZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxufVxyXG4iXX0=