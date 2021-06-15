
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;

const { ccclass, property } = cc._decorator;

//判断当前是否 角色==老师并且!=DemoMode。
let IsTeacherNotInDemo = function () {
    let { role, signalingModel } = window['GlobalData'].courseData;
    //如果是答案或者投放，老师不能操作。
    if (role == 0 && signalingModel !== 1) {
        return true;
    }
    return false;
};


@ccclass
export default class ClassifyInput extends cc.Component {
    private _worldRoot: cc.Node; //FAIRY GUI
    private _view: fgui.GComponent; //FAIRY GUI

    config: any = null;


    //场景装载器
    loader: fgui.GLoader = null;
    //具体的逻辑组件
    quePage: fgui.GComponent = null;
    //喇叭
    labaPage: fgui.GComponent = null;
    background: fgui.GLoader = null;
    item1: fgui.GObject = null;
    item2: fgui.GObject = null;
    texField1: fgui.GTextField = null;
    texField2: fgui.GTextField = null;

    prefabMap = new Map<String, cc.Prefab>();
    keypad: cc.Node = null;
    feedback: cc.Node = null;
    feedbackCount = 0;

    audioList: cc.AudioClip[] = [];

    //before onLoad 初始化
    async init(data: any) {
        this.config = data;
        //配置初始化
        let { pathConfig, model, components } = data;
        let packageName = pathConfig.packageName;

        // let { answer, ae } = model.config;
        this._view = fgui.UIPackage.createObject(packageName, model.uiPath).asCom;

        //获得loader
        this.loader = this._view.getChild("loader").asLoader;
        this.loader.url = `ui://${packageName}/${model.loaderUiPath}`;
        this.quePage = this.loader.component;

        //获得背景loader
        this.background = this._view.getChild("background").asLoader;
        this.background.url = `ui://${packageName}/${model.backgroundName}`;

        //如果有ImagePath，做一个喇叭
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

                //音频, this.soundClick = （fgui里的click音频文件名）
                this.soundInfo = this.loadSoundFromFGui(model.labaSoundClip);

            } catch (e) {
                console.log("创建喇叭失败：", e);
            }
        }

        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);

                this.prefabMap.set(key, componentPrefab)
            }
        }
    }

    onLoad() {
        this.initState();
        this.initUI();
    }
    onDestroy() {
        if (this.blocked) {
            this.blocked = 0;
        }

        if( cc.isValid(this.keypad) ){ 
            this.keypad.destroy();
            this.keypad = null;
        }
    }
    initUI() {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);
        let packageName = this.config.pathConfig.packageName;
        let modelConfig = this.config.model.config;

        if (modelConfig.itemImgList) {
            this.quePage.getChild("item1").asLoader.url = `ui://${packageName}/${modelConfig.itemImgList[0]}`;
            this.quePage.getChild("item2").asLoader.url = `ui://${packageName}/${modelConfig.itemImgList[1]}`;
        }

        this.texField1 = this.quePage.getChild("text1").asTextField;
        this.texField2 = this.quePage.getChild("text2").asTextField;

        this.quePage.getChild("btnAudio1").asImage.on(fgui.Event.CLICK, () => {
            this.onClickAudio(0);
        });
        this.quePage.getChild("btnAudio2").asImage.on(fgui.Event.CLICK, () => {
            this.onClickAudio(1);
        });

        this.quePage.getChild("btnNum1").asImage.on(fgui.Event.CLICK, () => {
            this.onClickEdit(0);
        });
        this.quePage.getChild("btnNum2").asImage.on(fgui.Event.CLICK, () => {
            this.onClickEdit(1);
        });

        //音频, this.soundClick = （fgui里的click音频文件名）
        this.soundClick = this.loadSoundFromFGui("click");

        if (modelConfig.soundTipNames) {
            for (let i = 0; i < modelConfig.soundTipNames.length; i++) {
                let sn = modelConfig.soundTipNames[i];
                this.audioList.push(this.loadSoundFromFGui(sn));
            }
        }
    }

    initState() {
        if (this._stateInited) {
            return;
        }
        Object.assign(this._state, {
            movement: "idle",
            editInd: -1,
            audioInd: -1,
            keypad: 0,
            value: this.config.model.config.srcValue.slice(),
        });

        this._stateInited = true;
        this._originState = {};
        Object.assign(this._originState, this._state);
    }
    start() {
        this.quePage.getChild("submit").asButton.on(fgui.Event.CLICK, this.onClickSubmit, this);
    }

    refresh(oldState: any, state: any) {
        if (this.hasChange("keypad")) {
            this.refreshKeypad(state["keypad"]);
        }

        if (this.hasChange("audioInd")) {
            if (state["audioInd"] !== -1) {
                this.actAudio(state["audioInd"]);
            }
        }


        if (this.hasChange("editInd")) {
        }

        if (this.hasChange("value")) {
            let value = state["value"];
            this.texField1.text = (value[0] === -1 ? "" : value[0].toFixed(0));
            this.texField2.text = (value[1] === -1 ? "" : value[1].toFixed(0));
        }

        if (this.hasChange("movement")) {
            switch (state["movement"]) {
                case "submit":
                    let bingo = globalThis._.isEqual(state["value"], this.config.model.config.dstValue);
                    this.answerFeedback(bingo)?.then(() => {
                    });
                    setTimeout(() => {
                        this.playSound("soundClick");
                    }, 20);
                    this.resetState("movement");
                    break;
                case "idle":
                    break;
                case "laba":
                    this.actLaba();
                    break;
            }
        }
    }
    actLaba(noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let playingId = this.playSound("soundInfo");
            let aniFadeOut = this.labaPage.getTransition("fadeOut");
            let aniFadeIn = this.labaPage.getTransition("click");
            //动画后
            let step = () => {
                this.blocked--;
                this.stopSound(playingId);
                aniFadeIn.stop();
                aniFadeOut.stop();

                this.resetState("movement");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                aniFadeIn.play();
                cc.tween(this.node)
                    .delay(this.config.model.labaTime)
                    .call(() => {
                        aniFadeOut.play();
                    })
                    .delay(0.25)
                    .call(step)
                    .start();
            }
        });
    }
    actAudio(audioInd: number, noAni = false) {
        let soundId = -1;

        this.blocked++;
        let onFinish = () => {
            this.blocked--;
            this.stopSound(soundId);
            this.resetState("audioInd");
        };

        soundId = this.playClip(this.audioList[audioInd]);
        let step = this.createStep(
            cc.tween(this.quePage)
                .delay(99.0),
            onFinish,
            "audio"
        );
        cc.audioEngine.setFinishCallback(soundId, step.finish.bind(step));
    }

    onClickSubmit() {
        if (IsTeacherNotInDemo()) {
            return;
        }
        let state = this.cloneState();
        if (state["zoneId"] === 0) {
            // 是否需要提示。
            // return;
        }

        state["movement"] = "submit";
        this.updateState(state);
    }


    onClickAudio(ind) {
        this.playSound("soundClick");
        let state = this.cloneState();
        state["audioInd"] = ind;
        this.updateState(state);
    }
    onClickEdit(ind) {
        this.playSound("soundClick");
        let state = this.cloneState();
        state["editInd"] = ind;
        state["keypad"] = 1;
        this.updateState(state);
    }
    onKeypadNum(val) {
        this.playSound("soundClick");
        if (typeof val === "string") {
            val = Number(val);
            if (!val) {
                val = 0;
            }
        }

        let state = this.cloneState();
        let value = state["value"];
        let editInd = state["editInd"];

        if (editInd === -1) {
            return;
        }

        value[editInd] = val;

        this.updateState(state);
    }
    onKeypadReset() {
        this.playSound("soundClick");
        let state = this.cloneState();
        let value = state["value"];
        let editInd = state["editInd"];

        if (editInd === -1) {
            return;
        }

        value[editInd] = -1;

        this.updateState(state);
    }
    onKeypadSubmit() {
        this.playSound("soundClick");
        this.destroyKeyPad();
    }
    onKeypadDestroy() {
        this.playSound("soundClick");
        this.keypad = null;
        let state = this.cloneState();
        state["keypad"] = 0;
        this.updateState(state);
    }
    refreshKeypad(keypadState) {
        if (keypadState === 1) {
            this.createKeyPad();
        }
        else {
            this.destroyKeyPad();
        }
    }
    createKeyPad() {
        if (cc.isValid(this.keypad)) {
            return;
        }
        if( !cc.isValid(this.prefabMap.get("keypad") ) ) {
            console.log("插件components还没载入，或载入失败。");
            return;
        }

        let keypad = cc.instantiate(this.prefabMap.get("keypad"));
        let keypadScript = keypad.getComponent(cc.Component);
        keypadScript["setY"](this.config.components.keypad.config.y);
        cc.find("Canvas").parent.addChild(keypad);

        this.keypad = keypad;
        this.keypad.on("num", this.onKeypadNum, this);
        this.keypad.on("reset", this.onKeypadReset, this);
        this.keypad.on("submit", this.onKeypadSubmit, this);
        this.keypad.on("destroy", this.onKeypadDestroy, this);

    }
    destroyKeyPad() {
        if (!cc.isValid(this.keypad)) {
            return;
        }
        this.keypad.destroy();
    }


    answerFeedback(bool: boolean) {
        if (this.feedbackCount > 0) {
            return;
        }

        return new Promise((resolve, reject) => {
            if (!this.feedback) {
                resolve(null);
            }
            this.feedbackCount = 1;
            let state: any = globalThis._.cloneDeep(this._state);
            let feedback: any = cc.instantiate(this.prefabMap.get("feedback"));
            feedback.x = 960;
            feedback.y = 540;
            let feedbackJs: any = feedback.getComponent(cc.Component);
            feedbackJs.init(bool);
            feedback.parent = cc.find("Canvas").parent;

            setTimeout(() => {
                this.feedbackCount = 0;
                feedback.destroy();
                resolve(null);
            }, 2000);
        });
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

    protected _stateInited = false;

    protected _stepQueue: StateStep[] = [];
    protected _maxStep = 1; //一般只允许队列中存在一个STEP

    protected _originState: any = {};
    protected _prevState: any = {};
    protected _state: any = {};

    get state(): any {
        return this._state;
    }

    resetState(...keys: string[]) {
        let state = this.cloneState();
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            state[key] = this._originState[key];
        }
        this.updateState(state);
    }
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

    // 获取状态
    getState(remoteState: any) {
        console.log("getRemoteState", remoteState);
        if (!this._stateInited) {
            this._stateInited = true;
        }
        this.updateState(remoteState);
    }

    // 更新状态层(发送状态)
    updateState(state: any) {
        if (globalThis._.isEqual(this._state, state)) {
            return;
        }
        if (this._state) {
            this._prevState = this.cloneState();
        }
        this._state = state;
        this.mergeState();
        this.refresh(this._prevState, this._state);
    }

    cloneState() {
        return globalThis._.cloneDeep(this._state);
    }

    onEnable() {
        this.registerState();
    }

    onDisable() {
        this.abortAllStep();
        this.relieveState();
        cc.audioEngine.stopAll();
    }

    // 注册状态，及获取状态的方法
    registerState() {
        if (window['GlobalData'].sample.registerState) {
            window['GlobalData'].sample.registerState.call(this);
        }
        console.log("registerState", this.node.name, this.node.uuid, this.state);
    }

    // 解除状态，及获取状态的方法
    relieveState() {
        if (window['GlobalData'].sample.relieveState) {
            window['GlobalData'].sample.relieveState.call(this);
        }
        console.log("relieveState", this.node.name, this.node.uuid, this.state);
    }

    // 本组件状态合并到全局
    mergeState() {
        if (window['GlobalData'].sample.mergeState) {
            window['GlobalData'].sample.mergeState.call(this);
        }
    }

    //创建步骤
    createStep(ani, onFinish, name = "") {
        console.log("createStep", name);
        if (this._stepQueue.length >= this._maxStep) {
            this.finishStep(); //立即完成上一个步骤。
        }

        let step = new StateStep(ani, onFinish, name);
        step.on("finish", this.finishStep, this);
        this._stepQueue.push(step);
        return step;
    }
    abortAllStep() {
        if (this._stepQueue.length == 0) {
            return;
        }

        while (this._stepQueue.length > 0) {
            // 0 <- [1,2,3,4]
            let step = this._stepQueue.shift();
            step.abort();
        }
    }
    //立即完成步骤
    finishStep(step: StateStep = null) {
        if (this._stepQueue.length == 0) {
            return;
        }
        if (step) {
            for (let i = 0; i < this._stepQueue.length; i++) {
                if (this._stepQueue[i] == step) {
                    let step = this._stepQueue.splice(i, 1)[0];
                    step.stop(true);
                    console.log("finishStep", step.name, step);
                    break;
                }
            }
        }
        else {
            while (this._stepQueue.length >= this._maxStep) {
                // 0 <- [1,2,3,4]
                step = this._stepQueue.shift();
                step.stop(true);
                console.log("finishStep", step.name, step);
            }
        }

    }


    //todo: 功能整合在sound_mgr.ts
    @property(cc.AudioClip)
    public soundInfo: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundClick: cc.AudioClip = null;

    protected _playingList: Map<number, cc.AudioClip> = new Map();

    playSound(name) {
        let clip = this[name];
        return this.playClip(clip);
    }
    playClip(clip) {
        let id = cc.audioEngine.play(clip, false, 1);
        this._playingList[id] = clip;
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

    loadSoundFromFGui(name): cc.AudioClip | null {
        let packageName = this.config.pathConfig.packageName;
        //音频
        let item: fgui.PackageItem = fgui.UIPackage.getItemByURL(`ui://${packageName}/${name}`);
        if (!item) {
            return null;
        }

        return item.load() as cc.AudioClip;
    }
};




