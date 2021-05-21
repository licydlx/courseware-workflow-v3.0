/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-05-07 14:34:26
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-21 11:57:00
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;

const { ccclass, property } = cc._decorator;

@ccclass
export default class dragAnswer_model01_v2 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;

    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _submit: fgui.GButton;

    private _title: fgui.GButton;

    private _titleTrigger: fgui.GLoader;

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

        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");
        // 臨時
        // bug 初始设置不播放不生效
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }

        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        let colliderGroup = this._view.getChild("colliderBox").asGroup;
        let collideredGroup = this._view.getChild("collideredBox").asGroup;

        this._cache["colliderBox"] = [];
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == colliderGroup) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                this._cache["colliderBox"].push({ x: btn.x, y: btn.y, belong: null });
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }

        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                this._collideredBox.push(btn);
            }
        }

        // 初始化state
        this._state = {
            drag: "end",
            collider: this._cache["colliderBox"].map((v: any) => v),
            colliderIndex: null,
            title: false,
            submit: false,
            answer: false
        }

        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback:any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
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
    }

    getOriginValue(v: any) {
        return {
            x: v.x,
            y: v.y
        }
    }

    private _onDragStart(evt: fgui.Event): void {
        evt.captureTouch();

        let state: any = globalThis._.cloneDeep(this._state);
        let collider: any = fgui.GObject.cast(evt.currentTarget);
        let colliderIndex: number = this._colliderBox.findIndex((v: any) => v == collider);
        state.colliderIndex = colliderIndex;
        this.updateState(state);
    }

    private _onDragMove(evt: fgui.Event): void {
        this._dragging = true;
    }

    private _onDragEnd(evt: fgui.Event): void {
        // 临时
        // 两个被拖拽物 同时被松开 会触发2次回调
        if (!this._dragging) return;
        this._dragging = false;

        let collider: any = fgui.GObject.cast(evt.currentTarget);
        let colliderIndex: number = this._colliderBox.findIndex((v: any) => v == collider);

        let arr: any = [];
        let collidered: any;
        this._collideredBox.forEach((v: any, i: any) => {
            if (this._belongArea(collider, v, 110) == true) arr.push(v);
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

        let collideredIndex: number = this._collideredBox.findIndex((v: any) => v == collidered);

        let state: any = globalThis._.cloneDeep(this._state);
        if (collideredIndex == -1) {
            state.collider[colliderIndex] = {
                x: this._cache["colliderBox"][colliderIndex].x,
                y: this._cache["colliderBox"][colliderIndex].y,
                belong: null,
            }
        } else {
            let x: number = this._collideredBox[collideredIndex].x + this._collideredBox[collideredIndex].width / 2 - this._colliderBox[colliderIndex].width / 2;
            let y: number = this._collideredBox[collideredIndex].y + this._collideredBox[collideredIndex].height / 2 - this._colliderBox[colliderIndex].height / 2;
            let bool: boolean = state.collider.find((v: any) => v.x == x && Math.abs(v.y - y) < 55);

            state.collider[colliderIndex] = {
                x: bool ? this._cache["colliderBox"][colliderIndex].x : x,
                y: bool ? this._cache["colliderBox"][colliderIndex].y : y,
                belong: bool ? null : collideredIndex,
            }
        }

        // let answerBool: boolean = state.collider.every((v: any, i: any) => !globalThis._.isEqual(v, this._cache["colliderBox"][i]));
        // state.answer = answerBool;
        // if (answerBool) {
        //     state.submit = true;
        // }
        state.submit = false;
        state.drag = "end";
        state.colliderIndex = colliderIndex;
        this.updateState(state);
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        let answer: any = state.collider.map((v: any) => v.belong).filter((v: any) => v || v === 0).join("");
        state.answer = answer == this._answer;
        state.submit = true;
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
        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
        }

        if (state.drag == "end") {
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                for (let i = 0; i < state.collider.length; i++) {
                    this._colliderBox[i].x = state.collider[i].x;
                    this._colliderBox[i].y = state.collider[i].y;
                }
            }

            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }

            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    let nv: any = this._colliderBox.map((v: any) => { return { "x": v.x, "y": v.y } });
                    let bool: boolean = this._cache["colliderBox"].every((v: any, i: any) => v.x == nv[i].x && v.y == nv[i].y);
                    bool ? this.onHandleGuide() : this.onFlicker(state.answer);
                } else {
                    this.disableForbidHandle();
                }
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
                let state: any = globalThis._.cloneDeep(this._state);
                state.title = false;
                this.updateState(state);
            });
        } else {
            this.disableForbidHandle();
        }
    }

    /**
     * @name: 获取距离
     * @msg: 
     * @param {any} self
     * @param {any} area
     * @return {*}
     */
    private _getDistance(self: any, area: any) {
        let width = (self.x + self.width / 2) - (area.x + area.width / 2);
        let height = (self.y + self.height / 2) - (area.y + area.height / 2);
        let distance = Math.sqrt(width * width + height * height);
        return distance;
    }

    /**
     * @name: 区域所属判断
     * @msg: 
     * @param {any} self
     * @param {any} area
     * @param {number} gap
     * @return {*}
     */
    private _belongArea(self: any, area: any, gap: number = 10) {
        let width = (self.x + self.width / 2) - (area.x + area.width / 2);
        let height = (self.y + self.height / 2) - (area.y + area.height / 2);
        let distance = Math.sqrt(width * width + height * height);
        return distance < gap;
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

    // 格子闪烁 提示
    onFlicker(answer: any) {
        if (answer) {
            let t: fgui.Transition = this._view.getTransition("t0");
            t.play(() => {
                this.answerFeedback(answer);
            });
        } else {
            this.answerFeedback(answer);
        }
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
