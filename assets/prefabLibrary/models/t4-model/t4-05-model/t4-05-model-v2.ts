
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

    private _touchXMax: number = 0;

    private _touchXMin: number = 0;

    private graphics: cc.Graphics = null;

    private _zhiLine: fgui.GObject;

    private _drawLan: fgui.GImage;

    private _moveMinX: number = 430;

    private _lanRect: cc.Rect;
    private _redRect: cc.Rect;
    private _playerRect: cc.Rect;
    private _drawLineRect: cc.Rect;

    private _drawRed: fgui.GImage;

    private _maskBg: fgui.GGraph;

    private _player: fgui.GImage;

    private _moveSpeed: number = 1;

    private _gameTime: number = 0;

    private _defaultMinX: number = 550;

    private _defaultMaxX: number = 1290;

    private _defaultMidPosY: number = 635;

    private _framesSecond: number = 20; //1秒钟运行20帧（次）

    private _dragging = false;

    private _scheduleTime = 0.01;

    private _moveCurPos: cc.Vec2;

    private _curTouchesPos: any = [];

    private _allPointRect = [];

    private _showPosArr: any = [
        { 'line': { x: 25, y: 250 }, 'lan': { x: 16, y: 218 }, 'red': { x: 472, y: 218 } },
        { 'line': { x: 25, y: 345 }, 'lan': { x: 16, y: 312 }, 'red': { x: 472, y: 312 } },
        { 'line': { x: 25, y: 438 }, 'lan': { x: 16, y: 404 }, 'red': { x: 472, y: 404 } }];

    private _showLines: any = [];

    private _showLinesObj: any = [];

    private _startBtn: fgui.GButton;

    private submitType: any = cc.Enum({

        No: 0,
        GuideShow: 1,
        WrongFeed: 2,
        RightFeed: 3
    });

    private gameResult: any = cc.Enum({

        No: 0,
        Fail: 2,
        Success: 3
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

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;

        fgui.GRoot.inst.addChild(this._view);

        this._c1 = this._view.getController("c1");

        this._drawLan = this._view.getChild('lan').asImage;
        this._drawRed = this._view.getChild('red').asImage;

        let temp = {
            'rect': new cc.Rect(this._drawLan.x, this._drawLan.y, this._drawLan.width, this._drawLan.height),
            'isContains': false,
            'minx': this._drawLan.x,
            'maxx': this._drawLan.x + this._drawLan.width,
            'limitQiMinx': false,
            'limitEndMaxx': false,
            'isPointInner': false
        };
        this._allPointRect.push(temp);
        temp = {
            'rect': new cc.Rect(this._drawRed.x, this._drawRed.y, this._drawRed.width, this._drawRed.height),
            'isContains': false,
            'minx': this._drawRed.x,
            'maxx': this._drawRed.x + this._drawRed.width,
            'limitQiMinx': false,
            'limitEndMaxx': false,
            'isPointInner': false
        };

        // 臨時
        // bug 初始设置不播放不生效
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        this._maskBg = this._view.getChild("maskBg").asGraph;
        this._maskBg.visible = true;

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;

        this._submitBtn = this._view.getChild("submit").asButton;
        if (this._submitBtn) this._submitBtn.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._startBtn = this._view.getChild("start").asButton;
        this._startBtn.on(fgui.Event.CLICK, this._clickStart, this);

        this._player = this._view.getChild('player').asImage;
        this._player.x = this._view.width;
        this._playerRect = new cc.Rect(this._player.x - 36, this._player.y + 10, 25, this._player.height);

        this._view.off(cc.Node.EventType.TOUCH_START, this._onDrawStart, this);
        this._view.off(cc.Node.EventType.TOUCH_MOVE, this._onDrawMove, this);
        this._view.off(cc.Node.EventType.TOUCH_END, this._onDrawEnd, this);

        let huiNode = new cc.Node('huiNode');
        huiNode.parent = this._worldRoot;

        this.graphics = huiNode.addComponent(cc.Graphics);
        this.graphics.lineWidth = 20;
        this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.graphics.strokeColor = cc.color(255, 0, 0);
        this.graphics.fillColor = cc.color(255, 0, 0);
        this.graphics.enabled = false;

        // 初始化state
        this._state = {
            title: false,
            submit: this.submitType.No,
            gameStart: false,
            gameOver: this.gameResult.No,
            touch: "end",
            touchesPos: [],
            curTouchesPos: [],
            showLines: []
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
        this._drawLineRect = new cc.Rect(this._zhiLine.x, this._zhiLine.y, this._zhiLine.width, this._zhiLine.height);

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

        let state: any = globalThis._.cloneDeep(this._state);
        if (state.touch === 'no') {
            state.touch = 'start';
            let tempPos = new cc.Vec2(event.touch.getLocation().x, event.touch.getLocation().y);
            state.curTouchesPos.push(tempPos);
            this.updateState(state);
        }
    }

    _onDrawMove(event) {

        this._dragging = true;
        this._moveCurPos = new cc.Vec2(event.touch.getLocation().x, event.touch.getLocation().y);
    }

    _onDrawEnd(event) {

        this._dragging = false;

        let tempPos = new cc.Vec2(event.touch.getLocation().x, event.touch.getLocation().y);
        let state: any = globalThis._.cloneDeep(this._state);
        state.curTouchesPos.push(tempPos);
        state.touch = 'end';
        this.updateState(state);
    }

    // 排序方法
    comparePosX() {
        return function (a, b) {
            var value1 = a.x;
            var value2 = b.x;
            return value1 - value2;
        }
    }

    updatePlayerMove(dt) {

        //this.dragSchedule();
        this._gameTime++;
        console.log(this._gameTime);
        if (this._gameTime >= this._framesSecond * 9) {


            this._playerRect.x = this._player.x - 36;
            if (this._drawLineRect.intersects(this._playerRect)) {

                this._moveSpeed = 6;
                if (this._player.x <= this._moveMinX) {
                    this._gameTime = 0;
                    this.unschedule(this.updatePlayerMove);
                    let state: any = globalThis._.cloneDeep(this._state);
                    state.gameOver = this.gameResult.Success;
                    this.updateState(state);
                }

            } else {

                console.log('===== _player.x ====' + this._player.x);
                console.log('===== _touchXMin ====' + this._touchXMin);
                console.log('===== _moveMinX ====' + this._moveMinX);

                console.log(this._drawLineRect);
                console.log(this._playerRect);

                if (this._player.x > this._touchXMin) {

                    this._gameTime = 0;
                    this.unschedule(this.updatePlayerMove);

                    //游戏结束
                    let state: any = globalThis._.cloneDeep(this._state);
                    state.gameOver = this.gameResult.Fail;
                    this.updateState(state);

                    return;

                } else if (this._player.x <= this._touchXMin && this._player.x <= this._moveMinX) {

                    this._gameTime = 0;
                    this.unschedule(this.updatePlayerMove);

                    let state: any = globalThis._.cloneDeep(this._state);
                    state.gameOver = this.gameResult.Success;
                    this.updateState(state);
                    return;

                }



            }
        }

        this._player.x -= 4.2 * this._moveSpeed;
    }

    // 排序方法
    comparePos() {
        return function (a, b) {
            var value1 = a.x;
            var value2 = b.x;
            return value1 - value2;
        }
    }

    private _clickStart(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.gameStart = true;
        this.updateState(state);

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

    // 临时
    // 拖拽定时器
    dragSchedule() {
        if (this._dragging) {

            console.log('==== 3333333 拖拽定时器 ======');

            let state: any = globalThis._.cloneDeep(this._state);
            state.curTouchesPos.push(this._moveCurPos);
            state.touch = "move";
            this.updateState(state);
        }
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

        if (state.touch == "start") {

            this._curTouchesPos.length = 0;
            this._curTouchesPos = state.curTouchesPos;
            this.graphics.clear();
            this._zhiLine.visible = false;

        } else if (state.touch == "move") {

            this._curTouchesPos = state.curTouchesPos;

            const MIN_POINT_DISTANCE = 4;

            let worldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
            this.graphics.moveTo(this._curTouchesPos[0].x - worldPos.x, this._curTouchesPos[0].y - worldPos.y);
            let lastIndex = 0;
            for (let i = 1, l = this._curTouchesPos.length; i < l; i++) {
                if (this._curTouchesPos[i].sub(this._curTouchesPos[lastIndex]).mag() < MIN_POINT_DISTANCE) {
                    continue;
                }
                lastIndex = i;
                this.graphics.lineTo(this._curTouchesPos[i].x - worldPos.x, this._curTouchesPos[i].y - worldPos.y);
            }
            this.graphics.stroke();

        } else if (state.touch == "end") {

            this.graphics.clear();

            if (this._curTouchesPos.length > 0) {

                this._curTouchesPos.sort(this.comparePosX());

                for (let i = 0; i < this._curTouchesPos.length; i++) {

                    this._curTouchesPos[i].y = this._view.height - this._curTouchesPos[i].y;
                }

                for (let i = 0; i < this._allPointRect.length; i++) {

                    this._allPointRect[i].isContains = false;
                    this._allPointRect[i].limitQiMinx = false;
                    this._allPointRect[i].limitEndMaxx = false;
                    this._allPointRect[i].isPointInner = false;
                }

                let pointNums = 0;
                for (let i = 0; i < this._curTouchesPos.length; i++) {

                    for (let j = 0; j < this._allPointRect.length; j++) {

                        if (this._allPointRect[j].rect.contains(this._curTouchesPos[i])) {
                            this._allPointRect[j].isContains = true;
                            break;
                        }
                    }
                }
                for (let i = 0; i < this._allPointRect.length; i++) {

                    if (this._allPointRect[i].isContains) {
                        pointNums++;
                        continue;
                    }
                }
                console.log('===== 5555 =====' + pointNums);

                if (pointNums >= 2) {

                    for (let i = 0; i < this._allPointRect.length; i++) {

                        if (this._allPointRect[i].rect.contains(this._curTouchesPos[0]) ||
                            this._allPointRect[i].rect.contains(this._curTouchesPos[this._curTouchesPos.length - 1])) {
                            this._allPointRect[i].isPointInner = true;
                        }

                        if (this._allPointRect[i].isContains) {

                            if (this._curTouchesPos[0].x < this._allPointRect[i].minx) {

                                this._allPointRect[i].limitQiMinx = true;
                            }
                            if (this._curTouchesPos[this._curTouchesPos.length - 1].x > this._allPointRect[i].maxx) {

                                this._allPointRect[i].limitEndMaxx = true;
                            }
                        }
                    }
                    console.log('===== allPointRect ====');
                    console.log(this._allPointRect);
                    console.log(this._curTouchesPos);

                    let temp = {};
                    if (this._allPointRect[0].isContains && this._allPointRect[1].isContains) {

                        if (this._allPointRect[0].isPointInner && this._allPointRect[1].isPointInner) {

                            console.log('===== 线段 =====');
                            //线段
                            let pointMidChang = 568;
                            temp['QiX'] = 678;
                            temp['QiY'] = 636;
                            temp['chaoInterQiX'] = 0;
                            temp['chang'] = pointMidChang;
                            temp['type'] = this.lineType.LineSegment;


                        } else if (this._allPointRect[0].limitQiMinx && this._allPointRect[1].limitEndMaxx) {

                            console.log('===== 直线 =====');
                            // 直线
                            temp['QiX'] = 678;
                            temp['QiY'] = 636;
                            temp['chaoInterQiX'] = temp['QiX'] - this._curTouchesPos[0].x;
                            temp['chang'] = this._curTouchesPos[this._curTouchesPos.length - 1].sub(this._curTouchesPos[0]).mag();
                            temp['type'] = this.lineType.StraightLine;

                        } else if (this._allPointRect[0].limitQiMinx && !this._allPointRect[1].limitEndMaxx) {

                            console.log('===== 左点超出射线 =====')

                            temp['QiX'] = 678;
                            temp['QiY'] = 636;
                            temp['chaoInterQiX'] = temp['QiX'] - this._curTouchesPos[0].x;
                            temp['chang'] = this._curTouchesPos[this._curTouchesPos.length - 1].sub(this._curTouchesPos[0]).mag();
                            temp['type'] = this.lineType.LeftLanRays;

                        } else if (!this._allPointRect[0].limitQiMinx && this._allPointRect[1].limitEndMaxx) {

                            console.log('===== 右点超出的射线 =====');
                            // 右点超出的射线

                            temp['QiX'] = 678;
                            temp['QiY'] = 636;
                            temp['chaoInterQiX'] = 0;
                            temp['chang'] = this._curTouchesPos[this._curTouchesPos.length - 1].sub(this._curTouchesPos[0]).mag();
                            temp['type'] = this.lineType.RightRedRays;
                        }
                        state.showLines.push(temp);
                    }

                    this._zhiLine.visible = true;
                    this._zhiLine.width = temp['chang'];
                    this._zhiLine.x = temp['QiX'] - temp['chaoInterQiX'];
                    this._zhiLine.y = 636;
                }
            }

            setTimeout(() => {

                let state1: any = globalThis._.cloneDeep(this._state);
                state1.touch = 'no';
                state1.showLines = state.showLines;
                this.updateState(state1);

            }, 20);

        }


        if (!globalThis._.isEqual(oldState.gameOver, state.gameOver)) {

            if (state.gameOver === this.gameResult.Success) {

                this.unschedule(this.updatePlayerMove);
                // this.rightLineFly();

            } else if (state.gameOver === this.gameResult.Fail) {

                this.unschedule(this.updatePlayerMove);
                //重新开始
                cc.tween(this._player)
                    .to(0.03, { y: this._player.y + 400 })
                    .call(() => {
                        let state: any = globalThis._.cloneDeep(this._state);
                        state.gameStart = false;
                        state.gameOver = this.gameResult.No;
                        this.updateState(state);

                    })
                    .start()
            }
        }

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

        if (!globalThis._.isEqual(oldState.gameStart, state.gameStart)) {

            if (state.gameStart) {

                // 游戏开始
                this._zhiLine.visible = false;
                this.graphics.clear();
                this._player.x = this._view.width;
                this._player.y = 635;
                this._moveSpeed = 1;
                this._view.on(cc.Node.EventType.TOUCH_START, this._onDrawStart, this);
                this._view.on(cc.Node.EventType.TOUCH_MOVE, this._onDrawMove, this);
                this._view.on(cc.Node.EventType.TOUCH_END, this._onDrawEnd, this);

                this.graphics.enabled = true;

                this._startBtn.visible = false;
                this._maskBg.visible = false;

                this.schedule(this.updatePlayerMove, 0.05);

            } else {

                this._view.off(cc.Node.EventType.TOUCH_START, this._onDrawStart, this);
                this._view.off(cc.Node.EventType.TOUCH_MOVE, this._onDrawMove, this);
                this._view.off(cc.Node.EventType.TOUCH_END, this._onDrawEnd, this);

                this._startBtn.visible = true;
                this._maskBg.visible = true;
                this.graphics.enabled = false;

                this._zhiLine.visible = false;
                this._zhiLine.width = 0;
                this.graphics.clear();
                this.unschedule(this.updatePlayerMove);
            }
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    }

    // rightLineFly() {

    //     let len = this._showLinesObj.length;

    //     if (len >= 3) {

    //         return;
    //     }

    //     this._zhiLine.visible = false;
    //     this._drawLan.visible = false;
    //     this._drawRed.visible = false;

    //     let dianLeftMin = this._drawLan.x;
    //     let dianLeftMax = this._drawLan.x + this._drawLan.width;

    //     let dianRightMax = this._drawRed.x + this._drawRed.width;
    //     let dianRightMin = this._drawRed.x;

    //     let cha = 5;
    //     let tempLineData = {};

    //     // 1、直线
    //     if ((this._touchesPos[0].x - dianLeftMin) < -cha && (this._touchesPos[this._touchesPos.length - 1].x - dianRightMax) > cha) {

    //         // 直线
    //         tempLineData['type'] = this.lineType.StraightLine

    //     } else if (this._touchesPos[0].x >= dianLeftMin &&
    //         this._touchesPos[0].x <= dianLeftMax && this._touchesPos[this._touchesPos.length - 1].x >= dianRightMin && this._touchesPos[this._touchesPos.length - 1].x <= dianRightMax) {

    //         //线段
    //         tempLineData['type'] = this.lineType.LineSegment;

    //     } else if (this._touchesPos[0].x >= dianLeftMin &&
    //         this._touchesPos[0].x <= dianLeftMax && (this._touchesPos[this._touchesPos.length - 1].x - dianRightMax) > cha) {

    //         // 左蓝射线
    //         tempLineData['type'] = this.lineType.LeftLanRays;

    //     } else if (this._touchesPos[this._touchesPos.length - 1].x >= dianRightMin &&
    //         this._touchesPos[this._touchesPos.length - 1].x <= dianRightMax && (this._touchesPos[0].x - dianLeftMin) < -cha) {

    //         // 右红射线
    //         tempLineData['type'] = this.lineType.RightRedRays;

    //     }

    //     this._showLines.push(tempLineData);

    //     console.log('==== type 111 ====' + tempLineData['type']);

    //     let lineW = Math.abs(this._touchesPos[this._touchesPos.length - 1].x - this._touchesPos[0].x);

    //     let leftLan = null;
    //     let rightRed = null;

    //     let lineObj = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox2a');
    //     this._view.addChild(lineObj);
    //     lineObj.width = lineW;
    //     lineObj.x = this._touchesPos[0].x;
    //     lineObj.y = this._touchesPos[0].y;

    //     if (tempLineData['type'] === this.lineType.LineSegment) {

    //         leftLan = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox27');
    //         this._view.addChild(leftLan);
    //         leftLan.x = this._touchesPos[0].x;
    //         leftLan.y = this._drawLan.y;

    //         rightRed = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox26');
    //         this._view.addChild(rightRed);
    //         rightRed.x = this._touchesPos[this._touchesPos.length - 1].x;
    //         rightRed.y = this._drawRed.y;

    //     } else if (tempLineData['type'] === this.lineType.LeftLanRays) {

    //         leftLan = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox27');
    //         this._view.addChild(leftLan);
    //         leftLan.x = this._touchesPos[0].x;
    //         leftLan.y = this._drawLan.y;

    //     } else if (tempLineData['type'] === this.lineType.RightRedRays) {

    //         rightRed = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox26');
    //         this._view.addChild(rightRed);
    //         rightRed.x = this._touchesPos[this._touchesPos.length - 1].x;
    //         rightRed.y = this._drawRed.y;
    //     }

    //     cc.tween(lineObj)
    //         .to(0.15, { x: this._showPosArr[len].line.x, y: this._showPosArr[len].line.y })
    //         .to(0.15, { scaleX: 0.7, scaleY: 0.7 })
    //         .call(() => {
    //             let state: any = globalThis._.cloneDeep(this._state);
    //             state.gameStart = false;
    //             state.gameOver = this.gameResult.No;
    //             this.updateState(state);

    //             lineObj.width = 710;
    //             this._showLinesObj.push(lineObj);
    //             this._zhiLine.visible = true;
    //             this._drawLan.visible = true;
    //             this._drawRed.visible = true;
    //             this._zhiLine.width = 0;
    //         })
    //         .start()

    //     cc.tween(leftLan)
    //         .to(0.15, { x: this._showPosArr[len].lan.x, y: this._showPosArr[len].lan.y })
    //         .to(0.15, { scaleX: 0.7, scaleY: 0.7 })
    //         .start()

    //     cc.tween(rightRed)
    //         .to(0.15, { x: this._showPosArr[len].red.x, y: this._showPosArr[len].red.y })
    //         .to(0.15, { scaleX: 0.7, scaleY: 0.7 })
    //         .start()


    // }

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
        // this.schedule(this.dragSchedule, this._scheduleTime);
    }

    onDisable() {
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
