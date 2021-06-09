
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
export default class Classify extends cc.Component {

    private _worldRoot: cc.Node; //FAIRY GUI
    private _view: fgui.GComponent; //FAIRY GUI

    config: any = null;
    dragDis = 0;
    dragOp = cc.v2();
    dragging = false;
    dragPos = cc.v2();
    dragZoneId = 0;

    clickZoneId = 0;

    //场景装载器
    loader: fgui.GLoader = null;
    //具体的逻辑组件
    quePage: fgui.GComponent = null;
    //喇叭
    labaPage: fgui.GComponent = null;
    background: fgui.GLoader = null;
    feedback: cc.Node = null;
    feedbackCount = 0;

    //虚线
    rx: fgui.GImage = null;
    bx: fgui.GImage = null;
    //普通
    rc: fgui.GImage = null;
    bc: fgui.GImage = null;
    //高亮
    rt: fgui.GImage = null;
    bt: fgui.GImage = null;
    mt: fgui.GImage = null;


    item1: fgui.GObject = null;
    item2: fgui.GObject = null;
    tipHand: fgui.GObject = null;

    //落点
    pointList: fgui.GObject[] = [];

    //气泡
    thinkBubble: fgui.GComponent = null;

    dragMan: fgui.GComponent = null;
    btnOk: fgui.GButton = null;

    touchPad: fgui.GButton = null;

    onLoad() {
        this.initState();
        this.initUI();
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

        this.rx = this.quePage.getChild("zone").asCom.getChild("rx").asImage;
        this.bx = this.quePage.getChild("zone").asCom.getChild("bx").asImage;
        this.rc = this.quePage.getChild("zone").asCom.getChild("rc").asImage;
        this.bc = this.quePage.getChild("zone").asCom.getChild("bc").asImage;
        this.rt = this.quePage.getChild("zone").asCom.getChild("rt").asImage;
        this.bt = this.quePage.getChild("zone").asCom.getChild("bt").asImage;
        this.mt = this.quePage.getChild("zone").asCom.getChild("mt").asImage;


        for (let i = 0; i < 4; i++) {
            let point = this.quePage.getChild(`point${i}`);
            this.pointList.push(point);
        }

        this.thinkBubble = this.quePage.getChild("think").asCom;
        this.dragMan = this.quePage.getChild("dragMan").asCom;
        this.btnOk = this.quePage.getChild("submit").asButton;
        this.touchPad = this.quePage.getChild("touchPad").asButton;

        this.dragMan.getChild("loader").asLoader.url =
            `ui://${packageName}/${modelConfig.manImg}`;

        this.thinkBubble.getChild("item1").asLoader.url =
            `ui://${packageName}/${modelConfig.itemImgList[0]}`;

        this.thinkBubble.getChild("item2").asLoader.url =
            `ui://${packageName}/${modelConfig.itemImgList[1]}`;

        this.item1 = this.quePage.getChild("item1");
        this.item1.asLoader.url = `ui://${packageName}/${modelConfig.itemImgList[0]}`;

        this.item2 = this.quePage.getChild("item2");
        this.item2.asLoader.url = `ui://${packageName}/${modelConfig.itemImgList[1]}`;

        this.tipHand = this.quePage.getChild("hand");
        this.tipHand.sortingOrder = 99;

        let ctrl = this.quePage.getChild("zone").asCom.getController("c1");
        ctrl.selectedIndex = 1;
        ctrl.selectedIndex = 0;
    }

    initState() {
        if (this._stateInited) {
            return;
        }
        Object.assign(this._state, {
            //当前动作
            movement: "idle",
            clickZoneId: 0,
            zoneId: 0,
            dragPos: [],
            manPos: [],
        });

        this._stateInited = true;
        this._originState = {};
        Object.assign(this._originState, this._state);
    }
    start() {
        //touchpad初始化
        this.touchPad.on(fgui.Event.TOUCH_BEGIN, this.onDragStart, this);
        this.touchPad.on(fgui.Event.TOUCH_MOVE, this.onDragMove, this);
        this.touchPad.on(fgui.Event.TOUCH_END, this.onDragEnd, this);

        this.btnOk.on(fgui.Event.CLICK, this.onSubmit, this);
    }
    onSubmit() {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        let state = this.cloneState();
        if (state["zoneId"] === 0) {
            this.actTip();
            return;
        }

        state["movement"] = "submit";
        this.updateState(state);
    }
    actTip(noAni = false) {
        this.blocked++;
        this.schedule(this.drawTipDot, 0.02);

        this.quePage.getTransition("tip").play(() => {
            this.blocked--;
            this.unschedule(this.drawTipDot);
            delete this["prevTipDot"];
        });
    }
    drawTipDot(dt) {
        let nextDot = cc.v2(this.tipHand.x, this.tipHand.y);
        let prevDot = this["prevTipDot"];

        if (cc.isValid(prevDot)) {
            let dis = prevDot.sub(nextDot).mag();
            if (dis < 40) {
                return;
            }
        }

        this["prevTipDot"] = nextDot;

        let dot = this.newDot(nextDot);
        dot.scaleX = 2;
        dot.scaleY = 2;
        dot.setPivot(0.5, 0.5, true);
        this.quePage.addChild(dot);
        dot.node.runAction(cc.sequence(
            cc.delayTime(1.0),
            cc.fadeOut(0.3),
            cc.callFunc(() => {
                dot.setPosition(0, 0);
                dot.node.destroy();
            })
        ));

    }

