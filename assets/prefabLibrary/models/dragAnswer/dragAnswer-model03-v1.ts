import DragAnswerModel03Base from "./DragAnswerModel03Base";

/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 15:25:58
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { pointBelongArea } = window['GlobalData'].utils;

const { ccclass, property } = cc._decorator;

@ccclass
export default class dragAnswer_model03_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _dragBtn: fgui.GButton;
    private _btnBox: fgui.GButton;

    private dragBox: fgui.GComponent;
    private dropBox: fgui.GComponent;

    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    protected _view: fgui.GComponent;

    // fairygui 组件
    private handleGuide: any;
    private lineBlink: any;

    // 远程动态组件
    private feedback: any;

    private _colliderBox = [];
    private _collideredBox = [];

    private _cache = {};
    private _scheduleTime = .3;
    private _dragging = false;

    private _answer = 0;

    private _dragIconArr = [];
    private _footNum: number[] = [];
    public pageData: any;

    private _state: any = {};

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;
        this.mergeState();
    }


    onLoad() {
        let s = this;
        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");
        // 臨時
        // bug 初始设置不播放不生效
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }

        s.createUI();
        s.addEvent();

        /* let dragIconsPosArr = [];
        s.pageData.model.config.dragIcon.foreach(v => {
            dragIconsPosArr.push({ x: v.x, y: v.y });
        }) */
        // 初始化state
        this._state = {
            drag: "end",
            /* dragIconArr: s._dragIconArr.map(v => v),
            dragIconIndex: null, */
            getDropArr: [],
            collider: this._cache["colliderBox"].map((v: any) => v),//拖拽物的位置数组
            colliderIndex: null,//当前拖拽物在数组内的索引
            collidered: this._cache["collideredBox"].map((v: any) => v),//二维数组，存放每个放置区对应的被放置元素
            dropArr: [],
            // dragIconsPosArr: dragIconsPosArr,
            title: false,
            submit: false,
            answer: false
        }

        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    }

    createUI() {
        let s = this;
        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        let colliderGroup = this._view.getChild("colliderBox").asGroup;
        let collideredGroup = this._view.getChild("collideredBox").asGroup;

        s._cache["colliderBox"] = [];
        for (let i = 0; i < this._view.numChildren; i++) {
            if (s._view.getChildAt(i).group == colliderGroup) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                s._cache['colliderBox'].push({ x: btn.x, y: btn.y, belong: null });
                btn['collideredIndex'] = -1;
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);

            }
        }
        // console.log('this._colliderBox', this._colliderBox);


        s._cache["collideredBox"] = [];
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                let btn: fgui.GImage = this._view.getChildAt(i).asImage;
                s._cache['collideredBox'].push([]);
                this._collideredBox.push(btn);
            }
        }
        // console.log('this._collideredBox', this._collideredBox);


        /* s.dropBox = fgui.UIPackage.createObject('t4-trialClass-01', 'TypeDropBox1').asCom;
        s.dropBox.x = 368;
        s.dropBox.y = 600;
        s._view.addChild(s.dropBox);

        s.dragBox = fgui.UIPackage.createObject('t4-trialClass-01', 'TypeDragBox1').asCom;
        s.dragBox.x = 610;
        s.dragBox.y = 250;
        s._view.addChild(s.dragBox); */
        // s.dropBox = s._view.getChild('dropBox').asCom;
        // s.dragBox = s._view.getChild('dragBox').asCom;

        // let dragIcon = s.pageData.model.config.dragIcon;
        /* for (let key in dragIcon) {
            let dragIconData = dragIcon[key];
            let icon = new fgui.GComponent();
            let iconImg = fgui.UIPackage.createObject('t4-trialClass-01', dragIconData.name).asImage;
            icon.addChild(iconImg);
            icon.setSize(iconImg.width, iconImg.height);
            // icon.setPivot(0.5,0.5,true);
            icon.opaque = true;
            icon.x = dragIconData.x;
            icon.y = dragIconData.y;
            icon['dragOrigin'] = this.getOriginValue(icon);
            console.log('icon = ', icon['dragOrigin']);

            // icon.touchable = true;
            icon.draggable = true;

            icon.on(fgui.Event.TOUCH_BEGIN, s._onDragStart, s);
            icon.on(fgui.Event.TOUCH_MOVE, s._onDragMove, s);
            icon.on(fgui.Event.TOUCH_END, s._onDragEnd, s);

            // icon.on(cc.Node.EventType.TOUCH_START, s._onDragStart, s);

            s.dragBox.addChild(icon);
            s._dragIconArr.push(icon);
        } */
    }

    addEvent() {
        // let s = this;
        // s._submitBtn.on(fgui.Event.CLICK, s._clickSubmit, s);
        // s._readTitleBtn.on(fgui.Event.CLICK, s._clickTitle, s);
    }

    async init(data: any) {
        let s = this;
        s.pageData = data;
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { answer, ae, dragIcon } = model.config;

        if (model.uiPath) {
            GComponent = model.uiPath;
            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        }

        /* s._readTitleBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'TitleCom').asCom;

        (s._readTitleBtn.getChild('title') as fgui.GLoader).url = fgui.UIPackage.createObject('t4-trialClass-01', 'title_3').asImage.resourceURL;
        s._readTitleBtn.x = 20;
        s._readTitleBtn.y = 50;
        this._view.addChild(s._readTitleBtn);


        s._submitBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'SubmitBtn').asCom;
        s._submitBtn.x = 1676;
        s._submitBtn.y = 806;
        this._view.addChild(s._submitBtn); */

        if (model.config) {
            // if (answer) this._answer = answer;
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
            if (answer) s._answer = answer;
            if (dragIcon) {
                for (let key in dragIcon) {
                    s._footNum.push(dragIcon[key].footNum);
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
    }

    getOriginValue(v: any) {
        return {
            x: v.x,
            y: v.y
        }
    }

    // private _curDragIcon: cc.Node = null;
    // private _offsetPos: cc.Vec2 = new cc.Vec2();
    private _onDragStart(evt: fgui.Event): void {
        let s = this;
        // evt.captureTouch();
        /* s._curDragIcon = evt.currentTarget;
        console.log('_onDragStart');
        console.log(s._curDragIcon);
        console.log(s._curDragIcon.y);

        let pos = s._curDragIcon.parent.convertToNodeSpaceAR(evt.getLocation());
        s._offsetPos.x = pos.x - s._curDragIcon.x;
        s._offsetPos.y = pos.y - s._curDragIcon.y;

        s._view.on(cc.Node.EventType.TOUCH_MOVE, s._onDragMove, s);
        s._curDragIcon.once(cc.Node.EventType.TOUCH_END, s._onDragEnd, s); */
        // s._curDragIcon.draggable = true;

        let collider = fgui.GObject.cast(evt.currentTarget);
        s._view.setChildIndex(collider, s._view.numChildren - 1);
        let colliderIndex = s._colliderBox.findIndex(v => v == collider);

        let state: any = globalThis._.cloneDeep(s._state);
        state.colliderIndex = colliderIndex;
        s.updateState(state);
        // state.drag = "start";
        // state.curDragIcon = s._curDragIcon;
        /* state.curDragIconsPos = {
            x: s._curDragIcon['$gobj']["dragOrigin"].x,
            y: s._curDragIcon['$gobj']["dragOrigin"].y,
        }; */
        // state.answer = state.drops === s._answer;
    }

    private _onDragMove(evt: fgui.Event): void {
        let s = this;
        // console.log('_onDragMove');
        // if (!s._curDragIcon) return;
        s._dragging = true;


        // let pos = s._curDragIcon.parent.convertToNodeSpaceAR(evt.getLocation());
        // s._curDragIcon.x = pos.x - s._offsetPos.x;
        // s._curDragIcon.y = pos.y - s._offsetPos.y;

        // console.log(s._curDragIcon.x + ' - ' + s._curDragIcon.y);
    }

    // private dropArr = [];
    private _onDragEnd(evt: fgui.Event): void {
        let s = this;
        if (!this._dragging) return;
        this._dragging = false;

        let collider: any = fgui.GObject.cast(evt.currentTarget);
        let colliderIndex: number = this._colliderBox.findIndex((v: any) => v == collider);

        let arr: any = [];
        let collidered: any;
        this._collideredBox.forEach((v: any, i: any) => {
            // if (this._belongArea(collider, v, 500) == true) arr.push(v);
            if (s.isCollisionWithRect(v, collider)) arr.push(v);
        });

        arr.forEach((v: any, i: any) => {
            if (i == 0) {
                collidered = v;
            } else {
                let pd = this._getDistance(collider, arr[i - 1]);
                let cd = this._getDistance(collider, v);
                if (cd < pd) collidered = v;
            }
        });

        // 放置区索引，定位到放入了那个放置区
        let collideredIndex: number = this._collideredBox.findIndex((v: any) => v == collidered);


        let state: any = globalThis._.cloneDeep(this._state);
        let sss: any = globalThis._.cloneDeep(state);
        // let state = JSON.parse(JSON.stringify(this._state))
        console.log('origin state = ', this._state.dropArr);// right
        console.log('clone state = ', state.dropArr);//rihgt
        console.log('sss = ', sss.dropArr);//wrong

        // dropArr = state.collidered[collideredIndex].map(v => v);
        // console.warn('state.dropArr[0] = ', state.dropArr);
        // let dropArr = JSON.parse(JSON.stringify(state.dropArr));
        let dropArr = state.dropArr;
        // console.error('s.dropArr11111111111111 = ', dropArr);



        let name = collider.name;
        // let dropArrIndex = dropArr.indexOf(data);//放置区是否已包含当前拖拽元素
        let dropArrIndex = dropArr.findIndex(v => v.name == name);//放置区是否已包含当前拖拽元素
        console.warn('dropArrIndex = ', dropArrIndex);

        // 1.重置位置 重置到
        // 2.放入放置区
        if (collideredIndex == -1 || dropArr.length == 6) {
            // reset
            // console.log('reset');
            if (dropArrIndex > -1) {
                dropArr.splice(dropArrIndex, 1);
            }
            state.collider[colliderIndex] = {
                x: this._cache["colliderBox"][colliderIndex].x,
                y: this._cache["colliderBox"][colliderIndex].y
            }
            if (collider.collideredIndex > -1) {
                collideredIndex = collider.collideredIndex;
            } else {
                collideredIndex = 0
            }
        } else {
            if (dropArrIndex == -1) {
                // dropArr.push(JSON.parse(JSON.stringify(collider)));
                dropArr.push({ 'name': collider.name });
                // console.warn('pushhhhhhhhhh',dropArr);
            }
        }
        // dropArr.push({ name: collider.name });
        // console.warn('pushhhhhhhhhh',dropArr);

        let footNum = 0;
        for (let i = 0; i < dropArr.length; i++) {
            let item = dropArr[i];
            // let itemIndex = s._colliderBox.indexOf(item);//状态池中的index
            let itemIndex = s._colliderBox.findIndex(v => v.name == item.name);//状态池中的index
            let pos: cc.Vec2 = new cc.Vec2();
            if (item.name.indexOf('left') > -1) {
                pos.x = s._collideredBox[collideredIndex].x + 150 + 200 * i;
                pos.y = s._collideredBox[collideredIndex].y + 200 + 85;
                footNum += s._footNum[0];
            } else if (item.name.indexOf('right') > -1) {
                pos.x = s._collideredBox[collideredIndex].x + 150 + 200 * i;
                pos.y = s._collideredBox[collideredIndex].y + 200;
                footNum += s._footNum[1];
            }
            state.collider[itemIndex] = {
                x: pos.x,
                y: pos.y,
                belong: collideredIndex
            }
        }
        collider.collideredIndex = collideredIndex;

        state.drag = "end";
        state.submit = false;
        state.colliderIndex = colliderIndex;
        // state.collidered[collideredIndex] = dropArr.concat([]);
        console.log('给state赋值前的', dropArr);

        state.dropArr = dropArr;
        console.warn('赋值后的', state.dropArr);

        state.answer = footNum == s._answer ? true : false;
        s.updateState(state);
        // s._curDragIcon = null;
        console.log('------------------------------------------------');

    }

    private _getDistance(self: any, area: any) {
        let width = (self.x + self.width / 2) - (area.x + area.width / 2);
        let height = (self.y + self.height / 2) - (area.y + area.height / 2);
        let distance = Math.sqrt(width * width + height * height);
        return distance;
    }

    /**
     * 矩形碰撞
     * @param rect1 
     * @param rect2 
     * @returns 
     */
    private isCollisionWithRect(rect1: fgui.GObject, rect2: fgui.GObject): boolean {
        if (rect1.x >= rect2.x && rect1.x >= rect2.x + rect2.width) {
            return false;
        } else if (rect1.x <= rect2.x && rect1.x + rect1.width <= rect2.x) {
            return false;
        } else if (rect1.y >= rect2.y && rect1.y >= rect2.y + rect2.height) {
            return false;
        } else if (rect1.y <= rect2.y && rect1.y + rect1.height <= rect2.y) {
            return false;
        }
        return true;
    }

    private _belongArea(self: any, area: any, gap: number = 10) {
        let width = (self.x + self.width / 2) - (area.x + area.width / 2);
        let height = (self.y + self.height / 2) - (area.y + area.height / 2);
        let distance = Math.sqrt(width * width + height * height);
        return distance < gap;
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private async _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        // state.answer = state.drops === this._answer;
        state.submit = true;
        this.updateState(state);
    }


    // 获取状态
    getState(data: any) {
        this.updateState(data);
    }

    // 更新状态层
    updateState(curState: any) {
        // console.log('old = ', this._state);
        // console.log('new = ', curState);
        // console.log('updateState ', globalThis._.isEqual(this._state, curState));
        if (globalThis._.isEqual(this._state, curState)) return;
        this.state = curState;
    }


    // 更新ui层
    updateUi(oldState: any, state: any) {
        let s = this;
        // console.log('updateUi = ', state);

        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;

            // state.curDragIcon.x = state.curDragIconsPos.x;
            // state.curDragIcon.y = state.curDragIconsPos.y;
        }

        if (state.drag == "end") {
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                console.log('endddddddddd update ui', state);

                for (let i = 0; i < state.collider.length; i++) {
                    this._colliderBox[i].x = state.collider[i].x;
                    this._colliderBox[i].y = state.collider[i].y;
                }
            }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                console.log('submittttttt');

                if (state.submit) {
                    // if (state.drops) {
                    this.answerFeedback(state.answer);
                    // } else {
                    //     this.onHandleGuide();
                    // }
                }
            }

            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }

            /* if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    let nv: any = this._colliderBox.map((v: any) => { return { "x": v.x, "y": v.y } });
                    let bool: boolean = this._cache["colliderBox"].every((v: any, i: any) => v.x == nv[i].x && v.y == nv[i].y);
                    bool ? this.onHandleGuide() : this.onFlicker(state.answer);
                }
            } */

        }
    }

    async playTitle(bool: boolean) {
        this._c2.selectedIndex = bool ? 1 : 0;

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
        let state: any = globalThis._.cloneDeep(this._state);
        let feedback: any = cc.instantiate(this.feedback);
        feedback.x = 960;
        feedback.y = 540;
        let feedbackJs: any = feedback.getComponent(cc.Component);
        feedbackJs.init(bool);
        feedback.parent = cc.find("Canvas").parent;

        setTimeout(() => {
            feedback.destroy();
            state.submit = false;
            this.updateState(state);
        }, 2000);
    }

    // 天枰提示
    /* onLibraHint() {
        if (!this.lineBlink) return;
        fgui.GRoot.inst.addChild(this.lineBlink.component);
        if (this.lineBlink.pos) {
            this.lineBlink.component.x = (fgui.GRoot.inst.width - this.lineBlink.component.width) / 2 + this.lineBlink.pos.x;
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2 + this.lineBlink.pos.y;
        } else {
            this.lineBlink.component.y = (fgui.GRoot.inst.height - this.lineBlink.component.height) / 2;
        }

        let t: fgui.Transition = this.lineBlink.component.getTransition("t0");
        t.play(() => {
            fgui.GRoot.inst.removeChild(this.lineBlink.component);
        });
    } */

    // 操作提示
    onHandleGuide() {
        if (!this.handleGuide) return;
        let state: any = globalThis._.cloneDeep(this._state);
        fgui.GRoot.inst.addChild(this.handleGuide.component);
        if (this.handleGuide.pos) {
            this.handleGuide.component.x = (fgui.GRoot.inst.width - this.handleGuide.component.width) / 2 + this.handleGuide.pos.x;
            this.handleGuide.component.y = (fgui.GRoot.inst.height - this.handleGuide.component.height) / 2 + this.handleGuide.pos.y;
        } else {
            this.handleGuide.component.y = (fgui.GRoot.inst.height - this.handleGuide.component.height) / 2;
        }

        let t: fgui.Transition = this.handleGuide.component.getTransition("t0");
        t.play(() => {
            fgui.GRoot.inst.removeChild(this.handleGuide.component);
            state.submit = false;
            this.updateState(state);
        }, 2);
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
        let s = this;
        if (s._dragging) {
            let state: any = globalThis._.cloneDeep(s._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
            };
            s.updateState(state);

            /* state.curDragIconsPos = {
                x: s._curDragIcon.x,
                y: s._curDragIcon.y,
            }; */
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
        this.schedule(this.dragSchedule, this._scheduleTime);
    }

    onDisable() {
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
