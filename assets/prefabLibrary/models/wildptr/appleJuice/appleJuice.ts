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
export default class Shotapple extends cc.Component {
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
    dragging = false;
    nearPointCount: number = 0;

    //场景装载器
    loader: fgui.GLoader = null;
    //具体的逻辑组件
    quePage: fgui.GComponent = null;
    //喇叭
    labaPage: fgui.GComponent = null;

    feedback: cc.Node = null;
    //组件内部
    //todo:把背景逻辑抽取出去。
    background: fgui.GLoader = null;
    touchPad: fgui.GButton = null;
    balls: fgui.GComponent[] = [];
    expBall: fgui.GComponent = null;
    scoreTex: fgui.GTextField = null;
    medal: fgui.GComponent = null;
    dragPoint: fgui.GObject = null;

    juicer: fgui.GComponent = null;
    juicerWater: fgui.GComponent = null;

    dragPos: cc.Vec2 = new cc.Vec2();

    get prevBall() {
        return this.balls[this._prevState["curClick"]];
    }
    get curBall() {
        return this.balls[this.state["curClick"]];
    }

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
                // let labaLoader = this._view.getChild("laba").asLoader;
                // labaLoader.url = `ui://${packageName}/laba`;
                // this.labaPage = labaLoader.component;
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
    onDestroy() {
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
            ball["_originPosition"] = cc.v2(ball.x, ball.y);

            //叶子动画不播放。
            // let ani = ball.getTransition("loop");
            // if (Math.random() > 0.5) {
            //     ani.play();
            // }
            // else {
            //     ani.playReverse();
            // }
            // ani.changePlayTimes(-1);
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

        this.initBall(this.quePage.getChild("expBall").asLoader.component, modelConfig.expBall, 1);

        // scoreTex : fgui.GTextField = null;
        this.scoreTex = this.quePage.getChild("scoreTex").asTextField;
        this.scoreTex.text = this.digitScore(0);

        // medal : fgui.GComponent = null;
        this.medal = this.quePage.getChild("medal").asCom;

        //touchpad
        this.touchPad = this.quePage.getChild("touchPad").asButton;

        //dragPoint
        this.dragPoint = this.quePage.getChild("dragPoint");

        this.juicer = this.quePage.getChild("juicer").asCom;
        //juicerWater //y == 180
        this.juicerWater = this.juicer.getChild("n12").asCom.getChild("n16").asCom;

        //立即刷新一次
        let state = this.cloneState();
        state["curListState"] = new Array(24).fill(1);
        state["movement"] = "";
        this.updateState(state);
    }
    initState() {
        Object.assign(this._state, {
            movement: "idle",
            curListState: [], //当前苹果状态。
            linePoint: [0, 0],
            score: 0,
            curClick: -1,
            ballShotting: -1,
            curClickIsRight: false,
            curBallPos: [],
            clickLaba: 0,
            medal: 0,
            juiceInBottles: 0,
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
    }

    /** StateComponent::_intervalDispatcherList */
    // _intervalDispatcherList = new Map<string, number>();

    // //定时更新state, trigger by key
    // addIntervalDispatcher(key: string, interval: number) {
    //     if (this._intervalDispatcherList.has(key)) {
    //         return;
    //     }
    //     //循环
    //     let loopId = setInterval(() => {
    //         if (this.hasChange(key)) {
    //             this.mergeState();
    //         }
    //     }, interval * 1000);
    //     this._intervalDispatcherList.set(key, loopId);
    // }

    // delIntervalDispatcher(key: string) {
    //     if (!this._intervalDispatcherList.has(key)) {
    //         return false;
    //     }
    //     let loopId = this._intervalDispatcherList.get(key);
    //     if (loopId) {
    //         clearInterval(loopId);
    //         if (this.hasChange(key)) {
    //             this.mergeState();
    //         }
    //     }
    //     return this._intervalDispatcherList.delete(key);
    // }
    /** end of StateComponent::_intervalDispatcherList */

    onDragStart(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }

        if (this.blocked > 0) {
            return;
        }
        this.dragging = true;

        this.touchPad["dragDis"] = 0;
        this.touchPad["dragDisY"] = 0;

        let loc = evt.pos;

        //查看最近的球，curClick记录 curClickRight记录
        let ballInd = this.calcMinDisInd(loc, this.balls);
        let state = this.cloneState();
        state["curClick"] = ballInd;
        state["curClickIsRight"] = this.isSelectBingo(ballInd);
        state["movement"] = "clicked";
        state["curBallPos"] = [];
        this.dragPos = cc.v2();
        if (ballInd !== -1) {
            let ball = this.balls[ballInd];
            this.dragPos.x = ball.x;
            this.dragPos.y = ball.y;
        }

        this.updateState(state);

        //注册循环dispatch
        // this.addIntervalDispatcher("curBallPos", 0.3);
    }
    onDragMove(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }

        if (this.blocked > 0) {
            return;
        }

        let curBall = this.curBall;
        if (curBall) {
            //苹果跟随拖动
            let delta = evt.touch.getDelta();
            delta.y *= -1;
            let bp = cc.v2(curBall.x, curBall.y);
            bp.addSelf(delta);

            // let state = this.cloneState();
            // state["curBallPos"] = [bp.x, bp.y];
            // this.updateState(state);
            curBall.x = bp.x;
            curBall.y = bp.y;

            // this._state["curBallPos"] = [bp.x, bp.y];
            this.dragPos.x = bp.x;
            this.dragPos.y = bp.y;
        }
    }
    // 临时
    // 拖拽定时器
    dragSchedule() {
        if (this.dragging) {
            let state: any = globalThis._.cloneDeep(this._state);
            state["movement"] = "moving";
            state["curBallPos"] = [
                Math.floor(this.dragPos.x),
                Math.floor(this.dragPos.y)
            ];
            this.updateState(state);
        }
    }
    onDragEnd(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }

