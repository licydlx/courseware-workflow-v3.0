
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
export default class ClassifyMuti extends cc.Component {

    private _worldRoot: cc.Node; //FAIRY GUI
    private _view: fgui.GComponent; //FAIRY GUI

    config: any = null;

    dragOp = cc.v2();
    dragging = false;
    dragPos = cc.v2();
    dragInd = 0; //抓取的是哪个角色
    srcZoneInd = 0;
    dstZoneInd = 0; //
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

    pointList: fgui.GObject[] = [];

    tipHand: fgui.GObject = null;


    //气泡
    thinkBubble: fgui.GComponent = null;

    dragManList: fgui.GComponent[] = [];
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

        this.btnOk = this.quePage.getChild("submit").asButton;
        this.touchPad = this.quePage.getChild("touchPad").asButton;


        this.groupChildrenForEach(
            this.quePage.getChild("dragManList").asGroup,
            (obj: fgui.GObject, ind: number) => {
                let ball = obj.asCom;
                ball["ind"] = ind;
                ball["_originPosition"] = cc.v2(ball.x, ball.y);
                ball.getChild("loader").asLoader.url =
                    `ui://${packageName}/${modelConfig.manImg[ind]}`;
                ball.node.zIndex = this.config.model.config.manCount - ind;
                this.dragManList.push(ball);
            }
        );

        if (this.quePage.getChild("expGroup")) {
            this.groupChildrenForEach(
                this.quePage.getChild("expGroup").asGroup,
                (obj: fgui.GObject, ind: number) => {
                    let loader = obj.asLoader;
                    loader.url =
                        `ui://${packageName}/${modelConfig.exampleImgList[ind]}`;
                }
            );
        }

        this.quePage.getChild("exp-class1").asLoader.url =
            `ui://${packageName}/${modelConfig.exampleClassImgList[0]}`;
        this.quePage.getChild("exp-class2").asLoader.url =
            `ui://${packageName}/${modelConfig.exampleClassImgList[1]}`;

        this.item1 = this.quePage.getChild("item1");
        this.item1.asLoader.url = `ui://${packageName}/${modelConfig.itemImgList[0]}`;

        this.item2 = this.quePage.getChild("item2");
        this.item2.asLoader.url = `ui://${packageName}/${modelConfig.itemImgList[1]}`;

        this.tipHand = this.quePage.getChild("hand");
        // this.tipHand.sortingOrder = 99999;
        this.tipHand.node.zIndex = 9999;


        for (let i = 0; i < 4; i++) {
            this.pointList[i] = this.quePage.getChild(`point${i}`);
        }

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

            zones: this.config.model.config.srcZones.slice(),
            dragInd: -1, //正在拖动的角色。
            srcZoneInd: 0, //当前操作的ZONE IND src, 0-else where, 1-R, 2-M, 3-B
            dstZoneInd: 0, //当前操作的ZONE IND dst, 0-else where, 1-R, 2-M, 3-B
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

        //这小子没做题
        if (state["zones"][0].length === this.config.model.config.manCount) {
            this.actTip();
            return;
        }

