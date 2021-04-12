
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
 * @LastEditTime: 2021-04-12 18:51:04
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
                            console.log("loadResourcePackage");
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
                nodeJs.init({ Package: this._configJson.pathConfig.packageName, GComponent: chapter.uiPath });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMlxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUVwQyxJQUFBLGNBQWMsR0FBSyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQXpCLENBQTBCO0FBQzFDLElBQUEsS0FBNkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBdEQsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQWdDLENBQUM7QUFFL0QsbUZBQStEO0FBQy9ELGlGQUE2RDtBQUc3RDtJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQTRNQztRQXhNVyxrQkFBWSxHQUFHLEVBQUUsQ0FBQSxDQUFTLFVBQVU7UUFHckMsYUFBTyxHQUFHLElBQUksQ0FBQzs7SUFxTTFCLENBQUM7SUFuTUcsbUNBQU0sR0FBTixjQUFXLENBQUM7SUFFTixpQ0FBSSxHQUFWLFVBQVcsSUFBUzs7Ozs7O3dCQUNoQixPQUFPO3dCQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTs0QkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDMUIsc0JBQU87eUJBQ1Y7d0JBRUQsWUFBWTt3QkFDWixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBRXRCLFNBQVM7d0JBQ1QsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUVoRSxLQUFLO3dCQUNMLHlDQUF5Qzt3QkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7NEJBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOzRCQUN2QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUNsQzt3QkFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFHaEIsU0FBUyxHQUFRLEtBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFXLENBQUM7d0JBQzNGLHFCQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQTlDLFdBQVcsR0FBUSxTQUEyQjt3QkFDM0IscUJBQU0sVUFBVSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFsRSxXQUFXLEdBQVEsU0FBK0M7d0JBQ2xFLFNBQVMsR0FBUSxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNqRCxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUM1QyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDbEIsU0FBUyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO3dCQUV4QixLQUFLO3dCQUNMLFFBQVE7d0JBQ1IsYUFBYTt3QkFDYixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTs0QkFDM0MsSUFBSSxJQUFJLENBQUMsTUFBTTtnQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7eUJBQzVDO3dCQUVELGdCQUFnQjt3QkFDaEIsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFOzRCQUNqRCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLDRDQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7eUJBQzNFO3dCQUdRLENBQUMsR0FBRyxDQUFDOzs7NkJBQUUsQ0FBQSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUE7d0JBQ2hDLFNBQVMsR0FBUSxLQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBYSxDQUFDO3dCQUM5RixxQkFBTSxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUE5QyxXQUFXLEdBQVEsU0FBMkI7d0JBQzNCLHFCQUFNLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQTdFLFdBQVcsR0FBUSxTQUEwRDt3QkFDakYsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7Ozt3QkFKRyxDQUFDLEVBQUUsQ0FBQTs7O3dCQVF6QyxZQUFZLEdBQVEsS0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBYyxDQUFDO3dCQUMzSCxLQUFBLElBQUksQ0FBQTt3QkFBbUIscUJBQU0sVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBckQsR0FBSyxlQUFlLEdBQUcsU0FBOEIsQ0FBQzt3QkFDdEQscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBQTs7d0JBQWpGLFNBQWlGLENBQUM7d0JBRWxGLFVBQVU7d0JBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztLQUNwRDtJQUVLLGdEQUFtQixHQUF6QixVQUEwQixNQUFXLEVBQUUsV0FBZ0I7OztnQkFDbkQsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRTs0QkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBOzRCQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxFQUFBOzs7S0FDTDtJQUVELFVBQVU7SUFDSix5Q0FBWSxHQUFsQixVQUFtQixNQUFXOzs7O2dCQUN0QixJQUFJLEdBQVcsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxHQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVuRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7b0JBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUV2RCxNQUFNLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxHQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBRXhCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsZ0JBQWdCO2dCQUNoQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzlHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztLQUN2QjtJQUVELE9BQU87SUFDUCwyQ0FBYyxHQUFkO1FBQ0ksSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDbkQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDdEIsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckQsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEQ7U0FDSjtRQUNELEtBQUs7UUFDTCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5RDtJQUNMLENBQUM7SUFFRCxZQUFZO0lBQ1osMkNBQWMsR0FBZCxVQUFlLFVBQWtCO1FBQzdCLFdBQVc7UUFDWCxjQUFjLENBQUMsMENBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QyxRQUFRO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUMvRCxHQUFHLENBQ04sQ0FBQztRQUNGLFVBQVU7UUFDVixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNYLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsZUFBZSxFQUFFLEVBQUUsR0FBRyxDQUFDO1NBQzFCLENBQUMsRUFDRixHQUFHLENBQ04sQ0FBQztJQUNOLENBQUM7SUFFRCxPQUFPO0lBQ1AsdUNBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksT0FBTyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxnQkFBZ0I7WUFDaEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN2RCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsWUFBWTtJQUNaLHlDQUFZLEdBQVo7UUFDSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQzNDLElBQUksRUFBRSxHQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxFQUFFO2dCQUFFLE9BQU87WUFDaEIsSUFBSSxhQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQyxVQUFVO1lBQ1YsSUFBSSxhQUFXLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUMxRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQzdDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRS9DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsYUFBVyxDQUFDLFNBQVMsQ0FBQztvQkFDbEUsSUFBSSxXQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUVqRixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7d0JBQzdCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDN0QsY0FBYzs0QkFDZCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDeEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDN0Q7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ047YUFDSjtZQUNELE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIseUNBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxTQUFTO0lBQ1Qsc0NBQVMsR0FBVCxVQUFVLElBQVM7UUFBbkIsaUJBY0M7UUFiRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxhQUFhO1FBQ2IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE9BQU87UUFDUCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixPQUFPO1FBQ1AsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUNaLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7UUFDTCxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLElBQVM7UUFDZCxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0UsNENBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTFNZ0Isa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0E0TXRDO0lBQUQseUJBQUM7Q0E1TUQsQUE0TUMsQ0E1TStDLEVBQUUsQ0FBQyxTQUFTLEdBNE0zRDtrQkE1TW9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjAtMTItMjIgMTE6MDI6NDVcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDQtMTIgMTg6NTE6MDRcclxuICovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCB7IG1vbml0b3JNZXNzYWdlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXTtcclxuY29uc3QgeyBsb2FkUHJlZmFiLCBsb2FkQnVuZGxlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcblxyXG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gXCIuL2NvbnRyb2xsZXItbW9kZWwwMi1zZW5kTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBnZXRNZXNzYWdlIH0gZnJvbSBcIi4vY29udHJvbGxlci1tb2RlbDAyLWdldE1lc3NhZ2VcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbnRyb2xsZXJfbW9kZWwwMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9jb25maWdKc29uOiBhbnk7ICAgICAgICAgLy8g6YWN572uanNvblxyXG4gICAgcHJpdmF0ZSBfcGFuZWw6IGFueTsgICAgICAgICAgICAgIC8vIOmdouadv1xyXG4gICAgcHJpdmF0ZSBfcmVzb3VyY2VCdW5kbGU6IGFueTsgICAgIC8vIGZhaXJ5Z3VpIOe0oOadkOi1hOa6kFxyXG4gICAgcHJpdmF0ZSBfcGFnZVByZWZhYnMgPSBbXSAgICAgICAgIC8vIOmimOWei+mihOWItuS9k+mbhuWQiFxyXG4gICAgcHJpdmF0ZSBfY3VycmVudFBhZ2VOb2RlOiBhbnk7ICAgIC8vIOW9k+WJjemimOWei+iKgueCuVxyXG5cclxuICAgIHB1YmxpYyBfdG9QYWdlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7IH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOe0oOadkOi1hOa6kFxyXG4gICAgICAgIGlmICghZGF0YS5wYXRoQ29uZmlnLnJlc291cmNlTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi57Sg5p2Q6LWE5rqQ5pyq6YWN572u77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDouqvku73or4bliKsg5YWo5bGA5Y+Y6YePXHJcbiAgICAgICAgdGhpcy5pZGVudGlmaWNhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyDml7bpl7TmiLMg5qCH6K6wXHJcbiAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS50aW1lc3RhbXAgPSB0aGlzLmdldFRpbWVzdGFtcCgpO1xyXG5cclxuICAgICAgICAvLyDkuLTml7ZcclxuICAgICAgICAvLyDlm6DlrqLmiLfnq68oZWxlY3Ryb24pIOS4i++8jGdsb2JhbFRoaXPkuLogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuZ2xvYmFsVGhpcykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2xvYmFsVGhpcyA9IHt9O1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2xvYmFsVGhpcy5fID0gd2luZG93Ll87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jb25maWdKc29uID0gZGF0YTtcclxuXHJcbiAgICAgICAgZmd1aS5HUm9vdC5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgLy8g55Sf5oiQ6Z2i5p2/XHJcbiAgICAgICAgbGV0IHBhbmVsUGF0aDogYW55ID0gYCR7ZGF0YS5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2RhdGEucGF0aENvbmZpZy5wYW5lbEJ1bmRsZVBhdGh9JHtkYXRhLnBhdGhDb25maWcucGFuZWxOYW1lfWA7XHJcbiAgICAgICAgbGV0IHBhbmVsQnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKHBhbmVsUGF0aCk7XHJcbiAgICAgICAgbGV0IHBhbmVsUHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKHBhbmVsQnVuZGxlLCBwYW5lbEJ1bmRsZS5uYW1lKTtcclxuICAgICAgICBsZXQgcGFuZWxOb2RlOiBhbnkgPSBjYy5pbnN0YW50aWF0ZShwYW5lbFByZWZhYik7XHJcbiAgICAgICAgcGFuZWxOb2RlLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG4gICAgICAgIHBhbmVsTm9kZS54ID0gOTYwO1xyXG4gICAgICAgIHBhbmVsTm9kZS55ID0gNTQwO1xyXG4gICAgICAgIHRoaXMuX3BhbmVsID0gcGFuZWxOb2RlO1xyXG5cclxuICAgICAgICAvLyDkuLTml7ZcclxuICAgICAgICAvLyDpnaLmnb8g5pi+56S6XHJcbiAgICAgICAgLy8g5aaC5p6c5piv5a2m55SfIOmdouadv+makOiXj1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGFuZWwpIHRoaXMuX3BhbmVsLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5rOo5YaMIOWPkemAgeS/oeS7pOeahOWHuuWPoyDpgLvovpFcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU2VuZE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU2VuZE1lc3NhZ2Uoc2VuZE1lc3NhZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliqDovb0g5omA5pyJ6aKY5Z6L6aKE5Yi25Lu2XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNoYXB0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBtb2RlbFBhdGg6IGFueSA9IGAke2RhdGEucGF0aENvbmZpZy5yZW1vdGVVcmx9JHtkYXRhLnBhdGhDb25maWcubW9kZWxCdW5kbGVQYXRofSR7ZGF0YS5jaGFwdGVyc1tpXS5tb2RlbEJ1bmRsZX1gO1xyXG4gICAgICAgICAgICBsZXQgbW9kZWxCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUobW9kZWxQYXRoKTtcclxuICAgICAgICAgICAgbGV0IG1vZGVsUHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKG1vZGVsQnVuZGxlLCBkYXRhLmNoYXB0ZXJzW2ldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlUHJlZmFic1tpXSA9IG1vZGVsUHJlZmFiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yqg6L29dWkg6LWE5rqQ5YyFXHJcbiAgICAgICAgbGV0IHJlc291cmNlUGF0aDogYW55ID0gYCR7ZGF0YS5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2RhdGEucGF0aENvbmZpZy5yZXNvdXJjZUJ1bmRsZVBhdGh9JHtkYXRhLnBhdGhDb25maWcucmVzb3VyY2VOYW1lfWA7XHJcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VCdW5kbGUgPSBhd2FpdCBsb2FkQnVuZGxlKHJlc291cmNlUGF0aCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUmVzb3VyY2VQYWNrYWdlKHRoaXMuX3Jlc291cmNlQnVuZGxlLCBkYXRhLnBhdGhDb25maWcucGFja2FnZU5hbWUpO1xyXG5cclxuICAgICAgICAvLyDmi5Por77kupEg5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybUNvbmZpZyh0aGlzLl9jb25maWdKc29uLnRvdGFsUGFnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRSZXNvdXJjZVBhY2thZ2UoYnVuZGxlOiBhbnksIHBhY2thZ2VOYW1lOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5sb2FkUGFja2FnZShidW5kbGUsIHBhY2thZ2VOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRSZXNvdXJjZVBhY2thZ2VcIilcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6aG16Z2i6Lez6L2sIOmFjee9rlxyXG4gICAgYXN5bmMgb25KdW1wQ29uZmlnKHRvUGFnZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHBhZ2U6IG51bWJlciA9IHRvUGFnZSAtIDE7XHJcbiAgICAgICAgbGV0IGNoYXB0ZXI6IGFueSA9IHRoaXMuX2NvbmZpZ0pzb24uY2hhcHRlcnNbcGFnZV07XHJcblxyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZHJlbigwLCAtMSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlTm9kZSkgdGhpcy5fY3VycmVudFBhZ2VOb2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgbGV0IHByZWZhYjogYW55ID0gdGhpcy5fcGFnZVByZWZhYnNbcGFnZV07XHJcbiAgICAgICAgbGV0IG5vZGU6IGFueSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgbGV0IG5vZGVKcyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgbm9kZUpzLmluaXQoeyBQYWNrYWdlOiB0aGlzLl9jb25maWdKc29uLnBhdGhDb25maWcucGFja2FnZU5hbWUsIEdDb21wb25lbnQ6IGNoYXB0ZXIudWlQYXRoIH0pO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgICB0aGlzLl9jdXJyZW50UGFnZU5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMucmVzZXRQYW5lbCgpO1xyXG4gICAgICAgIC8vIOW9k+WJjemhtemdoiBzdGF0ZSDlv6vnhadcclxuICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnN0YXRlU2hvb3QgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbXCJzdGF0ZVwiXSk7XHJcbiAgICAgICAgdGhpcy5yZWNvdmVyU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDouqvku73or4bliKtcclxuICAgIGlkZW50aWZpY2F0aW9uKCkge1xyXG4gICAgICAgIGxldCBwYXJzZVVSTCA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzLnBhcnNlVVJMO1xyXG4gICAgICAgIGxldCB1cmxPYmogPSBwYXJzZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXJsT2JqKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGFba2V5XSA9IHVybE9ialtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS4tOaXtlxyXG4gICAgICAgIC8vIOWuieWNk2lwYWQg6YOo5YiG6LSm5oi3IOaXoOazleiOt+WPlnVzZXJpZCDnlKhuYW1l5pu/5LujXHJcbiAgICAgICAgaWYgKCF1cmxPYmpbXCJ1c2VyaWRcIl0pIHtcclxuICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YVtcInVzZXJpZFwiXSA9IHVybE9ialtcIm5hbWVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS+nei1luW5s+WPsCDphY3nva7orr7nva5cclxuICAgIHBsYXRmb3JtQ29uZmlnKHRvdGFsUGFnZXM6IG51bWJlcikge1xyXG4gICAgICAgIC8vIOerr+Wvueerr+mAmuS/oSDnm5HlkKxcclxuICAgICAgICBtb25pdG9yTWVzc2FnZShnZXRNZXNzYWdlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIOiuvue9ruaAu+mhtemdolxyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWV0aG9kOiAnb25QYWdlbnVtJywgdG90YWxQYWdlczogdG90YWxQYWdlcyB9KSxcclxuICAgICAgICAgICAgJyonXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDorr7nva7lsY/luZXliIbovqjnjodcclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdvbkxvYWRDb21wbGV0ZScsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2V3YXJlUmF0aW86IDE2IC8gOSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICcqJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6YeN572u6Z2i5p2/XHJcbiAgICByZXNldFBhbmVsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYW5lbCkge1xyXG4gICAgICAgICAgICBsZXQgcGFuZWxKczogYW55ID0gdGhpcy5fcGFuZWwuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIOabtOaWsOmdouadvyB1aSDkvYbkuI3kvKDkv6Hku6RcclxuICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt0aGlzLl9wYW5lbC5uYW1lXSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHBhbmVsSnMucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ICB5biI5oGi5aSN6YCA5Ye65pe254q25oCBXHJcbiAgICByZWNvdmVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuZmlyc3RMb2FkKSB7XHJcbiAgICAgICAgICAgIGxldCBkYjogYW55ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDT1VSU0VfU0lHTkFMSU5HX0RCJyk7XHJcbiAgICAgICAgICAgIGlmICghZGIpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IHNpZ25hbGluZ0RCID0gSlNPTi5wYXJzZShkYik7XHJcbiAgICAgICAgICAgIC8vIOiAgeW4iCDmlbDmja7nvJPlrZhcclxuICAgICAgICAgICAgaWYgKHNpZ25hbGluZ0RCICYmIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEucm9sZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyU3RhbXAgPSBwYXJzZUludCh0aGlzLmdldFRpbWVzdGFtcCgpKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVTdGFtcCA9IHBhcnNlSW50KHNpZ25hbGluZ0RCLnRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJTdGFtcCAtIHByZVN0YW1wKSAvIDYwIDwgMzUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnRpbWVzdGFtcCA9IHNpZ25hbGluZ0RCLnRpbWVzdGFtcDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldlN0YXRlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W1wic3RhdGVcIl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBzaWduYWxpbmdEQi5zdGF0ZVt2XSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W3ZdID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KHNpZ25hbGluZ0RCLnN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuZmlyc3RMb2FkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluW9k+WJjeaXtumXtOaIsyDliY3ljYHkvY0g56eSXHJcbiAgICBnZXRUaW1lc3RhbXAoKSB7XHJcbiAgICAgICAgcmV0dXJuICgrbmV3IERhdGUoKSkudG9TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWQjOatpSDlgJLorqHml7ZcclxuICAgIGNvdW50RG93bih1c2VyOiBhbnkpIHtcclxuICAgICAgICBsZXQgY291bnQgPSA2O1xyXG4gICAgICAgIC8vIOS7peenkuS4uuWNleS9jeeahOaXtumXtOmXtOmalFxyXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IDE7XHJcbiAgICAgICAgLy8g6YeN5aSN5qyh5pWwXHJcbiAgICAgICAgbGV0IHJlcGVhdCA9IDU7XHJcbiAgICAgICAgLy8g5byA5aeL5bu25pe2XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgY291bnQtLTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEluZm8odXNlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBpbnRlcnZhbCwgcmVwZWF0LCBkZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZEluZm8odXNlcjogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W1wic3RhdGVcIl0pO1xyXG4gICAgICAgIHNlbmRNZXNzYWdlKHN0YXRlLCB1c2VyKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19