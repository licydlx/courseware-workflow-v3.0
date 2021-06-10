import controller_model02 from "../../../prefabLibrary/controllers/controller-model02/scripts/controller-model02";
import TipUI from "./tip-ui";

const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;

const { executeInEditMode, ccclass, property } = cc._decorator;

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
@executeInEditMode
export default class NewClass extends cc.Component {
    @property(TipUI)
    tipUI: TipUI = null;

    //喇叭文字图片。
    @property(cc.SpriteFrame)
    labaFrame: cc.SpriteFrame = null;
    @property
    labaTime: number = 4;

    @property(cc.Node)
    chiLuns: cc.Node[] = [];

    /**
     * 所有的solt
     */
    @property(cc.Node)
    soltList: cc.Node[] = [];


    @property(cc.Node)
    backSolt: cc.Node = null;

    /**物品的外观。 */
    @property(cc.Prefab)
    itemPrefabList: cc.Prefab[] = [];

    /**正在被拖动的ICON */
    @property(cc.Sprite)
    dragFace: cc.Sprite = null;


    dragging = false;
    dragDv = 0;
    dragPos: cc.Vec2 = new cc.Vec2();

    @property(cc.Node)
    touchPad: cc.Node = null;

    @property(cc.Animation)
    ani: cc.Animation = null;

    @property(cc.AudioClip)
    public soundInfo: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundClick: cc.AudioClip = null;
    @property(cc.AudioClip)
    public soundDrag: cc.AudioClip = null;


    _soltId = [];
    @property
    set soltId(val) {
        this._soltId = JSON.parse(val);
        this.refreshSolts();
    }
    createItem(id): cc.Node {
        return cc.instantiate(this.itemPrefabList[id]);
    }
    refreshSolts() {
        let idList = this._soltId;
        for (let i = 0; i < idList.length; i++) {
            let solt = this.soltList[i];
            let face = cc.find("face", solt).getComponent(cc.Sprite)
            let id = idList[i];
            if (id !== 0) {
                face.node.opacity = 255;
                face.node.removeAllChildren();
                face.node.addChild(this.createItem(id));
            }
            else {
                face.node.opacity = 0;
                face.node.removeAllChildren();
            }
        }
    }

    get soltId() {
        return JSON.stringify(this._soltId);
    }

