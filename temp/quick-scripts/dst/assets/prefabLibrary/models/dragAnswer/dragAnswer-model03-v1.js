
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
        // 初始化state
        this._state = {
            drag: "end",
            getDropArr: [],
            collider: s._cache["colliderBox"].map(function (v) { return v; }),
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
                x: s._cache["colliderBox"][colliderIndex].x,
                y: s._cache["colliderBox"][colliderIndex].y
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
            var collideredBox = s._collideredBox[collideredIndex];
            var curCollider = s._view.getChild(item.name);
            if (item.name.indexOf('left') > -1) {
                footNum += s._footNum[0];
            }
            else if (item.name.indexOf('right') > -1) {
                footNum += s._footNum[1];
            }
            pos.x = collideredBox.x + 150 + 200 * i;
            pos.y = collideredBox.y + collideredBox.height - curCollider.height;
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
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model03_v1.prototype.updateUi = function (oldState, state) {
        var s = this;
        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
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
                    let bool: boolean = s._cache["colliderBox"].every((v: any, i: any) => v.x == nv[i].x && v.y == nv[i].y);
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
                            _this._c2.selectedIndex = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDMtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQWduQkM7UUF4bEJXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBR3hCLFlBQU0sR0FBUSxFQUFFLENBQUM7O0lBMmtCN0IsQ0FBQztJQXprQkcsc0JBQUksd0NBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxD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ZXJNb2RlbDAzQmFzZSBmcm9tIFwiLi9EcmFnQW5zd2VyTW9kZWwwM0Jhc2VcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiBQbGVhc2Ugc2V0IExhc3RFZGl0b3JzXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTcgMTU6MjU6NThcclxuICovXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDNfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ0J0bjogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfYnRuQm94OiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnQm94OiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyb3BCb3g6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF90aXRsZVRyaWdnZXI6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuICAgIHByaXZhdGUgbGluZUJsaW5rOiBhbnk7XHJcblxyXG4gICAgLy8g6L+c56iL5Yqo5oCB57uE5Lu2XHJcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJCb3ggPSBbXTtcclxuICAgIHByaXZhdGUgX2NvbGxpZGVyZWRCb3ggPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jYWNoZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVUaW1lID0gLjM7XHJcbiAgICBwcml2YXRlIF9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ0ljb25BcnIgPSBbXTtcclxuICAgIHByaXZhdGUgX2Zvb3ROdW06IG51bWJlcltdID0gW107XHJcbiAgICBwdWJsaWMgcGFnZURhdGE6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICB0aGlzLl92aWV3LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5fdmlldy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG4gICAgICAgIC8vIOiHqOaZglxyXG4gICAgICAgIC8vIGJ1ZyDliJ3lp4vorr7nva7kuI3mkq3mlL7kuI3nlJ/mlYhcclxuICAgICAgICBpZiAodGhpcy5fYzIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcy5jcmVhdGVVSSgpO1xyXG4gICAgICAgIHMuYWRkRXZlbnQoKTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJhZzogXCJlbmRcIixcclxuICAgICAgICAgICAgZ2V0RHJvcEFycjogW10sXHJcbiAgICAgICAgICAgIGNvbGxpZGVyOiBzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLm1hcCgodjogYW55KSA9PiB2KSwvL+aLluaLveeJqeeahOS9jee9ruaVsOe7hFxyXG4gICAgICAgICAgICBjb2xsaWRlckluZGV4OiBudWxsLC8v5b2T5YmN5ouW5ou954mp5Zyo5pWw57uE5YaF55qE57Si5byVXHJcbiAgICAgICAgICAgIGNvbGxpZGVyZWQ6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJlZEJveFwiXS5tYXAoKHY6IGFueSkgPT4gdiksLy/kuoznu7TmlbDnu4TvvIzlrZjmlL7mr4/kuKrmlL7nva7ljLrlr7nlupTnmoTooqvmlL7nva7lhYPntKBcclxuICAgICAgICAgICAgZHJvcEFycjogW10sXHJcbiAgICAgICAgICAgIC8vIGRyYWdJY29uc1Bvc0FycjogZHJhZ0ljb25zUG9zQXJyLFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuc3dlcjogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlckdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWRHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlcmVkQm94XCIpLmFzR3JvdXA7XHJcblxyXG4gICAgICAgIHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG46IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIHMuX2NhY2hlWydjb2xsaWRlckJveCddLnB1c2goeyB4OiBidG4ueCwgeTogYnRuLnksIGJlbG9uZzogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIGJ0blsnY29sbGlkZXJlZEluZGV4J10gPSAtMTtcclxuICAgICAgICAgICAgICAgIGJ0bi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCB0aGlzLl9vbkRyYWdFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3gucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLl9jb2xsaWRlckJveCcsIHRoaXMuX2NvbGxpZGVyQm94KTtcclxuXHJcblxyXG4gICAgICAgIHMuX2NhY2hlW1wiY29sbGlkZXJlZEJveFwiXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmlldy5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gY29sbGlkZXJlZEdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuOiBmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0ltYWdlO1xyXG4gICAgICAgICAgICAgICAgcy5fY2FjaGVbJ2NvbGxpZGVyZWRCb3gnXS5wdXNoKFtdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyZWRCb3gucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLl9jb2xsaWRlcmVkQm94JywgdGhpcy5fY29sbGlkZXJlZEJveCk7XHJcblxyXG5cclxuICAgICAgICAvKiBzLmRyb3BCb3ggPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAnVHlwZURyb3BCb3gxJykuYXNDb207XHJcbiAgICAgICAgcy5kcm9wQm94LnggPSAzNjg7XHJcbiAgICAgICAgcy5kcm9wQm94LnkgPSA2MDA7XHJcbiAgICAgICAgcy5fdmlldy5hZGRDaGlsZChzLmRyb3BCb3gpO1xyXG5cclxuICAgICAgICBzLmRyYWdCb3ggPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAnVHlwZURyYWdCb3gxJykuYXNDb207XHJcbiAgICAgICAgcy5kcmFnQm94LnggPSA2MTA7XHJcbiAgICAgICAgcy5kcmFnQm94LnkgPSAyNTA7XHJcbiAgICAgICAgcy5fdmlldy5hZGRDaGlsZChzLmRyYWdCb3gpOyAqL1xyXG4gICAgICAgIC8vIHMuZHJvcEJveCA9IHMuX3ZpZXcuZ2V0Q2hpbGQoJ2Ryb3BCb3gnKS5hc0NvbTtcclxuICAgICAgICAvLyBzLmRyYWdCb3ggPSBzLl92aWV3LmdldENoaWxkKCdkcmFnQm94JykuYXNDb207XHJcblxyXG4gICAgICAgIC8vIGxldCBkcmFnSWNvbiA9IHMucGFnZURhdGEubW9kZWwuY29uZmlnLmRyYWdJY29uO1xyXG4gICAgICAgIC8qIGZvciAobGV0IGtleSBpbiBkcmFnSWNvbikge1xyXG4gICAgICAgICAgICBsZXQgZHJhZ0ljb25EYXRhID0gZHJhZ0ljb25ba2V5XTtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBuZXcgZmd1aS5HQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgIGxldCBpY29uSW1nID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgZHJhZ0ljb25EYXRhLm5hbWUpLmFzSW1hZ2U7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2hpbGQoaWNvbkltZyk7XHJcbiAgICAgICAgICAgIGljb24uc2V0U2l6ZShpY29uSW1nLndpZHRoLCBpY29uSW1nLmhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIGljb24uc2V0UGl2b3QoMC41LDAuNSx0cnVlKTtcclxuICAgICAgICAgICAgaWNvbi5vcGFxdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpY29uLnggPSBkcmFnSWNvbkRhdGEueDtcclxuICAgICAgICAgICAgaWNvbi55ID0gZHJhZ0ljb25EYXRhLnk7XHJcbiAgICAgICAgICAgIGljb25bJ2RyYWdPcmlnaW4nXSA9IHRoaXMuZ2V0T3JpZ2luVmFsdWUoaWNvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY29uID0gJywgaWNvblsnZHJhZ09yaWdpbiddKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGljb24udG91Y2hhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWNvbi5kcmFnZ2FibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWNvbi5vbihmZ3VpLkV2ZW50LlRPVUNIX0JFR0lOLCBzLl9vbkRyYWdTdGFydCwgcyk7XHJcbiAgICAgICAgICAgIGljb24ub24oZmd1aS5FdmVudC5UT1VDSF9NT1ZFLCBzLl9vbkRyYWdNb3ZlLCBzKTtcclxuICAgICAgICAgICAgaWNvbi5vbihmZ3VpLkV2ZW50LlRPVUNIX0VORCwgcy5fb25EcmFnRW5kLCBzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHMuX29uRHJhZ1N0YXJ0LCBzKTtcclxuXHJcbiAgICAgICAgICAgIHMuZHJhZ0JveC5hZGRDaGlsZChpY29uKTtcclxuICAgICAgICAgICAgcy5fZHJhZ0ljb25BcnIucHVzaChpY29uKTtcclxuICAgICAgICB9ICovXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnQoKSB7XHJcbiAgICAgICAgLy8gbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIC8vIHMuX3N1Ym1pdEJ0bi5vbihmZ3VpLkV2ZW50LkNMSUNLLCBzLl9jbGlja1N1Ym1pdCwgcyk7XHJcbiAgICAgICAgLy8gcy5fcmVhZFRpdGxlQnRuLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHMuX2NsaWNrVGl0bGUsIHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHMucGFnZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlLCBkcmFnSWNvbiB9ID0gbW9kZWwuY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAobW9kZWwudWlQYXRoKSB7XHJcbiAgICAgICAgICAgIEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBzLl9yZWFkVGl0bGVCdG4gPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAnVGl0bGVDb20nKS5hc0NvbTtcclxuXHJcbiAgICAgICAgKHMuX3JlYWRUaXRsZUJ0bi5nZXRDaGlsZCgndGl0bGUnKSBhcyBmZ3VpLkdMb2FkZXIpLnVybCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdCgndDQtdHJpYWxDbGFzcy0wMScsICd0aXRsZV8zJykuYXNJbWFnZS5yZXNvdXJjZVVSTDtcclxuICAgICAgICBzLl9yZWFkVGl0bGVCdG4ueCA9IDIwO1xyXG4gICAgICAgIHMuX3JlYWRUaXRsZUJ0bi55ID0gNTA7XHJcbiAgICAgICAgdGhpcy5fdmlldy5hZGRDaGlsZChzLl9yZWFkVGl0bGVCdG4pO1xyXG5cclxuXHJcbiAgICAgICAgcy5fc3VibWl0QnRuID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgJ1N1Ym1pdEJ0bicpLmFzQ29tO1xyXG4gICAgICAgIHMuX3N1Ym1pdEJ0bi54ID0gMTY3NjtcclxuICAgICAgICBzLl9zdWJtaXRCdG4ueSA9IDgwNjtcclxuICAgICAgICB0aGlzLl92aWV3LmFkZENoaWxkKHMuX3N1Ym1pdEJ0bik7ICovXHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgLy8gaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICAgICAgaWYgKGFlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbnN3ZXIpIHMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICAgICAgaWYgKGRyYWdJY29uKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZHJhZ0ljb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBzLl9mb290TnVtLnB1c2goZHJhZ0ljb25ba2V5XS5mb290TnVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFBhdGg6IGFueSA9IGAke3BhdGhDb25maWcucmVtb3RlVXJsfSR7cGF0aENvbmZpZy5jb21wb25lbnRCdW5kbGVQYXRofSR7Y29tcG9uZW50c1trZXldLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbXBvbmVudEJ1bmRsZSwgY29tcG9uZW50c1trZXldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29tcG9uZW50UHJlZmFiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE9yaWdpblZhbHVlKHY6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHYueCxcclxuICAgICAgICAgICAgeTogdi55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgX2N1ckRyYWdJY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgX29mZnNldFBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKCk7XHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gZXZ0LmNhcHR1cmVUb3VjaCgpO1xyXG4gICAgICAgIC8qIHMuX2N1ckRyYWdJY29uID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ19vbkRyYWdTdGFydCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHMuX2N1ckRyYWdJY29uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzLl9jdXJEcmFnSWNvbi55KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHMuX2N1ckRyYWdJY29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgcy5fb2Zmc2V0UG9zLnggPSBwb3MueCAtIHMuX2N1ckRyYWdJY29uLng7XHJcbiAgICAgICAgcy5fb2Zmc2V0UG9zLnkgPSBwb3MueSAtIHMuX2N1ckRyYWdJY29uLnk7XHJcblxyXG4gICAgICAgIHMuX3ZpZXcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgcy5fb25EcmFnTW92ZSwgcyk7XHJcbiAgICAgICAgcy5fY3VyRHJhZ0ljb24ub25jZShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHMuX29uRHJhZ0VuZCwgcyk7ICovXHJcbiAgICAgICAgLy8gcy5fY3VyRHJhZ0ljb24uZHJhZ2dhYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpZGVyID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIHMuX3ZpZXcuc2V0Q2hpbGRJbmRleChjb2xsaWRlciwgcy5fdmlldy5udW1DaGlsZHJlbiAtIDEpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4ID0gcy5fY29sbGlkZXJCb3guZmluZEluZGV4KHYgPT4gdiA9PSBjb2xsaWRlcik7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcChzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJJbmRleCA9IGNvbGxpZGVySW5kZXg7XHJcbiAgICAgICAgcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgLy8gc3RhdGUuZHJhZyA9IFwic3RhcnRcIjtcclxuICAgICAgICAvLyBzdGF0ZS5jdXJEcmFnSWNvbiA9IHMuX2N1ckRyYWdJY29uO1xyXG4gICAgICAgIC8qIHN0YXRlLmN1ckRyYWdJY29uc1BvcyA9IHtcclxuICAgICAgICAgICAgeDogcy5fY3VyRHJhZ0ljb25bJyRnb2JqJ11bXCJkcmFnT3JpZ2luXCJdLngsXHJcbiAgICAgICAgICAgIHk6IHMuX2N1ckRyYWdJY29uWyckZ29iaiddW1wiZHJhZ09yaWdpblwiXS55LFxyXG4gICAgICAgIH07ICovXHJcbiAgICAgICAgLy8gc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHMuX2Fuc3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ01vdmUnKTtcclxuICAgICAgICAvLyBpZiAoIXMuX2N1ckRyYWdJY29uKSByZXR1cm47XHJcbiAgICAgICAgcy5fZHJhZ2dpbmcgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IHBvcyA9IHMuX2N1ckRyYWdJY29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgLy8gcy5fY3VyRHJhZ0ljb24ueCA9IHBvcy54IC0gcy5fb2Zmc2V0UG9zLng7XHJcbiAgICAgICAgLy8gcy5fY3VyRHJhZ0ljb24ueSA9IHBvcy55IC0gcy5fb2Zmc2V0UG9zLnk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHMuX2N1ckRyYWdJY29uLnggKyAnIC0gJyArIHMuX2N1ckRyYWdJY29uLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgZHJvcEFyciA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfb25EcmFnRW5kKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuX2RyYWdnaW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpZGVyOiBhbnkgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVySW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyQm94LmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgbGV0IGFycjogYW55ID0gW107XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWQ6IGFueTtcclxuICAgICAgICB0aGlzLl9jb2xsaWRlcmVkQm94LmZvckVhY2goKHY6IGFueSwgaTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLl9iZWxvbmdBcmVhKGNvbGxpZGVyLCB2LCA1MDApID09IHRydWUpIGFyci5wdXNoKHYpO1xyXG4gICAgICAgICAgICBpZiAocy5pc0NvbGxpc2lvbldpdGhSZWN0KHYsIGNvbGxpZGVyKSkgYXJyLnB1c2godik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFyci5mb3JFYWNoKCh2OiBhbnksIGk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkID0gdjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwZCA9IHRoaXMuX2dldERpc3RhbmNlKGNvbGxpZGVyLCBhcnJbaSAtIDFdKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZCA9IHRoaXMuX2dldERpc3RhbmNlKGNvbGxpZGVyLCB2KTtcclxuICAgICAgICAgICAgICAgIGlmIChjZCA8IHBkKSBjb2xsaWRlcmVkID0gdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDmlL7nva7ljLrntKLlvJXvvIzlrprkvY3liLDmlL7lhaXkuobpgqPkuKrmlL7nva7ljLpcclxuICAgICAgICBsZXQgY29sbGlkZXJlZEluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlcmVkQm94LmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IGNvbGxpZGVyZWQpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgc3NzOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHN0YXRlKTtcclxuICAgICAgICAvLyBsZXQgc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3N0YXRlKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnb3JpZ2luIHN0YXRlID0gJywgdGhpcy5fc3RhdGUuZHJvcEFycik7Ly8gcmlnaHRcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xvbmUgc3RhdGUgPSAnLCBzdGF0ZS5kcm9wQXJyKTsvL3JpaGd0XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NzcyA9ICcsIHNzcy5kcm9wQXJyKTsvL3dyb25nXHJcblxyXG4gICAgICAgIC8vIGRyb3BBcnIgPSBzdGF0ZS5jb2xsaWRlcmVkW2NvbGxpZGVyZWRJbmRleF0ubWFwKHYgPT4gdik7XHJcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdzdGF0ZS5kcm9wQXJyWzBdID0gJywgc3RhdGUuZHJvcEFycik7XHJcbiAgICAgICAgLy8gbGV0IGRyb3BBcnIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0YXRlLmRyb3BBcnIpKTtcclxuICAgICAgICBsZXQgZHJvcEFyciA9IHN0YXRlLmRyb3BBcnI7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcigncy5kcm9wQXJyMTExMTExMTExMTExMTEgPSAnLCBkcm9wQXJyKTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IGNvbGxpZGVyLm5hbWU7XHJcbiAgICAgICAgLy8gbGV0IGRyb3BBcnJJbmRleCA9IGRyb3BBcnIuaW5kZXhPZihkYXRhKTsvL+aUvue9ruWMuuaYr+WQpuW3suWMheWQq+W9k+WJjeaLluaLveWFg+e0oFxyXG4gICAgICAgIGxldCBkcm9wQXJySW5kZXggPSBkcm9wQXJyLmZpbmRJbmRleCh2ID0+IHYubmFtZSA9PSBuYW1lKTsvL+aUvue9ruWMuuaYr+WQpuW3suWMheWQq+W9k+WJjeaLluaLveWFg+e0oFxyXG4gICAgICAgIGNvbnNvbGUud2FybignZHJvcEFyckluZGV4ID0gJywgZHJvcEFyckluZGV4KTtcclxuXHJcbiAgICAgICAgLy8gMS7ph43nva7kvY3nva4g6YeN572u5YiwXHJcbiAgICAgICAgLy8gMi7mlL7lhaXmlL7nva7ljLpcclxuICAgICAgICBpZiAoY29sbGlkZXJlZEluZGV4ID09IC0xIHx8IGRyb3BBcnIubGVuZ3RoID09IDYpIHtcclxuICAgICAgICAgICAgLy8gcmVzZXRcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2V0Jyk7XHJcbiAgICAgICAgICAgIGlmIChkcm9wQXJySW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyci5zcGxpY2UoZHJvcEFyckluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltjb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlci5jb2xsaWRlcmVkSW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZXJlZEluZGV4ID0gY29sbGlkZXIuY29sbGlkZXJlZEluZGV4O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZXJlZEluZGV4ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRyb3BBcnJJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZHJvcEFyci5wdXNoKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29sbGlkZXIpKSk7XHJcbiAgICAgICAgICAgICAgICBkcm9wQXJyLnB1c2goeyAnbmFtZSc6IGNvbGxpZGVyLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3B1c2hoaGhoaGhoaGgnLGRyb3BBcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRyb3BBcnIucHVzaCh7IG5hbWU6IGNvbGxpZGVyLm5hbWUgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdwdXNoaGhoaGhoaGhoJyxkcm9wQXJyKTtcclxuXHJcbiAgICAgICAgbGV0IGZvb3ROdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJvcEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGRyb3BBcnJbaV07XHJcbiAgICAgICAgICAgIC8vIGxldCBpdGVtSW5kZXggPSBzLl9jb2xsaWRlckJveC5pbmRleE9mKGl0ZW0pOy8v54q25oCB5rGg5Lit55qEaW5kZXhcclxuICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IHMuX2NvbGxpZGVyQm94LmZpbmRJbmRleCh2ID0+IHYubmFtZSA9PSBpdGVtLm5hbWUpOy8v54q25oCB5rGg5Lit55qEaW5kZXhcclxuICAgICAgICAgICAgbGV0IHBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKCk7XHJcbiAgICAgICAgICAgIGxldCBjb2xsaWRlcmVkQm94ID0gcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgY3VyQ29sbGlkZXIgPSBzLl92aWV3LmdldENoaWxkKGl0ZW0ubmFtZSlcclxuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCdsZWZ0JykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgZm9vdE51bSArPSBzLl9mb290TnVtWzBdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCdyaWdodCcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGZvb3ROdW0gKz0gcy5fZm9vdE51bVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MueCA9IGNvbGxpZGVyZWRCb3gueCArIDE1MCArIDIwMCAqIGk7XHJcbiAgICAgICAgICAgIHBvcy55ID0gY29sbGlkZXJlZEJveC55ICsgY29sbGlkZXJlZEJveC5oZWlnaHQgLSBjdXJDb2xsaWRlci5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyW2l0ZW1JbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBwb3MueCxcclxuICAgICAgICAgICAgICAgIHk6IHBvcy55LFxyXG4gICAgICAgICAgICAgICAgYmVsb25nOiBjb2xsaWRlcmVkSW5kZXhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsaWRlci5jb2xsaWRlcmVkSW5kZXggPSBjb2xsaWRlcmVkSW5kZXg7XHJcblxyXG4gICAgICAgIHN0YXRlLmRyYWcgPSBcImVuZFwiO1xyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVySW5kZXggPSBjb2xsaWRlckluZGV4O1xyXG4gICAgICAgIC8vIHN0YXRlLmNvbGxpZGVyZWRbY29sbGlkZXJlZEluZGV4XSA9IGRyb3BBcnIuY29uY2F0KFtdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn57uZc3RhdGXotYvlgLzliY3nmoQnLCBkcm9wQXJyKTtcclxuXHJcbiAgICAgICAgc3RhdGUuZHJvcEFyciA9IGRyb3BBcnI7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfotYvlgLzlkI7nmoQnLCBzdGF0ZS5kcm9wQXJyKTtcclxuXHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gZm9vdE51bSA9PSBzLl9hbnN3ZXIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgLy8gcy5fY3VyRHJhZ0ljb24gPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0RGlzdGFuY2Uoc2VsZjogYW55LCBhcmVhOiBhbnkpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55+p5b2i56Kw5pKeXHJcbiAgICAgKiBAcGFyYW0gcmVjdDEgXHJcbiAgICAgKiBAcGFyYW0gcmVjdDIgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc0NvbGxpc2lvbldpdGhSZWN0KHJlY3QxOiBmZ3VpLkdPYmplY3QsIHJlY3QyOiBmZ3VpLkdPYmplY3QpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAocmVjdDEueCA+PSByZWN0Mi54ICYmIHJlY3QxLnggPj0gcmVjdDIueCArIHJlY3QyLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlY3QxLnggPD0gcmVjdDIueCAmJiByZWN0MS54ICsgcmVjdDEud2lkdGggPD0gcmVjdDIueCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWN0MS55ID49IHJlY3QyLnkgJiYgcmVjdDEueSA+PSByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlY3QxLnkgPD0gcmVjdDIueSAmJiByZWN0MS55ICsgcmVjdDEuaGVpZ2h0IDw9IHJlY3QyLnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9iZWxvbmdBcmVhKHNlbGY6IGFueSwgYXJlYTogYW55LCBnYXA6IG51bWJlciA9IDEwKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gKHNlbGYueCArIHNlbGYud2lkdGggLyAyKSAtIChhcmVhLnggKyBhcmVhLndpZHRoIC8gMik7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IChzZWxmLnkgKyBzZWxmLmhlaWdodCAvIDIpIC0gKGFyZWEueSArIGFyZWEuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8IGdhcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIC8vIHN0YXRlLmFuc3dlciA9IHN0YXRlLmRyb3BzID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwibW92ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnggPSBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XS54O1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55ID0gc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0ueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwiZW5kXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5jb2xsaWRlciwgc3RhdGUuY29sbGlkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW5kZGRkZGRkZGRkIHVwZGF0ZSB1aScsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvbGxpZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0ueCA9IHN0YXRlLmNvbGxpZGVyW2ldLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0ueSA9IHN0YXRlLmNvbGxpZGVyW2ldLnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5zdWJtaXQsIHN0YXRlLnN1Ym1pdCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXR0dHR0dHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHN0YXRlLmRyb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMub25IYW5kbGVHdWlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2uY29sbGlkZXIg5Yid5aeL5L2N572uIOWIpOaWrSDmmK/lkKbooqvmk43kvZzov4dcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbnY6IGFueSA9IHRoaXMuX2NvbGxpZGVyQm94Lm1hcCgodjogYW55KSA9PiB7IHJldHVybiB7IFwieFwiOiB2LngsIFwieVwiOiB2LnkgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9vbDogYm9vbGVhbiA9IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0uZXZlcnkoKHY6IGFueSwgaTogYW55KSA9PiB2LnggPT0gbnZbaV0ueCAmJiB2LnkgPT0gbnZbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA/IHRoaXMub25IYW5kbGVHdWlkZSgpIDogdGhpcy5vbkZsaWNrZXIoc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5mZWVkYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZlZWRiYWNrKTtcclxuICAgICAgICBmZWVkYmFjay54ID0gOTYwO1xyXG4gICAgICAgIGZlZWRiYWNrLnkgPSA1NDA7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrSnM6IGFueSA9IGZlZWRiYWNrLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZlZWRiYWNrSnMuaW5pdChib29sKTtcclxuICAgICAgICBmZWVkYmFjay5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaTjeS9nOaPkOekulxyXG4gICAgb25IYW5kbGVHdWlkZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlR3VpZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlR3VpZGUucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQud2lkdGgpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/kOihjOaXtiDnpoHmraLmk43kvZxcclxuICAgIGZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmICghaGFuZGxlTWFzaykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlTWFzayA9IG5ldyBjYy5Ob2RlKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnBhcmVudCA9IHRoaXMuX3dvcmxkUm9vdDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay53aWR0aCA9IDE5MjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suaGVpZ2h0ID0gMTA4MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay54ID0gOTYwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnkgPSA1NDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa2iOmZpOemgeatolxyXG4gICAgZGlzYWJsZUZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmIChoYW5kbGVNYXNrKSBoYW5kbGVNYXNrLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLTml7ZcclxuICAgIC8vIOaLluaLveWumuaXtuWZqFxyXG4gICAgZHJhZ1NjaGVkdWxlKCkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBpZiAocy5fZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHMuX3N0YXRlKTtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZyA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8qIHN0YXRlLmN1ckRyYWdJY29uc1BvcyA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHMuX2N1ckRyYWdJY29uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBzLl9jdXJEcmFnSWNvbi55LFxyXG4gICAgICAgICAgICB9OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZHJhZ1NjaGVkdWxlLCB0aGlzLl9zY2hlZHVsZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxufVxyXG4iXX0=