        if (this.blocked > 0) {
            return;
        }

        //停止循环
        // this.delIntervalDispatcher("curBallPos");

        this.dragging = false;
        let state = this.cloneState();
        state["curBallPos"] = [];
        let selInd = this.state["curClick"];
        if (selInd !== -1) {
            if (this.nearPointCount > 0) {
                state["movement"] = "shot";
                //是否进入
                //选择苹果。
                //是否获取错误答案。
                //正确
                let bingo = state["curClickIsRight"];

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
            else { //没有进入
                state["movement"] = "back";
            }
        }
        else {
            state["movement"] = "idle";
        }
        this.updateState(state);
    }
    update(dt) {
        let curBall = this.curBall;
        if (curBall) {
            let bp = cc.v2(curBall.x, curBall.y);
            let dp = cc.v2(this.dragPoint.x, this.dragPoint.y);
            let near = dp.sub(bp).mag() < 180;

            if (curBall.visible && near && this.nearPointCount === 0) {
                this.nearPointCount++;
                this.juicer.getTransition("open").play();
                cc.log("---open");
            }
            else if (!near && this.nearPointCount > 0) {
                this.nearPointCount--;
                this.juicer.getTransition("open").playReverse();
                cc.log("---close");
            }
        }
    }

    calcWaterHeight(score) {
        let percent = (score / this.config.model.config.targetScore);
        return 180 - (180 * percent);
    }

    refreshPage(state: any, force = false) {
        state = state || this.state;
        //分数
        if (force || this.hasChange("score")) {
            this.scoreTex.text = this.digitScore(state["score"]);
            this.juicerWater.y = this.calcWaterHeight(state["score"]);
        }
        //检查球外观
        //球射出状态(射出的隐藏)
        if (force || this.hasChangeOr("curListInd", "curListState")) {
            this.refreshBalls(state);
        }

        if (force || this.hasChange("curBallPos")) {
            let curBall = this.curBall;
            if (curBall && state["curBallPos"].length > 0) {
                curBall.x = state["curBallPos"][0];
                curBall.y = state["curBallPos"][1];
            }
        }
        if (state["medal"] == 1) {
            this.medal.alpha = 1;
            for (let i = 1; i < 4; i++) {
                let waterGroup = this.juicer.getChild(`cpu${i}`).asCom
                    .getChild("n4").asCom.getChild("water").asGroup;
                waterGroup.y = 8;
            }
            this.juicerWater.alpha = 0;
        }
        else {
            this.medal.alpha = 0;
            for (let i = 1; i < 4; i++) {
                let waterGroup = this.juicer.getChild(`cpu${i}`).asCom
                    .getChild("n4").asCom.getChild("water").asGroup;
                waterGroup.y = 121;
            }
            this.juicerWater.alpha = 1;
        }
    }
    refresh(oldState: any, state: any) { //override
        switch (state["movement"]) {
            case "":
                this.resetState("movement");
                break;
            case "idle":
                this.refreshPage(state, true);
                break;
            case "clicked":
                {
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
                }
                break;
            case "moving":
                if (this.hasChange("curBallPos") && state["curBallPos"].length > 0) {
                    this.actMove();
                }
                break;
            case "back":
                {
                    let ind = state["curClick"];
                    if (ind !== -1) {
                        this.actBack(ind);
                    }
                }
                break;
            case "shot":
                if (state["ballShotting"] === -1) {
                    if (this.hasChange("curClick") && oldState["curClick"] !== -1) {
                        this.actBack(oldState["curClick"]);
                    }
                }
                else {
                    if (this.canPickWrong) {
                        //不管对错。
                        let ind = state["ballShotting"];
                        this.actShot(ind);
                    }
                    else {
                        if (state["curClickIsRight"]) {
                            let ind = state["ballShotting"];
                            this.actShot(ind);
                        }
                        else {
                            //错误提示
                            let ind = state["ballShotting"];
                            this.actWrong(ind);
                        }
                    }
                }
                break;
            case "laba":
                this.actLaba();
                break;
            case "medal":
                if (state["medal"] == 1) {
                    this.actMedal();
                }
                break;
            case "finish":
                this.actFinish();
                break;
        }
    }