    onDestroy() {

    }
    onLoad() {
        //hack，修改切换页面逻辑。
        try {
            let model02 = cc.director.getScene().getChildByName("controller-model02").getComponent(controller_model02);
            model02.onJumpConfig = async (toPage: any) => {
                let fadeTime = 0.3;
                let page: number = toPage - 1;
                let chapter: any = model02._configJson.chapters[page];

                fgui.GRoot.inst.removeChildren(0, -1, true);
                if (model02._currentPageNode) {
                    let oldPageQue = model02._currentPageNode.getComponent(cc.Component);
                    oldPageQue.enabled = false; //执行onDisable
                    model02._currentPageNode.runAction(cc.sequence(
                        cc.delayTime(fadeTime),
                        cc.callFunc(cc.Node.prototype.destroy.bind(model02._currentPageNode))
                    ));
                }

                let prefab: any = model02._pagePrefabs[page];
                let node: any = cc.instantiate(prefab);
                let nodeJs = node.getComponent(cc.Component);
                nodeJs.init({ pathConfig: model02._configJson.pathConfig, model: chapter.model, components: chapter.components });
                node.parent = model02.node;

                model02._currentPageNode = node;
                let pageQue = model02._currentPageNode.getComponent(cc.Component);
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


        let bundle = window["GlobalData"].gameData.resourceBundle;
        bundle.preloadDir("/", cc.Prefab, (err, prefab) => {
            console.log(`preload finish, error:`, err);
        });

        this.soltList.forEach(solt => {
            solt["face"] = cc.find("face", solt).getComponent(cc.Sprite);
            solt["bg"] = cc.find("bg", solt);
        });
    }
    start() {
        for (let i = 0; i < this.soltList.length; i++) {
            let solt = this.soltList[i];
            solt["ind"] = i;
            solt["_originPosition"] = cc.v2(solt.position);
        }

        //dargDv
        this.touchPad.on(cc.Node.EventType.TOUCH_START, this.onDragStart, this);
        this.touchPad.on(cc.Node.EventType.TOUCH_MOVE, this.onDragMove, this);
        this.touchPad.on(cc.Node.EventType.TOUCH_END, this.onDragEnd, this);
        this.touchPad.on(cc.Node.EventType.TOUCH_CANCEL, this.onDragEnd, this);

        for (let i = 0; i < this.chiLuns.length; i++) {
            let cl = this.chiLuns[i];
            cc.tween(cl)
                .delay(i * 0.2)
                .repeatForever(cc.sequence(
                    cc.rotateBy(0.25, 15).easing(cc.easeBackOut()),
                    cc.delayTime(0.2)
                ))
                .start();
        }

        this.node.emit("partReady", this);
    }
    //寻找最近的触摸目标
    calcMinDisInd(pos, list: cc.Node[]) {
        let minDis = 9999;
        let selInd = -1;
        for (let i = 0; i < list.length; i++) {
            let obj = list[i];
            let wp = obj.convertToWorldSpaceAR(cc.Vec2.ZERO);
            let dis = pos.sub(wp).mag();
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

    onDragStart(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        this.dragging = true;
        this.dragDv = 0;

        let loc = evt.getLocation();
        let ind = this.calcMinDisInd(loc, this.soltList);

        this.dragPos = loc;
        let np = this.dragFace.node.parent.convertToNodeSpaceAR(this.dragPos);
        this.dragFace.node.setPosition(np);

        this.node.emit("onGrap", ind);
    }
    onDragMove(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        this.dragPos = evt.getLocation();
        this.dragDv += Math.abs(evt.getDeltaX()) + Math.abs(evt.getDeltaY());

        let np = this.dragFace.node.parent.convertToNodeSpaceAR(this.dragPos);
        this.dragFace.node.setPosition(np);

        //碰撞SOLT效果
        for (let i = 0; i < this.soltList.length; i++) {
            let solt = this.soltList[i];
            let box = solt.getBoundingBoxToWorld();
            if (box.contains(this.dragPos)) {
                //出现阴影。
                // solt["bg"].opacity = 18;
                solt["bg"].opacity = 0;
            }
            else {
                solt["bg"].opacity = 0;
            }
        }

        this.node.emit("onDragging");
    }
    onDragEnd(evt) {
        if( IsTeacherNotInDemo() ) {
            return;
        }
        this.dragging = false;
        this.dragFace.node.opacity = 0;
        this.dragFace.node.removeAllChildren();
        this.node.emit("onDrop");
    }

    //抓起
    //拖动
    //放下
    //提交

    onClickSubmit() {
        this.node.emit("onClickSubmit", this);
    }

    refreshPage(state: any, noAni = false) {
        //查看是否需要显示拖动
        this.soltId = JSON.stringify(state["idList"]);
    }
    refreshDrag(state: any, noAni = false) {
        if (state["dragInd"] !== -1 && state["dragId"] !== 0) {
            if (state["dragPos"].length > 0) {
                let wp = cc.v2(...state["dragPos"]);
                let np = this.dragFace.node.parent.convertToNodeSpaceAR(wp);

                let op = cc.v2(this.dragFace.node.position);

                let dis = op.sub(np).mag();
                if (dis < 20 || noAni) {
                    this.dragFace.node.setPosition(np);
                }
                else {
                    let time = dis / 3000;
                    this.dragFace.node.stopAllActions();
                    this.dragFace.node.runAction(cc.moveTo(time, np));
                }
            }
        }
        else {
            this.dragFace.node.removeAllChildren();
        }
    }

    refresh(oldState: any, state: any) {
        cc.log("---refresh");
        switch (state["movement"]) {
            case "idle":
                this.refreshPage(state, true);
                break;
            case "grap":
                {
                    //更新拖动
                    let dragId = state["dragId"];
                    if (dragId !== 0) {
                        this.dragFace.node.opacity = 255;
                        this.dragFace.node.removeAllChildren();
                        this.dragFace.node.addChild(this.createItem(dragId));
                    }
                    this.refreshDrag(state, true);

                    //更新ITEMS
                    //更新solts
                    this.refreshPage(state);
                }
                break;
            case "drag":
                {
                    this.dragPos = cc.v2(...state["dragPos"]);
                    //碰撞SOLT效果
                    for (let i = 0; i < this.soltList.length; i++) {
                        let solt = this.soltList[i];
                        let box = solt.getBoundingBoxToWorld();
                        if (box.contains(this.dragPos)) {
                            //出现阴影
                            // solt["bg"].opacity = 18;
                            solt["bg"].opacity = 0;
                            //如果SOLT不为空，则播放移动效果。
                            // if (state["idList"][i] !== 0) {
                            //     solt["face"].node.stopAllActions();
                            //     solt["face"].node.runAction(cc.moveTo(0.1, 25, 25));
                            // }
                        }
                        else {
                            solt["bg"].opacity = 0;
                        }
                    }

                    this.refreshDrag(state);
                }
                break;
            case "drop":
                this.refreshDrag(state, true);
                this.refreshPage(state);
                break;
        }
    }

    showTip() {
        this.ani.play("tip");
    }

    onTipFinish() {
        this.node.emit("onTipFinish");
    }

    drawLineOfDashes(drawer: cc.Graphics, from: cc.Vec2, to: cc.Vec2, stroke: boolean = true, length: number = 15, interval: number = 15) {
        if (drawer) {
            let off = to.sub(from);
            let dir = off.normalize();
            let dis = off.mag();
            let delta = dir.mul(length + interval);
            let delta1 = dir.mul(length);
            let n = Math.floor(dis / (length + interval));
            for (let i = 0; i < n; ++i) {
                let start = from.add(delta.mul(i));
                drawer.moveTo(start.x, start.y);
                let end = start.add(delta1);
                drawer.lineTo(end.x, end.y);
            }
            let start1 = from.add(delta.mul(n));
            drawer.moveTo(start1.x, start1.y);
            if (length < dis - (length + interval) * n) {
                let end = start1.add(delta1);
                drawer.lineTo(end.x, end.y);
            } else {
                drawer.lineTo(to.x, to.y);
            }
            if (stroke) drawer.stroke();
        }
    }

    //tip动画
    startDrawDot() {
        this.tipUI.startDrawDot();
    }
    endDrawDot() {
        this.tipUI.endDrawDot();
    }
};