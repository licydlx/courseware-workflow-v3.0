/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-12 16:13:16
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { pointBelongArea } = window['GlobalData'].utils;

const { ccclass, property } = cc._decorator;

@ccclass
export default class dragAnswer_model01_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _dragBtn: fgui.GButton;
    private _btnBox: fgui.GButton;
    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    // fairygui 组件
    private handleGuide: any;
    private lineBlink: any;

    // 远程动态组件
    private feedback: any;

    private _grids = [];

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

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;

        this._dragBtn = this._view.getChild("dragBtn").asButton;
        this._cache["dragOrigin"] = this.getOriginValue(this._dragBtn);

        this._dragBtn.draggable = true;
        this._dragBtn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
        this._dragBtn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        this._dragBtn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);

        this._btnBox = this._view.getChild("btnBox").asButton;
        if (this._btnBox) this._btnBox.on(fgui.Event.CLICK, this._clickRemove, this);

        let aGroup = this._btnBox.getChild("grids").asGroup;

        // for (let i = 0; i < this._btnBox.numChildren; i++) {
        //     if (this._btnBox.getChildAt(i).group == aGroup) {
        //         let grid: fgui.GLoader = this._btnBox.getChildAt(i).asLoader;
        //         this._grids.push(grid);
        //     }
        // }

        for (let i = this._btnBox.numChildren - 1; i > -1; i--) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                let grid: fgui.GLoader = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }

        // 初始化state
        this._state = {
            drag: "end",
            dragBtn: {
                x: this._dragBtn.x,
                y: this._dragBtn.y
            },
            title: false,
            drops: 0,
            submit: false,
            answer: false
        }

        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { answer, ae } = model.config;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        // 动效注册
        for (let v in ae) {
            if (ae[v]) {
                this[v] = {};
                if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                if (ae[v].pos) this[v].pos = ae[v].pos;
            }
        }

        if (answer) this._answer = answer;
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
        state.drag = "start";
        state.answer = state.drops === this._answer;
        this.updateState(state);
    }

    private _onDragMove(evt: fgui.Event): void {
        this._dragging = true;
    }

    private _onDragEnd(evt: fgui.Event): void {
        this._dragging = false;

        let state: any = globalThis._.cloneDeep(this._state);
        let bool:boolean = pointBelongArea("rectangle", this._btnBox, this._dragBtn);
        if (bool) {
            let icon: fgui.GLoader = this._dragBtn.getChild("icon").asLoader;
            let grid: fgui.GLoader = this._grids.find(v => v.url === null);
            if (grid) {
                //grid.url = icon.url;
                state.drops = state.drops + 1;
            }
        }

        state.dragBtn = {
            x: this._cache["dragOrigin"].x,
            y: this._cache["dragOrigin"].y,
        };
        state.drag = "end";
        state.answer = state.drops === this._answer;
        this.updateState(state);
    }

    private _clickRemove(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);

        let index: number = this._grids.findIndex((v: any) => v.url === null);
        if (index !== 0) {
            // let grid: fgui.GLoader = this._grids[index == -1 ? this._grids.length - 1 : index - 1];
            // grid.url = null;

            state.drops = state.drops - 1;
            state.answer = state.drops === this._answer;
            this.updateState(state);
        }
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private async _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.answer = state.drops === this._answer;
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
            this._dragBtn.x = state.dragBtn.x;
            this._dragBtn.y = state.dragBtn.y;
        }

        if (state.drag == "end") {
            this._dragBtn.x = this._cache["dragOrigin"].x;
            this._dragBtn.y = this._cache["dragOrigin"].y;

            if (!globalThis._.isEqual(oldState.drops, state.drops)) {
                for (let i = 0; i < this._grids.length; i++) {
                    let grid: fgui.GLoader = this._grids[i];
                    if (state.drops > i) {
                        if (!grid.url) {
                            let icon: fgui.GLoader = this._dragBtn.getChild("icon").asLoader;
                            grid.url = icon.url;
                        }
                    } else {
                        if (grid.url) grid.url = null;
                    }
                }
                this._c1.selectedIndex = state.drops;

                if (!state.answer) this.onLibraHint();
            }

            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    if (state.drops) {
                        this.answerFeedback(state.answer);
                    } else {
                        this.onHandleGuide();
                    }
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
    onLibraHint() {
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
            state.dragBtn = {
                x: this._dragBtn.x,
                y: this._dragBtn.y,
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
