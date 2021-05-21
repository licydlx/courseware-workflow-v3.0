
/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-01-04 10:34:55
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-25 21:43:15
 */
window['GlobalData'] = {
    courseData: {
        owner: '',
        name: '',
        userid: '',
        role: 0,
        timestamp: '',
        signalingModel: 1,
        monitored: null,
        monitoredName:null,
        stateShoot: null,
        firstLoad: true,
    },

    gameData: {
        resourceBundle: null,
        apiOrigin: "https://after-school-review-8cguaeaace9d.service.tcloudbase.com"
    },

    gameMsg: {
        // 上一页
        EVENT_PREVPAGE: 'EVENT_PREVPAGE',
        // 下一页 
        EVENT_NEXTPAGE: 'EVENT_NEXTPAGE',
        // 再练一次
        EVENT_REVIEWAGAIN: 'EVENT_REVIEWAGAIN',
        // 退出复习
        EVENT_REVIEWEXIT: 'EVENT_REVIEWEXIT',
        // 更新状态
        EVENT_UPDATE_STATE: 'EVENT_UPDATE_STATE',
    },

    monitorMessage: function (fn) {
        window.addEventListener("message", (e) => {
            if (e) {
                if (e.data && typeof e.data == "string") {
                    return fn(JSON.parse(e.data));
                } else {
                    return console.log("message有误！");
                }
            }
        })
    },

    sendMessage: function (handleData) {
        if (window !== window.parent) {
            window.parent.postMessage(JSON.stringify({
                method: "onFileMessage",
                handleData: handleData
            }), '*');
        }
    },

    // 状态代理
    stateProxy: new Proxy({}, {
        get: function (target, key) {
            if (!key) {
                return target;
            } else if (key == "state") {
                return target;
            } else {
                return target[key];
            }
        },
        set: function (target, key, value) {
            // state 流转 临时
            if (value === "") {
                target[key] = "";
            } else {
                if (target[key]) {
                    target[key] = value;
                    window['GlobalData'].pubSub.emit(target, 'SENDMESSAGE');
                } else {
                    target[key] = value;
                }
            }
            return true;
        },
        deleteProperty(target, key) {
            delete target[key];
            return true;
        }
    }),

    // 订阅模式
    pubSub: {
        // 回调列表
        list: {},
        // 订阅
        on(event, fn, context) {
            return this.list[event] = context ? fn.bind(context) : fn;
        },
        // 发布
        emit(data, name) {
            Object.keys(this.list).forEach((v) => {
                if (name) {
                    if (name == v) {
                        this.list[v].call(this, data)
                    }
                } else {
                    this.list[v].call(this, data)
                }
            });
        },
        // 取消订阅
        off(event) {
            let newList = {};
            for (const key in this.list) {
                if (!Object.is(event, key)) {
                    newList[key] = this.list[key];
                }
            }
            this.list = newList;
        },
    },

    // 功能函数
    sample: {
        // 注册 发送信令出口
        registerSendMessage: function (fn) {
            if (window['GlobalData'].pubSub) window['GlobalData'].pubSub.on('SENDMESSAGE', fn);
        },

        // 注册 获取state入口
        registerState: function () {
            let name = this.node.name;
            if (window['GlobalData'].pubSub) window['GlobalData'].pubSub.on(name, this.getState.bind(this));
            if (window['GlobalData'].stateProxy) window['GlobalData'].stateProxy[name] = this._state;
        },

        // 移除 获取state入口
        relieveState: function () {
            let name = this.node.name;
            if (window['GlobalData'].pubSub) window['GlobalData'].pubSub.off(name, this.getState.bind(this));
            if (window['GlobalData'].stateProxy) delete window['GlobalData'].stateProxy[name];
        },

        // 合并局部状态至全局状态
        mergeState: function () {
            let name = this.node.name;
            if (window['GlobalData'].stateProxy && window['GlobalData'].stateProxy.hasOwnProperty(name)) window['GlobalData'].stateProxy[name] = this._state;
        },

        // 分发内部message
        dispatchFn: function (event, data, node) {
            let message = new cc.Event.EventCustom(event, true);
            message.setUserData(data);
            let e = node ? node : this.node;
            e.dispatchEvent(message);
        },

        // 加载 依赖资源
        loadResource: (path, type) => {
            return new Promise((resolve, reject) => {
                if (this.GlobalData.gameData.resourceBundle) {
                    this.GlobalData.gameData.resourceBundle['load'](path, type, function (err, resource) {
                        err ? reject(err) : resolve(resource);
                    });
                } else {
                    console.log('加载依赖资源失败！');
                }

            })
        },

        // 加载 模型prefab
        loadPrefab: (bundle, path) => {
            return new Promise((resolve, reject) => {
                bundle['load'](path, cc.Prefab, function (err, prefab) {
                    err ? reject(err) : resolve(prefab);
                });
            })
        },

        // 获取远程 Bundle 包
        loadBundle: (path) => {
            return new Promise((resolve, reject) => {
                cc.assetManager.loadBundle(path, (err, bundle) => {
                    err ? reject(err) : resolve(bundle);
                });
            })
        },

        // 网络请求
        ajax: (type, url) => {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                        let response = xhr.responseText;
                        resolve(response);
                    }
                };
                xhr.open(type, url, true);
                xhr.send();
            })
        },

        // 增加 打开统计
        async addOpenCount(data) {
            let { courseName, courseVersion } = data;
            let bool = await this.GlobalData.sample.ajax("GET", `${this.GlobalData.gameData.apiOrigin}/addOpenCount?courseName=${courseName}&courseVersion=${courseVersion}`);
            if (bool) {
                console.log('統計打开-成功');
            } else {
                console.log('統計打开-失败');
            }
        },

        // 增加 完成统计
        async addFinishCount(data) {
            let { courseName, courseVersion } = data;
            let bool = await this.GlobalData.sample.ajax("GET", `${this.GlobalData.gameData.apiOrigin}/addFinishCount?courseName=${courseName}&courseVersion=${courseVersion}`);
            if (bool) {
                console.log('統計完成-成功');
            } else {
                console.log('統計完成-失败');
            }
        },

        // 下一页
        nextPage: () => {
            window.GlobalData.pubSub.emit({ action: window.GlobalData.gameMsg.EVENT_NEXTPAGE }, "controller-model01");
        },

        // 保持当前页
        keepPage() { }

    },

    // 纯函数
    utils: {
        distinct: (a, b) => {
            let arr = a.concat(b);
            let result = [];
            let obj = {};
            for (let i of arr) {
                if (!obj[i]) {
                    result.push(i);
                    obj[i] = 1;
                }
            }
            return result;
        },

        // 解析 url 参数
        parseURL: (str) => {
            let obj = {};
            let list = str.substring(str.indexOf('?') + 1).split('&');
            list.forEach(v => {
                let _arr = v.split('=');
                obj[_arr[0]] = _arr[1];
            });
            return obj;
        },

        // 一个点是否在一个区域内
        // fairgui 默认原点为左上点
        pointBelongArea(type, area, point) {
            switch (type) {
                case "rectangle": {
                    let x = point.x - area.x;
                    let y = point.y - area.y;
                    if (x >= 0 && area.width >= x && y >= 0 && area.height >= y) {
                        return true;
                    } else {
                        return false;
                    }
                }
                    break;
                default:
                    break;
            }
        }

    }
}