"use strict";
cc._RF.push(module, '8582a154A1KnJ1Ds0dfeFzz', 'dragAnswer-model03-v1');
// prefabLibrary/models/dragAnswer/dragAnswer-model03-v1.ts

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