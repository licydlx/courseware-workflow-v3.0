import controller_model02 from "../../../prefabLibrary/controllers/controller-model02/scripts/controller-model02";

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


var utils = {
    uniquePush(arr, cell) {
        if (utils.has(arr, cell)) {
            return;
        }
        arr.push(cell);
    },
    has(arr, cell) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === cell) {
                return true;
            }
        }
        return false;
    },
    findInd(arr, cell) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === cell) {
                return i;
            }
        }
        return -1;
    },
    match(arr1, arr2) {
        let changed = {
            add: [],
            del: []
        };
        for (let i = 0; i < arr2.length; i++) {
            let ind = utils.findInd(arr1, arr2[i]);
            if (ind === -1) {
                //新增的
                changed.add.push(arr2[i]);
            }
        }
        for (let i = 0; i < arr1.length; i++) {
            let ind = utils.findInd(arr2, arr1[i]);
            if (ind === -1) {
                //删除的
                changed.del.push(arr2[i]);
            }
        }
        return changed;
    }
};

@ccclass
export default class EncircleNums extends cc.Component {
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
    dragPos: cc.Vec2 = new cc.Vec2();

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
    tipBalls: fgui.GComponent[] = [];
    handles: fgui.GObject[] = [];

    ballSelectedInd: number[] = []
    ballSelected: fgui.GComponent[] = [];

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

