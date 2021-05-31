
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model03-v2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1796boudv9ORZBvtCDbiKQb', 'dragAnswer-model03-v2');
// prefabLibrary/models/dragAnswer/dragAnswer-model03-v2.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ruzhuan
 * @Date: 2021-5-26 16:00:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-5-27 12:00:00
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
var dragAnswer_model03_v2 = /** @class */ (function (_super) {
    __extends(dragAnswer_model03_v2, _super);
    function dragAnswer_model03_v2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colliderBox = [];
        _this._leftPositon = [{ x: 200, y: 890 }, { x: 355, y: 890 }, { x: 515, y: 890 }, { x: 680, y: 890 }];
        _this._rightPositon = [{ x: 1255, y: 890 }, { x: 1410, y: 890 }, { x: 1560, y: 890 }, { x: 1715, y: 890 }];
        _this._typeBoxPos1 = [{ x: 170, y: 877 }, { x: 322, y: 877 }];
        _this._typeBoxPos2 = [{ x: 634, y: 877 }, { x: 800, y: 877 }];
        _this._typeBoxPos3 = [{ x: 1136, y: 877 }, { x: 1297, y: 877 }];
        _this._typeBoxPos4 = [{ x: 1584, y: 877 }, { x: 1751, y: 877 }];
        _this._colliderCacheSecond = [
            { pos: { x: 245, y: 470 }, index: 5 },
            { pos: { x: 400, y: 470 }, index: 3 },
            { pos: { x: 560, y: 470 }, index: 0 },
            { pos: { x: 710, y: 470 }, index: 7 },
            { pos: { x: 1200, y: 470 }, index: 4 },
            { pos: { x: 1360, y: 470 }, index: 6 },
            { pos: { x: 1510, y: 470 }, index: 1 },
            { pos: { x: 1660, y: 470 }, index: 2 }
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
            Recyclable: '1'
        });
        _this._answer = []; // 0：没答题时 1：答对第一种选择时 2： 答对第二种选择时
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model03_v2.prototype, "state", {
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
    dragAnswer_model03_v2.prototype.onLoad = function () {
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
    dragAnswer_model03_v2.prototype.forbidHandle = function () {
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
    dragAnswer_model03_v2.prototype.onHandleGuide = function (handleGuide) {
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
    dragAnswer_model03_v2.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model03_v2.prototype.dragSchedule = function () {
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
    dragAnswer_model03_v2.prototype.init = function (data) {
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
    dragAnswer_model03_v2.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    dragAnswer_model03_v2.prototype._onDragStart = function (evt) {
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
    dragAnswer_model03_v2.prototype._onDragMove = function (evt) {
    };
    dragAnswer_model03_v2.prototype._onDragEnd = function (evt) {
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
    dragAnswer_model03_v2.prototype.dragEndFirstDeal = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var btn = fgui.GObject.cast(evt.currentTarget);
        var tarPos = new cc.Vec2(btn.x, btn.y);
        var isContainerLeft = false;
        var isContainerRight = false;
        isContainerLeft = this.judgeDragObjInBox(this._leftContain, btn, state.leftContain);
        isContainerRight = this.judgeDragObjInBox(this._rightContain, btn, state.rightContain);
        if (isContainerLeft || isContainerRight) {
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
    dragAnswer_model03_v2.prototype.dragEndScendDeal = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var btn = fgui.GObject.cast(evt.currentTarget);
        var tarPos = new cc.Vec2(btn.x, btn.y);
        var isContainer1 = false;
        var isContainer2 = false;
        var isContainer3 = false;
        var isContainer4 = false;
        isContainer1 = this.judgeDragObjInBox(this._box1Contain, btn, state.box1Contain);
        isContainer2 = this.judgeDragObjInBox(this._box2Contain, btn, state.box2Contain);
        isContainer3 = this.judgeDragObjInBox(this._box3Contain, btn, state.box3Contain);
        isContainer4 = this.judgeDragObjInBox(this._box4Contain, btn, state.box4Contain);
        if (isContainer1 || isContainer2 || isContainer3 || isContainer4) {
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
            this.updateState(state);
            return;
        }
        // 左
        if (this._boxRect1.contains(tarPos) && this._box1Contain.length < this._containerTotalSecond) {
            this._box1Contain.push(btn);
            var temp = { pos: { x: this._typeBoxPos1[state.box1Contain.length].x,
                    y: this._typeBoxPos1[state.box1Contain.length].y },
                index: btn.data.index };
            state.box1Contain.push(temp);
            console.log('==== box1    ====' + state.box1Contain.length);
            console.log('==== box1 x  ====' + temp.pos.x);
            console.log('==== box1 y  ====' + temp.pos.y);
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
        else {
            var temp = { pos: { x: btn.data.x, y: btn.data.y }, index: btn.data.index };
            state.colliderBox.push(temp);
        }
        this.updateState(state);
    };
    dragAnswer_model03_v2.prototype.judgeDragObjInBox = function (_box, curBut, stateBox) {
        var isContainer = false;
        for (var i = 0; i < _box.length; i++) {
            if (_box[i] === curBut) {
                isContainer = true;
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
        return isContainer;
    };
    dragAnswer_model03_v2.prototype.refreshBoxPos = function (stateBox, posArr) {
        for (var i = 0; i < stateBox.length; i++) {
            stateBox[i].pos.x = posArr[i].x;
            stateBox[i].pos.y = posArr[i].y;
        }
    };
    dragAnswer_model03_v2.prototype.refreshFirstWrongData = function (state) {
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
    dragAnswer_model03_v2.prototype.refreshSecondWrongData = function (state) {
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
    dragAnswer_model03_v2.prototype._clickTitle = function (evt) {
        cc.audioEngine.play(this._clickSound, false, 1);
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model03_v2.prototype.playTitle = function (bool) {
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
    dragAnswer_model03_v2.prototype._clickSubmit = function (evt) {
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
                    if (this._leftContain[0].name[0] === this.answerType.Recyclable &&
                        this._leftContain[1].name[0] === this.answerType.Recyclable &&
                        this._leftContain[2].name[0] === this.answerType.Recyclable &&
                        this._leftContain[3].name[0] === this.answerType.Recyclable) {
                        console.log('=== 第一次回答正确 ===');
                        // 第一次答案正确
                        this.answerFeedback(true);
                        this._answer.push(true);
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
                    if (this._box1Contain[0].name[1] === this._box1Contain[1].name[1] &&
                        this._box3Contain[0].name[1] === this._box3Contain[1].name[1]) {
                        // 第一个分类正确
                        console.log('=== 第二次答案正确 ===');
                        this.answerFeedback(true);
                        this._answer.push(true);
                        state.answer = this._answer;
                    }
                    else {
                        console.log('=== 第二次答案错误 ===');
                        this.answerFeedback(false);
                        // this.refreshSecondWrongData(state);
                    }
                }
                this.updateState(state);
                return [2 /*return*/];
            });
        });
    };
    dragAnswer_model03_v2.prototype.refreshFirstRightData = function (state) {
        state.colliderBox = [];
        // 第二次做题时初始化按钮全部位置
        for (var i = 0; i < this._colliderBox.length; i++) {
            for (var j = 0; j < this._colliderCacheSecond.length; j++) {
                if (this._colliderBox[i].data.index === this._colliderCacheSecond[j].index) {
                    this._colliderBox[i].data.x = this._colliderCacheSecond[j].pos.x;
                    this._colliderBox[i].data.y = this._colliderCacheSecond[j].pos.y;
                    var temp = {
                        pos: {
                            x: this._colliderBox[i].data.x,
                            y: this._colliderBox[i].data.y
                        },
                        index: this._colliderBox[i].data.index
                    };
                    state.colliderBox.push(temp);
                }
            }
        }
        this._leftContain = [];
        this._rightContain = [];
        state.leftContain = [];
        state.rightContain = [];
    };
    // 获取状态
    dragAnswer_model03_v2.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model03_v2.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model03_v2.prototype.updateUi = function (oldState, state) {
        if (!globalThis._.isEqual(oldState.answer, state.answer)) {
            if (state.answer.length === 1) {
                // 显示第二种答题界面
                this._c2.selectedIndex = 1;
                this._submit.x = 1667;
                this._submit.y = 0;
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
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    };
    dragAnswer_model03_v2.prototype.answerFeedback = function (bool) {
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
    dragAnswer_model03_v2.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model03_v2.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model03_v2.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model03_v2.prototype.onEnable = function () {
        this.registerState();
        // this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model03_v2.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model03_v2 = __decorate([
        ccclass
    ], dragAnswer_model03_v2);
    return dragAnswer_model03_v2;
}(cc.Component));
exports.default = dragAnswer_model03_v2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDMtdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQXExQkM7UUE5MEJXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGtCQUFZLEdBQVEsQ0FBQyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDN0YsbUJBQWEsR0FBUSxDQUFDLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxF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LElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2IsMENBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RCLHdEQUF3RDtJQUMzRCxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFwMUJnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQXExQnpDO0lBQUQsNEJBQUM7Q0FyMUJELEFBcTFCQyxDQXIxQmtELEVBQUUsQ0FBQyxTQUFTLEdBcTFCOUQ7a0JBcjFCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHJ1emh1YW5cclxuICogQERhdGU6IDIwMjEtNS0yNiAxNjowMDowMFxyXG4gKiBATGFzdEVkaXRvcnM6IHJ1emh1YW5cclxuICogQExhc3RFZGl0VGltZTogMjAyMS01LTI3IDEyOjAwOjAwXHJcbiAqL1xyXG5cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuY29uc3QgeyBwb2ludEJlbG9uZ0FyZWEgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRyYWdBbnN3ZXJfbW9kZWwwM192MiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF93b3JsZFJvb3Q6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIF92aWV3OiBmZ3VpLkdDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJHcm91cDpmZ3VpLkdHcm91cDtcclxuICAgIHByaXZhdGUgX2NvbGxpZGVyZWRHcm91cDpmZ3VpLkdHcm91cDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJCb3ggPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9sZWZ0UG9zaXRvbjogYW55ID0gW3t4OiAyMDAsIHk6IDg5MH0sIHt4OiAzNTUsIHk6IDg5MH0sIHt4OiA1MTUsIHk6IDg5MH0sIHt4OiA2ODAsIHk6IDg5MH1dO1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRQb3NpdG9uOiBhbnkgPSBbe3g6IDEyNTUsIHk6ODkwfSwge3g6IDE0MTAsIHk6ODkwfSwge3g6IDE1NjAsIHk6ODkwfSwge3g6IDE3MTUsIHk6ODkwfV07XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZUJveFBvczE6IGFueSA9IFt7eDogMTcwLCB5OiA4Nzd9LCB7eDogMzIyLCB5OiA4Nzd9XTtcclxuICAgIHByaXZhdGUgX3R5cGVCb3hQb3MyOiBhbnkgPSBbe3g6IDYzNCwgeTogODc3fSwge3g6IDgwMCwgeTogODc3fV07XHJcbiAgICBwcml2YXRlIF90eXBlQm94UG9zMzogYW55ID0gW3t4OiAxMTM2LCB5OiA4Nzd9LCB7eDogMTI5NywgeTogODc3fV07XHJcbiAgICBwcml2YXRlIF90eXBlQm94UG9zNDogYW55ID0gW3t4OiAxNTg0LCB5OiA4Nzd9LCB7eDogMTc1MSwgeTogODc3fV07XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJDYWNoZVNlY29uZDogIGFueSA9IFtcclxuICAgICAgICB7cG9zOiB7eDogMjQ1LCB5OiA0NzB9LCBpbmRleDogNX0sXHJcbiAgICAgICAge3Bvczoge3g6IDQwMCwgeTogNDcwfSwgaW5kZXg6IDN9LCBcclxuICAgICAgICB7cG9zOiB7eDogNTYwLCB5OiA0NzB9LCBpbmRleDogMH0sXHJcbiAgICAgICAge3Bvczoge3g6IDcxMCwgeTogNDcwfSwgaW5kZXg6IDd9LFxyXG4gICAgICAgIHtwb3M6IHt4OiAxMjAwLCB5OiA0NzB9LCBpbmRleDogNH0sXHJcbiAgICAgICAge3Bvczoge3g6IDEzNjAsIHk6IDQ3MH0sIGluZGV4OiA2fSxcclxuICAgICAgICB7cG9zOiB7eDogMTUxMCwgeTogNDcwfSwgaW5kZXg6IDF9LFxyXG4gICAgICAgIHtwb3M6IHt4OiAxNjYwLCB5OiA0NzB9LCBpbmRleDogMn1dO1xyXG5cclxuICAgIHByaXZhdGUgX2xlZnRSZWN0OiBjYy5SZWN0O1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRSZWN0OiBjYy5SZWN0O1xyXG5cclxuICAgIHByaXZhdGUgX2JveFJlY3QxOiBjYy5SZWN0O1xyXG4gICAgcHJpdmF0ZSBfYm94UmVjdDI6IGNjLlJlY3Q7XHJcbiAgICBwcml2YXRlIF9ib3hSZWN0MzogY2MuUmVjdDtcclxuICAgIHByaXZhdGUgX2JveFJlY3Q0OiBjYy5SZWN0O1xyXG5cclxuICAgIHByaXZhdGUgX2xlZnRDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX3JpZ2h0Q29udGFpbjogYW55ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfYm94MUNvbnRhaW46IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfYm94MkNvbnRhaW46IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfYm94M0NvbnRhaW46IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfYm94NENvbnRhaW46IGFueSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbnRhaW5lclRvdGFsOiBudW1iZXIgPSA0O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbnRhaW5lclRvdGFsU2Vjb25kOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQ2FjaGUgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfYzI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MxOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGVUcmlnZ2VyOiBmZ3VpLkdMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ1NvdW5kOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tTb3VuZDogY2MuQXVkaW9DbGlwO1xyXG5cclxuICAgIHByaXZhdGUgX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuXHJcbiAgICAgcHJpdmF0ZSBoYW5kbGVHdWlkZTI6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGFuc3dlclR5cGU6IGFueSA9IGNjLkVudW0oe1xyXG5cclxuICAgICAgICBSZWN5Y2xhYmxlOiAnMSdcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDov5znqIvliqjmgIHnu4Tku7ZcclxuICAgIHByaXZhdGUgZmVlZGJhY2s6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9hbnN3ZXI6IGFueSA9IFtdOyAvLyAw77ya5rKh562U6aKY5pe2IDHvvJrnrZTlr7nnrKzkuIDnp43pgInmi6nml7YgMu+8miDnrZTlr7nnrKzkuoznp43pgInmi6nml7ZcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZSA9IHt9O1xyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVaSh0aGlzLl9zdGF0ZSwgdik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICB0aGlzLl92aWV3LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5fdmlldy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb2xsaWRlckdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IHRoaXMuX2NvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICBub2RlLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB4OiBub2RlLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogbm9kZS55XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oZmd1aS5FdmVudC5UT1VDSF9NT1ZFLCB0aGlzLl9vbkRyYWdNb3ZlLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIG5vZGUub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyRGF0YSA9IHtwb3M6e3g6IG5vZGUuZGF0YS54LCB5OiBub2RlLmRhdGEueX0sIGluZGV4OiBub2RlLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJDYWNoZS5wdXNoKGNvbGxpZGVyRGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGVmdDpmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJsZWZ0QmdcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgcmlnaHQ6Zmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkKFwicmlnaHRCZ1wiKS5hc0ltYWdlO1xyXG5cclxuICAgICAgICBsZXQgYm94MTpmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0eXBlYmcxXCIpLmFzSW1hZ2U7XHJcbiAgICAgICAgbGV0IGJveDI6Zmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidHlwZWJnMlwiKS5hc0ltYWdlO1xyXG4gICAgICAgIGxldCBib3gzOmZndWkuR0ltYWdlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInR5cGViZzNcIikuYXNJbWFnZTtcclxuICAgICAgICBsZXQgYm94NDpmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0eXBlYmc0XCIpLmFzSW1hZ2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2xlZnRSZWN0ID0gbmV3IGNjLlJlY3QobGVmdC54LCBsZWZ0LnksIGxlZnQud2lkdGgsIGxlZnQuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9yaWdodFJlY3QgPSBuZXcgY2MuUmVjdChyaWdodC54LCByaWdodC55LCByaWdodC53aWR0aCwgcmlnaHQuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYm94UmVjdDEgPSBuZXcgY2MuUmVjdChib3gxLngsIGJveDEueSwgYm94MS53aWR0aCwgYm94MS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX2JveFJlY3QyID0gbmV3IGNjLlJlY3QoYm94Mi54LCBib3gyLnksIGJveDIud2lkdGgsIGJveDIuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLl9ib3hSZWN0MyA9IG5ldyBjYy5SZWN0KGJveDMueCwgYm94My55LCBib3gzLndpZHRoLCBib3gzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fYm94UmVjdDQgPSBuZXcgY2MuUmVjdChib3g0LngsIGJveDQueSwgYm94NC53aWR0aCwgYm94NC5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG4gICAgICAgIHRoaXMuX2MxID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2MyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2MxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9jMS5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlVHJpZ2dlciA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVRyaWdnZXJcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlVHJpZ2dlcikgdGhpcy5fdGl0bGVUcmlnZ2VyLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrVGl0bGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVwiKS5hc0J1dHRvbjtcclxuXHJcbiAgICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgIHRoaXMuX3N0YXRlID0ge1xyXG5cclxuICAgICAgICAgICAgYW5zd2VyOiB0aGlzLl9hbnN3ZXIsXHJcblxyXG4gICAgICAgICAgICBjb2xsaWRlckJveDogdGhpcy5fY29sbGlkZXJDYWNoZSxcclxuICBcclxuICAgICAgICAgICAgbGVmdENvbnRhaW46IFtdLFxyXG5cclxuICAgICAgICAgICAgcmlnaHRDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDFDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDJDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDNDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGJveDRDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKGhhbmRsZUd1aWRlKSB7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKGhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKGhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICBoYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSBoYW5kbGVHdWlkZS5jb21wb25lbnQud2lkdGgpIC8gMiArIGhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICBoYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyICsgaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIGhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSBoYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZChoYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6Zmk56aB5q2iXHJcbiAgICBkaXNhYmxlRm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hc2spIGhhbmRsZU1hc2suZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4tOaXtlxyXG4gICAgLy8g5ouW5ou95a6a5pe25ZmoXHJcbiAgICBkcmFnU2NoZWR1bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyYWcgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICBcclxuICAgICAgICAvLyDkuLTml7YgbW9kZWwgY29tcG9uZW50IGpzb24g6YWN572u5Yqg6L29XHJcbiAgICAgICAgbGV0IHsgcGF0aENvbmZpZywgbW9kZWwsIGNvbXBvbmVudHMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IFBhY2thZ2UgPSBwYXRoQ29uZmlnLnBhY2thZ2VOYW1lO1xyXG5cclxuICAgICAgICBpZiAobW9kZWwudWlQYXRoKSB7XHJcbiAgICAgICAgICAgIGxldCBHQ29tcG9uZW50ID0gbW9kZWwudWlQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLmNvbmZpZykge1xyXG4gICAgICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlIH0gPSBtb2RlbC5jb25maWc7XHJcbiAgICAgICAgICAgIGlmIChhbnN3ZXIpIHRoaXMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICAgICAgLy8g5Yqo5pWI5rOo5YaMXHJcbiAgICAgICAgICAgIGlmIChhZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdiBpbiBhZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XS5jb21wb25lbnQpIHRoaXNbdl0uY29tcG9uZW50ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIGFlW3ZdLmNvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XS5wb3MpIHRoaXNbdl0ucG9zID0gYWVbdl0ucG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFBhdGg6IGFueSA9IGAke3BhdGhDb25maWcucmVtb3RlVXJsfSR7cGF0aENvbmZpZy5jb21wb25lbnRCdW5kbGVQYXRofSR7Y29tcG9uZW50c1trZXldLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbXBvbmVudEJ1bmRsZSwgY29tcG9uZW50c1trZXldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29tcG9uZW50UHJlZmFiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZHJhZ0J1dDpmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkKCdkcmFnU291bmQnKS5hc0J1dHRvbjtcclxuICAgICAgICBkcmFnQnV0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTChkcmFnQnV0W1wiX3NvdW5kXCJdKTtcclxuICAgICAgICB0aGlzLl9kcmFnU291bmQgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG5cclxuICAgICAgICBsZXQgY2xpY2tCdXQ6Zmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZCgnY2xpY2tTb3VuZCcpLmFzQnV0dG9uO1xyXG4gICAgICAgIGNsaWNrQnV0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKGNsaWNrQnV0W1wiX3NvdW5kXCJdKTtcclxuICAgICAgICB0aGlzLl9jbGlja1NvdW5kID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmlnaW5WYWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB2LngsXHJcbiAgICAgICAgICAgIHk6IHYueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgZXZ0LmNhcHR1cmVUb3VjaCgpO1xyXG5cclxuICAgICAgICB2YXIgYnRuOiBmZ3VpLkdPYmplY3QgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgaWYgKGJ0bi5kYXRhLmluZGV4ID09PSBzdGF0ZS5jb2xsaWRlckJveFtpXS5pbmRleCkge1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3guc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLl9jbGlja1NvdW5kLCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ01vdmUoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLl9kcmFnU291bmQsIGZhbHNlLCAxKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOesrOS4gOasoeetlOmimOaXtlxyXG4gICAgICAgICAgICB0aGlzLmRyYWdFbmRGaXJzdERlYWwoZXZ0KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDnrKzkuozmrKHnrZTpopjml7ZcclxuICAgICAgICAgICAgdGhpcy5kcmFnRW5kU2NlbmREZWFsKGV2dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhZ0VuZEZpcnN0RGVhbChldnQpIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgdmFyIGJ0bjogZmd1aS5HT2JqZWN0ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCB0YXJQb3MgPSBuZXcgY2MuVmVjMihidG4ueCwgYnRuLnkpO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lckxlZnQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXJSaWdodCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpc0NvbnRhaW5lckxlZnQgPSB0aGlzLmp1ZGdlRHJhZ09iakluQm94KHRoaXMuX2xlZnRDb250YWluLCBidG4sIHN0YXRlLmxlZnRDb250YWluKTtcclxuICAgICAgICBpc0NvbnRhaW5lclJpZ2h0ID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9yaWdodENvbnRhaW4sIGJ0biwgc3RhdGUucmlnaHRDb250YWluKTtcclxuXHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyTGVmdCB8fCBpc0NvbnRhaW5lclJpZ2h0KSB7XHJcblxyXG4gICAgICAgICAgICAvLyDmgaLlpI3ljp/kvY1cclxuICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczpcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogYnRuLmRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGJ0bi5kYXRhLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmxlZnRDb250YWluLCB0aGlzLl9sZWZ0UG9zaXRvbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5yaWdodENvbnRhaW4sIHRoaXMuX3JpZ2h0UG9zaXRvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGlmICh0aGlzLl9sZWZ0UmVjdC5jb250YWlucyh0YXJQb3MpICYmIHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSDlt6YgPT09PScpO1xyXG4gICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiB0aGlzLl9sZWZ0UG9zaXRvbltzdGF0ZS5sZWZ0Q29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2xlZnRQb3NpdG9uW3N0YXRlLmxlZnRDb250YWluLmxlbmd0aF0ueX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5sZWZ0Q29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9yaWdodFJlY3QuY29udGFpbnModGFyUG9zKSAmJiB0aGlzLl9yaWdodENvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaHRDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge3Bvczoge3g6IHRoaXMuX3JpZ2h0UG9zaXRvbltzdGF0ZS5yaWdodENvbnRhaW4ubGVuZ3RoXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9yaWdodFBvc2l0b25bc3RhdGUucmlnaHRDb250YWluLmxlbmd0aF0ueX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge3Bvczoge3g6IGJ0bi5kYXRhLngsIHk6IGJ0bi5kYXRhLnl9LCBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhZ0VuZFNjZW5kRGVhbChldnQpIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgdmFyIGJ0bjogZmd1aS5HT2JqZWN0ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCB0YXJQb3MgPSBuZXcgY2MuVmVjMihidG4ueCwgYnRuLnkpO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lcjEgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXIyID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyMyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0NvbnRhaW5lcjQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaXNDb250YWluZXIxID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9ib3gxQ29udGFpbiwgYnRuLCBzdGF0ZS5ib3gxQ29udGFpbik7XHJcbiAgICAgICAgaXNDb250YWluZXIyID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9ib3gyQ29udGFpbiwgYnRuLCBzdGF0ZS5ib3gyQ29udGFpbik7XHJcbiAgICAgICAgaXNDb250YWluZXIzID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9ib3gzQ29udGFpbiwgYnRuLCBzdGF0ZS5ib3gzQ29udGFpbik7XHJcbiAgICAgICAgaXNDb250YWluZXI0ID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9ib3g0Q29udGFpbiwgYnRuLCBzdGF0ZS5ib3g0Q29udGFpbik7XHJcblxyXG4gICAgICAgIGlmIChpc0NvbnRhaW5lcjEgfHwgaXNDb250YWluZXIyIHx8IGlzQ29udGFpbmVyMyB8fCBpc0NvbnRhaW5lcjQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBidG4uZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogYnRuLmRhdGEueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDph43mlrDmi43kuIvkvY3nva5cclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDFDb250YWluLCB0aGlzLl90eXBlQm94UG9zMSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5ib3gyQ29udGFpbiwgdGhpcy5fdHlwZUJveFBvczIpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUuYm94M0NvbnRhaW4sIHRoaXMuX3R5cGVCb3hQb3MzKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLmJveDRDb250YWluLCB0aGlzLl90eXBlQm94UG9zNCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5bemXHJcbiAgICAgICAgaWYgKHRoaXMuX2JveFJlY3QxLmNvbnRhaW5zKHRhclBvcykgJiYgdGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2JveDFDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge3Bvczoge3g6IHRoaXMuX3R5cGVCb3hQb3MxW3N0YXRlLmJveDFDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHlwZUJveFBvczFbc3RhdGUuYm94MUNvbnRhaW4ubGVuZ3RoXS55fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleH07XHJcbiAgICBcclxuICAgICAgICAgICAgc3RhdGUuYm94MUNvbnRhaW4ucHVzaCh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IGJveDEgICAgPT09PScgKyBzdGF0ZS5ib3gxQ29udGFpbi5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSBib3gxIHggID09PT0nICsgdGVtcC5wb3MueCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IGJveDEgeSAgPT09PScgKyB0ZW1wLnBvcy55KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib3hSZWN0Mi5jb250YWlucyh0YXJQb3MpICYmIHRoaXMuX2JveDJDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IGJveDIgPT09PScpO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3gyQ29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiB0aGlzLl90eXBlQm94UG9zMltzdGF0ZS5ib3gyQ29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3R5cGVCb3hQb3MyW3N0YXRlLmJveDJDb250YWluLmxlbmd0aF0ueX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5ib3gyQ29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuX2JveFJlY3QzLmNvbnRhaW5zKHRhclBvcykgJiYgdGhpcy5fYm94M0NvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz09PT0gYm94MyA9PT09Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2JveDNDb250YWluLnB1c2goYnRuKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge3Bvczoge3g6IHRoaXMuX3R5cGVCb3hQb3MzW3N0YXRlLmJveDNDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5fdHlwZUJveFBvczNbc3RhdGUuYm94M0NvbnRhaW4ubGVuZ3RoXS55fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleH07XHJcbiAgICAgICAgICAgIHN0YXRlLmJveDNDb250YWluLnB1c2godGVtcCk7XHJcblxyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9ib3hSZWN0NC5jb250YWlucyh0YXJQb3MpICYmIHRoaXMuX2JveDRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IGJveDQgPT09PScpO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3g0Q29udGFpbi5wdXNoKGJ0bik7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiB0aGlzLl90eXBlQm94UG9zNFtzdGF0ZS5ib3g0Q29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3R5cGVCb3hQb3M0W3N0YXRlLmJveDRDb250YWluLmxlbmd0aF0ueX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogYnRuLmRhdGEuaW5kZXh9O1xyXG4gICAgICAgICAgICBzdGF0ZS5ib3g0Q29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICB9ZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtwb3M6IHt4OiBidG4uZGF0YS54LCB5OiBidG4uZGF0YS55fSwgaW5kZXg6IGJ0bi5kYXRhLmluZGV4fTtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGp1ZGdlRHJhZ09iakluQm94KF9ib3gsIGN1ckJ1dCwgc3RhdGVCb3gpIHtcclxuXHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IF9ib3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggX2JveFtpXSA9PT0gY3VyQnV0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaXNDb250YWluZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgX2JveC5zcGxpY2UoaSwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZUJveC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVCb3hbaV0uaW5kZXggPT09IGN1ckJ1dC5kYXRhLmluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZUJveC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcmV0dXJuICBpc0NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hCb3hQb3Moc3RhdGVCb3gsIHBvc0Fycikge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZUJveFtpXS5wb3MueCA9IHBvc0FycltpXS54O1xyXG4gICAgICAgICAgICBzdGF0ZUJveFtpXS5wb3MueSA9IHBvc0FycltpXS55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hGaXJzdFdyb25nRGF0YShzdGF0ZSkge1xyXG5cclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLnl9LFxyXG5cclxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLmluZGV4XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpbiA9IFtdO1xyXG5cclxuICAgICAgICBzdGF0ZS5sZWZ0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHN0YXRlLnJpZ2h0Q29udGFpbiA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVmcmVzaFNlY29uZFdyb25nRGF0YShzdGF0ZSkge1xyXG5cclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLnl9LFxyXG5cclxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLmluZGV4XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9ib3gxQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JveDJDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fYm94M0NvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9ib3g0Q29udGFpbiA9IFtdO1xyXG5cclxuICAgICAgICBzdGF0ZS5ib3gxQ29udGFpbiA9IFtdO1xyXG4gICAgICAgIHN0YXRlLmJveDJDb250YWluID0gW107XHJcbiAgICAgICAgc3RhdGUuYm94M0NvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5ib3g0Q29udGFpbiA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrVGl0bGUoZXZ0OiBhbnkpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuX2NsaWNrU291bmQsIGZhbHNlLCAxKTtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnRpdGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5VGl0bGUoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSBib29sID8gMSA6IDA7XHJcblxyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwodGhpcy5fdGl0bGVbXCJfc291bmRcIl0pO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpIHtcclxuICAgIFxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9yaWdodENvbnRhaW4ubGVuZ3RoID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpOyAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYm94MUNvbnRhaW4ubGVuZ3RoID09PSAwICYmIHRoaXMuX2JveDJDb250YWluLmxlbmd0aCA9PT0gMCAmJiB0aGlzLl9ib3gzQ29udGFpbi5sZW5ndGggPT09IDAgJiYgdGhpcy5fYm94NENvbnRhaW4ubGVuZ3RoID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpOyAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5fYW5zd2VyLmxlbmd0aCA+PSAyKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWJje+8mjEg5ZCO77yaMlxyXG4gICAgICAgIGlmICh0aGlzLl9hbnN3ZXIubGVuZ3RoID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbGVmdENvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWwgfHwgdGhpcy5fcmlnaHRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWZ0Q29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLmFuc3dlclR5cGUuUmVjeWNsYWJsZSYmIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bMV0ubmFtZVswXSA9PT0gdGhpcy5hbnN3ZXJUeXBlLlJlY3ljbGFibGUmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bMl0ubmFtZVswXSA9PT0gdGhpcy5hbnN3ZXJUeXBlLlJlY3ljbGFibGUmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bM10ubmFtZVswXSA9PT0gdGhpcy5hbnN3ZXJUeXBlLlJlY3ljbGFibGUpIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuIDmrKHlm57nrZTmraPnoa4gPT09Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyDnrKzkuIDmrKHnrZTmoYjmraPnoa5cclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hbnN3ZXIucHVzaCh0cnVlKTsgXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5hbnN3ZXIgPSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hGaXJzdFJpZ2h0RGF0YShzdGF0ZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuIDmrKHlm57nrZTplJnor68gPT09JyArIHRoaXMuX2xlZnRDb250YWluWzBdLm5hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuIDmrKHlm57nrZTplJnor68gPT09JyArIHRoaXMuX2xlZnRDb250YWluWzFdLm5hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuIDmrKHlm57nrZTplJnor68gPT09JyArIHRoaXMuX2xlZnRDb250YWluWzJdLm5hbWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuIDmrKHlm57nrZTplJnor68gPT09JyArIHRoaXMuX2xlZnRDb250YWluWzNdLm5hbWVbMF0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvLyDnrKzkuIDmrKHnrZTmoYjplJnor69cclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZWZyZXNoRmlyc3RXcm9uZ0RhdGEoc3RhdGUpO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2JveDFDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ib3gyQ29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbFNlY29uZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm94M0NvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWxTZWNvbmQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JveDRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsU2Vjb25kKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ib3gxQ29udGFpblswXS5uYW1lWzFdID09PSB0aGlzLl9ib3gxQ29udGFpblsxXS5uYW1lWzFdICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ib3gzQ29udGFpblswXS5uYW1lWzFdID09PSB0aGlzLl9ib3gzQ29udGFpblsxXS5uYW1lWzFdKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIOesrOS4gOS4quWIhuexu+ato+ehrlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuozmrKHnrZTmoYjmraPnoa4gPT09Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5zd2VyLnB1c2godHJ1ZSk7IFxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYW5zd2VyID0gdGhpcy5fYW5zd2VyO1xyXG5cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSDnrKzkuozmrKHnrZTmoYjplJnor68gPT09Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucmVmcmVzaFNlY29uZFdyb25nRGF0YShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoRmlyc3RSaWdodERhdGEoc3RhdGUpIHtcclxuXHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJCb3ggPSBbXTtcclxuICAgICAgICAvLyDnrKzkuozmrKHlgZrpopjml7bliJ3lp4vljJbmjInpkq7lhajpg6jkvY3nva5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmQubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS5pbmRleCA9PT0gdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtqXS5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueCA9IHRoaXMuX2NvbGxpZGVyQ2FjaGVTZWNvbmRbal0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS55ID0gdGhpcy5fY29sbGlkZXJDYWNoZVNlY29uZFtqXS5wb3MueTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueX0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLmluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jb2xsaWRlckJveC5wdXNoKHRlbXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5fbGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLl9yaWdodENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICAgICAgc3RhdGUubGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICBzdGF0ZS5yaWdodENvbnRhaW4gPSBbXTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W54q25oCBXHJcbiAgICBnZXRTdGF0ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShvbGRTdGF0ZTogYW55LCBzdGF0ZTogYW55KSB7XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYW5zd2VyLCBzdGF0ZS5hbnN3ZXIpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuYW5zd2VyLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5pi+56S656ys5LqM56eN562U6aKY55WM6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJtaXQueCA9IDE2Njc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJtaXQueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuYW5zd2VyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25IYW5kbGVHdWlkZSh0aGlzLmhhbmRsZUd1aWRlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmIChzdGF0ZS5hbnN3ZXIubGVuZ3RoID09PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSGFuZGxlR3VpZGUodGhpcy5oYW5kbGVHdWlkZTIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuY29sbGlkZXJCb3gsIHN0YXRlLmNvbGxpZGVyQm94KSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnggPSAgc3RhdGUuY29sbGlkZXJCb3hbaV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnkgPSAgc3RhdGUuY29sbGlkZXJCb3hbaV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5sZWZ0Q29udGFpbiwgc3RhdGUubGVmdENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmxlZnRDb250YWluLmxlbmd0aDsgaSsrKSB7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5sZWZ0Q29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmxlZnRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmxlZnRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUubGVmdENvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUucmlnaHRDb250YWluLCBzdGF0ZS5yaWdodENvbnRhaW4pKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUucmlnaHRDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUucmlnaHRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUucmlnaHRDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmJveDFDb250YWluLCBzdGF0ZS5ib3gxQ29udGFpbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5ib3gxQ29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94MUNvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5ib3gxQ29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDFDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUuYm94MUNvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYm94MkNvbnRhaW4sIHN0YXRlLmJveDJDb250YWluKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmJveDJDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gyQ29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLmJveDJDb250YWluW2ldLnBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94MkNvbnRhaW5baV0uaW5kZXhdLnkgPSBzdGF0ZS5ib3gyQ29udGFpbltpXS5wb3MueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5ib3gzQ29udGFpbiwgc3RhdGUuYm94M0NvbnRhaW4pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuYm94M0NvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDNDb250YWluW2ldLmluZGV4XS54ID0gc3RhdGUuYm94M0NvbnRhaW5baV0ucG9zLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5ib3gzQ29udGFpbltpXS5pbmRleF0ueSA9IHN0YXRlLmJveDNDb250YWluW2ldLnBvcy55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmJveDRDb250YWluLCBzdGF0ZS5ib3g0Q29udGFpbikpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5ib3g0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuYm94NENvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5ib3g0Q29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmJveDRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUuYm94NENvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUudGl0bGUsIHN0YXRlLnRpdGxlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgZmVlZGJhY2s6IGFueSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmVlZGJhY2spO1xyXG4gICAgICAgIGZlZWRiYWNrLnggPSA5NjA7XHJcbiAgICAgICAgZmVlZGJhY2sueSA9IDU0MDtcclxuICAgICAgICBsZXQgZmVlZGJhY2tKczogYW55ID0gZmVlZGJhY2suZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZmVlZGJhY2tKcy5pbml0KGJvb2wpO1xyXG4gICAgICAgIGZlZWRiYWNrLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZmVlZGJhY2suZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgICAgLy8gdGhpcy5zY2hlZHVsZSh0aGlzLmRyYWdTY2hlZHVsZSwgdGhpcy5fc2NoZWR1bGVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19