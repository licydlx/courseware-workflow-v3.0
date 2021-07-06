
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
export default class t4_05_model_v3 extends cc.Component {
    private _worldRoot: cc.Node;

    private _view: fgui.GComponent;

    private _c1: fgui.Controller;

    private _title: fgui.GButton;

    private _titleTrigger: fgui.GLoader;

    private _submitBtn: fgui.GButton;

    private _resetBtn: fgui.GButton;

    private _package: any;

    private _curTouchesPos: any = [];

    private _moveCurPos: cc.Vec2;

    private graphics: cc.Graphics = null;

    private _dragging = false;

    private _scheduleTime = 0.08;

    private _allTouchLinesObj = {};

    private _allOtherTouchLinesObj = {};

    private _allPointRect = [];

    private submitType: any = cc.Enum({

        No: 0,
        GuideShow: 1,
        WrongFeed: 2,
        RightFeed: 3
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

        // 臨時
        // bug 初始设置不播放不生效
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        this._allPointRect = [{
            'rect': new cc.Rect(610, 614, 80, 80),
            'isContains': false,
            'minx': 610,
            'maxx': 690,
            'miny': 614,
            'maxy': 694,
            'limitMinx': false,
            'limitMaxy': false,
            'isPointInner': false,
        },
        {
            'rect': new cc.Rect(1204, 610, 80, 80), 'isContains': false, 'minx': 1204, 'maxx': 1284, 'miny': 610, 'maxy': 690,
            'limitMaxx': false,
            'isPointInner': false,
        },
        {
            'rect': new cc.Rect(1205, 240, 80, 80), 'isContains': false, 'minx': 1205, 'maxx': 1285, 'miny': 240, 'maxy': 320,
            'limitMaxx': false,
            'isPointInner': false,
        },
        {
            'rect': new cc.Rect(611, 242, 80, 80), 'isContains': false, 'minx': 610, 'maxx': 690, 'miny': 240, 'maxy': 320,
            'limitMiny': false,
            'isPointInner': false,
        }
        ];

        // let tt1 = new cc.Vec2(1247, 282);
        // let tt2 = new cc.Vec2(652, 655);
        // console.log('=== mag DDDD ===' + tt1.sub(tt2).mag());

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;

        this._submitBtn = this._view.getChild("submit").asButton;
        if (this._submitBtn) this._submitBtn.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._resetBtn = this._view.getChild("restart").asButton;
        this._resetBtn.on(fgui.Event.CLICK, this._clickReset, this);

        this._view.on(cc.Node.EventType.TOUCH_START, this._onDrawStart, this);
        this._view.on(cc.Node.EventType.TOUCH_MOVE, this._onDrawMove, this);
        this._view.on(cc.Node.EventType.TOUCH_END, this._onDrawEnd, this);

        let huiNode = new cc.Node('huiNode');
        huiNode.parent = this._worldRoot;

        this.graphics = huiNode.addComponent(cc.Graphics);
        this.graphics.lineWidth = 20;
        this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.graphics.strokeColor = cc.color(255, 0, 0);
        this.graphics.fillColor = cc.color(255, 0, 0);

        // 初始化state
        this._state = {
            title: false,
            submit: this.submitType.No,
            touch: "no",
            reset: false,
            curTouchesPos: cc.Vec2,
            allTouchLinesPos: {},
            allOtherTouchLinesPos: [],
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
            state.curTouchesPos = tempPos;
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
        state.curTouchesPos = tempPos;
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

    // 排序方法
    comparePosY() {
        return function (a, b) {
            var value1 = a.y;
            var value2 = b.y;
            return value1 - value2;
        }
    }

    private _clickReset(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.reset = true;
        this.updateState(state);

    }

    private _clickSubmit(evt: any) {

        let state: any = globalThis._.cloneDeep(this._state);

        if (Object.keys(state.allTouchLinesPos).length === 0) {

            state.submit = this.submitType.GuideShow;

        } else {

            let isAllRight = true;
            for (let key in state.allTouchLinesPos) {

                if (!state.allTouchLinesPos[key].result) {
                    isAllRight = false;
                    break;
                }
            }
            if (isAllRight) {
                state.submit = this.submitType.RightFeed;
            } else {
                state.submit = this.submitType.WrongFeed;
            }
        }

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
            state.curTouchesPos = this._moveCurPos;
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
            this._curTouchesPos.push(state.curTouchesPos);
            this.graphics.clear();

        } else if (state.touch == "move") {

            this._curTouchesPos.push(state.curTouchesPos);

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

            this._curTouchesPos.push(state.curTouchesPos);

            this.graphics.clear();
            if (this._curTouchesPos.length > 0) {

                for (let i = 0; i < this._curTouchesPos.length; i++) {

                    this._curTouchesPos[i].y = this._view.height - this._curTouchesPos[i].y;
                }

                let tempArrX = [];
                tempArrX = this._curTouchesPos;
                tempArrX.sort(this.comparePosX());

                let tempArrY = [];
                tempArrY = this._curTouchesPos;
                tempArrY.sort(this.comparePosY());

                var chaX = Math.abs(tempArrX[tempArrX.length - 1].x - tempArrX[0].x);
                var chaY = Math.abs(tempArrY[tempArrY.length - 1].y - tempArrY[0].y);
                let isSortY = false;

                let isValid = true;
                if (chaX > 400) {

                    console.log('==== sort chaX ====');
                    this._curTouchesPos.sort(this.comparePosX());
                    console.log(this._curTouchesPos);
                } else if (chaX < 150 && chaY > 200) {
                    isSortY = true;
                    console.log('==== sort chaY ====');
                    this._curTouchesPos.sort(this.comparePosY());
                    console.log(this._curTouchesPos);

                } else {
                    isValid = false;
                }

                console.log('====== chaX ======' + chaX);
                console.log('====== chaY ======' + chaY);

                if (isValid) {

                    for (let i = 0; i < this._allPointRect.length; i++) {

                        this._allPointRect[i].isContains = false;
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

                            if (i === 0 && this._allPointRect[i].isContains) {

                                if (this._curTouchesPos[0].x < this._allPointRect[i].minx) {

                                    this._allPointRect[i].limitMinx = true;
                                }
                                if (this._curTouchesPos[this._curTouchesPos.length - 1].y > this._allPointRect[i].maxy) {

                                    this._allPointRect[i].limitMaxy = true;
                                }

                            } else if ((i === 1 && this._allPointRect[i].isContains) || (i === 2 && this._allPointRect[i].isContains)) {

                                if (this._curTouchesPos[this._curTouchesPos.length - 1].x > this._allPointRect[i].maxx) {

                                    this._allPointRect[i].limitMaxx = true;
                                }

                            } else if (i === 3 && this._allPointRect[i].isContains) {

                                if (this._curTouchesPos[0].y < this._allPointRect[i].miny) {

                                    this._allPointRect[i].limitMiny = true;
                                }
                            }
                        }

                        let temp = { 'isSortY': isSortY };
                        if (this._allPointRect[0].isContains && this._allPointRect[1].isContains) {

                            if (this._allPointRect[0].limitMinx && this._allPointRect[1].limitMaxx) {

                                // 直线
                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = 0;
                                temp['chaoInterQiX'] = temp['QiX'] - this._curTouchesPos[0].x;
                                temp['chaoInterQiY'] = 0;
                                temp['chang'] = this._curTouchesPos[this._curTouchesPos.length - 1].sub(this._curTouchesPos[0]).mag();
                                temp['result'] = true;
                                state.allTouchLinesPos['line1'] = temp;


                            } else if (this._allPointRect[0].limitMinx && !this._allPointRect[1].limitMaxx) {

                                // 左点超出射线
                                let pointMidChang = 593;

                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = 0;
                                temp['chaoInterQiX'] = temp['QiX'] - this._curTouchesPos[0].x;
                                temp['chaoInterQiY'] = 0;
                                temp['chang'] = pointMidChang + temp['chaoInterQiX'];
                                temp['result'] = false;
                                state.allTouchLinesPos['line1'] = temp;

                            } else if (!this._allPointRect[0].limitMinx && this._allPointRect[1].limitMaxx) {

                                // 右点超出的射线
                                let pointMaxX = 1245;
                                let pointMidChang = 593;

                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = 0;
                                temp['chaoInterQiX'] = 0;
                                temp['chaoInterQiY'] = 0;
                                temp['chang'] = pointMidChang + (this._curTouchesPos[this._curTouchesPos.length - 1].x - pointMaxX);
                                temp['result'] = false;
                                state.allTouchLinesPos['line1'] = temp;

                            } else if (this._allPointRect[0].isPointInner && this._allPointRect[1].isPointInner) {

                                //线段
                                let pointMidChang = 593;
                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = 0;
                                temp['chaoInterQiX'] = 0;
                                temp['chaoInterQiY'] = 0;
                                temp['chang'] = pointMidChang;
                                temp['result'] = false;
                                state.allTouchLinesPos['line1'] = temp;
                            }

                        } else if (this._allPointRect[0].isContains && this._allPointRect[2].isContains) {

                            if (this._allPointRect[0].limitMinx && this._allPointRect[2].limitMaxx) {

                                // 直线
                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = -32;
                                temp['chaoInterQiX'] = temp['QiX'] - this._curTouchesPos[0].x;
                                temp['chaoInterQiY'] = Math.tan(-32) * (652 - this._curTouchesPos[0].x);
                                temp['chang'] = this._curTouchesPos[this._curTouchesPos.length - 1].sub(this._curTouchesPos[0]).mag();
                                temp['result'] = true;
                                state.allTouchLinesPos['line2'] = temp;

                            } else if (this._allPointRect[0].limitMinx && !this._allPointRect[2].limitMaxx) {

                                // 左点超出射线
                                let pointMidChang = 702;

                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = -32;
                                temp['chaoInterQiX'] = temp['QiX'] - this._curTouchesPos[0].x;
                                temp['chaoInterQiY'] = Math.tan(-32) * (652 - this._curTouchesPos[0].x);;
                                temp['chang'] = pointMidChang + temp['chaoInterQiX'];
                                temp['result'] = false;
                                state.allTouchLinesPos['line2'] = temp;

                            } else if (!this._allPointRect[0].limitMinx && this._allPointRect[2].limitMaxx) {

                                // 右点超出的射线
                                let pointMaxX = 1245;
                                let pointMidChang = 702;

                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = -32;
                                temp['chaoInterQiX'] = 0;
                                temp['chaoInterQiY'] = 0;
                                temp['chang'] = pointMidChang + (this._curTouchesPos[this._curTouchesPos.length - 1].x - pointMaxX);
                                temp['result'] = false;
                                state.allTouchLinesPos['line2'] = temp;

                            } else if (this._allPointRect[0].isPointInner && this._allPointRect[2].isPointInner) {

                                //线段
                                let pointMidChang = 702;
                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = -32;
                                temp['chaoInterQiX'] = 0;
                                temp['chaoInterQiY'] = 0;
                                temp['chang'] = pointMidChang;
                                temp['result'] = false;
                                state.allTouchLinesPos['line2'] = temp;
                            }

                        } else if (this._allPointRect[0].isContains && this._allPointRect[3].isContains) {

                            if (this._allPointRect[0].limitMaxy && this._allPointRect[3].limitMiny) {

                                // 直线
                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = -90;
                                temp['chaoInterQiX'] = 0;
                                temp['chaoInterQiY'] = this._curTouchesPos[this._curTouchesPos.length - 1].y - temp['QiY'];
                                temp['chang'] = this._curTouchesPos[this._curTouchesPos.length - 1].sub(this._curTouchesPos[0]).mag();
                                temp['result'] = true;
                                state.allTouchLinesPos['line3'] = temp;

                            } else if (this._allPointRect[0].limitMaxy && !this._allPointRect[3].limitMiny) {

                                // 下点超出射线
                                let pointMidChang = 372;

                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = -90;
                                temp['chaoInterQiX'] = 0;
                                temp['chaoInterQiY'] = this._curTouchesPos[this._curTouchesPos.length - 1].y - temp['QiY'];
                                temp['chang'] = pointMidChang + temp['chaoInterQiY'];
                                temp['result'] = false;
                                state.allTouchLinesPos['line3'] = temp;

                            } else if (!this._allPointRect[0].limitMaxy && this._allPointRect[3].limitMiny) {

                                // 上点超出的射线
                                let pointMinY = 283;
                                let pointMidChang = 372;

                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = -90;

                                temp['chaoInterQiX'] = 0;
                                temp['chaoInterQiY'] = 0;
                                temp['chang'] = pointMidChang + (pointMinY - this._curTouchesPos[0].y);
                                temp['result'] = false;
                                state.allTouchLinesPos['line3'] = temp;

                            } else if (this._allPointRect[0].isPointInner && this._allPointRect[3].isPointInner) {

                                //线段
                                let pointMidChang = 372;
                                temp['QiX'] = 652;
                                temp['QiY'] = 655;
                                temp['angle'] = -90;

                                temp['chaoInterQiX'] = 0;
                                temp['chaoInterQiY'] = 0;
                                temp['chang'] = pointMidChang;
                                temp['result'] = false;
                                state.allTouchLinesPos['line3'] = temp;
                            }
                        } else {

                            temp['QiX'] = this._curTouchesPos[0].x;
                            temp['QiY'] = this._curTouchesPos[0].y;
                            if (isSortY) {
                                temp['angle'] = -this.angle(this._curTouchesPos[0], this._curTouchesPos[this._curTouchesPos.length - 1]);
                            } else {
                                temp['angle'] = this.angle(this._curTouchesPos[0], this._curTouchesPos[this._curTouchesPos.length - 1]);
                            }

                            temp['chaoInterQiX'] = 0;
                            temp['chaoInterQiY'] = 0;
                            temp['chang'] = this._curTouchesPos[this._curTouchesPos.length - 1].sub(this._curTouchesPos[0]).mag();;
                            temp['result'] = false;
                            state.allOtherTouchLinesPos.push(temp);
                        }
                    }
                }

                setTimeout(() => {

                    let state1: any = globalThis._.cloneDeep(this._state);
                    state1.touch = 'no';
                    state1.allTouchLinesPos = state.allTouchLinesPos;
                    state1.allOtherTouchLinesPos = state.allOtherTouchLinesPos;
                    this.updateState(state1);

                }, 20);
            }
        }

        if (!globalThis._.isEqual(oldState.allOtherTouchLinesPos, state.allOtherTouchLinesPos)) {

            for (let key in this._allOtherTouchLinesObj) {
                this._allOtherTouchLinesObj[key].removeFromParent();
            }

            for (let i = 0; i < state.allOtherTouchLinesPos.length; i++) {

                let temp = state.allOtherTouchLinesPos[i];
                let zhiLine = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox2a');
                this._view.addChild(zhiLine);
                zhiLine.width = temp['chang'];

                zhiLine.x = temp.QiX - temp.chaoInterQiX;
                if (temp.isSortY) {

                    zhiLine.y = temp.QiY + temp.chaoInterQiY;

                } else {

                    zhiLine.y = temp.QiY - temp.chaoInterQiY;
                }

                zhiLine.rotation = temp.angle;
                this._allOtherTouchLinesObj[i] = zhiLine;
            }

        }

        if (!globalThis._.isEqual(oldState.allTouchLinesPos, state.allTouchLinesPos)) {

            for (let key in this._allTouchLinesObj) {
                this._allTouchLinesObj[key].removeFromParent();
            }

            for (let key in state.allTouchLinesPos) {

                let temp = state.allTouchLinesPos[key];
                let zhiLine = fgui.UIPackage.createObjectFromURL('ui://mgpb39d5xdox2a');
                this._view.addChild(zhiLine);
                zhiLine.width = temp['chang'];

                zhiLine.x = temp.QiX - temp.chaoInterQiX;
                if (temp.isSortY) {

                    zhiLine.y = temp.QiY + temp.chaoInterQiY;

                } else {

                    zhiLine.y = temp.QiY - temp.chaoInterQiY;
                }

                zhiLine.rotation = temp.angle;
                this._allTouchLinesObj[key] = zhiLine;
            }
        }

        if (!globalThis._.isEqual(oldState.reset, state.reset)) {

            if (state.reset) {

                for (let key in state.allTouchLinesPos) {
                    delete state.allTouchLinesPos[key];
                }

                for (let key in this._allTouchLinesObj) {
                    this._allTouchLinesObj[key].removeFromParent();
                }

                for (let key in this._allOtherTouchLinesObj) {
                    this._allOtherTouchLinesObj[key].removeFromParent();
                }

                setTimeout(() => {

                    let state1: any = globalThis._.cloneDeep(this._state);
                    state1.reset = false;
                    state1.allTouchLinesPos = state.allTouchLinesPos;
                    state1.allOtherTouchLinesPos = [];
                    this.updateState(state1);

                }, 10);

            }

        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            if (state.submit === this.submitType.RightFeed) {

                this.answerFeedback(true);

            } else if (state.submit === this.submitType.WrongFeed) {

                this.answerFeedback(false);

            } else if (state.submit === this.submitType.GuideShow) {

                // let keyBtn = this._view.getChild('input1').asButton;
                // this.handTips2(keyBtn);
            }
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    }

    angle(start, end) {
        var diff_x = end.x - start.x,
            diff_y = end.y - start.y;
        //返回角度,不是弧度
        return 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
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
        this.schedule(this.dragSchedule, this._scheduleTime);
    }

    onDisable() {
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