        let scope = this;
        //hack，修改切换页面逻辑。
        try {
            let model02 = cc.director.getScene().getChildByName("controller-model02").getComponent(controller_model02);
            model02["oldOnJumpConfig"] = model02.onJumpConfig;
            model02.onJumpConfig = async (toPage: any) => {
                if (cc.isValid(scope)) {
                    scope.onJump();
                }

                let fadeTime = 0.3;
                let page: number = toPage - 1;
                let chapter: any = model02._configJson.chapters[page];

                // fgui.GRoot.inst.removeChildren(0, -1, true);

                let prefab: any = model02._pagePrefabs[page];
                let node: any = cc.instantiate(prefab);
                let nodeJs = node.getComponent(cc.Component);
                nodeJs.init({ pathConfig: model02._configJson.pathConfig, model: chapter.model, components: chapter.components });
                node.parent = model02.node;

                model02._currentPageNode = node;
                node.opacity = 0;
                node.runAction(cc.fadeIn(fadeTime));
                model02.resetPanel();
                // 当前页面 state 快照
                window['GlobalData'].courseData.stateShoot = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
                // model02.recoverState();

            }
        } catch (e) {
            console.log("hack fail, ", e);
        }

    }
    onJump() {
        this.node.removeComponent(EncircleNums);
        window["prevPageNode"] = this.node;

        let model02 = cc.director.getScene().getChildByName("controller-model02").getComponent(controller_model02);
        model02.onJumpConfig = model02["oldOnJumpConfig"];
        delete model02["oldOnJumpConfig"];
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

            let val = modelConfig.vals[ind];
            ball.getChild("text").asTextField.text = val;
            ball["val"] = val;
            ball["ind"] = ind;
            ball["_originColor"] = ball.getChild("text").asTextField.color.clone();
            this.balls.push(ball);
            this.tipBalls.push(ball);
        };
        this.groupChildrenForEach(
            this.quePage.getChild("textGroup").asGroup,
            lineBall
        );

        this.groupChildrenForEach(
            this.quePage.getChild("expGroup1"),
            (obj: fgui.GObject, ind: number) => {
                let ball = obj.asCom;
                let val = modelConfig.expVals[0][ind];
                ball.getChild("text").asTextField.text = val;
                ball["val"] = val;
                this.tipBalls.push(ball);
            }
        );
        this.groupChildrenForEach(
            this.quePage.getChild("expGroup2"),
            (obj: fgui.GObject, ind: number) => {
                let ball = obj.asCom;
                let val = modelConfig.expVals[1][ind];
                ball.getChild("text").asTextField.text = val;
                ball["val"] = val;
                this.tipBalls.push(ball);
            }
        );

        //handles
        this.groupChildrenForEach(
            this.quePage.getChild("handles"),
            (obj: fgui.GObject, ind: number) => {
                obj["_originPosition"] = cc.v2(obj.x, obj.y);
                this.handles.push(obj);
            }
        );

        //touchpad
        this.touchPad = this.quePage.getChild("touchPad").asButton;

        //立即刷新一次
        let state = this.cloneState();
        state["handleStates"][0] = 1;
        state["movement"] = "";
        this.updateState(state);
    }
    initState() {
        Object.assign(this._state, {
            movement: "idle",
            curHandleInd: 0,
            handleStates: [0, 0, 0], //visible
            handlePos: [-1, -1, -1],
            tileStates: new Array(21).fill(0),
            tilePoped: -1,
            curVec2: [0, 0],
        });
        this._stateInited = true;
        this._originState = {};
        Object.assign(this._originState, this._state);
    }
    get prevHandle() {
        return this.handles[this._prevState.curHandleInd];
    }
    get curHandle() {
        return this.handles[this.state.curHandleInd];
    }

    start() {
        //touchpad初始化
        this.touchPad["dragDis"] = 0;
        this.touchPad.on(fgui.Event.TOUCH_BEGIN, this.onDragStart, this);
        this.touchPad.on(fgui.Event.TOUCH_MOVE, this.onDragMove, this);
        this.touchPad.on(fgui.Event.TOUCH_END, this.onDragEnd, this);
    }

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
        // this.addIntervalDispatcher("curVec2", 0.3);

        let curHandle = this.curHandle;
        if (curHandle) {
            let pos = cc.v2(curHandle.x, curHandle.y);
            this.dragPos.x = pos.x;
            this.dragPos.y = pos.y;
            let state = this.cloneState();
            state["movement"] = "grap";
            state["curVec2"] = [
                this.dragPos.x,
                this.dragPos.y
            ];
            this.updateState(state);
        }
    }
    onDragMove(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        if (this.blocked > 0) {
            return;
        }
        if (!this.dragging) {
            return;
        }
        //更容易做的方案：限制X轴548 - 1104
        //移动curHandle
        let curHandle = this.curHandle;
        if (curHandle) {
            let delta = evt.touch.getDelta();
            delta.y *= -1;

            this.touchPad["dragDis"] += Math.abs(delta.x) + Math.abs(delta.y);

            let pos = cc.v2(curHandle.x, curHandle.y);
            pos.addSelf(delta);
            if (pos.x < 548) {
                pos.x = 548;
            }
            else if (pos.x > 1104) {
                pos.x = 1104;
            }
            if (pos.y < 0) {
                pos.y = 0;
            }
            else if (pos.y > 1080) {
                pos.y = 1080;
            }

            // state["curVec2"][0] = pos.x;
            // state["curVec2"][1] = pos.y;
            // this.state = state;

            // this._state["curVec2"] = [pos.x, pos.y];
            curHandle.x = pos.x;
            curHandle.y = pos.y;

            this.dragPos.x = pos.x;
            this.dragPos.y = pos.y;

        }
    }
    // 临时
    // 拖拽定时器
    dragSchedule() {
        if (this.dragging) {
            let state = this.cloneState();
            state["movement"] = "moving";
            state["curVec2"] = [
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
        if (!this.dragging) {
            return;
        }
        this.dragging = false;
        // this.delIntervalDispatcher("curVec2");

        let state = this.cloneState();

        let curHandle = this.curHandle;
        let handleInd = state["curHandleInd"];

        if (curHandle) {
            if (this.touchPad["dragDis"] < 50) {
                //寻找点击的
                let selInd = this.calcMinDisInd(evt.pos, this.tipBalls);
                if (selInd !== -1) {
                    let ball = this.tipBalls[selInd];
                    if (ball["val"] == 3) {
                        state["tilePoped"] = selInd;
                        state["movement"] = "tip";
                    }
                }
                this.updateState(state);
            }
            else {
                let pos = cc.v2(state["curVec2"][0], state["curVec2"][1]);
                let selInd = this.calcMinDisInd(pos, this.tipBalls);
                if (selInd !== -1) {
                    if (this.isSelectBingo(selInd)) {
                        //吸附
                        state["movement"] = "shot";
                        state["curHandleInd"]++; //分数+
                        let handleInd = state["curHandleInd"];
                        if (handleInd < state["handleStates"].length) {
                            state["handleStates"][handleInd] = 1;
                        }
                    }
                    else {
                        if (this.canPickWrong) {
                            //吸附
                            state["movement"] = "attach";
                        }
                        else {
                            state["movement"] = "wrong";
                        }
                    }
                }
                else {
                    //如果没有吸附对象，返回
                    state["movement"] = "back";
                }
                if (state["handlePos"][handleInd] !== selInd) {
                    state["handlePos"][handleInd] = selInd;
                }
                this.updateState(state);
            }
        }

    }
    calcWaterHeight(curHandleInd) {
        let percent = (curHandleInd / this.config.model.config.targetScore);
        return 180 - (180 * percent);
    }

    refreshPage(state: any) {
        state = state || this.state;

        let visibleList = state["handleStates"];
        for (let i = 0; i < visibleList.length; i++) {
            let handle = this.handles[i];
            handle.visible = visibleList[i];
            if (state["handlePos"][i] == -1) {
                let op = handle["_originPosition"];
                handle.x = op.x;
                handle.y = op.y;
            }
            else {
                let ball = this.balls[state["handlePos"][i]];
                let tp = cc.v2(ball.x, ball.y);
                handle.x = tp.x;
                handle.y = tp.y;
            }
        }

    }

    refresh(oldState: any, state: any) { //override
        switch (state["movement"]) {
            case "":
                this.resetState("movement");
                break;
            case "idle":
                this.refreshPage(state);
                break;
            case "grap":
                this.playSound("soundClick");
                if (this.hasChange("curVec2")) {
                    this.actMove();
                }
                break;
            case "moving":
                if (this.hasChange("curVec2")) {
                    this.actMove();
                }
                break;
            case "back":
                this.actBack(state["curHandleInd"]);
                break;
            case "tip":
                this.actPop(state["tilePoped"])
                break;
            case "attach":
                this.actAttach(state["curHandleInd"], state["handlePos"][state["curHandleInd"]]);
                break;
            case "shot":
                this.actRight(oldState["curHandleInd"], state["handlePos"][oldState["curHandleInd"]]);
                this.refreshPage(state);
                break;
            case "wrong":
                this.actWrong(state["curHandleInd"]);
                break;
            case "finish":
                this.refreshPage(state);
                break;
            case "laba":
                this.actLaba();
                break;
        }
    }

    /**动作 */
    actMove(noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            let curHandle = this.curHandle;
            if (!curHandle) {
                resolve(null);
                return;
            }

            let tp = cc.v2(this.state["curVec2"][0], this.state["curVec2"][1]);
            let bp = cc.v2(curHandle.x, curHandle.y);
            if (tp.sub(bp).mag() < 50) {
                curHandle.x = tp.x;
                curHandle.y = tp.y;
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
                this.createStep(
                    cc.tween(curHandle)
                        .to(0.3, { x: tp.x, y: tp.y })
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
    //
    actPop(selInd: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let ball = this.tipBalls[selInd];
            //动画后
            let step = () => {
                this.blocked--;
                ball.asCom.getTransition("pop").stop();
                // ball.getChild("text").asTextField.color = ball["_originColor"];

                this.resetState("movement", "tilePoped");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                ball.asCom.getTransition("pop").play();
                this.createStep(
                    cc.tween(ball)
                        .delay(1.5)
                    ,
                    step
                );
            }
        });
    }
    //跟shot类似，但是没有分数增加。
    actAttach(handleInd: number, ballInd, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let handle = this.handles[handleInd];
            let tp = cc.v2();
            if (ballInd !== -1) {

                let ball = this.balls[ballInd];
                tp = cc.v2(ball.x, ball.y);
            }
            else {
                tp = handle["_originPosition"];
            }
            //动画后
            let step = () => {
                this.blocked--;
                //当下一个事件来临，无需回到目标位置，
                // handle.x = tp.x;
                // handle.y = tp.y;
                //idle
                this.resetState("movement");
                this.checkFinish();
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                let dis = tp.sub(cc.v2(handle.x, handle.y)).mag();
                this.createStep(
                    cc.tween(handle)
                        .to(dis / 1000, { x: tp.x, y: tp.y })
                    ,
                    step,
                    "attach"
                );
            }
        });
    }
    actRight(handleInd: number, ballInd, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let handle = this.handles[handleInd];
            let tp = cc.v2();
            if (ballInd !== -1) {

                let ball = this.balls[ballInd];
                tp = cc.v2(ball.x, ball.y);
            }
            else {
                tp = handle["_originPosition"];
            }
            //动画后
            let step = () => {
                this.blocked--;
                handle.x = tp.x;
                handle.y = tp.y;
                //idle
                this.resetState("movement");
                this.checkFinish();
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                let dis = tp.sub(cc.v2(handle.x, handle.y)).mag();
                this.createStep(
                    cc.tween(handle)
                        .to(dis / 1000, { x: tp.x, y: tp.y })
                    ,
                    step,
                    "right-attach"
                );
            }
        });
    }
    actBack(handleInd: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let handle = this.handles[handleInd];
            let op = handle["_originPosition"];
            //动画后
            let step = () => {
                this.blocked--;
                handle.x = op.x;
                handle.y = op.y;
                //idle
                this.resetState("movement");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                this.createStep(
                    cc.tween(handle)
                        .to(0.3, { x: op.x, y: op.y })
                    ,
                    step,
                    "back"
                )
            }
        });
    }
    actWrong(handleInd: number, noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let handle = this.handles[handleInd];
            let op = handle["_originPosition"];
            let soundId = -1;
            //动画后
            let step = () => {
                this.blocked--;
                handle.x = op.x;
                handle.y = op.y;
                this.stopSound(soundId);
                //idle
                // this.resetState("movement");
                let state = this.cloneState();
                state["handlePos"][handleInd] = -1;
                state["movement"] = "idle";
                this.updateState(state);

                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                this.createStep(
                    cc.tween(handle)
                        .call(() => {
                            this.playSound("soundErr");
                        })
                        .to(0.3, { x: op.x, y: op.y })
                    ,
                    step,
                    "wrong"
                )
            }
        });
    }
    update(dt) {
        if (1) {
            let selectInd = [];
            for (let i = 0; i < this.handles.length; i++) {
                let handle = this.handles[i];
                let np = cc.v2(handle.x, handle.y);
                let selInd = this.calcMinDisInd(np, this.balls);
                if (selInd !== -1) {
                    utils.uniquePush(selectInd, selInd);
                    utils.uniquePush(selectInd, selInd + 1);
                    utils.uniquePush(selectInd, selInd + 2);
                }
            }

            if (this.ballSelectedInd !== selectInd) {
                this.ballSelectedInd = selectInd;
                for (let i = 0; i < this.ballSelected.length;) {
                    let bs = this.ballSelected[i];
                    let _ind = utils.findInd(selectInd, bs["ind"]);
                    if (_ind === -1) {//寻找退出
                        bs.getChild("back").alpha = 0;
                        this.ballSelected.splice(i, 1);
                    }
                    else {
                        selectInd.splice(_ind, 1);
                        i++;
                    }
                }

                //寻找进入
                for (let i = 0; i < selectInd.length; i++) {
                    let ind = selectInd[i];
                    if (ind !== -1) {
                        let ball = this.balls[ind];
                        ball.getChild("back").alpha = 1;
                        this.playSound("soundTick");
                        this.ballSelected.push(ball);
                    }
                }
            }
        }
    }

    /**end of 动作 */
    checkFinish() {
        if (this.state["curHandleInd"] >= this.config.model.config.targetScore) {
            // gameover
            cc.log("game over!");
            this.answerFeedback(true).then(() => {
                let state = this.cloneState();
                state["movement"] = "finish";
                this.updateState(state);
            });
        }
    }

    /* UTILS */
    digitScore(curHandleInd, len = 2) {
        let str = curHandleInd.toFixed(0);
        while (str.length < len) {
            str = "0" + str;
        }
        return str;
    }
    isSelectBingo(selInd: number) {
        let bingos = this.config.model.config.bingoInd;
        let handlePos = this.state["handlePos"]

        return (utils.has(bingos, selInd) && !utils.has(handlePos, selInd));
    }
    getCCPos(obj: fgui.GObject) {
        return obj.localToGlobal(0, 0);
    }
    //寻找最近的触摸目标
    calcMinDisInd(pos, list) {
        let minDis = 100;
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
        this.refresh(this._prevState, this._state);

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
    public soundTick: cc.AudioClip = null;
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
