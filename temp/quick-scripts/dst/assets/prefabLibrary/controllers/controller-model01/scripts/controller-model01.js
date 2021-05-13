
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/controllers/controller-model01/scripts/controller-model01.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMVxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUV0QyxJQUFBLEtBQStCLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBakQsUUFBUSxjQUFBLEVBQUUsY0FBYyxvQkFBeUIsQ0FBQztBQUNwRCxJQUFBLEtBQTJDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQXBFLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsWUFBWSxrQkFBZ0MsQ0FBQztBQUk3RTtJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQWtGQztRQS9FVyxrQkFBWSxHQUFHLEVBQUUsQ0FBQSxDQUFTLFVBQVU7UUFHckMsWUFBTSxHQUFHLElBQUksQ0FBQyxDQUFhLE9BQU87O0lBNEU3QyxDQUFDO0lBMUVHLG1DQUFNLEdBQU4sY0FBVyxDQUFDO0lBRU4saUNBQUksR0FBVixVQUFXLElBQVM7Ozs7Ozt3QkFDaEIsT0FBTzt3QkFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7NEJBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQzFCLHNCQUFPO3lCQUNWO3dCQUVELEtBQUs7d0JBQ0wseUNBQXlDO3dCQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTs0QkFDcEIsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7NEJBQ3ZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxH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QU8sQ0FBQyxDQUFDLENBQUM7Ozs7S0FDakg7SUFqRmdCLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBa0Z0QztJQUFELHlCQUFDO0NBbEZELEFBa0ZDLENBbEYrQyxFQUFFLENBQUMsU0FBUyxHQWtGM0Q7a0JBbEZvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIwLTEyLTIyIDExOjAyOjQ1XHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTEyIDE2OjA4OjU0XHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuY29uc3QgeyBnYW1lRGF0YSwgbW9uaXRvck1lc3NhZ2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddO1xyXG5jb25zdCB7IGxvYWRQcmVmYWIsIGxvYWRCdW5kbGUsIGxvYWRSZXNvdXJjZSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbnRyb2xsZXJfbW9kZWwwMSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9jb25maWdKc29uOiBhbnk7ICAgICAgICAgLy8g6YWN572uanNvblxyXG4gICAgcHJpdmF0ZSBfcmVzb3VyY2VCdW5kbGU6IGFueTsgICAgIC8vIGZhaXJ5Z3VpIOi/nOeoi2J1bmRsZVxyXG4gICAgcHJpdmF0ZSBfcGFnZVByZWZhYnMgPSBbXSAgICAgICAgIC8vIOmimOWei+mihOWItuS9k+mbhuWQiFxyXG4gICAgcHJpdmF0ZSBfY3VycmVudFBhZ2VOb2RlOiBhbnk7ICAgIC8vIOW9k+WJjemimOWei+iKgueCuVxyXG5cclxuICAgIHB1YmxpYyBfY1BhZ2UgPSBudWxsOyAgICAgICAgICAgICAvLyDlvZPliY3pobXnoIFcclxuXHJcbiAgICBvbkxvYWQoKSB7IH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOe0oOadkOi1hOa6kFxyXG4gICAgICAgIGlmICghZGF0YS5wYXRoQ29uZmlnLnJlc291cmNlTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi57Sg5p2Q6LWE5rqQ5pyq6YWN572u77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkuLTml7ZcclxuICAgICAgICAvLyDlm6DlrqLmiLfnq68oZWxlY3Ryb24pIOS4i++8jGdsb2JhbFRoaXPkuLogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuZ2xvYmFsVGhpcykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2xvYmFsVGhpcyA9IHt9O1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2xvYmFsVGhpcy5fID0gd2luZG93Ll87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jb25maWdKc29uID0gZGF0YTtcclxuXHJcbiAgICAgICAgZmd1aS5HUm9vdC5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgLy8g55Sf5oiQ6Z2i5p2/XHJcbiAgICAgICAgbGV0IHBhbmVsUGF0aDogYW55ID0gYCR7ZGF0YS5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2RhdGEucGF0aENvbmZpZy5wYW5lbEJ1bmRsZVBhdGh9JHtkYXRhLnBhdGhDb25maWcucGFuZWxOYW1lfWA7XHJcbiAgICAgICAgbGV0IHBhbmVsQnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKHBhbmVsUGF0aCk7XHJcbiAgICAgICAgbGV0IHBhbmVsUHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKHBhbmVsQnVuZGxlLCBwYW5lbEJ1bmRsZS5uYW1lKTtcclxuICAgICAgICBsZXQgcGFuZWxOb2RlOiBhbnkgPSBjYy5pbnN0YW50aWF0ZShwYW5lbFByZWZhYik7XHJcbiAgICAgICAgcGFuZWxOb2RlLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG4gICAgICAgIHBhbmVsTm9kZS54ID0gY2MuZmluZChcIkNhbnZhc1wiKS54O1xyXG4gICAgICAgIHBhbmVsTm9kZS55ID0gY2MuZmluZChcIkNhbnZhc1wiKS55O1xyXG4gICAgXHJcbiAgICAgICAgLy8g5Yqg6L29IOaJgOaciemimOWei+mihOWItuS7tlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jaGFwdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbW9kZWxQYXRoOiBhbnkgPSBgJHtkYXRhLnBhdGhDb25maWcucmVtb3RlVXJsfSR7ZGF0YS5wYXRoQ29uZmlnLm1vZGVsQnVuZGxlUGF0aH0ke2RhdGEuY2hhcHRlcnNbaV0ubW9kZWwuYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICBsZXQgbW9kZWxCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUobW9kZWxQYXRoKTtcclxuICAgICAgICAgICAgbGV0IG1vZGVsUHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKG1vZGVsQnVuZGxlLCBkYXRhLmNoYXB0ZXJzW2ldLm1vZGVsLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlUHJlZmFic1tpXSA9IG1vZGVsUHJlZmFiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yqg6L29dWkg6LWE5rqQ5YyFXHJcbiAgICAgICAgbGV0IHJlc291cmNlUGF0aDogYW55ID0gYCR7ZGF0YS5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2RhdGEucGF0aENvbmZpZy5yZXNvdXJjZUJ1bmRsZVBhdGh9JHtkYXRhLnBhdGhDb25maWcucmVzb3VyY2VOYW1lfWA7XHJcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VCdW5kbGUgPSBhd2FpdCBsb2FkQnVuZGxlKHJlc291cmNlUGF0aCk7XHJcbiAgICAgICAgZ2FtZURhdGEucmVzb3VyY2VCdW5kbGUgPSBhd2FpdCB0aGlzLmxvYWRSZXNvdXJjZVBhY2thZ2UodGhpcy5fcmVzb3VyY2VCdW5kbGUsIGRhdGEucGF0aENvbmZpZy5wYWNrYWdlTmFtZSk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5vbkp1bXBDb25maWcoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yqg6L29IGZhaXJ5Z3VpIOi1hOa6kOWMhVxyXG4gICAgYXN5bmMgbG9hZFJlc291cmNlUGFja2FnZShidW5kbGU6IGFueSwgcGFja2FnZU5hbWU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuVUlQYWNrYWdlLmxvYWRQYWNrYWdlKGJ1bmRsZSwgcGFja2FnZU5hbWUsIChlcnJvciwgVUlQYWNrYWdlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoVUlQYWNrYWdlLl9idW5kbGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOmhtemdoui3s+i9rCDphY3nva5cclxuICAgIGFzeW5jIG9uSnVtcENvbmZpZyh0b1BhZ2U6IGFueSkge1xyXG4gICAgICAgIGxldCBwYWdlOiBudW1iZXIgPSB0b1BhZ2UgLSAxO1xyXG4gICAgICAgIGxldCBjaGFwdGVyOiBhbnkgPSB0aGlzLl9jb25maWdKc29uLmNoYXB0ZXJzW3BhZ2VdO1xyXG4gICAgICAgIGlmICghY2hhcHRlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGRyZW4oMCwgLTEsIHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZU5vZGUpIHRoaXMuX2N1cnJlbnRQYWdlTm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGxldCBwcmVmYWI6IGFueSA9IHRoaXMuX3BhZ2VQcmVmYWJzW3BhZ2VdO1xyXG4gICAgICAgIGxldCBub2RlOiBhbnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIGxldCBub2RlSnMgPSBub2RlLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIG5vZGVKcy5pbml0KHsgcGF0aENvbmZpZzogdGhpcy5fY29uZmlnSnNvbi5wYXRoQ29uZmlnLCBtb2RlbDogY2hhcHRlci5tb2RlbCwgY29tcG9uZW50czogY2hhcHRlci5jb21wb25lbnRzIH0pO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgICB0aGlzLl9jdXJyZW50UGFnZU5vZGUgPSBub2RlO1xyXG5cclxuICAgICAgICB0aGlzLl9jUGFnZSA9IHRvUGFnZTtcclxuICAgICAgICAvLyDlvZPliY3pobXpnaIgc3RhdGUg5b+r54WnXHJcbiAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zdGF0ZVNob290ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W1wic3RhdGVcIl0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==