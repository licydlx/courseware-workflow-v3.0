
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a13c8/eIVFLEpkoqHBFYILF', 'dragAnswer-model01-v1');
// prefabLibrary/models/dragAnswer/dragAnswer-model01-v1.ts

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
 * @LastEditTime: 2021-05-12 16:13:16
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var dragAnswer_model01_v1 = /** @class */ (function (_super) {
    __extends(dragAnswer_model01_v1, _super);
    function dragAnswer_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._grids = [];
        _this._cache = {};
        _this._scheduleTime = .3;
        _this._dragging = false;
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model01_v1.prototype, "state", {
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
    dragAnswer_model01_v1.prototype.onLoad = function () {
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
        this._dragBtn = this._view.getChild("dragBtn").asButton;
        this._cache["dragOrigin"] = this.getOriginValue(this._dragBtn);
        this._dragBtn.draggable = true;
        this._dragBtn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
        this._dragBtn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        this._dragBtn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
        this._btnBox = this._view.getChild("btnBox").asButton;
        if (this._btnBox)
            this._btnBox.on(fgui.Event.CLICK, this._clickRemove, this);
        var aGroup = this._btnBox.getChild("grids").asGroup;
        // for (let i = 0; i < this._btnBox.numChildren; i++) {
        //     if (this._btnBox.getChildAt(i).group == aGroup) {
        //         let grid: fgui.GLoader = this._btnBox.getChildAt(i).asLoader;
        //         this._grids.push(grid);
        //     }
        // }
        for (var i = this._btnBox.numChildren - 1; i > -1; i--) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                var grid = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }
        // 初始化state
        this._state = {
            drag: "end",
            dragBtn: {
                x: this._dragBtn.x,
                y: this._dragBtn.y
            },
            title: false,
            drops: 0,
            submit: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    dragAnswer_model01_v1.prototype.init = function (data) {
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
    dragAnswer_model01_v1.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    dragAnswer_model01_v1.prototype._onDragStart = function (evt) {
        evt.captureTouch();
        var state = globalThis._.cloneDeep(this._state);
        state.drag = "start";
        state.answer = state.drops === this._answer;
        this.updateState(state);
    };
    dragAnswer_model01_v1.prototype._onDragMove = function (evt) {
        this._dragging = true;
    };
    dragAnswer_model01_v1.prototype._onDragEnd = function (evt) {
        this._dragging = false;
        var state = globalThis._.cloneDeep(this._state);
        var bool = pointBelongArea("rectangle", this._btnBox, this._dragBtn);
        if (bool) {
            var icon = this._dragBtn.getChild("icon").asLoader;
            var grid = this._grids.find(function (v) { return v.url === null; });
            if (grid) {
                //grid.url = icon.url;
                state.drops = state.drops + 1;
            }
        }
        state.dragBtn = {
            x: this._cache["dragOrigin"].x,
            y: this._cache["dragOrigin"].y,
        };
        state.drag = "end";
        state.answer = state.drops === this._answer;
        this.updateState(state);
    };
    dragAnswer_model01_v1.prototype._clickRemove = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var index = this._grids.findIndex(function (v) { return v.url === null; });
        if (index !== 0) {
            // let grid: fgui.GLoader = this._grids[index == -1 ? this._grids.length - 1 : index - 1];
            // grid.url = null;
            state.drops = state.drops - 1;
            state.answer = state.drops === this._answer;
            this.updateState(state);
        }
    };
    dragAnswer_model01_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model01_v1.prototype._clickSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                state = globalThis._.cloneDeep(this._state);
                state.answer = state.drops === this._answer;
                state.submit = true;
                this.updateState(state);
                return [2 /*return*/];
            });
        });
    };
    // 获取状态
    dragAnswer_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model01_v1.prototype.updateUi = function (oldState, state) {
        if (state.drag == "move") {
            this._dragBtn.x = state.dragBtn.x;
            this._dragBtn.y = state.dragBtn.y;
        }
        if (state.drag == "end") {
            this._dragBtn.x = this._cache["dragOrigin"].x;
            this._dragBtn.y = this._cache["dragOrigin"].y;
            if (!globalThis._.isEqual(oldState.drops, state.drops)) {
                for (var i = 0; i < this._grids.length; i++) {
                    var grid = this._grids[i];
                    if (state.drops > i) {
                        if (!grid.url) {
                            var icon = this._dragBtn.getChild("icon").asLoader;
                            grid.url = icon.url;
                        }
                    }
                    else {
                        if (grid.url)
                            grid.url = null;
                    }
                }
                this._c1.selectedIndex = state.drops;
                if (!state.answer)
                    this.onLibraHint();
            }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    if (state.drops) {
                        this.answerFeedback(state.answer);
                    }
                    else {
                        this.onHandleGuide();
                    }
                }
            }
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }
        }
    };
    dragAnswer_model01_v1.prototype.playTitle = function (bool) {
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
    dragAnswer_model01_v1.prototype.answerFeedback = function (bool) {
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
    // 天枰提示
    dragAnswer_model01_v1.prototype.onLibraHint = function () {
        var _this = this;
        if (!this.lineBlink)
            return;
        fgui.GRoot.inst.addChild(this.lineBlink.component);
        if (this.lineBlink.pos) {
            this.lineBlink.component.x = (fgui.GRoot.inst.width - this.lineBlink.component.width) / 2 + this.lineBlink.pos.x;
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2 + this.lineBlink.pos.y;
        }
        else {
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2;
        }
        var t = this.lineBlink.component.getTransition("t0");
        t.play(function () {
            fgui.GRoot.inst.removeChild(_this.lineBlink.component);
        });
    };
    // 操作提示
    dragAnswer_model01_v1.prototype.onHandleGuide = function () {
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
    dragAnswer_model01_v1.prototype.forbidHandle = function () {
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
    dragAnswer_model01_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model01_v1.prototype.dragSchedule = function () {
        if (this._dragging) {
            var state = globalThis._.cloneDeep(this._state);
            state.drag = "move";
            state.dragBtn = {
                x: this._dragBtn.x,
                y: this._dragBtn.y,
            };
            this.updateState(state);
        }
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model01_v1.prototype.onEnable = function () {
        this.registerState();
        this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model01_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model01_v1 = __decorate([
        ccclass
    ], dragAnswer_model01_v1);
    return dragAnswer_model01_v1;
}(cc.Component));
exports.default = dragAnswer_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDEtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQXlZQztRQXRYVyxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLFlBQU0sR0FBRyxFQUFFLENBQUM7O0lBOFd4QixDQUFDO0lBNVdHLHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFRRCxzQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVB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QUMsQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXhZZ0IscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0F5WXpDO0lBQUQsNEJBQUM7Q0F6WUQsQUF5WUMsQ0F6WWtELEVBQUUsQ0FBQyxTQUFTLEdBeVk5RDtrQkF6WW9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTIgMTY6MTM6MTZcclxuICovXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ0J0bjogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfYnRuQm94OiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF90aXRsZVRyaWdnZXI6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuICAgIHByaXZhdGUgbGluZUJsaW5rOiBhbnk7XHJcblxyXG4gICAgLy8g6L+c56iL5Yqo5oCB57uE5Lu2XHJcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZ3JpZHMgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jYWNoZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVUaW1lID0gLjM7XHJcbiAgICBwcml2YXRlIF9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICB0aGlzLl92aWV3LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5fdmlldy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG4gICAgICAgIC8vIOiHqOaZglxyXG4gICAgICAgIC8vIGJ1ZyDliJ3lp4vorr7nva7kuI3mkq3mlL7kuI3nlJ/mlYhcclxuICAgICAgICBpZiAodGhpcy5fYzIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4gPSB0aGlzLl92aWV3LmdldENoaWxkKFwiZHJhZ0J0blwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLl9jYWNoZVtcImRyYWdPcmlnaW5cIl0gPSB0aGlzLmdldE9yaWdpblZhbHVlKHRoaXMuX2RyYWdCdG4pO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnQnRuLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0J0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX0JFR0lOLCB0aGlzLl9vbkRyYWdTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0J0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4ub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2J0bkJveCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJidG5Cb3hcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX2J0bkJveCkgdGhpcy5fYnRuQm94Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrUmVtb3ZlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IGFHcm91cCA9IHRoaXMuX2J0bkJveC5nZXRDaGlsZChcImdyaWRzXCIpLmFzR3JvdXA7XHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYnRuQm94Lm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGFHcm91cCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmFzTG9hZGVyO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZ3JpZHMucHVzaChncmlkKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2J0bkJveC5udW1DaGlsZHJlbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9idG5Cb3guZ2V0Q2hpbGRBdChpKS5ncm91cCA9PSBhR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9idG5Cb3guZ2V0Q2hpbGRBdChpKS5hc0xvYWRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dyaWRzLnB1c2goZ3JpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyYWc6IFwiZW5kXCIsXHJcbiAgICAgICAgICAgIGRyYWdCdG46IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2RyYWdCdG4ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2RyYWdCdG4ueVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyb3BzOiAwLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkuLTml7Yg56aB5q2i5pON5L2c5pyf6Ze0IOWIh+mhtVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlIH0gPSBtb2RlbC5jb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcblxyXG4gICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXIpIHRoaXMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JpZ2luVmFsdWUodjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdi54LFxyXG4gICAgICAgICAgICB5OiB2LnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnU3RhcnQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZ0LmNhcHR1cmVUb3VjaCgpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLmRyYWcgPSBcInN0YXJ0XCI7XHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgYm9vbDpib29sZWFuID0gcG9pbnRCZWxvbmdBcmVhKFwicmVjdGFuZ2xlXCIsIHRoaXMuX2J0bkJveCwgdGhpcy5fZHJhZ0J0bik7XHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgbGV0IGljb246IGZndWkuR0xvYWRlciA9IHRoaXMuX2RyYWdCdG4uZ2V0Q2hpbGQoXCJpY29uXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICBsZXQgZ3JpZDogZmd1aS5HTG9hZGVyID0gdGhpcy5fZ3JpZHMuZmluZCh2ID0+IHYudXJsID09PSBudWxsKTtcclxuICAgICAgICAgICAgaWYgKGdyaWQpIHtcclxuICAgICAgICAgICAgICAgIC8vZ3JpZC51cmwgPSBpY29uLnVybDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmRyb3BzID0gc3RhdGUuZHJvcHMgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5kcmFnQnRuID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLl9jYWNoZVtcImRyYWdPcmlnaW5cIl0ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5fY2FjaGVbXCJkcmFnT3JpZ2luXCJdLnksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGF0ZS5kcmFnID0gXCJlbmRcIjtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrUmVtb3ZlKGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLl9ncmlkcy5maW5kSW5kZXgoKHY6IGFueSkgPT4gdi51cmwgPT09IG51bGwpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBsZXQgZ3JpZDogZmd1aS5HTG9hZGVyID0gdGhpcy5fZ3JpZHNbaW5kZXggPT0gLTEgPyB0aGlzLl9ncmlkcy5sZW5ndGggLSAxIDogaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgLy8gZ3JpZC51cmwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuZHJvcHMgPSBzdGF0ZS5kcm9wcyAtIDE7XHJcbiAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLmRyb3BzID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLmRyb3BzID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnQnRuLnggPSBzdGF0ZS5kcmFnQnRuLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdCdG4ueSA9IHN0YXRlLmRyYWdCdG4ueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwiZW5kXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ0J0bi54ID0gdGhpcy5fY2FjaGVbXCJkcmFnT3JpZ2luXCJdLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdCdG4ueSA9IHRoaXMuX2NhY2hlW1wiZHJhZ09yaWdpblwiXS55O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5kcm9wcywgc3RhdGUuZHJvcHMpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2dyaWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2dyaWRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5kcm9wcyA+IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFncmlkLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGljb246IGZndWkuR0xvYWRlciA9IHRoaXMuX2RyYWdCdG4uZ2V0Q2hpbGQoXCJpY29uXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC51cmwgPSBpY29uLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmlkLnVybCkgZ3JpZC51cmwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSBzdGF0ZS5kcm9wcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmFuc3dlcikgdGhpcy5vbkxpYnJhSGludCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5kcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhbmRsZUd1aWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnRpdGxlLCBzdGF0ZS50aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVRpdGxlKHN0YXRlLnRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlpKnmnrDmj5DnpLpcclxuICAgIG9uTGlicmFIaW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saW5lQmxpbmspIHJldHVybjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5saW5lQmxpbmsuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5saW5lQmxpbmsucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5saW5lQmxpbmsucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmxpbmVCbGluay5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVCbGluay5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMubGluZUJsaW5rLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6Zmk56aB5q2iXHJcbiAgICBkaXNhYmxlRm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hc2spIGhhbmRsZU1hc2suZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4tOaXtlxyXG4gICAgLy8g5ouW5ou95a6a5pe25ZmoXHJcbiAgICBkcmFnU2NoZWR1bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyYWcgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZ0J0biA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2RyYWdCdG4ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2RyYWdCdG4ueSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5kcmFnU2NoZWR1bGUsIHRoaXMuX3NjaGVkdWxlVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==