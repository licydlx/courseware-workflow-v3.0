
/*
 * @Descripttion: 
 * @version: 
 * @Author: ruzhuan
 * @Date: 2021-06-08 18:00:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-06-08 18:00:00
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass, property } = cc._decorator;

@ccclass
export default class t4_05_model_v2 extends cc.Component {
    private _worldRoot: cc.Node;

    private _view: fgui.GComponent;

    private _c1: fgui.Controller;

    private _title: fgui.GButton;

    private _titleTrigger: fgui.GLoader;

    private _submitBtn: fgui.GButton;

    private _package: any;

    private touches: cc.Vec2[] = [];

    private graphics: cc.Graphics = null;

    private _zhiLine: fgui.GObject;

    private _drawLineGrop: fgui.GGroup;

    private _drawLan: fgui.GImage;

    private _drawRed: fgui.GImage;

    private _showPosArr: any = [{ x: 25, y: 245 }, { x: 25, y: 335 }, { x: 25, y: 425 }];

    private _showLines: any = [];

    private _showLinesObj: any = [];

    private _lanDianShow: fgui.GObject;

    private _redDianShow: fgui.GObject;

    private _zhiLineShow: fgui.GObject;

    private submitType: any = cc.Enum({

        No: 0,
        GuideShow: 1,
        WrongFeed: 2,
        RightFeed: 3
    });

    private lineType: any = cc.Enum({

        StraightLine: 0,
        LineSegment: 1,
        LeftLanRays: 2,
        RightRedRays: 3
    });

    // 远程动态组件
    private feedback: any;

    private _state = {};

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;
        this.mergeState();
    }

    async onLoad() {

        this._worldRoot = cc.find("Canvas").parent;

        console.log('====== fgui.GRoot.inst.height ====' + fgui.GRoot.inst.height);
        console.log('====== fgui.GRoot.inst.width ====' + fgui.GRoot.inst.width);

        console.log('====== this._view.height ====' + this._view.height);
        console.log('====== this._view.width ====' + this._view.width);

        console.log('====== winSize.height ====' + cc.winSize.height);
        console.log('====== winSize.width ====' + cc.winSize.width);

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;

        fgui.GRoot.inst.addChild(this._view);

        this._c1 = this._view.getController("c1");

        this._drawLineGrop = this._view.getChild('drawLine').asGroup;

        this._drawLan = this._view.getChild('lan').asImage;
        this._drawRed = this._view.getChild('red').asImage;

        // 臨時
        // bug 初始设置不播放不生效
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;

        this._submitBtn = this._view.getChild("submit").asButton;
        if (this._submitBtn) this._submitBtn.on(fgui.Event.CLICK, this._clickSubmit, this);

        let startBtn = this._view.getChild("start").asButton;
        startBtn.visible = false;

        let huiNode = new cc.Node('huiNode');
        huiNode.parent = this._worldRoot;

        this.graphics = huiNode.addComponent(cc.Graphics);
        this.graphics.lineWidth = 20;
        this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.graphics.strokeColor = cc.color(255, 0, 0);
        this.graphics.fillColor = cc.color(255, 0, 0);

        this._view.on(cc.Node.EventType.TOUCH_START, this._onDrawStart, this);
        this._view.on(cc.Node.EventType.TOUCH_MOVE, this._onDrawMove, this);
        this._view.on(cc.Node.EventType.TOUCH_END, this._onDrawEnd, this);

        // 初始化state
        this._state = {
            title: false,
            submit: this.submitType.No
        }
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { boxSoundUrl, guidIndex } = model.config;
        this._package = Package;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        this._zhiLine = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox2a');

        this._view.addChild(this._zhiLine);


        // 动效注册
        // for (let v in ae) {
        //     if (ae[v]) {
        //         this[v] = {};
        //         if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
        //         if (ae[v].pos) this[v].pos = ae[v].pos;
        //     }
        // }

        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
    }

    _onDrawStart(event) {
        console.log('===== start 111 ====' + event.touch.getLocation());
        this._zhiLine.visible = false;
        this.graphics.clear();
        this.touches.length = 0;
        this.touches.push(event.touch.getLocation());
    }

    _onDrawMove(event) {

        let touches = this.touches;
        touches.push(event.touch.getLocation());

        const MIN_POINT_DISTANCE = 4;

        let worldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        this.graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
        let lastIndex = 0;
        for (let i = 1, l = touches.length; i < l; i++) {
            if (touches[i].sub(touches[lastIndex]).mag() < MIN_POINT_DISTANCE) {
                continue;
            }
            lastIndex = i;
            this.graphics.lineTo(touches[i].x - worldPos.x, touches[i].y - worldPos.y);
        }
        this.graphics.stroke();
    }

    _onDrawEnd(event) {

        this.graphics.clear();
        this._zhiLine.visible = true;
        this._zhiLine.width = this.touches[this.touches.length - 1].x - this.touches[0].x;
        this._zhiLine.x = this.touches[0].x;
        this._zhiLine.y = this._view.height - this.touches[0].y;
        this._zhiLine.sortingOrder = 0;
        this._drawLan.sortingOrder = 1;
        this._drawRed.sortingOrder = 1;

        // 直线 线段 左蓝射线 右红射线

        this.touches.sort(this.comparePos());

        let dianLeftMin = this._drawLan.x + 10;
        let dianLeftMax = this._drawLan.x + this._drawLan.width - 10;

        let dianRightMax = this._drawRed.x + this._drawRed.width - 10;
        let dianRightMin = this._drawRed.x + 10;

        let cha = 5;

        let tempLineData = {};

        // 1、直线
        if ((this.touches[0].x - dianLeftMin) < -cha && (this.touches[this.touches.length - 1].x - dianRightMax) > cha) {

            // 直线
            tempLineData['type'] = this.lineType.StraightLine

        } else if (this.touches[0].x >= dianLeftMin &&
            this.touches[0].x <= dianLeftMax && this.touches[this.touches.length - 1].x >= dianRightMin && this.touches[this.touches.length - 1].x <= dianRightMax) {

            //线段
            tempLineData['type'] = this.lineType.LineSegment;

        } else if (this.touches[0].x >= dianLeftMin &&
            this.touches[0].x <= dianLeftMax && (this.touches[this.touches.length - 1].x - dianRightMax) > cha) {

            // 左蓝射线
            tempLineData['type'] = this.lineType.LeftLanRays;

        } else if (this.touches[this.touches.length - 1].x >= dianRightMin &&
            this.touches[this.touches.length - 1].x <= dianRightMax && (this.touches[0].x - dianLeftMin) < -cha) {

            // 右红射线
            tempLineData['type'] = this.lineType.RightRedRays;

        }

        this._showLines.push(tempLineData);

        console.log('==== type 111 ====' + tempLineData['type']);


        let lineW = Math.abs(this.touches[this.touches.length - 1].x - this.touches[0].x);
        let lineObj = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox2a');
        this._view.addChild(lineObj);
        lineObj.width = lineW;
        lineObj.x = this.touches[0].x;
        lineObj.y = this.touches[0].y;

        if (tempLineData['type'] === this.lineType.StraightLine) {


        } else if (tempLineData['type'] === this.lineType.LineSegment) {

            lineObj = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox2a');
            this._view.addChild(lineObj);
            lineObj.width = lineW;
            lineObj.x = this.touches[0].x;
            lineObj.y = this.touches[0].y;

        }

        cc.tween(lineObj)
            .to(0.3, { x: this._showPosArr[this._showLinesObj.length].x, y: this._showPosArr[this._showLinesObj.length].y })
            .to(0.3, { scaleX: 0.7, scaleY: 0.7 })
            .call(() => {
                lineObj.width = 740;
                this._showLinesObj.push(lineObj);
            })
            .start()
    }

    comparePos() {
        return function (a, b) {
            var value1 = a.x;
            var value2 = b.x;
            return value1 - value2;
        }
    }

    private _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        this.updateState(state);
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
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
    updateUi(oldState: any, state: any) {

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            if (state.submit === this.submitType.RightFeed) {

                this.answerFeedback(true);

            } else if (state.submit === this.submitType.WrongFeed) {

                this.answerFeedback(false);

            } else if (state.submit === this.submitType.GuideShow) {

                let keyBtn = this._view.getChild('input1').asButton;
                this.handTips2(keyBtn);
            }
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    }


    async playTitle(bool: boolean) {
        this._c1.selectedIndex = bool ? 1 : 0;
        if (bool) {
            cc.audioEngine.stopAll();
            this.forbidHandle();
            let item = fgui.UIPackage.getItemByURL(this._title["_sound"]);
            let audio: cc.AudioClip = await loadResource(item.file, cc.AudioClip);
            let audioId = cc.audioEngine.play(audio, false, 1);
            cc.audioEngine.setFinishCallback(audioId, () => {
                let state: any = globalThis._.cloneDeep(this._state);
                state.title = false;
                this.updateState(state);
            });
        } else {
            this.disableForbidHandle();
        }
    }

    answerFeedback(bool: boolean) {
        if (!this.feedback) return;
        let feedback: any = cc.instantiate(this.feedback);
        feedback.x = 960;
        feedback.y = 540;
        let feedbackJs: any = feedback.getComponent(cc.Component);
        feedbackJs.init(bool);
        feedback.parent = cc.find("Canvas").parent;

        setTimeout(() => {
            feedback.destroy();
            let state: any = globalThis._.cloneDeep(this._state);
            state.submit = this.submitType.No;
            this.updateState(state);
        }, 2000);
    }


    /**
     * 点击指引
     * @param obj 点击对象
     */
    handTips2(obj: fgui.GObject) {
        let hand = fgui.UIPackage.createObject(this._package, 'hand');
        this._view.addChild(hand);
        let tempX = obj.x;
        let tempY = obj.y;

        hand.x = tempX;
        hand.y = tempY;

        cc.tween(hand).to(0.3, {
            x: tempX - 30,
            y: tempY - 30
        }).to(0.3, {
            x: tempX,
            y: tempY
        }).to(0.3, {
            x: tempX - 30,
            y: tempY - 30
        }).to(0.3, {
            x: tempX,
            y: tempY
        }).call(() => {
            this._view.removeChild(hand);
            hand = null;
            let state: any = globalThis._.cloneDeep(this._state);
            state.submit = this.submitType.No;
            this.updateState(state)
        }).start();
    }

    // 运行时 禁止操作
    forbidHandle() {
        console.log('===  运行时 禁止操作 =====');
        let handleMask = this._worldRoot.getChildByName('handleMask');
        if (!handleMask) {
            let handleMask = new cc.Node('handleMask');
            handleMask.addComponent(cc.BlockInputEvents);
            handleMask.parent = this._worldRoot;
            handleMask.width = 1920;
            handleMask.height = 1080;
            handleMask.x = 960;
            handleMask.y = 540;
        }
    }

    // 消除禁止
    disableForbidHandle() {
        let handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask) handleMask.destroy();
    }

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
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
