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
    public stateIndex: number = 0;

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

        // ?????????state
        this._state = {
            controllerIndex: 0,
            title: false,
            modelSelectIndex: 0,
        }

        // ?????????????????? ??????
        this.disableForbidHandle();
        // ????????????
        let feedback: any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();

        let { role } = window['GlobalData'].courseData;
        // 0 ?????????, 2?????????
        this._nextBtn.visible = role == 0;
    }

    private _pathConfig: any;
    private _childModel: any;
    private _childModelJson: any;
    async init(data: any) {
        // ?????? model component json ????????????
        let { pathConfig, model, components, childModel } = data;
        let Package = pathConfig.packageName;
        this._pathConfig = pathConfig;

        if (model.uiPath) {
            let GComponent = model.uiPath;
            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        }

        //??????????????????
        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }

        if (model.childModel) {
            this._childModelJson = model.childModel
            let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${this._childModelJson.model.bundleName}`;
            let componentBundle: any = await loadBundle(componentPath);
            let componentPrefab: any = await loadPrefab(componentBundle, this._childModelJson.model.prefabName);
            this._childModel = componentPrefab;
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
        let state: any = globalThis._.cloneDeep(this._state);
        state.modelSelectIndex = 1;
        this.updateState(state);
        
        // let childModel: any = cc.instantiate(this._childModel);
        // let childModelJs: any = childModel.getComponent(cc.Component);
        // console.log('childModelJs', childModelJs)
        // console.log('childModelJs.state', childModelJs._state)
        // childModelJs.getState(state);
    }

    // ????????????
    getState(data: any) {
        this.updateState(data);
    }

    // ???????????????
    updateState(curState: any) {
        if (globalThis._.isEqual(this._state, curState)) return;
        this.state = curState;
    }

    // ??????ui???
    updateUi(oldState: any, state: any) {
        if (!globalThis._.isEqual(oldState.controllerIndex, state.controllerIndex)) {
            this._c_block.selectedIndex = state.controllerIndex;
            this.playSound("ui://tfsfm7mbt1pw8");
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }

        if (!globalThis._.isEqual(oldState.modelSelectIndex, state.modelSelectIndex)) {
            this._onNext();
        }
    }

    private _onNext() {
        let childModel: any = cc.instantiate(this._childModel);
        childModel.x = 0;
        childModel.y = 0;
        let childModelJs: any = childModel.getComponent(cc.Component);
        childModelJs.init({ pathConfig: this._pathConfig, model: this._childModelJson.model, components: this._childModelJson.components });
        childModel.parent = cc.find("Canvas").parent;
    }

    playSound(url: string) {
        let item = fgui.UIPackage.getItemByURL(url); 3
        loadResource(item.file, cc.AudioClip).then((audio: cc.AudioClip) => {
            cc.audioEngine.play(audio, false, 1);
        });
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

    // ????????? ????????????
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

    // ????????????
    disableForbidHandle() {
        let handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask) handleMask.destroy();
    }

    // ???????????????????????????????????????
    registerState() {
        if (window['GlobalData'].sample.registerState) window['GlobalData'].sample.registerState.call(this);
    }

    // ???????????????????????????????????????
    relieveState() {
        if (window['GlobalData'].sample.relieveState) window['GlobalData'].sample.relieveState.call(this);
    }

    // ??????????????????????????????
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
