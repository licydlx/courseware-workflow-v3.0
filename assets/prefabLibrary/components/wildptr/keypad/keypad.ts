
const { ccclass, property } = cc._decorator;

@ccclass
export default class Keypad extends cc.Component {

    @property( cc.Node )
    pad : cc.Node = null;

    onDestroy() {
        this.node.emit("destroy");
    }

    setY( y:number ) {
        this.pad.y = y;
    }

    onClickClose(){
        this.node.destroy();
    }

    onClickNum(evt: cc.Event, val: String) {
        this.node.emit("num", val);
    }

    onClickSubmit() {
        this.node.emit("submit");
    }

    onClickReset() {
        this.node.emit("reset");
    }
};