
/*
 * @Descripttion: 
 * @version: 
 * @Author: ruzhuan
 * @Date: 2021-5-26 16:00:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-5-27 12:00:00
 */

const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { pointBelongArea } = window['GlobalData'].utils;

const { ccclass, property } = cc._decorator;

@ccclass
export default class dragAnswer_model03_v2 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;

    private _colliderGroup: fgui.GGroup;
    private _collideredGroup: fgui.GGroup;

    private _colliderBox = [];

    private _leftPositon: any = [{ x: 200, y: 890 }, { x: 355, y: 890 }, { x: 515, y: 890 }, { x: 680, y: 890 }];
    private _rightPositon: any = [{ x: 1255, y: 890 }, { x: 1410, y: 890 }, { x: 1560, y: 890 }, { x: 1715, y: 890 }];

    private _typeBoxPos1: any = [{ x: 170, y: 877 }, { x: 322, y: 877 }];
    private _typeBoxPos2: any = [{ x: 634, y: 877 }, { x: 800, y: 877 }];
    private _typeBoxPos3: any = [{ x: 1136, y: 877 }, { x: 1297, y: 877 }];
    private _typeBoxPos4: any = [{ x: 1584, y: 877 }, { x: 1751, y: 877 }];

    private _colliderCacheSecond: any = [
        { pos: { x: 245, y: 470 }, index: 5 },
        { pos: { x: 400, y: 470 }, index: 3 },
        { pos: { x: 560, y: 470 }, index: 0 },
        { pos: { x: 710, y: 470 }, index: 7 },
        { pos: { x: 1200, y: 470 }, index: 4 },
        { pos: { x: 1360, y: 470 }, index: 6 },
        { pos: { x: 1510, y: 470 }, index: 1 },
        { pos: { x: 1660, y: 470 }, index: 2 }];

    private _leftRect: cc.Rect;
    private _rightRect: cc.Rect;

    private _boxRect1: cc.Rect;
    private _boxRect2: cc.Rect;
    private _boxRect3: cc.Rect;
    private _boxRect4: cc.Rect;

    private _leftContain: any = [];
    private _rightContain: any = [];

    private _box1Contain: any = [];
    private _box2Contain: any = [];
    private _box3Contain: any = [];
    private _box4Contain: any = [];

    private _containerTotal: number = 4;

    private _containerTotalSecond: number = 2;

    private _colliderCache = [];

    private _submit: fgui.GButton;

    private _c2: fgui.Controller;
    private _c1: fgui.Controller;

    private _title: fgui.GButton;

    private _titleTrigger: fgui.GLoader;

    private _dragSound: cc.AudioClip;

    private _clickSound: cc.AudioClip;

    private _dragging = false;

    // fairygui 组件
    private handleGuide: any;

    private handleGuide2: any;

    private _lastPos: any;

    private answerType: any = cc.Enum({

        Recyclable: '1'

    });

    // 远程动态组件
    private feedback: any;

    private _answer: any = []; // 0：没答题时 1：答对第一种选择时 2： 答对第二种选择时

    private _state = {};

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;
        this.mergeState();
    }

    onLoad() {

        this._answer = [];
        this._leftContain = [];
        this._rightContain = [];
        this._box1Contain = [];
        this._box2Contain = [];
        this._box3Contain = [];
        this._box4Contain = [];

        this._colliderBox = [];

        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._colliderGroup = this._view.getChild("colliderBox").asGroup;

        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == this._colliderGroup) {
                let node: fgui.GButton = this._view.getChildAt(i).asButton;
                node.draggable = true;
                node.data = {
                    index: this._colliderBox.length,
                    x: node.x,
                    y: node.y,
                    posIndex: -1
                };

                node.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                node.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                node.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(node);
                let colliderData = { pos: { x: node.data.x, y: node.data.y }, index: node.data.index, posIndex: node.data.posIndex };
                this._colliderCache.push(colliderData);

            }
        }

        let left: fgui.GImage = this._view.getChild("leftBg").asImage;
        let right: fgui.GImage = this._view.getChild("rightBg").asImage;

        let box1: fgui.GImage = this._view.getChild("typebg1").asImage;
        let box2: fgui.GImage = this._view.getChild("typebg2").asImage;
        let box3: fgui.GImage = this._view.getChild("typebg3").asImage;
        let box4: fgui.GImage = this._view.getChild("typebg4").asImage;

        this._leftRect = new cc.Rect(left.x, left.y, left.width, left.height);
        this._rightRect = new cc.Rect(right.x, right.y, right.width, right.height);

        this._boxRect1 = new cc.Rect(box1.x, box1.y, box1.width, box1.height);
        this._boxRect2 = new cc.Rect(box2.x, box2.y, box2.width, box2.height);
        this._boxRect3 = new cc.Rect(box3.x, box3.y, box3.width, box3.height);
        this._boxRect4 = new cc.Rect(box4.x, box4.y, box4.width, box4.height);

        this._c2 = this._view.getController("c2");
        this._c1 = this._view.getController("c1");
        if (this._c2) {
            this._c2.selectedIndex = 0;
        }

        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;

        // 初始化state
        this._state = {

            answer: this._answer,

            colliderBox: this._colliderCache,

            leftContain: [],

            rightContain: [],

            box1Contain: [],

            box2Contain: [],

            box3Contain: [],

            box4Contain: [],

            title: false,

            submit: false
        }

        // 临时 禁止操作期间 切页
        this.disableForbidHandle();

    }

    // 运行时 禁止操作
    forbidHandle() {
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

    // 操作提示
    onHandleGuide(handleGuide) {
        if (!handleGuide) return;
        let state: any = globalThis._.cloneDeep(this._state);
        fgui.GRoot.inst.addChild(handleGuide.component);
        if (handleGuide.pos) {
            handleGuide.component.x = (fgui.GRoot.inst.width - handleGuide.component.width) / 2 + handleGuide.pos.x;
            handleGuide.component.y = (fgui.GRoot.inst.height - handleGuide.component.height) / 2 + handleGuide.pos.y;
        } else {
            handleGuide.component.y = (fgui.GRoot.inst.height - handleGuide.component.height) / 2;
        }

        let t: fgui.Transition = handleGuide.component.getTransition("t0");
        t.play(() => {
            fgui.GRoot.inst.removeChild(handleGuide.component);
            state.submit = false;
            this.updateState(state);
        }, 2);
    }

    // 消除禁止
    disableForbidHandle() {
        let handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask) handleMask.destroy();
    }

    // 临时
    // 拖拽定时器
    dragSchedule() {
        if (this._dragging) {
            let state: any = globalThis._.cloneDeep(this._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
            };
            this.updateState(state);
        }
    }

    async init(data: any) {

        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;

        if (model.uiPath) {
            let GComponent = model.uiPath;
            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        }

        if (model.config) {
            let { answer, ae } = model.config;
            if (answer) this._answer = answer;
            // 动效注册
            if (ae) {
                for (let v in ae) {
                    if (ae[v]) {
                        this[v] = {};
                        if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                        if (ae[v].pos) this[v].pos = ae[v].pos;
                    }
                }
            }
        }

        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }

        let dragBut: fgui.GButton = this._view.getChild('dragSound').asButton;
        dragBut.visible = false;
        let item = fgui.UIPackage.getItemByURL(dragBut["_sound"]);
        this._dragSound = await loadResource(item.file, cc.AudioClip);

        let clickBut: fgui.GButton = this._view.getChild('clickSound').asButton;
        clickBut.visible = false;
        item = fgui.UIPackage.getItemByURL(clickBut["_sound"]);
        this._clickSound = await loadResource(item.file, cc.AudioClip);
    }

    getOriginValue(v: any) {
        return {
            x: v.x,
            y: v.y
        }
    }

    private _onDragStart(evt: fgui.Event): void {

        evt.captureTouch();

        this._lastPos = evt.pos;

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        btn.sortingOrder = 99;

        let state: any = globalThis._.cloneDeep(this._state);

        for (let i = 0; i < state.colliderBox.length; i++) {

            if (btn.data.index === state.colliderBox[i].index) {

                state.colliderBox.splice(i, 1);
                break;
            }
        }
        cc.audioEngine.play(this._clickSound, false, 1);

        this.updateState(state);
    }

    private _onDragMove(evt: fgui.Event): void {

    }

    private _onDragEnd(evt: fgui.Event): void {
        cc.audioEngine.play(this._dragSound, false, 1);

        if (this._answer.length === 0) {

            // 第一次答题时
            this.dragEndFirstDeal(evt);

        } else if (this._answer.length === 1) {

            // 第二次答题时
            this.dragEndScendDeal(evt);
        }
    }

    private dragEndFirstDeal(evt) {

        let state: any = globalThis._.cloneDeep(this._state);

        let moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let tarPos = new cc.Vec2(btn.x, btn.y);
        let isContainerLeft = false;
        let isContainerRight = false;

        isContainerLeft = this.judgeDragObjInBox(this._leftContain, btn);
        isContainerRight = this.judgeDragObjInBox(this._rightContain, btn);

        // 左
        if (this._leftRect.contains(tarPos)) {
            console.log('==== 左 ====');

            if (isContainerLeft) {

                if (moveIsMin || this._leftContain.length < 2) {

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._leftContain, btn, state.leftContain);
                    this.refreshBoxPos(state.leftContain, this._leftPositon);

                } else {

                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.leftContain, this._leftPositon, btn, this._leftContain, state.colliderBox);
                }


            } else {

                this.dealAllContainIn(false, true, false, false, false, false, state, btn);

                if (this._leftContain.length < this._containerTotal) {

                    this._leftContain.push(btn);

                    let temp = {
                        pos: {
                            x: this._leftPositon[state.leftContain.length].x,
                            y: this._leftPositon[state.leftContain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.leftContain.length
                    };
                    state.leftContain.push(temp);

                } else {

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }

        } else if (this._rightRect.contains(tarPos)) {

            if (isContainerRight) {

                if (moveIsMin || this._rightContain.length < 2) {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._rightContain, btn, state.rightContain);
                    this.refreshBoxPos(state.rightContain, this._rightPositon);
                } else {

                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.rightContain, this._rightPositon, btn, this._rightContain, state.colliderBox);
                }

            } else {

                this.dealAllContainIn(true, false, false, false, false, false, state, btn);

                if (this._rightContain.length < this._containerTotal) {

                    this._rightContain.push(btn);

                    let temp = {
                        pos: {
                            x: this._rightPositon[state.rightContain.length].x,
                            y: this._rightPositon[state.rightContain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.rightContain.length
                    };
                    state.rightContain.push(temp);

                } else {

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }

        } else {

            this.dealAllContainIn(true, true, false, false, false, false, state, btn);

            // 恢复原位
            this.resetButtonInitPos(state.colliderBox, btn);
        }

        this.updateState(state);

    }

    private dragEndScendDeal(evt) {

        let state: any = globalThis._.cloneDeep(this._state);

        let moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let tarPos = new cc.Vec2(btn.x, btn.y);
        let isContainer1 = false;
        let isContainer2 = false;
        let isContainer3 = false;
        let isContainer4 = false;

        isContainer1 = this.judgeDragObjInBox(this._box1Contain, btn);
        isContainer2 = this.judgeDragObjInBox(this._box2Contain, btn);
        isContainer3 = this.judgeDragObjInBox(this._box3Contain, btn);
        isContainer4 = this.judgeDragObjInBox(this._box4Contain, btn);

        // 左
        if (this._boxRect1.contains(tarPos)) {
            console.log('==== 框1 ====');

            if (isContainer1) {

                if (moveIsMin || this._box1Contain.length < 2) {

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box1Contain, btn, state.box1Contain);
                    this.refreshBoxPos(state.box1Contain, this._typeBoxPos1);

                } else {

                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box1Contain, this._typeBoxPos1, btn, this._box1Contain, state.colliderBox);
                }

            } else {

                this.dealAllContainIn(false, false, false, true, true, true, state, btn);

                if (this._box1Contain.length < this._containerTotalSecond) {
                    this._box1Contain.push(btn);

                    let temp = {
                        pos: {
                            x: this._typeBoxPos1[state.box1Contain.length].x,
                            y: this._typeBoxPos1[state.box1Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box1Contain.length
                    };
                    state.box1Contain.push(temp);

                } else {
                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);

                }
            }

        } else if (this._boxRect2.contains(tarPos)) {

            console.log('==== 框2 ====');

            if (isContainer2) {

                if (moveIsMin || this._box2Contain.length < 2) {

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box2Contain, btn, state.box2Contain);
                    this.refreshBoxPos(state.box2Contain, this._typeBoxPos2);

                } else {

                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box2Contain, this._typeBoxPos2, btn, this._box2Contain, state.colliderBox);
                }


            } else {

                this.dealAllContainIn(false, false, true, false, true, true, state, btn);

                if (this._box2Contain.length < this._containerTotalSecond) {

                    this._box2Contain.push(btn);

                    let temp = {
                        pos: {
                            x: this._typeBoxPos2[state.box2Contain.length].x,
                            y: this._typeBoxPos2[state.box2Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box2Contain.length
                    };
                    state.box2Contain.push(temp);

                } else {

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }

            }
        } else if (this._boxRect3.contains(tarPos)) {

            console.log('==== 框3 ====');

            if (isContainer3) {

                if (moveIsMin || this._box3Contain.length < 2) {

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box3Contain, btn, state.box3Contain);
                    this.refreshBoxPos(state.box3Contain, this._typeBoxPos3);

                } else {

                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box3Contain, this._typeBoxPos3, btn, this._box3Contain, state.colliderBox);
                }


            } else {

                this.dealAllContainIn(false, false, true, true, false, true, state, btn);

                if (this._box3Contain.length < this._containerTotalSecond) {

                    this._box3Contain.push(btn);

                    let temp = {
                        pos: {
                            x: this._typeBoxPos3[state.box3Contain.length].x,
                            y: this._typeBoxPos3[state.box3Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box3Contain.length
                    };
                    state.box3Contain.push(temp);

                } else {

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }


            }
        } else if (this._boxRect4.contains(tarPos)) {

            console.log('==== 框4 ====');

            if (isContainer4) {

                if (moveIsMin || this._box4Contain.length < 2) {

                    console.log('==== 恢复原位 XXXX ==== ' + Math.abs(evt.pos.x - this._lastPos.x));
                    console.log('==== 恢复原位 YYYY ==== ' + Math.abs(evt.pos.y - this._lastPos.y));

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._box4Contain, btn, state.box4Contain);
                    this.refreshBoxPos(state.box4Contain, this._typeBoxPos4);

                } else {

                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.box4Contain, this._typeBoxPos4, btn, this._box4Contain, state.colliderBox);
                }


            } else {

                this.dealAllContainIn(false, false, true, true, true, false, state, btn);

                if (this._box4Contain.length < this._containerTotalSecond) {

                    this._box4Contain.push(btn);

                    let temp = {
                        pos: {
                            x: this._typeBoxPos4[state.box4Contain.length].x,
                            y: this._typeBoxPos4[state.box4Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box4Contain.length
                    };
                    state.box4Contain.push(temp);

                } else {

                    // 恢复原位
                    this.resetButtonInitPos(state.colliderBox, btn);
                }
            }

        } else {

            this.dealAllContainIn(false, false, true, true, true, true, state, btn);
            // 恢复原位
            this.resetButtonInitPos(state.colliderBox, btn);
        }

        this.updateState(state);
    }

    private dealAllContainIn(isContainerLeft, isContainerRight, isContainer1, isContainer2, isContainer3, isContainer4, state, btn) {

        if (isContainerLeft) {

            this.deleteCurDragObjInBox(this._leftContain, btn, state.leftContain);
            this.refreshBoxPos(state.leftContain, this._leftPositon);
        }

        if (isContainerRight) {

            this.deleteCurDragObjInBox(this._rightContain, btn, state.rightContain);
            this.refreshBoxPos(state.rightContain, this._rightPositon);
        }

        if (isContainer1) {

            this.deleteCurDragObjInBox(this._box1Contain, btn, state.box1Contain);
            this.refreshBoxPos(state.box1Contain, this._typeBoxPos1);
        }

        if (isContainer2) {

            this.deleteCurDragObjInBox(this._box2Contain, btn, state.box2Contain);
            this.refreshBoxPos(state.box2Contain, this._typeBoxPos2);
        }
        if (isContainer3) {

            this.deleteCurDragObjInBox(this._box3Contain, btn, state.box3Contain);
            this.refreshBoxPos(state.box3Contain, this._typeBoxPos3);
        }
        if (isContainer4) {

            this.deleteCurDragObjInBox(this._box4Contain, btn, state.box4Contain);
            this.refreshBoxPos(state.box4Contain, this._typeBoxPos4);
        }

    }

    private judgeChangePosInBox(curPos, stateContain, posArr, btn, boxContain, stateColliderBox) {

        let changeIndex = -1;
        let clickIndex = btn.data.posIndex;

        console.log('交换 点击的Index ========' + btn.data.posIndex);

        if (curPos.x - this._lastPos.x > 110 && Math.abs(curPos.y - this._lastPos.y) < 50) {

            console.log('交换 右 ========');
            //右
            changeIndex = clickIndex + 1;

        } else if (curPos.x - this._lastPos.x < -110 && Math.abs(curPos.y - this._lastPos.y) < 50) {

            //左
            console.log('交换 左 ========');
            changeIndex = clickIndex - 1;

        } else if (curPos.y - this._lastPos.y > 110 && Math.abs(curPos.x - this._lastPos.x) < 50) {

            // 下
            console.log('交换 下 ========');
            changeIndex = clickIndex + 2;


        } else if (curPos.y - this._lastPos.y < -110 && Math.abs(curPos.x - this._lastPos.x) < 50) {

            // 上
            console.log('交换 上 ========');
            changeIndex = clickIndex - 2;
        } else if (curPos.x - this._lastPos.x > 110 && curPos.y - this._lastPos.y > 110) {

            // 右下
            console.log('交换 右下 ========');
            changeIndex = clickIndex + 3;

        } else if (Math.abs(curPos.x - this._lastPos.x) > 50 && curPos.x - this._lastPos.x < 110 && curPos.y - this._lastPos.y > 110) {

            // 左下
            console.log('交换 左下 ========');
            changeIndex = clickIndex + 1;

        } else if (curPos.x - this._lastPos.x > 110 && curPos.y - this._lastPos.y < 110 && Math.abs(curPos.y - this._lastPos.y) > 50) {
            // 右上
            console.log('交换 右上 ========');
            changeIndex = clickIndex - 1;

        } else if (curPos.x - this._lastPos.x < 110 && curPos.y - this._lastPos.y < 110 && Math.abs(curPos.x - this._lastPos.x) > 50 && Math.abs(curPos.y - this._lastPos.y) > 50) {

            // 左上
            console.log('交换 左上 ========');
            changeIndex = clickIndex - 3;

        } else {

            console.log('交换 YYYYY ========' + (curPos.y - this._lastPos.y));

            // 恢复原位
            this.resetButtonInitPos(stateColliderBox, btn);

            //删除左边包含的；刷新
            this.deleteCurDragObjInBox(boxContain, btn, stateContain);
            this.refreshBoxPos(stateContain, posArr);

            return;
        }

        console.log('交换ing clickIndex ========  ' + clickIndex);
        console.log('交换ing changeIndex ========  ' + changeIndex);

        if (changeIndex < 0 || changeIndex > stateContain.length - 1) {

            //删除左边包含的；归位到原来的位置
            this.resetButtonInitPos(stateColliderBox, btn);
            this.deleteCurDragObjInBox(boxContain, btn, stateContain);
            this.refreshBoxPos(stateContain, posArr);

            return;
        }

        let tempClickIndex = stateContain[clickIndex].index;
        let tempChangeIndex = stateContain[changeIndex].index;

        stateContain[clickIndex].index = tempChangeIndex;
        stateContain[changeIndex].index = tempClickIndex;
    }

    private deleteCurDragObjInBox(_box, curBut, stateBox) {

        for (let i = 0; i < _box.length; i++) {

            if (_box[i] === curBut) {

                _box.splice(i, 1);

                for (let i = 0; i < stateBox.length; i++) {

                    if (stateBox[i].index === curBut.data.index) {

                        stateBox.splice(i, 1);
                        break;
                    }
                }
                break;
            }
        }
    }

    private resetButtonInitPos(stateColliderBox, btn) {

        // 恢复原位
        let temp = {
            pos:
            {
                x: btn.data.x,
                y: btn.data.y
            },
            index: btn.data.index,
            posIndex: -1
        };
        stateColliderBox.push(temp);

    }

    private judgeDragObjInBox(_box, curBut) {

        let isContainer = false;
        for (let i = 0; i < _box.length; i++) {

            if (_box[i] === curBut) {

                isContainer = true;
                break;
            }
        }

        return isContainer;
    }

    private refreshBoxPos(stateBox, posArr) {

        for (let i = 0; i < stateBox.length; i++) {

            stateBox[i].pos.x = posArr[i].x;
            stateBox[i].pos.y = posArr[i].y;
            stateBox[i].posIndex = i;
        }
    }

    private refreshFirstWrongData(state) {

        state.colliderBox = [];
        for (let i = 0; i < this._colliderBox.length; i++) {

            let temp = {
                pos: {
                    x: this._colliderBox[i].data.x,
                    y: this._colliderBox[i].data.y
                },

                index: this._colliderBox[i].data.index
            };
            state.colliderBox.push(temp);
        }

        this._leftContain = [];
        this._rightContain = [];

        state.leftContain = [];
        state.rightContain = [];
    }

    private refreshSecondWrongData(state) {

        state.colliderBox = [];
        for (let i = 0; i < this._colliderBox.length; i++) {

            let temp = {
                pos: {
                    x: this._colliderBox[i].data.x,
                    y: this._colliderBox[i].data.y
                },

                index: this._colliderBox[i].data.index
            };
            state.colliderBox.push(temp);
        }

        this._box1Contain = [];
        this._box2Contain = [];
        this._box3Contain = [];
        this._box4Contain = [];

        state.box1Contain = [];
        state.box2Contain = [];
        state.box3Contain = [];
        state.box4Contain = [];
    }

    private _clickTitle(evt: any) {
        cc.audioEngine.play(this._clickSound, false, 1);
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
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

    private async _clickSubmit(evt: any) {

        let state: any = globalThis._.cloneDeep(this._state);
        if (this._answer.length === 0) {
            if (this._leftContain.length === 0 && this._rightContain.length === 0) {

                state.submit = true;
                this.updateState(state);
                return;
            }
        } else if (this._answer.length === 1) {

            if (this._box1Contain.length === 0 && this._box2Contain.length === 0 && this._box3Contain.length === 0 && this._box4Contain.length === 0) {

                state.submit = true;
                this.updateState(state);
                return;
            }

        } else if (this._answer.length >= 2) {

            return;
        }

        // 前：1 后：2
        if (this._answer.length === 0) {

            if (this._leftContain.length < this._containerTotal || this._rightContain.length < this._containerTotal) {

                this.answerFeedback(false);
                return;
            }

            if (this._leftContain[0].name[0] === this.answerType.Recyclable &&
                this._leftContain[1].name[0] === this.answerType.Recyclable &&
                this._leftContain[2].name[0] === this.answerType.Recyclable &&
                this._leftContain[3].name[0] === this.answerType.Recyclable) {

                console.log('=== 第一次回答正确 ===');
                // 第一次答案正确
                this.answerFeedback(true);
                this._answer.push(true);
                state.answer = this._answer;
                this.refreshFirstRightData(state);

            } else {
                console.log('=== 第一次回答错误 ===' + this._leftContain[0].name[0]);
                console.log('=== 第一次回答错误 ===' + this._leftContain[1].name[0]);
                console.log('=== 第一次回答错误 ===' + this._leftContain[2].name[0]);
                console.log('=== 第一次回答错误 ===' + this._leftContain[3].name[0]);

                // 第一次答案错误
                this.answerFeedback(false);
                // this.refreshFirstWrongData(state);
            }

        } else if (this._answer.length === 1) {

            if (this._box1Contain.length < this._containerTotalSecond ||
                this._box2Contain.length < this._containerTotalSecond ||
                this._box3Contain.length < this._containerTotalSecond ||
                this._box4Contain.length < this._containerTotalSecond) {

                this.answerFeedback(false);
                return;
            }

            if (this._box1Contain[0].name[1] === this._box1Contain[1].name[1] &&
                this._box3Contain[0].name[1] === this._box3Contain[1].name[1]) {

                // 第一个分类正确
                console.log('=== 第二次答案正确 ===');
                this.answerFeedback(true);
                this._answer.push(true);
                state.answer = this._answer;

            } else {
                console.log('=== 第二次答案错误 ===');
                this.answerFeedback(false);
                // this.refreshSecondWrongData(state);
            }
        }

        this.updateState(state);

    }

    refreshFirstRightData(state) {

        state.colliderBox = [];
        // 第二次做题时初始化按钮全部位置
        for (let i = 0; i < this._colliderBox.length; i++) {

            for (let j = 0; j < this._colliderCacheSecond.length; j++) {

                if (this._colliderBox[i].data.index === this._colliderCacheSecond[j].index) {
                    this._colliderBox[i].data.x = this._colliderCacheSecond[j].pos.x;
                    this._colliderBox[i].data.y = this._colliderCacheSecond[j].pos.y;

                    let temp = {
                        pos: {
                            x: this._colliderBox[i].data.x,
                            y: this._colliderBox[i].data.y
                        },

                        index: this._colliderBox[i].data.index
                    };
                    state.colliderBox.push(temp);
                }
            }
        }

        this._leftContain = [];
        this._rightContain = [];

        state.leftContain = [];
        state.rightContain = [];

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

        if (!globalThis._.isEqual(oldState.answer, state.answer)) {

            if (state.answer.length === 0) {
                // 显示初始答题界面
                this._c2.selectedIndex = 0;
                this._submit.x = 842;
                this._submit.y = 724;

            } else if (state.answer.length === 1) {
                // 显示第二种答题界面
                this._c2.selectedIndex = 1;

                this._submit.x = 1667;
                this._submit.y = 0;

            } else if (state.answer.length === 2) {

                this.offButDrag();
            }
        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            if (state.submit) {
                if (state.answer.length === 0) {
                    this.onHandleGuide(this.handleGuide);
                } else if (state.answer.length === 1) {
                    this.onHandleGuide(this.handleGuide2);
                }

            }
        }

        if (!globalThis._.isEqual(oldState.colliderBox, state.colliderBox)) {


            for (let i = 0; i < state.colliderBox.length; i++) {

                this._colliderBox[state.colliderBox[i].index].x = state.colliderBox[i].pos.x;
                this._colliderBox[state.colliderBox[i].index].y = state.colliderBox[i].pos.y;
                this._colliderBox[state.colliderBox[i].index].data.posIndex = -1;
                this._colliderBox[state.colliderBox[i].index].sortingOrder = 1;
                this._colliderBox[state.colliderBox[i].index].draggable = true;
            }
        }

        if (!globalThis._.isEqual(oldState.leftContain, state.leftContain)) {

            for (let i = 0; i < state.leftContain.length; i++) {
                this._colliderBox[state.leftContain[i].index].x = state.leftContain[i].pos.x;
                this._colliderBox[state.leftContain[i].index].y = state.leftContain[i].pos.y;
                this._colliderBox[state.leftContain[i].index].data.posIndex = state.leftContain[i].posIndex;
                this._colliderBox[state.leftContain[i].index].sortingOrder = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.rightContain, state.rightContain)) {

            for (let i = 0; i < state.rightContain.length; i++) {
                this._colliderBox[state.rightContain[i].index].x = state.rightContain[i].pos.x;
                this._colliderBox[state.rightContain[i].index].y = state.rightContain[i].pos.y;
                this._colliderBox[state.rightContain[i].index].data.posIndex = state.rightContain[i].posIndex;
                this._colliderBox[state.rightContain[i].index].sortingOrder = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.box1Contain, state.box1Contain)) {
            for (let i = 0; i < state.box1Contain.length; i++) {
                this._colliderBox[state.box1Contain[i].index].x = state.box1Contain[i].pos.x;
                this._colliderBox[state.box1Contain[i].index].y = state.box1Contain[i].pos.y;
                this._colliderBox[state.box1Contain[i].index].data.posIndex = state.box1Contain[i].posIndex;
                this._colliderBox[state.box1Contain[i].index].sortingOrder = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.box2Contain, state.box2Contain)) {
            for (let i = 0; i < state.box2Contain.length; i++) {
                this._colliderBox[state.box2Contain[i].index].x = state.box2Contain[i].pos.x;
                this._colliderBox[state.box2Contain[i].index].y = state.box2Contain[i].pos.y;
                this._colliderBox[state.box2Contain[i].index].data.posIndex = state.box2Contain[i].posIndex;
                this._colliderBox[state.box2Contain[i].index].sortingOrder = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.box3Contain, state.box3Contain)) {
            for (let i = 0; i < state.box3Contain.length; i++) {
                this._colliderBox[state.box3Contain[i].index].x = state.box3Contain[i].pos.x;
                this._colliderBox[state.box3Contain[i].index].y = state.box3Contain[i].pos.y;
                this._colliderBox[state.box3Contain[i].index].data.posIndex = state.box3Contain[i].posIndex;
                this._colliderBox[state.box3Contain[i].index].sortingOrder = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.box4Contain, state.box4Contain)) {
            for (let i = 0; i < state.box4Contain.length; i++) {
                this._colliderBox[state.box4Contain[i].index].x = state.box4Contain[i].pos.x;
                this._colliderBox[state.box4Contain[i].index].y = state.box4Contain[i].pos.y;
                this._colliderBox[state.box4Contain[i].index].data.posIndex = state.box4Contain[i].posIndex;
                this._colliderBox[state.box4Contain[i].index].sortingOrder = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
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
        }, 2000);
    }

    offButDrag() {

        this.arrContainOffDrag(this._leftContain);
        this.arrContainOffDrag(this._rightContain);
        this.arrContainOffDrag(this._box1Contain);
        this.arrContainOffDrag(this._box2Contain);
        this.arrContainOffDrag(this._box3Contain);
        this.arrContainOffDrag(this._box4Contain);
    }

    arrContainOffDrag(arr) {

        for (let i = 0; i < arr.length; i++) {

            arr[i].draggable = false;
        }
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
