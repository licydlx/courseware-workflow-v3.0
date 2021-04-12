
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