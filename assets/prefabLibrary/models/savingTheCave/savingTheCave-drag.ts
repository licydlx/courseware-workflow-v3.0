
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
export default class savingTheCave_drag extends cc.Component {
    private _worldRoot: cc.Node;
    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    protected _view: fgui.GComponent;

    private _packName: string;
    // fairygui 组件
    private handleGuide: any;

    // 远程动态组件
    private feedback: any;

    /** 拖拽物数组 */
    private _colliderBox = [];
    /** 放置区数组 */
    private _collideredBox = [];

    private _cache = {};
    private _scheduleTime = .3;
    private _dragging = false;

    private _answer;
    private _roleUrl;
    private _gameType = 0;
    /** 角色数量 */
    private _roleCount = 0;

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

        // 初始化state
        this._state = {
            drag: "end",
            getDropArr: [],
            collider: s._cache["colliderBox"].map((v: any) => v),//拖拽物的位置数组
            colliderIndex: null,//当前拖拽物在数组内的索引
            collidered: this._cache["collideredBox"].map((v: any) => v),//二维数组，存放每个放置区对应的被放置元素
            dropArr: [],
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
                s._cache['colliderBox'].push({ x: btn.x, y: btn.y, collideredIndex: -1, roleType: btn.data });
                btn['collideredIndex'] = -1;
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }
        // console.log('this._colliderBox', s._colliderBox);

