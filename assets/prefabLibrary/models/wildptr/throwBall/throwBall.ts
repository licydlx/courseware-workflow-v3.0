
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
export default class ThrowBall extends cc.Component {
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

    balls: fgui.GComponent[] = []; //球
    shadow: fgui.GObject = null; //阴影
    shadowCom: fgui.GComponent = null; //阴影com
    kuang: fgui.GImage = null; //篮球框
    machineBottom: fgui.GImage = null; //底板
    expBall: fgui.GLoader = null; //EXAMPLE球
    scoreTex: fgui.GTextField = null;
    touchPad: fgui.GButton = null;

    flyingBallCount = 0;

    medal: fgui.GComponent = null;

    feedback: cc.Node = null;

    get prevBall() {
        return this.balls[this._prevState["curClick"]];
    }
    get curBall() {
        return this.balls[this.state["curClick"]];
    }

    //before onLoad 初始化
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

        //scoreTex
        //shadow
        //kuang
        //expBall
        //balls
        //touchPad

        this.scoreTex = this.quePage.getChild("scoreTex").asTextField;
        this.scoreTex.text = this.digitScore(0);
        this.shadowCom = this.quePage.getChild("shadow_com").asCom;
        this.shadow = this.shadowCom.getChild("shadow");
        this.kuang = this.quePage.getChild("kuang").asImage;
        this.kuang.sortingOrder = 100;

        this.machineBottom = this.quePage.getChild("machine_bottom").asImage;
        this.machineBottom.sortingOrder = 20;

        this.shadowCom.sortingOrder = 21;

        this.expBall = this.quePage.getChild("expBall").asLoader;
        this.expBall.url = `ui://${packageName}/ball${modelConfig.expBall}`;
        //balls
        this.groupChildrenForEach(
            this.quePage.getChild("balls").asGroup,
            (obj: fgui.GObject, ind: number) => {
                let ball = obj.asCom;
                ball["_originPosition"] = cc.v2(ball.x, ball.y);
                this.balls.push(ball);
            }
        );

        this.touchPad = this.quePage.getChild("touchPad").asButton;

        this.medal = this.quePage.getChild("medal").asCom;
        this.medal.sortingOrder = 60;

