// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class TipUI extends cc.Component {
    //提示
    @property(cc.Node)
    dotRoot: cc.Node = null;
    @property(cc.Node)
    tipHand: cc.Node = null;
    @property(cc.Prefab)
    tipDotPrefab: cc.Prefab = null;

    @property
    minDis = 30;

    _pool = new cc.NodePool();

    onLoad() {
    }
    onDestroy() {
        this.unschedule(this.drawTipDot);
    }

    //tip动画
    startDrawDot() {
        this.schedule(this.drawTipDot, 0.02);
    }
    endDrawDot() {
        this.unschedule(this.drawTipDot);
        if (cc.isValid(this["prevTipDot"])) {
            delete this["prevTipDot"];
        }
    }
    drawTipDot(dt) {
        let nextDot = cc.v2(this.tipHand.position);
        let prevDot = this["prevTipDot"];

        if (cc.isValid(prevDot)) {
            let dis = prevDot.sub(nextDot).mag();
            if (dis < this.minDis) {
                return;
            }
        }

        this["prevTipDot"] = nextDot;

        let dot = this.newDot(nextDot);
        this.dotRoot.addChild(dot);
        dot.runAction(cc.sequence(
            cc.delayTime(1.0),
            cc.fadeOut(0.3),
            cc.callFunc(() => {
                dot.setPosition(0, 0);
                this._pool.put(dot);
            })
        ));

    }

    newDot(vec: cc.Vec2) {
        let node = this._pool.get() || cc.instantiate(this.tipDotPrefab);
        node.opacity = 255;
        node.setPosition(vec.x, vec.y);
        return node;
    }
};