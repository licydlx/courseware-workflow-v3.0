
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