
/*
 * @Descripttion: 
 * @version: 
 * @Author: ruzhuan
 * @Date: 2021-5-27 19:47:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-5-27 19:47:00
 */

const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { pointBelongArea } = window['GlobalData'].utils;

const { ccclass, property } = cc._decorator;

@ccclass
export default class dragAnswer_model04_v4 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;

    private _colliderGroup: fgui.GGroup;

    private _colliderBox = [];

    private _leftPositon: any = [{ x: 230, y: 770 }, { x: 450, y: 770 }, { x: 230, y: 920 }, { x: 450, y: 920 }];
    private _midPositon: any = [{ x: 840, y: 770 }, { x: 1070, y: 770 }, { x: 840, y: 920 }, { x: 1070, y: 920 }];
    private _rightPositon: any = [{ x: 1480, y: 770 }, { x: 1690, y: 770 }, { x: 1480, y: 920 }, { x: 1690, y: 920 }];

    private _typeBoxPos1: any = [{ x: 175, y: 777 }, { x: 175, y: 917 }];
    private _typeBoxPos2: any = [{ x: 495, y: 777 }, { x: 495, y: 917 }];
    private _typeBoxPos3: any = [{ x: 810, y: 777 }, { x: 810, y: 917 }];
    private _typeBoxPos4: any = [{ x: 1120, y: 777 }, { x: 1120, y: 917 }];
    private _typeBoxPos5: any = [{ x: 1445, y: 777 }, { x: 1445, y: 917 }];
    private _typeBoxPos6: any = [{ x: 1760, y: 777 }, { x: 1760, y: 917 }];

    private _colliderCacheSecond: any = [
        { pos: { x: 230, y: 295 }, index: 0 },
        { pos: { x: 430, y: 295 }, index: 0 },
        { pos: { x: 230, y: 440 }, index: 0 },
        { pos: { x: 430, y: 440 }, index: 0 },

        { pos: { x: 860, y: 295 }, index: 0 },
        { pos: { x: 1080, y: 295 }, index: 0 },
        { pos: { x: 860, y: 440 }, index: 0 },
        { pos: { x: 1080, y: 440 }, index: 0 },

        { pos: { x: 1475, y: 295 }, index: 0 },
        { pos: { x: 1680, y: 295 }, index: 0 },
        { pos: { x: 1475, y: 440 }, index: 0 },
        { pos: { x: 1680, y: 440 }, index: 0 }];

    private _leftRect: cc.Rect;
    private _rightRect: cc.Rect;
    private _midRect: cc.Rect;

    private _boxRect1: cc.Rect;
    private _boxRect2: cc.Rect;
    private _boxRect3: cc.Rect;
    private _boxRect4: cc.Rect;
    private _boxRect5: cc.Rect;
    private _boxRect6: cc.Rect;

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

    // fairygui ??????
    private handleGuide: any;

    private handleGuide2: any;

    private _dragging = false;

    private _maskBg: fgui.GGraph;

    private answerType: any = cc.Enum({

        Shap: 1, // ???---???  ???---???
        Color: 2  // ?????????---?????????  ?????????---???????????????

    });

    private sencondType = { left: '1', mid: '2', right: '3' };

    private submitType: any = cc.Enum({

        No: 0,
        GuideShow: 1,
        WrongFeed: 2,
        RightFeed: 3

    });

    // ??????????????????
    private feedback: any;

    private _state = {};

    private _lastPos: any;

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;
        this.mergeState();
    }

    onLoad() {

        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        this._maskBg = this._view.getChild("maskBg").asGraph;
        this._maskBg.visible = false;
        this._maskBg.sortingOrder = 5;

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
                let colliderData = { pos: { x: node.data.x, y: node.data.y }, index: node.data.index, posIndex: node.data.posIndex, name: node.name };
                this._colliderCache.push(colliderData);

            }
        }

        let left: fgui.GImage = this._view.getChild("leftBg").asImage;
        let right: fgui.GImage = this._view.getChild("rightBg").asImage;
        let mid: fgui.GImage = this._view.getChild("midBg").asImage;

        let box1: fgui.GImage = this._view.getChild("typebg1").asImage;
        let box2: fgui.GImage = this._view.getChild("typebg2").asImage;
        let box3: fgui.GImage = this._view.getChild("typebg3").asImage;
        let box4: fgui.GImage = this._view.getChild("typebg4").asImage;
        let box5: fgui.GImage = this._view.getChild("typebg5").asImage;
        let box6: fgui.GImage = this._view.getChild("typebg6").asImage;

        this._leftRect = new cc.Rect(left.x, left.y, left.width, left.height);
        this._rightRect = new cc.Rect(right.x, right.y, right.width, right.height);
        this._midRect = new cc.Rect(mid.x, mid.y, mid.width, mid.height);

        this._boxRect1 = new cc.Rect(box1.x, box1.y, box1.width, box1.height);
        this._boxRect2 = new cc.Rect(box2.x, box2.y, box2.width, box2.height);
        this._boxRect3 = new cc.Rect(box3.x, box3.y, box3.width, box3.height);
        this._boxRect4 = new cc.Rect(box4.x, box4.y, box4.width, box4.height);
        this._boxRect5 = new cc.Rect(box5.x, box5.y, box5.width, box5.height);
        this._boxRect6 = new cc.Rect(box6.x, box6.y, box6.width, box6.height);

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

        this._titleTrigger.sortingOrder = 5;
        this._title.sortingOrder = 5;

        // ?????????state
        this._state = {

            answer: [],

            colliderBox: this._colliderCache,

            leftContain: [],

            rightContain: [],

            midContain: [],

            box1Contain: [],

            box2Contain: [],

            box3Contain: [],

            box4Contain: [],

            box5Contain: [],

            box6Contain: [],

            submit: this.submitType.No,

            title: false,

            colliderCache: this._colliderCache,

            maskBg: false
        }

        // ?????? ?????????????????? ??????
        this.disableForbidHandle();
    }

    // ????????? ????????????
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

    // ????????????
    disableForbidHandle() {
        let handleMask = this._worldRoot.getChildByName('handleMask');
        if (handleMask) handleMask.destroy();
    }

    // ??????
    // ???????????????
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

        // ?????? model component json ????????????
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;

        if (model.uiPath) {
            let GComponent = model.uiPath;
            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        }

        if (model.config) {
            let { answer, ae } = model.config;
            // ????????????
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

    // ????????????
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
            state.submit = this.submitType.No;
            this.updateState(state);
        }, 2);
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

        let state: any = globalThis._.cloneDeep(this._state);

        if (state.answer.length === 0) {

            // ??????????????????
            this.dragEndFirstDeal(evt, state);

        } else if (state.answer.length === 1) {

            // ??????????????????
            this.dragEndScendDeal(evt, state);
        }

        this.updateState(state);

    }

    private dragEndFirstDeal(evt, state: any) {

        let moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let tarPos = new cc.Vec2(btn.x, btn.y);
        let isContainerLeft = false;
        let isContainerRight = false;
        let isContainerMid = false;

        isContainerLeft = this.judgeDragObjInBox(state.leftContain, btn);
        isContainerRight = this.judgeDragObjInBox(state.rightContain, btn);
        isContainerMid = this.judgeDragObjInBox(state.midContain, btn);

        // ???
        if (this._leftRect.contains(tarPos)) {
            console.log('==== ??? ====');

            if (isContainerLeft) {
                if (moveIsMin || state.leftContain.length < 2) {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //??????????????????????????????
                    this.deleteCurDragObjInBox(btn, state.leftContain);
                    this.refreshBoxPos(state.leftContain, this._leftPositon);

                } else {

                    // ?????????????????????
                    this.judgeChangePosInBox(evt.pos, state.leftContain, this._leftPositon, btn, state.colliderBox, state);
                }


            } else {

                this.dealAllContainIn(false, true, true, false, false, false, false, false, false, state, btn);

                if (state.leftContain.length < this._containerTotal) {

                    let temp = {
                        pos: {
                            x: this._leftPositon[state.leftContain.length].x,
                            y: this._leftPositon[state.leftContain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.leftContain.length,
                        name: btn.name
                    };
                    state.leftContain.push(temp);

                } else {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                }


            }

        } else if (this._rightRect.contains(tarPos)) {

            if (isContainerRight) {

                if (moveIsMin || state.rightContain.length < 2) {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //??????????????????????????????
                    this.deleteCurDragObjInBox(btn, state.rightContain);
                    this.refreshBoxPos(state.rightContain, this._rightPositon);
                } else {

                    // ?????????????????????
                    this.judgeChangePosInBox(evt.pos, state.rightContain, this._rightPositon, btn, state.colliderBox, state);
                }

            } else {

                this.dealAllContainIn(true, true, false, false, false, false, false, false, false, state, btn);

                if (state.rightContain.length < this._containerTotal) {

                    let temp = {
                        pos: {
                            x: this._rightPositon[state.rightContain.length].x,
                            y: this._rightPositon[state.rightContain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.rightContain.length,
                        name: btn.name
                    };
                    state.rightContain.push(temp);

                } else {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);
                }

            }
        }
        else if (this._midRect.contains(tarPos)) {

            if (isContainerMid) {

                if (moveIsMin || state.midContain.length < 2) {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //??????????????????????????????
                    this.deleteCurDragObjInBox(btn, state.midContain);
                    this.refreshBoxPos(state.midContain, this._midPositon);
                } else {

                    // ?????????????????????
                    this.judgeChangePosInBox(evt.pos, state.midContain, this._midPositon, btn, state.colliderBox, state);
                }

            } else {

                this.dealAllContainIn(true, false, true, false, false, false, false, false, false, state, btn);

                if (state.midContain.length < this._containerTotal) {

                    let temp = {
                        pos: {
                            x: this._midPositon[state.midContain.length].x,
                            y: this._midPositon[state.midContain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.midContain.length,
                        name: btn.name
                    };
                    state.midContain.push(temp);

                } else {
                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);
                }

            }
        } else {

            this.dealAllContainIn(true, true, true, false, false, false, false, false, false, state, btn);

            // ????????????
            this.resetButtonInitPos(state.colliderBox, btn);
        }
    }

    private dragEndScendDeal(evt, state: any) {

        let moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let tarPos = new cc.Vec2(btn.x, btn.y);
        let isContainer1 = false;
        let isContainer2 = false;
        let isContainer3 = false;
        let isContainer4 = false;
        let isContainer5 = false;
        let isContainer6 = false;

        isContainer1 = this.judgeDragObjInBox(state.box1Contain, btn);
        isContainer2 = this.judgeDragObjInBox(state.box2Contain, btn);
        isContainer3 = this.judgeDragObjInBox(state.box3Contain, btn);
        isContainer4 = this.judgeDragObjInBox(state.box4Contain, btn);
        isContainer5 = this.judgeDragObjInBox(state.box5Contain, btn);
        isContainer6 = this.judgeDragObjInBox(state.box6Contain, btn);

        // ???
        if (this._boxRect1.contains(tarPos)) {
            console.log('==== ???1 ====');

            if (isContainer1) {

                if (moveIsMin || state.box1Contain.length < 2) {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //??????????????????????????????
                    this.deleteCurDragObjInBox(btn, state.box1Contain);
                    this.refreshBoxPos(state.box1Contain, this._typeBoxPos1);

                } else {

                    // ?????????????????????
                    this.judgeChangePosInBox(evt.pos, state.box1Contain, this._typeBoxPos1, btn, state.colliderBox, state);
                }


            } else {

                this.dealAllContainIn(false, false, false, false, true, true, true, true, true, state, btn);

                if (state.box1Contain.length < this._containerTotalSecond && btn.name[0] === this.sencondType.left) {

                    let temp = {
                        pos: {
                            x: this._typeBoxPos1[state.box1Contain.length].x,
                            y: this._typeBoxPos1[state.box1Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box1Contain.length,
                        name: btn.name
                    };
                    state.box1Contain.push(temp);

                } else {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);
                }

            }

        } else if (this._boxRect2.contains(tarPos)) {

            console.log('==== ???2 ====');

            if (isContainer2) {

                if (moveIsMin || state.box2Contain.length < 2) {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //??????????????????????????????
                    this.deleteCurDragObjInBox(btn, state.box2Contain);
                    this.refreshBoxPos(state.box2Contain, this._typeBoxPos2);

                } else {

                    // ?????????????????????
                    this.judgeChangePosInBox(evt.pos, state.box2Contain, this._typeBoxPos2, btn, state.colliderBox, state);
                }


            } else {

                this.dealAllContainIn(false, false, false, true, false, true, true, true, true, state, btn);

                if (state.box2Contain.length < this._containerTotalSecond && btn.name[0] === this.sencondType.left) {

                    let temp = {
                        pos: {
                            x: this._typeBoxPos2[state.box2Contain.length].x,
                            y: this._typeBoxPos2[state.box2Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box2Contain.length,
                        name: btn.name
                    };
                    state.box2Contain.push(temp);

                } else {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                }


            }
        } else if (this._boxRect3.contains(tarPos)) {

            console.log('==== ???3 ====');

            if (isContainer3) {

                if (moveIsMin || state.box3Contain.length < 2) {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //??????????????????????????????
                    this.deleteCurDragObjInBox(btn, state.box3Contain);
                    this.refreshBoxPos(state.box3Contain, this._typeBoxPos3);

                } else {

                    // ?????????????????????
                    this.judgeChangePosInBox(evt.pos, state.box3Contain, this._typeBoxPos3, btn, state.colliderBox, state);
                }


            } else {

                this.dealAllContainIn(false, false, false, true, true, false, true, true, true, state, btn);

                if (state.box3Contain.length < this._containerTotalSecond && btn.name[0] === this.sencondType.mid) {
                    let temp = {
                        pos: {
                            x: this._typeBoxPos3[state.box3Contain.length].x,
                            y: this._typeBoxPos3[state.box3Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box3Contain.length,
                        name: btn.name
                    };
                    state.box3Contain.push(temp);

                } else {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);
                }

            }
        } else if (this._boxRect4.contains(tarPos)) {

            console.log('==== ???4 ====');

            if (isContainer4) {

                if (moveIsMin || state.box4Contain.length < 2) {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                    //??????????????????????????????
                    this.deleteCurDragObjInBox(btn, state.box4Contain);
                    this.refreshBoxPos(state.box4Contain, this._typeBoxPos4);

                } else {

                    // ?????????????????????
                    this.judgeChangePosInBox(evt.pos, state.box4Contain, this._typeBoxPos4, btn, state.colliderBox, state);
                }


            } else {

                this.dealAllContainIn(false, false, false, true, true, true, false, true, true, state, btn);

                if (state.box4Contain.length < this._containerTotalSecond && btn.name[0] === this.sencondType.mid) {
                    let temp = {
                        pos: {
                            x: this._typeBoxPos4[state.box4Contain.length].x,
                            y: this._typeBoxPos4[state.box4Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box4Contain.length,
                        name: btn.name
                    };
                    state.box4Contain.push(temp);

                } else {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                }


            }

        } else if (this._boxRect5.contains(tarPos)) {

            console.log('==== ???5 ====');

            if (isContainer5) {

                if (moveIsMin || state.box5Contain.length < 2) {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);


                    //??????????????????????????????
                    this.deleteCurDragObjInBox(btn, state.box5Contain);
                    this.refreshBoxPos(state.box5Contain, this._typeBoxPos5);

                } else {

                    // ?????????????????????
                    this.judgeChangePosInBox(evt.pos, state.box5Contain, this._typeBoxPos5, btn, state.colliderBox, state);
                }

            } else {

                this.dealAllContainIn(false, false, false, true, true, true, true, false, true, state, btn);

                if (state.box5Contain.length < this._containerTotalSecond && btn.name[0] === this.sencondType.right) {
                    let temp = {
                        pos: {
                            x: this._typeBoxPos5[state.box5Contain.length].x,
                            y: this._typeBoxPos5[state.box5Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box5Contain.length,
                        name: btn.name
                    };
                    state.box5Contain.push(temp);

                } else {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);
                }

            }

        } else if (this._boxRect6.contains(tarPos)) {

            console.log('==== ???6 ====');

            if (isContainer6) {

                if (moveIsMin || state.box6Contain.length < 2) {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);


                    //??????????????????????????????
                    this.deleteCurDragObjInBox(btn, state.box6Contain);
                    this.refreshBoxPos(state.box6Contain, this._typeBoxPos6);

                } else {

                    // ?????????????????????
                    this.judgeChangePosInBox(evt.pos, state.box6Contain, this._typeBoxPos6, btn, state.colliderBox, state);

                }


            } else {

                this.dealAllContainIn(false, false, false, true, true, true, true, true, false, state, btn);

                if (state.box6Contain.length < this._containerTotalSecond && btn.name[0] === this.sencondType.right) {

                    let temp = {
                        pos: {
                            x: this._typeBoxPos6[state.box6Contain.length].x,
                            y: this._typeBoxPos6[state.box6Contain.length].y
                        },
                        index: btn.data.index,
                        posIndex: state.box6Contain.length,
                        name: btn.name
                    };
                    state.box6Contain.push(temp);

                } else {

                    // ????????????
                    this.resetButtonInitPos(state.colliderBox, btn);

                }

            }

        } else {

            this.dealAllContainIn(false, false, false, true, true, true, true, true, true, state, btn);

            // ????????????
            this.resetButtonInitPos(state.colliderBox, btn);
        }
    }

    private dealAllContainIn(isContainerLeft, isContainerMid, isContainerRight, isContainer1, isContainer2, isContainer3, isContainer4, isContainer5, isContainer6, state, btn) {

        if (isContainerLeft) {

            this.deleteCurDragObjInBox(btn, state.leftContain);
            this.refreshBoxPos(state.leftContain, this._leftPositon);
        }

        if (isContainerMid) {

            this.deleteCurDragObjInBox(btn, state.midContain);
            this.refreshBoxPos(state.midContain, this._midPositon);
        }

        if (isContainerRight) {

            this.deleteCurDragObjInBox(btn, state.rightContain);
            this.refreshBoxPos(state.rightContain, this._rightPositon);
        }

        if (isContainer1) {

            this.deleteCurDragObjInBox(btn, state.box1Contain);
            this.refreshBoxPos(state.box1Contain, this._typeBoxPos1);
        }

        if (isContainer2) {

            this.deleteCurDragObjInBox(btn, state.box2Contain);
            this.refreshBoxPos(state.box2Contain, this._typeBoxPos2);
        }
        if (isContainer3) {

            this.deleteCurDragObjInBox(btn, state.box3Contain);
            this.refreshBoxPos(state.box3Contain, this._typeBoxPos3);
        }
        if (isContainer4) {

            this.deleteCurDragObjInBox(btn, state.box4Contain);
            this.refreshBoxPos(state.box4Contain, this._typeBoxPos4);
        }
        if (isContainer5) {

            this.deleteCurDragObjInBox(btn, state.box5Contain);
            this.refreshBoxPos(state.box5Contain, this._typeBoxPos5);
        }
        if (isContainer6) {

            this.deleteCurDragObjInBox(btn, state.box6Contain);
            this.refreshBoxPos(state.box6Contain, this._typeBoxPos6);
        }

    }

    private judgeChangePosInBox(curPos, stateContain, posArr, btn, stateColliderBox, state: any) {

        let changeIndex = -1;
        let clickIndex = btn.data.posIndex;

        console.log('?????? ?????????Index ========' + btn.data.posIndex);

        if (curPos.x - this._lastPos.x > 100 && Math.abs(curPos.y - this._lastPos.y) < 50) {

            console.log('?????? ??? ========');
            //???
            changeIndex = clickIndex + 1;

        } else if (curPos.x - this._lastPos.x < -100 && Math.abs(curPos.y - this._lastPos.y) < 50) {

            //???
            console.log('?????? ??? ========');
            changeIndex = clickIndex - 1;

        } else if (curPos.y - this._lastPos.y > 100 && Math.abs(curPos.x - this._lastPos.x) < 50) {

            // ???
            console.log('?????? ??? ========');
            if (state.answer.length === 0) {

                changeIndex = clickIndex + 2;
            } else if (state.answer.length === 1) {

                changeIndex = clickIndex + 1;
            }


        } else if (curPos.y - this._lastPos.y < -100 && Math.abs(curPos.x - this._lastPos.x) < 50) {

            // ???
            console.log('?????? ??? ========');

            if (state.answer.length === 0) {

                changeIndex = clickIndex - 2;
            } else if (state.answer.length === 1) {

                changeIndex = clickIndex - 1;
            }

        } else if (curPos.x - this._lastPos.x > 100 && curPos.y - this._lastPos.y > 100) {

            // ??????
            console.log('?????? ?????? ========');
            changeIndex = clickIndex + 3;

        } else if (Math.abs(curPos.x - this._lastPos.x) > 50 && curPos.x - this._lastPos.x < 100 && curPos.y - this._lastPos.y > 100) {

            // ??????
            console.log('?????? ?????? ========');
            changeIndex = clickIndex + 1;

        } else if (curPos.x - this._lastPos.x > 100 && curPos.y - this._lastPos.y < 100 && Math.abs(curPos.y - this._lastPos.y) > 50) {
            // ??????
            console.log('?????? ?????? ========');
            changeIndex = clickIndex - 1;

        } else if (curPos.x - this._lastPos.x < 100 && curPos.y - this._lastPos.y < 100 && Math.abs(curPos.x - this._lastPos.x) > 50 && Math.abs(curPos.y - this._lastPos.y) > 50) {

            // ??????
            console.log('?????? ?????? ========');
            changeIndex = clickIndex - 3;

        } else {

            console.log('?????? YYYYY ========' + (curPos.y - this._lastPos.y));

            // ????????????
            this.resetButtonInitPos(stateColliderBox, btn);

            //??????????????????????????????
            this.deleteCurDragObjInBox(btn, stateContain);
            this.refreshBoxPos(stateContain, posArr);

            return;
        }

        console.log('??????ing clickIndex ========  ' + clickIndex);
        console.log('??????ing changeIndex ========  ' + changeIndex);

        if (changeIndex < 0 || changeIndex > stateContain.length - 1) {

            //????????????????????????????????????????????????
            this.resetButtonInitPos(stateColliderBox, btn);
            this.deleteCurDragObjInBox(btn, stateContain);
            this.refreshBoxPos(stateContain, posArr);

            return;
        }

        let tempClickIndex = stateContain[clickIndex].index;
        let tempChangeIndex = stateContain[changeIndex].index;

        stateContain[clickIndex].index = tempChangeIndex;
        stateContain[changeIndex].index = tempClickIndex;
    }

    private deleteCurDragObjInBox(curBut, stateBox) {

        for (let i = 0; i < stateBox.length; i++) {

            if (stateBox[i].index === curBut.data.index) {

                stateBox.splice(i, 1);
                break;
            }
        }
    }

    private resetButtonInitPos(stateColliderBox, btn) {

        // ????????????
        let temp = {
            pos:
            {
                x: btn.data.x,
                y: btn.data.y
            },
            index: btn.data.index,
            posIndex: -1,
            name: btn.name
        };
        stateColliderBox.push(temp);

    }

    private judgeDragObjInBox(_box, curBut) {

        let isContainer = false;
        for (let i = 0; i < _box.length; i++) {

            if (_box[i].index === curBut.data.index) {

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
        if (state.answer.length === 0) {
            if (state.leftContain.length === 0 && state.rightContain.length === 0 && state.midContain.length === 0) {

                state.submit = this.submitType.GuideShow;
                this.updateState(state);
                return;
            }
        } else if (state.answer.length === 1) {

            if (state.box1Contain.length === 0 && state.box2Contain.length === 0 && state.box3Contain.length === 0 && state.box4Contain.length === 0 && state.box5Contain.length === 0 && state.box6Contain.length === 0) {

                state.submit = this.submitType.GuideShow;
                this.updateState(state);
                return;
            }

        } else if (state.answer.length >= 2) {

            return;
        }
        // ??????1 ??????2
        if (state.answer.length === 0) {

            if (state.leftContain.length < this._containerTotal || state.rightContain.length < this._containerTotal || state.midContain.length < this._containerTotal) {

                state.submit = this.submitType.WrongFeed;
                this.updateState(state);
                return;
            }

            if ((state.leftContain[0].name[0] === state.leftContain[1].name[0] &&
                state.leftContain[0].name[0] === state.leftContain[2].name[0] &&
                state.leftContain[0].name[0] === state.leftContain[3].name[0]) &&

                (state.rightContain[0].name[0] === state.rightContain[1].name[0] &&
                    state.rightContain[0].name[0] === state.rightContain[2].name[0] &&
                    state.rightContain[0].name[0] === state.rightContain[3].name[0]) &&
                (state.midContain[0].name[0] === state.midContain[1].name[0] &&
                    state.midContain[0].name[0] === state.midContain[2].name[0] &&
                    state.midContain[0].name[0] === state.midContain[3].name[0])) {

                console.log('=== ?????????????????????  ??????????????? ===');

                // ?????????????????????
                state.answer.push(this.answerType.Shap);
                this.sencondType.left = state.leftContain[0].name[0];
                this.sencondType.mid = state.midContain[0].name[0];
                this.sencondType.right = state.rightContain[0].name[0];

                this.refreshFirstRightData(state);

            } else {

                // ?????????????????????
                state.submit = this.submitType.WrongFeed;
            }

        } else if (state.answer.length === 1) {

            if (state.box1Contain.length < this._containerTotalSecond ||
                state.box2Contain.length < this._containerTotalSecond ||
                state.box3Contain.length < this._containerTotalSecond ||
                state.box4Contain.length < this._containerTotalSecond ||
                state.box5Contain.length < this._containerTotalSecond ||
                state.box6Contain.length < this._containerTotalSecond) {

                state.submit = this.submitType.WrongFeed;
                this.updateState(state);
                return;
            }

            // ?????????
            if (state.box1Contain[0].name[1] === state.box1Contain[1].name[1] &&
                state.box3Contain[0].name[1] === state.box3Contain[1].name[1] &&
                state.box5Contain[0].name[1] === state.box5Contain[1].name[1]) {

                console.log('=== ????????????????????? ??????===');
                state.answer.push(this.answerType.Color);
                state.submit = this.submitType.RightFeed;
                state.maskBg = true;

            } else {
                state.submit = this.submitType.WrongFeed;
            }

        }

        this.updateState(state);
    }

    refreshFirstRightData(state) {

        state.colliderBox = [];
        state.colliderCache = [];

        // ?????????????????????????????????????????????

        for (let i = 0; i < this._colliderCacheSecond.length; i++) {
            if (i < this._containerTotal) {

                let temp = {
                    pos: {
                        x: this._colliderCacheSecond[i].pos.x,
                        y: this._colliderCacheSecond[i].pos.y
                    },

                    index: state.leftContain[i].index,
                    name: state.leftContain[i].name
                };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.leftContain[i].index;

            } else if (i < this._containerTotal * 2) {

                let temp = {
                    pos: {
                        x: this._colliderCacheSecond[i].pos.x,
                        y: this._colliderCacheSecond[i].pos.y
                    },

                    index: state.midContain[i - this._containerTotal].index,
                    name: state.midContain[i - this._containerTotal].name
                };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.midContain[i - this._containerTotal].index;

            } else {

                let temp = {
                    pos: {
                        x: this._colliderCacheSecond[i].pos.x,
                        y: this._colliderCacheSecond[i].pos.y
                    },

                    index: state.rightContain[i - this._containerTotal * 2].index,
                    name: state.rightContain[i - this._containerTotal * 2].name
                };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.rightContain[i - this._containerTotal * 2].index;
            }
        }
        state.colliderCache = this._colliderCacheSecond;
        state.leftContain = [];
        state.rightContain = [];
        state.midContain = [];
    }

    // ????????????
    getState(data: any) {
        this.updateState(data);
    }

    // ???????????????
    updateState(curState: any) {
        if (globalThis._.isEqual(this._state, curState)) return;
        this.state = curState;
    }

    // ??????ui???
    updateUi(oldState: any, state: any) {

        if (!globalThis._.isEqual(oldState.answer, state.answer)) {

            if (state.answer.length === 0) {
                // ????????????????????????
                this._c2.selectedIndex = 0;

            } else if (state.answer.length === 1) {
                // ???????????????????????????
                this._c2.selectedIndex = 1;

            } else if (state.answer.length >= 2) {
                this._c2.selectedIndex = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.maskBg, state.maskBg)) {

            this._maskBg.visible = state.maskBg;
        }

        if (!globalThis._.isEqual(oldState.colliderCache, state.colliderCache)) {

            for (let i = 0; i < state.colliderCache.length; i++) {

                this._colliderBox[state.colliderCache[i].index].data.x = state.colliderCache[i].pos.x;
                this._colliderBox[state.colliderCache[i].index].data.y = state.colliderCache[i].pos.y;
            }
        }

        if (!globalThis._.isEqual(oldState.colliderBox, state.colliderBox)) {

            for (let i = 0; i < state.colliderBox.length; i++) {

                this._colliderBox[state.colliderBox[i].index].x = state.colliderBox[i].pos.x;
                this._colliderBox[state.colliderBox[i].index].y = state.colliderBox[i].pos.y;
                this._colliderBox[state.colliderBox[i].index].data.posIndex = -1;
                this._colliderBox[state.colliderBox[i].index].sortingOrder = 1;
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

        if (!globalThis._.isEqual(oldState.midContain, state.midContain)) {

            for (let i = 0; i < state.midContain.length; i++) {
                this._colliderBox[state.midContain[i].index].x = state.midContain[i].pos.x;
                this._colliderBox[state.midContain[i].index].y = state.midContain[i].pos.y;
                this._colliderBox[state.midContain[i].index].data.posIndex = state.midContain[i].posIndex;
                this._colliderBox[state.midContain[i].index].sortingOrder = 1;
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

        if (!globalThis._.isEqual(oldState.box5Contain, state.box5Contain)) {
            for (let i = 0; i < state.box5Contain.length; i++) {
                this._colliderBox[state.box5Contain[i].index].x = state.box5Contain[i].pos.x;
                this._colliderBox[state.box5Contain[i].index].y = state.box5Contain[i].pos.y;
                this._colliderBox[state.box5Contain[i].index].data.posIndex = state.box5Contain[i].posIndex;
                this._colliderBox[state.box5Contain[i].index].sortingOrder = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.box6Contain, state.box6Contain)) {
            for (let i = 0; i < state.box6Contain.length; i++) {
                this._colliderBox[state.box6Contain[i].index].x = state.box6Contain[i].pos.x;
                this._colliderBox[state.box6Contain[i].index].y = state.box6Contain[i].pos.y;
                this._colliderBox[state.box6Contain[i].index].data.posIndex = state.box6Contain[i].posIndex;
                this._colliderBox[state.box6Contain[i].index].sortingOrder = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            if (state.submit === this.submitType.GuideShow) {
                if (state.answer.length === 0) {
                    this.onHandleGuide(this.handleGuide);
                } else if (state.answer.length === 1) {
                    this.onHandleGuide(this.handleGuide2);
                }
            } else if (state.submit === this.submitType.WrongFeed) {
                this.answerFeedback(false);
            } else if (state.submit === this.submitType.RightFeed) {
                this.answerFeedback(true);
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
            let state: any = globalThis._.cloneDeep(this._state);
            state.submit = this.submitType.No;
            this.updateState(state);
        }, 2000);
    }

    // ???????????????????????????????????????
    registerState() {
        if (window['GlobalData'].sample.registerState) window['GlobalData'].sample.registerState.call(this);
    }

    // ???????????????????????????????????????
    relieveState() {
        if (window['GlobalData'].sample.relieveState) window['GlobalData'].sample.relieveState.call(this);
    }

    // ??????????????????????????????
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
