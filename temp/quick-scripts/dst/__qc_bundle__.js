
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
require('./assets/entrances/javascripts/afterSchoolreview');
require('./assets/entrances/javascripts/courseware');
require('./assets/prefabLibrary/components/feedback/javascripts/feedback-model01-v1');
require('./assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02-studentList');
require('./assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02');
require('./assets/prefabLibrary/components/pageController-model01-v1/javascripts/pageController-model01-v1');
require('./assets/prefabLibrary/controllers/controller-model01/scripts/controller-model01');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-getMessage');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-sendMessage');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02');
require('./assets/prefabLibrary/models/choose/choose-model01-v1');
require('./assets/prefabLibrary/models/choose/choose-model02-v1');
require('./assets/prefabLibrary/models/clickAnswer/clickAnswer-model01-v1');
require('./assets/prefabLibrary/models/dragAnswer/DragAnswerModel03Base');
require('./assets/prefabLibrary/models/dragAnswer/IDragAnswerModel03Base');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v1');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v2');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model02-v1');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model03-v1');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model03-v2');
require('./assets/prefabLibrary/models/inputChoose/inputChoose-model01-v1');
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrances/javascripts/afterSchoolreview.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1894gWGqhNuZ5/9yRkAJiY', 'afterSchoolreview');
// entrances/javascripts/afterSchoolreview.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZW50cmFuY2VzXFxqYXZhc2NyaXB0c1xcYWZ0ZXJTY2hvb2xyZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDekMsSUFBQSxLQUFtQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUE1RCxVQUFVLGdCQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLElBQUksVUFBZ0MsQ0FBQztBQUM3RCxJQUFBLFFBQVEsR0FBSyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxTQUEvQixDQUFnQztBQUMxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQWtEQztRQTdDRyxVQUFJLEdBQUcsS0FBSyxDQUFDO1FBTWIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDOztJQXVDcEMsQ0FBQztJQW5DUyxxQ0FBTSxHQUFaOzs7Ozs7NkJBRVEsSUFBSSxDQUFDLElBQUksRUFBVCx3QkFBUzt3QkFDVCxPQUFPO3dCQUNQLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzs7O3dCQUc1QixVQUFVLEdBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQW5DLENBQW9DO3dCQUNwRCxJQUFJLENBQUMsVUFBVSxFQUFFOzRCQUNiLHNCQUFPO3lCQUNWO3dCQUNHLEdBQUcsR0FBUSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUN2RCxxQkFBTSxJQUFJLENBQUMsS0FBSyxFQUFLLFFBQVEsQ0FBQyxTQUFTLG1DQUE2QixVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFRLEdBQUssQ0FBQyxFQUFBOzt3QkFBeEksSUFBSSxHQUFRLFNBQTRIO3dCQUM1SSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O3dCQUc5QixhQUFhLEdBQVEsS0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsY0FBZ0IsQ0FBQzt3QkFDdkgscUJBQU0sVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFBOzt3QkFBdEQsZUFBZSxHQUFRLFNBQStCO3dCQUMvQixxQkFBTSxVQUFVLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQTs7d0JBQTlFLGVBQWUsR0FBUSxTQUF1RDt3QkFDOUUsYUFBYSxHQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQ3pELGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQ3hDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQzlCLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBRTlCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzlELHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBekMsU0FBeUMsQ0FBQzt3QkFFMUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN0Qzs7Ozs7S0FDSjtJQUVELHlDQUFVLEdBQVYsVUFBVyxDQUFNLEVBQUUsR0FBUTtRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBNUNEO1FBSEMsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQztzREFDVztJQU1iO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTO1lBQ2xCLFdBQVcsRUFBRSxPQUFPO1NBQ3ZCLENBQUM7NERBQzhCO0lBWGYsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0FrRHhDO0lBQUQsMkJBQUM7Q0FsREQsQUFrREMsQ0FsRGlELEVBQUUsQ0FBQyxTQUFTLEdBa0Q3RDtrQkFsRG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTIgMTU6NTI6NDBcclxuICovXHJcbmNvbnN0IGdhbWVEYXRhID0gd2luZG93WydHbG9iYWxEYXRhJ10uZ2FtZURhdGE7XHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgYWpheCB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5jb25zdCB7IHBhcnNlVVJMIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHQzX2FmdGVyU2Nob29scmV2aWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAn5pys5Zyw5rWL6K+VJ1xyXG4gICAgfSlcclxuICAgIHRlc3QgPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkpzb25Bc3NldCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mFjee9riDmlofku7YnXHJcbiAgICB9KVxyXG4gICAgY29uZmlnSnNvbjogY2MuSnNvbkFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9jb250cm9sbGVySnM6IGFueTtcclxuXHJcbiAgICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGNvbmZpZ0pzb246IGFueTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0KSB7XHJcbiAgICAgICAgICAgIC8vIOacrOWcsOa1i+ivlVxyXG4gICAgICAgICAgICBjb25maWdKc29uID0gdGhpcy5jb25maWdKc29uLmpzb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g6I635Y+W6YWN572u5paH5Lu2XHJcbiAgICAgICAgICAgIGxldCB7IGNvdXJzZU5hbWUgfSA9IHBhcnNlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgaWYgKCFjb3Vyc2VOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVudjogYW55ID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ3Rlc3QnKSA/ICd0ZXN0JyA6ICdwcm9kJztcclxuICAgICAgICAgICAgbGV0IGpzb246IGFueSA9IGF3YWl0IGFqYXgoXCJHRVRcIiwgYCR7Z2FtZURhdGEuYXBpT3JpZ2lufS9nZXRDb25maWdKc29uP2NvdXJzZU5hbWU9JHtjb3Vyc2VOYW1lID8gY291cnNlTmFtZS50b0xvd2VyQ2FzZSgpIDogJyd9JmVudj0ke2Vudn1gKTtcclxuICAgICAgICAgICAgY29uZmlnSnNvbiA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOeUn+aIkOaOp+WItuWZqFxyXG4gICAgICAgIGxldCBjb250cmxsZXJQYXRoOiBhbnkgPSBgJHtjb25maWdKc29uLnBhdGhDb25maWcucmVtb3RlVXJsfSR7Y29uZmlnSnNvbi5wYXRoQ29uZmlnLmNvbnRyb2xsZXJCdW5kbGVQYXRofSR7Y29uZmlnSnNvbi5wYXRoQ29uZmlnLmNvbnRyb2xsZXJOYW1lfWA7XHJcbiAgICAgICAgbGV0IGNvbnRybGxlckJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb250cmxsZXJQYXRoKTtcclxuICAgICAgICBsZXQgY29udHJsbGVyUHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbnRybGxlckJ1bmRsZSwgY29udHJsbGVyQnVuZGxlLm5hbWUpO1xyXG4gICAgICAgIGxldCBjb250cmxsZXJOb2RlOiBhbnkgPSBjYy5pbnN0YW50aWF0ZShjb250cmxsZXJQcmVmYWIpO1xyXG4gICAgICAgIGNvbnRybGxlck5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICBjb250cmxsZXJOb2RlLnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICBjb250cmxsZXJOb2RlLnkgPSB0aGlzLm5vZGUueTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb250cm9sbGVySnMgPSBjb250cmxsZXJOb2RlLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2NvbnRyb2xsZXJKcy5pbml0KGNvbmZpZ0pzb24pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50ZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xsZXJKcy5vbkp1bXBDb25maWcoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNob29zZVBhZ2UoZTogYW55LCBjZWQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJKcy5vbkp1bXBDb25maWcoY2VkKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/choose/choose-model02-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41ef5ejRahHr5aGeE9q9lTi', 'choose-model02-v1');
// prefabLibrary/models/choose/choose-model02-v1.ts

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
 * @LastEditTime: 2021-05-19 11:59:24
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var choose_model02_v1 = /** @class */ (function (_super) {
    __extends(choose_model02_v1, _super);
    function choose_model02_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 选项集合
        _this._options = [];
        _this._cache = {};
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(choose_model02_v1.prototype, "state", {
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
    choose_model02_v1.prototype.onLoad = function () {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
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
        var optionGroup = this._view.getChild("optionBox").asGroup;
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == optionGroup) {
                var btn = this._view.getChildAt(i).asButton;
                btn.on(fgui.Event.CLICK, this._clickOption, this);
                this._options.push(btn);
            }
        }
        // 初始化state
        this._state = {
            option: null,
            title: false,
            submit: false,
            checkAnswer: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    choose_model02_v1.prototype.init = function (data) {
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
    choose_model02_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    choose_model02_v1.prototype._clickOption = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var option = fgui.GObject.cast(evt.currentTarget);
        var optionIndex = this._options.findIndex(function (v) { return v == option; });
        state.option = state.option === optionIndex ? null : optionIndex;
        this.updateState(state);
    };
    choose_model02_v1.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.answer = state.option == this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    choose_model02_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    choose_model02_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    choose_model02_v1.prototype.updateUi = function (oldState, state) {
        if (!globalThis._.isEqual(oldState.option, state.option)) {
            if (state.option || state.option === 0) {
                if (oldState.option || oldState.option === 0) {
                    this.selectEffect(false, oldState.option);
                }
                this.selectEffect(true, state.option);
            }
            if (state.option === null) {
                if (oldState.option || oldState.option === 0) {
                    this.selectEffect(false, oldState.option);
                }
            }
        }
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                state.option || state.option === 0 ? this.afterSubmit() : this.onHandleGuide();
            }
        }
        if (!globalThis._.isEqual(oldState.checkAnswer, state.checkAnswer)) {
            if (state.checkAnswer) {
                this.answerFeedback(state.answer);
            }
        }
    };
    /**
     * @name: 选择效果
     * @msg:
     * @param {boolean} active
     * @param {number} option
     * @return {*}
     */
    choose_model02_v1.prototype.selectEffect = function (active, option) {
        var curOption = this._options[option];
        var border = curOption.getChild("border");
        var arrow = curOption.getChild("arrow");
        var spine = curOption.getChild("spine");
        if (active) {
            border.alpha = 1;
            arrow.alpha = 1;
            spine.animationName = spine.animationName.slice(0, -1) + 2;
        }
        else {
            border.alpha = 0;
            arrow.alpha = 0;
            spine.animationName = spine.animationName.slice(0, -1) + 1;
        }
    };
    choose_model02_v1.prototype.playTitle = function (bool) {
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
    choose_model02_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
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
            state.checkAnswer = false;
            _this.updateState(state);
        }, 2000);
    };
    // 提交后 动画
    choose_model02_v1.prototype.afterSubmit = function () {
        var state = globalThis._.cloneDeep(this._state);
        // state.answer = state.option.join("") == this._answer;
        state.answer = state.option == this._answer;
        state.submit = false;
        state.checkAnswer = true;
        this.updateState(state);
    };
    // 操作提示
    choose_model02_v1.prototype.onHandleGuide = function () {
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
    // 运行时 禁止操作
    choose_model02_v1.prototype.forbidHandle = function () {
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
    choose_model02_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 注册状态，及获取状态的方法
    choose_model02_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    choose_model02_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    choose_model02_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    choose_model02_v1.prototype.onEnable = function () {
        this.registerState();
    };
    choose_model02_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    choose_model02_v1 = __decorate([
        ccclass
    ], choose_model02_v1);
    return choose_model02_v1;
}(cc.Component));
exports.default = choose_model02_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxjaG9vc2VcXGNob29zZS1tb2RlbDAyLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQTJDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQXBFLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsWUFBWSxrQkFBZ0MsQ0FBQztBQUN2RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXVUQztRQXZTRyxPQUFPO1FBQ0MsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRVosWUFBTSxHQUFHLEVBQUUsQ0FBQzs7SUFrU3hCLENBQUM7SUFoU0csc0JBQUksb0NBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDOzs7T0FOQTtJQVFELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRTNDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJ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Q0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXRUZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0F1VHJDO0lBQUQsd0JBQUM7Q0F2VEQsQUF1VEMsQ0F2VDhDLEVBQUUsQ0FBQyxTQUFTLEdBdVQxRDtrQkF2VG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTkgMTE6NTk6MjRcclxuICovXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaG9vc2VfbW9kZWwwMl92MSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF93b3JsZFJvb3Q6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIF92aWV3OiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9jMTogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBfYzI6IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF90aXRsZVRyaWdnZXI6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuXHJcbiAgICAvLyDov5znqIvliqjmgIHnu4Tku7ZcclxuICAgIHByaXZhdGUgZmVlZGJhY2s6IGFueTtcclxuXHJcbiAgICAvLyDpgInpobnpm4blkIhcclxuICAgIHByaXZhdGUgX29wdGlvbnMgPSBbXTtcclxuICAgIHByaXZhdGUgX2NhY2hlID0ge307XHJcbiAgICBwcml2YXRlIF9hbnN3ZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy5fdmlldy54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuX3ZpZXcud2lkdGgpIC8gMjtcclxuXHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcbiAgICAgICAgLy8g6Ieo5pmCXHJcbiAgICAgICAgLy8gYnVnIOWIneWni+iuvue9ruS4jeaSreaUvuS4jeeUn+aViFxyXG4gICAgICAgIGlmICh0aGlzLl9jMikge1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zdWJtaXQgPSB0aGlzLl92aWV3LmdldENoaWxkKFwic3VibWl0XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJtaXQpIHRoaXMuX3N1Ym1pdC5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1N1Ym1pdCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlVHJpZ2dlciA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVRyaWdnZXJcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlVHJpZ2dlcikgdGhpcy5fdGl0bGVUcmlnZ2VyLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrVGl0bGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVwiKS5hc0J1dHRvbjtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbkdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcIm9wdGlvbkJveFwiKS5hc0dyb3VwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmlldy5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gb3B0aW9uR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG46IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja09wdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2goYnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgb3B0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNoZWNrQW5zd2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgYW5zd2VyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Li05pe2IOemgeatouaTjeS9nOacn+mXtCDliIfpobVcclxuICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOS4tOaXtiBtb2RlbCBjb21wb25lbnQganNvbiDphY3nva7liqDovb1cclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcbiAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSB9ID0gbW9kZWwuY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG5cclxuICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgIGlmIChhZVt2XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1t2XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgIGlmIChhZVt2XS5wb3MpIHRoaXNbdl0ucG9zID0gYWVbdl0ucG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYW5zd2VyKSB0aGlzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFBhdGg6IGFueSA9IGAke3BhdGhDb25maWcucmVtb3RlVXJsfSR7cGF0aENvbmZpZy5jb21wb25lbnRCdW5kbGVQYXRofSR7Y29tcG9uZW50c1trZXldLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbXBvbmVudEJ1bmRsZSwgY29tcG9uZW50c1trZXldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29tcG9uZW50UHJlZmFiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrVGl0bGUoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnRpdGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja09wdGlvbihldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbjogYW55ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25JbmRleDogbnVtYmVyID0gdGhpcy5fb3B0aW9ucy5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBvcHRpb24pO1xyXG4gICAgICAgIHN0YXRlLm9wdGlvbiA9IHN0YXRlLm9wdGlvbiA9PT0gb3B0aW9uSW5kZXggPyBudWxsIDogb3B0aW9uSW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLm9wdGlvbiA9PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLm9wdGlvbiwgc3RhdGUub3B0aW9uKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLm9wdGlvbiB8fCBzdGF0ZS5vcHRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRTdGF0ZS5vcHRpb24gfHwgb2xkU3RhdGUub3B0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RFZmZlY3QoZmFsc2Usb2xkU3RhdGUub3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RWZmZWN0KHRydWUsc3RhdGUub3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlLm9wdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFN0YXRlLm9wdGlvbiB8fCBvbGRTdGF0ZS5vcHRpb24gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEVmZmVjdChmYWxzZSxvbGRTdGF0ZS5vcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVRpdGxlKHN0YXRlLnRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm9wdGlvbiB8fCBzdGF0ZS5vcHRpb24gPT09IDAgPyB0aGlzLmFmdGVyU3VibWl0KCkgOiB0aGlzLm9uSGFuZGxlR3VpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5jaGVja0Fuc3dlciwgc3RhdGUuY2hlY2tBbnN3ZXIpKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jaGVja0Fuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWU6IOmAieaLqeaViOaenFxyXG4gICAgICogQG1zZzogXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGFjdGl2ZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvblxyXG4gICAgICogQHJldHVybiB7Kn1cclxuICAgICAqL1xyXG4gICAgc2VsZWN0RWZmZWN0KGFjdGl2ZTpib29sZWFuLG9wdGlvbjpudW1iZXIpe1xyXG4gICAgICAgIGxldCBjdXJPcHRpb246Zmd1aS5HQ29tcG9uZW50ID0gdGhpcy5fb3B0aW9uc1tvcHRpb25dO1xyXG4gICAgICAgIGxldCBib3JkZXI6YW55ID0gY3VyT3B0aW9uLmdldENoaWxkKFwiYm9yZGVyXCIpO1xyXG4gICAgICAgIGxldCBhcnJvdzphbnkgPSBjdXJPcHRpb24uZ2V0Q2hpbGQoXCJhcnJvd1wiKTtcclxuICAgICAgICBsZXQgc3BpbmU6YW55ID0gY3VyT3B0aW9uLmdldENoaWxkKFwic3BpbmVcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgICAgICBib3JkZXIuYWxwaGEgPSAxO1xyXG4gICAgICAgICAgICBhcnJvdy5hbHBoYSA9IDE7XHJcbiAgICAgICAgICAgIHNwaW5lLmFuaW1hdGlvbk5hbWUgPSBzcGluZS5hbmltYXRpb25OYW1lLnNsaWNlKDAsIC0xKSArIDI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYm9yZGVyLmFscGhhID0gMDtcclxuICAgICAgICAgICAgYXJyb3cuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICBzcGluZS5hbmltYXRpb25OYW1lID0gc3BpbmUuYW5pbWF0aW9uTmFtZS5zbGljZSgwLCAtMSkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwodGhpcy5fdGl0bGVbXCJfc291bmRcIl0pO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5mZWVkYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZlZWRiYWNrKTtcclxuICAgICAgICBmZWVkYmFjay54ID0gOTYwO1xyXG4gICAgICAgIGZlZWRiYWNrLnkgPSA1NDA7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrSnM6IGFueSA9IGZlZWRiYWNrLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZlZWRiYWNrSnMuaW5pdChib29sKTtcclxuICAgICAgICBmZWVkYmFjay5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS5jaGVja0Fuc3dlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmj5DkuqTlkI4g5Yqo55S7XHJcbiAgICBhZnRlclN1Ym1pdCgpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIC8vIHN0YXRlLmFuc3dlciA9IHN0YXRlLm9wdGlvbi5qb2luKFwiXCIpID09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5vcHRpb24gPT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmNoZWNrQW5zd2VyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDov5DooYzml7Yg56aB5q2i5pON5L2cXHJcbiAgICBmb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoIWhhbmRsZU1hc2spIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSBuZXcgY2MuTm9kZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5wYXJlbnQgPSB0aGlzLl93b3JsZFJvb3Q7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sud2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueCA9IDk2MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay55ID0gNTQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model03-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f16fRyLKlMTrYGR9nh/Pf7', 'dragAnswer-model03-v1');
// prefabLibrary/models/dragAnswer/dragAnswer-model03-v1.ts

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
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 15:25:58
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var dragAnswer_model03_v1 = /** @class */ (function (_super) {
    __extends(dragAnswer_model03_v1, _super);
    function dragAnswer_model03_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colliderBox = [];
        _this._collideredBox = [];
        _this._cache = {};
        _this._scheduleTime = .3;
        _this._dragging = false;
        _this._answer = 0;
        _this._dragIconArr = [];
        _this._footNum = [];
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model03_v1.prototype, "state", {
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
    dragAnswer_model03_v1.prototype.onLoad = function () {
        var s = this;
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");
        // 臨時
        // bug 初始设置不播放不生效
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }
        s.createUI();
        s.addEvent();
        // 初始化state
        this._state = {
            drag: "end",
            getDropArr: [],
            collider: s._cache["colliderBox"].map(function (v) { return v; }),
            colliderIndex: null,
            collidered: this._cache["collideredBox"].map(function (v) { return v; }),
            dropArr: [],
            // dragIconsPosArr: dragIconsPosArr,
            title: false,
            submit: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    dragAnswer_model03_v1.prototype.createUI = function () {
        var s = this;
        this._submit = this._view.getChild("submit").asButton;
        if (this._submit)
            this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        var colliderGroup = this._view.getChild("colliderBox").asGroup;
        var collideredGroup = this._view.getChild("collideredBox").asGroup;
        s._cache["colliderBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (s._view.getChildAt(i).group == colliderGroup) {
                var btn = this._view.getChildAt(i).asButton;
                s._cache['colliderBox'].push({ x: btn.x, y: btn.y, belong: null });
                btn['collideredIndex'] = -1;
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }
        // console.log('this._colliderBox', this._colliderBox);
        s._cache["collideredBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                var btn = this._view.getChildAt(i).asImage;
                s._cache['collideredBox'].push([]);
                this._collideredBox.push(btn);
            }
        }
        // console.log('this._collideredBox', this._collideredBox);
        /* s.dropBox = fgui.UIPackage.createObject('t4-trialClass-01', 'TypeDropBox1').asCom;
        s.dropBox.x = 368;
        s.dropBox.y = 600;
        s._view.addChild(s.dropBox);

        s.dragBox = fgui.UIPackage.createObject('t4-trialClass-01', 'TypeDragBox1').asCom;
        s.dragBox.x = 610;
        s.dragBox.y = 250;
        s._view.addChild(s.dragBox); */
        // s.dropBox = s._view.getChild('dropBox').asCom;
        // s.dragBox = s._view.getChild('dragBox').asCom;
        // let dragIcon = s.pageData.model.config.dragIcon;
        /* for (let key in dragIcon) {
            let dragIconData = dragIcon[key];
            let icon = new fgui.GComponent();
            let iconImg = fgui.UIPackage.createObject('t4-trialClass-01', dragIconData.name).asImage;
            icon.addChild(iconImg);
            icon.setSize(iconImg.width, iconImg.height);
            // icon.setPivot(0.5,0.5,true);
            icon.opaque = true;
            icon.x = dragIconData.x;
            icon.y = dragIconData.y;
            icon['dragOrigin'] = this.getOriginValue(icon);
            console.log('icon = ', icon['dragOrigin']);

            // icon.touchable = true;
            icon.draggable = true;

            icon.on(fgui.Event.TOUCH_BEGIN, s._onDragStart, s);
            icon.on(fgui.Event.TOUCH_MOVE, s._onDragMove, s);
            icon.on(fgui.Event.TOUCH_END, s._onDragEnd, s);

            // icon.on(cc.Node.EventType.TOUCH_START, s._onDragStart, s);

            s.dragBox.addChild(icon);
            s._dragIconArr.push(icon);
        } */
    };
    dragAnswer_model03_v1.prototype.addEvent = function () {
        // let s = this;
        // s._submitBtn.on(fgui.Event.CLICK, s._clickSubmit, s);
        // s._readTitleBtn.on(fgui.Event.CLICK, s._clickTitle, s);
    };
    dragAnswer_model03_v1.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var s, pathConfig, model, components, Package, GComponent, _a, answer, ae, dragIcon, v, key, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        s = this;
                        s.pageData = data;
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        GComponent = model.uiPath;
                        _a = model.config, answer = _a.answer, ae = _a.ae, dragIcon = _a.dragIcon;
                        if (model.uiPath) {
                            GComponent = model.uiPath;
                            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                        }
                        /* s._readTitleBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'TitleCom').asCom;
                
                        (s._readTitleBtn.getChild('title') as fgui.GLoader).url = fgui.UIPackage.createObject('t4-trialClass-01', 'title_3').asImage.resourceURL;
                        s._readTitleBtn.x = 20;
                        s._readTitleBtn.y = 50;
                        this._view.addChild(s._readTitleBtn);
                
                
                        s._submitBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'SubmitBtn').asCom;
                        s._submitBtn.x = 1676;
                        s._submitBtn.y = 806;
                        this._view.addChild(s._submitBtn); */
                        if (model.config) {
                            // if (answer) this._answer = answer;
                            // 动效注册
                            if (ae) {
                                for (v in ae) {
                                    if (ae[v]) {
                                        this[v] = {};
                                        if (ae[v].component)
                                            this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                                        if (ae[v].pos)
                                            this[v].pos = ae[v].pos;
                                    }
                                }
                            }
                            if (answer)
                                s._answer = answer;
                            if (dragIcon) {
                                for (key in dragIcon) {
                                    s._footNum.push(dragIcon[key].footNum);
                                }
                            }
                        }
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
    dragAnswer_model03_v1.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    // private _curDragIcon: cc.Node = null;
    // private _offsetPos: cc.Vec2 = new cc.Vec2();
    dragAnswer_model03_v1.prototype._onDragStart = function (evt) {
        var s = this;
        // evt.captureTouch();
        /* s._curDragIcon = evt.currentTarget;
        console.log('_onDragStart');
        console.log(s._curDragIcon);
        console.log(s._curDragIcon.y);

        let pos = s._curDragIcon.parent.convertToNodeSpaceAR(evt.getLocation());
        s._offsetPos.x = pos.x - s._curDragIcon.x;
        s._offsetPos.y = pos.y - s._curDragIcon.y;

        s._view.on(cc.Node.EventType.TOUCH_MOVE, s._onDragMove, s);
        s._curDragIcon.once(cc.Node.EventType.TOUCH_END, s._onDragEnd, s); */
        // s._curDragIcon.draggable = true;
        var collider = fgui.GObject.cast(evt.currentTarget);
        s._view.setChildIndex(collider, s._view.numChildren - 1);
        var colliderIndex = s._colliderBox.findIndex(function (v) { return v == collider; });
        var state = globalThis._.cloneDeep(s._state);
        state.colliderIndex = colliderIndex;
        s.updateState(state);
        // state.drag = "start";
        // state.curDragIcon = s._curDragIcon;
        /* state.curDragIconsPos = {
            x: s._curDragIcon['$gobj']["dragOrigin"].x,
            y: s._curDragIcon['$gobj']["dragOrigin"].y,
        }; */
        // state.answer = state.drops === s._answer;
    };
    dragAnswer_model03_v1.prototype._onDragMove = function (evt) {
        var s = this;
        // console.log('_onDragMove');
        // if (!s._curDragIcon) return;
        s._dragging = true;
        // let pos = s._curDragIcon.parent.convertToNodeSpaceAR(evt.getLocation());
        // s._curDragIcon.x = pos.x - s._offsetPos.x;
        // s._curDragIcon.y = pos.y - s._offsetPos.y;
        // console.log(s._curDragIcon.x + ' - ' + s._curDragIcon.y);
    };
    // private dropArr = [];
    dragAnswer_model03_v1.prototype._onDragEnd = function (evt) {
        var _this = this;
        var s = this;
        if (!this._dragging)
            return;
        this._dragging = false;
        var collider = fgui.GObject.cast(evt.currentTarget);
        var colliderIndex = this._colliderBox.findIndex(function (v) { return v == collider; });
        var arr = [];
        var collidered;
        this._collideredBox.forEach(function (v, i) {
            // if (this._belongArea(collider, v, 500) == true) arr.push(v);
            if (s.isCollisionWithRect(v, collider))
                arr.push(v);
        });
        arr.forEach(function (v, i) {
            if (i == 0) {
                collidered = v;
            }
            else {
                var pd = _this._getDistance(collider, arr[i - 1]);
                var cd = _this._getDistance(collider, v);
                if (cd < pd)
                    collidered = v;
            }
        });
        // 放置区索引，定位到放入了那个放置区
        var collideredIndex = this._collideredBox.findIndex(function (v) { return v == collidered; });
        var state = globalThis._.cloneDeep(this._state);
        var sss = globalThis._.cloneDeep(state);
        // let state = JSON.parse(JSON.stringify(this._state))
        console.log('origin state = ', this._state.dropArr); // right
        console.log('clone state = ', state.dropArr); //rihgt
        console.log('sss = ', sss.dropArr); //wrong
        // dropArr = state.collidered[collideredIndex].map(v => v);
        // console.warn('state.dropArr[0] = ', state.dropArr);
        // let dropArr = JSON.parse(JSON.stringify(state.dropArr));
        var dropArr = state.dropArr;
        // console.error('s.dropArr11111111111111 = ', dropArr);
        var name = collider.name;
        // let dropArrIndex = dropArr.indexOf(data);//放置区是否已包含当前拖拽元素
        var dropArrIndex = dropArr.findIndex(function (v) { return v.name == name; }); //放置区是否已包含当前拖拽元素
        console.warn('dropArrIndex = ', dropArrIndex);
        // 1.重置位置 重置到
        // 2.放入放置区
        if (collideredIndex == -1 || dropArr.length == 6) {
            // reset
            // console.log('reset');
            if (dropArrIndex > -1) {
                dropArr.splice(dropArrIndex, 1);
            }
            state.collider[colliderIndex] = {
                x: s._cache["colliderBox"][colliderIndex].x,
                y: s._cache["colliderBox"][colliderIndex].y
            };
            if (collider.collideredIndex > -1) {
                collideredIndex = collider.collideredIndex;
            }
            else {
                collideredIndex = 0;
            }
        }
        else {
            if (dropArrIndex == -1) {
                // dropArr.push(JSON.parse(JSON.stringify(collider)));
                dropArr.push({ 'name': collider.name });
                // console.warn('pushhhhhhhhhh',dropArr);
            }
        }
        // dropArr.push({ name: collider.name });
        // console.warn('pushhhhhhhhhh',dropArr);
        var footNum = 0;
        var _loop_1 = function (i) {
            var item = dropArr[i];
            // let itemIndex = s._colliderBox.indexOf(item);//状态池中的index
            var itemIndex = s._colliderBox.findIndex(function (v) { return v.name == item.name; }); //状态池中的index
            var pos = new cc.Vec2();
            var collideredBox = s._collideredBox[collideredIndex];
            var curCollider = s._view.getChild(item.name);
            if (item.name.indexOf('left') > -1) {
                footNum += s._footNum[0];
            }
            else if (item.name.indexOf('right') > -1) {
                footNum += s._footNum[1];
            }
            pos.x = collideredBox.x + 150 + 200 * i;
            pos.y = collideredBox.y + collideredBox.height - curCollider.height;
            state.collider[itemIndex] = {
                x: pos.x,
                y: pos.y,
                belong: collideredIndex
            };
        };
        for (var i = 0; i < dropArr.length; i++) {
            _loop_1(i);
        }
        collider.collideredIndex = collideredIndex;
        state.drag = "end";
        state.submit = false;
        state.colliderIndex = colliderIndex;
        // state.collidered[collideredIndex] = dropArr.concat([]);
        console.log('给state赋值前的', dropArr);
        state.dropArr = dropArr;
        console.warn('赋值后的', state.dropArr);
        state.answer = footNum == s._answer ? true : false;
        s.updateState(state);
        // s._curDragIcon = null;
        console.log('------------------------------------------------');
    };
    dragAnswer_model03_v1.prototype._getDistance = function (self, area) {
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance;
    };
    /**
     * 矩形碰撞
     * @param rect1
     * @param rect2
     * @returns
     */
    dragAnswer_model03_v1.prototype.isCollisionWithRect = function (rect1, rect2) {
        if (rect1.x >= rect2.x && rect1.x >= rect2.x + rect2.width) {
            return false;
        }
        else if (rect1.x <= rect2.x && rect1.x + rect1.width <= rect2.x) {
            return false;
        }
        else if (rect1.y >= rect2.y && rect1.y >= rect2.y + rect2.height) {
            return false;
        }
        else if (rect1.y <= rect2.y && rect1.y + rect1.height <= rect2.y) {
            return false;
        }
        return true;
    };
    dragAnswer_model03_v1.prototype._belongArea = function (self, area, gap) {
        if (gap === void 0) { gap = 10; }
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance < gap;
    };
    dragAnswer_model03_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model03_v1.prototype._clickSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                state = globalThis._.cloneDeep(this._state);
                // state.answer = state.drops === this._answer;
                state.submit = true;
                this.updateState(state);
                return [2 /*return*/];
            });
        });
    };
    // 获取状态
    dragAnswer_model03_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model03_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model03_v1.prototype.updateUi = function (oldState, state) {
        var s = this;
        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
        }
        if (state.drag == "end") {
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                console.log('endddddddddd update ui', state);
                for (var i = 0; i < state.collider.length; i++) {
                    this._colliderBox[i].x = state.collider[i].x;
                    this._colliderBox[i].y = state.collider[i].y;
                }
            }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                console.log('submittttttt');
                if (state.submit) {
                    // if (state.drops) {
                    this.answerFeedback(state.answer);
                    // } else {
                    //     this.onHandleGuide();
                    // }
                }
            }
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }
            /* if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    let nv: any = this._colliderBox.map((v: any) => { return { "x": v.x, "y": v.y } });
                    let bool: boolean = s._cache["colliderBox"].every((v: any, i: any) => v.x == nv[i].x && v.y == nv[i].y);
                    bool ? this.onHandleGuide() : this.onFlicker(state.answer);
                }
            } */
        }
    };
    dragAnswer_model03_v1.prototype.playTitle = function (bool) {
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
                            _this._c2.selectedIndex = 0;
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
    dragAnswer_model03_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
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
    // 操作提示
    dragAnswer_model03_v1.prototype.onHandleGuide = function () {
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
    // 运行时 禁止操作
    dragAnswer_model03_v1.prototype.forbidHandle = function () {
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
    dragAnswer_model03_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model03_v1.prototype.dragSchedule = function () {
        var s = this;
        if (s._dragging) {
            var state = globalThis._.cloneDeep(s._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
            };
            s.updateState(state);
            /* state.curDragIconsPos = {
                x: s._curDragIcon.x,
                y: s._curDragIcon.y,
            }; */
        }
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model03_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model03_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model03_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model03_v1.prototype.onEnable = function () {
        this.registerState();
        this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model03_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model03_v1 = __decorate([
        ccclass
    ], dragAnswer_model03_v1);
    return dragAnswer_model03_v1;
}(cc.Component));
exports.default = dragAnswer_model03_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDMtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQWduQkM7UUF4bEJXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFRLEdBQWEsRUFBRSxDQUFDO1FBR3hCLFlBQU0sR0FBUSxFQUFFLENBQUM7O0lBMmtCN0IsQ0FBQztJQXprQkcsc0JBQUksd0NBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxD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ZXJNb2RlbDAzQmFzZSBmcm9tIFwiLi9EcmFnQW5zd2VyTW9kZWwwM0Jhc2VcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiBQbGVhc2Ugc2V0IExhc3RFZGl0b3JzXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTcgMTU6MjU6NThcclxuICovXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDNfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ0J0bjogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfYnRuQm94OiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnQm94OiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyb3BCb3g6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF90aXRsZVRyaWdnZXI6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuICAgIHByaXZhdGUgbGluZUJsaW5rOiBhbnk7XHJcblxyXG4gICAgLy8g6L+c56iL5Yqo5oCB57uE5Lu2XHJcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJCb3ggPSBbXTtcclxuICAgIHByaXZhdGUgX2NvbGxpZGVyZWRCb3ggPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jYWNoZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVUaW1lID0gLjM7XHJcbiAgICBwcml2YXRlIF9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ0ljb25BcnIgPSBbXTtcclxuICAgIHByaXZhdGUgX2Zvb3ROdW06IG51bWJlcltdID0gW107XHJcbiAgICBwdWJsaWMgcGFnZURhdGE6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICB0aGlzLl92aWV3LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5fdmlldy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG4gICAgICAgIC8vIOiHqOaZglxyXG4gICAgICAgIC8vIGJ1ZyDliJ3lp4vorr7nva7kuI3mkq3mlL7kuI3nlJ/mlYhcclxuICAgICAgICBpZiAodGhpcy5fYzIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcy5jcmVhdGVVSSgpO1xyXG4gICAgICAgIHMuYWRkRXZlbnQoKTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJhZzogXCJlbmRcIixcclxuICAgICAgICAgICAgZ2V0RHJvcEFycjogW10sXHJcbiAgICAgICAgICAgIGNvbGxpZGVyOiBzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLm1hcCgodjogYW55KSA9PiB2KSwvL+aLluaLveeJqeeahOS9jee9ruaVsOe7hFxyXG4gICAgICAgICAgICBjb2xsaWRlckluZGV4OiBudWxsLC8v5b2T5YmN5ouW5ou954mp5Zyo5pWw57uE5YaF55qE57Si5byVXHJcbiAgICAgICAgICAgIGNvbGxpZGVyZWQ6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJlZEJveFwiXS5tYXAoKHY6IGFueSkgPT4gdiksLy/kuoznu7TmlbDnu4TvvIzlrZjmlL7mr4/kuKrmlL7nva7ljLrlr7nlupTnmoTooqvmlL7nva7lhYPntKBcclxuICAgICAgICAgICAgZHJvcEFycjogW10sXHJcbiAgICAgICAgICAgIC8vIGRyYWdJY29uc1Bvc0FycjogZHJhZ0ljb25zUG9zQXJyLFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuc3dlcjogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVUkoKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlckdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWRHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlcmVkQm94XCIpLmFzR3JvdXA7XHJcblxyXG4gICAgICAgIHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG46IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIHMuX2NhY2hlWydjb2xsaWRlckJveCddLnB1c2goeyB4OiBidG4ueCwgeTogYnRuLnksIGJlbG9uZzogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgIGJ0blsnY29sbGlkZXJlZEluZGV4J10gPSAtMTtcclxuICAgICAgICAgICAgICAgIGJ0bi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCB0aGlzLl9vbkRyYWdFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3gucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLl9jb2xsaWRlckJveCcsIHRoaXMuX2NvbGxpZGVyQm94KTtcclxuXHJcblxyXG4gICAgICAgIHMuX2NhY2hlW1wiY29sbGlkZXJlZEJveFwiXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmlldy5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gY29sbGlkZXJlZEdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuOiBmZ3VpLkdJbWFnZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0ltYWdlO1xyXG4gICAgICAgICAgICAgICAgcy5fY2FjaGVbJ2NvbGxpZGVyZWRCb3gnXS5wdXNoKFtdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyZWRCb3gucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLl9jb2xsaWRlcmVkQm94JywgdGhpcy5fY29sbGlkZXJlZEJveCk7XHJcblxyXG5cclxuICAgICAgICAvKiBzLmRyb3BCb3ggPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAnVHlwZURyb3BCb3gxJykuYXNDb207XHJcbiAgICAgICAgcy5kcm9wQm94LnggPSAzNjg7XHJcbiAgICAgICAgcy5kcm9wQm94LnkgPSA2MDA7XHJcbiAgICAgICAgcy5fdmlldy5hZGRDaGlsZChzLmRyb3BCb3gpO1xyXG5cclxuICAgICAgICBzLmRyYWdCb3ggPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAnVHlwZURyYWdCb3gxJykuYXNDb207XHJcbiAgICAgICAgcy5kcmFnQm94LnggPSA2MTA7XHJcbiAgICAgICAgcy5kcmFnQm94LnkgPSAyNTA7XHJcbiAgICAgICAgcy5fdmlldy5hZGRDaGlsZChzLmRyYWdCb3gpOyAqL1xyXG4gICAgICAgIC8vIHMuZHJvcEJveCA9IHMuX3ZpZXcuZ2V0Q2hpbGQoJ2Ryb3BCb3gnKS5hc0NvbTtcclxuICAgICAgICAvLyBzLmRyYWdCb3ggPSBzLl92aWV3LmdldENoaWxkKCdkcmFnQm94JykuYXNDb207XHJcblxyXG4gICAgICAgIC8vIGxldCBkcmFnSWNvbiA9IHMucGFnZURhdGEubW9kZWwuY29uZmlnLmRyYWdJY29uO1xyXG4gICAgICAgIC8qIGZvciAobGV0IGtleSBpbiBkcmFnSWNvbikge1xyXG4gICAgICAgICAgICBsZXQgZHJhZ0ljb25EYXRhID0gZHJhZ0ljb25ba2V5XTtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBuZXcgZmd1aS5HQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgIGxldCBpY29uSW1nID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgZHJhZ0ljb25EYXRhLm5hbWUpLmFzSW1hZ2U7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2hpbGQoaWNvbkltZyk7XHJcbiAgICAgICAgICAgIGljb24uc2V0U2l6ZShpY29uSW1nLndpZHRoLCBpY29uSW1nLmhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIGljb24uc2V0UGl2b3QoMC41LDAuNSx0cnVlKTtcclxuICAgICAgICAgICAgaWNvbi5vcGFxdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpY29uLnggPSBkcmFnSWNvbkRhdGEueDtcclxuICAgICAgICAgICAgaWNvbi55ID0gZHJhZ0ljb25EYXRhLnk7XHJcbiAgICAgICAgICAgIGljb25bJ2RyYWdPcmlnaW4nXSA9IHRoaXMuZ2V0T3JpZ2luVmFsdWUoaWNvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY29uID0gJywgaWNvblsnZHJhZ09yaWdpbiddKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGljb24udG91Y2hhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWNvbi5kcmFnZ2FibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWNvbi5vbihmZ3VpLkV2ZW50LlRPVUNIX0JFR0lOLCBzLl9vbkRyYWdTdGFydCwgcyk7XHJcbiAgICAgICAgICAgIGljb24ub24oZmd1aS5FdmVudC5UT1VDSF9NT1ZFLCBzLl9vbkRyYWdNb3ZlLCBzKTtcclxuICAgICAgICAgICAgaWNvbi5vbihmZ3VpLkV2ZW50LlRPVUNIX0VORCwgcy5fb25EcmFnRW5kLCBzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGljb24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHMuX29uRHJhZ1N0YXJ0LCBzKTtcclxuXHJcbiAgICAgICAgICAgIHMuZHJhZ0JveC5hZGRDaGlsZChpY29uKTtcclxuICAgICAgICAgICAgcy5fZHJhZ0ljb25BcnIucHVzaChpY29uKTtcclxuICAgICAgICB9ICovXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnQoKSB7XHJcbiAgICAgICAgLy8gbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIC8vIHMuX3N1Ym1pdEJ0bi5vbihmZ3VpLkV2ZW50LkNMSUNLLCBzLl9jbGlja1N1Ym1pdCwgcyk7XHJcbiAgICAgICAgLy8gcy5fcmVhZFRpdGxlQnRuLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHMuX2NsaWNrVGl0bGUsIHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHMucGFnZURhdGEgPSBkYXRhO1xyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlLCBkcmFnSWNvbiB9ID0gbW9kZWwuY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAobW9kZWwudWlQYXRoKSB7XHJcbiAgICAgICAgICAgIEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBzLl9yZWFkVGl0bGVCdG4gPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAnVGl0bGVDb20nKS5hc0NvbTtcclxuXHJcbiAgICAgICAgKHMuX3JlYWRUaXRsZUJ0bi5nZXRDaGlsZCgndGl0bGUnKSBhcyBmZ3VpLkdMb2FkZXIpLnVybCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdCgndDQtdHJpYWxDbGFzcy0wMScsICd0aXRsZV8zJykuYXNJbWFnZS5yZXNvdXJjZVVSTDtcclxuICAgICAgICBzLl9yZWFkVGl0bGVCdG4ueCA9IDIwO1xyXG4gICAgICAgIHMuX3JlYWRUaXRsZUJ0bi55ID0gNTA7XHJcbiAgICAgICAgdGhpcy5fdmlldy5hZGRDaGlsZChzLl9yZWFkVGl0bGVCdG4pO1xyXG5cclxuXHJcbiAgICAgICAgcy5fc3VibWl0QnRuID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgJ1N1Ym1pdEJ0bicpLmFzQ29tO1xyXG4gICAgICAgIHMuX3N1Ym1pdEJ0bi54ID0gMTY3NjtcclxuICAgICAgICBzLl9zdWJtaXRCdG4ueSA9IDgwNjtcclxuICAgICAgICB0aGlzLl92aWV3LmFkZENoaWxkKHMuX3N1Ym1pdEJ0bik7ICovXHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgLy8gaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICAgICAgaWYgKGFlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbnN3ZXIpIHMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICAgICAgaWYgKGRyYWdJY29uKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZHJhZ0ljb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBzLl9mb290TnVtLnB1c2goZHJhZ0ljb25ba2V5XS5mb290TnVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFBhdGg6IGFueSA9IGAke3BhdGhDb25maWcucmVtb3RlVXJsfSR7cGF0aENvbmZpZy5jb21wb25lbnRCdW5kbGVQYXRofSR7Y29tcG9uZW50c1trZXldLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbXBvbmVudEJ1bmRsZSwgY29tcG9uZW50c1trZXldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29tcG9uZW50UHJlZmFiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE9yaWdpblZhbHVlKHY6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHYueCxcclxuICAgICAgICAgICAgeTogdi55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgX2N1ckRyYWdJY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgX29mZnNldFBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKCk7XHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gZXZ0LmNhcHR1cmVUb3VjaCgpO1xyXG4gICAgICAgIC8qIHMuX2N1ckRyYWdJY29uID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ19vbkRyYWdTdGFydCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHMuX2N1ckRyYWdJY29uKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzLl9jdXJEcmFnSWNvbi55KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcyA9IHMuX2N1ckRyYWdJY29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgcy5fb2Zmc2V0UG9zLnggPSBwb3MueCAtIHMuX2N1ckRyYWdJY29uLng7XHJcbiAgICAgICAgcy5fb2Zmc2V0UG9zLnkgPSBwb3MueSAtIHMuX2N1ckRyYWdJY29uLnk7XHJcblxyXG4gICAgICAgIHMuX3ZpZXcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgcy5fb25EcmFnTW92ZSwgcyk7XHJcbiAgICAgICAgcy5fY3VyRHJhZ0ljb24ub25jZShjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHMuX29uRHJhZ0VuZCwgcyk7ICovXHJcbiAgICAgICAgLy8gcy5fY3VyRHJhZ0ljb24uZHJhZ2dhYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpZGVyID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIHMuX3ZpZXcuc2V0Q2hpbGRJbmRleChjb2xsaWRlciwgcy5fdmlldy5udW1DaGlsZHJlbiAtIDEpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4ID0gcy5fY29sbGlkZXJCb3guZmluZEluZGV4KHYgPT4gdiA9PSBjb2xsaWRlcik7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcChzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJJbmRleCA9IGNvbGxpZGVySW5kZXg7XHJcbiAgICAgICAgcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgLy8gc3RhdGUuZHJhZyA9IFwic3RhcnRcIjtcclxuICAgICAgICAvLyBzdGF0ZS5jdXJEcmFnSWNvbiA9IHMuX2N1ckRyYWdJY29uO1xyXG4gICAgICAgIC8qIHN0YXRlLmN1ckRyYWdJY29uc1BvcyA9IHtcclxuICAgICAgICAgICAgeDogcy5fY3VyRHJhZ0ljb25bJyRnb2JqJ11bXCJkcmFnT3JpZ2luXCJdLngsXHJcbiAgICAgICAgICAgIHk6IHMuX2N1ckRyYWdJY29uWyckZ29iaiddW1wiZHJhZ09yaWdpblwiXS55LFxyXG4gICAgICAgIH07ICovXHJcbiAgICAgICAgLy8gc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHMuX2Fuc3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnX29uRHJhZ01vdmUnKTtcclxuICAgICAgICAvLyBpZiAoIXMuX2N1ckRyYWdJY29uKSByZXR1cm47XHJcbiAgICAgICAgcy5fZHJhZ2dpbmcgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IHBvcyA9IHMuX2N1ckRyYWdJY29uLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgLy8gcy5fY3VyRHJhZ0ljb24ueCA9IHBvcy54IC0gcy5fb2Zmc2V0UG9zLng7XHJcbiAgICAgICAgLy8gcy5fY3VyRHJhZ0ljb24ueSA9IHBvcy55IC0gcy5fb2Zmc2V0UG9zLnk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHMuX2N1ckRyYWdJY29uLnggKyAnIC0gJyArIHMuX2N1ckRyYWdJY29uLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgZHJvcEFyciA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfb25EcmFnRW5kKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuX2RyYWdnaW5nKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpZGVyOiBhbnkgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVySW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyQm94LmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgbGV0IGFycjogYW55ID0gW107XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWQ6IGFueTtcclxuICAgICAgICB0aGlzLl9jb2xsaWRlcmVkQm94LmZvckVhY2goKHY6IGFueSwgaTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLl9iZWxvbmdBcmVhKGNvbGxpZGVyLCB2LCA1MDApID09IHRydWUpIGFyci5wdXNoKHYpO1xyXG4gICAgICAgICAgICBpZiAocy5pc0NvbGxpc2lvbldpdGhSZWN0KHYsIGNvbGxpZGVyKSkgYXJyLnB1c2godik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFyci5mb3JFYWNoKCh2OiBhbnksIGk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkID0gdjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBwZCA9IHRoaXMuX2dldERpc3RhbmNlKGNvbGxpZGVyLCBhcnJbaSAtIDFdKTtcclxuICAgICAgICAgICAgICAgIGxldCBjZCA9IHRoaXMuX2dldERpc3RhbmNlKGNvbGxpZGVyLCB2KTtcclxuICAgICAgICAgICAgICAgIGlmIChjZCA8IHBkKSBjb2xsaWRlcmVkID0gdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDmlL7nva7ljLrntKLlvJXvvIzlrprkvY3liLDmlL7lhaXkuobpgqPkuKrmlL7nva7ljLpcclxuICAgICAgICBsZXQgY29sbGlkZXJlZEluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlcmVkQm94LmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IGNvbGxpZGVyZWQpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgc3NzOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHN0YXRlKTtcclxuICAgICAgICAvLyBsZXQgc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3N0YXRlKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnb3JpZ2luIHN0YXRlID0gJywgdGhpcy5fc3RhdGUuZHJvcEFycik7Ly8gcmlnaHRcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xvbmUgc3RhdGUgPSAnLCBzdGF0ZS5kcm9wQXJyKTsvL3JpaGd0XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NzcyA9ICcsIHNzcy5kcm9wQXJyKTsvL3dyb25nXHJcblxyXG4gICAgICAgIC8vIGRyb3BBcnIgPSBzdGF0ZS5jb2xsaWRlcmVkW2NvbGxpZGVyZWRJbmRleF0ubWFwKHYgPT4gdik7XHJcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdzdGF0ZS5kcm9wQXJyWzBdID0gJywgc3RhdGUuZHJvcEFycik7XHJcbiAgICAgICAgLy8gbGV0IGRyb3BBcnIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0YXRlLmRyb3BBcnIpKTtcclxuICAgICAgICBsZXQgZHJvcEFyciA9IHN0YXRlLmRyb3BBcnI7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcigncy5kcm9wQXJyMTExMTExMTExMTExMTEgPSAnLCBkcm9wQXJyKTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgbmFtZSA9IGNvbGxpZGVyLm5hbWU7XHJcbiAgICAgICAgLy8gbGV0IGRyb3BBcnJJbmRleCA9IGRyb3BBcnIuaW5kZXhPZihkYXRhKTsvL+aUvue9ruWMuuaYr+WQpuW3suWMheWQq+W9k+WJjeaLluaLveWFg+e0oFxyXG4gICAgICAgIGxldCBkcm9wQXJySW5kZXggPSBkcm9wQXJyLmZpbmRJbmRleCh2ID0+IHYubmFtZSA9PSBuYW1lKTsvL+aUvue9ruWMuuaYr+WQpuW3suWMheWQq+W9k+WJjeaLluaLveWFg+e0oFxyXG4gICAgICAgIGNvbnNvbGUud2FybignZHJvcEFyckluZGV4ID0gJywgZHJvcEFyckluZGV4KTtcclxuXHJcbiAgICAgICAgLy8gMS7ph43nva7kvY3nva4g6YeN572u5YiwXHJcbiAgICAgICAgLy8gMi7mlL7lhaXmlL7nva7ljLpcclxuICAgICAgICBpZiAoY29sbGlkZXJlZEluZGV4ID09IC0xIHx8IGRyb3BBcnIubGVuZ3RoID09IDYpIHtcclxuICAgICAgICAgICAgLy8gcmVzZXRcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2V0Jyk7XHJcbiAgICAgICAgICAgIGlmIChkcm9wQXJySW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgZHJvcEFyci5zcGxpY2UoZHJvcEFyckluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltjb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlci5jb2xsaWRlcmVkSW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZXJlZEluZGV4ID0gY29sbGlkZXIuY29sbGlkZXJlZEluZGV4O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZXJlZEluZGV4ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRyb3BBcnJJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZHJvcEFyci5wdXNoKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29sbGlkZXIpKSk7XHJcbiAgICAgICAgICAgICAgICBkcm9wQXJyLnB1c2goeyAnbmFtZSc6IGNvbGxpZGVyLm5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3B1c2hoaGhoaGhoaGgnLGRyb3BBcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRyb3BBcnIucHVzaCh7IG5hbWU6IGNvbGxpZGVyLm5hbWUgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdwdXNoaGhoaGhoaGhoJyxkcm9wQXJyKTtcclxuXHJcbiAgICAgICAgbGV0IGZvb3ROdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJvcEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGRyb3BBcnJbaV07XHJcbiAgICAgICAgICAgIC8vIGxldCBpdGVtSW5kZXggPSBzLl9jb2xsaWRlckJveC5pbmRleE9mKGl0ZW0pOy8v54q25oCB5rGg5Lit55qEaW5kZXhcclxuICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IHMuX2NvbGxpZGVyQm94LmZpbmRJbmRleCh2ID0+IHYubmFtZSA9PSBpdGVtLm5hbWUpOy8v54q25oCB5rGg5Lit55qEaW5kZXhcclxuICAgICAgICAgICAgbGV0IHBvczogY2MuVmVjMiA9IG5ldyBjYy5WZWMyKCk7XHJcbiAgICAgICAgICAgIGxldCBjb2xsaWRlcmVkQm94ID0gcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgY3VyQ29sbGlkZXIgPSBzLl92aWV3LmdldENoaWxkKGl0ZW0ubmFtZSlcclxuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCdsZWZ0JykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgZm9vdE51bSArPSBzLl9mb290TnVtWzBdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCdyaWdodCcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGZvb3ROdW0gKz0gcy5fZm9vdE51bVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MueCA9IGNvbGxpZGVyZWRCb3gueCArIDE1MCArIDIwMCAqIGk7XHJcbiAgICAgICAgICAgIHBvcy55ID0gY29sbGlkZXJlZEJveC55ICsgY29sbGlkZXJlZEJveC5oZWlnaHQgLSBjdXJDb2xsaWRlci5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyW2l0ZW1JbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBwb3MueCxcclxuICAgICAgICAgICAgICAgIHk6IHBvcy55LFxyXG4gICAgICAgICAgICAgICAgYmVsb25nOiBjb2xsaWRlcmVkSW5kZXhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsaWRlci5jb2xsaWRlcmVkSW5kZXggPSBjb2xsaWRlcmVkSW5kZXg7XHJcblxyXG4gICAgICAgIHN0YXRlLmRyYWcgPSBcImVuZFwiO1xyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVySW5kZXggPSBjb2xsaWRlckluZGV4O1xyXG4gICAgICAgIC8vIHN0YXRlLmNvbGxpZGVyZWRbY29sbGlkZXJlZEluZGV4XSA9IGRyb3BBcnIuY29uY2F0KFtdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn57uZc3RhdGXotYvlgLzliY3nmoQnLCBkcm9wQXJyKTtcclxuXHJcbiAgICAgICAgc3RhdGUuZHJvcEFyciA9IGRyb3BBcnI7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfotYvlgLzlkI7nmoQnLCBzdGF0ZS5kcm9wQXJyKTtcclxuXHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gZm9vdE51bSA9PSBzLl9hbnN3ZXIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgLy8gcy5fY3VyRHJhZ0ljb24gPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0RGlzdGFuY2Uoc2VsZjogYW55LCBhcmVhOiBhbnkpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55+p5b2i56Kw5pKeXHJcbiAgICAgKiBAcGFyYW0gcmVjdDEgXHJcbiAgICAgKiBAcGFyYW0gcmVjdDIgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc0NvbGxpc2lvbldpdGhSZWN0KHJlY3QxOiBmZ3VpLkdPYmplY3QsIHJlY3QyOiBmZ3VpLkdPYmplY3QpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAocmVjdDEueCA+PSByZWN0Mi54ICYmIHJlY3QxLnggPj0gcmVjdDIueCArIHJlY3QyLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlY3QxLnggPD0gcmVjdDIueCAmJiByZWN0MS54ICsgcmVjdDEud2lkdGggPD0gcmVjdDIueCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWN0MS55ID49IHJlY3QyLnkgJiYgcmVjdDEueSA+PSByZWN0Mi55ICsgcmVjdDIuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlY3QxLnkgPD0gcmVjdDIueSAmJiByZWN0MS55ICsgcmVjdDEuaGVpZ2h0IDw9IHJlY3QyLnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9iZWxvbmdBcmVhKHNlbGY6IGFueSwgYXJlYTogYW55LCBnYXA6IG51bWJlciA9IDEwKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gKHNlbGYueCArIHNlbGYud2lkdGggLyAyKSAtIChhcmVhLnggKyBhcmVhLndpZHRoIC8gMik7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IChzZWxmLnkgKyBzZWxmLmhlaWdodCAvIDIpIC0gKGFyZWEueSArIGFyZWEuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpO1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8IGdhcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIC8vIHN0YXRlLmFuc3dlciA9IHN0YXRlLmRyb3BzID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwibW92ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnggPSBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XS54O1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55ID0gc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0ueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwiZW5kXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5jb2xsaWRlciwgc3RhdGUuY29sbGlkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW5kZGRkZGRkZGRkIHVwZGF0ZSB1aScsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvbGxpZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0ueCA9IHN0YXRlLmNvbGxpZGVyW2ldLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbaV0ueSA9IHN0YXRlLmNvbGxpZGVyW2ldLnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5zdWJtaXQsIHN0YXRlLnN1Ym1pdCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXR0dHR0dHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHN0YXRlLmRyb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMub25IYW5kbGVHdWlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2uY29sbGlkZXIg5Yid5aeL5L2N572uIOWIpOaWrSDmmK/lkKbooqvmk43kvZzov4dcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbnY6IGFueSA9IHRoaXMuX2NvbGxpZGVyQm94Lm1hcCgodjogYW55KSA9PiB7IHJldHVybiB7IFwieFwiOiB2LngsIFwieVwiOiB2LnkgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9vbDogYm9vbGVhbiA9IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0uZXZlcnkoKHY6IGFueSwgaTogYW55KSA9PiB2LnggPT0gbnZbaV0ueCAmJiB2LnkgPT0gbnZbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA/IHRoaXMub25IYW5kbGVHdWlkZSgpIDogdGhpcy5vbkZsaWNrZXIoc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5mZWVkYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZlZWRiYWNrKTtcclxuICAgICAgICBmZWVkYmFjay54ID0gOTYwO1xyXG4gICAgICAgIGZlZWRiYWNrLnkgPSA1NDA7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrSnM6IGFueSA9IGZlZWRiYWNrLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZlZWRiYWNrSnMuaW5pdChib29sKTtcclxuICAgICAgICBmZWVkYmFjay5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaTjeS9nOaPkOekulxyXG4gICAgb25IYW5kbGVHdWlkZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlR3VpZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlR3VpZGUucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQud2lkdGgpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/kOihjOaXtiDnpoHmraLmk43kvZxcclxuICAgIGZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmICghaGFuZGxlTWFzaykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlTWFzayA9IG5ldyBjYy5Ob2RlKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnBhcmVudCA9IHRoaXMuX3dvcmxkUm9vdDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay53aWR0aCA9IDE5MjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suaGVpZ2h0ID0gMTA4MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay54ID0gOTYwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnkgPSA1NDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa2iOmZpOemgeatolxyXG4gICAgZGlzYWJsZUZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmIChoYW5kbGVNYXNrKSBoYW5kbGVNYXNrLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLTml7ZcclxuICAgIC8vIOaLluaLveWumuaXtuWZqFxyXG4gICAgZHJhZ1NjaGVkdWxlKCkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBpZiAocy5fZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHMuX3N0YXRlKTtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZyA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8qIHN0YXRlLmN1ckRyYWdJY29uc1BvcyA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHMuX2N1ckRyYWdJY29uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBzLl9jdXJEcmFnSWNvbi55LFxyXG4gICAgICAgICAgICB9OyAqL1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZHJhZ1NjaGVkdWxlLCB0aGlzLl9zY2hlZHVsZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/entrances/javascripts/courseware.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa72aJTCYJJho429KpfJ+aR', 'courseware');
// entrances/javascripts/courseware.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZW50cmFuY2VzXFxqYXZhc2NyaXB0c1xcY291cnNld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUN6QyxJQUFBLEtBQW1DLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQTVELFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsSUFBSSxVQUFnQyxDQUFDO0FBQzdELElBQUEsUUFBUSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLFNBQS9CLENBQWdDO0FBQzFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBK0NDO1FBMUNHLFVBQUksR0FBRyxLQUFLLENBQUM7UUFNYixnQkFBVSxHQUFpQixJQUFJLENBQUM7O0lBb0NwQyxDQUFDO0lBaENTLDhCQUFNLEdBQVo7Ozs7Ozs2QkFFUSxJQUFJLENBQUMsSUFBSSxFQUFULHdCQUFTO3dCQUNULE9BQU87d0JBQ1AsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOzs7d0JBRzVCLFVBQVUsR0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBbkMsQ0FBb0M7d0JBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ2Isc0JBQU87eUJBQ1Y7d0JBQ0csR0FBRyxHQUFRLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ3ZELHFCQUFNLElBQUksQ0FBQyxLQUFLLEVBQUssUUFBUSxDQUFDLFNBQVMsbUNBQTZCLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQVEsR0FBSyxDQUFDLEVBQUE7O3dCQUF4SSxJQUFJLEdBQVEsU0FBNEg7d0JBQzVJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7d0JBRzlCLGFBQWEsR0FBUSxLQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxjQUFnQixDQUFDO3dCQUN2SCxxQkFBTSxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUE7O3dCQUF0RCxlQUFlLEdBQVEsU0FBK0I7d0JBQy9CLHFCQUFNLFVBQVUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBOUUsZUFBZSxHQUFRLFNBQXVEO3dCQUM5RSxhQUFhLEdBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDekQsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDOUQscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUF6QyxTQUF5QyxDQUFDO3dCQUUxQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7NEJBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3RDOzs7OztLQUNKO0lBRUQsa0NBQVUsR0FBVixVQUFXLENBQU0sRUFBRSxHQUFRO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUF6Q0Q7UUFIQyxRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOytDQUNXO0lBTWI7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVM7WUFDbEIsV0FBVyxFQUFFLE9BQU87U0FDdkIsQ0FBQztxREFDOEI7SUFYZixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBK0NqQztJQUFELG9CQUFDO0NBL0NELEFBK0NDLENBL0MwQyxFQUFFLENBQUMsU0FBUyxHQStDdEQ7a0JBL0NvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wMy0yNiAxODowNToxMlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNC0yNyAxMTozMjowM1xyXG4gKi9cclxuY29uc3QgZ2FtZURhdGEgPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5nYW1lRGF0YTtcclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBhamF4IH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcGFyc2VVUkwgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnV0aWxzO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdDNfY291cnNld2FyZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+acrOWcsOa1i+ivlSdcclxuICAgIH0pXHJcbiAgICB0ZXN0ID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Kc29uQXNzZXQsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfphY3nva4g5paH5Lu2J1xyXG4gICAgfSlcclxuICAgIGNvbmZpZ0pzb246IGNjLkpzb25Bc3NldCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlckpzOiBhbnk7XHJcblxyXG4gICAgYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBjb25maWdKc29uOiBhbnk7XHJcbiAgICAgICAgaWYgKHRoaXMudGVzdCkge1xyXG4gICAgICAgICAgICAvLyDmnKzlnLDmtYvor5VcclxuICAgICAgICAgICAgY29uZmlnSnNvbiA9IHRoaXMuY29uZmlnSnNvbi5qc29uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOiOt+WPlumFjee9ruaWh+S7tlxyXG4gICAgICAgICAgICBsZXQgeyBjb3Vyc2VOYW1lIH0gPSBwYXJzZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIGlmICghY291cnNlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlbnY6IGFueSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCd0ZXN0JykgPyAndGVzdCcgOiAncHJvZCc7XHJcbiAgICAgICAgICAgIGxldCBqc29uOiBhbnkgPSBhd2FpdCBhamF4KFwiR0VUXCIsIGAke2dhbWVEYXRhLmFwaU9yaWdpbn0vZ2V0Q29uZmlnSnNvbj9jb3Vyc2VOYW1lPSR7Y291cnNlTmFtZSA/IGNvdXJzZU5hbWUudG9Mb3dlckNhc2UoKSA6ICcnfSZlbnY9JHtlbnZ9YCk7XHJcbiAgICAgICAgICAgIGNvbmZpZ0pzb24gPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnlJ/miJDmjqfliLblmahcclxuICAgICAgICBsZXQgY29udHJsbGVyUGF0aDogYW55ID0gYCR7Y29uZmlnSnNvbi5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2NvbmZpZ0pzb24ucGF0aENvbmZpZy5jb250cm9sbGVyQnVuZGxlUGF0aH0ke2NvbmZpZ0pzb24ucGF0aENvbmZpZy5jb250cm9sbGVyTmFtZX1gO1xyXG4gICAgICAgIGxldCBjb250cmxsZXJCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29udHJsbGVyUGF0aCk7XHJcbiAgICAgICAgbGV0IGNvbnRybGxlclByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb250cmxsZXJCdW5kbGUsIGNvbnRybGxlckJ1bmRsZS5uYW1lKTtcclxuICAgICAgICBsZXQgY29udHJsbGVyTm9kZTogYW55ID0gY2MuaW5zdGFudGlhdGUoY29udHJsbGVyUHJlZmFiKTtcclxuICAgICAgICBjb250cmxsZXJOb2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5fY29udHJvbGxlckpzID0gY29udHJsbGVyTm9kZS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBhd2FpdCB0aGlzLl9jb250cm9sbGVySnMuaW5pdChjb25maWdKc29uKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250cm9sbGVySnMub25KdW1wQ29uZmlnKDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaG9vc2VQYWdlKGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9jb250cm9sbGVySnMub25KdW1wQ29uZmlnKGNlZCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/DragAnswerModel03Base.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dc8acHicohNq5yBFFMirL0/', 'DragAnswerModel03Base');
// prefabLibrary/models/dragAnswer/DragAnswerModel03Base.ts

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
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var DragAnswerModel03Base = /** @class */ (function (_super) {
    __extends(DragAnswerModel03Base, _super);
    function DragAnswerModel03Base() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* private _state = {};

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;

        this.mergeState();
    } */
    DragAnswerModel03Base.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var s, pathConfig, model, components, Package, GComponent, _a, answer, ae, v, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        s = this;
                        s.pageData = data;
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        GComponent = model.uiPath;
                        _a = model.config, answer = _a.answer, ae = _a.ae;
                        if (model.uiPath) {
                            GComponent = model.uiPath;
                            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                        }
                        s._readTitleBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'TitleCom').asCom;
                        s._readTitleBtn.getChild('title').url = fgui.UIPackage.createObject('t4-trialClass-01', 'title_3').asImage.resourceURL;
                        s._readTitleBtn.x = 20;
                        s._readTitleBtn.y = 50;
                        this._view.addChild(s._readTitleBtn);
                        s._submitBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'SubmitBtn').asCom;
                        s._submitBtn.x = 1676;
                        s._submitBtn.y = 806;
                        this._view.addChild(s._submitBtn);
                        if (model.config) {
                            // if (answer) this._answer = answer;
                            // 动效注册
                            if (ae) {
                                for (v in ae) {
                                    if (ae[v]) {
                                        this[v] = {};
                                        if (ae[v].component)
                                            this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                                        if (ae[v].pos)
                                            this[v].pos = ae[v].pos;
                                    }
                                }
                            }
                        }
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
    DragAnswerModel03Base = __decorate([
        ccclass
    ], DragAnswerModel03Base);
    return DragAnswerModel03Base;
}(cc.Component));
exports.default = DragAnswerModel03Base;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxEcmFnQW5zd2VyTW9kZWwwM0Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUEyQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFwRSxVQUFVLGdCQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLFlBQVksa0JBQWdDLENBQUM7QUFFdkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFRNUM7SUFBbUQseUNBQVk7SUFBL0Q7O0lBNEVBLENBQUM7SUFwRUc7Ozs7Ozs7Ozs7O1FBV0k7SUFHRSxvQ0FBSSxHQUFWLFVBQVcsSUFBSTs7Ozs7O3dCQUNQLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ2IsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7d0JBQ1osVUFBVSxHQUF3QixJQUFJLFdBQTVCLEVBQUUsS0FBSyxHQUFpQixJQUFJLE1BQXJCLEVBQUUsVUFBVSxHQUFLLElBQUksV0FBVCxDQUFVO3dCQUN6QyxPQUFPLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQzt3QkFDakMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7d0JBQzFCLEtBQWlCLEtBQUssQ0FBQyxNQUFNLEVBQTNCLE1BQU0sWUFBQSxFQUFFLEVBQUUsUUFBQSxDQUFrQjt3QkFFbEMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFOzRCQUNkLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDOzRCQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7eUJBQ3ZFO3dCQUVELENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUVuRixDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQWtCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7d0JBQ3pJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDdkIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBR3JDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNsRixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUVsQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7NEJBQ2QscUNBQXFDOzRCQUNyQyxPQUFPOzRCQUNQLElBQUksRUFBRSxFQUFFO2dDQUNKLEtBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQ0FDZCxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTt3Q0FDUCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dDQUNiLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7NENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3Q0FDckcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs0Q0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7cUNBQzFDO2lDQUNKOzZCQUNKO3lCQUNKOzZCQUVHLFVBQVUsRUFBVix3QkFBVTs7bUNBQ1EsVUFBVTs7Ozs7Ozt3QkFDcEIsYUFBYSxHQUFRLEtBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVksQ0FBQzt3QkFDdEYscUJBQU0sVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFBOzt3QkFBdEQsZUFBZSxHQUFRLFNBQStCO3dCQUMvQixxQkFBTSxVQUFVLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQXBGLGVBQWUsR0FBUSxTQUE2RDt3QkFDeEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQzs7Ozs7Ozs7O0tBTXZDO0lBekVnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQTRFekM7SUFBRCw0QkFBQztDQTVFRCxBQTRFQyxDQTVFa0QsRUFBRSxDQUFDLFNBQVMsR0E0RTlEO2tCQTVFb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElEcmFnQW5zd2VyTW9kZWwwM0Jhc2UgZnJvbSBcIi4vSURyYWdBbnN3ZXJNb2RlbDAzQmFzZVwiO1xyXG5jb25zdCB7IGxvYWRCdW5kbGUsIGxvYWRQcmVmYWIsIGxvYWRSZXNvdXJjZSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBQYWdlRGF0YSB7XHJcbiAgICBwYXRoQ29uZmlnOiBhbnksXHJcbiAgICBtb2RlbDogYW55LFxyXG4gICAgY29tcG9uZW50czogYW55XHJcbn1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ0Fuc3dlck1vZGVsMDNCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3JlYWRUaXRsZUJ0bjogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJvdGVjdGVkIF9zdWJtaXRCdG46IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHB1YmxpYyBwYWdlRGF0YTogYW55O1xyXG5cclxuICAgIC8qIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcblxyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfSAqL1xyXG5cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGEpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgcy5wYWdlRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IHsgcGF0aENvbmZpZywgbW9kZWwsIGNvbXBvbmVudHMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IFBhY2thZ2UgPSBwYXRoQ29uZmlnLnBhY2thZ2VOYW1lO1xyXG4gICAgICAgIGxldCBHQ29tcG9uZW50ID0gbW9kZWwudWlQYXRoO1xyXG4gICAgICAgIGxldCB7IGFuc3dlciwgYWUgfSA9IG1vZGVsLmNvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLnVpUGF0aCkge1xyXG4gICAgICAgICAgICBHQ29tcG9uZW50ID0gbW9kZWwudWlQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcy5fcmVhZFRpdGxlQnRuID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgJ1RpdGxlQ29tJykuYXNDb207XHJcblxyXG4gICAgICAgIChzLl9yZWFkVGl0bGVCdG4uZ2V0Q2hpbGQoJ3RpdGxlJykgYXMgZmd1aS5HTG9hZGVyKS51cmwgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAndGl0bGVfMycpLmFzSW1hZ2UucmVzb3VyY2VVUkw7XHJcbiAgICAgICAgcy5fcmVhZFRpdGxlQnRuLnggPSAyMDtcclxuICAgICAgICBzLl9yZWFkVGl0bGVCdG4ueSA9IDUwO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcuYWRkQ2hpbGQocy5fcmVhZFRpdGxlQnRuKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcy5fc3VibWl0QnRuID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgJ1N1Ym1pdEJ0bicpLmFzQ29tO1xyXG4gICAgICAgIHMuX3N1Ym1pdEJ0bi54ID0gMTY3NjtcclxuICAgICAgICBzLl9zdWJtaXRCdG4ueSA9IDgwNjtcclxuICAgICAgICB0aGlzLl92aWV3LmFkZENoaWxkKHMuX3N1Ym1pdEJ0bik7XHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgLy8gaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICAgICAgaWYgKGFlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model03-v2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80551sdOSRDM5dpZFjboMyK', 'dragAnswer-model03-v2');
// prefabLibrary/models/dragAnswer/dragAnswer-model03-v2.ts

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
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 15:25:58
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var dragAnswer_model03_v2 = /** @class */ (function (_super) {
    __extends(dragAnswer_model03_v2, _super);
    function dragAnswer_model03_v2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 拖拽物数组 */
        _this._colliderBox = [];
        /** 放置区数组 */
        _this._collideredBox = [];
        _this._cache = {};
        _this._scheduleTime = .3;
        _this._dragging = false;
        _this._gameType = 0;
        /** 角色数量 */
        _this._roleCount = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model03_v2.prototype, "state", {
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
    dragAnswer_model03_v2.prototype.onLoad = function () {
        var s = this;
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");
        // 臨時
        // bug 初始设置不播放不生效
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }
        s.createUI();
        s.addEvent();
        // 初始化state
        this._state = {
            drag: "end",
            getDropArr: [],
            collider: s._cache["colliderBox"].map(function (v) { return v; }),
            colliderIndex: null,
            collidered: this._cache["collideredBox"].map(function (v) { return v; }),
            dropArr: [],
            // dragIconsPosArr: dragIconsPosArr,
            title: false,
            submit: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    dragAnswer_model03_v2.prototype.createUI = function () {
        var s = this;
        this._submit = this._view.getChild("submit").asButton;
        if (this._submit)
            this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        var colliderGroup = this._view.getChild("colliderBox").asGroup;
        var collideredGroup = this._view.getChild("collideredBox").asGroup;
        s._cache["colliderBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (s._view.getChildAt(i).group == colliderGroup) {
                var btn = this._view.getChildAt(i).asButton;
                s._cache['colliderBox'].push({ x: btn.x, y: btn.y, collideredIndex: -1, roleType: btn.data });
                btn['collideredIndex'] = -1;
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }
        // console.log('this._colliderBox', s._colliderBox);
        s._cache["collideredBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                var btn = this._view.getChildAt(i).asCom;
                s._cache['collideredBox'].push([]);
                this._collideredBox.push(btn);
            }
        }
        // console.log('this._collideredBox', s._collideredBox);
    };
    dragAnswer_model03_v2.prototype.addEvent = function () {
        // let s = this;
        // s._submitBtn.on(fgui.Event.CLICK, s._clickSubmit, s);
        // s._readTitleBtn.on(fgui.Event.CLICK, s._clickTitle, s);
    };
    dragAnswer_model03_v2.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var s, pathConfig, model, components, Package, GComponent, _a, answer, roleUrl, ae, gameType, roleCount, v, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        s = this;
                        s.pageData = data;
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        GComponent = model.uiPath;
                        _a = model.config, answer = _a.answer, roleUrl = _a.roleUrl, ae = _a.ae, gameType = _a.gameType, roleCount = _a.roleCount;
                        if (model.uiPath) {
                            GComponent = model.uiPath;
                            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                        }
                        /* s._readTitleBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'TitleCom').asCom;
                
                        (s._readTitleBtn.getChild('title') as fgui.GLoader).url = fgui.UIPackage.createObject('t4-trialClass-01', 'title_3').asImage.resourceURL;
                        s._readTitleBtn.x = 20;
                        s._readTitleBtn.y = 50;
                        this._view.addChild(s._readTitleBtn);
                
                
                        s._submitBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'SubmitBtn').asCom;
                        s._submitBtn.x = 1676;
                        s._submitBtn.y = 806;
                        this._view.addChild(s._submitBtn); */
                        if (model.config) {
                            if (answer)
                                s._answer = answer;
                            if (roleUrl)
                                s._roleUrl = roleUrl;
                            if (gameType)
                                s._gameType = gameType;
                            if (roleCount)
                                s._roleCount = roleCount;
                            // 动效注册
                            if (ae) {
                                for (v in ae) {
                                    if (ae[v]) {
                                        this[v] = {};
                                        if (ae[v].component)
                                            this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                                        if (ae[v].pos)
                                            this[v].pos = ae[v].pos;
                                    }
                                }
                            }
                        }
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
    dragAnswer_model03_v2.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    // private _curDragIcon: cc.Node = null;
    // private _offsetPos: cc.Vec2 = new cc.Vec2();
    dragAnswer_model03_v2.prototype._onDragStart = function (evt) {
        var s = this;
        evt.captureTouch();
        s.playSound('ui://rokozlzwkxox11');
        var collider = fgui.GObject.cast(evt.currentTarget);
        s._view.setChildIndex(collider, s._view.numChildren - 1);
        var colliderIndex = s._colliderBox.findIndex(function (v) { return v == collider; });
        var state = globalThis._.cloneDeep(s._state);
        var collideredIndex = state.collider[colliderIndex].collideredIndex;
        if (collideredIndex != -1) {
            var index = state.collidered.findIndex(function (v) { return v.name == collider.name; });
            state.collidered[collideredIndex].splice(index, 1);
            // state.collider[colliderIndex].collideredIndex = -1;
        }
        state.colliderIndex = colliderIndex;
        s.updateState(state);
        s.showTips(true);
    };
    dragAnswer_model03_v2.prototype._onDragMove = function (evt) {
        var s = this;
        s._dragging = true;
    };
    // private dropArr = [];
    dragAnswer_model03_v2.prototype._onDragEnd = function (evt) {
        var _this = this;
        var s = this;
        s.showTips(false);
        s.playSound('ui://rokozlzwku3e2t');
        if (!this._dragging)
            return;
        this._dragging = false;
        var collider = fgui.GObject.cast(evt.currentTarget);
        var colliderIndex = this._colliderBox.findIndex(function (v) { return v == collider; });
        var arr = [];
        var collidered;
        this._collideredBox.forEach(function (v, i) {
            // if (this._belongArea(collider, v, 500) == true) arr.push(v);
            if (s.isCollisionWithRect(v, collider))
                arr.push(v);
        });
        arr.forEach(function (v, i) {
            if (i == 0) {
                collidered = v;
            }
            else {
                var pd = _this._getDistance(collider, arr[i - 1]);
                var cd = _this._getDistance(collider, v);
                if (cd < pd)
                    collidered = v;
            }
        });
        // 放置区索引，定位到放入了那个放置区
        var collideredIndex = this._collideredBox.findIndex(function (v) { return v == collidered; });
        console.log('collideredIndex = ', collideredIndex);
        var state = globalThis._.cloneDeep(this._state);
        // let sss: any = globalThis._.cloneDeep(state);
        // let state = JSON.parse(JSON.stringify(this._state))
        // console.log('origin state = ', this._state.dropArr);// right
        // console.log('clone state = ', state.dropArr);//rihgt
        // console.log('sss = ', sss.dropArr);//wrong
        // dropArr = state.collidered[collideredIndex].map(v => v);
        // console.warn('state.dropArr[0] = ', state.dropArr);
        // let dropArr = JSON.parse(JSON.stringify(state.dropArr));
        var dropArr = state.collidered[collideredIndex];
        // console.error('s.dropArr11111111111111 = ', dropArr);
        var colliderName = collider.name;
        if (collideredIndex != -1) {
            var collideredName = collidered.name;
            console.log('colliderName = ', colliderName);
            console.log('collideredName = ', collideredName);
            // 如果头和脚放置位置不匹配则重置位置 head dropBox1 || foot dropBox2
            var matchFlag = colliderName.indexOf('head') > -1 && collideredName.indexOf('dropBox1') > -1 || colliderName.indexOf('foot') > -1 && collideredName.indexOf('dropBox2') > -1;
            // 1.拿到当前放置区对应的放置区 2.获取对应放置区内的元素 3.判断元素的namee是否为相同role
            var matchCollideredIndex = void 0;
            if (collideredIndex < s._roleCount) {
                matchCollideredIndex = collideredIndex + s._roleCount;
            }
            else {
                matchCollideredIndex = collideredIndex - s._roleCount;
            }
            var matchCollinderArr = state.collidered[matchCollideredIndex];
            if (!matchFlag || matchCollinderArr.length > 0 && !(matchCollinderArr[0].roleType == collider.data)) {
                collideredIndex = -1;
            }
        }
        collider['collideredIndex'] = collideredIndex;
        // let dropArrIndex = dropArr.indexOf(data);//放置区是否已包含当前拖拽元素
        // let dropArrIndex = dropArr.findIndex(v => v.name == colliderName);//放置区是否已包含当前拖拽元素
        // console.warn('dropArrIndex = ', dropArrIndex);
        // 1.重置位置 
        // collideredIndex == -1 || 头和脚放置位置不匹配 || 头和脚无法组合 -> 重置回初始位置
        // collideredIndex != -1 
        // dropArr.length == 1 && 
        // 2.放入放置区
        if (collideredIndex == -1) {
            // reset
            // console.log('reset');
            /* if (dropArrIndex > -1) {
                dropArr.splice(dropArrIndex, 1);
            } */
            state.collider[colliderIndex] = {
                x: s._cache["colliderBox"][colliderIndex].x,
                y: s._cache["colliderBox"][colliderIndex].y,
                collideredIndex: -1,
                roleType: state.collider[colliderIndex].roleType
            };
            /* if (collider.collideredIndex > -1) {
                collideredIndex = collider.collideredIndex;
            } else {
                collideredIndex = 0
            } */
        }
        else {
            if (dropArr.length == 1) {
                // 移除原有的元素
                var existColliderData_1 = dropArr.splice(0, 1);
                console.log(existColliderData_1[0]);
                var existColliderIndex = this._colliderBox.findIndex(function (v, i) { return v.name == existColliderData_1[0].name; });
                state.collider[existColliderIndex] = {
                    x: s._cache["colliderBox"][existColliderIndex].x,
                    y: s._cache["colliderBox"][existColliderIndex].y,
                    collideredIndex: -1,
                    roleType: state.collider[existColliderIndex].roleType
                };
            }
            dropArr.push({
                'name': colliderName,
                roleType: collider.data,
                collideredIndex: collideredIndex
            });
            state.collider[colliderIndex] = {
                x: s._collideredBox[collideredIndex].x,
                y: s._collideredBox[collideredIndex].y,
                collideredIndex: collideredIndex,
                roleType: state.collider[collideredIndex].roleType
            };
            state.collidered[collideredIndex] = dropArr;
        }
        state.drag = "end";
        state.submit = false;
        state.colliderIndex = colliderIndex;
        console.log('给state赋值前的', dropArr);
        // state.dropArr = dropArr;
        console.warn('赋值后的', state.dropArr);
        // state.answer = footNum == s._answer ? true : false;
        s.updateState(state);
        // s._curDragIcon = null;
        console.log('------------------------------------------------');
    };
    dragAnswer_model03_v2.prototype.showTips = function (isShow) {
        var s = this;
        var colliderIndex = s._state.colliderIndex;
        var colliderName = s._colliderBox[colliderIndex].name;
        if (isShow) {
            var filterTag_1;
            if (colliderName.indexOf('head') > -1) {
                filterTag_1 = 'dropBox1';
            }
            else {
                filterTag_1 = 'dropBox2';
            }
            s._collideredBox.forEach(function (v) {
                if (v.name.indexOf(filterTag_1) > -1) {
                    v.getController('c1').selectedIndex = 1;
                }
                else {
                    v.getController('c1').selectedIndex = 0;
                }
            });
        }
        else {
            s._collideredBox.forEach(function (v) {
                v.getController('c1').selectedIndex = 0;
            });
        }
    };
    dragAnswer_model03_v2.prototype._getDistance = function (self, area) {
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance;
    };
    /**
     * 矩形碰撞
     * @param rect1
     * @param rect2
     * @returns
     */
    dragAnswer_model03_v2.prototype.isCollisionWithRect = function (rect1, rect2) {
        if (rect1.x >= rect2.x && rect1.x >= rect2.x + rect2.width) {
            return false;
        }
        else if (rect1.x <= rect2.x && rect1.x + rect1.width <= rect2.x) {
            return false;
        }
        else if (rect1.y >= rect2.y && rect1.y >= rect2.y + rect2.height) {
            return false;
        }
        else if (rect1.y <= rect2.y && rect1.y + rect1.height <= rect2.y) {
            return false;
        }
        return true;
    };
    dragAnswer_model03_v2.prototype._belongArea = function (self, area, gap) {
        if (gap === void 0) { gap = 10; }
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance < gap;
    };
    dragAnswer_model03_v2.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model03_v2.prototype._clickSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var s, state, userAnswer, collideredCount;
            return __generator(this, function (_a) {
                s = this;
                state = globalThis._.cloneDeep(this._state);
                userAnswer = {
                    role1: 0,
                    role2: 0
                };
                collideredCount = 0;
                state.collidered.forEach(function (v, i) {
                    if (v.length > 0)
                        collideredCount++;
                    if (i < (state.collidered.length / 2) >> 0) {
                        var topCollidered = v;
                        var bottomCollidered = state.collidered[i + s._roleCount];
                        if (s._gameType == 1) {
                            if (v.length > 0 && bottomCollidered.length > 0 && v[0].roleType == bottomCollidered[0].roleType) {
                                userAnswer[v[0].roleType]++;
                            }
                        }
                        else if (s._gameType == 2) {
                            if (v.length > 0 && bottomCollidered.length > 0) {
                                userAnswer[bottomCollidered[0].roleType]++;
                            }
                        }
                    }
                });
                console.log(userAnswer);
                console.log(s._answer);
                state.answer = JSON.stringify(userAnswer) === JSON.stringify(s._answer) && collideredCount == (s._answer.role1 + s._answer.role2) * 2;
                state.submit = true;
                this.updateState(state);
                return [2 /*return*/];
            });
        });
    };
    dragAnswer_model03_v2.prototype.showEndAnim = function (callbackFun, callbackThis) {
        if (callbackFun === void 0) { callbackFun = null; }
        if (callbackThis === void 0) { callbackThis = null; }
        var s = this;
        s.state.collider.forEach(function (v, i) {
            if (v['collideredIndex'] == -1) {
                s._colliderBox[i].visible = false;
            }
        });
        s._view.touchable = false;
        s.state.collidered.forEach(function (v, i) {
            if (i < (s.state.collidered.length / 2) >> 0 && v.length > 0) {
                var bottomCollidered = s.state.collidered[i + s._roleCount];
                var roleUrl = s._roleUrl[bottomCollidered[0].roleType];
                console.log(roleUrl);
                var role = fgui.UIPackage.createObjectFromURL(roleUrl);
                role.setPivot(0.5, 0.5, true);
                if (s.pageData.model.uiPath == 'Question4Page01') {
                    role.scaleX = role.scaleY = 0.7;
                }
                role.x = s._collideredBox[i].x;
                role.y = s._collideredBox[i].y + 100;
                role.alpha = 0;
                s._view.addChild(role);
                var offsetY = s.pageData.model.uiPath == 'Question4Page01' ? 220 : 350;
                cc.tween(role).to(1, {
                    alpha: 1
                }).delay(0.5).to(1.5, {
                    y: role.y + offsetY
                }).call(function () {
                    if (callbackFun) {
                        callbackFun.call(callbackThis);
                    }
                }).start();
            }
        });
    };
    // 获取状态
    dragAnswer_model03_v2.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model03_v2.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model03_v2.prototype.updateUi = function (oldState, state) {
        var _this = this;
        var s = this;
        // console.log('updateUi = ', state);
        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
            // state.curDragIcon.x = state.curDragIconsPos.x;
            // state.curDragIcon.y = state.curDragIconsPos.y;
        }
        if (state.drag == "end") {
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                console.log('endddddddddd update ui', state);
                for (var i = 0; i < state.collider.length; i++) {
                    this._colliderBox[i].x = state.collider[i].x;
                    this._colliderBox[i].y = state.collider[i].y;
                }
            }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                console.log('submittttttt');
                if (state.submit) {
                    if (s._gameType == 2 && state.answer) {
                        s.showEndAnim(function () {
                            _this.answerFeedback(state.answer);
                        });
                    }
                    else {
                        this.answerFeedback(state.answer);
                    }
                    // if (state.drops) {
                    // } else {
                    //     this.onHandleGuide();
                    // }
                }
            }
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }
            /* if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    let nv: any = this._colliderBox.map((v: any) => { return { "x": v.x, "y": v.y } });
                    let bool: boolean = s._cache["colliderBox"].every((v: any, i: any) => v.x == nv[i].x && v.y == nv[i].y);
                    bool ? this.onHandleGuide() : this.onFlicker(state.answer);
                }
            } */
        }
    };
    dragAnswer_model03_v2.prototype.playTitle = function (bool) {
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
                        console.log('this._title["_sound"]', this._title["_sound"]);
                        item = fgui.UIPackage.getItemByURL(this._title["_sound"]);
                        return [4 /*yield*/, loadResource(item.file, cc.AudioClip)];
                    case 1:
                        audio = _a.sent();
                        audioId = cc.audioEngine.play(audio, false, 1);
                        cc.audioEngine.setFinishCallback(audioId, function () {
                            _this._c2.selectedIndex = 0;
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
    dragAnswer_model03_v2.prototype.playSound = function (url) {
        var s = this;
        var item = fgui.UIPackage.getItemByURL(url);
        loadResource(item.file, cc.AudioClip).then(function (audio) {
            cc.audioEngine.play(audio, false, 1);
        });
    };
    dragAnswer_model03_v2.prototype.answerFeedback = function (bool) {
        var _this = this;
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
    // 操作提示
    dragAnswer_model03_v2.prototype.onHandleGuide = function () {
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
    // 运行时 禁止操作
    dragAnswer_model03_v2.prototype.forbidHandle = function () {
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
    dragAnswer_model03_v2.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model03_v2.prototype.dragSchedule = function () {
        var s = this;
        if (s._dragging) {
            var state = globalThis._.cloneDeep(s._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
                collideredIndex: state.collider[state.colliderIndex].collideredIndex,
                roleType: state.collider[state.colliderIndex].roleType
            };
            s.updateState(state);
        }
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model03_v2.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model03_v2.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model03_v2.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model03_v2.prototype.onEnable = function () {
        this.registerState();
        this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model03_v2.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model03_v2 = __decorate([
        ccclass
    ], dragAnswer_model03_v2);
    return dragAnswer_model03_v2;
}(cc.Component));
exports.default = dragAnswer_model03_v2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDMtdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQTByQkM7UUFscUJHLFlBQVk7UUFDSixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUMxQixZQUFZO1FBQ0osb0JBQWMsR0FBRyxFQUFFLENBQUM7UUFFcEIsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFJbEIsZUFBUyxHQUFHLENBQUMsQ0FBQztRQUN0QixXQUFXO1FBQ0gsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFJZixZQUFNLEdBQVEsRUFBRSxDQUFDOztJQWlwQjdCLENBQUM7SUEvb0JHLHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFTRCxzQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxLQUFLO1FBQ0wsaUJBQWlCO1FBQ2pCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDOUI7UUFFRCxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFYixXQUFXO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWLElBQUksRUFBRSxLQUFLO1lBQ1gsVUFBVSxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDO1lBQ3BELGFBQWEsRUFBRSxJQUFJO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUM7WUFDM0QsT0FBTyxFQUFFLEVBQUU7WUFDWCxvQ0FBb0M7WUFDcEMsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsS0FBSztZQUNiLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUE7UUFFRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN0RCxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNsRSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4RixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDL0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRW5FLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxhQUFhLEVBQUU7Z0JBQzlDLElBQUksR0FBRyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDOUYsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hELEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdEQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMvQjtTQUNKO1FBQ0Qsb0RBQW9EO1FBRXBELENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxlQUFlLEVBQUU7Z0JBQ25ELElBQUksR0FBRyxHQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQztTQUNKO1FBQ0Qsd0RBQXdEO0lBRTVELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksZ0JBQWdCO1FBQ2hCLHdEQUF3RDtRQUN4RCwwREFBMEQ7SUFDOUQsQ0FBQztJQUVLLG9DQUFJLEdBQVYsVUFBVyxJQUFTOzs7Ozs7d0JBQ1osQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDYixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt3QkFDWixVQUFVLEdBQXdCLElBQUksV0FBNUIsRUFBRSxLQUFLLEdBQWlCLElBQUksTUFBckIsRUFBRSxVQUFVLEdBQUssSUFBSSxXQUFULENBQVU7d0JBQ3pDLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO3dCQUNqQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzt3QkFDMUIsS0FBK0MsS0FBSyxDQUFDLE1BQU0sRUFBekQsTUFBTSxZQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsRUFBRSxRQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsU0FBUyxlQUFBLENBQWtCO3dCQUVoRSxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7NEJBQ2QsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7NEJBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQzt5QkFDdkU7d0JBRUQ7Ozs7Ozs7Ozs7OzZEQVdxQzt3QkFFckMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFOzRCQUNkLElBQUksTUFBTTtnQ0FBRSxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs0QkFDL0IsSUFBSSxPQUFPO2dDQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDOzRCQUNsQyxJQUFJLFFBQVE7Z0NBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7NEJBQ3JDLElBQUksU0FBUztnQ0FBRSxDQUFDLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzs0QkFDeEMsT0FBTzs0QkFDUCxJQUFJLEVBQUUsRUFBRTtnQ0FDSixLQUFTLENBQUMsSUFBSSxFQUFFLEVBQUU7b0NBQ2QsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0NBQ1AsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3Q0FDYixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzRDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7d0NBQ3JHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7NENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO3FDQUMxQztpQ0FDSjs2QkFDSjt5QkFDSjs2QkFFRyxVQUFVLEVBQVYsd0JBQVU7O21DQUNRLFVBQVU7Ozs7Ozs7d0JBQ3BCLGFBQWEsR0FBUSxLQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFZLENBQUM7d0JBQ3RGLHFCQUFNLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBQTs7d0JBQXRELGVBQWUsR0FBUSxTQUErQjt3QkFDL0IscUJBQU0sVUFBVSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFwRixlQUFlLEdBQVEsU0FBNkQ7d0JBQ3hGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUM7Ozs7Ozs7OztLQUd2QztJQUVELDhDQUFjLEdBQWQsVUFBZSxDQUFNO1FBQ2pCLE9BQU87WUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVCxDQUFBO0lBQ0wsQ0FBQztJQUVELHdDQUF3QztJQUN4QywrQ0FBK0M7SUFDdkMsNENBQVksR0FBcEIsVUFBcUIsR0FBZTtRQUNoQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksUUFBUSxFQUFiLENBQWEsQ0FBQyxDQUFDO1FBRWpFLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUNwRSxJQUFJLGVBQWUsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN2QixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksRUFBdkIsQ0FBdUIsQ0FBQyxDQUFBO1lBQ3BFLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRCxzREFBc0Q7U0FDekQ7UUFFRCxLQUFLLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNwQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVPLDJDQUFXLEdBQW5CLFVBQW9CLEdBQWU7UUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELHdCQUF3QjtJQUNoQiwwQ0FBVSxHQUFsQixVQUFtQixHQUFlO1FBQWxDLGlCQXdJQztRQXZJRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBRXZCLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLGFBQWEsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsSUFBSSxRQUFRLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFFbkYsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLElBQUksVUFBZSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07WUFDdkMsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7Z0JBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUdILEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1IsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUNsQjtpQkFBTTtnQkFDSCxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUFFLFVBQVUsR0FBRyxDQUFDLENBQUM7YUFDL0I7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILG9CQUFvQjtRQUNwQixJQUFJLGVBQWUsR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsSUFBSSxVQUFVLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUduRCxJQUFJLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsZ0RBQWdEO1FBQ2hELHNEQUFzRDtRQUN0RCwrREFBK0Q7UUFDL0QsdURBQXVEO1FBQ3ZELDZDQUE2QztRQUU3QywyREFBMkQ7UUFDM0Qsc0RBQXNEO1FBQ3RELDJEQUEyRDtRQUMzRCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELHdEQUF3RDtRQUV4RCxJQUFJLFlBQVksR0FBVyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3pDLElBQUksZUFBZSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksY0FBYyxHQUFXLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELG1EQUFtRDtZQUNuRCxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDO1lBRS9LLHNEQUFzRDtZQUN0RCxJQUFJLG9CQUFvQixTQUFBLENBQUM7WUFDekIsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDaEMsb0JBQW9CLEdBQUcsZUFBZSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsb0JBQW9CLEdBQUcsZUFBZSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7YUFDekQ7WUFDRCxJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUUvRCxJQUFJLENBQUMsU0FBUyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pHLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN4QjtTQUNKO1FBQ0QsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsZUFBZSxDQUFDO1FBRzlDLDREQUE0RDtRQUM1RCxxRkFBcUY7UUFDckYsaURBQWlEO1FBRWpELFVBQVU7UUFDViw0REFBNEQ7UUFDNUQseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQixVQUFVO1FBQ1YsSUFBSSxlQUFlLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDdkIsUUFBUTtZQUNSLHdCQUF3QjtZQUN4Qjs7Z0JBRUk7WUFDSixLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHO2dCQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRO2FBQ25ELENBQUE7WUFDRDs7OztnQkFJSTtTQUNQO2FBQU07WUFDSCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNyQixVQUFVO2dCQUNWLElBQUksbUJBQWlCLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxrQkFBa0IsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFTLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLG1CQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO2dCQUN6SCxLQUFLLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUc7b0JBQ2pDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztvQkFDaEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxlQUFlLEVBQUUsQ0FBQyxDQUFDO29CQUNuQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVE7aUJBQ3hELENBQUE7YUFDSjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtnQkFDdkIsZUFBZSxFQUFFLGVBQWU7YUFDbkMsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRztnQkFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsZUFBZSxFQUFFLGVBQWU7Z0JBQ2hDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVE7YUFDckQsQ0FBQTtZQUNELEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsT0FBTyxDQUFDO1NBQy9DO1FBRUQsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDckIsS0FBSyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsMkJBQTJCO1FBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwQyxzREFBc0Q7UUFDdEQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQix5QkFBeUI7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0lBRXBFLENBQUM7SUFFTyx3Q0FBUSxHQUFoQixVQUFpQixNQUFlO1FBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ25ELElBQUksWUFBWSxHQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTlELElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxXQUFpQixDQUFDO1lBQ3RCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsV0FBUyxHQUFHLFVBQVUsQ0FBQzthQUMxQjtpQkFBTTtnQkFDSCxXQUFTLEdBQUcsVUFBVSxDQUFDO2FBQzFCO1lBQ0QsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFpQjtnQkFDdkMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDaEMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2lCQUMzQztxQkFBTTtvQkFDSCxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7aUJBQzNDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFpQjtnQkFDdkMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFFTCxDQUFDO0lBRU8sNENBQVksR0FBcEIsVUFBcUIsSUFBUyxFQUFFLElBQVM7UUFDckMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxtREFBbUIsR0FBM0IsVUFBNEIsS0FBbUIsRUFBRSxLQUFtQjtRQUNoRSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUN4RCxPQUFPLEtBQUssQ0FBQztTQUNoQjthQUFNLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQy9ELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEUsT0FBTyxLQUFLLENBQUM7U0FDaEI7YUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoRSxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTywyQ0FBVyxHQUFuQixVQUFvQixJQUFTLEVBQUUsSUFBUyxFQUFFLEdBQWdCO1FBQWhCLG9CQUFBLEVBQUEsUUFBZ0I7UUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMxRCxPQUFPLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQUVPLDJDQUFXLEdBQW5CLFVBQW9CLEdBQVE7UUFDeEIsSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVhLDRDQUFZLEdBQTFCLFVBQTJCLEdBQVE7Ozs7Z0JBQzNCLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ1QsS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakQsVUFBVSxHQUFHO29CQUNiLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNYLENBQUM7Z0JBQ0UsZUFBZSxHQUFHLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQUUsZUFBZSxFQUFFLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN4QyxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7d0JBQ3RCLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFOzRCQUNsQixJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0NBQzlGLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs2QkFDL0I7eUJBQ0o7NkJBQU0sSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTs0QkFDekIsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dDQUM3QyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs2QkFDOUM7eUJBQ0o7cUJBRUo7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXZCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxlQUFlLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEksS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7S0FHM0I7SUFFTywyQ0FBVyxHQUFuQixVQUFvQixXQUE0QixFQUFFLFlBQXdCO1FBQXRELDRCQUFBLEVBQUEsa0JBQTRCO1FBQUUsNkJBQUEsRUFBQSxtQkFBd0I7UUFDdEUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRCxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzVELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksaUJBQWlCLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7aUJBQ25DO2dCQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdkUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUNqQixLQUFLLEVBQUUsQ0FBQztpQkFDWCxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2xCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU87aUJBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ0osSUFBSSxXQUFXLEVBQUU7d0JBQ2IsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDbEM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELE9BQU87SUFDUCx3Q0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDUiwyQ0FBVyxHQUFYLFVBQVksUUFBYTtRQUNyQixJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQUUsT0FBTztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBR0QsUUFBUTtJQUNSLHdDQUFRLEdBQVIsVUFBUyxRQUFhLEVBQUUsS0FBVTtRQUFsQyxpQkFxREM7UUFwREcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IscUNBQXFDO1FBRXJDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpGLGlEQUFpRDtZQUNqRCxpREFBaUQ7U0FDcEQ7UUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0o7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBRTVCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDZCxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ2xDLENBQUMsQ0FBQyxXQUFXLENBQUM7NEJBQ1YsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3RDLENBQUMsQ0FBQyxDQUFDO3FCQUNOO3lCQUFNO3dCQUNILElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNyQztvQkFDRCxxQkFBcUI7b0JBQ3JCLFdBQVc7b0JBQ1gsNEJBQTRCO29CQUM1QixJQUFJO2lCQUNQO2FBQ0o7WUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1lBRUQ7Ozs7Ozs7Z0JBT0k7U0FFUDtJQUNMLENBQUM7SUFFSyx5Q0FBUyxHQUFmLFVBQWdCLElBQWE7Ozs7Ozs7d0JBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBRWxDLElBQUksRUFBSix3QkFBSTt3QkFDSixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUV4RCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxxQkFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFqRSxLQUFLLEdBQWlCLFNBQTJDO3dCQUNqRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDbkQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7NEJBQ3RDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzs0QkFDM0IsSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUNyRCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs0QkFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDNUIsQ0FBQyxDQUFDLENBQUM7Ozt3QkFFSCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs7Ozs7O0tBRWxDO0lBRUQseUNBQVMsR0FBVCxVQUFVLEdBQVc7UUFDakIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDN0MsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4Q0FBYyxHQUFkLFVBQWUsSUFBYTtRQUE1QixpQkFlQztRQWRHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDM0IsSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksVUFBVSxHQUFRLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUUzQyxVQUFVLENBQUM7WUFDUCxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsT0FBTztJQUNQLDZDQUFhLEdBQWI7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUM5QixJQUFJLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2SCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1SDthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuRztRQUVELElBQUksQ0FBQyxHQUFvQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lB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QVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUF6ckJnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQTByQnpDO0lBQUQsNEJBQUM7Q0ExckJELEFBMHJCQyxDQTFyQmtELEVBQUUsQ0FBQyxTQUFTLEdBMHJCOUQ7a0JBMXJCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYWdBbnN3ZXJNb2RlbDAzQmFzZSBmcm9tIFwiLi9EcmFnQW5zd2VyTW9kZWwwM0Jhc2VcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiBQbGVhc2Ugc2V0IExhc3RFZGl0b3JzXHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTcgMTU6MjU6NThcclxuICovXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDNfdjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ0J0bjogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfYnRuQm94OiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnQm94OiBmZ3VpLkdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyb3BCb3g6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF90aXRsZVRyaWdnZXI6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuICAgIHByaXZhdGUgbGluZUJsaW5rOiBhbnk7XHJcblxyXG4gICAgLy8g6L+c56iL5Yqo5oCB57uE5Lu2XHJcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBhbnk7XHJcblxyXG4gICAgLyoqIOaLluaLveeJqeaVsOe7hCAqL1xyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJCb3ggPSBbXTtcclxuICAgIC8qKiDmlL7nva7ljLrmlbDnu4QgKi9cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyZWRCb3ggPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jYWNoZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVUaW1lID0gLjM7XHJcbiAgICBwcml2YXRlIF9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlcjtcclxuICAgIHByaXZhdGUgX3JvbGVVcmw7XHJcbiAgICBwcml2YXRlIF9nYW1lVHlwZSA9IDA7XHJcbiAgICAvKiog6KeS6Imy5pWw6YePICovXHJcbiAgICBwcml2YXRlIF9yb2xlQ291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBwYWdlRGF0YTogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICB0aGlzLl93b3JsZFJvb3QgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLl92aWV3LndpZHRoKSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcbiAgICAgICAgLy8g6Ieo5pmCXHJcbiAgICAgICAgLy8gYnVnIOWIneWni+iuvue9ruS4jeaSreaUvuS4jeeUn+aViFxyXG4gICAgICAgIGlmICh0aGlzLl9jMikge1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzLmNyZWF0ZVVJKCk7XHJcbiAgICAgICAgcy5hZGRFdmVudCgpO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJZzdGF0ZVxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xyXG4gICAgICAgICAgICBkcmFnOiBcImVuZFwiLFxyXG4gICAgICAgICAgICBnZXREcm9wQXJyOiBbXSxcclxuICAgICAgICAgICAgY29sbGlkZXI6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0ubWFwKCh2OiBhbnkpID0+IHYpLC8v5ouW5ou954mp55qE5L2N572u5pWw57uEXHJcbiAgICAgICAgICAgIGNvbGxpZGVySW5kZXg6IG51bGwsLy/lvZPliY3mi5bmi73nianlnKjmlbDnu4TlhoXnmoTntKLlvJVcclxuICAgICAgICAgICAgY29sbGlkZXJlZDogdGhpcy5fY2FjaGVbXCJjb2xsaWRlcmVkQm94XCJdLm1hcCgodjogYW55KSA9PiB2KSwvL+S6jOe7tOaVsOe7hO+8jOWtmOaUvuavj+S4quaUvue9ruWMuuWvueW6lOeahOiiq+aUvue9ruWFg+e0oFxyXG4gICAgICAgICAgICBkcm9wQXJyOiBbXSxcclxuICAgICAgICAgICAgLy8gZHJhZ0ljb25zUG9zQXJyOiBkcmFnSWNvbnNQb3NBcnIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VibWl0OiBmYWxzZSxcclxuICAgICAgICAgICAgYW5zd2VyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Li05pe2IOemgeatouaTjeS9nOacn+mXtCDliIfpobVcclxuICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVVSSgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpZGVyR3JvdXAgPSB0aGlzLl92aWV3LmdldENoaWxkKFwiY29sbGlkZXJCb3hcIikuYXNHcm91cDtcclxuICAgICAgICBsZXQgY29sbGlkZXJlZEdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyZWRCb3hcIikuYXNHcm91cDtcclxuXHJcbiAgICAgICAgcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmlldy5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzLl92aWV3LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gY29sbGlkZXJHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjogZmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmFzQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgcy5fY2FjaGVbJ2NvbGxpZGVyQm94J10ucHVzaCh7IHg6IGJ0bi54LCB5OiBidG4ueSwgY29sbGlkZXJlZEluZGV4OiAtMSwgcm9sZVR5cGU6IGJ0bi5kYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgYnRuWydjb2xsaWRlcmVkSW5kZXgnXSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgYnRuLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5UT1VDSF9CRUdJTiwgdGhpcy5fb25EcmFnU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfTU9WRSwgdGhpcy5fb25EcmFnTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveC5wdXNoKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuX2NvbGxpZGVyQm94Jywgcy5fY29sbGlkZXJCb3gpO1xyXG5cclxuICAgICAgICBzLl9jYWNoZVtcImNvbGxpZGVyZWRCb3hcIl0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyZWRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjogZmd1aS5HQ29tcG9uZW50ID0gdGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgcy5fY2FjaGVbJ2NvbGxpZGVyZWRCb3gnXS5wdXNoKFtdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyZWRCb3gucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLl9jb2xsaWRlcmVkQm94Jywgcy5fY29sbGlkZXJlZEJveCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50KCkge1xyXG4gICAgICAgIC8vIGxldCBzID0gdGhpcztcclxuICAgICAgICAvLyBzLl9zdWJtaXRCdG4ub24oZmd1aS5FdmVudC5DTElDSywgcy5fY2xpY2tTdWJtaXQsIHMpO1xyXG4gICAgICAgIC8vIHMuX3JlYWRUaXRsZUJ0bi5vbihmZ3VpLkV2ZW50LkNMSUNLLCBzLl9jbGlja1RpdGxlLCBzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBzLnBhZ2VEYXRhID0gZGF0YTtcclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcbiAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgbGV0IHsgYW5zd2VyLCByb2xlVXJsLCBhZSwgZ2FtZVR5cGUsIHJvbGVDb3VudCB9ID0gbW9kZWwuY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAobW9kZWwudWlQYXRoKSB7XHJcbiAgICAgICAgICAgIEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBzLl9yZWFkVGl0bGVCdG4gPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoJ3Q0LXRyaWFsQ2xhc3MtMDEnLCAnVGl0bGVDb20nKS5hc0NvbTtcclxuXHJcbiAgICAgICAgKHMuX3JlYWRUaXRsZUJ0bi5nZXRDaGlsZCgndGl0bGUnKSBhcyBmZ3VpLkdMb2FkZXIpLnVybCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdCgndDQtdHJpYWxDbGFzcy0wMScsICd0aXRsZV8zJykuYXNJbWFnZS5yZXNvdXJjZVVSTDtcclxuICAgICAgICBzLl9yZWFkVGl0bGVCdG4ueCA9IDIwO1xyXG4gICAgICAgIHMuX3JlYWRUaXRsZUJ0bi55ID0gNTA7XHJcbiAgICAgICAgdGhpcy5fdmlldy5hZGRDaGlsZChzLl9yZWFkVGl0bGVCdG4pO1xyXG5cclxuXHJcbiAgICAgICAgcy5fc3VibWl0QnRuID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KCd0NC10cmlhbENsYXNzLTAxJywgJ1N1Ym1pdEJ0bicpLmFzQ29tO1xyXG4gICAgICAgIHMuX3N1Ym1pdEJ0bi54ID0gMTY3NjtcclxuICAgICAgICBzLl9zdWJtaXRCdG4ueSA9IDgwNjtcclxuICAgICAgICB0aGlzLl92aWV3LmFkZENoaWxkKHMuX3N1Ym1pdEJ0bik7ICovXHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKGFuc3dlcikgcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICBpZiAocm9sZVVybCkgcy5fcm9sZVVybCA9IHJvbGVVcmw7XHJcbiAgICAgICAgICAgIGlmIChnYW1lVHlwZSkgcy5fZ2FtZVR5cGUgPSBnYW1lVHlwZTtcclxuICAgICAgICAgICAgaWYgKHJvbGVDb3VudCkgcy5fcm9sZUNvdW50ID0gcm9sZUNvdW50O1xyXG4gICAgICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICAgICAgaWYgKGFlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JpZ2luVmFsdWUodjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdi54LFxyXG4gICAgICAgICAgICB5OiB2LnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBfY3VyRHJhZ0ljb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBfb2Zmc2V0UG9zOiBjYy5WZWMyID0gbmV3IGNjLlZlYzIoKTtcclxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBldnQuY2FwdHVyZVRvdWNoKCk7XHJcbiAgICAgICAgcy5wbGF5U291bmQoJ3VpOi8vcm9rb3psendreG94MTEnKTtcclxuICAgICAgICBsZXQgY29sbGlkZXIgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgcy5fdmlldy5zZXRDaGlsZEluZGV4KGNvbGxpZGVyLCBzLl92aWV3Lm51bUNoaWxkcmVuIC0gMSk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVySW5kZXggPSBzLl9jb2xsaWRlckJveC5maW5kSW5kZXgodiA9PiB2ID09IGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgY29sbGlkZXJlZEluZGV4ID0gc3RhdGUuY29sbGlkZXJbY29sbGlkZXJJbmRleF0uY29sbGlkZXJlZEluZGV4O1xyXG4gICAgICAgIGlmIChjb2xsaWRlcmVkSW5kZXggIT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gc3RhdGUuY29sbGlkZXJlZC5maW5kSW5kZXgodiA9PiB2Lm5hbWUgPT0gY29sbGlkZXIubmFtZSlcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJlZFtjb2xsaWRlcmVkSW5kZXhdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlLmNvbGxpZGVyW2NvbGxpZGVySW5kZXhdLmNvbGxpZGVyZWRJbmRleCA9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJJbmRleCA9IGNvbGxpZGVySW5kZXg7XHJcbiAgICAgICAgcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgcy5zaG93VGlwcyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBzLl9kcmFnZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBkcm9wQXJyID0gW107XHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHMuc2hvd1RpcHMoZmFsc2UpO1xyXG4gICAgICAgIHMucGxheVNvdW5kKCd1aTovL3Jva296bHp3a3UzZTJ0Jyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlcjogYW55ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlckJveC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjb2xsaWRlcik7XHJcblxyXG4gICAgICAgIGxldCBhcnI6IGFueSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkOiBhbnk7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXJlZEJveC5mb3JFYWNoKCh2OiBhbnksIGk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5fYmVsb25nQXJlYShjb2xsaWRlciwgdiwgNTAwKSA9PSB0cnVlKSBhcnIucHVzaCh2KTtcclxuICAgICAgICAgICAgaWYgKHMuaXNDb2xsaXNpb25XaXRoUmVjdCh2LCBjb2xsaWRlcikpIGFyci5wdXNoKHYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgYXJyLmZvckVhY2goKHY6IGFueSwgaTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWQgPSB2O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBkID0gdGhpcy5fZ2V0RGlzdGFuY2UoY29sbGlkZXIsIGFycltpIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNkID0gdGhpcy5fZ2V0RGlzdGFuY2UoY29sbGlkZXIsIHYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNkIDwgcGQpIGNvbGxpZGVyZWQgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOaUvue9ruWMuue0ouW8le+8jOWumuS9jeWIsOaUvuWFpeS6humCo+S4quaUvue9ruWMulxyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkSW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyZWRCb3guZmluZEluZGV4KCh2OiBhbnkpID0+IHYgPT0gY29sbGlkZXJlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbGxpZGVyZWRJbmRleCA9ICcsIGNvbGxpZGVyZWRJbmRleCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIC8vIGxldCBzc3M6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAoc3RhdGUpO1xyXG4gICAgICAgIC8vIGxldCBzdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RhdGUpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvcmlnaW4gc3RhdGUgPSAnLCB0aGlzLl9zdGF0ZS5kcm9wQXJyKTsvLyByaWdodFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbG9uZSBzdGF0ZSA9ICcsIHN0YXRlLmRyb3BBcnIpOy8vcmloZ3RcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3NzID0gJywgc3NzLmRyb3BBcnIpOy8vd3JvbmdcclxuXHJcbiAgICAgICAgLy8gZHJvcEFyciA9IHN0YXRlLmNvbGxpZGVyZWRbY29sbGlkZXJlZEluZGV4XS5tYXAodiA9PiB2KTtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3N0YXRlLmRyb3BBcnJbMF0gPSAnLCBzdGF0ZS5kcm9wQXJyKTtcclxuICAgICAgICAvLyBsZXQgZHJvcEFyciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUuZHJvcEFycikpO1xyXG4gICAgICAgIGxldCBkcm9wQXJyID0gc3RhdGUuY29sbGlkZXJlZFtjb2xsaWRlcmVkSW5kZXhdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ3MuZHJvcEFycjExMTExMTExMTExMTExID0gJywgZHJvcEFycik7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlck5hbWU6IHN0cmluZyA9IGNvbGxpZGVyLm5hbWU7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyZWRJbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXJlZE5hbWU6IHN0cmluZyA9IGNvbGxpZGVyZWQubmFtZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbGxpZGVyTmFtZSA9ICcsIGNvbGxpZGVyTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsaWRlcmVkTmFtZSA9ICcsIGNvbGxpZGVyZWROYW1lKTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5aS05ZKM6ISa5pS+572u5L2N572u5LiN5Yy56YWN5YiZ6YeN572u5L2N572uIGhlYWQgZHJvcEJveDEgfHwgZm9vdCBkcm9wQm94MlxyXG4gICAgICAgICAgICBsZXQgbWF0Y2hGbGFnID0gY29sbGlkZXJOYW1lLmluZGV4T2YoJ2hlYWQnKSA+IC0xICYmIGNvbGxpZGVyZWROYW1lLmluZGV4T2YoJ2Ryb3BCb3gxJykgPiAtIDEgfHwgY29sbGlkZXJOYW1lLmluZGV4T2YoJ2Zvb3QnKSA+IC0xICYmIGNvbGxpZGVyZWROYW1lLmluZGV4T2YoJ2Ryb3BCb3gyJykgPiAtIDE7XHJcblxyXG4gICAgICAgICAgICAvLyAxLuaLv+WIsOW9k+WJjeaUvue9ruWMuuWvueW6lOeahOaUvue9ruWMuiAyLuiOt+WPluWvueW6lOaUvue9ruWMuuWGheeahOWFg+e0oCAzLuWIpOaWreWFg+e0oOeahG5hbWVl5piv5ZCm5Li655u45ZCMcm9sZVxyXG4gICAgICAgICAgICBsZXQgbWF0Y2hDb2xsaWRlcmVkSW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlcmVkSW5kZXggPCBzLl9yb2xlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoQ29sbGlkZXJlZEluZGV4ID0gY29sbGlkZXJlZEluZGV4ICsgcy5fcm9sZUNvdW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hDb2xsaWRlcmVkSW5kZXggPSBjb2xsaWRlcmVkSW5kZXggLSBzLl9yb2xlQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG1hdGNoQ29sbGluZGVyQXJyID0gc3RhdGUuY29sbGlkZXJlZFttYXRjaENvbGxpZGVyZWRJbmRleF07XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1hdGNoRmxhZyB8fCBtYXRjaENvbGxpbmRlckFyci5sZW5ndGggPiAwICYmICEobWF0Y2hDb2xsaW5kZXJBcnJbMF0ucm9sZVR5cGUgPT0gY29sbGlkZXIuZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGxpZGVyWydjb2xsaWRlcmVkSW5kZXgnXSA9IGNvbGxpZGVyZWRJbmRleDtcclxuXHJcblxyXG4gICAgICAgIC8vIGxldCBkcm9wQXJySW5kZXggPSBkcm9wQXJyLmluZGV4T2YoZGF0YSk7Ly/mlL7nva7ljLrmmK/lkKblt7LljIXlkKvlvZPliY3mi5bmi73lhYPntKBcclxuICAgICAgICAvLyBsZXQgZHJvcEFyckluZGV4ID0gZHJvcEFyci5maW5kSW5kZXgodiA9PiB2Lm5hbWUgPT0gY29sbGlkZXJOYW1lKTsvL+aUvue9ruWMuuaYr+WQpuW3suWMheWQq+W9k+WJjeaLluaLveWFg+e0oFxyXG4gICAgICAgIC8vIGNvbnNvbGUud2FybignZHJvcEFyckluZGV4ID0gJywgZHJvcEFyckluZGV4KTtcclxuXHJcbiAgICAgICAgLy8gMS7ph43nva7kvY3nva4gXHJcbiAgICAgICAgLy8gY29sbGlkZXJlZEluZGV4ID09IC0xIHx8IOWktOWSjOiEmuaUvue9ruS9jee9ruS4jeWMuemFjSB8fCDlpLTlkozohJrml6Dms5Xnu4TlkIggLT4g6YeN572u5Zue5Yid5aeL5L2N572uXHJcbiAgICAgICAgLy8gY29sbGlkZXJlZEluZGV4ICE9IC0xIFxyXG4gICAgICAgIC8vIGRyb3BBcnIubGVuZ3RoID09IDEgJiYgXHJcbiAgICAgICAgLy8gMi7mlL7lhaXmlL7nva7ljLpcclxuICAgICAgICBpZiAoY29sbGlkZXJlZEluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNldCcpO1xyXG4gICAgICAgICAgICAvKiBpZiAoZHJvcEFyckluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGRyb3BBcnIuc3BsaWNlKGRyb3BBcnJJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiBzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLnksXHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkSW5kZXg6IC0xLFxyXG4gICAgICAgICAgICAgICAgcm9sZVR5cGU6IHN0YXRlLmNvbGxpZGVyW2NvbGxpZGVySW5kZXhdLnJvbGVUeXBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogaWYgKGNvbGxpZGVyLmNvbGxpZGVyZWRJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkSW5kZXggPSBjb2xsaWRlci5jb2xsaWRlcmVkSW5kZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkSW5kZXggPSAwXHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZHJvcEFyci5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8g56e76Zmk5Y6f5pyJ55qE5YWD57SgXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RDb2xsaWRlckRhdGEgPSBkcm9wQXJyLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4aXN0Q29sbGlkZXJEYXRhWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RDb2xsaWRlckluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlckJveC5maW5kSW5kZXgoKHY6IGFueSwgaTogbnVtYmVyKSA9PiB2Lm5hbWUgPT0gZXhpc3RDb2xsaWRlckRhdGFbMF0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltleGlzdENvbGxpZGVySW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bZXhpc3RDb2xsaWRlckluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IHMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bZXhpc3RDb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZVR5cGU6IHN0YXRlLmNvbGxpZGVyW2V4aXN0Q29sbGlkZXJJbmRleF0ucm9sZVR5cGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcm9wQXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBjb2xsaWRlck5hbWUsXHJcbiAgICAgICAgICAgICAgICByb2xlVHlwZTogY29sbGlkZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleDogY29sbGlkZXJlZEluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltjb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgeTogcy5fY29sbGlkZXJlZEJveFtjb2xsaWRlcmVkSW5kZXhdLnksXHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlcmVkSW5kZXg6IGNvbGxpZGVyZWRJbmRleCxcclxuICAgICAgICAgICAgICAgIHJvbGVUeXBlOiBzdGF0ZS5jb2xsaWRlcltjb2xsaWRlcmVkSW5kZXhdLnJvbGVUeXBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJlZFtjb2xsaWRlcmVkSW5kZXhdID0gZHJvcEFycjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLmRyYWcgPSBcImVuZFwiO1xyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVySW5kZXggPSBjb2xsaWRlckluZGV4O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnu5lzdGF0Zei1i+WAvOWJjeeahCcsIGRyb3BBcnIpO1xyXG4gICAgICAgIC8vIHN0YXRlLmRyb3BBcnIgPSBkcm9wQXJyO1xyXG4gICAgICAgIGNvbnNvbGUud2Fybign6LWL5YC85ZCO55qEJywgc3RhdGUuZHJvcEFycik7XHJcblxyXG4gICAgICAgIC8vIHN0YXRlLmFuc3dlciA9IGZvb3ROdW0gPT0gcy5fYW5zd2VyID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIC8vIHMuX2N1ckRyYWdJY29uID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1RpcHMoaXNTaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4OiBudW1iZXIgPSBzLl9zdGF0ZS5jb2xsaWRlckluZGV4O1xyXG4gICAgICAgIGxldCBjb2xsaWRlck5hbWU6IHN0cmluZyA9IHMuX2NvbGxpZGVyQm94W2NvbGxpZGVySW5kZXhdLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgbGV0IGZpbHRlclRhZzogc3RyaW5nO1xyXG4gICAgICAgICAgICBpZiAoY29sbGlkZXJOYW1lLmluZGV4T2YoJ2hlYWQnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJUYWcgPSAnZHJvcEJveDEnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyVGFnID0gJ2Ryb3BCb3gyJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLl9jb2xsaWRlcmVkQm94LmZvckVhY2goKHY6IGZndWkuR0NvbWJvQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodi5uYW1lLmluZGV4T2YoZmlsdGVyVGFnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi5nZXRDb250cm9sbGVyKCdjMScpLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2LmdldENvbnRyb2xsZXIoJ2MxJykuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHMuX2NvbGxpZGVyZWRCb3guZm9yRWFjaCgodjogZmd1aS5HQ29tYm9Cb3gpID0+IHtcclxuICAgICAgICAgICAgICAgIHYuZ2V0Q29udHJvbGxlcignYzEnKS5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXREaXN0YW5jZShzZWxmOiBhbnksIGFyZWE6IGFueSkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IChzZWxmLnggKyBzZWxmLndpZHRoIC8gMikgLSAoYXJlYS54ICsgYXJlYS53aWR0aCAvIDIpO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAoc2VsZi55ICsgc2VsZi5oZWlnaHQgLyAyKSAtIChhcmVhLnkgKyBhcmVhLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCh3aWR0aCAqIHdpZHRoICsgaGVpZ2h0ICogaGVpZ2h0KTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnn6nlvaLnorDmkp5cclxuICAgICAqIEBwYXJhbSByZWN0MSBcclxuICAgICAqIEBwYXJhbSByZWN0MiBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzQ29sbGlzaW9uV2l0aFJlY3QocmVjdDE6IGZndWkuR09iamVjdCwgcmVjdDI6IGZndWkuR09iamVjdCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChyZWN0MS54ID49IHJlY3QyLnggJiYgcmVjdDEueCA+PSByZWN0Mi54ICsgcmVjdDIud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVjdDEueCA8PSByZWN0Mi54ICYmIHJlY3QxLnggKyByZWN0MS53aWR0aCA8PSByZWN0Mi54KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlY3QxLnkgPj0gcmVjdDIueSAmJiByZWN0MS55ID49IHJlY3QyLnkgKyByZWN0Mi5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVjdDEueSA8PSByZWN0Mi55ICYmIHJlY3QxLnkgKyByZWN0MS5oZWlnaHQgPD0gcmVjdDIueSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2JlbG9uZ0FyZWEoc2VsZjogYW55LCBhcmVhOiBhbnksIGdhcDogbnVtYmVyID0gMTApIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgZ2FwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrVGl0bGUoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnRpdGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9jbGlja1N1Ym1pdChldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCB1c2VyQW5zd2VyID0ge1xyXG4gICAgICAgICAgICByb2xlMTogMCxcclxuICAgICAgICAgICAgcm9sZTI6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkQ291bnQgPSAwO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVyZWQuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiAwKSBjb2xsaWRlcmVkQ291bnQrKztcclxuICAgICAgICAgICAgaWYgKGkgPCAoc3RhdGUuY29sbGlkZXJlZC5sZW5ndGggLyAyKSA+PiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wQ29sbGlkZXJlZCA9IHY7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm90dG9tQ29sbGlkZXJlZCA9IHN0YXRlLmNvbGxpZGVyZWRbaSArIHMuX3JvbGVDb3VudF07XHJcbiAgICAgICAgICAgICAgICBpZiAocy5fZ2FtZVR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA+IDAgJiYgYm90dG9tQ29sbGlkZXJlZC5sZW5ndGggPiAwICYmIHZbMF0ucm9sZVR5cGUgPT0gYm90dG9tQ29sbGlkZXJlZFswXS5yb2xlVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyQW5zd2VyW3ZbMF0ucm9sZVR5cGVdKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzLl9nYW1lVHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gMCAmJiBib3R0b21Db2xsaWRlcmVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckFuc3dlcltib3R0b21Db2xsaWRlcmVkWzBdLnJvbGVUeXBlXSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJBbnN3ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHMuX2Fuc3dlcik7XHJcblxyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IEpTT04uc3RyaW5naWZ5KHVzZXJBbnN3ZXIpID09PSBKU09OLnN0cmluZ2lmeShzLl9hbnN3ZXIpICYmIGNvbGxpZGVyZWRDb3VudCA9PSAocy5fYW5zd2VyLnJvbGUxICsgcy5fYW5zd2VyLnJvbGUyKSAqIDI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RW5kQW5pbShjYWxsYmFja0Z1bjogRnVuY3Rpb24gPSBudWxsLCBjYWxsYmFja1RoaXM6IGFueSA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgcy5zdGF0ZS5jb2xsaWRlci5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Wydjb2xsaWRlcmVkSW5kZXgnXSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcy5fY29sbGlkZXJCb3hbaV0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcy5fdmlldy50b3VjaGFibGUgPSBmYWxzZTtcclxuICAgICAgICBzLnN0YXRlLmNvbGxpZGVyZWQuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA8IChzLnN0YXRlLmNvbGxpZGVyZWQubGVuZ3RoIC8gMikgPj4gMCAmJiB2Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBib3R0b21Db2xsaWRlcmVkID0gcy5zdGF0ZS5jb2xsaWRlcmVkW2kgKyBzLl9yb2xlQ291bnRdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvbGVVcmwgPSBzLl9yb2xlVXJsW2JvdHRvbUNvbGxpZGVyZWRbMF0ucm9sZVR5cGVdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm9sZVVybCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdEZyb21VUkwocm9sZVVybCk7XHJcbiAgICAgICAgICAgICAgICByb2xlLnNldFBpdm90KDAuNSwgMC41LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChzLnBhZ2VEYXRhLm1vZGVsLnVpUGF0aCA9PSAnUXVlc3Rpb240UGFnZTAxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGUuc2NhbGVYID0gcm9sZS5zY2FsZVkgPSAwLjc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb2xlLnggPSBzLl9jb2xsaWRlcmVkQm94W2ldLng7XHJcbiAgICAgICAgICAgICAgICByb2xlLnkgPSBzLl9jb2xsaWRlcmVkQm94W2ldLnkgKyAxMDA7XHJcbiAgICAgICAgICAgICAgICByb2xlLmFscGhhID0gMDtcclxuICAgICAgICAgICAgICAgIHMuX3ZpZXcuYWRkQ2hpbGQocm9sZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldFkgPSBzLnBhZ2VEYXRhLm1vZGVsLnVpUGF0aCA9PSAnUXVlc3Rpb240UGFnZTAxJyA/IDIyMCA6IDM1MDtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHJvbGUpLnRvKDEsIHtcclxuICAgICAgICAgICAgICAgICAgICBhbHBoYTogMVxyXG4gICAgICAgICAgICAgICAgfSkuZGVsYXkoMC41KS50bygxLjUsIHtcclxuICAgICAgICAgICAgICAgICAgICB5OiByb2xlLnkgKyBvZmZzZXRZXHJcbiAgICAgICAgICAgICAgICB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tGdW4uY2FsbChjYWxsYmFja1RoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShvbGRTdGF0ZTogYW55LCBzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVVaSA9ICcsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmRyYWcgPT0gXCJtb3ZlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueCA9IHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnkgPSBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XS55O1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUuY3VyRHJhZ0ljb24ueCA9IHN0YXRlLmN1ckRyYWdJY29uc1Bvcy54O1xyXG4gICAgICAgICAgICAvLyBzdGF0ZS5jdXJEcmFnSWNvbi55ID0gc3RhdGUuY3VyRHJhZ0ljb25zUG9zLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcImVuZFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuY29sbGlkZXIsIHN0YXRlLmNvbGxpZGVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VuZGRkZGRkZGRkZCB1cGRhdGUgdWknLCBzdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb2xsaWRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLnggPSBzdGF0ZS5jb2xsaWRlcltpXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLnkgPSBzdGF0ZS5jb2xsaWRlcltpXS55O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0dHR0dHR0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLl9nYW1lVHlwZSA9PSAyICYmIHN0YXRlLmFuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzLnNob3dFbmRBbmltKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoc3RhdGUuZHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm9uSGFuZGxlR3VpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUudGl0bGUsIHN0YXRlLnRpdGxlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5VGl0bGUoc3RhdGUudGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKiBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNrmNvbGxpZGVyIOWIneWni+S9jee9riDliKTmlq0g5piv5ZCm6KKr5pON5L2c6L+HXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG52OiBhbnkgPSB0aGlzLl9jb2xsaWRlckJveC5tYXAoKHY6IGFueSkgPT4geyByZXR1cm4geyBcInhcIjogdi54LCBcInlcIjogdi55IH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2w6IGJvb2xlYW4gPSBzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdLmV2ZXJ5KCh2OiBhbnksIGk6IGFueSkgPT4gdi54ID09IG52W2ldLnggJiYgdi55ID09IG52W2ldLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb2wgPyB0aGlzLm9uSGFuZGxlR3VpZGUoKSA6IHRoaXMub25GbGlja2VyKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuXHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5fdGl0bGVbXCJfc291bmRcIl0nLCB0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbzogY2MuQXVkaW9DbGlwID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlTb3VuZCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh1cmwpO1xyXG4gICAgICAgIGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCkudGhlbigoYXVkaW8pID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDov5DooYzml7Yg56aB5q2i5pON5L2cXHJcbiAgICBmb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoIWhhbmRsZU1hc2spIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSBuZXcgY2MuTm9kZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5wYXJlbnQgPSB0aGlzLl93b3JsZFJvb3Q7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sud2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueCA9IDk2MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay55ID0gNTQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Li05pe2XHJcbiAgICAvLyDmi5bmi73lrprml7blmahcclxuICAgIGRyYWdTY2hlZHVsZSgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcChzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyYWcgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueSxcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWRJbmRleDogc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0uY29sbGlkZXJlZEluZGV4LFxyXG4gICAgICAgICAgICAgICAgcm9sZVR5cGU6IHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdLnJvbGVUeXBlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZHJhZ1NjaGVkdWxlLCB0aGlzLl9zY2hlZHVsZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/components/feedback/javascripts/feedback-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35aa1v1qOxNSpoXD1Ook21Z', 'feedback-model01-v1');
// prefabLibrary/components/feedback/javascripts/feedback-model01-v1.ts

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
 * @Date: 2021-04-26 09:54:41
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-13 16:48:13
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var feedback_model01_v1 = /** @class */ (function (_super) {
    __extends(feedback_model01_v1, _super);
    function feedback_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rightAudio = null;
        _this.errorAudio = null;
        _this._answer = false;
        return _this;
    }
    feedback_model01_v1.prototype.onLoad = function () {
        var spine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        this.playAudio(this._answer ? this.rightAudio : this.errorAudio);
        spine.setSkin(this._answer ? "win" : "lose");
        spine.setAnimation(0, this._answer ? 'win' : 'lose', true);
    };
    feedback_model01_v1.prototype.init = function (bool) {
        this._answer = bool;
    };
    feedback_model01_v1.prototype.playAudio = function (audio) {
        cc.audioEngine.stopAll();
        cc.audioEngine.play(audio, false, 1);
    };
    __decorate([
        property({
            type: cc.AudioClip,
            displayName: '正确音效'
        })
    ], feedback_model01_v1.prototype, "rightAudio", void 0);
    __decorate([
        property({
            type: cc.AudioClip,
            displayName: '错误音效'
        })
    ], feedback_model01_v1.prototype, "errorAudio", void 0);
    feedback_model01_v1 = __decorate([
        ccclass
    ], feedback_model01_v1);
    return feedback_model01_v1;
}(cc.Component));
exports.default = feedback_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xcZmVlZGJhY2tcXGphdmFzY3JpcHRzXFxmZWVkYmFjay1tb2RlbDAxLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQWdDQztRQTFCRyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFNaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBa0I1QixDQUFDO0lBaEJHLG9DQUFNLEdBQU47UUFDSSxJQUFJLEtBQUssR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGtDQUFJLEdBQUosVUFBSyxJQUFhO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxLQUFtQjtRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXhCRDtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOzJEQUM4QjtJQU1oQztRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOzJEQUM4QjtJQVpmLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBZ0N2QztJQUFELDBCQUFDO0NBaENELEFBZ0NDLENBaENnRCxFQUFFLENBQUMsU0FBUyxHQWdDNUQ7a0JBaENvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTA0LTI2IDA5OjU0OjQxXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTEzIDE2OjQ4OjEzXHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmVlZGJhY2tfbW9kZWwwMV92MSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfmraPnoa7pn7PmlYgnXHJcbiAgICB9KVxyXG4gICAgcmlnaHRBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mUmeivr+mfs+aViCdcclxuICAgIH0pXHJcbiAgICBlcnJvckF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgc3BpbmU6IHNwLlNrZWxldG9uID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLnBsYXlBdWRpbyh0aGlzLl9hbnN3ZXIgPyB0aGlzLnJpZ2h0QXVkaW8gOiB0aGlzLmVycm9yQXVkaW8pO1xyXG4gICAgICAgIHNwaW5lLnNldFNraW4odGhpcy5fYW5zd2VyID8gXCJ3aW5cIiA6IFwibG9zZVwiKTtcclxuICAgICAgICBzcGluZS5zZXRBbmltYXRpb24oMCwgdGhpcy5fYW5zd2VyID8gJ3dpbicgOiAnbG9zZScsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2Fuc3dlciA9IGJvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUF1ZGlvKGF1ZGlvOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
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
// prefabLibrary/controllers/controller-model02/scripts/controller-model02-sendMessage.ts

"use strict";
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-02-07 11:39:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 14:53:59
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
function sendMessage(data, toUser) {
    // console.log('sendMessage')
    var message = globalThis._.cloneDeep(data);
    // console.log(message)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMlxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAyLXNlbmRNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HOzs7QUFFSCxTQUFnQixXQUFXLENBQUMsSUFBUyxFQUFFLE1BQVc7SUFDOUMsNkJBQTZCO0lBQzdCLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLHVCQUF1QjtJQUVuQixJQUFBLEtBQXlDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLEVBQXRFLElBQUksVUFBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGNBQWMsb0JBQW9DLENBQUM7SUFDN0UsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUU3RCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzdCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzVCLElBQUksRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLGNBQWMsZ0JBQUEsRUFBRTtRQUM1QyxVQUFVLEVBQUUsSUFBSTtLQUNuQixDQUFDLENBQUM7SUFFSCxTQUFTO0lBQ1QsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7UUFDM0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDOUQsU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUztZQUNwRCxLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFBQSxDQUFDO0FBRU4sQ0FBQztBQXZCRCxrQ0F1QkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAyLTA3IDExOjM5OjQzXHJcbiAqIEBMYXN0RWRpdG9yczogUGxlYXNlIHNldCBMYXN0RWRpdG9yc1xyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTE3IDE0OjUzOjU5XHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGRhdGE6IGFueSwgdG9Vc2VyOiBhbnkpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdzZW5kTWVzc2FnZScpXHJcbiAgICBsZXQgbWVzc2FnZSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAoZGF0YSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxyXG5cclxuICAgIGxldCB7IG5hbWUsIHVzZXJpZCwgcm9sZSwgc2lnbmFsaW5nTW9kZWwgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGE7XHJcbiAgICBsZXQgYWN0aW9uID0gd2luZG93WydHbG9iYWxEYXRhJ10uZ2FtZU1zZy5FVkVOVF9VUERBVEVfU1RBVEU7XHJcblxyXG4gICAgd2luZG93WydHbG9iYWxEYXRhJ10uc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgIHRvVXNlcjogdG9Vc2VyID8gdG9Vc2VyIDogXCJcIixcclxuICAgICAgICB1c2VyOiB7IHVzZXJpZCwgcm9sZSwgbmFtZSwgc2lnbmFsaW5nTW9kZWwgfSxcclxuICAgICAgICBoYW5kbGVEYXRhOiBkYXRhXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDogIHluIjlrZjlgqjkv6Hku6RcclxuICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnJvbGUgPT0gMCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQ09VUlNFX1NJR05BTElOR19EQicsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgdGltZXN0YW1wOiB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnRpbWVzdGFtcCxcclxuICAgICAgICAgICAgc3RhdGU6IGRhdGFcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/inputChoose/inputChoose-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74bc4Chi+lGqY2ii2x4oIJq', 'inputChoose-model01-v1');
// prefabLibrary/models/inputChoose/inputChoose-model01-v1.ts

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
 * @LastEditTime: 2021-05-12 16:23:23
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var inputChoose_model01_v1 = /** @class */ (function (_super) {
    __extends(inputChoose_model01_v1, _super);
    function inputChoose_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._numBtns = [];
        _this._answer = 0; // 答案
        _this._state = {};
        return _this;
    }
    Object.defineProperty(inputChoose_model01_v1.prototype, "state", {
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
    inputChoose_model01_v1.prototype.onLoad = function () {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
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
        this._numInput = this._view.getChild("numInput").asButton;
        this._numInput.on(fgui.Event.CLICK, this._clickNumInput, this);
        this._chooseBox = this._view.getChild("chooseBox").asButton;
        this._chooseBox.visible = false;
        this._finishBtn = this._chooseBox.getChild("finishBtn").asButton;
        this._finishBtn.on(fgui.Event.CLICK, this._clickFinishBtn, this);
        this._deleteBtn = this._chooseBox.getChild("deleteBtn").asButton;
        this._deleteBtn.on(fgui.Event.CLICK, this._clickDeleteBtn, this);
        // numBtn 组
        var aGroup = this._chooseBox.getChild("numBox").asGroup;
        for (var i = 0; i < this._chooseBox.numChildren; i++) {
            if (this._chooseBox.getChildAt(i).group == aGroup) {
                var numBtn = this._chooseBox.getChildAt(i).asButton;
                this._numBtns.push(numBtn);
                numBtn.on(fgui.Event.CLICK, this._clickNumBtn, this);
            }
        }
        // 初始化state
        this._state = {
            numInput: "",
            chooseBox: false,
            submit: false,
            answer: false,
            title: false,
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    inputChoose_model01_v1.prototype.init = function (data) {
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
    inputChoose_model01_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    // 点击 显示输入处
    inputChoose_model01_v1.prototype._clickNumInput = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.chooseBox = !state.chooseBox;
        state.answer = parseInt(state.numInput) === this._answer;
        this.updateState(state);
    };
    // // 点击 清空输入
    // private _clickClearBtn(evt: any): void {
    //     let state: any = globalThis._.cloneDeep(this._state);
    //     state.numInput = "";
    //     state.answer = state.drops === this._answer;
    //     this.updateState(state);
    // }
    // 输入完成 隐藏输入框
    inputChoose_model01_v1.prototype._clickFinishBtn = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.chooseBox = false;
        state.answer = parseInt(state.numInput) === this._answer;
        this.updateState(state);
    };
    // 删去一位
    inputChoose_model01_v1.prototype._clickDeleteBtn = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        if (state.numInput) {
            state.numInput = state.numInput.substring(0, state.numInput.length - 1);
        }
        state.answer = parseInt(state.numInput) === this._answer;
        this.updateState(state);
    };
    // 点击 文本框输入数字
    inputChoose_model01_v1.prototype._clickNumBtn = function (evt) {
        var curObj = fgui.GObject.cast(evt.currentTarget);
        var index = this._numBtns.findIndex(function (v) { return v == curObj; });
        if (index !== -1) {
            var state = globalThis._.cloneDeep(this._state);
            if (state.numInput.length < 2) {
                state.numInput = state.numInput + index + "";
                state.answer = parseInt(state.numInput) === this._answer;
                this.updateState(state);
            }
        }
    };
    // 提交点击
    inputChoose_model01_v1.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.chooseBox = false;
        state.answer = parseInt(state.numInput) === this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    inputChoose_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    inputChoose_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    inputChoose_model01_v1.prototype.updateUi = function (oldState, state) {
        if (!globalThis._.isEqual(oldState.chooseBox, state.chooseBox)) {
            this._chooseBox.visible = state.chooseBox;
        }
        if (!globalThis._.isEqual(oldState.numInput, state.numInput)) {
            var title = this._numInput.getChild("title");
            title.text = state.numInput;
        }
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                if (state.numInput) {
                    this.answerFeedback(state.answer);
                }
                else {
                    this.onHandleGuide();
                }
            }
        }
    };
    inputChoose_model01_v1.prototype.playTitle = function (bool) {
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
    inputChoose_model01_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
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
    // 操作提示
    inputChoose_model01_v1.prototype.onHandleGuide = function () {
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
    // 运行时 禁止操作
    inputChoose_model01_v1.prototype.forbidHandle = function () {
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
    inputChoose_model01_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 注册状态，及获取状态的方法
    inputChoose_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    inputChoose_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    inputChoose_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    inputChoose_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    inputChoose_model01_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    inputChoose_model01_v1 = __decorate([
        ccclass
    ], inputChoose_model01_v1);
    return inputChoose_model01_v1;
}(cc.Component));
exports.default = inputChoose_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxpbnB1dENob29zZVxcaW5wdXRDaG9vc2UtbW9kZWwwMS12MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0csSUFBQSxLQUEyQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFwRSxVQUFVLGdCQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLFlBQVksa0JBQWdDLENBQUM7QUFDdkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUEyVUM7UUEvVFcsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQU8sR0FBRyxDQUFDLENBQUMsQ0FBb0IsS0FBSztRQVdyQyxZQUFNLEdBQUcsRUFBRSxDQUFDOztJQW1UeEIsQ0FBQztJQWpURyxzQkFBSSx5Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFN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RUQsZ0JBQWdCO0lBQ2hCLDhDQUFhLEdBQWI7UUFDSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYTtZQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLDZDQUFZLEdBQVo7UUFDSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsYUFBYTtJQUNiLDJDQUFVLEdBQVY7UUFDSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUF6VWdCLHNCQUFzQjtRQUQxQyxPQUFPO09BQ2Esc0JBQXNCLENBMlUxQztJQUFELDZCQUFDO0NBM1VELEFBMlVDLENBM1VtRCxFQUFFLENBQUMsU0FBUyxHQTJVL0Q7a0JBM1VvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTEyIDE2OjIzOjIzXHJcbiAqL1xyXG5jb25zdCB7IGxvYWRCdW5kbGUsIGxvYWRQcmVmYWIsIGxvYWRSZXNvdXJjZSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5wdXRDaG9vc2VfbW9kZWwwMV92MSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF93b3JsZFJvb3Q6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIF92aWV3OiBmZ3VpLkdDb21wb25lbnQ7ICAgICAgICAgLy8g5Li755WM6Z2iXHJcbiAgICBwcml2YXRlIF9jMTogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBfYzI6IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcml2YXRlIF9jaG9vc2VCb3g6IGZndWkuR0J1dHRvbjsgICAgICAgLy8g6L6T5YWl55uS5a2QXHJcbiAgICBwcml2YXRlIF9udW1JbnB1dDogZmd1aS5HQnV0dG9uOyAgICAgICAgLy8g5paH5pys5pi+56S65qGGXHJcbiAgICBwcml2YXRlIF9jbGVhckJ0bjogZmd1aS5HQnV0dG9uOyAgICAgICAgLy8g5riF56m65oyJ6ZKuXHJcbiAgICBwcml2YXRlIF9maW5pc2hCdG46IGZndWkuR0J1dHRvbjsgICAgICAgLy8g6L6T5YWl5a6M5oiQ5oyJ6ZKuXHJcbiAgICBwcml2YXRlIF9kZWxldGVCdG46IGZndWkuR0J1dHRvbjsgICAgICAgLy8g5Yig5Y675oyJ6ZKuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjsgICAgICAgICAgLy8g5o+Q5LqkXHJcbiAgICBwcml2YXRlIF9udW1CdG5zID0gW107XHJcbiAgICBwcml2YXRlIF9hbnN3ZXIgPSAwOyAgICAgICAgICAgICAgICAgICAgLy8g562U5qGIXHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgLy8g5Yqo5pWIXHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcbiAgICAvLyDov5znqIvliqjmgIHnu4Tku7ZcclxuICAgIHByaXZhdGUgZmVlZGJhY2s6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZSA9IHt9O1xyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVaSh0aGlzLl9zdGF0ZSwgdik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl93b3JsZFJvb3QgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLl92aWV3LndpZHRoKSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcbiAgICAgICAgLy8g6Ieo5pmCXHJcbiAgICAgICAgLy8gYnVnIOWIneWni+iuvue9ruS4jeaSreaUvuS4jeeUn+aViFxyXG4gICAgICAgIGlmICh0aGlzLl9jMikge1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIHRoaXMuX251bUlucHV0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcIm51bUlucHV0XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX251bUlucHV0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrTnVtSW5wdXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9jaG9vc2VCb3ggPSB0aGlzLl92aWV3LmdldENoaWxkKFwiY2hvb3NlQm94XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX2Nob29zZUJveC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZpbmlzaEJ0biA9IHRoaXMuX2Nob29zZUJveC5nZXRDaGlsZChcImZpbmlzaEJ0blwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLl9maW5pc2hCdG4ub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tGaW5pc2hCdG4sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9kZWxldGVCdG4gPSB0aGlzLl9jaG9vc2VCb3guZ2V0Q2hpbGQoXCJkZWxldGVCdG5cIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlQnRuLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrRGVsZXRlQnRuLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gbnVtQnRuIOe7hFxyXG4gICAgICAgIGxldCBhR3JvdXAgPSB0aGlzLl9jaG9vc2VCb3guZ2V0Q2hpbGQoXCJudW1Cb3hcIikuYXNHcm91cDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2Nob29zZUJveC5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jaG9vc2VCb3guZ2V0Q2hpbGRBdChpKS5ncm91cCA9PSBhR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBudW1CdG46IGZndWkuR0J1dHRvbiA9IHRoaXMuX2Nob29zZUJveC5nZXRDaGlsZEF0KGkpLmFzQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbnVtQnRucy5wdXNoKG51bUJ0bik7XHJcbiAgICAgICAgICAgICAgICBudW1CdG4ub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tOdW1CdG4sIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJZzdGF0ZVxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xyXG4gICAgICAgICAgICBudW1JbnB1dDogXCJcIixcclxuICAgICAgICAgICAgY2hvb3NlQm94OiBmYWxzZSxcclxuICAgICAgICAgICAgc3VibWl0OiBmYWxzZSxcclxuICAgICAgICAgICAgYW5zd2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgdGl0bGU6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Li05pe2IOemgeatouaTjeS9nOacn+mXtCDliIfpobVcclxuICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOS4tOaXtiBtb2RlbCBjb21wb25lbnQganNvbiDphY3nva7liqDovb1cclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcbiAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSB9ID0gbW9kZWwuY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG5cclxuICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgIGlmIChhZVt2XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1t2XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgIGlmIChhZVt2XS5wb3MpIHRoaXNbdl0ucG9zID0gYWVbdl0ucG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYW5zd2VyKSB0aGlzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFBhdGg6IGFueSA9IGAke3BhdGhDb25maWcucmVtb3RlVXJsfSR7cGF0aENvbmZpZy5jb21wb25lbnRCdW5kbGVQYXRofSR7Y29tcG9uZW50c1trZXldLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbXBvbmVudEJ1bmRsZSwgY29tcG9uZW50c1trZXldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29tcG9uZW50UHJlZmFiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrVGl0bGUoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnRpdGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDngrnlh7sg5pi+56S66L6T5YWl5aSEXHJcbiAgICBwcml2YXRlIF9jbGlja051bUlucHV0KGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5jaG9vc2VCb3ggPSAhc3RhdGUuY2hvb3NlQm94O1xyXG5cclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBwYXJzZUludChzdGF0ZS5udW1JbnB1dCkgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvLyDngrnlh7sg5riF56m66L6T5YWlXHJcbiAgICAvLyBwcml2YXRlIF9jbGlja0NsZWFyQnRuKGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAvLyAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgIC8vICAgICBzdGF0ZS5udW1JbnB1dCA9IFwiXCI7XHJcbiAgICAvLyAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgIC8vICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8g6L6T5YWl5a6M5oiQIOmakOiXj+i+k+WFpeahhlxyXG4gICAgcHJpdmF0ZSBfY2xpY2tGaW5pc2hCdG4oZXZ0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLmNob29zZUJveCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IHBhcnNlSW50KHN0YXRlLm51bUlucHV0KSA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIoOWOu+S4gOS9jVxyXG4gICAgcHJpdmF0ZSBfY2xpY2tEZWxldGVCdG4oZXZ0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUubnVtSW5wdXQpIHtcclxuICAgICAgICAgICAgc3RhdGUubnVtSW5wdXQgPSBzdGF0ZS5udW1JbnB1dC5zdWJzdHJpbmcoMCwgc3RhdGUubnVtSW5wdXQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBwYXJzZUludChzdGF0ZS5udW1JbnB1dCkgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDngrnlh7sg5paH5pys5qGG6L6T5YWl5pWw5a2XXHJcbiAgICBwcml2YXRlIF9jbGlja051bUJ0bihldnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjdXJPYmo6IGFueSA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9udW1CdG5zLmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IGN1ck9iaik7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLm51bUlucHV0Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLm51bUlucHV0ID0gc3RhdGUubnVtSW5wdXQgKyBpbmRleCArIFwiXCI7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBwYXJzZUludChzdGF0ZS5udW1JbnB1dCkgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOaPkOS6pOeCueWHu1xyXG4gICAgcHJpdmF0ZSBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBzdGF0ZS5jaG9vc2VCb3ggPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBwYXJzZUludChzdGF0ZS5udW1JbnB1dCkgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkob2xkU3RhdGU6IGFueSwgc3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuY2hvb3NlQm94LCBzdGF0ZS5jaG9vc2VCb3gpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nob29zZUJveC52aXNpYmxlID0gc3RhdGUuY2hvb3NlQm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5udW1JbnB1dCwgc3RhdGUubnVtSW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZTogZmd1aS5HT2JqZWN0ID0gdGhpcy5fbnVtSW5wdXQuZ2V0Q2hpbGQoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgdGl0bGUudGV4dCA9IHN0YXRlLm51bUlucHV0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVRpdGxlKHN0YXRlLnRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5udW1JbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhbmRsZUd1aWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6Zmk56aB5q2iXHJcbiAgICBkaXNhYmxlRm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hc2spIGhhbmRsZU1hc2suZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xcZm9ybWFsLXBhbmxlLW1vZGVsMDJcXGphdmFzY3JpcHRzXFxmb3JtYWwtcGFubGUtbW9kZWwwMi1zdHVkZW50TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEQsb0RBQVk7SUFBMUU7O0lBMkRBLENBQUM7SUExREcsaURBQU0sR0FBTixjQUFXLENBQUM7SUFFWixNQUFNO0lBQ04sbURBQVEsR0FBUixVQUFTLEtBQVU7Z0NBQ04sQ0FBQztZQUNOLElBQUksT0FBTyxHQUFHLE9BQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixPQUFPO2dCQUNQLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBRW5FLFFBQVE7Z0JBQ1IsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNFLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JELElBQUksYUFBYSxHQUFH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QUFnQztRQURwRCxPQUFPO09BQ2EsZ0NBQWdDLENBMkRwRDtJQUFELHVDQUFDO0NBM0RELEFBMkRDLENBM0Q2RCxFQUFFLENBQUMsU0FBUyxHQTJEekU7a0JBM0RvQixnQ0FBZ0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIwLTExLTE5IDE4OjA1OjA5XHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTEyIDE3OjUxOjQ0XHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZm9ybWFsX3BhbmxlX21vZGVsMDJfc3R1ZGVudExpc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgb25Mb2FkKCkgeyB9XHJcblxyXG4gICAgLy8g5riy5p+T5bGCXHJcbiAgICB1cGRhdGVVaShzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHN0dWRlbnQgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdHVkZW50TGlzdFtpXSkge1xyXG4gICAgICAgICAgICAgICAgc3R1ZGVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5ZCN5a2XXHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHN0dWRlbnQuZ2V0Q2hpbGRCeU5hbWUoJ2hlYWQnKS5nZXRDaGlsZEJ5TmFtZSgnbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgbmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0YXRlLnN0dWRlbnRMaXN0W2ldLm5pY2tuYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOiuvue9riDnm5HmjqdcclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9yZWQgPSBzdHVkZW50LmdldENoaWxkQnlOYW1lKCdib2R5JykuZ2V0Q2hpbGRCeU5hbWUoJ21vbml0b3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JlZFNob3cgPSBtb25pdG9yZWQuZ2V0Q2hpbGRCeU5hbWUoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgIGxldCBtb25pdG9yZWRIaWRlID0gbW9uaXRvcmVkLmdldENoaWxkQnlOYW1lKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zaWduYWxpbmdNb2RlbCA9PSAxKSBtb25pdG9yZWQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2lnbmFsaW5nTW9kZWwgPT0gMikgbW9uaXRvcmVkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2lnbmFsaW5nTW9kZWwgPT0gMykgbW9uaXRvcmVkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm1vbml0b3JlZCA9PSBzdGF0ZS5zdHVkZW50TGlzdFtpXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbml0b3JlZFNob3cuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBtb25pdG9yZWRIaWRlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtb25pdG9yZWRTaG93LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbml0b3JlZEhpZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDorr7nva4g5oqV5pS+XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF1bmNoID0gc3R1ZGVudC5nZXRDaGlsZEJ5TmFtZSgnYm9keScpLmdldENoaWxkQnlOYW1lKCdsYXVuY2gnKTtcclxuICAgICAgICAgICAgICAgIGxldCBsYXVuY2hTaG93ID0gbGF1bmNoLmdldENoaWxkQnlOYW1lKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF1bmNoSGlkZSA9IGxhdW5jaC5nZXRDaGlsZEJ5TmFtZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc2lnbmFsaW5nTW9kZWwgPT0gMSkgbGF1bmNoLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnNpZ25hbGluZ01vZGVsID09IDIpIGxhdW5jaC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zaWduYWxpbmdNb2RlbCA9PSAzKSBsYXVuY2guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5sYXVuY2ggPT0gc3RhdGUuc3R1ZGVudExpc3RbaV0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXVuY2hTaG93LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoSGlkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF1bmNoU2hvdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsYXVuY2hIaWRlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDorr7nva7mjpLlkI1cclxuICAgICAgICAgICAgICAgIGxldCByYW5rTGFiZWwgPSBzdHVkZW50LmdldENoaWxkQnlOYW1lKCdoZWFkJykuZ2V0Q2hpbGRCeU5hbWUoJ3JhbmsnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBzdGF0ZS5yYW5raW5nLmZpbmRJbmRleCgodjogYW55KSA9PiBzdGF0ZS5zdHVkZW50TGlzdFtpXS5pZCA9PSB2KTtcclxuICAgICAgICAgICAgICAgIHJhbmtMYWJlbC5zdHJpbmcgPSBpbmRleCA9PSAtMSA/IFwiXCIgOiAoaW5kZXggKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3R1ZGVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmlbDmja7lsYJcclxuICAgIHVwZGF0ZURhdGEoZGF0YTogYW55KSB7fVxyXG4gICAgXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f908Bl1PlGabQ0oWxCLVqT', 'dragAnswer-model01-v2');
// prefabLibrary/models/dragAnswer/dragAnswer-model01-v2.ts

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
 * @Date: 2021-05-07 14:34:26
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-12 16:22:53
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var dragAnswer_model01_v2 = /** @class */ (function (_super) {
    __extends(dragAnswer_model01_v2, _super);
    function dragAnswer_model01_v2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colliderBox = [];
        _this._collideredBox = [];
        _this._cache = {};
        _this._scheduleTime = .3;
        _this._dragging = false;
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model01_v2.prototype, "state", {
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
    dragAnswer_model01_v2.prototype.onLoad = function () {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
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
        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        var colliderGroup = this._view.getChild("colliderBox").asGroup;
        var collideredGroup = this._view.getChild("collideredBox").asGroup;
        this._cache["colliderBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == colliderGroup) {
                var btn = this._view.getChildAt(i).asButton;
                this._cache["colliderBox"].push({ x: btn.x, y: btn.y, belong: null });
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                var btn = this._view.getChildAt(i).asButton;
                this._collideredBox.push(btn);
            }
        }
        // 初始化state
        this._state = {
            drag: "end",
            collider: this._cache["colliderBox"].map(function (v) { return v; }),
            colliderIndex: null,
            title: false,
            submit: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    dragAnswer_model01_v2.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var pathConfig, model, components, Package, GComponent, _a, answer, ae, v, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        if (model.uiPath) {
                            GComponent = model.uiPath;
                            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                        }
                        if (model.config) {
                            _a = model.config, answer = _a.answer, ae = _a.ae;
                            if (answer)
                                this._answer = answer;
                            // 动效注册
                            if (ae) {
                                for (v in ae) {
                                    if (ae[v]) {
                                        this[v] = {};
                                        if (ae[v].component)
                                            this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                                        if (ae[v].pos)
                                            this[v].pos = ae[v].pos;
                                    }
                                }
                            }
                        }
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
    dragAnswer_model01_v2.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    dragAnswer_model01_v2.prototype._onDragStart = function (evt) {
        evt.captureTouch();
        var state = globalThis._.cloneDeep(this._state);
        var collider = fgui.GObject.cast(evt.currentTarget);
        var colliderIndex = this._colliderBox.findIndex(function (v) { return v == collider; });
        state.colliderIndex = colliderIndex;
        this.updateState(state);
    };
    dragAnswer_model01_v2.prototype._onDragMove = function (evt) {
        this._dragging = true;
    };
    dragAnswer_model01_v2.prototype._onDragEnd = function (evt) {
        var _this = this;
        // 临时
        // 两个被拖拽物 同时被松开 会触发2次回调
        if (!this._dragging)
            return;
        this._dragging = false;
        var collider = fgui.GObject.cast(evt.currentTarget);
        var colliderIndex = this._colliderBox.findIndex(function (v) { return v == collider; });
        var arr = [];
        var collidered;
        this._collideredBox.forEach(function (v, i) {
            if (_this._belongArea(collider, v, 110) == true)
                arr.push(v);
        });
        arr.forEach(function (v, i) {
            if (i == 0) {
                collidered = v;
            }
            else {
                var pd = _this._getDistance(collider, arr[i - 1]);
                var cd = _this._getDistance(collider, v);
                if (cd < pd)
                    collidered = v;
            }
        });
        var collideredIndex = this._collideredBox.findIndex(function (v) { return v == collidered; });
        var state = globalThis._.cloneDeep(this._state);
        if (collideredIndex == -1) {
            state.collider[colliderIndex] = {
                x: this._cache["colliderBox"][colliderIndex].x,
                y: this._cache["colliderBox"][colliderIndex].y,
                belong: null,
            };
        }
        else {
            var x_1 = this._collideredBox[collideredIndex].x + this._collideredBox[collideredIndex].width / 2 - this._colliderBox[colliderIndex].width / 2;
            var y_1 = this._collideredBox[collideredIndex].y + this._collideredBox[collideredIndex].height / 2 - this._colliderBox[colliderIndex].height / 2;
            var bool = state.collider.find(function (v) { return v.x == x_1 && Math.abs(v.y - y_1) < 55; });
            state.collider[colliderIndex] = {
                x: bool ? this._cache["colliderBox"][colliderIndex].x : x_1,
                y: bool ? this._cache["colliderBox"][colliderIndex].y : y_1,
                belong: bool ? null : collideredIndex,
            };
        }
        // let answerBool: boolean = state.collider.every((v: any, i: any) => !globalThis._.isEqual(v, this._cache["colliderBox"][i]));
        // state.answer = answerBool;
        // if (answerBool) {
        //     state.submit = true;
        // }
        state.submit = false;
        state.drag = "end";
        state.colliderIndex = colliderIndex;
        this.updateState(state);
    };
    dragAnswer_model01_v2.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model01_v2.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var answer = state.collider.map(function (v) { return v.belong; }).filter(function (v) { return v || v === 0; }).join("");
        state.answer = answer == this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    dragAnswer_model01_v2.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model01_v2.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model01_v2.prototype.updateUi = function (oldState, state) {
        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
        }
        if (state.drag == "end") {
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                for (var i = 0; i < state.collider.length; i++) {
                    this._colliderBox[i].x = state.collider[i].x;
                    this._colliderBox[i].y = state.collider[i].y;
                }
            }
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    var nv_1 = this._colliderBox.map(function (v) { return { "x": v.x, "y": v.y }; });
                    var bool = this._cache["colliderBox"].every(function (v, i) { return v.x == nv_1[i].x && v.y == nv_1[i].y; });
                    bool ? this.onHandleGuide() : this.onFlicker(state.answer);
                }
            }
        }
    };
    dragAnswer_model01_v2.prototype.playTitle = function (bool) {
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
    /**
     * @name: 获取距离
     * @msg:
     * @param {any} self
     * @param {any} area
     * @return {*}
     */
    dragAnswer_model01_v2.prototype._getDistance = function (self, area) {
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance;
    };
    /**
     * @name: 区域所属判断
     * @msg:
     * @param {any} self
     * @param {any} area
     * @param {number} gap
     * @return {*}
     */
    dragAnswer_model01_v2.prototype._belongArea = function (self, area, gap) {
        if (gap === void 0) { gap = 10; }
        var width = (self.x + self.width / 2) - (area.x + area.width / 2);
        var height = (self.y + self.height / 2) - (area.y + area.height / 2);
        var distance = Math.sqrt(width * width + height * height);
        return distance < gap;
    };
    dragAnswer_model01_v2.prototype.answerFeedback = function (bool) {
        var _this = this;
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
            _this.disableForbidHandle();
            feedback.destroy();
            state.submit = false;
            _this.updateState(state);
        }, 2000);
    };
    // 格子闪烁 提示
    dragAnswer_model01_v2.prototype.onFlicker = function (answer) {
        var _this = this;
        var t = this._view.getTransition("t0");
        t.play(function () {
            _this.answerFeedback(answer);
        });
    };
    // 操作提示
    dragAnswer_model01_v2.prototype.onHandleGuide = function () {
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
    // 运行时 禁止操作
    dragAnswer_model01_v2.prototype.forbidHandle = function () {
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
    dragAnswer_model01_v2.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model01_v2.prototype.dragSchedule = function () {
        if (this._dragging) {
            var state = globalThis._.cloneDeep(this._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
            };
            this.updateState(state);
        }
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model01_v2.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model01_v2.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model01_v2.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model01_v2.prototype.onEnable = function () {
        this.registerState();
        this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model01_v2.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model01_v2 = __decorate([
        ccclass
    ], dragAnswer_model01_v2);
    return dragAnswer_model01_v2;
}(cc.Component));
exports.default = dragAnswer_model01_v2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDEtdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBRXZFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBdWFDO1FBblpXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQTBZeEIsQ0FBQztJQXhZRyxzQkFBSSx3Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsc0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENB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LElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2IsMENBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBdGFnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQXVhekM7SUFBRCw0QkFBQztDQXZhRCxBQXVhQyxDQXZha0QsRUFBRSxDQUFDLFNBQVMsR0F1YTlEO2tCQXZhb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wNS0wNyAxNDozNDoyNlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMiAxNjoyMjo1M1xyXG4gKi9cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDFfdjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2MxOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF9jMjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG5cclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGVUcmlnZ2VyOiBmZ3VpLkdMb2FkZXI7XHJcblxyXG4gICAgLy8gZmFpcnlndWkg57uE5Lu2XHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcbiAgICBwcml2YXRlIGxpbmVCbGluazogYW55O1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbGxpZGVyQm94ID0gW107XHJcbiAgICBwcml2YXRlIF9jb2xsaWRlcmVkQm94ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FjaGUgPSB7fTtcclxuICAgIHByaXZhdGUgX3NjaGVkdWxlVGltZSA9IC4zO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9hbnN3ZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdGhpcy5fdmlldy54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuX3ZpZXcud2lkdGgpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2MxID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICAgICAgdGhpcy5fYzIgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMlwiKTtcclxuICAgICAgICAvLyDoh6jmmYJcclxuICAgICAgICAvLyBidWcg5Yid5aeL6K6+572u5LiN5pKt5pS+5LiN55Sf5pWIXHJcbiAgICAgICAgaWYgKHRoaXMuX2MyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlckdyb3VwID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNvbGxpZGVyQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyZWRHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlcmVkQm94XCIpLmFzR3JvdXA7XHJcblxyXG4gICAgICAgIHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGNvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG46IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0ucHVzaCh7IHg6IGJ0bi54LCB5OiBidG4ueSwgYmVsb25nOiBudWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgYnRuLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5UT1VDSF9CRUdJTiwgdGhpcy5fb25EcmFnU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfTU9WRSwgdGhpcy5fb25EcmFnTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveC5wdXNoKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmlldy5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gY29sbGlkZXJlZEdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlcmVkQm94LnB1c2goYnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJhZzogXCJlbmRcIixcclxuICAgICAgICAgICAgY29sbGlkZXI6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0ubWFwKCh2OiBhbnkpID0+IHYpLFxyXG4gICAgICAgICAgICBjb2xsaWRlckluZGV4OiBudWxsLFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuc3dlcjogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyDkuLTml7YgbW9kZWwgY29tcG9uZW50IGpzb24g6YWN572u5Yqg6L29XHJcbiAgICAgICAgbGV0IHsgcGF0aENvbmZpZywgbW9kZWwsIGNvbXBvbmVudHMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IFBhY2thZ2UgPSBwYXRoQ29uZmlnLnBhY2thZ2VOYW1lO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKG1vZGVsLnVpUGF0aCkge1xyXG4gICAgICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RlbC5jb25maWcpIHtcclxuICAgICAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSB9ID0gbW9kZWwuY29uZmlnO1xyXG4gICAgICAgICAgICBpZiAoYW5zd2VyKSB0aGlzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgICAgICBpZiAoYWUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1t2XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWVbdl0ucG9zKSB0aGlzW3ZdLnBvcyA9IGFlW3ZdLnBvcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQYXRoOiBhbnkgPSBgJHtwYXRoQ29uZmlnLnJlbW90ZVVybH0ke3BhdGhDb25maWcuY29tcG9uZW50QnVuZGxlUGF0aH0ke2NvbXBvbmVudHNba2V5XS5idW5kbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50QnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbXBvbmVudFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb21wb25lbnRCdW5kbGUsIGNvbXBvbmVudHNba2V5XS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbXBvbmVudFByZWZhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmlnaW5WYWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB2LngsXHJcbiAgICAgICAgICAgIHk6IHYueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldnQuY2FwdHVyZVRvdWNoKCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyOiBhbnkgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVySW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyQm94LmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IGNvbGxpZGVyKTtcclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckluZGV4ID0gY29sbGlkZXJJbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8g5Li05pe2XHJcbiAgICAgICAgLy8g5Lik5Liq6KKr5ouW5ou954mpIOWQjOaXtuiiq+advuW8gCDkvJrop6blj5Ey5qyh5Zue6LCDXHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlcjogYW55ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlckJveC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjb2xsaWRlcik7XHJcblxyXG4gICAgICAgIGxldCBhcnI6IGFueSA9IFtdO1xyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkOiBhbnk7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXJlZEJveC5mb3JFYWNoKCh2OiBhbnksIGk6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYmVsb25nQXJlYShjb2xsaWRlciwgdiwgMTEwKSA9PSB0cnVlKSBhcnIucHVzaCh2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXJyLmZvckVhY2goKHY6IGFueSwgaTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVyZWQgPSB2O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBkID0gdGhpcy5fZ2V0RGlzdGFuY2UoY29sbGlkZXIsIGFycltpIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNkID0gdGhpcy5fZ2V0RGlzdGFuY2UoY29sbGlkZXIsIHYpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNkIDwgcGQpIGNvbGxpZGVyZWQgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlcmVkSW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyZWRCb3guZmluZEluZGV4KCh2OiBhbnkpID0+IHYgPT0gY29sbGlkZXJlZCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVyZWRJbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltjb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1bY29sbGlkZXJJbmRleF0ueSxcclxuICAgICAgICAgICAgICAgIGJlbG9uZzogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlcmVkQm94W2NvbGxpZGVyZWRJbmRleF0ueCArIHRoaXMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS53aWR0aCAvIDIgLSB0aGlzLl9jb2xsaWRlckJveFtjb2xsaWRlckluZGV4XS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGxldCB5OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlcmVkQm94W2NvbGxpZGVyZWRJbmRleF0ueSArIHRoaXMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XS5oZWlnaHQgLyAyIC0gdGhpcy5fY29sbGlkZXJCb3hbY29sbGlkZXJJbmRleF0uaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgbGV0IGJvb2w6IGJvb2xlYW4gPSBzdGF0ZS5jb2xsaWRlci5maW5kKCh2OiBhbnkpID0+IHYueCA9PSB4ICYmIE1hdGguYWJzKHYueSAtIHkpIDwgNTUpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBib29sID8gdGhpcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXVtjb2xsaWRlckluZGV4XS54IDogeCxcclxuICAgICAgICAgICAgICAgIHk6IGJvb2wgPyB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2NvbGxpZGVySW5kZXhdLnkgOiB5LFxyXG4gICAgICAgICAgICAgICAgYmVsb25nOiBib29sID8gbnVsbCA6IGNvbGxpZGVyZWRJbmRleCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IGFuc3dlckJvb2w6IGJvb2xlYW4gPSBzdGF0ZS5jb2xsaWRlci5ldmVyeSgodjogYW55LCBpOiBhbnkpID0+ICFnbG9iYWxUaGlzLl8uaXNFcXVhbCh2LCB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2ldKSk7XHJcbiAgICAgICAgLy8gc3RhdGUuYW5zd2VyID0gYW5zd2VyQm9vbDtcclxuICAgICAgICAvLyBpZiAoYW5zd2VyQm9vbCkge1xyXG4gICAgICAgIC8vICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5kcmFnID0gXCJlbmRcIjtcclxuICAgICAgICBzdGF0ZS5jb2xsaWRlckluZGV4ID0gY29sbGlkZXJJbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBhbnN3ZXI6IGFueSA9IHN0YXRlLmNvbGxpZGVyLm1hcCgodjogYW55KSA9PiB2LmJlbG9uZykuZmlsdGVyKCh2OiBhbnkpID0+IHYgfHwgdiA9PT0gMCkuam9pbihcIlwiKTtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBhbnN3ZXIgPT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W54q25oCBXHJcbiAgICBnZXRTdGF0ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShvbGRTdGF0ZTogYW55LCBzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmRyYWcgPT0gXCJtb3ZlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueCA9IHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLnkgPSBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XS55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmRyYWcgPT0gXCJlbmRcIikge1xyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmNvbGxpZGVyLCBzdGF0ZS5jb2xsaWRlcikpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29sbGlkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtpXS54ID0gc3RhdGUuY29sbGlkZXJbaV0ueDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtpXS55ID0gc3RhdGUuY29sbGlkZXJbaV0ueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuc3VibWl0LCBzdGF0ZS5zdWJtaXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2uY29sbGlkZXIg5Yid5aeL5L2N572uIOWIpOaWrSDmmK/lkKbooqvmk43kvZzov4dcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbnY6IGFueSA9IHRoaXMuX2NvbGxpZGVyQm94Lm1hcCgodjogYW55KSA9PiB7IHJldHVybiB7IFwieFwiOiB2LngsIFwieVwiOiB2LnkgfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYm9vbDogYm9vbGVhbiA9IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0uZXZlcnkoKHY6IGFueSwgaTogYW55KSA9PiB2LnggPT0gbnZbaV0ueCAmJiB2LnkgPT0gbnZbaV0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA/IHRoaXMub25IYW5kbGVHdWlkZSgpIDogdGhpcy5vbkZsaWNrZXIoc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwbGF5VGl0bGUoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSBib29sID8gMSA6IDA7XHJcblxyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmZ3VpLlVJUGFja2FnZS5nZXRJdGVtQnlVUkwodGhpcy5fdGl0bGVbXCJfc291bmRcIl0pO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW86IGNjLkF1ZGlvQ2xpcCA9IGF3YWl0IGxvYWRSZXNvdXJjZShpdGVtLmZpbGUsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudGl0bGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbmFtZTog6I635Y+W6Led56a7XHJcbiAgICAgKiBAbXNnOiBcclxuICAgICAqIEBwYXJhbSB7YW55fSBzZWxmXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gYXJlYVxyXG4gICAgICogQHJldHVybiB7Kn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0RGlzdGFuY2Uoc2VsZjogYW55LCBhcmVhOiBhbnkpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG5hbWU6IOWMuuWfn+aJgOWxnuWIpOaWrVxyXG4gICAgICogQG1zZzogXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gc2VsZlxyXG4gICAgICogQHBhcmFtIHthbnl9IGFyZWFcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBnYXBcclxuICAgICAqIEByZXR1cm4geyp9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2JlbG9uZ0FyZWEoc2VsZjogYW55LCBhcmVhOiBhbnksIGdhcDogbnVtYmVyID0gMTApIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAoc2VsZi54ICsgc2VsZi53aWR0aCAvIDIpIC0gKGFyZWEueCArIGFyZWEud2lkdGggLyAyKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gKHNlbGYueSArIHNlbGYuaGVpZ2h0IC8gMikgLSAoYXJlYS55ICsgYXJlYS5oZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgZ2FwO1xyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuXHJcbiAgICAgICAgICAgIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOagvOWtkOmXqueDgSDmj5DnpLpcclxuICAgIG9uRmxpY2tlcihhbnN3ZXI6IGFueSkge1xyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLl92aWV3LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGFuc3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6Zmk56aB5q2iXHJcbiAgICBkaXNhYmxlRm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hc2spIGhhbmRsZU1hc2suZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4tOaXtlxyXG4gICAgLy8g5ouW5ou95a6a5pe25ZmoXHJcbiAgICBkcmFnU2NoZWR1bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyYWcgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5kcmFnU2NoZWR1bGUsIHRoaXMuX3NjaGVkdWxlVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model02-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '761b7tA1DZDbZlu/VVG4SVi', 'dragAnswer-model02-v1');
// prefabLibrary/models/dragAnswer/dragAnswer-model02-v1.ts

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
 * @LastEditTime: 2021-05-19 14:33:21
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var dragAnswer_model02_v1 = /** @class */ (function (_super) {
    __extends(dragAnswer_model02_v1, _super);
    function dragAnswer_model02_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colliderBox = [];
        _this._collideredBox = [];
        _this._cache = {};
        _this._scheduleTime = .3;
        _this._dragging = false;
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model02_v1.prototype, "state", {
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
    dragAnswer_model02_v1.prototype.onLoad = function () {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");
        // 臨時
        // bug 初始设置不播放不生效
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }
        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger)
            this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);
        this._robot = this._view.getChild("robot").asLoader;
        this._dyUI = this._view.getChild("dyUI").asGroup;
        this._colliderGroup = this._view.getChild("colliderBox").asGroup;
        this._collideredGroup = this._view.getChild("collideredBox").asGroup;
        // colliderGroup.visible = false 
        // collideredGroup.visible = false;
        this._cache["colliderBox"] = [];
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == this._colliderGroup) {
                var btn = this._view.getChildAt(i).asButton;
                this._cache["colliderBox"].push({ x: btn.x, y: btn.y });
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == this._collideredGroup) {
                var btn = this._view.getChildAt(i).asButton;
                this._collideredBox.push(btn);
            }
        }
        // 初始化state
        this._state = {
            drag: "end",
            title: false,
            collider: this._cache["colliderBox"].map(function (v) { return v; }),
            colliderIndex: null,
            answer: false,
            submit: false,
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    dragAnswer_model02_v1.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var pathConfig, model, components, Package, GComponent, _a, answer, ae, v, _b, _c, _i, key, componentPath, componentBundle, componentPrefab;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pathConfig = data.pathConfig, model = data.model, components = data.components;
                        Package = pathConfig.packageName;
                        if (model.uiPath) {
                            GComponent = model.uiPath;
                            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                        }
                        if (model.config) {
                            _a = model.config, answer = _a.answer, ae = _a.ae;
                            if (answer)
                                this._answer = answer;
                            // 动效注册
                            if (ae) {
                                for (v in ae) {
                                    if (ae[v]) {
                                        this[v] = {};
                                        if (ae[v].component)
                                            this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                                        if (ae[v].pos)
                                            this[v].pos = ae[v].pos;
                                    }
                                }
                            }
                        }
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
    dragAnswer_model02_v1.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    dragAnswer_model02_v1.prototype._onDragStart = function (evt) {
        evt.captureTouch();
        var state = globalThis._.cloneDeep(this._state);
        var collider = fgui.GObject.cast(evt.currentTarget);
        var colliderIndex = this._colliderBox.findIndex(function (v) { return v == collider; });
        state.colliderIndex = colliderIndex;
        this.updateState(state);
    };
    dragAnswer_model02_v1.prototype._onDragMove = function (evt) {
        this._dragging = true;
    };
    dragAnswer_model02_v1.prototype._onDragEnd = function (evt) {
        var _this = this;
        if (!this._dragging)
            return;
        this._dragging = false;
        var collider = fgui.GObject.cast(evt.currentTarget);
        var colliderIndex = this._colliderBox.findIndex(function (v) { return v == collider; });
        var obj = this._adsorb(collider, colliderIndex);
        var state = globalThis._.cloneDeep(this._state);
        if (obj.bool) {
            state.collider[colliderIndex] = {
                x: obj.pos.x,
                y: obj.pos.y
            };
        }
        else {
            for (var i = 0; i < this._colliderBox.length; i++) {
                if (collider == this._colliderBox[i]) {
                    state.collider[colliderIndex] = {
                        x: this._cache["colliderBox"][i].x,
                        y: this._cache["colliderBox"][i].y
                    };
                }
            }
        }
        state.drag = "end";
        state.colliderIndex = colliderIndex;
        var answerBool = state.collider.every(function (v, i) { return !globalThis._.isEqual(v, _this._cache["colliderBox"][i]); });
        state.answer = answerBool;
        if (answerBool) {
            state.submit = true;
        }
        this.updateState(state);
    };
    // 临时
    // 区域所属判断
    dragAnswer_model02_v1.prototype._adsorb = function (obj, index) {
        var a;
        var b;
        var c;
        var s;
        for (var i = 0; i < this._collideredBox.length; i++) {
            a = obj.x - this._collideredBox[i].x;
            b = obj.y - this._collideredBox[i].y;
            if (c) {
                if (c > Math.sqrt(a * a + b * b)) {
                    c = Math.sqrt(a * a + b * b);
                    s = i;
                }
            }
            else {
                c = Math.sqrt(a * a + b * b);
                s = i;
            }
        }
        return {
            bool: c < 65 && index == s,
            s: s,
            pos: {
                x: this._collideredBox[s].x,
                y: this._collideredBox[s].y,
            }
        };
    };
    dragAnswer_model02_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    // 获取状态
    dragAnswer_model02_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model02_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model02_v1.prototype.updateUi = function (oldState, state) {
        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
            // let collider: any = this._colliderBox[state.colliderIndex];
            // let collideredIndex: number = this._collideredBox.findIndex((collidered: any) => this._belongArea(collider, collidered, 100) == true);
            // console.log(collideredIndex);
            // console.log(this._collideredBox[collideredIndex]);
        }
        if (state.drag == "end") {
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                for (var i = 0; i < state.collider.length; i++) {
                    this._colliderBox[i].x = state.collider[i].x;
                    this._colliderBox[i].y = state.collider[i].y;
                }
            }
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }
            if (!globalThis._.isEqual(oldState.answer, state.answer)) {
                if (state.answer) {
                    this.transfer(state.answer);
                }
            }
        }
    };
    dragAnswer_model02_v1.prototype.playTitle = function (bool) {
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
    // 临时
    dragAnswer_model02_v1.prototype.transfer = function (answer) {
        var _this = this;
        this.forbidHandle();
        this._dyUI.visible = false;
        this._colliderGroup.visible = false;
        this._collideredGroup.visible = false;
        this._robot.visible = true;
        this._robot.playing = true;
        setTimeout(function () {
            _this._dyUI.visible = true;
            _this._colliderGroup.visible = true;
            _this._collideredGroup.visible = true;
            _this._robot.visible = false;
            _this._robot.playing = false;
            _this.answerFeedback(answer);
        }, 3000);
    };
    dragAnswer_model02_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
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
            // 临时
            _this.disableForbidHandle();
            feedback.destroy();
            state.submit = false;
            _this.updateState(state);
        }, 2000);
    };
    // 天枰提示
    dragAnswer_model02_v1.prototype.onLibraHint = function () {
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
    dragAnswer_model02_v1.prototype.onHandleGuide = function () {
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
    // 运行时 禁止操作
    dragAnswer_model02_v1.prototype.forbidHandle = function () {
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
    dragAnswer_model02_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model02_v1.prototype.dragSchedule = function () {
        if (this._dragging) {
            var state = globalThis._.cloneDeep(this._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
            };
            this.updateState(state);
        }
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model02_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model02_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model02_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model02_v1.prototype.onEnable = function () {
        this.registerState();
        this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model02_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model02_v1 = __decorate([
        ccclass
    ], dragAnswer_model02_v1);
    return dragAnswer_model02_v1;
}(cc.Component));
exports.default = dragAnswer_model02_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDItdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBRXZFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1ELHlDQUFZO0lBQS9EO1FBQUEscUVBaWJDO1FBNVpXLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQW1aeEIsQ0FBQztJQWpaRyxzQkFBSSx3Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsc0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENB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QixDQUFDO0lBaGJnQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQWliekM7SUFBRCw0QkFBQztDQWpiRCxBQWliQyxDQWpia0QsRUFBRSxDQUFDLFNBQVMsR0FpYjlEO2tCQWpib0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wMy0yNiAxODowNToxMlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xOSAxNDozMzoyMVxyXG4gKi9cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDJfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIHByaXZhdGUgX3JvYm90OmZndWkuR0xvYWRlcjtcclxuICAgIHByaXZhdGUgX2R5VUk6Zmd1aS5HR3JvdXA7XHJcbiAgICBwcml2YXRlIF9jb2xsaWRlckdyb3VwOmZndWkuR0dyb3VwO1xyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJlZEdyb3VwOmZndWkuR0dyb3VwO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHdWlkZTogYW55O1xyXG4gICAgcHJpdmF0ZSBsaW5lQmxpbms6IGFueTtcclxuXHJcbiAgICAvLyDov5znqIvliqjmgIHnu4Tku7ZcclxuICAgIHByaXZhdGUgZmVlZGJhY2s6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xsaWRlckJveCA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY29sbGlkZXJlZEJveCA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2NhY2hlID0ge307XHJcbiAgICBwcml2YXRlIF9zY2hlZHVsZVRpbWUgPSAuMztcclxuICAgIHByaXZhdGUgX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfYW5zd2VyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZSA9IHt9O1xyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVaSh0aGlzLl9zdGF0ZSwgdik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl93b3JsZFJvb3QgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLl92aWV3LndpZHRoKSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcblxyXG4gICAgICAgIC8vIOiHqOaZglxyXG4gICAgICAgIC8vIGJ1ZyDliJ3lp4vorr7nva7kuI3mkq3mlL7kuI3nlJ/mlYhcclxuICAgICAgICBpZiAodGhpcy5fYzIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlVHJpZ2dlciA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJ0aXRsZVRyaWdnZXJcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlVHJpZ2dlcikgdGhpcy5fdGl0bGVUcmlnZ2VyLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrVGl0bGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9yb2JvdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJyb2JvdFwiKS5hc0xvYWRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5fZHlVSSA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJkeVVJXCIpLmFzR3JvdXA7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZXJHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlckJveFwiKS5hc0dyb3VwO1xyXG4gICAgICAgIHRoaXMuX2NvbGxpZGVyZWRHcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJjb2xsaWRlcmVkQm94XCIpLmFzR3JvdXA7XHJcblxyXG4gICAgICAgIC8vIGNvbGxpZGVyR3JvdXAudmlzaWJsZSA9IGZhbHNlIFxyXG4gICAgICAgIC8vIGNvbGxpZGVyZWRHcm91cC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IHRoaXMuX2NvbGxpZGVyR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG46IGZndWkuR0J1dHRvbiA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0ucHVzaCh7IHg6IGJ0bi54LCB5OiBidG4ueSB9KTtcclxuICAgICAgICAgICAgICAgIGJ0bi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sIHRoaXMuX29uRHJhZ1N0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgYnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCB0aGlzLl9vbkRyYWdFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3gucHVzaChidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IHRoaXMuX2NvbGxpZGVyZWRHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bjogZmd1aS5HQnV0dG9uID0gdGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmFzQnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJlZEJveC5wdXNoKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyYWc6IFwiZW5kXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29sbGlkZXI6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl0ubWFwKCh2OiBhbnkpID0+IHYpLFxyXG4gICAgICAgICAgICBjb2xsaWRlckluZGV4OiBudWxsLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Li05pe2IOemgeatouaTjeS9nOacn+mXtCDliIfpobVcclxuICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOS4tOaXtiBtb2RlbCBjb21wb25lbnQganNvbiDphY3nva7liqDovb1cclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcblxyXG4gICAgICAgIGlmIChtb2RlbC51aVBhdGgpIHtcclxuICAgICAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kZWwuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGxldCB7IGFuc3dlciwgYWUgfSA9IG1vZGVsLmNvbmZpZztcclxuICAgICAgICAgICAgaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICAgICAgaWYgKGFlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldE9yaWdpblZhbHVlKHY6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHYueCxcclxuICAgICAgICAgICAgeTogdi55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2dC5jYXB0dXJlVG91Y2goKTtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBsZXQgY29sbGlkZXI6IGFueSA9IGZndWkuR09iamVjdC5jYXN0KGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgY29sbGlkZXJJbmRleDogbnVtYmVyID0gdGhpcy5fY29sbGlkZXJCb3guZmluZEluZGV4KCh2OiBhbnkpID0+IHYgPT0gY29sbGlkZXIpO1xyXG4gICAgICAgIHN0YXRlLmNvbGxpZGVySW5kZXggPSBjb2xsaWRlckluZGV4O1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaWRlcjogYW55ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBjb2xsaWRlckluZGV4OiBudW1iZXIgPSB0aGlzLl9jb2xsaWRlckJveC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjb2xsaWRlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG9iajogYW55ID0gdGhpcy5fYWRzb3JiKGNvbGxpZGVyLCBjb2xsaWRlckluZGV4KTtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBpZiAob2JqLmJvb2wpIHtcclxuICAgICAgICAgICAgc3RhdGUuY29sbGlkZXJbY29sbGlkZXJJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBvYmoucG9zLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvYmoucG9zLnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJCb3gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xsaWRlciA9PSB0aGlzLl9jb2xsaWRlckJveFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbGxpZGVyW2NvbGxpZGVySW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9jYWNoZVtcImNvbGxpZGVyQm94XCJdW2ldLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2NhY2hlW1wiY29sbGlkZXJCb3hcIl1baV0ueVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUuZHJhZyA9IFwiZW5kXCI7XHJcbiAgICAgICAgc3RhdGUuY29sbGlkZXJJbmRleCA9IGNvbGxpZGVySW5kZXg7XHJcblxyXG4gICAgICAgIGxldCBhbnN3ZXJCb29sOiBib29sZWFuID0gc3RhdGUuY29sbGlkZXIuZXZlcnkoKHY6IGFueSwgaTogYW55KSA9PiAhZ2xvYmFsVGhpcy5fLmlzRXF1YWwodiwgdGhpcy5fY2FjaGVbXCJjb2xsaWRlckJveFwiXVtpXSkpO1xyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IGFuc3dlckJvb2w7XHJcbiAgICAgICAgaWYgKGFuc3dlckJvb2wpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4tOaXtlxyXG4gICAgLy8g5Yy65Z+f5omA5bGe5Yik5patXHJcbiAgICBwcml2YXRlIF9hZHNvcmIob2JqOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYTogYW55O1xyXG4gICAgICAgIGxldCBiOiBhbnk7XHJcbiAgICAgICAgbGV0IGM6IGFueTtcclxuICAgICAgICBsZXQgczogYW55O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY29sbGlkZXJlZEJveC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhID0gb2JqLnggLSB0aGlzLl9jb2xsaWRlcmVkQm94W2ldLng7XHJcbiAgICAgICAgICAgIGIgPSBvYmoueSAtIHRoaXMuX2NvbGxpZGVyZWRCb3hbaV0ueTtcclxuICAgICAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjID4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcclxuICAgICAgICAgICAgICAgICAgICBzID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XHJcbiAgICAgICAgICAgICAgICBzID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBib29sOiBjIDwgNjUgJiYgaW5kZXggPT0gcyxcclxuICAgICAgICAgICAgczogcyxcclxuICAgICAgICAgICAgcG9zOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9jb2xsaWRlcmVkQm94W3NdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlcmVkQm94W3NdLnksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrVGl0bGUoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnRpdGxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS54ID0gc3RhdGUuY29sbGlkZXJbc3RhdGUuY29sbGlkZXJJbmRleF0ueDtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF0ueSA9IHN0YXRlLmNvbGxpZGVyW3N0YXRlLmNvbGxpZGVySW5kZXhdLnk7XHJcbiAgICAgICAgICAgIC8vIGxldCBjb2xsaWRlcjogYW55ID0gdGhpcy5fY29sbGlkZXJCb3hbc3RhdGUuY29sbGlkZXJJbmRleF07XHJcbiAgICAgICAgICAgIC8vIGxldCBjb2xsaWRlcmVkSW5kZXg6IG51bWJlciA9IHRoaXMuX2NvbGxpZGVyZWRCb3guZmluZEluZGV4KChjb2xsaWRlcmVkOiBhbnkpID0+IHRoaXMuX2JlbG9uZ0FyZWEoY29sbGlkZXIsIGNvbGxpZGVyZWQsIDEwMCkgPT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbGxpZGVyZWRJbmRleCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2NvbGxpZGVyZWRCb3hbY29sbGlkZXJlZEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcImVuZFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuY29sbGlkZXIsIHN0YXRlLmNvbGxpZGVyKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb2xsaWRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLnggPSBzdGF0ZS5jb2xsaWRlcltpXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxpZGVyQm94W2ldLnkgPSBzdGF0ZS5jb2xsaWRlcltpXS55O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUudGl0bGUsIHN0YXRlLnRpdGxlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5VGl0bGUoc3RhdGUudGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuYW5zd2VyLCBzdGF0ZS5hbnN3ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuYW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2ZlcihzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4tOaXtlxyXG4gICAgdHJhbnNmZXIoYW5zd2VyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgIHRoaXMuX2R5VUkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2NvbGxpZGVyR3JvdXAudmlzaWJsZSA9IGZhbHNlIFxyXG4gICAgICAgIHRoaXMuX2NvbGxpZGVyZWRHcm91cC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcm9ib3QudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcm9ib3QucGxheWluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZHlVSS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJHcm91cC52aXNpYmxlID0gdHJ1ZSBcclxuICAgICAgICAgICAgdGhpcy5fY29sbGlkZXJlZEdyb3VwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9yb2JvdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvYm90LnBsYXlpbmcgPSBmYWxzZTsgXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKGFuc3dlcik7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5mZWVkYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZlZWRiYWNrKTtcclxuICAgICAgICBmZWVkYmFjay54ID0gOTYwO1xyXG4gICAgICAgIGZlZWRiYWNrLnkgPSA1NDA7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrSnM6IGFueSA9IGZlZWRiYWNrLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZlZWRiYWNrSnMuaW5pdChib29sKTtcclxuICAgICAgICBmZWVkYmFjay5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOS4tOaXtlxyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuXHJcbiAgICAgICAgICAgIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWkqeaesOaPkOekulxyXG4gICAgb25MaWJyYUhpbnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpbmVCbGluaykgcmV0dXJuO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmxpbmVCbGluay5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmVCbGluay5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmxpbmVCbGluay5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMubGluZUJsaW5rLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5saW5lQmxpbmsuY29tcG9uZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDov5DooYzml7Yg56aB5q2i5pON5L2cXHJcbiAgICBmb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoIWhhbmRsZU1hc2spIHtcclxuICAgICAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSBuZXcgY2MuTm9kZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5wYXJlbnQgPSB0aGlzLl93b3JsZFJvb3Q7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sud2lkdGggPSAxOTIwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLmhlaWdodCA9IDEwODA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueCA9IDk2MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay55ID0gNTQwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmtojpmaTnpoHmraJcclxuICAgIGRpc2FibGVGb3JiaWRIYW5kbGUoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1hc2sgPSB0aGlzLl93b3JsZFJvb3QuZ2V0Q2hpbGRCeU5hbWUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICBpZiAoaGFuZGxlTWFzaykgaGFuZGxlTWFzay5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Li05pe2XHJcbiAgICAvLyDmi5bmi73lrprml7blmahcclxuICAgIGRyYWdTY2hlZHVsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZyA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBzdGF0ZS5jb2xsaWRlcltzdGF0ZS5jb2xsaWRlckluZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2NvbGxpZGVyQm94W3N0YXRlLmNvbGxpZGVySW5kZXhdLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9jb2xsaWRlckJveFtzdGF0ZS5jb2xsaWRlckluZGV4XS55LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmRyYWdTY2hlZHVsZSwgdGhpcy5fc2NoZWR1bGVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/choose/choose-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd05919cBRDMbpAcmU8if2h', 'choose-model01-v1');
// prefabLibrary/models/choose/choose-model01-v1.ts

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
 * @LastEditTime: 2021-05-17 21:33:18
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var choose_model01_v1 = /** @class */ (function (_super) {
    __extends(choose_model01_v1, _super);
    function choose_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 选项集合
        _this._options = [];
        _this._cache = {};
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(choose_model01_v1.prototype, "state", {
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
    choose_model01_v1.prototype.onLoad = function () {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
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
        var optionGroup = this._view.getChild("optionBox").asGroup;
        for (var i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == optionGroup) {
                var btn = this._view.getChildAt(i).asButton;
                btn.on(fgui.Event.CLICK, this._clickOption, this);
                this._options.push(btn);
            }
        }
        // 初始化state
        this._state = {
            option: 0,
            title: false,
            submit: false,
            checkAnswer: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    choose_model01_v1.prototype.init = function (data) {
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
    choose_model01_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    choose_model01_v1.prototype._clickOption = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var option = fgui.GObject.cast(evt.currentTarget);
        var optionIndex = this._options.findIndex(function (v) { return v == option; });
        state.option = optionIndex + 1;
        this.updateState(state);
    };
    choose_model01_v1.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.answer = state.option == this._answer;
        state.submit = true;
        this.updateState(state);
    };
    // 获取状态
    choose_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    choose_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    choose_model01_v1.prototype.updateUi = function (oldState, state) {
        if (!globalThis._.isEqual(oldState.option, state.option)) {
            this._c1.selectedIndex = state.option;
        }
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                state.option ? this.afterSubmit() : this.onHandleGuide();
            }
        }
        if (!globalThis._.isEqual(oldState.checkAnswer, state.checkAnswer)) {
            if (state.checkAnswer) {
                this.answerFeedback(state.answer);
            }
        }
    };
    choose_model01_v1.prototype.playTitle = function (bool) {
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
    choose_model01_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
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
            state.checkAnswer = false;
            _this.updateState(state);
        }, 2000);
    };
    // 提交后 动画
    choose_model01_v1.prototype.afterSubmit = function () {
        var _this = this;
        var state = globalThis._.cloneDeep(this._state);
        var t = this._view.getTransition("t1");
        t.play(function () {
            state.answer = state.option == _this._answer;
            state.submit = false;
            state.checkAnswer = true;
            _this.updateState(state);
        }, 1);
    };
    // 操作提示
    choose_model01_v1.prototype.onHandleGuide = function () {
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
    // 运行时 禁止操作
    choose_model01_v1.prototype.forbidHandle = function () {
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
    choose_model01_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 注册状态，及获取状态的方法
    choose_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    choose_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    choose_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    choose_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    choose_model01_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    choose_model01_v1 = __decorate([
        ccclass
    ], choose_model01_v1);
    return choose_model01_v1;
}(cc.Component));
exports.default = choose_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxjaG9vc2VcXGNob29zZS1tb2RlbDAxLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQTJDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQXBFLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsWUFBWSxrQkFBZ0MsQ0FBQztBQUNyRSxJQUFBLGVBQWUsR0FBSyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxnQkFBL0IsQ0FBZ0M7QUFFakQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUF1UkM7UUF2UUcsT0FBTztRQUNDLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLFlBQU0sR0FBRyxFQUFFLENBQUM7O0lBa1F4QixDQUFDO0lBaFFHLHNCQUFJLG9DQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFRRCxrQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FB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QzdCLENBQUM7SUF0UmdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBdVJyQztJQUFELHdCQUFDO0NBdlJELEFBdVJDLENBdlI4QyxFQUFFLENBQUMsU0FBUyxHQXVSMUQ7a0JBdlJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTE3IDIxOjMzOjE4XHJcbiAqL1xyXG5jb25zdCB7IGxvYWRCdW5kbGUsIGxvYWRQcmVmYWIsIGxvYWRSZXNvdXJjZSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5jb25zdCB7IHBvaW50QmVsb25nQXJlYSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10udXRpbHM7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hvb3NlX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHdWlkZTogYW55O1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIC8vIOmAiemhuembhuWQiFxyXG4gICAgcHJpdmF0ZSBfb3B0aW9ucyA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY2FjaGUgPSB7fTtcclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICB0aGlzLl92aWV3LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5fdmlldy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG4gICAgICAgIC8vIOiHqOaZglxyXG4gICAgICAgIC8vIGJ1ZyDliJ3lp4vorr7nva7kuI3mkq3mlL7kuI3nlJ/mlYhcclxuICAgICAgICBpZiAodGhpcy5fYzIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25Hcm91cCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJvcHRpb25Cb3hcIikuYXNHcm91cDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZpZXcubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdmlldy5nZXRDaGlsZEF0KGkpLmdyb3VwID09IG9wdGlvbkdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl92aWV3LmdldENoaWxkQXQoaSkuYXNCdXR0b247XHJcbiAgICAgICAgICAgICAgICBidG4ub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tPcHRpb24sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wdGlvbjowLFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNoZWNrQW5zd2VyOmZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyDkuLTml7YgbW9kZWwgY29tcG9uZW50IGpzb24g6YWN572u5Yqg6L29XHJcbiAgICAgICAgbGV0IHsgcGF0aENvbmZpZywgbW9kZWwsIGNvbXBvbmVudHMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IFBhY2thZ2UgPSBwYXRoQ29uZmlnLnBhY2thZ2VOYW1lO1xyXG4gICAgICAgIGxldCBHQ29tcG9uZW50ID0gbW9kZWwudWlQYXRoO1xyXG4gICAgICAgIGxldCB7IGFuc3dlciwgYWUgfSA9IG1vZGVsLmNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuXHJcbiAgICAgICAgLy8g5Yqo5pWI5rOo5YaMXHJcbiAgICAgICAgZm9yIChsZXQgdiBpbiBhZSkge1xyXG4gICAgICAgICAgICBpZiAoYWVbdl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChhZVt2XS5jb21wb25lbnQpIHRoaXNbdl0uY29tcG9uZW50ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIGFlW3ZdLmNvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgICAgICAgICBpZiAoYWVbdl0ucG9zKSB0aGlzW3ZdLnBvcyA9IGFlW3ZdLnBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQYXRoOiBhbnkgPSBgJHtwYXRoQ29uZmlnLnJlbW90ZVVybH0ke3BhdGhDb25maWcuY29tcG9uZW50QnVuZGxlUGF0aH0ke2NvbXBvbmVudHNba2V5XS5idW5kbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50QnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbXBvbmVudFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb21wb25lbnRCdW5kbGUsIGNvbXBvbmVudHNba2V5XS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbXBvbmVudFByZWZhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tPcHRpb24oZXZ0OiBhbnkpe1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbjogYW55ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIGxldCBvcHRpb25JbmRleDpudW1iZXIgPSB0aGlzLl9vcHRpb25zLmZpbmRJbmRleCgodjphbnkpID0+IHYgPT0gb3B0aW9uKTtcclxuICAgICAgICBzdGF0ZS5vcHRpb24gPSBvcHRpb25JbmRleCArIDE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrU3VibWl0KGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUub3B0aW9uID09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkob2xkU3RhdGU6IGFueSwgc3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUub3B0aW9uLCBzdGF0ZS5vcHRpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSBzdGF0ZS5vcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUudGl0bGUsIHN0YXRlLnRpdGxlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG4gICAgICAgICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgc3RhdGUub3B0aW9uID8gdGhpcy5hZnRlclN1Ym1pdCgpIDogdGhpcy5vbkhhbmRsZUd1aWRlKCk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5jaGVja0Fuc3dlciwgc3RhdGUuY2hlY2tBbnN3ZXIpKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jaGVja0Fuc3dlcikge1xyXG4gICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuXHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbzogY2MuQXVkaW9DbGlwID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbnN3ZXJGZWVkYmFjayhib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZlZWRiYWNrKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgZmVlZGJhY2s6IGFueSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmVlZGJhY2spO1xyXG4gICAgICAgIGZlZWRiYWNrLnggPSA5NjA7XHJcbiAgICAgICAgZmVlZGJhY2sueSA9IDU0MDtcclxuICAgICAgICBsZXQgZmVlZGJhY2tKczogYW55ID0gZmVlZGJhY2suZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZmVlZGJhY2tKcy5pbml0KGJvb2wpO1xyXG4gICAgICAgIGZlZWRiYWNrLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZmVlZGJhY2suZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN0YXRlLmNoZWNrQW5zd2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaPkOS6pOWQjiDliqjnlLtcclxuICAgIGFmdGVyU3VibWl0KCl7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5fdmlldy5nZXRUcmFuc2l0aW9uKFwidDFcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLm9wdGlvbiA9PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzdGF0ZS5jaGVja0Fuc3dlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaTjeS9nOaPkOekulxyXG4gICAgb25IYW5kbGVHdWlkZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlR3VpZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlR3VpZGUucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQud2lkdGgpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/kOihjOaXtiDnpoHmraLmk43kvZxcclxuICAgIGZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmICghaGFuZGxlTWFzaykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlTWFzayA9IG5ldyBjYy5Ob2RlKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnBhcmVudCA9IHRoaXMuX3dvcmxkUm9vdDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay53aWR0aCA9IDE5MjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suaGVpZ2h0ID0gMTA4MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay54ID0gOTYwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnkgPSA1NDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa2iOmZpOemgeatolxyXG4gICAgZGlzYWJsZUZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmIChoYW5kbGVNYXNrKSBoYW5kbGVNYXNrLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a13c8/eIVFLEpkoqHBFYILF', 'dragAnswer-model01-v1');
// prefabLibrary/models/dragAnswer/dragAnswer-model01-v1.ts

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
 * @LastEditTime: 2021-05-12 16:13:16
 */
var _a = window['GlobalData'].sample, loadBundle = _a.loadBundle, loadPrefab = _a.loadPrefab, loadResource = _a.loadResource;
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var dragAnswer_model01_v1 = /** @class */ (function (_super) {
    __extends(dragAnswer_model01_v1, _super);
    function dragAnswer_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._grids = [];
        _this._cache = {};
        _this._scheduleTime = .3;
        _this._dragging = false;
        _this._answer = 0;
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model01_v1.prototype, "state", {
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
    dragAnswer_model01_v1.prototype.onLoad = function () {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
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
        this._dragBtn = this._view.getChild("dragBtn").asButton;
        this._cache["dragOrigin"] = this.getOriginValue(this._dragBtn);
        this._dragBtn.draggable = true;
        this._dragBtn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
        this._dragBtn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        this._dragBtn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
        this._btnBox = this._view.getChild("btnBox").asButton;
        if (this._btnBox)
            this._btnBox.on(fgui.Event.CLICK, this._clickRemove, this);
        var aGroup = this._btnBox.getChild("grids").asGroup;
        // for (let i = 0; i < this._btnBox.numChildren; i++) {
        //     if (this._btnBox.getChildAt(i).group == aGroup) {
        //         let grid: fgui.GLoader = this._btnBox.getChildAt(i).asLoader;
        //         this._grids.push(grid);
        //     }
        // }
        for (var i = this._btnBox.numChildren - 1; i > -1; i--) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                var grid = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }
        // 初始化state
        this._state = {
            drag: "end",
            dragBtn: {
                x: this._dragBtn.x,
                y: this._dragBtn.y
            },
            title: false,
            drops: 0,
            submit: false,
            answer: false
        };
        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    };
    dragAnswer_model01_v1.prototype.init = function (data) {
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
    dragAnswer_model01_v1.prototype.getOriginValue = function (v) {
        return {
            x: v.x,
            y: v.y
        };
    };
    dragAnswer_model01_v1.prototype._onDragStart = function (evt) {
        evt.captureTouch();
        var state = globalThis._.cloneDeep(this._state);
        state.drag = "start";
        state.answer = state.drops === this._answer;
        this.updateState(state);
    };
    dragAnswer_model01_v1.prototype._onDragMove = function (evt) {
        this._dragging = true;
    };
    dragAnswer_model01_v1.prototype._onDragEnd = function (evt) {
        this._dragging = false;
        var state = globalThis._.cloneDeep(this._state);
        var bool = pointBelongArea("rectangle", this._btnBox, this._dragBtn);
        if (bool) {
            var icon = this._dragBtn.getChild("icon").asLoader;
            var grid = this._grids.find(function (v) { return v.url === null; });
            if (grid) {
                //grid.url = icon.url;
                state.drops = state.drops + 1;
            }
        }
        state.dragBtn = {
            x: this._cache["dragOrigin"].x,
            y: this._cache["dragOrigin"].y,
        };
        state.drag = "end";
        state.answer = state.drops === this._answer;
        this.updateState(state);
    };
    dragAnswer_model01_v1.prototype._clickRemove = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var index = this._grids.findIndex(function (v) { return v.url === null; });
        if (index !== 0) {
            // let grid: fgui.GLoader = this._grids[index == -1 ? this._grids.length - 1 : index - 1];
            // grid.url = null;
            state.drops = state.drops - 1;
            state.answer = state.drops === this._answer;
            this.updateState(state);
        }
    };
    dragAnswer_model01_v1.prototype._clickTitle = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    };
    dragAnswer_model01_v1.prototype._clickSubmit = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                state = globalThis._.cloneDeep(this._state);
                state.answer = state.drops === this._answer;
                state.submit = true;
                this.updateState(state);
                return [2 /*return*/];
            });
        });
    };
    // 获取状态
    dragAnswer_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model01_v1.prototype.updateUi = function (oldState, state) {
        if (state.drag == "move") {
            this._dragBtn.x = state.dragBtn.x;
            this._dragBtn.y = state.dragBtn.y;
        }
        if (state.drag == "end") {
            this._dragBtn.x = this._cache["dragOrigin"].x;
            this._dragBtn.y = this._cache["dragOrigin"].y;
            if (!globalThis._.isEqual(oldState.drops, state.drops)) {
                for (var i = 0; i < this._grids.length; i++) {
                    var grid = this._grids[i];
                    if (state.drops > i) {
                        if (!grid.url) {
                            var icon = this._dragBtn.getChild("icon").asLoader;
                            grid.url = icon.url;
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
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }
        }
    };
    dragAnswer_model01_v1.prototype.playTitle = function (bool) {
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
    dragAnswer_model01_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
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
    dragAnswer_model01_v1.prototype.onLibraHint = function () {
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
    dragAnswer_model01_v1.prototype.onHandleGuide = function () {
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
    // 运行时 禁止操作
    dragAnswer_model01_v1.prototype.forbidHandle = function () {
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
    dragAnswer_model01_v1.prototype.disableForbidHandle = function () {
        var handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask)
            handleMask.destroy();
    };
    // 临时
    // 拖拽定时器
    dragAnswer_model01_v1.prototype.dragSchedule = function () {
        if (this._dragging) {
            var state = globalThis._.cloneDeep(this._state);
            state.drag = "move";
            state.dragBtn = {
                x: this._dragBtn.x,
                y: this._dragBtn.y,
            };
            this.updateState(state);
        }
    };
    // 注册状态，及获取状态的方法
    dragAnswer_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model01_v1.prototype.onEnable = function () {
        this.registerState();
        this.schedule(this.dragSchedule, this._scheduleTime);
    };
    dragAnswer_model01_v1.prototype.onDisable = function () {
        this.relieveState();
        cc.audioEngine.stopAll();
    };
    dragAnswer_model01_v1 = __decorate([
        ccclass
    ], dragAnswer_model01_v1);
    return dragAnswer_model01_v1;
}(cc.Component));
exports.default = dragAnswer_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDEtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQXlZQztRQXRYVyxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLFlBQU0sR0FBRyxFQUFFLENBQUM7O0lBOFd4QixDQUFDO0lBNVdHLHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFRRCxzQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVB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QUMsQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXhZZ0IscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0F5WXpDO0lBQUQsNEJBQUM7Q0F6WUQsQUF5WUMsQ0F6WWtELEVBQUUsQ0FBQyxTQUFTLEdBeVk5RDtrQkF6WW9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDUtMTIgMTY6MTM6MTZcclxuICovXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ0J0bjogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfYnRuQm94OiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF90aXRsZVRyaWdnZXI6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuICAgIHByaXZhdGUgbGluZUJsaW5rOiBhbnk7XHJcblxyXG4gICAgLy8g6L+c56iL5Yqo5oCB57uE5Lu2XHJcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZ3JpZHMgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jYWNoZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVUaW1lID0gLjM7XHJcbiAgICBwcml2YXRlIF9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICB0aGlzLl92aWV3LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5fdmlldy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG4gICAgICAgIC8vIOiHqOaZglxyXG4gICAgICAgIC8vIGJ1ZyDliJ3lp4vorr7nva7kuI3mkq3mlL7kuI3nlJ/mlYhcclxuICAgICAgICBpZiAodGhpcy5fYzIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3VibWl0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInN1Ym1pdFwiKS5hc0J1dHRvbjtcclxuICAgICAgICBpZiAodGhpcy5fc3VibWl0KSB0aGlzLl9zdWJtaXQub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tTdWJtaXQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl90aXRsZVRyaWdnZXIgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVUcmlnZ2VyXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGlmICh0aGlzLl90aXRsZVRyaWdnZXIpIHRoaXMuX3RpdGxlVHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RpdGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl92aWV3LmdldENoaWxkKFwidGl0bGVcIikuYXNCdXR0b247XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4gPSB0aGlzLl92aWV3LmdldENoaWxkKFwiZHJhZ0J0blwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLl9jYWNoZVtcImRyYWdPcmlnaW5cIl0gPSB0aGlzLmdldE9yaWdpblZhbHVlKHRoaXMuX2RyYWdCdG4pO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnQnRuLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0J0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX0JFR0lOLCB0aGlzLl9vbkRyYWdTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0J0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4ub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2J0bkJveCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJidG5Cb3hcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX2J0bkJveCkgdGhpcy5fYnRuQm94Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrUmVtb3ZlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IGFHcm91cCA9IHRoaXMuX2J0bkJveC5nZXRDaGlsZChcImdyaWRzXCIpLmFzR3JvdXA7XHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYnRuQm94Lm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGFHcm91cCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmFzTG9hZGVyO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZ3JpZHMucHVzaChncmlkKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2J0bkJveC5udW1DaGlsZHJlbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9idG5Cb3guZ2V0Q2hpbGRBdChpKS5ncm91cCA9PSBhR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9idG5Cb3guZ2V0Q2hpbGRBdChpKS5hc0xvYWRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dyaWRzLnB1c2goZ3JpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyYWc6IFwiZW5kXCIsXHJcbiAgICAgICAgICAgIGRyYWdCdG46IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2RyYWdCdG4ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2RyYWdCdG4ueVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyb3BzOiAwLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkuLTml7Yg56aB5q2i5pON5L2c5pyf6Ze0IOWIh+mhtVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlIH0gPSBtb2RlbC5jb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcblxyXG4gICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXIpIHRoaXMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JpZ2luVmFsdWUodjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdi54LFxyXG4gICAgICAgICAgICB5OiB2LnlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnU3RhcnQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZ0LmNhcHR1cmVUb3VjaCgpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLmRyYWcgPSBcInN0YXJ0XCI7XHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdFbmQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgYm9vbDpib29sZWFuID0gcG9pbnRCZWxvbmdBcmVhKFwicmVjdGFuZ2xlXCIsIHRoaXMuX2J0bkJveCwgdGhpcy5fZHJhZ0J0bik7XHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgbGV0IGljb246IGZndWkuR0xvYWRlciA9IHRoaXMuX2RyYWdCdG4uZ2V0Q2hpbGQoXCJpY29uXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICBsZXQgZ3JpZDogZmd1aS5HTG9hZGVyID0gdGhpcy5fZ3JpZHMuZmluZCh2ID0+IHYudXJsID09PSBudWxsKTtcclxuICAgICAgICAgICAgaWYgKGdyaWQpIHtcclxuICAgICAgICAgICAgICAgIC8vZ3JpZC51cmwgPSBpY29uLnVybDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmRyb3BzID0gc3RhdGUuZHJvcHMgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5kcmFnQnRuID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLl9jYWNoZVtcImRyYWdPcmlnaW5cIl0ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5fY2FjaGVbXCJkcmFnT3JpZ2luXCJdLnksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGF0ZS5kcmFnID0gXCJlbmRcIjtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrUmVtb3ZlKGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLl9ncmlkcy5maW5kSW5kZXgoKHY6IGFueSkgPT4gdi51cmwgPT09IG51bGwpO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBsZXQgZ3JpZDogZmd1aS5HTG9hZGVyID0gdGhpcy5fZ3JpZHNbaW5kZXggPT0gLTEgPyB0aGlzLl9ncmlkcy5sZW5ndGggLSAxIDogaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgLy8gZ3JpZC51cmwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuZHJvcHMgPSBzdGF0ZS5kcm9wcyAtIDE7XHJcbiAgICAgICAgICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLmRyb3BzID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBfY2xpY2tTdWJtaXQoZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLmRyb3BzID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnQnRuLnggPSBzdGF0ZS5kcmFnQnRuLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdCdG4ueSA9IHN0YXRlLmRyYWdCdG4ueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwiZW5kXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ0J0bi54ID0gdGhpcy5fY2FjaGVbXCJkcmFnT3JpZ2luXCJdLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdCdG4ueSA9IHRoaXMuX2NhY2hlW1wiZHJhZ09yaWdpblwiXS55O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5kcm9wcywgc3RhdGUuZHJvcHMpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2dyaWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2dyaWRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5kcm9wcyA+IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFncmlkLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGljb246IGZndWkuR0xvYWRlciA9IHRoaXMuX2RyYWdCdG4uZ2V0Q2hpbGQoXCJpY29uXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC51cmwgPSBpY29uLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmlkLnVybCkgZ3JpZC51cmwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSBzdGF0ZS5kcm9wcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlLmFuc3dlcikgdGhpcy5vbkxpYnJhSGludCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5kcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhbmRsZUd1aWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnRpdGxlLCBzdGF0ZS50aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVRpdGxlKHN0YXRlLnRpdGxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVRpdGxlKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gYm9vbCA/IDEgOiAwO1xyXG5cclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gZmd1aS5VSVBhY2thZ2UuZ2V0SXRlbUJ5VVJMKHRoaXMuX3RpdGxlW1wiX3NvdW5kXCJdKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBhd2FpdCBsb2FkUmVzb3VyY2UoaXRlbS5maWxlLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICBsZXQgYXVkaW9JZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW8sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JZCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnRpdGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmVlZGJhY2spIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBmZWVkYmFjazogYW55ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mZWVkYmFjayk7XHJcbiAgICAgICAgZmVlZGJhY2sueCA9IDk2MDtcclxuICAgICAgICBmZWVkYmFjay55ID0gNTQwO1xyXG4gICAgICAgIGxldCBmZWVkYmFja0pzOiBhbnkgPSBmZWVkYmFjay5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBmZWVkYmFja0pzLmluaXQoYm9vbCk7XHJcbiAgICAgICAgZmVlZGJhY2sucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZWVkYmFjay5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlpKnmnrDmj5DnpLpcclxuICAgIG9uTGlicmFIaW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saW5lQmxpbmspIHJldHVybjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5saW5lQmxpbmsuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5saW5lQmxpbmsucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5saW5lQmxpbmsucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmxpbmVCbGluay5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVCbGluay5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMubGluZUJsaW5rLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6Zmk56aB5q2iXHJcbiAgICBkaXNhYmxlRm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hc2spIGhhbmRsZU1hc2suZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4tOaXtlxyXG4gICAgLy8g5ouW5ou95a6a5pe25ZmoXHJcbiAgICBkcmFnU2NoZWR1bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyYWcgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZ0J0biA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2RyYWdCdG4ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2RyYWdCdG4ueSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5kcmFnU2NoZWR1bGUsIHRoaXMuX3NjaGVkdWxlVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/components/pageController-model01-v1/javascripts/pageController-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e38d6/0G0NNdpig5hZ0ad6E', 'pageController-model01-v1');
// prefabLibrary/components/pageController-model01-v1/javascripts/pageController-model01-v1.ts

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
 * @Date: 2020-12-22 11:02:45
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-13 21:29:35
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var pageController_model01_v1 = /** @class */ (function (_super) {
    __extends(pageController_model01_v1, _super);
    function pageController_model01_v1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    pageController_model01_v1.prototype.onLoad = function () {
        var controller = this.node.parent.getChildByName("controller-model01");
        this._controllerJs = controller.getComponent(cc.Component);
    };
    pageController_model01_v1.prototype.init = function (data) {
        var prev = this.node.getChildByName("prev");
        var next = this.node.getChildByName("next");
        switch (data) {
            case "start":
                prev.active = false;
                next.active = true;
                break;
            case "end":
                prev.active = true;
                next.active = false;
                break;
            case "normal":
                prev.active = true;
                next.active = true;
                break;
            default:
                break;
        }
    };
    pageController_model01_v1.prototype.goPrev = function (e, ced) {
        if (!this._controllerJs)
            return;
        this._controllerJs.onJumpConfig(this._controllerJs._cPage - 1);
    };
    pageController_model01_v1.prototype.goNext = function (e, ced) {
        if (!this._controllerJs)
            return;
        this._controllerJs.onJumpConfig(this._controllerJs._cPage + 1);
    };
    pageController_model01_v1 = __decorate([
        ccclass
    ], pageController_model01_v1);
    return pageController_model01_v1;
}(cc.Component));
exports.default = pageController_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xccGFnZUNvbnRyb2xsZXItbW9kZWwwMS12MVxcamF2YXNjcmlwdHNcXHBhZ2VDb250cm9sbGVyLW1vZGVsMDEtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVELDZDQUFZO0lBQW5FOztJQXdDQSxDQUFDO0lBckNHLDBDQUFNLEdBQU47UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCx3Q0FBSSxHQUFKLFVBQUssSUFBUTtRQUNULElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVDLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELDBDQUFNLEdBQU4sVUFBTyxDQUFNLEVBQUUsR0FBUTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCwwQ0FBTSxHQUFOLFVBQU8sQ0FBTSxFQUFFLEdBQVE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBdENnQix5QkFBeUI7UUFEN0MsT0FBTztPQUNhLHlCQUF5QixDQXdDN0M7SUFBRCxnQ0FBQztDQXhDRCxBQXdDQyxDQXhDc0QsRUFBRSxDQUFDLFNBQVMsR0F3Q2xFO2tCQXhDb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMC0xMi0yMiAxMTowMjo0NVxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMyAyMToyOTozNVxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2VDb250cm9sbGVyX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlckpzOiBhbnk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImNvbnRyb2xsZXItbW9kZWwwMVwiKTtcclxuICAgICAgICB0aGlzLl9jb250cm9sbGVySnMgPSBjb250cm9sbGVyLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZGF0YTphbnkpe1xyXG4gICAgICAgIGxldCBwcmV2ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJldlwiKTtcclxuICAgICAgICBsZXQgbmV4dCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5leHRcIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgICAgIHByZXYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBuZXh0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxyXG4gICAgICAgICAgICAgICAgcHJldi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV4dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICBwcmV2LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBuZXh0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnb1ByZXYoZTogYW55LCBjZWQ6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udHJvbGxlckpzKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fY29udHJvbGxlckpzLm9uSnVtcENvbmZpZyh0aGlzLl9jb250cm9sbGVySnMuX2NQYWdlIC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29OZXh0KGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRyb2xsZXJKcykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJKcy5vbkp1bXBDb25maWcodGhpcy5fY29udHJvbGxlckpzLl9jUGFnZSArIDEpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/IDragAnswerModel03Base.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1736cyca9ZHNoOoWPutUzza', 'IDragAnswerModel03Base');
// prefabLibrary/models/dragAnswer/IDragAnswerModel03Base.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxJRHJhZ0Fuc3dlck1vZGVsMDNCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgSURyYWdBbnN3ZXJNb2RlbDAzQmFzZSB7XHJcbiAgICB1cGRhdGVVaSgpLFxyXG4gICAgbWVyZ2VTdGF0ZSgpLFxyXG4gICAgb25Mb2FkKCksXHJcbn0iXX0=
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
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 15:25:51
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
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
    };
    static_model01_v1.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var pathConfig, model, components, Package, GComponent;
            return __generator(this, function (_a) {
                pathConfig = data.pathConfig, model = data.model, components = data.components;
                Package = pathConfig.packageName;
                GComponent = model.uiPath;
                this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
                return [2 /*return*/];
            });
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxzdGF0aWNcXHN0YXRpYy1tb2RlbDAxLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQWlFQztRQS9EVyxZQUFNLEdBQUcsRUFBRSxDQUFBOztJQStEdkIsQ0FBQztJQTdERyxzQkFBSSxvQ0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFRRCxrQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUssZ0NBQUksR0FBVixVQUFXLElBQVM7Ozs7Z0JBRVYsVUFBVSxHQUF3QixJQUFJLFdBQTVCLEVBQUUsS0FBSyxHQUFpQixJQUFJLE1BQXJCLEVBQUUsVUFBVSxHQUFLLElBQUksV0FBVCxDQUFVO2dCQUN6QyxPQUFPLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDakMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7OztLQUN2RTtJQUVELE9BQU87SUFDUCxvQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDUix1Q0FBVyxHQUFYLFVBQVksUUFBYTtRQUNyQixJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQUUsT0FBTztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUTtJQUNSLG9DQUFRLEdBQVIsVUFBUyxLQUFVLElBQUksQ0FBQztJQUd4QixnQkFBZ0I7SUFDaEIseUNBQWEsR0FBYjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsd0NBQVksR0FBWjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2Isc0NBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFoRWdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBaUVyQztJQUFELHdCQUFDO0NBakVELEFBaUVDLENBakU4QyxFQUFFLENBQUMsU0FBUyxHQWlFMUQ7a0JBakVvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogUGxlYXNlIHNldCBMYXN0RWRpdG9yc1xyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA1LTE3IDE1OjI1OjUxXHJcbiAqL1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXRpY19tb2RlbDAxX3YxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3N0YXRlID0ge31cclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLl92aWV3LndpZHRoKSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IHBhdGhDb25maWcsIG1vZGVsLCBjb21wb25lbnRzIH0gPSBkYXRhO1xyXG4gICAgICAgIGxldCBQYWNrYWdlID0gcGF0aENvbmZpZy5wYWNrYWdlTmFtZTtcclxuICAgICAgICBsZXQgR0NvbXBvbmVudCA9IG1vZGVsLnVpUGF0aDtcclxuICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKHN0YXRlOiBhbnkpIHsgfVxyXG5cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMVxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUV0QyxJQUFBLEtBQStCLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBakQsUUFBUSxjQUFBLEVBQUUsY0FBYyxvQkFBeUIsQ0FBQztBQUNwRCxJQUFBLEtBQTJDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQXBFLFVBQVUsZ0JBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsWUFBWSxrQkFBZ0MsQ0FBQztBQUk3RTtJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQXNGQztRQW5GVyxrQkFBWSxHQUFHLEVBQUUsQ0FBQSxDQUFTLFVBQVU7UUFHcEMsWUFBTSxHQUFHLElBQUksQ0FBQyxDQUFhLE9BQU87UUFDbEMsZ0JBQVUsR0FBRyxJQUFJLENBQUMsQ0FBUyxLQUFLOztJQStFNUMsQ0FBQztJQTlFRyxtQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUVOLGlDQUFJLEdBQVYsVUFBVyxJQUFTOzs7Ozs7d0JBQ2hCLE9BQU87d0JBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFOzRCQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUMxQixzQkFBTzt5QkFDVjt3QkFFRCxLQUFLO3dCQUNMLHlDQUF5Qzt3QkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7NEJBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOzRCQUN2QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUNsQzt3QkFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFHaEIsU0FBUyxHQUFRLEtBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFXLENBQUM7d0JBQzNGLHFCQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQTlDLFdBQVcsR0FBUSxTQUEyQjt3QkFDM0IscUJBQU0sVUFBVSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFsRSxXQUFXLEdBQVEsU0FBK0M7d0JBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFHL0IsQ0FBQyxHQUFHLENBQUM7Ozs2QkFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQTt3QkFDaEMsU0FBUyxHQUFRLEtBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBWSxDQUFDO3dCQUNuRyxxQkFBTSxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUE5QyxXQUFXLEdBQVEsU0FBMkI7d0JBQzNCLHFCQUFNLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFuRixXQUFXLEdBQVEsU0FBZ0U7d0JBQ3ZGLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDOzs7d0JBSkcsQ0FBQyxFQUFFLENBQUE7Ozt3QkFRekMsWUFBWSxHQUFRLEtBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQWMsQ0FBQzt3QkFDM0gsS0FBQSxJQUFJLENBQUE7d0JBQW1CLHFCQUFNLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBQTs7d0JBQXJELEdBQUssZUFBZSxHQUFHLFNBQThCLENBQUM7d0JBQ3RELEtBQUEsUUFBUSxDQUFBO3dCQUFrQixxQkFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBM0csR0FBUyxjQUFjLEdBQUcsU0FBaUYsQ0FBQzt3QkFDNUcscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQTFCLFNBQTBCLENBQUM7Ozs7O0tBQzlCO0lBRUQsa0JBQWtCO0lBQ1osZ0RBQW1CLEdBQXpCLFVBQTBCLE1BQVcsRUFBRSxXQUFnQjs7O2dCQUNuRCxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQUMsS0FBSyxFQUFFLFNBQWM7NEJBQ2xFLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQy9CLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxFQUFBOzs7S0FDTDtJQUVELFVBQVU7SUFDSix5Q0FBWSxHQUFsQixVQUFtQixNQUFXOzs7O2dCQUN0QixJQUFJLEdBQVcsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxHQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUcvQyxPQUFPLEdBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5RCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RHLElBQUksQ0FBQyxPQUFPO29CQUFFLHNCQUFPO2dCQUVyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7b0JBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUV2RCxNQUFNLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxHQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQy9HLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFFeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFFN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3JCLGdCQUFnQjtnQkFDaEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7O0tBQ2pIO0lBckZnQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQXNGdEM7SUFBRCx5QkFBQztDQXRGRCxBQXNGQyxDQXRGK0MsRUFBRSxDQUFDLFNBQVMsR0FzRjNEO2tCQXRGb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMC0xMi0yMiAxMTowMjo0NVxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMyAyMToyNjowNlxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IHsgZ2FtZURhdGEsIG1vbml0b3JNZXNzYWdlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXTtcclxuY29uc3QgeyBsb2FkUHJlZmFiLCBsb2FkQnVuZGxlLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjb250cm9sbGVyX21vZGVsMDEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnSnNvbjogYW55OyAgICAgICAgIC8vIOmFjee9rmpzb25cclxuICAgIHByaXZhdGUgX3Jlc291cmNlQnVuZGxlOiBhbnk7ICAgICAvLyBmYWlyeWd1aSDov5znqItidW5kbGVcclxuICAgIHByaXZhdGUgX3BhZ2VQcmVmYWJzID0gW10gICAgICAgICAvLyDpopjlnovpooTliLbkvZPpm4blkIhcclxuICAgIHByaXZhdGUgX2N1cnJlbnRQYWdlTm9kZTogYW55OyAgICAvLyDlvZPliY3popjlnovoioLngrlcclxuXHJcbiAgICBwcml2YXRlIF9jUGFnZSA9IG51bGw7ICAgICAgICAgICAgIC8vIOW9k+WJjemhteeggVxyXG4gICAgcHJpdmF0ZSBfcGFuZWxOb2RlID0gbnVsbDsgICAgICAgICAvLyDpnaLmnb9cclxuICAgIG9uTG9hZCgpIHsgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g57Sg5p2Q6LWE5rqQXHJcbiAgICAgICAgaWYgKCFkYXRhLnBhdGhDb25maWcucmVzb3VyY2VOYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLntKDmnZDotYTmupDmnKrphY3nva7vvIFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtlxyXG4gICAgICAgIC8vIOWboOWuouaIt+erryhlbGVjdHJvbikg5LiL77yMZ2xvYmFsVGhpc+S4uiB1bmRlZmluZWRcclxuICAgICAgICBpZiAoIXdpbmRvdy5nbG9iYWxUaGlzKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxUaGlzID0ge307XHJcbiAgICAgICAgICAgIHdpbmRvdy5nbG9iYWxUaGlzLl8gPSB3aW5kb3cuXztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbmZpZ0pzb24gPSBkYXRhO1xyXG5cclxuICAgICAgICBmZ3VpLkdSb290LmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICAvLyDnlJ/miJDpnaLmnb9cclxuICAgICAgICBsZXQgcGFuZWxQYXRoOiBhbnkgPSBgJHtkYXRhLnBhdGhDb25maWcucmVtb3RlVXJsfSR7ZGF0YS5wYXRoQ29uZmlnLnBhbmVsQnVuZGxlUGF0aH0ke2RhdGEucGF0aENvbmZpZy5wYW5lbE5hbWV9YDtcclxuICAgICAgICBsZXQgcGFuZWxCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUocGFuZWxQYXRoKTtcclxuICAgICAgICBsZXQgcGFuZWxQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIocGFuZWxCdW5kbGUsIHBhbmVsQnVuZGxlLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuX3BhbmVsTm9kZSA9IGNjLmluc3RhbnRpYXRlKHBhbmVsUHJlZmFiKTtcclxuICAgICAgICB0aGlzLl9wYW5lbE5vZGUucGFyZW50ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5fcGFuZWxOb2RlLnggPSBjYy5maW5kKFwiQ2FudmFzXCIpLng7XHJcbiAgICAgICAgdGhpcy5fcGFuZWxOb2RlLnkgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnk7XHJcblxyXG4gICAgICAgIC8vIOWKoOi9vSDmiYDmnInpopjlnovpooTliLbku7ZcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2hhcHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1vZGVsUGF0aDogYW55ID0gYCR7ZGF0YS5wYXRoQ29uZmlnLnJlbW90ZVVybH0ke2RhdGEucGF0aENvbmZpZy5tb2RlbEJ1bmRsZVBhdGh9JHtkYXRhLmNoYXB0ZXJzW2ldLm1vZGVsLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgbGV0IG1vZGVsQnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKG1vZGVsUGF0aCk7XHJcbiAgICAgICAgICAgIGxldCBtb2RlbFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihtb2RlbEJ1bmRsZSwgZGF0YS5jaGFwdGVyc1tpXS5tb2RlbC5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZVByZWZhYnNbaV0gPSBtb2RlbFByZWZhYjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWKoOi9vXVpIOi1hOa6kOWMhVxyXG4gICAgICAgIGxldCByZXNvdXJjZVBhdGg6IGFueSA9IGAke2RhdGEucGF0aENvbmZpZy5yZW1vdGVVcmx9JHtkYXRhLnBhdGhDb25maWcucmVzb3VyY2VCdW5kbGVQYXRofSR7ZGF0YS5wYXRoQ29uZmlnLnJlc291cmNlTmFtZX1gO1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlQnVuZGxlID0gYXdhaXQgbG9hZEJ1bmRsZShyZXNvdXJjZVBhdGgpO1xyXG4gICAgICAgIGdhbWVEYXRhLnJlc291cmNlQnVuZGxlID0gYXdhaXQgdGhpcy5sb2FkUmVzb3VyY2VQYWNrYWdlKHRoaXMuX3Jlc291cmNlQnVuZGxlLCBkYXRhLnBhdGhDb25maWcucGFja2FnZU5hbWUpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMub25KdW1wQ29uZmlnKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWKoOi9vSBmYWlyeWd1aSDotYTmupDljIVcclxuICAgIGFzeW5jIGxvYWRSZXNvdXJjZVBhY2thZ2UoYnVuZGxlOiBhbnksIHBhY2thZ2VOYW1lOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5sb2FkUGFja2FnZShidW5kbGUsIHBhY2thZ2VOYW1lLCAoZXJyb3IsIFVJUGFja2FnZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKFVJUGFja2FnZS5fYnVuZGxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDpobXpnaLot7Povawg6YWN572uXHJcbiAgICBhc3luYyBvbkp1bXBDb25maWcodG9QYWdlOiBhbnkpIHtcclxuICAgICAgICBsZXQgcGFnZTogbnVtYmVyID0gdG9QYWdlIC0gMTtcclxuICAgICAgICBsZXQgY2hhcHRlcjogYW55ID0gdGhpcy5fY29uZmlnSnNvbi5jaGFwdGVyc1twYWdlXTtcclxuXHJcbiAgICAgICAgLy8g56ys5LiA6aG1IOmakOiXj+W3pueureWktCDmnIDlkI7kuIDpobUg6ZqQ6JeP5Y+z566t5aS0XHJcbiAgICAgICAgbGV0IHBhbmVsSnM6IGFueSA9IHRoaXMuX3BhbmVsTm9kZS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBwYW5lbEpzLmluaXQocGFnZSA9PT0gMCA/IFwic3RhcnRcIiA6IHRoaXMuX2NvbmZpZ0pzb24uY2hhcHRlcnMubGVuZ3RoIC0gMSA9PT0gcGFnZSA/IFwiZW5kXCIgOiBcIm5vcm1hbFwiKTtcclxuICAgICAgICBpZiAoIWNoYXB0ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkcmVuKDAsIC0xLCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFBhZ2VOb2RlKSB0aGlzLl9jdXJyZW50UGFnZU5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICBsZXQgcHJlZmFiOiBhbnkgPSB0aGlzLl9wYWdlUHJlZmFic1twYWdlXTtcclxuICAgICAgICBsZXQgbm9kZTogYW55ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICBsZXQgbm9kZUpzID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQ29tcG9uZW50KTtcclxuICAgICAgICBub2RlSnMuaW5pdCh7IHBhdGhDb25maWc6IHRoaXMuX2NvbmZpZ0pzb24ucGF0aENvbmZpZywgbW9kZWw6IGNoYXB0ZXIubW9kZWwsIGNvbXBvbmVudHM6IGNoYXB0ZXIuY29tcG9uZW50cyB9KTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VOb2RlID0gbm9kZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY1BhZ2UgPSB0b1BhZ2U7XHJcbiAgICAgICAgLy8g5b2T5YmN6aG16Z2iIHN0YXRlIOW/q+eFp1xyXG4gICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuc3RhdGVTaG9vdCA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAod2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVtcInN0YXRlXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
 * @LastEditTime: 2021-04-26 14:22:17
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
            monitoredName: null,
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
        state.monitoredName = null;
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
            state.monitoredName = null;
            state.launch = null;
            state.ranking = [];
        }
        else if (ced == 2) {
            state.launch = null;
        }
        else if (ced == 3) {
            state.monitored = null;
            state.monitoredName = null;
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
            state.monitoredName = null;
            curState = window['GlobalData'].courseData.stateShoot;
        }
        else {
            state.monitored = monitored;
            state.monitoredName = monitoredName;
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
        window['GlobalData'].courseData.monitoredName = state.monitoredName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xcZm9ybWFsLXBhbmxlLW1vZGVsMDJcXGphdmFzY3JpcHRzXFxmb3JtYWwtcGFubGUtbW9kZWwwMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUErU0M7UUExU0csZUFBUyxHQUFZLElBQUksQ0FBQztRQU0xQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQU01QixZQUFNLEdBQWMsRUFBRSxDQUFDO1FBRWhCLFlBQU0sR0FBRztZQUNaLElBQUksRUFBRSxLQUFLO1lBQ1gsY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixhQUFhLEVBQUMsSUFBSTtZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBY00sV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFxUXpCLENBQUM7SUFqUkcsc0JBQUksdUNBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztR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SSxJQUFJLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXpTRDtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtZQUNiLFdBQVcsRUFBRSxjQUFjO1NBQzlCLENBQUM7MkRBQ3dCO0lBTTFCO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1lBQ2IsV0FBVyxFQUFFLGdCQUFnQjtTQUNoQyxDQUFDOzZEQUMwQjtJQU01QjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDZixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDO3dEQUNxQjtJQWpCTixvQkFBb0I7UUFEeEMsT0FBTztPQUNhLG9CQUFvQixDQStTeEM7SUFBRCwyQkFBQztDQS9TRCxBQStTQyxDQS9TaUQsRUFBRSxDQUFDLFNBQVMsR0ErUzdEO2tCQS9Tb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMC0xMS0xOSAxODowNTowOVxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNC0yNiAxNDoyMjoxN1xyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvcm1hbF9wYW5sZV9tb2RlbDAyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ21vZGVsTGlzdCDoioLngrknXHJcbiAgICB9KVxyXG4gICAgbW9kZWxMaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdzdHVkZW50TGlzdCDoioLngrknXHJcbiAgICB9KVxyXG4gICAgc3R1ZGVudExpc3Q6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAn5qih5byP6IqC54K5J1xyXG4gICAgfSlcclxuICAgIG1vZGVsczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgcHVibGljIF9zdGF0ZSA9IHtcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzaWduYWxpbmdNb2RlbDogMSxcclxuICAgICAgICBtb25pdG9yZWQ6IG51bGwsXHJcbiAgICAgICAgbW9uaXRvcmVkTmFtZTpudWxsLFxyXG4gICAgICAgIGxhdW5jaDogbnVsbCxcclxuICAgICAgICBzdHVkZW50TGlzdDogW10sXHJcbiAgICAgICAgcmFua2luZzogW10sXHJcbiAgICAgICAgc25hcHNob290OiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLl9zdEpzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RKcyA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzdHVkZW50TGlzdCcpO1xyXG4gICAgICAgIHRoaXMuX3N0SnMgPSBzdHVkZW50LmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMllxyXG4gICAgYXN5bmMgaW5pdCgpIHsgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc2lnbmFsaW5nTW9kZWwgPSAxO1xyXG4gICAgICAgIHN0YXRlLnNuYXBzaG9vdCA9IHt9O1xyXG4gICAgICAgIHN0YXRlLm1vbml0b3JlZCA9IG51bGw7XHJcbiAgICAgICAgc3RhdGUubW9uaXRvcmVkTmFtZSA9IG51bGw7XHJcbiAgICAgICAgc3RhdGUubGF1bmNoID0gbnVsbDtcclxuICAgICAgICBzdGF0ZS5yYW5raW5nID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YiH5o2i6Z2i5p2/XHJcbiAgICBzd2l0Y2hCb3goZTogYW55LCBjZWQ6IGFueSkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnJvbGUgIT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnNob3cgPSAhc3RhdGUuc2hvdztcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliIfmjaLmqKHlvI9cclxuICAgIGNoYW5nZVNpZ25hbGluZ01vZGVsKGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlICE9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGNlZCA9PSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnNpZ25hbGluZ01vZGVsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5zaWduYWxpbmdNb2RlbCA9IHBhcnNlSW50KGNlZCk7XHJcblxyXG4gICAgICAgIGlmIChjZWQgPT0gMSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5tb25pdG9yZWQgPSBudWxsO1xyXG4gICAgICAgICAgICBzdGF0ZS5tb25pdG9yZWROYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgc3RhdGUubGF1bmNoID0gbnVsbDtcclxuICAgICAgICAgICAgc3RhdGUucmFua2luZyA9IFtdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VkID09IDIpIHtcclxuICAgICAgICAgICAgc3RhdGUubGF1bmNoID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGNlZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vbml0b3JlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vbml0b3JlZE5hbWUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByZXZTdGF0ZSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAod2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVtcInN0YXRlXCJdKTtcclxuICAgICAgICBsZXQgY3VyU3RhdGU6IGFueSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEuc3RhdGVTaG9vdDtcclxuXHJcbiAgICAgICAgaWYgKGN1clN0YXRlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpICYmIHYgIT0gXCJmb3JtYWwtcGFubGUtbW9kZWwwMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIh+aNouebkeaOp1xyXG4gICAgY2hhbmdlTW9uaXRvcmVkKGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlICE9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgbGV0IG1vbml0b3JlZCA9IHN0YXRlLnN0dWRlbnRMaXN0W3BhcnNlSW50KGNlZCldLmlkO1xyXG4gICAgICAgIGxldCBtb25pdG9yZWROYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0YXRlLnN0dWRlbnRMaXN0W3BhcnNlSW50KGNlZCldLm5pY2tuYW1lKTtcclxuXHJcbiAgICAgICAgbGV0IHByZXZTdGF0ZSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAod2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVtcInN0YXRlXCJdKTtcclxuICAgICAgICBsZXQgY3VyU3RhdGU6IGFueTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLm1vbml0b3JlZCA9PSBtb25pdG9yZWQpIHtcclxuICAgICAgICAgICAgc3RhdGUubW9uaXRvcmVkID0gbnVsbDtcclxuICAgICAgICAgICAgc3RhdGUubW9uaXRvcmVkTmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1clN0YXRlID0gd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zdGF0ZVNob290O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vbml0b3JlZCA9IG1vbml0b3JlZDtcclxuICAgICAgICAgICAgc3RhdGUubW9uaXRvcmVkTmFtZSA9IG1vbml0b3JlZE5hbWU7XHJcbiAgICAgICAgICAgIC8vIOWFvOWuuVxyXG4gICAgICAgICAgICAvLyDlronljZNpcGFkIOmDqOWIhui0puaItyDml6Dms5Xojrflj5Z1c2VyaWQg55SobmFtZeabv+S7o1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc25hcHNob290W21vbml0b3JlZF0pIHtcclxuICAgICAgICAgICAgICAgIGN1clN0YXRlID0gc3RhdGUuc25hcHNob290W21vbml0b3JlZF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuc25hcHNob290W21vbml0b3JlZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJTdGF0ZSA9IHN0YXRlLnNuYXBzaG9vdFttb25pdG9yZWROYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1clN0YXRlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpICYmIHYgIT0gXCJmb3JtYWwtcGFubGUtbW9kZWwwMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIh+aPm+aKleaUvlxyXG4gICAgY2hhbmdlTGF1bmNoKGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlICE9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgbGF1bmNoID0gc3RhdGUuc3R1ZGVudExpc3RbcGFyc2VJbnQoY2VkKV0uaWQ7XHJcbiAgICAgICAgbGV0IGxhdW5jaE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdGUuc3R1ZGVudExpc3RbcGFyc2VJbnQoY2VkKV0ubmlja25hbWUpO1xyXG5cclxuICAgICAgICBsZXQgcHJldlN0YXRlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W1wic3RhdGVcIl0pO1xyXG4gICAgICAgIGxldCBjdXJTdGF0ZTogYW55O1xyXG4gICAgICAgIGlmIChzdGF0ZS5sYXVuY2ggPT0gbGF1bmNoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhdW5jaCA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1clN0YXRlID0gd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zdGF0ZVNob290O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhdW5jaCA9IGxhdW5jaDtcclxuXHJcbiAgICAgICAgICAgIC8vIOWFvOWuuVxyXG4gICAgICAgICAgICAvLyDlronljZNpcGFkIOmDqOWIhui0puaItyDml6Dms5Xojrflj5Z1c2VyaWQg55SobmFtZeabv+S7o1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc25hcHNob290W2xhdW5jaF0pIHtcclxuICAgICAgICAgICAgICAgIGN1clN0YXRlID0gc3RhdGUuc25hcHNob290W2xhdW5jaF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuc25hcHNob290W2xhdW5jaE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJTdGF0ZSA9IHN0YXRlLnNuYXBzaG9vdFtsYXVuY2hOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1clN0YXRlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpICYmIHYgIT0gXCJmb3JtYWwtcGFubGUtbW9kZWwwMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOWtpueUn+WIl+ihqCBcclxuICAgIGNoYW5nZVN0dWRlbnRMaXN0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc3R1ZGVudExpc3QgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsCDnrZTmoYjmj5DkuqQg5YWI5ZCOXHJcbiAgICBjaGFuZ2VSYW5raW5nKHVzZXJpZDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzdGF0ZS5yYW5raW5nLmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IHVzZXJpZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJhbmtpbmcucHVzaCh1c2VyaWQpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1aeWxglxyXG4gICAgdXBkYXRlVWkoc3RhdGU6IGFueSkge1xyXG4gICAgICAgIC8vIOaooeW8j+agjyDkurrlkZjmoI8g5pi+56S65LiO6ZqQ6JePXHJcbiAgICAgICAgdGhpcy5tb2RlbExpc3Quc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnN0dWRlbnRMaXN0LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tb2RlbExpc3QpXHJcbiAgICAgICAgICAgIC50byguMiwgeyB4OiBzdGF0ZS5zaG93ID8gLTkzMCA6IC05OTAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3R1ZGVudExpc3QpXHJcbiAgICAgICAgICAgIC50byguMiwgeyB5OiBzdGF0ZS5zaG93ID8gNTQwIDogNjQwIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyDmqKHlvI/moI8g5r+A5rS75qC35byPXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmcgPSB0aGlzLm1vZGVsc1tpXS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMubW9kZWxzW2ldLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKTtcclxuICAgICAgICAgICAgYmcuY29sb3IgPSBpID09IChzdGF0ZS5zaWduYWxpbmdNb2RlbCAtIDEpID8gY2MuY29sb3IoMTUsIDE4NywgMjMzLCAyNTUpIDogY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGV4dC5jb2xvciA9IGkgPT0gKHN0YXRlLnNpZ25hbGluZ01vZGVsIC0gMSkgPyBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpIDogY2MuY29sb3IoNTksIDU5LCA1OSwgMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS/oeS7pOaooeW8jyDotYvlgLwg5YWo5bGA5Y+Y6YePXHJcbiAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zaWduYWxpbmdNb2RlbCA9IHN0YXRlLnNpZ25hbGluZ01vZGVsO1xyXG4gICAgICAgIC8vIOebkeaOp+aooeW8jyDnm5HmjqfosIFcclxuICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLm1vbml0b3JlZCA9IHN0YXRlLm1vbml0b3JlZDtcclxuICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLm1vbml0b3JlZE5hbWUgPSBzdGF0ZS5tb25pdG9yZWROYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJDcmVhdGUodXNlcnM6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB1c2Vycy5maWx0ZXIoKHY6IGFueSkgPT4gdi5yb2xlID09IDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZXJKb2luKHVzZXJzOiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBhcnIgPSBzdGF0ZS5zdHVkZW50TGlzdC5tYXAoKHY6IGFueSkgPT4gdik7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gc3RhdGUuc3R1ZGVudExpc3QuZmluZEluZGV4KCh2OiBhbnkpID0+IHYuaWQgPT0gdXNlcnNbMF0uaWQpXHJcbiAgICAgICAgaWYgKHVzZXJzWzBdLnJvbGUgPT0gMiAmJiBpbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICBhcnIucHVzaCh1c2Vyc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlckxlYXZlKHVzZXJzOiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zdHVkZW50TGlzdC5maWx0ZXIoKHY6IGFueSkgPT4gdi5pZCAhPT0gdXNlcnNbMF0uaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ25hbENhbGxiYWNrKGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaWduYWxDYWxsYmFjaycpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudHlwZSkge1xyXG4gICAgICAgICAgICBsZXQgbGlzdDogYW55O1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09ICdjcmVhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy51c2VyQ3JlYXRlKGRhdGEudXNlcnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09ICdsZWF2ZScpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLnVzZXJMZWF2ZShkYXRhLnVzZXJzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PSAnam9pbicpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLnVzZXJKb2luKGRhdGEudXNlcnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0dWRlbnRMaXN0KGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
 * @LastEditTime: 2021-04-26 14:41:39
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
        var message, _a, name, userid, role, signalingModel, monitored, monitoredName, user, curState_1, prevState_1, toUser, panleState, user, user, user, panelJs;
        var _this = this;
        return __generator(this, function (_b) {
            message = globalThis._.cloneDeep(data);
            // console.log(message)
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
                        _a = window['GlobalData'].courseData, name = _a.name, userid = _a.userid, role = _a.role, signalingModel = _a.signalingModel, monitored = _a.monitored, monitoredName = _a.monitoredName;
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
                                        // 临时 拓客云 sdk版本不同，账号不同，参数不同
                                        // 1.在直播间 通过url进入课件，课件身份唯一根据url的参数 userid role name 确定
                                        // 2.由于各种原因 如果url参数缺失，以name 当做userid
                                        // 3.假如，学生进入课堂，参数缺失 进行2；但是 老师监听有人进入房间-获取的学生信息会有userid 从而导致同一个学生userid不一致
                                        // 临时解决：先对比userid，如果userid不一致 对比 name
                                        // 遗留问题：2个学生userid缺失，且名字相同 从而 身份无法识别
                                        if (monitored && (user.userid == monitored || (user.userid != monitored && user.name == monitoredName))) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMlxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAyLWdldE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILFNBQXNCLFVBQVUsQ0FBQyxJQUFTOzs7OztZQUVsQyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsdUJBQXVCO1lBRXZCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsS0FBSyxZQUFZLENBQUMsQ0FBQztvQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDL0IsTUFBTTtpQkFDVDtnQkFFRCxLQUFLLGVBQWUsQ0FBQyxDQUFDO29CQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2hCLHNCQUFPO3FCQUNWO29CQUVELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksb0JBQW9CLEVBQUU7d0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVTs0QkFBRSxzQkFBTzt3QkFDekMsS0FBb0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBakcsSUFBSSxVQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsY0FBYyxvQkFBQSxFQUFFLFNBQVMsZUFBQSxFQUFHLGFBQWEsbUJBQUEsQ0FBcUM7d0JBQ3BHLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzt3QkFDNUIsYUFBVyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQzt3QkFDdEMsY0FBWSxVQUFVLENBQUMsQ0FBQyxDQUFD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IEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDItMDcgMTE6Mzk6NDNcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDQtMjYgMTQ6NDE6MzlcclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZShkYXRhOiBhbnkpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRNZXNzYWdlJylcclxuICAgIGxldCBtZXNzYWdlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcChkYXRhKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcbiAgICBcclxuICAgIHN3aXRjaCAoZGF0YS5tZXRob2QpIHtcclxuICAgICAgICBjYXNlIFwib25KdW1wUGFnZVwiOiB7XHJcbiAgICAgICAgICAgIHRoaXMub25KdW1wQ29uZmlnKGRhdGEudG9QYWdlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlICdvbkZpbGVNZXNzYWdlJzoge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5pc1Jlc3RvcmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlRGF0YS5hY3Rpb24gPT0gXCJFVkVOVF9VUERBVEVfU1RBVEVcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsZXQgeyBuYW1lLCB1c2VyaWQsIHJvbGUsIHNpZ25hbGluZ01vZGVsLCBtb25pdG9yZWQgLCBtb25pdG9yZWROYW1lIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBkYXRhLmhhbmRsZURhdGEudXNlcjtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJTdGF0ZSA9IGRhdGEuaGFuZGxlRGF0YS5oYW5kbGVEYXRhO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZXZTdGF0ZSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAod2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVtcInN0YXRlXCJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVEYXRhLnRvVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b1VzZXIgPSBkYXRhLmhhbmRsZURhdGEudG9Vc2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWFvOWuuVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWuieWNk2lwYWQg6YOo5YiG6LSm5oi3IOaXoOazleiOt+WPlnVzZXJpZCDnlKhuYW1l5pu/5LujXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvVXNlci5pZCA9PSB1c2VyaWQgfHwgZW5jb2RlVVJJQ29tcG9uZW50KHRvVXNlci5uaWNrbmFtZSkgPT0gdXNlcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGUg5rWB6L2sIOS4tOaXtlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KGN1clN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDogIHluIjlkIzmraXlrabnlJ9cclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa8lOekuuaooeW8jyDnm7jkupLpgJrkv6FcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5wdWJTdWIuZW1pdChjdXJTdGF0ZVt2XSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOetlOmimOaooeW8jyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS7ogIHluIjkv53lrZjlrabnlJ/nrZTmoYggMi7ogIHluIjkv53lrZjlubbmuLLmn5PlrabnlJ/nrZTmoYhcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYW5sZVN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbmxlU3RhdGUuc25hcHNob290W3VzZXIudXNlcmlkXSA9IGN1clN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KHBhbmxlU3RhdGUsIHRoaXMuX3BhbmVsLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4tOaXtiDmi5PlrqLkupEgc2Rr54mI5pys5LiN5ZCM77yM6LSm5Y+35LiN5ZCM77yM5Y+C5pWw5LiN5ZCMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS7lnKjnm7Tmkq3pl7Qg6YCa6L+HdXJs6L+b5YWl6K++5Lu277yM6K++5Lu26Lqr5Lu95ZSv5LiA5qC55o2udXJs55qE5Y+C5pWwIHVzZXJpZCByb2xlIG5hbWUg56Gu5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi7nlLHkuo7lkITnp43ljp/lm6Ag5aaC5p6cdXJs5Y+C5pWw57y65aSx77yM5LulbmFtZSDlvZPlgZp1c2VyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAzLuWBh+Wmgu+8jOWtpueUn+i/m+WFpeivvuWggu+8jOWPguaVsOe8uuWksSDov5vooYwy77yb5L2G5pivIOiAgeW4iOebkeWQrOacieS6uui/m+WFpeaIv+mXtC3ojrflj5bnmoTlrabnlJ/kv6Hmga/kvJrmnIl1c2VyaWQg5LuO6ICM5a+86Ie05ZCM5LiA5Liq5a2m55SfdXNlcmlk5LiN5LiA6Ie0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Li05pe26Kej5Yaz77ya5YWI5a+55q+UdXNlcmlk77yM5aaC5p6cdXNlcmlk5LiN5LiA6Ie0IOWvueavlCBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YGX55WZ6Zeu6aKY77yaMuS4quWtpueUn3VzZXJpZOe8uuWkse+8jOS4lOWQjeWtl+ebuOWQjCDku47ogIwg6Lqr5Lu95peg5rOV6K+G5YirXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbml0b3JlZCAmJiAodXNlci51c2VyaWQgPT0gbW9uaXRvcmVkIHx8ICh1c2VyLnVzZXJpZCAhPSBtb25pdG9yZWQgJiYgdXNlci5uYW1lID09IG1vbml0b3JlZE5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSAmJiB2ICE9IHRoaXMuX3BhbmVsLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWtpueUnyDlkIzmraXogIHluIhcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa8lOekuuaooeW8jyDnm7jkupLpgJrkv6FcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5wdWJTdWIuZW1pdChjdXJTdGF0ZVt2XSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWduYWxpbmdNb2RlbCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5yb2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5zaWduYWxpbmdNb2RlbCAhPSBzaWduYWxpbmdNb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlIOa1gei9rCDkuLTml7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W3ZdID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5wdWJTdWIuZW1pdChjdXJTdGF0ZVt2XSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShnbG9iYWxUaGlzLl8uaXNFcXVhbChwcmV2U3RhdGVbdl0sIGN1clN0YXRlW3ZdKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlIOa1gei9rCDkuLTml7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOW3oeivviDliqnmlZkg5ZCM5bGPIOiAgeW4iFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb2xlID09IDEgfHwgcm9sZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJldlN0YXRlKS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlIOa1gei9rCDkuLTml7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KGN1clN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgJ29uVXNlckNoYW5nZSc6IHtcclxuICAgICAgICAgICAgLy8g5q2k5Zue6LCDIOiAgeW4iOWkhOeQhlxyXG4gICAgICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5Li05pe25pa55qGIXHJcbiAgICAgICAgICAgIC8vIOiAgeW4iOerryDkurrlkZjlj5jliqgg56aB5q2iIOWPkemAgeS/oeS7pFxyXG4gICAgICAgICAgICAvLyDogIHluIjpgIDlh7rph43ov5vvvJrmraTlpITkv6Hmga/ojrflj5bml6nkuo4g6aG16Z2i54q25oCB5Yid5aeL5YyWXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEudHlwZSA9PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt0aGlzLl9wYW5lbC5uYW1lXSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEudHlwZSA9PSAnam9pbicpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gZGF0YS5kYXRhLnVzZXJzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt0aGlzLl9wYW5lbC5uYW1lXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEudHlwZSA9PSAnbGVhdmUnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRhdGEuZGF0YS51c2Vyc1swXTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDkuLTml7bmlrnmoYhcclxuICAgICAgICAgICAgLy8g5a6a5pe25ZCM5q2lIO+8mmlwYWQg6K++5Lu25Yqg6L295oWiOyDlt7Lojrflj5bov5vlhaXmiL/pl7TnmoTkv6Hmga/vvIzkvYblrabnlJ/or77ku7blubbmnKrliqDovb3lrozmiJBcclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS50eXBlID09ICdqb2luJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBkYXRhLmRhdGEudXNlcnNbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93bih1c2VyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBhbmVsSnM6IGFueSA9IHRoaXMuX3BhbmVsLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBwYW5lbEpzLnNpZ25hbENhbGxiYWNrKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==
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
//------QC-SOURCE-SPLIT------
