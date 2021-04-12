/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 14:47:18
 */
const gameData = window['GlobalData'].gameData;
const { loadBundle, loadPrefab, ajax } = window['GlobalData'].sample;
const { parseURL } = window['GlobalData'].utils;
const { ccclass, property } = cc._decorator;

@ccclass
export default class t3_courseware extends cc.Component {

    @property({
        displayName: '本地测试'
    })
    test = false;

    @property({
        type: cc.JsonAsset,
        displayName: '配置 文件'
    })
    configJson: cc.JsonAsset = null;

    private _controllerJs: any;

    async onLoad() {
        let configJson: any;
        if (this.test) {
            // 本地测试
            configJson = this.configJson.json;
        } else {
            // 获取配置文件
            let { courseName } = parseURL(window.location.href);
            if (!courseName) {
                return;
            }
            let env: any = window.location.href.includes('test') ? 'test' : 'prod';
            let json: any = await ajax("GET", `${gameData.apiOrigin}/getConfigJson?courseName=${courseName ? courseName.toLowerCase() : ''}&env=${env}`);
            configJson = JSON.parse(json);
        }

        // 生成控制器
        let contrllerPath: any = `${configJson.pathConfig.remoteUrl}${configJson.pathConfig.controllerBundlePath}${configJson.pathConfig.controllerName}`;
        let contrllerBundle: any = await loadBundle(contrllerPath);
        let contrllerPrefab: any = await loadPrefab(contrllerBundle, contrllerBundle.name);
        let contrllerNode: any = cc.instantiate(contrllerPrefab);
        contrllerNode.parent = this.node.parent;
        this._controllerJs = contrllerNode.getComponent(cc.Component);
        await this._controllerJs.init(configJson);

        if (this.test) {
            this._controllerJs.onJumpConfig(1);
        }
    }

    choosePage(e: any, ced: any) {
        this._controllerJs.onJumpConfig(ced);
    }
}