        //第一批球，刷新
        this.batchBall(0, true);
    }
    start() {
        //touchpad初始化
        this.touchPad["dragDis"] = 0;
        this.touchPad.on(fgui.Event.TOUCH_BEGIN, this.onDragStart, this);
        this.touchPad.on(fgui.Event.TOUCH_MOVE, this.onDragMove, this);
        this.touchPad.on(fgui.Event.TOUCH_END, this.onDragEnd, this);

    }

    onDragStart(evt) {
        //如果是答案或者投放，老师不能操作。
        if( IsTeacherNotInDemo() ) {
            return;
        }

        this.touchPad["dragDis"] = 0;
        this.touchPad["dragDisY"] = 0;

        //do nothing
        if (this.blocked > 0) {
            return;
        }
        let loc = evt.pos;
        this.finishStep();

        //查看最近的球，curClick记录 curClickRight记录
        let ballInd = this.calcMinDisInd(loc, this.balls);
        let state = this.cloneState();
        state["curClick"] = ballInd;
        state["curClickIsRight"] = this.isSelectBingo(ballInd) ? 1 : 0;
        this.updateState(state);
    }
    onDragMove(evt) {
        //如果是答案或者投放，老师不能操作。
        if( IsTeacherNotInDemo() ) {
            return;
        }
        if (this.blocked > 0) {
            return;
        }
        let delta = evt.touch.getDelta();
        delta.y *= -1;
        this.touchPad["dragDis"] += Math.abs(delta.x) + Math.abs(delta.y);
        this.touchPad["dragDisY"] += delta.y;
        let dragDisY = Math.abs(this.touchPad["dragDisY"]);

        //最近的球跟随移动。衰减
        let curBall = this.curBall;
        if (curBall) {
            let bp = cc.v2(curBall.x, curBall.y);
            if (dragDisY < 10) {
                bp.y += delta.y;
            }
            else if (dragDisY >= 10 && dragDisY < 30) {
                bp.y += delta.y * 0.5;
            }
            else if (dragDisY >= 30 && dragDisY < 50) {
                bp.y += delta.y * 0.2;
            }
            else if (dragDisY >= 50 && dragDisY < 60) {
                bp.y += delta.y * 0.05;
            }
            else if (dragDisY >= 60) {
                bp.y += delta.y * 0.025;
            }
            curBall.x = bp.x;
            curBall.y = bp.y;
        }
    }
    onDragEnd(evt) {
        //如果是答案或者投放，老师不能操作。
        if( IsTeacherNotInDemo() ) {
            return;
        }

        if (this.blocked > 0) {
            return;
        }

        let selInd = this.state["curClick"];
        if (selInd !== -1) {
            let dragDisY = this.touchPad["dragDisY"];
            let dragDis = this.touchPad["dragDis"];

            this.finishStep();

            let state = this.cloneState();
            if (dragDis < 50 || dragDisY > -50) {
                //没有射，球返回
                state["movement"] = "drag";
            }
            else {
                //是否获取错误答案。
                //正确
                let bingo = state["curClickIsRight"];
                state["movement"] = "shot";
                if (bingo) {
                    state["ballShotting"] = selInd;
                    state["curListState"][selInd] = 0;
                    state["score"]++;
                }
                //错误
                else {
                    if (this.canPickWrong) {
                        state["ballShotting"] = selInd;
                        state["curListState"][selInd] = 0;
                    }
                    else {
                        state["ballShotting"] = selInd;
                    }
                }
            }
            this.updateState(state);
        }
    }

    initState() {
        if (this._stateInited) {
            return;
        }
        Object.assign(this._state, {
            //当前动作
            movement: "idle", // 0-idle, 1-drag, 2-shot, 3-change, 4-laba
            curListState: [], //当前篮球状态
            curListInd: -1,   //当前框索引
            score: 0, //分数
            curClick: -1, //
            ballShotting: -1,
            curClickIsRight: -1,
            medal: 0,
        });

        this._stateInited = true;
        this._originState = {};
        Object.assign(this._originState, this._state);
    }
    refreshPage(state: any, force = false) {
        if (this["actChangeBasketCall"]) {
            return;
        }
        state = state || this.state;
        //分数
        if (this.hasChange("score")) {
            this.scoreTex.text = this.digitScore(state["score"]);
        }

        //判断是否投放模式。
        try {
            let mirror: boolean = false;
            let showPrevList = false;
            let { name, userid, role, signalingModel, monitored, monitoredName } = window['GlobalData'].courseData; // 危险的做法。。。
            if (signalingModel == 3) {
                mirror = true;
            }

            //检查球外观
            //球射出状态(射出的隐藏)
            let curListState = state["curListState"];
            let curListInd = state["curListInd"];

            //如果是投放模式，当前框是满的，就显示上一个框。
            let sum = 0;
            curListState.forEach(state => {
                sum += state;
            });
            if (mirror && curListInd > 0 && sum === 8) {
                showPrevList = true;
                curListInd--;
            }

            let curListId = this.config.model.config.balls[curListInd];

            if (showPrevList) {
                //上一筐的篮球状态。
                curListState = new Array(8).fill(1);
                for (let i = 0; i < curListId.length; i++) {
                    if (curListId[i] === 2) {
                        curListState[i] = 0;
                    }
                }
            }

            for (let i = 0; i < this.balls.length; i++) {
                this.initBall(this.balls[i], curListId[i], curListState[i]);
            }

        }
        catch (e) {
            console.log("投放模式刷新失败", e);

            //检查球外观
            //球射出状态(射出的隐藏)
            if (force || this.hasChangeOr("curListInd", "curListState")) {
                let curListState = state["curListState"];
                let curListId = this.config.model.config.balls[state["curListInd"]];
                for (let i = 0; i < this.balls.length; i++) {
                    this.initBall(this.balls[i], curListId[i], curListState[i]);
                }
            }
        }

        //选择状态
        let ind = 0;
        this.balls.forEach(ball => {
            if (ind == state["curClick"]) {
                ball.getChild("selected").visible = true;
                ball.getChild("selected").alpha = 1;
            }
            else {
                ball.getChild("selected").visible = false;
                ball.getChild("selected").alpha = 0;
            }
            ind++;
        });

        if (state["medal"] == 0) {
            this.medal.alpha = 0;
        }
        else {
            this.medal.alpha = 1;
        }
    }
    refresh(oldState: any, state: any, isRemote = false) { //override
        cc.log("---refresh");
        //分数refresh
        this.scoreTex.text = this.digitScore(oldState["score"]);

        switch (state["movement"]) {
            case "":
                this.resetState("movement");
                break;
            case "idle":
                this.refreshPage(state, true);
                break;
            case "drag":
                //更换成idle后，refreshPage中更新选择状态
                this.resetState("movement");
                break;
            case "shot":
                if (state["ballShotting"] !== -1) {
                    let ind = state["ballShotting"];
                    if (this.canPickWrong) {
                        //不管对错，射球。
                        this.actShot(ind);
                    }
                    else {
                        if (state["curClickIsRight"]) {
                            this.actShot(ind);
                        }
                        else {
                            //错误提示
                            this.actWrong(ind);
                        }
                    }
                }
                else {
                    this.actBack(state["curClick"]);
                }
                break;
            case "change":
                if (this.hasChange("curListInd") && oldState["curListInd"] < state["curListInd"]) {
                    this.actChangeBasket();
                }
                break;
            case "laba":
                this.actLaba();
                break;
            case "finish":
                if (state["medal"] == 1) {
                    this.actMedal();
                }
                break;
        }
    }
    /** 动作 */
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
    actBack(ind: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let ball = this.balls[ind];
            let op = ball["_originPosition"];
            //动画后
            let step = () => {
                this.blocked--;
                ball.x = op.x;
                ball.y = op.y;
                this.resetState("movement", "curClick", "ballShotting", "curClickIsRight");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                this.createStep(
                    cc.tween(ball)
                        .to(0.2, { x: op.x, y: op.y }, { easing: "sineInOut" }),
                    step
                );
            }
        });
    }
    update(dt) {
        this.shadowUpdate(dt);
    }
    //检查场上还有多少个球
    checkRemainCount() {
        let stateList = this.state["curListState"];
        let count = 0;
        for (let i = 0; i < stateList.length; i++) {
            if (stateList[i] === 1) {
                count++;
            }
        }
        return count;
    }
    //检查场上还有多少个  正确的  球
    checkBingoRemainCount() {
        let stateList = this.state["curListState"];
        let ballIdList = this.config.model.config.balls[this.state["curListInd"]];
        let bingoId = this.config.model.config.expBall;
        let count = 0;
        for (let i = 0; i < stateList.length; i++) {
            if (stateList[i] === 1) {
                if (ballIdList[i] === bingoId) {
                    count++;
                }
            }
        }
        return count;
    }
    shadowUpdate(dt) {
        let target = this.shadow["target"];
        if (target) {
            // let loc = this.getCCPos( target );
            let np = this.shadow.parent.globalToLocal(target.x, target.y);
            this.shadow.x = np.x;
            // cc.log("targetY:", target.y);
            this.shadow.alpha = target.alpha;
        }
        else {
            this.shadow.alpha = 0;
        }
    }
    actShot(ind: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            let ball = this.balls[ind];
            //创建一个射出的球
            let packageName = this.config.pathConfig.packageName;
            let shotBall = fgui.UIPackage.createObject(packageName, "ball").asCom;
            shotBall.sortingOrder = 150;
            this.quePage.asCom.addChild(shotBall);
            this.flyingBallCount++;

            shotBall.getChild("face").asLoader.url = ball.getChild("face").asLoader.url;
            shotBall["val"] = ball["val"];
            //位置和显示。
            shotBall.x = ball.x;
            shotBall.y = ball.y;

            let op = ball["_originPosition"];
            ball.x = op.x;
            ball.y = op.y;
            ball.visible = false;

            let soundId = -1;
            // this.blocked++;
            shotBall.getChild("selected").alpha = 0;
            this.shadow["target"] = shotBall;
            let tp = cc.v2(this.kuang.x, this.kuang.y - 100);

            let ballAngleAni = shotBall.getTransition("loop");
            let shadowComAni = this.shadowCom.getTransition("shot");

            //动画后
            let step = () => {
                // this.blocked--;
                this.resetState("movement", "curClick", "ballShotting", "curClickIsRight");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                soundId = this.playSound("soundThrow");

                let side = Math.random() > 0.5 ? 1 : -1;

                //纯前端动画。
                cc.tween(shotBall)
                    .call(() => {
                        if (side === 1) {
                            ballAngleAni.play();
                        }
                        else {
                            ballAngleAni.playReverse();
                        }
                        shadowComAni.play();
                    })
                    .then(cc.jumpTo(0.65, tp.x, tp.y, -300, 1).easing(cc.easeOut(1.2)))
                    .call(() => {
                        shotBall.sortingOrder = 50;
                        //分数refresh
                        this.scoreTex.text = this.digitScore(this.state["score"]);
                    })
                    // .to(0.9, { y: tp.y + 250 }, { easing: "bounceOut" })
                    .to(0.4, { y: tp.y + 250 }, { easing: "quartIn" })
                    .then(
                        cc.spawn(
                            cc.scaleTo(0.25, 0.9, 0.9),
                            cc.jumpTo(0.25, tp.x + side * 50, tp.y + 200, -60, 1)
                        )
                    )
                    .then(
                        cc.spawn(
                            cc.scaleTo(0.25, 0.8, 0.8),
                            cc.jumpTo(0.25, tp.x + side * 130, tp.y + 180, -30, 1)
                        )
                    )
                    .then(
                        cc.spawn(
                            cc.scaleTo(0.25, 0.7, 0.7),
                            cc.jumpTo(0.25, tp.x + side * 180, tp.y + 170, -30, 1)
                        )
                    )
                    .call(() => {
                        shotBall.sortingOrder = 19;
                    })
                    .to(0.5, { x: tp.x + side * 195, y: tp.y + 400 }, { easing: "quartOut" })
                    .call(() => {
                        this.flyingBallCount--;
                        shotBall.dispose();
                        ballAngleAni.stop();
                        this.stopSound(soundId);
                        shadowComAni.stop();
                        this.shadow["target"] = null;

                        if (this.canPickWrong) {
                            if (this.checkRemainCount() === 0) {
                                this.batchBall(this.state["curListInd"] + 1, false);
                            }
                        }
                        else {
                            if (this.checkBingoRemainCount() === 0) {
                                this.batchBall(this.state["curListInd"] + 1, false);
                            }
                        }
                    })
                    .start();

                this.createStep(
                    cc.tween(this.quePage)
                    // .delay(0)
                    ,
                    step,
                    "shot"
                );
            }
        });
    }
    actWrong(ind: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            // this.blocked++;
            let ball = this.balls[ind];
            let op = ball["_originPosition"];
            let soundId = -1;
            //动画后
            let step = () => {
                // this.blocked--;
                ball.x = op.x;
                ball.y = op.y;
                this.stopSound(soundId);
                this.resetState("movement", "curClick", "ballShotting", "curClickIsRight");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                ball.getTransition("wrong").play();

                soundId = this.playSound("soundErr");
                //动画
                this.createStep(
                    cc.tween(ball)
                        .to(1.0, { x: op.x, y: op.y }, { easing: "sineInOut" }),
                    step,
                    "wrong"
                );
            }
        });
    }

    actChangeBasket(noAni = false) {
        if (this["actChangeBasketCall"]) {
            return;
        }
        this["actChangeBasketCall"] = 1;

        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let soundIds = [];
            //动画后
            let step = () => {
                this.blocked--;
                delete this["actChangeBasketCall"];
                soundIds.forEach(id => {
                    this.stopSound(id);
                });
                //检查球外观
                let curListState = this.state["curListState"];
                let curListId = this.config.model.config.balls[this.state["curListInd"]];
                for (let i = 0; i < this.balls.length; i++) {
                    this.initBall(this.balls[i], curListId[i], curListState[i]);
                }

                this.resetState("movement");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画。
                this.quePage.getTransition("change").play();

                soundIds.push(this.playSound("soundHand"));

                //动画
                this.createStep(
                    cc.tween(this.node)
                        .delay(2) //动画时间2秒开始初始化内容
                        .call(() => {
                            soundIds.push(this.playSound("soundHand"));
                            //检查球外观
                            //球射出状态(射出的隐藏)
                            let curListState = this.state["curListState"];
                            let curListId = this.config.model.config.balls[this.state["curListInd"]];
                            for (let i = 0; i < this.balls.length; i++) {
                                let val = curListId[i];
                                let state = curListState[i];
                                let ball = this.balls[i];

                                let packageName = this.config.pathConfig.packageName;
                                ball.getChild("face").asLoader.url = `ui://${packageName}/ball${val}`;
                                ball["val"] = val;

                                //位置和显示。
                                ball.visible = state === 1;
                                ball.alpha = state; // 1, 0
                            }
                        })
                        .delay(2.5), //动画逻辑完成。
                    step,
                    "change"
                );
            }
        });
    }

    checkFinish() {
        if (this["feedbackRunning"] || this.flyingBallCount > 0) {
            return;
        }
        if (this.state["medal"] !== 1 && this.state["score"] >= this.config.model.config.targetScore) {
            this["feedbackRunning"] = 1;
            this.answerFeedback(true).then(() => {
                delete this["feedbackRunning"];
                let state = this.cloneState();
                state["medal"] = 1;
                state["movement"] = "finish";
                this.updateState(state);
            });
        }
    }


    /* UTILS */
    digitScore(score, len = 2) {
        let str = score.toFixed(0);
        while (str.length < len) {
            str = "0" + str;
        }
        return str;
    }
    isSelectBingo(ind) {
        // "balls": [
        //     [3,1,2,3,2,3,1,2],
        //     [3,1,3,1,2,3,1,2],
        //     [3,1,2,3,2,3,3,2]
        // ],
        let ballVal = this.config.model.config.balls[this.state["curListInd"]][ind];
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
    batchBall(listInd, noAni = false) {
        if (this.flyingBallCount > 0) {
            return;
        }

        // "balls": [ 三框篮球。
        //     [3,1,2,3,2,3,1,2],
        //     [3,1,3,1,2,3,1,2],
        //     [3,1,2,3,2,3,3,2]
        // ],
        let state = this.cloneState();
        if (listInd >= this.config.model.config.balls.length) {
            this.checkFinish();
        }
        else {
            state["curListInd"] = listInd;
            state["curListState"] = new Array(8).fill(1);
        }

        //无动画刷新。
        if (noAni) {
            state["movement"] = "";
            this.updateState(state);
        }
        else {
            state["movement"] = "change";
            this.updateState(state);
        }
    }
    initBall(ball: fgui.GComponent, val: string, state: number) {
        let packageName = this.config.pathConfig.packageName;
        ball.getChild("face").asLoader.url = `ui://${packageName}/ball${val}`;
        ball["val"] = val;

        //位置和显示。
        ball.visible = state === 1;
        ball.alpha = state; // 1, 0
        let op = ball["_originPosition"];
        ball.x = op.x;
        ball.y = op.y;
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
        if (!this._stateInited) {
            this._stateInited = true;
        }
        this.updateState(remoteState);
    }


    //更新状态层（仅用于接收）
    // catchState(remoteState: any) {
    //     if (globalThis._.isEqual(this._state, remoteState)) {
    //         return;
    //     }
    //     console.log("updateState", remoteState);
    //     this._prevState = this.cloneState();
    //     this._state = remoteState;
    //     this.refresh(this._prevState, this._state, true);
    // }

    // 更新状态层(发送状态)
    updateState(state: any) {
        if (globalThis._.isEqual(this._state, state)) {
            return;
        }
        if (this._state) {
            this._prevState = this.cloneState();
        }
        this._state = state;
        this.refresh(this._prevState, this._state);

        this.mergeState();
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
    public soundHand: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundErr: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundThrow: cc.AudioClip = null;
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