    newDot(vec: cc.Vec2) {
        let packageName = this.config.pathConfig.packageName;
        let dot = fgui.UIPackage.createObject(packageName, "tip_dot").asImage;
        dot.setPosition(vec.x, vec.y);
        return dot;
    }

    onDragStart(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        if (this.blocked > 0) {
            return;
        }

        this.dragDis = 0;
        this.dragOp = evt.pos;
        let loc = evt.pos;
        let manPos = this.getCCPos(this.dragMan);
        this.dragPos = manPos;
        let dis = loc.sub(manPos).mag();
        if (dis < 280) {
            this.checkDragZone();
            let state = this.cloneState();
            state["movement"] = "grapNoMove";
            state["dragPos"] = [
                this.dragPos.x,
                this.dragPos.y
            ];
            state["manPos"] = [
                this.dragMan.x,
                this.dragMan.y
            ];
            state["zoneId"] = this.dragZoneId;

            this.clickZoneId = 0;
            state["clickZoneId"] = this.clickZoneId;

            this.updateState(state);
        }
        else {
            console.log("to far:", dis);
        }
    }
    onDragMove(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        let loc = evt.pos;
        this.dragPos = loc;
        this.dragDis = this.dragOp.sub(this.dragPos).mag();
        if (this.state["movement"] == "grapNoMove" &&
            this.dragDis > 50 && !this.dragging) {
            this.dragging = true;
            let state = this.cloneState();
            state["movement"] = "grap";
            this.updateState(state);
        }
        if (this.state["movement"] === "drag") {
            if (this.dragPos.y < 250) {
                this.dragPos.y = 250;
            }
            else if (this.dragPos.y > 1000) {
                this.dragPos.y = 1000;
            }
            this.dragMan.x = this.dragPos.x;
            this.dragMan.y = this.dragPos.y;

            //区域
            this.checkDragZone();
        }
    }
    checkDragZone() {
        let rp = this.rc.localToGlobal(0, 0);
        let bp = this.bc.localToGlobal(0, 0);
        let manP = this.dragMan.localToGlobal(0, 0);

        let hasRed = (manP.sub(rp).mag() < 295);
        let hasBlue = (manP.sub(bp).mag() < 295);

        if (hasRed && hasBlue) {
            this.dragZoneId = 2;
        }
        else if (hasRed) {
            this.dragZoneId = 1;
        }
        else if (hasBlue) {
            this.dragZoneId = 3;
        }
        else {
            this.dragZoneId = 0;
        }
    }
    checkClickZone(pos) {
        let np = pos;
        // let np = this.quePage.getChild("zoneInd").asCom.globalToLocal(pos.x, pos.y);

        let rp = this.rc.localToGlobal(0, 0);
        let bp = this.bc.localToGlobal(0, 0);

        let hasRed = (np.sub(rp).mag() < 295) || pos.sub(this.getCCPos(this.item1)).mag() < 100;
        let hasBlue = (np.sub(bp).mag() < 295) || pos.sub(this.getCCPos(this.item2)).mag() < 100;


        if (hasRed && hasBlue) {
            this.clickZoneId = 2;
        }
        else if (hasRed) {
            this.clickZoneId = 1;
        }
        else if (hasBlue) {
            this.clickZoneId = 3;
        }
        else {
            this.clickZoneId = 0;
        }
    }
    onDragEnd(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        let dragDis = this.dragOp.sub(evt.pos).mag();
        if (!this.dragging || dragDis < 50) {

            // 查看落点
            this.checkClickZone(evt.pos);

            this.dragging = false;
            this.dragPos = cc.v2();

            let state = this.cloneState();
            state["clickZoneId"] = this.clickZoneId;
            state["movement"] = "clicked";
            state["dragPos"] = [];
            this.updateState(state);
        }
        else {
            this.clickZoneId = 0;
            //寻找最后的ZONE落点。
            let state = this.cloneState();
            state["movement"] = "drop";
            state["dragPos"] = [
                this.dragPos.x,
                this.dragPos.y
            ];
            state["manPos"] = [
                this.dragMan.x,
                this.dragMan.y
            ];
            state["zoneId"] = this.dragZoneId;
            state["clickZoneId"] = this.clickZoneId;
            this.dragZoneId = 0;
            this.updateState(state);
        }

        this.dragging = false;
        this.dragOp = cc.v2();
        this.dragDis = 0;
    }
    refreshPage(state: any) {
        state = state || this.state;
        let point = this.pointList[state["zoneId"]];
        let tp = cc.v2(point.x, point.y);

        if (this.dragMan["tween"]) {
            this.dragMan["tween"].stop();
            delete this.dragMan["tween"];
        }

        this.dragMan.setPosition(tp.x, tp.y);
    }
    refreshZone(zoneId, isIdle = false) {
        if (zoneId === 0) {
            //虚线
            this.rx.alpha = 0;
            this.bx.alpha = 0;
            //普通
            this.rc.alpha = 1;
            this.bc.alpha = 1;
            //高亮
            this.rt.alpha = 0;
            this.bt.alpha = 0;
            this.mt.alpha = 0;
        }
        else {
            //虚线
            this.rx.alpha = (zoneId === 2 || zoneId === 3) ? 1 : 0;
            this.bx.alpha = (zoneId === 1 || zoneId === 2) ? 1 : 0;
            //普通
            this.rc.alpha = 0;
            this.bc.alpha = 0;
            //高亮
            this.rt.alpha = (zoneId === 1) ? 1 : 0;
            this.bt.alpha = (zoneId === 3) ? 1 : 0;
            this.mt.alpha = (zoneId === 2) ? 1 : 0;
        }
    }

