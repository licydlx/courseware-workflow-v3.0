
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model04-v4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b01crZrK1IJ7p1663zFI2l', 'dragAnswer-model04-v4');
// prefabLibrary/models/dragAnswer/dragAnswer-model04-v4.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ruzhuan
 * @Date: 2021-5-27 19:47:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-5-27 19:47:00
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
var dragAnswer_model03_v4 = /** @class */ (function (_super) {
    __extends(dragAnswer_model03_v4, _super);
    function dragAnswer_model03_v4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colliderBox = [];
        _this._leftPositon = [{ x: 230, y: 770 }, { x: 450, y: 770 }, { x: 230, y: 920 }, { x: 450, y: 920 }];
        _this._midPositon = [{ x: 840, y: 770 }, { x: 1070, y: 770 }, { x: 840, y: 920 }, { x: 1070, y: 920 }];
        _this._rightPositon = [{ x: 1480, y: 770 }, { x: 1690, y: 770 }, { x: 1480, y: 920 }, { x: 1690, y: 920 }];
        _this._typeBoxPos1 = [{ x: 175, y: 780 }, { x: 175, y: 913 }];
        _this._typeBoxPos2 = [{ x: 495, y: 780 }, { x: 495, y: 913 }];
        _this._typeBoxPos3 = [{ x: 810, y: 780 }, { x: 810, y: 913 }];
        _this._typeBoxPos4 = [{ x: 1120, y: 780 }, { x: 1120, y: 913 }];
        _this._typeBoxPos5 = [{ x: 1445, y: 780 }, { x: 1445, y: 913 }];
        _this._typeBoxPos6 = [{ x: 1760, y: 780 }, { x: 1760, y: 913 }];
        _this._colliderCacheSecond = [
            { pos: { x: 230, y: 295 }, index: 0 },
            { pos: { x: 430, y: 295 }, index: 0 },
            { pos: { x: 230, y: 440 }, index: 0 },
            { pos: { x: 430, y: 440 }, index: 0 },
            { pos: { x: 860, y: 295 }, index: 0 },
            { pos: { x: 1080, y: 295 }, index: 0 },
            { pos: { x: 860, y: 440 }, index: 0 },
            { pos: { x: 1080, y: 440 }, index: 0 },
            { pos: { x: 1475, y: 295 }, index: 0 },
            { pos: { x: 1680, y: 295 }, index: 0 },
            { pos: { x: 1475, y: 440 }, index: 0 },
            { pos: { x: 1680, y: 440 }, index: 0 }
        ];
        _this._leftContain = [];
        _this._rightContain = [];
        _this._midContain = [];
        _this._box1Contain = [];
        _this._box2Contain = [];
        _this._box3Contain = [];
        _this._box4Contain = [];
        _this._box5Contain = [];
        _this._box6Contain = [];
        _this._containerTotal = 4;
        _this._containerTotalSecond = 2;
        _this._colliderCache = [];
        _this._dragging = false;
        _this.answerType = cc.Enum({
            Shap: 1,
            Color: 2 // 正方形---长方形  三角形---平行四边形
        });
        _this._answer = []; // 0：没答题时 1：答对第一种选择时 2： 答对第二种选择时
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model03_v4.prototype, "state", {
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
    dragAnswer_model03_v4.prototype.onLoad = function () {
        this._answer = [];
        this._leftContain = [];
        this._rightContain = [];
        this._midContain = [];
        this._box1Contain = [];
        this._box2Contain = [];
        this._box3Contain = [];
        this._box4Contain = [];
        this._box5Contain = [];
        this._box6Contain = [];
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
        this._submit = this._view.getChild("submit").asButton;
        if (this._submit)
            this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._colliderGroup = this._view.getChild("colliderBox").asGroup;
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == this._colliderGroup) {
                var node = this._view.getChildAt(i).asButton;
                node.draggable = true;
                node.data = {
                    index: this._colliderBox.length,
                    x: node.x,
                    y: node.y,
                    posIndex: -1
                };
                node.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                node.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                node.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(node);
                var colliderData = { pos: { x: node.data.x, y: node.data.y }, index: node.data.index, posIndex: node.data.posIndex };
                this._colliderCache.push(colliderData);
            }
        }
        var left = this._view.getChild("leftBg").asImage;
        var right = this._view.getChild("rightBg").asImage;
        var mid = this._view.getChild("midBg").asImage;
        var box1 = this._view.getChild("typebg1").asImage;
        var box2 = this._view.getChild("typebg2").asImage;
        var box3 = this._view.getChild("typebg3").asImage;
        var box4 = this._view.getChild("typebg4").asImage;
        var box5 = this._view.getChild("typebg5").asImage;
        var box6 = this._view.getChild("typebg6").asImage;
        this._leftRect = new cc.Rect(left.x, left.y, left.width, left.height);
        this._rightRect = new cc.Rect(right.x, right.y, right.width, right.height);
        this._midRect = new cc.Rect(mid.x, mid.y, mid.width, mid.height);
        this._boxRect1 = new cc.Rect(box1.x, box1.y, box1.width, box1.height);
        this._boxRect2 = new cc.Rect(box2.x, box2.y, box2.width, box2.height);
        this._boxRect3 = new cc.Rect(box3.x, box3.y, box3.width, box3.height);
        this._boxRect4 = new cc.Rect(box4.x, box4.y, box4.width, box4.height);
        this._boxRect5 = new cc.Rect(box5.x, box5.y, box5.width, box5.height);
        this._boxRect6 = new cc.Rect(box6.x, box6.y, box6.width, box6.height);
        this._c2 = this._view.getController("c2");
        this._c1 = this._view.getController("c1");
        if (this._c2) {
            this._c2.selectedIndex = 0;
        }
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        this._title = this._view.getChild("title").asButton;
        // 初始化state
        this._state = {
            answer: this._answer,
            colliderBox: this._colliderCache,
            leftContain: [],
            rightContain: [],
            midContain: [],
            box1Contain: [],
            box2Contain: [],
            box3Contain: [],
            box4Contain: [],
            box5Contain: [],
            box6Contain: [],
            submit: false,
            title: false,
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    // 运行时 禁止操作
    dragAnswer_model03_v4.prototype.forbidHandle = function () {
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
    dragAnswer_model03_v4.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model03_v4.prototype.dragSchedule = function () {
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
    dragAnswer_model03_v4.prototype.init = function (data) {
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
    // 操作提示
    dragAnswer_model03_v4.prototype.onHandleGuide = function (handleGuide) {
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
    dragAnswer_model03_v4.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    dragAnswer_model03_v4.prototype._onDragStart = function (evt) {
        console.log('===== _onDragStart 111 =====');
        evt.captureTouch();
        this._lastPos = evt.pos;
        var btn = fgui.GObject.cast(evt.currentTarget);
        btn.sortingOrder = 99;
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
    dragAnswer_model03_v4.prototype._onDragMove = function (evt) {
        console.log('===== _onDragMove 222 =====');
    };
    dragAnswer_model03_v4.prototype._onDragEnd = function (evt) {
        cc.audioEngine.play(this._dragSound, false, 1);
        if (this._answer.length === 0) {
            // 第一次答题时
            this.dragEndFirstDeal(evt);
        }
        else if (this._answer.length === 1) {
            // 第二次答题时
            this.dragEndScendDeal(evt);
        }
    };
    dragAnswer_model03_v4.prototype.dragEndFirstDeal = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;
        var btn = fgui.GObject.cast(evt.currentTarget);
        var tarPos = new cc.Vec2(btn.x, btn.y);
        var isContainerLeft = false;
        var isContainerRight = false;
        var isContainerMid = false;
        isContainerLeft = this.judgeDragObjInBox(this._leftContain, btn);
        isContainerRight = this.judgeDragObjInBox(this._rightContain, btn);
        isContainerMid = this.judgeDragObjInBox(this._midContain, btn);
        // 左
        if (this._leftRect.contains(tarPos)) {
            console.log('==== 左 ====');
            if (isContainerLeft) {
                if (moveIsMin || this._leftContain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._leftContain, btn, state.leftContain);
                    this.refreshBoxPos(state.leftContain, this._leftPositon);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.leftContain, this._leftPositon, btn, this._leftContain, state.colliderBox);
                }
            }
            else {
                this.dealAllContainIn(false, true, true, false, false, false, false, false, false, state, btn);
                if (this._leftContain.length < this._containerTotal) {
                    this._leftContain.push(btn);
                    var temp = {
                        pos: {
                            x: this._leftPositon[state.leftContain.length].x,
                            y: this._leftPositon[state.leftContain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.leftContain.length
                    };
                    state.leftContain.push(temp);
                }
                else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }
        }
        else if (this._rightRect.contains(tarPos)) {
            if (isContainerRight) {
                if (moveIsMin || this._rightContain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._rightContain, btn, state.rightContain);
                    this.refreshBoxPos(state.rightContain, this._rightPositon);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.rightContain, this._rightPositon, btn, this._rightContain, state.colliderBox);
                }
            }
            else {
                this.dealAllContainIn(true, true, false, false, false, false, false, false, false, state, btn);
                if (this._rightContain.length < this._containerTotal) {
                    this._rightContain.push(btn);
                    var temp = {
                        pos: {
                            x: this._rightPositon[state.rightContain.length].x,
                            y: this._rightPositon[state.rightContain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.rightContain.length
                    };
                    state.rightContain.push(temp);
                }
                else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }
        }
        else if (this._midRect.contains(tarPos)) {
            if (isContainerMid) {
                if (moveIsMin || this._midContain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._midContain, btn, state.midContain);
                    this.refreshBoxPos(state.midContain, this._midPositon);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.midContain, this._midPositon, btn, this._midContain, state.colliderBox);
                }
            }
            else {
                this.dealAllContainIn(true, false, true, false, false, false, false, false, false, state, btn);
                if (this._midContain.length < this._containerTotal) {
                    this._midContain.push(btn);
                    var temp = {
                        pos: {
                            x: this._midPositon[state.midContain.length].x,
                            y: this._midPositon[state.midContain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.midContain.length
                    };
                    state.midContain.push(temp);
                }
                else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }
        }
        else {
            this.dealAllContainIn(true, true, true, false, false, false, false, false, false, state, btn);
            // 恢复原位
            this.resetButtonInitPos(state.colliderBox, btn);
        }
        this.updateState(state);
    };
    dragAnswer_model03_v4.prototype.dragEndScendDeal = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;
        var btn = fgui.GObject.cast(evt.currentTarget);
        var tarPos = new cc.Vec2(btn.x, btn.y);
        var isContainer1 = false;
        var isContainer2 = false;
        var isContainer3 = false;
        var isContainer4 = false;
        var isContainer5 = false;
        var isContainer6 = false;
        isContainer1 = this.judgeDragObjInBox(this._box1Contain, btn);
        isContainer2 = this.judgeDragObjInBox(this._box2Contain, btn);
        isContainer3 = this.judgeDragObjInBox(this._box3Contain, btn);
        isContainer4 = this.judgeDragObjInBox(this._box4Contain, btn);
        isContainer5 = this.judgeDragObjInBox(this._box5Contain, btn);
        isContainer6 = this.judgeDragObjInBox(this._box6Contain, btn);
        // 左
        if (this._boxRect1.contains(tarPos)) {
            console.log('==== 框1 ====');
            if (isContainer1) {
                if (moveIsMin || this._box1Contain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box1Contain, btn, state.box1Contain);
                    this.refreshBoxPos(state.box1Contain, this._typeBoxPos1);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box1Contain, this._typeBoxPos1, btn, this._box1Contain, state.colliderBox);
                }
            }
            else {
                this.dealAllContainIn(false, false, false, false, true, true, true, true, true, state, btn);
                if (this._box1Contain.length < this._containerTotalSecond) {
                    this._box1Contain.push(btn);
                    var temp = {
                        pos: {
                            x: this._typeBoxPos1[state.box1Contain.length].x,
                            y: this._typeBoxPos1[state.box1Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box1Contain.length
                    };
                    state.box1Contain.push(temp);
                }
                else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }
        }
        else if (this._boxRect2.contains(tarPos)) {
            console.log('==== 框2 ====');
            if (isContainer2) {
                if (moveIsMin || this._box2Contain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box2Contain, btn, state.box2Contain);
                    this.refreshBoxPos(state.box2Contain, this._typeBoxPos2);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box2Contain, this._typeBoxPos2, btn, this._box2Contain, state.colliderBox);
                }
            }
            else {
                this.dealAllContainIn(false, false, false, true, false, true, true, true, true, state, btn);
                if (this._box2Contain.length < this._containerTotalSecond) {
                    this._box2Contain.push(btn);
                    var temp = {
                        pos: {
                            x: this._typeBoxPos2[state.box2Contain.length].x,
                            y: this._typeBoxPos2[state.box2Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box2Contain.length
                    };
                    state.box2Contain.push(temp);
                }
                else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }
        }
        else if (this._boxRect3.contains(tarPos)) {
            console.log('==== 框3 ====');
            if (isContainer3) {
                if (moveIsMin || this._box3Contain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box3Contain, btn, state.box3Contain);
                    this.refreshBoxPos(state.box3Contain, this._typeBoxPos3);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box3Contain, this._typeBoxPos3, btn, this._box3Contain, state.colliderBox);
                }
            }
            else {
                this.dealAllContainIn(false, false, false, true, true, false, true, true, true, state, btn);
                if (this._box3Contain.length < this._containerTotalSecond) {
                    this._box3Contain.push(btn);
                    var temp = {
                        pos: {
                            x: this._typeBoxPos3[state.box3Contain.length].x,
                            y: this._typeBoxPos3[state.box3Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box3Contain.length
                    };
                    state.box3Contain.push(temp);
                }
                else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }
        }
        else if (this._boxRect4.contains(tarPos)) {
            console.log('==== 框4 ====');
            if (isContainer4) {
                if (moveIsMin || this._box4Contain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box4Contain, btn, state.box4Contain);
                    this.refreshBoxPos(state.box4Contain, this._typeBoxPos4);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box4Contain, this._typeBoxPos4, btn, this._box4Contain, state.colliderBox);
                }
            }
            else {
                this.dealAllContainIn(false, false, false, true, true, true, false, true, true, state, btn);
                if (this._box4Contain.length < this._containerTotalSecond) {
                    this._box4Contain.push(btn);
                    var temp = {
                        pos: {
                            x: this._typeBoxPos4[state.box4Contain.length].x,
                            y: this._typeBoxPos4[state.box4Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box4Contain.length
                    };
                    state.box4Contain.push(temp);
                }
                else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }
        }
        else if (this._boxRect5.contains(tarPos)) {
            console.log('==== 框5 ====');
            if (isContainer5) {
                if (moveIsMin || this._box5Contain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box5Contain, btn, state.box5Contain);
                    this.refreshBoxPos(state.box5Contain, this._typeBoxPos5);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box5Contain, this._typeBoxPos5, btn, this._box5Contain, state.colliderBox);
                }
            }
            else {
                this.dealAllContainIn(false, false, false, true, true, true, true, false, true, state, btn);
                if (this._box5Contain.length < this._containerTotalSecond) {
                    this._box5Contain.push(btn);
                    var temp = {
                        pos: {
                            x: this._typeBoxPos5[state.box5Contain.length].x,
                            y: this._typeBoxPos5[state.box5Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box5Contain.length
                    };
                    state.box5Contain.push(temp);
                }
                else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }
        }
        else if (this._boxRect6.contains(tarPos)) {
            console.log('==== 框6 ====');
            if (isContainer6) {
                if (moveIsMin || this._box6Contain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box6Contain, btn, state.box6Contain);
                    this.refreshBoxPos(state.box6Contain, this._typeBoxPos6);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box6Contain, this._typeBoxPos6, btn, this._box6Contain, state.colliderBox);
                }
            }
            else {
                this.dealAllContainIn(false, false, false, true, true, true, true, true, false, state, btn);
                if (this._box6Contain.length < this._containerTotalSecond) {
                    this._box6Contain.push(btn);
                    var temp = {
                        pos: {
                            x: this._typeBoxPos6[state.box6Contain.length].x,
                            y: this._typeBoxPos6[state.box6Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box6Contain.length
                    };
                    state.box6Contain.push(temp);
                }
                else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }
        }
        else {
            this.dealAllContainIn(false, false, false, true, true, true, true, true, true, state, btn);
            // 恢复原位
            this.resetButtonInitPos(state.colliderBox, btn);
        }
        this.updateState(state);
    };
    dragAnswer_model03_v4.prototype.dealAllContainIn = function (isContainerLeft, isContainerMid, isContainerRight, isContainer1, isContainer2, isContainer3, isContainer4, isContainer5, isContainer6, state, btn) {
        if (isContainerLeft) {
            this.deleteCurDragObjInBox(this._leftContain, btn, state.leftContain);
            this.refreshBoxPos(state.leftContain, this._leftPositon);
        }
        if (isContainerMid) {
            this.deleteCurDragObjInBox(this._midContain, btn, state.midContain);
            this.refreshBoxPos(state.midContain, this._midPositon);
        }
        if (isContainerRight) {
            this.deleteCurDragObjInBox(this._rightContain, btn, state.rightContain);
            this.refreshBoxPos(state.rightContain, this._rightPositon);
        }
        if (isContainer1) {
            this.deleteCurDragObjInBox(this._box1Contain, btn, state.box1Contain);
            this.refreshBoxPos(state.box1Contain, this._typeBoxPos1);
        }
        if (isContainer2) {
            this.deleteCurDragObjInBox(this._box2Contain, btn, state.box2Contain);
            this.refreshBoxPos(state.box2Contain, this._typeBoxPos2);
        }
        if (isContainer3) {
            this.deleteCurDragObjInBox(this._box3Contain, btn, state.box3Contain);
            this.refreshBoxPos(state.box3Contain, this._typeBoxPos3);
        }
        if (isContainer4) {
            this.deleteCurDragObjInBox(this._box4Contain, btn, state.box4Contain);
            this.refreshBoxPos(state.box4Contain, this._typeBoxPos4);
        }
        if (isContainer5) {
            this.deleteCurDragObjInBox(this._box5Contain, btn, state.box5Contain);
            this.refreshBoxPos(state.box5Contain, this._typeBoxPos5);
        }
        if (isContainer6) {
            this.deleteCurDragObjInBox(this._box6Contain, btn, state.box6Contain);
            this.refreshBoxPos(state.box6Contain, this._typeBoxPos6);
        }
    };
    dragAnswer_model03_v4.prototype.judgeChangePosInBox = function (curPos, stateContain, posArr, btn, boxContain, stateColliderBox) {
        var changeIndex = -1;
        var clickIndex = btn.data.posIndex;
        console.log('交换 点击的Index ========' + btn.data.posIndex);
        if (curPos.x - this._lastPos.x > 100 && Math.abs(curPos.y - this._lastPos.y) < 50) {
            console.log('交换 右 ========');
            //右
            changeIndex = clickIndex + 1;
        }
        else if (curPos.x - this._lastPos.x < -100 && Math.abs(curPos.y - this._lastPos.y) < 50) {
            //左
            console.log('交换 左 ========');
            changeIndex = clickIndex - 1;
        }
        else if (curPos.y - this._lastPos.y > 100 && Math.abs(curPos.x - this._lastPos.x) < 50) {
            // 下
            console.log('交换 下 ========');
            if (this._answer.length === 0) {
                changeIndex = clickIndex + 2;
            }
            else if (this._answer.length === 1) {
                changeIndex = clickIndex + 1;
            }
        }
        else if (curPos.y - this._lastPos.y < -100 && Math.abs(curPos.x - this._lastPos.x) < 50) {
            // 上
            console.log('交换 上 ========');
            if (this._answer.length === 0) {
                changeIndex = clickIndex - 2;
            }
            else if (this._answer.length === 1) {
                changeIndex = clickIndex - 1;
            }
        }
        else if (curPos.x - this._lastPos.x > 100 && curPos.y - this._lastPos.y > 100) {
            // 右下
            console.log('交换 右下 ========');
            changeIndex = clickIndex + 3;
        }
        else if (Math.abs(curPos.x - this._lastPos.x) > 50 && curPos.x - this._lastPos.x < 100 && curPos.y - this._lastPos.y > 100) {
            // 左下
            console.log('交换 左下 ========');
            changeIndex = clickIndex + 1;
        }
        else if (curPos.x - this._lastPos.x > 100 && curPos.y - this._lastPos.y < 100 && Math.abs(curPos.y - this._lastPos.y) > 50) {
            // 右上
            console.log('交换 右上 ========');
            changeIndex = clickIndex - 1;
        }
        else if (curPos.x - this._lastPos.x < 100 && curPos.y - this._lastPos.y < 100 && Math.abs(curPos.x - this._lastPos.x) > 50 && Math.abs(curPos.y - this._lastPos.y) > 50) {
            // 左上
            console.log('交换 左上 ========');
            changeIndex = clickIndex - 3;
        }
        else {
            console.log('交换 YYYYY ========' + (curPos.y - this._lastPos.y));
            // 恢复原位
            this.resetButtonInitPos(stateColliderBox, btn);
            //删除左边包含的；刷新
            this.deleteCurDragObjInBox(boxContain, btn, stateContain);
            this.refreshBoxPos(stateContain, posArr);
            return;
        }
        console.log('交换ing clickIndex ========  ' + clickIndex);
        console.log('交换ing changeIndex ========  ' + changeIndex);
        if (changeIndex < 0 || changeIndex > stateContain.length - 1) {
            //删除左边包含的；归位到原来的位置
            this.resetButtonInitPos(stateColliderBox, btn);
            this.deleteCurDragObjInBox(boxContain, btn, stateContain);
            this.refreshBoxPos(stateContain, posArr);
            return;
        }
        var tempClickIndex = stateContain[clickIndex].index;
        var tempChangeIndex = stateContain[changeIndex].index;
        stateContain[clickIndex].index = tempChangeIndex;
        stateContain[changeIndex].index = tempClickIndex;
    };
    dragAnswer_model03_v4.prototype.deleteCurDragObjInBox = function (_box, curBut, stateBox) {
        for (var i = 0; i < _box.length; i++) {
            if (_box[i] === curBut) {
                _box.splice(i, 1);
                for (var i_1 = 0; i_1 < stateBox.length; i_1++) {
                    if (stateBox[i_1].index === curBut.data.index) {
                        stateBox.splice(i_1, 1);
                        break;
                    }
                }
                break;
            }
        }
    };
    dragAnswer_model03_v4.prototype.resetButtonInitPos = function (stateColliderBox, btn) {
        // 恢复原位
        var temp = {
            pos: {
                x: btn.data.x,
                y: btn.data.y
            },
            index: btn.data.index,
            posIndex: -1
        };
        stateColliderBox.push(temp);
    };
    dragAnswer_model03_v4.prototype.judgeDragObjInBox = function (_box, curBut) {
        var isContainer = false;
        for (var i = 0; i < _box.length; i++) {
            if (_box[i] === curBut) {
                isContainer = true;
                break;
            }
        }
        return isContainer;
    };
    dragAnswer_model03_v4.prototype.refreshBoxPos = function (stateBox, posArr) {
        for (var i = 0; i < stateBox.length; i++) {
            stateBox[i].pos.x = posArr[i].x;
            stateBox[i].pos.y = posArr[i].y;
            stateBox[i].posIndex = i;
        }
    };
    dragAnswer_model03_v4.prototype.refreshFirstWrongData = function (state) {
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
        this._midContain = [];
        state.leftContain = [];
        state.rightContain = [];
        state.midContain = [];
    };
    dragAnswer_model03_v4.prototype.refreshSecondWrongData = function (state) {
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
        this._box1Contain = [];
        this._box2Contain = [];
        this._box3Contain = [];
        this._box4Contain = [];
        this._box5Contain = [];
        this._box6Contain = [];
        state.box1Contain = [];
        state.box2Contain = [];
        state.box3Contain = [];
        state.box4Contain = [];
        state.box5Contain = [];
        state.box6Contain = [];
    };
    dragAnswer_model03_v4.prototype._clickTitle = function (evt) {
        cc.audioEngine.play(this._clickSound, false, 1);
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model03_v4.prototype.playTitle = function (bool) {
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
    dragAnswer_model03_v4.prototype._clickSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                if (this._answer.length >= 2) {
                    return [2 /*return*/];
                }
                state = globalThis._.cloneDeep(this._state);
                if (this._answer.length === 0) {
                    if (this._leftContain.length === 0 ||
                        this._rightContain.length === 0 ||
                        this._midContain.length === 0 ||
                        (this._leftContain.length !== this._rightContain.length) ||
                        (this._leftContain.length !== this._midContain.length)) {
                        state.submit = true;
                        this.updateState(state);
                        return [2 /*return*/];
                    }
                }
                if (this._answer.length === 1) {
                    if (this._box1Contain.length === 0 ||
                        this._box2Contain.length === 0 ||
                        this._box3Contain.length === 0 ||
                        this._box4Contain.length === 0 ||
                        this._box5Contain.length === 0 ||
                        this._box6Contain.length === 0 ||
                        (this._box1Contain.length !== this._box2Contain.length) ||
                        (this._box1Contain.length !== this._box3Contain.length) ||
                        (this._box1Contain.length !== this._box4Contain.length) ||
                        (this._box1Contain.length !== this._box4Contain.length)) {
                        state.submit = true;
                        this.updateState(state);
                        return [2 /*return*/];
                    }
                }
                // 前：1 后：2
                if (this._answer.length === 0) {
                    if ((this._leftContain[0].name[0] === this._leftContain[1].name[0] &&
                        this._leftContain[0].name[0] === this._leftContain[2].name[0] &&
                        this._leftContain[0].name[0] === this._leftContain[3].name[0]) &&
                        (this._rightContain[0].name[0] === this._rightContain[1].name[0] &&
                            this._rightContain[0].name[0] === this._rightContain[2].name[0] &&
                            this._rightContain[0].name[0] === this._rightContain[3].name[0]) &&
                        (this._midContain[0].name[0] === this._midContain[1].name[0] &&
                            this._midContain[0].name[0] === this._midContain[2].name[0] &&
                            this._midContain[0].name[0] === this._midContain[3].name[0])) {
                        console.log('=== 第一次回答正确  按照形状分 ===');
                        console.log('=== _leftContain ===' + this._leftContain[0].name[0]);
                        console.log('=== _rightContain ===' + this._rightContain[0].name[0]);
                        console.log('=== _midContain ===' + this._midContain[0].name[0]);
                        // 第一次答案正确
                        this.answerFeedback(true);
                        this._answer.push(this.answerType.Shap);
                        state.answer = this._answer;
                        this.refreshFirstRightData(state);
                    }
                    else {
                        console.log('=== 第一次回答错误 ===' + this._leftContain[0].name[0]);
                        console.log('=== 第一次回答错误 ===' + this._leftContain[1].name[0]);
                        console.log('=== 第一次回答错误 ===' + this._leftContain[2].name[0]);
                        console.log('=== 第一次回答错误 ===' + this._leftContain[3].name[0]);
                        // 第一次答案错误
                        this.answerFeedback(false);
                        // this.refreshFirstWrongData(state);
                    }
                }
                else if (this._answer.length === 1) {
                    // 颜色分
                    if (this._box1Contain[0].name[1] === this._box1Contain[1].name[1] &&
                        this._box3Contain[0].name[1] === this._box3Contain[1].name[1] &&
                        this._box5Contain[0].name[1] === this._box5Contain[1].name[1]) {
                        console.log('=== 第二次答案正确 颜色===');
                        this._answer.push(this.answerType.Color);
                        state.answer = this._answer;
                        this.answerFeedback(true);
                    }
                    else {
                        console.log('=== 第二次答案错误 颜色===');
                        console.log('== _box1Contain 0==' + this._box1Contain[0].name[1] + '== _box1Contain 1==' + this._box1Contain[1].name[1]);
                        console.log('== _box3Contain 0==' + this._box3Contain[0].name[1] + '== _box3Contain 1==' + this._box3Contain[1].name[1]);
                        console.log('== _box5Contain 0==' + this._box5Contain[0].name[1] + '== _box5Contain 1==' + this._box5Contain[1].name[1]);
                        this.answerFeedback(false);
                        // this.refreshSecondWrongData(state);
                    }
                }
                this.updateState(state);
                return [2 /*return*/];
            });
        });
    };
    dragAnswer_model03_v4.prototype.refreshFirstRightData = function (state) {
        state.colliderBox = [];
        // 第二次做题时初始化按钮全部位置
        for (var i = 0; i < this._colliderCacheSecond.length; i++) {
            if (i < this._containerTotal) {
                var temp = {
                    pos: {
                        x: this._colliderCacheSecond[i].pos.x,
                        y: this._colliderCacheSecond[i].pos.y
                    },
                    index: state.leftContain[i].index
                };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.leftContain[i].index;
            }
            else if (i < this._containerTotal * 2) {
                var temp = {
                    pos: {
                        x: this._colliderCacheSecond[i].pos.x,
                        y: this._colliderCacheSecond[i].pos.y
                    },
                    index: state.midContain[i - this._containerTotal].index
                };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.midContain[i - this._containerTotal].index;
            }
            else {
                var temp = {
                    pos: {
                        x: this._colliderCacheSecond[i].pos.x,
                        y: this._colliderCacheSecond[i].pos.y
                    },
                    index: state.rightContain[i - this._containerTotal * 2].index
                };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.rightContain[i - this._containerTotal * 2].index;
            }
        }
        for (var i = 0; i < this._colliderBox.length; i++) {
            for (var j = 0; j < this._colliderCacheSecond.length; j++) {
                if (this._colliderBox[i].data.index === this._colliderCacheSecond[j].index) {
                    this._colliderBox[i].data.x = this._colliderCacheSecond[j].pos.x;
                    this._colliderBox[i].data.y = this._colliderCacheSecond[j].pos.y;
                    break;
                }
            }
        }
        this._leftContain = [];
        this._rightContain = [];
        this._midContain = [];
        state.leftContain = [];
        state.rightContain = [];
        state.midContain = [];
    };
    // 获取状态
    dragAnswer_model03_v4.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model03_v4.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model03_v4.prototype.updateUi = function (oldState, state) {
        if (!globalThis._.isEqual(oldState.answer, state.answer)) {
            if (state.answer.length === 1) {
                // 显示第二种答题界面
                this._c2.selectedIndex = 1;
            }
            else if (state.answer.length >= 2) {
                this.offButDrag();
            }
        }
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                if (state.answer.length === 0) {
                    this.onHandleGuide(this.handleGuide);
                }
                else if (state.answer.length === 1) {
                    this.onHandleGuide(this.handleGuide2);
                }
            }
        }
        if (!globalThis._.isEqual(oldState.colliderBox, state.colliderBox)) {
            for (var i = 0; i < state.colliderBox.length; i++) {
                this._colliderBox[state.colliderBox[i].index].x = state.colliderBox[i].pos.x;
                this._colliderBox[state.colliderBox[i].index].y = state.colliderBox[i].pos.y;
                this._colliderBox[state.colliderBox[i].index].data.posIndex = -1;
                this._colliderBox[state.colliderBox[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.leftContain, state.leftContain)) {
            for (var i = 0; i < state.leftContain.length; i++) {
                this._colliderBox[state.leftContain[i].index].x = state.leftContain[i].pos.x;
                this._colliderBox[state.leftContain[i].index].y = state.leftContain[i].pos.y;
                this._colliderBox[state.leftContain[i].index].data.posIndex = state.leftContain[i].posIndex;
                this._colliderBox[state.leftContain[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.rightContain, state.rightContain)) {
            for (var i = 0; i < state.rightContain.length; i++) {
                this._colliderBox[state.rightContain[i].index].x = state.rightContain[i].pos.x;
                this._colliderBox[state.rightContain[i].index].y = state.rightContain[i].pos.y;
                this._colliderBox[state.rightContain[i].index].data.posIndex = state.rightContain[i].posIndex;
                this._colliderBox[state.rightContain[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.midContain, state.midContain)) {
            for (var i = 0; i < state.midContain.length; i++) {
                this._colliderBox[state.midContain[i].index].x = state.midContain[i].pos.x;
                this._colliderBox[state.midContain[i].index].y = state.midContain[i].pos.y;
                this._colliderBox[state.midContain[i].index].data.posIndex = state.midContain[i].posIndex;
                this._colliderBox[state.midContain[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.box1Contain, state.box1Contain)) {
            for (var i = 0; i < state.box1Contain.length; i++) {
                this._colliderBox[state.box1Contain[i].index].x = state.box1Contain[i].pos.x;
                this._colliderBox[state.box1Contain[i].index].y = state.box1Contain[i].pos.y;
                this._colliderBox[state.box1Contain[i].index].data.posIndex = state.box1Contain[i].posIndex;
                this._colliderBox[state.box1Contain[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.box2Contain, state.box2Contain)) {
            for (var i = 0; i < state.box2Contain.length; i++) {
                this._colliderBox[state.box2Contain[i].index].x = state.box2Contain[i].pos.x;
                this._colliderBox[state.box2Contain[i].index].y = state.box2Contain[i].pos.y;
                this._colliderBox[state.box2Contain[i].index].data.posIndex = state.box2Contain[i].posIndex;
                this._colliderBox[state.box2Contain[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.box3Contain, state.box3Contain)) {
            for (var i = 0; i < state.box3Contain.length; i++) {
                this._colliderBox[state.box3Contain[i].index].x = state.box3Contain[i].pos.x;
                this._colliderBox[state.box3Contain[i].index].y = state.box3Contain[i].pos.y;
                this._colliderBox[state.box3Contain[i].index].data.posIndex = state.box3Contain[i].posIndex;
                this._colliderBox[state.box3Contain[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.box4Contain, state.box4Contain)) {
            for (var i = 0; i < state.box4Contain.length; i++) {
                this._colliderBox[state.box4Contain[i].index].x = state.box4Contain[i].pos.x;
                this._colliderBox[state.box4Contain[i].index].y = state.box4Contain[i].pos.y;
                this._colliderBox[state.box4Contain[i].index].data.posIndex = state.box4Contain[i].posIndex;
                this._colliderBox[state.box4Contain[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.box5Contain, state.box5Contain)) {
            for (var i = 0; i < state.box5Contain.length; i++) {
                this._colliderBox[state.box5Contain[i].index].x = state.box5Contain[i].pos.x;
                this._colliderBox[state.box5Contain[i].index].y = state.box5Contain[i].pos.y;
                this._colliderBox[state.box5Contain[i].index].data.posIndex = state.box5Contain[i].posIndex;
                this._colliderBox[state.box5Contain[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.box6Contain, state.box6Contain)) {
            for (var i = 0; i < state.box6Contain.length; i++) {
                this._colliderBox[state.box6Contain[i].index].x = state.box6Contain[i].pos.x;
                this._colliderBox[state.box6Contain[i].index].y = state.box6Contain[i].pos.y;
                this._colliderBox[state.box6Contain[i].index].data.posIndex = state.box6Contain[i].posIndex;
                this._colliderBox[state.box6Contain[i].index].sortingOrder = 1;
            }
        }
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    };
    dragAnswer_model03_v4.prototype.answerFeedback = function (bool) {
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
        }, 2000);
    };
    dragAnswer_model03_v4.prototype.offButDrag = function () {
        this.arrContainOffDrag(this._leftContain);
        this.arrContainOffDrag(this._rightContain);
        this.arrContainOffDrag(this._box1Contain);
        this.arrContainOffDrag(this._box2Contain);
        this.arrContainOffDrag(this._box3Contain);
        this.arrContainOffDrag(this._box4Contain);
        this.arrContainOffDrag(this._box5Contain);
        this.arrContainOffDrag(this._box6Contain);
    };
    dragAnswer_model03_v4.prototype.arrContainOffDrag = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].draggable = false;
        }
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model03_v4.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model03_v4.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model03_v4.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model03_v4.prototype.onEnable = function () {
        this.registerState();
        // this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model03_v4.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model03_v4 = __decorate([
        ccclass
    ], dragAnswer_model03_v4);
    return dragAnswer_model03_v4;
}(cc.Component));
exports.default = dragAnswer_model03_v4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDQtdjQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQW1nREM7UUE1L0NXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGtCQUFZLEdBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckcsaUJBQVcsR0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN0RyxtQkFBYSxHQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRTFHLGtCQUFZLEdBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM3RCxrQkFBWSxHQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0Qsa0JBQVksR0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzdELGtCQUFZLEdBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvRCxrQkFBWSxHQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0Qsa0JBQVksR0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELDBCQUFvQixHQUFRO1lBQ2hDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUNyQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDckMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUVyQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDckMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQ3RDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUNyQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFFdEMs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QUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztTQUM5QjtRQUVELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNsRSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4RixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUVwRCxXQUFXO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUVWLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTztZQUVwQixXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFFaEMsV0FBVyxFQUFFLEVBQUU7WUFFZixZQUFZLEVBQUUsRUFBRTtZQUVoQixVQUFVLEVBQUUsRUFBRTtZQUVkLFdBQVcsRUFBRSxFQUFFO1lBRWYsV0FBVyxFQUFFLEVBQUU7WUFFZixXQUFXLEVBQUUsRUFBRTtZQUVmLFdBQVcsRUFBRSxFQUFFO1lBRWYsV0FBVyxFQUFFLEVBQUU7WUFFZixXQUFXLEVBQUUsRUFBRTtZQUVmLE1BQU0sRUFBRSxLQUFLO1lBRWIsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFBO1FBRUQsZUFBZTtRQUNmLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXO0lBQ1gsNENBQVksR0FBWjtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDYixJQUFJLFlBQVUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0MsWUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM3QyxZQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEMsWUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDeEIsWUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsWUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbkIsWUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRUQsT0FBTztJQUNQLG1EQUFtQixHQUFuQjtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksVUFBVTtZQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsS0FBSztJQUNMLFFBQVE7SUFDUiw0Q0FBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNwQixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRztnQkFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2FBQzlDLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVLLG9DQUFJLEdBQVYsVUFBVyxJQUFTOzs7Ozs7d0JBR1YsVUFBVSxHQUF3QixJQUFJLFdBQTVCLEVBQUUsS0FBSyxHQUFpQixJQUFJLE1BQXJCLEVBQUUsVUFBVSxHQUFLLElBQUksV0FBVCxDQUFVO3dCQUN6QyxPQUFPLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQzt3QkFFckMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFOzRCQUNWLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDOzRCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7eUJBQ3ZFO3dCQUVELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTs0QkFDVixLQUFpQixLQUFLLENBQUMsTUFBTSxFQUEzQixNQUFNLFlBQUEsRUFBRSxFQUFFLFFBQUEsQ0FBa0I7NEJBQ2xDLElBQUksTUFBTTtnQ0FBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs0QkFDbEMsT0FBTzs0QkFDUCxJQUFJLEVBQUUsRUFBRTtnQ0FDSixLQUFTLENBQUMsSUFBSSxFQUFFLEVBQUU7b0NBQ2QsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0NBQ1AsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3Q0FDYixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzRDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7d0NBQ3JHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7NENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3FDQUMxQztpQ0FDSjs2QkFDSjt5QkFDSjs2QkFFRyxVQUFVLEVBQVYsd0JBQVU7O21DQUNRLFVBQVU7Ozs7Ozs7d0JBQ3BCLGFBQWEsR0FBUSxLQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFZLENBQUM7d0JBQ3RGLHFCQUFNLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBQTs7d0JBQXRELGVBQWUsR0FBUSxTQUErQjt3QkFDL0IscUJBQU0sVUFBVSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFwRixlQUFlLEdBQVEsU0FBNkQ7d0JBQ3hGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUM7Ozs7Ozt3QkFJaEMsT0FBTyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ3RFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzFELEtBQUEsSUFBSSxDQUFBO3dCQUFjLHFCQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQTdELEdBQUssVUFBVSxHQUFHLFNBQTJDLENBQUM7d0JBRTFELFFBQVEsR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUN4RSxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxLQUFBLElBQUksQ0FBQTt3QkFBZSxxQkFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUE5RCxHQUFLLFdBQVcsR0FBRyxTQUEyQyxDQUFDOzs7OztLQUNsRTtJQUVELE9BQU87SUFDUCw2Q0FBYSxHQUFiLFVBQWMsV0FBVztRQUF6QixpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQ3pCLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNqQixXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3RzthQUFNO1lBQ0gsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekY7UUFFRCxJQUFJLENBQUMsR0FBb0IsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkQsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsOENBQWMsR0FBZCxVQUFlLENBQU07UUFDakIsT0FBTztZQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNOLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNULENBQUE7SUFDTCxDQUFDO0lBRU8sNENBQVksR0FBcEIsVUFBcUIsR0FBZTtRQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDNUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUV4QixJQUFJLEdBQUcsR0FBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdELEdBQUcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFL0MsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFFL0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNO2FBQ1Q7U0FDSjtRQUNELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLDJDQUFXLEdBQW5CLFVBQW9CLEdBQWU7UUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFFTywwQ0FBVSxHQUFsQixVQUFtQixHQUFlO1FBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRS9DLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBRTNCLFNBQVM7WUFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7U0FFOUI7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUVsQyxTQUFTO1lBQ1QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUVPLGdEQUFnQixHQUF4QixVQUF5QixHQUFHO1FBRXhCLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFekcsSUFBSSxHQUFHLEdBQWlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQztRQUUzQixlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakUsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkUsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRS9ELElBQUk7UUFDSixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFM0IsSUFBSSxlQUFlLEVBQUU7Z0JBQ2pCLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFFM0MsT0FBTztvQkFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFFaEQsWUFBWTtvQkFDWixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUU1RDtxQkFBTTtvQkFFSCxVQUFVO29CQUNWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3RIO2FBR0o7aUJBQU07Z0JBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFL0YsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUVqRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFNUIsSUFBSSxJQUFJLEdBQUc7d0JBQ1AsR0FBRyxFQUFFOzRCQUNELENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDaEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUNuRDt3QkFDRCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO3dCQUNyQixRQUFRLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNO3FCQUNyQyxDQUFDO29CQUNGLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUVoQztxQkFBTTtvQkFFSCxPQUFPO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUVuRDthQUdKO1NBRUo7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXpDLElBQUksZ0JBQWdCLEVBQUU7Z0JBRWxCLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFFNUMsT0FBTztvQkFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFFaEQsWUFBWTtvQkFDWixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN4RSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUM5RDtxQkFBTTtvQkFFSCxVQUFVO29CQUNWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3pIO2FBRUo7aUJBQU07Z0JBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFL0YsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUVsRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFN0IsSUFBSSxJQUFJLEdBQUc7d0JBQ1AsR0FBRyxFQUFFOzRCQUNELENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDbEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUNyRDt3QkFDRCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO3dCQUNyQixRQUFRLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNO3FCQUN0QyxDQUFDO29CQUNGLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUVqQztxQkFBTTtvQkFFSCxPQUFPO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNuRDthQUVKO1NBQ0o7YUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXJDLElBQUksY0FBYyxFQUFFO2dCQUVoQixJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBRTFDLE9BQU87b0JBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBRWhELFlBQVk7b0JBQ1osSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDMUQ7cUJBQU07b0JBRUgsVUFBVTtvQkFDVixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNuSDthQUVKO2lCQUFNO2dCQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRS9GLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFFaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRTNCLElBQUksSUFBSSxHQUFHO3dCQUNQLEdBQUcsRUFBRTs0QkFDRCxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQzlDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt5QkFDakQ7d0JBQ0QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDckIsUUFBUSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTTtxQkFDcEMsQ0FBQztvQkFDRixLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFFL0I7cUJBQU07b0JBQ0gsT0FBTztvQkFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDbkQ7YUFFSjtTQUNKO2FBQU07WUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTlGLE9BQU87WUFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQUVPLGdEQUFnQixHQUF4QixVQUF5QixHQUFHO1FBRXhCLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFekcsSUFBSSxHQUFHLEdBQWlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFekIsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUQsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFOUQsSUFBSTtRQUNKLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU1QixJQUFJLFlBQVksRUFBRTtnQkFFZCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBRTNDLE9BQU87b0JBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBRWhELFlBQVk7b0JBQ1osSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFFNUQ7cUJBQU07b0JBRUgsVUFBVTtvQkFDVixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN0SDthQUdKO2lCQUFNO2dCQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRTVGLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFO29CQUV2RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFNUIsSUFBSSxJQUFJLEdBQUc7d0JBQ1AsR0FBRyxFQUFFOzRCQUNELENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDaEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUNuRDt3QkFDRCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO3dCQUNyQixRQUFRLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNO3FCQUNyQyxDQUFDO29CQUNGLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUVoQztxQkFBTTtvQkFFSCxPQUFPO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNuRDthQUVKO1NBRUo7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFNUIsSUFBSSxZQUFZLEVBQUU7Z0JBRWQsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUUzQyxPQUFPO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUVoRCxZQUFZO29CQUNaLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBRTVEO3FCQUFNO29CQUVILFVBQVU7b0JBQ1YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDdEg7YUFHSjtpQkFBTTtnQkFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtvQkFFdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRTVCLElBQUksSUFBSSxHQUFHO3dCQUNQLEdBQUcsRUFBRTs0QkFDRCxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ2hELENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt5QkFDbkQ7d0JBQ0QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDckIsUUFBUSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTTtxQkFDckMsQ0FBQztvQkFDRixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFFaEM7cUJBQU07b0JBRUgsT0FBTztvQkFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFFbkQ7YUFHSjtTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTVCLElBQUksWUFBWSxFQUFFO2dCQUVkLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFFM0MsT0FBTztvQkFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFFaEQsWUFBWTtvQkFDWixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUU1RDtxQkFBTTtvQkFFSCxVQUFVO29CQUNWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3RIO2FBR0o7aUJBQU07Z0JBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFNUYsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBRXZELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUU1QixJQUFJLElBQUksR0FBRzt3QkFDUCxHQUFHLEVBQUU7NEJBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNoRCxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7eUJBQ25EO3dCQUNELEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7d0JBQ3JCLFFBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU07cUJBQ3JDLENBQUM7b0JBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBRWhDO3FCQUFNO29CQUVILE9BQU87b0JBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ25EO2FBRUo7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU1QixJQUFJLFlBQVksRUFBRTtnQkFFZCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBRTNDLE9BQU87b0JBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBRWhELFlBQVk7b0JBQ1osSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFFNUQ7cUJBQU07b0JBRUgsVUFBVTtvQkFDVixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN0SDthQUdKO2lCQUFNO2dCQUVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRTVGLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFO29CQUV2RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFNUIsSUFBSSxJQUFJLEdBQUc7d0JBQ1AsR0FBRyxFQUFFOzRCQUNELENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDaEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUNuRDt3QkFDRCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO3dCQUNyQixRQUFRLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNO3FCQUNyQyxDQUFDO29CQUNGLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUVoQztxQkFBTTtvQkFFSCxPQUFPO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUVuRDthQUdKO1NBRUo7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFNUIsSUFBSSxZQUFZLEVBQUU7Z0JBRWQsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUUzQyxPQUFPO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUdoRCxZQUFZO29CQUNaLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBRTVEO3FCQUFNO29CQUVILFVBQVU7b0JBQ1YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDdEg7YUFFSjtpQkFBTTtnQkFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtvQkFFdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRTVCLElBQUksSUFBSSxHQUFHO3dCQUNQLEdBQUcsRUFBRTs0QkFDRCxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ2hELENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt5QkFDbkQ7d0JBQ0QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDckIsUUFBUSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTTtxQkFDckMsQ0FBQztvQkFDRixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFFaEM7cUJBQU07b0JBRUgsT0FBTztvQkFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDbkQ7YUFFSjtTQUVKO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTVCLElBQUksWUFBWSxFQUFFO2dCQUVkLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFFM0MsT0FBTztvQkFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFHaEQsWUFBWTtvQkFDWixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUU1RDtxQkFBTTtvQkFFSCxVQUFVO29CQUNWLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBRXRIO2FBR0o7aUJBQU07Z0JBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFNUYsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBRXZELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUU1QixJQUFJLElBQUksR0FBRzt3QkFDUCxHQUFHLEVBQUU7NEJBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzRCQUNoRCxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7eUJBQ25EO3dCQUNELEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7d0JBQ3JCLFFBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU07cUJBQ3JDLENBQUM7b0JBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBRWhDO3FCQUFNO29CQUVILE9BQU87b0JBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBRW5EO2FBRUo7U0FFSjthQUFNO1lBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUUzRixPQUFPO1lBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkQ7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxnREFBZ0IsR0FBeEIsVUFBeUIsZUFBZSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRztRQUV0SyxJQUFJLGVBQWUsRUFBRTtZQUVqQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLGNBQWMsRUFBRTtZQUVoQixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxJQUFJLGdCQUFnQixFQUFFO1lBRWxCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksWUFBWSxFQUFFO1lBRWQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxZQUFZLEVBQUU7WUFFZCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLFlBQVksRUFBRTtZQUVkLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksWUFBWSxFQUFFO1lBRWQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFFZCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLFlBQVksRUFBRTtZQUVkLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM1RDtJQUVMLENBQUM7SUFFTyxtREFBbUIsR0FBM0IsVUFBNEIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0I7UUFFdkYsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBRS9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsR0FBRztZQUNILFdBQVcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBRWhDO2FBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUV2RixHQUFHO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixXQUFXLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUVoQzthQUFNLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBRXRGLElBQUk7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUUzQixXQUFXLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUNoQztpQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFFbEMsV0FBVyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7YUFDaEM7U0FHSjthQUFNLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFFdkYsSUFBSTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBRTNCLFdBQVcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUVsQyxXQUFXLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUNoQztTQUVKO2FBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtZQUU3RSxLQUFLO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLFdBQVcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBRWhDO2FBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFFMUgsS0FBSztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixXQUFXLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUVoQzthQUFNLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzFILEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsV0FBVyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FFaEM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFFdkssS0FBSztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM5QixXQUFXLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUVoQzthQUFNO1lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhFLE9BQU87WUFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFL0MsWUFBWTtZQUNaLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXpDLE9BQU87U0FDVjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUUxRCxJQUFJLFdBQVcsR0FBRyxDQUFDLElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBRTFELGtCQUFrQjtZQUNsQixJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFekMsT0FBTztTQUNWO1FBRUQsSUFBSSxjQUFjLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRCxJQUFJLGVBQWUsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXRELFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQ2pELFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO0lBQ3JELENBQUM7SUFFTyxxREFBcUIsR0FBN0IsVUFBOEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBRWhELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRWxDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtnQkFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWxCLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxFQUFFO29CQUV0QyxJQUFJLFFBQVEsQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBRXpDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixNQUFNO3FCQUNUO2lCQUNKO2dCQUNELE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUVPLGtEQUFrQixHQUExQixVQUEyQixnQkFBZ0IsRUFBRSxHQUFHO1FBRTVDLE9BQU87UUFDUCxJQUFJLElBQUksR0FBRztZQUNQLEdBQUcsRUFDSDtnQkFDSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEI7WUFDRCxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3JCLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDZixDQUFDO1FBQ0YsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFFTyxpREFBaUIsR0FBekIsVUFBMEIsSUFBSSxFQUFFLE1BQU07UUFFbEMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRWxDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtnQkFFcEIsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDbkIsTUFBTTthQUNUO1NBQ0o7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRU8sNkNBQWEsR0FBckIsVUFBc0IsUUFBUSxFQUFFLE1BQU07UUFFbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFdEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVPLHFEQUFxQixHQUE3QixVQUE4QixLQUFLO1FBRS9CLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUUvQyxJQUFJLElBQUksR0FBRztnQkFDUCxHQUFHLEVBQUU7b0JBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQztnQkFFRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSzthQUN6QyxDQUFDO1lBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV0QixLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBRU8sc0RBQXNCLEdBQTlCLFVBQStCLEtBQUs7UUFFaEMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRS9DLElBQUksSUFBSSxHQUFHO2dCQUNQLEdBQUcsRUFBRTtvQkFDRCxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDOUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pDO2dCQUVELEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ3pDLENBQUM7WUFDRixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTywyQ0FBVyxHQUFuQixVQUFvQixHQUFRO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFSyx5Q0FBUyxHQUFmLFVBQWdCLElBQWE7Ozs7Ozs7d0JBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBRWxDLElBQUksRUFBSix3QkFBSTt3QkFDSixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ2hCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLHFCQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQWpFLEtBQUssR0FBaUIsU0FBMkM7d0JBQ2pFLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTs0QkFDdEMsSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUNyRCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs0QkFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDNUIsQ0FBQyxDQUFDLENBQUM7Ozt3QkFFSCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs7Ozs7O0tBRWxDO0lBRWEsNENBQVksR0FBMUIsVUFBMkIsR0FBUTs7OztnQkFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBRTFCLHNCQUFPO2lCQUNWO2dCQUNHLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXJELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUUzQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQzdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7d0JBQ3hELENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDeEQsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCLHNCQUFPO3FCQUNWO2lCQUNKO2dCQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUUzQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUM7d0JBQzlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7d0JBQ3ZELENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7d0JBQ3ZELENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7d0JBQ3ZELENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDekQsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCLHNCQUFPO3FCQUNWO2lCQUNKO2dCQUVELFVBQVU7Z0JBQ1YsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzlELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRTlELENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUVsRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7d0JBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRWpFLFVBQVU7d0JBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDeEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUM1QixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBRXJDO3lCQUFNO3dCQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFOUQsVUFBVTt3QkFDVixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQixxQ0FBcUM7cUJBQ3hDO2lCQUVKO3FCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUVsQyxNQUFNO29CQUNOLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUUvRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3pDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFFNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDN0I7eUJBQU07d0JBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLHFCQUFxQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pILE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUd6SCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQixzQ0FBc0M7cUJBQ3pDO2lCQUVKO2dCQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7S0FDM0I7SUFFRCxxREFBcUIsR0FBckIsVUFBc0IsS0FBSztRQUV2QixLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixrQkFBa0I7UUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFFMUIsSUFBSSxJQUFJLEdBQUc7b0JBQ1AsR0FBRyxFQUFFO3dCQUNELENBQUMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3hDO29CQUVELEtBQUssRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7aUJBQ3BDLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFFbkU7aUJBQU0sSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7Z0JBRXJDLElBQUksSUFBSSxHQUFHO29CQUNQLEdBQUcsRUFBRTt3QkFDRCxDQUFDLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN4QztvQkFFRCxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUs7aUJBQzFELENBQUM7Z0JBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUV6RjtpQkFBTTtnQkFFSCxJQUFJLElBQUksR0FBRztvQkFDUCxHQUFHLEVBQUU7d0JBQ0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEM7b0JBRUQsS0FBSyxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSztpQkFDaEUsQ0FBQztnQkFDRixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUMvRjtTQUNKO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRS9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUV2RCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUN4RSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakUsTUFBTTtpQkFDVDthQUNKO1NBQ0o7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV0QixLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBRUQsT0FBTztJQUNQLHdDQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUTtJQUNSLDJDQUFXLEdBQVgsVUFBWSxRQUFhO1FBQ3JCLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFBRSxPQUFPO1FBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFRO0lBQ1Isd0NBQVEsR0FBUixVQUFTLFFBQWEsRUFBRSxLQUFVO1FBRTlCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUV0RCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDM0IsWUFBWTtnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7YUFFOUI7aUJBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBRWpDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQjtTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXRELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDZCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3hDO3FCQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDekM7YUFFSjtTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBRWhFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFFL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDbEU7U0FDSjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUVoRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzVGLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0o7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFFbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUM5RixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzthQUNuRTtTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBRTlELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMs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Z0JBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUM1RixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzthQUNsRTtTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDNUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDbEU7U0FDSjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCw4Q0FBYyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzNCLElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksVUFBVSxHQUFRLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUUzQyxVQUFVLENBQUM7WUFDUCxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFFSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGlEQUFpQixHQUFqQixVQUFrQixHQUFHO1FBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRWpDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiw2Q0FBYSxHQUFiO1FBQ0ksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWE7WUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiw0Q0FBWSxHQUFaO1FBQ0ksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVk7WUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELGFBQWE7SUFDYiwwQ0FBVSxHQUFWO1FBQ0ksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsd0RBQXdEO0lBQzVELENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWxnRGdCLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBbWdEekM7SUFBRCw0QkFBQztDQW5nREQsQUFtZ0RDLENBbmdEa0QsRUFBRSxDQUFDLFNBQVMsR0FtZ0Q5RDtrQkFuZ0RvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogcnV6aHVhblxyXG4gKiBARGF0ZTogMjAyMS01LTI3IDE5OjQ3OjAwXHJcbiAqIEBMYXN0RWRpdG9yczogcnV6aHVhblxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTUtMjcgMTk6NDc6MDBcclxuICovXHJcblxyXG5jb25zdCB7IGxvYWRCdW5kbGUsIGxvYWRQcmVmYWIsIGxvYWRSZXNvdXJjZSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5jb25zdCB7IHBvaW50QmVsb25nQXJlYSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10udXRpbHM7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZHJhZ0Fuc3dlcl9tb2RlbDAzX3Y0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3dvcmxkUm9vdDogY2MuTm9kZTtcclxuICAgIHByaXZhdGUgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlckdyb3VwOiBmZ3VpLkdHcm91cDtcclxuICAgIHByaXZhdGUgX2NvbGxpZGVyZWRHcm91cDogZmd1aS5HR3JvdXA7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJCb3ggPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9sZWZ0UG9zaXRvbjogYW55ID0gW3sgeDogMjMwLCB5OiA3NzAgfSwgeyB4OiA0NTAsIHk6IDc3MCB9LCB7IHg6IDIzMCwgeTogOTIwIH0sIHsgeDogNDUwLCB5OiA5MjAgfV07XHJcbiAgICBwcml2YXRlIF9taWRQb3NpdG9uOiBhbnkgPSBbeyB4OiA4NDAsIHk6IDc3MCB9LCB7IHg6IDEwNzAsIHk6IDc3MCB9LCB7IHg6IDg0MCwgeTogOTIwIH0sIHsgeDogMTA3MCwgeTogOTIwIH1dO1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRQb3NpdG9uOiBhbnkgPSBbeyB4OiAxNDgwLCB5OiA3NzAgfSwgeyB4OiAxNjkwLCB5OiA3NzAgfSwgeyB4OiAxNDgwLCB5OiA5MjAgfSwgeyB4OiAxNjkwLCB5OiA5MjAgfV07XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZUJveFBvczE6IGFueSA9IFt7IHg6IDE3NSwgeTogNzgwIH0sIHsgeDogMTc1LCB5OiA5MTMgfV07XHJcbiAgICBwcml2YXRlIF90eXBlQm94UG9zMjogYW55ID0gW3sgeDogNDk1LCB5OiA3ODAgfSwgeyB4OiA0OTUsIHk6IDkxMyB9XTtcclxuICAgIHByaXZhdGUgX3R5cGVCb3hQb3MzOiBhbnkgPSBbeyB4OiA4MTAsIHk6IDc4MCB9LCB7IHg6IDgxMCwgeTogOTEzIH1dO1xyXG4gICAgcHJpdmF0ZSBfdHlwZUJveFBvczQ6IGFueSA9IFt7IHg6IDExMjAsIHk6IDc4MCB9LCB7IHg6IDExMjAsIHk6IDkxMyB9XTtcclxuICAgIHByaXZhdGUgX3R5cGVCb3hQb3M1OiBhbnkgPSBbeyB4OiAxNDQ1LCB5OiA3ODAgfSwgeyB4OiAxNDQ1LCB5OiA5MTMgfV07XHJcbiAgICBwcml2YXRlIF90eXBlQm94UG9zNjogYW55ID0gW3sgeDogMTc2MCwgeTogNzgwIH0sIHsgeDogMTc2MCwgeTogOTEzIH1dO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQ2FjaGVTZWNvbmQ6IGFueSA9IFtcclxuICAgICAgICB7IHBvczogeyB4OiAyMzAsIHk6IDI5NSB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDQzMCwgeTogMjk1IH0sIGluZGV4OiAwIH0sXHJcbiAgICAgICAgeyBwb3M6IHsgeDogMjMwLCB5OiA0NDAgfSwgaW5kZXg6IDAgfSxcclxuICAgICAgICB7IHBvczogeyB4OiA0MzAsIHk6IDQ0MCB9LCBpbmRleDogMCB9LFxyXG5cclxuICAgICAgICB7IHBvczogeyB4OiA4NjAsIHk6IDI5NSB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDEwODAsIHk6IDI5NSB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDg2MCwgeTogNDQwIH0sIGluZGV4OiAwIH0sXHJcbiAgICAgICAgeyBwb3M6IHsgeDogMTA4MCwgeTogNDQwIH0sIGluZGV4OiAwIH0sXHJcblxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDE0NzUsIHk6IDI5NSB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDE2ODAsIHk6IDI5NSB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDE0NzUsIHk6IDQ0MCB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDE2ODAsIHk6IDQ0MCB9LCBpbmRleDogMCB9XTtcclxuXHJcbiAgICBwcml2YXRlIF9sZWZ0UmVjdDogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX3JpZ2h0UmVjdDogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX21pZFJlY3Q6IGNjLlJlY3Q7XHJcblxyXG4gICAgcHJpdmF0ZSBfYm94UmVjdDE6IGNjLlJlY3Q7XHJcbiAgICBwcml2YXRlIF9ib3hSZWN0MjogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX2JveFJlY3QzOiBjYy5SZWN0O1xyXG4gICAgcHJpdmF0ZSBfYm94UmVjdDQ6IGNjLlJlY3Q7XHJcbiAgICBwcml2YXRlIF9ib3hSZWN0NTogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX2JveFJlY3Q2OiBjYy5SZWN0O1xyXG5cclxuICAgIHByaXZhdGUgX2xlZnRDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX3JpZ2h0Q29udGFpbjogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9taWRDb250YWluOiBhbnkgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9ib3gxQ29udGFpbjogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9ib3gyQ29udGFpbjogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9ib3gzQ29udGFpbjogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9ib3g0Q29udGFpbjogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9ib3g1Q29udGFpbjogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9ib3g2Q29udGFpbjogYW55ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyVG90YWw6IG51bWJlciA9IDQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyVG90YWxTZWNvbmQ6IG51bWJlciA9IDI7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJDYWNoZSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF9jMTogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGVUcmlnZ2VyOiBmZ3VpLkdMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ1NvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tTb3VuZDogY2MuQXVkaW9DbGlwO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHdWlkZTogYW55O1xyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGUyOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGFuc3dlclR5cGU6IGFueSA9IGNjLkVudW0oe1xyXG5cclxuICAgICAgICBTaGFwOiAxLCAvLyDlpKctLS3lsI8gIOe6oi0tLeapmVxyXG4gICAgICAgIENvbG9yOiAyICAvLyDmraPmlrnlvaItLS3plb/mlrnlvaIgIOS4ieinkuW9oi0tLeW5s+ihjOWbm+i+ueW9olxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlcjogYW55ID0gW107IC8vIDDvvJrmsqHnrZTpopjml7YgMe+8muetlOWvueesrOS4gOenjemAieaLqeaXtiAy77yaIOetlOWvueesrOS6jOenjemAieaLqeaXtlxyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFzdFBvczogYW55O1xyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVaSh0aGlzLl9zdGF0ZSwgdik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fYW5zd2VyID0gW107XHJcbiAgICAgICAgdGhpcy5fbGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9yaWdodENvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9taWRDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fYm94MUNvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9ib3gyQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JveDNDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fYm94NENvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9ib3g1Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JveDZDb250YWluID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy5fdmlldy54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuX3ZpZXcud2lkdGgpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXJHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlckJveFwiKS5hc0dyb3VwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IHRoaXMuX2NvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICBub2RlLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBub2RlLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogbm9kZS55LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc0luZGV4OiAtMVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oZmd1aS5FdmVudC5UT1VDSF9NT1ZFLCB0aGlzLl9vbkRyYWdNb3ZlLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyRGF0YSA9IHsgcG9zOiB7IHg6IG5vZGUuZGF0YS54LCB5OiBub2RlLmRhdGEueSB9LCBpbmRleDogbm9kZS5kYXRhLmluZGV4LCBwb3NJbmRleDogbm9kZS5kYXRhLnBvc0luZGV4IH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckNhY2hlLnB1c2goY29sbGlkZXJEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZWZ0OiBmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJsZWZ0QmdcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgcmlnaHQ6IGZndWkuR0ltYWdlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInJpZ2h0QmdcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgbWlkOiBmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJtaWRCZ1wiKS5hc0ltYWdlO1xyXG5cclxuICAgICAgICBsZXQgYm94MTogZmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidHlwZWJnMVwiKS5hc0ltYWdlO1xyXG4gICAgICAgIGxldCBib3gyOiBmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0eXBlYmcyXCIpLmFzSW1hZ2U7XHJcbiAgICAgICAgbGV0IGJveDM6IGZndWkuR0ltYWdlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInR5cGViZzNcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgYm94NDogZmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidHlwZWJnNFwiKS5hc0ltYWdlO1xyXG4gICAgICAgIGxldCBib3g1OiBmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0eXBlYmc1XCIpLmFzSW1hZ2U7XHJcbiAgICAgICAgbGV0IGJveDY6IGZndWkuR0ltYWdlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInR5cGViZzZcIikuYXNJbWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5fbGVmdFJlY3QgPSBuZXcgY2MuUmVjdChsZWZ0LngsIGxlZnQueSwgbGVmdC53aWR0aCwgbGVmdC5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX3JpZ2h0UmVjdCA9IG5ldyBjYy5SZWN0KHJpZ2h0LngsIHJpZ2h0LnksIHJpZ2h0LndpZHRoLCByaWdodC5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX21pZFJlY3QgPSBuZXcgY2MuUmVjdChtaWQueCwgbWlkLnksIG1pZC53aWR0aCwgbWlkLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2JveFJlY3QxID0gbmV3IGNjLlJlY3QoYm94MS54LCBib3gxLnksIGJveDEud2lkdGgsIGJveDEuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9ib3hSZWN0MiA9IG5ldyBjYy5SZWN0KGJveDIueCwgYm94Mi55LCBib3gyLndpZHRoLCBib3gyLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fYm94UmVjdDMgPSBuZXcgY2MuUmVjdChib3gzLngsIGJveDMueSwgYm94My53aWR0aCwgYm94My5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX2JveFJlY3Q0ID0gbmV3IGNjLlJlY3QoYm94NC54LCBib3g0LnksIGJveDQud2lkdGgsIGJveDQuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9ib3hSZWN0NSA9IG5ldyBjYy5SZWN0KGJveDUueCwgYm94NS55LCBib3g1LndpZHRoLCBib3g1LmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fYm94UmVjdDYgPSBuZXcgY2MuUmVjdChib3g2LngsIGJveDYueSwgYm94Ni53aWR0aCwgYm94Ni5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG4gICAgICAgIHRoaXMuX2MxID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2MyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2MxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9jMS5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlVHJpZ2dlciA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVRyaWdnZXJcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlVHJpZ2dlcikgdGhpcy5fdGl0bGVUcmlnZ2VyLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrVGl0bGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVwiKS5hc0J1dHRvbjtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgICAgIGFuc3dlcjogdGhpcy5fYW5zd2VyLFxyXG5cclxuICAgICAgICAgICAgY29sbGlkZXJCb3g6IHRoaXMuX2NvbGxpZGVyQ2FjaGUsXHJcblxyXG4gICAgICAgICAgICBsZWZ0Q29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICByaWdodENvbnRhaW46IFtdLFxyXG5cclxuICAgICAgICAgICAgbWlkQ29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICBib3gxQ29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICBib3gyQ29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICBib3gzQ29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICBib3g0Q29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICBib3g1Q29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICBib3g2Q29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICBzdWJtaXQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgdGl0bGU6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Li05pe2IOemgeatouaTjeS9nOacn+mXtCDliIfpobVcclxuICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDov5DooYzml7Yg56aB5q2i5pON5L2cXHJcbiAgICBmb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoIWhhbmRsZU1hc2spIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSBuZXcgY2MuTm9kZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5wYXJlbnQgPSB0aGlzLl93b3JsZFJvb3Q7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sud2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueCA9IDk2MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay55ID0gNTQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Li05pe2XHJcbiAgICAvLyDmi5bmi73lrprml7blmahcclxuICAgIGRyYWdTY2hlZHVsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZyA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdChkYXRhOiBhbnkpIHtcclxuXHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLnVpUGF0aCkge1xyXG4gICAgICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSB9ID0gbW9kZWwuY29uZmlnO1xyXG4gICAgICAgICAgICBpZiAoYW5zd2VyKSB0aGlzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgICAgICBpZiAoYWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1t2XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0ucG9zKSB0aGlzW3ZdLnBvcyA9IGFlW3ZdLnBvcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQYXRoOiBhbnkgPSBgJHtwYXRoQ29uZmlnLnJlbW90ZVVybH0ke3BhdGhDb25maWcuY29tcG9uZW50QnVuZGxlUGF0aH0ke2NvbXBvbmVudHNba2V5XS5idW5kbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50QnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbXBvbmVudFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb21wb25lbnRCdW5kbGUsIGNvbXBvbmVudHNba2V5XS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbXBvbmVudFByZWZhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRyYWdCdXQ6IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoJ2RyYWdTb3VuZCcpLmFzQnV0dG9uO1xyXG4gICAgICAgIGRyYWdCdXQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKGRyYWdCdXRbXCJfc291bmRcIl0pO1xyXG4gICAgICAgIHRoaXMuX2RyYWdTb3VuZCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcblxyXG4gICAgICAgIGxldCBjbGlja0J1dDogZmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZCgnY2xpY2tTb3VuZCcpLmFzQnV0dG9uO1xyXG4gICAgICAgIGNsaWNrQnV0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKGNsaWNrQnV0W1wiX3NvdW5kXCJdKTtcclxuICAgICAgICB0aGlzLl9jbGlja1NvdW5kID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoaGFuZGxlR3VpZGUpIHtcclxuICAgICAgICBpZiAoIWhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQoaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAoaGFuZGxlR3VpZGUucG9zKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIGhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgaGFuZGxlR3VpZGUucG9zLng7XHJcbiAgICAgICAgICAgIGhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSBoYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyBoYW5kbGVHdWlkZS5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IGhhbmRsZUd1aWRlLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKGhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmlnaW5WYWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB2LngsXHJcbiAgICAgICAgICAgIHk6IHYueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09IF9vbkRyYWdTdGFydCAxMTEgPT09PT0nKTtcclxuICAgICAgICBldnQuY2FwdHVyZVRvdWNoKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2xhc3RQb3MgPSBldnQucG9zO1xyXG5cclxuICAgICAgICB2YXIgYnRuOiBmZ3VpLkdPYmplY3QgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgYnRuLnNvcnRpbmdPcmRlciA9IDk5O1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChidG4uZGF0YS5pbmRleCA9PT0gc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuX2NsaWNrU291bmQsIGZhbHNlLCAxKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnTW92ZShldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09IF9vbkRyYWdNb3ZlIDIyMiA9PT09PScpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLl9kcmFnU291bmQsIGZhbHNlLCAxKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOesrOS4gOasoeetlOmimOaXtlxyXG4gICAgICAgICAgICB0aGlzLmRyYWdFbmRGaXJzdERlYWwoZXZ0KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDnrKzkuozmrKHnrZTpopjml7ZcclxuICAgICAgICAgICAgdGhpcy5kcmFnRW5kU2NlbmREZWFsKGV2dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhZ0VuZEZpcnN0RGVhbChldnQpIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgbGV0IG1vdmVJc01pbiA9IE1hdGguYWJzKGV2dC5wb3MueCAtIHRoaXMuX2xhc3RQb3MueCkgPCA3MCAmJiBNYXRoLmFicyhldnQucG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkpIDwgNzA7XHJcblxyXG4gICAgICAgIHZhciBidG46IGZndWkuR09iamVjdCA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgdGFyUG9zID0gbmV3IGNjLlZlYzIoYnRuLngsIGJ0bi55KTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXJMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXJNaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaXNDb250YWluZXJMZWZ0ID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9sZWZ0Q29udGFpbiwgYnRuKTtcclxuICAgICAgICBpc0NvbnRhaW5lclJpZ2h0ID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9yaWdodENvbnRhaW4sIGJ0bik7XHJcbiAgICAgICAgaXNDb250YWluZXJNaWQgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX21pZENvbnRhaW4sIGJ0bik7XHJcblxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGlmICh0aGlzLl9sZWZ0UmVjdC5jb250YWlucyh0YXJQb3MpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOW3piA9PT09Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDb250YWluZXJMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZUlzTWluIHx8IHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCA8IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5Yi35pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fbGVmdENvbnRhaW4sIGJ0biwgc3RhdGUubGVmdENvbnRhaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5sZWZ0Q29udGFpbiwgdGhpcy5fbGVmdFBvc2l0b24pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS6pOaNouahhuWGheeahOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVkZ2VDaGFuZ2VQb3NJbkJveChldnQucG9zLCBzdGF0ZS5sZWZ0Q29udGFpbiwgdGhpcy5fbGVmdFBvc2l0b24sIGJ0biwgdGhpcy5fbGVmdENvbnRhaW4sIHN0YXRlLmNvbGxpZGVyQm94KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhbEFsbENvbnRhaW5JbihmYWxzZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgc3RhdGUsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xlZnRDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fbGVmdFBvc2l0b25bc3RhdGUubGVmdENvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fbGVmdFBvc2l0b25bc3RhdGUubGVmdENvbnRhaW4ubGVuZ3RoXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW5kZXg6IHN0YXRlLmxlZnRDb250YWluLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGVmdENvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZS5jb2xsaWRlckJveCwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3JpZ2h0UmVjdC5jb250YWlucyh0YXJQb3MpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDb250YWluZXJSaWdodCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlSXNNaW4gfHwgdGhpcy5fcmlnaHRDb250YWluLmxlbmd0aCA8IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5Yi35pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fcmlnaHRDb250YWluLCBidG4sIHN0YXRlLnJpZ2h0Q29udGFpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLnJpZ2h0Q29udGFpbiwgdGhpcy5fcmlnaHRQb3NpdG9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS6pOaNouahhuWGheeahOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVkZ2VDaGFuZ2VQb3NJbkJveChldnQucG9zLCBzdGF0ZS5yaWdodENvbnRhaW4sIHRoaXMuX3JpZ2h0UG9zaXRvbiwgYnRuLCB0aGlzLl9yaWdodENvbnRhaW4sIHN0YXRlLmNvbGxpZGVyQm94KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBzdGF0ZSwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmlnaHRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3JpZ2h0UG9zaXRvbltzdGF0ZS5yaWdodENvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fcmlnaHRQb3NpdG9uW3N0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGhdLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NJbmRleDogc3RhdGUucmlnaHRDb250YWluLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucmlnaHRDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX21pZFJlY3QuY29udGFpbnModGFyUG9zKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyTWlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmVJc01pbiB8fCB0aGlzLl9taWRDb250YWluLmxlbmd0aCA8IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5Yi35pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fbWlkQ29udGFpbiwgYnRuLCBzdGF0ZS5taWRDb250YWluKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUubWlkQ29udGFpbiwgdGhpcy5fbWlkUG9zaXRvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDkuqTmjaLmoYblhoXnmoTkvY3nva5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1ZGdlQ2hhbmdlUG9zSW5Cb3goZXZ0LnBvcywgc3RhdGUubWlkQ29udGFpbiwgdGhpcy5fbWlkUG9zaXRvbiwgYnRuLCB0aGlzLl9taWRDb250YWluLCBzdGF0ZS5jb2xsaWRlckJveCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhbEFsbENvbnRhaW5Jbih0cnVlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgc3RhdGUsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21pZENvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWlkQ29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX21pZFBvc2l0b25bc3RhdGUubWlkQ29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9taWRQb3NpdG9uW3N0YXRlLm1pZENvbnRhaW4ubGVuZ3RoXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW5kZXg6IHN0YXRlLm1pZENvbnRhaW4ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5taWRDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZS5jb2xsaWRlckJveCwgYnRuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHN0YXRlLCBidG4pO1xyXG5cclxuICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhZ0VuZFNjZW5kRGVhbChldnQpIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgbGV0IG1vdmVJc01pbiA9IE1hdGguYWJzKGV2dC5wb3MueCAtIHRoaXMuX2xhc3RQb3MueCkgPCA3MCAmJiBNYXRoLmFicyhldnQucG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkpIDwgNzA7XHJcblxyXG4gICAgICAgIHZhciBidG46IGZndWkuR09iamVjdCA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgdGFyUG9zID0gbmV3IGNjLlZlYzIoYnRuLngsIGJ0bi55KTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXIxID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyMiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lcjMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXI0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyNSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lcjYgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaXNDb250YWluZXIxID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9ib3gxQ29udGFpbiwgYnRuKTtcclxuICAgICAgICBpc0NvbnRhaW5lcjIgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2JveDJDb250YWluLCBidG4pO1xyXG4gICAgICAgIGlzQ29udGFpbmVyMyA9IHRoaXMuanVkZ2VEcmFnT2JqSW5Cb3godGhpcy5fYm94M0NvbnRhaW4sIGJ0bik7XHJcbiAgICAgICAgaXNDb250YWluZXI0ID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9ib3g0Q29udGFpbiwgYnRuKTtcclxuICAgICAgICBpc0NvbnRhaW5lcjUgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2JveDVDb250YWluLCBidG4pO1xyXG4gICAgICAgIGlzQ29udGFpbmVyNiA9IHRoaXMuanVkZ2VEcmFnT2JqSW5Cb3godGhpcy5fYm94NkNvbnRhaW4sIGJ0bik7XHJcblxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGlmICh0aGlzLl9ib3hSZWN0MS5jb250YWlucyh0YXJQb3MpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOahhjEgPT09PScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlSXNNaW4gfHwgdGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoIDwgMikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZS5jb2xsaWRlckJveCwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKDpmaTlt6bovrnljIXlkKvnmoTvvJvliLfmlrBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3gxQ29udGFpbiwgYnRuLCBzdGF0ZS5ib3gxQ29udGFpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDFDb250YWluLCB0aGlzLl90eXBlQm94UG9zMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqk5o2i5qGG5YaF55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWRnZUNoYW5nZVBvc0luQm94KGV2dC5wb3MsIHN0YXRlLmJveDFDb250YWluLCB0aGlzLl90eXBlQm94UG9zMSwgYnRuLCB0aGlzLl9ib3gxQ29udGFpbiwgc3RhdGUuY29sbGlkZXJCb3gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBzdGF0ZSwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYm94MUNvbnRhaW4ucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl90eXBlQm94UG9zMVtzdGF0ZS5ib3gxQ29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90eXBlQm94UG9zMVtzdGF0ZS5ib3gxQ29udGFpbi5sZW5ndGhdLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NJbmRleDogc3RhdGUuYm94MUNvbnRhaW4ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ib3gxQ29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JveFJlY3QyLmNvbnRhaW5zKHRhclBvcykpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOahhjIgPT09PScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyMikge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlSXNNaW4gfHwgdGhpcy5fYm94MkNvbnRhaW4ubGVuZ3RoIDwgMikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZS5jb2xsaWRlckJveCwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKDpmaTlt6bovrnljIXlkKvnmoTvvJvliLfmlrBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3gyQ29udGFpbiwgYnRuLCBzdGF0ZS5ib3gyQ29udGFpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDJDb250YWluLCB0aGlzLl90eXBlQm94UG9zMik7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqk5o2i5qGG5YaF55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWRnZUNoYW5nZVBvc0luQm94KGV2dC5wb3MsIHN0YXRlLmJveDJDb250YWluLCB0aGlzLl90eXBlQm94UG9zMiwgYnRuLCB0aGlzLl9ib3gyQ29udGFpbiwgc3RhdGUuY29sbGlkZXJCb3gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBzdGF0ZSwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYm94MkNvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYm94MkNvbnRhaW4ucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl90eXBlQm94UG9zMltzdGF0ZS5ib3gyQ29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90eXBlQm94UG9zMltzdGF0ZS5ib3gyQ29udGFpbi5sZW5ndGhdLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NJbmRleDogc3RhdGUuYm94MkNvbnRhaW4ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ib3gyQ29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib3hSZWN0My5jb250YWlucyh0YXJQb3MpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSDmoYYzID09PT0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0NvbnRhaW5lcjMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZUlzTWluIHx8IHRoaXMuX2JveDNDb250YWluLmxlbmd0aCA8IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5Yi35pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fYm94M0NvbnRhaW4sIGJ0biwgc3RhdGUuYm94M0NvbnRhaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3gzQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczMpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS6pOaNouahhuWGheeahOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVkZ2VDaGFuZ2VQb3NJbkJveChldnQucG9zLCBzdGF0ZS5ib3gzQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczMsIGJ0biwgdGhpcy5fYm94M0NvbnRhaW4sIHN0YXRlLmNvbGxpZGVyQm94KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhbEFsbENvbnRhaW5JbihmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgc3RhdGUsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2JveDNDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JveDNDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fdHlwZUJveFBvczNbc3RhdGUuYm94M0NvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHlwZUJveFBvczNbc3RhdGUuYm94M0NvbnRhaW4ubGVuZ3RoXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW5kZXg6IHN0YXRlLmJveDNDb250YWluLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYm94M0NvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZS5jb2xsaWRlckJveCwgYnRuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JveFJlY3Q0LmNvbnRhaW5zKHRhclBvcykpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOahhjQgPT09PScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyNCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlSXNNaW4gfHwgdGhpcy5fYm94NENvbnRhaW4ubGVuZ3RoIDwgMikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZS5jb2xsaWRlckJveCwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKDpmaTlt6bovrnljIXlkKvnmoTvvJvliLfmlrBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3g0Q29udGFpbiwgYnRuLCBzdGF0ZS5ib3g0Q29udGFpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDRDb250YWluLCB0aGlzLl90eXBlQm94UG9zNCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqk5o2i5qGG5YaF55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWRnZUNoYW5nZVBvc0luQm94KGV2dC5wb3MsIHN0YXRlLmJveDRDb250YWluLCB0aGlzLl90eXBlQm94UG9zNCwgYnRuLCB0aGlzLl9ib3g0Q29udGFpbiwgc3RhdGUuY29sbGlkZXJCb3gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBzdGF0ZSwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYm94NENvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYm94NENvbnRhaW4ucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl90eXBlQm94UG9zNFtzdGF0ZS5ib3g0Q29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90eXBlQm94UG9zNFtzdGF0ZS5ib3g0Q29udGFpbi5sZW5ndGhdLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NJbmRleDogc3RhdGUuYm94NENvbnRhaW4ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ib3g0Q29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm94UmVjdDUuY29udGFpbnModGFyUG9zKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT0g5qGGNSA9PT09Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDb250YWluZXI1KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmVJc01pbiB8fCB0aGlzLl9ib3g1Q29udGFpbi5sZW5ndGggPCAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKDpmaTlt6bovrnljIXlkKvnmoTvvJvliLfmlrBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3g1Q29udGFpbiwgYnRuLCBzdGF0ZS5ib3g1Q29udGFpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDVDb250YWluLCB0aGlzLl90eXBlQm94UG9zNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqk5o2i5qGG5YaF55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWRnZUNoYW5nZVBvc0luQm94KGV2dC5wb3MsIHN0YXRlLmJveDVDb250YWluLCB0aGlzLl90eXBlQm94UG9zNSwgYnRuLCB0aGlzLl9ib3g1Q29udGFpbiwgc3RhdGUuY29sbGlkZXJCb3gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWxBbGxDb250YWluSW4oZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHN0YXRlLCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ib3g1Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbFNlY29uZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ib3g1Q29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3R5cGVCb3hQb3M1W3N0YXRlLmJveDVDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3R5cGVCb3hQb3M1W3N0YXRlLmJveDVDb250YWluLmxlbmd0aF0ueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc0luZGV4OiBzdGF0ZS5ib3g1Q29udGFpbi5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJveDVDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm94UmVjdDYuY29udGFpbnModGFyUG9zKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT0g5qGGNiA9PT09Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDb250YWluZXI2KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmVJc01pbiB8fCB0aGlzLl9ib3g2Q29udGFpbi5sZW5ndGggPCAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKDpmaTlt6bovrnljIXlkKvnmoTvvJvliLfmlrBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3g2Q29udGFpbiwgYnRuLCBzdGF0ZS5ib3g2Q29udGFpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDZDb250YWluLCB0aGlzLl90eXBlQm94UG9zNik7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqk5o2i5qGG5YaF55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWRnZUNoYW5nZVBvc0luQm94KGV2dC5wb3MsIHN0YXRlLmJveDZDb250YWluLCB0aGlzLl90eXBlQm94UG9zNiwgYnRuLCB0aGlzLl9ib3g2Q29udGFpbiwgc3RhdGUuY29sbGlkZXJCb3gpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhbEFsbENvbnRhaW5JbihmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgc3RhdGUsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2JveDZDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JveDZDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fdHlwZUJveFBvczZbc3RhdGUuYm94NkNvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHlwZUJveFBvczZbc3RhdGUuYm94NkNvbnRhaW4ubGVuZ3RoXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW5kZXg6IHN0YXRlLmJveDZDb250YWluLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYm94NkNvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZS5jb2xsaWRlckJveCwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlYWxBbGxDb250YWluSW4oZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgc3RhdGUsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlYWxBbGxDb250YWluSW4oaXNDb250YWluZXJMZWZ0LCBpc0NvbnRhaW5lck1pZCwgaXNDb250YWluZXJSaWdodCwgaXNDb250YWluZXIxLCBpc0NvbnRhaW5lcjIsIGlzQ29udGFpbmVyMywgaXNDb250YWluZXI0LCBpc0NvbnRhaW5lcjUsIGlzQ29udGFpbmVyNiwgc3RhdGUsIGJ0bikge1xyXG5cclxuICAgICAgICBpZiAoaXNDb250YWluZXJMZWZ0KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9sZWZ0Q29udGFpbiwgYnRuLCBzdGF0ZS5sZWZ0Q29udGFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5sZWZ0Q29udGFpbiwgdGhpcy5fbGVmdFBvc2l0b24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyTWlkKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9taWRDb250YWluLCBidG4sIHN0YXRlLm1pZENvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUubWlkQ29udGFpbiwgdGhpcy5fbWlkUG9zaXRvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNDb250YWluZXJSaWdodCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fcmlnaHRDb250YWluLCBidG4sIHN0YXRlLnJpZ2h0Q29udGFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5yaWdodENvbnRhaW4sIHRoaXMuX3JpZ2h0UG9zaXRvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNDb250YWluZXIxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3gxQ29udGFpbiwgYnRuLCBzdGF0ZS5ib3gxQ29udGFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3gxQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyMikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fYm94MkNvbnRhaW4sIGJ0biwgc3RhdGUuYm94MkNvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUuYm94MkNvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3MyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyMykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fYm94M0NvbnRhaW4sIGJ0biwgc3RhdGUuYm94M0NvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUuYm94M0NvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3MzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyNCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fYm94NENvbnRhaW4sIGJ0biwgc3RhdGUuYm94NENvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUuYm94NENvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3M0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyNSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fYm94NUNvbnRhaW4sIGJ0biwgc3RhdGUuYm94NUNvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUuYm94NUNvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3M1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyNikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fYm94NkNvbnRhaW4sIGJ0biwgc3RhdGUuYm94NkNvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUuYm94NkNvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3M2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUganVkZ2VDaGFuZ2VQb3NJbkJveChjdXJQb3MsIHN0YXRlQ29udGFpbiwgcG9zQXJyLCBidG4sIGJveENvbnRhaW4sIHN0YXRlQ29sbGlkZXJCb3gpIHtcclxuXHJcbiAgICAgICAgbGV0IGNoYW5nZUluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IGNsaWNrSW5kZXggPSBidG4uZGF0YS5wb3NJbmRleDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDngrnlh7vnmoRJbmRleCA9PT09PT09PScgKyBidG4uZGF0YS5wb3NJbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCA+IDEwMCAmJiBNYXRoLmFicyhjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSkgPCA1MCkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDlj7MgPT09PT09PT0nKTtcclxuICAgICAgICAgICAgLy/lj7NcclxuICAgICAgICAgICAgY2hhbmdlSW5kZXggPSBjbGlja0luZGV4ICsgMTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCA8IC0xMDAgJiYgTWF0aC5hYnMoY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkpIDwgNTApIHtcclxuXHJcbiAgICAgICAgICAgIC8v5bemXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaIg5bemID09PT09PT09Jyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCAtIDE7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkgPiAxMDAgJiYgTWF0aC5hYnMoY3VyUG9zLnggLSB0aGlzLl9sYXN0UG9zLngpIDwgNTApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIOS4iyA9PT09PT09PScpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCArIDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkgPCAtMTAwICYmIE1hdGguYWJzKGN1clBvcy54IC0gdGhpcy5fbGFzdFBvcy54KSA8IDUwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDkuIogPT09PT09PT0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlSW5kZXggPSBjbGlja0luZGV4IC0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlSW5kZXggPSBjbGlja0luZGV4IC0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGN1clBvcy54IC0gdGhpcy5fbGFzdFBvcy54ID4gMTAwICYmIGN1clBvcy55IC0gdGhpcy5fbGFzdFBvcy55ID4gMTAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDlj7PkuItcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDlj7PkuIsgPT09PT09PT0nKTtcclxuICAgICAgICAgICAgY2hhbmdlSW5kZXggPSBjbGlja0luZGV4ICsgMztcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCkgPiA1MCAmJiBjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCA8IDEwMCAmJiBjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSA+IDEwMCkge1xyXG5cclxuICAgICAgICAgICAgLy8g5bem5LiLXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaIg5bem5LiLID09PT09PT09Jyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCArIDE7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUG9zLnggLSB0aGlzLl9sYXN0UG9zLnggPiAxMDAgJiYgY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkgPCAxMDAgJiYgTWF0aC5hYnMoY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkpID4gNTApIHtcclxuICAgICAgICAgICAgLy8g5Y+z5LiKXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaIg5Y+z5LiKID09PT09PT09Jyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCAtIDE7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUG9zLnggLSB0aGlzLl9sYXN0UG9zLnggPCAxMDAgJiYgY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkgPCAxMDAgJiYgTWF0aC5hYnMoY3VyUG9zLnggLSB0aGlzLl9sYXN0UG9zLngpID4gNTAgJiYgTWF0aC5hYnMoY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkpID4gNTApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOW3puS4ilxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIOW3puS4iiA9PT09PT09PScpO1xyXG4gICAgICAgICAgICBjaGFuZ2VJbmRleCA9IGNsaWNrSW5kZXggLSAzO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiBZWVlZWSA9PT09PT09PScgKyAoY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZUNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuICAgICAgICAgICAgLy/liKDpmaTlt6bovrnljIXlkKvnmoTvvJvliLfmlrBcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3goYm94Q29udGFpbiwgYnRuLCBzdGF0ZUNvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGVDb250YWluLCBwb3NBcnIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNomluZyBjbGlja0luZGV4ID09PT09PT09ICAnICsgY2xpY2tJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNomluZyBjaGFuZ2VJbmRleCA9PT09PT09PSAgJyArIGNoYW5nZUluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZUluZGV4IDwgMCB8fCBjaGFuZ2VJbmRleCA+IHN0YXRlQ29udGFpbi5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICAvL+WIoOmZpOW3pui+ueWMheWQq+eahO+8m+W9kuS9jeWIsOWOn+adpeeahOS9jee9rlxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZUNvbGxpZGVyQm94LCBidG4pO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveChib3hDb250YWluLCBidG4sIHN0YXRlQ29udGFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZUNvbnRhaW4sIHBvc0Fycik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGVtcENsaWNrSW5kZXggPSBzdGF0ZUNvbnRhaW5bY2xpY2tJbmRleF0uaW5kZXg7XHJcbiAgICAgICAgbGV0IHRlbXBDaGFuZ2VJbmRleCA9IHN0YXRlQ29udGFpbltjaGFuZ2VJbmRleF0uaW5kZXg7XHJcblxyXG4gICAgICAgIHN0YXRlQ29udGFpbltjbGlja0luZGV4XS5pbmRleCA9IHRlbXBDaGFuZ2VJbmRleDtcclxuICAgICAgICBzdGF0ZUNvbnRhaW5bY2hhbmdlSW5kZXhdLmluZGV4ID0gdGVtcENsaWNrSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVDdXJEcmFnT2JqSW5Cb3goX2JveCwgY3VyQnV0LCBzdGF0ZUJveCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9ib3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChfYm94W2ldID09PSBjdXJCdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfYm94LnNwbGljZShpLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUJveFtpXS5pbmRleCA9PT0gY3VyQnV0LmRhdGEuaW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQm94LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEJ1dHRvbkluaXRQb3Moc3RhdGVDb2xsaWRlckJveCwgYnRuKSB7XHJcblxyXG4gICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICBwb3M6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IGJ0bi5kYXRhLngsXHJcbiAgICAgICAgICAgICAgICB5OiBidG4uZGF0YS55XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgcG9zSW5kZXg6IC0xXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGF0ZUNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUganVkZ2VEcmFnT2JqSW5Cb3goX2JveCwgY3VyQnV0KSB7XHJcblxyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lciA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2JveC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKF9ib3hbaV0gPT09IGN1ckJ1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlzQ29udGFpbmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXNDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoQm94UG9zKHN0YXRlQm94LCBwb3NBcnIpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZUJveC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgc3RhdGVCb3hbaV0ucG9zLnggPSBwb3NBcnJbaV0ueDtcclxuICAgICAgICAgICAgc3RhdGVCb3hbaV0ucG9zLnkgPSBwb3NBcnJbaV0ueTtcclxuICAgICAgICAgICAgc3RhdGVCb3hbaV0ucG9zSW5kZXggPSBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hGaXJzdFdyb25nRGF0YShzdGF0ZSkge1xyXG5cclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS5pbmRleFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9yaWdodENvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9taWRDb250YWluID0gW107XHJcblxyXG4gICAgICAgIHN0YXRlLmxlZnRDb250YWluID0gW107XHJcbiAgICAgICAgc3RhdGUucmlnaHRDb250YWluID0gW107XHJcbiAgICAgICAgc3RhdGUubWlkQ29udGFpbiA9IFtdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hTZWNvbmRXcm9uZ0RhdGEoc3RhdGUpIHtcclxuXHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJCb3ggPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLnlcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEuaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2JveDFDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fYm94MkNvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9ib3gzQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JveDRDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fYm94NUNvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9ib3g2Q29udGFpbiA9IFtdO1xyXG5cclxuICAgICAgICBzdGF0ZS5ib3gxQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHN0YXRlLmJveDJDb250YWluID0gW107XHJcbiAgICAgICAgc3RhdGUuYm94M0NvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5ib3g0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHN0YXRlLmJveDVDb250YWluID0gW107XHJcbiAgICAgICAgc3RhdGUuYm94NkNvbnRhaW4gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLl9jbGlja1NvdW5kLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMS5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2NsaWNrU3VibWl0KGV2dDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPj0gMikge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmlnaHRDb250YWluLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWlkQ29udGFpbi5sZW5ndGggPT09IDAgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9sZWZ0Q29udGFpbi5sZW5ndGggIT09IHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGgpIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fbGVmdENvbnRhaW4ubGVuZ3RoICE9PSB0aGlzLl9taWRDb250YWluLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ib3gxQ29udGFpbi5sZW5ndGggPT09IDAgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JveDJDb250YWluLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94M0NvbnRhaW4ubGVuZ3RoID09PSAwIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ib3g0Q29udGFpbi5sZW5ndGggPT09IDAgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JveDVDb250YWluLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94NkNvbnRhaW4ubGVuZ3RoID09PSAwIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoICE9PSB0aGlzLl9ib3gyQ29udGFpbi5sZW5ndGgpIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoICE9PSB0aGlzLl9ib3gzQ29udGFpbi5sZW5ndGgpIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoICE9PSB0aGlzLl9ib3g0Q29udGFpbi5sZW5ndGgpIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoICE9PSB0aGlzLl9ib3g0Q29udGFpbi5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWJje+8mjEg5ZCO77yaMlxyXG4gICAgICAgIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoKHRoaXMuX2xlZnRDb250YWluWzBdLm5hbWVbMF0gPT09IHRoaXMuX2xlZnRDb250YWluWzFdLm5hbWVbMF0gJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xlZnRDb250YWluWzBdLm5hbWVbMF0gPT09IHRoaXMuX2xlZnRDb250YWluWzJdLm5hbWVbMF0gJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xlZnRDb250YWluWzBdLm5hbWVbMF0gPT09IHRoaXMuX2xlZnRDb250YWluWzNdLm5hbWVbMF0pICYmXHJcblxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX3JpZ2h0Q29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9yaWdodENvbnRhaW5bMV0ubmFtZVswXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9yaWdodENvbnRhaW5bMl0ubmFtZVswXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9yaWdodENvbnRhaW5bM10ubmFtZVswXSkgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLl9taWRDb250YWluWzBdLm5hbWVbMF0gPT09IHRoaXMuX21pZENvbnRhaW5bMV0ubmFtZVswXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21pZENvbnRhaW5bMF0ubmFtZVswXSA9PT0gdGhpcy5fbWlkQ29udGFpblsyXS5uYW1lWzBdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWlkQ29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9taWRDb250YWluWzNdLm5hbWVbMF0pKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuIDmrKHlm57nrZTmraPnoa4gIOaMieeFp+W9oueKtuWIhiA9PT0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IF9sZWZ0Q29udGFpbiA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IF9yaWdodENvbnRhaW4gPT09JyArIHRoaXMuX3JpZ2h0Q29udGFpblswXS5uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0gX21pZENvbnRhaW4gPT09JyArIHRoaXMuX21pZENvbnRhaW5bMF0ubmFtZVswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g56ys5LiA5qyh562U5qGI5q2j56GuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5zd2VyLnB1c2godGhpcy5hbnN3ZXJUeXBlLlNoYXApO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYW5zd2VyID0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoRmlyc3RSaWdodERhdGEoc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMV0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMl0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bM10ubmFtZVswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g56ys5LiA5qyh562U5qGI6ZSZ6K+vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucmVmcmVzaEZpcnN0V3JvbmdEYXRhKHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOminOiJsuWIhlxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYm94MUNvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fYm94MUNvbnRhaW5bMV0ubmFtZVsxXSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94M0NvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fYm94M0NvbnRhaW5bMV0ubmFtZVsxXSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94NUNvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fYm94NUNvbnRhaW5bMV0ubmFtZVsxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0g56ys5LqM5qyh562U5qGI5q2j56GuIOminOiJsj09PScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5zd2VyLnB1c2godGhpcy5hbnN3ZXJUeXBlLkNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHRoaXMuX2Fuc3dlcjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0g56ys5LqM5qyh562U5qGI6ZSZ6K+vIOminOiJsj09PScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09IF9ib3gxQ29udGFpbiAwPT0nICsgdGhpcy5fYm94MUNvbnRhaW5bMF0ubmFtZVsxXSArICc9PSBfYm94MUNvbnRhaW4gMT09JyArIHRoaXMuX2JveDFDb250YWluWzFdLm5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09IF9ib3gzQ29udGFpbiAwPT0nICsgdGhpcy5fYm94M0NvbnRhaW5bMF0ubmFtZVsxXSArICc9PSBfYm94M0NvbnRhaW4gMT09JyArIHRoaXMuX2JveDNDb250YWluWzFdLm5hbWVbMV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09IF9ib3g1Q29udGFpbiAwPT0nICsgdGhpcy5fYm94NUNvbnRhaW5bMF0ubmFtZVsxXSArICc9PSBfYm94NUNvbnRhaW4gMT09JyArIHRoaXMuX2JveDVDb250YWluWzFdLm5hbWVbMV0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucmVmcmVzaFNlY29uZFdyb25nRGF0YShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoRmlyc3RSaWdodERhdGEoc3RhdGUpIHtcclxuXHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJCb3ggPSBbXTtcclxuICAgICAgICAvLyDnrKzkuozmrKHlgZrpopjml7bliJ3lp4vljJbmjInpkq7lhajpg6jkvY3nva5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb2xsaWRlckNhY2hlU2Vjb25kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIDwgdGhpcy5fY29udGFpbmVyVG90YWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5wb3MueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5wb3MueVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGF0ZS5sZWZ0Q29udGFpbltpXS5pbmRleFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckNhY2hlU2Vjb25kW2ldLmluZGV4ID0gc3RhdGUubGVmdENvbnRhaW5baV0uaW5kZXg7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCB0aGlzLl9jb250YWluZXJUb3RhbCAqIDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5wb3MueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5wb3MueVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGF0ZS5taWRDb250YWluW2kgLSB0aGlzLl9jb250YWluZXJUb3RhbF0uaW5kZXhcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5pbmRleCA9IHN0YXRlLm1pZENvbnRhaW5baSAtIHRoaXMuX2NvbnRhaW5lclRvdGFsXS5pbmRleDtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbaV0ucG9zLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbaV0ucG9zLnlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhdGUucmlnaHRDb250YWluW2kgLSB0aGlzLl9jb250YWluZXJUb3RhbCAqIDJdLmluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbaV0uaW5kZXggPSBzdGF0ZS5yaWdodENvbnRhaW5baSAtIHRoaXMuX2NvbnRhaW5lclRvdGFsICogMl0uaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZC5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLmluZGV4ID09PSB0aGlzLl9jb2xsaWRlckNhY2hlU2Vjb25kW2pdLmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS54ID0gdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtqXS5wb3MueDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLnkgPSB0aGlzLl9jb2xsaWRlckNhY2hlU2Vjb25kW2pdLnBvcy55O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21pZENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICAgICAgc3RhdGUubGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5taWRDb250YWluID0gW107XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkob2xkU3RhdGU6IGFueSwgc3RhdGU6IGFueSkge1xyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmFuc3dlciwgc3RhdGUuYW5zd2VyKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLmFuc3dlci5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIOaYvuekuuesrOS6jOenjeetlOmimOeVjOmdolxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDE7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmFuc3dlci5sZW5ndGggPj0gMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub2ZmQnV0RHJhZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmFuc3dlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSGFuZGxlR3VpZGUodGhpcy5oYW5kbGVHdWlkZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmFuc3dlci5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSGFuZGxlR3VpZGUodGhpcy5oYW5kbGVHdWlkZTIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5jb2xsaWRlckJveCwgc3RhdGUuY29sbGlkZXJCb3gpKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnggPSBzdGF0ZS5jb2xsaWRlckJveFtpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVyQm94W2ldLmluZGV4XS55ID0gc3RhdGUuY29sbGlkZXJCb3hbaV0ucG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckJveFtpXS5pbmRleF0uZGF0YS5wb3NJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUubGVmdENvbnRhaW4sIHN0YXRlLmxlZnRDb250YWluKSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZWZ0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUubGVmdENvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5sZWZ0Q29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmxlZnRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUubGVmdENvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5sZWZ0Q29udGFpbltpXS5pbmRleF0uZGF0YS5wb3NJbmRleCA9IHN0YXRlLmxlZnRDb250YWluW2ldLnBvc0luZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUubGVmdENvbnRhaW5baV0uaW5kZXhdLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUucmlnaHRDb250YWluLCBzdGF0ZS5yaWdodENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUucmlnaHRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUucmlnaHRDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS5kYXRhLnBvc0luZGV4ID0gc3RhdGUucmlnaHRDb250YWluW2ldLnBvc0luZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS5zb3J0aW5nT3JkZXIgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLm1pZENvbnRhaW4sIHN0YXRlLm1pZENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLm1pZENvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLm1pZENvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5taWRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUubWlkQ29udGFpbltpXS5pbmRleF0ueSA9IHN0YXRlLm1pZENvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5taWRDb250YWluW2ldLmluZGV4XS5kYXRhLnBvc0luZGV4ID0gc3RhdGUubWlkQ29udGFpbltpXS5wb3NJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLm1pZENvbnRhaW5baV0uaW5kZXhdLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYm94MUNvbnRhaW4sIHN0YXRlLmJveDFDb250YWluKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmJveDFDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gxQ29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmJveDFDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94MUNvbnRhaW5baV0uaW5kZXhdLnkgPSBzdGF0ZS5ib3gxQ29udGFpbltpXS5wb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDFDb250YWluW2ldLmluZGV4XS5kYXRhLnBvc0luZGV4ID0gc3RhdGUuYm94MUNvbnRhaW5baV0ucG9zSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gxQ29udGFpbltpXS5pbmRleF0uc29ydGluZ09yZGVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5ib3gyQ29udGFpbiwgc3RhdGUuYm94MkNvbnRhaW4pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuYm94MkNvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDJDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUuYm94MkNvbnRhaW5baV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gyQ29udGFpbltpXS5pbmRleF0ueSA9IHN0YXRlLmJveDJDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94MkNvbnRhaW5baV0uaW5kZXhdLmRhdGEucG9zSW5kZXggPSBzdGF0ZS5ib3gyQ29udGFpbltpXS5wb3NJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDJDb250YWluW2ldLmluZGV4XS5zb3J0aW5nT3JkZXIgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmJveDNDb250YWluLCBzdGF0ZS5ib3gzQ29udGFpbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5ib3gzQ29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94M0NvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5ib3gzQ29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDNDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUuYm94M0NvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gzQ29udGFpbltpXS5pbmRleF0uZGF0YS5wb3NJbmRleCA9IHN0YXRlLmJveDNDb250YWluW2ldLnBvc0luZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94M0NvbnRhaW5baV0uaW5kZXhdLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYm94NENvbnRhaW4sIHN0YXRlLmJveDRDb250YWluKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmJveDRDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3g0Q29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmJveDRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94NENvbnRhaW5baV0uaW5kZXhdLnkgPSBzdGF0ZS5ib3g0Q29udGFpbltpXS5wb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDRDb250YWluW2ldLmluZGV4XS5kYXRhLnBvc0luZGV4ID0gc3RhdGUuYm94NENvbnRhaW5baV0ucG9zSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3g0Q29udGFpbltpXS5pbmRleF0uc29ydGluZ09yZGVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5ib3g1Q29udGFpbiwgc3RhdGUuYm94NUNvbnRhaW4pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuYm94NUNvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDVDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUuYm94NUNvbnRhaW5baV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3g1Q29udGFpbltpXS5pbmRleF0ueSA9IHN0YXRlLmJveDVDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94NUNvbnRhaW5baV0uaW5kZXhdLmRhdGEucG9zSW5kZXggPSBzdGF0ZS5ib3g1Q29udGFpbltpXS5wb3NJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDVDb250YWluW2ldLmluZGV4XS5zb3J0aW5nT3JkZXIgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmJveDZDb250YWluLCBzdGF0ZS5ib3g2Q29udGFpbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5ib3g2Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94NkNvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5ib3g2Q29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDZDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUuYm94NkNvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3g2Q29udGFpbltpXS5pbmRleF0uZGF0YS5wb3NJbmRleCA9IHN0YXRlLmJveDZDb250YWluW2ldLnBvc0luZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94NkNvbnRhaW5baV0uaW5kZXhdLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUudGl0bGUsIHN0YXRlLnRpdGxlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgZmVlZGJhY2s6IGFueSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmVlZGJhY2spO1xyXG4gICAgICAgIGZlZWRiYWNrLnggPSA5NjA7XHJcbiAgICAgICAgZmVlZGJhY2sueSA9IDU0MDtcclxuICAgICAgICBsZXQgZmVlZGJhY2tKczogYW55ID0gZmVlZGJhY2suZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZmVlZGJhY2tKcy5pbml0KGJvb2wpO1xyXG4gICAgICAgIGZlZWRiYWNrLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZmVlZGJhY2suZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZkJ1dERyYWcoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYXJyQ29udGFpbk9mZkRyYWcodGhpcy5fbGVmdENvbnRhaW4pO1xyXG4gICAgICAgIHRoaXMuYXJyQ29udGFpbk9mZkRyYWcodGhpcy5fcmlnaHRDb250YWluKTtcclxuICAgICAgICB0aGlzLmFyckNvbnRhaW5PZmZEcmFnKHRoaXMuX2JveDFDb250YWluKTtcclxuICAgICAgICB0aGlzLmFyckNvbnRhaW5PZmZEcmFnKHRoaXMuX2JveDJDb250YWluKTtcclxuICAgICAgICB0aGlzLmFyckNvbnRhaW5PZmZEcmFnKHRoaXMuX2JveDNDb250YWluKTtcclxuICAgICAgICB0aGlzLmFyckNvbnRhaW5PZmZEcmFnKHRoaXMuX2JveDRDb250YWluKTtcclxuICAgICAgICB0aGlzLmFyckNvbnRhaW5PZmZEcmFnKHRoaXMuX2JveDVDb250YWluKTtcclxuICAgICAgICB0aGlzLmFyckNvbnRhaW5PZmZEcmFnKHRoaXMuX2JveDZDb250YWluKTtcclxuICAgIH1cclxuXHJcbiAgICBhcnJDb250YWluT2ZmRHJhZyhhcnIpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGFycltpXS5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSh0aGlzLmRyYWdTY2hlZHVsZSwgdGhpcy5fc2NoZWR1bGVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19