
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
        _this.tiShiShowType = cc.Enum({
            No: 0,
            Size: 1,
            Color: 2,
            Finish: 3
        });
        _this._tiShiShow = _this.tiShiShowType.No;
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
        this._answer = [];
        this._leftContain = [];
        this._rightContain = [];
        this._colliderBox = [];
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
        this._submit = this._view.getChild("submit").asButton;
        if (this._submit)
            this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }
        if (this._c2) {
            this._c2.selectedIndex = this._tiShiShow.No;
        }
        this._tiShiSize = this._view.getChild("sizeType").asLoader.url;
        this._tiShiColor = this._view.getChild("colorType").asLoader.url;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        this._titleTrigger.sortingOrder = 2;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        this._title = this._view.getChild("title").asButton;
        this._title.sortingOrder = 2;
        this._colliderGroup = this._view.getChild("colliderBox").asGroup;
        this._collideredGroup = this._view.getChild("collideredBox").asGroup;
        this._bgdoor = this._view.getChild('bgdoor').asCom;
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
        this._lastPos = evt.pos;
        var btn = fgui.GObject.cast(evt.currentTarget);
        btn.sortingOrder = 1;
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
        var state = globalThis._.cloneDeep(this._state);
        var btn = fgui.GObject.cast(evt.currentTarget);
        btn.sortingOrder = 0;
        cc.audioEngine.play(this._dragSound, false, 1);
        var moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;
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
                    //删除包含的刷新
                    this.deleteCurDragObjInBox(this._leftContain, btn, state.leftContain);
                    this.refreshBoxPos(state.leftContain, this._leftPositon);
                }
                else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.leftContain, this._leftPositon, btn, this._leftContain, state.colliderBox);
                }
            }
            else {
                // 从外面拖进来的
                this.dealAllContainIn(false, isContainerRight, state, btn);
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
                this.dealAllContainIn(isContainerLeft, false, state, btn);
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
            this.dealAllContainIn(isContainerLeft, isContainerRight, state, btn);
            this.resetButtonInitPos(state.colliderBox, btn);
        }
        this.updateState(state);
    };
    dragAnswer_model03_v1.prototype.dealAllContainIn = function (isContainerLeft, isContainerRight, state, btn) {
        if (isContainerLeft) {
            this.deleteCurDragObjInBox(this._leftContain, btn, state.leftContain);
            this.refreshBoxPos(state.leftContain, this._leftPositon);
        }
        if (isContainerRight) {
            this.deleteCurDragObjInBox(this._rightContain, btn, state.rightContain);
            this.refreshBoxPos(state.rightContain, this._rightPositon);
        }
    };
    dragAnswer_model03_v1.prototype.judgeChangePosInBox = function (curPos, stateContain, posArr, btn, boxContain, stateColliderBox) {
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
    dragAnswer_model03_v1.prototype.resetButtonInitPos = function (stateColliderBox, btn) {
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
    dragAnswer_model03_v1.prototype.judgeDragObjInBox = function (_box, curBut) {
        var isContainer = false;
        for (var i = 0; i < _box.length; i++) {
            if (_box[i] === curBut) {
                isContainer = true;
                break;
            }
        }
        return isContainer;
    };
    dragAnswer_model03_v1.prototype.deleteCurDragObjInBox = function (_box, curBut, stateBox) {
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
    dragAnswer_model03_v1.prototype.refreshBoxPos = function (stateContain, posArr) {
        for (var i = 0; i < stateContain.length; i++) {
            stateContain[i].pos.x = posArr[i].x;
            stateContain[i].pos.y = posArr[i].y;
            stateContain[i].posIndex = i;
        }
    };
    dragAnswer_model03_v1.prototype.refreshBg = function (answer) {
        var _this = this;
        if (answer.length === 1) {
            this._bgdoor.getTransition('open1').play(function () {
                _this.answerFeedback(true);
            });
        }
        else if (answer.length === 2) {
            if (answer[0] === this.answerType.SIZE) {
                this._view.getChild("firstAnswer").asLoader.url = this._tiShiSize;
            }
            else {
                this._view.getChild("firstAnswer").asLoader.url = this._tiShiColor;
            }
            if (answer[1] === this.answerType.SIZE) {
                this._view.getChild("secondAnswer").asLoader.url = this._tiShiSize;
            }
            else {
                this._view.getChild("secondAnswer").asLoader.url = this._tiShiColor;
            }
            this._submit.visible = false;
            this._bgdoor.getTransition('open2').play(function () {
                _this.answerFeedback(true);
            });
            this._view.getChild("showbg1").sortingOrder = 1;
            this._view.getChild("showbg2").sortingOrder = 1;
            this._view.getChild("showbg3").sortingOrder = 1;
            this._view.getChild("firstAnswer").sortingOrder = 1;
            this._view.getChild("secondAnswer").sortingOrder = 1;
            this.offButDrag();
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
                    this._tiShiShow = this.tiShiShowType.Size;
                    if (state.answer.length >= 2) {
                        this._tiShiShow = this.tiShiShowType.Finish;
                    }
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
                    this._tiShiShow = this.tiShiShowType.Color;
                    if (state.answer.length >= 2) {
                        this._tiShiShow = this.tiShiShowType.Finish;
                    }
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
                this._colliderBox[state.colliderBox[i].index].data.posIndex = -1;
            }
        }
        if (!globalThis._.isEqual(oldState.leftContain, state.leftContain)) {
            for (var i = 0; i < state.leftContain.length; i++) {
                this._colliderBox[state.leftContain[i].index].x = state.leftContain[i].pos.x;
                this._colliderBox[state.leftContain[i].index].y = state.leftContain[i].pos.y;
                this._colliderBox[state.leftContain[i].index].data.posIndex = state.leftContain[i].posIndex;
            }
        }
        if (!globalThis._.isEqual(oldState.rightContain, state.rightContain)) {
            for (var i = 0; i < state.rightContain.length; i++) {
                this._colliderBox[state.rightContain[i].index].x = state.rightContain[i].pos.x;
                this._colliderBox[state.rightContain[i].index].y = state.rightContain[i].pos.y;
                this._colliderBox[state.rightContain[i].index].data.posIndex = state.rightContain[i].posIndex;
            }
        }
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    };
    dragAnswer_model03_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
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
            if (bool) {
                _this._c2.selectedIndex = _this._tiShiShow;
            }
        }, 2000);
    };
    dragAnswer_model03_v1.prototype.offButDrag = function () {
        for (var i = 0; i < this._leftContain.length; i++) {
            this._leftContain[i].draggable = false;
        }
        for (var i = 0; i < this._rightContain.length; i++) {
            this._leftContain[i].draggable = false;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDQtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQSs0QkM7UUF4NEJXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGtCQUFZLEdBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckcsbUJBQWEsR0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxF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RyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUdwRTtTQUNKO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBRWhFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxD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QUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLDRDQUFZLEdBQVo7UUFDSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsYUFBYTtJQUNiLDBDQUFVLEdBQVY7UUFDSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQix3REFBd0Q7SUFDNUQsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBOTRCZ0IscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0ErNEJ6QztJQUFELDRCQUFDO0NBLzRCRCxBQSs0QkMsQ0EvNEJrRCxFQUFFLENBQUMsU0FBUyxHQSs0QjlEO2tCQS80Qm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiBydXpodWFuXHJcbiAqIEBEYXRlOiAyMDIxLTUtMjEgMTU6MTM6MDBcclxuICogQExhc3RFZGl0b3JzOiBydXpodWFuXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtNS0yMSAxNToxMzowMFxyXG4gKi9cclxuXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDNfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyR3JvdXA6IGZndWkuR0dyb3VwO1xyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJlZEdyb3VwOiBmZ3VpLkdHcm91cDtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlckJveCA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2xlZnRQb3NpdG9uOiBhbnkgPSBbeyB4OiAzMzAsIHk6IDc2MCB9LCB7IHg6IDU0MCwgeTogNzYwIH0sIHsgeDogMzMwLCB5OiA5MjUgfSwgeyB4OiA1NDAsIHk6IDkyNSB9XTtcclxuICAgIHByaXZhdGUgX3JpZ2h0UG9zaXRvbjogYW55ID0gW3sgeDogMTM3MCwgeTogNzYwIH0sIHsgeDogMTYxMCwgeTogNzYwIH0sIHsgeDogMTM3MCwgeTogOTI1IH0sIHsgeDogMTYxMCwgeTogOTI1IH1dO1xyXG5cclxuICAgIHByaXZhdGUgX2xlZnRSZWN0OiBjYy5SZWN0O1xyXG4gICAgcHJpdmF0ZSBfcmlnaHRSZWN0OiBjYy5SZWN0O1xyXG5cclxuICAgIHByaXZhdGUgX2xlZnRDb250YWluOiBhbnkgPSBbXTtcclxuICAgIHByaXZhdGUgX3JpZ2h0Q29udGFpbjogYW55ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyVG90YWw6IG51bWJlciA9IDQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJDYWNoZSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgX2JnZG9vcjogZmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2MxOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF9jMjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGVUcmlnZ2VyOiBmZ3VpLkdMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGlTaGlTaXplOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGlTaGlDb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgX2RyYWdTb3VuZDogY2MuQXVkaW9DbGlwO1xyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrU291bmQ6IGNjLkF1ZGlvQ2xpcDtcclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9sYXN0UG9zOiBjYy5WZWMyO1xyXG5cclxuICAgIHByaXZhdGUgYW5zd2VyVHlwZTogYW55ID0gY2MuRW51bSh7XHJcblxyXG4gICAgICAgIFNJWkU6IDEsXHJcbiAgICAgICAgQ09MT1VSOiAyXHJcbiAgICB9KTtcclxuXHJcbiAgICBwcml2YXRlIHRpU2hpU2hvd1R5cGU6IGFueSA9IGNjLkVudW0oe1xyXG5cclxuICAgICAgICBObzogMCxcclxuICAgICAgICBTaXplOiAxLFxyXG4gICAgICAgIENvbG9yOiAyLFxyXG4gICAgICAgIEZpbmlzaDogM1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGlTaGlTaG93ID0gdGhpcy50aVNoaVNob3dUeXBlLk5vO1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlcjogYW55ID0gW107IC8vIDDvvJrmsqHnrZTpopjml7YgMe+8muetlOWvueesrOS4gOenjemAieaLqeaXtiAy77yaIOetlOWvueesrOS6jOenjemAieaLqeaXtlxyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9hbnN3ZXIgPSBbXTtcclxuICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NvbGxpZGVyQm94ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy5fdmlldy54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuX3ZpZXcud2lkdGgpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYzEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzEuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2MyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSB0aGlzLl90aVNoaVNob3cuTm87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl90aVNoaVNpemUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwic2l6ZVR5cGVcIikuYXNMb2FkZXIudXJsO1xyXG4gICAgICAgIHRoaXMuX3RpU2hpQ29sb3IgPSB0aGlzLl92aWV3LmdldENoaWxkKFwiY29sb3JUeXBlXCIpLmFzTG9hZGVyLnVybDtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIuc29ydGluZ09yZGVyID0gMjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX3RpdGxlLnNvcnRpbmdPcmRlciA9IDI7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbGxpZGVyR3JvdXAgPSB0aGlzLl92aWV3LmdldENoaWxkKFwiY29sbGlkZXJCb3hcIikuYXNHcm91cDtcclxuICAgICAgICB0aGlzLl9jb2xsaWRlcmVkR3JvdXAgPSB0aGlzLl92aWV3LmdldENoaWxkKFwiY29sbGlkZXJlZEJveFwiKS5hc0dyb3VwO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fYmdkb29yID0gdGhpcy5fdmlldy5nZXRDaGlsZCgnYmdkb29yJykuYXNDb207XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmlldy5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gdGhpcy5fY29sbGlkZXJHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGU6IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIG5vZGUuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHg6IG5vZGUueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBub2RlLnksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zSW5kZXg6IC0xXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbm9kZS5vbihmZ3VpLkV2ZW50LlRPVUNIX0JFR0lOLCB0aGlzLl9vbkRyYWdTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKGZndWkuRXZlbnQuVE9VQ0hfTU9WRSwgdGhpcy5fb25EcmFnTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBub2RlLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCB0aGlzLl9vbkRyYWdFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3gucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xsaWRlckRhdGEgPSB7IHBvczogeyB4OiBub2RlLmRhdGEueCwgeTogbm9kZS5kYXRhLnkgfSwgaW5kZXg6IG5vZGUuZGF0YS5pbmRleCwgcG9zSW5kZXg6IG5vZGUuZGF0YS5wb3NJbmRleCB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJDYWNoZS5wdXNoKGNvbGxpZGVyRGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sZWZ0UmVjdCA9IG5ldyBjYy5SZWN0KDExMSwgNjQxLCA2NTQsIDQwNyk7XHJcbiAgICAgICAgdGhpcy5fcmlnaHRSZWN0ID0gbmV3IGNjLlJlY3QoMTE2MiwgNjQxLCA2NTQsIDQwNyk7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICBhbnN3ZXI6IHRoaXMuX2Fuc3dlcixcclxuXHJcbiAgICAgICAgICAgIGNvbGxpZGVyQm94OiB0aGlzLl9jb2xsaWRlckNhY2hlLFxyXG5cclxuICAgICAgICAgICAgbGVmdENvbnRhaW46IFtdLFxyXG5cclxuICAgICAgICAgICAgcmlnaHRDb250YWluOiBbXSxcclxuXHJcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2VcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkuLTml7Yg56aB5q2i5pON5L2c5pyf6Ze0IOWIh+mhtVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyDov5DooYzml7Yg56aB5q2i5pON5L2cXHJcbiAgICBmb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoIWhhbmRsZU1hc2spIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSBuZXcgY2MuTm9kZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5wYXJlbnQgPSB0aGlzLl93b3JsZFJvb3Q7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sud2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueCA9IDk2MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay55ID0gNTQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoaGFuZGxlR3VpZGUpIHtcclxuICAgICAgICBpZiAoIWhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQoaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAoaGFuZGxlR3VpZGUucG9zKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIGhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgaGFuZGxlR3VpZGUucG9zLng7XHJcbiAgICAgICAgICAgIGhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSBoYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyBoYW5kbGVHdWlkZS5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IGhhbmRsZUd1aWRlLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKGhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Li05pe2XHJcbiAgICAvLyDmi5bmi73lrprml7blmahcclxuICAgIGRyYWdTY2hlZHVsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZyA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdChkYXRhOiBhbnkpIHtcclxuXHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLnVpUGF0aCkge1xyXG4gICAgICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSB9ID0gbW9kZWwuY29uZmlnO1xyXG4gICAgICAgICAgICBpZiAoYW5zd2VyKSB0aGlzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgICAgICBpZiAoYWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1t2XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0ucG9zKSB0aGlzW3ZdLnBvcyA9IGFlW3ZdLnBvcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQYXRoOiBhbnkgPSBgJHtwYXRoQ29uZmlnLnJlbW90ZVVybH0ke3BhdGhDb25maWcuY29tcG9uZW50QnVuZGxlUGF0aH0ke2NvbXBvbmVudHNba2V5XS5idW5kbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50QnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbXBvbmVudFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb21wb25lbnRCdW5kbGUsIGNvbXBvbmVudHNba2V5XS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbXBvbmVudFByZWZhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRyYWdCdXQ6IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoJ2RyYWdTb3VuZCcpLmFzQnV0dG9uO1xyXG4gICAgICAgIGRyYWdCdXQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKGRyYWdCdXRbXCJfc291bmRcIl0pO1xyXG4gICAgICAgIHRoaXMuX2RyYWdTb3VuZCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcblxyXG4gICAgICAgIGxldCBjbGlja0J1dDogZmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZCgnY2xpY2tTb3VuZCcpLmFzQnV0dG9uO1xyXG4gICAgICAgIGNsaWNrQnV0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKGNsaWNrQnV0W1wiX3NvdW5kXCJdKTtcclxuICAgICAgICB0aGlzLl9jbGlja1NvdW5kID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmlnaW5WYWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB2LngsXHJcbiAgICAgICAgICAgIHk6IHYueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgZXZ0LmNhcHR1cmVUb3VjaCgpO1xyXG5cclxuICAgICAgICB0aGlzLl9sYXN0UG9zID0gZXZ0LnBvcztcclxuXHJcblxyXG4gICAgICAgIHZhciBidG46IGZndWkuR09iamVjdCA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBidG4uc29ydGluZ09yZGVyID0gMTtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoYnRuLmRhdGEuaW5kZXggPT09IHN0YXRlLmNvbGxpZGVyQm94W2ldLmluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3guc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLl9jbGlja1NvdW5kLCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ01vdmUoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0VuZChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB2YXIgYnRuOiBmZ3VpLkdPYmplY3QgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgYnRuLnNvcnRpbmdPcmRlciA9IDA7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5fZHJhZ1NvdW5kLCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICAgIGxldCBtb3ZlSXNNaW4gPSBNYXRoLmFicyhldnQucG9zLnggLSB0aGlzLl9sYXN0UG9zLngpIDwgNzAgJiYgTWF0aC5hYnMoZXZ0LnBvcy55IC0gdGhpcy5fbGFzdFBvcy55KSA8IDcwO1xyXG5cclxuICAgICAgICBsZXQgdGFyUG9zID0gbmV3IGNjLlZlYzIoYnRuLngsIGJ0bi55KTtcclxuICAgICAgICBsZXQgaXNDb250YWluZXJMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyUmlnaHQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaXNDb250YWluZXJMZWZ0ID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9sZWZ0Q29udGFpbiwgYnRuKTtcclxuICAgICAgICBpc0NvbnRhaW5lclJpZ2h0ID0gdGhpcy5qdWRnZURyYWdPYmpJbkJveCh0aGlzLl9yaWdodENvbnRhaW4sIGJ0bik7XHJcblxyXG4gICAgICAgIC8vIOW3plxyXG4gICAgICAgIGlmICh0aGlzLl9sZWZ0UmVjdC5jb250YWlucyh0YXJQb3MpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSDlt6YgPT09PScpO1xyXG4gICAgICAgICAgICBpZiAoaXNDb250YWluZXJMZWZ0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1vdmVJc01pbiB8fCB0aGlzLl9sZWZ0Q29udGFpbi5sZW5ndGggPCAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+WIoOmZpOWMheWQq+eahOWIt+aWsFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ3VyRHJhZ09iakluQm94KHRoaXMuX2xlZnRDb250YWluLCBidG4sIHN0YXRlLmxlZnRDb250YWluKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUubGVmdENvbnRhaW4sIHRoaXMuX2xlZnRQb3NpdG9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDkuqTmjaLmoYblhoXnmoTkvY3nva5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1ZGdlQ2hhbmdlUG9zSW5Cb3goZXZ0LnBvcywgc3RhdGUubGVmdENvbnRhaW4sIHRoaXMuX2xlZnRQb3NpdG9uLCBidG4sIHRoaXMuX2xlZnRDb250YWluLCBzdGF0ZS5jb2xsaWRlckJveCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOS7juWklumdouaLlui/m+adpeeahFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWFsQWxsQ29udGFpbkluKGZhbHNlLCBpc0NvbnRhaW5lclJpZ2h0LCBzdGF0ZSwgYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGVmdENvbnRhaW4ubGVuZ3RoIDwgdGhpcy5fY29udGFpbmVyVG90YWwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW4ucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9sZWZ0UG9zaXRvbltzdGF0ZS5sZWZ0Q29udGFpbi5sZW5ndGhdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9sZWZ0UG9zaXRvbltzdGF0ZS5sZWZ0Q29udGFpbi5sZW5ndGhdLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NJbmRleDogc3RhdGUubGVmdENvbnRhaW4ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sZWZ0Q29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9yaWdodFJlY3QuY29udGFpbnModGFyUG9zKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyUmlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZUlzTWluIHx8IHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGggPCAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5Yi35pawXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJEcmFnT2JqSW5Cb3godGhpcy5fcmlnaHRDb250YWluLCBidG4sIHN0YXRlLnJpZ2h0Q29udGFpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlLnJpZ2h0Q29udGFpbiwgdGhpcy5fcmlnaHRQb3NpdG9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqk5o2i5qGG5YaF55qE5L2N572uXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWRnZUNoYW5nZVBvc0luQm94KGV2dC5wb3MsIHN0YXRlLnJpZ2h0Q29udGFpbiwgdGhpcy5fcmlnaHRQb3NpdG9uLCBidG4sIHRoaXMuX3JpZ2h0Q29udGFpbiwgc3RhdGUuY29sbGlkZXJCb3gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWxBbGxDb250YWluSW4oaXNDb250YWluZXJMZWZ0LCBmYWxzZSwgc3RhdGUsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yaWdodENvbnRhaW4ucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9yaWdodFBvc2l0b25bc3RhdGUucmlnaHRDb250YWluLmxlbmd0aF0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX3JpZ2h0UG9zaXRvbltzdGF0ZS5yaWdodENvbnRhaW4ubGVuZ3RoXS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBidG4uZGF0YS5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zSW5kZXg6IHN0YXRlLnJpZ2h0Q29udGFpbi5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnJpZ2h0Q29udGFpbi5wdXNoKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWOn+S9jVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlLmNvbGxpZGVyQm94LCBidG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlYWxBbGxDb250YWluSW4oaXNDb250YWluZXJMZWZ0LCBpc0NvbnRhaW5lclJpZ2h0LCBzdGF0ZSwgYnRuKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEJ1dHRvbkluaXRQb3Moc3RhdGUuY29sbGlkZXJCb3gsIGJ0bik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkZWFsQWxsQ29udGFpbkluKGlzQ29udGFpbmVyTGVmdCwgaXNDb250YWluZXJSaWdodCwgc3RhdGUsIGJ0bikge1xyXG5cclxuICAgICAgICBpZiAoaXNDb250YWluZXJMZWZ0KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveCh0aGlzLl9sZWZ0Q29udGFpbiwgYnRuLCBzdGF0ZS5sZWZ0Q29udGFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZS5sZWZ0Q29udGFpbiwgdGhpcy5fbGVmdFBvc2l0b24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQ29udGFpbmVyUmlnaHQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ3VyRHJhZ09iakluQm94KHRoaXMuX3JpZ2h0Q29udGFpbiwgYnRuLCBzdGF0ZS5yaWdodENvbnRhaW4pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCb3hQb3Moc3RhdGUucmlnaHRDb250YWluLCB0aGlzLl9yaWdodFBvc2l0b24pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUganVkZ2VDaGFuZ2VQb3NJbkJveChjdXJQb3MsIHN0YXRlQ29udGFpbiwgcG9zQXJyLCBidG4sIGJveENvbnRhaW4sIHN0YXRlQ29sbGlkZXJCb3gpIHtcclxuXHJcbiAgICAgICAgbGV0IGNoYW5nZUluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IGNsaWNrSW5kZXggPSBidG4uZGF0YS5wb3NJbmRleDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDngrnlh7vnmoRJbmRleCA9PT09PT09PScgKyBidG4uZGF0YS5wb3NJbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCA+IDExMCAmJiBNYXRoLmFicyhjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSkgPCA1MCkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDlj7MgPT09PT09PT0nKTtcclxuICAgICAgICAgICAgLy/lj7NcclxuICAgICAgICAgICAgY2hhbmdlSW5kZXggPSBjbGlja0luZGV4ICsgMTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCA8IC0xMTAgJiYgTWF0aC5hYnMoY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkpIDwgNTApIHtcclxuXHJcbiAgICAgICAgICAgIC8v5bemXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaIg5bemID09PT09PT09Jyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCAtIDE7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkgPiAxMTAgJiYgTWF0aC5hYnMoY3VyUG9zLnggLSB0aGlzLl9sYXN0UG9zLngpIDwgNTApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIOS4iyA9PT09PT09PScpO1xyXG4gICAgICAgICAgICBjaGFuZ2VJbmRleCA9IGNsaWNrSW5kZXggKyAyO1xyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSA8IC0xMTAgJiYgTWF0aC5hYnMoY3VyUG9zLnggLSB0aGlzLl9sYXN0UG9zLngpIDwgNTApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIOS4iiA9PT09PT09PScpO1xyXG4gICAgICAgICAgICBjaGFuZ2VJbmRleCA9IGNsaWNrSW5kZXggLSAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VyUG9zLnggLSB0aGlzLl9sYXN0UG9zLnggPiAxMTAgJiYgY3VyUG9zLnkgLSB0aGlzLl9sYXN0UG9zLnkgPiAxMTApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOWPs+S4i1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIOWPs+S4iyA9PT09PT09PScpO1xyXG4gICAgICAgICAgICBjaGFuZ2VJbmRleCA9IGNsaWNrSW5kZXggKyAzO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGN1clBvcy54IC0gdGhpcy5fbGFzdFBvcy54KSA+IDUwICYmIGN1clBvcy54IC0gdGhpcy5fbGFzdFBvcy54IDwgMTEwICYmIGN1clBvcy55IC0gdGhpcy5fbGFzdFBvcy55ID4gMTEwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyDlt6bkuItcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDlt6bkuIsgPT09PT09PT0nKTtcclxuICAgICAgICAgICAgY2hhbmdlSW5kZXggPSBjbGlja0luZGV4ICsgMTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCA+IDExMCAmJiBjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSA8IDExMCAmJiBNYXRoLmFicyhjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSkgPiA1MCkge1xyXG4gICAgICAgICAgICAvLyDlj7PkuIpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+S6pOaNoiDlj7PkuIogPT09PT09PT0nKTtcclxuICAgICAgICAgICAgY2hhbmdlSW5kZXggPSBjbGlja0luZGV4IC0gMTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCA8IDExMCAmJiBjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSA8IDExMCAmJiBNYXRoLmFicyhjdXJQb3MueCAtIHRoaXMuX2xhc3RQb3MueCkgPiA1MCAmJiBNYXRoLmFicyhjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSkgPiA1MCkge1xyXG5cclxuICAgICAgICAgICAgLy8g5bem5LiKXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkuqTmjaIg5bem5LiKID09PT09PT09Jyk7XHJcbiAgICAgICAgICAgIGNoYW5nZUluZGV4ID0gY2xpY2tJbmRleCAtIDM7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iIFlZWVlZID09PT09PT09JyArIChjdXJQb3MueSAtIHRoaXMuX2xhc3RQb3MueSkpO1xyXG5cclxuICAgICAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlQ29sbGlkZXJCb3gsIGJ0bik7XHJcblxyXG4gICAgICAgICAgICAvL+WIoOmZpOW3pui+ueWMheWQq+eahO+8m+WIt+aWsFxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUN1ckRyYWdPYmpJbkJveChib3hDb250YWluLCBidG4sIHN0YXRlQ29udGFpbik7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJveFBvcyhzdGF0ZUNvbnRhaW4sIHBvc0Fycik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iaW5nIGNsaWNrSW5kZXggPT09PT09PT0gICcgKyBjbGlja0luZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZygn5Lqk5o2iaW5nIGNoYW5nZUluZGV4ID09PT09PT09ICAnICsgY2hhbmdlSW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoY2hhbmdlSW5kZXggPCAwIHx8IGNoYW5nZUluZGV4ID4gc3RhdGVDb250YWluLmxlbmd0aCAtIDEpIHtcclxuXHJcbiAgICAgICAgICAgIC8v5Yig6Zmk5bem6L655YyF5ZCr55qE77yb5b2S5L2N5Yiw5Y6f5p2l55qE5L2N572uXHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRCdXR0b25Jbml0UG9zKHN0YXRlQ29sbGlkZXJCb3gsIGJ0bik7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ3VyRHJhZ09iakluQm94KGJveENvbnRhaW4sIGJ0biwgc3RhdGVDb250YWluKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQm94UG9zKHN0YXRlQ29udGFpbiwgcG9zQXJyKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0ZW1wQ2xpY2tJbmRleCA9IHN0YXRlQ29udGFpbltjbGlja0luZGV4XS5pbmRleDtcclxuICAgICAgICBsZXQgdGVtcENoYW5nZUluZGV4ID0gc3RhdGVDb250YWluW2NoYW5nZUluZGV4XS5pbmRleDtcclxuXHJcbiAgICAgICAgc3RhdGVDb250YWluW2NsaWNrSW5kZXhdLmluZGV4ID0gdGVtcENoYW5nZUluZGV4O1xyXG4gICAgICAgIHN0YXRlQ29udGFpbltjaGFuZ2VJbmRleF0uaW5kZXggPSB0ZW1wQ2xpY2tJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0QnV0dG9uSW5pdFBvcyhzdGF0ZUNvbGxpZGVyQm94LCBidG4pIHtcclxuXHJcbiAgICAgICAgLy8g5oGi5aSN5Y6f5L2NXHJcbiAgICAgICAgbGV0IHRlbXAgPSB7XHJcbiAgICAgICAgICAgIHBvczpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgeDogYnRuLmRhdGEueCxcclxuICAgICAgICAgICAgICAgIHk6IGJ0bi5kYXRhLnlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5kZXg6IGJ0bi5kYXRhLmluZGV4LFxyXG4gICAgICAgICAgICBwb3NJbmRleDogLTFcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN0YXRlQ29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBqdWRnZURyYWdPYmpJbkJveChfYm94LCBjdXJCdXQpIHtcclxuXHJcbiAgICAgICAgbGV0IGlzQ29udGFpbmVyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfYm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoX2JveFtpXSA9PT0gY3VyQnV0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaXNDb250YWluZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpc0NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZUN1ckRyYWdPYmpJbkJveChfYm94LCBjdXJCdXQsIHN0YXRlQm94KSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX2JveC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKF9ib3hbaV0gPT09IGN1ckJ1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIF9ib3guc3BsaWNlKGksIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlQm94W2ldLmluZGV4ID09PSBjdXJCdXQuZGF0YS5pbmRleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVCb3guc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hCb3hQb3Moc3RhdGVDb250YWluLCBwb3NBcnIpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZUNvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlQ29udGFpbltpXS5wb3MueCA9IHBvc0FycltpXS54O1xyXG4gICAgICAgICAgICBzdGF0ZUNvbnRhaW5baV0ucG9zLnkgPSBwb3NBcnJbaV0ueTtcclxuICAgICAgICAgICAgc3RhdGVDb250YWluW2ldLnBvc0luZGV4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoQmcoYW5zd2VyKSB7XHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXIubGVuZ3RoID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9iZ2Rvb3IuZ2V0VHJhbnNpdGlvbignb3BlbjEnKS5wbGF5KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhbnN3ZXIubGVuZ3RoID09PSAyKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoYW5zd2VyWzBdID09PSB0aGlzLmFuc3dlclR5cGUuU0laRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlldy5nZXRDaGlsZChcImZpcnN0QW5zd2VyXCIpLmFzTG9hZGVyLnVybCA9IHRoaXMuX3RpU2hpU2l6ZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlldy5nZXRDaGlsZChcImZpcnN0QW5zd2VyXCIpLmFzTG9hZGVyLnVybCA9IHRoaXMuX3RpU2hpQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFuc3dlclsxXSA9PT0gdGhpcy5hbnN3ZXJUeXBlLlNJWkUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzZWNvbmRBbnN3ZXJcIikuYXNMb2FkZXIudXJsID0gdGhpcy5fdGlTaGlTaXplXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92aWV3LmdldENoaWxkKFwic2Vjb25kQW5zd2VyXCIpLmFzTG9hZGVyLnVybCA9IHRoaXMuX3RpU2hpQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N1Ym1pdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2JnZG9vci5nZXRUcmFuc2l0aW9uKCdvcGVuMicpLnBsYXkoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2sodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzaG93YmcxXCIpLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzaG93YmcyXCIpLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzaG93YmczXCIpLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJmaXJzdEFuc3dlclwiKS5zb3J0aW5nT3JkZXIgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3LmdldENoaWxkKFwic2Vjb25kQW5zd2VyXCIpLnNvcnRpbmdPcmRlciA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmQnV0RHJhZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hJbml0UGFuZWwoKSB7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJCb3ggPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLnlcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuX2NvbGxpZGVyQm94W2ldLmRhdGEuaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJCb3gucHVzaCh0ZW1wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2xlZnRDb250YWluID0gW107XHJcbiAgICAgICAgdGhpcy5fcmlnaHRDb250YWluID0gW107XHJcblxyXG4gICAgICAgIHN0YXRlLmxlZnRDb250YWluID0gW107XHJcbiAgICAgICAgc3RhdGUucmlnaHRDb250YWluID0gW107XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrVGl0bGUoZXZ0OiBhbnkpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuX2NsaWNrU291bmQsIGZhbHNlLCAxKTtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnRpdGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5VGl0bGUoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSBib29sID8gMSA6IDA7XHJcblxyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwodGhpcy5fdGl0bGVbXCJfc291bmRcIl0pO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDAgfHwgdGhpcy5fYW5zd2VyLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbGVmdENvbnRhaW4ubGVuZ3RoID09PSAwICYmIHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGggPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPj0gMikge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2xlZnRDb250YWluLmxlbmd0aCA8IHRoaXMuX2NvbnRhaW5lclRvdGFsIHx8IHRoaXMuX3JpZ2h0Q29udGFpbi5sZW5ndGggPCB0aGlzLl9jb250YWluZXJUb3RhbCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWJje+8mjEg5ZCO77yaMlxyXG4gICAgICAgIGxldCBpc1NhbWUxID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzU2FtZTIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2xlZnRDb250YWluWzBdLm5hbWVbMF0gPT09IHRoaXMuX2xlZnRDb250YWluWzFdLm5hbWVbMF0gJiZcclxuICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVswXSA9PT0gdGhpcy5fbGVmdENvbnRhaW5bMl0ubmFtZVswXSAmJlxyXG4gICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpblswXS5uYW1lWzBdID09PSB0aGlzLl9sZWZ0Q29udGFpblszXS5uYW1lWzBdKSB7XHJcblxyXG4gICAgICAgICAgICBpc1NhbWUxID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5bMF0ubmFtZVsxXSA9PT0gdGhpcy5fbGVmdENvbnRhaW5bMV0ubmFtZVsxXSAmJlxyXG4gICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpblswXS5uYW1lWzFdID09PSB0aGlzLl9sZWZ0Q29udGFpblsyXS5uYW1lWzFdICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2xlZnRDb250YWluWzBdLm5hbWVbMV0gPT09IHRoaXMuX2xlZnRDb250YWluWzNdLm5hbWVbMV0pIHtcclxuXHJcbiAgICAgICAgICAgIGlzU2FtZTIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzU2FtZTEpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOWbnuetlCBpc1NhbWUxID09PT0nKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYW5zd2VyLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Fuc3dlcltpXSA9PSB0aGlzLmFuc3dlclR5cGUuU0laRSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlZnJlc2hJbml0UGFuZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Fuc3dlci5wdXNoKHRoaXMuYW5zd2VyVHlwZS5TSVpFKTsgLy/lpKflsI9cclxuICAgICAgICAgICAgc3RhdGUuYW5zd2VyID0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgICAgICB0aGlzLl90aVNoaVNob3cgPSB0aGlzLnRpU2hpU2hvd1R5cGUuU2l6ZTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmFuc3dlci5sZW5ndGggPj0gMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3RpU2hpU2hvdyA9IHRoaXMudGlTaGlTaG93VHlwZS5GaW5pc2g7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1NhbWUyKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PSDlm57nrZQgaXNTYW1lMiA9PT09Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2Fuc3dlci5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbnN3ZXJbaV0gPT0gdGhpcy5hbnN3ZXJUeXBlLkNPTE9VUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVmcmVzaEluaXRQYW5lbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fYW5zd2VyLnB1c2godGhpcy5hbnN3ZXJUeXBlLkNPTE9VUik7IC8v6aKc6ImyXHJcbiAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICAgICAgdGhpcy5fdGlTaGlTaG93ID0gdGhpcy50aVNoaVNob3dUeXBlLkNvbG9yO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuYW5zd2VyLmxlbmd0aCA+PSAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdGlTaGlTaG93ID0gdGhpcy50aVNoaVNob3dUeXBlLkZpbmlzaDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09IOWbnuetlOmUmeivryA9PT09Jyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2Fuc3dlci5sZW5ndGggPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyQm94ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtpXS5kYXRhLnlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5fY29sbGlkZXJCb3hbaV0uZGF0YS5pbmRleFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyQm94LnB1c2godGVtcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xlZnRDb250YWluID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2h0Q29udGFpbiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUubGVmdENvbnRhaW4gPSBbXTtcclxuICAgICAgICAgICAgc3RhdGUucmlnaHRDb250YWluID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5hbnN3ZXIsIHN0YXRlLmFuc3dlcikpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJnKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkhhbmRsZUd1aWRlKHRoaXMuaGFuZGxlR3VpZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmNvbGxpZGVyQm94LCBzdGF0ZS5jb2xsaWRlckJveCkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvbGxpZGVyQm94Lmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJCb3hbaV0uaW5kZXhdLnggPSBzdGF0ZS5jb2xsaWRlckJveFtpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVyQm94W2ldLmluZGV4XS55ID0gc3RhdGUuY29sbGlkZXJCb3hbaV0ucG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckJveFtpXS5pbmRleF0uZGF0YS5wb3NJbmRleCA9IC0xO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUubGVmdENvbnRhaW4sIHN0YXRlLmxlZnRDb250YWluKSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZWZ0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUubGVmdENvbnRhaW5baV0uaW5kZXhdLnggPSBzdGF0ZS5sZWZ0Q29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmxlZnRDb250YWluW2ldLmluZGV4XS55ID0gc3RhdGUubGVmdENvbnRhaW5baV0ucG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5sZWZ0Q29udGFpbltpXS5pbmRleF0uZGF0YS5wb3NJbmRleCA9IHN0YXRlLmxlZnRDb250YWluW2ldLnBvc0luZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnJpZ2h0Q29udGFpbiwgc3RhdGUucmlnaHRDb250YWluKSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5yaWdodENvbnRhaW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLnJpZ2h0Q29udGFpbltpXS5pbmRleF0ueCA9IHN0YXRlLnJpZ2h0Q29udGFpbltpXS5wb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLnJpZ2h0Q29udGFpbltpXS5pbmRleF0ueSA9IHN0YXRlLnJpZ2h0Q29udGFpbltpXS5wb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLnJpZ2h0Q29udGFpbltpXS5pbmRleF0uZGF0YS5wb3NJbmRleCA9IHN0YXRlLnJpZ2h0Q29udGFpbltpXS5wb3NJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVRpdGxlKHN0YXRlLnRpdGxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5mZWVkYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZmVlZGJhY2suZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBpZiAoYm9vbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSB0aGlzLl90aVNoaVNob3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmQnV0RHJhZygpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZWZ0Q29udGFpbi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fbGVmdENvbnRhaW5baV0uZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcmlnaHRDb250YWluLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sZWZ0Q29udGFpbltpXS5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSh0aGlzLmRyYWdTY2hlZHVsZSwgdGhpcy5fc2NoZWR1bGVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19