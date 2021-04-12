/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-02-07 11:39:43
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 17:48:58
 */

export async function getMessage(data: any) {
    console.log('getMessage')
    let message = globalThis._.cloneDeep(data);
    console.log(message)
    
    switch (data.method) {
        case "onJumpPage": {
            this.onJumpConfig(data.toPage);
            break;
        }

        case 'onFileMessage': {
            if (data.isRestore) {
                return;
            }

            if (data.handleData.action == "EVENT_UPDATE_STATE") {
                if (!window['GlobalData'].stateProxy) return;
                let { name, userid, role, signalingModel, monitored } = window['GlobalData'].courseData;
                let user = data.handleData.user;
                let curState = data.handleData.handleData;
                let prevState = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);

                if (data.handleData.toUser) {
                    let toUser = data.handleData.toUser;
                    
                    // 兼容
                    // 安卓ipad 部分账户 无法获取userid 用name替代
                    if (toUser.id == userid || encodeURIComponent(toUser.nickname) == userid) {
                        Object.keys(prevState).forEach((v) => {
                            if (!(globalThis._.isEqual(prevState[v], curState[v]))) {
                                // state 流转 临时
                                window['GlobalData'].stateProxy[v] = "";
                                window['GlobalData'].pubSub.emit(curState[v], v);
                            }
                        });
                    }
                } else {
                    // 老师同步学生
                    if (role == 0) {
                        // 演示模式 相互通信
                        if (signalingModel == 1) {
                            Object.keys(prevState).forEach((v) => {
                                if (!(globalThis._.isEqual(prevState[v], curState[v]))) {
                                    // state 流转 临时
                                    window['GlobalData'].stateProxy[v] = "";
                                    window['GlobalData'].pubSub.emit(curState[v], v);
                                }
                            });
                        }

                        // 答题模式 
                        // 1.老师保存学生答案 2.老师保存并渲染学生答案
                        if (signalingModel == 2) {
                            if (user.role == 2) {
                                let panleState: any = globalThis._.cloneDeep(window['GlobalData'].stateProxy[this._panel.name]);
                                panleState.snapshoot[user.userid] = curState;
                                window['GlobalData'].stateProxy[this._panel.name] = "";
                                window['GlobalData'].pubSub.emit(panleState, this._panel.name);

                                if (monitored && (user.userid == monitored || user.name == monitored)) {
                                    Object.keys(prevState).forEach((v) => {
                                        if (!(globalThis._.isEqual(prevState[v], curState[v])) && v != this._panel.name) {
                                            // state 流转 临时
                                            window['GlobalData'].stateProxy[v] = "";
                                            window['GlobalData'].pubSub.emit(curState[v], v);
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
                            Object.keys(prevState).forEach((v) => {
                                if (!(globalThis._.isEqual(prevState[v], curState[v]))) {
                                    // state 流转 临时
                                    window['GlobalData'].stateProxy[v] = "";
                                    window['GlobalData'].pubSub.emit(curState[v], v);
                                }
                            });
                        }

                        if (signalingModel == 2) {
                            if (user.role == 0) {
                                if (user.signalingModel != signalingModel) {
                                    Object.keys(prevState).forEach((v) => {
                                        if (!(globalThis._.isEqual(prevState[v], curState[v]))) {
                                            // state 流转 临时
                                            window['GlobalData'].stateProxy[v] = "";
                                            window['GlobalData'].pubSub.emit(curState[v], v);
                                        }
                                    });
                                }
                            }
                        }

                        if (signalingModel == 3) {
                            if (user.role == 0) {
                                Object.keys(prevState).forEach((v) => {
                                    if (!(globalThis._.isEqual(prevState[v], curState[v]))) {
                                        // state 流转 临时
                                        window['GlobalData'].stateProxy[v] = "";
                                        window['GlobalData'].pubSub.emit(curState[v], v);
                                    }
                                });
                            }
                        }
                    }

                    // 巡课 助教 同屏 老师
                    if (role == 1 || role == 4) {
                        if (user.role == 0) {
                            Object.keys(prevState).forEach((v) => {
                                if (!(globalThis._.isEqual(prevState[v], curState[v]))) {
                                    // state 流转 临时
                                    window['GlobalData'].stateProxy[v] = "";
                                    window['GlobalData'].pubSub.emit(curState[v], v);
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
                return;
            }

            // 临时方案
            // 老师端 人员变动 禁止 发送信令
            // 老师退出重进：此处信息获取早于 页面状态初始化
            if (data.data.type == 'create') {
                window['GlobalData'].stateProxy[this._panel.name] = "";
            }

            if (data.data.type == 'join') {
                let user = data.data.users[0];
                if (user.role == 2) {
                    window['GlobalData'].stateProxy[this._panel.name] = "";
                }
            }

            if (data.data.type == 'leave') {
                let user = data.data.users[0];
                if (user.role == 2) {
                    window['GlobalData'].stateProxy[this._panel.name] = "";
                }
            }

            // 临时方案
            // 定时同步 ：ipad 课件加载慢; 已获取进入房间的信息，但学生课件并未加载完成
            if (data.data.type == 'join') {
                let user = data.data.users[0];
                this.countDown(user);
            }

            let panelJs: any = this._panel.getComponent(cc.Component);
            panelJs.signalCallback(data.data);
        }
    }

}