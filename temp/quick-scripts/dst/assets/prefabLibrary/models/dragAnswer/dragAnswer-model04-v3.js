
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model04-v3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62658Jy40BOwY4Id6Em9IPy', 'dragAnswer-model04-v3');
// prefabLibrary/models/dragAnswer/dragAnswer-model04-v3.ts

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
var dragAnswer_model03_v3 = /** @class */ (function (_super) {
    __extends(dragAnswer_model03_v3, _super);
    function dragAnswer_model03_v3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colliderBox = [];
        _this._leftPositon = [{ x: 300, y: 770 }, { x: 580, y: 770 }, { x: 300, y: 925 }, { x: 580, y: 925 }];
        _this._rightPositon = [{ x: 1355, y: 770 }, { x: 1640, y: 770 }, { x: 1355, y: 925 }, { x: 1640, y: 925 }];
        _this._typeBoxPos1 = [{ x: 155, y: 865 }, { x: 355, y: 865 }];
        _this._typeBoxPos2 = [{ x: 635, y: 865 }, { x: 805, y: 865 }];
        _this._typeBoxPos3 = [{ x: 1110, y: 865 }, { x: 1280, y: 865 }];
        _this._typeBoxPos4 = [{ x: 1570, y: 865 }, { x: 1750, y: 865 }];
        _this._colliderCacheSecond = [
            { pos: { x: 345, y: 325 }, index: 0 },
            { pos: { x: 635, y: 325 }, index: 0 },
            { pos: { x: 345, y: 480 }, index: 0 },
            { pos: { x: 635, y: 480 }, index: 0 },
            { pos: { x: 1300, y: 325 }, index: 0 },
            { pos: { x: 1545, y: 325 }, index: 0 },
            { pos: { x: 1300, y: 480 }, index: 0 },
            { pos: { x: 1545, y: 480 }, index: 0 }
        ];
        _this._leftContain = [];
        _this._rightContain = [];
        _this._box1Contain = [];
        _this._box2Contain = [];
        _this._box3Contain = [];
        _this._box4Contain = [];
        _this._containerTotal = 4;
        _this._containerTotalSecond = 2;
        _this._colliderCache = [];
        _this._dragging = false;
        _this.answerType = cc.Enum({
            Size: 1,
            Shap: 2 // 正方形---长方形  三角形---平行四边形
        });
        _this._answer = []; // 0：没答题时 1：答对第一种选择时 2： 答对第二种选择时
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model03_v3.prototype, "state", {
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
    dragAnswer_model03_v3.prototype.onLoad = function () {
        this._answer = [];
        this._leftContain = [];
        this._rightContain = [];
        this._box1Contain = [];
        this._box2Contain = [];
        this._box3Contain = [];
        this._box4Contain = [];
        this._colliderBox = [];
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
        var box1 = this._view.getChild("typebg1").asImage;
        var box2 = this._view.getChild("typebg2").asImage;
        var box3 = this._view.getChild("typebg3").asImage;
        var box4 = this._view.getChild("typebg4").asImage;
        this._leftRect = new cc.Rect(left.x, left.y, left.width, left.height);
        this._rightRect = new cc.Rect(right.x, right.y, right.width, right.height);
        this._boxRect1 = new cc.Rect(box1.x, box1.y, box1.width, box1.height);
        this._boxRect2 = new cc.Rect(box2.x, box2.y, box2.width, box2.height);
        this._boxRect3 = new cc.Rect(box3.x, box3.y, box3.width, box3.height);
        this._boxRect4 = new cc.Rect(box4.x, box4.y, box4.width, box4.height);
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
            box1Contain: [],
            box2Contain: [],
            box3Contain: [],
            box4Contain: [],
            title: false,
            submit: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    // 运行时 禁止操作
    dragAnswer_model03_v3.prototype.forbidHandle = function () {
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
    dragAnswer_model03_v3.prototype.onHandleGuide = function (handleGuide) {
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
    dragAnswer_model03_v3.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model03_v3.prototype.dragSchedule = function () {
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
    dragAnswer_model03_v3.prototype.init = function (data) {
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
    dragAnswer_model03_v3.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    dragAnswer_model03_v3.prototype._onDragStart = function (evt) {
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
    dragAnswer_model03_v3.prototype._onDragMove = function (evt) {
    };
    dragAnswer_model03_v3.prototype._onDragEnd = function (evt) {
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
    dragAnswer_model03_v3.prototype.dragEndFirstDeal = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;
        var btn = fgui.GObject.cast(evt.currentTarget);
        var tarPos = new cc.Vec2(btn.x, btn.y);
        var isContainerLeft = false;
        var isContainerRight = false;
        isContainerLeft = this.judgeDragObjInBox(this._leftContain, btn);
        isContainerRight = this.judgeDragObjInBox(this._rightContain, btn);
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
                this.dealAllContainIn(false, true, false, false, false, false, state, btn);
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
                this.dealAllContainIn(true, false, false, false, false, false, state, btn);
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
        else {
            this.dealAllContainIn(true, true, false, false, false, false, state, btn);
            // 恢复原位
            this.resetButtonInitPos(state.colliderBox, btn);
        }
        this.updateState(state);
    };
    dragAnswer_model03_v3.prototype.dragEndScendDeal = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;
        var btn = fgui.GObject.cast(evt.currentTarget);
        var tarPos = new cc.Vec2(btn.x, btn.y);
        var isContainer1 = false;
        var isContainer2 = false;
        var isContainer3 = false;
        var isContainer4 = false;
        isContainer1 = this.judgeDragObjInBox(this._box1Contain, btn);
        isContainer2 = this.judgeDragObjInBox(this._box2Contain, btn);
        isContainer3 = this.judgeDragObjInBox(this._box3Contain, btn);
        isContainer4 = this.judgeDragObjInBox(this._box4Contain, btn);
        // 左
        if (this._boxRect1.contains(tarPos)) {
            console.log('==== 框1 ====');
            if (isContainer1) {
                if (moveIsMin || this._box1Contain.length < 2) {
                    console.log('==== 恢复原位 XXXX ==== ' + Math.abs(evt.pos.x - this._lastPos.x));
                    console.log('==== 恢复原位 YYYY ==== ' + Math.abs(evt.pos.y - this._lastPos.y));
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
                this.dealAllContainIn(false, false, false, true, true, true, state, btn);
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
                this.dealAllContainIn(false, false, true, false, true, true, state, btn);
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
                this.dealAllContainIn(false, false, true, true, false, true, state, btn);
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
                this.dealAllContainIn(false, false, true, true, true, false, state, btn);
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
        else {
            this.dealAllContainIn(false, false, true, true, true, true, state, btn);
            // 恢复原位
            this.resetButtonInitPos(state.colliderBox, btn);
        }
        this.updateState(state);
    };
    dragAnswer_model03_v3.prototype.dealAllContainIn = function (isContainerLeft, isContainerRight, isContainer1, isContainer2, isContainer3, isContainer4, state, btn) {
        if (isContainerLeft) {
            this.deleteCurDragObjInBox(this._leftContain, btn, state.leftContain);
            this.refreshBoxPos(state.leftContain, this._leftPositon);
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
    };
    dragAnswer_model03_v3.prototype.judgeChangePosInBox = function (curPos, stateContain, posArr, btn, boxContain, stateColliderBox) {
        var changeIndex = -1;
        var clickIndex = btn.data.posIndex;
        console.log('交换 点击的Index ========' + btn.data.posIndex);
        if (curPos.x - this._lastPos.x > 110 && Math.abs(curPos.y - this._lastPos.y) < 50) {
            console.log('交换 右 ========');
            //右
            changeIndex = clickIndex + 1;
        }
        else if (curPos.x - this._lastPos.x < -110 && Math.abs(curPos.y - this._lastPos.y) < 50) {
            //左
            console.log('交换 左 ========');
            changeIndex = clickIndex - 1;
        }
        else if (curPos.y - this._lastPos.y > 110 && Math.abs(curPos.x - this._lastPos.x) < 50) {
            // 下
            console.log('交换 下 ========');
            changeIndex = clickIndex + 2;
        }
        else if (curPos.y - this._lastPos.y < -110 && Math.abs(curPos.x - this._lastPos.x) < 50) {
            // 上
            console.log('交换 上 ========');
            changeIndex = clickIndex - 2;
        }
        else if (curPos.x - this._lastPos.x > 110 && curPos.y - this._lastPos.y > 110) {
            // 右下
            console.log('交换 右下 ========');
            changeIndex = clickIndex + 3;
        }
        else if (Math.abs(curPos.x - this._lastPos.x) > 50 && curPos.x - this._lastPos.x < 110 && curPos.y - this._lastPos.y > 110) {
            // 左下
            console.log('交换 左下 ========');
            changeIndex = clickIndex + 1;
        }
        else if (curPos.x - this._lastPos.x > 110 && curPos.y - this._lastPos.y < 110 && Math.abs(curPos.y - this._lastPos.y) > 50) {
            // 右上
            console.log('交换 右上 ========');
            changeIndex = clickIndex - 1;
        }
        else if (curPos.x - this._lastPos.x < 110 && curPos.y - this._lastPos.y < 110 && Math.abs(curPos.x - this._lastPos.x) > 50 && Math.abs(curPos.y - this._lastPos.y) > 50) {
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
    dragAnswer_model03_v3.prototype.deleteCurDragObjInBox = function (_box, curBut, stateBox) {
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
    dragAnswer_model03_v3.prototype.resetButtonInitPos = function (stateColliderBox, btn) {
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
    dragAnswer_model03_v3.prototype.judgeDragObjInBox = function (_box, curBut) {
        var isContainer = false;
        for (var i = 0; i < _box.length; i++) {
            if (_box[i] === curBut) {
                isContainer = true;
                break;
            }
        }
        return isContainer;
    };
    dragAnswer_model03_v3.prototype.refreshBoxPos = function (stateBox, posArr) {
        for (var i = 0; i < stateBox.length; i++) {
            stateBox[i].pos.x = posArr[i].x;
            stateBox[i].pos.y = posArr[i].y;
            stateBox[i].posIndex = i;
        }
    };
    dragAnswer_model03_v3.prototype.refreshFirstWrongData = function (state) {
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
    };
    dragAnswer_model03_v3.prototype.refreshSecondWrongData = function (state) {
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
        state.box1Contain = [];
        state.box2Contain = [];
        state.box3Contain = [];
        state.box4Contain = [];
    };
    dragAnswer_model03_v3.prototype._clickTitle = function (evt) {
        cc.audioEngine.play(this._clickSound, false, 1);
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model03_v3.prototype.playTitle = function (bool) {
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
    dragAnswer_model03_v3.prototype._clickSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                state = globalThis._.cloneDeep(this._state);
                if (this._answer.length === 0) {
                    if (this._leftContain.length === 0 && this._rightContain.length === 0) {
                        state.submit = true;
                        this.updateState(state);
                        return [2 /*return*/];
                    }
                }
                else if (this._answer.length === 1) {
                    if (this._box1Contain.length === 0 && this._box2Contain.length === 0 && this._box3Contain.length === 0 && this._box4Contain.length === 0) {
                        state.submit = true;
                        this.updateState(state);
                        return [2 /*return*/];
                    }
                }
                else if (this._answer.length >= 2) {
                    return [2 /*return*/];
                }
                // 前：1 后：2
                if (this._answer.length === 0) {
                    if (this._leftContain.length < this._containerTotal || this._rightContain.length < this._containerTotal) {
                        this.answerFeedback(false);
                        return [2 /*return*/];
                    }
                    console.log('======= leftContain length ===== ' + this._leftContain.length);
                    console.log('======= rightContain length ===== ' + this._rightContain.length);
                    if (this._leftContain[0].name[0] === this._leftContain[1].name[0] &&
                        this._leftContain[0].name[0] === this._leftContain[2].name[0] &&
                        this._leftContain[0].name[0] === this._leftContain[3].name[0]) {
                        console.log('=== 第一次回答正确  按照大小分 ===');
                        // 第一次答案正确
                        this.answerFeedback(true);
                        this._answer.push(this.answerType.Size);
                        state.answer = this._answer;
                        this.refreshFirstRightData(state);
                    }
                    else if (this._leftContain[0].name[1] === this._leftContain[1].name[1] &&
                        this._leftContain[0].name[1] === this._leftContain[2].name[1] &&
                        this._leftContain[0].name[1] === this._leftContain[3].name[1]) {
                        console.log('=== 第一次回答正确 按照形状分===');
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
                    if (this._box1Contain.length < this._containerTotalSecond ||
                        this._box2Contain.length < this._containerTotalSecond ||
                        this._box3Contain.length < this._containerTotalSecond ||
                        this._box4Contain.length < this._containerTotalSecond) {
                        this.answerFeedback(false);
                        return [2 /*return*/];
                    }
                    // 大小 在前
                    if (this._answer[this._answer.length - 1] === this.answerType.Size) {
                        if (this._box1Contain[0].name[1] === this._box1Contain[1].name[1] &&
                            this._box3Contain[0].name[1] === this._box3Contain[1].name[1]) {
                            console.log('=== 第二次答案正确 形状===');
                            this.answerFeedback(true);
                            this._answer.push(this.answerType.Shap);
                            state.answer = this._answer;
                        }
                        else {
                            console.log('=== 第二次答案错误 形状===');
                            this.answerFeedback(false);
                            // this.refreshSecondWrongData(state);
                        }
                    }
                    else if (this._answer[this._answer.length - 1] === this.answerType.Shap) {
                        if (this._box1Contain[0].name[0] === this._box1Contain[1].name[0] &&
                            this._box3Contain[0].name[0] === this._box3Contain[1].name[0]) {
                            console.log('=== 第二次答案正确 颜色和大小===');
                            this.answerFeedback(true);
                            this._answer.push(this.answerType.Size);
                            state.answer = this._answer;
                        }
                        else {
                            console.log('=== 第二次答案错误 颜色和大小===');
                            this.answerFeedback(false);
                            // this.refreshSecondWrongData(state);
                        }
                    }
                }
                this.updateState(state);
                return [2 /*return*/];
            });
        });
    };
    dragAnswer_model03_v3.prototype.refreshFirstRightData = function (state) {
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
            else {
                var temp = {
                    pos: {
                        x: this._colliderCacheSecond[i].pos.x,
                        y: this._colliderCacheSecond[i].pos.y
                    },
                    index: state.rightContain[i - this._containerTotal].index
                };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.rightContain[i - this._containerTotal].index;
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
        state.leftContain = [];
        state.rightContain = [];
    };
    // 获取状态
    dragAnswer_model03_v3.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model03_v3.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model03_v3.prototype.updateUi = function (oldState, state) {
        if (!globalThis._.isEqual(oldState.answer, state.answer)) {
            if (state.answer.length === 1) {
                // 显示第二种答题界面
                this._c2.selectedIndex = 1;
                this._submit.x = 1667;
                this._submit.y = 0;
            }
            else if (state.answer.length === 2) {
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
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    };
    dragAnswer_model03_v3.prototype.answerFeedback = function (bool) {
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
    dragAnswer_model03_v3.prototype.offButDrag = function () {
        this.arrContainOffDrag(this._leftContain);
        this.arrContainOffDrag(this._rightContain);
        this.arrContainOffDrag(this._box1Contain);
        this.arrContainOffDrag(this._box2Contain);
        this.arrContainOffDrag(this._box3Contain);
        this.arrContainOffDrag(this._box4Contain);
    };
    dragAnswer_model03_v3.prototype.arrContainOffDrag = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].draggable = false;
        }
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model03_v3.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model03_v3.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model03_v3.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model03_v3.prototype.onEnable = function () {
        this.registerState();
        // this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model03_v3.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model03_v3 = __decorate([
        ccclass
    ], dragAnswer_model03_v3);
    return dragAnswer_model03_v3;
}(cc.Component));
exports.default = dragAnswer_model03_v3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDQtdjMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQWt4Q0M7UUEzd0NXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGtCQUFZLEdBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckcsbUJBQWEsR0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUUxRyxrQkFBWSxHQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDN0Qsa0JBQVksR0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzdELGtCQUFZLEdBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvRCxrQkFBWSxHQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFL0QsMEJBQW9CLEdBQVE7WUFDaEMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUNyQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDckMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUN0QyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDdEMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQ3RDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtTQUFDLENBQUM7UUFVcEMsa0JBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsbUJBQWEsR0FBUSxFQUFFLENBQUM7UUFFeEIsa0JBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsa0JBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsa0JBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsa0JBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFFNUIsMkJBQXFCLEdBQVcsQ0FBQyxDQUFDO1FBRWxDLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBcUJwQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBSWxCLGdCQUFVLEdBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztZQUU5QixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxDQUFDLENBQUUseUJBQXlCO1NBRXJDLENBQUMsQ0FBQztRQUtLLGFBQU8sR0FBUSxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7UUFFbkQsWUFBTSxHQUFHLEVBQUUsQ0FBQzs7SUE4ckN4QixDQUFDO0lBNXJDRyxzQkFBSSx3Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsc0NBQU0sR0FBTjtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUVqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkQsSUFBSSxJQUFJLEdBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTtvQkFDL0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNULENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUNmLENBQUM7Z0JBRUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUksWUFBWSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDckgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFFMUM7U0FDSjtRQUVELElBQUksSUFBSSxHQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDOUQsSUFBSSxLQUFLLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUVoRSxJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQy9ELElBQUksSUFBSSxHQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDL0QsSUFBSSxJQUFJLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMvRCxJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRS9ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFD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QUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzthQUNsRTtTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBRWhFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDNUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDbEU7U0FDSjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUVsRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzlGLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ25FO1NBQ0o7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDaEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUM1RixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzthQUNsRTtTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JB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LE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFqeENnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQWt4Q3pDO0lBQUQsNEJBQUM7Q0FseENELEFBa3hDQyxDQWx4Q2tELEVBQUUsQ0FBQyxTQUFTLEdBa3hDOUQ7a0JBbHhDb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHJ1emh1YW5cclxuICogQERhdGU6IDIwMjEtNS0yNyAxOTo0NzowMFxyXG4gKiBATGFzdEVkaXRvcnM6IHJ1emh1YW5cclxuICogQExhc3RFZGl0VGltZTogMjAyMS01LTI3IDE5OjQ3OjAwXHJcbiAqL1xyXG5cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuY29uc3QgeyBwb2ludEJlbG9uZ0FyZWEgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRyYWdBbnN3ZXJfbW9kZWwwM192MyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF93b3JsZFJvb3Q6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIF92aWV3OiBmZ3VpLkdDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJHcm91cDogZmd1aS5HR3JvdXA7XHJcbiAgICBwcml2YXRlIF9jb2xsaWRlcmVkR3JvdXA6IGZndWkuR0dyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQm94ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfbGVmdFBvc2l0b246IGFueSA9IFt7IHg6IDMwMCwgeTogNzcwIH0sIHsgeDogNTgwLCB5OiA3NzAgfSwgeyB4OiAzMDAsIHk6IDkyNSB9LCB7IHg6IDU4MCwgeTogOTI1IH1dO1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRQb3NpdG9uOiBhbnkgPSBbeyB4OiAxMzU1LCB5OiA3NzAgfSwgeyB4OiAxNjQwLCB5OiA3NzAgfSwgeyB4OiAxMzU1LCB5OiA5MjUgfSwgeyB4OiAxNjQwLCB5OiA5MjUgfV07XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZUJveFBvczE6IGFueSA9IFt7IHg6IDE1NSwgeTogODY1IH0sIHsgeDogMzU1LCB5OiA4NjUgfV07XHJcbiAgICBwcml2YXRlIF90eXBlQm94UG9zMjogYW55ID0gW3sgeDogNjM1LCB5OiA4NjUgfSwgeyB4OiA4MDUsIHk6IDg2NSB9XTtcclxuICAgIHByaXZhdGUgX3R5cGVCb3hQb3MzOiBhbnkgPSBbeyB4OiAxMTEwLCB5OiA4NjUgfSwgeyB4OiAxMjgwLCB5OiA4NjUgfV07XHJcbiAgICBwcml2YXRlIF90eXBlQm94UG9zNDogYW55ID0gW3sgeDogMTU3MCwgeTogODY1IH0sIHsgeDogMTc1MCwgeTogODY1IH1dO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQ2FjaGVTZWNvbmQ6IGFueSA9IFtcclxuICAgICAgICB7IHBvczogeyB4OiAzNDUsIHk6IDMyNSB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDYzNSwgeTogMzI1IH0sIGluZGV4OiAwIH0sXHJcbiAgICAgICAgeyBwb3M6IHsgeDogMzQ1LCB5OiA0ODAgfSwgaW5kZXg6IDAgfSxcclxuICAgICAgICB7IHBvczogeyB4OiA2MzUsIHk6IDQ4MCB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDEzMDAsIHk6IDMyNSB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDE1NDUsIHk6IDMyNSB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDEzMDAsIHk6IDQ4MCB9LCBpbmRleDogMCB9LFxyXG4gICAgICAgIHsgcG9zOiB7IHg6IDE1NDUsIHk6IDQ4MCB9LCBpbmRleDogMCB9XTtcclxuXHJcbiAgICBwcml2YXRlIF9sZWZ0UmVjdDogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX3JpZ2h0UmVjdDogY2MuUmVjdDtcclxuXHJcbiAgICBwcml2YXRlIF9ib3hSZWN0MTogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX2JveFJlY3QyOiBjYy5SZWN0O1xyXG4gICAgcHJpdmF0ZSBfYm94UmVjdDM6IGNjLlJlY3Q7XHJcbiAgICBwcml2YXRlIF9ib3hSZWN0NDogY2MuUmVjdDtcclxuXHJcbiAgICBwcml2YXRlIF9sZWZ0Q29udGFpbjogYW55ID0gW107XHJcbiAgICBwcml2YXRlIF9yaWdodENvbnRhaW46IGFueSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2JveDFDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2JveDJDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2JveDNDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2JveDRDb250YWluOiBhbnkgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jb250YWluZXJUb3RhbDogbnVtYmVyID0gNDtcclxuXHJcbiAgICBwcml2YXRlIF9jb250YWluZXJUb3RhbFNlY29uZDogbnVtYmVyID0gMjtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlckNhY2hlID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc3VibWl0OiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBfYzI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MxOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuXHJcbiAgICBwcml2YXRlIF90aXRsZVRyaWdnZXI6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlMjogYW55O1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF9kcmFnU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1NvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9sYXN0UG9zOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBhbnN3ZXJUeXBlOiBhbnkgPSBjYy5FbnVtKHtcclxuXHJcbiAgICAgICAgU2l6ZTogMSwgLy8g5aSnLS0t5bCPICDnuqItLS3mqZlcclxuICAgICAgICBTaGFwOiAyICAvLyDmraPmlrnlvaItLS3plb/mlrnlvaIgIOS4ieinkuW9oi0tLeW5s+ihjOWbm+i+ueW9olxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlcjogYW55ID0gW107IC8vIDDvvJrmsqHnrZTpopjml7YgMe+8muetlOWvueesrOS4gOenjemAieaLqeaXtiAy77yaIOetlOWvueesrOS6jOenjemAieaLqeaXtlxyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9hbnN3ZXIgPSBbXTtcclxuICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JveDFDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fYm94MkNvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9ib3gzQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JveDRDb250YWluID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbGxpZGVyQm94ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy5fdmlldy54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuX3ZpZXcud2lkdGgpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXJHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlckJveFwiKS5hc0dyb3VwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IHRoaXMuX2NvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICBub2RlLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBub2RlLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogbm9kZS55LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc0luZGV4OiAtMVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oZmd1aS5FdmVudC5UT1VDSF9NT1ZFLCB0aGlzLl9vbkRyYWdNb3ZlLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyRGF0YSA9IHsgcG9zOiB7IHg6IG5vZGUuZGF0YS54LCB5OiBub2RlLmRhdGEueSB9LCBpbmRleDogbm9kZS5kYXRhLmluZGV4LCBwb3NJbmRleDogbm9kZS5kYXRhLnBvc0luZGV4IH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckNhY2hlLnB1c2goY29sbGlkZXJEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZWZ0OiBmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJsZWZ0QmdcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgcmlnaHQ6IGZndWkuR0ltYWdlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInJpZ2h0QmdcIikuYXNJbWFnZTtcclxuXHJcbiAgICAgICAgbGV0IGJveDE6IGZndWkuR0ltYWdlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInR5cGViZzFcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgYm94MjogZmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidHlwZWJnMlwiKS5hc0ltYWdlO1xyXG4gICAgICAgIGxldCBib3gzOiBmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0eXBlYmczXCIpLmFzSW1hZ2U7XHJcbiAgICAgICAgbGV0IGJveDQ6IGZndWkuR0ltYWdlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInR5cGViZzRcIikuYXNJbWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5fbGVmdFJlY3QgPSBuZXcgY2MuUmVjdChsZWZ0LngsIGxlZnQueSwgbGVmdC53aWR0aCwgbGVmdC5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX3JpZ2h0UmVjdCA9IG5ldyBjYy5SZWN0KHJpZ2h0LngsIHJpZ2h0LnksIHJpZ2h0LndpZHRoLCByaWdodC5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLl9ib3hSZWN0MSA9IG5ldyBjYy5SZWN0KGJveDEueCwgYm94MS55LCBib3gxLndpZHRoLCBib3gxLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fYm94UmVjdDIgPSBuZXcgY2MuUmVjdChib3gyLngsIGJveDIueSwgYm94Mi53aWR0aCwgYm94Mi5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX2JveFJlY3QzID0gbmV3IGNjLlJlY3QoYm94My54LCBib3gzLnksIGJveDMud2lkdGgsIGJveDMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9ib3hSZWN0NCA9IG5ldyBjYy5SZWN0KGJveDQueCwgYm94NC55LCBib3g0LndpZHRoLCBib3g0LmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICBpZiAodGhpcy5fYzIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jMS5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzEuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICBhbnN3ZXI6IHRoaXMuX2Fuc3dlcixcclxuXHJcbiAgICAgICAgICAgIGNvbGxpZGVyQm94OiB0aGlzLl9jb2xsaWRlckNhY2hlLFxyXG5cclxuICAgICAgICAgICAgbGVmdENvbnRhaW46IFtdLFxyXG5cclxuICAgICAgICAgICAgcmlnaHRDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDFDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDJDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDNDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDRDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/kOihjOaXtiDnpoHmraLmk43kvZxcclxuICAgIGZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmICghaGFuZGxlTWFzaykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlTWFzayA9IG5ldyBjYy5Ob2RlKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnBhcmVudCA9IHRoaXMuX3dvcmxkUm9vdDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay53aWR0aCA9IDE5MjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suaGVpZ2h0ID0gMTA4MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay54ID0gOTYwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnkgPSA1NDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOaTjeS9nOaPkOekulxyXG4gICAgb25IYW5kbGVHdWlkZShoYW5kbGVHdWlkZSkge1xyXG4gICAgICAgIGlmICghaGFuZGxlR3VpZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZChoYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmIChoYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgaGFuZGxlR3VpZGUuY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gaGFuZGxlR3VpZGUuY29tcG9uZW50LndpZHRoKSAvIDIgKyBoYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIGhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIGhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSBoYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQoaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOa2iOmZpOemgeatolxyXG4gICAgZGlzYWJsZUZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmIChoYW5kbGVNYXNrKSBoYW5kbGVNYXNrLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLTml7ZcclxuICAgIC8vIOaLluaLveWumuaXtuWZqFxyXG4gICAgZHJhZ1NjaGVkdWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnZ2luZykge1xyXG4gICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5kcmFnID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG5cclxuICAgICAgICAvLyDkuLTml7YgbW9kZWwgY29tcG9uZW50IGpzb24g6YWN572u5Yqg6L29XHJcbiAgICAgICAgbGV0IHsgcGF0aENvbmZpZywgbW9kZWwsIGNvbXBvbmVudHMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IFBhY2thZ2UgPSBwYXRoQ29uZmlnLnBhY2thZ2VOYW1lO1xyXG5cclxuICAgICAgICBpZiAobW9kZWwudWlQYXRoKSB7XHJcbiAgICAgICAgICAgIGxldCBHQ29tcG9uZW50ID0gbW9kZWwudWlQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLmNvbmZpZykge1xyXG4gICAgICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlIH0gPSBtb2RlbC5jb25maWc7XHJcbiAgICAgICAgICAgIGlmIChhbnN3ZXIpIHRoaXMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICAgICAgLy8g5Yqo5pWI5rOo5YaMXHJcbiAgICAgICAgICAgIGlmIChhZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdiBpbiBhZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XS5jb21wb25lbnQpIHRoaXNbdl0uY29tcG9uZW50ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIGFlW3ZdLmNvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XS5wb3MpIHRoaXNbdl0ucG9zID0gYWVbdl0ucG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFBhdGg6IGFueSA9IGAke3BhdGhDb25maWcucmVtb3RlVXJsfSR7cGF0aENvbmZpZy5jb21wb25lbnRCdW5kbGVQYXRofSR7Y29tcG9uZW50c1trZXldLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbXBvbmVudEJ1bmRsZSwgY29tcG9uZW50c1trZXldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29tcG9uZW50UHJlZmFiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZHJhZ0J1dDogZmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZCgnZHJhZ1NvdW5kJykuYXNCdXR0b247XHJcbiAgICAgICAgZHJhZ0J1dC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwoZHJhZ0J1dFtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1NvdW5kID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuXHJcbiAgICAgICAgbGV0IGNsaWNrQnV0OiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkKCdjbGlja1NvdW5kJykuYXNCdXR0b247XHJcbiAgICAgICAgY2xpY2tCdXQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwoY2xpY2tCdXRbXCJfc291bmRcIl0pO1xyXG4gICAgICAgIHRoaXMuX2NsaWNrU291bmQgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9yaWdpblZhbHVlKHY6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHYueCxcclxuICAgICAgICAgICAgeTogdi55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICBldnQuY2FwdHVyZVRvdWNoKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2xhc3RQb3MgPSBldnQucG9zO1xyXG5cclxuICAgICAgICB2YXIgYnRuOiBmZ3VpLkdPYmplY3QgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgYnRuLnNvcnRpbmdPcmRlciA9IDk5O1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoYnRuLmRhdGEuaW5kZXggPT09IHN0YXRlLmNvbGxpZGVyQm94W2ldLmluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3guc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLl9jbGlja1NvdW5kLCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ01vdmUoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0VuZChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuX2RyYWdTb3VuZCwgZmFsc2UsIDEpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgLy8g56ys5LiA5qyh562U6aKY5pe2XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VuZEZpcnN0RGVhbChldnQpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOesrOS6jOasoeetlOmimOaXtlxyXG4gICAgICAgICAgICB0aGlzLmRyYWdFbmRTY2VuZERlYWwoZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnRW5kRmlyc3REZWFsKGV2dCkge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBsZXQgbW92ZUlzTWluID0gTWF0aC5hYnMoZXZ0LnBvcy54IC0gdGhpcy5fbGFzdFBvcy54KSA8IDcwICYmIE1hdGguYWJzKGV2dC5wb3MueSAtIHRoaXMuX2xhc3RQb3MueSkgPCA3MDtcclxuXHJcbiAgICAgICAgdmFyIGJ0bjogZmd1aS5HT2JqZWN0ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCB0YXJQb3MgPSBuZXcgY2MuVmVjMihidG4ueCwgYnRuLnkpO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lckxlZnQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXJSaWdodCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgaXNDb250YWluZXJMZWZ0ID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9sZWZ0Q29udGFpbiwgYnRuKTtcclxuICAgICAgICBpc0NvbnRhaW5lclJpZ2h0ID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9yaWdodENvbnRhaW4sIGJ0bik7XHJcblxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGlmICh0aGlzLl9sZWZ0UmVjdC5jb250YWlucyh0YXJQb3MpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOW3piA9PT09Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDb250YWluZXJMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZUlzTWluIHx8IHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCA8IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5Yi35pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fbGVmdENvbnRhaW4sIGJ0biwgc3RhdGUubGVmdENvbnRhaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5sZWZ0Q29udGFpbiwgdGhpcy5fbGVmdFBvc2l0b24pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS6pOaNouahhuWGheeahOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVkZ2VDaGFuZ2VQb3NJbkJveChldnQucG9zLCBzdGF0ZS5sZWZ0Q29udGFpbiwgdGhpcy5fbGVmdFBvc2l0b24sIGJ0biwgdGhpcy5fbGVmdENvbnRhaW4sIHN0YXRlLmNvbGxpZGVyQm94KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhbEFsbENvbnRhaW5JbihmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHN0YXRlLCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sZWZ0Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2xlZnRQb3NpdG9uW3N0YXRlLmxlZnRDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2xlZnRQb3NpdG9uW3N0YXRlLmxlZnRDb250YWluLmxlbmd0aF0ueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc0luZGV4OiBzdGF0ZS5sZWZ0Q29udGFpbi5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxlZnRDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9yaWdodFJlY3QuY29udGFpbnModGFyUG9zKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyUmlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZUlzTWluIHx8IHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGggPCAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WIoOmZpOW3pui+ueWMheWQq+eahO+8m+WIt+aWsFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ3VyRHJhZ09iakluQm94KHRoaXMuX3JpZ2h0Q29udGFpbiwgYnRuLCBzdGF0ZS5yaWdodENvbnRhaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5yaWdodENvbnRhaW4sIHRoaXMuX3JpZ2h0UG9zaXRvbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS6pOaNouahhuWGheeahOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVkZ2VDaGFuZ2VQb3NJbkJveChldnQucG9zLCBzdGF0ZS5yaWdodENvbnRhaW4sIHRoaXMuX3JpZ2h0UG9zaXRvbiwgYnRuLCB0aGlzLl9yaWdodENvbnRhaW4sIHN0YXRlLmNvbGxpZGVyQm94KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgc3RhdGUsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yaWdodENvbnRhaW4ucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9yaWdodFBvc2l0b25bc3RhdGUucmlnaHRDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3JpZ2h0UG9zaXRvbltzdGF0ZS5yaWdodENvbnRhaW4ubGVuZ3RoXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW5kZXg6IHN0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnJpZ2h0Q29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlYWxBbGxDb250YWluSW4odHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHN0YXRlLCBidG4pO1xyXG5cclxuICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhZ0VuZFNjZW5kRGVhbChldnQpIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgbGV0IG1vdmVJc01pbiA9IE1hdGguYWJzKGV2dC5wb3MueCAtIHRoaXMuX2xhc3RQb3MueCkgPCA3MCAmJiBNYXRoLmFicyhldnQucG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkpIDwgNzA7XHJcblxyXG4gICAgICAgIHZhciBidG46IGZndWkuR09iamVjdCA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgdGFyUG9zID0gbmV3IGNjLlZlYzIoYnRuLngsIGJ0bi55KTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXIxID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyMiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lcjMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXI0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlzQ29udGFpbmVyMSA9IHRoaXMuanVkZ2VEcmFnT2JqSW5Cb3godGhpcy5fYm94MUNvbnRhaW4sIGJ0bik7XHJcbiAgICAgICAgaXNDb250YWluZXIyID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9ib3gyQ29udGFpbiwgYnRuKTtcclxuICAgICAgICBpc0NvbnRhaW5lcjMgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2JveDNDb250YWluLCBidG4pO1xyXG4gICAgICAgIGlzQ29udGFpbmVyNCA9IHRoaXMuanVkZ2VEcmFnT2JqSW5Cb3godGhpcy5fYm94NENvbnRhaW4sIGJ0bik7XHJcblxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGlmICh0aGlzLl9ib3hSZWN0MS5jb250YWlucyh0YXJQb3MpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOahhjEgPT09PScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlSXNNaW4gfHwgdGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoIDwgMikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSDmgaLlpI3ljp/kvY0gWFhYWCA9PT09ICcgKyBNYXRoLmFicyhldnQucG9zLnggLSB0aGlzLl9sYXN0UG9zLngpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSDmgaLlpI3ljp/kvY0gWVlZWSA9PT09ICcgKyBNYXRoLmFicyhldnQucG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5Yi35pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fYm94MUNvbnRhaW4sIGJ0biwgc3RhdGUuYm94MUNvbnRhaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3gxQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczEpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqk5o2i5qGG5YaF55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWRnZUNoYW5nZVBvc0luQm94KGV2dC5wb3MsIHN0YXRlLmJveDFDb250YWluLCB0aGlzLl90eXBlQm94UG9zMSwgYnRuLCB0aGlzLl9ib3gxQ29udGFpbiwgc3RhdGUuY29sbGlkZXJCb3gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIHRydWUsIHRydWUsIHN0YXRlLCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ib3gxQ29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbFNlY29uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JveDFDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fdHlwZUJveFBvczFbc3RhdGUuYm94MUNvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHlwZUJveFBvczFbc3RhdGUuYm94MUNvbnRhaW4ubGVuZ3RoXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW5kZXg6IHN0YXRlLmJveDFDb250YWluLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYm94MUNvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib3hSZWN0Mi5jb250YWlucyh0YXJQb3MpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSDmoYYyID09PT0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0NvbnRhaW5lcjIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZUlzTWluIHx8IHRoaXMuX2JveDJDb250YWluLmxlbmd0aCA8IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5Yi35pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fYm94MkNvbnRhaW4sIGJ0biwgc3RhdGUuYm94MkNvbnRhaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3gyQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS6pOaNouahhuWGheeahOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVkZ2VDaGFuZ2VQb3NJbkJveChldnQucG9zLCBzdGF0ZS5ib3gyQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczIsIGJ0biwgdGhpcy5fYm94MkNvbnRhaW4sIHN0YXRlLmNvbGxpZGVyQm94KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhbEFsbENvbnRhaW5JbihmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlLCBzdGF0ZSwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYm94MkNvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYm94MkNvbnRhaW4ucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl90eXBlQm94UG9zMltzdGF0ZS5ib3gyQ29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90eXBlQm94UG9zMltzdGF0ZS5ib3gyQ29udGFpbi5sZW5ndGhdLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NJbmRleDogc3RhdGUuYm94MkNvbnRhaW4ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5ib3gyQ29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm94UmVjdDMuY29udGFpbnModGFyUG9zKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT0g5qGGMyA9PT09Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDb250YWluZXIzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmVJc01pbiB8fCB0aGlzLl9ib3gzQ29udGFpbi5sZW5ndGggPCAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WIoOmZpOW3pui+ueWMheWQq+eahO+8m+WIt+aWsFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ3VyRHJhZ09iakluQm94KHRoaXMuX2JveDNDb250YWluLCBidG4sIHN0YXRlLmJveDNDb250YWluKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUuYm94M0NvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3MzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDkuqTmjaLmoYblhoXnmoTkvY3nva5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1ZGdlQ2hhbmdlUG9zSW5Cb3goZXZ0LnBvcywgc3RhdGUuYm94M0NvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3MzLCBidG4sIHRoaXMuX2JveDNDb250YWluLCBzdGF0ZS5jb2xsaWRlckJveCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWxBbGxDb250YWluSW4oZmFsc2UsIGZhbHNlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSwgc3RhdGUsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2JveDNDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JveDNDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fdHlwZUJveFBvczNbc3RhdGUuYm94M0NvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHlwZUJveFBvczNbc3RhdGUuYm94M0NvbnRhaW4ubGVuZ3RoXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW5kZXg6IHN0YXRlLmJveDNDb250YWluLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYm94M0NvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZS5jb2xsaWRlckJveCwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JveFJlY3Q0LmNvbnRhaW5zKHRhclBvcykpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOahhjQgPT09PScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyNCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlSXNNaW4gfHwgdGhpcy5fYm94NENvbnRhaW4ubGVuZ3RoIDwgMikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZS5jb2xsaWRlckJveCwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy/liKDpmaTlt6bovrnljIXlkKvnmoTvvJvliLfmlrBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3g0Q29udGFpbiwgYnRuLCBzdGF0ZS5ib3g0Q29udGFpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDRDb250YWluLCB0aGlzLl90eXBlQm94UG9zNCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqk5o2i5qGG5YaF55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWRnZUNoYW5nZVBvc0luQm94KGV2dC5wb3MsIHN0YXRlLmJveDRDb250YWluLCB0aGlzLl90eXBlQm94UG9zNCwgYnRuLCB0aGlzLl9ib3g0Q29udGFpbiwgc3RhdGUuY29sbGlkZXJCb3gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHN0YXRlLCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ib3g0Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbFNlY29uZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ib3g0Q29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX3R5cGVCb3hQb3M0W3N0YXRlLmJveDRDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3R5cGVCb3hQb3M0W3N0YXRlLmJveDRDb250YWluLmxlbmd0aF0ueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc0luZGV4OiBzdGF0ZS5ib3g0Q29udGFpbi5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJveDRDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgc3RhdGUsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlYWxBbGxDb250YWluSW4oaXNDb250YWluZXJMZWZ0LCBpc0NvbnRhaW5lclJpZ2h0LCBpc0NvbnRhaW5lcjEsIGlzQ29udGFpbmVyMiwgaXNDb250YWluZXIzLCBpc0NvbnRhaW5lcjQsIHN0YXRlLCBidG4pIHtcclxuXHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyTGVmdCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fbGVmdENvbnRhaW4sIGJ0biwgc3RhdGUubGVmdENvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUubGVmdENvbnRhaW4sIHRoaXMuX2xlZnRQb3NpdG9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0NvbnRhaW5lclJpZ2h0KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9yaWdodENvbnRhaW4sIGJ0biwgc3RhdGUucmlnaHRDb250YWluKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLnJpZ2h0Q29udGFpbiwgdGhpcy5fcmlnaHRQb3NpdG9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0NvbnRhaW5lcjEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ3VyRHJhZ09iakluQm94KHRoaXMuX2JveDFDb250YWluLCBidG4sIHN0YXRlLmJveDFDb250YWluKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDFDb250YWluLCB0aGlzLl90eXBlQm94UG9zMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNDb250YWluZXIyKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3gyQ29udGFpbiwgYnRuLCBzdGF0ZS5ib3gyQ29udGFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3gyQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNDb250YWluZXIzKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3gzQ29udGFpbiwgYnRuLCBzdGF0ZS5ib3gzQ29udGFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3gzQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNDb250YWluZXI0KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9ib3g0Q29udGFpbiwgYnRuLCBzdGF0ZS5ib3g0Q29udGFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3g0Q29udGFpbiwgdGhpcy5fdHlwZUJveFBvczQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBqdWRnZUNoYW5nZVBvc0luQm94KGN1clBvcywgc3RhdGVDb250YWluLCBwb3NBcnIsIGJ0biwgYm94Q29udGFpbiwgc3RhdGVDb2xsaWRlckJveCkge1xyXG5cclxuICAgICAgICBsZXQgY2hhbmdlSW5kZXggPSAtMTtcclxuICAgICAgICBsZXQgY2xpY2tJbmRleCA9IGJ0bi5kYXRhLnBvc0luZGV4O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIOeCueWHu+eahEluZGV4ID09PT09PT09JyArIGJ0bi5kYXRhLnBvc0luZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKGN1clBvcy54IC0gdGhpcy5fbGFzdFBvcy54ID4gMTEwICYmIE1hdGguYWJzKGN1clBvcy55IC0gdGhpcy5fbGFzdFBvcy55KSA8IDUwKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIOWPsyA9PT09PT09PScpO1xyXG4gICAgICAgICAgICAvL+WPs1xyXG4gICAgICAgICAgICBjaGFuZ2VJbmRleCA9IGNsaWNrSW5kZXggKyAxO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGN1clBvcy54IC0gdGhpcy5fbGFzdFBvcy54IDwgLTExMCAmJiBNYXRoLmFicyhjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSkgPCA1MCkge1xyXG5cclxuICAgICAgICAgICAgLy/lt6ZcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDlt6YgPT09PT09PT0nKTtcclxuICAgICAgICAgICAgY2hhbmdlSW5kZXggPSBjbGlja0luZGV4IC0gMTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSA+IDExMCAmJiBNYXRoLmFicyhjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCkgPCA1MCkge1xyXG5cclxuICAgICAgICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaIg5LiLID09PT09PT09Jyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCArIDI7XHJcblxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGN1clBvcy55IC0gdGhpcy5fbGFzdFBvcy55IDwgLTExMCAmJiBNYXRoLmFicyhjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCkgPCA1MCkge1xyXG5cclxuICAgICAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaIg5LiKID09PT09PT09Jyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCAtIDI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCA+IDExMCAmJiBjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSA+IDExMCkge1xyXG5cclxuICAgICAgICAgICAgLy8g5Y+z5LiLXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaIg5Y+z5LiLID09PT09PT09Jyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCArIDM7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoY3VyUG9zLnggLSB0aGlzLl9sYXN0UG9zLngpID4gNTAgJiYgY3VyUG9zLnggLSB0aGlzLl9sYXN0UG9zLnggPCAxMTAgJiYgY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkgPiAxMTApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOW3puS4i1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIOW3puS4iyA9PT09PT09PScpO1xyXG4gICAgICAgICAgICBjaGFuZ2VJbmRleCA9IGNsaWNrSW5kZXggKyAxO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGN1clBvcy54IC0gdGhpcy5fbGFzdFBvcy54ID4gMTEwICYmIGN1clBvcy55IC0gdGhpcy5fbGFzdFBvcy55IDwgMTEwICYmIE1hdGguYWJzKGN1clBvcy55IC0gdGhpcy5fbGFzdFBvcy55KSA+IDUwKSB7XHJcbiAgICAgICAgICAgIC8vIOWPs+S4ilxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIOWPs+S4iiA9PT09PT09PScpO1xyXG4gICAgICAgICAgICBjaGFuZ2VJbmRleCA9IGNsaWNrSW5kZXggLSAxO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGN1clBvcy54IC0gdGhpcy5fbGFzdFBvcy54IDwgMTEwICYmIGN1clBvcy55IC0gdGhpcy5fbGFzdFBvcy55IDwgMTEwICYmIE1hdGguYWJzKGN1clBvcy54IC0gdGhpcy5fbGFzdFBvcy54KSA+IDUwICYmIE1hdGguYWJzKGN1clBvcy55IC0gdGhpcy5fbGFzdFBvcy55KSA+IDUwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDlt6bkuIpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDlt6bkuIogPT09PT09PT0nKTtcclxuICAgICAgICAgICAgY2hhbmdlSW5kZXggPSBjbGlja0luZGV4IC0gMztcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaIgWVlZWVkgPT09PT09PT0nICsgKGN1clBvcy55IC0gdGhpcy5fbGFzdFBvcy55KSk7XHJcblxyXG4gICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGVDb2xsaWRlckJveCwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5Yi35pawXHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ3VyRHJhZ09iakluQm94KGJveENvbnRhaW4sIGJ0biwgc3RhdGVDb250YWluKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlQ29udGFpbiwgcG9zQXJyKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaJpbmcgY2xpY2tJbmRleCA9PT09PT09PSAgJyArIGNsaWNrSW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaJpbmcgY2hhbmdlSW5kZXggPT09PT09PT0gICcgKyBjaGFuZ2VJbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VJbmRleCA8IDAgfHwgY2hhbmdlSW5kZXggPiBzdGF0ZUNvbnRhaW4ubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgLy/liKDpmaTlt6bovrnljIXlkKvnmoTvvJvlvZLkvY3liLDljp/mnaXnmoTkvY3nva5cclxuICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGVDb2xsaWRlckJveCwgYnRuKTtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3goYm94Q29udGFpbiwgYnRuLCBzdGF0ZUNvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGVDb250YWluLCBwb3NBcnIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRlbXBDbGlja0luZGV4ID0gc3RhdGVDb250YWluW2NsaWNrSW5kZXhdLmluZGV4O1xyXG4gICAgICAgIGxldCB0ZW1wQ2hhbmdlSW5kZXggPSBzdGF0ZUNvbnRhaW5bY2hhbmdlSW5kZXhdLmluZGV4O1xyXG5cclxuICAgICAgICBzdGF0ZUNvbnRhaW5bY2xpY2tJbmRleF0uaW5kZXggPSB0ZW1wQ2hhbmdlSW5kZXg7XHJcbiAgICAgICAgc3RhdGVDb250YWluW2NoYW5nZUluZGV4XS5pbmRleCA9IHRlbXBDbGlja0luZGV4O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkZWxldGVDdXJEcmFnT2JqSW5Cb3goX2JveCwgY3VyQnV0LCBzdGF0ZUJveCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9ib3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChfYm94W2ldID09PSBjdXJCdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfYm94LnNwbGljZShpLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUJveFtpXS5pbmRleCA9PT0gY3VyQnV0LmRhdGEuaW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQm94LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEJ1dHRvbkluaXRQb3Moc3RhdGVDb2xsaWRlckJveCwgYnRuKSB7XHJcblxyXG4gICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICBwb3M6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHg6IGJ0bi5kYXRhLngsXHJcbiAgICAgICAgICAgICAgICB5OiBidG4uZGF0YS55XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgcG9zSW5kZXg6IC0xXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGF0ZUNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUganVkZ2VEcmFnT2JqSW5Cb3goX2JveCwgY3VyQnV0KSB7XHJcblxyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lciA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2JveC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKF9ib3hbaV0gPT09IGN1ckJ1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlzQ29udGFpbmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXNDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoQm94UG9zKHN0YXRlQm94LCBwb3NBcnIpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZUJveC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgc3RhdGVCb3hbaV0ucG9zLnggPSBwb3NBcnJbaV0ueDtcclxuICAgICAgICAgICAgc3RhdGVCb3hbaV0ucG9zLnkgPSBwb3NBcnJbaV0ueTtcclxuICAgICAgICAgICAgc3RhdGVCb3hbaV0ucG9zSW5kZXggPSBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hGaXJzdFdyb25nRGF0YShzdGF0ZSkge1xyXG5cclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS5pbmRleFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9yaWdodENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICAgICAgc3RhdGUubGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW4gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hTZWNvbmRXcm9uZ0RhdGEoc3RhdGUpIHtcclxuXHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJCb3ggPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLnlcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEuaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2JveDFDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fYm94MkNvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9ib3gzQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JveDRDb250YWluID0gW107XHJcblxyXG4gICAgICAgIHN0YXRlLmJveDFDb250YWluID0gW107XHJcbiAgICAgICAgc3RhdGUuYm94MkNvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5ib3gzQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHN0YXRlLmJveDRDb250YWluID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tUaXRsZShldnQ6IGFueSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5fY2xpY2tTb3VuZCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUudGl0bGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzEuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuXHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbzogY2MuQXVkaW9DbGlwID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jbGlja1N1Ym1pdChldnQ6IGFueSkge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWZ0Q29udGFpbi5sZW5ndGggPT09IDAgJiYgdGhpcy5fcmlnaHRDb250YWluLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2JveDFDb250YWluLmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9ib3gyQ29udGFpbi5sZW5ndGggPT09IDAgJiYgdGhpcy5fYm94M0NvbnRhaW4ubGVuZ3RoID09PSAwICYmIHRoaXMuX2JveDRDb250YWluLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPj0gMikge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5YmN77yaMSDlkI7vvJoyXHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWZ0Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbCB8fCB0aGlzLl9yaWdodENvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09PT0gbGVmdENvbnRhaW4gbGVuZ3RoID09PT09ICcgKyB0aGlzLl9sZWZ0Q29udGFpbi5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PSByaWdodENvbnRhaW4gbGVuZ3RoID09PT09ICcgKyB0aGlzLl9yaWdodENvbnRhaW4ubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWZ0Q29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9sZWZ0Q29udGFpblsxXS5uYW1lWzBdICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9sZWZ0Q29udGFpblsyXS5uYW1lWzBdICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9sZWZ0Q29udGFpblszXS5uYW1lWzBdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuIDmrKHlm57nrZTmraPnoa4gIOaMieeFp+Wkp+Wwj+WIhiA9PT0nKTtcclxuICAgICAgICAgICAgICAgIC8vIOesrOS4gOasoeetlOahiOato+ehrlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Fuc3dlci5wdXNoKHRoaXMuYW5zd2VyVHlwZS5TaXplKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEZpcnN0UmlnaHREYXRhKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fbGVmdENvbnRhaW5bMV0ubmFtZVsxXSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fbGVmdENvbnRhaW5bMl0ubmFtZVsxXSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fbGVmdENvbnRhaW5bM10ubmFtZVsxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0g56ys5LiA5qyh5Zue562U5q2j56GuIOaMieeFp+W9oueKtuWIhj09PScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Fuc3dlci5wdXNoKHRoaXMuYW5zd2VyVHlwZS5TaGFwKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEZpcnN0UmlnaHREYXRhKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMV0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMl0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bM10ubmFtZVswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g56ys5LiA5qyh562U5qGI6ZSZ6K+vXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucmVmcmVzaEZpcnN0V3JvbmdEYXRhKHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ib3gxQ29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbFNlY29uZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94MkNvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JveDNDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ib3g0Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbFNlY29uZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDlpKflsI8g5Zyo5YmNXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbnN3ZXJbdGhpcy5fYW5zd2VyLmxlbmd0aCAtIDFdID09PSB0aGlzLmFuc3dlclR5cGUuU2l6ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ib3gxQ29udGFpblswXS5uYW1lWzFdID09PSB0aGlzLl9ib3gxQ29udGFpblsxXS5uYW1lWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYm94M0NvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fYm94M0NvbnRhaW5bMV0ubmFtZVsxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS6jOasoeetlOahiOato+ehriDlvaLnirY9PT0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hbnN3ZXIucHVzaCh0aGlzLmFuc3dlclR5cGUuU2hhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYW5zd2VyID0gdGhpcy5fYW5zd2VyO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0g56ys5LqM5qyh562U5qGI6ZSZ6K+vIOW9oueKtj09PScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVmcmVzaFNlY29uZFdyb25nRGF0YShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Fuc3dlclt0aGlzLl9hbnN3ZXIubGVuZ3RoIC0gMV0gPT09IHRoaXMuYW5zd2VyVHlwZS5TaGFwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2JveDFDb250YWluWzBdLm5hbWVbMF0gPT09IHRoaXMuX2JveDFDb250YWluWzFdLm5hbWVbMF0gJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ib3gzQ29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9ib3gzQ29udGFpblsxXS5uYW1lWzBdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0g56ys5LqM5qyh562U5qGI5q2j56GuIOminOiJsuWSjOWkp+Wwjz09PScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5zd2VyLnB1c2godGhpcy5hbnN3ZXJUeXBlLlNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHRoaXMuX2Fuc3dlcjtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS6jOasoeetlOahiOmUmeivryDpopzoibLlkozlpKflsI89PT0nKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlZnJlc2hTZWNvbmRXcm9uZ0RhdGEoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hGaXJzdFJpZ2h0RGF0YShzdGF0ZSkge1xyXG5cclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgICAgIC8vIOesrOS6jOasoeWBmumimOaXtuWIneWni+WMluaMiemSruWFqOmDqOS9jee9rlxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPCB0aGlzLl9jb250YWluZXJUb3RhbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckNhY2hlU2Vjb25kW2ldLnBvcy54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckNhY2hlU2Vjb25kW2ldLnBvcy55XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXRlLmxlZnRDb250YWluW2ldLmluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbaV0uaW5kZXggPSBzdGF0ZS5sZWZ0Q29udGFpbltpXS5pbmRleDtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbaV0ucG9zLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbaV0ucG9zLnlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhdGUucmlnaHRDb250YWluW2kgLSB0aGlzLl9jb250YWluZXJUb3RhbF0uaW5kZXhcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5pbmRleCA9IHN0YXRlLnJpZ2h0Q29udGFpbltpIC0gdGhpcy5fY29udGFpbmVyVG90YWxdLmluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmQubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS5pbmRleCA9PT0gdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtqXS5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueCA9IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbal0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS55ID0gdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtqXS5wb3MueTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9yaWdodENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICAgICAgc3RhdGUubGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W54q25oCBXHJcbiAgICBnZXRTdGF0ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShvbGRTdGF0ZTogYW55LCBzdGF0ZTogYW55KSB7XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYW5zd2VyLCBzdGF0ZS5hbnN3ZXIpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuYW5zd2VyLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5pi+56S656ys5LqM56eN562U6aKY55WM6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJtaXQueCA9IDE2Njc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJtaXQueSA9IDA7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmFuc3dlci5sZW5ndGggPT09IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9mZkJ1dERyYWcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5zdWJtaXQsIHN0YXRlLnN1Ym1pdCkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5hbnN3ZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhbmRsZUd1aWRlKHRoaXMuaGFuZGxlR3VpZGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5hbnN3ZXIubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhbmRsZUd1aWRlKHRoaXMuaGFuZGxlR3VpZGUyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuY29sbGlkZXJCb3gsIHN0YXRlLmNvbGxpZGVyQm94KSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckJveFtpXS5pbmRleF0ueCA9IHN0YXRlLmNvbGxpZGVyQm94W2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnkgPSBzdGF0ZS5jb2xsaWRlckJveFtpXS5wb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVyQm94W2ldLmluZGV4XS5kYXRhLnBvc0luZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckJveFtpXS5pbmRleF0uc29ydGluZ09yZGVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5sZWZ0Q29udGFpbiwgc3RhdGUubGVmdENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmxlZnRDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5sZWZ0Q29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmxlZnRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUubGVmdENvbnRhaW5baV0uaW5kZXhdLnkgPSBzdGF0ZS5sZWZ0Q29udGFpbltpXS5wb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmxlZnRDb250YWluW2ldLmluZGV4XS5kYXRhLnBvc0luZGV4ID0gc3RhdGUubGVmdENvbnRhaW5baV0ucG9zSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5sZWZ0Q29udGFpbltpXS5pbmRleF0uc29ydGluZ09yZGVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5yaWdodENvbnRhaW4sIHN0YXRlLnJpZ2h0Q29udGFpbikpIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucmlnaHRDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5yaWdodENvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5yaWdodENvbnRhaW5baV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5yaWdodENvbnRhaW5baV0uaW5kZXhdLnkgPSBzdGF0ZS5yaWdodENvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5yaWdodENvbnRhaW5baV0uaW5kZXhdLmRhdGEucG9zSW5kZXggPSBzdGF0ZS5yaWdodENvbnRhaW5baV0ucG9zSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5yaWdodENvbnRhaW5baV0uaW5kZXhdLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYm94MUNvbnRhaW4sIHN0YXRlLmJveDFDb250YWluKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmJveDFDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gxQ29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmJveDFDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94MUNvbnRhaW5baV0uaW5kZXhdLnkgPSBzdGF0ZS5ib3gxQ29udGFpbltpXS5wb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDFDb250YWluW2ldLmluZGV4XS5kYXRhLnBvc0luZGV4ID0gc3RhdGUuYm94MUNvbnRhaW5baV0ucG9zSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gxQ29udGFpbltpXS5pbmRleF0uc29ydGluZ09yZGVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5ib3gyQ29udGFpbiwgc3RhdGUuYm94MkNvbnRhaW4pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuYm94MkNvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDJDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUuYm94MkNvbnRhaW5baV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gyQ29udGFpbltpXS5pbmRleF0ueSA9IHN0YXRlLmJveDJDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94MkNvbnRhaW5baV0uaW5kZXhdLmRhdGEucG9zSW5kZXggPSBzdGF0ZS5ib3gyQ29udGFpbltpXS5wb3NJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDJDb250YWluW2ldLmluZGV4XS5zb3J0aW5nT3JkZXIgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmJveDNDb250YWluLCBzdGF0ZS5ib3gzQ29udGFpbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5ib3gzQ29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94M0NvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5ib3gzQ29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDNDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUuYm94M0NvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gzQ29udGFpbltpXS5pbmRleF0uZGF0YS5wb3NJbmRleCA9IHN0YXRlLmJveDNDb250YWluW2ldLnBvc0luZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94M0NvbnRhaW5baV0uaW5kZXhdLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYm94NENvbnRhaW4sIHN0YXRlLmJveDRDb250YWluKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmJveDRDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3g0Q29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmJveDRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94NENvbnRhaW5baV0uaW5kZXhdLnkgPSBzdGF0ZS5ib3g0Q29udGFpbltpXS5wb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDRDb250YWluW2ldLmluZGV4XS5kYXRhLnBvc0luZGV4ID0gc3RhdGUuYm94NENvbnRhaW5baV0ucG9zSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3g0Q29udGFpbltpXS5pbmRleF0uc29ydGluZ09yZGVyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVRpdGxlKHN0YXRlLnRpdGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5mZWVkYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmQnV0RHJhZygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hcnJDb250YWluT2ZmRHJhZyh0aGlzLl9sZWZ0Q29udGFpbik7XHJcbiAgICAgICAgdGhpcy5hcnJDb250YWluT2ZmRHJhZyh0aGlzLl9yaWdodENvbnRhaW4pO1xyXG4gICAgICAgIHRoaXMuYXJyQ29udGFpbk9mZkRyYWcodGhpcy5fYm94MUNvbnRhaW4pO1xyXG4gICAgICAgIHRoaXMuYXJyQ29udGFpbk9mZkRyYWcodGhpcy5fYm94MkNvbnRhaW4pO1xyXG4gICAgICAgIHRoaXMuYXJyQ29udGFpbk9mZkRyYWcodGhpcy5fYm94M0NvbnRhaW4pO1xyXG4gICAgICAgIHRoaXMuYXJyQ29udGFpbk9mZkRyYWcodGhpcy5fYm94NENvbnRhaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGFyckNvbnRhaW5PZmZEcmFnKGFycikge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgYXJyW2ldLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKHRoaXMuZHJhZ1NjaGVkdWxlLCB0aGlzLl9zY2hlZHVsZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxufVxyXG4iXX0=