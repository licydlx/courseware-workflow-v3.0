/*
 * @Descripttion: 
 * @version: 
 * @Author: ruzhuan
 * @Date: 2021-07-01 18:05:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-01 18:05:12
 */

const { ccclass, property } = cc._decorator;

@ccclass
export default class static_model01_v2 extends cc.Component {
    private _view: fgui.GComponent;
    private _state = {}

    private _paos: any = [];

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this._state = v;
        this.updateUi(this._state);
        this.mergeState();
    }

    onLoad() {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        let box3D = this._view.getChild("n18") as fgui.GLoader3D;
        box3D.url = "ui://733aoo45gzaz75";
        box3D.animationName = 'sjq_idle2';

        let title = this._view.getChild("n4").asImage;
        let orgY = title.y;
        cc.tween(title)
            .sequence(cc.tween().to(1.0, { y: orgY + 25 }), cc.tween().to(0.8, { y: orgY - 21 }))
            .repeatForever()
            .start();

        let paoGroup = this._view.getChild("pao").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == paoGroup) {
                let obj: fgui.GImage = this._view.getChildAt(i).asImage;
                this._paos.push(obj);
                this.paoAnimate(obj);
            }
        }

        let yinfu1 = this._view.getChild("n3").asImage;
        let yinfu1X = yinfu1.x;
        let yinfu1Y = yinfu1.y;

        cc.tween(yinfu1)
            .sequence(cc.tween().parallel(cc.tween().to(3.5, { x: yinfu1X + 200, y: yinfu1Y - 200 }),
                cc.tween().to(3.5, { alpha: 0 })),
                cc.tween().call(() => {
                    yinfu1.alpha = 1;
                    yinfu1.y = yinfu1Y;
                    yinfu1.x = yinfu1X;

                }))
            .repeatForever()
            .start();

        let yinfu2 = this._view.getChild("n5").asImage;
        let yinfu2X = yinfu2.x;
        let yinfu2Y = yinfu2.y;
        let offset = 5;
        cc.tween(yinfu2)
            .sequence(cc.tween().to(0.8, { x: yinfu2X + (5 + offset), y: yinfu2Y + (offset + 7) }),
                cc.tween().to(0.8, { x: yinfu2X - (4 + offset), y: yinfu2Y - (offset + 7) }))
            .repeatForever()
            .start();
    }

    paoAnimate(obj) {

        let winH = this._view.height;
        let winW = this._view.width;

        cc.tween(obj)
            .sequence(cc.tween().parallel(cc.tween().to(5.0, { y: 0 }),
                cc.tween().to(5.0, { alpha: 0 })),
                cc.tween().call(() => {
                    obj.alpha = 1;
                    let randPosX: number = Math.floor(Math.random() * (winW - 0 + 1) + 0);
                    let randPosY: number = Math.floor(Math.random() * (winH - 0 + 1) + 0);
                    obj.y = randPosY;
                    obj.x = randPosX;

                }))
            .repeatForever()
            .start();

    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
    }

    // 获取状态
    getState(data: any) {
        this.updateState(data);
    }

    // 更新状态层
    updateState(curState: any) {
        if (globalThis._.isEqual(this._state, curState)) return;
        this.state = curState;
    }

    // 更新ui层
    updateUi(state: any) { }


    // 注册状态，及获取状态的方法
    registerState() {
        if (window['GlobalData'].sample.registerState) window['GlobalData'].sample.registerState.call(this);
    }

    // 解除状态，及获取状态的方法
    relieveState() {
        if (window['GlobalData'].sample.relieveState) window['GlobalData'].sample.relieveState.call(this);
    }

    // 本组件状态合并到全局
    mergeState() {
        if (window['GlobalData'].sample.mergeState) window['GlobalData'].sample.mergeState.call(this);
    }

    onEnable() {
        this.registerState();
    }

    onDisable() {
        cc.Tween.stopAll();
        this.relieveState();
    }
}
