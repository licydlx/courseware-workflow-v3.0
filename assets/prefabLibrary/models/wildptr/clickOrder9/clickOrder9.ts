const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;

//判断当前是否 角色==老师并且!=DemoMode。
let IsTeacherNotInDemo = function () {
    let { role, signalingModel } = window['GlobalData'].courseData;
    //如果是答案或者投放，老师不能操作。
    if (role == 0 && signalingModel !== 1) {
        return true;
    }
    return false;
};

const { ccclass, property } = cc._decorator;

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



@ccclass
export default class ClickOrder9 extends cc.Component {
    private _worldRoot: cc.Node; //FAIRY GUI
    private _view: fgui.GComponent; //FAIRY GUI

    config: any = null;

    cleaner: fgui.GComponent = null;
    tiles: fgui.GComponent[] = [];
    dirtys: fgui.GComponent[] = [];
    loader: fgui.GLoader = null;
    quePage: fgui.GComponent = null;
    //喇叭
    labaPage: fgui.GComponent = null;

    targetOrder: any = [];
    tileConfig: any = [];

    feedback: cc.Node = null;

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

    async init(data: any) {
        this.config = data;
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;

        // let { answer, ae } = model.config;
        this._view = fgui.UIPackage.createObject(Package, model.uiPath).asCom;

        //获得loader
        this.loader = this._view.getChild("loader").asLoader;
        let packageName = this.config.pathConfig.packageName;
        this.loader.url = `ui://${packageName}/${model.loaderUiPath}`;
        this.quePage = this.loader.component;

        this.tileConfig = this.config.model.config.tileConfig;
        this.targetOrder = this.config.model.config.targetOrder;

        //如果有labaImagePath，做一个喇叭
        if (model.labaImagePath) {
            try {
                this.labaPage = this._view.getChild("laba").asCom;
                this.labaPage.getChild("bubble").asLoader.url = `ui://${packageName}/${model.labaImagePath}`;
                this.labaPage.getChild("touchPad").asButton.on(fgui.Event.CLICK, this.onClickLaba.bind(this));
            } catch (e) {
                console.log("创建喇叭失败：", e);
            }
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

    onClickLaba() {
        if (this.blocked) {
            return;
        }
        let state = this.cloneState();
        state["movement"] = "laba";
        this.updateState(state);
    }

    onLoad() {
        this.initUI();
        this.initState();
    }
    initUI(){
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        let packageName = this.config.pathConfig.packageName;

        this.groupChildrenForEach(
            this.quePage.getChild("tiles").asGroup,
            (obj, ind) => {
                let id = this.tileConfig[ind];
                let tile = obj.asCom;
                let ldText = tile.getChild("n11").asLoader;
                ldText.url = `ui://${packageName}/${id}f`;

                let comText2 = tile.getChild("n10").asCom;
                tile.on(fgui.Event.CLICK, this.onClickTile, this);

                let tText = `ui://${packageName}/${id}t`;
                comText2.getChild("face").asLoader.url = tText;
                comText2.getChild("face-add").asLoader.url = tText;

                tile["tileId"] = id;
                tile["ctrl"] = tile.getController("state");
                this.tiles.push(tile);
            }
        );
        this.groupChildrenForEach(
            this.quePage.getChild("dirtys").asGroup,
            (obj, ind) => {
                let dirty: fgui.GComponent = obj.asCom;
                //污泥图片
                dirty.getChild("face").asLoader.url = `ui://${packageName}/${this.config.model.config.dirtyImg}`;
                //污泥随机旋转
                dirty.getChild("face").asImage.rotation = Math.random() * 360;
                this.dirtys.push(dirty);
            }
        );
        this.cleaner = this.quePage.getChild("cleaner").asCom;
    }
    switchController(ctrl) {
        ctrl.selectedIndex = ctrl.selectedIndex === 1 ? 0 : 1;
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
    onClickTile(evt: fgui.Event) {
        if (IsTeacherNotInDemo()) {
            return;
        }
        if (this.blocked > 0) {
            return;
        }

        let btn: fgui.GComponent = evt.currentTarget.$gobj.asCom;
        let id = btn["tileId"];
        let ind = 0;

        //用id 来寻找table中的位置
        for (let i = 0; i < this.tileConfig.length; i++) {
            if (this.tileConfig[i] == id) {
                ind = i;
            }
        }

        let state = this.cloneState();
        //检查这个按钮是否已经被按下了。如果按下了就不能再点。
        if (state["tileState"][ind] == 1) {
            state["clickInd"] = -1;
            return;
        }
        //先完成所有的操作。
        this.finishStep();

        state = this.cloneState();

        state["movement"] = "clicked";
        state["clickInd"] = ind;

        //判断这个ID是否与config中的同位置元素相等。
        let lastOrder = state["order"].length;
        if (this.targetOrder[lastOrder] === id) {
            state["bingo"] = 1;
        }
        this.updateState(state);
    }
    refreshPage(state: any) {
        state = state || this.state;
        if (this.hasChange("tileState")) {
            this.refreshTiles();
        }
    }
    refresh(oldState: any, state: any) { //override
        // super.refresh(oldState, state);
        switch (state["movement"]) {
            case "idle":
                this.refreshPage(state);
                break;
            case "clicked":
                this.playSound("soundClick");
                if (this.hasChange("clickInd") && state["clickInd"] != -1) {
                    if (state["bingo"] == 1) {
                        //成功
                        this.actRight(state["clickInd"]);
                    }
                    else {
                        //失败动画。
                        this.actWrong(state["clickInd"]);
                    }
                }
                break;
            case "laba":
                this.actLaba();
                break;
            case "finish":
                this.refreshPage(state);
                this.checkFinish();
                break;
        }
    }

    refreshTiles() {
        let tileState = this.state["tileState"];
        for (let i = 0; i < tileState.length; i++) {
            let state = tileState[i];
            let ball = this.tiles[i];
            let dirty = this.dirtys[i];
            dirty.getChild("face").alpha = 1 - state; //0-1
            if (state === 1) {
                ball.getChild("n10").asCom.getChild("mask").height = 250;
            }
            else {
                ball.getChild("n10").asCom.getChild("mask").height = 0;
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
                this.createStep(
                    cc.tween(this.node)
                        .call(() => {
                            aniFadeIn.play();
                        })
                        .delay(this.config.model.labaTime)
                        .call(() => {
                            aniFadeOut.play();
                        })
                        .delay(0.25)
                    ,
                    step
                );
            }
        });
    }
    actWrong(ind, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            // this.blocked++;
            let ball = this.tiles[ind];
            let soundId = -1;
            //动画
            let ani = ball.getTransition("wrong");
            //动画后
            let step = () => {
                // this.blocked--;
                this.stopSound(soundId);
                this.switchController(ball["ctrl"]);
                ani.stop();

                this.resetState("movement", "clickInd", "bingo");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                ani.play();

                soundId = this.playSound("soundErr");

                this.createStep(
                    cc.tween(ball)
                        .delay(0.6)
                    ,
                    step
                );
            }
        });
    }
    actRight(ind, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            // this.blocked++;
            let tile = this.tiles[ind];
            let tileId = tile["tileId"];
            let dirty = this.dirtys[ind];
            let soundId = -1;
            let cleanerAni = this.cleaner.getTransition("walk");
            let aniDirty = dirty.getTransition("clean");
            let ani = tile.getTransition("right");

            //动画后
            let step = () => {
                // this.blocked--;
                if (soundId !== -1) {
                    this.stopSound(soundId);
                }

                cleanerAni.stop();
                aniDirty.stop();
                ani.stop();

                this.cleaner.visible = false;
                dirty.getChild("face").alpha = 0;

                tile.getChild("n10").asCom.getChild("mask").height = 250;

                let state = this.cloneState();
                //因为会走2次idle，排除掉相同的数字。
                this.pushUnique(state["order"], tileId);
                state["tileState"][ind] = 1;
                state["movement"] = "idle";
                state["clickInd"] = -1;
                state["bingo"] = 0;
                this.updateState(state);
                this.refreshTiles();
                this.checkFinish();
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                this.createStep(
                    cc.tween(tile)
                        .call(() => {
                            //播放海绵动画
                            this.cleaner.visible = true;
                            this.cleaner.setPosition(tile.x, tile.y);
                            cleanerAni.play();
                        })
                        .delay(0.5)
                        .call(() => {
                            aniDirty.play();
                        })
                        .delay(0.5)
                        .call(() => {
                            soundId = this.playSound("soundFill");
                            ani.play();
                        })
                        .delay(0.75)
                    ,
                    step
                );
            }
        });
    }

    pushUnique(arr, cell) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === cell) {
                return false;
            }
        }
        arr.push(cell);
    }
    initState() //override 
    {
        if (this._stateInited) {
            return;
        }
        Object.assign(this._state, {
            movement: "idle",
            tileState: new Array(9).fill(0),
            order: [],
            clickInd: -1,
            bingo: 0,
        });
        this._stateInited = true;
        this._originState = {};
        Object.assign(this._originState, this._state);
    }

    checkFinish() {
        let order = this.state["order"];
        if (globalThis._.isEqual(order, this.targetOrder)) {
            this.answerFeedback(true).then(() => {
            });
        }
    }

    answerFeedback(bool: boolean) {
        return new Promise((resolve, reject) => {
            if (!this.feedback) {
                resolve(null);
            }
            let state: any = globalThis._.cloneDeep(this._state);
            let feedback: any = cc.instantiate(this.feedback);
            feedback.x = 960;
            feedback.y = 540;
            let feedbackJs: any = feedback.getComponent(cc.Component);
            feedbackJs.init(bool);
            feedback.parent = cc.find("Canvas").parent;

            setTimeout(() => {
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

    set state(newState: any) {
        if (this._state) {
            this._prevState = this.cloneState();
        }
        this._state = newState;
        this.refresh(this._prevState, this._state);

        this.mergeState();
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

    // 更新状态层
    updateState(remoteState: any) {
        if (globalThis._.isEqual(this._state, remoteState)) {
            return;
        }
        console.log("updateState", remoteState);
        this.state = remoteState;
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

        this.stopAllSound();
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
        // cc.log("createStep", name);
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
                    // cc.log("finishStep", step.name, step);
                    break;
                }
            }
        }
        else {
            while (this._stepQueue.length >= this._maxStep) {
                // 0 <- [1,2,3,4]
                step = this._stepQueue.shift();
                step.stop(true);
                // cc.log("finishStep", step.name, step);
            }
        }

    }


    //todo: 功能整合在sound_mgr.ts
    @property(cc.AudioClip)
    public soundInfo: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundFill: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundClick: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundErr: cc.AudioClip = null;
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
}
