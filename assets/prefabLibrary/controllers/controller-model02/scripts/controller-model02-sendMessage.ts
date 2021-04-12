/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-02-07 11:39:43
 * @LastEditors: ydlx
 * @LastEditTime: 2021-03-16 19:08:46
 */

export function sendMessage(data: any, toUser: any) {
    console.log('sendMessage')
    let message = globalThis._.cloneDeep(data);
    console.log(message)

    let { name, userid, role, signalingModel } = window['GlobalData'].courseData;
    let action = window['GlobalData'].gameMsg.EVENT_UPDATE_STATE;

    window['GlobalData'].sendMessage({
        action: action,
        toUser: toUser ? toUser : "",
        user: { userid, role, name, signalingModel },
        handleData: data
    });

    // 老师存储信令
    if (window['GlobalData'].courseData.role == 0) {
        cc.sys.localStorage.setItem('COURSE_SIGNALING_DB', JSON.stringify({
            timestamp: window['GlobalData'].courseData.timestamp,
            state: data
        }));
    };

}