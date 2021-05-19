
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model03-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f16fRyLKlMTrYGR9nh/Pf7', 'dragAnswer-model03-v1');
// prefabLibrary/models/dragAnswer/dragAnswer-model03-v1.ts

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
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 15:25:58
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var dragAnswer_model03_v1 = /** @class */ (function (_super) {
    __extends(dragAnswer_model03_v1, _super);
    function dragAnswer_model03_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colliderBox = [];
        _this._collideredBox = [];
        _this._cache = {};
        _this._scheduleTime = .3;
        _this._dragging = false;
        _this._answer = 0;
        _this._dragIconArr = [];
        _this._footNum = [];
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
        var s = this;
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
        s.createUI();
        s.addEvent();
        /* let dragIconsPosArr = [];
        s.pageData.model.config.dragIcon.foreach(v => {
            dragIconsPosArr.push({ x: v.x, y: v.y });
        }) */
        // 初始化state
        this._state = {
            drag: "end",
            /* dragIconArr: s._dragIconArr.map(v => v),
            dragIconIndex: null, */
            getDropArr: [],
            collider: this._cache["colliderBox"].map(function (v) { return v; }),
            colliderIndex: null,
            collidered: this._cache["collideredBox"].map(function (v) { return v; }),
            dropArr: [],
            // dragIconsPosArr: dragIconsPosArr,
            title: false,
            submit: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    dragAnswer_model03_v1.prototype.createUI = function () {
        var s = this;
        this._submit = this._view.getChild("submit").asButton;
        if (this._submit)
            this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        var colliderGroup = this._view.getChild("colliderBox").asGroup;
        var collideredGroup = this._view.getChild("collideredBox").asGroup;
        s._cache["colliderBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (s._view.getChildAt(i).group == colliderGroup) {
                var btn = this._view.getChildAt(i).asButton;
                s._cache['colliderBox'].push({ x: btn.x, y: btn.y, belong: null });
                btn['collideredIndex'] = -1;
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }
        // console.log('this._colliderBox', this._colliderBox);
        s._cache["collideredBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                var btn = this._view.getChildAt(i).asImage;
                s._cache['collideredBox'].push([]);
                this._collideredBox.push(btn);
            }
        }
        // console.log('this._collideredBox', this._collideredBox);
        /* s.dropBox = fgui.UIPackage.createObject('t4-trialClass-01', 'TypeDropBox1').asCom;
        s.dropBox.x = 368;
        s.dropBox.y = 600;
        s._view.addChild(s.dropBox);

        s.dragBox = fgui.UIPackage.createObject('t4-trialClass-01', 'TypeDragBox1').asCom;
        s.dragBox.x = 610;
        s.dragBox.y = 250;
        s._view.addChild(s.dragBox); */
        // s.dropBox = s._view.getChild('dropBox').asCom;
        // s.dragBox = s._view.getChild('dragBox').asCom;
        // let dragIcon = s.pageData.model.config.dragIcon;
        /* for (let key in dragIcon) {
            let dragIconData = dragIcon[key];
            let icon = new fgui.GComponent();
            let iconImg = fgui.UIPackage.createObject('t4-trialClass-01', dragIconData.name).asImage;
            icon.addChild(iconImg);
            icon.setSize(iconImg.width, iconImg.height);
            // icon.setPivot(0.5,0.5,true);
            icon.opaque = true;
            icon.x = dragIconData.x;
            icon.y = dragIconData.y;
            icon['dragOrigin'] = this.getOriginValue(icon);
            console.log('icon = ', icon['dragOrigin']);

            // icon.touchable = true;
            icon.draggable = true;

            icon.on(fgui.Event.TOUCH_BEGIN, s._onDragStart, s);
            icon.on(fgui.Event.TOUCH_MOVE, s._onDragMove, s);
            icon.on(fgui.Event.TOUCH_END, s._onDragEnd, s);

            // icon.on(cc.Node.EventType.TOUCH_START, s._onDragStart, s);

            s.dragBox.addChild(icon);
            s._dragIconArr.push(icon);
        } */
    };
    dragAnswer_model03_v1.prototype.addEvent = function () {
        // let s = this;
        // s._submitBtn.on(fgui.Event.CLICK, s._clickSubmit, s);
        // s._readTitleBtn.on(fgui.Event.CLICK, s._clickTitle, s);
    };
    dragAnswer_model03_v1.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var s, pathConfig, model, components, Package, GComponent, _a, answer, ae, dragIcon, v, key, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        s = this;
                        s.pageData = data;
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        GComponent = model.uiPath;
                        _a = model.config, answer = _a.answer, ae = _a.ae, dragIcon = _a.dragIcon;
                        if (model.uiPath) {
                            GComponent = model.uiPath;
                            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                        }
                        /* s._readTitleBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'TitleCom').asCom;
                
                        (s._readTitleBtn.getChild('title') as fgui.GLoader).url = fgui.UIPackage.createObject('t4-trialClass-01', 'title_3').asImage.resourceURL;
                        s._readTitleBtn.x = 20;
                        s._readTitleBtn.y = 50;
                        this._view.addChild(s._readTitleBtn);
                
                
                        s._submitBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'SubmitBtn').asCom;
                        s._submitBtn.x = 1676;
                        s._submitBtn.y = 806;
                        this._view.addChild(s._submitBtn); */
                        if (model.config) {
                            // if (answer) this._answer = answer;
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
                            if (answer)
                                s._answer = answer;
                            if (dragIcon) {
                                for (key in dragIcon) {
                                    s._footNum.push(dragIcon[key].footNum);
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
    dragAnswer_model03_v1.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    // private _curDragIcon: cc.Node = null;
    // private _offsetPos: cc.Vec2 = new cc.Vec2();
    dragAnswer_model03_v1.prototype._onDragStart = function (evt) {
        var s = this;
        // evt.captureTouch();
        /* s._curDragIcon = evt.currentTarget;
        console.log('_onDragStart');
        console.log(s._curDragIcon);
        console.log(s._curDragIcon.y);

        let pos = s._curDragIcon.parent.convertToNodeSpaceAR(evt.getLocation());
        s._offsetPos.x = pos.x - s._curDragIcon.x;
        s._offsetPos.y = pos.y - s._curDragIcon.y;

        s._view.on(cc.Node.EventType.TOUCH_MOVE, s._onDragMove, s);
        s._curDragIcon.once(cc.Node.EventType.TOUCH_END, s._onDragEnd, s); */
        // s._curDragIcon.draggable = true;
        var collider = fgui.GObject.cast(evt.currentTarget);
        s._view.setChildIndex(collider, s._view.numChildren - 1);
        var colliderIndex = s._colliderBox.findIndex(function (v) { return v == collider; });
        var state = globalThis._.cloneDeep(s._state);
        state.colliderIndex = colliderIndex;
        s.updateState(state);
        // state.drag = "start";
        // state.curDragIcon = s._curDragIcon;
        /* state.curDragIconsPos = {
            x: s._curDragIcon['$gobj']["dragOrigin"].x,
            y: s._curDragIcon['$gobj']["dragOrigin"].y,
        }; */
        // state.answer = state.drops === s._answer;
    };
    dragAnswer_model03_v1.prototype._onDragMove = function (evt) {
        var s = this;
        // console.log('_onDragMove');
        // if (!s._curDragIcon) return;
        s._dragging = true;
        // let pos = s._curDragIcon.parent.convertToNodeSpaceAR(evt.getLocation());
        // s._curDragIcon.x = pos.x - s._offsetPos.x;
        // s._curDragIcon.y = pos.y - s._offsetPos.y;
        // console.log(s._curDragIcon.x + ' - ' + s._curDragIcon.y);
    };
    // private dropArr = [];
    dragAnswer_model03_v1.prototype._onDragEnd = function (evt) {
        var _this = this;
        var s = this;
        if (!this._dragging)
            return;
        this._dragging = false;
        var collider = fgui.GObject.cast(evt.currentTarget);
        var colliderIndex = this._colliderBox.findIndex(function (v) { return v == collider; });
        var arr = [];
        var collidered;
        this._collideredBox.forEach(function (v, i) {
            // if (this._belongArea(collider, v, 500) == true) arr.push(v);
            if (s.isCollisionWithRect(v, collider))
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
        // 放置区索引，定位到放入了那个放置区
        var collideredIndex = this._collideredBox.findIndex(function (v) { return v == collidered; });
        var state = globalThis._.cloneDeep(this._state);
        var sss = globalThis._.cloneDeep(state);
        // let state = JSON.parse(JSON.stringify(this._state))
        console.log('origin state = ', this._state.dropArr); // right
        console.log('clone state = ', state.dropArr); //rihgt
        console.log('sss = ', sss.dropArr); //wrong
        // dropArr = state.collidered[collideredIndex].map(v => v);
        // console.warn('state.dropArr[0] = ', state.dropArr);
        // let dropArr = JSON.parse(JSON.stringify(state.dropArr));
        var dropArr = state.dropArr;
        // console.error('s.dropArr11111111111111 = ', dropArr);
        var name = collider.name;
        // let dropArrIndex = dropArr.indexOf(data);//放置区是否已包含当前拖拽元素
        var dropArrIndex = dropArr.findIndex(function (v) { return v.name == name; }); //放置区是否已包含当前拖拽元素
        console.warn('dropArrIndex = ', dropArrIndex);
        // 1.重置位置 重置到
        // 2.放入放置区
        if (collideredIndex == -1 || dropArr.length == 6) {
            // reset
            // console.log('reset');
            if (dropArrIndex > -1) {
                dropArr.splice(dropArrIndex, 1);
            }
            state.collider[colliderIndex] = {
                x: this._cache["colliderBox"][colliderIndex].x,
                y: this._cache["colliderBox"][colliderIndex].y
            };
            if (collider.collideredIndex > -1) {
                collideredIndex = collider.collideredIndex;
            }
            else {
                collideredIndex = 0;
            }
        }
        else {
            if (dropArrIndex == -1) {
                // dropArr.push(JSON.parse(JSON.stringify(collider)));
                dropArr.push({ 'name': collider.name });
                // console.warn('pushhhhhhhhhh',dropArr);
            }
        }
        // dropArr.push({ name: collider.name });
        // console.warn('pushhhhhhhhhh',dropArr);
        var footNum = 0;
        var _loop_1 = function (i) {
            var item = dropArr[i];
            // let itemIndex = s._colliderBox.indexOf(item);//状态池中的index
            var itemIndex = s._colliderBox.findIndex(function (v) { return v.name == item.name; }); //状态池中的index
            var pos = new cc.Vec2();
            if (item.name.indexOf('left') > -1) {
                pos.x = s._collideredBox[collideredIndex].x + 150 + 200 * i;
                pos.y = s._collideredBox[collideredIndex].y + 200 + 85;
                footNum += s._footNum[0];
            }
            else if (item.name.indexOf('right') > -1) {
                pos.x = s._collideredBox[collideredIndex].x + 150 + 200 * i;
                pos.y = s._collideredBox[collideredIndex].y + 200;
                footNum += s._footNum[1];
            }
            state.collider[itemIndex] = {
                x: pos.x,
                y: pos.y,
                belong: collideredIndex
            };
        };
        for (var i = 0; i < dropArr.length; i++) {
            _loop_1(i);
        }
        collider.collideredIndex = collideredIndex;
        state.drag = "end";
        state.submit = false;
        state.colliderIndex = colliderIndex;
        // state.collidered[collideredIndex] = dropArr.concat([]);
        console.log('给state赋值前的', dropArr);
        state.dropArr = dropArr;
        console.warn('赋值后的', state.dropArr);
        state.answer = footNum == s._answer ? true : false;
        s.updateState(state);
        // s._curDragIcon = null;
        console.log('------------------------------------------------');
    };
    dragAnswer_model03_v1.prototype._getDistance = function (self, area) {
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance;
    };
    /**
     * 矩形碰撞
     * @param rect1
     * @param rect2
     * @returns
     */
    dragAnswer_model03_v1.prototype.isCollisionWithRect = function (rect1, rect2) {
        if (rect1.x >= rect2.x && rect1.x >= rect2.x + rect2.width) {
            return false;
        }
        else if (rect1.x <= rect2.x && rect1.x + rect1.width <= rect2.x) {
            return false;
        }
        else if (rect1.y >= rect2.y && rect1.y >= rect2.y + rect2.height) {
            return false;
        }
        else if (rect1.y <= rect2.y && rect1.y + rect1.height <= rect2.y) {
            return false;
        }
        return true;
    };
    dragAnswer_model03_v1.prototype._belongArea = function (self, area, gap) {
        if (gap === void 0) { gap = 10; }
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance < gap;
    };
    dragAnswer_model03_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model03_v1.prototype._clickSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                state = globalThis._.cloneDeep(this._state);
                // state.answer = state.drops === this._answer;
                state.submit = true;
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
        // console.log('old = ', this._state);
        // console.log('new = ', curState);
        // console.log('updateState ', globalThis._.isEqual(this._state, curState));
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model03_v1.prototype.updateUi = function (oldState, state) {
        var s = this;
        // console.log('updateUi = ', state);
        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
            // state.curDragIcon.x = state.curDragIconsPos.x;
            // state.curDragIcon.y = state.curDragIconsPos.y;
        }
        if (state.drag == "end") {
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                console.log('endddddddddd update ui', state);
                for (var i = 0; i < state.collider.length; i++) {
                    this._colliderBox[i].x = state.collider[i].x;
                    this._colliderBox[i].y = state.collider[i].y;
                }
            }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                console.log('submittttttt');
                if (state.submit) {
                    // if (state.drops) {
                    this.answerFeedback(state.answer);
                    // } else {
                    //     this.onHandleGuide();
                    // }
                }
            }
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }
            /* if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    let nv: any = this._colliderBox.map((v: any) => { return { "x": v.x, "y": v.y } });
                    let bool: boolean = this._cache["colliderBox"].every((v: any, i: any) => v.x == nv[i].x && v.y == nv[i].y);
                    bool ? this.onHandleGuide() : this.onFlicker(state.answer);
                }
            } */
        }
    };
    dragAnswer_model03_v1.prototype.playTitle = function (bool) {
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
    dragAnswer_model03_v1.prototype.answerFeedback = function (bool) {
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
    /* onLibraHint() {
        if (!this.lineBlink) return;
        fgui.GRoot.inst.addChild(this.lineBlink.component);
        if (this.lineBlink.pos) {
            this.lineBlink.component.x = (fgui.GRoot.inst.width - this.lineBlink.component.width) / 2 + this.lineBlink.pos.x;
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2 + this.lineBlink.pos.y;
        } else {
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2;
        }

        let t: fgui.Transition = this.lineBlink.component.getTransition("t0");
        t.play(() => {
            fgui.GRoot.inst.removeChild(this.lineBlink.component);
        });
    } */
    // 操作提示
    dragAnswer_model03_v1.prototype.onHandleGuide = function () {
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
    // 消除禁止
    dragAnswer_model03_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model03_v1.prototype.dragSchedule = function () {
        var s = this;
        if (s._dragging) {
            var state = globalThis._.cloneDeep(s._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
            };
            s.updateState(state);
            /* state.curDragIconsPos = {
                x: s._curDragIcon.x,
                y: s._curDragIcon.y,
            }; */
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
        this.schedule(this.dragSchedule, this._scheduleTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDMtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQWdwQkM7UUF4bkJXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBR3hCLFlBQU0sR0FBUSxFQUFFLENBQUM7O0lBMm1CN0IsQ0FBQztJQXptQkcsc0JBQUksd0NBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxD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LHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBZ3BCekM7SUFBRCw0QkFBQztDQWhwQkQsQUFncEJDLENBaHBCa0QsRUFBRSxDQUFDLFNBQVMsR0FncEI5RDtrQkFocEJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJhZ0Fuc3dlck1vZGVsMDNCYXNlIGZyb20gXCIuL0RyYWdBbnN3ZXJNb2RlbDAzQmFzZVwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wMy0yNiAxODowNToxMlxyXG4gKiBATGFzdEVkaXRvcnM6IFBsZWFzZSBzZXQgTGFzdEVkaXRvcnNcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xNyAxNToyNTo1OFxyXG4gKi9cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuY29uc3QgeyBwb2ludEJlbG9uZ0FyZWEgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRyYWdBbnN3ZXJfbW9kZWwwM192MSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF93b3JsZFJvb3Q6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIF9jMTogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBfYzI6IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcml2YXRlIF9kcmFnQnRuOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF9idG5Cb3g6IGZndWkuR0J1dHRvbjtcclxuXHJcbiAgICBwcml2YXRlIGRyYWdCb3g6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZHJvcEJveDogZmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHdWlkZTogYW55O1xyXG4gICAgcHJpdmF0ZSBsaW5lQmxpbms6IGFueTtcclxuXHJcbiAgICAvLyDov5znqIvliqjmgIHnu4Tku7ZcclxuICAgIHByaXZhdGUgZmVlZGJhY2s6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJlZEJveCA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2NhY2hlID0ge307XHJcbiAgICBwcml2YXRlIF9zY2hlZHVsZVRpbWUgPSAuMztcclxuICAgIHByaXZhdGUgX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfYW5zd2VyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9kcmFnSWNvbkFyciA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfZm9vdE51bTogbnVtYmVyW10gPSBbXTtcclxuICAgIHB1YmxpYyBwYWdlRGF0YTogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICB0aGlzLl93b3JsZFJvb3QgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLl92aWV3LndpZHRoKSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcbiAgICAgICAgLy8g6Ieo5pmCXHJcbiAgICAgICAgLy8gYnVnIOWIneWni+iuvue9ruS4jeaSreaUvuS4jeeUn+aViFxyXG4gICAgICAgIGlmICh0aGlzLl9jMikge1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzLmNyZWF0ZVVJKCk7XHJcbiAgICAgICAgcy5hZGRFdmVudCgpO1xyXG5cclxuICAgICAgICAvKiBsZXQgZHJhZ0ljb25zUG9zQXJyID0gW107XHJcbiAgICAgICAgcy5wYWdlRGF0YS5tb2RlbC5jb25maWcuZHJhZ0ljb24uZm9yZWFjaCh2ID0+IHtcclxuICAgICAgICAgICAgZHJhZ0ljb25zUG9zQXJyLnB1c2goeyB4OiB2LngsIHk6IHYueSB9KTtcclxuICAgICAgICB9KSAqL1xyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyYWc6IFwiZW5kXCIsXHJcbiAgICAgICAgICAgIC8qIGRyYWdJY29uQXJyOiBzLl9kcmFnSWNvbkFyci5tYXAodiA9PiB2KSxcclxuICAgICAgICAgICAgZHJhZ0ljb25JbmRleDogbnVsbCwgKi9cclxuICAgICAgICAgICAgZ2V0RHJvcEFycjogW10sXHJcbiAgICAgICAgICAgIGNvbGxpZGVyOiB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLm1hcCgodjogYW55KSA9PiB2KSwvL+aLluaLveeJqeeahOS9jee9ruaVsOe7hFxyXG4gICAgICAgICAgICBjb2xsaWRlckluZGV4OiBudWxsLC8v5b2T5YmN5ouW5ou954mp5Zyo5pWw57uE5YaF55qE57Si5byVXHJcbiAgICAgICAgICAgIGNvbGxpZGVyZWQ6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJlZEJveFwiXS5tYXAoKHY6IGFueSkgPT4gdiksLy/kuoznu7TmlbDnu4TvvIzlrZjmlL7mr4/kuKrmlL7nva7ljLrlr7nlupTnmoTooqvmlL7nva7lhYPntKBcclxuICAgICAgICAgICAgZHJvcEFycjogW10sXHJcbiAgICAgICAgICAgIC8vIGRyYWdJY29uc1Bvc0FycjogZHJhZ0ljb25zUG9zQXJyLFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuc3dlcjogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlckdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWRHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlcmVkQm94XCIpLmFzR3JvdXA7XHJcblxyXG4gICAgICAgIHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG46IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIHMuX2NhY2hlWydjb2xsaWRlckJveCddLnB1c2goeyB4OiBidG4ueCwgeTogYnRuLnksIGJlbG9uZzogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIGJ0blsnY29sbGlkZXJlZEluZGV4J10gPSAtMTtcclxuICAgICAgICAgICAgICAgIGJ0bi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCB0aGlzLl9vbkRyYWdFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3gucHVzaChidG4pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5fY29sbGlkZXJCb3gnLCB0aGlzLl9jb2xsaWRlckJveCk7XHJcblxyXG5cclxuICAgICAgICBzLl9jYWNoZVtcImNvbGxpZGVyZWRCb3hcIl0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyZWRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjogZmd1aS5HSW1hZ2UgPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNJbWFnZTtcclxuICAgICAgICAgICAgICAgIHMuX2NhY2hlWydjb2xsaWRlcmVkQm94J10ucHVzaChbXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlcmVkQm94LnB1c2goYnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5fY29sbGlkZXJlZEJveCcsIHRoaXMuX2NvbGxpZGVyZWRCb3gpO1xyXG5cclxuXHJcbiAgICAgICAgLyogcy5kcm9wQm94ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgJ1R5cGVEcm9wQm94MScpLmFzQ29tO1xyXG4gICAgICAgIHMuZHJvcEJveC54ID0gMzY4O1xyXG4gICAgICAgIHMuZHJvcEJveC55ID0gNjAwO1xyXG4gICAgICAgIHMuX3ZpZXcuYWRkQ2hpbGQocy5kcm9wQm94KTtcclxuXHJcbiAgICAgICAgcy5kcmFnQm94ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgJ1R5cGVEcmFnQm94MScpLmFzQ29tO1xyXG4gICAgICAgIHMuZHJhZ0JveC54ID0gNjEwO1xyXG4gICAgICAgIHMuZHJhZ0JveC55ID0gMjUwO1xyXG4gICAgICAgIHMuX3ZpZXcuYWRkQ2hpbGQocy5kcmFnQm94KTsgKi9cclxuICAgICAgICAvLyBzLmRyb3BCb3ggPSBzLl92aWV3LmdldENoaWxkKCdkcm9wQm94JykuYXNDb207XHJcbiAgICAgICAgLy8gcy5kcmFnQm94ID0gcy5fdmlldy5nZXRDaGlsZCgnZHJhZ0JveCcpLmFzQ29tO1xyXG5cclxuICAgICAgICAvLyBsZXQgZHJhZ0ljb24gPSBzLnBhZ2VEYXRhLm1vZGVsLmNvbmZpZy5kcmFnSWNvbjtcclxuICAgICAgICAvKiBmb3IgKGxldCBrZXkgaW4gZHJhZ0ljb24pIHtcclxuICAgICAgICAgICAgbGV0IGRyYWdJY29uRGF0YSA9IGRyYWdJY29uW2tleV07XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gbmV3IGZndWkuR0NvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICBsZXQgaWNvbkltZyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdCgndDQtdHJpYWxDbGFzcy0wMScsIGRyYWdJY29uRGF0YS5uYW1lKS5hc0ltYWdlO1xyXG4gICAgICAgICAgICBpY29uLmFkZENoaWxkKGljb25JbWcpO1xyXG4gICAgICAgICAgICBpY29uLnNldFNpemUoaWNvbkltZy53aWR0aCwgaWNvbkltZy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyBpY29uLnNldFBpdm90KDAuNSwwLjUsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGljb24ub3BhcXVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWNvbi54ID0gZHJhZ0ljb25EYXRhLng7XHJcbiAgICAgICAgICAgIGljb24ueSA9IGRyYWdJY29uRGF0YS55O1xyXG4gICAgICAgICAgICBpY29uWydkcmFnT3JpZ2luJ10gPSB0aGlzLmdldE9yaWdpblZhbHVlKGljb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWNvbiA9ICcsIGljb25bJ2RyYWdPcmlnaW4nXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpY29uLnRvdWNoYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGljb24uZHJhZ2dhYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGljb24ub24oZmd1aS5FdmVudC5UT1VDSF9CRUdJTiwgcy5fb25EcmFnU3RhcnQsIHMpO1xyXG4gICAgICAgICAgICBpY29uLm9uKGZndWkuRXZlbnQuVE9VQ0hfTU9WRSwgcy5fb25EcmFnTW92ZSwgcyk7XHJcbiAgICAgICAgICAgIGljb24ub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHMuX29uRHJhZ0VuZCwgcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBpY29uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBzLl9vbkRyYWdTdGFydCwgcyk7XHJcblxyXG4gICAgICAgICAgICBzLmRyYWdCb3guYWRkQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgICAgIHMuX2RyYWdJY29uQXJyLnB1c2goaWNvbik7XHJcbiAgICAgICAgfSAqL1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50KCkge1xyXG4gICAgICAgIC8vIGxldCBzID0gdGhpcztcclxuICAgICAgICAvLyBzLl9zdWJtaXRCdG4ub24oZmd1aS5FdmVudC5DTElDSywgcy5fY2xpY2tTdWJtaXQsIHMpO1xyXG4gICAgICAgIC8vIHMuX3JlYWRUaXRsZUJ0bi5vbihmZ3VpLkV2ZW50LkNMSUNLLCBzLl9jbGlja1RpdGxlLCBzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBzLnBhZ2VEYXRhID0gZGF0YTtcclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcbiAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSwgZHJhZ0ljb24gfSA9IG1vZGVsLmNvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLnVpUGF0aCkge1xyXG4gICAgICAgICAgICBHQ29tcG9uZW50ID0gbW9kZWwudWlQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogcy5fcmVhZFRpdGxlQnRuID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgJ1RpdGxlQ29tJykuYXNDb207XHJcblxyXG4gICAgICAgIChzLl9yZWFkVGl0bGVCdG4uZ2V0Q2hpbGQoJ3RpdGxlJykgYXMgZmd1aS5HTG9hZGVyKS51cmwgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAndGl0bGVfMycpLmFzSW1hZ2UucmVzb3VyY2VVUkw7XHJcbiAgICAgICAgcy5fcmVhZFRpdGxlQnRuLnggPSAyMDtcclxuICAgICAgICBzLl9yZWFkVGl0bGVCdG4ueSA9IDUwO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcuYWRkQ2hpbGQocy5fcmVhZFRpdGxlQnRuKTtcclxuXHJcblxyXG4gICAgICAgIHMuX3N1Ym1pdEJ0biA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdCgndDQtdHJpYWxDbGFzcy0wMScsICdTdWJtaXRCdG4nKS5hc0NvbTtcclxuICAgICAgICBzLl9zdWJtaXRCdG4ueCA9IDE2NzY7XHJcbiAgICAgICAgcy5fc3VibWl0QnRuLnkgPSA4MDY7XHJcbiAgICAgICAgdGhpcy5fdmlldy5hZGRDaGlsZChzLl9zdWJtaXRCdG4pOyAqL1xyXG5cclxuICAgICAgICBpZiAobW9kZWwuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChhbnN3ZXIpIHRoaXMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICAgICAgLy8g5Yqo5pWI5rOo5YaMXHJcbiAgICAgICAgICAgIGlmIChhZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdiBpbiBhZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XS5jb21wb25lbnQpIHRoaXNbdl0uY29tcG9uZW50ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIGFlW3ZdLmNvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZVt2XS5wb3MpIHRoaXNbdl0ucG9zID0gYWVbdl0ucG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYW5zd2VyKSBzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgICAgIGlmIChkcmFnSWNvbikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGRyYWdJY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5fZm9vdE51bS5wdXNoKGRyYWdJY29uW2tleV0uZm9vdE51bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQYXRoOiBhbnkgPSBgJHtwYXRoQ29uZmlnLnJlbW90ZVVybH0ke3BhdGhDb25maWcuY29tcG9uZW50QnVuZGxlUGF0aH0ke2NvbXBvbmVudHNba2V5XS5idW5kbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50QnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbXBvbmVudFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb21wb25lbnRCdW5kbGUsIGNvbXBvbmVudHNba2V5XS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbXBvbmVudFByZWZhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmlnaW5WYWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB2LngsXHJcbiAgICAgICAgICAgIHk6IHYueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIF9jdXJEcmFnSWNvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIF9vZmZzZXRQb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigpO1xyXG4gICAgcHJpdmF0ZSBfb25EcmFnU3RhcnQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIC8vIGV2dC5jYXB0dXJlVG91Y2goKTtcclxuICAgICAgICAvKiBzLl9jdXJEcmFnSWNvbiA9IGV2dC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdfb25EcmFnU3RhcnQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzLl9jdXJEcmFnSWNvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocy5fY3VyRHJhZ0ljb24ueSk7XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSBzLl9jdXJEcmFnSWNvbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZ0LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHMuX29mZnNldFBvcy54ID0gcG9zLnggLSBzLl9jdXJEcmFnSWNvbi54O1xyXG4gICAgICAgIHMuX29mZnNldFBvcy55ID0gcG9zLnkgLSBzLl9jdXJEcmFnSWNvbi55O1xyXG5cclxuICAgICAgICBzLl92aWV3Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHMuX29uRHJhZ01vdmUsIHMpO1xyXG4gICAgICAgIHMuX2N1ckRyYWdJY29uLm9uY2UoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBzLl9vbkRyYWdFbmQsIHMpOyAqL1xyXG4gICAgICAgIC8vIHMuX2N1ckRyYWdJY29uLmRyYWdnYWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlciA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBzLl92aWV3LnNldENoaWxkSW5kZXgoY29sbGlkZXIsIHMuX3ZpZXcubnVtQ2hpbGRyZW4gLSAxKTtcclxuICAgICAgICBsZXQgY29sbGlkZXJJbmRleCA9IHMuX2NvbGxpZGVyQm94LmZpbmRJbmRleCh2ID0+IHYgPT0gY29sbGlkZXIpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAocy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVySW5kZXggPSBjb2xsaWRlckluZGV4O1xyXG4gICAgICAgIHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIC8vIHN0YXRlLmRyYWcgPSBcInN0YXJ0XCI7XHJcbiAgICAgICAgLy8gc3RhdGUuY3VyRHJhZ0ljb24gPSBzLl9jdXJEcmFnSWNvbjtcclxuICAgICAgICAvKiBzdGF0ZS5jdXJEcmFnSWNvbnNQb3MgPSB7XHJcbiAgICAgICAgICAgIHg6IHMuX2N1ckRyYWdJY29uWyckZ29iaiddW1wiZHJhZ09yaWdpblwiXS54LFxyXG4gICAgICAgICAgICB5OiBzLl9jdXJEcmFnSWNvblsnJGdvYmonXVtcImRyYWdPcmlnaW5cIl0ueSxcclxuICAgICAgICB9OyAqL1xyXG4gICAgICAgIC8vIHN0YXRlLmFuc3dlciA9IHN0YXRlLmRyb3BzID09PSBzLl9hbnN3ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnTW92ZShldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ19vbkRyYWdNb3ZlJyk7XHJcbiAgICAgICAgLy8gaWYgKCFzLl9jdXJEcmFnSWNvbikgcmV0dXJuO1xyXG4gICAgICAgIHMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIC8vIGxldCBwb3MgPSBzLl9jdXJEcmFnSWNvbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZ0LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIC8vIHMuX2N1ckRyYWdJY29uLnggPSBwb3MueCAtIHMuX29mZnNldFBvcy54O1xyXG4gICAgICAgIC8vIHMuX2N1ckRyYWdJY29uLnkgPSBwb3MueSAtIHMuX29mZnNldFBvcy55O1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzLl9jdXJEcmFnSWNvbi54ICsgJyAtICcgKyBzLl9jdXJEcmFnSWNvbi55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGRyb3BBcnIgPSBbXTtcclxuICAgIHByaXZhdGUgX29uRHJhZ0VuZChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlcjogYW55ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlckJveC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjb2xsaWRlcik7XHJcblxyXG4gICAgICAgIGxldCBhcnI6IGFueSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkOiBhbnk7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXJlZEJveC5mb3JFYWNoKCh2OiBhbnksIGk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5fYmVsb25nQXJlYShjb2xsaWRlciwgdiwgNTAwKSA9PSB0cnVlKSBhcnIucHVzaCh2KTtcclxuICAgICAgICAgICAgaWYgKHMuaXNDb2xsaXNpb25XaXRoUmVjdCh2LCBjb2xsaWRlcikpIGFyci5wdXNoKHYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcnIuZm9yRWFjaCgodjogYW55LCBpOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZXJlZCA9IHY7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGQgPSB0aGlzLl9nZXREaXN0YW5jZShjb2xsaWRlciwgYXJyW2kgLSAxXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2QgPSB0aGlzLl9nZXREaXN0YW5jZShjb2xsaWRlciwgdik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2QgPCBwZCkgY29sbGlkZXJlZCA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g5pS+572u5Yy657Si5byV77yM5a6a5L2N5Yiw5pS+5YWl5LqG6YKj5Liq5pS+572u5Yy6XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWRJbmRleDogbnVtYmVyID0gdGhpcy5fY29sbGlkZXJlZEJveC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjb2xsaWRlcmVkKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IHNzczogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcChzdGF0ZSk7XHJcbiAgICAgICAgLy8gbGV0IHN0YXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9zdGF0ZSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ29yaWdpbiBzdGF0ZSA9ICcsIHRoaXMuX3N0YXRlLmRyb3BBcnIpOy8vIHJpZ2h0XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb25lIHN0YXRlID0gJywgc3RhdGUuZHJvcEFycik7Ly9yaWhndFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzc3MgPSAnLCBzc3MuZHJvcEFycik7Ly93cm9uZ1xyXG5cclxuICAgICAgICAvLyBkcm9wQXJyID0gc3RhdGUuY29sbGlkZXJlZFtjb2xsaWRlcmVkSW5kZXhdLm1hcCh2ID0+IHYpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUud2Fybignc3RhdGUuZHJvcEFyclswXSA9ICcsIHN0YXRlLmRyb3BBcnIpO1xyXG4gICAgICAgIC8vIGxldCBkcm9wQXJyID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZS5kcm9wQXJyKSk7XHJcbiAgICAgICAgbGV0IGRyb3BBcnIgPSBzdGF0ZS5kcm9wQXJyO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ3MuZHJvcEFycjExMTExMTExMTExMTExID0gJywgZHJvcEFycik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IG5hbWUgPSBjb2xsaWRlci5uYW1lO1xyXG4gICAgICAgIC8vIGxldCBkcm9wQXJySW5kZXggPSBkcm9wQXJyLmluZGV4T2YoZGF0YSk7Ly/mlL7nva7ljLrmmK/lkKblt7LljIXlkKvlvZPliY3mi5bmi73lhYPntKBcclxuICAgICAgICBsZXQgZHJvcEFyckluZGV4ID0gZHJvcEFyci5maW5kSW5kZXgodiA9PiB2Lm5hbWUgPT0gbmFtZSk7Ly/mlL7nva7ljLrmmK/lkKblt7LljIXlkKvlvZPliY3mi5bmi73lhYPntKBcclxuICAgICAgICBjb25zb2xlLndhcm4oJ2Ryb3BBcnJJbmRleCA9ICcsIGRyb3BBcnJJbmRleCk7XHJcblxyXG4gICAgICAgIC8vIDEu6YeN572u5L2N572uIOmHjee9ruWIsFxyXG4gICAgICAgIC8vIDIu5pS+5YWl5pS+572u5Yy6XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyZWRJbmRleCA9PSAtMSB8fCBkcm9wQXJyLmxlbmd0aCA9PSA2KSB7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNldCcpO1xyXG4gICAgICAgICAgICBpZiAoZHJvcEFyckluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGRyb3BBcnIuc3BsaWNlKGRyb3BBcnJJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sbGlkZXIuY29sbGlkZXJlZEluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleCA9IGNvbGxpZGVyLmNvbGxpZGVyZWRJbmRleDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkcm9wQXJySW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRyb3BBcnIucHVzaChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvbGxpZGVyKSkpO1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyci5wdXNoKHsgJ25hbWUnOiBjb2xsaWRlci5uYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdwdXNoaGhoaGhoaGhoJyxkcm9wQXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkcm9wQXJyLnB1c2goeyBuYW1lOiBjb2xsaWRlci5uYW1lIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUud2FybigncHVzaGhoaGhoaGhoaCcsZHJvcEFycik7XHJcblxyXG4gICAgICAgIGxldCBmb290TnVtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyb3BBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBkcm9wQXJyW2ldO1xyXG4gICAgICAgICAgICAvLyBsZXQgaXRlbUluZGV4ID0gcy5fY29sbGlkZXJCb3guaW5kZXhPZihpdGVtKTsvL+eKtuaAgeaxoOS4reeahGluZGV4XHJcbiAgICAgICAgICAgIGxldCBpdGVtSW5kZXggPSBzLl9jb2xsaWRlckJveC5maW5kSW5kZXgodiA9PiB2Lm5hbWUgPT0gaXRlbS5uYW1lKTsvL+eKtuaAgeaxoOS4reeahGluZGV4XHJcbiAgICAgICAgICAgIGxldCBwb3M6IGNjLlZlYzIgPSBuZXcgY2MuVmVjMigpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lLmluZGV4T2YoJ2xlZnQnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MueCA9IHMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS54ICsgMTUwICsgMjAwICogaTtcclxuICAgICAgICAgICAgICAgIHBvcy55ID0gcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdLnkgKyAyMDAgKyA4NTtcclxuICAgICAgICAgICAgICAgIGZvb3ROdW0gKz0gcy5fZm9vdE51bVswXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLm5hbWUuaW5kZXhPZigncmlnaHQnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwb3MueCA9IHMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS54ICsgMTUwICsgMjAwICogaTtcclxuICAgICAgICAgICAgICAgIHBvcy55ID0gcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdLnkgKyAyMDA7XHJcbiAgICAgICAgICAgICAgICBmb290TnVtICs9IHMuX2Zvb3ROdW1bMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbaXRlbUluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHBvcy54LFxyXG4gICAgICAgICAgICAgICAgeTogcG9zLnksXHJcbiAgICAgICAgICAgICAgICBiZWxvbmc6IGNvbGxpZGVyZWRJbmRleFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGxpZGVyLmNvbGxpZGVyZWRJbmRleCA9IGNvbGxpZGVyZWRJbmRleDtcclxuXHJcbiAgICAgICAgc3RhdGUuZHJhZyA9IFwiZW5kXCI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJJbmRleCA9IGNvbGxpZGVySW5kZXg7XHJcbiAgICAgICAgLy8gc3RhdGUuY29sbGlkZXJlZFtjb2xsaWRlcmVkSW5kZXhdID0gZHJvcEFyci5jb25jYXQoW10pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnu5lzdGF0Zei1i+WAvOWJjeeahCcsIGRyb3BBcnIpO1xyXG5cclxuICAgICAgICBzdGF0ZS5kcm9wQXJyID0gZHJvcEFycjtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ+i1i+WAvOWQjueahCcsIHN0YXRlLmRyb3BBcnIpO1xyXG5cclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBmb290TnVtID09IHMuX2Fuc3dlciA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAvLyBzLl9jdXJEcmFnSWNvbiA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXREaXN0YW5jZShzZWxmOiBhbnksIGFyZWE6IGFueSkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IChzZWxmLnggKyBzZWxmLndpZHRoIC8gMikgLSAoYXJlYS54ICsgYXJlYS53aWR0aCAvIDIpO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAoc2VsZi55ICsgc2VsZi5oZWlnaHQgLyAyKSAtIChhcmVhLnkgKyBhcmVhLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCh3aWR0aCAqIHdpZHRoICsgaGVpZ2h0ICogaGVpZ2h0KTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnn6nlvaLnorDmkp5cclxuICAgICAqIEBwYXJhbSByZWN0MSBcclxuICAgICAqIEBwYXJhbSByZWN0MiBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzQ29sbGlzaW9uV2l0aFJlY3QocmVjdDE6IGZndWkuR09iamVjdCwgcmVjdDI6IGZndWkuR09iamVjdCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChyZWN0MS54ID49IHJlY3QyLnggJiYgcmVjdDEueCA+PSByZWN0Mi54ICsgcmVjdDIud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVjdDEueCA8PSByZWN0Mi54ICYmIHJlY3QxLnggKyByZWN0MS53aWR0aCA8PSByZWN0Mi54KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlY3QxLnkgPj0gcmVjdDIueSAmJiByZWN0MS55ID49IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVjdDEueSA8PSByZWN0Mi55ICYmIHJlY3QxLnkgKyByZWN0MS5oZWlnaHQgPD0gcmVjdDIueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2JlbG9uZ0FyZWEoc2VsZjogYW55LCBhcmVhOiBhbnksIGdhcDogbnVtYmVyID0gMTApIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgZ2FwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrVGl0bGUoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnRpdGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jbGlja1N1Ym1pdChldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgLy8gc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29sZCA9ICcsIHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbmV3ID0gJywgY3VyU3RhdGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVTdGF0ZSAnLCBnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKTtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVVpID0gJywgc3RhdGUpO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS54ID0gc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0ueDtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueSA9IHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdLnk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZS5jdXJEcmFnSWNvbi54ID0gc3RhdGUuY3VyRHJhZ0ljb25zUG9zLng7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlLmN1ckRyYWdJY29uLnkgPSBzdGF0ZS5jdXJEcmFnSWNvbnNQb3MueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwiZW5kXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5jb2xsaWRlciwgc3RhdGUuY29sbGlkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW5kZGRkZGRkZGRkIHVwZGF0ZSB1aScsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvbGxpZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0ueCA9IHN0YXRlLmNvbGxpZGVyW2ldLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0ueSA9IHN0YXRlLmNvbGxpZGVyW2ldLnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5zdWJtaXQsIHN0YXRlLnN1Ym1pdCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXR0dHR0dHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHN0YXRlLmRyb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMub25IYW5kbGVHdWlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2uY29sbGlkZXIg5Yid5aeL5L2N572uIOWIpOaWrSDmmK/lkKbooqvmk43kvZzov4dcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbnY6IGFueSA9IHRoaXMuX2NvbGxpZGVyQm94Lm1hcCgodjogYW55KSA9PiB7IHJldHVybiB7IFwieFwiOiB2LngsIFwieVwiOiB2LnkgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9vbDogYm9vbGVhbiA9IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0uZXZlcnkoKHY6IGFueSwgaTogYW55KSA9PiB2LnggPT0gbnZbaV0ueCAmJiB2LnkgPT0gbnZbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA/IHRoaXMub25IYW5kbGVHdWlkZSgpIDogdGhpcy5vbkZsaWNrZXIoc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlpKnmnrDmj5DnpLpcclxuICAgIC8qIG9uTGlicmFIaW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saW5lQmxpbmspIHJldHVybjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5saW5lQmxpbmsuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5saW5lQmxpbmsucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5saW5lQmxpbmsucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmxpbmVCbGluay5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVCbGluay5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMubGluZUJsaW5rLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ICovXHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6Zmk56aB5q2iXHJcbiAgICBkaXNhYmxlRm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hc2spIGhhbmRsZU1hc2suZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4tOaXtlxyXG4gICAgLy8g5ouW5ou95a6a5pe25ZmoXHJcbiAgICBkcmFnU2NoZWR1bGUoKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChzLl9kcmFnZ2luZykge1xyXG4gICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAocy5fc3RhdGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5kcmFnID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgLyogc3RhdGUuY3VyRHJhZ0ljb25zUG9zID0ge1xyXG4gICAgICAgICAgICAgICAgeDogcy5fY3VyRHJhZ0ljb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IHMuX2N1ckRyYWdJY29uLnksXHJcbiAgICAgICAgICAgIH07ICovXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5kcmFnU2NoZWR1bGUsIHRoaXMuX3NjaGVkdWxlVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==