        s._cache["collideredBox"] = [];
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                let btn: fgui.GComponent = this._view.getChildAt(i).asCom;
                s._cache['collideredBox'].push([]);
                this._collideredBox.push(btn);
            }
        }
        // console.log('this._collideredBox', s._collideredBox);

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
        s._packName = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { answer, roleUrl, ae, gameType, roleCount } = model.config;

        if (model.uiPath) {
            GComponent = model.uiPath;
            this._view = fgui.UIPackage.createObject(s._packName, GComponent).asCom;
        }

        if (model.config) {
            if (answer) s._answer = answer;
            if (roleUrl) s._roleUrl = roleUrl;
            if (gameType) s._gameType = gameType;
            if (roleCount) s._roleCount = roleCount;
            // 动效注册
            if (ae) {
                for (let v in ae) {
                    if (ae[v]) {
                        this[v] = {};
                        if (ae[v].component) this[v].component = fgui.UIPackage.createObject(s._packName, ae[v].component).asCom;
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
    }

    // private _curDragIcon: cc.Node = null;
    // private _offsetPos: cc.Vec2 = new cc.Vec2();
    private _onDragStart(evt: fgui.Event): void {
        let s = this;
        s._dragging = true;
        evt.captureTouch();
        s.playSound('ui://5w4y4dqwku3ef');
        let collider = fgui.GObject.cast(evt.currentTarget);
        s._view.setChildIndex(collider, s._view.numChildren - 2);
        let colliderIndex = s._colliderBox.findIndex(v => v == collider);

        let state: any = globalThis._.cloneDeep(s._state);
        let collideredIndex = state.collider[colliderIndex].collideredIndex;
        if (collideredIndex != -1) {
            let index = state.collidered.findIndex(v => v.name == collider.name)
            state.collidered[collideredIndex].splice(index, 1);
            // state.collider[colliderIndex].collideredIndex = -1;
        }

        state.colliderIndex = colliderIndex;
        s.updateState(state);
    }

    private _onDragMove(evt: fgui.Event): void {
        let s = this;
        s._dragging = true;
    }

    // private dropArr = [];
    private _onDragEnd(evt: fgui.Event): void {
        let s = this;
        s.playSound('ui://5w4y4dqwku3eg');
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
        console.log('collideredIndex = ', collideredIndex);


        let state: any = globalThis._.cloneDeep(this._state);

        let dropArr = state.collidered[collideredIndex];

        let colliderName: string = collider.name;


        // 1.重置位置 
        // collideredIndex == -1 || 头和脚放置位置不匹配 || 头和脚无法组合 -> 重置回初始位置
        // collideredIndex != -1 
        // dropArr.length == 1 && 
        // 2.放入放置区
        if (collideredIndex == -1) {
            // reset
            console.log('reset');

            state.collider[colliderIndex] = {
                x: s._cache["colliderBox"][colliderIndex].x,
                y: s._cache["colliderBox"][colliderIndex].y,
                collideredIndex: -1
            }
        } else {
            if (dropArr.length == 1) {
                // 移除原有的元素
                let existColliderData = dropArr.splice(0, 1);
                console.log(existColliderData[0]);

                let existColliderIndex: number = this._colliderBox.findIndex((v: any, i: number) => v.name == existColliderData[0].name);
                state.collider[existColliderIndex] = {
                    x: s._cache["colliderBox"][existColliderIndex].x,
                    y: s._cache["colliderBox"][existColliderIndex].y,
                    collideredIndex: -1
                }
            }
            dropArr.push({
                'name': colliderName,
                collideredIndex: collideredIndex
            });
            state.collider[colliderIndex] = {
                x: s._collideredBox[collideredIndex].x,
                y: s._collideredBox[collideredIndex].y,
                collideredIndex: collideredIndex
            }
            state.collidered[collideredIndex] = dropArr;
        }

        state.drag = "end";
        state.submit = false;
        state.colliderIndex = colliderIndex;

        s.updateState(state);
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

    private async _clickSubmit() {
        let s = this;
        let state: any = globalThis._.cloneDeep(this._state);
        let isAnswer: boolean = state.collidered.every(v => v.length > 0);
        let userAnswer = isAnswer ? state.collidered.map(v => v[0].name.slice(-1)).join('|') : '';
        console.log(userAnswer);
        console.log(s._answer);
        state.answer = s._answer.indexOf(userAnswer) > -1;
        state.submit = true;
        this.updateState(state);
    }

    // 获取状态
    getState(data: any) {
        this.updateState(data);
    }

    // 更新状态层
    updateState(curState: any) {
        // if (globalThis._.isEqual(this._state, curState)) return
        this.state = curState;
    }


    // 更新ui层
    updateUi(oldState: any, state: any) {
        let s = this;
        // console.log('updateUi = ', state);

        if (state.drag == "move") {
            if (s._view.getChildIndex(this._colliderBox[state.colliderIndex]) != s._view.numChildren - 2) {
                s._view.setChildIndex(this._colliderBox[state.colliderIndex], s._view.numChildren - 2);
            }
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
        }

        console.log('state.drag ', state.drag);
        if (state.drag == "end") {
            // if (!globalThis._.isEqual(oldState.collider, state.collider)) {
            // console.log('endddddddddd update ui', state);

            for (let i = 0; i < state.collider.length; i++) {
                this._colliderBox[i].x = state.collider[i].x;
                this._colliderBox[i].y = state.collider[i].y;
            }
            // }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                // console.log('submittttttt');

                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    let nv: any = this._colliderBox.map((v: any) => { return { "x": v.x, "y": v.y } });
                    let bool: boolean = s._cache["colliderBox"].every((v: any, i: any) => v.x == nv[i].x && v.y == nv[i].y);
                    if (bool) {
                        s.handTips1(s._colliderBox[0], s._collideredBox[0]);
                        return;
                    }
                    /* if (state.answer) {
                        s.showEndAnim(() => {
                            this.answerFeedback(state.answer);
                        });
                    } else {
                    } */
                    this.answerFeedback(state.answer);
                }
            }

            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }

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
                this._c2.selectedIndex = 0;
                let state: any = globalThis._.cloneDeep(this._state);
                state.title = false;
                this.updateState(state);
            });
        } else {
            this.disableForbidHandle();
        }
    }

    playSound(url: string) {
        let s = this;
        let item = fgui.UIPackage.getItemByURL(url);
        loadResource(item.file, cc.AudioClip).then((audio: cc.AudioClip) => {
            cc.audioEngine.play(audio, false, 1);
        });
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

    handTips1(fromObj: fgui.GObject, toObj: fgui.GObject, center: boolean = true) {
        let s = this;
        let hand = fgui.UIPackage.createObject(s._packName, 'hand');
        s._view.addChild(hand);
        hand.x = fromObj.x;
        hand.y = fromObj.y;
        cc.tween(hand).to(2, {
            x: toObj.x,
            y: toObj.y
        }).call(() => {
            s._view.removeChild(hand);
            hand = null;
            let state: any = globalThis._.cloneDeep(this._state);
            state.submit = false;
            this.updateState(state)
        }).start();
    }

    // TS
    drawLineOfDashes(g: cc.Graphics, from: cc.Vec2, to: cc.Vec2, stroke: boolean = true, length: number = 8, interval: number = 4): void {
        if (g) {
            let off = to.sub(from);
            let dir = off.normalize();
            let dis = off.mag();
            let delta = dir.mul(length + interval);
            let delta1 = dir.mul(length);
            let n = Math.floor(dis / (length + interval));
            for (let i = 0; i < n; ++i) {
                let start = from.add(delta.mul(i));
                g.moveTo(start.x, start.y);
                let end = start.add(delta1);
                g.lineTo(end.x, end.y);
            }
            let start1 = from.add(delta.mul(n));
            g.moveTo(start1.x, start1.y);
            if (length < dis - (length + interval) * n) {
                let end = start1.add(delta1);
                g.lineTo(end.x, end.y);
            } else {
                g.lineTo(to.x, to.y);
            }
            if (stroke) g.stroke();
        }
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
                collideredIndex: state.collider[state.colliderIndex].collideredIndex,
                roleType: state.collider[state.colliderIndex].roleType
            };
            s.updateState(state);
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
