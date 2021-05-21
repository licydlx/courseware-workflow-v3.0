
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ec5eaLDGdCuomOJd9um7kH', 'controller-model02');
// prefabLibrary/controllers/controller-model02/scripts/controller-model02.ts

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
 * @Date: 2020-12-22 11:02:45
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-27 19:13:49
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var _b = window['GlobalData'], gameData = _b.gameData, monitorMessage = _b.monitorMessage;
var _c = window['GlobalData'].sample, loadPrefab = _c.loadPrefab, loadBundle = _c.loadBundle, loadResource = _c.loadResource;
var controller_model02_sendMessage_1 = require("./controller-model02-sendMessage");
var controller_model02_getMessage_1 = require("./controller-model02-getMessage");
var controller_model02 = /** @class */ (function (_super) {
    __extends(controller_model02, _super);
    function controller_model02() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pagePrefabs = []; // 题型预制体集合
        _this._toPage = null;
        return _this;
    }
    controller_model02.prototype.onLoad = function () { };
    controller_model02.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var panelPath, panelBundle, panelPrefab, panelNode, i, modelPath, modelBundle, modelPrefab, resourcePath, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // 素材资源
                        if (!data.pathConfig.resourceName) {
                            console.error("素材资源未配置！");
                            return [2 /*return*/];
                        }
                        // 身份识别 全局变量
                        this.identification();
                        // 时间戳 标记
                        window['GlobalData'].courseData.timestamp = this.getTimestamp();
                        // 临时
                        // 因客户端(electron) 下，globalThis为 undefined
                        if (!window.globalThis) {
                            window.globalThis = {};
                            window.globalThis._ = window._;
                        }
                        this._configJson = data;
                        fgui.GRoot.create();
                        panelPath = "" + data.pathConfig.remoteUrl + data.pathConfig.panelBundlePath + data.pathConfig.panelName;
                        return [4 /*yield*/, loadBundle(panelPath)];
                    case 1:
                        panelBundle = _c.sent();
                        return [4 /*yield*/, loadPrefab(panelBundle, panelBundle.name)];
                    case 2:
                        panelPrefab = _c.sent();
                        panelNode = cc.instantiate(panelPrefab);
                        panelNode.parent = cc.find("Canvas").parent;
                        panelNode.x = 960;
                        panelNode.y = 540;
                        this._panel = panelNode;
                        // 临时
                        // 面板 显示
                        // 如果是学生 面板隐藏
                        if (window['GlobalData'].courseData.role == 2) {
                            if (this._panel)
                                this._panel.opacity = 0;
                        }
                        // 注册 发送信令的出口 逻辑
                        if (window['GlobalData'].sample.registerSendMessage) {
                            window['GlobalData'].sample.registerSendMessage(controller_model02_sendMessage_1.sendMessage.bind(this));
                        }
                        i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(i < data.chapters.length)) return [3 /*break*/, 7];
                        modelPath = "" + data.pathConfig.remoteUrl + data.pathConfig.modelBundlePath + data.chapters[i].model.bundleName;
                        return [4 /*yield*/, loadBundle(modelPath)];
                    case 4:
                        modelBundle = _c.sent();
                        return [4 /*yield*/, loadPrefab(modelBundle, data.chapters[i].model.prefabName)];
                    case 5:
                        modelPrefab = _c.sent();
                        this._pagePrefabs[i] = modelPrefab;
                        _c.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 3];
                    case 7:
                        resourcePath = "" + data.pathConfig.remoteUrl + data.pathConfig.resourceBundlePath + data.pathConfig.resourceName;
                        _a = this;
                        return [4 /*yield*/, loadBundle(resourcePath)];
                    case 8:
                        _a._resourceBundle = _c.sent();
                        _b = gameData;
                        return [4 /*yield*/, this.loadResourcePackage(this._resourceBundle, data.pathConfig.packageName)];
                    case 9:
                        _b.resourceBundle = _c.sent();
                        // 拓课云 初始化
                        this.platformConfig(this._configJson.totalPages);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 加载 fairygui 资源包
    controller_model02.prototype.loadResourcePackage = function (bundle, packageName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        fgui.UIPackage.loadPackage(bundle, packageName, function (error, UIPackage) {
                            resolve(UIPackage._bundle);
                        });
                    })];
            });
        });
    };
    // 页面跳转 配置
    controller_model02.prototype.onJumpConfig = function (toPage) {
        return __awaiter(this, void 0, void 0, function () {
            var page, chapter, prefab, node, nodeJs;
            return __generator(this, function (_a) {
                page = toPage - 1;
                chapter = this._configJson.chapters[page];
                fgui.GRoot.inst.removeChildren(0, -1, true);
                if (this._currentPageNode)
                    this._currentPageNode.destroy();
                prefab = this._pagePrefabs[page];
                node = cc.instantiate(prefab);
                nodeJs = node.getComponent(cc.Component);
                nodeJs.init({ pathConfig: this._configJson.pathConfig, model: chapter.model, components: chapter.components });
                node.parent = this.node;
                this._currentPageNode = node;
                this.resetPanel();
                // 当前页面 state 快照
                window['GlobalData'].courseData.stateShoot = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
                this.recoverState();
                return [2 /*return*/];
            });
        });
    };
    // 身份识别
    controller_model02.prototype.identification = function () {
        var parseURL = window['GlobalData'].utils.parseURL;
        var urlObj = parseURL(window.location.href);
        for (var key in urlObj) {
            if (window['GlobalData'].courseData.hasOwnProperty(key)) {
                window['GlobalData'].courseData[key] = urlObj[key];
            }
        }
        // 临时
        // 安卓ipad 部分账户 无法获取userid 用name替代
        if (!urlObj["userid"]) {
            window['GlobalData'].courseData["userid"] = urlObj["name"];
        }
    };
    // 依赖平台 配置设置
    controller_model02.prototype.platformConfig = function (totalPages) {
        // 端对端通信 监听
        monitorMessage(controller_model02_getMessage_1.getMessage.bind(this));
        // 设置总页面
        window.parent.postMessage(JSON.stringify({ method: 'onPagenum', totalPages: totalPages }), '*');
        // 设置屏幕分辨率
        window.parent.postMessage(JSON.stringify({
            method: 'onLoadComplete',
            coursewareRatio: 16 / 9,
        }), '*');
    };
    // 重置面板
    controller_model02.prototype.resetPanel = function () {
        if (this._panel) {
            var panelJs = this._panel.getComponent(cc.Component);
            // 更新面板 ui 但不传信令
            window['GlobalData'].stateProxy[this._panel.name] = "";
            panelJs.reset();
        }
    };
    // 老师恢复退出时状态
    controller_model02.prototype.recoverState = function () {
        if (window['GlobalData'].courseData.firstLoad) {
            var db = cc.sys.localStorage.getItem('COURSE_SIGNALING_DB');
            if (!db)
                return;
            var signalingDB_1 = JSON.parse(db);
            // 老师 数据缓存
            if (signalingDB_1 && window['GlobalData'].courseData.role == 0) {
                var curStamp = parseInt(this.getTimestamp());
                var preStamp = parseInt(signalingDB_1.timestamp);
                if ((curStamp - preStamp) / 60 < 35) {
                    window['GlobalData'].courseData.timestamp = signalingDB_1.timestamp;
                    var prevState_1 = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
                    Object.keys(prevState_1).forEach(function (v) {
                        if (prevState_1[v] && signalingDB_1.state[v] && !(globalThis._.isEqual(prevState_1[v], signalingDB_1.state[v]))) {
                            // state 流转 临时
                            window['GlobalData'].stateProxy[v] = "";
                            window['GlobalData'].pubSub.emit(signalingDB_1.state[v], v);
                        }
                    });
                }
            }
            window['GlobalData'].courseData.firstLoad = false;
        }
    };
    // 获取当前时间戳 前十位 秒
    controller_model02.prototype.getTimestamp = function () {
        return (+new Date()).toString().substr(0, 10);
    };
    // 同步 倒计时
    controller_model02.prototype.countDown = function (user) {
        var _this = this;
        var count = 6;
        // 以秒为单位的时间间隔
        var interval = 1;
        // 重复次数
        var repeat = 5;
        // 开始延时
        var delay = 0;
        this.schedule(function () {
            count--;
            if (count == 1) {
                _this.sendInfo(user);
            }
        }, interval, repeat, delay);
    };
    controller_model02.prototype.sendInfo = function (user) {
        var state = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
        controller_model02_sendMessage_1.sendMessage(state, user);
    };
    controller_model02 = __decorate([
        ccclass
    ], controller_model02);
    return controller_model02;
}(cc.Component));
exports.default = controller_model02;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMlxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUV0QyxJQUFBLEtBQStCLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBakQsUUFBUSxjQUFBLEVBQUUsY0FBYyxvQkFBeUIsQ0FBQztBQUNwRCxJQUFBLEtBQTJDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQXBFLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsWUFBWSxrQkFBZ0MsQ0FBQztBQUU3RSxtRkFBK0Q7QUFDL0QsaUZBQTZEO0FBRzdEO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBNE1DO1FBeE1XLGtCQUFZLEdBQUcsRUFBRSxDQUFBLENBQVMsVUFBVTtRQUdyQyxhQUFPLEdBQUcsSUFBSSxDQUFDOztJQXFNMUIsQ0FBQztJQW5NRyxtQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUVOLGlDQUFJLEdBQVYsVUFBVyxJQUFTOzs7Ozs7d0JBQ2hCLE9BQU87d0JBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFOzRCQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUMxQixzQkFBTzt5QkFDVjt3QkFFRCxZQUFZO3dCQUNaLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFFdEIsU0FBUzt3QkFDVCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMs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LENBQUMsQ0FBQztJQUM3QixDQUFDO0lBMU1nQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQTRNdEM7SUFBRCx5QkFBQztDQTVNRCxBQTRNQyxDQTVNK0MsRUFBRSxDQUFDLFNBQVMsR0E0TTNEO2tCQTVNb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMC0xMi0yMiAxMTowMjo0NVxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNC0yNyAxOToxMzo0OVxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IHsgZ2FtZURhdGEsIG1vbml0b3JNZXNzYWdlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXTtcclxuY29uc3QgeyBsb2FkUHJlZmFiLCBsb2FkQnVuZGxlLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuXHJcbmltcG9ydCB7IHNlbmRNZXNzYWdlIH0gZnJvbSBcIi4vY29udHJvbGxlci1tb2RlbDAyLXNlbmRNZXNzYWdlXCI7XHJcbmltcG9ydCB7IGdldE1lc3NhZ2UgfSBmcm9tIFwiLi9jb250cm9sbGVyLW1vZGVsMDItZ2V0TWVzc2FnZVwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY29udHJvbGxlcl9tb2RlbDAyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX2NvbmZpZ0pzb246IGFueTsgICAgICAgICAvLyDphY3nva5qc29uXHJcbiAgICBwcml2YXRlIF9wYW5lbDogYW55OyAgICAgICAgICAgICAgLy8g6Z2i5p2/XHJcbiAgICBwcml2YXRlIF9yZXNvdXJjZUJ1bmRsZTogYW55OyAgICAgLy8gZmFpcnlndWkg6L+c56iLYnVuZGxlXHJcbiAgICBwcml2YXRlIF9wYWdlUHJlZmFicyA9IFtdICAgICAgICAgLy8g6aKY5Z6L6aKE5Yi25L2T6ZuG5ZCIXHJcbiAgICBwcml2YXRlIF9jdXJyZW50UGFnZU5vZGU6IGFueTsgICAgLy8g5b2T5YmN6aKY5Z6L6IqC54K5XHJcblxyXG4gICAgcHVibGljIF90b1BhZ2UgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g57Sg5p2Q6LWE5rqQXHJcbiAgICAgICAgaWYgKCFkYXRhLnBhdGhDb25maWcucmVzb3VyY2VOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLntKDmnZDotYTmupDmnKrphY3nva7vvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOi6q+S7veivhuWIqyDlhajlsYDlj5jph49cclxuICAgICAgICB0aGlzLmlkZW50aWZpY2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIOaXtumXtOaIsyDmoIforrBcclxuICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnRpbWVzdGFtcCA9IHRoaXMuZ2V0VGltZXN0YW1wKCk7XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtlxyXG4gICAgICAgIC8vIOWboOWuouaIt+erryhlbGVjdHJvbikg5LiL77yMZ2xvYmFsVGhpc+S4uiB1bmRlZmluZWRcclxuICAgICAgICBpZiAoIXdpbmRvdy5nbG9iYWxUaGlzKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxUaGlzID0ge307XHJcbiAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxUaGlzLl8gPSB3aW5kb3cuXztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbmZpZ0pzb24gPSBkYXRhO1xyXG5cclxuICAgICAgICBmZ3VpLkdSb290LmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAvLyDnlJ/miJDpnaLmnb9cclxuICAgICAgICBsZXQgcGFuZWxQYXRoOiBhbnkgPSBgJHtkYXRhLnBhdGhDb25maWcucmVtb3RlVXJsfSR7ZGF0YS5wYXRoQ29uZmlnLnBhbmVsQnVuZGxlUGF0aH0ke2RhdGEucGF0aENvbmZpZy5wYW5lbE5hbWV9YDtcclxuICAgICAgICBsZXQgcGFuZWxCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUocGFuZWxQYXRoKTtcclxuICAgICAgICBsZXQgcGFuZWxQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIocGFuZWxCdW5kbGUsIHBhbmVsQnVuZGxlLm5hbWUpO1xyXG4gICAgICAgIGxldCBwYW5lbE5vZGU6IGFueSA9IGNjLmluc3RhbnRpYXRlKHBhbmVsUHJlZmFiKTtcclxuICAgICAgICBwYW5lbE5vZGUucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcbiAgICAgICAgcGFuZWxOb2RlLnggPSA5NjA7XHJcbiAgICAgICAgcGFuZWxOb2RlLnkgPSA1NDA7XHJcbiAgICAgICAgdGhpcy5fcGFuZWwgPSBwYW5lbE5vZGU7XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtlxyXG4gICAgICAgIC8vIOmdouadvyDmmL7npLpcclxuICAgICAgICAvLyDlpoLmnpzmmK/lrabnlJ8g6Z2i5p2/6ZqQ6JePXHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYW5lbCkgdGhpcy5fcGFuZWwub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDms6jlhowg5Y+R6YCB5L+h5Luk55qE5Ye65Y+jIOmAu+i+kVxyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTZW5kTWVzc2FnZSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTZW5kTWVzc2FnZShzZW5kTWVzc2FnZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWKoOi9vSDmiYDmnInpopjlnovpooTliLbku7ZcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2hhcHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1vZGVsUGF0aDogYW55ID0gYCR7ZGF0YS5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2RhdGEucGF0aENvbmZpZy5tb2RlbEJ1bmRsZVBhdGh9JHtkYXRhLmNoYXB0ZXJzW2ldLm1vZGVsLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgbGV0IG1vZGVsQnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKG1vZGVsUGF0aCk7XHJcbiAgICAgICAgICAgIGxldCBtb2RlbFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihtb2RlbEJ1bmRsZSwgZGF0YS5jaGFwdGVyc1tpXS5tb2RlbC5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZVByZWZhYnNbaV0gPSBtb2RlbFByZWZhYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWKoOi9vXVpIOi1hOa6kOWMhVxyXG4gICAgICAgIGxldCByZXNvdXJjZVBhdGg6IGFueSA9IGAke2RhdGEucGF0aENvbmZpZy5yZW1vdGVVcmx9JHtkYXRhLnBhdGhDb25maWcucmVzb3VyY2VCdW5kbGVQYXRofSR7ZGF0YS5wYXRoQ29uZmlnLnJlc291cmNlTmFtZX1gO1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlQnVuZGxlID0gYXdhaXQgbG9hZEJ1bmRsZShyZXNvdXJjZVBhdGgpO1xyXG4gICAgICAgIGdhbWVEYXRhLnJlc291cmNlQnVuZGxlID0gYXdhaXQgdGhpcy5sb2FkUmVzb3VyY2VQYWNrYWdlKHRoaXMuX3Jlc291cmNlQnVuZGxlLCBkYXRhLnBhdGhDb25maWcucGFja2FnZU5hbWUpO1xyXG5cclxuICAgICAgICAvLyDmi5Por77kupEg5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybUNvbmZpZyh0aGlzLl9jb25maWdKc29uLnRvdGFsUGFnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWKoOi9vSBmYWlyeWd1aSDotYTmupDljIVcclxuICAgIGFzeW5jIGxvYWRSZXNvdXJjZVBhY2thZ2UoYnVuZGxlOiBhbnksIHBhY2thZ2VOYW1lOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5sb2FkUGFja2FnZShidW5kbGUsIHBhY2thZ2VOYW1lLCAoZXJyb3IsIFVJUGFja2FnZTphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoVUlQYWNrYWdlLl9idW5kbGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOmhtemdoui3s+i9rCDphY3nva5cclxuICAgIGFzeW5jIG9uSnVtcENvbmZpZyh0b1BhZ2U6IGFueSkge1xyXG4gICAgICAgIGxldCBwYWdlOiBudW1iZXIgPSB0b1BhZ2UgLSAxO1xyXG4gICAgICAgIGxldCBjaGFwdGVyOiBhbnkgPSB0aGlzLl9jb25maWdKc29uLmNoYXB0ZXJzW3BhZ2VdO1xyXG5cclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGRyZW4oMCwgLTEsIHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZU5vZGUpIHRoaXMuX2N1cnJlbnRQYWdlTm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGxldCBwcmVmYWI6IGFueSA9IHRoaXMuX3BhZ2VQcmVmYWJzW3BhZ2VdO1xyXG4gICAgICAgIGxldCBub2RlOiBhbnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIGxldCBub2RlSnMgPSBub2RlLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIG5vZGVKcy5pbml0KHsgcGF0aENvbmZpZzogdGhpcy5fY29uZmlnSnNvbi5wYXRoQ29uZmlnLCBtb2RlbDogY2hhcHRlci5tb2RlbCwgY29tcG9uZW50czogY2hhcHRlci5jb21wb25lbnRzIH0pO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgICB0aGlzLl9jdXJyZW50UGFnZU5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMucmVzZXRQYW5lbCgpO1xyXG4gICAgICAgIC8vIOW9k+WJjemhtemdoiBzdGF0ZSDlv6vnhadcclxuICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnN0YXRlU2hvb3QgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbXCJzdGF0ZVwiXSk7XHJcbiAgICAgICAgdGhpcy5yZWNvdmVyU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDouqvku73or4bliKtcclxuICAgIGlkZW50aWZpY2F0aW9uKCkge1xyXG4gICAgICAgIGxldCBwYXJzZVVSTCA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzLnBhcnNlVVJMO1xyXG4gICAgICAgIGxldCB1cmxPYmogPSBwYXJzZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXJsT2JqKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGFba2V5XSA9IHVybE9ialtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS4tOaXtlxyXG4gICAgICAgIC8vIOWuieWNk2lwYWQg6YOo5YiG6LSm5oi3IOaXoOazleiOt+WPlnVzZXJpZCDnlKhuYW1l5pu/5LujXHJcbiAgICAgICAgaWYgKCF1cmxPYmpbXCJ1c2VyaWRcIl0pIHtcclxuICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YVtcInVzZXJpZFwiXSA9IHVybE9ialtcIm5hbWVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS+nei1luW5s+WPsCDphY3nva7orr7nva5cclxuICAgIHBsYXRmb3JtQ29uZmlnKHRvdGFsUGFnZXM6IG51bWJlcikge1xyXG4gICAgICAgIC8vIOerr+Wvueerr+mAmuS/oSDnm5HlkKxcclxuICAgICAgICBtb25pdG9yTWVzc2FnZShnZXRNZXNzYWdlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIOiuvue9ruaAu+mhtemdolxyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWV0aG9kOiAnb25QYWdlbnVtJywgdG90YWxQYWdlczogdG90YWxQYWdlcyB9KSxcclxuICAgICAgICAgICAgJyonXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDorr7nva7lsY/luZXliIbovqjnjodcclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdvbkxvYWRDb21wbGV0ZScsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2V3YXJlUmF0aW86IDE2IC8gOSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICcqJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6YeN572u6Z2i5p2/XHJcbiAgICByZXNldFBhbmVsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYW5lbCkge1xyXG4gICAgICAgICAgICBsZXQgcGFuZWxKczogYW55ID0gdGhpcy5fcGFuZWwuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIOabtOaWsOmdouadvyB1aSDkvYbkuI3kvKDkv6Hku6RcclxuICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt0aGlzLl9wYW5lbC5uYW1lXSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHBhbmVsSnMucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ICB5biI5oGi5aSN6YCA5Ye65pe254q25oCBXHJcbiAgICByZWNvdmVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuZmlyc3RMb2FkKSB7XHJcbiAgICAgICAgICAgIGxldCBkYjogYW55ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDT1VSU0VfU0lHTkFMSU5HX0RCJyk7XHJcbiAgICAgICAgICAgIGlmICghZGIpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IHNpZ25hbGluZ0RCID0gSlNPTi5wYXJzZShkYik7XHJcbiAgICAgICAgICAgIC8vIOiAgeW4iCDmlbDmja7nvJPlrZhcclxuICAgICAgICAgICAgaWYgKHNpZ25hbGluZ0RCICYmIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEucm9sZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyU3RhbXAgPSBwYXJzZUludCh0aGlzLmdldFRpbWVzdGFtcCgpKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVTdGFtcCA9IHBhcnNlSW50KHNpZ25hbGluZ0RCLnRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJTdGFtcCAtIHByZVN0YW1wKSAvIDYwIDwgMzUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnRpbWVzdGFtcCA9IHNpZ25hbGluZ0RCLnRpbWVzdGFtcDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldlN0YXRlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W1wic3RhdGVcIl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZVt2XSAmJiBzaWduYWxpbmdEQi5zdGF0ZVt2XSAmJiAhKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgc2lnbmFsaW5nREIuc3RhdGVbdl0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGUg5rWB6L2sIOS4tOaXtlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5wdWJTdWIuZW1pdChzaWduYWxpbmdEQi5zdGF0ZVt2XSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLmZpcnN0TG9hZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5blvZPliY3ml7bpl7TmiLMg5YmN5Y2B5L2NIOenklxyXG4gICAgZ2V0VGltZXN0YW1wKCkge1xyXG4gICAgICAgIHJldHVybiAoK25ldyBEYXRlKCkpLnRvU3RyaW5nKCkuc3Vic3RyKDAsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlkIzmraUg5YCS6K6h5pe2XHJcbiAgICBjb3VudERvd24odXNlcjogYW55KSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gNjtcclxuICAgICAgICAvLyDku6Xnp5LkuLrljZXkvY3nmoTml7bpl7Tpl7TpmpRcclxuICAgICAgICBsZXQgaW50ZXJ2YWwgPSAxO1xyXG4gICAgICAgIC8vIOmHjeWkjeasoeaVsFxyXG4gICAgICAgIGxldCByZXBlYXQgPSA1O1xyXG4gICAgICAgIC8vIOW8gOWni+W7tuaXtlxyXG4gICAgICAgIGxldCBkZWxheSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbmZvKHVzZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgaW50ZXJ2YWwsIHJlcGVhdCwgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRJbmZvKHVzZXI6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAod2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVtcInN0YXRlXCJdKTtcclxuICAgICAgICBzZW5kTWVzc2FnZShzdGF0ZSwgdXNlcik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==