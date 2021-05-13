
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/clickAnswer/clickAnswer-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5424aSAddlL8rVGcxjgry3C', 'clickAnswer-model01-v1');
// prefabLibrary/models/clickAnswer/clickAnswer-model01-v1.ts

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
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-12 16:23:35
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var clcikAnswer_model01_v1 = /** @class */ (function (_super) {
    __extends(clcikAnswer_model01_v1, _super);
    function clcikAnswer_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._grids = [];
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(clcikAnswer_model01_v1.prototype, "state", {
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
    clcikAnswer_model01_v1.prototype.onLoad = function () {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
        // 控制器
        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");
        // 臨時
        // bug 初始设置不播放不生效
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }
        this._submit = this._view.getChild("submit").asButton;
        if (this._submit)
            this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        this._title = this._view.getChild("title").asButton;
        // launch 触发器按钮
        this._launchBtn = this._view.getChild("launchBtn").asButton;
        this._launchBtn.on(fgui.Event.CLICK, this._clickLaunch, this);
        // 容器天枰
        this._btnBox = this._view.getChild("btnBox").asButton;
        this._btnBox.on(fgui.Event.CLICK, this._clickLibra, this);
        this._imgObj = this._view.getChild("imgObj").asLoader;
        this.catchObj = this._view.getChild("catchStone").asCom;
        // 天枰 子栏
        var aGroup = this._btnBox.getChild("grids").asGroup;
        for (var i = this._btnBox.numChildren - 1; i > -1; i--) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                var grid = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }
        // 初始化state
        this._state = {
            drops: 0,
            submit: false,
            answer: false,
            catch: false,
            title: false,
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    clcikAnswer_model01_v1.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var pathConfig, model, components, Package, GComponent, _a, answer, ae, v, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        GComponent = model.uiPath;
                        _a = model.config, answer = _a.answer, ae = _a.ae;
                        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                        // 动效注册
                        for (v in ae) {
                            if (ae[v]) {
                                this[v] = {};
                                if (ae[v].component)
                                    this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                                if (ae[v].pos)
                                    this[v].pos = ae[v].pos;
                            }
                        }
                        if (answer)
                            this._answer = answer;
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
    clcikAnswer_model01_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    // 点击天枰 消除一个
    clcikAnswer_model01_v1.prototype._clickLibra = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var index = this._grids.findIndex(function (v) { return v.url === null; });
        if (index !== 0) {
            var grid = this._grids[index == -1 ? this._grids.length - 1 : index - 1];
            grid.url = null;
            state.drops = state.drops - 1;
            state.answer = state.drops === this._answer;
            this.updateState(state);
        }
    };
    // 触发器点击
    clcikAnswer_model01_v1.prototype._clickLaunch = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.catch = true;
        this.updateState(state);
    };
    // 提交点击
    clcikAnswer_model01_v1.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.answer = state.drops === this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    clcikAnswer_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    clcikAnswer_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    clcikAnswer_model01_v1.prototype.updateUi = function (oldState, state) {
        if (state.catch) {
            this.onCatchObj();
        }
        else {
            if (!globalThis._.isEqual(oldState.drops, state.drops)) {
                for (var i = 0; i < this._grids.length; i++) {
                    var grid = this._grids[i];
                    if (state.drops > i) {
                        if (!grid.url) {
                            grid.url = this._imgObj.url;
                        }
                    }
                    else {
                        if (grid.url)
                            grid.url = null;
                    }
                }
                this._c1.selectedIndex = state.drops;
                if (!state.answer)
                    this.onLibraHint();
            }
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                // title
                this.playTitle(state.title);
            }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    if (state.drops) {
                        this.answerFeedback(state.answer);
                    }
                    else {
                        this.onHandleGuide();
                    }
                }
            }
        }
    };
    clcikAnswer_model01_v1.prototype.playTitle = function (bool) {
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
    // 答案反馈
    clcikAnswer_model01_v1.prototype.answerFeedback = function (bool) {
        // let component: any;
        // let pos: any;
        // if (bool) {
        //     component = this.rightFeed.component;
        //     pos = this.rightFeed.pos;
        // } else {
        //     component = this.errorFeed.component;
        //     pos = this.errorFeed.pos;
        // }
        var _this = this;
        // fgui.GRoot.inst.addChild(component);
        // console.log(component);
        // if (pos) {
        //     component.x = (fgui.GRoot.inst.width - component.width) / 2 + pos.x;
        //     component.y = (fgui.GRoot.inst.height - component.height) / 2 + pos.y;
        // } else {
        //     component.y = (fgui.GRoot.inst.height - component.height) / 2;
        // }
        // let t: fgui.Transition = component.getTransition("t0");
        // t.play(() => {
        //     fgui.GRoot.inst.removeChild(component);
        //     state.submit = false;
        //     this.updateState(state);
        // }, 2);
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
    clcikAnswer_model01_v1.prototype.onLibraHint = function () {
        var _this = this;
        if (!this.lineBlink)
            return;
        fgui.GRoot.inst.addChild(this.lineBlink.component);
        if (this.lineBlink.pos) {
            this.lineBlink.component.x = (fgui.GRoot.inst.width - this.lineBlink.component.width) / 2 + this.lineBlink.pos.x;
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2 + this.lineBlink.pos.y;
        }
        else {
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2;
        }
        var t = this.lineBlink.component.getTransition("t0");
        t.play(function () {
            fgui.GRoot.inst.removeChild(_this.lineBlink.component);
        });
    };
    // 操作提示
    clcikAnswer_model01_v1.prototype.onHandleGuide = function () {
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
    // 抓取某物
    clcikAnswer_model01_v1.prototype.onCatchObj = function () {
        var _this = this;
        // if (!this.catchObj) return;
        var t0 = this.catchObj.getTransition("t0");
        t0.play(function () {
            var state = globalThis._.cloneDeep(_this._state);
            state.catch = false;
            var grid = _this._grids.find(function (v) { return v.url === null; });
            if (grid) {
                state.drops = state.drops + 1;
            }
            state.answer = state.drops === _this._answer;
            _this.updateState(state);
            var t1 = _this.catchObj.getTransition("t1");
            t1.play();
        }, 1);
    };
    // 运行时 禁止操作
    clcikAnswer_model01_v1.prototype.forbidHandle = function () {
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
    clcikAnswer_model01_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 注册状态，及获取状态的方法
    clcikAnswer_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    clcikAnswer_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    clcikAnswer_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    clcikAnswer_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    clcikAnswer_model01_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    clcikAnswer_model01_v1 = __decorate([
        ccclass
    ], clcikAnswer_model01_v1);
    return clcikAnswer_model01_v1;
}(cc.Component));
exports.default = clcikAnswer_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxjbGlja0Fuc3dlclxcY2xpY2tBbnN3ZXItbW9kZWwwMS12MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0csSUFBQSxLQUEyQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFwRSxVQUFVLGdCQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLFlBQVksa0JBQWdDLENBQUM7QUFFdkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUE2WEM7UUF0V1csWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQW1XeEIsQ0FBQztJQWpXRyxzQkFBSSx5Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQyxNQUFNO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLEtBQUs7UUFDTCxpQkFBaUI7UUFDakIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXhGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXBELGVBQWU7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlELE9BQU87UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXhELFFBQVE7UUFDUixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFcEQsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FB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QUUsQ0FBQztJQUM3QixDQUFDO0lBM1hnQixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQTZYMUM7SUFBRCw2QkFBQztDQTdYRCxBQTZYQyxDQTdYbUQsRUFBRSxDQUFDLFNBQVMsR0E2WC9EO2tCQTdYb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wMy0yNiAxODowNToxMlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMiAxNjoyMzozNVxyXG4gKi9cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsY2lrQW5zd2VyX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfYnRuQm94OiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX2xhdW5jaEJ0bjogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfaW1nT2JqOiBmZ3VpLkdMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgLy8g5Yqo5pWIXHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcbiAgICBwcml2YXRlIGxpbmVCbGluazogYW55O1xyXG4gICAgcHJpdmF0ZSBjYXRjaE9iajogYW55O1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2dyaWRzID0gW107XHJcbiAgICBwcml2YXRlIF9hbnN3ZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy5fdmlldy54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuX3ZpZXcud2lkdGgpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIC8vIOaOp+WItuWZqFxyXG4gICAgICAgIHRoaXMuX2MxID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICAgICAgdGhpcy5fYzIgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMlwiKTtcclxuICAgICAgICAvLyDoh6jmmYJcclxuICAgICAgICAvLyBidWcg5Yid5aeL6K6+572u5LiN5pKt5pS+5LiN55Sf5pWIXHJcbiAgICAgICAgaWYgKHRoaXMuX2MyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIC8vIGxhdW5jaCDop6blj5HlmajmjInpkq5cclxuICAgICAgICB0aGlzLl9sYXVuY2hCdG4gPSB0aGlzLl92aWV3LmdldENoaWxkKFwibGF1bmNoQnRuXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX2xhdW5jaEJ0bi5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja0xhdW5jaCwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOWuueWZqOWkqeaesFxyXG4gICAgICAgIHRoaXMuX2J0bkJveCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJidG5Cb3hcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fYnRuQm94Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrTGlicmEsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9pbWdPYmogPSB0aGlzLl92aWV3LmdldENoaWxkKFwiaW1nT2JqXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIHRoaXMuY2F0Y2hPYmogPSB0aGlzLl92aWV3LmdldENoaWxkKFwiY2F0Y2hTdG9uZVwiKS5hc0NvbTtcclxuXHJcbiAgICAgICAgLy8g5aSp5p6wIOWtkOagj1xyXG4gICAgICAgIGxldCBhR3JvdXAgPSB0aGlzLl9idG5Cb3guZ2V0Q2hpbGQoXCJncmlkc1wiKS5hc0dyb3VwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fYnRuQm94Lm51bUNoaWxkcmVuIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGFHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JpZHMucHVzaChncmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJvcHM6IDAsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuc3dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhdGNoOiBmYWxzZSxcclxuICAgICAgICAgICAgdGl0bGU6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Li05pe2IOemgeatouaTjeS9nOacn+mXtCDliIfpobVcclxuICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOS4tOaXtiBtb2RlbCBjb21wb25lbnQganNvbiDphY3nva7liqDovb1cclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcbiAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSB9ID0gbW9kZWwuY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG5cclxuICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgIGlmIChhZVt2XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1t2XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgIGlmIChhZVt2XS5wb3MpIHRoaXNbdl0ucG9zID0gYWVbdl0ucG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYW5zd2VyKSB0aGlzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQYXRoOiBhbnkgPSBgJHtwYXRoQ29uZmlnLnJlbW90ZVVybH0ke3BhdGhDb25maWcuY29tcG9uZW50QnVuZGxlUGF0aH0ke2NvbXBvbmVudHNba2V5XS5idW5kbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50QnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbXBvbmVudFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb21wb25lbnRCdW5kbGUsIGNvbXBvbmVudHNba2V5XS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbXBvbmVudFByZWZhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g54K55Ye75aSp5p6wIOa2iOmZpOS4gOS4qlxyXG4gICAgcHJpdmF0ZSBfY2xpY2tMaWJyYShldnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5fZ3JpZHMuZmluZEluZGV4KCh2OiBhbnkpID0+IHYudXJsID09PSBudWxsKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2dyaWRzW2luZGV4ID09IC0xID8gdGhpcy5fZ3JpZHMubGVuZ3RoIC0gMSA6IGluZGV4IC0gMV07XHJcbiAgICAgICAgICAgIGdyaWQudXJsID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmRyb3BzID0gc3RhdGUuZHJvcHMgLSAxO1xyXG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kem5Y+R5Zmo54K55Ye7XHJcbiAgICBwcml2YXRlIF9jbGlja0xhdW5jaChldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuY2F0Y2ggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaPkOS6pOeCueWHu1xyXG4gICAgcHJpdmF0ZSBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W54q25oCBXHJcbiAgICBnZXRTdGF0ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShvbGRTdGF0ZTogYW55LCBzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmNhdGNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DYXRjaE9iaigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuZHJvcHMsIHN0YXRlLmRyb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ncmlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9ncmlkc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZHJvcHMgPiBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ3JpZC51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQudXJsID0gdGhpcy5faW1nT2JqLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmlkLnVybCkgZ3JpZC51cmwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSBzdGF0ZS5kcm9wcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmFuc3dlcikgdGhpcy5vbkxpYnJhSGludCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnRpdGxlLCBzdGF0ZS50aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRpdGxlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmRyb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSGFuZGxlR3VpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOetlOahiOWPjemmiFxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIGxldCBjb21wb25lbnQ6IGFueTtcclxuICAgICAgICAvLyBsZXQgcG9zOiBhbnk7XHJcbiAgICAgICAgLy8gaWYgKGJvb2wpIHtcclxuICAgICAgICAvLyAgICAgY29tcG9uZW50ID0gdGhpcy5yaWdodEZlZWQuY29tcG9uZW50O1xyXG4gICAgICAgIC8vICAgICBwb3MgPSB0aGlzLnJpZ2h0RmVlZC5wb3M7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29tcG9uZW50ID0gdGhpcy5lcnJvckZlZWQuY29tcG9uZW50O1xyXG4gICAgICAgIC8vICAgICBwb3MgPSB0aGlzLmVycm9yRmVlZC5wb3M7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQoY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29tcG9uZW50KTtcclxuICAgICAgICAvLyBpZiAocG9zKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIGNvbXBvbmVudC53aWR0aCkgLyAyICsgcG9zLng7XHJcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSBjb21wb25lbnQuaGVpZ2h0KSAvIDIgKyBwb3MueTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBjb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IGNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgLy8gdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKGNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIC8vICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgLy8gfSwgMik7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZlZWRiYWNrKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgZmVlZGJhY2s6IGFueSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmVlZGJhY2spO1xyXG4gICAgICAgIGZlZWRiYWNrLnggPSA5NjA7XHJcbiAgICAgICAgZmVlZGJhY2sueSA9IDU0MDtcclxuICAgICAgICBsZXQgZmVlZGJhY2tKczogYW55ID0gZmVlZGJhY2suZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZmVlZGJhY2tKcy5pbml0KGJvb2wpO1xyXG4gICAgICAgIGZlZWRiYWNrLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZmVlZGJhY2suZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aSp5p6w5o+Q56S6XHJcbiAgICBvbkxpYnJhSGludCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGluZUJsaW5rKSByZXR1cm47XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMubGluZUJsaW5rLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGluZUJsaW5rLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVCbGluay5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQud2lkdGgpIC8gMiArIHRoaXMubGluZUJsaW5rLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVCbGluay5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LmhlaWdodCkgLyAyICsgdGhpcy5saW5lQmxpbmsucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmxpbmVCbGluay5jb21wb25lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaTjeS9nOaPkOekulxyXG4gICAgb25IYW5kbGVHdWlkZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlR3VpZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlR3VpZGUucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQud2lkdGgpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmipPlj5bmn5DnialcclxuICAgIG9uQ2F0Y2hPYmooKSB7XHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmNhdGNoT2JqKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHQwOiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLmNhdGNoT2JqLmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0MC5wbGF5KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmNhdGNoID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JpZDogZmd1aS5HTG9hZGVyID0gdGhpcy5fZ3JpZHMuZmluZCh2ID0+IHYudXJsID09PSBudWxsKTtcclxuICAgICAgICAgICAgaWYgKGdyaWQpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmRyb3BzID0gc3RhdGUuZHJvcHMgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0MTogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5jYXRjaE9iai5nZXRUcmFuc2l0aW9uKFwidDFcIik7XHJcbiAgICAgICAgICAgIHQxLnBsYXkoKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDov5DooYzml7Yg56aB5q2i5pON5L2cXHJcbiAgICBmb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoIWhhbmRsZU1hc2spIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSBuZXcgY2MuTm9kZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5wYXJlbnQgPSB0aGlzLl93b3JsZFJvb3Q7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sud2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueCA9IDk2MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay55ID0gNTQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=