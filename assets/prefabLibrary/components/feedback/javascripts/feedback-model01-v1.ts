/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-04-26 09:54:41
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-26 10:06:29
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class feedback_model01_v1 extends cc.Component {

    @property({
        type: cc.AudioClip,
        displayName: '正确音效'
    })
    rightAudio: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: '错误音效'
    })
    errorAudio: cc.AudioClip = null;

    private _answer = false;

    onLoad() {
        let spine: sp.Skeleton = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        this.playAudio(this._answer ? this.rightAudio : this.errorAudio);
        spine.setSkin(this._answer ? "win" : "lose");
        spine.setAnimation(0, this._answer ? 'win' : 'lose', true);
    }

    init(bool: boolean) {
        this._answer = bool;
    }

    playAudio(audio: cc.AudioClip) {
        cc.audioEngine.stopAll();
        cc.audioEngine.play(audio, false, 1);
    }


}
