const { ccclass, property } = cc._decorator;
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;

//判断当前是否 角色==老师并且!=DemoMode。
let IsTeacherNotInDemo = function () {
    let { role, signalingModel } = window['GlobalData'].courseData;
    //如果是答案或者投放，老师不能操作。
    if (role == 0 && signalingModel != 1) {
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
export default class MutiSelectNums extends cc.Component {

    private _worldRoot: cc.Node; //FAIRY GUI
    private _view: fgui.GComponent; //FAIRY GUI

    config: any = null;
    canPickWrong: boolean = false;

    //场景装载器
    loader: fgui.GLoader = null;
    //具体的逻辑组件
    quePage: fgui.GComponent = null;
    //组件内部
    fishes: fgui.GComponent[] = [];
    wang: fgui.GComponent = null;
    wangPoint: fgui.GLoader = null;
    bottle: fgui.GObject = null;
    expFishes: fgui.GComponent[] = [];
    scoreTex: fgui.GRichTextField = null;
    touchPad: fgui.GButton = null;

    feedback: cc.Node = null;

    //喇叭
    labaPage: fgui.GComponent = null;

    medal: fgui.GComponent = null;

    dragging = false;
    dragPos: cc.Vec2 = new cc.Vec2();

    //todo:增加粒子
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
        if (cc.isValid( this.blocker )) {
            this.blocker.destroy();
            this.blocker = null;
        }
    }
    /**end of blocker */
    //before onLoad 初始化
    async init(data: any) {
        this.config = data;
        //配置初始化
        this.canPickWrong = this.config.model.config.canPickWrong;

        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;

        // let { answer, ae } = model.config;
        this._view = fgui.UIPackage.createObject(Package, model.uiPath).asCom;

        //获得loader
        this.loader = this._view.getChild("loader").asLoader;
        // let quePage = fgui.UIPackage.createObject(Package, model.uiPath).asCom;
        // this.loader.asCom.addChild( quePage );
        let packageName = this.config.pathConfig.packageName;
        this.loader.url = `ui://${packageName}/${model.loaderUiPath}`;
        this.quePage = this.loader.component;

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
        cc.log(this.loader);
        cc.log(this.quePage);
        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        let packageName = this.config.pathConfig.packageName;
        let modelConfig = this.config.model.config;

        //告示板上的鱼
        this.groupChildrenForEach(
            this.quePage.getChild("panel").asGroup,
            (obj: fgui.GObject, ind: number) => {
                let fish = obj.asCom;
                let selVal = modelConfig.examples[ind];
                let frameName = modelConfig.example_colors[ind];
                this.initFish(fish, selVal, frameName, false);
                this.expFishes.push(fish);
            }
        );

        //池塘里的鱼
        this.groupChildrenForEach(
            this.quePage.getChild("sel-group").asGroup,
            (obj: fgui.GObject, ind: number) => {
                let fish = obj.asCom;
                let selVal = modelConfig.sels[ind];
                let frameName = modelConfig.colors[ind];
                fish.visible = modelConfig.srcFishStateList[ind] === 1;

                this.initFish(fish, selVal, frameName, true);
                this.fishes.push(fish);
            }
        );

        //网
        this.wang = this.quePage.getChild("wang").asCom;
        this.wang["_originPosition"] = cc.v2(this.wang.x, this.wang.y);
        this.wangPoint = this.wang.getChild("fish_face").asLoader;

        //瓶子
        this.bottle = this.quePage.getChild("bottle");
        //score
        this.scoreTex = this.quePage.getChild("score_text").asRichTextField;

        //medal
        this.medal = this.quePage.getChild("medal").asCom;
        this.initState();
    }
    start() {
        //touchpad初始化
        this.touchPad = this.quePage.getChild("touchPad").asButton;
        this.touchPad["dragDis"] = 0;
        this.touchPad.on(fgui.Event.TOUCH_BEGIN, this.onDragStart, this);
        this.touchPad.on(fgui.Event.TOUCH_MOVE, this.onDragMove, this);
        this.touchPad.on(fgui.Event.TOUCH_END, this.onDragEnd, this);
    }

    onDragStart(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        //do nothing
        if (this.blocked > 0) {
            return;
        }
        this.dragging = true;
        this.touchPad["dragDis"] = 0;

        let state = this.cloneState();
        state["movement"] = "grap";
        state["wangPos"] = [];
        this.updateState(state);
        // this.addIntervalDispatcher("wangPos", 0.4);

        this.dragPos.x = this.wang.x;
        this.dragPos.y = this.wang.y;
    }
    onDragMove(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        if (this.blocked > 0) {
            return;
        }
        let delta = evt.touch.getDelta();
        delta.y *= -1;
        this.touchPad["dragDis"] += Math.abs(delta.x) + Math.abs(delta.y);
        let tp = cc.v2(this.wang.x, this.wang.y);
        tp.addSelf(delta);
        if (tp.x > 1520) {
            tp.x = 1520;
        }
        else if (tp.x < -400) {
            tp.x = -400;
        }

        if (tp.y > 1080) {
            tp.y = 1080;
        }
        else if (tp.y < 0) {
            tp.y = 0;
        }

        // let state = this.cloneState();
        // state["wangPos"] = [tp.x, tp.y];
        // this.updateState(state);

        // this._state["wangPos"] = [tp.x, tp.y];
        this.wang.x = tp.x;
        this.wang.y = tp.y;
        this.dragPos.x = Math.floor(tp.x);
        this.dragPos.y = Math.floor(tp.y);
    }
    // 临时
    // 拖拽定时器
    dragSchedule() {
        if (this.dragging) {
            let state: any = globalThis._.cloneDeep(this._state);
            state["movement"] = "moving";
            state["wangPos"] = [
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
        this.dragging = false;
        // this.delIntervalDispatcher("wangPos");

        let state = this.cloneState();
        state["wangPos"] = [];
        if (this.touchPad["dragDis"] < 50) {
            if (this.config.model.config.canShowTip) {
                state["movement"] = "tip";
                //查看点击的鱼。
                let floc = evt.pos;
                let list = this.fishes;
                let targetList = 1;
                let selInd = this.calcMinDisFishInd(floc, list);
                if (selInd === -1) {
                    list = this.expFishes;
                    targetList = 2;
                    selInd = this.calcMinDisFishInd(floc, list);
                }

                if (selInd !== -1) {
                    let fish = list[selInd];
                    if (fish["selVal"][1] == "2") {
                        state["curClick"] = selInd;
                        state["curClickIsTip"] = targetList;
                    }
                }
            }
        }
        else {
            //查看结果
            let wangPos = this.getCCPos(this.wangPoint);
            let selInd = this.calcMinDisFishInd(wangPos, this.fishes);

            // //没有选择，返回，并不发送消息
            if (selInd === -1) {
                state["movement"] = "back";
            }
            else {
                state["movement"] = "shot";
                state["curClick"] = selInd;
                //是否获取错误答案。
                //正确
                let bingo = this.isSelectBingo(selInd);
                if (bingo) {
                    state["curClickIsRight"] = 1;
                    state["fishStateList"][selInd] = 0;
                    state["score"]++;
                }
                //错误
                else {
                    state["curClickIsRight"] = 0;
                    if (this.canPickWrong) {
                        state["fishStateList"][selInd] = 0;
                    }
                }
            }
        }

        this.updateState( state );
    }


    refreshPage(state: any) {
        //分数
        this.scoreTex.text = this.digitScore(state["score"]);

        //鱼状态
        for (let i = 0; i < this.fishes.length; i++) {
            for (let i = 0; i < this.fishes.length; i++) {
                this.fishes[i].visible =
                    (this.config.model.config.srcFishStateList[i] === 1 && state["fishStateList"][i] === 1);
            }
        }

        //金牌状态
        this.medal.alpha = state["medal"];
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
            case "grap":
                if (this.hasChange("wangPos") && state["wangPos"].length > 0) {
                    this.actMove();
                }
                break;
            case "moving":
                if (this.hasChange("wangPos") && state["wangPos"].length > 0) {
                    this.actMove();
                }
                break;
            case "shot":
                //当前点击（动画）
                if (state["curClick"] !== -1) {
                    if (this.canPickWrong) {
                        //不管对错。抓鱼。
                        //抓鱼。
                        let fishInd = state["curClick"];
                        this.actCatch(fishInd);
                    }
                    else {
                        if (state["curClickIsRight"]) {
                            //抓鱼。
                            let fishInd = state["curClick"];
                            this.actCatch(fishInd);
                        }
                        else {
                            //错。抓鱼。
                            let fishInd = state["curClick"];
                            this.actWrong(fishInd);
                        }
                    }
                }
                break;
            case "back":
                this.actBack();
                break;
            case "tip":
                if (state["curClickIsTip"] !== -1) {
                    this.actTip( state["curClick"], state["curClickIsTip"] );
                }
                break;
            case "finish":
                if (state["medal"] == 1) {
                    this.actMedal();
                }
                break;
            case "laba":
                this.actLaba();
                break;
        }
    }
    //步骤动作-----------
    actMove(noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            let tp = cc.v2(this.state["wangPos"][0], this.state["wangPos"][1]);
            let bp = cc.v2(this.wang.x, this.wang.y);
            let distance = tp.sub( bp ).mag();
            if( distance < 50 ) {
                this.wang.x = tp.x;
                this.wang.y = tp.y;
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
                let time = Math.min( 0.3, distance/1000 );
                this.createStep(
                    cc.tween(this.wang)
                        .to(time, { x: tp.x, y: tp.y })
                    ,
                    step
                );
            }
        });
    }
    actLaba(noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked ++;
            let playingId = this.playSound("soundInfo");
            let aniFadeOut = this.labaPage.getTransition("fadeOut");
            let aniFadeIn = this.labaPage.getTransition("click");
            //动画后
            let step = () => {
                this.blocked --;
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
    actTip( selInd:number, listId:number,  noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked ++;
            let list = null;
            switch ( listId ) {
                case 1:
                    list = this.fishes;
                    break;
                case 2:
                    list = this.expFishes;
                    break;
            }
            if( !list || selInd === -1) {
                resolve(null);
                return;
            }

            let fish = list[selInd];
            //动画后
            let step = () => {
                this.blocked --;
                this.resetState("movement", "curClick", "curClickIsTip");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                fish.getTransition("click").play();
                this.createStep(
                    cc.tween(this.wang)
                        .to(1.5, { x: this.wang["_originPosition"].x, y: this.wang["_originPosition"].y }, { easing: "sineInOut" }),
                    step
                );
            }
        });
    }
    actBack(noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked ++;
            this.wang.getTransition("catched").stop();
            this.wangPoint.visible = false;
            //动画后
            let step = () => {
                this.blocked --;
                this.wang.x = this.wang["_originPosition"].x;
                this.wang.y = this.wang["_originPosition"].y;
                this.wangPoint.visible = false;
                this.resetState("movement", "curClick", "curClickIsRight");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                this.createStep(
                    cc.tween(this.wang)
                        .to(0.5, { x: this.wang["_originPosition"].x, y: this.wang["_originPosition"].y }, { easing: "sineInOut" }),
                    step
                );
            }
        });
    }
    actWrong(fishInd: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked ++;
            this.wang.getTransition("catched").stop();
            this.wangPoint.visible = false;
            let soundId = -1;
            //动画后
            let step = () => {
                this.blocked --;
                this.wang.x = this.wang["_originPosition"].x;
                this.wang.y = this.wang["_originPosition"].y;
                this.stopSound(soundId);
                this.resetState("movement", "curClick", "curClickIsRight");
                this.wangPoint.visible = false;
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                soundId = this.playSound("soundErr");
                //动画
                this.createStep(
                    cc.tween(this.wang)
                        .to(0.5, { x: this.wang["_originPosition"].x, y: this.wang["_originPosition"].y }, { easing: "sineInOut" }),
                    step
                );
            }
        });
    }
    actCatch(fishInd: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let fish = this.fishes[fishInd].asCom;
            let minDis = this.wang.node.position.sub(fish.node.position).mag();
            let soundId = -1;
            //动画后
            let step = (noAni) => {
                this.blocked--;
                fish.visible = false;
                this.stopSound(soundId);
                this.actBack(noAni);
                this.resetState("movement", "curClick", "curClickIsRight");
                this.checkFinish();
                resolve(null);
            };

            if (noAni) {
                step(noAni);
            }
            else {
                //动画
                this.createStep(
                    cc.tween(this.wang)
                        .to(minDis / 1000, { x: fish.x - this.wang.width, y: fish.y - this.wang.height / 2 }, { easing: "sineInOut" })
                        .call(() => {
                            let catchAni = this.quePage.getTransition("catch");
                            catchAni.play();
                            soundId = this.playSound("soundWater");
                        })
                        .delay(.8)
                        .call(() => {
                            //抓到鱼了。
                            fish.visible = false;
                            this.wangPoint.url = fish.getChild("face").asLoader.url;
                            this.wangPoint.visible = true;
                            let catchedAni = this.wang.getTransition("catched");
                            catchedAni.play();
                        })
                        .delay(.8)
                        .then(cc.spawn(
                            cc.jumpTo(1.3, this.bottle.x - this.wang.width, this.bottle.y - this.wang.height, -300, 1).easing(cc.easeInOut(1.3)),
                            cc.rotateTo(1.3, -20) //action不能用在fgui的节点中。
                        ))
                        .delay(.3)
                        .call(() => {
                            //bollet动画。
                            this.quePage.getTransition("bottle").play();
                            //分数refresh
                            this.scoreTex.text = this.digitScore(this.state["score"]);
                        }),
                    step
                );
            }
        });
    }
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
                    cc.tween(this.wang)
                        .delay(0.75)
                    ,
                    step
                );
            }
        });
    }
    //end of 步骤动作-----------


    initState() //override 
    {
        // 初始化state
        Object.assign(this._state, {
            movement: "idle",
            medal: 0,
            score: 0,
            fishStateList: new Array(this.fishes.length).fill(1),
            curClick: -1,
            curClickIsRight: -1,
            curClickIsTip: -1, //1-鱼池里的鱼， 2-示例里的鱼。
            wangPos: [],
        });

        this._stateInited = true;
        this._originState = {};
        Object.assign(this._originState, this._state);
    }
    checkFinish() {
        if (this.state["score"] === this.config.model.config["targetScore"]) {
            // gameover
            cc.log("game over!");

            this.answerFeedback(true).then(() => {
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
    isSelectBingo(fishInd) {
        let val = this.config.model.config.sels[fishInd];
        let rightSels = this.config.model.config.rightSels;
        for (let i = 0; i < rightSels.length; i++) {
            if (val === rightSels[i]) {
                return true;
            }
        }
        return false;
    }
    getCCPos(obj: fgui.GObject) {
        return obj.localToGlobal(0, 0);
        // let wp = obj.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        // return this.node.convertToNodeSpaceAR(wp);
    }
    //includeExp:是否包括上面例子的鱼
    calcMinDisFishInd(pos, fishList) {
        let minDis = 9999;
        let selInd = -1;
        for (let i = 0; i < fishList.length; i++) {
            let fish = fishList[i];
            if (!fish.visible) { //不显示的鱼不判断。
                continue;
            }

            let fishPos = this.getCCPos(fish);
            let dis = pos.sub(fishPos).mag();
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

    initFish(fish: fgui.GComponent, val: string, frameName: string, inWater: boolean) {
        if (inWater) {
            //落水
            // let waveLoopAni = fish.getTransition("loop");
            // waveLoopAni.play();
        }
        else {
            let waveLoopAni = fish.getTransition("loop");
            waveLoopAni.stop();
            fish.getChild("wave").visible = false;
        }
        let t1 = fish.getChild("t1").asTextField;
        let t2 = fish.getChild("t2").asTextField;
        let t3 = fish.getChild("t3").asTextField;
        t1.text = val[0];
        t2.text = val[1];
        t3.text = val[2];

        let packageName = this.config.pathConfig.packageName;
        fish.getChild("face").asLoader.url = `ui://${packageName}/${frameName}`;

        fish["selVal"] = val;
        fish["inWater"] = inWater;
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
    public soundWater: cc.AudioClip = null;
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
