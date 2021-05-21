
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
cc._RF.push(module, '80551sdOSRDM5dpZFjboMyK', 'dragAnswer-model03-v2');
// prefabLibrary/models/dragAnswer/dragAnswer-model03-v2.ts

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
var dragAnswer_model03_v2 = /** @class */ (function (_super) {
    __extends(dragAnswer_model03_v2, _super);
    function dragAnswer_model03_v2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 拖拽物数组 */
        _this._colliderBox = [];
        /** 放置区数组 */
        _this._collideredBox = [];
        _this._cache = {};
        _this._scheduleTime = .3;
        _this._dragging = false;
        _this._gameType = 0;
        /** 角色数量 */
        _this._roleCount = 0;
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
    dragAnswer_model03_v2.prototype.createUI = function () {
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
                s._cache['colliderBox'].push({ x: btn.x, y: btn.y, collideredIndex: -1, roleType: btn.data });
                btn['collideredIndex'] = -1;
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }
        // console.log('this._colliderBox', s._colliderBox);
        s._cache["collideredBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                var btn = this._view.getChildAt(i).asCom;
                s._cache['collideredBox'].push([]);
                this._collideredBox.push(btn);
            }
        }
        // console.log('this._collideredBox', s._collideredBox);
    };
    dragAnswer_model03_v2.prototype.addEvent = function () {
        // let s = this;
        // s._submitBtn.on(fgui.Event.CLICK, s._clickSubmit, s);
        // s._readTitleBtn.on(fgui.Event.CLICK, s._clickTitle, s);
    };
    dragAnswer_model03_v2.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var s, pathConfig, model, components, Package, GComponent, _a, answer, roleUrl, ae, gameType, roleCount, v, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        s = this;
                        s.pageData = data;
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        GComponent = model.uiPath;
                        _a = model.config, answer = _a.answer, roleUrl = _a.roleUrl, ae = _a.ae, gameType = _a.gameType, roleCount = _a.roleCount;
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
                            if (answer)
                                s._answer = answer;
                            if (roleUrl)
                                s._roleUrl = roleUrl;
                            if (gameType)
                                s._gameType = gameType;
                            if (roleCount)
                                s._roleCount = roleCount;
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
    dragAnswer_model03_v2.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    // private _curDragIcon: cc.Node = null;
    // private _offsetPos: cc.Vec2 = new cc.Vec2();
    dragAnswer_model03_v2.prototype._onDragStart = function (evt) {
        var s = this;
        evt.captureTouch();
        s.playSound('ui://rokozlzwkxox11');
        var collider = fgui.GObject.cast(evt.currentTarget);
        s._view.setChildIndex(collider, s._view.numChildren - 1);
        var colliderIndex = s._colliderBox.findIndex(function (v) { return v == collider; });
        var state = globalThis._.cloneDeep(s._state);
        var collideredIndex = state.collider[colliderIndex].collideredIndex;
        if (collideredIndex != -1) {
            var index = state.collidered.findIndex(function (v) { return v.name == collider.name; });
            state.collidered[collideredIndex].splice(index, 1);
            // state.collider[colliderIndex].collideredIndex = -1;
        }
        state.colliderIndex = colliderIndex;
        s.updateState(state);
        s.showTips(true);
    };
    dragAnswer_model03_v2.prototype._onDragMove = function (evt) {
        var s = this;
        s._dragging = true;
    };
    // private dropArr = [];
    dragAnswer_model03_v2.prototype._onDragEnd = function (evt) {
        var _this = this;
        var s = this;
        s.showTips(false);
        s.playSound('ui://rokozlzwku3e2t');
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
        console.log('collideredIndex = ', collideredIndex);
        var state = globalThis._.cloneDeep(this._state);
        // let sss: any = globalThis._.cloneDeep(state);
        // let state = JSON.parse(JSON.stringify(this._state))
        // console.log('origin state = ', this._state.dropArr);// right
        // console.log('clone state = ', state.dropArr);//rihgt
        // console.log('sss = ', sss.dropArr);//wrong
        // dropArr = state.collidered[collideredIndex].map(v => v);
        // console.warn('state.dropArr[0] = ', state.dropArr);
        // let dropArr = JSON.parse(JSON.stringify(state.dropArr));
        var dropArr = state.collidered[collideredIndex];
        // console.error('s.dropArr11111111111111 = ', dropArr);
        var colliderName = collider.name;
        if (collideredIndex != -1) {
            var collideredName = collidered.name;
            console.log('colliderName = ', colliderName);
            console.log('collideredName = ', collideredName);
            // 如果头和脚放置位置不匹配则重置位置 head dropBox1 || foot dropBox2
            var matchFlag = colliderName.indexOf('head') > -1 && collideredName.indexOf('dropBox1') > -1 || colliderName.indexOf('foot') > -1 && collideredName.indexOf('dropBox2') > -1;
            // 1.拿到当前放置区对应的放置区 2.获取对应放置区内的元素 3.判断元素的namee是否为相同role
            var matchCollideredIndex = void 0;
            if (collideredIndex < s._roleCount) {
                matchCollideredIndex = collideredIndex + s._roleCount;
            }
            else {
                matchCollideredIndex = collideredIndex - s._roleCount;
            }
            var matchCollinderArr = state.collidered[matchCollideredIndex];
            if (!matchFlag || matchCollinderArr.length > 0 && !(matchCollinderArr[0].roleType == collider.data)) {
                collideredIndex = -1;
            }
        }
        collider['collideredIndex'] = collideredIndex;
        // let dropArrIndex = dropArr.indexOf(data);//放置区是否已包含当前拖拽元素
        // let dropArrIndex = dropArr.findIndex(v => v.name == colliderName);//放置区是否已包含当前拖拽元素
        // console.warn('dropArrIndex = ', dropArrIndex);
        // 1.重置位置 
        // collideredIndex == -1 || 头和脚放置位置不匹配 || 头和脚无法组合 -> 重置回初始位置
        // collideredIndex != -1 
        // dropArr.length == 1 && 
        // 2.放入放置区
        if (collideredIndex == -1) {
            // reset
            // console.log('reset');
            /* if (dropArrIndex > -1) {
                dropArr.splice(dropArrIndex, 1);
            } */
            state.collider[colliderIndex] = {
                x: s._cache["colliderBox"][colliderIndex].x,
                y: s._cache["colliderBox"][colliderIndex].y,
                collideredIndex: -1,
                roleType: state.collider[colliderIndex].roleType
            };
            /* if (collider.collideredIndex > -1) {
                collideredIndex = collider.collideredIndex;
            } else {
                collideredIndex = 0
            } */
        }
        else {
            if (dropArr.length == 1) {
                // 移除原有的元素
                var existColliderData_1 = dropArr.splice(0, 1);
                console.log(existColliderData_1[0]);
                var existColliderIndex = this._colliderBox.findIndex(function (v, i) { return v.name == existColliderData_1[0].name; });
                state.collider[existColliderIndex] = {
                    x: s._cache["colliderBox"][existColliderIndex].x,
                    y: s._cache["colliderBox"][existColliderIndex].y,
                    collideredIndex: -1,
                    roleType: state.collider[existColliderIndex].roleType
                };
            }
            dropArr.push({
                'name': colliderName,
                roleType: collider.data,
                collideredIndex: collideredIndex
            });
            state.collider[colliderIndex] = {
                x: s._collideredBox[collideredIndex].x,
                y: s._collideredBox[collideredIndex].y,
                collideredIndex: collideredIndex,
                roleType: state.collider[collideredIndex].roleType
            };
            state.collidered[collideredIndex] = dropArr;
        }
        state.drag = "end";
        state.submit = false;
        state.colliderIndex = colliderIndex;
        console.log('给state赋值前的', dropArr);
        // state.dropArr = dropArr;
        console.warn('赋值后的', state.dropArr);
        // state.answer = footNum == s._answer ? true : false;
        s.updateState(state);
        // s._curDragIcon = null;
        console.log('------------------------------------------------');
    };
    dragAnswer_model03_v2.prototype.showTips = function (isShow) {
        var s = this;
        var colliderIndex = s._state.colliderIndex;
        var colliderName = s._colliderBox[colliderIndex].name;
        if (isShow) {
            var filterTag_1;
            if (colliderName.indexOf('head') > -1) {
                filterTag_1 = 'dropBox1';
            }
            else {
                filterTag_1 = 'dropBox2';
            }
            s._collideredBox.forEach(function (v) {
                if (v.name.indexOf(filterTag_1) > -1) {
                    v.getController('c1').selectedIndex = 1;
                }
                else {
                    v.getController('c1').selectedIndex = 0;
                }
            });
        }
        else {
            s._collideredBox.forEach(function (v) {
                v.getController('c1').selectedIndex = 0;
            });
        }
    };
    dragAnswer_model03_v2.prototype._getDistance = function (self, area) {
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
    dragAnswer_model03_v2.prototype.isCollisionWithRect = function (rect1, rect2) {
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
    dragAnswer_model03_v2.prototype._belongArea = function (self, area, gap) {
        if (gap === void 0) { gap = 10; }
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance < gap;
    };
    dragAnswer_model03_v2.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model03_v2.prototype._clickSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var s, state, userAnswer, collideredCount;
            return __generator(this, function (_a) {
                s = this;
                state = globalThis._.cloneDeep(this._state);
                userAnswer = {
                    role1: 0,
                    role2: 0
                };
                collideredCount = 0;
                state.collidered.forEach(function (v, i) {
                    if (v.length > 0)
                        collideredCount++;
                    if (i < (state.collidered.length / 2) >> 0) {
                        var topCollidered = v;
                        var bottomCollidered = state.collidered[i + s._roleCount];
                        if (s._gameType == 1) {
                            if (v.length > 0 && bottomCollidered.length > 0 && v[0].roleType == bottomCollidered[0].roleType) {
                                userAnswer[v[0].roleType]++;
                            }
                        }
                        else if (s._gameType == 2) {
                            if (v.length > 0 && bottomCollidered.length > 0) {
                                userAnswer[bottomCollidered[0].roleType]++;
                            }
                        }
                    }
                });
                console.log(userAnswer);
                console.log(s._answer);
                state.answer = JSON.stringify(userAnswer) === JSON.stringify(s._answer) && collideredCount == (s._answer.role1 + s._answer.role2) * 2;
                state.submit = true;
                this.updateState(state);
                return [2 /*return*/];
            });
        });
    };
    dragAnswer_model03_v2.prototype.showEndAnim = function (callbackFun, callbackThis) {
        if (callbackFun === void 0) { callbackFun = null; }
        if (callbackThis === void 0) { callbackThis = null; }
        var s = this;
        s.state.collider.forEach(function (v, i) {
            if (v['collideredIndex'] == -1) {
                s._colliderBox[i].visible = false;
            }
        });
        s._view.touchable = false;
        s.state.collidered.forEach(function (v, i) {
            if (i < (s.state.collidered.length / 2) >> 0 && v.length > 0) {
                var bottomCollidered = s.state.collidered[i + s._roleCount];
                var roleUrl = s._roleUrl[bottomCollidered[0].roleType];
                console.log(roleUrl);
                var role = fgui.UIPackage.createObjectFromURL(roleUrl);
                role.setPivot(0.5, 0.5, true);
                if (s.pageData.model.uiPath == 'Question4Page01') {
                    role.scaleX = role.scaleY = 0.7;
                }
                role.x = s._collideredBox[i].x;
                role.y = s._collideredBox[i].y + 100;
                role.alpha = 0;
                s._view.addChild(role);
                var offsetY = s.pageData.model.uiPath == 'Question4Page01' ? 220 : 350;
                cc.tween(role).to(1, {
                    alpha: 1
                }).delay(0.5).to(1.5, {
                    y: role.y + offsetY
                }).call(function () {
                    if (callbackFun) {
                        callbackFun.call(callbackThis);
                    }
                }).start();
            }
        });
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
        var _this = this;
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
                    if (s._gameType == 2 && state.answer) {
                        s.showEndAnim(function () {
                            _this.answerFeedback(state.answer);
                        });
                    }
                    else {
                        this.answerFeedback(state.answer);
                    }
                    // if (state.drops) {
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
    dragAnswer_model03_v2.prototype.playTitle = function (bool) {
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
                        console.log('this._title["_sound"]', this._title["_sound"]);
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
    dragAnswer_model03_v2.prototype.playSound = function (url) {
        var s = this;
        var item = fgui.UIPackage.getItemByURL(url);
        loadResource(item.file, cc.AudioClip).then(function (audio) {
            cc.audioEngine.play(audio, false, 1);
        });
    };
    dragAnswer_model03_v2.prototype.answerFeedback = function (bool) {
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
    dragAnswer_model03_v2.prototype.onHandleGuide = function () {
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
    // 消除禁止
    dragAnswer_model03_v2.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model03_v2.prototype.dragSchedule = function () {
        var s = this;
        if (s._dragging) {
            var state = globalThis._.cloneDeep(s._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
                collideredIndex: state.collider[state.colliderIndex].collideredIndex,
                roleType: state.collider[state.colliderIndex].roleType
            };
            s.updateState(state);
        }
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
        this.schedule(this.dragSchedule, this._scheduleTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDMtdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQTByQkM7UUFscUJHLFlBQVk7UUFDSixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUMxQixZQUFZO1FBQ0osb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFFcEIsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFJbEIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUN0QixXQUFXO1FBQ0gsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFJZixZQUFNLEdBQVEsRUFBRSxDQUFDOztJQWlwQjdCLENBQUM7SUEvb0JHLHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENB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R0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2SCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1SDthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuRztRQUVELElBQUksQ0FBQyxHQUFvQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3hELEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELFdBQVc7SUFDWCw0Q0FBWSxHQUFaO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNiLElBQUksWUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMzQyxZQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzdDLFlBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwQyxZQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN4QixZQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN6QixZQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNuQixZQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxPQUFPO0lBQ1AsbURBQW1CLEdBQW5CO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUQsSUFBSSxVQUFVO1lBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxLQUFLO0lBQ0wsUUFBUTtJQUNSLDRDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDYixJQUFJLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFDcEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUc7Z0JBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsZUFBZSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWU7Z0JBQ3BFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRO2FBQ3pELENBQUM7WUFDRixDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiw2Q0FBYSxHQUFiO1FBQ0ksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWE7WUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiw0Q0FBWSxHQUFaO1FBQ0ksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVk7WUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELGFBQWE7SUFDYiwwQ0FBVSxHQUFWO1FBQ0ksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUF6ckJnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQTByQnpDO0lBQUQsNEJBQUM7Q0ExckJELEFBMHJCQyxDQTFyQmtELEVBQUUsQ0FBQyxTQUFTLEdBMHJCOUQ7a0JBMXJCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYWdBbnN3ZXJNb2RlbDAzQmFzZSBmcm9tIFwiLi9EcmFnQW5zd2VyTW9kZWwwM0Jhc2VcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiBQbGVhc2Ugc2V0IExhc3RFZGl0b3JzXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTcgMTU6MjU6NThcclxuICovXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDNfdjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ0J0bjogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfYnRuQm94OiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnQm94OiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyb3BCb3g6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF90aXRsZVRyaWdnZXI6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuICAgIHByaXZhdGUgbGluZUJsaW5rOiBhbnk7XHJcblxyXG4gICAgLy8g6L+c56iL5Yqo5oCB57uE5Lu2XHJcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBhbnk7XHJcblxyXG4gICAgLyoqIOaLluaLveeJqeaVsOe7hCAqL1xyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJCb3ggPSBbXTtcclxuICAgIC8qKiDmlL7nva7ljLrmlbDnu4QgKi9cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyZWRCb3ggPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jYWNoZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVUaW1lID0gLjM7XHJcbiAgICBwcml2YXRlIF9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlcjtcclxuICAgIHByaXZhdGUgX3JvbGVVcmw7XHJcbiAgICBwcml2YXRlIF9nYW1lVHlwZSA9IDA7XHJcbiAgICAvKiog6KeS6Imy5pWw6YePICovXHJcbiAgICBwcml2YXRlIF9yb2xlQ291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBwYWdlRGF0YTogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICB0aGlzLl93b3JsZFJvb3QgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLl92aWV3LndpZHRoKSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcbiAgICAgICAgLy8g6Ieo5pmCXHJcbiAgICAgICAgLy8gYnVnIOWIneWni+iuvue9ruS4jeaSreaUvuS4jeeUn+aViFxyXG4gICAgICAgIGlmICh0aGlzLl9jMikge1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzLmNyZWF0ZVVJKCk7XHJcbiAgICAgICAgcy5hZGRFdmVudCgpO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJZzdGF0ZVxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xyXG4gICAgICAgICAgICBkcmFnOiBcImVuZFwiLFxyXG4gICAgICAgICAgICBnZXREcm9wQXJyOiBbXSxcclxuICAgICAgICAgICAgY29sbGlkZXI6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0ubWFwKCh2OiBhbnkpID0+IHYpLC8v5ouW5ou954mp55qE5L2N572u5pWw57uEXHJcbiAgICAgICAgICAgIGNvbGxpZGVySW5kZXg6IG51bGwsLy/lvZPliY3mi5bmi73nianlnKjmlbDnu4TlhoXnmoTntKLlvJVcclxuICAgICAgICAgICAgY29sbGlkZXJlZDogdGhpcy5fY2FjaGVbXCJjb2xsaWRlcmVkQm94XCJdLm1hcCgodjogYW55KSA9PiB2KSwvL+S6jOe7tOaVsOe7hO+8jOWtmOaUvuavj+S4quaUvue9ruWMuuWvueW6lOeahOiiq+aUvue9ruWFg+e0oFxyXG4gICAgICAgICAgICBkcm9wQXJyOiBbXSxcclxuICAgICAgICAgICAgLy8gZHJhZ0ljb25zUG9zQXJyOiBkcmFnSWNvbnNQb3NBcnIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VibWl0OiBmYWxzZSxcclxuICAgICAgICAgICAgYW5zd2VyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Li05pe2IOemgeatouaTjeS9nOacn+mXtCDliIfpobVcclxuICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVVSSgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpZGVyR3JvdXAgPSB0aGlzLl92aWV3LmdldENoaWxkKFwiY29sbGlkZXJCb3hcIikuYXNHcm91cDtcclxuICAgICAgICBsZXQgY29sbGlkZXJlZEdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyZWRCb3hcIikuYXNHcm91cDtcclxuXHJcbiAgICAgICAgcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmlldy5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzLl92aWV3LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gY29sbGlkZXJHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjogZmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmFzQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgcy5fY2FjaGVbJ2NvbGxpZGVyQm94J10ucHVzaCh7IHg6IGJ0bi54LCB5OiBidG4ueSwgY29sbGlkZXJlZEluZGV4OiAtMSwgcm9sZVR5cGU6IGJ0bi5kYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgYnRuWydjb2xsaWRlcmVkSW5kZXgnXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYnRuLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5UT1VDSF9CRUdJTiwgdGhpcy5fb25EcmFnU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfTU9WRSwgdGhpcy5fb25EcmFnTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveC5wdXNoKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuX2NvbGxpZGVyQm94Jywgcy5fY29sbGlkZXJCb3gpO1xyXG5cclxuICAgICAgICBzLl9jYWNoZVtcImNvbGxpZGVyZWRCb3hcIl0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyZWRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjogZmd1aS5HQ29tcG9uZW50ID0gdGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgcy5fY2FjaGVbJ2NvbGxpZGVyZWRCb3gnXS5wdXNoKFtdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyZWRCb3gucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLl9jb2xsaWRlcmVkQm94Jywgcy5fY29sbGlkZXJlZEJveCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50KCkge1xyXG4gICAgICAgIC8vIGxldCBzID0gdGhpcztcclxuICAgICAgICAvLyBzLl9zdWJtaXRCdG4ub24oZmd1aS5FdmVudC5DTElDSywgcy5fY2xpY2tTdWJtaXQsIHMpO1xyXG4gICAgICAgIC8vIHMuX3JlYWRUaXRsZUJ0bi5vbihmZ3VpLkV2ZW50LkNMSUNLLCBzLl9jbGlja1RpdGxlLCBzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBzLnBhZ2VEYXRhID0gZGF0YTtcclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcbiAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgbGV0IHsgYW5zd2VyLCByb2xlVXJsLCBhZSwgZ2FtZVR5cGUsIHJvbGVDb3VudCB9ID0gbW9kZWwuY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAobW9kZWwudWlQYXRoKSB7XHJcbiAgICAgICAgICAgIEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBzLl9yZWFkVGl0bGVCdG4gPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAnVGl0bGVDb20nKS5hc0NvbTtcclxuXHJcbiAgICAgICAgKHMuX3JlYWRUaXRsZUJ0bi5nZXRDaGlsZCgndGl0bGUnKSBhcyBmZ3VpLkdMb2FkZXIpLnVybCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdCgndDQtdHJpYWxDbGFzcy0wMScsICd0aXRsZV8zJykuYXNJbWFnZS5yZXNvdXJjZVVSTDtcclxuICAgICAgICBzLl9yZWFkVGl0bGVCdG4ueCA9IDIwO1xyXG4gICAgICAgIHMuX3JlYWRUaXRsZUJ0bi55ID0gNTA7XHJcbiAgICAgICAgdGhpcy5fdmlldy5hZGRDaGlsZChzLl9yZWFkVGl0bGVCdG4pO1xyXG5cclxuXHJcbiAgICAgICAgcy5fc3VibWl0QnRuID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgJ1N1Ym1pdEJ0bicpLmFzQ29tO1xyXG4gICAgICAgIHMuX3N1Ym1pdEJ0bi54ID0gMTY3NjtcclxuICAgICAgICBzLl9zdWJtaXRCdG4ueSA9IDgwNjtcclxuICAgICAgICB0aGlzLl92aWV3LmFkZENoaWxkKHMuX3N1Ym1pdEJ0bik7ICovXHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKGFuc3dlcikgcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICBpZiAocm9sZVVybCkgcy5fcm9sZVVybCA9IHJvbGVVcmw7XHJcbiAgICAgICAgICAgIGlmIChnYW1lVHlwZSkgcy5fZ2FtZVR5cGUgPSBnYW1lVHlwZTtcclxuICAgICAgICAgICAgaWYgKHJvbGVDb3VudCkgcy5fcm9sZUNvdW50ID0gcm9sZUNvdW50O1xyXG4gICAgICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICAgICAgaWYgKGFlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JpZ2luVmFsdWUodjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdi54LFxyXG4gICAgICAgICAgICB5OiB2LnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBfY3VyRHJhZ0ljb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBfb2Zmc2V0UG9zOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoKTtcclxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBldnQuY2FwdHVyZVRvdWNoKCk7XHJcbiAgICAgICAgcy5wbGF5U291bmQoJ3VpOi8vcm9rb3psendreG94MTEnKTtcclxuICAgICAgICBsZXQgY29sbGlkZXIgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgcy5fdmlldy5zZXRDaGlsZEluZGV4KGNvbGxpZGVyLCBzLl92aWV3Lm51bUNoaWxkcmVuIC0gMSk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVySW5kZXggPSBzLl9jb2xsaWRlckJveC5maW5kSW5kZXgodiA9PiB2ID09IGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgY29sbGlkZXJlZEluZGV4ID0gc3RhdGUuY29sbGlkZXJbY29sbGlkZXJJbmRleF0uY29sbGlkZXJlZEluZGV4O1xyXG4gICAgICAgIGlmIChjb2xsaWRlcmVkSW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gc3RhdGUuY29sbGlkZXJlZC5maW5kSW5kZXgodiA9PiB2Lm5hbWUgPT0gY29sbGlkZXIubmFtZSlcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJlZFtjb2xsaWRlcmVkSW5kZXhdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlLmNvbGxpZGVyW2NvbGxpZGVySW5kZXhdLmNvbGxpZGVyZWRJbmRleCA9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJJbmRleCA9IGNvbGxpZGVySW5kZXg7XHJcbiAgICAgICAgcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgcy5zaG93VGlwcyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBzLl9kcmFnZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBkcm9wQXJyID0gW107XHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHMuc2hvd1RpcHMoZmFsc2UpO1xyXG4gICAgICAgIHMucGxheVNvdW5kKCd1aTovL3Jva296bHp3a3UzZTJ0Jyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlcjogYW55ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlckJveC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjb2xsaWRlcik7XHJcblxyXG4gICAgICAgIGxldCBhcnI6IGFueSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkOiBhbnk7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXJlZEJveC5mb3JFYWNoKCh2OiBhbnksIGk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5fYmVsb25nQXJlYShjb2xsaWRlciwgdiwgNTAwKSA9PSB0cnVlKSBhcnIucHVzaCh2KTtcclxuICAgICAgICAgICAgaWYgKHMuaXNDb2xsaXNpb25XaXRoUmVjdCh2LCBjb2xsaWRlcikpIGFyci5wdXNoKHYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgYXJyLmZvckVhY2goKHY6IGFueSwgaTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWQgPSB2O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBkID0gdGhpcy5fZ2V0RGlzdGFuY2UoY29sbGlkZXIsIGFycltpIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNkID0gdGhpcy5fZ2V0RGlzdGFuY2UoY29sbGlkZXIsIHYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNkIDwgcGQpIGNvbGxpZGVyZWQgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOaUvue9ruWMuue0ouW8le+8jOWumuS9jeWIsOaUvuWFpeS6humCo+S4quaUvue9ruWMulxyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkSW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyZWRCb3guZmluZEluZGV4KCh2OiBhbnkpID0+IHYgPT0gY29sbGlkZXJlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbGxpZGVyZWRJbmRleCA9ICcsIGNvbGxpZGVyZWRJbmRleCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIC8vIGxldCBzc3M6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAoc3RhdGUpO1xyXG4gICAgICAgIC8vIGxldCBzdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RhdGUpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvcmlnaW4gc3RhdGUgPSAnLCB0aGlzLl9zdGF0ZS5kcm9wQXJyKTsvLyByaWdodFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbG9uZSBzdGF0ZSA9ICcsIHN0YXRlLmRyb3BBcnIpOy8vcmloZ3RcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3NzID0gJywgc3NzLmRyb3BBcnIpOy8vd3JvbmdcclxuXHJcbiAgICAgICAgLy8gZHJvcEFyciA9IHN0YXRlLmNvbGxpZGVyZWRbY29sbGlkZXJlZEluZGV4XS5tYXAodiA9PiB2KTtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3N0YXRlLmRyb3BBcnJbMF0gPSAnLCBzdGF0ZS5kcm9wQXJyKTtcclxuICAgICAgICAvLyBsZXQgZHJvcEFyciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUuZHJvcEFycikpO1xyXG4gICAgICAgIGxldCBkcm9wQXJyID0gc3RhdGUuY29sbGlkZXJlZFtjb2xsaWRlcmVkSW5kZXhdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ3MuZHJvcEFycjExMTExMTExMTExMTExID0gJywgZHJvcEFycik7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlck5hbWU6IHN0cmluZyA9IGNvbGxpZGVyLm5hbWU7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyZWRJbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXJlZE5hbWU6IHN0cmluZyA9IGNvbGxpZGVyZWQubmFtZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbGxpZGVyTmFtZSA9ICcsIGNvbGxpZGVyTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsaWRlcmVkTmFtZSA9ICcsIGNvbGxpZGVyZWROYW1lKTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5aS05ZKM6ISa5pS+572u5L2N572u5LiN5Yy56YWN5YiZ6YeN572u5L2N572uIGhlYWQgZHJvcEJveDEgfHwgZm9vdCBkcm9wQm94MlxyXG4gICAgICAgICAgICBsZXQgbWF0Y2hGbGFnID0gY29sbGlkZXJOYW1lLmluZGV4T2YoJ2hlYWQnKSA+IC0xICYmIGNvbGxpZGVyZWROYW1lLmluZGV4T2YoJ2Ryb3BCb3gxJykgPiAtIDEgfHwgY29sbGlkZXJOYW1lLmluZGV4T2YoJ2Zvb3QnKSA+IC0xICYmIGNvbGxpZGVyZWROYW1lLmluZGV4T2YoJ2Ryb3BCb3gyJykgPiAtIDE7XHJcblxyXG4gICAgICAgICAgICAvLyAxLuaLv+WIsOW9k+WJjeaUvue9ruWMuuWvueW6lOeahOaUvue9ruWMuiAyLuiOt+WPluWvueW6lOaUvue9ruWMuuWGheeahOWFg+e0oCAzLuWIpOaWreWFg+e0oOeahG5hbWVl5piv5ZCm5Li655u45ZCMcm9sZVxyXG4gICAgICAgICAgICBsZXQgbWF0Y2hDb2xsaWRlcmVkSW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlcmVkSW5kZXggPCBzLl9yb2xlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoQ29sbGlkZXJlZEluZGV4ID0gY29sbGlkZXJlZEluZGV4ICsgcy5fcm9sZUNvdW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hDb2xsaWRlcmVkSW5kZXggPSBjb2xsaWRlcmVkSW5kZXggLSBzLl9yb2xlQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG1hdGNoQ29sbGluZGVyQXJyID0gc3RhdGUuY29sbGlkZXJlZFttYXRjaENvbGxpZGVyZWRJbmRleF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1hdGNoRmxhZyB8fCBtYXRjaENvbGxpbmRlckFyci5sZW5ndGggPiAwICYmICEobWF0Y2hDb2xsaW5kZXJBcnJbMF0ucm9sZVR5cGUgPT0gY29sbGlkZXIuZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGxpZGVyWydjb2xsaWRlcmVkSW5kZXgnXSA9IGNvbGxpZGVyZWRJbmRleDtcclxuXHJcblxyXG4gICAgICAgIC8vIGxldCBkcm9wQXJySW5kZXggPSBkcm9wQXJyLmluZGV4T2YoZGF0YSk7Ly/mlL7nva7ljLrmmK/lkKblt7LljIXlkKvlvZPliY3mi5bmi73lhYPntKBcclxuICAgICAgICAvLyBsZXQgZHJvcEFyckluZGV4ID0gZHJvcEFyci5maW5kSW5kZXgodiA9PiB2Lm5hbWUgPT0gY29sbGlkZXJOYW1lKTsvL+aUvue9ruWMuuaYr+WQpuW3suWMheWQq+W9k+WJjeaLluaLveWFg+e0oFxyXG4gICAgICAgIC8vIGNvbnNvbGUud2FybignZHJvcEFyckluZGV4ID0gJywgZHJvcEFyckluZGV4KTtcclxuXHJcbiAgICAgICAgLy8gMS7ph43nva7kvY3nva4gXHJcbiAgICAgICAgLy8gY29sbGlkZXJlZEluZGV4ID09IC0xIHx8IOWktOWSjOiEmuaUvue9ruS9jee9ruS4jeWMuemFjSB8fCDlpLTlkozohJrml6Dms5Xnu4TlkIggLT4g6YeN572u5Zue5Yid5aeL5L2N572uXHJcbiAgICAgICAgLy8gY29sbGlkZXJlZEluZGV4ICE9IC0xIFxyXG4gICAgICAgIC8vIGRyb3BBcnIubGVuZ3RoID09IDEgJiYgXHJcbiAgICAgICAgLy8gMi7mlL7lhaXmlL7nva7ljLpcclxuICAgICAgICBpZiAoY29sbGlkZXJlZEluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNldCcpO1xyXG4gICAgICAgICAgICAvKiBpZiAoZHJvcEFyckluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGRyb3BBcnIuc3BsaWNlKGRyb3BBcnJJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiBzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLnksXHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkSW5kZXg6IC0xLFxyXG4gICAgICAgICAgICAgICAgcm9sZVR5cGU6IHN0YXRlLmNvbGxpZGVyW2NvbGxpZGVySW5kZXhdLnJvbGVUeXBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogaWYgKGNvbGxpZGVyLmNvbGxpZGVyZWRJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkSW5kZXggPSBjb2xsaWRlci5jb2xsaWRlcmVkSW5kZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkSW5kZXggPSAwXHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZHJvcEFyci5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8g56e76Zmk5Y6f5pyJ55qE5YWD57SgXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RDb2xsaWRlckRhdGEgPSBkcm9wQXJyLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4aXN0Q29sbGlkZXJEYXRhWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RDb2xsaWRlckluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlckJveC5maW5kSW5kZXgoKHY6IGFueSwgaTogbnVtYmVyKSA9PiB2Lm5hbWUgPT0gZXhpc3RDb2xsaWRlckRhdGFbMF0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltleGlzdENvbGxpZGVySW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bZXhpc3RDb2xsaWRlckluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bZXhpc3RDb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZVR5cGU6IHN0YXRlLmNvbGxpZGVyW2V4aXN0Q29sbGlkZXJJbmRleF0ucm9sZVR5cGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcm9wQXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBjb2xsaWRlck5hbWUsXHJcbiAgICAgICAgICAgICAgICByb2xlVHlwZTogY29sbGlkZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleDogY29sbGlkZXJlZEluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltjb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgeTogcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdLnksXHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkSW5kZXg6IGNvbGxpZGVyZWRJbmRleCxcclxuICAgICAgICAgICAgICAgIHJvbGVUeXBlOiBzdGF0ZS5jb2xsaWRlcltjb2xsaWRlcmVkSW5kZXhdLnJvbGVUeXBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJlZFtjb2xsaWRlcmVkSW5kZXhdID0gZHJvcEFycjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLmRyYWcgPSBcImVuZFwiO1xyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVySW5kZXggPSBjb2xsaWRlckluZGV4O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnu5lzdGF0Zei1i+WAvOWJjeeahCcsIGRyb3BBcnIpO1xyXG4gICAgICAgIC8vIHN0YXRlLmRyb3BBcnIgPSBkcm9wQXJyO1xyXG4gICAgICAgIGNvbnNvbGUud2Fybign6LWL5YC85ZCO55qEJywgc3RhdGUuZHJvcEFycik7XHJcblxyXG4gICAgICAgIC8vIHN0YXRlLmFuc3dlciA9IGZvb3ROdW0gPT0gcy5fYW5zd2VyID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIC8vIHMuX2N1ckRyYWdJY29uID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1RpcHMoaXNTaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4OiBudW1iZXIgPSBzLl9zdGF0ZS5jb2xsaWRlckluZGV4O1xyXG4gICAgICAgIGxldCBjb2xsaWRlck5hbWU6IHN0cmluZyA9IHMuX2NvbGxpZGVyQm94W2NvbGxpZGVySW5kZXhdLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlclRhZzogc3RyaW5nO1xyXG4gICAgICAgICAgICBpZiAoY29sbGlkZXJOYW1lLmluZGV4T2YoJ2hlYWQnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJUYWcgPSAnZHJvcEJveDEnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyVGFnID0gJ2Ryb3BCb3gyJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLl9jb2xsaWRlcmVkQm94LmZvckVhY2goKHY6IGZndWkuR0NvbWJvQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodi5uYW1lLmluZGV4T2YoZmlsdGVyVGFnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi5nZXRDb250cm9sbGVyKCdjMScpLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2LmdldENvbnRyb2xsZXIoJ2MxJykuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHMuX2NvbGxpZGVyZWRCb3guZm9yRWFjaCgodjogZmd1aS5HQ29tYm9Cb3gpID0+IHtcclxuICAgICAgICAgICAgICAgIHYuZ2V0Q29udHJvbGxlcignYzEnKS5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXREaXN0YW5jZShzZWxmOiBhbnksIGFyZWE6IGFueSkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IChzZWxmLnggKyBzZWxmLndpZHRoIC8gMikgLSAoYXJlYS54ICsgYXJlYS53aWR0aCAvIDIpO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAoc2VsZi55ICsgc2VsZi5oZWlnaHQgLyAyKSAtIChhcmVhLnkgKyBhcmVhLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCh3aWR0aCAqIHdpZHRoICsgaGVpZ2h0ICogaGVpZ2h0KTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnn6nlvaLnorDmkp5cclxuICAgICAqIEBwYXJhbSByZWN0MSBcclxuICAgICAqIEBwYXJhbSByZWN0MiBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzQ29sbGlzaW9uV2l0aFJlY3QocmVjdDE6IGZndWkuR09iamVjdCwgcmVjdDI6IGZndWkuR09iamVjdCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChyZWN0MS54ID49IHJlY3QyLnggJiYgcmVjdDEueCA+PSByZWN0Mi54ICsgcmVjdDIud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVjdDEueCA8PSByZWN0Mi54ICYmIHJlY3QxLnggKyByZWN0MS53aWR0aCA8PSByZWN0Mi54KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlY3QxLnkgPj0gcmVjdDIueSAmJiByZWN0MS55ID49IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVjdDEueSA8PSByZWN0Mi55ICYmIHJlY3QxLnkgKyByZWN0MS5oZWlnaHQgPD0gcmVjdDIueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2JlbG9uZ0FyZWEoc2VsZjogYW55LCBhcmVhOiBhbnksIGdhcDogbnVtYmVyID0gMTApIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgZ2FwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrVGl0bGUoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnRpdGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jbGlja1N1Ym1pdChldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCB1c2VyQW5zd2VyID0ge1xyXG4gICAgICAgICAgICByb2xlMTogMCxcclxuICAgICAgICAgICAgcm9sZTI6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkQ291bnQgPSAwO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVyZWQuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiAwKSBjb2xsaWRlcmVkQ291bnQrKztcclxuICAgICAgICAgICAgaWYgKGkgPCAoc3RhdGUuY29sbGlkZXJlZC5sZW5ndGggLyAyKSA+PiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wQ29sbGlkZXJlZCA9IHY7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm90dG9tQ29sbGlkZXJlZCA9IHN0YXRlLmNvbGxpZGVyZWRbaSArIHMuX3JvbGVDb3VudF07XHJcbiAgICAgICAgICAgICAgICBpZiAocy5fZ2FtZVR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA+IDAgJiYgYm90dG9tQ29sbGlkZXJlZC5sZW5ndGggPiAwICYmIHZbMF0ucm9sZVR5cGUgPT0gYm90dG9tQ29sbGlkZXJlZFswXS5yb2xlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyQW5zd2VyW3ZbMF0ucm9sZVR5cGVdKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzLl9nYW1lVHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gMCAmJiBib3R0b21Db2xsaWRlcmVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckFuc3dlcltib3R0b21Db2xsaWRlcmVkWzBdLnJvbGVUeXBlXSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJBbnN3ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHMuX2Fuc3dlcik7XHJcblxyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IEpTT04uc3RyaW5naWZ5KHVzZXJBbnN3ZXIpID09PSBKU09OLnN0cmluZ2lmeShzLl9hbnN3ZXIpICYmIGNvbGxpZGVyZWRDb3VudCA9PSAocy5fYW5zd2VyLnJvbGUxICsgcy5fYW5zd2VyLnJvbGUyKSAqIDI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RW5kQW5pbShjYWxsYmFja0Z1bjogRnVuY3Rpb24gPSBudWxsLCBjYWxsYmFja1RoaXM6IGFueSA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgcy5zdGF0ZS5jb2xsaWRlci5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Wydjb2xsaWRlcmVkSW5kZXgnXSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcy5fY29sbGlkZXJCb3hbaV0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcy5fdmlldy50b3VjaGFibGUgPSBmYWxzZTtcclxuICAgICAgICBzLnN0YXRlLmNvbGxpZGVyZWQuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA8IChzLnN0YXRlLmNvbGxpZGVyZWQubGVuZ3RoIC8gMikgPj4gMCAmJiB2Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBib3R0b21Db2xsaWRlcmVkID0gcy5zdGF0ZS5jb2xsaWRlcmVkW2kgKyBzLl9yb2xlQ291bnRdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvbGVVcmwgPSBzLl9yb2xlVXJsW2JvdHRvbUNvbGxpZGVyZWRbMF0ucm9sZVR5cGVdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9sZVVybCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdEZyb21VUkwocm9sZVVybCk7XHJcbiAgICAgICAgICAgICAgICByb2xlLnNldFBpdm90KDAuNSwgMC41LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhZ2VEYXRhLm1vZGVsLnVpUGF0aCA9PSAnUXVlc3Rpb240UGFnZTAxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGUuc2NhbGVYID0gcm9sZS5zY2FsZVkgPSAwLjc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb2xlLnggPSBzLl9jb2xsaWRlcmVkQm94W2ldLng7XHJcbiAgICAgICAgICAgICAgICByb2xlLnkgPSBzLl9jb2xsaWRlcmVkQm94W2ldLnkgKyAxMDA7XHJcbiAgICAgICAgICAgICAgICByb2xlLmFscGhhID0gMDtcclxuICAgICAgICAgICAgICAgIHMuX3ZpZXcuYWRkQ2hpbGQocm9sZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldFkgPSBzLnBhZ2VEYXRhLm1vZGVsLnVpUGF0aCA9PSAnUXVlc3Rpb240UGFnZTAxJyA/IDIyMCA6IDM1MDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHJvbGUpLnRvKDEsIHtcclxuICAgICAgICAgICAgICAgICAgICBhbHBoYTogMVxyXG4gICAgICAgICAgICAgICAgfSkuZGVsYXkoMC41KS50bygxLjUsIHtcclxuICAgICAgICAgICAgICAgICAgICB5OiByb2xlLnkgKyBvZmZzZXRZXHJcbiAgICAgICAgICAgICAgICB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tGdW4uY2FsbChjYWxsYmFja1RoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShvbGRTdGF0ZTogYW55LCBzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVVaSA9ICcsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmRyYWcgPT0gXCJtb3ZlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueCA9IHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnkgPSBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XS55O1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUuY3VyRHJhZ0ljb24ueCA9IHN0YXRlLmN1ckRyYWdJY29uc1Bvcy54O1xyXG4gICAgICAgICAgICAvLyBzdGF0ZS5jdXJEcmFnSWNvbi55ID0gc3RhdGUuY3VyRHJhZ0ljb25zUG9zLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcImVuZFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuY29sbGlkZXIsIHN0YXRlLmNvbGxpZGVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VuZGRkZGRkZGRkZCB1cGRhdGUgdWknLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb2xsaWRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLnggPSBzdGF0ZS5jb2xsaWRlcltpXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLnkgPSBzdGF0ZS5jb2xsaWRlcltpXS55O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0dHR0dHR0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLl9nYW1lVHlwZSA9PSAyICYmIHN0YXRlLmFuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNob3dFbmRBbmltKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoc3RhdGUuZHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm9uSGFuZGxlR3VpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUudGl0bGUsIHN0YXRlLnRpdGxlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5VGl0bGUoc3RhdGUudGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNrmNvbGxpZGVyIOWIneWni+S9jee9riDliKTmlq0g5piv5ZCm6KKr5pON5L2c6L+HXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG52OiBhbnkgPSB0aGlzLl9jb2xsaWRlckJveC5tYXAoKHY6IGFueSkgPT4geyByZXR1cm4geyBcInhcIjogdi54LCBcInlcIjogdi55IH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2w6IGJvb2xlYW4gPSBzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLmV2ZXJ5KCh2OiBhbnksIGk6IGFueSkgPT4gdi54ID09IG52W2ldLnggJiYgdi55ID09IG52W2ldLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb2wgPyB0aGlzLm9uSGFuZGxlR3VpZGUoKSA6IHRoaXMub25GbGlja2VyKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuXHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5fdGl0bGVbXCJfc291bmRcIl0nLCB0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbzogY2MuQXVkaW9DbGlwID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlTb3VuZCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh1cmwpO1xyXG4gICAgICAgIGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCkudGhlbigoYXVkaW8pID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDov5DooYzml7Yg56aB5q2i5pON5L2cXHJcbiAgICBmb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoIWhhbmRsZU1hc2spIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSBuZXcgY2MuTm9kZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5wYXJlbnQgPSB0aGlzLl93b3JsZFJvb3Q7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sud2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueCA9IDk2MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay55ID0gNTQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Li05pe2XHJcbiAgICAvLyDmi5bmi73lrprml7blmahcclxuICAgIGRyYWdTY2hlZHVsZSgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcChzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyYWcgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueSxcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleDogc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0uY29sbGlkZXJlZEluZGV4LFxyXG4gICAgICAgICAgICAgICAgcm9sZVR5cGU6IHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdLnJvbGVUeXBlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZHJhZ1NjaGVkdWxlLCB0aGlzLl9zY2hlZHVsZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxufVxyXG4iXX0=