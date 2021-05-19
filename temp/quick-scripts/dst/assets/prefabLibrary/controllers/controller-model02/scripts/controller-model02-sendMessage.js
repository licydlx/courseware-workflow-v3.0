
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