    debugFinishNow() {
        let state = this.cloneState();
        state["score"] = this.config.model.config.targetScore;
        this.updateState(state);
        this.checkFinish();
        // if (this.state["score"] >= this.config.model.config.targetScore) {
        //     //到果汁
        //     let state = this.cloneState();
        //     state["movement"] = "finish";
        //     this.updateState(state);
        // }
    }

    /**动作 */
    actFinish(noAni = false) {
        this.juicer.getTransition("open").stop();
        this.quePage.getTransition("finish").play();
        this.blocked++;
        //         //动画
        this.juicer.getTransition("open").stop();
        this.quePage.getTransition("finish").play();
        cc.tween(this.quePage)
            .delay(3.75)
            .call(() => {
                this.answerFeedback(true).then(() => {
                    this.blocked--;
                    let state = this.cloneState();
                    state["medal"] = 1;
                    state["movement"] = "medal";
                    this.updateState(state);
                });
            })
            .start();
        // return new Promise((resolve, reject) => {
        //     //动画前
        //     this.blocked++;
        //     //动画后
        //     let step = () => {
        //         this.blocked--;
        //         this.medal.alpha = 1;
        //         this.medal.scaleX = 1;
        //         this.medal.scaleY = 1;
        //         // this.resetState("movement");

        //         resolve(null);
        //     };
        //     if (noAni) {
        //         step();
        //     }
        //     else {
        //         //动画
        //         this.juicer.getTransition("open").stop();
        //         this.quePage.getTransition("finish").play();
        //         this.blocked++;
        //         cc.tween(this.quePage)
        //             .delay(3.75)
        //             .call(() => {
        //                 this.answerFeedback(true).then(() => {
        //                     this.blocked--;
        //                     let state = this.cloneState();
        //                     state["medal"] = 1;
        //                     state["movement"] = "medal";
        //                     this.updateState(state);
        //                 });
        //             });

        //         this.createStep(
        //             cc.tween(this.quePage)
        //                 .delay(3.75)
        //             ,
        //             step
        //         );
        //     }
        // });
    }
    actMove(noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            let curBall = this.curBall;
            if (!curBall) {
                resolve(null);
                return;
            }
            let tp = cc.v2(this.state["curBallPos"][0], this.state["curBallPos"][1]);
            let bp = cc.v2(curBall.x, curBall.y);
            let distance = tp.sub(bp).mag();
            if (distance < 50) {
                curBall.x = tp.x;
                curBall.y = tp.y;
                resolve(null);
                return;
            }

            //动画后
            let step = () => {
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                let time = Math.min(0.3, distance / 1000);
                this.createStep(
                    cc.tween(curBall)
                        .to(time, { x: tp.x, y: tp.y })
                    ,
                    step
                );
            }
        });
    }
    actMedal(noAni = false) {
        //动画前
        this.blocked++;
        //         //动画
        this.quePage.getTransition("medal").play();
        cc.tween(this.quePage)
            .delay(3.75)
            .call(() => {
                this.blocked--;
                this.medal.alpha = 1;
                this.medal.scaleX = 1;
                this.medal.scaleY = 1;
                this.resetState("movement");
            })
            .start();

        // return new Promise((resolve, reject) => {
        //     //动画前
        //     this.blocked++;
        //     //动画后
        //     let step = () => {
        //         this.blocked--;
        //         this.medal.alpha = 1;
        //         this.medal.scaleX = 1;
        //         this.medal.scaleY = 1;
        //         this.resetState("movement");
        //         resolve(null);
        //     };
        //     if (noAni) {
        //         step();
        //     }
        //     else {
        //         //动画
        //         this.quePage.getTransition("medal").play();
        //         this.createStep(
        //             cc.tween(this.quePage)
        //                 .delay(3.75)
        //             ,
        //             step
        //         );
        //     }
        // });
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
            let op = ball["_originPosition"];
            let soundId = -1;
            //动画后
            let step = () => {
                this.blocked--;
                ball.x = op.x;
                ball.y = op.y;
                this.stopSound(soundId);
                this.resetState("movement", "curClick", "curClickIsRight", "ballShotting");
                this.refreshBalls(null);
                this.checkFinish();
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                let tp = cc.v2(this.dragPoint.x, this.dragPoint.y + 100);

                this.createStep(
                    cc.tween(ball)
                        .to(0.1, { x: tp.x, y: tp.y - 150 })
                        .to(0.1, { x: tp.x, y: tp.y })
                        .to(0.1, { rotation: 80 })
                        .union()
                        .call(() => {
                            ball.visible = false;
                            //播放切割
                            this.juicer.getTransition("cut").play();
                            soundId = this.playSound("soundZhaZhi");
                        })
                        .delay(0.3)
                        .call(() => {
                            this.scoreTex.text = this.digitScore(this.state["score"]);
                            this.juicerWater.y = this.calcWaterHeight(this.state["score"]);
                        })
                        .delay(0.1)
                        .call(() => {
                            this.nearPointCount = 0;
                            this.juicer.getTransition("open").playReverse();
                        }),
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
                this.nearPointCount = 0;
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
                        .to(0.2, { x: op.x, y: op.y }, { easing: "sineInOut" })
                        .call(() => {
                            this.juicer.getTransition("open").playReverse();
                        })
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
            let op = ball["_originPosition"];
            let soundId = -1;
            //动画后
            let step = () => {
                this.blocked--;
                ball.x = op.x;
                ball.y = op.y;
                this.nearPointCount = 0;

                this.stopSound(soundId);
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
                        .call(() => {
                            this.playSound("soundErr");
                        })
                        .to(0.2, { x: op.x, y: op.y }, { easing: "sineInOut" })
                        .call(() => {
                            if (this.nearPointCount > 0) {
                                this.nearPointCount = 0;
                            }
                        })
                    ,
                    step
                );
            }
        });
    }
    refreshBalls(state: any) {
        state = state || this.state;
        let curListState = state["curListState"];
        let curListId = this.config.model.config.balls;
        for (let i = 0; i < this.balls.length; i++) {
            this.initBall(this.balls[i], curListId[i], curListState[i]);
        }
    }
    /**end of 动作 */

    checkFinish() {
        if (this.state["score"] >= this.config.model.config.targetScore) {
            //到果汁
            let state = this.cloneState();
            state["movement"] = "finish";
            this.updateState(state);
        }
    }

    /* UTILS */
    initBall(ball: fgui.GComponent, val: number, state: number) {
        let hasLeaf = (val % 2 !== 0);
        let srcId = val <= 2 ? 2 : 1;

        let packageName = this.config.pathConfig.packageName;
        let loader = ball.getChild("loader").asLoader;
        loader.url = `ui://${packageName}/apple${srcId}`;

        ball["val"] = val;
        ball.visible = state === 1;
        loader.alpha = state; //0-1

        if (state === 1) {
            ball.rotation = 0;
        }

        //leaf
        let leaf = ball.getChild("leaf");
        leaf.visible = hasLeaf;

        ball.getChild("selected1").visible = !hasLeaf;
        ball.getChild("selected2").visible = hasLeaf;
    }
    digitScore(score, len = 2) {
        let str = score.toFixed(0);
        while (str.length < len) {
            str = "0" + str;
        }
        return str;
    }
    isSelectBingo(ind) {
        let ballVal = this.config.model.config.balls[ind];
        let rightVal = this.config.model.config.expBall;
        return ballVal === rightVal;
    }
    getCCPos(obj: fgui.GObject) {
        return obj.localToGlobal(0, 0);
    }
    //寻找最近的触摸目标
    calcMinDisInd(pos, list) {
        let minDis = 40;
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
        return new Promise((resolve, reject) => {
            if (!this.feedback) {
                resolve(null);
                return;
            }
            if (this["feedbackRunning"]) {
                resolve(null);
                return;
            }
            this["feedbackRunning"] = 1;
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
                delete this["feedbackRunning"];
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
        this.schedule(this.dragSchedule, 0.3);
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
    public soundZhaZhi: cc.AudioClip = null;
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
