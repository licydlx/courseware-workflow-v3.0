const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass } = cc._decorator;

@ccclass
export default class threeViews_example_model01 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _c_block: fgui.Controller;
    private _c2: fgui.Controller;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;
    private _nextBtn: fairygui.GObject;
    private _controllerJs: any;

    private _blockLeft: fgui.GButton;
    private _blockRight: fgui.GButton;
    private _blockRightTop: fgui.GButton;
    private _resetBtn: fgui.GButton;


    private _state = {};

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;
        this.mergeState();
    }

    onLoad() {
        this._controllerJs = this.node.parent.getComponent(cc.Component);
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        this._c_block = this._view.getController("c_block");
        this._c2 = this._view.getController("c2");
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }
        if (this._c_block) {
            this._c_block.selectedIndex = 0;
        }

        this._blockLeft = this._view.getChild("blockLeft").asButton;
        if (this._blockLeft) this._blockLeft.on(fgui.Event.CLICK, this._onBlockLeft, this);

        this._blockRight = this._view.getChild("blockRight").asButton;
        if (this._blockRight) this._blockRight.on(fgui.Event.CLICK, this._onBlockRight, this);

        this._blockRightTop = this._view.getChild("blockRightTop").asButton;
        if (this._blockRightTop) this._blockRightTop.on(fgui.Event.CLICK, this._onBlockRight, this);

        this._resetBtn = this._view.getChild("resetBtn").asButton;
        if (this._resetBtn) this._resetBtn.on(fgui.Event.CLICK, this._onReset, this);

        this._nextBtn = this._view.getChild("nextBtn");
        if (this._nextBtn) this._nextBtn.asButton.on(fgui.Event.CLICK, this._nextPage, this);

        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        // 初始化state
        this._state = {
            controllerIndex: 0,
            title: false,
        }

        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback: any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;


        if (model.uiPath) {
            let GComponent = model.uiPath;
            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        }

        //加载公共组件
        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
    }

    private _onBlockLeft() {
        this._blockLeft.visible = false;
        this._changeIndex();
    }

    private _onBlockRight() {
        this._blockRight.visible = false;
        this._changeIndex();
    }

    private _changeIndex() {
        let index = 0;
        if (this._blockLeft.visible && this._blockRight.visible) {
            index = 0;
        } else if (!this._blockLeft.visible && this._blockRight.visible) {
            index = 1;
        } else if (this._blockLeft.visible && !this._blockRight.visible) {
            index = 3;
        } else {
            index = 2;
        }
        let state: any = globalThis._.cloneDeep(this._state);
        state.controllerIndex = index;
        this.updateState(state);
    }

    private _onReset() {
        this._blockLeft.visible = true;
        this._blockRight.visible = true;
        let state: any = globalThis._.cloneDeep(this._state);
        state.controllerIndex = 0;
        this.updateState(state);
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private _nextPage() {
        this._controllerJs.onJumpConfig(++this._controllerJs._toPage);
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
    updateUi(oldState: any, state: any) {
        if (!globalThis._.isEqual(oldState.controllerIndex, state.controllerIndex)) {
            this._c_block.selectedIndex = state.controllerIndex;
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    }

    async playTitle(bool: boolean) {
        this._c2.selectedIndex = bool ? 1 : 0;
        if (bool) {
            cc.audioEngine.stopAll();
            this.forbidHandle();
            let item = fgui.UIPackage.getItemByURL(this._title["_sound"]);
            let audio: cc.AudioClip = await loadResource(item.file, cc.AudioClip);
            let audioId = cc.audioEngine.play(audio, false, 1);
            cc.audioEngine.setFinishCallback(audioId, () => {
                let state: any = globalThis._.cloneDeep(this._state);
                state.title = false;
                this.updateState(state);
            });
        } else {
            this.disableForbidHandle();
        }
    }

    // 运行时 禁止操作
    forbidHandle() {
        let handleMask = this._worldRoot.getChildByName('handleMask');
        if (!handleMask) {
            let handleMask = new cc.Node('handleMask');
            handleMask.addComponent(cc.BlockInputEvents);
            handleMask.parent = this._worldRoot;
            handleMask.width = 1920;
            handleMask.height = 1080;
            handleMask.x = 960;
            handleMask.y = 540;
        }
    }

    // 消除禁止
    disableForbidHandle() {
        let handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask) handleMask.destroy();
    }

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
        cc.audioEngine.stopAll();
    }
}
