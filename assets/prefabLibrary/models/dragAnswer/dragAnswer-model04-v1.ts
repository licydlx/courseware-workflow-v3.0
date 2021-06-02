
/*
 * @Descripttion: 
 * @version: 
 * @Author: ruzhuan
 * @Date: 2021-5-21 15:13:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-5-21 15:13:00
 */

const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { pointBelongArea } = window['GlobalData'].utils;

const { ccclass, property } = cc._decorator;

@ccclass
export default class dragAnswer_model03_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;

    private _colliderGroup: fgui.GGroup;
    private _collideredGroup: fgui.GGroup;

    private _colliderBox = [];

    private _leftPositon: any = [{ x: 330, y: 760 }, { x: 540, y: 760 }, { x: 330, y: 925 }, { x: 540, y: 925 }];
    private _rightPositon: any = [{ x: 1370, y: 760 }, { x: 1610, y: 760 }, { x: 1370, y: 925 }, { x: 1610, y: 925 }];

    private _leftRect: cc.Rect;
    private _rightRect: cc.Rect;

    private _leftContain: any = [];
    private _rightContain: any = [];

    private _containerTotal: number = 4;

    private _colliderCache = [];

    private _submit: fgui.GButton;

    private _bgdoor: fgui.GComponent;

    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _title: fgui.GButton;

    private _titleTrigger: fgui.GLoader;

    private _tiShiSize: string;

    private _tiShiColor: string;

    private _dragSound: cc.AudioClip;

    private _clickSound: cc.AudioClip;

    private handleGuide: any;

    private _dragging = false;

    private _lastPos: cc.Vec2;

    private answerType: any = cc.Enum({

        SIZE: 1,
        COLOUR: 2
    });

    private tiShiShowType: any = cc.Enum({

        No: 0,
        Size: 1,
        Color: 2,
        Finish: 3
    });

    private _tiShiShow = this.tiShiShowType.No;

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
        this._colliderBox = [];

        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");

        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        if (this._c2) {
            this._c2.selectedIndex = this._tiShiShow.No;
        }

        this._tiShiSize = this._view.getChild("sizeType").asLoader.url;
        this._tiShiColor = this._view.getChild("colorType").asLoader.url;

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        this._titleTrigger.sortingOrder = 2;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;
        this._title.sortingOrder = 2;

        this._colliderGroup = this._view.getChild("colliderBox").asGroup;
        this._collideredGroup = this._view.getChild("collideredBox").asGroup;


        this._bgdoor = this._view.getChild('bgdoor').asCom;
        this._bgdoor.getTransition('close').play();

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

        this._leftRect = new cc.Rect(111, 641, 654, 407);
        this._rightRect = new cc.Rect(1162, 641, 654, 407);

        // 初始化state
        this._state = {

            answer: this._answer,

            colliderBox: this._colliderCache,

            leftContain: [],

            rightContain: [],

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
        btn.sortingOrder = 1;
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

        let state: any = globalThis._.cloneDeep(this._state);
        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        btn.sortingOrder = 0;

        cc.audioEngine.play(this._dragSound, false, 1);

        let moveIsMin = Math.abs(evt.pos.x - this._lastPos.x) < 70 && Math.abs(evt.pos.y - this._lastPos.y) < 70;

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

                    //删除包含的刷新
                    this.deleteCurDragObjInBox(this._leftContain, btn, state.leftContain);
                    this.refreshBoxPos(state.leftContain, this._leftPositon);

                } else {

                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.leftContain, this._leftPositon, btn, this._leftContain, state.colliderBox);
                }

            } else {

                // 从外面拖进来的
                this.dealAllContainIn(false, isContainerRight, state, btn);

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

                    this.resetButtonInitPos(state.colliderBox, btn);
                    //删除左边包含的；刷新
                    this.deleteCurDragObjInBox(this._rightContain, btn, state.rightContain);
                    this.refreshBoxPos(state.rightContain, this._rightPositon);
                } else {
                    // 交换框内的位置
                    this.judgeChangePosInBox(evt.pos, state.rightContain, this._rightPositon, btn, this._rightContain, state.colliderBox);
                }

            } else {

                this.dealAllContainIn(isContainerLeft, false, state, btn);

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

            this.dealAllContainIn(isContainerLeft, isContainerRight, state, btn);
            this.resetButtonInitPos(state.colliderBox, btn);
        }

        this.updateState(state);
    }


    private dealAllContainIn(isContainerLeft, isContainerRight, state, btn) {

        if (isContainerLeft) {

            this.deleteCurDragObjInBox(this._leftContain, btn, state.leftContain);
            this.refreshBoxPos(state.leftContain, this._leftPositon);
        }

        if (isContainerRight) {

            this.deleteCurDragObjInBox(this._rightContain, btn, state.rightContain);
            this.refreshBoxPos(state.rightContain, this._rightPositon);
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

    private refreshBoxPos(stateContain, posArr) {

        for (let i = 0; i < stateContain.length; i++) {

            stateContain[i].pos.x = posArr[i].x;
            stateContain[i].pos.y = posArr[i].y;
            stateContain[i].posIndex = i;
        }
    }

    private refreshBg(answer) {

        if (answer.length === 0) {

            // 回归初始化状态
            if (this._c1) {
                this._c1.selectedIndex = 1;
                this._c1.selectedIndex = 0;
            }
            if (this._c2) {
                this._c2.selectedIndex = this._tiShiShow.No;
            }
            for (let i = 0; i < this._colliderBox.length; i++) {

                this._colliderBox[i].draggable = true;
            }
            this._bgdoor.getTransition('close').play();
            this._answer = [];
            this._leftContain = [];
            this._rightContain = [];
            this._submit.visible = true;
            this._view.getChild("showbg1").sortingOrder = 0;
            this._view.getChild("showbg2").sortingOrder = 0;
            this._view.getChild("showbg3").sortingOrder = 0;
            this._view.getChild("firstAnswer").sortingOrder = 0;
            this._view.getChild("secondAnswer").sortingOrder = 0;

        } else if (answer.length === 1) {

            this._bgdoor.getTransition('open1').play(() => {

                this.answerFeedback(true);
            });

        } else if (answer.length === 2) {

            if (answer[0] === this.answerType.SIZE) {
                this._view.getChild("firstAnswer").asLoader.url = this._tiShiSize
            } else {
                this._view.getChild("firstAnswer").asLoader.url = this._tiShiColor;
            }
            if (answer[1] === this.answerType.SIZE) {
                this._view.getChild("secondAnswer").asLoader.url = this._tiShiSize
            } else {
                this._view.getChild("secondAnswer").asLoader.url = this._tiShiColor;
            }

            this._submit.visible = false;
            this._bgdoor.getTransition('open2').play(() => {

                this.answerFeedback(true);

            });

            this._view.getChild("showbg1").sortingOrder = 1;
            this._view.getChild("showbg2").sortingOrder = 1;
            this._view.getChild("showbg3").sortingOrder = 1;
            this._view.getChild("firstAnswer").sortingOrder = 1;
            this._view.getChild("secondAnswer").sortingOrder = 1;
            this.offButDrag();
        }
    }

    private refreshInitPanel() {

        let state: any = globalThis._.cloneDeep(this._state);
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

        this.updateState(state);
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

        if (this._answer.length === 0 || this._answer.length === 1) {
            if (this._leftContain.length === 0 && this._rightContain.length === 0) {

                state.submit = true;
                this.updateState(state);
                return;
            }
        } else if (this._answer.length >= 2) {

            return;
        }

        if (this._leftContain.length < this._containerTotal || this._rightContain.length < this._containerTotal) {

            this.answerFeedback(false);
            return;
        }

        // 前：1 后：2
        let isSame1 = false;
        let isSame2 = false;

        if (this._leftContain[0].name[0] === this._leftContain[1].name[0] &&
            this._leftContain[0].name[0] === this._leftContain[2].name[0] &&
            this._leftContain[0].name[0] === this._leftContain[3].name[0]) {

            isSame1 = true;

        } else if (
            this._leftContain[0].name[1] === this._leftContain[1].name[1] &&
            this._leftContain[0].name[1] === this._leftContain[2].name[1] &&
            this._leftContain[0].name[1] === this._leftContain[3].name[1]) {

            isSame2 = true;
        }

        if (isSame1) {

            console.log('==== 回答 isSame1 ====');

            for (let i = 0; i < this._answer.length; i++) {

                if (this._answer[i] == this.answerType.SIZE) {

                    this.answerFeedback(false);
                    return;
                }
            }

            this._answer.push(this.answerType.SIZE); //大小
            state.answer = this._answer;
            this._tiShiShow = this.tiShiShowType.Size;
            if (state.answer.length >= 2) {

                this._tiShiShow = this.tiShiShowType.Finish;
            }

        } else if (isSame2) {

            console.log('==== 回答 isSame2 ====');

            for (let i = 0; i < this._answer.length; i++) {

                if (this._answer[i] == this.answerType.COLOUR) {
                    this.answerFeedback(false);
                    return;
                }
            }
            this._answer.push(this.answerType.COLOUR); //颜色
            state.answer = this._answer;
            this._tiShiShow = this.tiShiShowType.Color;
            if (state.answer.length >= 2) {

                this._tiShiShow = this.tiShiShowType.Finish;
            }

        } else {

            this.answerFeedback(false);
        }

        if (this._answer.length === 1) {

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

        if (!globalThis._.isEqual(oldState.answer, state.answer)) {

            this.refreshBg(state.answer);
        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            if (state.submit) {
                this.onHandleGuide(this.handleGuide);
            }
        }

        if (!globalThis._.isEqual(oldState.colliderBox, state.colliderBox)) {

            for (let i = 0; i < state.colliderBox.length; i++) {

                this._colliderBox[state.colliderBox[i].index].x = state.colliderBox[i].pos.x;
                this._colliderBox[state.colliderBox[i].index].y = state.colliderBox[i].pos.y;
                this._colliderBox[state.colliderBox[i].index].data.posIndex = -1;
            }
        }

        if (!globalThis._.isEqual(oldState.leftContain, state.leftContain)) {

            for (let i = 0; i < state.leftContain.length; i++) {
                this._colliderBox[state.leftContain[i].index].x = state.leftContain[i].pos.x;
                this._colliderBox[state.leftContain[i].index].y = state.leftContain[i].pos.y;
                this._colliderBox[state.leftContain[i].index].data.posIndex = state.leftContain[i].posIndex;
            }
        }

        if (!globalThis._.isEqual(oldState.rightContain, state.rightContain)) {

            for (let i = 0; i < state.rightContain.length; i++) {
                this._colliderBox[state.rightContain[i].index].x = state.rightContain[i].pos.x;
                this._colliderBox[state.rightContain[i].index].y = state.rightContain[i].pos.y;
                this._colliderBox[state.rightContain[i].index].data.posIndex = state.rightContain[i].posIndex;
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
            if (bool) {

                this._c2.selectedIndex = this._tiShiShow;
            }

        }, 2000);
    }

    offButDrag() {

        for (let i = 0; i < this._leftContain.length; i++) {

            this._leftContain[i].draggable = false;
        }
        for (let i = 0; i < this._rightContain.length; i++) {

            this._leftContain[i].draggable = false;
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
