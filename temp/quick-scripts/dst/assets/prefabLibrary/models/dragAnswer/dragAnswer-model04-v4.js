
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
        var btn = fgui.GObject.cast(evt.currentTarget);
        var tarPos = new cc.Vec2(btn.x, btn.y);
        var isContainerLeft = false;
        var isContainerRight = false;
        var isContainerMid = false;
        isContainerLeft = this.judgeDragObjInBox(this._leftContain, btn, state.leftContain);
        isContainerRight = this.judgeDragObjInBox(this._rightContain, btn, state.rightContain);
        isContainerMid = this.judgeDragObjInBox(this._midContain, btn, state.midContain);
        if (isContainerLeft || isContainerRight || isContainerMid) {
            // 恢复原位
            var temp = {
                pos: {
                    x: btn.data.x,
                    y: btn.data.y
                },
                index: btn.data.index
            };
            state.colliderBox.push(temp);
            this.refreshBoxPos(state.leftContain, this._leftPositon);
            this.refreshBoxPos(state.rightContain, this._rightPositon);
            this.refreshBoxPos(state.midContain, this._midPositon);
            return;
        }
        // 左
        if (this._leftRect.contains(tarPos) && this._leftContain.length < this._containerTotal) {
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
        else if (this._midRect.contains(tarPos) && this._midContain.length < this._containerTotal) {
            this._midContain.push(btn);
            var temp = { pos: { x: this._midPositon[state.midContain.length].x,
                    y: this._midPositon[state.midContain.length].y },
                index: btn.data.index };
            state.midContain.push(temp);
        }
        else {
            var temp = { pos: { x: btn.data.x, y: btn.data.y }, index: btn.data.index };
            state.colliderBox.push(temp);
        }
        this.updateState(state);
    };
    dragAnswer_model03_v4.prototype.dragEndScendDeal = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var btn = fgui.GObject.cast(evt.currentTarget);
        var tarPos = new cc.Vec2(btn.x, btn.y);
        var isContainer1 = false;
        var isContainer2 = false;
        var isContainer3 = false;
        var isContainer4 = false;
        var isContainer5 = false;
        var isContainer6 = false;
        isContainer1 = this.judgeDragObjInBox(this._box1Contain, btn, state.box1Contain);
        isContainer2 = this.judgeDragObjInBox(this._box2Contain, btn, state.box2Contain);
        isContainer3 = this.judgeDragObjInBox(this._box3Contain, btn, state.box3Contain);
        isContainer4 = this.judgeDragObjInBox(this._box4Contain, btn, state.box4Contain);
        isContainer5 = this.judgeDragObjInBox(this._box5Contain, btn, state.box5Contain);
        isContainer6 = this.judgeDragObjInBox(this._box6Contain, btn, state.box6Contain);
        if (isContainer1 ||
            isContainer2 ||
            isContainer3 ||
            isContainer4 ||
            isContainer5 ||
            isContainer6) {
            // 恢复原位
            var temp = {
                pos: {
                    x: btn.data.x,
                    y: btn.data.y
                },
                index: btn.data.index
            };
            state.colliderBox.push(temp);
            // 重新拍下位置
            this.refreshBoxPos(state.box1Contain, this._typeBoxPos1);
            this.refreshBoxPos(state.box2Contain, this._typeBoxPos2);
            this.refreshBoxPos(state.box3Contain, this._typeBoxPos3);
            this.refreshBoxPos(state.box4Contain, this._typeBoxPos4);
            this.refreshBoxPos(state.box5Contain, this._typeBoxPos5);
            this.refreshBoxPos(state.box6Contain, this._typeBoxPos6);
            this.updateState(state);
            return;
        }
        // 左
        if (this._boxRect1.contains(tarPos) && this._box1Contain.length < this._containerTotalSecond) {
            console.log('==== box1 ====');
            this._box1Contain.push(btn);
            var temp = { pos: { x: this._typeBoxPos1[state.box1Contain.length].x,
                    y: this._typeBoxPos1[state.box1Contain.length].y },
                index: btn.data.index };
            state.box1Contain.push(temp);
        }
        else if (this._boxRect2.contains(tarPos) && this._box2Contain.length < this._containerTotalSecond) {
            console.log('==== box2 ====');
            this._box2Contain.push(btn);
            var temp = { pos: { x: this._typeBoxPos2[state.box2Contain.length].x,
                    y: this._typeBoxPos2[state.box2Contain.length].y },
                index: btn.data.index };
            state.box2Contain.push(temp);
        }
        else if (this._boxRect3.contains(tarPos) && this._box3Contain.length < this._containerTotalSecond) {
            console.log('==== box3 ====');
            this._box3Contain.push(btn);
            var temp = { pos: { x: this._typeBoxPos3[state.box3Contain.length].x,
                    y: this._typeBoxPos3[state.box3Contain.length].y },
                index: btn.data.index };
            state.box3Contain.push(temp);
        }
        else if (this._boxRect4.contains(tarPos) && this._box4Contain.length < this._containerTotalSecond) {
            console.log('==== box4 ====');
            this._box4Contain.push(btn);
            var temp = { pos: { x: this._typeBoxPos4[state.box4Contain.length].x,
                    y: this._typeBoxPos4[state.box4Contain.length].y },
                index: btn.data.index };
            state.box4Contain.push(temp);
        }
        else if (this._boxRect5.contains(tarPos) && this._box5Contain.length < this._containerTotalSecond) {
            console.log('==== box5 ====');
            this._box5Contain.push(btn);
            var temp = { pos: { x: this._typeBoxPos5[state.box5Contain.length].x,
                    y: this._typeBoxPos5[state.box5Contain.length].y },
                index: btn.data.index };
            state.box5Contain.push(temp);
        }
        else if (this._boxRect6.contains(tarPos) && this._box6Contain.length < this._containerTotalSecond) {
            console.log('==== box4 ====');
            this._box6Contain.push(btn);
            var temp = { pos: { x: this._typeBoxPos6[state.box6Contain.length].x,
                    y: this._typeBoxPos6[state.box6Contain.length].y },
                index: btn.data.index };
            state.box6Contain.push(temp);
        }
        else {
            var temp = { pos: { x: btn.data.x, y: btn.data.y }, index: btn.data.index };
            state.colliderBox.push(temp);
        }
        this.updateState(state);
    };
    dragAnswer_model03_v4.prototype.judgeDragObjInBox = function (_box, curBut, stateBox) {
        var isContainer = false;
        for (var i = 0; i < _box.length; i++) {
            if (_box[i] === curBut) {
                isContainer = true;
                _box.splice(i, 1);
                console.log('===== judgeDragObjInBox 5555 =====');
                for (var i_1 = 0; i_1 < stateBox.length; i_1++) {
                    if (stateBox[i_1].index === curBut.data.index) {
                        stateBox.splice(i_1, 1);
                        console.log('===== judgeDragObjInBox 6666 =====');
                        break;
                    }
                }
                break;
            }
        }
        return isContainer;
    };
    dragAnswer_model03_v4.prototype.refreshBoxPos = function (stateBox, posArr) {
        for (var i = 0; i < stateBox.length; i++) {
            stateBox[i].pos.x = posArr[i].x;
            stateBox[i].pos.y = posArr[i].y;
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
                // 临时 禁止操作期间 切页
                this.disableForbidHandle();
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
        if (!globalThis._.isEqual(oldState.midContain, state.midContain)) {
            for (var i = 0; i < state.midContain.length; i++) {
                this._colliderBox[state.midContain[i].index].x = state.midContain[i].pos.x;
                this._colliderBox[state.midContain[i].index].y = state.midContain[i].pos.y;
            }
        }
        if (!globalThis._.isEqual(oldState.box1Contain, state.box1Contain)) {
            for (var i = 0; i < state.box1Contain.length; i++) {
                this._colliderBox[state.box1Contain[i].index].x = state.box1Contain[i].pos.x;
                this._colliderBox[state.box1Contain[i].index].y = state.box1Contain[i].pos.y;
            }
        }
        if (!globalThis._.isEqual(oldState.box2Contain, state.box2Contain)) {
            for (var i = 0; i < state.box2Contain.length; i++) {
                this._colliderBox[state.box2Contain[i].index].x = state.box2Contain[i].pos.x;
                this._colliderBox[state.box2Contain[i].index].y = state.box2Contain[i].pos.y;
            }
        }
        if (!globalThis._.isEqual(oldState.box3Contain, state.box3Contain)) {
            for (var i = 0; i < state.box3Contain.length; i++) {
                this._colliderBox[state.box3Contain[i].index].x = state.box3Contain[i].pos.x;
                this._colliderBox[state.box3Contain[i].index].y = state.box3Contain[i].pos.y;
            }
        }
        if (!globalThis._.isEqual(oldState.box4Contain, state.box4Contain)) {
            for (var i = 0; i < state.box4Contain.length; i++) {
                this._colliderBox[state.box4Contain[i].index].x = state.box4Contain[i].pos.x;
                this._colliderBox[state.box4Contain[i].index].y = state.box4Contain[i].pos.y;
            }
        }
        if (!globalThis._.isEqual(oldState.box5Contain, state.box5Contain)) {
            for (var i = 0; i < state.box5Contain.length; i++) {
                this._colliderBox[state.box5Contain[i].index].x = state.box5Contain[i].pos.x;
                this._colliderBox[state.box5Contain[i].index].y = state.box5Contain[i].pos.y;
            }
        }
        if (!globalThis._.isEqual(oldState.box6Contain, state.box6Contain)) {
            for (var i = 0; i < state.box6Contain.length; i++) {
                this._colliderBox[state.box6Contain[i].index].x = state.box6Contain[i].pos.x;
                this._colliderBox[state.box6Contain[i].index].y = state.box6Contain[i].pos.y;
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
        }, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDQtdjQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQTgrQkM7UUF2K0JXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGtCQUFZLEdBQVEsQ0FBQyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDN0YsaUJBQVcsR0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUMvRixtQkFBYSxHQUFTLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBRW5HLGtCQUFZLEdBQVEsQ0FBQyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUN6RCxrQkFBWSxHQUFRLENBQUMsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDekQsa0JBQVksR0FBUSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ3pELGtCQUFZLEdBQVEsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUMzRCxrQkFBWSxHQUFRLENBQUMsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDM0Qsa0JBQVksR0FBUSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBRTNELDBCQUFvQixHQUFTO1lBQ2pDLEVBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztZQUNqQyxFQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7WUFDakMsRUFBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO1lBQ2pDLEVBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztZQUVqQyxFQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7WUFDakMsRUFBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO1lBQ2xDLEVBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztZQUNqQyxFQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7WUFFbEMsRUFBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO1lBQ2xDLEVBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztZQUNsQyxFQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUM7WUFDbEMsRUFBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO1NBQUMsQ0FBQztRQWFoQyxrQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixtQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixpQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUV0QixrQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixrQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixrQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixrQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixrQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixrQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUV2QixxQkFBZSxHQUFXLENBQUMsQ0FBQztRQUU1QiwyQkFBcUIsR0FBVyxDQUFDLENBQUM7UUFFbEMsb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFvQnBCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsZ0JBQVUsR0FBUSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBRTlCLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUMsQ0FBRSx5QkFBeUI7U0FFdEMsQ0FBQyxDQUFDO1FBS0ssYUFBTyxHQUFRLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQztRQUVuRCxZQUFNLEdBQUcsRUFBRSxDQUFDOztJQTg0QnhCLENBQUM7SUE1NEJHLHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFRRCxzQ0FBTSxHQUFOO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRWpFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN2RCxJQUFJLElBQUksR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLElBQUksR0FBRztvQkFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO29CQUMvQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNaLENBQUM7Z0JBRUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLElBQUksWUFBWSxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO2dCQUNsRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUUxQztTQUNKO1FBRUQsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzdELElBQUksS0FBSyxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUMvRCxJQUFJLEdBQUcsR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFM0QsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlELElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM5RCxJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDOUQsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlELElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM5RCxJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFB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cHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiBydXpodWFuXHJcbiAqIEBEYXRlOiAyMDIxLTUtMjcgMTk6NDc6MDBcclxuICogQExhc3RFZGl0b3JzOiBydXpodWFuXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtNS0yNyAxOTo0NzowMFxyXG4gKi9cclxuXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDNfdjQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyR3JvdXA6Zmd1aS5HR3JvdXA7XHJcbiAgICBwcml2YXRlIF9jb2xsaWRlcmVkR3JvdXA6Zmd1aS5HR3JvdXA7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQm94ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfbGVmdFBvc2l0b246IGFueSA9IFt7eDogMjMwLCB5OiA3NzB9LCB7eDogNDUwLCB5OiA3NzB9LCB7eDogMjMwLCB5OiA5MjB9LCB7eDogNDUwLCB5OiA5MjB9XTtcclxuICAgIHByaXZhdGUgX21pZFBvc2l0b246IGFueSA9ICBbe3g6IDg0MCwgeTogNzcwfSwge3g6IDEwNzAsIHk6IDc3MH0sIHt4OiA4NDAsIHk6IDkyMH0sIHt4OiAxMDcwLCB5OiA5MjB9XTtcclxuICAgIHByaXZhdGUgX3JpZ2h0UG9zaXRvbjogYW55ID0gIFt7eDogMTQ4MCwgeTogNzcwfSwge3g6IDE2OTAsIHk6IDc3MH0sIHt4OiAxNDgwLCB5OiA5MjB9LCB7eDogMTY5MCwgeTogOTIwfV07XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZUJveFBvczE6IGFueSA9IFt7eDogMTc1LCB5OiA3ODB9LCB7eDogMTc1LCB5OiA5MTN9XTtcclxuICAgIHByaXZhdGUgX3R5cGVCb3hQb3MyOiBhbnkgPSBbe3g6IDQ5NSwgeTogNzgwfSwge3g6IDQ5NSwgeTogOTEzfV07XHJcbiAgICBwcml2YXRlIF90eXBlQm94UG9zMzogYW55ID0gW3t4OiA4MTAsIHk6IDc4MH0sIHt4OiA4MTAsIHk6IDkxM31dO1xyXG4gICAgcHJpdmF0ZSBfdHlwZUJveFBvczQ6IGFueSA9IFt7eDogMTEyMCwgeTogNzgwfSwge3g6IDExMjAsIHk6IDkxM31dO1xyXG4gICAgcHJpdmF0ZSBfdHlwZUJveFBvczU6IGFueSA9IFt7eDogMTQ0NSwgeTogNzgwfSwge3g6IDE0NDUsIHk6IDkxM31dO1xyXG4gICAgcHJpdmF0ZSBfdHlwZUJveFBvczY6IGFueSA9IFt7eDogMTc2MCwgeTogNzgwfSwge3g6IDE3NjAsIHk6IDkxM31dO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQ2FjaGVTZWNvbmQ6ICBhbnkgPSBbXHJcbiAgICAgICAge3Bvczoge3g6IDIzMCwgeTogMjk1fSwgaW5kZXg6IDB9LFxyXG4gICAgICAgIHtwb3M6IHt4OiA0MzAsIHk6IDI5NX0sIGluZGV4OiAwfSwgXHJcbiAgICAgICAge3Bvczoge3g6IDIzMCwgeTogNDQwfSwgaW5kZXg6IDB9LFxyXG4gICAgICAgIHtwb3M6IHt4OiA0MzAsIHk6IDQ0MH0sIGluZGV4OiAwfSxcclxuXHJcbiAgICAgICAge3Bvczoge3g6IDg2MCwgeTogMjk1fSwgaW5kZXg6IDB9LFxyXG4gICAgICAgIHtwb3M6IHt4OiAxMDgwLCB5OiAyOTV9LCBpbmRleDogMH0sIFxyXG4gICAgICAgIHtwb3M6IHt4OiA4NjAsIHk6IDQ0MH0sIGluZGV4OiAwfSxcclxuICAgICAgICB7cG9zOiB7eDogMTA4MCwgeTogNDQwfSwgaW5kZXg6IDB9LFxyXG4gICAgXHJcbiAgICAgICAge3Bvczoge3g6IDE0NzUsIHk6IDI5NX0sIGluZGV4OiAwfSxcclxuICAgICAgICB7cG9zOiB7eDogMTY4MCwgeTogMjk1fSwgaW5kZXg6IDB9LCBcclxuICAgICAgICB7cG9zOiB7eDogMTQ3NSwgeTogNDQwfSwgaW5kZXg6IDB9LFxyXG4gICAgICAgIHtwb3M6IHt4OiAxNjgwLCB5OiA0NDB9LCBpbmRleDogMH1dO1xyXG5cclxuICAgIHByaXZhdGUgX2xlZnRSZWN0OiBjYy5SZWN0O1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRSZWN0OiBjYy5SZWN0O1xyXG4gICAgcHJpdmF0ZSBfbWlkUmVjdDogY2MuUmVjdDtcclxuXHJcbiAgICBwcml2YXRlIF9ib3hSZWN0MTogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX2JveFJlY3QyOiBjYy5SZWN0O1xyXG4gICAgcHJpdmF0ZSBfYm94UmVjdDM6IGNjLlJlY3Q7XHJcbiAgICBwcml2YXRlIF9ib3hSZWN0NDogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX2JveFJlY3Q1OiBjYy5SZWN0O1xyXG4gICAgcHJpdmF0ZSBfYm94UmVjdDY6IGNjLlJlY3Q7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGVmdENvbnRhaW46IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX21pZENvbnRhaW46IGFueSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2JveDFDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2JveDJDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2JveDNDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2JveDRDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2JveDVDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX2JveDZDb250YWluOiBhbnkgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jb250YWluZXJUb3RhbDogbnVtYmVyID0gNDtcclxuXHJcbiAgICBwcml2YXRlIF9jb250YWluZXJUb3RhbFNlY29uZDogbnVtYmVyID0gMjtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlckNhY2hlID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc3VibWl0OiBmZ3VpLkdCdXR0b247XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF9jMTogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIF90aXRsZTogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIHByaXZhdGUgX2RyYWdTb3VuZDogY2MuQXVkaW9DbGlwO1xyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlMjogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBhbnN3ZXJUeXBlOiBhbnkgPSBjYy5FbnVtKHtcclxuXHJcbiAgICAgICAgU2hhcDogMSwgLy8g5aSnLS0t5bCPICDnuqItLS3mqZlcclxuICAgICAgICBDb2xvcjogMiAgLy8g5q2j5pa55b2iLS0t6ZW/5pa55b2iICDkuInop5LlvaItLS3lubPooYzlm5vovrnlvaJcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDov5znqIvliqjmgIHnu4Tku7ZcclxuICAgIHByaXZhdGUgZmVlZGJhY2s6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9hbnN3ZXI6IGFueSA9IFtdOyAvLyAw77ya5rKh562U6aKY5pe2IDHvvJrnrZTlr7nnrKzkuIDnp43pgInmi6nml7YgMu+8miDnrZTlr7nnrKzkuoznp43pgInmi6nml7ZcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZSA9IHt9O1xyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVaSh0aGlzLl9zdGF0ZSwgdik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICB0aGlzLl92aWV3LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5fdmlldy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb2xsaWRlckdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IHRoaXMuX2NvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICBub2RlLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBub2RlLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogbm9kZS55XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oZmd1aS5FdmVudC5UT1VDSF9NT1ZFLCB0aGlzLl9vbkRyYWdNb3ZlLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyRGF0YSA9IHtwb3M6e3g6IG5vZGUuZGF0YS54LCB5OiBub2RlLmRhdGEueX0sIGluZGV4OiBub2RlLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJDYWNoZS5wdXNoKGNvbGxpZGVyRGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGVmdDpmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJsZWZ0QmdcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgcmlnaHQ6Zmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkKFwicmlnaHRCZ1wiKS5hc0ltYWdlO1xyXG4gICAgICAgIGxldCBtaWQ6Zmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkKFwibWlkQmdcIikuYXNJbWFnZTtcclxuXHJcbiAgICAgICAgbGV0IGJveDE6Zmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidHlwZWJnMVwiKS5hc0ltYWdlO1xyXG4gICAgICAgIGxldCBib3gyOmZndWkuR0ltYWdlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInR5cGViZzJcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgYm94MzpmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0eXBlYmczXCIpLmFzSW1hZ2U7XHJcbiAgICAgICAgbGV0IGJveDQ6Zmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidHlwZWJnNFwiKS5hc0ltYWdlO1xyXG4gICAgICAgIGxldCBib3g1OmZndWkuR0ltYWdlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInR5cGViZzVcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgYm94NjpmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0eXBlYmc2XCIpLmFzSW1hZ2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2xlZnRSZWN0ID0gbmV3IGNjLlJlY3QobGVmdC54LCBsZWZ0LnksIGxlZnQud2lkdGgsIGxlZnQuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9yaWdodFJlY3QgPSBuZXcgY2MuUmVjdChyaWdodC54LCByaWdodC55LCByaWdodC53aWR0aCwgcmlnaHQuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9taWRSZWN0ID0gbmV3IGNjLlJlY3QobWlkLngsIG1pZC55LCBtaWQud2lkdGgsIG1pZC5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLl9ib3hSZWN0MSA9IG5ldyBjYy5SZWN0KGJveDEueCwgYm94MS55LCBib3gxLndpZHRoLCBib3gxLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fYm94UmVjdDIgPSBuZXcgY2MuUmVjdChib3gyLngsIGJveDIueSwgYm94Mi53aWR0aCwgYm94Mi5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX2JveFJlY3QzID0gbmV3IGNjLlJlY3QoYm94My54LCBib3gzLnksIGJveDMud2lkdGgsIGJveDMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9ib3hSZWN0NCA9IG5ldyBjYy5SZWN0KGJveDQueCwgYm94NC55LCBib3g0LndpZHRoLCBib3g0LmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fYm94UmVjdDUgPSBuZXcgY2MuUmVjdChib3g1LngsIGJveDUueSwgYm94NS53aWR0aCwgYm94NS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX2JveFJlY3Q2ID0gbmV3IGNjLlJlY3QoYm94Ni54LCBib3g2LnksIGJveDYud2lkdGgsIGJveDYuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzIgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMlwiKTtcclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jMikge1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jMS5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzEuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgICAvLyDliJ3lp4vljJZzdGF0ZVxyXG4gICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuXHJcbiAgICAgICAgICAgIGFuc3dlcjogdGhpcy5fYW5zd2VyLFxyXG5cclxuICAgICAgICAgICAgY29sbGlkZXJCb3g6IHRoaXMuX2NvbGxpZGVyQ2FjaGUsXHJcbiAgXHJcbiAgICAgICAgICAgIGxlZnRDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0Q29udGFpbjogW10sXHJcblxyXG4gICAgICAgICAgICBtaWRDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDFDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDJDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDNDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDRDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDVDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDZDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkuLTml7Yg56aB5q2i5pON5L2c5pyf6Ze0IOWIh+mhtVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/kOihjOaXtiDnpoHmraLmk43kvZxcclxuICAgIGZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmICghaGFuZGxlTWFzaykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlTWFzayA9IG5ldyBjYy5Ob2RlKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnBhcmVudCA9IHRoaXMuX3dvcmxkUm9vdDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay53aWR0aCA9IDE5MjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suaGVpZ2h0ID0gMTA4MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay54ID0gOTYwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnkgPSA1NDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa2iOmZpOemgeatolxyXG4gICAgZGlzYWJsZUZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmIChoYW5kbGVNYXNrKSBoYW5kbGVNYXNrLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLTml7ZcclxuICAgIC8vIOaLluaLveWumuaXtuWZqFxyXG4gICAgZHJhZ1NjaGVkdWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnZ2luZykge1xyXG4gICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5kcmFnID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLnVpUGF0aCkge1xyXG4gICAgICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSB9ID0gbW9kZWwuY29uZmlnO1xyXG4gICAgICAgICAgICBpZiAoYW5zd2VyKSB0aGlzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgICAgICBpZiAoYWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1t2XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0ucG9zKSB0aGlzW3ZdLnBvcyA9IGFlW3ZdLnBvcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQYXRoOiBhbnkgPSBgJHtwYXRoQ29uZmlnLnJlbW90ZVVybH0ke3BhdGhDb25maWcuY29tcG9uZW50QnVuZGxlUGF0aH0ke2NvbXBvbmVudHNba2V5XS5idW5kbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50QnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbXBvbmVudFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb21wb25lbnRCdW5kbGUsIGNvbXBvbmVudHNba2V5XS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbXBvbmVudFByZWZhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRyYWdCdXQ6Zmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZCgnZHJhZ1NvdW5kJykuYXNCdXR0b247XHJcbiAgICAgICAgZHJhZ0J1dC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwoZHJhZ0J1dFtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1NvdW5kID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuXHJcbiAgICAgICAgbGV0IGNsaWNrQnV0OmZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoJ2NsaWNrU291bmQnKS5hc0J1dHRvbjtcclxuICAgICAgICBjbGlja0J1dC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTChjbGlja0J1dFtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgdGhpcy5fY2xpY2tTb3VuZCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKGhhbmRsZUd1aWRlKSB7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKGhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKGhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICBoYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSBoYW5kbGVHdWlkZS5jb21wb25lbnQud2lkdGgpIC8gMiArIGhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICBoYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyICsgaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIGhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSBoYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZChoYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JpZ2luVmFsdWUodjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdi54LFxyXG4gICAgICAgICAgICB5OiB2LnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnU3RhcnQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PSBfb25EcmFnU3RhcnQgMTExID09PT09Jyk7XHJcbiAgICAgICAgZXZ0LmNhcHR1cmVUb3VjaCgpO1xyXG5cclxuICAgICAgICB2YXIgYnRuOiBmZ3VpLkdPYmplY3QgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgaWYgKGJ0bi5kYXRhLmluZGV4ID09PSBzdGF0ZS5jb2xsaWRlckJveFtpXS5pbmRleCkge1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3guc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLl9jbGlja1NvdW5kLCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ01vdmUoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT0gX29uRHJhZ01vdmUgMjIyID09PT09Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0VuZChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuX2RyYWdTb3VuZCwgZmFsc2UsIDEpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgLy8g56ys5LiA5qyh562U6aKY5pe2XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VuZEZpcnN0RGVhbChldnQpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOesrOS6jOasoeetlOmimOaXtlxyXG4gICAgICAgICAgICB0aGlzLmRyYWdFbmRTY2VuZERlYWwoZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnRW5kRmlyc3REZWFsKGV2dCkge1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICB2YXIgYnRuOiBmZ3VpLkdPYmplY3QgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IHRhclBvcyA9IG5ldyBjYy5WZWMyKGJ0bi54LCBidG4ueSk7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lclJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyTWlkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlzQ29udGFpbmVyTGVmdCA9IHRoaXMuanVkZ2VEcmFnT2JqSW5Cb3godGhpcy5fbGVmdENvbnRhaW4sIGJ0biwgc3RhdGUubGVmdENvbnRhaW4pO1xyXG4gICAgICAgIGlzQ29udGFpbmVyUmlnaHQgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX3JpZ2h0Q29udGFpbiwgYnRuLCBzdGF0ZS5yaWdodENvbnRhaW4pO1xyXG4gICAgICAgIGlzQ29udGFpbmVyTWlkID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9taWRDb250YWluLCBidG4sIHN0YXRlLm1pZENvbnRhaW4pO1xyXG5cclxuICAgICAgICBpZiAoaXNDb250YWluZXJMZWZ0IHx8IGlzQ29udGFpbmVyUmlnaHQgfHwgaXNDb250YWluZXJNaWQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBidG4uZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogYnRuLmRhdGEueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUubGVmdENvbnRhaW4sIHRoaXMuX2xlZnRQb3NpdG9uKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLnJpZ2h0Q29udGFpbiwgdGhpcy5fcmlnaHRQb3NpdG9uKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLm1pZENvbnRhaW4sIHRoaXMuX21pZFBvc2l0b24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5bemXHJcbiAgICAgICAgaWYgKHRoaXMuX2xlZnRSZWN0LmNvbnRhaW5zKHRhclBvcykgJiYgdGhpcy5fbGVmdENvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xlZnRDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge3Bvczoge3g6IHRoaXMuX2xlZnRQb3NpdG9uW3N0YXRlLmxlZnRDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fbGVmdFBvc2l0b25bc3RhdGUubGVmdENvbnRhaW4ubGVuZ3RoXS55fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleH07XHJcbiAgICAgICAgICAgIHN0YXRlLmxlZnRDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3JpZ2h0UmVjdC5jb250YWlucyh0YXJQb3MpICYmIHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fcmlnaHRDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge3Bvczoge3g6IHRoaXMuX3JpZ2h0UG9zaXRvbltzdGF0ZS5yaWdodENvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9yaWdodFBvc2l0b25bc3RhdGUucmlnaHRDb250YWluLmxlbmd0aF0ueX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuX21pZFJlY3QuY29udGFpbnModGFyUG9zKSAmJiB0aGlzLl9taWRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9taWRDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge3Bvczoge3g6IHRoaXMuX21pZFBvc2l0b25bc3RhdGUubWlkQ29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX21pZFBvc2l0b25bc3RhdGUubWlkQ29udGFpbi5sZW5ndGhdLnl9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4fTtcclxuICAgICAgICAgICAgc3RhdGUubWlkQ29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge3Bvczoge3g6IGJ0bi5kYXRhLngsIHk6IGJ0bi5kYXRhLnl9LCBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhZ0VuZFNjZW5kRGVhbChldnQpIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgdmFyIGJ0bjogZmd1aS5HT2JqZWN0ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCB0YXJQb3MgPSBuZXcgY2MuVmVjMihidG4ueCwgYnRuLnkpO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lcjEgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXIyID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyMyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lcjQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXI1ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyNiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpc0NvbnRhaW5lcjEgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2JveDFDb250YWluLCBidG4sIHN0YXRlLmJveDFDb250YWluKTtcclxuICAgICAgICBpc0NvbnRhaW5lcjIgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2JveDJDb250YWluLCBidG4sIHN0YXRlLmJveDJDb250YWluKTtcclxuICAgICAgICBpc0NvbnRhaW5lcjMgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2JveDNDb250YWluLCBidG4sIHN0YXRlLmJveDNDb250YWluKTtcclxuICAgICAgICBpc0NvbnRhaW5lcjQgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2JveDRDb250YWluLCBidG4sIHN0YXRlLmJveDRDb250YWluKTtcclxuICAgICAgICBpc0NvbnRhaW5lcjUgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2JveDVDb250YWluLCBidG4sIHN0YXRlLmJveDVDb250YWluKTtcclxuICAgICAgICBpc0NvbnRhaW5lcjYgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2JveDZDb250YWluLCBidG4sIHN0YXRlLmJveDZDb250YWluKTtcclxuXHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyMSB8fFxyXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjIgfHxcclxuICAgICAgICAgICAgaXNDb250YWluZXIzIHx8XHJcbiAgICAgICAgICAgIGlzQ29udGFpbmVyNCB8fFxyXG4gICAgICAgICAgICBpc0NvbnRhaW5lcjUgfHxcclxuICAgICAgICAgICAgaXNDb250YWluZXI2KSB7XHJcblxyXG4gICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogYnRuLmRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJ0bi5kYXRhLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8g6YeN5paw5ouN5LiL5L2N572uXHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3gxQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczEpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUuYm94MkNvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3MyKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDNDb250YWluLCB0aGlzLl90eXBlQm94UG9zMyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3g0Q29udGFpbiwgdGhpcy5fdHlwZUJveFBvczQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUuYm94NUNvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3M1KTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDZDb250YWluLCB0aGlzLl90eXBlQm94UG9zNik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5bemXHJcbiAgICAgICAgaWYgKHRoaXMuX2JveFJlY3QxLmNvbnRhaW5zKHRhclBvcykgJiYgdGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IGJveDEgPT09PScpO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3gxQ29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiB0aGlzLl90eXBlQm94UG9zMVtzdGF0ZS5ib3gxQ29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3R5cGVCb3hQb3MxW3N0YXRlLmJveDFDb250YWluLmxlbmd0aF0ueX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHN0YXRlLmJveDFDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm94UmVjdDIuY29udGFpbnModGFyUG9zKSAmJiB0aGlzLl9ib3gyQ29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbFNlY29uZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSBib3gyID09PT0nKTtcclxuICAgICAgICAgICAgdGhpcy5fYm94MkNvbnRhaW4ucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRlbXAgPSB7cG9zOiB7eDogdGhpcy5fdHlwZUJveFBvczJbc3RhdGUuYm94MkNvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90eXBlQm94UG9zMltzdGF0ZS5ib3gyQ29udGFpbi5sZW5ndGhdLnl9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4fTtcclxuICAgICAgICAgICAgc3RhdGUuYm94MkNvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9ib3hSZWN0My5jb250YWlucyh0YXJQb3MpICYmIHRoaXMuX2JveDNDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IGJveDMgPT09PScpO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3gzQ29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiB0aGlzLl90eXBlQm94UG9zM1tzdGF0ZS5ib3gzQ29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3R5cGVCb3hQb3MzW3N0YXRlLmJveDNDb250YWluLmxlbmd0aF0ueX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5ib3gzQ29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5fYm94UmVjdDQuY29udGFpbnModGFyUG9zKSAmJiB0aGlzLl9ib3g0Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbFNlY29uZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSBib3g0ID09PT0nKTtcclxuICAgICAgICAgICAgdGhpcy5fYm94NENvbnRhaW4ucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRlbXAgPSB7cG9zOiB7eDogdGhpcy5fdHlwZUJveFBvczRbc3RhdGUuYm94NENvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl90eXBlQm94UG9zNFtzdGF0ZS5ib3g0Q29udGFpbi5sZW5ndGhdLnl9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4fTtcclxuICAgICAgICAgICAgc3RhdGUuYm94NENvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuX2JveFJlY3Q1LmNvbnRhaW5zKHRhclBvcykgJiYgdGhpcy5fYm94NUNvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT0gYm94NSA9PT09Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2JveDVDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge3Bvczoge3g6IHRoaXMuX3R5cGVCb3hQb3M1W3N0YXRlLmJveDVDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHlwZUJveFBvczVbc3RhdGUuYm94NUNvbnRhaW4ubGVuZ3RoXS55fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleH07XHJcbiAgICAgICAgICAgIHN0YXRlLmJveDVDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9ib3hSZWN0Ni5jb250YWlucyh0YXJQb3MpICYmIHRoaXMuX2JveDZDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IGJveDQgPT09PScpO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3g2Q29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiB0aGlzLl90eXBlQm94UG9zNltzdGF0ZS5ib3g2Q29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3R5cGVCb3hQb3M2W3N0YXRlLmJveDZDb250YWluLmxlbmd0aF0ueX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5ib3g2Q29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiBidG4uZGF0YS54LCB5OiBidG4uZGF0YS55fSwgaW5kZXg6IGJ0bi5kYXRhLmluZGV4fTtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGp1ZGdlRHJhZ09iakluQm94KF9ib3gsIGN1ckJ1dCwgc3RhdGVCb3gpIHtcclxuXHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IF9ib3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggX2JveFtpXSA9PT0gY3VyQnV0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaXNDb250YWluZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgX2JveC5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09IGp1ZGdlRHJhZ09iakluQm94IDU1NTUgPT09PT0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUJveFtpXS5pbmRleCA9PT0gY3VyQnV0LmRhdGEuaW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlQm94LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT09IGp1ZGdlRHJhZ09iakluQm94IDY2NjYgPT09PT0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcmV0dXJuICBpc0NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hCb3hQb3Moc3RhdGVCb3gsIHBvc0Fycikge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZUJveFtpXS5wb3MueCA9IHBvc0FycltpXS54O1xyXG4gICAgICAgICAgICBzdGF0ZUJveFtpXS5wb3MueSA9IHBvc0FycltpXS55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hGaXJzdFdyb25nRGF0YShzdGF0ZSkge1xyXG5cclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLnl9LFxyXG5cclxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLmluZGV4XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21pZENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICAgICAgc3RhdGUubGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5taWRDb250YWluID0gW107XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVmcmVzaFNlY29uZFdyb25nRGF0YShzdGF0ZSkge1xyXG5cclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLnl9LFxyXG5cclxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLmluZGV4XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9ib3gxQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JveDJDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fYm94M0NvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9ib3g0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JveDVDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fYm94NkNvbnRhaW4gPSBbXTtcclxuXHJcbiAgICAgICAgc3RhdGUuYm94MUNvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5ib3gyQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHN0YXRlLmJveDNDb250YWluID0gW107XHJcbiAgICAgICAgc3RhdGUuYm94NENvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5ib3g1Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHN0YXRlLmJveDZDb250YWluID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tUaXRsZShldnQ6IGFueSkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5fY2xpY2tTb3VuZCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUudGl0bGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzEuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuXHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbzogY2MuQXVkaW9DbGlwID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jbGlja1N1Ym1pdChldnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID49IDIpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmlnaHRDb250YWluLmxlbmd0aCA9PT0gMCB8fCBcclxuICAgICAgICAgICAgICAgIHRoaXMuX21pZENvbnRhaW4ubGVuZ3RoID09PSAwIHx8IFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCAhPT0gdGhpcy5fcmlnaHRDb250YWluLmxlbmd0aCl8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCAhPT0gdGhpcy5fbWlkQ29udGFpbi5sZW5ndGgpKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoID09PSAwIHx8IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94MkNvbnRhaW4ubGVuZ3RoID09PSAwIHx8IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94M0NvbnRhaW4ubGVuZ3RoID09PSAwIHx8IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94NENvbnRhaW4ubGVuZ3RoID09PSAwIHx8IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94NUNvbnRhaW4ubGVuZ3RoID09PSAwIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ib3g2Q29udGFpbi5sZW5ndGggPT09IDAgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9ib3gxQ29udGFpbi5sZW5ndGggIT09IHRoaXMuX2JveDJDb250YWluLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9ib3gxQ29udGFpbi5sZW5ndGggIT09IHRoaXMuX2JveDNDb250YWluLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9ib3gxQ29udGFpbi5sZW5ndGggIT09IHRoaXMuX2JveDRDb250YWluLmxlbmd0aCkgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLl9ib3gxQ29udGFpbi5sZW5ndGggIT09IHRoaXMuX2JveDRDb250YWluLmxlbmd0aCkpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5YmN77yaMSDlkI7vvJoyXHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICgodGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVswXSA9PT0gIHRoaXMuX2xlZnRDb250YWluWzFdLm5hbWVbMF0mJiBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xlZnRDb250YWluWzBdLm5hbWVbMF0gPT09ICB0aGlzLl9sZWZ0Q29udGFpblsyXS5uYW1lWzBdJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xlZnRDb250YWluWzBdLm5hbWVbMF0gPT09ICB0aGlzLl9sZWZ0Q29udGFpblszXS5uYW1lWzBdKSYmXHJcblxyXG4gICAgICAgICAgICAgICAgKHRoaXMuX3JpZ2h0Q29udGFpblswXS5uYW1lWzBdID09PSAgdGhpcy5fcmlnaHRDb250YWluWzFdLm5hbWVbMF0mJiBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpblswXS5uYW1lWzBdID09PSAgdGhpcy5fcmlnaHRDb250YWluWzJdLm5hbWVbMF0mJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmlnaHRDb250YWluWzBdLm5hbWVbMF0gPT09ICB0aGlzLl9yaWdodENvbnRhaW5bM10ubmFtZVswXSkgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLl9taWRDb250YWluWzBdLm5hbWVbMF0gPT09ICB0aGlzLl9taWRDb250YWluWzFdLm5hbWVbMF0mJiBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9taWRDb250YWluWzBdLm5hbWVbMF0gPT09ICB0aGlzLl9taWRDb250YWluWzJdLm5hbWVbMF0mJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21pZENvbnRhaW5bMF0ubmFtZVswXSA9PT0gIHRoaXMuX21pZENvbnRhaW5bM10ubmFtZVswXSkpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuIDmrKHlm57nrZTmraPnoa4gIOaMieeFp+W9oueKtuWIhiA9PT0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IF9sZWZ0Q29udGFpbiA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IF9yaWdodENvbnRhaW4gPT09JyArIHRoaXMuX3JpZ2h0Q29udGFpblswXS5uYW1lWzBdKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0gX21pZENvbnRhaW4gPT09JyArIHRoaXMuX21pZENvbnRhaW5bMF0ubmFtZVswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g56ys5LiA5qyh562U5qGI5q2j56GuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5zd2VyLnB1c2godGhpcy5hbnN3ZXJUeXBlLlNoYXApOyBcclxuICAgICAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEZpcnN0UmlnaHREYXRhKHN0YXRlKTtcclxuICAgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMV0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bMl0ubmFtZVswXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09IOesrOS4gOasoeWbnuetlOmUmeivryA9PT0nICsgdGhpcy5fbGVmdENvbnRhaW5bM10ubmFtZVswXSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIOesrOS4gOasoeetlOahiOmUmeivr1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlZnJlc2hGaXJzdFdyb25nRGF0YShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDpopzoibLliIZcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2JveDFDb250YWluWzBdLm5hbWVbMV0gPT09IHRoaXMuX2JveDFDb250YWluWzFdLm5hbWVbMV0gJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JveDNDb250YWluWzBdLm5hbWVbMV0gPT09IHRoaXMuX2JveDNDb250YWluWzFdLm5hbWVbMV0gJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JveDVDb250YWluWzBdLm5hbWVbMV0gPT09IHRoaXMuX2JveDVDb250YWluWzFdLm5hbWVbMV0pIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuozmrKHnrZTmoYjmraPnoa4g6aKc6ImyPT09Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbnN3ZXIucHVzaCh0aGlzLmFuc3dlclR5cGUuQ29sb3IpOyBcclxuICAgICAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHRoaXMuX2Fuc3dlcjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuozmrKHnrZTmoYjplJnor68g6aKc6ImyPT09Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT0gX2JveDFDb250YWluIDA9PScgKyB0aGlzLl9ib3gxQ29udGFpblswXS5uYW1lWzFdICsgJz09IF9ib3gxQ29udGFpbiAxPT0nICsgdGhpcy5fYm94MUNvbnRhaW5bMV0ubmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT0gX2JveDNDb250YWluIDA9PScgKyB0aGlzLl9ib3gzQ29udGFpblswXS5uYW1lWzFdICsgJz09IF9ib3gzQ29udGFpbiAxPT0nICsgdGhpcy5fYm94M0NvbnRhaW5bMV0ubmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT0gX2JveDVDb250YWluIDA9PScgKyB0aGlzLl9ib3g1Q29udGFpblswXS5uYW1lWzFdICsgJz09IF9ib3g1Q29udGFpbiAxPT0nICsgdGhpcy5fYm94NUNvbnRhaW5bMV0ubmFtZVsxXSk7XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZWZyZXNoU2Vjb25kV3JvbmdEYXRhKHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hGaXJzdFJpZ2h0RGF0YShzdGF0ZSkge1xyXG5cclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgICAgIC8vIOesrOS6jOasoeWBmumimOaXtuWIneWni+WMluaMiemSruWFqOmDqOS9jee9rlxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPCB0aGlzLl9jb250YWluZXJUb3RhbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbaV0ucG9zLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5wb3MueX0sXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhdGUubGVmdENvbnRhaW5baV0uaW5kZXhcclxuICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5pbmRleCA9IHN0YXRlLmxlZnRDb250YWluW2ldLmluZGV4O1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgdGhpcy5fY29udGFpbmVyVG90YWwqMikge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbaV0ucG9zLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5wb3MueVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhdGUubWlkQ29udGFpbltpLXRoaXMuX2NvbnRhaW5lclRvdGFsXS5pbmRleFxyXG4gICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckNhY2hlU2Vjb25kW2ldLmluZGV4ID0gc3RhdGUubWlkQ29udGFpbltpLXRoaXMuX2NvbnRhaW5lclRvdGFsXS5pbmRleDtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtpXS5wb3MueCxcclxuICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckNhY2hlU2Vjb25kW2ldLnBvcy55XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGF0ZS5yaWdodENvbnRhaW5baS10aGlzLl9jb250YWluZXJUb3RhbCoyXS5pbmRleFxyXG4gICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckNhY2hlU2Vjb25kW2ldLmluZGV4ID0gc3RhdGUucmlnaHRDb250YWluW2ktdGhpcy5fY29udGFpbmVyVG90YWwqMl0uaW5kZXg7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmQubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS5pbmRleCA9PT0gdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtqXS5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueCA9IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbal0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS55ID0gdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtqXS5wb3MueTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2xlZnRDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fcmlnaHRDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fbWlkQ29udGFpbiA9IFtdO1xyXG5cclxuICAgICAgICBzdGF0ZS5sZWZ0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHN0YXRlLnJpZ2h0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHN0YXRlLm1pZENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W54q25oCBXHJcbiAgICBnZXRTdGF0ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShvbGRTdGF0ZTogYW55LCBzdGF0ZTogYW55KSB7XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYW5zd2VyLCBzdGF0ZS5hbnN3ZXIpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuYW5zd2VyLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5pi+56S656ys5LqM56eN562U6aKY55WM6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIGlmIChzdGF0ZS5hbnN3ZXIubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5zdWJtaXQsIHN0YXRlLnN1Ym1pdCkpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5hbnN3ZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhbmRsZUd1aWRlKHRoaXMuaGFuZGxlR3VpZGUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYgKHN0YXRlLmFuc3dlci5sZW5ndGggPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25IYW5kbGVHdWlkZSh0aGlzLmhhbmRsZUd1aWRlMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmNvbGxpZGVyQm94LCBzdGF0ZS5jb2xsaWRlckJveCkpIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnggPSAgc3RhdGUuY29sbGlkZXJCb3hbaV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnkgPSAgc3RhdGUuY29sbGlkZXJCb3hbaV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5sZWZ0Q29udGFpbiwgc3RhdGUubGVmdENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmxlZnRDb250YWluLmxlbmd0aDsgaSsrKSB7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5sZWZ0Q29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmxlZnRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmxlZnRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUubGVmdENvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUucmlnaHRDb250YWluLCBzdGF0ZS5yaWdodENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUucmlnaHRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUucmlnaHRDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLm1pZENvbnRhaW4sIHN0YXRlLm1pZENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLm1pZENvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLm1pZENvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5taWRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUubWlkQ29udGFpbltpXS5pbmRleF0ueSA9IHN0YXRlLm1pZENvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYm94MUNvbnRhaW4sIHN0YXRlLmJveDFDb250YWluKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmJveDFDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gxQ29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmJveDFDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94MUNvbnRhaW5baV0uaW5kZXhdLnkgPSBzdGF0ZS5ib3gxQ29udGFpbltpXS5wb3MueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5ib3gyQ29udGFpbiwgc3RhdGUuYm94MkNvbnRhaW4pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuYm94MkNvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDJDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUuYm94MkNvbnRhaW5baV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gyQ29udGFpbltpXS5pbmRleF0ueSA9IHN0YXRlLmJveDJDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmJveDNDb250YWluLCBzdGF0ZS5ib3gzQ29udGFpbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5ib3gzQ29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94M0NvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5ib3gzQ29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDNDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUuYm94M0NvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYm94NENvbnRhaW4sIHN0YXRlLmJveDRDb250YWluKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmJveDRDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3g0Q29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmJveDRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94NENvbnRhaW5baV0uaW5kZXhdLnkgPSBzdGF0ZS5ib3g0Q29udGFpbltpXS5wb3MueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5ib3g1Q29udGFpbiwgc3RhdGUuYm94NUNvbnRhaW4pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuYm94NUNvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDVDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUuYm94NUNvbnRhaW5baV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3g1Q29udGFpbltpXS5pbmRleF0ueSA9IHN0YXRlLmJveDVDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmJveDZDb250YWluLCBzdGF0ZS5ib3g2Q29udGFpbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5ib3g2Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94NkNvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5ib3g2Q29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDZDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUuYm94NkNvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUudGl0bGUsIHN0YXRlLnRpdGxlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgZmVlZGJhY2s6IGFueSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmVlZGJhY2spO1xyXG4gICAgICAgIGZlZWRiYWNrLnggPSA5NjA7XHJcbiAgICAgICAgZmVlZGJhY2sueSA9IDU0MDtcclxuICAgICAgICBsZXQgZmVlZGJhY2tKczogYW55ID0gZmVlZGJhY2suZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZmVlZGJhY2tKcy5pbml0KGJvb2wpO1xyXG4gICAgICAgIGZlZWRiYWNrLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZmVlZGJhY2suZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgICAgLy8gdGhpcy5zY2hlZHVsZSh0aGlzLmRyYWdTY2hlZHVsZSwgdGhpcy5fc2NoZWR1bGVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19