    refresh(oldState: any, state: any) {
        switch (state["movement"]) {
            case "idle":
            case "grapNoMove":
                this.refreshPage(state);
                break;
            case "grap":
                {
                    this.playSound("soundDrag");
                    console.log("grap");
                    this.dragMan.getTransition("up").play();
                    let st = this.cloneState();
                    st["movement"] = "drag";
                    this.updateState(st);
                    this.clickZoneId = state["clickZoneId"];
                    this.actZone(this.clickZoneId);
                }
                break;
            case "drag":
                {
                    this.dragPos = cc.v2(...state["dragPos"]);
                    let dis = this.dragPos.sub(cc.v2(this.dragMan.x, this.dragMan.y)).mag();
                    if (dis < 30) {
                        this.dragMan.x = this.dragPos.x;
                        this.dragMan.y = this.dragPos.y;
                    }
                    else {
                        this.actMove(dis);
                    }
                }
                break;
            case "drop":
                this.playSound("soundDrag");
                console.log("drop");
                this.dragMan.getTransition("down").play();
                this.refreshPage(state);
                console.log("state:", state["zoneId"]);
                this.clickZoneId = state["clickZoneId"];
                this.actZone(this.clickZoneId);
                break;
            case "submit":
                let bingo = state["zoneId"] === this.config.model.config.dstZoneId;
                this.answerFeedback(bingo).then(() => {
                });
                setTimeout(() => {
                    this.playSound("soundClick");
                }, 20);
                this.resetState("movement");
                break;
            case "clicked":
                {
                    this.clickZoneId = state["clickZoneId"];
                    this.actZone(this.clickZoneId);
                }
                break;
            case "laba":
                this.actLaba();
                break;
        }
    }
    actMove(dis: number, noAni = false) {
        let dragMan = this.dragMan;

        if (dragMan["tween"]) {
            dragMan["tween"].stop();
            delete dragMan["tween"];
        }

        dragMan["tween"] = cc.tween(dragMan)
            .to(dis / 1000, { x: this.dragPos.x, y: this.dragPos.y })
            .start();
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

    actZone(zoneId, noAni = false) {
        // this.blocked = 1;
        // 这些圈是能切换的状态，所以弃用动画，用控制器来转换
        // let ani = this.quePage.getChild("zone").asCom.getTransition(`zone${zoneId}`);
        let ctrl = this.quePage.getChild("zone").asCom.getController("c1");
        ctrl.selectedIndex = zoneId;
    }

    switchController(ctrl) {
        ctrl.selectedIndex = ctrl.selectedIndex === 1 ? 0 : 1;
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

    getCCPos(obj: fgui.GObject) {
        return obj.localToGlobal(0, 0);
    }
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

                //音频
                let item: fgui.PackageItem = fgui.UIPackage.getItemByURL(`ui://${packageName}/${model.labaSoundClip}`);
                let clip: cc.AudioClip = <cc.AudioClip>item.load();
                console.log("asset:", item.load());
                this.soundInfo = clip;

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

    // 临时
    // 拖拽定时器
    dragSchedule() {
        if (this.dragging && this.dragDis > 50) {
            let state: any = globalThis._.cloneDeep(this._state);
            state["movement"] = "drag";
            state["dragPos"] = [
                Math.floor(this.dragPos.x),
                Math.floor(this.dragPos.y)
            ];
            state["manPos"] = [
                this.dragMan.x,
                this.dragMan.y
            ];
            this.updateState(state);
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
        this.schedule(this.dragSchedule, 0.3);
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
    public soundDrag: cc.AudioClip = null;
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




