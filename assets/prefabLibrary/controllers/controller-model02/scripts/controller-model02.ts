/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2020-12-22 11:02:45
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 18:51:04
 */
const { ccclass, property } = cc._decorator;

const { monitorMessage } = window['GlobalData'];
const { loadPrefab, loadBundle } = window['GlobalData'].sample;

import { sendMessage } from "./controller-model02-sendMessage";
import { getMessage } from "./controller-model02-getMessage";

@ccclass
export default class controller_model02 extends cc.Component {
    private _configJson: any;         // 配置json
    private _panel: any;              // 面板
    private _resourceBundle: any;     // fairygui 素材资源
    private _pagePrefabs = []         // 题型预制体集合
    private _currentPageNode: any;    // 当前题型节点

    public _toPage = null;

    onLoad() { }

    async init(data: any) {
        // 素材资源
        if (!data.pathConfig.resourceName) {
            console.error("素材资源未配置！");
            return;
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

        // 生成面板
        let panelPath: any = `${data.pathConfig.remoteUrl}${data.pathConfig.panelBundlePath}${data.pathConfig.panelName}`;
        let panelBundle: any = await loadBundle(panelPath);
        let panelPrefab: any = await loadPrefab(panelBundle, panelBundle.name);
        let panelNode: any = cc.instantiate(panelPrefab);
        panelNode.parent = cc.find("Canvas").parent;
        panelNode.x = 960;
        panelNode.y = 540;
        this._panel = panelNode;

        // 临时
        // 面板 显示
        // 如果是学生 面板隐藏
        if (window['GlobalData'].courseData.role == 2) {
            if (this._panel) this._panel.opacity = 0;
        }

        // 注册 发送信令的出口 逻辑
        if (window['GlobalData'].sample.registerSendMessage) {
            window['GlobalData'].sample.registerSendMessage(sendMessage.bind(this));
        }

        // 加载 所有题型预制件
        for (let i = 0; i < data.chapters.length; i++) {
            let modelPath: any = `${data.pathConfig.remoteUrl}${data.pathConfig.modelBundlePath}${data.chapters[i].modelBundle}`;
            let modelBundle: any = await loadBundle(modelPath);
            let modelPrefab: any = await loadPrefab(modelBundle, data.chapters[i].prefabName);
            this._pagePrefabs[i] = modelPrefab;
        }

        // 加载ui 资源包
        let resourcePath: any = `${data.pathConfig.remoteUrl}${data.pathConfig.resourceBundlePath}${data.pathConfig.resourceName}`;
        this._resourceBundle = await loadBundle(resourcePath);
        await this.loadResourcePackage(this._resourceBundle, data.pathConfig.packageName);

        // 拓课云 初始化
        this.platformConfig(this._configJson.totalPages);
    }

    async loadResourcePackage(bundle: any, packageName: any) {
        return new Promise((resolve, reject) => {
            fgui.UIPackage.loadPackage(bundle, packageName, () => {
                console.log("loadResourcePackage")
                resolve(true);
            });
        })
    }

    // 页面跳转 配置
    async onJumpConfig(toPage: any) {
        let page: number = toPage - 1;
        let chapter: any = this._configJson.chapters[page];

        fgui.GRoot.inst.removeChildren(0, -1, true);
        if (this._currentPageNode) this._currentPageNode.destroy();

        let prefab: any = this._pagePrefabs[page];
        let node: any = cc.instantiate(prefab);
        let nodeJs = node.getComponent(cc.Component);
        nodeJs.init({ Package: this._configJson.pathConfig.packageName, GComponent: chapter.uiPath });
        node.parent = this.node;

        this._currentPageNode = node;
        this.resetPanel();
        // 当前页面 state 快照
        window['GlobalData'].courseData.stateShoot = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
        this.recoverState();
    }

    // 身份识别
    identification() {
        let parseURL = window['GlobalData'].utils.parseURL;
        let urlObj = parseURL(window.location.href);
        for (const key in urlObj) {
            if (window['GlobalData'].courseData.hasOwnProperty(key)) {
                window['GlobalData'].courseData[key] = urlObj[key];
            }
        }
        // 临时
        // 安卓ipad 部分账户 无法获取userid 用name替代
        if (!urlObj["userid"]) {
            window['GlobalData'].courseData["userid"] = urlObj["name"];
        }
    }

    // 依赖平台 配置设置
    platformConfig(totalPages: number) {
        // 端对端通信 监听
        monitorMessage(getMessage.bind(this));
        // 设置总页面
        window.parent.postMessage(
            JSON.stringify({ method: 'onPagenum', totalPages: totalPages }),
            '*'
        );
        // 设置屏幕分辨率
        window.parent.postMessage(
            JSON.stringify({
                method: 'onLoadComplete',
                coursewareRatio: 16 / 9,
            }),
            '*'
        );
    }

    // 重置面板
    resetPanel() {
        if (this._panel) {
            let panelJs: any = this._panel.getComponent(cc.Component);
            // 更新面板 ui 但不传信令
            window['GlobalData'].stateProxy[this._panel.name] = "";
            panelJs.reset();
        }
    }

    // 老师恢复退出时状态
    recoverState() {
        if (window['GlobalData'].courseData.firstLoad) {
            let db: any = cc.sys.localStorage.getItem('COURSE_SIGNALING_DB');
            if (!db) return;
            let signalingDB = JSON.parse(db);
            // 老师 数据缓存
            if (signalingDB && window['GlobalData'].courseData.role == 0) {
                let curStamp = parseInt(this.getTimestamp());
                let preStamp = parseInt(signalingDB.timestamp);

                if ((curStamp - preStamp) / 60 < 35) {
                    window['GlobalData'].courseData.timestamp = signalingDB.timestamp;
                    let prevState = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);

                    Object.keys(prevState).forEach((v) => {
                        if (!(globalThis._.isEqual(prevState[v], signalingDB.state[v]))) {
                            // state 流转 临时
                            window['GlobalData'].stateProxy[v] = "";
                            window['GlobalData'].pubSub.emit(signalingDB.state[v], v);
                        }
                    });
                }
            }
            window['GlobalData'].courseData.firstLoad = false;
        }
    }

    // 获取当前时间戳 前十位 秒
    getTimestamp() {
        return (+new Date()).toString().substr(0, 10);
    }

    // 同步 倒计时
    countDown(user: any) {
        let count = 6;
        // 以秒为单位的时间间隔
        let interval = 1;
        // 重复次数
        let repeat = 5;
        // 开始延时
        let delay = 0;
        this.schedule(() => {
            count--;
            if (count == 1) {
                this.sendInfo(user);
            }
        }, interval, repeat, delay);
    }

    sendInfo(user: any) {
        let state = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
        sendMessage(state, user);
    }

}
