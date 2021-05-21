/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2020-12-22 11:02:45
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-13 21:26:06
 */
const { ccclass, property } = cc._decorator;

const { gameData, monitorMessage } = window['GlobalData'];
const { loadPrefab, loadBundle, loadResource } = window['GlobalData'].sample;


@ccclass
export default class controller_model01 extends cc.Component {
    private _configJson: any;         // 配置json
    private _resourceBundle: any;     // fairygui 远程bundle
    private _pagePrefabs = []         // 题型预制体集合
    private _currentPageNode: any;    // 当前题型节点

    private _cPage = null;             // 当前页码
    private _panelNode = null;         // 面板
    onLoad() { }

    async init(data: any) {
        // 素材资源
        if (!data.pathConfig.resourceName) {
            console.error("素材资源未配置！");
            return;
        }

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
        this._panelNode = cc.instantiate(panelPrefab);
        this._panelNode.parent = cc.find("Canvas").parent;
        this._panelNode.x = cc.find("Canvas").x;
        this._panelNode.y = cc.find("Canvas").y;

        // 加载 所有题型预制件
        for (let i = 0; i < data.chapters.length; i++) {
            let modelPath: any = `${data.pathConfig.remoteUrl}${data.pathConfig.modelBundlePath}${data.chapters[i].model.bundleName}`;
            let modelBundle: any = await loadBundle(modelPath);
            let modelPrefab: any = await loadPrefab(modelBundle, data.chapters[i].model.prefabName);
            this._pagePrefabs[i] = modelPrefab;
        }

        // 加载ui 资源包
        let resourcePath: any = `${data.pathConfig.remoteUrl}${data.pathConfig.resourceBundlePath}${data.pathConfig.resourceName}`;
        this._resourceBundle = await loadBundle(resourcePath);
        gameData.resourceBundle = await this.loadResourcePackage(this._resourceBundle, data.pathConfig.packageName);
        await this.onJumpConfig(1);
    }

    // 加载 fairygui 资源包
    async loadResourcePackage(bundle: any, packageName: any) {
        return new Promise((resolve, reject) => {
            fgui.UIPackage.loadPackage(bundle, packageName, (error, UIPackage: any) => {
                resolve(UIPackage._bundle);
            });
        })
    }

    // 页面跳转 配置
    async onJumpConfig(toPage: any) {
        let page: number = toPage - 1;
        let chapter: any = this._configJson.chapters[page];

        // 第一页 隐藏左箭头 最后一页 隐藏右箭头
        let panelJs: any = this._panelNode.getComponent(cc.Component);
        panelJs.init(page === 0 ? "start" : this._configJson.chapters.length - 1 === page ? "end" : "normal");
        if (!chapter) return;

        fgui.GRoot.inst.removeChildren(0, -1, true);
        if (this._currentPageNode) this._currentPageNode.destroy();

        let prefab: any = this._pagePrefabs[page];
        let node: any = cc.instantiate(prefab);
        let nodeJs = node.getComponent(cc.Component);
        nodeJs.init({ pathConfig: this._configJson.pathConfig, model: chapter.model, components: chapter.components });
        node.parent = this.node;

        this._currentPageNode = node;

        this._cPage = toPage;
        // 当前页面 state 快照
        window['GlobalData'].courseData.stateShoot = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
    }
}
