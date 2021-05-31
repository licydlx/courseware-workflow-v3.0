
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
 * @LastEditTime: 2021-05-12 16:22:53
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDEtdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBRXZFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBeWFDO1FBclpXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQTRZeEIsQ0FBQztJQTFZRyxzQkFBSSx3Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsc0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENB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LElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2IsMENBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBeGFnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQXlhekM7SUFBRCw0QkFBQztDQXphRCxBQXlhQyxDQXpha0QsRUFBRSxDQUFDLFNBQVMsR0F5YTlEO2tCQXphb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wNS0wNyAxNDozNDoyNlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMiAxNjoyMjo1M1xyXG4gKi9cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDFfdjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2MxOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF9jMjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGVUcmlnZ2VyOiBmZ3VpLkdMb2FkZXI7XHJcblxyXG4gICAgLy8gZmFpcnlndWkg57uE5Lu2XHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcbiAgICBwcml2YXRlIGxpbmVCbGluazogYW55O1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQm94ID0gW107XHJcbiAgICBwcml2YXRlIF9jb2xsaWRlcmVkQm94ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FjaGUgPSB7fTtcclxuICAgIHByaXZhdGUgX3NjaGVkdWxlVGltZSA9IC4zO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9hbnN3ZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy5fdmlldy54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuX3ZpZXcud2lkdGgpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2MxID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICAgICAgdGhpcy5fYzIgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMlwiKTtcclxuICAgICAgICAvLyDoh6jmmYJcclxuICAgICAgICAvLyBidWcg5Yid5aeL6K6+572u5LiN5pKt5pS+5LiN55Sf5pWIXHJcbiAgICAgICAgaWYgKHRoaXMuX2MyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlckdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWRHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlcmVkQm94XCIpLmFzR3JvdXA7XHJcblxyXG4gICAgICAgIHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG46IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0ucHVzaCh7IHg6IGJ0bi54LCB5OiBidG4ueSwgYmVsb25nOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgYnRuLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5UT1VDSF9CRUdJTiwgdGhpcy5fb25EcmFnU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfTU9WRSwgdGhpcy5fb25EcmFnTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveC5wdXNoKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmlldy5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gY29sbGlkZXJlZEdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlcmVkQm94LnB1c2goYnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJhZzogXCJlbmRcIixcclxuICAgICAgICAgICAgY29sbGlkZXI6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0ubWFwKCh2OiBhbnkpID0+IHYpLFxyXG4gICAgICAgICAgICBjb2xsaWRlckluZGV4OiBudWxsLFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuc3dlcjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyDkuLTml7YgbW9kZWwgY29tcG9uZW50IGpzb24g6YWN572u5Yqg6L29XHJcbiAgICAgICAgbGV0IHsgcGF0aENvbmZpZywgbW9kZWwsIGNvbXBvbmVudHMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IFBhY2thZ2UgPSBwYXRoQ29uZmlnLnBhY2thZ2VOYW1lO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLnVpUGF0aCkge1xyXG4gICAgICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSB9ID0gbW9kZWwuY29uZmlnO1xyXG4gICAgICAgICAgICBpZiAoYW5zd2VyKSB0aGlzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgICAgICBpZiAoYWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1t2XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0ucG9zKSB0aGlzW3ZdLnBvcyA9IGFlW3ZdLnBvcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQYXRoOiBhbnkgPSBgJHtwYXRoQ29uZmlnLnJlbW90ZVVybH0ke3BhdGhDb25maWcuY29tcG9uZW50QnVuZGxlUGF0aH0ke2NvbXBvbmVudHNba2V5XS5idW5kbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50QnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbXBvbmVudFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb21wb25lbnRCdW5kbGUsIGNvbXBvbmVudHNba2V5XS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbXBvbmVudFByZWZhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmlnaW5WYWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB2LngsXHJcbiAgICAgICAgICAgIHk6IHYueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldnQuY2FwdHVyZVRvdWNoKCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyOiBhbnkgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVySW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyQm94LmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IGNvbGxpZGVyKTtcclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckluZGV4ID0gY29sbGlkZXJJbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8g5Li05pe2XHJcbiAgICAgICAgLy8g5Lik5Liq6KKr5ouW5ou954mpIOWQjOaXtuiiq+advuW8gCDkvJrop6blj5Ey5qyh5Zue6LCDXHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlcjogYW55ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlckJveC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjb2xsaWRlcik7XHJcblxyXG4gICAgICAgIGxldCBhcnI6IGFueSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkOiBhbnk7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXJlZEJveC5mb3JFYWNoKCh2OiBhbnksIGk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYmVsb25nQXJlYShjb2xsaWRlciwgdiwgMTEwKSA9PSB0cnVlKSBhcnIucHVzaCh2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXJyLmZvckVhY2goKHY6IGFueSwgaTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWQgPSB2O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBkID0gdGhpcy5fZ2V0RGlzdGFuY2UoY29sbGlkZXIsIGFycltpIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNkID0gdGhpcy5fZ2V0RGlzdGFuY2UoY29sbGlkZXIsIHYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNkIDwgcGQpIGNvbGxpZGVyZWQgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkSW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyZWRCb3guZmluZEluZGV4KCh2OiBhbnkpID0+IHYgPT0gY29sbGlkZXJlZCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyZWRJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltjb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueSxcclxuICAgICAgICAgICAgICAgIGJlbG9uZzogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlcmVkQm94W2NvbGxpZGVyZWRJbmRleF0ueCArIHRoaXMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS53aWR0aCAvIDIgLSB0aGlzLl9jb2xsaWRlckJveFtjb2xsaWRlckluZGV4XS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGxldCB5OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlcmVkQm94W2NvbGxpZGVyZWRJbmRleF0ueSArIHRoaXMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS5oZWlnaHQgLyAyIC0gdGhpcy5fY29sbGlkZXJCb3hbY29sbGlkZXJJbmRleF0uaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgbGV0IGJvb2w6IGJvb2xlYW4gPSBzdGF0ZS5jb2xsaWRlci5maW5kKCh2OiBhbnkpID0+IHYueCA9PSB4ICYmIE1hdGguYWJzKHYueSAtIHkpIDwgNTUpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBib29sID8gdGhpcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXVtjb2xsaWRlckluZGV4XS54IDogeCxcclxuICAgICAgICAgICAgICAgIHk6IGJvb2wgPyB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLnkgOiB5LFxyXG4gICAgICAgICAgICAgICAgYmVsb25nOiBib29sID8gbnVsbCA6IGNvbGxpZGVyZWRJbmRleCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IGFuc3dlckJvb2w6IGJvb2xlYW4gPSBzdGF0ZS5jb2xsaWRlci5ldmVyeSgodjogYW55LCBpOiBhbnkpID0+ICFnbG9iYWxUaGlzLl8uaXNFcXVhbCh2LCB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2ldKSk7XHJcbiAgICAgICAgLy8gc3RhdGUuYW5zd2VyID0gYW5zd2VyQm9vbDtcclxuICAgICAgICAvLyBpZiAoYW5zd2VyQm9vbCkge1xyXG4gICAgICAgIC8vICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5kcmFnID0gXCJlbmRcIjtcclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckluZGV4ID0gY29sbGlkZXJJbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBhbnN3ZXI6IGFueSA9IHN0YXRlLmNvbGxpZGVyLm1hcCgodjogYW55KSA9PiB2LmJlbG9uZykuZmlsdGVyKCh2OiBhbnkpID0+IHYgfHwgdiA9PT0gMCkuam9pbihcIlwiKTtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBhbnN3ZXIgPT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W54q25oCBXHJcbiAgICBnZXRTdGF0ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShvbGRTdGF0ZTogYW55LCBzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmRyYWcgPT0gXCJtb3ZlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueCA9IHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnkgPSBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XS55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmRyYWcgPT0gXCJlbmRcIikge1xyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmNvbGxpZGVyLCBzdGF0ZS5jb2xsaWRlcikpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29sbGlkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtpXS54ID0gc3RhdGUuY29sbGlkZXJbaV0ueDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtpXS55ID0gc3RhdGUuY29sbGlkZXJbaV0ueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2uY29sbGlkZXIg5Yid5aeL5L2N572uIOWIpOaWrSDmmK/lkKbooqvmk43kvZzov4dcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbnY6IGFueSA9IHRoaXMuX2NvbGxpZGVyQm94Lm1hcCgodjogYW55KSA9PiB7IHJldHVybiB7IFwieFwiOiB2LngsIFwieVwiOiB2LnkgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9vbDogYm9vbGVhbiA9IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0uZXZlcnkoKHY6IGFueSwgaTogYW55KSA9PiB2LnggPT0gbnZbaV0ueCAmJiB2LnkgPT0gbnZbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA/IHRoaXMub25IYW5kbGVHdWlkZSgpIDogdGhpcy5vbkZsaWNrZXIoc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5VGl0bGUoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSBib29sID8gMSA6IDA7XHJcblxyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwodGhpcy5fdGl0bGVbXCJfc291bmRcIl0pO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZTog6I635Y+W6Led56a7XHJcbiAgICAgKiBAbXNnOiBcclxuICAgICAqIEBwYXJhbSB7YW55fSBzZWxmXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gYXJlYVxyXG4gICAgICogQHJldHVybiB7Kn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0RGlzdGFuY2Uoc2VsZjogYW55LCBhcmVhOiBhbnkpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWU6IOWMuuWfn+aJgOWxnuWIpOaWrVxyXG4gICAgICogQG1zZzogXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gc2VsZlxyXG4gICAgICogQHBhcmFtIHthbnl9IGFyZWFcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBnYXBcclxuICAgICAqIEByZXR1cm4geyp9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2JlbG9uZ0FyZWEoc2VsZjogYW55LCBhcmVhOiBhbnksIGdhcDogbnVtYmVyID0gMTApIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgZ2FwO1xyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuXHJcbiAgICAgICAgICAgIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOagvOWtkOmXqueDgSDmj5DnpLpcclxuICAgIG9uRmxpY2tlcihhbnN3ZXI6IGFueSkge1xyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLl92aWV3LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGFuc3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6Zmk56aB5q2iXHJcbiAgICBkaXNhYmxlRm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hc2spIGhhbmRsZU1hc2suZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4tOaXtlxyXG4gICAgLy8g5ouW5ou95a6a5pe25ZmoXHJcbiAgICBkcmFnU2NoZWR1bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyYWcgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5kcmFnU2NoZWR1bGUsIHRoaXMuX3NjaGVkdWxlVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==