
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