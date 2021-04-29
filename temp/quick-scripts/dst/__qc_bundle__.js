
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
require('./assets/prefabLibrary/components/feedback/javascripts/feedback-model01-v1');
require('./assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02-studentList');
require('./assets/prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-getMessage');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02-sendMessage');
require('./assets/prefabLibrary/controllers/controller-model02/scripts/controller-model02');
require('./assets/prefabLibrary/models/clickAnswer/clickAnswer-model01-v1');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v1');
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
 * @LastEditTime: 2021-04-29 16:51:02
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxjbGlja0Fuc3dlclxcY2xpY2tBbnN3ZXItbW9kZWwwMS12MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0csSUFBQSxLQUEyQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFwRSxVQUFVLGdCQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLFlBQVksa0JBQWdDLENBQUM7QUFFdkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUE0WEM7UUFyV1csWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixZQUFNLEdBQUcsRUFBRSxDQUFDOztJQWtXeEIsQ0FBQztJQWhXRyxzQkFBSSx5Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxD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QXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMS0wMy0yNiAxODowNToxMlxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNC0yOSAxNjo1MTowMlxyXG4gKi9cclxuY29uc3QgeyBsb2FkQnVuZGxlLCBsb2FkUHJlZmFiLCBsb2FkUmVzb3VyY2UgfSA9IHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZTtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNsY2lrQW5zd2VyX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfYnRuQm94OiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX2xhdW5jaEJ0bjogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfaW1nT2JqOiBmZ3VpLkdMb2FkZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgLy8g5Yqo5pWIXHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcbiAgICBwcml2YXRlIGxpbmVCbGluazogYW55O1xyXG4gICAgcHJpdmF0ZSBjYXRjaE9iajogYW55O1xyXG5cclxuICAgIC8vIOi/nOeoi+WKqOaAgee7hOS7tlxyXG4gICAgcHJpdmF0ZSBmZWVkYmFjazogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2dyaWRzID0gW107XHJcbiAgICBwcml2YXRlIF9hbnN3ZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlLCB2KTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3dvcmxkUm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICAvLyDmjqfliLblmahcclxuICAgICAgICB0aGlzLl9jMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMxXCIpO1xyXG4gICAgICAgIHRoaXMuX2MyID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzJcIik7XHJcbiAgICAgICAgLy8g6Ieo5pmCXHJcbiAgICAgICAgLy8gYnVnIOWIneWni+iuvue9ruS4jeaSreaUvuS4jeeUn+aViFxyXG4gICAgICAgIGlmICh0aGlzLl9jMikge1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlXCIpLmFzQnV0dG9uO1xyXG5cclxuICAgICAgICAvLyBsYXVuY2gg6Kem5Y+R5Zmo5oyJ6ZKuXHJcbiAgICAgICAgdGhpcy5fbGF1bmNoQnRuID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImxhdW5jaEJ0blwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLl9sYXVuY2hCdG4ub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tMYXVuY2gsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDlrrnlmajlpKnmnrBcclxuICAgICAgICB0aGlzLl9idG5Cb3ggPSB0aGlzLl92aWV3LmdldENoaWxkKFwiYnRuQm94XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX2J0bkJveC5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja0xpYnJhLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5faW1nT2JqID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImltZ09ialwiKS5hc0xvYWRlcjtcclxuICAgICAgICB0aGlzLmNhdGNoT2JqID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNhdGNoU3RvbmVcIikuYXNDb207XHJcblxyXG4gICAgICAgIC8vIOWkqeaesCDlrZDmoI9cclxuICAgICAgICBsZXQgYUdyb3VwID0gdGhpcy5fYnRuQm94LmdldENoaWxkKFwiZ3JpZHNcIikuYXNHcm91cDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2J0bkJveC5udW1DaGlsZHJlbiAtIDE7IGkgPiAtMTsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9idG5Cb3guZ2V0Q2hpbGRBdChpKS5ncm91cCA9PSBhR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9idG5Cb3guZ2V0Q2hpbGRBdChpKS5hc0xvYWRlcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dyaWRzLnB1c2goZ3JpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlnN0YXRlXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRyb3BzOiAwLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYXRjaDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyDkuLTml7YgbW9kZWwgY29tcG9uZW50IGpzb24g6YWN572u5Yqg6L29XHJcbiAgICAgICAgbGV0IHsgcGF0aENvbmZpZywgbW9kZWwsIGNvbXBvbmVudHMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IFBhY2thZ2UgPSBwYXRoQ29uZmlnLnBhY2thZ2VOYW1lO1xyXG4gICAgICAgIGxldCBHQ29tcG9uZW50ID0gbW9kZWwudWlQYXRoO1xyXG4gICAgICAgIGxldCB7IGFuc3dlciwgYWUgfSA9IG1vZGVsLmNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuXHJcbiAgICAgICAgLy8g5Yqo5pWI5rOo5YaMXHJcbiAgICAgICAgZm9yIChsZXQgdiBpbiBhZSkge1xyXG4gICAgICAgICAgICBpZiAoYWVbdl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChhZVt2XS5jb21wb25lbnQpIHRoaXNbdl0uY29tcG9uZW50ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIGFlW3ZdLmNvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgICAgICAgICBpZiAoYWVbdl0ucG9zKSB0aGlzW3ZdLnBvcyA9IGFlW3ZdLnBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UGF0aDogYW55ID0gYCR7cGF0aENvbmZpZy5yZW1vdGVVcmx9JHtwYXRoQ29uZmlnLmNvbXBvbmVudEJ1bmRsZVBhdGh9JHtjb21wb25lbnRzW2tleV0uYnVuZGxlTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEJ1bmRsZTogYW55ID0gYXdhaXQgbG9hZEJ1bmRsZShjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQcmVmYWI6IGFueSA9IGF3YWl0IGxvYWRQcmVmYWIoY29tcG9uZW50QnVuZGxlLCBjb21wb25lbnRzW2tleV0ucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb21wb25lbnRQcmVmYWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tUaXRsZShldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUudGl0bGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOeCueWHu+WkqeaesCDmtojpmaTkuIDkuKpcclxuICAgIHByaXZhdGUgX2NsaWNrTGlicmEoZXZ0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuX2dyaWRzLmZpbmRJbmRleCgodjogYW55KSA9PiB2LnVybCA9PT0gbnVsbCk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9ncmlkc1tpbmRleCA9PSAtMSA/IHRoaXMuX2dyaWRzLmxlbmd0aCAtIDEgOiBpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICBncmlkLnVybCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5kcm9wcyA9IHN0YXRlLmRyb3BzIC0gMTtcclxuICAgICAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOinpuWPkeWZqOeCueWHu1xyXG4gICAgcHJpdmF0ZSBfY2xpY2tMYXVuY2goZXZ0OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLmNhdGNoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmj5DkuqTngrnlh7tcclxuICAgIHByaXZhdGUgX2NsaWNrU3VibWl0KGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkob2xkU3RhdGU6IGFueSwgc3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5jYXRjaCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2F0Y2hPYmooKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmRyb3BzLCBzdGF0ZS5kcm9wcykpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZ3JpZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JpZDogZmd1aS5HTG9hZGVyID0gdGhpcy5fZ3JpZHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmRyb3BzID4gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdyaWQudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLnVybCA9IHRoaXMuX2ltZ09iai51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZC51cmwpIGdyaWQudXJsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jMS5zZWxlY3RlZEluZGV4ID0gc3RhdGUuZHJvcHM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5hbnN3ZXIpIHRoaXMub25MaWJyYUhpbnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aXRsZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5VGl0bGUoc3RhdGUudGl0bGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5kcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhbmRsZUd1aWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuXHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbzogY2MuQXVkaW9DbGlwID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDnrZTmoYjlj43ppohcclxuICAgIGFuc3dlckZlZWRiYWNrKGJvb2w6IGJvb2xlYW4pIHtcclxuICAgICAgICAvLyBsZXQgY29tcG9uZW50OiBhbnk7XHJcbiAgICAgICAgLy8gbGV0IHBvczogYW55O1xyXG4gICAgICAgIC8vIGlmIChib29sKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudCA9IHRoaXMucmlnaHRGZWVkLmNvbXBvbmVudDtcclxuICAgICAgICAvLyAgICAgcG9zID0gdGhpcy5yaWdodEZlZWQucG9zO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudCA9IHRoaXMuZXJyb3JGZWVkLmNvbXBvbmVudDtcclxuICAgICAgICAvLyAgICAgcG9zID0gdGhpcy5lcnJvckZlZWQucG9zO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKGNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gaWYgKHBvcykge1xyXG4gICAgICAgIC8vICAgICBjb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSBjb21wb25lbnQud2lkdGgpIC8gMiArIHBvcy54O1xyXG4gICAgICAgIC8vICAgICBjb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gY29tcG9uZW50LmhlaWdodCkgLyAyICsgcG9zLnk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIGNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSBjb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIC8vIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZChjb21wb25lbnQpO1xyXG5cclxuICAgICAgICAvLyAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIC8vIH0sIDIpO1xyXG4gICAgICAgIGlmICghdGhpcy5mZWVkYmFjaykgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZlZWRiYWNrKTtcclxuICAgICAgICBmZWVkYmFjay54ID0gOTYwO1xyXG4gICAgICAgIGZlZWRiYWNrLnkgPSA1NDA7XHJcbiAgICAgICAgbGV0IGZlZWRiYWNrSnM6IGFueSA9IGZlZWRiYWNrLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgIGZlZWRiYWNrSnMuaW5pdChib29sKTtcclxuICAgICAgICBmZWVkYmFjay5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWkqeaesOaPkOekulxyXG4gICAgb25MaWJyYUhpbnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpbmVCbGluaykgcmV0dXJuO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmxpbmVCbGluay5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmVCbGluay5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmxpbmVCbGluay5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMubGluZUJsaW5rLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5saW5lQmxpbmsuY29tcG9uZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmk43kvZzmj5DnpLpcclxuICAgIG9uSGFuZGxlR3VpZGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhbmRsZUd1aWRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZUd1aWRlLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LndpZHRoKSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5oqT5Y+W5p+Q54mpXHJcbiAgICBvbkNhdGNoT2JqKCkge1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5jYXRjaE9iaikgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0MDogZmd1aS5UcmFuc2l0aW9uID0gdGhpcy5jYXRjaE9iai5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdDAucGxheSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5jYXRjaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2dyaWRzLmZpbmQodiA9PiB2LnVybCA9PT0gbnVsbCk7XHJcbiAgICAgICAgICAgIGlmIChncmlkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5kcm9wcyA9IHN0YXRlLmRyb3BzICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdDE6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuY2F0Y2hPYmouZ2V0VHJhbnNpdGlvbihcInQxXCIpO1xyXG4gICAgICAgICAgICB0MS5wbGF5KCk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L+Q6KGM5pe2IOemgeatouaTjeS9nFxyXG4gICAgZm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVNYXNrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVNYXNrID0gbmV3IGNjLk5vZGUoJ2hhbmRsZU1hc2snKTtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sucGFyZW50ID0gdGhpcy5fd29ybGRSb290O1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLndpZHRoID0gMTkyMDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay5oZWlnaHQgPSAxMDgwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnggPSA5NjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2sueSA9IDU0MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5raI6Zmk56aB5q2iXHJcbiAgICBkaXNhYmxlRm9yYmlkSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVNYXNrID0gdGhpcy5fd29ybGRSb290LmdldENoaWxkQnlOYW1lKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hc2spIGhhbmRsZU1hc2suZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
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
 * @LastEditTime: 2021-04-29 17:39:06
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDEtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBMkMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBcEUsVUFBVSxnQkFBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxZQUFZLGtCQUFnQyxDQUFDO0FBQ3JFLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQTBZQztRQXZYVyxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLFlBQU0sR0FBRyxFQUFFLENBQUM7O0lBK1d4QixDQUFDO0lBN1dHLHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFRRCxzQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVB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QUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXpZZ0IscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0EwWXpDO0lBQUQsNEJBQUM7Q0ExWUQsQUEwWUMsQ0ExWWtELEVBQUUsQ0FBQyxTQUFTLEdBMFk5RDtrQkExWW9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDQtMjkgMTc6Mzk6MDZcclxuICovXHJcbmNvbnN0IHsgbG9hZEJ1bmRsZSwgbG9hZFByZWZhYiwgbG9hZFJlc291cmNlIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGU7XHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfd29ybGRSb290OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2MyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ0J0bjogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfYnRuQm94OiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlOiBmZ3VpLkdCdXR0b247XHJcbiAgICBwcml2YXRlIF90aXRsZVRyaWdnZXI6IGZndWkuR0xvYWRlcjtcclxuXHJcbiAgICAvLyBmYWlyeWd1aSDnu4Tku7ZcclxuICAgIHByaXZhdGUgaGFuZGxlR3VpZGU6IGFueTtcclxuICAgIHByaXZhdGUgbGluZUJsaW5rOiBhbnk7XHJcblxyXG4gICAgLy8g6L+c56iL5Yqo5oCB57uE5Lu2XHJcbiAgICBwcml2YXRlIGZlZWRiYWNrOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZ3JpZHMgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jYWNoZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfc2NoZWR1bGVUaW1lID0gLjM7XHJcbiAgICBwcml2YXRlIF9kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUsIHYpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fd29ybGRSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2MxID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcbiAgICAgICAgdGhpcy5fYzIgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMlwiKTtcclxuICAgICAgICAvLyDoh6jmmYJcclxuICAgICAgICAvLyBidWcg5Yid5aeL6K6+572u5LiN5pKt5pS+5LiN55Sf5pWIXHJcbiAgICAgICAgaWYgKHRoaXMuX2MyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLl9jMi5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlXCIpLmFzQnV0dG9uO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnQnRuID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImRyYWdCdG5cIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fY2FjaGVbXCJkcmFnT3JpZ2luXCJdID0gdGhpcy5nZXRPcmlnaW5WYWx1ZSh0aGlzLl9kcmFnQnRuKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhZ0J0bi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4ub24oZmd1aS5FdmVudC5UT1VDSF9CRUdJTiwgdGhpcy5fb25EcmFnU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4ub24oZmd1aS5FdmVudC5UT1VDSF9NT1ZFLCB0aGlzLl9vbkRyYWdNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9kcmFnQnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCB0aGlzLl9vbkRyYWdFbmQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9idG5Cb3ggPSB0aGlzLl92aWV3LmdldENoaWxkKFwiYnRuQm94XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIGlmICh0aGlzLl9idG5Cb3gpIHRoaXMuX2J0bkJveC5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1JlbW92ZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBhR3JvdXAgPSB0aGlzLl9idG5Cb3guZ2V0Q2hpbGQoXCJncmlkc1wiKS5hc0dyb3VwO1xyXG5cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2J0bkJveC5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLl9idG5Cb3guZ2V0Q2hpbGRBdChpKS5ncm91cCA9PSBhR3JvdXApIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9idG5Cb3guZ2V0Q2hpbGRBdChpKS5hc0xvYWRlcjtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2dyaWRzLnB1c2goZ3JpZCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9idG5Cb3gubnVtQ2hpbGRyZW4gLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYnRuQm94LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gYUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JpZDogZmd1aS5HTG9hZGVyID0gdGhpcy5fYnRuQm94LmdldENoaWxkQXQoaSkuYXNMb2FkZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmlkcy5wdXNoKGdyaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJZzdGF0ZVxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xyXG4gICAgICAgICAgICBkcmFnOiBcImVuZFwiLFxyXG4gICAgICAgICAgICBkcmFnQnRuOiB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9kcmFnQnRuLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9kcmFnQnRuLnlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcm9wczogMCxcclxuICAgICAgICAgICAgc3VibWl0OiBmYWxzZSxcclxuICAgICAgICAgICAgYW5zd2VyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Li05pe2IOemgeatouaTjeS9nOacn+mXtCDliIfpobVcclxuICAgICAgICB0aGlzLmRpc2FibGVGb3JiaWRIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOS4tOaXtiBtb2RlbCBjb21wb25lbnQganNvbiDphY3nva7liqDovb1cclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcbiAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgbGV0IHsgYW5zd2VyLCBhZSB9ID0gbW9kZWwuY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG5cclxuICAgICAgICAvLyDliqjmlYjms6jlhoxcclxuICAgICAgICBmb3IgKGxldCB2IGluIGFlKSB7XHJcbiAgICAgICAgICAgIGlmIChhZVt2XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1t2XSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLmNvbXBvbmVudCkgdGhpc1t2XS5jb21wb25lbnQgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgYWVbdl0uY29tcG9uZW50KS5hc0NvbTtcclxuICAgICAgICAgICAgICAgIGlmIChhZVt2XS5wb3MpIHRoaXNbdl0ucG9zID0gYWVbdl0ucG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYW5zd2VyKSB0aGlzLl9hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFBhdGg6IGFueSA9IGAke3BhdGhDb25maWcucmVtb3RlVXJsfSR7cGF0aENvbmZpZy5jb21wb25lbnRCdW5kbGVQYXRofSR7Y29tcG9uZW50c1trZXldLmJ1bmRsZU5hbWV9YDtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRCdW5kbGU6IGFueSA9IGF3YWl0IGxvYWRCdW5kbGUoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50UHJlZmFiOiBhbnkgPSBhd2FpdCBsb2FkUHJlZmFiKGNvbXBvbmVudEJ1bmRsZSwgY29tcG9uZW50c1trZXldLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gY29tcG9uZW50UHJlZmFiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE9yaWdpblZhbHVlKHY6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHYueCxcclxuICAgICAgICAgICAgeTogdi55XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ1N0YXJ0KGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2dC5jYXB0dXJlVG91Y2goKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5kcmFnID0gXCJzdGFydFwiO1xyXG4gICAgICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLmRyb3BzID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnTW92ZShldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kcmFnZ2luZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnRW5kKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGJvb2w6Ym9vbGVhbiA9IHBvaW50QmVsb25nQXJlYShcInJlY3RhbmdsZVwiLCB0aGlzLl9idG5Cb3gsIHRoaXMuX2RyYWdCdG4pO1xyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGxldCBpY29uOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9kcmFnQnRuLmdldENoaWxkKFwiaWNvblwiKS5hc0xvYWRlcjtcclxuICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2dyaWRzLmZpbmQodiA9PiB2LnVybCA9PT0gbnVsbCk7XHJcbiAgICAgICAgICAgIGlmIChncmlkKSB7XHJcbiAgICAgICAgICAgICAgICAvL2dyaWQudXJsID0gaWNvbi51cmw7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5kcm9wcyA9IHN0YXRlLmRyb3BzICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUuZHJhZ0J0biA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5fY2FjaGVbXCJkcmFnT3JpZ2luXCJdLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuX2NhY2hlW1wiZHJhZ09yaWdpblwiXS55LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3RhdGUuZHJhZyA9IFwiZW5kXCI7XHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1JlbW92ZShldnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5fZ3JpZHMuZmluZEluZGV4KCh2OiBhbnkpID0+IHYudXJsID09PSBudWxsKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgLy8gbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2dyaWRzW2luZGV4ID09IC0xID8gdGhpcy5fZ3JpZHMubGVuZ3RoIC0gMSA6IGluZGV4IC0gMV07XHJcbiAgICAgICAgICAgIC8vIGdyaWQudXJsID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmRyb3BzID0gc3RhdGUuZHJvcHMgLSAxO1xyXG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2xpY2tUaXRsZShldnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUudGl0bGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2NsaWNrU3VibWl0KGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHN0YXRlLnN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W54q25oCBXHJcbiAgICBnZXRTdGF0ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShvbGRTdGF0ZTogYW55LCBzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmRyYWcgPT0gXCJtb3ZlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ0J0bi54ID0gc3RhdGUuZHJhZ0J0bi54O1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnQnRuLnkgPSBzdGF0ZS5kcmFnQnRuLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcImVuZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdCdG4ueCA9IHRoaXMuX2NhY2hlW1wiZHJhZ09yaWdpblwiXS54O1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnQnRuLnkgPSB0aGlzLl9jYWNoZVtcImRyYWdPcmlnaW5cIl0ueTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUuZHJvcHMsIHN0YXRlLmRyb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ncmlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9ncmlkc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZHJvcHMgPiBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ3JpZC51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpY29uOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9kcmFnQnRuLmdldENoaWxkKFwiaWNvblwiKS5hc0xvYWRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQudXJsID0gaWNvbi51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JpZC51cmwpIGdyaWQudXJsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jMS5zZWxlY3RlZEluZGV4ID0gc3RhdGUuZHJvcHM7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5hbnN3ZXIpIHRoaXMub25MaWJyYUhpbnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS5zdWJtaXQsIHN0YXRlLnN1Ym1pdCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJGZWVkYmFjayhzdGF0ZS5hbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25IYW5kbGVHdWlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFnbG9iYWxUaGlzLl8uaXNFcXVhbChvbGRTdGF0ZS50aXRsZSwgc3RhdGUudGl0bGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuXHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbzogY2MuQXVkaW9DbGlwID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbnN3ZXJGZWVkYmFjayhib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZlZWRiYWNrKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgZmVlZGJhY2s6IGFueSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmVlZGJhY2spO1xyXG4gICAgICAgIGZlZWRiYWNrLnggPSA5NjA7XHJcbiAgICAgICAgZmVlZGJhY2sueSA9IDU0MDtcclxuICAgICAgICBsZXQgZmVlZGJhY2tKczogYW55ID0gZmVlZGJhY2suZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZmVlZGJhY2tKcy5pbml0KGJvb2wpO1xyXG4gICAgICAgIGZlZWRiYWNrLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZmVlZGJhY2suZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aSp5p6w5o+Q56S6XHJcbiAgICBvbkxpYnJhSGludCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubGluZUJsaW5rKSByZXR1cm47XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMubGluZUJsaW5rLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMubGluZUJsaW5rLnBvcykge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVCbGluay5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQud2lkdGgpIC8gMiArIHRoaXMubGluZUJsaW5rLnBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVCbGluay5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LmhlaWdodCkgLyAyICsgdGhpcy5saW5lQmxpbmsucG9zLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcInQwXCIpO1xyXG4gICAgICAgIHQucGxheSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZndWkuR1Jvb3QuaW5zdC5yZW1vdmVDaGlsZCh0aGlzLmxpbmVCbGluay5jb21wb25lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOaTjeS9nOaPkOekulxyXG4gICAgb25IYW5kbGVHdWlkZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlR3VpZGUpIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlR3VpZGUucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQud2lkdGgpIC8gMiArIHRoaXMuaGFuZGxlR3VpZGUucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5oZWlnaHQpIC8gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0OiBmZ3VpLlRyYW5zaXRpb24gPSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/kOihjOaXtiDnpoHmraLmk43kvZxcclxuICAgIGZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmICghaGFuZGxlTWFzaykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlTWFzayA9IG5ldyBjYy5Ob2RlKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnBhcmVudCA9IHRoaXMuX3dvcmxkUm9vdDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay53aWR0aCA9IDE5MjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suaGVpZ2h0ID0gMTA4MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay54ID0gOTYwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnkgPSA1NDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa2iOmZpOemgeatolxyXG4gICAgZGlzYWJsZUZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmIChoYW5kbGVNYXNrKSBoYW5kbGVNYXNrLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDkuLTml7ZcclxuICAgIC8vIOaLluaLveWumuaXtuWZqFxyXG4gICAgZHJhZ1NjaGVkdWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnZ2luZykge1xyXG4gICAgICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICBzdGF0ZS5kcmFnID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyYWdCdG4gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9kcmFnQnRuLngsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9kcmFnQnRuLnksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZHJhZ1NjaGVkdWxlLCB0aGlzLl9zY2hlZHVsZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMlxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAyLXNlbmRNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HOzs7QUFFSCxTQUFnQixXQUFXLENBQUMsSUFBUyxFQUFFLE1BQVc7SUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMxQixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRWhCLElBQUEsS0FBeUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBdEUsSUFBSSxVQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsY0FBYyxvQkFBb0MsQ0FBQztJQUM3RSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBRTdELE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDN0IsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDNUIsSUFBSSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsY0FBYyxnQkFBQSxFQUFFO1FBQzVDLFVBQVUsRUFBRSxJQUFJO0tBQ25CLENBQUMsQ0FBQztJQUVILFNBQVM7SUFDVCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtRQUMzQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM5RCxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTO1lBQ3BELEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDLENBQUM7S0FDUDtJQUFBLENBQUM7QUFFTixDQUFDO0FBdkJELGtDQXVCQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDItMDcgMTE6Mzk6NDNcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDMtMTYgMTk6MDg6NDZcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZGF0YTogYW55LCB0b1VzZXI6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coJ3NlbmRNZXNzYWdlJylcclxuICAgIGxldCBtZXNzYWdlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcChkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcblxyXG4gICAgbGV0IHsgbmFtZSwgdXNlcmlkLCByb2xlLCBzaWduYWxpbmdNb2RlbCB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YTtcclxuICAgIGxldCBhY3Rpb24gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5nYW1lTXNnLkVWRU5UX1VQREFURV9TVEFURTtcclxuXHJcbiAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgdG9Vc2VyOiB0b1VzZXIgPyB0b1VzZXIgOiBcIlwiLFxyXG4gICAgICAgIHVzZXI6IHsgdXNlcmlkLCByb2xlLCBuYW1lLCBzaWduYWxpbmdNb2RlbCB9LFxyXG4gICAgICAgIGhhbmRsZURhdGE6IGRhdGFcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOiAgeW4iOWtmOWCqOS/oeS7pFxyXG4gICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEucm9sZSA9PSAwKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDT1VSU0VfU0lHTkFMSU5HX0RCJywgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEudGltZXN0YW1wLFxyXG4gICAgICAgICAgICBzdGF0ZTogZGF0YVxyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG59Il19
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
 * @LastEditTime: 2021-04-29 17:39:12
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxpbnB1dENob29zZVxcaW5wdXRDaG9vc2UtbW9kZWwwMS12MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0csSUFBQSxLQUEyQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFwRSxVQUFVLGdCQUFBLEVBQUUsVUFBVSxnQkFBQSxFQUFFLFlBQVksa0JBQWdDLENBQUM7QUFDdkUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUEwVUM7UUE5VFcsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQU8sR0FBRyxDQUFDLENBQUMsQ0FBb0IsS0FBSztRQVdyQyxZQUFNLEdBQUcsRUFBRSxDQUFDOztJQWtUeEIsQ0FBQztJQWhURyxzQkFBSSx5Q0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFN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LElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLDZDQUFZLEdBQVo7UUFDSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsYUFBYTtJQUNiLDJDQUFVLEdBQVY7UUFDSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsMENBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUF4VWdCLHNCQUFzQjtRQUQxQyxPQUFPO09BQ2Esc0JBQXNCLENBMFUxQztJQUFELDZCQUFDO0NBMVVELEFBMFVDLENBMVVtRCxFQUFFLENBQUMsU0FBUyxHQTBVL0Q7a0JBMVVvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTI5IDE3OjM5OjEyXHJcbiAqL1xyXG5jb25zdCB7IGxvYWRCdW5kbGUsIGxvYWRQcmVmYWIsIGxvYWRSZXNvdXJjZSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5wdXRDaG9vc2VfbW9kZWwwMV92MSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF93b3JsZFJvb3Q6IGNjLk5vZGU7XHJcbiAgICBwcml2YXRlIF92aWV3OiBmZ3VpLkdDb21wb25lbnQ7ICAgICAgICAgLy8g5Li755WM6Z2iXHJcbiAgICBwcml2YXRlIF9jMTogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBfYzI6IGZndWkuQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcml2YXRlIF9jaG9vc2VCb3g6IGZndWkuR0J1dHRvbjsgICAgICAgLy8g6L6T5YWl55uS5a2QXHJcbiAgICBwcml2YXRlIF9udW1JbnB1dDogZmd1aS5HQnV0dG9uOyAgICAgICAgLy8g5paH5pys5pi+56S65qGGXHJcbiAgICBwcml2YXRlIF9jbGVhckJ0bjogZmd1aS5HQnV0dG9uOyAgICAgICAgLy8g5riF56m65oyJ6ZKuXHJcbiAgICBwcml2YXRlIF9maW5pc2hCdG46IGZndWkuR0J1dHRvbjsgICAgICAgLy8g6L6T5YWl5a6M5oiQ5oyJ6ZKuXHJcbiAgICBwcml2YXRlIF9kZWxldGVCdG46IGZndWkuR0J1dHRvbjsgICAgICAgLy8g5Yig5Y675oyJ6ZKuXHJcbiAgICBwcml2YXRlIF9zdWJtaXQ6IGZndWkuR0J1dHRvbjsgICAgICAgICAgLy8g5o+Q5LqkXHJcbiAgICBwcml2YXRlIF9udW1CdG5zID0gW107XHJcbiAgICBwcml2YXRlIF9hbnN3ZXIgPSAwOyAgICAgICAgICAgICAgICAgICAgLy8g562U5qGIXHJcblxyXG4gICAgcHJpdmF0ZSBfdGl0bGU6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3RpdGxlVHJpZ2dlcjogZmd1aS5HTG9hZGVyO1xyXG5cclxuICAgIC8vIGZhaXJ5Z3VpIOe7hOS7tlxyXG4gICAgLy8g5Yqo5pWIXHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcbiAgICAvLyDov5znqIvliqjmgIHnu4Tku7ZcclxuICAgIHByaXZhdGUgZmVlZGJhY2s6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9zdGF0ZSA9IHt9O1xyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVaSh0aGlzLl9zdGF0ZSwgdik7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl93b3JsZFJvb3QgPSBjYy5maW5kKFwiQ2FudmFzXCIpLnBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuICAgICAgICB0aGlzLl9jMiA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcImMyXCIpO1xyXG4gICAgICAgIC8vIOiHqOaZglxyXG4gICAgICAgIC8vIGJ1ZyDliJ3lp4vorr7nva7kuI3mkq3mlL7kuI3nlJ/mlYhcclxuICAgICAgICBpZiAodGhpcy5fYzIpIHtcclxuICAgICAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuX2MyLnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1Ym1pdCkgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGl0bGVUcmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlVHJpZ2dlclwiKS5hc0xvYWRlcjtcclxuICAgICAgICBpZiAodGhpcy5fdGl0bGVUcmlnZ2VyKSB0aGlzLl90aXRsZVRyaWdnZXIub24oZmd1aS5FdmVudC5DTElDSywgdGhpcy5fY2xpY2tUaXRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRpdGxlXCIpLmFzQnV0dG9uO1xyXG5cclxuICAgICAgICB0aGlzLl9udW1JbnB1dCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJudW1JbnB1dFwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLl9udW1JbnB1dC5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja051bUlucHV0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2hvb3NlQm94ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImNob29zZUJveFwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLl9jaG9vc2VCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLl9maW5pc2hCdG4gPSB0aGlzLl9jaG9vc2VCb3guZ2V0Q2hpbGQoXCJmaW5pc2hCdG5cIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fZmluaXNoQnRuLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrRmluaXNoQnRuLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGVsZXRlQnRuID0gdGhpcy5fY2hvb3NlQm94LmdldENoaWxkKFwiZGVsZXRlQnRuXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX2RlbGV0ZUJ0bi5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja0RlbGV0ZUJ0biwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIG51bUJ0biDnu4RcclxuICAgICAgICBsZXQgYUdyb3VwID0gdGhpcy5fY2hvb3NlQm94LmdldENoaWxkKFwibnVtQm94XCIpLmFzR3JvdXA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaG9vc2VCb3gubnVtQ2hpbGRyZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2hvb3NlQm94LmdldENoaWxkQXQoaSkuZ3JvdXAgPT0gYUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtQnRuOiBmZ3VpLkdCdXR0b24gPSB0aGlzLl9jaG9vc2VCb3guZ2V0Q2hpbGRBdChpKS5hc0J1dHRvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX251bUJ0bnMucHVzaChudW1CdG4pO1xyXG4gICAgICAgICAgICAgICAgbnVtQnRuLm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrTnVtQnRuLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbnVtSW5wdXQ6IFwiXCIsXHJcbiAgICAgICAgICAgIGNob29zZUJveDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuc3dlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4tOaXtiDnpoHmraLmk43kvZzmnJ/pl7Qg5YiH6aG1XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRm9yYmlkSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyDkuLTml7YgbW9kZWwgY29tcG9uZW50IGpzb24g6YWN572u5Yqg6L29XHJcbiAgICAgICAgbGV0IHsgcGF0aENvbmZpZywgbW9kZWwsIGNvbXBvbmVudHMgfSA9IGRhdGE7XHJcbiAgICAgICAgbGV0IFBhY2thZ2UgPSBwYXRoQ29uZmlnLnBhY2thZ2VOYW1lO1xyXG4gICAgICAgIGxldCBHQ29tcG9uZW50ID0gbW9kZWwudWlQYXRoO1xyXG4gICAgICAgIGxldCB7IGFuc3dlciwgYWUgfSA9IG1vZGVsLmNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuXHJcbiAgICAgICAgLy8g5Yqo5pWI5rOo5YaMXHJcbiAgICAgICAgZm9yIChsZXQgdiBpbiBhZSkge1xyXG4gICAgICAgICAgICBpZiAoYWVbdl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbdl0gPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChhZVt2XS5jb21wb25lbnQpIHRoaXNbdl0uY29tcG9uZW50ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIGFlW3ZdLmNvbXBvbmVudCkuYXNDb207XHJcbiAgICAgICAgICAgICAgICBpZiAoYWVbdl0ucG9zKSB0aGlzW3ZdLnBvcyA9IGFlW3ZdLnBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgIGlmIChjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRQYXRoOiBhbnkgPSBgJHtwYXRoQ29uZmlnLnJlbW90ZVVybH0ke3BhdGhDb25maWcuY29tcG9uZW50QnVuZGxlUGF0aH0ke2NvbXBvbmVudHNba2V5XS5idW5kbGVOYW1lfWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50QnVuZGxlOiBhbnkgPSBhd2FpdCBsb2FkQnVuZGxlKGNvbXBvbmVudFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudFByZWZhYjogYW55ID0gYXdhaXQgbG9hZFByZWZhYihjb21wb25lbnRCdW5kbGUsIGNvbXBvbmVudHNba2V5XS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbXBvbmVudFByZWZhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jbGlja1RpdGxlKGV2dDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS50aXRsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g54K55Ye7IOaYvuekuui+k+WFpeWkhFxyXG4gICAgcHJpdmF0ZSBfY2xpY2tOdW1JbnB1dChldnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuY2hvb3NlQm94ID0gIXN0YXRlLmNob29zZUJveDtcclxuXHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gcGFyc2VJbnQoc3RhdGUubnVtSW5wdXQpID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy8g54K55Ye7IOa4heepuui+k+WFpVxyXG4gICAgLy8gcHJpdmF0ZSBfY2xpY2tDbGVhckJ0bihldnQ6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAvLyAgICAgc3RhdGUubnVtSW5wdXQgPSBcIlwiO1xyXG4gICAgLy8gICAgIHN0YXRlLmFuc3dlciA9IHN0YXRlLmRyb3BzID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIOi+k+WFpeWujOaIkCDpmpDol4/ovpPlhaXmoYZcclxuICAgIHByaXZhdGUgX2NsaWNrRmluaXNoQnRuKGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5jaG9vc2VCb3ggPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBwYXJzZUludChzdGF0ZS5udW1JbnB1dCkgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliKDljrvkuIDkvY1cclxuICAgIHByaXZhdGUgX2NsaWNrRGVsZXRlQnRuKGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLm51bUlucHV0KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLm51bUlucHV0ID0gc3RhdGUubnVtSW5wdXQuc3Vic3RyaW5nKDAsIHN0YXRlLm51bUlucHV0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gcGFyc2VJbnQoc3RhdGUubnVtSW5wdXQpID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g54K55Ye7IOaWh+acrOahhui+k+WFpeaVsOWtl1xyXG4gICAgcHJpdmF0ZSBfY2xpY2tOdW1CdG4oZXZ0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY3VyT2JqOiBhbnkgPSBmZ3VpLkdPYmplY3QuY2FzdChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fbnVtQnRucy5maW5kSW5kZXgoKHY6IGFueSkgPT4gdiA9PSBjdXJPYmopO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5udW1JbnB1dC5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5udW1JbnB1dCA9IHN0YXRlLm51bUlucHV0ICsgaW5kZXggKyBcIlwiO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuYW5zd2VyID0gcGFyc2VJbnQoc3RhdGUubnVtSW5wdXQpID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmj5DkuqTngrnlh7tcclxuICAgIHByaXZhdGUgX2NsaWNrU3VibWl0KGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgc3RhdGUuY2hvb3NlQm94ID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gcGFyc2VJbnQoc3RhdGUubnVtSW5wdXQpID09PSB0aGlzLl9hbnN3ZXI7XHJcbiAgICAgICAgc3RhdGUuc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05paw54q25oCB5bGCXHJcbiAgICB1cGRhdGVTdGF0ZShjdXJTdGF0ZTogYW55KSB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHRoaXMuX3N0YXRlLCBjdXJTdGF0ZSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY3VyU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pu05pawdWnlsYJcclxuICAgIHVwZGF0ZVVpKG9sZFN0YXRlOiBhbnksIHN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLmNob29zZUJveCwgc3RhdGUuY2hvb3NlQm94KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaG9vc2VCb3gudmlzaWJsZSA9IHN0YXRlLmNob29zZUJveDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUubnVtSW5wdXQsIHN0YXRlLm51bUlucHV0KSkge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGU6IGZndWkuR09iamVjdCA9IHRoaXMuX251bUlucHV0LmdldENoaWxkKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgIHRpdGxlLnRleHQgPSBzdGF0ZS5udW1JbnB1dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZ2xvYmFsVGhpcy5fLmlzRXF1YWwob2xkU3RhdGUudGl0bGUsIHN0YXRlLnRpdGxlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlUaXRsZShzdGF0ZS50aXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWdsb2JhbFRoaXMuXy5pc0VxdWFsKG9sZFN0YXRlLnN1Ym1pdCwgc3RhdGUuc3VibWl0KSkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubnVtSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25IYW5kbGVHdWlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBsYXlUaXRsZShib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYzIuc2VsZWN0ZWRJbmRleCA9IGJvb2wgPyAxIDogMDtcclxuXHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGZndWkuVUlQYWNrYWdlLmdldEl0ZW1CeVVSTCh0aGlzLl90aXRsZVtcIl9zb3VuZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBhdWRpbzogY2MuQXVkaW9DbGlwID0gYXdhaXQgbG9hZFJlc291cmNlKGl0ZW0uZmlsZSwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGF1ZGlvLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS50aXRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZvcmJpZEhhbmRsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbnN3ZXJGZWVkYmFjayhib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZlZWRiYWNrKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgZmVlZGJhY2s6IGFueSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmVlZGJhY2spO1xyXG4gICAgICAgIGZlZWRiYWNrLnggPSA5NjA7XHJcbiAgICAgICAgZmVlZGJhY2sueSA9IDU0MDtcclxuICAgICAgICBsZXQgZmVlZGJhY2tKczogYW55ID0gZmVlZGJhY2suZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCk7XHJcbiAgICAgICAgZmVlZGJhY2tKcy5pbml0KGJvb2wpO1xyXG4gICAgICAgIGZlZWRiYWNrLnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIikucGFyZW50O1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZmVlZGJhY2suZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOi/kOihjOaXtiDnpoHmraLmk43kvZxcclxuICAgIGZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmICghaGFuZGxlTWFzaykge1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlTWFzayA9IG5ldyBjYy5Ob2RlKCdoYW5kbGVNYXNrJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnBhcmVudCA9IHRoaXMuX3dvcmxkUm9vdDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay53aWR0aCA9IDE5MjA7XHJcbiAgICAgICAgICAgIGhhbmRsZU1hc2suaGVpZ2h0ID0gMTA4MDtcclxuICAgICAgICAgICAgaGFuZGxlTWFzay54ID0gOTYwO1xyXG4gICAgICAgICAgICBoYW5kbGVNYXNrLnkgPSA1NDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa2iOmZpOemgeatolxyXG4gICAgZGlzYWJsZUZvcmJpZEhhbmRsZSgpIHtcclxuICAgICAgICBsZXQgaGFuZGxlTWFzayA9IHRoaXMuX3dvcmxkUm9vdC5nZXRDaGlsZEJ5TmFtZSgnaGFuZGxlTWFzaycpO1xyXG4gICAgICAgIGlmIChoYW5kbGVNYXNrKSBoYW5kbGVNYXNrLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
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
 * @LastEditTime: 2021-04-26 11:31:53
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxzdGF0aWNcXHN0YXRpYy1tb2RlbDAxLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQWdFQztRQTlEVyxZQUFNLEdBQUcsRUFBRSxDQUFBOztJQThEdkIsQ0FBQztJQTVERyxzQkFBSSxvQ0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLENBQU07WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BTkE7SUFRRCxrQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUssZ0NBQUksR0FBVixVQUFXLElBQVM7Ozs7Z0JBRVYsVUFBVSxHQUF3QixJQUFJLFdBQTVCLEVBQUUsS0FBSyxHQUFpQixJQUFJLE1BQXJCLEVBQUUsVUFBVSxHQUFLLElBQUksV0FBVCxDQUFVO2dCQUN6QyxPQUFPLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDakMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7OztLQUN2RTtJQUVELE9BQU87SUFDUCxvQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7SUFDUix1Q0FBVyxHQUFYLFVBQVksUUFBYTtRQUNyQixJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1lBQUUsT0FBTztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUTtJQUNSLG9DQUFRLEdBQVIsVUFBUyxLQUFVLElBQUksQ0FBQztJQUd4QixnQkFBZ0I7SUFDaEIseUNBQWEsR0FBYjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsd0NBQVksR0FBWjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2Isc0NBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUEvRGdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBZ0VyQztJQUFELHdCQUFDO0NBaEVELEFBZ0VDLENBaEU4QyxFQUFFLENBQUMsU0FBUyxHQWdFMUQ7a0JBaEVvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTI2IDExOjMxOjUzXHJcbiAqL1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0YXRpY19tb2RlbDAxX3YxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3N0YXRlID0ge31cclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIOS4tOaXtiBtb2RlbCBjb21wb25lbnQganNvbiDphY3nva7liqDovb1cclxuICAgICAgICBsZXQgeyBwYXRoQ29uZmlnLCBtb2RlbCwgY29tcG9uZW50cyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgUGFja2FnZSA9IHBhdGhDb25maWcucGFja2FnZU5hbWU7XHJcbiAgICAgICAgbGV0IEdDb21wb25lbnQgPSBtb2RlbC51aVBhdGg7XHJcbiAgICAgICAgdGhpcy5fdmlldyA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBHQ29tcG9uZW50KS5hc0NvbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShzdGF0ZTogYW55KSB7IH1cclxuXHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
 * @LastEditTime: 2021-04-26 10:06:29
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xcZmVlZGJhY2tcXGphdmFzY3JpcHRzXFxmZWVkYmFjay1tb2RlbDAxLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQWlDQztRQTNCRyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFNaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBbUI1QixDQUFDO0lBakJHLG9DQUFNLEdBQU47UUFDSSxJQUFJLEtBQUssR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGtDQUFJLEdBQUosVUFBSyxJQUFhO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxLQUFtQjtRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXhCRDtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOzJEQUM4QjtJQU1oQztRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOzJEQUM4QjtJQVpmLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBaUN2QztJQUFELDBCQUFDO0NBakNELEFBaUNDLENBakNnRCxFQUFFLENBQUMsU0FBUyxHQWlDNUQ7a0JBakNvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTA0LTI2IDA5OjU0OjQxXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTI2IDEwOjA2OjI5XHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmVlZGJhY2tfbW9kZWwwMV92MSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfmraPnoa7pn7PmlYgnXHJcbiAgICB9KVxyXG4gICAgcmlnaHRBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mUmeivr+mfs+aViCdcclxuICAgIH0pXHJcbiAgICBlcnJvckF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgc3BpbmU6IHNwLlNrZWxldG9uID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLnBsYXlBdWRpbyh0aGlzLl9hbnN3ZXIgPyB0aGlzLnJpZ2h0QXVkaW8gOiB0aGlzLmVycm9yQXVkaW8pO1xyXG4gICAgICAgIHNwaW5lLnNldFNraW4odGhpcy5fYW5zd2VyID8gXCJ3aW5cIiA6IFwibG9zZVwiKTtcclxuICAgICAgICBzcGluZS5zZXRBbmltYXRpb24oMCwgdGhpcy5fYW5zd2VyID8gJ3dpbicgOiAnbG9zZScsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2Fuc3dlciA9IGJvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUF1ZGlvKGF1ZGlvOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29udHJvbGxlcnNcXGNvbnRyb2xsZXItbW9kZWwwMlxcc2NyaXB0c1xcY29udHJvbGxlci1tb2RlbDAyLWdldE1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILFNBQXNCLFVBQVUsQ0FBQyxJQUFTOzs7OztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRXBCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakIsS0FBSyxZQUFZLENBQUMsQ0FBQztvQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDL0IsTUFBTTtpQkFDVDtnQkFFRCxLQUFLLGVBQWUsQ0FBQyxDQUFDO29CQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2hCLHNCQUFPO3FCQUNWO29CQUVELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksb0JBQW9CLEVBQUU7d0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVTs0QkFBRSxzQkFBTzt3QkFDekMsS0FBb0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsRUFBakcsSUFBSSxVQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsSUFBSSxVQUFBLEVBQUUsY0FBYyxvQkFBQSxFQUFFLFNBQVMsZUFBQSxFQUFHLGFBQWEsbUJBQUEsQ0FBcUM7d0JBQ3BHLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzt3QkFD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O0FBaExELGdDQWdMQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDItMDcgMTE6Mzk6NDNcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDQtMjYgMTQ6NDE6MzlcclxuICovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZShkYXRhOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRNZXNzYWdlJylcclxuICAgIGxldCBtZXNzYWdlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcChkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXHJcbiAgICBcclxuICAgIHN3aXRjaCAoZGF0YS5tZXRob2QpIHtcclxuICAgICAgICBjYXNlIFwib25KdW1wUGFnZVwiOiB7XHJcbiAgICAgICAgICAgIHRoaXMub25KdW1wQ29uZmlnKGRhdGEudG9QYWdlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlICdvbkZpbGVNZXNzYWdlJzoge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5pc1Jlc3RvcmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEuaGFuZGxlRGF0YS5hY3Rpb24gPT0gXCJFVkVOVF9VUERBVEVfU1RBVEVcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsZXQgeyBuYW1lLCB1c2VyaWQsIHJvbGUsIHNpZ25hbGluZ01vZGVsLCBtb25pdG9yZWQgLCBtb25pdG9yZWROYW1lIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBkYXRhLmhhbmRsZURhdGEudXNlcjtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJTdGF0ZSA9IGRhdGEuaGFuZGxlRGF0YS5oYW5kbGVEYXRhO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZXZTdGF0ZSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAod2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVtcInN0YXRlXCJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYW5kbGVEYXRhLnRvVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b1VzZXIgPSBkYXRhLmhhbmRsZURhdGEudG9Vc2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWFvOWuuVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWuieWNk2lwYWQg6YOo5YiG6LSm5oi3IOaXoOazleiOt+WPlnVzZXJpZCDnlKhuYW1l5pu/5LujXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvVXNlci5pZCA9PSB1c2VyaWQgfHwgZW5jb2RlVVJJQ29tcG9uZW50KHRvVXNlci5uaWNrbmFtZSkgPT0gdXNlcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGUg5rWB6L2sIOS4tOaXtlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KGN1clN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDogIHluIjlkIzmraXlrabnlJ9cclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa8lOekuuaooeW8jyDnm7jkupLpgJrkv6FcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5wdWJTdWIuZW1pdChjdXJTdGF0ZVt2XSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOetlOmimOaooeW8jyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS7ogIHluIjkv53lrZjlrabnlJ/nrZTmoYggMi7ogIHluIjkv53lrZjlubbmuLLmn5PlrabnlJ/nrZTmoYhcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYW5sZVN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhbmxlU3RhdGUuc25hcHNob290W3VzZXIudXNlcmlkXSA9IGN1clN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KHBhbmxlU3RhdGUsIHRoaXMuX3BhbmVsLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4tOaXtiDmi5PlrqLkupEgc2Rr54mI5pys5LiN5ZCM77yM6LSm5Y+35LiN5ZCM77yM5Y+C5pWw5LiN5ZCMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS7lnKjnm7Tmkq3pl7Qg6YCa6L+HdXJs6L+b5YWl6K++5Lu277yM6K++5Lu26Lqr5Lu95ZSv5LiA5qC55o2udXJs55qE5Y+C5pWwIHVzZXJpZCByb2xlIG5hbWUg56Gu5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi7nlLHkuo7lkITnp43ljp/lm6Ag5aaC5p6cdXJs5Y+C5pWw57y65aSx77yM5LulbmFtZSDlvZPlgZp1c2VyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAzLuWBh+Wmgu+8jOWtpueUn+i/m+WFpeivvuWggu+8jOWPguaVsOe8uuWksSDov5vooYwy77yb5L2G5pivIOiAgeW4iOebkeWQrOacieS6uui/m+WFpeaIv+mXtC3ojrflj5bnmoTlrabnlJ/kv6Hmga/kvJrmnIl1c2VyaWQg5LuO6ICM5a+86Ie05ZCM5LiA5Liq5a2m55SfdXNlcmlk5LiN5LiA6Ie0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Li05pe26Kej5Yaz77ya5YWI5a+55q+UdXNlcmlk77yM5aaC5p6cdXNlcmlk5LiN5LiA6Ie0IOWvueavlCBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YGX55WZ6Zeu6aKY77yaMuS4quWtpueUn3VzZXJpZOe8uuWkse+8jOS4lOWQjeWtl+ebuOWQjCDku47ogIwg6Lqr5Lu95peg5rOV6K+G5YirXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vbml0b3JlZCAmJiAodXNlci51c2VyaWQgPT0gbW9uaXRvcmVkIHx8ICh1c2VyLnVzZXJpZCAhPSBtb25pdG9yZWQgJiYgdXNlci5uYW1lID09IG1vbml0b3JlZE5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSAmJiB2ICE9IHRoaXMuX3BhbmVsLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWtpueUnyDlkIzmraXogIHluIhcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa8lOekuuaooeW8jyDnm7jkupLpgJrkv6FcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdGF0ZSDmtYHovawg5Li05pe2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5wdWJTdWIuZW1pdChjdXJTdGF0ZVt2XSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWduYWxpbmdNb2RlbCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5yb2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlci5zaWduYWxpbmdNb2RlbCAhPSBzaWduYWxpbmdNb2RlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlIOa1gei9rCDkuLTml7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W3ZdID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5wdWJTdWIuZW1pdChjdXJTdGF0ZVt2XSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbGluZ01vZGVsID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShnbG9iYWxUaGlzLl8uaXNFcXVhbChwcmV2U3RhdGVbdl0sIGN1clN0YXRlW3ZdKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlIOa1gei9rCDkuLTml7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOW3oeivviDliqnmlZkg5ZCM5bGPIOiAgeW4iFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb2xlID09IDEgfHwgcm9sZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJldlN0YXRlKS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlIOa1gei9rCDkuLTml7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KGN1clN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgJ29uVXNlckNoYW5nZSc6IHtcclxuICAgICAgICAgICAgLy8g5q2k5Zue6LCDIOiAgeW4iOWkhOeQhlxyXG4gICAgICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5Li05pe25pa55qGIXHJcbiAgICAgICAgICAgIC8vIOiAgeW4iOerryDkurrlkZjlj5jliqgg56aB5q2iIOWPkemAgeS/oeS7pFxyXG4gICAgICAgICAgICAvLyDogIHluIjpgIDlh7rph43ov5vvvJrmraTlpITkv6Hmga/ojrflj5bml6nkuo4g6aG16Z2i54q25oCB5Yid5aeL5YyWXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEudHlwZSA9PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt0aGlzLl9wYW5lbC5uYW1lXSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEudHlwZSA9PSAnam9pbicpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gZGF0YS5kYXRhLnVzZXJzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucm9sZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt0aGlzLl9wYW5lbC5uYW1lXSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEudHlwZSA9PSAnbGVhdmUnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRhdGEuZGF0YS51c2Vyc1swXTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdGhpcy5fcGFuZWwubmFtZV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDkuLTml7bmlrnmoYhcclxuICAgICAgICAgICAgLy8g5a6a5pe25ZCM5q2lIO+8mmlwYWQg6K++5Lu25Yqg6L295oWiOyDlt7Lojrflj5bov5vlhaXmiL/pl7TnmoTkv6Hmga/vvIzkvYblrabnlJ/or77ku7blubbmnKrliqDovb3lrozmiJBcclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS50eXBlID09ICdqb2luJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBkYXRhLmRhdGEudXNlcnNbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93bih1c2VyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBhbmVsSnM6IGFueSA9IHRoaXMuX3BhbmVsLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgICAgICAgICBwYW5lbEpzLnNpZ25hbENhbGxiYWNrKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==
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
