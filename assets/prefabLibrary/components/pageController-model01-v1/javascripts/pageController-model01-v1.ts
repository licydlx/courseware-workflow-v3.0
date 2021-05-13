/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2020-12-22 11:02:45
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-12 14:31:12
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class pageController_model01_v1 extends cc.Component {
    private _controllerJs: any;

    onLoad() {
        let controller = this.node.parent.getChildByName("controller-model01");
        this._controllerJs = controller.getComponent(cc.Component);
    }

    goPrev(e: any, ced: any) {
        if (!this._controllerJs) return;
        this._controllerJs.onJumpConfig(this._controllerJs._cPage - 1);
    }

    goNext(e: any, ced: any) {
        if (!this._controllerJs) return;
        this._controllerJs.onJumpConfig(this._controllerJs._cPage + 1);
    }

}