const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    private _worldRoot: cc.Node; //FAIRY GUI
    private _view: fgui.GComponent; //FAIRY GUI

    config: any = null;

    loader: fgui.GLoader = null;
    quePage: fgui.GComponent = null;
    //喇叭
    labaPage: fgui.GComponent = null;
    background: fgui.GLoader = null;
    private _state = {}

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this._state = v;
        this.updateUi(this._state);
        this.mergeState();
    }

    /**blocker */
    _blocked = 0;
    get blocked() {
        return this._blocked;
    }
    set blocked(val) {
        this._blocked = val;
        console.log("blocked:", this._blocked);
        if (this._blocked > 0) {
            this.forbidHandle();
        }
        else {
            this.disableForbidHandle();
        }
    }
    blocker: cc.Node = null;
    // 运行时 禁止操作
    forbidHandle() {
        console.log("----forbidHandle");
        if (!cc.isValid(this.blocker)) {
            this.blocker = new cc.Node('handleMask');
            this.blocker.addComponent(cc.BlockInputEvents);
            this._worldRoot.addChild(this.blocker);
            this.blocker.width = 1920;
            this.blocker.height = 1080;
            this.blocker.x = 960;
            this.blocker.y = 540;
        }
    }

    // 消除禁止
    disableForbidHandle() {
        console.log("----disableForbidHandle");
        if (cc.isValid(this.blocker)) {
            this.blocker.destroy();
            this.blocker = null;
        }
    }
    /**end of blocker */
    onLoad() {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
    }
    onDestroy() {
        if (window["prevPageNode"]) {
            window["prevPageNode"].destroy();
            delete window["prevPageNode"];
        }
    }
    start() {
        let aniName = this.config.model.config.aniName;
        if (aniName) {
            this.quePage.getTransition(aniName).play();
        }
    }

    async init(data: any) {
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;

        this.config = data;
        // let { answer, ae } = model.config;
        this._view = fgui.UIPackage.createObject(Package, model.uiPath).asCom;

        //获得loader
        this.loader = this._view.getChild("loader").asLoader;
        let packageName = data.pathConfig.packageName;
        this.loader.url = `ui://${packageName}/${model.loaderUiPath}`;
        this.quePage = this.loader.component;

        //获得背景loader
        this.background = this._view.getChild("background").asLoader;
        if (model.backgroundName) {
            if (model.backgroundName === "prevPage") {
                // this.quePage.node.addChild(window["prevPageNode"]);
                // delete window["prevPageNode"];
            }
            this.background.url = `ui://${packageName}/${model.backgroundName}`;
        }

        //如果有labaImagePath，做一个喇叭
        if (model.labaImagePath) {
            try {
                this.labaPage = this._view.getChild("laba").asCom;
                this.labaPage.getChild("bubble").asLoader.url = `ui://${packageName}/${model.labaImagePath}`;
                this.labaPage.getChild("touchPad").asButton.on(fgui.Event.CLICK, () => {
                    if (this.blocked) {
                        return;
                    }
                    let state = this.cloneState();
                    state["movement"] = "laba";
                    this.updateState(state);
                });
            } catch (e) {
                console.log("创建喇叭失败：", e);
            }
        }
        else {
            this._view.getChild("laba").visible = false;
        }

        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
    }

    cloneState() {
        return globalThis._.cloneDeep(this._state);
    }

    // 获取状态
    getState(data: any) {
        this.updateState(data);
    }

    // 更新状态层
    updateState(curState: any) {
        if (globalThis._.isEqual(this._state, curState)) return;
        this.state = curState;
    }

    // 更新ui层
    updateUi(state: any) { }


    // 注册状态，及获取状态的方法
    registerState() {
        if (window['GlobalData'].sample.registerState) window['GlobalData'].sample.registerState.call(this);
    }

    // 解除状态，及获取状态的方法
    relieveState() {
        if (window['GlobalData'].sample.relieveState) window['GlobalData'].sample.relieveState.call(this);
    }

    // 本组件状态合并到全局
    mergeState() {
        if (window['GlobalData'].sample.mergeState) window['GlobalData'].sample.mergeState.call(this);
    }

    onEnable() {
        this.registerState();
    }

    onDisable() {
        this.relieveState();
    }
}
