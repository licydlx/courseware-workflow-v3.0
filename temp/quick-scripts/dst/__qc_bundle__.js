
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/cloud/cloud');
require('./assets/entrances/javascripts/t3-courseware');
require('./assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02-studentList');
require('./assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-getMessage');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-sendMessage');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02');
require('./assets/prefabLibrary/models/radioSwitch/radioSwitch-model01-v1');
require('./assets/prefabLibrary/models/static/static-model01-v1');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrances/javascripts/t3-courseware.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa72aJTCYJJho429KpfJ+aR', 't3-courseware');
// entrances/javascripts/t3-courseware.ts

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
 * @LastEditTime: 2021-04-12 14:47:18
 */
var gameData = window['GlobalData'].gameData;
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, ajax = _a.ajax;
var parseURL = window['GlobalData'].utils.parseURL;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var t3_courseware = /** @class */ (function (_super) {
    __extends(t3_courseware, _super);
    function t3_courseware() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.test = false;
        _this.configJson = null;
        return _this;
    }
    t3_courseware.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configJson, courseName, env, json, contrllerPath, contrllerBundle, contrllerPrefab, contrllerNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.test) return [3 /*break*/, 1];
                        // 本地测试
                        configJson = this.configJson.json;
                        return [3 /*break*/, 3];
                    case 1:
                        courseName = parseURL(window.location.href).courseName;
                        if (!courseName) {
                            return [2 /*return*/];
                        }
                        env = window.location.href.includes('test') ? 'test' : 'prod';
                        return [4 /*yield*/, ajax("GET", gameData.apiOrigin + "/getConfigJson?courseName=" + (courseName ? courseName.toLowerCase() : '') + "&env=" + env)];
                    case 2:
                        json = _a.sent();
                        configJson = JSON.parse(json);
                        _a.label = 3;
                    case 3:
                        contrllerPath = "" + configJson.pathConfig.remoteUrl + configJson.pathConfig.controllerBundlePath + configJson.pathConfig.controllerName;
                        return [4 /*yield*/, loadBundle(contrllerPath)];
                    case 4:
                        contrllerBundle = _a.sent();
                        return [4 /*yield*/, loadPrefab(contrllerBundle, contrllerBundle.name)];
                    case 5:
                        contrllerPrefab = _a.sent();
                        contrllerNode = cc.instantiate(contrllerPrefab);
                        contrllerNode.parent = this.node.parent;
                        this._controllerJs = contrllerNode.getComponent(cc.Component);
                        return [4 /*yield*/, this._controllerJs.init(configJson)];
                    case 6:
                        _a.sent();
                        if (this.test) {
                            this._controllerJs.onJumpConfig(1);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    t3_courseware.prototype.choosePage = function (e, ced) {
        this._controllerJs.onJumpConfig(ced);
    };
    __decorate([
        property({
            displayName: '本地测试'
        })
    ], t3_courseware.prototype, "test", void 0);
    __decorate([
        property({
            type: cc.JsonAsset,
            displayName: '配置 文件'
        })
    ], t3_courseware.prototype, "configJson", void 0);
    t3_courseware = __decorate([
        ccclass
    ], t3_courseware);
    return t3_courseware;
}(cc.Component));
exports.default = t3_courseware;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZW50cmFuY2VzXFxqYXZhc2NyaXB0c1xcdDMtY291cnNld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUN6QyxJQUFBLEtBQW1DLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQTVELFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsSUFBSSxVQUFnQyxDQUFDO0FBQzdELElBQUEsUUFBUSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLFNBQS9CLENBQWdDO0FBQzFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBZ0RDO1FBM0NHLFVBQUksR0FBRyxLQUFLLENBQUM7UUFNYixnQkFBVSxHQUFpQixJQUFJLENBQUM7O0lBcUNwQyxDQUFDO0lBakNTLDhCQUFNLEdBQVo7Ozs7Ozs2QkFFUSxJQUFJLENBQUMsSUFBSSxFQUFULHdCQUFTO3dCQUNULE9BQU87d0JBQ1AsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOzs7d0JBRzVCLFVBQVUsR0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBbkMsQ0FBb0M7d0JBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2Isc0JBQU87eUJBQ1Y7d0JBQ0csR0FBRyxHQUFRLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ3ZELHFCQUFNLElBQUksQ0FBQyxLQUFLLEVBQUssUUFBUSxDQUFDLFNBQVMsbUNBQTZCLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQVEsR0FBSyxDQUFDLEVBQUE7O3dCQUF4SSxJQUFJLEdBQVEsU0FBNEg7d0JBQzVJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7d0JBSTlCLGFBQWEsR0FBUSxLQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFnQixDQUFDO3dCQUN2SCxxQkFBTSxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUE7O3dCQUF0RCxlQUFlLEdBQVEsU0FBK0I7d0JBQy9CLHFCQUFNLFVBQVUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBOUUsZUFBZSxHQUFRLFNBQXVEO3dCQUM5RSxhQUFhLEdBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDekQsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDOUQscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUF6QyxTQUF5QyxDQUFDO3dCQUUxQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7NEJBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3RDOzs7OztLQUNKO0lBRUQsa0NBQVUsR0FBVixVQUFXLENBQU0sRUFBRSxHQUFRO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUExQ0Q7UUFIQyxRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOytDQUNXO0lBTWI7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7WUFDbEIsV0FBVyxFQUFFLE9BQU87U0FDdkIsQ0FBQztxREFDOEI7SUFYZixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBZ0RqQztJQUFELG9CQUFDO0NBaERELEFBZ0RDLENBaEQwQyxFQUFFLENBQUMsU0FBUyxHQWdEdEQ7a0JBaERvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wMy0yNiAxODowNToxMlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNC0xMiAxNDo0NzoxOFxyXG4gKi9cclxuY29uc3QgZ2FtZURhdGEgPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5nYW1lRGF0YTtcclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBhamF4IH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcGFyc2VVUkwgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdDNfY291cnNld2FyZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+acrOWcsOa1i+ivlSdcclxuICAgIH0pXHJcbiAgICB0ZXN0ID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Kc29uQXNzZXQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfphY3nva4g5paH5Lu2J1xyXG4gICAgfSlcclxuICAgIGNvbmZpZ0pzb246IGNjLkpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlckpzOiBhbnk7XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBjb25maWdKc29uOiBhbnk7XHJcbiAgICAgICAgaWYgKHRoaXMudGVzdCkge1xyXG4gICAgICAgICAgICAvLyDmnKzlnLDmtYvor5VcclxuICAgICAgICAgICAgY29uZmlnSnNvbiA9IHRoaXMuY29uZmlnSnNvbi5qc29uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOiOt+WPlumFjee9ruaWh+S7tlxyXG4gICAgICAgICAgICBsZXQgeyBjb3Vyc2VOYW1lIH0gPSBwYXJzZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIGlmICghY291cnNlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlbnY6IGFueSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCd0ZXN0JykgPyAndGVzdCcgOiAncHJvZCc7XHJcbiAgICAgICAgICAgIGxldCBqc29uOiBhbnkgPSBhd2FpdCBhamF4KFwiR0VUXCIsIGAke2dhbWVEYXRhLmFwaU9yaWdpbn0vZ2V0Q29uZmlnSnNvbj9jb3Vyc2VOYW1lPSR7Y291cnNlTmFtZSA/IGNvdXJzZU5hbWUudG9Mb3dlckNhc2UoKSA6ICcnfSZlbnY9JHtlbnZ9YCk7XHJcbiAgICAgICAgICAgIGNvbmZpZ0pzb24gPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g55Sf5oiQ5o6n5Yi25ZmoXHJcbiAgICAgICAgbGV0IGNvbnRybGxlclBhdGg6IGFueSA9IGAke2NvbmZpZ0pzb24ucGF0aENvbmZpZy5yZW1vdGVVcmx9JHtjb25maWdKc29uLnBhdGhDb25maWcuY29udHJvbGxlckJ1bmRsZVBhdGh9JHtjb25maWdKc29uLnBhdGhDb25maWcuY29udHJvbGxlck5hbWV9YDtcclxuICAgICAgICBsZXQgY29udHJsbGVyQnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbnRybGxlclBhdGgpO1xyXG4gICAgICAgIGxldCBjb250cmxsZXJQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29udHJsbGVyQnVuZGxlLCBjb250cmxsZXJCdW5kbGUubmFtZSk7XHJcbiAgICAgICAgbGV0IGNvbnRybGxlck5vZGU6IGFueSA9IGNjLmluc3RhbnRpYXRlKGNvbnRybGxlclByZWZhYik7XHJcbiAgICAgICAgY29udHJsbGVyTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJKcyA9IGNvbnRybGxlck5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5fY29udHJvbGxlckpzLmluaXQoY29uZmlnSnNvbik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udHJvbGxlckpzLm9uSnVtcENvbmZpZygxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hvb3NlUGFnZShlOiBhbnksIGNlZDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fY29udHJvbGxlckpzLm9uSnVtcENvbmZpZyhjZWQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-sendMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ce63p0zkxIho9b/0pkRj3M', 'controller-model02-sendMessage');
// prefabLibrary/controller/controller-model02/scripts/controller-model02-sendMessage.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-02-07 11:39:43
 * @LastEditors: ydlx
 * @LastEditTime: 2021-03-16 19:08:46
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
function sendMessage(data, toUser) {
    console.log('sendMessage');
    var message = globalThis._.cloneDeep(data);
    console.log(message);
    var _a = window['GlobalData'].courseData, name = _a.name, userid = _a.userid, role = _a.role, signalingModel = _a.signalingModel;
    var action = window['GlobalData'].gameMsg.EVENT_UPDATE_STATE;
    window['GlobalData'].sendMessage({
        action: action,
        toUser: toUser ? toUser : "",
        user: { userid: userid, role: role, name: name, signalingModel: signalingModel },
        handleData: data
    });
    // 老师存储信令
    if (window['GlobalData'].courseData.role == 0) {
        cc.sys.localStorage.setItem('COURSE_SIGNALING_DB', JSON.stringify({
            timestamp: window['GlobalData'].courseData.timestamp,
            state: data
        }));
    }
    ;
}
exports.sendMessage = sendMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlclxcY29udHJvbGxlci1tb2RlbDAyXFxzY3JpcHRzXFxjb250cm9sbGVyLW1vZGVsMDItc2VuZE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7OztBQUVILFNBQWdCLFdBQVcsQ0FBQyxJQUFTLEVBQUUsTUFBVztJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzFCLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFFaEIsSUFBQSxLQUF5QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxFQUF0RSxJQUFJLFVBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxjQUFjLG9CQUFvQyxDQUFDO0lBQzdFLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7SUFFN0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUM3QixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM1QixJQUFJLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxjQUFjLGdCQUFBLEVBQUU7UUFDNUMsVUFBVSxFQUFFLElBQUk7S0FDbkIsQ0FBQyxDQUFDO0lBRUgsU0FBUztJQUNULElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQzNDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzlELFNBQVMsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVM7WUFDcEQsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUMsQ0FBQztLQUNQO0lBQUEsQ0FBQztBQUVOLENBQUM7QUF2QkQsa0NBdUJDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wMi0wNyAxMTozOTo0M1xyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wMy0xNiAxOTowODo0NlxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZShkYXRhOiBhbnksIHRvVXNlcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2VuZE1lc3NhZ2UnKVxyXG4gICAgbGV0IG1lc3NhZ2UgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcclxuXHJcbiAgICBsZXQgeyBuYW1lLCB1c2VyaWQsIHJvbGUsIHNpZ25hbGluZ01vZGVsIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhO1xyXG4gICAgbGV0IGFjdGlvbiA9IHdpbmRvd1snR2xvYmFsRGF0YSddLmdhbWVNc2cuRVZFTlRfVVBEQVRFX1NUQVRFO1xyXG5cclxuICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnNlbmRNZXNzYWdlKHtcclxuICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICB0b1VzZXI6IHRvVXNlciA/IHRvVXNlciA6IFwiXCIsXHJcbiAgICAgICAgdXNlcjogeyB1c2VyaWQsIHJvbGUsIG5hbWUsIHNpZ25hbGluZ01vZGVsIH0sXHJcbiAgICAgICAgaGFuZGxlRGF0YTogZGF0YVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g6ICB5biI5a2Y5YKo5L+h5LukXHJcbiAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlID09IDApIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0NPVVJTRV9TSUdOQUxJTkdfREInLCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS50aW1lc3RhbXAsXHJcbiAgICAgICAgICAgIHN0YXRlOiBkYXRhXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02-studentList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e032bSegH1C+6Fjdc8INtab', 'formal-panle-model02-studentList');
// prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02-studentList.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2020-11-19 18:05:09
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 17:51:44
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var formal_panle_model02_studentList = /** @class */ (function (_super) {
    __extends(formal_panle_model02_studentList, _super);
    function formal_panle_model02_studentList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    formal_panle_model02_studentList.prototype.onLoad = function () { };
    // 渲染层
    formal_panle_model02_studentList.prototype.updateUi = function (state) {
        var _loop_1 = function (i) {
            var student = this_1.node.children[i];
            if (state.studentList[i]) {
                student.active = true;
                // 设置名字
                var name = student.getChildByName('head').getChildByName('name');
                name.getComponent(cc.Label).string = state.studentList[i].nickname;
                // 设置 监控
                var monitored = student.getChildByName('body').getChildByName('monitored');
                var monitoredShow = monitored.getChildByName('show');
                var monitoredHide = monitored.getChildByName('hide');
                if (state.signalingModel == 1)
                    monitored.active = false;
                if (state.signalingModel == 2)
                    monitored.active = true;
                if (state.signalingModel == 3)
                    monitored.active = false;
                if (state.monitored == state.studentList[i].id) {
                    monitoredShow.active = true;
                    monitoredHide.active = false;
                }
                else {
                    monitoredShow.active = false;
                    monitoredHide.active = true;
                }
                // 设置 投放
                var launch = student.getChildByName('body').getChildByName('launch');
                var launchShow = launch.getChildByName('show');
                var launchHide = launch.getChildByName('hide');
                if (state.signalingModel == 1)
                    launch.active = false;
                if (state.signalingModel == 2)
                    launch.active = false;
                if (state.signalingModel == 3)
                    launch.active = true;
                if (state.launch == state.studentList[i].id) {
                    launchShow.active = true;
                    launchHide.active = false;
                }
                else {
                    launchShow.active = false;
                    launchHide.active = true;
                }
                // 设置排名
                var rankLabel = student.getChildByName('head').getChildByName('rank').getComponent(cc.Label);
                var index = state.ranking.findIndex(function (v) { return state.studentList[i].id == v; });
                rankLabel.string = index == -1 ? "" : (index + 1).toString();
            }
            else {
                student.active = false;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.node.children.length; i++) {
            _loop_1(i);
        }
    };
    // 数据层
    formal_panle_model02_studentList.prototype.updateData = function (data) { };
    formal_panle_model02_studentList = __decorate([
        ccclass
    ], formal_panle_model02_studentList);
    return formal_panle_model02_studentList;
}(cc.Component));
exports.default = formal_panle_model02_studentList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xcZm9ybWFsLXBhbmxlLW1vZGVsMDJcXGphdmFzY3JpcHRzXFxmb3JtYWwtcGFubGUtbW9kZWwwMi1zdHVkZW50TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEQsb0RBQVk7SUFBMUU7O0lBMkRBLENBQUM7SUExREcsaURBQU0sR0FBTixjQUFXLENBQUM7SUFFWixNQUFNO0lBQ04sbURBQVEsR0FBUixVQUFTLEtBQVU7Z0NBQ04sQ0FBQztZQUNOLElBQUksT0FBTyxHQUFHLE9BQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixPQUFPO2dCQUNQLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBRW5FLFFBQVE7Z0JBQ1IsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNFLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JELElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXJELElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxDQUFDO29CQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN4RCxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQztvQkFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdkQsSUFBSSxLQUFLLENBQUMsY0FBYyxJQUFJLENBQUM7b0JBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3hELElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDNUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzVCLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNoQztxQkFBTTtvQkFDSCxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDN0IsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQy9CO2dCQUVELFFBQVE7Z0JBQ1IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JFLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9DLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRS9DLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNyRCxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDckQsSUFBSSxLQUFLLENBQUMsY0FBYyxJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3BELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDekMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3pCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDSCxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQzVCO2dCQUVELE9BQU87Z0JBQ1AsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0YsSUFBSSxLQUFLLEdBQVcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztnQkFDdEYsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDaEU7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDMUI7OztRQTlDTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBekMsQ0FBQztTQStDVDtJQUNMLENBQUM7SUFFRCxNQUFNO0lBQ04scURBQVUsR0FBVixVQUFXLElBQVMsSUFBRyxDQUFDO0lBeERQLGdDQUFnQztRQURwRCxPQUFPO09BQ2EsZ0NBQWdDLENBMkRwRDtJQUFELHVDQUFDO0NBM0RELEFBMkRDLENBM0Q2RCxFQUFFLENBQUMsU0FBUyxHQTJEekU7a0JBM0RvQixnQ0FBZ0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIwLTExLTE5IDE4OjA1OjA5XHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTEyIDE3OjUxOjQ0XHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9ybWFsX3BhbmxlX21vZGVsMDJfc3R1ZGVudExpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgb25Mb2FkKCkgeyB9XHJcblxyXG4gICAgLy8g5riy5p+T5bGCXHJcbiAgICB1cGRhdGVVaShzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN0dWRlbnQgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdHVkZW50TGlzdFtpXSkge1xyXG4gICAgICAgICAgICAgICAgc3R1ZGVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5ZCN5a2XXHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHN0dWRlbnQuZ2V0Q2hpbGRCeU5hbWUoJ2hlYWQnKS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgbmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXRlLnN0dWRlbnRMaXN0W2ldLm5pY2tuYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOiuvue9riDnm5HmjqdcclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9yZWQgPSBzdHVkZW50LmdldENoaWxkQnlOYW1lKCdib2R5JykuZ2V0Q2hpbGRCeU5hbWUoJ21vbml0b3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JlZFNob3cgPSBtb25pdG9yZWQuZ2V0Q2hpbGRCeU5hbWUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9yZWRIaWRlID0gbW9uaXRvcmVkLmdldENoaWxkQnlOYW1lKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zaWduYWxpbmdNb2RlbCA9PSAxKSBtb25pdG9yZWQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2lnbmFsaW5nTW9kZWwgPT0gMikgbW9uaXRvcmVkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2lnbmFsaW5nTW9kZWwgPT0gMykgbW9uaXRvcmVkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm1vbml0b3JlZCA9PSBzdGF0ZS5zdHVkZW50TGlzdFtpXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbml0b3JlZFNob3cuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBtb25pdG9yZWRIaWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtb25pdG9yZWRTaG93LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbml0b3JlZEhpZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDorr7nva4g5oqV5pS+XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF1bmNoID0gc3R1ZGVudC5nZXRDaGlsZEJ5TmFtZSgnYm9keScpLmdldENoaWxkQnlOYW1lKCdsYXVuY2gnKTtcclxuICAgICAgICAgICAgICAgIGxldCBsYXVuY2hTaG93ID0gbGF1bmNoLmdldENoaWxkQnlOYW1lKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF1bmNoSGlkZSA9IGxhdW5jaC5nZXRDaGlsZEJ5TmFtZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2lnbmFsaW5nTW9kZWwgPT0gMSkgbGF1bmNoLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnNpZ25hbGluZ01vZGVsID09IDIpIGxhdW5jaC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zaWduYWxpbmdNb2RlbCA9PSAzKSBsYXVuY2guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5sYXVuY2ggPT0gc3RhdGUuc3R1ZGVudExpc3RbaV0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXVuY2hTaG93LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoSGlkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoU2hvdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsYXVuY2hIaWRlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDorr7nva7mjpLlkI1cclxuICAgICAgICAgICAgICAgIGxldCByYW5rTGFiZWwgPSBzdHVkZW50LmdldENoaWxkQnlOYW1lKCdoZWFkJykuZ2V0Q2hpbGRCeU5hbWUoJ3JhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBzdGF0ZS5yYW5raW5nLmZpbmRJbmRleCgodjogYW55KSA9PiBzdGF0ZS5zdHVkZW50TGlzdFtpXS5pZCA9PSB2KTtcclxuICAgICAgICAgICAgICAgIHJhbmtMYWJlbC5zdHJpbmcgPSBpbmRleCA9PSAtMSA/IFwiXCIgOiAoaW5kZXggKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3R1ZGVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmlbDmja7lsYJcclxuICAgIHVwZGF0ZURhdGEoZGF0YTogYW55KSB7fVxyXG4gICAgXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-getMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38cf7npfWtCAJkVDqM7GA1y', 'controller-model02-getMessage');
// prefabLibrary/controllers/controller-model02/scripts/controller-model02-getMessage.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-02-07 11:39:43
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 17:48:58
 */
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
exports.getMessage = void 0;
function getMessage(data) {
    return __awaiter(this, void 0, void 0, function () {
        var message, _a, name, userid, role, signalingModel, monitored, user, curState_1, prevState_1, toUser, panleState, user, user, user, panelJs;
        var _this = this;
        return __generator(this, function (_b) {
            console.log('getMessage');
            message = globalThis._.cloneDeep(data);
            console.log(message);
            switch (data.method) {
                case "onJumpPage": {
                    this.onJumpConfig(data.toPage);
                    break;
                }
                case 'onFileMessage': {
                    if (data.isRestore) {
                        return [2 /*return*/];
                    }
                    if (data.handleData.action == "EVENT_UPDATE_STATE") {
                        if (!window['GlobalData'].stateProxy)
                            return [2 /*return*/];
                        _a = window['GlobalData'].courseData, name = _a.name, userid = _a.userid, role = _a.role, signalingModel = _a.signalingModel, monitored = _a.monitored;
                        user = data.handleData.user;
                        curState_1 = data.handleData.handleData;
                        prevState_1 = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
                        if (data.handleData.toUser) {
                            toUser = data.handleData.toUser;
                            // 兼容
                            // 安卓ipad 部分账户 无法获取userid 用name替代
                            if (toUser.id == userid || encodeURIComponent(toUser.nickname) == userid) {
                                Object.keys(prevState_1).forEach(function (v) {
                                    if (!(globalThis._.isEqual(prevState_1[v], curState_1[v]))) {
                                        // state 流转 临时
                                        window['GlobalData'].stateProxy[v] = "";
                                        window['GlobalData'].pubSub.emit(curState_1[v], v);
                                    }
                                });
                            }
                        }
                        else {
                            // 老师同步学生
                            if (role == 0) {
                                // 演示模式 相互通信
                                if (signalingModel == 1) {
                                    Object.keys(prevState_1).forEach(function (v) {
                                        if (!(globalThis._.isEqual(prevState_1[v], curState_1[v]))) {
                                            // state 流转 临时
                                            window['GlobalData'].stateProxy[v] = "";
                                            window['GlobalData'].pubSub.emit(curState_1[v], v);
                                        }
                                    });
                                }
                                // 答题模式 
                                // 1.老师保存学生答案 2.老师保存并渲染学生答案
                                if (signalingModel == 2) {
                                    if (user.role == 2) {
                                        panleState = globalThis._.cloneDeep(window['GlobalData'].stateProxy[this._panel.name]);
                                        panleState.snapshoot[user.userid] = curState_1;
                                        window['GlobalData'].stateProxy[this._panel.name] = "";
                                        window['GlobalData'].pubSub.emit(panleState, this._panel.name);
                                        if (monitored && (user.userid == monitored || user.name == monitored)) {
                                            Object.keys(prevState_1).forEach(function (v) {
                                                if (!(globalThis._.isEqual(prevState_1[v], curState_1[v])) && v != _this._panel.name) {
                                                    // state 流转 临时
                                                    window['GlobalData'].stateProxy[v] = "";
                                                    window['GlobalData'].pubSub.emit(curState_1[v], v);
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                            // 学生 同步老师
                            if (role == 2) {
                                // 演示模式 相互通信
                                if (signalingModel == 1) {
                                    Object.keys(prevState_1).forEach(function (v) {
                                        if (!(globalThis._.isEqual(prevState_1[v], curState_1[v]))) {
                                            // state 流转 临时
                                            window['GlobalData'].stateProxy[v] = "";
                                            window['GlobalData'].pubSub.emit(curState_1[v], v);
                                        }
                                    });
                                }
                                if (signalingModel == 2) {
                                    if (user.role == 0) {
                                        if (user.signalingModel != signalingModel) {
                                            Object.keys(prevState_1).forEach(function (v) {
                                                if (!(globalThis._.isEqual(prevState_1[v], curState_1[v]))) {
                                                    // state 流转 临时
                                                    window['GlobalData'].stateProxy[v] = "";
                                                    window['GlobalData'].pubSub.emit(curState_1[v], v);
                                                }
                                            });
                                        }
                                    }
                                }
                                if (signalingModel == 3) {
                                    if (user.role == 0) {
                                        Object.keys(prevState_1).forEach(function (v) {
                                            if (!(globalThis._.isEqual(prevState_1[v], curState_1[v]))) {
                                                // state 流转 临时
                                                window['GlobalData'].stateProxy[v] = "";
                                                window['GlobalData'].pubSub.emit(curState_1[v], v);
                                            }
                                        });
                                    }
                                }
                            }
                            // 巡课 助教 同屏 老师
                            if (role == 1 || role == 4) {
                                if (user.role == 0) {
                                    Object.keys(prevState_1).forEach(function (v) {
                                        if (!(globalThis._.isEqual(prevState_1[v], curState_1[v]))) {
                                            // state 流转 临时
                                            window['GlobalData'].stateProxy[v] = "";
                                            window['GlobalData'].pubSub.emit(curState_1[v], v);
                                        }
                                    });
                                }
                            }
                        }
                    }
                    break;
                }
                case 'onUserChange': {
                    // 此回调 老师处理
                    if (window['GlobalData'].courseData.role != 0) {
                        return [2 /*return*/];
                    }
                    // 临时方案
                    // 老师端 人员变动 禁止 发送信令
                    // 老师退出重进：此处信息获取早于 页面状态初始化
                    if (data.data.type == 'create') {
                        window['GlobalData'].stateProxy[this._panel.name] = "";
                    }
                    if (data.data.type == 'join') {
                        user = data.data.users[0];
                        if (user.role == 2) {
                            window['GlobalData'].stateProxy[this._panel.name] = "";
                        }
                    }
                    if (data.data.type == 'leave') {
                        user = data.data.users[0];
                        if (user.role == 2) {
                            window['GlobalData'].stateProxy[this._panel.name] = "";
                        }
                    }
                    // 临时方案
                    // 定时同步 ：ipad 课件加载慢; 已获取进入房间的信息，但学生课件并未加载完成
                    if (data.data.type == 'join') {
                        user = data.data.users[0];
                        this.countDown(user);
                    }
                    panelJs = this._panel.getComponent(cc.Component);
                    panelJs.signalCallback(data.data);
                }
            }
            return [2 /*return*/];
        });
    });
}
exports.getMessage = getMessage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMlxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAyLWdldE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILFNBQXNCLFVBQVUsQ0FBQyxJQUFTOzs7OztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRXBCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsS0FBSyxZQUFZLENBQUMsQ0FBQztvQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDL0IsTUFBTTtpQkFDVDtnQkFFRCxLQUFLLGVBQWUsQ0FBQyxDQUFDO29CQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2hCLHNCQUFPO3FCQUNWO29CQUVELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksb0JBQW9CLEVBQUU7d0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVTs0QkFBRSxzQkFBTzt3QkFDekMsS0FBb0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBakYsSUFBSSxVQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsY0FBYyxvQkFBQSxFQUFFLFNBQVMsZUFBQSxDQUFxQzt3QkFDcEYsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO3dCQUM1QixhQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO3dCQUN0QyxjQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFFakYsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTs0QkFDcEIsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDOzRCQUVwQyxLQUFLOzRCQUNMLGlDQUFpQzs0QkFDakMsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxFQUFFO2dDQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7b0NBQzdCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dDQUNwRCxjQUFjO3dDQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dDQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUNBQ3BEO2dDQUNMLENBQUMsQ0FBQyxDQUFDOzZCQUNOO3lCQUNKOzZCQUFNOzRCQUNILFNBQVM7NEJBQ1QsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO2dDQUNYLFlBQVk7Z0NBQ1osSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO29DQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7d0NBQzdCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRDQUNwRCxjQUFjOzRDQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRDQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUNBQ3BEO29DQUNMLENBQUMsQ0FBQyxDQUFDO2lDQUNOO2dDQUVELFFBQVE7Z0NBQ1IsMkJBQTJCO2dDQUMzQixJQUFJLGNBQWMsSUFBSSxDQUFDLEVBQUU7b0NBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7d0NBQ1osVUFBVSxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dDQUNoRyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxVQUFRLENBQUM7d0NBQzdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0NBQ3ZELE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUUvRCxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLEVBQUU7NENBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztnREFDN0IsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO29EQUM3RSxjQUFjO29EQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29EQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aURBQ3BEOzRDQUNMLENBQUMsQ0FBQyxDQUFDO3lDQUNOO3FDQUNKO2lDQUNKOzZCQUNKOzRCQUVELFVBQVU7NEJBQ1YsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO2dDQUNYLFlBQVk7Z0NBQ1osSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO29DQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7d0NBQzdCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRDQUNwRCxjQUFjOzRDQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRDQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUNBQ3BEO29DQUNMLENBQUMsQ0FBQyxDQUFDO2lDQUNOO2dDQUVELElBQUksY0FBYyxJQUFJLENBQUMsRUFBRTtvQ0FDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTt3Q0FDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLGNBQWMsRUFBRTs0Q0FDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dEQUM3QixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvREFDcEQsY0FBYztvREFDZCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvREFDeEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lEQUNwRDs0Q0FDTCxDQUFDLENBQUMsQ0FBQzt5Q0FDTjtxQ0FDSjtpQ0FDSjtnQ0FFRCxJQUFJLGNBQWMsSUFBSSxDQUFDLEVBQUU7b0NBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7d0NBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQzs0Q0FDN0IsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0RBQ3BELGNBQWM7Z0RBQ2QsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0RBQ3hDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs2Q0FDcEQ7d0NBQ0wsQ0FBQyxDQUFDLENBQUM7cUNBQ047aUNBQ0o7NkJBQ0o7NEJBRUQsY0FBYzs0QkFDZCxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtnQ0FDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQ0FDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO3dDQUM3QixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0Q0FDcEQsY0FBYzs0Q0FDZCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0Q0FDeEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lDQUNwRDtvQ0FDTCxDQUFDLENBQUMsQ0FBQztpQ0FDTjs2QkFDSjt5QkFDSjtxQkFDSjtvQkFDRCxNQUFNO2lCQUNUO2dCQUVELEtBQUssY0FBYyxDQUFDLENBQUM7b0JBQ2pCLFdBQVc7b0JBQ1gsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7d0JBQzNDLHNCQUFPO3FCQUNWO29CQUVELE9BQU87b0JBQ1AsbUJBQW1CO29CQUNuQiwwQkFBMEI7b0JBQzFCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO3dCQUM1QixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUMxRDtvQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTt3QkFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNoQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUMxRDtxQkFDSjtvQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTt3QkFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFOzRCQUNoQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUMxRDtxQkFDSjtvQkFFRCxPQUFPO29CQUNQLDJDQUEyQztvQkFDM0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7d0JBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDeEI7b0JBRUcsT0FBTyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JDO2FBQ0o7Ozs7Q0FFSjtBQXpLRCxnQ0F5S0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAyLTA3IDExOjM5OjQzXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTEyIDE3OjQ4OjU4XHJcbiAqL1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2UoZGF0YTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0TWVzc2FnZScpXHJcbiAgICBsZXQgbWVzc2FnZSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAoZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxyXG4gICAgXHJcbiAgICBzd2l0Y2ggKGRhdGEubWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSBcIm9uSnVtcFBhZ2VcIjoge1xyXG4gICAgICAgICAgICB0aGlzLm9uSnVtcENvbmZpZyhkYXRhLnRvUGFnZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSAnb25GaWxlTWVzc2FnZSc6IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuaXNSZXN0b3JlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmhhbmRsZURhdGEuYWN0aW9uID09IFwiRVZFTlRfVVBEQVRFX1NUQVRFXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IHsgbmFtZSwgdXNlcmlkLCByb2xlLCBzaWduYWxpbmdNb2RlbCwgbW9uaXRvcmVkIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBkYXRhLmhhbmRsZURhdGEudXNlcjtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJTdGF0ZSA9IGRhdGEuaGFuZGxlRGF0YS5oYW5kbGVEYXRhO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZXZTdGF0ZSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAod2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVtcInN0YXRlXCJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVEYXRhLnRvVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b1VzZXIgPSBkYXRhLmhhbmRsZURhdGEudG9Vc2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWFvOWuuVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWuieWNk2lwYWQg6YOo5YiG6LSm5oi3IOaXoOazleiOt+WPlnVzZXJpZCDnlKhuYW1l5pu/5LujXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvVXNlci5pZCA9PSB1c2VyaWQgfHwgZW5jb2RlVVJJQ29tcG9uZW50KHRvVXNlci5uaWNrbmFtZSkgPT0gdXNlcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGUg5rWB6L2sIOS4tOaXtlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KGN1clN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDogIHluIjlkIzmraXlrabnlJ9cclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa8lOekuuaooeW8jyDnm7jkupLpgJrkv6FcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5wdWJTdWIuZW1pdChjdXJTdGF0ZVt2XSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOetlOmimOaooeW8jyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS7ogIHluIjkv53lrZjlrabnlJ/nrZTmoYggMi7ogIHluIjkv53lrZjlubbmuLLmn5PlrabnlJ/nrZTmoYhcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYW5sZVN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbmxlU3RhdGUuc25hcHNob290W3VzZXIudXNlcmlkXSA9IGN1clN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KHBhbmxlU3RhdGUsIHRoaXMuX3BhbmVsLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9uaXRvcmVkICYmICh1c2VyLnVzZXJpZCA9PSBtb25pdG9yZWQgfHwgdXNlci5uYW1lID09IG1vbml0b3JlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJldlN0YXRlKS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShnbG9iYWxUaGlzLl8uaXNFcXVhbChwcmV2U3RhdGVbdl0sIGN1clN0YXRlW3ZdKSkgJiYgdiAhPSB0aGlzLl9wYW5lbC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGUg5rWB6L2sIOS4tOaXtlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KGN1clN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDlrabnlJ8g5ZCM5q2l6ICB5biIXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmvJTnpLrmqKHlvI8g55u45LqS6YCa5L+hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWduYWxpbmdNb2RlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShnbG9iYWxUaGlzLl8uaXNFcXVhbChwcmV2U3RhdGVbdl0sIGN1clN0YXRlW3ZdKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGUg5rWB6L2sIOS4tOaXtlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W3ZdID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2lnbmFsaW5nTW9kZWwgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIucm9sZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIuc2lnbmFsaW5nTW9kZWwgIT0gc2lnbmFsaW5nTW9kZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJldlN0YXRlKS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShnbG9iYWxUaGlzLl8uaXNFcXVhbChwcmV2U3RhdGVbdl0sIGN1clN0YXRlW3ZdKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWduYWxpbmdNb2RlbCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5yb2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W3ZdID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KGN1clN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDlt6Hor74g5Yqp5pWZIOWQjOWxjyDogIHluIhcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZSA9PSAxIHx8IHJvbGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5yb2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5wdWJTdWIuZW1pdChjdXJTdGF0ZVt2XSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlICdvblVzZXJDaGFuZ2UnOiB7XHJcbiAgICAgICAgICAgIC8vIOatpOWbnuiwgyDogIHluIjlpITnkIZcclxuICAgICAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEucm9sZSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOS4tOaXtuaWueahiFxyXG4gICAgICAgICAgICAvLyDogIHluIjnq68g5Lq65ZGY5Y+Y5YqoIOemgeatoiDlj5HpgIHkv6Hku6RcclxuICAgICAgICAgICAgLy8g6ICB5biI6YCA5Ye66YeN6L+b77ya5q2k5aSE5L+h5oGv6I635Y+W5pep5LqOIOmhtemdoueKtuaAgeWIneWni+WMllxyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhLnR5cGUgPT0gJ2NyZWF0ZScpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0gPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhLnR5cGUgPT0gJ2pvaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRhdGEuZGF0YS51c2Vyc1swXTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhLnR5cGUgPT0gJ2xlYXZlJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBkYXRhLmRhdGEudXNlcnNbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlci5yb2xlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W3RoaXMuX3BhbmVsLm5hbWVdID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5Li05pe25pa55qGIXHJcbiAgICAgICAgICAgIC8vIOWumuaXtuWQjOatpSDvvJppcGFkIOivvuS7tuWKoOi9veaFojsg5bey6I635Y+W6L+b5YWl5oi/6Ze055qE5L+h5oGv77yM5L2G5a2m55Sf6K++5Lu25bm25pyq5Yqg6L295a6M5oiQXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEudHlwZSA9PSAnam9pbicpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gZGF0YS5kYXRhLnVzZXJzWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd24odXNlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwYW5lbEpzOiBhbnkgPSB0aGlzLl9wYW5lbC5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgcGFuZWxKcy5zaWduYWxDYWxsYmFjayhkYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eabe68KfalDJrLug5SBSBFT', 'formal-panle-model02');
// prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02.ts

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
 * @Date: 2020-11-19 18:05:09
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 17:57:27
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var formal_panle_model02 = /** @class */ (function (_super) {
    __extends(formal_panle_model02, _super);
    function formal_panle_model02() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.modelList = null;
        _this.studentList = null;
        _this.models = [];
        _this._state = {
            show: false,
            signalingModel: 1,
            monitored: null,
            launch: null,
            studentList: [],
            ranking: [],
            snapshoot: {}
        };
        _this._stJs = null;
        return _this;
    }
    Object.defineProperty(formal_panle_model02.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (v) {
            this._state = v;
            this.updateUi(this._state);
            this._stJs.updateUi(this._state);
            this.mergeState();
        },
        enumerable: false,
        configurable: true
    });
    formal_panle_model02.prototype.onLoad = function () {
        var student = this.node.getChildByName('studentList');
        this._stJs = student.getComponent(cc.Component);
    };
    // 初始化
    formal_panle_model02.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    formal_panle_model02.prototype.reset = function () {
        var state = globalThis._.cloneDeep(this._state);
        state.signalingModel = 1;
        state.snapshoot = {};
        state.monitored = null;
        state.launch = null;
        state.ranking = [];
        this.state = state;
    };
    // 注册状态，及获取状态的方法
    formal_panle_model02.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    formal_panle_model02.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    formal_panle_model02.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    // 获取状态
    formal_panle_model02.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 切换面板
    formal_panle_model02.prototype.switchBox = function (e, ced) {
        if (window['GlobalData'].courseData.role != 0)
            return;
        var state = globalThis._.cloneDeep(this._state);
        state.show = !state.show;
        this.updateState(state);
    };
    // 切换模式
    formal_panle_model02.prototype.changeSignalingModel = function (e, ced) {
        if (window['GlobalData'].courseData.role != 0)
            return;
        if (ced == window['GlobalData'].courseData.signalingModel)
            return;
        var state = globalThis._.cloneDeep(this._state);
        state.signalingModel = parseInt(ced);
        if (ced == 1) {
            state.monitored = null;
            state.launch = null;
            state.ranking = [];
        }
        else if (ced == 2) {
            state.launch = null;
        }
        else if (ced == 3) {
            state.monitored = null;
        }
        var prevState = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
        var curState = window['GlobalData'].courseData.stateShoot;
        if (curState) {
            Object.keys(prevState).forEach(function (v) {
                if (!(globalThis._.isEqual(prevState[v], curState[v])) && v != "formal-panle-model02") {
                    window['GlobalData'].stateProxy[v] = "";
                    window['GlobalData'].pubSub.emit(curState[v], v);
                }
            });
        }
        this.updateState(state);
    };
    // 切换监控
    formal_panle_model02.prototype.changeMonitored = function (e, ced) {
        if (window['GlobalData'].courseData.role != 0)
            return;
        var state = globalThis._.cloneDeep(this._state);
        var monitored = state.studentList[parseInt(ced)].id;
        var monitoredName = encodeURIComponent(state.studentList[parseInt(ced)].nickname);
        var prevState = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
        var curState;
        if (state.monitored == monitored) {
            state.monitored = null;
            curState = window['GlobalData'].courseData.stateShoot;
        }
        else {
            state.monitored = monitored;
            // 兼容
            // 安卓ipad 部分账户 无法获取userid 用name替代
            if (state.snapshoot[monitored]) {
                curState = state.snapshoot[monitored];
            }
            else if (state.snapshoot[monitoredName]) {
                curState = state.snapshoot[monitoredName];
            }
        }
        if (curState) {
            Object.keys(prevState).forEach(function (v) {
                if (!(globalThis._.isEqual(prevState[v], curState[v])) && v != "formal-panle-model02") {
                    window['GlobalData'].stateProxy[v] = "";
                    window['GlobalData'].pubSub.emit(curState[v], v);
                }
            });
        }
        this.updateState(state);
    };
    // 切換投放
    formal_panle_model02.prototype.changeLaunch = function (e, ced) {
        if (window['GlobalData'].courseData.role != 0)
            return;
        var state = globalThis._.cloneDeep(this._state);
        var launch = state.studentList[parseInt(ced)].id;
        var launchName = encodeURIComponent(state.studentList[parseInt(ced)].nickname);
        var prevState = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
        var curState;
        if (state.launch == launch) {
            state.launch = null;
            curState = window['GlobalData'].courseData.stateShoot;
        }
        else {
            state.launch = launch;
            // 兼容
            // 安卓ipad 部分账户 无法获取userid 用name替代
            if (state.snapshoot[launch]) {
                curState = state.snapshoot[launch];
            }
            else if (state.snapshoot[launchName]) {
                curState = state.snapshoot[launchName];
            }
        }
        if (curState) {
            Object.keys(prevState).forEach(function (v) {
                if (!(globalThis._.isEqual(prevState[v], curState[v])) && v != "formal-panle-model02") {
                    window['GlobalData'].stateProxy[v] = "";
                    window['GlobalData'].pubSub.emit(curState[v], v);
                }
            });
        }
        this.updateState(state);
    };
    // 更新学生列表 
    formal_panle_model02.prototype.changeStudentList = function (data) {
        var state = globalThis._.cloneDeep(this._state);
        state.studentList = data;
        this.updateState(state);
    };
    // 更新 答案提交 先后
    formal_panle_model02.prototype.changeRanking = function (userid) {
        var state = globalThis._.cloneDeep(this._state);
        var index = state.ranking.findIndex(function (v) { return v == userid; });
        if (index == -1) {
            state.ranking.push(userid);
            this.updateState(state);
        }
    };
    // 更新状态层
    formal_panle_model02.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // ui层
    formal_panle_model02.prototype.updateUi = function (state) {
        // 模式栏 人员栏 显示与隐藏
        this.modelList.stopAllActions();
        this.studentList.stopAllActions();
        cc.tween(this.modelList)
            .to(.2, { x: state.show ? -930 : -990 })
            .start();
        cc.tween(this.studentList)
            .to(.2, { y: state.show ? 540 : 640 })
            .start();
        // 模式栏 激活样式
        for (var i = 0; i < this.models.length; i++) {
            var bg = this.models[i].getChildByName("bg");
            var text = this.models[i].getChildByName("text");
            bg.color = i == (state.signalingModel - 1) ? cc.color(15, 187, 233, 255) : cc.color(255, 255, 255, 255);
            text.color = i == (state.signalingModel - 1) ? cc.color(255, 255, 255, 255) : cc.color(59, 59, 59, 255);
        }
        // 信令模式 赋值 全局变量
        window['GlobalData'].courseData.signalingModel = state.signalingModel;
        // 监控模式 监控谁
        window['GlobalData'].courseData.monitored = state.monitored;
    };
    formal_panle_model02.prototype.userCreate = function (users) {
        return users.filter(function (v) { return v.role == 2; });
    };
    formal_panle_model02.prototype.userJoin = function (users) {
        var state = globalThis._.cloneDeep(this._state);
        var arr = state.studentList.map(function (v) { return v; });
        var index = state.studentList.findIndex(function (v) { return v.id == users[0].id; });
        if (users[0].role == 2 && index == -1) {
            arr.push(users[0]);
        }
        return arr;
    };
    formal_panle_model02.prototype.userLeave = function (users) {
        var state = globalThis._.cloneDeep(this._state);
        return state.studentList.filter(function (v) { return v.id !== users[0].id; });
    };
    formal_panle_model02.prototype.signalCallback = function (data) {
        // console.log('signalCallback');
        // console.log(data);
        if (data && data.type) {
            var list = void 0;
            if (data.type == 'create') {
                list = this.userCreate(data.users);
            }
            if (data.type == 'leave') {
                list = this.userLeave(data.users);
            }
            if (data.type == 'join') {
                list = this.userJoin(data.users);
            }
            this.changeStudentList(list);
        }
    };
    formal_panle_model02.prototype.onEnable = function () {
        this.registerState();
    };
    formal_panle_model02.prototype.onDisable = function () {
        this.relieveState();
    };
    __decorate([
        property({
            type: cc.Node,
            displayName: 'modelList 节点'
        })
    ], formal_panle_model02.prototype, "modelList", void 0);
    __decorate([
        property({
            type: cc.Node,
            displayName: 'studentList 节点'
        })
    ], formal_panle_model02.prototype, "studentList", void 0);
    __decorate([
        property({
            type: [cc.Node],
            displayName: '模式节点'
        })
    ], formal_panle_model02.prototype, "models", void 0);
    formal_panle_model02 = __decorate([
        ccclass
    ], formal_panle_model02);
    return formal_panle_model02;
}(cc.Component));
exports.default = formal_panle_model02;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xcZm9ybWFsLXBhbmxlLW1vZGVsMDJcXGphdmFzY3JpcHRzXFxmb3JtYWwtcGFubGUtbW9kZWwwMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUEwU0M7UUFyU0csZUFBUyxHQUFZLElBQUksQ0FBQztRQU0xQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQU01QixZQUFNLEdBQWMsRUFBRSxDQUFDO1FBRWhCLFlBQU0sR0FBRztZQUNaLElBQUksRUFBRSxLQUFLO1lBQ1gsY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSTtZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBY00sV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFpUXpCLENBQUM7SUE3UUcsc0JBQUksdUNBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDOzs7T0FSQTtJQVlE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LENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixXQUFXLEVBQUUsY0FBYztTQUM5QixDQUFDOzJEQUN3QjtJQU0xQjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtZQUNiLFdBQVcsRUFBRSxnQkFBZ0I7U0FDaEMsQ0FBQzs2REFDMEI7SUFNNUI7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQzt3REFDcUI7SUFqQk4sb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0EwU3hDO0lBQUQsMkJBQUM7Q0ExU0QsQUEwU0MsQ0ExU2lELEVBQUUsQ0FBQyxTQUFTLEdBMFM3RDtrQkExU29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjAtMTEtMTkgMTg6MDU6MDlcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDQtMTIgMTc6NTc6MjdcclxuICovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmb3JtYWxfcGFubGVfbW9kZWwwMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdtb2RlbExpc3Qg6IqC54K5J1xyXG4gICAgfSlcclxuICAgIG1vZGVsTGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnc3R1ZGVudExpc3Qg6IqC54K5J1xyXG4gICAgfSlcclxuICAgIHN0dWRlbnRMaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+aooeW8j+iKgueCuSdcclxuICAgIH0pXHJcbiAgICBtb2RlbHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBfc3RhdGUgPSB7XHJcbiAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgc2lnbmFsaW5nTW9kZWw6IDEsXHJcbiAgICAgICAgbW9uaXRvcmVkOiBudWxsLFxyXG4gICAgICAgIGxhdW5jaDogbnVsbCxcclxuICAgICAgICBzdHVkZW50TGlzdDogW10sXHJcbiAgICAgICAgcmFua2luZzogW10sXHJcbiAgICAgICAgc25hcHNob290OiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLl9zdEpzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RKcyA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzdHVkZW50TGlzdCcpO1xyXG4gICAgICAgIHRoaXMuX3N0SnMgPSBzdHVkZW50LmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMllxyXG4gICAgYXN5bmMgaW5pdCgpIHsgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc2lnbmFsaW5nTW9kZWwgPSAxO1xyXG4gICAgICAgIHN0YXRlLnNuYXBzaG9vdCA9IHt9O1xyXG4gICAgICAgIHN0YXRlLm1vbml0b3JlZCA9IG51bGw7XHJcbiAgICAgICAgc3RhdGUubGF1bmNoID0gbnVsbDtcclxuICAgICAgICBzdGF0ZS5yYW5raW5nID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YiH5o2i6Z2i5p2/XHJcbiAgICBzd2l0Y2hCb3goZTogYW55LCBjZWQ6IGFueSkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnJvbGUgIT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnNob3cgPSAhc3RhdGUuc2hvdztcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliIfmjaLmqKHlvI9cclxuICAgIGNoYW5nZVNpZ25hbGluZ01vZGVsKGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlICE9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGNlZCA9PSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnNpZ25hbGluZ01vZGVsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5zaWduYWxpbmdNb2RlbCA9IHBhcnNlSW50KGNlZCk7XHJcblxyXG4gICAgICAgIGlmIChjZWQgPT0gMSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5tb25pdG9yZWQgPSBudWxsO1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXVuY2ggPSBudWxsO1xyXG4gICAgICAgICAgICBzdGF0ZS5yYW5raW5nID0gW107XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWQgPT0gMikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXVuY2ggPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VkID09IDMpIHtcclxuICAgICAgICAgICAgc3RhdGUubW9uaXRvcmVkID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmV2U3RhdGUgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbXCJzdGF0ZVwiXSk7XHJcbiAgICAgICAgbGV0IGN1clN0YXRlOiBhbnkgPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnN0YXRlU2hvb3Q7XHJcblxyXG4gICAgICAgIGlmIChjdXJTdGF0ZSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSAmJiB2ICE9IFwiZm9ybWFsLXBhbmxlLW1vZGVsMDJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KGN1clN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliIfmjaLnm5HmjqdcclxuICAgIGNoYW5nZU1vbml0b3JlZChlOiBhbnksIGNlZDogYW55KSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEucm9sZSAhPSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcblxyXG4gICAgICAgIGxldCBtb25pdG9yZWQgPSBzdGF0ZS5zdHVkZW50TGlzdFtwYXJzZUludChjZWQpXS5pZDtcclxuICAgICAgICBsZXQgbW9uaXRvcmVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZS5zdHVkZW50TGlzdFtwYXJzZUludChjZWQpXS5uaWNrbmFtZSk7XHJcblxyXG4gICAgICAgIGxldCBwcmV2U3RhdGUgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbXCJzdGF0ZVwiXSk7XHJcbiAgICAgICAgbGV0IGN1clN0YXRlOiBhbnk7XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5tb25pdG9yZWQgPT0gbW9uaXRvcmVkKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vbml0b3JlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1clN0YXRlID0gd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zdGF0ZVNob290O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vbml0b3JlZCA9IG1vbml0b3JlZDtcclxuXHJcbiAgICAgICAgICAgIC8vIOWFvOWuuVxyXG4gICAgICAgICAgICAvLyDlronljZNpcGFkIOmDqOWIhui0puaItyDml6Dms5Xojrflj5Z1c2VyaWQg55SobmFtZeabv+S7o1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc25hcHNob290W21vbml0b3JlZF0pIHtcclxuICAgICAgICAgICAgICAgIGN1clN0YXRlID0gc3RhdGUuc25hcHNob290W21vbml0b3JlZF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuc25hcHNob290W21vbml0b3JlZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJTdGF0ZSA9IHN0YXRlLnNuYXBzaG9vdFttb25pdG9yZWROYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1clN0YXRlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpICYmIHYgIT0gXCJmb3JtYWwtcGFubGUtbW9kZWwwMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIh+aPm+aKleaUvlxyXG4gICAgY2hhbmdlTGF1bmNoKGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlICE9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgbGF1bmNoID0gc3RhdGUuc3R1ZGVudExpc3RbcGFyc2VJbnQoY2VkKV0uaWQ7XHJcbiAgICAgICAgbGV0IGxhdW5jaE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdGUuc3R1ZGVudExpc3RbcGFyc2VJbnQoY2VkKV0ubmlja25hbWUpO1xyXG5cclxuICAgICAgICBsZXQgcHJldlN0YXRlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W1wic3RhdGVcIl0pO1xyXG4gICAgICAgIGxldCBjdXJTdGF0ZTogYW55O1xyXG4gICAgICAgIGlmIChzdGF0ZS5sYXVuY2ggPT0gbGF1bmNoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhdW5jaCA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1clN0YXRlID0gd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zdGF0ZVNob290O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhdW5jaCA9IGxhdW5jaDtcclxuXHJcbiAgICAgICAgICAgIC8vIOWFvOWuuVxyXG4gICAgICAgICAgICAvLyDlronljZNpcGFkIOmDqOWIhui0puaItyDml6Dms5Xojrflj5Z1c2VyaWQg55SobmFtZeabv+S7o1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc25hcHNob290W2xhdW5jaF0pIHtcclxuICAgICAgICAgICAgICAgIGN1clN0YXRlID0gc3RhdGUuc25hcHNob290W2xhdW5jaF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuc25hcHNob290W2xhdW5jaE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJTdGF0ZSA9IHN0YXRlLnNuYXBzaG9vdFtsYXVuY2hOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1clN0YXRlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpICYmIHYgIT0gXCJmb3JtYWwtcGFubGUtbW9kZWwwMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOWtpueUn+WIl+ihqCBcclxuICAgIGNoYW5nZVN0dWRlbnRMaXN0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc3R1ZGVudExpc3QgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsCDnrZTmoYjmj5DkuqQg5YWI5ZCOXHJcbiAgICBjaGFuZ2VSYW5raW5nKHVzZXJpZDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzdGF0ZS5yYW5raW5nLmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IHVzZXJpZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJhbmtpbmcucHVzaCh1c2VyaWQpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1aeWxglxyXG4gICAgdXBkYXRlVWkoc3RhdGU6IGFueSkge1xyXG4gICAgICAgIC8vIOaooeW8j+agjyDkurrlkZjmoI8g5pi+56S65LiO6ZqQ6JePXHJcbiAgICAgICAgdGhpcy5tb2RlbExpc3Quc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnN0dWRlbnRMaXN0LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tb2RlbExpc3QpXHJcbiAgICAgICAgICAgIC50byguMiwgeyB4OiBzdGF0ZS5zaG93ID8gLTkzMCA6IC05OTAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3R1ZGVudExpc3QpXHJcbiAgICAgICAgICAgIC50byguMiwgeyB5OiBzdGF0ZS5zaG93ID8gNTQwIDogNjQwIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyDmqKHlvI/moI8g5r+A5rS75qC35byPXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmcgPSB0aGlzLm1vZGVsc1tpXS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMubW9kZWxzW2ldLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKTtcclxuICAgICAgICAgICAgYmcuY29sb3IgPSBpID09IChzdGF0ZS5zaWduYWxpbmdNb2RlbCAtIDEpID8gY2MuY29sb3IoMTUsIDE4NywgMjMzLCAyNTUpIDogY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGV4dC5jb2xvciA9IGkgPT0gKHN0YXRlLnNpZ25hbGluZ01vZGVsIC0gMSkgPyBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpIDogY2MuY29sb3IoNTksIDU5LCA1OSwgMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS/oeS7pOaooeW8jyDotYvlgLwg5YWo5bGA5Y+Y6YePXHJcbiAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zaWduYWxpbmdNb2RlbCA9IHN0YXRlLnNpZ25hbGluZ01vZGVsO1xyXG4gICAgICAgIC8vIOebkeaOp+aooeW8jyDnm5HmjqfosIFcclxuICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLm1vbml0b3JlZCA9IHN0YXRlLm1vbml0b3JlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlckNyZWF0ZSh1c2VyczogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJzLmZpbHRlcigodjogYW55KSA9PiB2LnJvbGUgPT0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlckpvaW4odXNlcnM6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGFyciA9IHN0YXRlLnN0dWRlbnRMaXN0Lm1hcCgodjogYW55KSA9PiB2KTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzdGF0ZS5zdHVkZW50TGlzdC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdi5pZCA9PSB1c2Vyc1swXS5pZClcclxuICAgICAgICBpZiAodXNlcnNbMF0ucm9sZSA9PSAyICYmIGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHVzZXJzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VyTGVhdmUodXNlcnM6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0dWRlbnRMaXN0LmZpbHRlcigodjogYW55KSA9PiB2LmlkICE9PSB1c2Vyc1swXS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmFsQ2FsbGJhY2soZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NpZ25hbENhbGxiYWNrJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0OiBhbnk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gJ2NyZWF0ZScpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLnVzZXJDcmVhdGUoZGF0YS51c2Vycyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gJ2xlYXZlJykge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMudXNlckxlYXZlKGRhdGEudXNlcnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09ICdqb2luJykge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMudXNlckpvaW4oZGF0YS51c2Vycyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3R1ZGVudExpc3QobGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMlxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUVwQyxJQUFBLGNBQWMsR0FBSyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQXpCLENBQTBCO0FBQzFDLElBQUEsS0FBNkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBdEQsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQWdDLENBQUM7QUFFL0QsbUZBQStEO0FBQy9ELGlGQUE2RDtBQUc3RDtJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQTRNQztRQXhNVyxrQkFBWSxHQUFHLEVBQUUsQ0FBQSxDQUFTLFVBQVU7UUFHckMsYUFBTyxHQUFHLElBQUksQ0FBQzs7SUFxTTFCLENBQUM7SUFuTUcsbUNBQU0sR0FBTixjQUFXLENBQUM7SUFFTixpQ0FBSSxHQUFWLFVBQVcsSUFBUzs7Ozs7O3dCQUNoQixPQUFPO3dCQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTs0QkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDMUIsc0JBQU87eUJBQ1Y7d0JBRUQsWUFBWTt3QkFDWixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBRXRCLFNBQVM7d0JBQ1QsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUVoRSxLQUFLO3dCQUNMLHlDQUF5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ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjAtMTItMjIgMTE6MDI6NDVcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDQtMTIgMTg6NTE6MDRcclxuICovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5jb25zdCB7IG1vbml0b3JNZXNzYWdlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXTtcclxuY29uc3QgeyBsb2FkUHJlZmFiLCBsb2FkQnVuZGxlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcblxyXG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gXCIuL2NvbnRyb2xsZXItbW9kZWwwMi1zZW5kTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBnZXRNZXNzYWdlIH0gZnJvbSBcIi4vY29udHJvbGxlci1tb2RlbDAyLWdldE1lc3NhZ2VcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvbnRyb2xsZXJfbW9kZWwwMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9jb25maWdKc29uOiBhbnk7ICAgICAgICAgLy8g6YWN572uanNvblxyXG4gICAgcHJpdmF0ZSBfcGFuZWw6IGFueTsgICAgICAgICAgICAgIC8vIOmdouadv1xyXG4gICAgcHJpdmF0ZSBfcmVzb3VyY2VCdW5kbGU6IGFueTsgICAgIC8vIGZhaXJ5Z3VpIOe0oOadkOi1hOa6kFxyXG4gICAgcHJpdmF0ZSBfcGFnZVByZWZhYnMgPSBbXSAgICAgICAgIC8vIOmimOWei+mihOWItuS9k+mbhuWQiFxyXG4gICAgcHJpdmF0ZSBfY3VycmVudFBhZ2VOb2RlOiBhbnk7ICAgIC8vIOW9k+WJjemimOWei+iKgueCuVxyXG5cclxuICAgIHB1YmxpYyBfdG9QYWdlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7IH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOe0oOadkOi1hOa6kFxyXG4gICAgICAgIGlmICghZGF0YS5wYXRoQ29uZmlnLnJlc291cmNlTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi57Sg5p2Q6LWE5rqQ5pyq6YWN572u77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDouqvku73or4bliKsg5YWo5bGA5Y+Y6YePXHJcbiAgICAgICAgdGhpcy5pZGVudGlmaWNhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyDml7bpl7TmiLMg5qCH6K6wXHJcbiAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS50aW1lc3RhbXAgPSB0aGlzLmdldFRpbWVzdGFtcCgpO1xyXG5cclxuICAgICAgICAvLyDkuLTml7ZcclxuICAgICAgICAvLyDlm6DlrqLmiLfnq68oZWxlY3Ryb24pIOS4i++8jGdsb2JhbFRoaXPkuLogdW5kZWZpbmVkXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuZ2xvYmFsVGhpcykge1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2xvYmFsVGhpcyA9IHt9O1xyXG4gICAgICAgICAgICB3aW5kb3cuZ2xvYmFsVGhpcy5fID0gd2luZG93Ll87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jb25maWdKc29uID0gZGF0YTtcclxuXHJcbiAgICAgICAgZmd1aS5HUm9vdC5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgLy8g55Sf5oiQ6Z2i5p2/XHJcbiAgICAgICAgbGV0IHBhbmVsUGF0aDogYW55ID0gYCR7ZGF0YS5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2RhdGEucGF0aENvbmZpZy5wYW5lbEJ1bmRsZVBhdGh9JHtkYXRhLnBhdGhDb25maWcucGFuZWxOYW1lfWA7XHJcbiAgICAgICAgbGV0IHBhbmVsQnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKHBhbmVsUGF0aCk7XHJcbiAgICAgICAgbGV0IHBhbmVsUHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKHBhbmVsQnVuZGxlLCBwYW5lbEJ1bmRsZS5uYW1lKTtcclxuICAgICAgICBsZXQgcGFuZWxOb2RlOiBhbnkgPSBjYy5pbnN0YW50aWF0ZShwYW5lbFByZWZhYik7XHJcbiAgICAgICAgcGFuZWxOb2RlLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG4gICAgICAgIHBhbmVsTm9kZS54ID0gOTYwO1xyXG4gICAgICAgIHBhbmVsTm9kZS55ID0gNTQwO1xyXG4gICAgICAgIHRoaXMuX3BhbmVsID0gcGFuZWxOb2RlO1xyXG5cclxuICAgICAgICAvLyDkuLTml7ZcclxuICAgICAgICAvLyDpnaLmnb8g5pi+56S6XHJcbiAgICAgICAgLy8g5aaC5p6c5piv5a2m55SfIOmdouadv+makOiXj1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcGFuZWwpIHRoaXMuX3BhbmVsLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5rOo5YaMIOWPkemAgeS/oeS7pOeahOWHuuWPoyDpgLvovpFcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU2VuZE1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU2VuZE1lc3NhZ2Uoc2VuZE1lc3NhZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliqDovb0g5omA5pyJ6aKY5Z6L6aKE5Yi25Lu2XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNoYXB0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBtb2RlbFBhdGg6IGFueSA9IGAke2RhdGEucGF0aENvbmZpZy5yZW1vdGVVcmx9JHtkYXRhLnBhdGhDb25maWcubW9kZWxCdW5kbGVQYXRofSR7ZGF0YS5jaGFwdGVyc1tpXS5tb2RlbEJ1bmRsZX1gO1xyXG4gICAgICAgICAgICBsZXQgbW9kZWxCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUobW9kZWxQYXRoKTtcclxuICAgICAgICAgICAgbGV0IG1vZGVsUHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKG1vZGVsQnVuZGxlLCBkYXRhLmNoYXB0ZXJzW2ldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlUHJlZmFic1tpXSA9IG1vZGVsUHJlZmFiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yqg6L29dWkg6LWE5rqQ5YyFXHJcbiAgICAgICAgbGV0IHJlc291cmNlUGF0aDogYW55ID0gYCR7ZGF0YS5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2RhdGEucGF0aENvbmZpZy5yZXNvdXJjZUJ1bmRsZVBhdGh9JHtkYXRhLnBhdGhDb25maWcucmVzb3VyY2VOYW1lfWA7XHJcbiAgICAgICAgdGhpcy5fcmVzb3VyY2VCdW5kbGUgPSBhd2FpdCBsb2FkQnVuZGxlKHJlc291cmNlUGF0aCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5sb2FkUmVzb3VyY2VQYWNrYWdlKHRoaXMuX3Jlc291cmNlQnVuZGxlLCBkYXRhLnBhdGhDb25maWcucGFja2FnZU5hbWUpO1xyXG5cclxuICAgICAgICAvLyDmi5Por77kupEg5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybUNvbmZpZyh0aGlzLl9jb25maWdKc29uLnRvdGFsUGFnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRSZXNvdXJjZVBhY2thZ2UoYnVuZGxlOiBhbnksIHBhY2thZ2VOYW1lOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5sb2FkUGFja2FnZShidW5kbGUsIHBhY2thZ2VOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRSZXNvdXJjZVBhY2thZ2VcIilcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6aG16Z2i6Lez6L2sIOmFjee9rlxyXG4gICAgYXN5bmMgb25KdW1wQ29uZmlnKHRvUGFnZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHBhZ2U6IG51bWJlciA9IHRvUGFnZSAtIDE7XHJcbiAgICAgICAgbGV0IGNoYXB0ZXI6IGFueSA9IHRoaXMuX2NvbmZpZ0pzb24uY2hhcHRlcnNbcGFnZV07XHJcblxyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZHJlbigwLCAtMSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlTm9kZSkgdGhpcy5fY3VycmVudFBhZ2VOb2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgbGV0IHByZWZhYjogYW55ID0gdGhpcy5fcGFnZVByZWZhYnNbcGFnZV07XHJcbiAgICAgICAgbGV0IG5vZGU6IGFueSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgbGV0IG5vZGVKcyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgbm9kZUpzLmluaXQoeyBQYWNrYWdlOiB0aGlzLl9jb25maWdKc29uLnBhdGhDb25maWcucGFja2FnZU5hbWUsIEdDb21wb25lbnQ6IGNoYXB0ZXIudWlQYXRoIH0pO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG5cclxuICAgICAgICB0aGlzLl9jdXJyZW50UGFnZU5vZGUgPSBub2RlO1xyXG4gICAgICAgIHRoaXMucmVzZXRQYW5lbCgpO1xyXG4gICAgICAgIC8vIOW9k+WJjemhtemdoiBzdGF0ZSDlv6vnhadcclxuICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnN0YXRlU2hvb3QgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbXCJzdGF0ZVwiXSk7XHJcbiAgICAgICAgdGhpcy5yZWNvdmVyU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDouqvku73or4bliKtcclxuICAgIGlkZW50aWZpY2F0aW9uKCkge1xyXG4gICAgICAgIGxldCBwYXJzZVVSTCA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzLnBhcnNlVVJMO1xyXG4gICAgICAgIGxldCB1cmxPYmogPSBwYXJzZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdXJsT2JqKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGFba2V5XSA9IHVybE9ialtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS4tOaXtlxyXG4gICAgICAgIC8vIOWuieWNk2lwYWQg6YOo5YiG6LSm5oi3IOaXoOazleiOt+WPlnVzZXJpZCDnlKhuYW1l5pu/5LujXHJcbiAgICAgICAgaWYgKCF1cmxPYmpbXCJ1c2VyaWRcIl0pIHtcclxuICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YVtcInVzZXJpZFwiXSA9IHVybE9ialtcIm5hbWVcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS+nei1luW5s+WPsCDphY3nva7orr7nva5cclxuICAgIHBsYXRmb3JtQ29uZmlnKHRvdGFsUGFnZXM6IG51bWJlcikge1xyXG4gICAgICAgIC8vIOerr+Wvueerr+mAmuS/oSDnm5HlkKxcclxuICAgICAgICBtb25pdG9yTWVzc2FnZShnZXRNZXNzYWdlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIOiuvue9ruaAu+mhtemdolxyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWV0aG9kOiAnb25QYWdlbnVtJywgdG90YWxQYWdlczogdG90YWxQYWdlcyB9KSxcclxuICAgICAgICAgICAgJyonXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyDorr7nva7lsY/luZXliIbovqjnjodcclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdvbkxvYWRDb21wbGV0ZScsXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2V3YXJlUmF0aW86IDE2IC8gOSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICcqJ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6YeN572u6Z2i5p2/XHJcbiAgICByZXNldFBhbmVsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYW5lbCkge1xyXG4gICAgICAgICAgICBsZXQgcGFuZWxKczogYW55ID0gdGhpcy5fcGFuZWwuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIC8vIOabtOaWsOmdouadvyB1aSDkvYbkuI3kvKDkv6Hku6RcclxuICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt0aGlzLl9wYW5lbC5uYW1lXSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHBhbmVsSnMucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6ICB5biI5oGi5aSN6YCA5Ye65pe254q25oCBXHJcbiAgICByZWNvdmVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuZmlyc3RMb2FkKSB7XHJcbiAgICAgICAgICAgIGxldCBkYjogYW55ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDT1VSU0VfU0lHTkFMSU5HX0RCJyk7XHJcbiAgICAgICAgICAgIGlmICghZGIpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IHNpZ25hbGluZ0RCID0gSlNPTi5wYXJzZShkYik7XHJcbiAgICAgICAgICAgIC8vIOiAgeW4iCDmlbDmja7nvJPlrZhcclxuICAgICAgICAgICAgaWYgKHNpZ25hbGluZ0RCICYmIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEucm9sZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyU3RhbXAgPSBwYXJzZUludCh0aGlzLmdldFRpbWVzdGFtcCgpKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVTdGFtcCA9IHBhcnNlSW50KHNpZ25hbGluZ0RCLnRpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJTdGFtcCAtIHByZVN0YW1wKSAvIDYwIDwgMzUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnRpbWVzdGFtcCA9IHNpZ25hbGluZ0RCLnRpbWVzdGFtcDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldlN0YXRlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W1wic3RhdGVcIl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBzaWduYWxpbmdEQi5zdGF0ZVt2XSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W3ZdID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KHNpZ25hbGluZ0RCLnN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuZmlyc3RMb2FkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluW9k+WJjeaXtumXtOaIsyDliY3ljYHkvY0g56eSXHJcbiAgICBnZXRUaW1lc3RhbXAoKSB7XHJcbiAgICAgICAgcmV0dXJuICgrbmV3IERhdGUoKSkudG9TdHJpbmcoKS5zdWJzdHIoMCwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWQjOatpSDlgJLorqHml7ZcclxuICAgIGNvdW50RG93bih1c2VyOiBhbnkpIHtcclxuICAgICAgICBsZXQgY291bnQgPSA2O1xyXG4gICAgICAgIC8vIOS7peenkuS4uuWNleS9jeeahOaXtumXtOmXtOmalFxyXG4gICAgICAgIGxldCBpbnRlcnZhbCA9IDE7XHJcbiAgICAgICAgLy8g6YeN5aSN5qyh5pWwXHJcbiAgICAgICAgbGV0IHJlcGVhdCA9IDU7XHJcbiAgICAgICAgLy8g5byA5aeL5bu25pe2XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gMDtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgY291bnQtLTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEluZm8odXNlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBpbnRlcnZhbCwgcmVwZWF0LCBkZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZEluZm8odXNlcjogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W1wic3RhdGVcIl0pO1xyXG4gICAgICAgIHNlbmRNZXNzYWdlKHN0YXRlLCB1c2VyKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/static/static-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f41ddVtkPxCUaECni2GZeWU', 'static-model01-v1');
// prefabLibrary/models/static/static-model01-v1.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 14:40:50
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var static_model01_v1 = /** @class */ (function (_super) {
    __extends(static_model01_v1, _super);
    function static_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(static_model01_v1.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (v) {
            this._state = v;
            this.updateUi(this._state);
            this.mergeState();
        },
        enumerable: false,
        configurable: true
    });
    static_model01_v1.prototype.onLoad = function () {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        fgui.GRoot.inst.addChild(this._view);
    };
    static_model01_v1.prototype.init = function (data) {
        var Package = data.Package, GComponent = data.GComponent;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
    };
    // 获取状态
    static_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    static_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    static_model01_v1.prototype.updateUi = function (state) { };
    // 注册状态，及获取状态的方法
    static_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    static_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    static_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    static_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    static_model01_v1.prototype.onDisable = function () {
        this.relieveState();
    };
    static_model01_v1 = __decorate([
        ccclass
    ], static_model01_v1);
    return static_model01_v1;
}(cc.Component));
exports.default = static_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxzdGF0aWNcXHN0YXRpYy1tb2RlbDAxLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQTZEQztRQTNEVyxZQUFNLEdBQUcsRUFBRSxDQUFBOztJQTJEdkIsQ0FBQztJQXpERyxzQkFBSSxvQ0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFRRCxrQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZ0NBQUksR0FBSixVQUFLLElBQVM7UUFDSixJQUFBLE9BQU8sR0FBaUIsSUFBSSxRQUFyQixFQUFFLFVBQVUsR0FBSyxJQUFJLFdBQVQsQ0FBVTtRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEUsQ0FBQztJQUVELE9BQU87SUFDUCxvQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDUix1Q0FBVyxHQUFYLFVBQVksUUFBYTtRQUNyQixJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQUUsT0FBTztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUTtJQUNSLG9DQUFRLEdBQVIsVUFBUyxLQUFVLElBQUksQ0FBQztJQUd4QixnQkFBZ0I7SUFDaEIseUNBQWEsR0FBYjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsd0NBQVksR0FBWjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2Isc0NBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUE1RGdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBNkRyQztJQUFELHdCQUFDO0NBN0RELEFBNkRDLENBN0Q4QyxFQUFFLENBQUMsU0FBUyxHQTZEMUQ7a0JBN0RvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTEyIDE0OjQwOjUwXHJcbiAqL1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXRpY19tb2RlbDAxX3YxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3N0YXRlID0ge31cclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCB7IFBhY2thZ2UsIEdDb21wb25lbnQgfSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShzdGF0ZTogYW55KSB7IH1cclxuXHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/radioSwitch/radioSwitch-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2903Q08CdDsbxFFPnHTXWq', 'radioSwitch-model01-v1');
// prefabLibrary/models/radioSwitch/radioSwitch-model01-v1.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 14:41:05
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var radioSwitch_model01_v1 = /** @class */ (function (_super) {
    __extends(radioSwitch_model01_v1, _super);
    function radioSwitch_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(radioSwitch_model01_v1.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (v) {
            this._state = v;
            this.updateUi(this._state);
            this.mergeState();
        },
        enumerable: false,
        configurable: true
    });
    radioSwitch_model01_v1.prototype.onLoad = function () {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        fgui.GRoot.inst.addChild(this._view);
        // radioSwitch 题型
        // 1.切换控制器
        this._radioSwitch1 = this._view.getController("radioSwitch1");
        this._radioSwitch1.on(fgui.Event.STATUS_CHANGED, this.onSwitchChanged, this);
        // 初始化state
        this._state = {
            selectedIndex: this._radioSwitch1.selectedIndex
        };
    };
    radioSwitch_model01_v1.prototype.init = function (data) {
        var Package = data.Package, GComponent = data.GComponent;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
    };
    // 切换
    radioSwitch_model01_v1.prototype.onSwitchChanged = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.selectedIndex = evt._selectedIndex;
        this.updateState(state);
    };
    // 获取状态
    radioSwitch_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    radioSwitch_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    radioSwitch_model01_v1.prototype.updateUi = function (state) {
        // 切换
        if (state.selectedIndex !== this._radioSwitch1.selectedIndex) {
            this._radioSwitch1.selectedIndex = state.selectedIndex;
        }
    };
    // 注册状态，及获取状态的方法
    radioSwitch_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    radioSwitch_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    radioSwitch_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    radioSwitch_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    radioSwitch_model01_v1.prototype.onDisable = function () {
        this.relieveState();
    };
    radioSwitch_model01_v1 = __decorate([
        ccclass
    ], radioSwitch_model01_v1);
    return radioSwitch_model01_v1;
}(cc.Component));
exports.default = radioSwitch_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxyYWRpb1N3aXRjaFxccmFkaW9Td2l0Y2gtbW9kZWwwMS12MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUFxRkM7UUFqRlcsWUFBTSxHQUFHLEVBQUUsQ0FBQTs7SUFpRnZCLENBQUM7SUEvRUcsc0JBQUkseUNBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFHN0UsV0FBVztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixhQUFhLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhO1NBQ2pELENBQUE7SUFDTCxDQUFDO0lBRUQscUNBQUksR0FBSixVQUFLLElBQVM7UUFDSixJQUFBLE9BQU8sR0FBaUIsSUFBSSxRQUFyQixFQUFFLFVBQVUsR0FBSyxJQUFJLFdBQVQsQ0FBVTtRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEUsQ0FBQztJQUVELEtBQUs7SUFDTCxnREFBZSxHQUFmLFVBQWdCLEdBQU87UUFDbkIsSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPO0lBQ1AseUNBQVEsR0FBUixVQUFTLElBQVM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRO0lBQ1IsNENBQVcsR0FBWCxVQUFZLFFBQWE7UUFDckIsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUFFLE9BQU87UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVE7SUFDUix5Q0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNmLEtBQUs7UUFDTCxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMxRDtJQUNMLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsOENBQWEsR0FBYjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsNkNBQVksR0FBWjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2IsMkNBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFwRmdCLHNCQUFzQjtRQUQxQyxPQUFPO09BQ2Esc0JBQXNCLENBcUYxQztJQUFELDZCQUFDO0NBckZELEFBcUZDLENBckZtRCxFQUFFLENBQUMsU0FBUyxHQXFGL0Q7a0JBckZvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTEyIDE0OjQxOjA1XHJcbiAqL1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJhZGlvU3dpdGNoX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfcmFkaW9Td2l0Y2gxOiBmZ3VpLkNvbnRyb2xsZXI7ICAvLyDmjqfliLblmagxXHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fVxyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICAvLyByYWRpb1N3aXRjaCDpopjlnotcclxuICAgICAgICAvLyAxLuWIh+aNouaOp+WItuWZqFxyXG4gICAgICAgIHRoaXMuX3JhZGlvU3dpdGNoMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcInJhZGlvU3dpdGNoMVwiKTtcclxuICAgICAgICB0aGlzLl9yYWRpb1N3aXRjaDEub24oZmd1aS5FdmVudC5TVEFUVVNfQ0hBTkdFRCwgdGhpcy5vblN3aXRjaENoYW5nZWQsIHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDp0aGlzLl9yYWRpb1N3aXRjaDEuc2VsZWN0ZWRJbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCB7IFBhY2thZ2UsIEdDb21wb25lbnQgfSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliIfmjaJcclxuICAgIG9uU3dpdGNoQ2hhbmdlZChldnQ6YW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5zZWxlY3RlZEluZGV4ID0gZXZ0Ll9zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkoc3RhdGU6IGFueSkge1xyXG4gICAgICAgIC8vIOWIh+aNolxyXG4gICAgICAgIGlmIChzdGF0ZS5zZWxlY3RlZEluZGV4ICE9PSB0aGlzLl9yYWRpb1N3aXRjaDEuc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yYWRpb1N3aXRjaDEuc2VsZWN0ZWRJbmRleCA9IHN0YXRlLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cloud/cloud.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9929JSAYhKR7C34dP6eiBH', 'cloud');
// cloud/cloud.js

"use strict";

(function () {
  cc.cloud = {
    initialized: false,
    initialize: function initialize(config) {
      if (typeof config === 'undefined' || config === null) config = cc_cloud_commonConfig;

      if (config.platform === 'tencent') {
        if (this.initialized) return this.tencentApp;
        cloudbase && cloudbase.useAdapters(window.adapter);
        this.tencentApp = cloudbase ? cloudbase.init(config.tencent) : null;
        this.initialized = true;
        return this.tencentApp;
      }

      return null;
    }
  };
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcY2xvdWRcXGNsb3VkLmpzIl0sIm5hbWVzIjpbImNjIiwiY2xvdWQiLCJpbml0aWFsaXplZCIsImluaXRpYWxpemUiLCJjb25maWciLCJjY19jbG91ZF9jb21tb25Db25maWciLCJwbGF0Zm9ybSIsInRlbmNlbnRBcHAiLCJjbG91ZGJhc2UiLCJ1c2VBZGFwdGVycyIsIndpbmRvdyIsImFkYXB0ZXIiLCJpbml0IiwidGVuY2VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFlBQVk7QUFDWEEsRUFBQUEsRUFBRSxDQUFDQyxLQUFILEdBQVc7QUFDVEMsSUFBQUEsV0FBVyxFQUFFLEtBREo7QUFFVEMsSUFBQUEsVUFGUyxzQkFFRUMsTUFGRixFQUVVO0FBQ2pCLFVBQUksT0FBT0EsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsTUFBTSxLQUFLLElBQWhELEVBQXNEQSxNQUFNLEdBQUdDLHFCQUFUOztBQUN0RCxVQUFJRCxNQUFNLENBQUNFLFFBQVAsS0FBb0IsU0FBeEIsRUFBbUM7QUFDakMsWUFBSSxLQUFLSixXQUFULEVBQXNCLE9BQU8sS0FBS0ssVUFBWjtBQUN0QkMsUUFBQUEsU0FBUyxJQUFJQSxTQUFTLENBQUNDLFdBQVYsQ0FBc0JDLE1BQU0sQ0FBQ0MsT0FBN0IsQ0FBYjtBQUNBLGFBQUtKLFVBQUwsR0FBa0JDLFNBQVMsR0FBR0EsU0FBUyxDQUFDSSxJQUFWLENBQWVSLE1BQU0sQ0FBQ1MsT0FBdEIsQ0FBSCxHQUFvQyxJQUEvRDtBQUNBLGFBQUtYLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxlQUFPLEtBQUtLLFVBQVo7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDtBQVpRLEdBQVg7QUFjRCxDQWZEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gIGNjLmNsb3VkID0ge1xyXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxyXG4gICAgaW5pdGlhbGl6ZShjb25maWcpIHtcclxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICd1bmRlZmluZWQnIHx8IGNvbmZpZyA9PT0gbnVsbCkgY29uZmlnID0gY2NfY2xvdWRfY29tbW9uQ29uZmlnO1xyXG4gICAgICBpZiAoY29uZmlnLnBsYXRmb3JtID09PSAndGVuY2VudCcpIHtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkgcmV0dXJuIHRoaXMudGVuY2VudEFwcDtcclxuICAgICAgICBjbG91ZGJhc2UgJiYgY2xvdWRiYXNlLnVzZUFkYXB0ZXJzKHdpbmRvdy5hZGFwdGVyKTtcclxuICAgICAgICB0aGlzLnRlbmNlbnRBcHAgPSBjbG91ZGJhc2UgPyBjbG91ZGJhc2UuaW5pdChjb25maWcudGVuY2VudCkgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbmNlbnRBcHA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pKClcclxuIl19
//------QC-SOURCE-SPLIT------
