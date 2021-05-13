"use strict";
cc._RF.push(module, 'b8d5b6tNDRLBrTDH+irS+ph', 'controller-model01');
// prefabLibrary/controllers/controller-model01/scripts/controller-model01.ts

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
 * @LastEditTime: 2021-05-12 16:08:54
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var _b = window['GlobalData'], gameData = _b.gameData, monitorMessage = _b.monitorMessage;
var _c = window['GlobalData'].sample, loadPrefab = _c.loadPrefab, loadBundle = _c.loadBundle, loadResource = _c.loadResource;
var controller_model01 = /** @class */ (function (_super) {
    __extends(controller_model01, _super);
    function controller_model01() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pagePrefabs = []; // 题型预制体集合
        _this._cPage = null; // 当前页码
        return _this;
    }
    controller_model01.prototype.onLoad = function () { };
    controller_model01.prototype.init = function (data) {
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
                        panelNode.x = cc.find("Canvas").x;
                        panelNode.y = cc.find("Canvas").y;
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
                        return [4 /*yield*/, this.onJumpConfig(1)];
                    case 10:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 加载 fairygui 资源包
    controller_model01.prototype.loadResourcePackage = function (bundle, packageName) {
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
    controller_model01.prototype.onJumpConfig = function (toPage) {
        return __awaiter(this, void 0, void 0, function () {
            var page, chapter, prefab, node, nodeJs;
            return __generator(this, function (_a) {
                page = toPage - 1;
                chapter = this._configJson.chapters[page];
                if (!chapter)
                    return [2 /*return*/];
                fgui.GRoot.inst.removeChildren(0, -1, true);
                if (this._currentPageNode)
                    this._currentPageNode.destroy();
                prefab = this._pagePrefabs[page];
                node = cc.instantiate(prefab);
                nodeJs = node.getComponent(cc.Component);
                nodeJs.init({ pathConfig: this._configJson.pathConfig, model: chapter.model, components: chapter.components });
                node.parent = this.node;
                this._currentPageNode = node;
                this._cPage = toPage;
                // 当前页面 state 快照
                window['GlobalData'].courseData.stateShoot = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
                return [2 /*return*/];
            });
        });
    };
    controller_model01 = __decorate([
        ccclass
    ], controller_model01);
    return controller_model01;
}(cc.Component));
exports.default = controller_model01;

cc._RF.pop();