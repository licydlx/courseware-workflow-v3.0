
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
 * @LastEditTime: 2021-04-27 11:32:03
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZW50cmFuY2VzXFxqYXZhc2NyaXB0c1xcdDMtY291cnNld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUN6QyxJQUFBLEtBQW1DLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQTVELFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsSUFBSSxVQUFnQyxDQUFDO0FBQzdELElBQUEsUUFBUSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLFNBQS9CLENBQWdDO0FBQzFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBK0NDO1FBMUNHLFVBQUksR0FBRyxLQUFLLENBQUM7UUFNYixnQkFBVSxHQUFpQixJQUFJLENBQUM7O0lBb0NwQyxDQUFDO0lBaENTLDhCQUFNLEdBQVo7Ozs7Ozs2QkFFUSxJQUFJLENBQUMsSUFBSSxFQUFULHdCQUFTO3dCQUNULE9BQU87d0JBQ1AsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOzs7d0JBRzVCLFVBQVUsR0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBbkMsQ0FBb0M7d0JBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2Isc0JBQU87eUJBQ1Y7d0JBQ0csR0FBRyxHQUFRLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ3ZELHFCQUFNLElBQUksQ0FBQyxLQUFLLEVBQUssUUFBUSxDQUFDLFNBQVMsbUNBQTZCLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQVEsR0FBSyxDQUFDLEVBQUE7O3dCQUF4SSxJQUFJLEdBQVEsU0FBNEg7d0JBQzVJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7d0JBRzlCLGFBQWEsR0FBUSxLQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFnQixDQUFDO3dCQUN2SCxxQkFBTSxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUE7O3dCQUF0RCxlQUFlLEdBQVEsU0FBK0I7d0JBQy9CLHFCQUFNLFVBQVUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBOUUsZUFBZSxHQUFRLFNBQXVEO3dCQUM5RSxhQUFhLEdBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDekQsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDOUQscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUF6QyxTQUF5QyxDQUFDO3dCQUUxQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7NEJBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3RDOzs7OztLQUNKO0lBRUQsa0NBQVUsR0FBVixVQUFXLENBQU0sRUFBRSxHQUFRO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUF6Q0Q7UUFIQyxRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOytDQUNXO0lBTWI7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7WUFDbEIsV0FBVyxFQUFFLE9BQU87U0FDdkIsQ0FBQztxREFDOEI7SUFYZixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBK0NqQztJQUFELG9CQUFDO0NBL0NELEFBK0NDLENBL0MwQyxFQUFFLENBQUMsU0FBUyxHQStDdEQ7a0JBL0NvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wMy0yNiAxODowNToxMlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNC0yNyAxMTozMjowM1xyXG4gKi9cclxuY29uc3QgZ2FtZURhdGEgPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5nYW1lRGF0YTtcclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBhamF4IH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcGFyc2VVUkwgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdDNfY291cnNld2FyZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+acrOWcsOa1i+ivlSdcclxuICAgIH0pXHJcbiAgICB0ZXN0ID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Kc29uQXNzZXQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfphY3nva4g5paH5Lu2J1xyXG4gICAgfSlcclxuICAgIGNvbmZpZ0pzb246IGNjLkpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlckpzOiBhbnk7XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBjb25maWdKc29uOiBhbnk7XHJcbiAgICAgICAgaWYgKHRoaXMudGVzdCkge1xyXG4gICAgICAgICAgICAvLyDmnKzlnLDmtYvor5VcclxuICAgICAgICAgICAgY29uZmlnSnNvbiA9IHRoaXMuY29uZmlnSnNvbi5qc29uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOiOt+WPlumFjee9ruaWh+S7tlxyXG4gICAgICAgICAgICBsZXQgeyBjb3Vyc2VOYW1lIH0gPSBwYXJzZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIGlmICghY291cnNlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlbnY6IGFueSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCd0ZXN0JykgPyAndGVzdCcgOiAncHJvZCc7XHJcbiAgICAgICAgICAgIGxldCBqc29uOiBhbnkgPSBhd2FpdCBhamF4KFwiR0VUXCIsIGAke2dhbWVEYXRhLmFwaU9yaWdpbn0vZ2V0Q29uZmlnSnNvbj9jb3Vyc2VOYW1lPSR7Y291cnNlTmFtZSA/IGNvdXJzZU5hbWUudG9Mb3dlckNhc2UoKSA6ICcnfSZlbnY9JHtlbnZ9YCk7XHJcbiAgICAgICAgICAgIGNvbmZpZ0pzb24gPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnlJ/miJDmjqfliLblmahcclxuICAgICAgICBsZXQgY29udHJsbGVyUGF0aDogYW55ID0gYCR7Y29uZmlnSnNvbi5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2NvbmZpZ0pzb24ucGF0aENvbmZpZy5jb250cm9sbGVyQnVuZGxlUGF0aH0ke2NvbmZpZ0pzb24ucGF0aENvbmZpZy5jb250cm9sbGVyTmFtZX1gO1xyXG4gICAgICAgIGxldCBjb250cmxsZXJCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29udHJsbGVyUGF0aCk7XHJcbiAgICAgICAgbGV0IGNvbnRybGxlclByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb250cmxsZXJCdW5kbGUsIGNvbnRybGxlckJ1bmRsZS5uYW1lKTtcclxuICAgICAgICBsZXQgY29udHJsbGVyTm9kZTogYW55ID0gY2MuaW5zdGFudGlhdGUoY29udHJsbGVyUHJlZmFiKTtcclxuICAgICAgICBjb250cmxsZXJOb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5fY29udHJvbGxlckpzID0gY29udHJsbGVyTm9kZS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9jb250cm9sbGVySnMuaW5pdChjb25maWdKc29uKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250cm9sbGVySnMub25KdW1wQ29uZmlnKDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaG9vc2VQYWdlKGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9jb250cm9sbGVySnMub25KdW1wQ29uZmlnKGNlZCk7XHJcbiAgICB9XHJcbn1cclxuIl19