class SubjectListener {
    public eventName = "";
    public cb: Function | null = null;
    public node: any | null = null;
};
class StateStep {
    protected _obs: SubjectListener[] = [];

    on(eventName: string, cb: Function, node: any) {
        let sl = new SubjectListener();
        sl.eventName = eventName;
        sl.cb = cb;
        sl.node = node;
        this._obs.push(sl);
    }
    off(node: any, eventName?: string, cb?: Function): SubjectListener | undefined {
        for (var i = 0; i < this._obs.length;) {
            let ls = this._obs[i];
            if (ls.node !== node) {
                i++
                continue;
            }

            if (eventName && eventName !== ls.eventName) {
                i++
                continue;
            }

            if (cb && cb !== ls.cb) {
                i++
                continue;
            }

            return this._obs.splice(i, 1)[0];
        }
        return undefined;
    }
    remit(msg: any | undefined, eventName: string) {
        this.emit(eventName, msg);
    }
    emit(eventName: string, msg?: any) {
        for (var i = 0; i < this._obs.length; i++) {
            let sl = this._obs[i];
            if (sl.eventName === eventName && sl.cb) {
                sl.cb.call(sl.node, msg, eventName);
            }
        }
    }

    static STATE: { UNKNOWN: number; PLAYING: number; STOPED: number; };
    public name: string = "";
    public tween: any = null;
    public callback: Function = null;
    protected _state: number = StateStep.STATE.UNKNOWN;
    constructor(tween: any, callback: Function, name: string = "", startNow: boolean = true) {
        this.callback = callback;
        this.tween = tween;
        this.name = name;

        this.tween.call(this.finish.bind(this));

        if (startNow) {
            this.start();
        }
    }
    finish() {
        this.emit("finish", this);
    }
    abort() {
        this.stop(false);
    }
    start() {
        this._state = StateStep.STATE.PLAYING;
        this.tween.start();
    }
    stop(callCb: boolean) {
        if (this._state === StateStep.STATE.STOPED) {
            return;
        }

        if (this.tween) {
            this.tween.stop();
        }

        if (callCb && this.callback) {
            this.callback();
        }
        this._state = StateStep.STATE.STOPED;
    }
};
StateStep.STATE = {
    UNKNOWN: 0,
    PLAYING: 1,
    STOPED: 2,
}