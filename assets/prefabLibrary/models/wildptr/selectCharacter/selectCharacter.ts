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
export default class SelectCharacter extends cc.Component {
    private _worldRoot: cc.Node; //FAIRY GUI
    private _view: fgui.GComponent; //FAIRY GUI
    //场景装载器
    loader: fgui.GLoader = null;
    //具体的逻辑组件
    quePage: fgui.GComponent = null;
    //喇叭
    labaPage: fgui.GComponent = null;

    //组件内部
    //todo:把背景逻辑抽取出去。
    background: fgui.GLoader = null;

    characters: fgui.GComponent[] = [];

    touchPad: fgui.GButton = null;

    feedback: cc.Node = null;
    feedbackCount = 0;


    config: any = null;

    async init(data: any) {
        this.config = data;
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
                this.labaPage.getChild("touchPad").asButton.on(fgui.Event.CLICK, this.onClickLaba, this);

                //音频
                let item: fgui.PackageItem = fgui.UIPackage.getItemByURL(`ui://${packageName}/${model.labaSoundClip}`);
                let clip: cc.AudioClip = <cc.AudioClip>item.load();
                console.log("asset:", item.load());
                this.soundInfo = clip;

            } catch (e) {
                console.log("创建喇叭失败：", e);
            }
        }

        try{ 
            this.touchPad = this.quePage.getChild("touchPad").asButton;
        }catch(e){
            console.log("么有touchPad");
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
    onLoad() {
        this.initState();
        this.initUI();
    }
    start() {
        if (this.touchPad) {
            this.touchPad.on(fgui.Event.TOUCH_END, this.onTouchEnd, this);
        }
    }
    onDestroy() {
        if (this.blocked) {
            this.blocked = 0;
        }
    }
    initUI() {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        let packageName = this.config.pathConfig.packageName;
        let modelConfig = this.config.model.config;


        let imgList = modelConfig.characterImgList;
        let lightList = modelConfig.characterLightList;
        this.groupChildrenForEach(
            this.quePage.getChild("characters").asGroup,
            (obj: fgui.GObject, ind: number) => {
                obj["face"] = obj.asCom.getChild("face");
                obj["face"].asLoader.url = `ui://${packageName}/${imgList[ind]}`;

                obj["light"] = obj.asCom.getChild("light");
                obj["light"].asLoader.url = `ui://${packageName}/${lightList[ind]}`;

                if (modelConfig.lightColorHex) {
                    let color = new cc.Color();
                    color.fromHEX(modelConfig.lightColorHex);
                    obj["light"].color = color;
                }

                obj["light"].visible = false;

                obj["ind"] = ind;
                obj.asCom.on(fgui.Event.CLICK, this.onClickCharacter, this);
                this.characters.push(obj.asCom);
            }
        );

        this.quePage.getChild("item1").asLoader.url = `ui://${packageName}/${this.config.model.config.itemImgList[0]}`;
        this.quePage.getChild("item2").asLoader.url = `ui://${packageName}/${this.config.model.config.itemImgList[1]}`;

        this.quePage.getChild("submit").asButton.on(fgui.Event.CLICK, this.onClickSubmit, this);

    }
    onTouchEnd(evt: fgui.Event) {
        if (IsTeacherNotInDemo()) {
            return;
        }
        let charInd = this.calcMinDisInd(evt.pos, this.characters, 140);
        if (charInd !== -1) {
            this.playSound("soundClick");

            let state = this.cloneState();
            state["movement"] = "clicked";
            //flip the value
            state["stateList"][charInd] = (state["stateList"][charInd] == 0 ? 1 : 0);
            this.updateState(state);
        }
    }

    onClickCharacter(evt: fgui.Event) {
        if (IsTeacherNotInDemo()) {
            return;
        }

        this.playSound("soundClick");

        let target = evt.initiator.parent;
        let ind = target["ind"];

        let state = this.cloneState();
        state["movement"] = "clicked";
        //flip the value
        state["stateList"][ind] = (state["stateList"][ind] == 0 ? 1 : 0);
        this.updateState(state);

    }
    onClickSubmit() {
        if (IsTeacherNotInDemo()) {
            return;
        }
        let state = this.cloneState();

        if (globalThis._.isEqual(state["stateList"], this.config.model.config.srcStateList)) {
            // 是否需要做提示？
            // return;
        }

        state["movement"] = "submit";
        this.updateState(state);
    }

    initState() {
        Object.assign(this._state, {
            movement: "idle",
            stateList: this.config.model.config.srcStateList.slice()
        });

        this._stateInited = true;
        this._originState = {};
        Object.assign(this._originState, this._state);
    }


    refreshPage(state: any, force = false) {
        state = state || this.state;
        let list = state["stateList"];
        for (let i = 0; i < list.length; i++) {
            let char = this.characters[i];
            char["light"].visible = (list[i] === 1);
        }
    }
    refresh(oldState: any, state: any) {
        switch (state["movement"]) {
            case "idle":
                this.refreshPage(state);
                break;
            case "clicked":
                this.resetState("movement");
                break;
            case "submit":
                let correct = globalThis._.isEqual(state["stateList"], this.config.model.config.dstStateList);
                this.answerFeedback(correct).then(() => {
                });
                setTimeout(() => {
                    this.playSound("soundClick");
                }, 20);
                this.resetState("movement");
                break;
            case "laba":
                this.actLaba();
                break;
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

    /**
     * 
     * 
     * TODO: 分拆
     * 
     * 
     */

    onClickLaba() {
        if (this.blocked) {
            return;
        }
        let state = this.cloneState();
        state["movement"] = "laba";
        this.updateState(state);
    }

    getCCPos(obj: fgui.GObject) {
        return obj.localToGlobal(0, 0);
    }
    //寻找最近的触摸目标
    calcMinDisInd(pos, list, minDis = 9999) {
        let selInd = -1;
        for (let i = 0; i < list.length; i++) {
            let obj = list[i];
            if (!obj.visible) { //不显示的鱼不判断。
                continue;
            }

            let p2 = this.getCCPos(obj);
            let dis = pos.sub(p2).mag();
            if (minDis > dis) {
                selInd = i;
                minDis = dis;
            }
        }

        return selInd;
    }
    groupChildrenForEach(group, func) {
        let ind = 0;
        let count = this.quePage.numChildren;
        for (let i = 0; i < count; i++) {
            let obj = this.quePage.getChildAt(i);
            if (obj.group == group) {
                func(obj, ind++);
            }
        }
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
            let feedback: any = cc.instantiate(this.feedback);
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
}



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


