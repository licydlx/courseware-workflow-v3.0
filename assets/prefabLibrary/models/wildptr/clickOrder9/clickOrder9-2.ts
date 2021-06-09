const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    //todo: 功能整合在sound_mgr.ts
    @property(cc.AudioClip)
    public soundInfo: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundFill: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundErr: cc.AudioClip = null;
    protected _playingList: Map<number, cc.AudioClip> = new Map();

    private _state = {};


    private _worldRoot: cc.Node; //FAIRY GUI
    private _view: fgui.GComponent; //FAIRY GUI
    cleaner: fgui.GComponent = null;
    tiles: fgui.GComponent[] = [];
    dirtys: fgui.GComponent[] = [];
    loader: fgui.GLoader = null;
    quePage: fgui.GComponent = null;
    //喇叭
    labaPage: fgui.GComponent = null;
    feedback: cc.Node = null;

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;
        this.mergeState();
    }

    playSound(name) {
        let clip = this[name];
        let id = cc.audioEngine.play(clip, false, 1);
        this._playingList[id] = clip;
        // return new Promise<void>( (resolve, reject) =>{
        //     cc.audioEngine.setFinishCallback(id, ()=>{
        //         resolve();
        //     });
        // });
        return id;
    }
    stopSound(id) {
        cc.audioEngine.stop(id);
    }

    stopAllSound() {
        for (var key in this._playingList) {
            cc.audioEngine.stop(Number(key));
        }
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { answer, ae } = model.config;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        // 动效注册
        for (let v in ae) {
            if (ae[v]) {
                this[v] = {};
                if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                if (ae[v].pos) this[v].pos = ae[v].pos;
            }
        }

        if (answer) this._answer = answer;
        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
    }

    onLoad() {
        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        // this._c1 = this._view.getController("c1");
        // this._c2 = this._view.getController("c2");
        // // 臨時
        // // bug 初始设置不播放不生效
        // if (this._c2) {
        //     this._c2.selectedIndex = 1;
        //     this._c2.selectedIndex = 0;
        // }

        // this._submit = this._view.getChild("submit").asButton;
        // if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        // this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        // if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        // this._title = this._view.getChild("title").asButton;

        // let optionGroup = this._view.getChild("optionBox").asGroup;
        // for (let i = 0; i < this._view.numChildren; i++) {
        //     if (this._view.getChildAt(i).group == optionGroup) {
        //         let btn: fgui.GButton = this._view.getChildAt(i).asButton;
        //         btn.on(fgui.Event.CLICK, this._clickOption, this);
        //         this._options.push(btn);
        //     }
        // }

        // 初始化state
        this._state = {
            option: 0,
            title: false,
            submit: false,
            checkAnswer: false,
            answer: false
        }

        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback: any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
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

    private _clickOption(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        let option: any = fgui.GObject.cast(evt.currentTarget);
        let optionIndex: number = this._options.findIndex((v: any) => v == option);
        state.option = optionIndex + 1;
        this.updateState(state);
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
        if (!globalThis._.isEqual(oldState.option, state.option)) {
            this._c1.selectedIndex = state.option;
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                state.option ? this.afterSubmit() : this.onHandleGuide();
            }
        }

        if (!globalThis._.isEqual(oldState.checkAnswer, state.checkAnswer)) {
            if (state.checkAnswer) {
                this.answerFeedback(state.answer);
            }
        }

    }

    answerFeedback(bool: boolean) {
        if (!this.feedback) return;
        let state: any = globalThis._.cloneDeep(this._state);
        let feedback: any = cc.instantiate(this.feedback);
        feedback.x = 960;
        feedback.y = 540;
        let feedbackJs: any = feedback.getComponent(cc.Component);
        feedbackJs.init(bool);
        feedback.parent = cc.find("Canvas").parent;

        setTimeout(() => {
            feedback.destroy();
            state.submit = false;
            state.checkAnswer = false;
            this.updateState(state);
        }, 2000);
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


    /*工具*/

    equal(key) {
        return globalThis._.isEqual(this._prevState[key], this._state[key])
    }
    hasChange(key: string) {
        return !this.equal(key);
    }

    //与，查看新旧状态的变化，KEYS是字段。
    hasChangeAnd(...keys: string[]) {
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (this.equal(key)) {
                return false;
            }
        }
        return true;
    }
    //或，查看新旧状态的变化，KEYS是字段。
    hasChangeOr(...keys: string[]) {
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (!this.equal(key)) {
                return true;
            }
        }
        return false;
    }
    /*end of 修改*/
}
