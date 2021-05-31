
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model04-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8582a154A1KnJ1Ds0dfeFzz', 'dragAnswer-model04-v1');
// prefabLibrary/models/dragAnswer/dragAnswer-model04-v1.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ruzhuan
 * @Date: 2021-5-21 15:13:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-5-21 15:13:00
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
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var dragAnswer_model03_v1 = /** @class */ (function (_super) {
    __extends(dragAnswer_model03_v1, _super);
    function dragAnswer_model03_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colliderBox = [];
        _this._leftPositon = [{ x: 330, y: 760 }, { x: 540, y: 760 }, { x: 330, y: 925 }, { x: 540, y: 925 }];
        _this._rightPositon = [{ x: 1370, y: 760 }, { x: 1610, y: 760 }, { x: 1370, y: 925 }, { x: 1610, y: 925 }];
        _this._leftContain = [];
        _this._rightContain = [];
        _this._containerTotal = 4;
        _this._colliderCache = [];
        _this._dragging = false;
        _this.answerType = cc.Enum({
            SIZE: 1,
            COLOUR: 2
        });
        _this._answer = []; // 0：没答题时 1：答对第一种选择时 2： 答对第二种选择时
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model03_v1.prototype, "state", {
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
    dragAnswer_model03_v1.prototype.onLoad = function () {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
        this._submit = this._view.getChild("submit").asButton;
        if (this._submit)
            this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._c1 = this._view.getController("c1");
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        this._title = this._view.getChild("title").asButton;
        this._colliderGroup = this._view.getChild("colliderBox").asGroup;
        this._collideredGroup = this._view.getChild("collideredBox").asGroup;
        this._bg1 = this._view.getChild('bg1').asImage;
        this._bg2 = this._view.getChild('bg2').asImage;
        this._bg3 = this._view.getChild('bg3').asImage;
        this._bg1.visible = true;
        this._bg2.visible = false;
        this._bg3.visible = false;
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == this._colliderGroup) {
                var node = this._view.getChildAt(i).asButton;
                node.draggable = true;
                node.data = {
                    index: this._colliderBox.length,
                    x: node.x,
                    y: node.y
                };
                node.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                node.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                node.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(node);
                var colliderData = { pos: { x: node.data.x, y: node.data.y }, index: node.data.index };
                this._colliderCache.push(colliderData);
            }
        }
        this._leftRect = new cc.Rect(111, 641, 654, 407);
        this._rightRect = new cc.Rect(1162, 641, 654, 407);
        // 初始化state
        this._state = {
            answer: this._answer,
            colliderBox: this._colliderCache,
            leftContain: [],
            rightContain: [],
            title: false,
            submit: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    // 运行时 禁止操作
    dragAnswer_model03_v1.prototype.forbidHandle = function () {
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
    // 操作提示
    dragAnswer_model03_v1.prototype.onHandleGuide = function (handleGuide) {
        var _this = this;
        if (!handleGuide)
            return;
        var state = globalThis._.cloneDeep(this._state);
        fgui.GRoot.inst.addChild(handleGuide.component);
        if (handleGuide.pos) {
            handleGuide.component.x = (fgui.GRoot.inst.width - handleGuide.component.width) / 2 + handleGuide.pos.x;
            handleGuide.component.y = (fgui.GRoot.inst.height - handleGuide.component.height) / 2 + handleGuide.pos.y;
        }
        else {
            handleGuide.component.y = (fgui.GRoot.inst.height - handleGuide.component.height) / 2;
        }
        var t = handleGuide.component.getTransition("t0");
        t.play(function () {
            fgui.GRoot.inst.removeChild(handleGuide.component);
            state.submit = false;
            _this.updateState(state);
        }, 2);
    };
    // 消除禁止
    dragAnswer_model03_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model03_v1.prototype.dragSchedule = function () {
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
    dragAnswer_model03_v1.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var pathConfig, model, components, Package, GComponent, _a, answer, ae, v, _b, _c, _i, key, componentPath, componentBundle, componentPrefab, dragBut, item, _d, clickBut, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
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
                        _f.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 5];
                        key = _b[_i];
                        componentPath = "" + pathConfig.remoteUrl + pathConfig.componentBundlePath + components[key].bundleName;
                        return [4 /*yield*/, loadBundle(componentPath)];
                    case 2:
                        componentBundle = _f.sent();
                        return [4 /*yield*/, loadPrefab(componentBundle, components[key].prefabName)];
                    case 3:
                        componentPrefab = _f.sent();
                        this[key] = componentPrefab;
                        _f.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        dragBut = this._view.getChild('dragSound').asButton;
                        dragBut.visible = false;
                        item = fgui.UIPackage.getItemByURL(dragBut["_sound"]);
                        _d = this;
                        return [4 /*yield*/, loadResource(item.file, cc.AudioClip)];
                    case 6:
                        _d._dragSound = _f.sent();
                        clickBut = this._view.getChild('clickSound').asButton;
                        clickBut.visible = false;
                        item = fgui.UIPackage.getItemByURL(clickBut["_sound"]);
                        _e = this;
                        return [4 /*yield*/, loadResource(item.file, cc.AudioClip)];
                    case 7:
                        _e._clickSound = _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    dragAnswer_model03_v1.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    dragAnswer_model03_v1.prototype._onDragStart = function (evt) {
        evt.captureTouch();
        var btn = fgui.GObject.cast(evt.currentTarget);
        var state = globalThis._.cloneDeep(this._state);
        for (var i = 0; i < state.colliderBox.length; i++) {
            if (btn.data.index === state.colliderBox[i].index) {
                state.colliderBox.splice(i, 1);
                break;
            }
        }
        cc.audioEngine.play(this._clickSound, false, 1);
        this.updateState(state);
    };
    dragAnswer_model03_v1.prototype._onDragMove = function (evt) {
    };
    dragAnswer_model03_v1.prototype._onDragEnd = function (evt) {
        cc.audioEngine.play(this._dragSound, false, 1);
        var state = globalThis._.cloneDeep(this._state);
        var btn = fgui.GObject.cast(evt.currentTarget);
        var tarPos = new cc.Vec2(btn.x, btn.y);
        var isContainer = false;
        for (var i = 0; i < this._leftContain.length; i++) {
            if (this._leftContain[i] === btn) {
                isContainer = true;
                this._leftContain.splice(i, 1);
                for (var i_1 = 0; i_1 < state.leftContain.length; i_1++) {
                    if (state.leftContain[i_1].index === btn.data.index) {
                        state.leftContain.splice(i_1, 1);
                        break;
                    }
                }
                break;
            }
        }
        for (var i = 0; i < this._rightContain.length; i++) {
            if (this._rightContain[i] === btn) {
                isContainer = true;
                this._rightContain.splice(i, 1);
                for (var i_2 = 0; i_2 < state.rightContain.length; i_2++) {
                    if (state.rightContain[i_2].index === btn.data.index) {
                        state.rightContain.splice(i_2, 1);
                        break;
                    }
                }
                break;
            }
        }
        if (isContainer) {
            // 恢复原位
            var temp = {
                pos: {
                    x: btn.data.x,
                    y: btn.data.y
                },
                index: btn.data.index
            };
            state.colliderBox.push(temp);
            for (var i = 0; i < state.leftContain.length; i++) {
                state.leftContain[i].pos.x = this._leftPositon[i].x;
                state.leftContain[i].pos.y = this._leftPositon[i].y;
            }
            for (var i = 0; i < state.rightContain.length; i++) {
                state.rightContain[i].pos.x = this._rightPositon[i].x;
                state.rightContain[i].pos.y = this._rightPositon[i].y;
            }
            this.updateState(state);
            return;
        }
        // 左
        if (this._leftRect.contains(tarPos) && this._leftContain.length < this._containerTotal) {
            console.log('==== 左 ====');
            this._leftContain.push(btn);
            var temp = { pos: { x: this._leftPositon[state.leftContain.length].x,
                    y: this._leftPositon[state.leftContain.length].y },
                index: btn.data.index };
            state.leftContain.push(temp);
        }
        else if (this._rightRect.contains(tarPos) && this._rightContain.length < this._containerTotal) {
            this._rightContain.push(btn);
            var temp = { pos: { x: this._rightPositon[state.rightContain.length].x,
                    y: this._rightPositon[state.rightContain.length].y },
                index: btn.data.index };
            state.rightContain.push(temp);
        }
        else {
            var temp = { pos: { x: btn.data.x, y: btn.data.y }, index: btn.data.index };
            state.colliderBox.push(temp);
        }
        this.updateState(state);
    };
    dragAnswer_model03_v1.prototype.refreshBg = function (answer) {
        if (answer.length === 0) {
            this._bg1.visible = true;
            this._bg2.visible = false;
            this._bg3.visible = false;
        }
        else if (answer.length === 1) {
            this._bg1.visible = false;
            this._bg2.visible = true;
            this._bg3.visible = false;
            this.answerFeedback(true);
        }
        else if (answer.length === 2) {
            this._bg1.visible = false;
            this._bg2.visible = false;
            this._bg3.visible = true;
            this.answerFeedback(true);
        }
    };
    dragAnswer_model03_v1.prototype.refreshInitPanel = function () {
        var state = globalThis._.cloneDeep(this._state);
        state.colliderBox = [];
        for (var i = 0; i < this._colliderBox.length; i++) {
            var temp = {
                pos: {
                    x: this._colliderBox[i].data.x,
                    y: this._colliderBox[i].data.y
                },
                index: this._colliderBox[i].data.index
            };
            state.colliderBox.push(temp);
        }
        this._leftContain = [];
        this._rightContain = [];
        state.leftContain = [];
        state.rightContain = [];
        this.updateState(state);
    };
    dragAnswer_model03_v1.prototype._clickTitle = function (evt) {
        cc.audioEngine.play(this._clickSound, false, 1);
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model03_v1.prototype.playTitle = function (bool) {
        return __awaiter(this, void 0, void 0, function () {
            var item, audio, audioId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._c1.selectedIndex = bool ? 1 : 0;
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
    dragAnswer_model03_v1.prototype._clickSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var state, isSame1, isSame2, i, i, i, temp;
            return __generator(this, function (_a) {
                state = globalThis._.cloneDeep(this._state);
                if (this._answer.length === 0 || this._answer.length === 1) {
                    if (this._leftContain.length === 0 && this._rightContain.length === 0) {
                        state.submit = true;
                        this.updateState(state);
                        return [2 /*return*/];
                    }
                }
                else if (this._answer.length >= 2) {
                    return [2 /*return*/];
                }
                if (this._leftContain.length < this._containerTotal || this._rightContain.length < this._containerTotal) {
                    this.answerFeedback(false);
                    return [2 /*return*/];
                }
                isSame1 = false;
                isSame2 = false;
                if (this._leftContain[0].name[0] === this._leftContain[1].name[0] &&
                    this._leftContain[0].name[0] === this._leftContain[2].name[0] &&
                    this._leftContain[0].name[0] === this._leftContain[3].name[0]) {
                    isSame1 = true;
                }
                else if (this._leftContain[0].name[1] === this._leftContain[1].name[1] &&
                    this._leftContain[0].name[1] === this._leftContain[2].name[1] &&
                    this._leftContain[0].name[1] === this._leftContain[3].name[1]) {
                    isSame2 = true;
                }
                if (isSame1) {
                    console.log('==== 回答 isSame1 ====');
                    for (i = 0; i < this._answer.length; i++) {
                        if (this._answer[i] == this.answerType.SIZE) {
                            this.answerFeedback(false);
                            // this.refreshInitPanel();
                            return [2 /*return*/];
                        }
                    }
                    this._answer.push(this.answerType.SIZE); //大小
                    state.answer = this._answer;
                }
                else if (isSame2) {
                    console.log('==== 回答 isSame2 ====');
                    for (i = 0; i < this._answer.length; i++) {
                        if (this._answer[i] == this.answerType.COLOUR) {
                            this.answerFeedback(false);
                            // this.refreshInitPanel();
                            return [2 /*return*/];
                        }
                    }
                    this._answer.push(this.answerType.COLOUR); //颜色
                    state.answer = this._answer;
                }
                else {
                    this.answerFeedback(false);
                    console.log('==== 回答错误 ====');
                }
                if (this._answer.length === 1) {
                    state.colliderBox = [];
                    for (i = 0; i < this._colliderBox.length; i++) {
                        temp = {
                            pos: {
                                x: this._colliderBox[i].data.x,
                                y: this._colliderBox[i].data.y
                            },
                            index: this._colliderBox[i].data.index
                        };
                        state.colliderBox.push(temp);
                    }
                    this._leftContain = [];
                    this._rightContain = [];
                    state.leftContain = [];
                    state.rightContain = [];
                }
                this.updateState(state);
                return [2 /*return*/];
            });
        });
    };
    // 获取状态
    dragAnswer_model03_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model03_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model03_v1.prototype.updateUi = function (oldState, state) {
        if (!globalThis._.isEqual(oldState.answer, state.answer)) {
            this.refreshBg(state.answer);
        }
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                this.onHandleGuide(this.handleGuide);
            }
        }
        if (!globalThis._.isEqual(oldState.colliderBox, state.colliderBox)) {
            for (var i = 0; i < state.colliderBox.length; i++) {
                this._colliderBox[state.colliderBox[i].index].x = state.colliderBox[i].pos.x;
                this._colliderBox[state.colliderBox[i].index].y = state.colliderBox[i].pos.y;
            }
        }
        if (!globalThis._.isEqual(oldState.leftContain, state.leftContain)) {
            for (var i = 0; i < state.leftContain.length; i++) {
                this._colliderBox[state.leftContain[i].index].x = state.leftContain[i].pos.x;
                this._colliderBox[state.leftContain[i].index].y = state.leftContain[i].pos.y;
            }
        }
        if (!globalThis._.isEqual(oldState.rightContain, state.rightContain)) {
            for (var i = 0; i < state.rightContain.length; i++) {
                this._colliderBox[state.rightContain[i].index].x = state.rightContain[i].pos.x;
                this._colliderBox[state.rightContain[i].index].y = state.rightContain[i].pos.y;
            }
        }
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    };
    dragAnswer_model03_v1.prototype.answerFeedback = function (bool) {
        if (!this.feedback)
            return;
        var feedback = cc.instantiate(this.feedback);
        feedback.x = 960;
        feedback.y = 540;
        var feedbackJs = feedback.getComponent(cc.Component);
        feedbackJs.init(bool);
        feedback.parent = cc.find("Canvas").parent;
        setTimeout(function () {
            feedback.destroy();
        }, 1000);
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model03_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model03_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model03_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model03_v1.prototype.onEnable = function () {
        this.registerState();
        // this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model03_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model03_v1 = __decorate([
        ccclass
    ], dragAnswer_model03_v1);
    return dragAnswer_model03_v1;
}(cc.Component));
exports.default = dragAnswer_model03_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDQtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQXdwQkM7UUFqcEJXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGtCQUFZLEdBQVEsQ0FBQyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDekYsbUJBQWEsR0FBUSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxF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Q0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLHdEQUF3RDtJQUMzRCxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUF2cEJnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQXdwQnpDO0lBQUQsNEJBQUM7Q0F4cEJELEFBd3BCQyxDQXhwQmtELEVBQUUsQ0FBQyxTQUFTLEdBd3BCOUQ7a0JBeHBCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHJ1emh1YW5cclxuICogQERhdGU6IDIwMjEtNS0yMSAxNToxMzowMFxyXG4gKiBATGFzdEVkaXRvcnM6IHJ1emh1YW5cclxuICogQExhc3RFZGl0VGltZTogMjAyMS01LTIxIDE1OjEzOjAwXHJcbiAqL1xyXG5cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuY29uc3QgeyBwb2ludEJlbG9uZ0FyZWEgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRyYWdBbnN3ZXJfbW9kZWwwM192MSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF93b3JsZFJvb3Q6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIF92aWV3OiBmZ3VpLkdDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJHcm91cDpmZ3VpLkdHcm91cDtcclxuICAgIHByaXZhdGUgX2NvbGxpZGVyZWRHcm91cDpmZ3VpLkdHcm91cDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJCb3ggPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9sZWZ0UG9zaXRvbjogYW55ID0gW3t4OiAzMzAsIHk6NzYwfSwge3g6IDU0MCwgeTo3NjB9LCB7eDogMzMwLCB5OjkyNX0sIHt4OiA1NDAsIHk6OTI1fV07XHJcbiAgICBwcml2YXRlIF9yaWdodFBvc2l0b246IGFueSA9IFt7eDogMTM3MCwgeTo3NjB9LCB7eDogMTYxMCwgeTo3NjB9LCB7eDogMTM3MCwgeTo5MjV9LCB7eDogMTYxMCwgeTo5MjV9XTtcclxuXHJcbiAgICBwcml2YXRlIF9sZWZ0UmVjdDogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX3JpZ2h0UmVjdDogY2MuUmVjdDtcclxuXHJcbiAgICBwcml2YXRlIF9sZWZ0Q29udGFpbjogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9yaWdodENvbnRhaW46IGFueSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbnRhaW5lclRvdGFsOiBudW1iZXIgPSA0O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQ2FjaGUgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfYmcxOiBmZ3VpLkdJbWFnZTtcclxuXHJcbiAgICBwcml2YXRlIF9iZzI6IGZndWkuR0ltYWdlO1xyXG5cclxuICAgIHByaXZhdGUgX2JnMzogZmd1aS5HSW1hZ2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcml2YXRlIF90aXRsZTogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIHByaXZhdGUgX2RyYWdTb3VuZDogY2MuQXVkaW9DbGlwO1xyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGFuc3dlclR5cGU6IGFueSA9IGNjLkVudW0oe1xyXG5cclxuICAgICAgICBTSVpFOiAxLFxyXG4gICAgICAgIENPTE9VUjogMlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g6L+c56iL5Yqo5oCB57uE5Lu2XHJcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfYW5zd2VyOiBhbnkgPSBbXTsgLy8gMO+8muayoeetlOmimOaXtiAx77ya562U5a+556ys5LiA56eN6YCJ5oup5pe2IDLvvJog562U5a+556ys5LqM56eN6YCJ5oup5pe2XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy5fdmlldy54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuX3ZpZXcud2lkdGgpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICBpZiAodGhpcy5fYzEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzEuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlXCIpLmFzQnV0dG9uO1xyXG5cclxuICAgICAgICB0aGlzLl9jb2xsaWRlckdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXJlZEdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyZWRCb3hcIikuYXNHcm91cDtcclxuXHJcbiAgICAgICAgdGhpcy5fYmcxID0gdGhpcy5fdmlldy5nZXRDaGlsZCgnYmcxJykuYXNJbWFnZTtcclxuICAgICAgICB0aGlzLl9iZzIgPSB0aGlzLl92aWV3LmdldENoaWxkKCdiZzInKS5hc0ltYWdlO1xyXG4gICAgICAgIHRoaXMuX2JnMyA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoJ2JnMycpLmFzSW1hZ2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2JnMS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9iZzIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2JnMy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmlldy5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gdGhpcy5fY29sbGlkZXJHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGU6IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIG5vZGUuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHg6IG5vZGUueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBub2RlLnlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5vZGUub24oZmd1aS5FdmVudC5UT1VDSF9CRUdJTiwgdGhpcy5fb25EcmFnU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vbihmZ3VpLkV2ZW50LlRPVUNIX0VORCwgdGhpcy5fb25EcmFnRW5kLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sbGlkZXJEYXRhID0ge3Bvczp7eDogbm9kZS5kYXRhLngsIHk6IG5vZGUuZGF0YS55fSwgaW5kZXg6IG5vZGUuZGF0YS5pbmRleH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckNhY2hlLnB1c2goY29sbGlkZXJEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2xlZnRSZWN0ID0gbmV3IGNjLlJlY3QoMTExLCA2NDEsIDY1NCwgNDA3KTtcclxuICAgICAgICB0aGlzLl9yaWdodFJlY3QgPSBuZXcgY2MuUmVjdCgxMTYyLCA2NDEsIDY1NCwgNDA3KTtcclxuXHJcblxyXG4gICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICBhbnN3ZXI6IHRoaXMuX2Fuc3dlcixcclxuXHJcbiAgICAgICAgICAgIGNvbGxpZGVyQm94OiB0aGlzLl9jb2xsaWRlckNhY2hlLFxyXG4gIFxyXG4gICAgICAgICAgICBsZWZ0Q29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICByaWdodENvbnRhaW46IFtdLFxyXG5cclxuICAgICAgICAgICAgdGl0bGU6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgc3VibWl0OiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Li05pe2IOemgeatouaTjeS9nOacn+mXtCDliIfpobVcclxuICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIC8vIOaTjeS9nOaPkOekulxyXG4gICAgIG9uSGFuZGxlR3VpZGUoaGFuZGxlR3VpZGUpIHtcclxuICAgICAgICBpZiAoIWhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQoaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAoaGFuZGxlR3VpZGUucG9zKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIGhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgaGFuZGxlR3VpZGUucG9zLng7XHJcbiAgICAgICAgICAgIGhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSBoYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyBoYW5kbGVHdWlkZS5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IGhhbmRsZUd1aWRlLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKGhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Li05pe2XHJcbiAgICAvLyDmi5bmi73lrprml7blmahcclxuICAgIGRyYWdTY2hlZHVsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZyA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIOS4tOaXtiBtb2RlbCBjb21wb25lbnQganNvbiDphY3nva7liqDovb1cclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcblxyXG4gICAgICAgIGlmIChtb2RlbC51aVBhdGgpIHtcclxuICAgICAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kZWwuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGxldCB7IGFuc3dlciwgYWUgfSA9IG1vZGVsLmNvbmZpZztcclxuICAgICAgICAgICAgaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICAgICAgaWYgKGFlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkcmFnQnV0OmZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoJ2RyYWdTb3VuZCcpLmFzQnV0dG9uO1xyXG4gICAgICAgIGRyYWdCdXQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKGRyYWdCdXRbXCJfc291bmRcIl0pO1xyXG4gICAgICAgIHRoaXMuX2RyYWdTb3VuZCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcblxyXG4gICAgICAgIGxldCBjbGlja0J1dDpmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkKCdjbGlja1NvdW5kJykuYXNCdXR0b247XHJcbiAgICAgICAgY2xpY2tCdXQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwoY2xpY2tCdXRbXCJfc291bmRcIl0pO1xyXG4gICAgICAgIHRoaXMuX2NsaWNrU291bmQgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9yaWdpblZhbHVlKHY6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHYueCxcclxuICAgICAgICAgICAgeTogdi55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICBldnQuY2FwdHVyZVRvdWNoKCk7XHJcblxyXG4gICAgICAgIHZhciBidG46IGZndWkuR09iamVjdCA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb2xsaWRlckJveC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICBpZiAoYnRuLmRhdGEuaW5kZXggPT09IHN0YXRlLmNvbGxpZGVyQm94W2ldLmluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuX2NsaWNrU291bmQsIGZhbHNlLCAxKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnTW92ZShldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0VuZChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuX2RyYWdTb3VuZCwgZmFsc2UsIDEpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICB2YXIgYnRuOiBmZ3VpLkdPYmplY3QgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IHRhclBvcyA9IG5ldyBjYy5WZWMyKGJ0bi54LCBidG4ueSk7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZWZ0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xlZnRDb250YWluW2ldID09PSBidG4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpc0NvbnRhaW5lciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbi5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZWZ0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUubGVmdENvbnRhaW5baV0uaW5kZXggPT09IGJ0bi5kYXRhLmluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sZWZ0Q29udGFpbi5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2h0Q29udGFpbltpXSA9PT0gYnRuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaXNDb250YWluZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmlnaHRDb250YWluLnNwbGljZShpLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4ID09PSBidG4uZGF0YS5pbmRleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucmlnaHRDb250YWluLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogYnRuLmRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJ0bi5kYXRhLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZWZ0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlLmxlZnRDb250YWluW2ldLnBvcy54ID0gdGhpcy5fbGVmdFBvc2l0b25baV0ueDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmxlZnRDb250YWluW2ldLnBvcy55ID0gdGhpcy5fbGVmdFBvc2l0b25baV0ueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW5baV0ucG9zLnggPSB0aGlzLl9yaWdodFBvc2l0b25baV0ueDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnJpZ2h0Q29udGFpbltpXS5wb3MueSA9IHRoaXMuX3JpZ2h0UG9zaXRvbltpXS55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGlmICh0aGlzLl9sZWZ0UmVjdC5jb250YWlucyh0YXJQb3MpICYmIHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSDlt6YgPT09PScpO1xyXG4gICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiB0aGlzLl9sZWZ0UG9zaXRvbltzdGF0ZS5sZWZ0Q29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2xlZnRQb3NpdG9uW3N0YXRlLmxlZnRDb250YWluLmxlbmd0aF0ueX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5sZWZ0Q29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmlnaHRSZWN0LmNvbnRhaW5zKHRhclBvcykgJiYgdGhpcy5fcmlnaHRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiB0aGlzLl9yaWdodFBvc2l0b25bc3RhdGUucmlnaHRDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fcmlnaHRQb3NpdG9uW3N0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGhdLnl9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4fTtcclxuICAgICAgICAgICAgc3RhdGUucmlnaHRDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiBidG4uZGF0YS54LCB5OiBidG4uZGF0YS55fSwgaW5kZXg6IGJ0bi5kYXRhLmluZGV4fTtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVmcmVzaEJnKGFuc3dlcikge1xyXG5cclxuICAgICAgICBpZiAoYW5zd2VyLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fYmcxLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9iZzIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9iZzMudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGFuc3dlci5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2JnMS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2JnMi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fYmczLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2sodHJ1ZSk7XHJcblxyXG4gICAgICAgIH1lbHNlIGlmIChhbnN3ZXIubGVuZ3RoID09PSAyKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9iZzEudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9iZzIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9iZzMudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hJbml0UGFuZWwoKSB7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJCb3ggPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS55fSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS5pbmRleFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9yaWdodENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICAgICAgc3RhdGUubGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tUaXRsZShldnQ6IGFueSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5fY2xpY2tTb3VuZCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUudGl0bGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzEuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuXHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbzogY2MuQXVkaW9DbGlwID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jbGlja1N1Ym1pdChldnQ6IGFueSkge1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDAgfHwgdGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbGVmdENvbnRhaW4ubGVuZ3RoID09PSAwICYmIHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGggPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPj0gMil7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbGVmdENvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWwgfHwgdGhpcy5fcmlnaHRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyDliY3vvJoxIOWQju+8mjJcclxuICAgICAgICBsZXQgaXNTYW1lMSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc1NhbWUyID0gZmFsc2U7XHJcbiAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVswXSA9PT0gdGhpcy5fbGVmdENvbnRhaW5bMV0ubmFtZVswXSAmJiBcclxuICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVswXSA9PT0gdGhpcy5fbGVmdENvbnRhaW5bMl0ubmFtZVswXSAmJlxyXG4gICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9sZWZ0Q29udGFpblszXS5uYW1lWzBdKSB7XHJcblxyXG4gICAgICAgICAgICBpc1NhbWUxID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fbGVmdENvbnRhaW5bMV0ubmFtZVsxXSAmJiBcclxuICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fbGVmdENvbnRhaW5bMl0ubmFtZVsxXSAmJlxyXG4gICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpblswXS5uYW1lWzFdID09PSB0aGlzLl9sZWZ0Q29udGFpblszXS5uYW1lWzFdKSB7XHJcblxyXG4gICAgICAgICAgICBpc1NhbWUyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBpZiAoaXNTYW1lMSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT0g5Zue562UIGlzU2FtZTEgPT09PScpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW5zd2VyW2ldID09IHRoaXMuYW5zd2VyVHlwZS5TSVpFKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVmcmVzaEluaXRQYW5lbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fYW5zd2VyLnB1c2godGhpcy5hbnN3ZXJUeXBlLlNJWkUpOyAvL+Wkp+Wwj1xyXG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXIgPSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGlzU2FtZTIpe1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT0g5Zue562UIGlzU2FtZTIgPT09PScpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hbnN3ZXIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW5zd2VyW2ldID09IHRoaXMuYW5zd2VyVHlwZS5DT0xPVVIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlZnJlc2hJbml0UGFuZWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2Fuc3dlci5wdXNoKHRoaXMuYW5zd2VyVHlwZS5DT0xPVVIpOyAvL+minOiJslxyXG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXIgPSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOWbnuetlOmUmeivryA9PT09Jyk7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueX0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLmluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaHRDb250YWluID0gW107XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5sZWZ0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW4gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkob2xkU3RhdGU6IGFueSwgc3RhdGU6IGFueSkge1xyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmFuc3dlciwgc3RhdGUuYW5zd2VyKSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQmcoc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uSGFuZGxlR3VpZGUodGhpcy5oYW5kbGVHdWlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuY29sbGlkZXJCb3gsIHN0YXRlLmNvbGxpZGVyQm94KSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnggPSAgc3RhdGUuY29sbGlkZXJCb3hbaV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnkgPSAgc3RhdGUuY29sbGlkZXJCb3hbaV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5sZWZ0Q29udGFpbiwgc3RhdGUubGVmdENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmxlZnRDb250YWluLmxlbmd0aDsgaSsrKSB7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5sZWZ0Q29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmxlZnRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmxlZnRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUubGVmdENvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUucmlnaHRDb250YWluLCBzdGF0ZS5yaWdodENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUucmlnaHRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUucmlnaHRDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnRpdGxlLCBzdGF0ZS50aXRsZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5VGl0bGUoc3RhdGUudGl0bGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbnN3ZXJGZWVkYmFjayhib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZlZWRiYWNrKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZlZWRiYWNrKTtcclxuICAgICAgICBmZWVkYmFjay54ID0gOTYwO1xyXG4gICAgICAgIGZlZWRiYWNrLnkgPSA1NDA7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrSnM6IGFueSA9IGZlZWRiYWNrLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZlZWRiYWNrSnMuaW5pdChib29sKTtcclxuICAgICAgICBmZWVkYmFjay5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgICAgIC8vIHRoaXMuc2NoZWR1bGUodGhpcy5kcmFnU2NoZWR1bGUsIHRoaXMuX3NjaGVkdWxlVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==