
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
 * @LastEditTime: 2021-05-13 21:26:06
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
        _this._panelNode = null; // 面板
        return _this;
    }
    controller_model01.prototype.onLoad = function () { };
    controller_model01.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var panelPath, panelBundle, panelPrefab, i, modelPath, modelBundle, modelPrefab, resourcePath, _a, _b;
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
                        this._panelNode = cc.instantiate(panelPrefab);
                        this._panelNode.parent = cc.find("Canvas").parent;
                        this._panelNode.x = cc.find("Canvas").x;
                        this._panelNode.y = cc.find("Canvas").y;
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
            var page, chapter, panelJs, prefab, node, nodeJs;
            return __generator(this, function (_a) {
                page = toPage - 1;
                chapter = this._configJson.chapters[page];
                panelJs = this._panelNode.getComponent(cc.Component);
                panelJs.init(page === 0 ? "start" : this._configJson.chapters.length - 1 === page ? "end" : "normal");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMVxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUV0QyxJQUFBLEtBQStCLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBakQsUUFBUSxjQUFBLEVBQUUsY0FBYyxvQkFBeUIsQ0FBQztBQUNwRCxJQUFBLEtBQTJDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQXBFLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsWUFBWSxrQkFBZ0MsQ0FBQztBQUk3RTtJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQXNGQztRQW5GVyxrQkFBWSxHQUFHLEVBQUUsQ0FBQSxDQUFTLFVBQVU7UUFHcEMsWUFBTSxHQUFHLElBQUksQ0FBQyxDQUFhLE9BQU87UUFDbEMsZ0JBQVUsR0FBRyxJQUFJLENBQUMsQ0FBUyxLQUFLOztJQStFNUMsQ0FBQztJQTlFRyxtQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUVOLGlDQUFJLEdBQVYsVUFBVyxJQUFTOzs7Ozs7d0JBQ2hCLE9BQU87d0JBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFOzRCQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUMxQixzQkFBTzt5QkFDVjt3QkFFRCxLQUFLO3dCQUNMLHlDQUF5Qzt3QkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7NEJBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxD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RUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQy9HLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFFeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFFN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLGdCQUFnQjtnQkFDaEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7O0tBQ2pIO0lBckZnQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQXNGdEM7SUFBRCx5QkFBQztDQXRGRCxBQXNGQyxDQXRGK0MsRUFBRSxDQUFDLFNBQVMsR0FzRjNEO2tCQXRGb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMC0xMi0yMiAxMTowMjo0NVxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMyAyMToyNjowNlxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IHsgZ2FtZURhdGEsIG1vbml0b3JNZXNzYWdlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXTtcclxuY29uc3QgeyBsb2FkUHJlZmFiLCBsb2FkQnVuZGxlLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb250cm9sbGVyX21vZGVsMDEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnSnNvbjogYW55OyAgICAgICAgIC8vIOmFjee9rmpzb25cclxuICAgIHByaXZhdGUgX3Jlc291cmNlQnVuZGxlOiBhbnk7ICAgICAvLyBmYWlyeWd1aSDov5znqItidW5kbGVcclxuICAgIHByaXZhdGUgX3BhZ2VQcmVmYWJzID0gW10gICAgICAgICAvLyDpopjlnovpooTliLbkvZPpm4blkIhcclxuICAgIHByaXZhdGUgX2N1cnJlbnRQYWdlTm9kZTogYW55OyAgICAvLyDlvZPliY3popjlnovoioLngrlcclxuXHJcbiAgICBwcml2YXRlIF9jUGFnZSA9IG51bGw7ICAgICAgICAgICAgIC8vIOW9k+WJjemhteeggVxyXG4gICAgcHJpdmF0ZSBfcGFuZWxOb2RlID0gbnVsbDsgICAgICAgICAvLyDpnaLmnb9cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g57Sg5p2Q6LWE5rqQXHJcbiAgICAgICAgaWYgKCFkYXRhLnBhdGhDb25maWcucmVzb3VyY2VOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLntKDmnZDotYTmupDmnKrphY3nva7vvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtlxyXG4gICAgICAgIC8vIOWboOWuouaIt+erryhlbGVjdHJvbikg5LiL77yMZ2xvYmFsVGhpc+S4uiB1bmRlZmluZWRcclxuICAgICAgICBpZiAoIXdpbmRvdy5nbG9iYWxUaGlzKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxUaGlzID0ge307XHJcbiAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxUaGlzLl8gPSB3aW5kb3cuXztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbmZpZ0pzb24gPSBkYXRhO1xyXG5cclxuICAgICAgICBmZ3VpLkdSb290LmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAvLyDnlJ/miJDpnaLmnb9cclxuICAgICAgICBsZXQgcGFuZWxQYXRoOiBhbnkgPSBgJHtkYXRhLnBhdGhDb25maWcucmVtb3RlVXJsfSR7ZGF0YS5wYXRoQ29uZmlnLnBhbmVsQnVuZGxlUGF0aH0ke2RhdGEucGF0aENvbmZpZy5wYW5lbE5hbWV9YDtcclxuICAgICAgICBsZXQgcGFuZWxCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUocGFuZWxQYXRoKTtcclxuICAgICAgICBsZXQgcGFuZWxQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIocGFuZWxCdW5kbGUsIHBhbmVsQnVuZGxlLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuX3BhbmVsTm9kZSA9IGNjLmluc3RhbnRpYXRlKHBhbmVsUHJlZmFiKTtcclxuICAgICAgICB0aGlzLl9wYW5lbE5vZGUucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5fcGFuZWxOb2RlLnggPSBjYy5maW5kKFwiQ2FudmFzXCIpLng7XHJcbiAgICAgICAgdGhpcy5fcGFuZWxOb2RlLnkgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnk7XHJcblxyXG4gICAgICAgIC8vIOWKoOi9vSDmiYDmnInpopjlnovpooTliLbku7ZcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2hhcHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1vZGVsUGF0aDogYW55ID0gYCR7ZGF0YS5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2RhdGEucGF0aENvbmZpZy5tb2RlbEJ1bmRsZVBhdGh9JHtkYXRhLmNoYXB0ZXJzW2ldLm1vZGVsLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgbGV0IG1vZGVsQnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKG1vZGVsUGF0aCk7XHJcbiAgICAgICAgICAgIGxldCBtb2RlbFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihtb2RlbEJ1bmRsZSwgZGF0YS5jaGFwdGVyc1tpXS5tb2RlbC5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZVByZWZhYnNbaV0gPSBtb2RlbFByZWZhYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWKoOi9vXVpIOi1hOa6kOWMhVxyXG4gICAgICAgIGxldCByZXNvdXJjZVBhdGg6IGFueSA9IGAke2RhdGEucGF0aENvbmZpZy5yZW1vdGVVcmx9JHtkYXRhLnBhdGhDb25maWcucmVzb3VyY2VCdW5kbGVQYXRofSR7ZGF0YS5wYXRoQ29uZmlnLnJlc291cmNlTmFtZX1gO1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlQnVuZGxlID0gYXdhaXQgbG9hZEJ1bmRsZShyZXNvdXJjZVBhdGgpO1xyXG4gICAgICAgIGdhbWVEYXRhLnJlc291cmNlQnVuZGxlID0gYXdhaXQgdGhpcy5sb2FkUmVzb3VyY2VQYWNrYWdlKHRoaXMuX3Jlc291cmNlQnVuZGxlLCBkYXRhLnBhdGhDb25maWcucGFja2FnZU5hbWUpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMub25KdW1wQ29uZmlnKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWKoOi9vSBmYWlyeWd1aSDotYTmupDljIVcclxuICAgIGFzeW5jIGxvYWRSZXNvdXJjZVBhY2thZ2UoYnVuZGxlOiBhbnksIHBhY2thZ2VOYW1lOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5sb2FkUGFja2FnZShidW5kbGUsIHBhY2thZ2VOYW1lLCAoZXJyb3IsIFVJUGFja2FnZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKFVJUGFja2FnZS5fYnVuZGxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDpobXpnaLot7Povawg6YWN572uXHJcbiAgICBhc3luYyBvbkp1bXBDb25maWcodG9QYWdlOiBhbnkpIHtcclxuICAgICAgICBsZXQgcGFnZTogbnVtYmVyID0gdG9QYWdlIC0gMTtcclxuICAgICAgICBsZXQgY2hhcHRlcjogYW55ID0gdGhpcy5fY29uZmlnSnNvbi5jaGFwdGVyc1twYWdlXTtcclxuXHJcbiAgICAgICAgLy8g56ys5LiA6aG1IOmakOiXj+W3pueureWktCDmnIDlkI7kuIDpobUg6ZqQ6JeP5Y+z566t5aS0XHJcbiAgICAgICAgbGV0IHBhbmVsSnM6IGFueSA9IHRoaXMuX3BhbmVsTm9kZS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBwYW5lbEpzLmluaXQocGFnZSA9PT0gMCA/IFwic3RhcnRcIiA6IHRoaXMuX2NvbmZpZ0pzb24uY2hhcHRlcnMubGVuZ3RoIC0gMSA9PT0gcGFnZSA/IFwiZW5kXCIgOiBcIm5vcm1hbFwiKTtcclxuICAgICAgICBpZiAoIWNoYXB0ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkcmVuKDAsIC0xLCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFBhZ2VOb2RlKSB0aGlzLl9jdXJyZW50UGFnZU5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICBsZXQgcHJlZmFiOiBhbnkgPSB0aGlzLl9wYWdlUHJlZmFic1twYWdlXTtcclxuICAgICAgICBsZXQgbm9kZTogYW55ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICBsZXQgbm9kZUpzID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBub2RlSnMuaW5pdCh7IHBhdGhDb25maWc6IHRoaXMuX2NvbmZpZ0pzb24ucGF0aENvbmZpZywgbW9kZWw6IGNoYXB0ZXIubW9kZWwsIGNvbXBvbmVudHM6IGNoYXB0ZXIuY29tcG9uZW50cyB9KTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VOb2RlID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY1BhZ2UgPSB0b1BhZ2U7XHJcbiAgICAgICAgLy8g5b2T5YmN6aG16Z2iIHN0YXRlIOW/q+eFp1xyXG4gICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuc3RhdGVTaG9vdCA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAod2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVtcInN0YXRlXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=