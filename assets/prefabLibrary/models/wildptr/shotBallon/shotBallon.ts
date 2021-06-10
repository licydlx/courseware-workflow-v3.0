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
export default class ShotBallon extends cc.Component {
    private _worldRoot: cc.Node; //FAIRY GUI
    private _view: fgui.GComponent; //FAIRY GUI

    config: any = null;
    canPickWrong: boolean = false;
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

    //场景装载器
    loader: fgui.GLoader = null;
    //具体的逻辑组件
    quePage: fgui.GComponent = null;
    //喇叭
    labaPage: fgui.GComponent = null;

    //组件内部
    //todo:把背景逻辑抽取出去。
    background: fgui.GLoader = null;
    touchPad: fgui.GButton = null;
    balls: fgui.GComponent[] = [];
    expBall: fgui.GComponent = null;
    scoreTex: fgui.GTextField = null;
    medal: fgui.GComponent = null;
    cursor: fgui.GComponent = null;

    manTest: any = null;
    manDBA: dragonBones.ArmatureDisplay = null;

    feedback: cc.Node = null;
    feedbackCount = 0;

    async init(data: any) {
        this.config = data;
        //配置初始化
        this.canPickWrong = this.config.model.config.canPickWrong;
        let { pathConfig, model, components } = data;
        let packageName = pathConfig.packageName;

        // let { answer, ae } = model.config;
        this._view = fgui.UIPackage.createObject(packageName, model.uiPath).asCom;

        //获得loader
        this.loader = this._view.getChild("loader").asLoader;
        // let quePage = fgui.UIPackage.createObject(Package, model.uiPath).asCom;
        // this.loader.asCom.addChild( quePage );
        this.loader.url = `ui://${packageName}/${model.loaderUiPath}`;
        this.quePage = this.loader.component;

        //获得背景loader
        this.background = this._view.getChild("background").asLoader;
        this.background.url = `ui://${packageName}/${model.backgroundName}`;

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
    initUI() {
        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        let packageName = this.config.pathConfig.packageName;
        let modelConfig = this.config.model.config;

        //
        // balls : fgui.GComponent[] = [];
        var lineBall = (obj: fgui.GObject, ind: number) => {
            let ball = obj.asCom;
            let ani = ball.getTransition("loop");
            if (Math.random() > 0.5) {
                ani.play();
            }
            else {
                ani.playReverse();
            }
            ani.changePlayTimes(-1);
            this.balls.push(ball);
        };
        this.groupChildrenForEach(
            this.quePage.getChild("group1").asGroup,
            lineBall
        );
        this.groupChildrenForEach(
            this.quePage.getChild("group2").asGroup,
            lineBall
        );
        this.groupChildrenForEach(
            this.quePage.getChild("group3").asGroup,
            lineBall
        );

        // expBall : fgui.GComponent = null;
        this.quePage.getChild("man")
            .asCom.getChild("line1")
            .asCom.getChild("ball")
            .asCom.getChild("loader").asLoader.url = `ui://${packageName}/ballon${modelConfig.expBall}`

        this.quePage.getChild("expBall").asLoader.url = `ui://${packageName}/ballon${modelConfig.expBall}`

        // scoreTex : fgui.GTextField = null;
        this.scoreTex = this.quePage.getChild("scoreTex").asTextField;
        this.scoreTex.text = this.digitScore(0);

        // medal : fgui.GComponent = null;
        this.medal = this.quePage.getChild("medal").asCom;
        this.medal.text = this.digitScore(0);

        // cursor : fgui.GComponent = null;
        this.cursor = this.quePage.getChild("cursor").asCom;

        //touchpad
        this.touchPad = this.quePage.getChild("touchPad").asButton;

        //立即刷新一次
        let state = this.cloneState();
        state["curListState"] = new Array(24).fill(1);
        this.state = state;
    }
    initState() {
        Object.assign(this._state, {
            movement: "idle",
            curListState: [], //当前气球状态。
            score: 0,
            curClick: -1,
            curClickIsRight: false,
            clickLaba: 0,
            medal: 0,
        });

        this._stateInited = true;
        this._originState = {};
        Object.assign(this._originState, this._state);
    }

    start() {
        //touchpad初始化
        this.touchPad.on(fgui.Event.TOUCH_BEGIN, this.onTouchStart, this);
    }


    checkFinish() {

        if (this.feedbackCount > 0) {
            return;
        }

        if (this.state["score"] >= this.config.model.config.targetScore) {
            this.feedbackCount = 1;
            this.answerFeedback(true).then(() => {
                this.feedbackCount = 0;
                let state = this.cloneState();
                state["medal"] = 1;
                state["movement"] = "finish";
                this.updateState(state);
            });
        }
    }

    onTouchStart(evt: fgui.Event) {
        if( IsTeacherNotInDemo() ) {
            return;
        }

        if (this.blocked) {
            return;
        }

        this.finishStep();
        //检查场上气球，更新状态。
        let selInd = this.calcMinDisInd(evt.pos, this.balls);
        if (selInd !== -1) {
            let state = this.cloneState();
            state["movement"] = "clicked";

            let bingo = this.isSelectBingo(selInd);
            state["curClickIsRight"] = bingo;

            if (bingo) {
                state["curClick"] = selInd;
                state["curListState"][selInd] = 0;
                state["score"]++;
            }
            //错误
            else {
                if (this.canPickWrong) {
                    state["curClick"] = selInd;
                    state["curListState"][selInd] = 0;
                }
                else {
                    state["curClick"] = selInd;
                }
            }
            this.state = state;
        }
    }
    refreshPage(state: any) {
        state = state || this.state;
        //分数
        if (this.hasChange("score")) {
            this.scoreTex.text = this.digitScore(state["score"]);
        }

        if (this.hasChange("curListState")) {
            this.refreshBalls(null);
        }

        if (this.hasChange("medal")) {
            if (state["medal"] == 0) {
                this.medal.alpha = 0;
            }
            else {
                this.medal.alpha = 1;
            }
        }

        //更新选择状态
        let ind = 0;
        this.balls.forEach(ball => {
            let selectedImg = ball.getChild("ball").asCom.getChild("selected");
            if (ind == state["curClick"]) {
                selectedImg.visible = true;
                selectedImg.alpha = 1;
            }
            else {
                selectedImg.visible = false;
                selectedImg.alpha = 0;
            }
            ind++;
        });
    }
    refresh(oldState: any, state: any) { //override
        switch (state["movement"]) {
            case "":
                this.resetState("movement");
                this.refreshPage(state);
                break;
            case "idle":
                this.refreshPage(state);
                break;
            case "clicked":
                if (state["curClick"] !== -1) {
                    let selInd = state["curClick"];
                    if (this.canPickWrong) {
                        //不管对错，射球。
                        this.actShot(selInd);
                    }
                    else {
                        if (state["curClickIsRight"]) {
                            this.actShot(selInd);
                        }
                        else {
                            //错误提示
                            this.actWrong(selInd);
                        }
                    }
                }
                //更新选择状态
                let ind = 0;
                this.balls.forEach(ball => {
                    let selectedImg = ball.getChild("ball").asCom.getChild("selected");
                    if (ind == state["curClick"]) {
                        selectedImg.visible = true;
                        selectedImg.alpha = 1;
                    }
                    else {
                        selectedImg.visible = false;
                        selectedImg.alpha = 0;
                    }
                    ind++;
                });
                break;
            case "laba":
                this.actLaba();
                break;
            case "finish":
                if (this.hasChange("medal")) {
                    if (state["medal"] == 1) {
                        this.actMedal();
                    }
                }
                break;
        }

    }

    /**动作 */

    actMedal(noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            //动画后 
            let step = () => {
                this.blocked--;
                this.medal.alpha = 1;
                this.medal.scaleX = 1;
                this.medal.scaleY = 1;
                this.resetState("movement");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                this.quePage.getTransition("finish").play();
                this.createStep(
                    cc.tween(this.quePage)
                        .delay(0.75)
                    ,
                    step
                );
            }
        });
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
                this.createStep(
                    cc.tween(this.node)
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
    actShot(ind: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let ball = this.balls[ind];
            let soundId = -1;
            //动画后
            let step = () => {
                this.blocked--;
                this.resetState("curClick", "curClickIsRight", "movement");
                this.cursor.alpha = 0;
                this.checkFinish();

                ball.visible = true;
                ball.alpha = 1;
                cc.tween(ball)
                    .call(() => {
                        soundId = this.playSound("soundBlow");
                        this.scoreTex.text = this.digitScore(this.state["score"]);
                        ball.getTransition("blow").play();
                    })
                    .delay(0.5)
                    .call(() => {
                        ball.visible = false;
                        ball.alpha = 0;
                        this.stopSound(soundId);
                    })
                    .start();

                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                this.cursor.alpha = 1;
                this.cursor.setPosition(ball.x - 50, ball.y - 60);

                this.createStep(
                    cc.tween(ball)
                        .call(() => {
                            this.cursor.getTransition("arm").play();
                        })
                        .delay(0.9)
                    ,
                    step
                );
            }
        });
    }
    actWrong(ind: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let ball = this.balls[ind];
            let soundId = -1;
            //动画后
            let step = () => {
                this.blocked--;
                this.stopSound("soundErr");

                this.resetState("curClick", "curClickIsRight", "movement");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                soundId = this.playSound("soundErr");
                this.createStep(
                    cc.tween(ball)
                        .call(() => {
                            ball.getChild("ball").asCom.getTransition("wrong").play();
                        })
                        .delay(0.5),
                    step
                );
            }
        });
    }
    //立即刷新球
    refreshBalls(state: any) {
        state = state || this.state;
        //检查球外观
        //球状态
        let curListState = state["curListState"];
        let curListId = this.config.model.config.balls;
        for (let i = 0; i < this.balls.length; i++) {
            this.initBall(this.balls[i], curListId[i], curListState[i]);
        }
    }
    /**end of 动作 */

    /* UTILS */
    initBall(ballLine: fgui.GComponent, val: string, state: number) {
        let packageName = this.config.pathConfig.packageName;
        let loader = ballLine.getChild("ball")
            .asCom.getChild("loader").asLoader;
        loader.url = `ui://${packageName}/ballon${val}`;
        cc.log("ballUrl:", loader.url);

        ballLine["val"] = val;
        ballLine.visible = state === 1;
        ballLine.getChild("ball").alpha = state; //0-1
        ballLine.alpha = state; //0-1
        loader.alpha = state; //0-1
    }
    digitScore(score, len = 2) {
        let str = score.toFixed(0);
        while (str.length < len) {
            str = "0" + str;
        }
        return str;
    }
    isSelectBingo(ind) {
        // "balls": [
        //     3,1,3,3,1,2,3,2,
        //     1,1,2,3,3,3,2,1,
        //     2,3,2,1,3,2,3,1
        // ],
        let ballVal = this.config.model.config.balls[ind];
        let rightVal = this.config.model.config.expBall;
        return ballVal === rightVal;
    }
    getCCPos(obj: fgui.GObject) {
        return obj.localToGlobal(0, 0);
    }
    //寻找最近的触摸目标
    calcMinDisInd(pos, list) {
        let minDis = 9999;
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
        if (minDis > 100) {
            selInd = -1;
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
            this._prevState = this._state;
        }
        this._state = newState;
        if (this.ignoreRefresh > 0) {
            this.ignoreRefresh--;
        }
        else {
            this.refresh(this._prevState, this._state);
        }

        this.mergeState();
    }


    get ignoreRefresh() {
        if (!this.state) {
            return 0;
        }
        if (!this.state["_ignoreRefresh"]) {
            this.state["_ignoreRefresh"] = 0;
        }
        return this.state["_ignoreRefresh"];
    }
    set ignoreRefresh(val) {
        if (!this.state) {
            return;
        }
        this._state["_ignoreRefresh"] = val;
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
        cc.log("createStep", name);
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
                    cc.log("finishStep", step.name, step);
                    break;
                }
            }
        }
        else {
            while (this._stepQueue.length >= this._maxStep) {
                // 0 <- [1,2,3,4]
                step = this._stepQueue.shift();
                step.stop(true);
                cc.log("finishStep", step.name, step);
            }
        }

    }


    //todo: 功能整合在sound_mgr.ts
    @property(cc.AudioClip)
    public soundInfo: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundBlow: cc.AudioClip = null;
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
