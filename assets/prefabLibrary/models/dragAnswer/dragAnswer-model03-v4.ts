
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
export default class dragAnswer_model03_v4 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;

    private _colliderGroup:fgui.GGroup;
    private _collideredGroup:fgui.GGroup;
    
    private _colliderBox = [];

    private _leftPositon: any = [{x: 230, y: 770}, {x: 450, y: 770}, {x: 230, y: 920}, {x: 450, y: 920}];
    private _midPositon: any =  [{x: 840, y: 770}, {x: 1070, y: 770}, {x: 840, y: 920}, {x: 1070, y: 920}];
    private _rightPositon: any =  [{x: 1480, y: 770}, {x: 1690, y: 770}, {x: 1480, y: 920}, {x: 1690, y: 920}];

    private _typeBoxPos1: any = [{x: 175, y: 780}, {x: 175, y: 913}];
    private _typeBoxPos2: any = [{x: 495, y: 780}, {x: 495, y: 913}];
    private _typeBoxPos3: any = [{x: 810, y: 780}, {x: 810, y: 913}];
    private _typeBoxPos4: any = [{x: 1120, y: 780}, {x: 1120, y: 913}];
    private _typeBoxPos5: any = [{x: 1445, y: 780}, {x: 1445, y: 913}];
    private _typeBoxPos6: any = [{x: 1760, y: 780}, {x: 1760, y: 913}];

    private _colliderCacheSecond:  any = [
        {pos: {x: 230, y: 295}, index: 0},
        {pos: {x: 430, y: 295}, index: 0}, 
        {pos: {x: 230, y: 440}, index: 0},
        {pos: {x: 430, y: 440}, index: 0},

        {pos: {x: 860, y: 295}, index: 0},
        {pos: {x: 1080, y: 295}, index: 0}, 
        {pos: {x: 860, y: 440}, index: 0},
        {pos: {x: 1080, y: 440}, index: 0},
    
        {pos: {x: 1475, y: 295}, index: 0},
        {pos: {x: 1680, y: 295}, index: 0}, 
        {pos: {x: 1475, y: 440}, index: 0},
        {pos: {x: 1680, y: 440}, index: 0}];

    private _leftRect: cc.Rect;
    private _rightRect: cc.Rect;
    private _midRect: cc.Rect;

    private _boxRect1: cc.Rect;
    private _boxRect2: cc.Rect;
    private _boxRect3: cc.Rect;
    private _boxRect4: cc.Rect;
    private _boxRect5: cc.Rect;
    private _boxRect6: cc.Rect;

    private _leftContain: any = [];
    private _rightContain: any = [];
    private _midContain: any = [];

    private _box1Contain: any = [];
    private _box2Contain: any = [];
    private _box3Contain: any = [];
    private _box4Contain: any = [];
    private _box5Contain: any = [];
    private _box6Contain: any = [];

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

    // fairygui 组件
    private handleGuide: any;

    private handleGuide2: any;

    private _dragging = false;

    private answerType: any = cc.Enum({

        Shap: 1, // 大---小  红---橙
        Color: 2  // 正方形---长方形  三角形---平行四边形

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
                    y: node.y
                };
                
                node.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                node.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                node.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(node);
                let colliderData = {pos:{x: node.data.x, y: node.data.y}, index: node.data.index};
                this._colliderCache.push(colliderData);

            }
        }

        let left:fgui.GImage = this._view.getChild("leftBg").asImage;
        let right:fgui.GImage = this._view.getChild("rightBg").asImage;
        let mid:fgui.GImage = this._view.getChild("midBg").asImage;

        let box1:fgui.GImage = this._view.getChild("typebg1").asImage;
        let box2:fgui.GImage = this._view.getChild("typebg2").asImage;
        let box3:fgui.GImage = this._view.getChild("typebg3").asImage;
        let box4:fgui.GImage = this._view.getChild("typebg4").asImage;
        let box5:fgui.GImage = this._view.getChild("typebg5").asImage;
        let box6:fgui.GImage = this._view.getChild("typebg6").asImage;

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

         // 初始化state
         this._state = {

            answer: this._answer,

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

            submit: false,

            title: false,
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

        let dragBut:fgui.GButton = this._view.getChild('dragSound').asButton;
        dragBut.visible = false;
        let item = fgui.UIPackage.getItemByURL(dragBut["_sound"]);
        this._dragSound = await loadResource(item.file, cc.AudioClip);

        let clickBut:fgui.GButton = this._view.getChild('clickSound').asButton;
        clickBut.visible = false;
        item = fgui.UIPackage.getItemByURL(clickBut["_sound"]);
        this._clickSound = await loadResource(item.file, cc.AudioClip);
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

    getOriginValue(v: any) {
        return {
            x: v.x,
            y: v.y
        }
    }

    private _onDragStart(evt: fgui.Event): void {

        console.log('===== _onDragStart 111 =====');
        evt.captureTouch();

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);

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
       
        console.log('===== _onDragMove 222 =====');

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

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let tarPos = new cc.Vec2(btn.x, btn.y);
        let isContainerLeft = false;
        let isContainerRight = false;
        let isContainerMid = false;

        isContainerLeft = this.judgeDragObjInBox(this._leftContain, btn, state.leftContain);
        isContainerRight = this.judgeDragObjInBox(this._rightContain, btn, state.rightContain);
        isContainerMid = this.judgeDragObjInBox(this._midContain, btn, state.midContain);

        if (isContainerLeft || isContainerRight || isContainerMid) {

            // 恢复原位
            let temp = {
                        pos:
                        {
                            x: btn.data.x,
                            y: btn.data.y
                        },
                            index: btn.data.index
                        };
                        
            state.colliderBox.push(temp);
           
            this.refreshBoxPos(state.leftContain, this._leftPositon);
            this.refreshBoxPos(state.rightContain, this._rightPositon);
            this.refreshBoxPos(state.midContain, this._midPositon);
            
            return;
            
        }
        
        // 左
        if (this._leftRect.contains(tarPos) && this._leftContain.length < this._containerTotal) {

            this._leftContain.push(btn);

            let temp = {pos: {x: this._leftPositon[state.leftContain.length].x,
                              y: this._leftPositon[state.leftContain.length].y}, 
                              index: btn.data.index};
            state.leftContain.push(temp);

            
        } else if (this._rightRect.contains(tarPos) && this._rightContain.length < this._containerTotal) {
            
            this._rightContain.push(btn);

            let temp = {pos: {x: this._rightPositon[state.rightContain.length].x,
                              y: this._rightPositon[state.rightContain.length].y}, 
                              index: btn.data.index};
            state.rightContain.push(temp);

        }else if (this._midRect.contains(tarPos) && this._midContain.length < this._containerTotal) {

            this._midContain.push(btn);

            let temp = {pos: {x: this._midPositon[state.midContain.length].x,
                              y: this._midPositon[state.midContain.length].y}, 
                              index: btn.data.index};
            state.midContain.push(temp);

        }else {
            let temp = {pos: {x: btn.data.x, y: btn.data.y}, index: btn.data.index};
            state.colliderBox.push(temp);
        }

        this.updateState(state);

    }

    private dragEndScendDeal(evt) {

        let state: any = globalThis._.cloneDeep(this._state);

        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let tarPos = new cc.Vec2(btn.x, btn.y);
        let isContainer1 = false;
        let isContainer2 = false;
        let isContainer3 = false;
        let isContainer4 = false;
        let isContainer5 = false;
        let isContainer6 = false;

        isContainer1 = this.judgeDragObjInBox(this._box1Contain, btn, state.box1Contain);
        isContainer2 = this.judgeDragObjInBox(this._box2Contain, btn, state.box2Contain);
        isContainer3 = this.judgeDragObjInBox(this._box3Contain, btn, state.box3Contain);
        isContainer4 = this.judgeDragObjInBox(this._box4Contain, btn, state.box4Contain);
        isContainer5 = this.judgeDragObjInBox(this._box5Contain, btn, state.box5Contain);
        isContainer6 = this.judgeDragObjInBox(this._box6Contain, btn, state.box6Contain);

        if (isContainer1 ||
            isContainer2 ||
            isContainer3 ||
            isContainer4 ||
            isContainer5 ||
            isContainer6) {

            // 恢复原位
            let temp = {
                        pos:
                        {
                            x: btn.data.x,
                            y: btn.data.y
                        },
                            index: btn.data.index
                        };
                        
            state.colliderBox.push(temp);
           
            // 重新拍下位置
            this.refreshBoxPos(state.box1Contain, this._typeBoxPos1);
            this.refreshBoxPos(state.box2Contain, this._typeBoxPos2);
            this.refreshBoxPos(state.box3Contain, this._typeBoxPos3);
            this.refreshBoxPos(state.box4Contain, this._typeBoxPos4);
            this.refreshBoxPos(state.box5Contain, this._typeBoxPos5);
            this.refreshBoxPos(state.box6Contain, this._typeBoxPos6);

            this.updateState(state);
            return;
        }

        // 左
        if (this._boxRect1.contains(tarPos) && this._box1Contain.length < this._containerTotalSecond) {

            console.log('==== box1 ====');
            this._box1Contain.push(btn);

            let temp = {pos: {x: this._typeBoxPos1[state.box1Contain.length].x,
                              y: this._typeBoxPos1[state.box1Contain.length].y}, 
                              index: btn.data.index};
    
            state.box1Contain.push(temp);

        } else if (this._boxRect2.contains(tarPos) && this._box2Contain.length < this._containerTotalSecond) {
            console.log('==== box2 ====');
            this._box2Contain.push(btn);

            let temp = {pos: {x: this._typeBoxPos2[state.box2Contain.length].x,
                              y: this._typeBoxPos2[state.box2Contain.length].y}, 
                              index: btn.data.index};
            state.box2Contain.push(temp);

            
        }else if (this._boxRect3.contains(tarPos) && this._box3Contain.length < this._containerTotalSecond) {
            console.log('==== box3 ====');
            this._box3Contain.push(btn);

            let temp = {pos: {x: this._typeBoxPos3[state.box3Contain.length].x,
                              y: this._typeBoxPos3[state.box3Contain.length].y}, 
                              index: btn.data.index};
            state.box3Contain.push(temp);

        }else if (this._boxRect4.contains(tarPos) && this._box4Contain.length < this._containerTotalSecond) {
            console.log('==== box4 ====');
            this._box4Contain.push(btn);

            let temp = {pos: {x: this._typeBoxPos4[state.box4Contain.length].x,
                              y: this._typeBoxPos4[state.box4Contain.length].y}, 
                              index: btn.data.index};
            state.box4Contain.push(temp);

        }else if (this._boxRect5.contains(tarPos) && this._box5Contain.length < this._containerTotalSecond) {
            console.log('==== box5 ====');
            this._box5Contain.push(btn);

            let temp = {pos: {x: this._typeBoxPos5[state.box5Contain.length].x,
                              y: this._typeBoxPos5[state.box5Contain.length].y}, 
                              index: btn.data.index};
            state.box5Contain.push(temp);

        }else if (this._boxRect6.contains(tarPos) && this._box6Contain.length < this._containerTotalSecond) {
            console.log('==== box4 ====');
            this._box6Contain.push(btn);

            let temp = {pos: {x: this._typeBoxPos6[state.box6Contain.length].x,
                              y: this._typeBoxPos6[state.box6Contain.length].y}, 
                              index: btn.data.index};
            state.box6Contain.push(temp);

        }else {

            let temp = {pos: {x: btn.data.x, y: btn.data.y}, index: btn.data.index};
            state.colliderBox.push(temp);
        }

        this.updateState(state);

    }

    private judgeDragObjInBox(_box, curBut, stateBox) {

        let isContainer = false;
        for(let i = 0; i < _box.length; i++) {

            if ( _box[i] === curBut) {

                isContainer = true;
                _box.splice(i, 1);

                console.log('===== judgeDragObjInBox 5555 =====');

                for (let i = 0; i < stateBox.length; i++) {

                    if (stateBox[i].index === curBut.data.index) {

                        stateBox.splice(i, 1);
                        console.log('===== judgeDragObjInBox 6666 =====');

                        break;
                    }
                }
                break;
            }
        } 

        return  isContainer;
    }

    private refreshBoxPos(stateBox, posArr) {

        for (let i = 0; i < stateBox.length; i++) {

            stateBox[i].pos.x = posArr[i].x;
            stateBox[i].pos.y = posArr[i].y;
        }
    }

    private refreshFirstWrongData(state) {

        state.colliderBox = [];
        for (let i = 0; i < this._colliderBox.length; i++) {

            let temp = {
                pos: {
                x: this._colliderBox[i].data.x,
                y: this._colliderBox[i].data.y},

                index: this._colliderBox[i].data.index
            };
            state.colliderBox.push(temp);
        }

        this._leftContain = [];
        this._rightContain = [];
        this._midContain = [];

        state.leftContain = [];
        state.rightContain = [];
        state.midContain = [];

    }

    private refreshSecondWrongData(state) {

        state.colliderBox = [];
        for (let i = 0; i < this._colliderBox.length; i++) {

            let temp = {
                pos: {
                x: this._colliderBox[i].data.x,
                y: this._colliderBox[i].data.y},

                index: this._colliderBox[i].data.index
            };
            state.colliderBox.push(temp);
        }

        this._box1Contain = [];
        this._box2Contain = [];
        this._box3Contain = [];
        this._box4Contain = [];
        this._box5Contain = [];
        this._box6Contain = [];

        state.box1Contain = [];
        state.box2Contain = [];
        state.box3Contain = [];
        state.box4Contain = [];
        state.box5Contain = [];
        state.box6Contain = [];
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
        if (this._answer.length >= 2) {

            return;
        }
        let state: any = globalThis._.cloneDeep(this._state);
        
        if (this._answer.length === 0) {

            if (this._leftContain.length === 0 ||
                this._rightContain.length === 0 || 
                this._midContain.length === 0 || 
                (this._leftContain.length !== this._rightContain.length)||
                (this._leftContain.length !== this._midContain.length)) 
            {
                state.submit = true;
                this.updateState(state);
                return;
            }
        }
        
        if (this._answer.length === 1) {

            if (this._box1Contain.length === 0 || 
                this._box2Contain.length === 0 || 
                this._box3Contain.length === 0 || 
                this._box4Contain.length === 0 || 
                this._box5Contain.length === 0 ||
                this._box6Contain.length === 0 ||
                (this._box1Contain.length !== this._box2Contain.length) ||
                (this._box1Contain.length !== this._box3Contain.length) ||
                (this._box1Contain.length !== this._box4Contain.length) ||
                (this._box1Contain.length !== this._box4Contain.length)) 
            {
                state.submit = true;
                this.updateState(state);
                return;
            }
        }
        
        // 前：1 后：2
        if (this._answer.length === 0) {

            if ((this._leftContain[0].name[0] ===  this._leftContain[1].name[0]&& 
                this._leftContain[0].name[0] ===  this._leftContain[2].name[0]&&
                this._leftContain[0].name[0] ===  this._leftContain[3].name[0])&&

                (this._rightContain[0].name[0] ===  this._rightContain[1].name[0]&& 
                this._rightContain[0].name[0] ===  this._rightContain[2].name[0]&&
                this._rightContain[0].name[0] ===  this._rightContain[3].name[0]) &&
                (this._midContain[0].name[0] ===  this._midContain[1].name[0]&& 
                    this._midContain[0].name[0] ===  this._midContain[2].name[0]&&
                    this._midContain[0].name[0] ===  this._midContain[3].name[0])) {
    
                console.log('=== 第一次回答正确  按照形状分 ===');

                console.log('=== _leftContain ===' + this._leftContain[0].name[0]);
                console.log('=== _rightContain ===' + this._rightContain[0].name[0]);
                console.log('=== _midContain ===' + this._midContain[0].name[0]);

                // 第一次答案正确
                this.answerFeedback(true);
                this._answer.push(this.answerType.Shap); 
                state.answer = this._answer;
                this.refreshFirstRightData(state);
    
            }else{

                console.log('=== 第一次回答错误 ===' + this._leftContain[0].name[0]);
                console.log('=== 第一次回答错误 ===' + this._leftContain[1].name[0]);
                console.log('=== 第一次回答错误 ===' + this._leftContain[2].name[0]);
                console.log('=== 第一次回答错误 ===' + this._leftContain[3].name[0]);
    
                // 第一次答案错误
                this.answerFeedback(false);
                // this.refreshFirstWrongData(state);
            } 

        }else if (this._answer.length === 1) {

            // 颜色分
            if (this._box1Contain[0].name[1] === this._box1Contain[1].name[1] &&
                this._box3Contain[0].name[1] === this._box3Contain[1].name[1] &&
                this._box5Contain[0].name[1] === this._box5Contain[1].name[1]) {
    
                console.log('=== 第二次答案正确 颜色===');
                this._answer.push(this.answerType.Color); 
                state.answer = this._answer;

                this.answerFeedback(true);
            }else {

                console.log('=== 第二次答案错误 颜色===');
                console.log('== _box1Contain 0==' + this._box1Contain[0].name[1] + '== _box1Contain 1==' + this._box1Contain[1].name[1]);
                console.log('== _box3Contain 0==' + this._box3Contain[0].name[1] + '== _box3Contain 1==' + this._box3Contain[1].name[1]);
                console.log('== _box5Contain 0==' + this._box5Contain[0].name[1] + '== _box5Contain 1==' + this._box5Contain[1].name[1]);
               

                this.answerFeedback(false);
                // this.refreshSecondWrongData(state);
            }
            
        }

        this.updateState(state);
    }

    refreshFirstRightData(state) {

        state.colliderBox = [];
        // 第二次做题时初始化按钮全部位置

        for (let i = 0; i < this._colliderCacheSecond.length; i++) {
            if (i < this._containerTotal) {

                let temp = {
                    pos: {
                       x: this._colliderCacheSecond[i].pos.x,
                       y: this._colliderCacheSecond[i].pos.y},
       
                       index: state.leftContain[i].index
                   };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.leftContain[i].index;

            } else if (i < this._containerTotal*2) {

                let temp = {
                    pos: {
                       x: this._colliderCacheSecond[i].pos.x,
                       y: this._colliderCacheSecond[i].pos.y
                    },
       
                       index: state.midContain[i-this._containerTotal].index
                   };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.midContain[i-this._containerTotal].index;

            } else {

                let temp = {
                    pos: {
                       x: this._colliderCacheSecond[i].pos.x,
                       y: this._colliderCacheSecond[i].pos.y
                    },
       
                       index: state.rightContain[i-this._containerTotal*2].index
                   };
                state.colliderBox.push(temp);
                this._colliderCacheSecond[i].index = state.rightContain[i-this._containerTotal*2].index;
            } 
        }

        for (let i = 0; i < this._colliderBox.length; i++) {

            for (let j = 0; j < this._colliderCacheSecond.length; j++) {

                if (this._colliderBox[i].data.index === this._colliderCacheSecond[j].index) {
                    this._colliderBox[i].data.x = this._colliderCacheSecond[j].pos.x;
                    this._colliderBox[i].data.y = this._colliderCacheSecond[j].pos.y;
                    break;
                }
            }
        }
       
        this._leftContain = [];
        this._rightContain = [];
        this._midContain = [];

        state.leftContain = [];
        state.rightContain = [];
        state.midContain = [];

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

            if (state.answer.length === 1) {
                // 显示第二种答题界面
                this._c2.selectedIndex = 1;

            }else if (state.answer.length >= 2) {
                // 临时 禁止操作期间 切页
                this.disableForbidHandle();
            }
        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {

            if (state.submit) {
                if (state.answer.length === 0) {
                    this.onHandleGuide(this.handleGuide);
                }else if (state.answer.length === 1){
                    this.onHandleGuide(this.handleGuide2);
                }
                
            }
        }
        
        if (!globalThis._.isEqual(oldState.colliderBox, state.colliderBox)) {

            for (let i = 0; i < state.colliderBox.length; i++) {

                 this._colliderBox[state.colliderBox[i].index].x =  state.colliderBox[i].pos.x;
                 this._colliderBox[state.colliderBox[i].index].y =  state.colliderBox[i].pos.y;
            }
        }
        
        if (!globalThis._.isEqual(oldState.leftContain, state.leftContain)) {

            for (let i = 0; i < state.leftContain.length; i++) {        
                 this._colliderBox[state.leftContain[i].index].x = state.leftContain[i].pos.x;
                 this._colliderBox[state.leftContain[i].index].y = state.leftContain[i].pos.y;
            }
        }

        if (!globalThis._.isEqual(oldState.rightContain, state.rightContain)) {

            for (let i = 0; i < state.rightContain.length; i++) {
                this._colliderBox[state.rightContain[i].index].x = state.rightContain[i].pos.x;
                this._colliderBox[state.rightContain[i].index].y = state.rightContain[i].pos.y;
            }
        }

        if (!globalThis._.isEqual(oldState.midContain, state.midContain)) {

            for (let i = 0; i < state.midContain.length; i++) {
                this._colliderBox[state.midContain[i].index].x = state.midContain[i].pos.x;
                this._colliderBox[state.midContain[i].index].y = state.midContain[i].pos.y;
            }
        }

        if (!globalThis._.isEqual(oldState.box1Contain, state.box1Contain)) {
            for (let i = 0; i < state.box1Contain.length; i++) {
                this._colliderBox[state.box1Contain[i].index].x = state.box1Contain[i].pos.x;
                this._colliderBox[state.box1Contain[i].index].y = state.box1Contain[i].pos.y;
            }
        }

        if (!globalThis._.isEqual(oldState.box2Contain, state.box2Contain)) {
            for (let i = 0; i < state.box2Contain.length; i++) {
                this._colliderBox[state.box2Contain[i].index].x = state.box2Contain[i].pos.x;
                this._colliderBox[state.box2Contain[i].index].y = state.box2Contain[i].pos.y;
            }
        }

        if (!globalThis._.isEqual(oldState.box3Contain, state.box3Contain)) {
            for (let i = 0; i < state.box3Contain.length; i++) {
                this._colliderBox[state.box3Contain[i].index].x = state.box3Contain[i].pos.x;
                this._colliderBox[state.box3Contain[i].index].y = state.box3Contain[i].pos.y;
            }
        }

        if (!globalThis._.isEqual(oldState.box4Contain, state.box4Contain)) {
            for (let i = 0; i < state.box4Contain.length; i++) {
                this._colliderBox[state.box4Contain[i].index].x = state.box4Contain[i].pos.x;
                this._colliderBox[state.box4Contain[i].index].y = state.box4Contain[i].pos.y;
            }
        }

        if (!globalThis._.isEqual(oldState.box5Contain, state.box5Contain)) {
            for (let i = 0; i < state.box5Contain.length; i++) {
                this._colliderBox[state.box5Contain[i].index].x = state.box5Contain[i].pos.x;
                this._colliderBox[state.box5Contain[i].index].y = state.box5Contain[i].pos.y;
            }
        }

        if (!globalThis._.isEqual(oldState.box6Contain, state.box6Contain)) {
            for (let i = 0; i < state.box6Contain.length; i++) {
                this._colliderBox[state.box6Contain[i].index].x = state.box6Contain[i].pos.x;
                this._colliderBox[state.box6Contain[i].index].y = state.box6Contain[i].pos.y;
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
        }, 1000);
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
