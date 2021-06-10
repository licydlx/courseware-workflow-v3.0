
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;


const { ccclass, property } = cc._decorator;


@ccclass
export default class PlaceGame extends cc.Component {

    feedBackCount = 0;

    @property(cc.Node)
    uiHandle: cc.Node = null;
    ui: any = null;

    @property(cc.Node)
    labaHandle: cc.Node = null;
    laba: any = null;

    config: any = null;

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
        if (!cc.isValid(this.blocker)) {
            this.blocker = new cc.Node('handleMask');
            this.blocker.addComponent(cc.BlockInputEvents);
            cc.find("Canvas").parent.addChild(this.blocker);
            this.blocker.width = 1920;
            this.blocker.height = 1080;
            this.blocker.x = 960;
            this.blocker.y = 540;
        }
    }

    // 消除禁止
    disableForbidHandle() {
        if (cc.isValid(this.blocker)) {
            this.blocker.destroy();
            this.blocker = null;
        }
    }
    /**end of blocker */

    async init(data: any) {
        this.config = data;

        let { pathConfig, model, components } = data;
        let packageName = pathConfig.packageName;

        let uiPrefab = await loadResource(model.uiPath, cc.Prefab);
        let uiNode = cc.instantiate(uiPrefab);
        this.uiHandle.addChild(uiNode);
        this.ui = uiNode.getComponent(cc.Component);

        //如果有ImagePath，做一个喇叭
        if (this.ui.labaFrame) {
            let labaPrefab = await loadResource("laba", cc.Prefab);
            let labaNode = cc.instantiate(labaPrefab);
            this.uiHandle.addChild(labaNode);
            this.laba = labaNode.getComponent(cc.Component);
        }

        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
        this.initUI();
    }
    onLoad() {
        this.initState();
    }
    onDestroy() {
        if (this.blocked) {
            this.blocked = 0;
        }
        this.stopAllSound();
    }
    initState() {
        if (this._stateInited) {
            return;
        }
        Object.assign(this._state, {
            //当前动作
            movement: "idle", // 0-idle, 1-drag
            idList: this.config.model.config.srcIdList.slice(),
            dragInd: -1,
            dragId: 0,
            dragPos: [],
        });

        this._stateInited = true;
        this._originState = {};
        Object.assign(this._originState, this._state);
    }
    initUI() {
        if (this.ui.labaFrame) {
            this.laba.setFrame(this.ui.labaFrame);
            this.laba.node.on("click", this.onClickLaba, this);
        }
        //UI的操作。
        this.ui.node.on("onClickSubmit", this.onUiSubmit, this);
        this.ui.node.on("onGrap", this.onGrap, this);
        this.ui.node.on("onDragging", this.onDragging, this);
        this.ui.node.on("onDrop", this.onDrop, this);
    }
    //拾起
    onGrap(ind: number) {
        let state = this.cloneState();
        let id = state["idList"][ind];

        if (id === 0 || ind === -1) {
            return;
        }
        this.playClip(this.ui.soundDrag);


        state["movement"] = "grap";
        state["dragId"] = id;
        state["dragInd"] = ind;
        state["idList"][ind] = 0;
        state["dragPos"] = [
            this.ui.dragPos.x,
            this.ui.dragPos.y
        ];

        this.updateState(state);
    }
    //拖动
    onDragging() {
    }

    onClick() {
        // this.playClip( this.ui.soundClick );
        //如果是点击，则把物体返回到原来的SOLT
        let state = this.cloneState();
        state["movement"] = "drop";
        let dragId = state["dragId"];
        let dragInd = state["dragInd"];

        state["dragId"] = 0;
        state["dragInd"] = -1;

        let tarInd = dragId - 1; //id-1 == 拿起物体的原来位置。
        state["idList"][dragInd] = 0;
        state["idList"][tarInd] = dragId;
        this.updateState(state);
    }
    //放下
    onDrop(item: cc.Node) {
        let itemCount = this.config.model.config.itemCount;

        let dragPos = this.ui.dragPos;
        let dragDv = this.ui.dragDv;
        let soltList = this.ui.soltList;
        //碰撞SOLT
        let state = this.cloneState();
        state["movement"] = "drop";
        let dragId = state["dragId"];
        let dragInd = state["dragInd"];

        if (dragId === 0 || dragInd === -1) {
            return;
        }

        //点击
        if (dragDv < 50) {
            this.onClick();
            return;
        }


        this.playClip(this.ui.soundDrag);
        state["dragId"] = 0;
        state["dragInd"] = -1;

        //检查是否放在backSolt 上，如果放了，就触发返回原位。
        if (this.contactSolt(this.ui.backSolt, dragPos)) {
            let tarInd = dragId - 1; //id-1 == 拿起物体的原来位置。
            state["idList"][dragInd] = 0;
            state["idList"][tarInd] = dragId;
        }
        else {
            let has = false;
            for (let i = 0; i < soltList.length; i++) {
                let solt = soltList[i];
                if (this.contactSolt(solt, dragPos)) {
                    has = true;
                    let tarSoltId = state["idList"][i];
                    if (tarSoltId !== 0) {
                        //替换。

                        //Ind是目标solt Ind
                        if (i >= itemCount) {
                            state["idList"][i] = dragId;
                        }
                        else {
                            state["idList"][dragId - 1] = dragId;
                        }

                        //Ind是目标solt Ind
                        if (dragInd >= itemCount) {
                            state["idList"][dragInd] = tarSoltId;
                        }
                        else {
                            state["idList"][tarSoltId - 1] = tarSoltId;
                        }
                    }
                    else {
                        state["idList"][i] = dragId;
                    }
                    break;
                }
            }

            //没有拖到solt里，放回原来的SOLT
            if (!has) {
                state["idList"][dragInd] = dragId;
            }
        }

        this.updateState(state);
    }

    contactSolt(solt: cc.Node, pos: cc.Vec2): boolean {
        let box = solt.getBoundingBoxToWorld();
        return box.contains(pos);
    }

    refresh(oldState: any, state: any) {
        if (cc.isValid(this.ui)) {
            this.ui.refresh(oldState, state);
        }

        switch (state["movement"]) {
            case "submit":
                {
                    if (this.feedBackCount > 0) {
                        return;
                    }
                    let right = this.checkFinish();
                    this.feedBackCount++;
                    this.answerFeedback(right).then(() => {
                        this.feedBackCount--;
                    });
                    let state = this.cloneState();
                    state["movement"] = "idle";
                    this.updateState(state);
                    setTimeout(() => {
                        this.playClip(this.ui.soundClick);
                    }, 20);
                }
                break;
            case "laba":
                {
                    this.actLaba();
                    let state = this.cloneState();
                    state["movement"] = "idle";
                    this.updateState(state);
                }
                break;
        }
    }

    actLaba(noAni = false) {
        return new Promise((resolve, reject) => {
            //动画前
            this.blocked++;
            let playingId = this.playClip(this.ui.soundInfo);
            //动画后
            let step = () => {
                this.blocked--;
                this.stopSound(playingId);
                this.resetState("movement");
                resolve(null);
            };
            if (noAni) {
                step();
            }
            else {
                //动画
                this.laba.in();
                this.createStep(
                    cc.tween(this.node)
                        .delay(this.ui.labaTime)
                        .call(() => {
                            this.laba.out();
                        })
                        .delay(0.25)
                    ,
                    step
                );
            }
        });
    }

    //提交
    onUiSubmit() {
        if (this.checkEmpty()) {
            this.playClip(this.ui.soundClick);
            //显示提示。提示不予状态同步，只前端显示。
            this.ui.showTip();
            this.blocked++;
            this.ui.node.once("onTipFinish", () => {
                this.blocked--;
            }, this);
            return;
        }

        let state = this.cloneState();
        state["movement"] = "submit";
        this.updateState(state);
    }
    //点击喇叭
    onClickLaba() {
        let state = this.cloneState();
        state["movement"] = "laba";
        this.updateState(state);
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

    checkEmpty() {
        let itemCount = this.config.model.config.itemCount;

        let idList = this.state["idList"];
        //检查答案是否空
        let soltedList = idList.slice(itemCount);
        let sum = 0;
        soltedList.forEach(item => {
            sum += item;
        });
        return (sum == 0);
    }
    checkFinish() {
        let idList = this.state["idList"];
        //* 注意，这里的列表是二维数组。每一行都是一种答案
        let dstIdList = this.config.model.config.dstIdList;
        for (let i = 0; i < dstIdList.length; i++) {
            let list = dstIdList[i];
            if (globalThis._.isEqual(this.state["idList"], list)) {
                return true;
                break;
            }
        }
        return false;
    }

    //** todo: 工具，统一的方法，成员，抽取出来 */

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


    // 临时
    // 拖拽定时器
    dragSchedule() {
        if (cc.isValid(this.ui) && this.ui.dragging) {
            let state: any = globalThis._.cloneDeep(this._state);
            state["movement"] = "drag";
            state["dragPos"] = [
                this.ui.dragPos.x,
                this.ui.dragPos.y
            ];
            this.updateState(state);
        }
    }

    //todo: 功能整合在sound_mgr.ts
    protected _playingList: Map<number, cc.AudioClip> = new Map();

    playClip(clip) {
        let id = cc.audioEngine.play(clip, false, 1);
        this._playingList.set(id, clip);

        cc.audioEngine.setFinishCallback(id, () => {
            if (this._playingList.has(id)) {
                this._playingList.delete(id);
            }
        });
        return id;
    }
    stopSound(tarId) {
        cc.audioEngine.stop(tarId);
        this._playingList.delete(tarId);
    }
    stopClip(clip) {
        let tarId = -1;
        this._playingList.forEach((cp, id) => {
            if (clip === cp) {
                tarId = id;
                return false;
            }
        });
        this.stopSound(tarId);
    }

    stopAllSound() {
        this._playingList.forEach((cp, id) => {
            cc.audioEngine.stop(id);
        });
        this._playingList.clear();
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