        state["movement"] = "submit";
        this.updateState(state);
    }

    onDragStart(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        if (this.blocked > 0) {
            return;
        }

        this.dragOp = evt.pos;
        let loc = evt.pos;
        //查找那个人物
        this.dragInd = this.calcMinDisInd(loc, this.dragManList);
        if (this.dragInd !== -1) {
            let dragMan = this.dragManList[this.dragInd];
            let manPos = this.getCCPos(dragMan);
            this.dragPos = manPos;
            this.dragging = true;
            this.checkDragZone();
            this.refreshDragManList(this.dragInd, this.dragPos);

            let state = this.cloneState();
            state["movement"] = "grap";
            state["dragPos"] = [
                this.dragPos.x,
                this.dragPos.y
            ];
            state["manPos"][this.dragInd] = [
                dragMan.x,
                dragMan.y
            ];

            //查找这个对象所在的组合，记录组IND，并从组里去除元素。
            let zoneList = state["zones"];
            let found = false;
            for (let r = 0; r < zoneList.length; r++) {
                let zone = zoneList[r];
                for (let c = 0; c < zone.length; c++) {
                    if (zone[c] === this.dragInd) {
                        this.srcZoneInd = r;
                        zone.splice(c, 1);
                        found = true;
                        break;
                    }
                }
                if (found) {
                    break;
                }
            }

            state["dragInd"] = this.dragInd;
            state["srcZoneInd"] = this.srcZoneInd;

            this.clickZoneId = 0;
            state["clickZoneId"] = this.clickZoneId;

            this.updateState(state);
            console.log("grap", this.dragInd);
        }
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
    //寻找最近的触摸目标
    calcMinDisInd(pos, list) {
        let minDis = 300;
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
    onDragMove(evt: fgui.Event) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        if (this.dragging) {
            this.dragOp = cc.v2();
            let loc = evt.pos;
            this.dragPos = loc;
            if (this.dragPos.y < 250) {
                this.dragPos.y = 250;
            }
            else if (this.dragPos.y > 1000) {
                this.dragPos.y = 1000;
            }
            let dragMan = this.dragManList[this.dragInd]

            dragMan.x = this.dragPos.x;
            dragMan.y = this.dragPos.y;

            //区域
            this.checkDragZone();
            this.refreshDragManList(this.dragInd, this.dragPos);

        }
    }
    checkDragZone() {
        let rp = this.rc.localToGlobal(0, 0);
        let bp = this.bc.localToGlobal(0, 0);

        let dragMan = this.dragManList[this.dragInd];
        let np = dragMan.localToGlobal(0, 0);

        let hasRed = (np.sub(rp).mag() < 295);
        let hasBlue = (np.sub(bp).mag() < 295);

        if (hasRed && hasBlue) {
            this.dstZoneInd = 2;
        }
        else if (hasRed) {
            this.dstZoneInd = 1;
        }
        else if (hasBlue) {
            this.dstZoneInd = 3;
        }
        else {
            this.dstZoneInd = 0;
        }
    }
    checkClickZone(pos) {
        let np = pos;
        // let np = this.quePage.getChild("zone").asCom.globalToLocal(pos.x, pos.y);

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
        if (!this.dragging || this.dragInd === -1 || dragDis < 50) { //点击
            this.dragging = false;

            if (this.dragInd !== -1) {
                let man = this.dragManList[this.dragInd];
                man.getTransition("down").play();
                this.dragInd = -1;
            }
            // 查看落点
            this.checkClickZone(evt.pos);

            let state = this.cloneState();
            state["movement"] = "clicked";

            if (state["clickZoneId"] === this.clickZoneId) {
                this.clickZoneId = 0;
            }
            state["clickZoneId"] = this.clickZoneId;

            this.updateState(state);
        }
        else {
            this.dragging = false;
            this.refreshDragManList(this.dragInd, this.dragPos, true);
            //寻找最后的ZONE落点。
            let state = this.cloneState();
            state["movement"] = "drop";
            state["dragPos"] = [
                this.dragPos.x,
                this.dragPos.y
            ];
            let dragMan = this.dragManList[this.dragInd];
            this.checkDragZone();

            state["manPos"][this.dragInd] = [
                dragMan.x,
                dragMan.y
            ];
            state["dragInd"] = this.dragInd;
            state["srcZoneInd"] = this.srcZoneInd;
            state["dstZoneInd"] = this.dstZoneInd;

            //将人物放到集合里。
            let maxCountTable = [
                this.config.model.config.manCount,
                3,
                2,
                3
            ];
            let srcZone = state["zones"][this.srcZoneInd];
            let dstZone = state["zones"][this.dstZoneInd];
            if (dstZone.length >= maxCountTable[this.dstZoneInd]) {
                //如果有接近的，替换他们两个的位置。
                let has = false;
                for (let c = 0; c < dstZone.length; c++) {
                    let tarCharInd = dstZone[c];
                    if (tarCharInd === this.dragInd) {
                        continue;
                    }
                    let tarDragMan = this.dragManList[tarCharInd];
                    let tarPos = this.getCCPos(tarDragMan);
                    let dis = tarPos.sub(cc.v2(dragMan.x, dragMan.y)).mag();
                    if (dis < 70) {
                        //替换
                        dstZone.splice(c, 1, this.dragInd);
                        this.pushUnique(srcZone, tarCharInd);
                        has = true;
                        break;
                    }
                }
                if (!has) {
                    //放回原位。
                    this.pushUnique(srcZone, this.dragInd);
                }
            }
            else {
                this.pushUnique(dstZone, this.dragInd);
            }
            this.updateState(state);
        }
    }
    pushUnique(arr, cell) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === cell) {
                return;
            }
        }
        arr.push(cell);
    }
    erase(arr, cell) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === cell) {
                arr.splice(i, 1);
                break;
            }
        }
    }
    refreshPage(state: any) {
        state = state || this.state;
        // let zoneId = state["zones"] || state["dragZone"];
        // this.refreshZone(zoneId, state["movement"] == "idle");

        let list = this.dragManList.slice();
        list = list.sort((a, b) => {
            return a.y - b.y;
        });
        for (let i = 0; i < list.length; i++) {
            list[i].node.zIndex = i;
        }

        this.actMovePlace();
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
    switchController(ctrl) {
        ctrl.selectedIndex = ctrl.selectedIndex === 1 ? 0 : 1;
    }
    refreshAllDragManList() {
        let list = this.dragManList.slice();
        list = list.sort((a, b) => {
            return a.y - b.y;
        });
        for (let i = 0; i < list.length; i++) {
            list[i].node.zIndex = i;
            if (list[i]["tween"]) {
                list[i]["tween"].stop();
                delete list[i]["tween"];
            }
        }
    }
    refreshDragManList(dragInd: number, curPos: cc.Vec2, zbyY = false) {
        let dragMan = this.dragManList[dragInd];
        dragMan.x = curPos.x;
        dragMan.y = curPos.y;
        if (zbyY) {
            this.refreshAllDragManList();
        }
        else {
            for (let i = 0; i < this.dragManList.length; i++) {
                if (i === this.dragInd) {
                    this.dragManList[i].node.zIndex = this.config.model.config.manCount;
                }
                else {
                    if (this.dragManList[i].node.zIndex > 0) {
                        this.dragManList[i].node.zIndex--;
                    }
                }
            }
        }
    }
    refresh(oldState: any, state: any) {
        switch (state["movement"]) {
            case "idle":
                this.refreshPage(state);
                break;
            case "grap":
                {
                    this.playSound("soundDrag");
                    let dragInd = state["dragInd"];
                    let dragMan = this.dragManList[dragInd];

                    dragMan.getTransition("up").play();

                    this.clickZoneId = state["clickZoneId"];
                    this.actZone(this.clickZoneId);

                    this.refreshPage(state);
                }
                break;
            case "drag":
                {
                    let dragInd = state["dragInd"];
                    this.dragPos = cc.v2(...state["dragPos"]);

                    let dragMan = this.dragManList[dragInd];
                    let dis = this.dragPos.sub(cc.v2(dragMan.x, dragMan.y)).mag();
                    if (dis < 30) {
                        this.refreshDragManList(dragInd, this.dragPos);
                    }
                    else {
                        this.actMove(dragInd, dis);
                    }
                }
                break;
            case "drop":
                {
                    this.finishStep();
                    this.playSound("soundDrag");
                    let dragInd = state["dragInd"];
                    let dragMan = this.dragManList[dragInd];
                    dragMan.getTransition("down").play();
                    console.log("state:", JSON.stringify(state["zones"]));

                    this.clickZoneId = state["clickZoneId"];
                    this.actZone(this.clickZoneId);

                    this.refreshPage(state);
                }
                break;
            case "clicked":
                {
                    this.clickZoneId = state["clickZoneId"];
                    // this.actZone(this.clickZoneId);
                }
                break;
            case "submit":
                {
                    let zoneList = globalThis._.cloneDeep(state["zones"]);
                    //sort
                    for (let r = 0; r < zoneList.length; r++) {
                        let zone = zoneList[r];
                        zone.sort();
                    }
                    let bingo = globalThis._.isEqual(zoneList, this.config.model.config.dstZones);
                    this.answerFeedback(bingo).then(() => {
                    });
                    setTimeout(() => {
                        this.playSound("soundClick");
                    }, 20);
                    this.resetState("movement");
                }
                break;
            case "laba":
                this.actLaba();
                break;
        }
    }
    actMove(dragInd, dis, noAni = false) {
        let dragMan = this.dragManList[dragInd];
        this.refreshAllDragManList();

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
        // dot.node.zIndex;
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

    actZone(zoneId, noAni = false) {
        // this.blocked = 1;
        // 这些圈是能切换的状态，所以弃用动画，用控制器来转换
        // let ani = this.quePage.getChild("zone").asCom.getTransition(`zone${zoneId}`);
        let ctrl = this.quePage.getChild("zone").asCom.getController("c1");
        ctrl.selectedIndex = zoneId;
    }
    actMovePlace(noAni = false) {
        let zoneList = this.state["zones"];

        let zone0 = zoneList[0];
        for (let c = 0; c < zone0.length; c++) {
            let manInd = zone0[c];
            let man = this.dragManList[manInd];

            let op = man["_originPosition"];
            man.setPosition(op.x, op.y);
        }

        for (let r = 1; r < zoneList.length; r++) {
            let zone = zoneList[r];
            let np = cc.v2(this.pointList[r].x, this.pointList[r].y);
            switch (zone.length) {
                case 0:
                    break;
                case 1:
                    {
                        let manInd = zone[0];
                        this.dragManList[manInd].setPosition(np.x, np.y);
                    }
                    break;
                case 2:
                    {
                        let spacing = 180;
                        np.y -= (spacing * (zone.length - 1)) / 2;
                        for (let c = 0; c < zone.length; c++) {
                            let manInd = zone[c];
                            this.dragManList[manInd].setPosition(np.x, np.y + c * spacing);
                        }
                    }
                    break;
                case 3:
                    {
                        let spacing = 120;
                        np.y -= (spacing * (zone.length - 1)) / 2;
                        for (let c = 0; c < zone.length; c++) {
                            let manInd = zone[c];
                            this.dragManList[manInd].setPosition(np.x, np.y + c * spacing);
                        }
                    }
                    break;
            }
        }

        this.refreshAllDragManList();
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
        if (this.dragging) {
            let state: any = globalThis._.cloneDeep(this._state);
            state["movement"] = "drag";
            state["dragPos"] = [
                Math.floor(this.dragPos.x),
                Math.floor(this.dragPos.y)
            ];
            state["dragInd"] = this.dragInd;

            let dragMan = this.dragManList[this.dragInd];
            state["manPos"] = [
                dragMan.x,
                dragMan.y
            ];
            state["dstZoneInd"] = this.dstZoneInd;
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