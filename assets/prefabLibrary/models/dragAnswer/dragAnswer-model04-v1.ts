
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
export default class dragAnswer_model04_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;

    private _colliderGroup: fgui.GGroup;
    private _collideredGroup: fgui.GGroup;

    private _colliderBox = [];

    private _leftPositon: any = [{ x: 330, y: 760 }, { x: 540, y: 760 }, { x: 330, y: 925 }, { x: 540, y: 925 }];
    private _rightPositon: any = [{ x: 1370, y: 760 }, { x: 1610, y: 760 }, { x: 1370, y: 925 }, { x: 1610, y: 925 }];

    private _tishi1Positon: any = [
        { x: 1496, y: 70 },
        { x: 1586, y: 70 },
        { x: 1496, y: 140 },
        { x: 1586, y: 140 },
        { x: 1746, y: 70 },
        { x: 1836, y: 70 },
        { x: 1746, y: 140 },
        { x: 1836, y: 140 }];

    private _tishi1_1Positon: any = [{ x: 700, y: 350 }, { x: 875, y: 350 }, { x: 700, y: 465 }, { x: 875, y: 465 },
    { x: 1140, y: 350 }, { x: 1300, y: 350 }, { x: 1140, y: 465 }, { x: 1300, y: 465 }];

    private _tishi2Positon: any = [{ x: 700, y: 730 }, { x: 875, y: 730 }, { x: 700, y: 845 }, { x: 875, y: 845 },
    { x: 1140, y: 730 }, { x: 1300, y: 730 }, { x: 1140, y: 845 }, { x: 1300, y: 845 }];

    private _tishi1Btn = [];
    private _tishi2Btn = [];
    private _tishi1_1Btn = [];

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
        AnswerType1: 1,
        Finish: 2
    });

    private submitType: any = cc.Enum({

        No: 0,
        GuideShow: 1,
        WrongFeed: 2,
        RightFeed: 3
    });


    private _leftBoxL: fgui.GLabel;
    private _rightBoxL: fgui.GLabel;
    private _allBoxL: fgui.GLabel;
    private _showAllL: fgui.GLabel;
    private _hideAllL: fgui.GLabel;

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

        this._leftBoxL = this._view.getChild('leftBox').asLabel;
        this._rightBoxL = this._view.getChild('rightBox').asLabel;
        this._allBoxL = this._view.getChild('allBox').asLabel;
        this._showAllL = this._view.getChild('showall').asLabel;
        this._hideAllL = this._view.getChild('hideall').asLabel;


        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");

        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        if (this._c2) {
            this._c2.selectedIndex = this.tiShiShowType.No;
        }

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        this._titleTrigger.sortingOrder = 2;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;
        this._title.sortingOrder = 2;

        this._colliderGroup = this._view.getChild("colliderBox").asGroup;
        this._collideredGroup = this._view.getChild("collideredBox").asGroup;

        this._bgdoor = this._view.getChild('bgdoor').asCom;
        this._bgdoor.getTransition('close').play();

        let tishi1Group = this._view.getChild("n93").asGroup;

        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == tishi1Group) {
                let node: fgui.GButton = this._view.getChildAt(i).asButton;
                this._tishi1Btn.push(node);
            }
        }

        let tishi2Group = this._view.getChild("n94").asGroup;

        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == tishi2Group) {
                let node: fgui.GButton = this._view.getChildAt(i).asButton;
                this._tishi2Btn.push(node);
            }
        }


        let tishi1_1Group = this._view.getChild("n95").asGroup;

        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == tishi1_1Group) {
                let node: fgui.GButton = this._view.getChildAt(i).asButton;
                this._tishi1_1Btn.push(node);
            }
        }

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
                let colliderData = { pos: { x: node.data.x, y: node.data.y }, index: node.data.index, posIndex: node.data.posIndex, visible: true };
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

            submit: this.submitType.No,

            tiShiShow: this.tiShiShowType.No,

            tiShiBox1: [],

            tiShiBox2: [],

            tiShiBox1_1: [],
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
            state.submit = this.submitType.No;
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
                        posIndex: state.leftContain.length,
                        visible: true
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
                        posIndex: state.rightContain.length,
                        visible: true
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
            posIndex: -1,
            visible: true
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
            stateContain[i].visible = true;
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

        if (this._answer.length === 0 || this._answer.length === 1) {
            if (this._leftContain.length === 0 && this._rightContain.length === 0) {

                state.submit = this.submitType.GuideShow;
                this.updateState(state);
                return;
            }
        } else if (this._answer.length >= 2) {

            return;
        }

        if (this._leftContain.length < this._containerTotal || this._rightContain.length < this._containerTotal) {

            state.submit = this.submitType.WrongFeed;
            this.updateState(state);
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

                    state.submit = this.submitType.WrongFeed;
                    this.updateState(state);
                    return;
                }
            }

            this._answer.push(this.answerType.SIZE); //大小
            state.answer = this._answer;
            state.tiShiShow = this.tiShiShowType.AnswerType1;
            if (this._answer.length >= 2) {

                state.submit = this.submitType.RightFeed;
                state.tiShiShow = this.tiShiShowType.Finish;
            }


        } else if (isSame2) {

            console.log('==== 回答 isSame2 ====');

            for (let i = 0; i < this._answer.length; i++) {

                if (this._answer[i] == this.answerType.COLOUR) {
                    state.submit = this.submitType.WrongFeed;
                    this.updateState(state);
                    return;
                }
            }
            this._answer.push(this.answerType.COLOUR); //颜色
            state.answer = this._answer;
            state.tiShiShow = this.tiShiShowType.AnswerType1;
            if (this._answer.length >= 2) {

                state.submit = this.submitType.RightFeed;
                state.tiShiShow = this.tiShiShowType.Finish;
            }

        } else {

            state.submit = this.submitType.WrongFeed;
            this.updateState(state);
            return;
        }

        if (this._answer.length === 1) {

            //存储提示1中的显示的数据
            state.tiShiBox1 = [];
            state.tiShiBox1_1 = [];
            for (let i = 0; i < this._leftContain.length; i++) {

                let temp = {
                    x: this._leftContain[i].x,
                    y: this._leftContain[i].y,
                    icon: this._leftContain[i].icon,
                    width: this._leftContain[i].width,
                    height: this._leftContain[i].height,
                };
                state.tiShiBox1.push(temp);

                let temp2 = {
                    icon: this._leftContain[i].icon,
                    width: this._leftContain[i].width,
                    height: this._leftContain[i].height,
                };
                state.tiShiBox1_1.push(temp2);
            }

            for (let i = 0; i < this._rightContain.length; i++) {

                let temp = {
                    x: this._rightContain[i].x,
                    y: this._rightContain[i].y,
                    icon: this._rightContain[i].icon,
                    width: this._rightContain[i].width,
                    height: this._rightContain[i].height
                };

                state.tiShiBox1.push(temp);

                let temp2 = {
                    icon: this._rightContain[i].icon,
                    width: this._rightContain[i].width,
                    height: this._rightContain[i].height,
                };
                state.tiShiBox1_1.push(temp2);
            }

            state.colliderBox = [];
            for (let i = 0; i < this._colliderBox.length; i++) {

                let temp = {
                    pos: {
                        x: this._colliderBox[i].data.x,
                        y: this._colliderBox[i].data.y
                    },
                    visible: true,
                    index: this._colliderBox[i].data.index
                };
                state.colliderBox.push(temp);
            }

            this._leftContain = [];
            this._rightContain = [];


            state.leftContain = [];
            state.rightContain = [];

        } else if (this._answer.length === 2) {

            state.tiShiBox2 = [];
            for (let i = 0; i < this._leftContain.length; i++) {

                let temp = {
                    icon: this._leftContain[i].icon,
                    width: this._leftContain[i].width,
                    height: this._leftContain[i].height
                };

                state.tiShiBox2.push(temp);
            }

            for (let i = 0; i < this._rightContain.length; i++) {

                let temp = {
                    icon: this._rightContain[i].icon,
                    width: this._rightContain[i].width,
                    height: this._rightContain[i].height
                };

                state.tiShiBox2.push(temp);
            }

            for (let i = 0; i < state.colliderBox.length; i++) {

                state.colliderBox[i].visible = false;
            }

            for (let i = 0; i < state.leftContain.length; i++) {

                state.leftContain[i].visible = false;
            }

            for (let i = 0; i < state.rightContain.length; i++) {

                state.rightContain[i].visible = false;
            }

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

        console.log('==== 更新 111111 ====');
        console.log(state);

        this._showAllL.text = '';
        this._hideAllL.text = '';

        let isPlayOpen = false;
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            // 控制反馈动画和指引动画
            if (state.submit === this.submitType.GuideShow) {
                this.onHandleGuide(this.handleGuide);
            } else if (state.submit === this.submitType.WrongFeed) {
                this.answerFeedback(false);
            } else if (state.submit === this.submitType.RightFeed) {

                if (this.feedback) {
                    this._submit.visible = false;
                    isPlayOpen = true;
                    this._bgdoor.getTransition('open2').play(() => {

                        //开门 --- 反馈 ----消失左右的框和第一次提示框
                        this.answerFeedback(true);
                    });
                }
            }
        }


        if (!globalThis._.isEqual(oldState.answer, state.answer)) {

            if (state.answer.length === 0) {

                // 回归初始化状态
                this.showAllBoxs();
                this._bgdoor.getTransition('close').play();
                this._answer = state.answer;
                this._leftContain = [];
                this._rightContain = [];

            } else if (state.answer.length === 1) {

                this._bgdoor.getTransition('open1').play();

            } else if (state.answer.length === 2) {

                if (!isPlayOpen) {

                    this._bgdoor.getTransition('open2').play();
                    this.hideAllBoxs();

                }
            }
        }


        if (!globalThis._.isEqual(oldState.colliderBox, state.colliderBox)) {

            if (state.colliderBox.length > 0) {

                this._allBoxL.text = 'all: ' + state.colliderBox.length + state.colliderBox[0].visible + 'isPlayOpen:' + isPlayOpen;

            } else {
                this._allBoxL.text = 'all: ' + state.colliderBox.length + 'isPlayOpen:' + isPlayOpen;
            }

            for (let i = 0; i < state.colliderBox.length; i++) {

                this._colliderBox[state.colliderBox[i].index].x = state.colliderBox[i].pos.x;
                this._colliderBox[state.colliderBox[i].index].y = state.colliderBox[i].pos.y;
                if (!isPlayOpen) {

                    if (state.answer.length === 2) {
                        this._colliderBox[state.colliderBox[i].index].visible = false;
                    } else {
                        this._colliderBox[state.colliderBox[i].index].visible = state.colliderBox[i].visible;
                    }

                }

                this._colliderBox[state.colliderBox[i].index].data.posIndex = -1;
                this._colliderBox[state.colliderBox[i].index].draggable = true;
                this._colliderBox[state.colliderBox[i].index].sortingOrder = 0;
            }
        }

        if (!globalThis._.isEqual(oldState.tiShiBox1, state.tiShiBox1)) {

            if (state.tiShiShow === this.tiShiShowType.AnswerType1) {

                this._showAllL.text = '处理第一次答题提示框';

                this.hideAllBoxs();

                for (let i = 0; i < state.tiShiBox1.length; i++) {

                    this._tishi1Btn[i].width = state.tiShiBox1[i].width;
                    this._tishi1Btn[i].height = state.tiShiBox1[i].height;
                    this._tishi1Btn[i].scaleX = 1.0;
                    this._tishi1Btn[i].scaleY = 1.0;
                    this._tishi1Btn[i].x = state.tiShiBox1[i].x;
                    this._tishi1Btn[i].y = state.tiShiBox1[i].y;
                    this._tishi1Btn[i].icon = state.tiShiBox1[i].icon;

                    //做动画
                    if (i === state.tiShiBox1.length - 1) {

                        cc.tween(this._tishi1Btn[i])
                            .to(0.5, { x: this._tishi1Positon[i].x, y: this._tishi1Positon[i].y })
                            .to(0.5, { scaleX: 0.4, scaleY: 0.4 })
                            .call(() => {

                                this.showAllBoxs();

                            })
                            .start();

                    } else {

                        cc.tween(this._tishi1Btn[i])
                            .to(0.5, { x: this._tishi1Positon[i].x, y: this._tishi1Positon[i].y })
                            .to(0.5, { scaleX: 0.4, scaleY: 0.4 })
                            .start();
                    }
                }

            }

        }

        if (!globalThis._.isEqual(oldState.tiShiBox1_1, state.tiShiBox1_1)) {

            for (let i = 0; i < state.tiShiBox1_1.length; i++) {

                this._tishi1_1Btn[i].width = state.tiShiBox1_1[i].width;
                this._tishi1_1Btn[i].height = state.tiShiBox1_1[i].height;
                this._tishi1_1Btn[i].icon = state.tiShiBox1_1[i].icon;
                this._tishi1_1Btn[i].sortingOrder = 1;

            }
        }


        if (!globalThis._.isEqual(oldState.tiShiBox2, state.tiShiBox2)) {

            for (let i = 0; i < state.tiShiBox2.length; i++) {

                this._tishi2Btn[i].width = state.tiShiBox2[i].width;
                this._tishi2Btn[i].height = state.tiShiBox2[i].height;
                this._tishi2Btn[i].icon = state.tiShiBox2[i].icon;
                this._tishi2Btn[i].sortingOrder = 1;
            }
        }

        if (!globalThis._.isEqual(oldState.leftContain, state.leftContain)) {

            if (state.leftContain.length > 0) {

                this._leftBoxL.text = 'left: ' + state.leftContain.length + state.leftContain[0].visible + 'isPlayOpen:' + isPlayOpen;

            } else {
                this._leftBoxL.text = 'left: ' + state.leftContain.length + 'isPlayOpen:' + isPlayOpen;
            }


            for (let i = 0; i < state.leftContain.length; i++) {
                this._colliderBox[state.leftContain[i].index].x = state.leftContain[i].pos.x;
                this._colliderBox[state.leftContain[i].index].y = state.leftContain[i].pos.y;
                this._colliderBox[state.leftContain[i].index].data.posIndex = state.leftContain[i].posIndex;
                if (!isPlayOpen) {
                    if (state.answer.length === 2) {
                        this._colliderBox[state.leftContain[i].index].visible = false;
                    } else {
                        this._colliderBox[state.leftContain[i].index].visible = state.leftContain[i].visible;
                    }
                }

                this._colliderBox[state.leftContain[i].index].sortingOrder = 0;

            }
        }

        if (!globalThis._.isEqual(oldState.rightContain, state.rightContain)) {

            if (state.leftContain.length > 0) {

                this._rightBoxL.text = 'right: ' + state.rightContain.length + state.rightContain[0].visible + 'isPlayOpen:' + isPlayOpen;

            } else {
                this._rightBoxL.text = 'right: ' + state.rightContain.length + 'isPlayOpen:' + isPlayOpen;
            }


            for (let i = 0; i < state.rightContain.length; i++) {
                this._colliderBox[state.rightContain[i].index].x = state.rightContain[i].pos.x;
                this._colliderBox[state.rightContain[i].index].y = state.rightContain[i].pos.y;
                this._colliderBox[state.rightContain[i].index].data.posIndex = state.rightContain[i].posIndex;
                if (!isPlayOpen) {

                    if (state.answer.length === 2) {
                        this._colliderBox[state.rightContain[i].index].visible = false;
                    } else {
                        this._colliderBox[state.rightContain[i].index].visible = state.rightContain[i].visible;
                    }
                }

                this._colliderBox[state.rightContain[i].index].sortingOrder = 0;
            }
        }


        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }

        if (!globalThis._.isEqual(oldState.tiShiShow, state.tiShiShow)) {

            if (!isPlayOpen) {

                this._c2.selectedIndex = state.tiShiShow;

                if (state.tiShiShow === this.tiShiShowType.No || state.tiShiShow === this.tiShiShowType.AnswerType1) {

                    this._view.getChild("left").asImage.visible = true;
                    this._view.getChild("right").asImage.visible = true;
                    this._submit.visible = true;

                } else if (state.tiShiShow === this.tiShiShowType.Finish) {

                    this._view.getChild("left").asImage.visible = false;
                    this._view.getChild("right").asImage.visible = false;
                    this._submit.visible = false;
                }
            }

        }
    }

    hideAllBoxs() {

        this._hideAllL.text = 'hide: ' + this._colliderBox.length + ' ' + this._leftContain.length + ' ' + this._rightContain.length;

        for (let i = 0; i < this._colliderBox.length; i++) {

            this._colliderBox[i].visible = false;
            this._colliderBox[i].sortingOrder = 0;
        }

        for (let i = 0; i < this._leftContain.length; i++) {

            this._leftContain[i].visible = false;
            this._leftContain[i].sortingOrder = 0;
        }

        for (let i = 0; i < this._rightContain.length; i++) {

            this._rightContain[i].visible = false;
            this._rightContain[i].sortingOrder = 0;
        }
    }

    showAllBoxs() {

        for (let i = 0; i < this._colliderBox.length; i++) {

            this._colliderBox[i].visible = true;
            this._colliderBox[i].sortingOrder = 0;
        }
        for (let i = 0; i < this._leftContain.length; i++) {

            this._leftContain[i].visible = true;
            this._leftContain[i].sortingOrder = 0;
        }

        for (let i = 0; i < this._rightContain.length; i++) {

            this._rightContain[i].visible = true;
            this._rightContain[i].sortingOrder = 0;
        }
    }

    answerFeedback(bool: boolean) {
        if (!this.feedback) return;

        console.log('==== 进入反馈界面  ====');

        let feedback: any = cc.instantiate(this.feedback);
        feedback.x = 960;
        feedback.y = 540;
        let feedbackJs: any = feedback.getComponent(cc.Component);
        feedbackJs.init(bool);
        feedback.parent = cc.find("Canvas").parent;

        setTimeout(() => {

            feedback.destroy();
            let state: any = globalThis._.cloneDeep(this._state);

            if (bool) {

                //开门 --- 反馈 ----消失左右的框和第一次提示框
                this._c2.selectedIndex = state.tiShiShow;
                this._view.getChild("left").visible = false;
                this._view.getChild("right").visible = false;
                this.hideAllBoxs();
            }
            state.submit = this.submitType.No;
            this.updateState(state);

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
