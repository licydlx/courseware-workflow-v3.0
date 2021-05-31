"use strict";
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