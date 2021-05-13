
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrances/javascripts/t3-afterSchoolreview.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1894gWGqhNuZ5/9yRkAJiY', 't3-afterSchoolreview');
// entrances/javascripts/t3-afterSchoolreview.ts

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
 * @LastEditTime: 2021-05-12 15:52:40
 */
var gameData = window['GlobalData'].gameData;
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, ajax = _a.ajax;
var parseURL = window['GlobalData'].utils.parseURL;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var t3_afterSchoolreview = /** @class */ (function (_super) {
    __extends(t3_afterSchoolreview, _super);
    function t3_afterSchoolreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.test = false;
        _this.configJson = null;
        return _this;
    }
    t3_afterSchoolreview.prototype.onLoad = function () {
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
                        contrllerNode.x = this.node.x;
                        contrllerNode.y = this.node.y;
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
    t3_afterSchoolreview.prototype.choosePage = function (e, ced) {
        this._controllerJs.onJumpConfig(ced);
    };
    __decorate([
        property({
            displayName: '本地测试'
        })
    ], t3_afterSchoolreview.prototype, "test", void 0);
    __decorate([
        property({
            type: cc.JsonAsset,
            displayName: '配置 文件'
        })
    ], t3_afterSchoolreview.prototype, "configJson", void 0);
    t3_afterSchoolreview = __decorate([
        ccclass
    ], t3_afterSchoolreview);
    return t3_afterSchoolreview;
}(cc.Component));
exports.default = t3_afterSchoolreview;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZW50cmFuY2VzXFxqYXZhc2NyaXB0c1xcdDMtYWZ0ZXJTY2hvb2xyZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDekMsSUFBQSxLQUFtQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUE1RCxVQUFVLGdCQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLElBQUksVUFBZ0MsQ0FBQztBQUM3RCxJQUFBLFFBQVEsR0FBSyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxTQUEvQixDQUFnQztBQUMxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQWtEQztRQTdDRyxVQUFJLEdBQUcsS0FBSyxDQUFDO1FBTWIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDOztJQXVDcEMsQ0FBQztJQW5DUyxxQ0FBTSxHQUFaOzs7Ozs7NkJBRVEsSUFBSSxDQUFDLElBQUksRUFBVCx3QkFBUzt3QkFDVCxPQUFPO3dCQUNQLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzs7O3dCQUc1QixVQUFVLEdBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQW5DLENBQW9DO3dCQUNwRCxJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUNiLHNCQUFPO3lCQUNWO3dCQUNHLEdBQUcsR0FBUSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUN2RCxxQkFBTSxJQUFJLENBQUMsS0FBSyxFQUFLLFFBQVEsQ0FBQyxTQUFTLG1DQUE2QixVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFRLEdBQUssQ0FBQyxFQUFBOzt3QkFBeEksSUFBSSxHQUFRLFNBQTRIO3dCQUM1SSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O3dCQUc5QixhQUFhLEdBQVEsS0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsY0FBZ0IsQ0FBQzt3QkFDdkgscUJBQU0sVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFBOzt3QkFBdEQsZUFBZSxHQUFRLFNBQStCO3dCQUMvQixxQkFBTSxVQUFVLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTlFLGVBQWUsR0FBUSxTQUF1RDt3QkFDOUUsYUFBYSxHQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ3pELGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQ3hDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzlCLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBRTlCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzlELHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBekMsU0FBeUMsQ0FBQzt3QkFFMUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN0Qzs7Ozs7S0FDSjtJQUVELHlDQUFVLEdBQVYsVUFBVyxDQUFNLEVBQUUsR0FBUTtRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBNUNEO1FBSEMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQztzREFDVztJQU1iO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTO1lBQ2xCLFdBQVcsRUFBRSxPQUFPO1NBQ3ZCLENBQUM7NERBQzhCO0lBWGYsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0FrRHhDO0lBQUQsMkJBQUM7Q0FsREQsQUFrREMsQ0FsRGlELEVBQUUsQ0FBQyxTQUFTLEdBa0Q3RDtrQkFsRG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTIgMTU6NTI6NDBcclxuICovXHJcbmNvbnN0IGdhbWVEYXRhID0gd2luZG93WydHbG9iYWxEYXRhJ10uZ2FtZURhdGE7XHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgYWpheCB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5jb25zdCB7IHBhcnNlVVJMIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHQzX2FmdGVyU2Nob29scmV2aWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAn5pys5Zyw5rWL6K+VJ1xyXG4gICAgfSlcclxuICAgIHRlc3QgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkpzb25Bc3NldCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mFjee9riDmlofku7YnXHJcbiAgICB9KVxyXG4gICAgY29uZmlnSnNvbjogY2MuSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9jb250cm9sbGVySnM6IGFueTtcclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGNvbmZpZ0pzb246IGFueTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0KSB7XHJcbiAgICAgICAgICAgIC8vIOacrOWcsOa1i+ivlVxyXG4gICAgICAgICAgICBjb25maWdKc29uID0gdGhpcy5jb25maWdKc29uLmpzb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g6I635Y+W6YWN572u5paH5Lu2XHJcbiAgICAgICAgICAgIGxldCB7IGNvdXJzZU5hbWUgfSA9IHBhcnNlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgaWYgKCFjb3Vyc2VOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVudjogYW55ID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ3Rlc3QnKSA/ICd0ZXN0JyA6ICdwcm9kJztcclxuICAgICAgICAgICAgbGV0IGpzb246IGFueSA9IGF3YWl0IGFqYXgoXCJHRVRcIiwgYCR7Z2FtZURhdGEuYXBpT3JpZ2lufS9nZXRDb25maWdKc29uP2NvdXJzZU5hbWU9JHtjb3Vyc2VOYW1lID8gY291cnNlTmFtZS50b0xvd2VyQ2FzZSgpIDogJyd9JmVudj0ke2Vudn1gKTtcclxuICAgICAgICAgICAgY29uZmlnSnNvbiA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOeUn+aIkOaOp+WItuWZqFxyXG4gICAgICAgIGxldCBjb250cmxsZXJQYXRoOiBhbnkgPSBgJHtjb25maWdKc29uLnBhdGhDb25maWcucmVtb3RlVXJsfSR7Y29uZmlnSnNvbi5wYXRoQ29uZmlnLmNvbnRyb2xsZXJCdW5kbGVQYXRofSR7Y29uZmlnSnNvbi5wYXRoQ29uZmlnLmNvbnRyb2xsZXJOYW1lfWA7XHJcbiAgICAgICAgbGV0IGNvbnRybGxlckJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb250cmxsZXJQYXRoKTtcclxuICAgICAgICBsZXQgY29udHJsbGVyUHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbnRybGxlckJ1bmRsZSwgY29udHJsbGVyQnVuZGxlLm5hbWUpO1xyXG4gICAgICAgIGxldCBjb250cmxsZXJOb2RlOiBhbnkgPSBjYy5pbnN0YW50aWF0ZShjb250cmxsZXJQcmVmYWIpO1xyXG4gICAgICAgIGNvbnRybGxlck5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICBjb250cmxsZXJOb2RlLnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICBjb250cmxsZXJOb2RlLnkgPSB0aGlzLm5vZGUueTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb250cm9sbGVySnMgPSBjb250cmxsZXJOb2RlLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2NvbnRyb2xsZXJKcy5pbml0KGNvbmZpZ0pzb24pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50ZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xsZXJKcy5vbkp1bXBDb25maWcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNob29zZVBhZ2UoZTogYW55LCBjZWQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJKcy5vbkp1bXBDb25maWcoY2VkKTtcclxuICAgIH1cclxufVxyXG4iXX0=