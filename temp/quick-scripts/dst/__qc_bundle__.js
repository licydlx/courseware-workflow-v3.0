
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
require('./assets/prefabLibrary/models/clickAnswer/clickAnswer-model01-v1');
require('./assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v1');
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
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-21 22:28:42
 */
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
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
            this._state = v;
            this.updateUi(this._state);
            this.mergeState();
        },
        enumerable: false,
        configurable: true
    });
    clcikAnswer_model01_v1.prototype.onLoad = function () {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        fgui.GRoot.inst.addChild(this._view);
        // 控制器
        this._c1 = this._view.getController("c1");
        // submit 提交按钮
        this._submit = this._view.getChild("submit").asButton;
        this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        // trigger 触发器按钮
        this._trigger = this._view.getChild("triggerBtn").asButton;
        this._trigger.on(fgui.Event.CLICK, this._clickTrigger, this);
        // 容器天枰
        this._btnBox = this._view.getChild("btnBox").asButton;
        this._btnBox.on(fgui.Event.CLICK, this._clickLibra, this);
        // 天枰 子栏
        var aGroup = this._btnBox.getChild("grids").asGroup;
        for (var i = 0; i < this._btnBox.numChildren; i++) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                var grid = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }
        // 初始化state
        this._state = {
            drops: 0,
            submit: false,
            answer: false
        };
    };
    clcikAnswer_model01_v1.prototype.init = function (data) {
        // 临时 model component json 配置加载
        var Package = data.Package, GComponent = data.GComponent, config = data.config;
        var answer = config.answer, ae = config.ae;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        // 动效注册
        for (var v in ae) {
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
    clcikAnswer_model01_v1.prototype._clickTrigger = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var icon = this._trigger.getChild("icon").asLoader;
        var grid = this._grids.find(function (v) { return v.url === null; });
        if (grid) {
            grid.url = icon.url;
            state.drops = state.drops + 1;
        }
        state.answer = state.drops === this._answer;
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
    clcikAnswer_model01_v1.prototype.updateUi = function (state) {
        for (var i = 0; i < this._grids.length; i++) {
            var grid = this._grids[i];
            if (state.drops > i) {
                if (!grid.url) {
                    var icon = this._trigger.getChild("icon").asLoader;
                    grid.url = icon.url;
                }
            }
            else {
                if (grid.url)
                    grid.url = null;
            }
        }
        this._c1.selectedIndex = state.drops;
        if (state.submit) {
            if (state.drops) {
                this.answerFeedback(state.answer);
            }
            else {
                this.onHandleGuide();
            }
        }
        else {
            if (!state.answer) {
                this.onLibraHint();
            }
        }
    };
    clcikAnswer_model01_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
        var state = globalThis._.cloneDeep(this._state);
        var component;
        var pos;
        if (bool) {
            component = this.rightFeed.component;
            pos = this.rightFeed.pos;
        }
        else {
            component = this.errorFeed.component;
            pos = this.errorFeed.pos;
        }
        fgui.GRoot.inst.addChild(component);
        if (pos) {
            component.x = (fgui.GRoot.inst.width - component.width) / 2 + pos.x;
            component.y = (fgui.GRoot.inst.height - component.height) / 2 + pos.y;
        }
        else {
            component.y = (fgui.GRoot.inst.height - component.height) / 2;
        }
        var t = component.getTransition("t0");
        t.play(function () {
            fgui.GRoot.inst.removeChild(component);
            state.submit = false;
            _this.updateState(state);
        }, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxjbGlja0Fuc3dlclxcY2xpY2tBbnN3ZXItbW9kZWwwMS12MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0ssSUFBQSxlQUFlLEdBQUssTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssZ0JBQS9CLENBQWdDO0FBRWpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9ELDBDQUFZO0lBQWhFO1FBQUEscUVBNlBDO1FBalBXLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRVosWUFBTSxHQUFHLEVBQUUsQ0FBQzs7SUE4T3hCLENBQUM7SUE1T0csc0JBQUkseUNBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsTUFBTTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFD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QUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQTNQZ0Isc0JBQXNCO1FBRDFDLE9BQU87T0FDYSxzQkFBc0IsQ0E2UDFDO0lBQUQsNkJBQUM7Q0E3UEQsQUE2UEMsQ0E3UG1ELEVBQUUsQ0FBQyxTQUFTLEdBNlAvRDtrQkE3UG9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDQtMjEgMjI6Mjg6NDJcclxuICovXHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjbGNpa0Fuc3dlcl9tb2RlbDAxX3YxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX2MxOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIF9idG5Cb3g6IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX3N1Ym1pdDogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfdHJpZ2dlcjogZmd1aS5HQnV0dG9uO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGhhbmRsZUd1aWRlOiBhbnk7XHJcbiAgICBwcml2YXRlIGxpbmVCbGluazogYW55O1xyXG4gICAgcHJpdmF0ZSByaWdodEZlZWQ6IGFueTtcclxuICAgIHByaXZhdGUgZXJyb3JGZWVkOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZ3JpZHMgPSBbXTtcclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLm1lcmdlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fdmlldy55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLl92aWV3LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLl92aWV3KTtcclxuXHJcbiAgICAgICAgLy8g5o6n5Yi25ZmoXHJcbiAgICAgICAgdGhpcy5fYzEgPSB0aGlzLl92aWV3LmdldENvbnRyb2xsZXIoXCJjMVwiKTtcclxuXHJcbiAgICAgICAgLy8gc3VibWl0IOaPkOS6pOaMiemSrlxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gdHJpZ2dlciDop6blj5HlmajmjInpkq5cclxuICAgICAgICB0aGlzLl90cmlnZ2VyID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRyaWdnZXJCdG5cIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fdHJpZ2dlci5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja1RyaWdnZXIsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDlrrnlmajlpKnmnrBcclxuICAgICAgICB0aGlzLl9idG5Cb3ggPSB0aGlzLl92aWV3LmdldENoaWxkKFwiYnRuQm94XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX2J0bkJveC5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja0xpYnJhLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g5aSp5p6wIOWtkOagj1xyXG4gICAgICAgIGxldCBhR3JvdXAgPSB0aGlzLl9idG5Cb3guZ2V0Q2hpbGQoXCJncmlkc1wiKS5hc0dyb3VwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYnRuQm94Lm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGFHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JpZHMucHVzaChncmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJvcHM6IDAsXHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuc3dlcjogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IFBhY2thZ2UsIEdDb21wb25lbnQsIGNvbmZpZyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlIH0gPSBjb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcblxyXG4gICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGFuc3dlcikgdGhpcy5fYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOeCueWHu+WkqeaesCDmtojpmaTkuIDkuKpcclxuICAgIHByaXZhdGUgX2NsaWNrTGlicmEoZXZ0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuX2dyaWRzLmZpbmRJbmRleCgodjogYW55KSA9PiB2LnVybCA9PT0gbnVsbCk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9ncmlkc1tpbmRleCA9PSAtMSA/IHRoaXMuX2dyaWRzLmxlbmd0aCAtIDEgOiBpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICBncmlkLnVybCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5kcm9wcyA9IHN0YXRlLmRyb3BzIC0gMTtcclxuICAgICAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOinpuWPkeWZqOeCueWHu1xyXG4gICAgcHJpdmF0ZSBfY2xpY2tUcmlnZ2VyKGV2dDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGljb246IGZndWkuR0xvYWRlciA9IHRoaXMuX3RyaWdnZXIuZ2V0Q2hpbGQoXCJpY29uXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9ncmlkcy5maW5kKHYgPT4gdi51cmwgPT09IG51bGwpO1xyXG4gICAgICAgIGlmIChncmlkKSB7XHJcbiAgICAgICAgICAgIGdyaWQudXJsID0gaWNvbi51cmw7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyb3BzID0gc3RhdGUuZHJvcHMgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmj5DkuqTngrnlh7tcclxuICAgIHByaXZhdGUgX2NsaWNrU3VibWl0KGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkoc3RhdGU6IGFueSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZ3JpZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2dyaWRzW2ldO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZHJvcHMgPiBpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyaWQudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGljb246IGZndWkuR0xvYWRlciA9IHRoaXMuX3RyaWdnZXIuZ2V0Q2hpbGQoXCJpY29uXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQudXJsID0gaWNvbi51cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZC51cmwpIGdyaWQudXJsID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYzEuc2VsZWN0ZWRJbmRleCA9IHN0YXRlLmRyb3BzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmRyb3BzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuc3dlckZlZWRiYWNrKHN0YXRlLmFuc3dlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uSGFuZGxlR3VpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghc3RhdGUuYW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTGlicmFIaW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDpib29sZWFuKXtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQ6YW55O1xyXG4gICAgICAgIGxldCBwb3M6YW55O1xyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMucmlnaHRGZWVkLmNvbXBvbmVudDtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5yaWdodEZlZWQucG9zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZXJyb3JGZWVkLmNvbXBvbmVudDtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5lcnJvckZlZWQucG9zOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZChjb21wb25lbnQpO1xyXG4gICAgICAgIGlmIChwb3MpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gY29tcG9uZW50LndpZHRoKSAvIDIgKyBwb3MueDtcclxuICAgICAgICAgICAgY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIGNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSBjb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQoY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlpKnmnrDmj5DnpLpcclxuICAgIG9uTGlicmFIaW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saW5lQmxpbmspIHJldHVybjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5saW5lQmxpbmsuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5saW5lQmxpbmsucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5saW5lQmxpbmsucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmxpbmVCbGluay5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVCbGluay5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMubGluZUJsaW5rLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWxpZXZlU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
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
 * @LastEditTime: 2021-04-14 14:19:39
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxyYWRpb1N3aXRjaFxccmFkaW9Td2l0Y2gtbW9kZWwwMS12MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUFvRkM7UUFoRlcsWUFBTSxHQUFHLEVBQUUsQ0FBQTs7SUFnRnZCLENBQUM7SUE5RUcsc0JBQUkseUNBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUM7OztPQU5BO0lBUUQsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0UsV0FBVztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixhQUFhLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhO1NBQ2pELENBQUE7SUFDTCxDQUFDO0lBRUQscUNBQUksR0FBSixVQUFLLElBQVM7UUFDSixJQUFBLE9BQU8sR0FBaUIsSUFBSSxRQUFyQixFQUFFLFVBQVUsR0FBSyxJQUFJLFdBQVQsQ0FBVTtRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEUsQ0FBQztJQUVELEtBQUs7SUFDTCxnREFBZSxHQUFmLFVBQWdCLEdBQU87UUFDbkIsSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPO0lBQ1AseUNBQVEsR0FBUixVQUFTLElBQVM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRO0lBQ1IsNENBQVcsR0FBWCxVQUFZLFFBQWE7UUFDckIsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUFFLE9BQU87UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVE7SUFDUix5Q0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNmLEtBQUs7UUFDTCxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUMxRDtJQUNMLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsOENBQWEsR0FBYjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsNkNBQVksR0FBWjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2IsMkNBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwwQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFuRmdCLHNCQUFzQjtRQUQxQyxPQUFPO09BQ2Esc0JBQXNCLENBb0YxQztJQUFELDZCQUFDO0NBcEZELEFBb0ZDLENBcEZtRCxFQUFFLENBQUMsU0FBUyxHQW9GL0Q7a0JBcEZvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTE0IDE0OjE5OjM5XHJcbiAqL1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJhZGlvU3dpdGNoX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfcmFkaW9Td2l0Y2gxOiBmZ3VpLkNvbnRyb2xsZXI7ICAvLyDmjqfliLblmagxXHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fVxyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICAvLyByYWRpb1N3aXRjaCDpopjlnotcclxuICAgICAgICAvLyAxLuWIh+aNouaOp+WItuWZqFxyXG4gICAgICAgIHRoaXMuX3JhZGlvU3dpdGNoMSA9IHRoaXMuX3ZpZXcuZ2V0Q29udHJvbGxlcihcInJhZGlvU3dpdGNoMVwiKTtcclxuICAgICAgICB0aGlzLl9yYWRpb1N3aXRjaDEub24oZmd1aS5FdmVudC5TVEFUVVNfQ0hBTkdFRCwgdGhpcy5vblN3aXRjaENoYW5nZWQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJZzdGF0ZVxyXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OnRoaXMuX3JhZGlvU3dpdGNoMS5zZWxlY3RlZEluZGV4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHsgUGFja2FnZSwgR0NvbXBvbmVudCB9ID0gZGF0YTtcclxuICAgICAgICB0aGlzLl92aWV3ID0gZmd1aS5VSVBhY2thZ2UuY3JlYXRlT2JqZWN0KFBhY2thZ2UsIEdDb21wb25lbnQpLmFzQ29tO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIh+aNolxyXG4gICAgb25Td2l0Y2hDaGFuZ2VkKGV2dDphbnkpIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnNlbGVjdGVkSW5kZXggPSBldnQuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W54q25oCBXHJcbiAgICBnZXRTdGF0ZShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOeKtuaAgeWxglxyXG4gICAgdXBkYXRlU3RhdGUoY3VyU3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaGlzLl8uaXNFcXVhbCh0aGlzLl9zdGF0ZSwgY3VyU3RhdGUpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGN1clN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsHVp5bGCXHJcbiAgICB1cGRhdGVVaShzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgLy8g5YiH5o2iXHJcbiAgICAgICAgaWYgKHN0YXRlLnNlbGVjdGVkSW5kZXggIT09IHRoaXMuX3JhZGlvU3dpdGNoMS5zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JhZGlvU3dpdGNoMS5zZWxlY3RlZEluZGV4ID0gc3RhdGUuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
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
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-21 22:24:13
 */
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
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
            this._state = v;
            this.updateUi(this._state);
            this.mergeState();
        },
        enumerable: false,
        configurable: true
    });
    dragAnswer_model01_v1.prototype.onLoad = function () {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        fgui.GRoot.inst.addChild(this._view);
        this._c1 = this._view.getController("c1");
        this._submit = this._view.getChild("submit").asButton;
        this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._dragBtn = this._view.getChild("dragBtn").asButton;
        this._cache["dragOrigin"] = this.getOriginValue(this._dragBtn);
        this._dragBtn.draggable = true;
        this._dragBtn.on(fgui.Event.DRAG_START, this._onDragStart, this);
        this._dragBtn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        this._dragBtn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
        this._btnBox = this._view.getChild("btnBox").asButton;
        this._btnBox.on(fgui.Event.CLICK, this._onClick, this);
        var aGroup = this._btnBox.getChild("grids").asGroup;
        for (var i = 0; i < this._btnBox.numChildren; i++) {
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
            drops: 0,
            submit: false,
            answer: false
        };
    };
    dragAnswer_model01_v1.prototype.init = function (data) {
        // 临时 model component json 配置加载
        var Package = data.Package, GComponent = data.GComponent, config = data.config;
        var answer = config.answer, ae = config.ae;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        // 动效注册
        for (var v in ae) {
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
        var test = pointBelongArea("rectangle", this._btnBox, this._dragBtn);
        if (test) {
            var icon = this._dragBtn.getChild("icon").asLoader;
            var grid = this._grids.find(function (v) { return v.url === null; });
            if (grid) {
                grid.url = icon.url;
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
    dragAnswer_model01_v1.prototype._onClick = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        var index = this._grids.findIndex(function (v) { return v.url === null; });
        if (index !== 0) {
            var grid = this._grids[index == -1 ? this._grids.length - 1 : index - 1];
            grid.url = null;
            state.answer = state.drops === this._answer;
            state.drops = state.drops - 1;
            this.updateState(state);
        }
    };
    dragAnswer_model01_v1.prototype._clickSubmit = function (evt) {
        var state = globalThis._.cloneDeep(this._state);
        state.answer = state.drops === this._answer;
        state.submit = true;
        this.updateState(state);
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
    dragAnswer_model01_v1.prototype.updateUi = function (state) {
        if (state.drag == "start") {
            if (!state.answer) {
                this.onLibraHint();
            }
        }
        if (state.drag == "move") {
            this._dragBtn.x = state.dragBtn.x;
            this._dragBtn.y = state.dragBtn.y;
        }
        if (state.drag == "end") {
            this._dragBtn.x = this._cache["dragOrigin"].x;
            this._dragBtn.y = this._cache["dragOrigin"].y;
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
            if (state.submit) {
                if (state.drops) {
                    this.answerFeedback(state.answer);
                }
                else {
                    this.onHandleGuide();
                }
            }
        }
    };
    dragAnswer_model01_v1.prototype.answerFeedback = function (bool) {
        var _this = this;
        var state = globalThis._.cloneDeep(this._state);
        var component;
        var pos;
        if (bool) {
            component = this.rightFeed.component;
            pos = this.rightFeed.pos;
        }
        else {
            component = this.errorFeed.component;
            pos = this.errorFeed.pos;
        }
        fgui.GRoot.inst.addChild(component);
        if (pos) {
            component.x = (fgui.GRoot.inst.width - component.width) / 2 + pos.x;
            component.y = (fgui.GRoot.inst.height - component.height) / 2 + pos.y;
        }
        else {
            component.y = (fgui.GRoot.inst.height - component.height) / 2;
        }
        var t = component.getTransition("t0");
        t.play(function () {
            fgui.GRoot.inst.removeChild(component);
            state.submit = false;
            _this.updateState(state);
        }, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDEtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNLLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQTBUQztRQTlTVyxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUVaLFlBQU0sR0FBRyxFQUFFLENBQUM7O0lBc1N4QixDQUFDO0lBcFNHLHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDOzs7T0FOQTtJQVFELHNDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFR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SUFFRCxhQUFhO0lBQ2IsMENBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXpUZ0IscUJBQXFCO1FBRHpDLE9BQU87T0FDYSxxQkFBcUIsQ0EwVHpDO0lBQUQsNEJBQUM7Q0ExVEQsQUEwVEMsQ0ExVGtELEVBQUUsQ0FBQyxTQUFTLEdBMFQ5RDtrQkExVG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjEtMDMtMjYgMTg6MDU6MTJcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDQtMjEgMjI6MjQ6MTNcclxuICovXHJcbmNvbnN0IHsgcG9pbnRCZWxvbmdBcmVhIH0gPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS51dGlscztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkcmFnQW5zd2VyX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfdmlldzogZmd1aS5HQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfYzE6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2RyYWdCdG46IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX2J0bkJveDogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfc3VibWl0OiBmZ3VpLkdCdXR0b247XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVHdWlkZTogYW55O1xyXG4gICAgcHJpdmF0ZSBsaW5lQmxpbms6IGFueTtcclxuICAgIHByaXZhdGUgcmlnaHRGZWVkOiBhbnk7XHJcbiAgICBwcml2YXRlIGVycm9yRmVlZDogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2dyaWRzID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FjaGUgPSB7fTtcclxuICAgIHByaXZhdGUgX3NjaGVkdWxlVGltZSA9IC4zO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9hbnN3ZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXRlID0ge307XHJcblxyXG4gICAgZ2V0IHN0YXRlKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0ZSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHY7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVaSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3ZpZXcueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5fdmlldy5oZWlnaHQpIC8gMjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5fdmlldyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2MxID0gdGhpcy5fdmlldy5nZXRDb250cm9sbGVyKFwiYzFcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1Ym1pdCA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJzdWJtaXRcIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fc3VibWl0Lm9uKGZndWkuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrU3VibWl0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhZ0J0biA9IHRoaXMuX3ZpZXcuZ2V0Q2hpbGQoXCJkcmFnQnRuXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX2NhY2hlW1wiZHJhZ09yaWdpblwiXSA9IHRoaXMuZ2V0T3JpZ2luVmFsdWUodGhpcy5fZHJhZ0J0bik7XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4uZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9kcmFnQnRuLm9uKGZndWkuRXZlbnQuRFJBR19TVEFSVCwgdGhpcy5fb25EcmFnU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4ub24oZmd1aS5FdmVudC5UT1VDSF9NT1ZFLCB0aGlzLl9vbkRyYWdNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9kcmFnQnRuLm9uKGZndWkuRXZlbnQuVE9VQ0hfRU5ELCB0aGlzLl9vbkRyYWdFbmQsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9idG5Cb3ggPSB0aGlzLl92aWV3LmdldENoaWxkKFwiYnRuQm94XCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuX2J0bkJveC5vbihmZ3VpLkV2ZW50LkNMSUNLLCB0aGlzLl9vbkNsaWNrLCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IGFHcm91cCA9IHRoaXMuX2J0bkJveC5nZXRDaGlsZChcImdyaWRzXCIpLmFzR3JvdXA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYnRuQm94Lm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGFHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JpZHMucHVzaChncmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWc3RhdGVcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJhZzogXCJlbmRcIixcclxuICAgICAgICAgICAgZHJhZ0J0bjoge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5fZHJhZ0J0bi54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fZHJhZ0J0bi55XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRyb3BzOiAwLFxyXG4gICAgICAgICAgICBzdWJtaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8g5Li05pe2IG1vZGVsIGNvbXBvbmVudCBqc29uIOmFjee9ruWKoOi9vVxyXG4gICAgICAgIGxldCB7IFBhY2thZ2UsIEdDb21wb25lbnQsIGNvbmZpZyB9ID0gZGF0YTtcclxuICAgICAgICBsZXQgeyBhbnN3ZXIsIGFlIH0gPSBjb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcblxyXG4gICAgICAgIC8vIOWKqOaViOazqOWGjFxyXG4gICAgICAgIGZvciAobGV0IHYgaW4gYWUpIHtcclxuICAgICAgICAgICAgaWYgKGFlW3ZdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3ZdID0ge307XHJcbiAgICAgICAgICAgICAgICBpZiAoYWVbdl0uY29tcG9uZW50KSB0aGlzW3ZdLmNvbXBvbmVudCA9IGZndWkuVUlQYWNrYWdlLmNyZWF0ZU9iamVjdChQYWNrYWdlLCBhZVt2XS5jb21wb25lbnQpLmFzQ29tO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFlW3ZdLnBvcykgdGhpc1t2XS5wb3MgPSBhZVt2XS5wb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhbnN3ZXIpIHRoaXMuX2Fuc3dlciA9IGFuc3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmlnaW5WYWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB2LngsXHJcbiAgICAgICAgICAgIHk6IHYueVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdTdGFydChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldnQuY2FwdHVyZVRvdWNoKCk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuZHJhZyA9IFwic3RhcnRcIjtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ01vdmUoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRHJhZ0VuZChldnQ6IGZndWkuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IHRlc3QgPSBwb2ludEJlbG9uZ0FyZWEoXCJyZWN0YW5nbGVcIiwgdGhpcy5fYnRuQm94LCB0aGlzLl9kcmFnQnRuKTtcclxuICAgICAgICBpZiAodGVzdCkge1xyXG4gICAgICAgICAgICBsZXQgaWNvbjogZmd1aS5HTG9hZGVyID0gdGhpcy5fZHJhZ0J0bi5nZXRDaGlsZChcImljb25cIikuYXNMb2FkZXI7XHJcbiAgICAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9ncmlkcy5maW5kKHYgPT4gdi51cmwgPT09IG51bGwpO1xyXG4gICAgICAgICAgICBpZiAoZ3JpZCkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC51cmwgPSBpY29uLnVybDtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmRyb3BzID0gc3RhdGUuZHJvcHMgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZS5kcmFnQnRuID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLl9jYWNoZVtcImRyYWdPcmlnaW5cIl0ueCxcclxuICAgICAgICAgICAgeTogdGhpcy5fY2FjaGVbXCJkcmFnT3JpZ2luXCJdLnksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGF0ZS5kcmFnID0gXCJlbmRcIjtcclxuICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uQ2xpY2soZXZ0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuX2dyaWRzLmZpbmRJbmRleCgodjogYW55KSA9PiB2LnVybCA9PT0gbnVsbCk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBncmlkOiBmZ3VpLkdMb2FkZXIgPSB0aGlzLl9ncmlkc1tpbmRleCA9PSAtMSA/IHRoaXMuX2dyaWRzLmxlbmd0aCAtIDEgOiBpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICBncmlkLnVybCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5hbnN3ZXIgPSBzdGF0ZS5kcm9wcyA9PT0gdGhpcy5fYW5zd2VyO1xyXG4gICAgICAgICAgICBzdGF0ZS5kcm9wcyA9IHN0YXRlLmRyb3BzIC0gMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NsaWNrU3VibWl0KGV2dDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgc3RhdGUuYW5zd2VyID0gc3RhdGUuZHJvcHMgPT09IHRoaXMuX2Fuc3dlcjtcclxuICAgICAgICBzdGF0ZS5zdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkoc3RhdGU6IGFueSkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwic3RhcnRcIikge1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLmFuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkxpYnJhSGludCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUuZHJhZyA9PSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9kcmFnQnRuLnggPSBzdGF0ZS5kcmFnQnRuLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdCdG4ueSA9IHN0YXRlLmRyYWdCdG4ueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5kcmFnID09IFwiZW5kXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ0J0bi54ID0gdGhpcy5fY2FjaGVbXCJkcmFnT3JpZ2luXCJdLng7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdCdG4ueSA9IHRoaXMuX2NhY2hlW1wiZHJhZ09yaWdpblwiXS55O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ncmlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2dyaWRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmRyb3BzID4gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JpZC51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGljb246IGZndWkuR0xvYWRlciA9IHRoaXMuX2RyYWdCdG4uZ2V0Q2hpbGQoXCJpY29uXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLnVybCA9IGljb24udXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWQudXJsKSBncmlkLnVybCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2MxLnNlbGVjdGVkSW5kZXggPSBzdGF0ZS5kcm9wcztcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5kcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyRmVlZGJhY2soc3RhdGUuYW5zd2VyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhhbmRsZUd1aWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5zd2VyRmVlZGJhY2soYm9vbDpib29sZWFuKXtcclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQ6YW55O1xyXG4gICAgICAgIGxldCBwb3M6YW55O1xyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMucmlnaHRGZWVkLmNvbXBvbmVudDtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5yaWdodEZlZWQucG9zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZXJyb3JGZWVkLmNvbXBvbmVudDtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5lcnJvckZlZWQucG9zOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZChjb21wb25lbnQpO1xyXG4gICAgICAgIGlmIChwb3MpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LnggPSAoZmd1aS5HUm9vdC5pbnN0LndpZHRoIC0gY29tcG9uZW50LndpZHRoKSAvIDIgKyBwb3MueDtcclxuICAgICAgICAgICAgY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIGNvbXBvbmVudC5oZWlnaHQpIC8gMiArIHBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSBjb21wb25lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdDogZmd1aS5UcmFuc2l0aW9uID0gY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQoY29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgICAgICB9LCAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlpKnmnrDmj5DnpLpcclxuICAgIG9uTGlicmFIaW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5saW5lQmxpbmspIHJldHVybjtcclxuICAgICAgICBmZ3VpLkdSb290Lmluc3QuYWRkQ2hpbGQodGhpcy5saW5lQmxpbmsuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5saW5lQmxpbmsucG9zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC54ID0gKGZndWkuR1Jvb3QuaW5zdC53aWR0aCAtIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5saW5lQmxpbmsucG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC55ID0gKGZndWkuR1Jvb3QuaW5zdC5oZWlnaHQgLSB0aGlzLmxpbmVCbGluay5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmxpbmVCbGluay5wb3MueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVCbGluay5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5saW5lQmxpbmsuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMubGluZUJsaW5rLmNvbXBvbmVudC5nZXRUcmFuc2l0aW9uKFwidDBcIik7XHJcbiAgICAgICAgdC5wbGF5KCgpID0+IHtcclxuICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LnJlbW92ZUNoaWxkKHRoaXMubGluZUJsaW5rLmNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pON5L2c5o+Q56S6XHJcbiAgICBvbkhhbmRsZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVHdWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50KTtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVHdWlkZS5wb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueCA9IChmZ3VpLkdSb290Lmluc3Qud2lkdGggLSB0aGlzLmhhbmRsZUd1aWRlLmNvbXBvbmVudC53aWR0aCkgLyAyICsgdGhpcy5oYW5kbGVHdWlkZS5wb3MueDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQueSA9IChmZ3VpLkdSb290Lmluc3QuaGVpZ2h0IC0gdGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQuaGVpZ2h0KSAvIDIgKyB0aGlzLmhhbmRsZUd1aWRlLnBvcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmhlaWdodCkgLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHQ6IGZndWkuVHJhbnNpdGlvbiA9IHRoaXMuaGFuZGxlR3VpZGUuY29tcG9uZW50LmdldFRyYW5zaXRpb24oXCJ0MFwiKTtcclxuICAgICAgICB0LnBsYXkoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZ3VpLkdSb290Lmluc3QucmVtb3ZlQ2hpbGQodGhpcy5oYW5kbGVHdWlkZS5jb21wb25lbnQpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4tOaXtlxyXG4gICAgLy8g5ouW5ou95a6a5pe25ZmoXHJcbiAgICBkcmFnU2NoZWR1bGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIHN0YXRlLmRyYWcgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgc3RhdGUuZHJhZ0J0biA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2RyYWdCdG4ueCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2RyYWdCdG4ueSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOazqOWGjOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVnaXN0ZXJTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Kej6Zmk54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWxpZXZlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWxpZXZlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnKznu4Tku7bnirbmgIHlkIjlubbliLDlhajlsYBcclxuICAgIG1lcmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZHJhZ1NjaGVkdWxlLCB0aGlzLl9zY2hlZHVsZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xcZm9ybWFsLXBhbmxlLW1vZGVsMDJcXGphdmFzY3JpcHRzXFxmb3JtYWwtcGFubGUtbW9kZWwwMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Qsd0NBQVk7SUFBOUQ7UUFBQSxxRUEwU0M7UUFyU0csZUFBUyxHQUFZLElBQUksQ0FBQztRQU0xQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQU01QixZQUFNLEdBQWMsRUFBRSxDQUFDO1FBRWhCLFlBQU0sR0FBRztZQUNaLElBQUksRUFBRSxLQUFLO1lBQ1gsY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSTtZQUNaLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBY00sV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFpUXpCLENBQUM7SUE3UUcsc0JBQUksdUNBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVSxDQUFNO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDOzs7T0FSQTtJQVlELHFDQUFNLEdBQU47UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxNQUFNO0lBQ0EsbUNBQUksR0FBVjs7OztLQUFnQjtJQUVoQixvQ0FBSyxHQUFMO1FBQ0ksSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsNENBQWEsR0FBYjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsMkNBQVksR0FBWjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2IseUNBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxPQUFPO0lBQ1AsdUNBQVEsR0FBUixVQUFTLElBQVM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPO0lBQ1Asd0NBQVMsR0FBVCxVQUFVLENBQU0sRUFBRSxHQUFRO1FBQ3RCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUFFLE9BQU87UUFFdEQsSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE9BQU87SUFDUCxtREFBb0IsR0FBcEIsVUFBcUIsQ0FBTSxFQUFFLEdBQVE7UUFDakMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO1lBQUUsT0FBTztRQUV0RCxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWM7WUFBRSxPQUFPO1FBQ2xFLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDVixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQixLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUN0QjthQUFNLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNqQixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNqQixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUMxQjtRQUVELElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLFFBQVEsR0FBUSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUUvRCxJQUFJLFFBQVEsRUFBRTtZQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFzQixFQUFFO29CQUNuRixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDeEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPO0lBQ1AsOENBQWUsR0FBZixVQUFnQixDQUFNLEVBQUUsR0FBUTtRQUM1QixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRXRELElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyRCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNwRCxJQUFJLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxGLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLFFBQWEsQ0FBQztRQUVsQixJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFFO1lBQzlCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztTQUN6RDthQUFNO1lBQ0gsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFFNUIsS0FBSztZQUNMLGlDQUFpQztZQUNqQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDdkMsUUFBUSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDN0M7U0FDSjtRQUVELElBQUksUUFBUSxFQUFFO1lBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQXNCLEVBQUU7b0JBQ25GLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE9BQU87SUFDUCwyQ0FBWSxHQUFaLFVBQWEsQ0FBTSxFQUFFLEdBQVE7UUFDekIsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO1lBQUUsT0FBTztRQUV0RCxJQUFJLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakQsSUFBSSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUvRSxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxRQUFhLENBQUM7UUFDbEIsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUN4QixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQixRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7U0FDekQ7YUFBTTtZQUNILEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXRCLEtBQUs7WUFDTCxpQ0FBaUM7WUFDakMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QixRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QztpQkFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BDLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFDO1NBQ0o7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLHNCQUFzQixFQUFFO29CQUNuRixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDeEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO0lBQ1YsZ0RBQWlCLEdBQWpCLFVBQWtCLElBQVM7UUFDdkIsSUFBSSxLQUFLLEdBQVEsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGFBQWE7SUFDYiw0Q0FBYSxHQUFiLFVBQWMsTUFBVztRQUNyQixJQUFJLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLElBQUksTUFBTSxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQzdELElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRCxRQUFRO0lBQ1IsMENBQVcsR0FBWCxVQUFZLFFBQWE7UUFDckIsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQztZQUFFLE9BQU87UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU07SUFDTix1Q0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNmLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDdkMsS0FBSyxFQUFFLENBQUM7UUFFYixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3JDLEtBQUssRUFBRSxDQUFDO1FBRWIsV0FBVztRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzNHO1FBRUQsZUFBZTtRQUNmLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDdEUsV0FBVztRQUNYLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFFaEUsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNmLElBQUksS0FBSyxHQUFRLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFBO1FBQ3hFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVUsS0FBVTtRQUNoQixJQUFJLEtBQUssR0FBUSxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCw2Q0FBYyxHQUFkLFVBQWUsSUFBUztRQUNwQixpQ0FBaUM7UUFDakMscUJBQXFCO1FBQ3JCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbkIsSUFBSSxJQUFJLFNBQUssQ0FBQztZQUNkLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7Z0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QztZQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7Z0JBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztZQUVELElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQztZQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFwU0Q7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUk7WUFDYixXQUFXLEVBQUUsY0FBYztTQUM5QixDQUFDOzJEQUN3QjtJQU0xQjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtZQUNiLFdBQVcsRUFBRSxnQkFBZ0I7U0FDaEMsQ0FBQzs2REFDMEI7SUFNNUI7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQzt3REFDcUI7SUFqQk4sb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0EwU3hDO0lBQUQsMkJBQUM7Q0ExU0QsQUEwU0MsQ0ExU2lELEVBQUUsQ0FBQyxTQUFTLEdBMFM3RDtrQkExU29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IFxyXG4gKiBAdmVyc2lvbjogXHJcbiAqIEBBdXRob3I6IHlkbHhcclxuICogQERhdGU6IDIwMjAtMTEtMTkgMTg6MDU6MDlcclxuICogQExhc3RFZGl0b3JzOiB5ZGx4XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjEtMDQtMTIgMTc6NTc6MjdcclxuICovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmb3JtYWxfcGFubGVfbW9kZWwwMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdtb2RlbExpc3Qg6IqC54K5J1xyXG4gICAgfSlcclxuICAgIG1vZGVsTGlzdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnc3R1ZGVudExpc3Qg6IqC54K5J1xyXG4gICAgfSlcclxuICAgIHN0dWRlbnRMaXN0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IFtjYy5Ob2RlXSxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+aooeW8j+iKgueCuSdcclxuICAgIH0pXHJcbiAgICBtb2RlbHM6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBfc3RhdGUgPSB7XHJcbiAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgc2lnbmFsaW5nTW9kZWw6IDEsXHJcbiAgICAgICAgbW9uaXRvcmVkOiBudWxsLFxyXG4gICAgICAgIGxhdW5jaDogbnVsbCxcclxuICAgICAgICBzdHVkZW50TGlzdDogW10sXHJcbiAgICAgICAgcmFua2luZzogW10sXHJcbiAgICAgICAgc25hcHNob290OiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXQgc3RhdGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHN0YXRlKHY6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICB0aGlzLl9zdEpzLnVwZGF0ZVVpKHRoaXMuX3N0YXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXJnZVN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RKcyA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBzdHVkZW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzdHVkZW50TGlzdCcpO1xyXG4gICAgICAgIHRoaXMuX3N0SnMgPSBzdHVkZW50LmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIneWni+WMllxyXG4gICAgYXN5bmMgaW5pdCgpIHsgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc2lnbmFsaW5nTW9kZWwgPSAxO1xyXG4gICAgICAgIHN0YXRlLnNuYXBzaG9vdCA9IHt9O1xyXG4gICAgICAgIHN0YXRlLm1vbml0b3JlZCA9IG51bGw7XHJcbiAgICAgICAgc3RhdGUubGF1bmNoID0gbnVsbDtcclxuICAgICAgICBzdGF0ZS5yYW5raW5nID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDms6jlhoznirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlZ2lzdGVyU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5yZWdpc3RlclN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOino+mZpOeKtuaAge+8jOWPiuiOt+WPlueKtuaAgeeahOaWueazlVxyXG4gICAgcmVsaWV2ZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlKSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVsaWV2ZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5pys57uE5Lu254q25oCB5ZCI5bm25Yiw5YWo5bGAXHJcbiAgICBtZXJnZVN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUubWVyZ2VTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5bnirbmgIFcclxuICAgIGdldFN0YXRlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YiH5o2i6Z2i5p2/XHJcbiAgICBzd2l0Y2hCb3goZTogYW55LCBjZWQ6IGFueSkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnJvbGUgIT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGU6IGFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnNob3cgPSAhc3RhdGUuc2hvdztcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliIfmjaLmqKHlvI9cclxuICAgIGNoYW5nZVNpZ25hbGluZ01vZGVsKGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlICE9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGNlZCA9PSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnNpZ25hbGluZ01vZGVsKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5zaWduYWxpbmdNb2RlbCA9IHBhcnNlSW50KGNlZCk7XHJcblxyXG4gICAgICAgIGlmIChjZWQgPT0gMSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5tb25pdG9yZWQgPSBudWxsO1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXVuY2ggPSBudWxsO1xyXG4gICAgICAgICAgICBzdGF0ZS5yYW5raW5nID0gW107XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWQgPT0gMikge1xyXG4gICAgICAgICAgICBzdGF0ZS5sYXVuY2ggPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2VkID09IDMpIHtcclxuICAgICAgICAgICAgc3RhdGUubW9uaXRvcmVkID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmV2U3RhdGUgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbXCJzdGF0ZVwiXSk7XHJcbiAgICAgICAgbGV0IGN1clN0YXRlOiBhbnkgPSB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLnN0YXRlU2hvb3Q7XHJcblxyXG4gICAgICAgIGlmIChjdXJTdGF0ZSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmV2U3RhdGUpLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMuXy5pc0VxdWFsKHByZXZTdGF0ZVt2XSwgY3VyU3RhdGVbdl0pKSAmJiB2ICE9IFwiZm9ybWFsLXBhbmxlLW1vZGVsMDJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbdl0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snR2xvYmFsRGF0YSddLnB1YlN1Yi5lbWl0KGN1clN0YXRlW3ZdLCB2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliIfmjaLnm5HmjqdcclxuICAgIGNoYW5nZU1vbml0b3JlZChlOiBhbnksIGNlZDogYW55KSB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1snR2xvYmFsRGF0YSddLmNvdXJzZURhdGEucm9sZSAhPSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcblxyXG4gICAgICAgIGxldCBtb25pdG9yZWQgPSBzdGF0ZS5zdHVkZW50TGlzdFtwYXJzZUludChjZWQpXS5pZDtcclxuICAgICAgICBsZXQgbW9uaXRvcmVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZS5zdHVkZW50TGlzdFtwYXJzZUludChjZWQpXS5uaWNrbmFtZSk7XHJcblxyXG4gICAgICAgIGxldCBwcmV2U3RhdGUgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHdpbmRvd1snR2xvYmFsRGF0YSddLnN0YXRlUHJveHlbXCJzdGF0ZVwiXSk7XHJcbiAgICAgICAgbGV0IGN1clN0YXRlOiBhbnk7XHJcblxyXG4gICAgICAgIGlmIChzdGF0ZS5tb25pdG9yZWQgPT0gbW9uaXRvcmVkKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vbml0b3JlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1clN0YXRlID0gd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zdGF0ZVNob290O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1vbml0b3JlZCA9IG1vbml0b3JlZDtcclxuXHJcbiAgICAgICAgICAgIC8vIOWFvOWuuVxyXG4gICAgICAgICAgICAvLyDlronljZNpcGFkIOmDqOWIhui0puaItyDml6Dms5Xojrflj5Z1c2VyaWQg55SobmFtZeabv+S7o1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc25hcHNob290W21vbml0b3JlZF0pIHtcclxuICAgICAgICAgICAgICAgIGN1clN0YXRlID0gc3RhdGUuc25hcHNob290W21vbml0b3JlZF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuc25hcHNob290W21vbml0b3JlZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJTdGF0ZSA9IHN0YXRlLnNuYXBzaG9vdFttb25pdG9yZWROYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1clN0YXRlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpICYmIHYgIT0gXCJmb3JtYWwtcGFubGUtbW9kZWwwMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIh+aPm+aKleaUvlxyXG4gICAgY2hhbmdlTGF1bmNoKGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5yb2xlICE9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgbGF1bmNoID0gc3RhdGUuc3R1ZGVudExpc3RbcGFyc2VJbnQoY2VkKV0uaWQ7XHJcbiAgICAgICAgbGV0IGxhdW5jaE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdGUuc3R1ZGVudExpc3RbcGFyc2VJbnQoY2VkKV0ubmlja25hbWUpO1xyXG5cclxuICAgICAgICBsZXQgcHJldlN0YXRlID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zdGF0ZVByb3h5W1wic3RhdGVcIl0pO1xyXG4gICAgICAgIGxldCBjdXJTdGF0ZTogYW55O1xyXG4gICAgICAgIGlmIChzdGF0ZS5sYXVuY2ggPT0gbGF1bmNoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhdW5jaCA9IG51bGw7XHJcbiAgICAgICAgICAgIGN1clN0YXRlID0gd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zdGF0ZVNob290O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxhdW5jaCA9IGxhdW5jaDtcclxuXHJcbiAgICAgICAgICAgIC8vIOWFvOWuuVxyXG4gICAgICAgICAgICAvLyDlronljZNpcGFkIOmDqOWIhui0puaItyDml6Dms5Xojrflj5Z1c2VyaWQg55SobmFtZeabv+S7o1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuc25hcHNob290W2xhdW5jaF0pIHtcclxuICAgICAgICAgICAgICAgIGN1clN0YXRlID0gc3RhdGUuc25hcHNob290W2xhdW5jaF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuc25hcHNob290W2xhdW5jaE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJTdGF0ZSA9IHN0YXRlLnNuYXBzaG9vdFtsYXVuY2hOYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1clN0YXRlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZXZTdGF0ZSkuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcy5fLmlzRXF1YWwocHJldlN0YXRlW3ZdLCBjdXJTdGF0ZVt2XSkpICYmIHYgIT0gXCJmb3JtYWwtcGFubGUtbW9kZWwwMlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uc3RhdGVQcm94eVt2XSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10ucHViU3ViLmVtaXQoY3VyU3RhdGVbdl0sIHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsOWtpueUn+WIl+ihqCBcclxuICAgIGNoYW5nZVN0dWRlbnRMaXN0KGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc3R1ZGVudExpc3QgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOabtOaWsCDnrZTmoYjmj5DkuqQg5YWI5ZCOXHJcbiAgICBjaGFuZ2VSYW5raW5nKHVzZXJpZDogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0YXRlOiBhbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzdGF0ZS5yYW5raW5nLmZpbmRJbmRleCgodjogYW55KSA9PiB2ID09IHVzZXJpZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnJhbmtpbmcucHVzaCh1c2VyaWQpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1aeWxglxyXG4gICAgdXBkYXRlVWkoc3RhdGU6IGFueSkge1xyXG4gICAgICAgIC8vIOaooeW8j+agjyDkurrlkZjmoI8g5pi+56S65LiO6ZqQ6JePXHJcbiAgICAgICAgdGhpcy5tb2RlbExpc3Quc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnN0dWRlbnRMaXN0LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tb2RlbExpc3QpXHJcbiAgICAgICAgICAgIC50byguMiwgeyB4OiBzdGF0ZS5zaG93ID8gLTkzMCA6IC05OTAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3R1ZGVudExpc3QpXHJcbiAgICAgICAgICAgIC50byguMiwgeyB5OiBzdGF0ZS5zaG93ID8gNTQwIDogNjQwIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyDmqKHlvI/moI8g5r+A5rS75qC35byPXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmcgPSB0aGlzLm1vZGVsc1tpXS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMubW9kZWxzW2ldLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKTtcclxuICAgICAgICAgICAgYmcuY29sb3IgPSBpID09IChzdGF0ZS5zaWduYWxpbmdNb2RlbCAtIDEpID8gY2MuY29sb3IoMTUsIDE4NywgMjMzLCAyNTUpIDogY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgdGV4dC5jb2xvciA9IGkgPT0gKHN0YXRlLnNpZ25hbGluZ01vZGVsIC0gMSkgPyBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpIDogY2MuY29sb3IoNTksIDU5LCA1OSwgMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS/oeS7pOaooeW8jyDotYvlgLwg5YWo5bGA5Y+Y6YePXHJcbiAgICAgICAgd2luZG93WydHbG9iYWxEYXRhJ10uY291cnNlRGF0YS5zaWduYWxpbmdNb2RlbCA9IHN0YXRlLnNpZ25hbGluZ01vZGVsO1xyXG4gICAgICAgIC8vIOebkeaOp+aooeW8jyDnm5HmjqfosIFcclxuICAgICAgICB3aW5kb3dbJ0dsb2JhbERhdGEnXS5jb3Vyc2VEYXRhLm1vbml0b3JlZCA9IHN0YXRlLm1vbml0b3JlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlckNyZWF0ZSh1c2VyczogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJzLmZpbHRlcigodjogYW55KSA9PiB2LnJvbGUgPT0gMik7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlckpvaW4odXNlcnM6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgbGV0IGFyciA9IHN0YXRlLnN0dWRlbnRMaXN0Lm1hcCgodjogYW55KSA9PiB2KTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzdGF0ZS5zdHVkZW50TGlzdC5maW5kSW5kZXgoKHY6IGFueSkgPT4gdi5pZCA9PSB1c2Vyc1swXS5pZClcclxuICAgICAgICBpZiAodXNlcnNbMF0ucm9sZSA9PSAyICYmIGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHVzZXJzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICB1c2VyTGVhdmUodXNlcnM6IGFueSkge1xyXG4gICAgICAgIGxldCBzdGF0ZTogYW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0dWRlbnRMaXN0LmZpbHRlcigodjogYW55KSA9PiB2LmlkICE9PSB1c2Vyc1swXS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbmFsQ2FsbGJhY2soZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NpZ25hbENhbGxiYWNrJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0OiBhbnk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gJ2NyZWF0ZScpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSB0aGlzLnVzZXJDcmVhdGUoZGF0YS51c2Vycyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gJ2xlYXZlJykge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMudXNlckxlYXZlKGRhdGEudXNlcnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09ICdqb2luJykge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMudXNlckpvaW4oZGF0YS51c2Vycyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3R1ZGVudExpc3QobGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbGlldmVTdGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
//------QC-SOURCE-SPLIT------
