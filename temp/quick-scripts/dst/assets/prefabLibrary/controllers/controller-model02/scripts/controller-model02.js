
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
 * @LastEditTime: 2021-04-20 12:24:38
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var monitorMessage = window['GlobalData'].monitorMessage;
var _b = window['GlobalData'].sample, loadPrefab = _b.loadPrefab, loadBundle = _b.loadBundle;
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
            var panelPath, panelBundle, panelPrefab, panelNode, i, modelPath, modelBundle, modelPrefab, resourcePath, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
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
                        panelBundle = _b.sent();
                        return [4 /*yield*/, loadPrefab(panelBundle, panelBundle.name)];
                    case 2:
                        panelPrefab = _b.sent();
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
                        _b.label = 3;
                    case 3:
                        if (!(i < data.chapters.length)) return [3 /*break*/, 7];
                        modelPath = "" + data.pathConfig.remoteUrl + data.pathConfig.modelBundlePath + data.chapters[i].modelBundle;
                        return [4 /*yield*/, loadBundle(modelPath)];
                    case 4:
                        modelBundle = _b.sent();
                        return [4 /*yield*/, loadPrefab(modelBundle, data.chapters[i].prefabName)];
                    case 5:
                        modelPrefab = _b.sent();
                        this._pagePrefabs[i] = modelPrefab;
                        _b.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 3];
                    case 7:
                        resourcePath = "" + data.pathConfig.remoteUrl + data.pathConfig.resourceBundlePath + data.pathConfig.resourceName;
                        _a = this;
                        return [4 /*yield*/, loadBundle(resourcePath)];
                    case 8:
                        _a._resourceBundle = _b.sent();
                        return [4 /*yield*/, this.loadResourcePackage(this._resourceBundle, data.pathConfig.packageName)];
                    case 9:
                        _b.sent();
                        // 拓课云 初始化
                        this.platformConfig(this._configJson.totalPages);
                        return [2 /*return*/];
                }
            });
        });
    };
    controller_model02.prototype.loadResourcePackage = function (bundle, packageName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        fgui.UIPackage.loadPackage(bundle, packageName, function () {
                            resolve(true);
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
                nodeJs.init({ Package: this._configJson.pathConfig.packageName, GComponent: chapter.uiPath, config: chapter.config });
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
                        if (!(globalThis._.isEqual(prevState_1[v], signalingDB_1.state[v]))) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMlxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUVwQyxJQUFBLGNBQWMsR0FBSyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQXpCLENBQTBCO0FBQzFDLElBQUEsS0FBNkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBdEQsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQWdDLENBQUM7QUFFL0QsbUZBQStEO0FBQy9ELGlGQUE2RDtBQUc3RDtJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQTJNQztRQXZNVyxrQkFBWSxHQUFHLEVBQUUsQ0FBQSxDQUFTLFVBQVU7UUFHckMsYUFBTyxHQUFHLElBQUksQ0FBQzs7SUFvTTFCLENBQUM7SUFsTUcsbUNBQU0sR0FBTixjQUFXLENBQUM7SUFFTixpQ0FBSSxHQUFWLFVBQVcsSUFBUzs7Ozs7O3dCQUNoQixPQUFPO3dCQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTs0QkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDMUIsc0JBQU87eUJBQ1Y7d0JBRUQsWUFBWTt3QkFDWixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBRXRCLFNBQVM7d0JBQ1QsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUVoRSxLQUFLO3dCQUNMLHlDQUF5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KiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIwLTEyLTIyIDExOjAyOjQ1XHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTIwIDEyOjI0OjM4XHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuY29uc3QgeyBtb25pdG9yTWVzc2FnZSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ107XHJcbmNvbnN0IHsgbG9hZFByZWZhYiwgbG9hZEJ1bmRsZSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5cclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2UgfSBmcm9tIFwiLi9jb250cm9sbGVyLW1vZGVsMDItc2VuZE1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0TWVzc2FnZSB9IGZyb20gXCIuL2NvbnRyb2xsZXItbW9kZWwwMi1nZXRNZXNzYWdlXCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb250cm9sbGVyX21vZGVsMDIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnSnNvbjogYW55OyAgICAgICAgIC8vIOmFjee9rmpzb25cclxuICAgIHByaXZhdGUgX3BhbmVsOiBhbnk7ICAgICAgICAgICAgICAvLyDpnaLmnb9cclxuICAgIHByaXZhdGUgX3Jlc291cmNlQnVuZGxlOiBhbnk7ICAgICAvLyBmYWlyeWd1aSDntKDmnZDotYTmupBcclxuICAgIHByaXZhdGUgX3BhZ2VQcmVmYWJzID0gW10gICAgICAgICAvLyDpopjlnovpooTliLbkvZPpm4blkIhcclxuICAgIHByaXZhdGUgX2N1cnJlbnRQYWdlTm9kZTogYW55OyAgICAvLyDlvZPliY3popjlnovoioLngrlcclxuXHJcbiAgICBwdWJsaWMgX3RvUGFnZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkgeyB9XHJcblxyXG4gICAgYXN5bmMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyDntKDmnZDotYTmupBcclxuICAgICAgICBpZiAoIWRhdGEucGF0aENvbmZpZy5yZXNvdXJjZU5hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIue0oOadkOi1hOa6kOacqumFjee9ru+8gVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6Lqr5Lu96K+G5YirIOWFqOWxgOWPmOmHj1xyXG4gICAgICAgIHRoaXMuaWRlbnRpZmljYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8g5pe26Ze05oizIOagh+iusFxyXG4gICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEudGltZXN0YW1wID0gdGhpcy5nZXRUaW1lc3RhbXAoKTtcclxuXHJcbiAgICAgICAgLy8g5Li05pe2XHJcbiAgICAgICAgLy8g5Zug5a6i5oi356uvKGVsZWN0cm9uKSDkuIvvvIxnbG9iYWxUaGlz5Li6IHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICghd2luZG93Lmdsb2JhbFRoaXMpIHtcclxuICAgICAgICAgICAgd2luZG93Lmdsb2JhbFRoaXMgPSB7fTtcclxuICAgICAgICAgICAgd2luZG93Lmdsb2JhbFRoaXMuXyA9IHdpbmRvdy5fO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY29uZmlnSnNvbiA9IGRhdGE7XHJcblxyXG4gICAgICAgIGZndWkuR1Jvb3QuY3JlYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIOeUn+aIkOmdouadv1xyXG4gICAgICAgIGxldCBwYW5lbFBhdGg6IGFueSA9IGAke2RhdGEucGF0aENvbmZpZy5yZW1vdGVVcmx9JHtkYXRhLnBhdGhDb25maWcucGFuZWxCdW5kbGVQYXRofSR7ZGF0YS5wYXRoQ29uZmlnLnBhbmVsTmFtZX1gO1xyXG4gICAgICAgIGxldCBwYW5lbEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShwYW5lbFBhdGgpO1xyXG4gICAgICAgIGxldCBwYW5lbFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihwYW5lbEJ1bmRsZSwgcGFuZWxCdW5kbGUubmFtZSk7XHJcbiAgICAgICAgbGV0IHBhbmVsTm9kZTogYW55ID0gY2MuaW5zdGFudGlhdGUocGFuZWxQcmVmYWIpO1xyXG4gICAgICAgIHBhbmVsTm9kZS5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuICAgICAgICBwYW5lbE5vZGUueCA9IDk2MDtcclxuICAgICAgICBwYW5lbE5vZGUueSA9IDU0MDtcclxuICAgICAgICB0aGlzLl9wYW5lbCA9IHBhbmVsTm9kZTtcclxuXHJcbiAgICAgICAgLy8g5Li05pe2XHJcbiAgICAgICAgLy8g6Z2i5p2/IOaYvuekulxyXG4gICAgICAgIC8vIOWmguaenOaYr+WtpueUnyDpnaLmnb/pmpDol49cclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhbmVsKSB0aGlzLl9wYW5lbC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOazqOWGjCDlj5HpgIHkv6Hku6TnmoTlh7rlj6Mg6YC76L6RXHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclNlbmRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclNlbmRNZXNzYWdlKHNlbmRNZXNzYWdlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yqg6L29IOaJgOaciemimOWei+mihOWItuS7tlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jaGFwdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbW9kZWxQYXRoOiBhbnkgPSBgJHtkYXRhLnBhdGhDb25maWcucmVtb3RlVXJsfSR7ZGF0YS5wYXRoQ29uZmlnLm1vZGVsQnVuZGxlUGF0aH0ke2RhdGEuY2hhcHRlcnNbaV0ubW9kZWxCdW5kbGV9YDtcclxuICAgICAgICAgICAgbGV0IG1vZGVsQnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKG1vZGVsUGF0aCk7XHJcbiAgICAgICAgICAgIGxldCBtb2RlbFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihtb2RlbEJ1bmRsZSwgZGF0YS5jaGFwdGVyc1tpXS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZVByZWZhYnNbaV0gPSBtb2RlbFByZWZhYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWKoOi9vXVpIOi1hOa6kOWMhVxyXG4gICAgICAgIGxldCByZXNvdXJjZVBhdGg6IGFueSA9IGAke2RhdGEucGF0aENvbmZpZy5yZW1vdGVVcmx9JHtkYXRhLnBhdGhDb25maWcucmVzb3VyY2VCdW5kbGVQYXRofSR7ZGF0YS5wYXRoQ29uZmlnLnJlc291cmNlTmFtZX1gO1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlQnVuZGxlID0gYXdhaXQgbG9hZEJ1bmRsZShyZXNvdXJjZVBhdGgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFJlc291cmNlUGFja2FnZSh0aGlzLl9yZXNvdXJjZUJ1bmRsZSwgZGF0YS5wYXRoQ29uZmlnLnBhY2thZ2VOYW1lKTtcclxuXHJcbiAgICAgICAgLy8g5ouT6K++5LqRIOWIneWni+WMllxyXG4gICAgICAgIHRoaXMucGxhdGZvcm1Db25maWcodGhpcy5fY29uZmlnSnNvbi50b3RhbFBhZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkUmVzb3VyY2VQYWNrYWdlKGJ1bmRsZTogYW55LCBwYWNrYWdlTmFtZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5VSVBhY2thZ2UubG9hZFBhY2thZ2UoYnVuZGxlLCBwYWNrYWdlTmFtZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDpobXpnaLot7Povawg6YWN572uXHJcbiAgICBhc3luYyBvbkp1bXBDb25maWcodG9QYWdlOiBhbnkpIHtcclxuICAgICAgICBsZXQgcGFnZTogbnVtYmVyID0gdG9QYWdlIC0gMTtcclxuICAgICAgICBsZXQgY2hhcHRlcjogYW55ID0gdGhpcy5fY29uZmlnSnNvbi5jaGFwdGVyc1twYWdlXTtcclxuXHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkcmVuKDAsIC0xLCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFBhZ2VOb2RlKSB0aGlzLl9jdXJyZW50UGFnZU5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICBsZXQgcHJlZmFiOiBhbnkgPSB0aGlzLl9wYWdlUHJlZmFic1twYWdlXTtcclxuICAgICAgICBsZXQgbm9kZTogYW55ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICBsZXQgbm9kZUpzID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBub2RlSnMuaW5pdCh7IFBhY2thZ2U6IHRoaXMuX2NvbmZpZ0pzb24ucGF0aENvbmZpZy5wYWNrYWdlTmFtZSwgR0NvbXBvbmVudDogY2hhcHRlci51aVBhdGgsIGNvbmZpZzogY2hhcHRlci5jb25maWcgfSk7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5yZXNldFBhbmVsKCk7XHJcbiAgICAgICAgLy8g5b2T5YmN6aG16Z2iIHN0YXRlIOW/q+eFp1xyXG4gICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuc3RhdGVTaG9vdCA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAod2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVtcInN0YXRlXCJdKTtcclxuICAgICAgICB0aGlzLnJlY292ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi6q+S7veivhuWIq1xyXG4gICAgaWRlbnRpZmljYXRpb24oKSB7XHJcbiAgICAgICAgbGV0IHBhcnNlVVJMID0gd2luZG93WydHbG9iYWxEYXRhJ10udXRpbHMucGFyc2VVUkw7XHJcbiAgICAgICAgbGV0IHVybE9iaiA9IHBhcnNlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1cmxPYmopIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YVtrZXldID0gdXJsT2JqW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Li05pe2XHJcbiAgICAgICAgLy8g5a6J5Y2TaXBhZCDpg6jliIbotKbmiLcg5peg5rOV6I635Y+WdXNlcmlkIOeUqG5hbWXmm7/ku6NcclxuICAgICAgICBpZiAoIXVybE9ialtcInVzZXJpZFwiXSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhW1widXNlcmlkXCJdID0gdXJsT2JqW1wibmFtZVwiXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5L6d6LWW5bmz5Y+wIOmFjee9ruiuvue9rlxyXG4gICAgcGxhdGZvcm1Db25maWcodG90YWxQYWdlczogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8g56uv5a+556uv6YCa5L+hIOebkeWQrFxyXG4gICAgICAgIG1vbml0b3JNZXNzYWdlKGdldE1lc3NhZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8g6K6+572u5oC76aG16Z2iXHJcbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXRob2Q6ICdvblBhZ2VudW0nLCB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzIH0pLFxyXG4gICAgICAgICAgICAnKidcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIOiuvue9ruWxj+W5leWIhui+qOeOh1xyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ29uTG9hZENvbXBsZXRlJyxcclxuICAgICAgICAgICAgICAgIGNvdXJzZXdhcmVSYXRpbzogMTYgLyA5LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgJyonXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDph43nva7pnaLmnb9cclxuICAgIHJlc2V0UGFuZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhbmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBwYW5lbEpzOiBhbnkgPSB0aGlzLl9wYW5lbC5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgLy8g5pu05paw6Z2i5p2/IHVpIOS9huS4jeS8oOS/oeS7pFxyXG4gICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W3RoaXMuX3BhbmVsLm5hbWVdID0gXCJcIjtcclxuICAgICAgICAgICAgcGFuZWxKcy5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDogIHluIjmgaLlpI3pgIDlh7rml7bnirbmgIFcclxuICAgIHJlY292ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5maXJzdExvYWQpIHtcclxuICAgICAgICAgICAgbGV0IGRiOiBhbnkgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NPVVJTRV9TSUdOQUxJTkdfREInKTtcclxuICAgICAgICAgICAgaWYgKCFkYikgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgc2lnbmFsaW5nREIgPSBKU09OLnBhcnNlKGRiKTtcclxuICAgICAgICAgICAgLy8g6ICB5biIIOaVsOaNrue8k+WtmFxyXG4gICAgICAgICAgICBpZiAoc2lnbmFsaW5nREIgJiYgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJTdGFtcCA9IHBhcnNlSW50KHRoaXMuZ2V0VGltZXN0YW1wKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZVN0YW1wID0gcGFyc2VJbnQoc2lnbmFsaW5nREIudGltZXN0YW1wKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1clN0YW1wIC0gcHJlU3RhbXApIC8gNjAgPCAzNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEudGltZXN0YW1wID0gc2lnbmFsaW5nREIudGltZXN0YW1wO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2U3RhdGUgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbXCJzdGF0ZVwiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShnbG9iYWxUaGlzLl8uaXNFcXVhbChwcmV2U3RhdGVbdl0sIHNpZ25hbGluZ0RCLnN0YXRlW3ZdKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlIOa1gei9rCDkuLTml7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoc2lnbmFsaW5nREIuc3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5maXJzdExvYWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze05oizIOWJjeWNgeS9jSDnp5JcclxuICAgIGdldFRpbWVzdGFtcCgpIHtcclxuICAgICAgICByZXR1cm4gKCtuZXcgRGF0ZSgpKS50b1N0cmluZygpLnN1YnN0cigwLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ZCM5q2lIOWAkuiuoeaXtlxyXG4gICAgY291bnREb3duKHVzZXI6IGFueSkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDY7XHJcbiAgICAgICAgLy8g5Lul56eS5Li65Y2V5L2N55qE5pe26Ze06Ze06ZqUXHJcbiAgICAgICAgbGV0IGludGVydmFsID0gMTtcclxuICAgICAgICAvLyDph43lpI3mrKHmlbBcclxuICAgICAgICBsZXQgcmVwZWF0ID0gNTtcclxuICAgICAgICAvLyDlvIDlp4vlu7bml7ZcclxuICAgICAgICBsZXQgZGVsYXkgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kSW5mbyh1c2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGludGVydmFsLCByZXBlYXQsIGRlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kSW5mbyh1c2VyOiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbXCJzdGF0ZVwiXSk7XHJcbiAgICAgICAgc2VuZE1lc3NhZ2Uoc3RhdGUsIHVzZXIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=