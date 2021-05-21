"use strict";
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