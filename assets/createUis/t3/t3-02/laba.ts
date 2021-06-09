
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Sprite)
    face: cc.Sprite = null;

    @property(cc.Animation)
    labaLoopAni: cc.Animation = null;
    @property(cc.Animation)
    ani: cc.Animation = null;

    start() {
        this.node.emit("partReady", this);
    }

    setFrame(frame: cc.SpriteFrame) {
        this.face.spriteFrame = frame;
    }

    onClickLaba() {
        this.node.emit("click", this);
    }

    in() {
        this.ani.play("laba-in");
    }

    out() {
        this.ani.play("laba-out");
    }

    onBubbleShow() {
        this.labaLoopAni.play();
    }
    onBubbleHide() {
        this.labaLoopAni.stop();
    }
}
