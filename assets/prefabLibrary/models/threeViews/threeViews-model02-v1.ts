const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass } = cc._decorator;

@ccclass
export default class threeViews_model02_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _c2: fgui.Controller;
    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;
    private _curDragImg: fgui.GObject;
    private _dragImgInitPos = { x: 1303, y: 715 };

    // fairygui 组件
    private handleGuide: any;

    // 远程动态组件
    private feedback: any;

    private _colliderBox = [];
    private _collideredBox = [];

    private _cache = {};
    private _scheduleTime = .3;
    private _dragging = false;

    private _answer: Array<number> = [];
    private _rectUrl: string;

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

        this._c2 = this._view.getController("c2");
        // 臨時
        // bug 初始设置不播放不生效
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }

        this._submit = this._view.getChild("submitBtn").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        let collideredGroup = this._view.getChild("collideredBox").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                let square: fgui.GComponent = this._view.getChildAt(i).asCom;
                this._collideredBox.push(square);
            }
        }

        this._cache["colliderBox"] = [];
        this._curDragImg = this._view.getChild("imgDrag").asLoader;
        this._curDragImg.draggable = true;
        this._curDragImg.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
        this._curDragImg.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        this._curDragImg.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
        this._cache["colliderBox"].push({ x: this._curDragImg.x, y: this._curDragImg.y, belong: null });
        this._colliderBox.push(this._curDragImg);

        // 初始化state
        this._state = {
            drag: "end",
            collider: this._cache["colliderBox"].map((v: any) => v),
            colliderIndex: null,
            title: false,
            submit: false,
            answer: false,
            isCreate: false,
        }
        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback: any = this._worldRoot.getChildByName("feedback");
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

            if (model.config.rectUrl) this._rectUrl = model.config.rectUrl;

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

        //加载公共组件
        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
    }

    private _onDragStart(evt: fgui.Event): void {
        evt.captureTouch();
        this.playSound('ui://tfsfm7mbt1pw9');
        let state: any = globalThis._.cloneDeep(this._state);
        let collider: any = fgui.GObject.cast(evt.currentTarget);
        this._view.setChildIndex(collider, this._view.numChildren - 1);
        let colliderIndex: number = this._colliderBox.findIndex((v: any) => v == collider);
        state.colliderIndex = colliderIndex;
        this.updateState(state);
    }

    private createDragObj() {
        let imgObj = fgui.UIPackage.createObject("t4-02", "dragImg").asCom;
        let loader = imgObj.getChild("imgLoader") as fgui.GLoader;
        loader.url = this._rectUrl;
        imgObj.x = this._dragImgInitPos.x;
        imgObj.y = this._dragImgInitPos.y;
        imgObj.draggable = true;
        imgObj.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
        imgObj.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        imgObj.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
        this._view.addChildAt(imgObj, this._view.numChildren - 1)
        this._colliderBox.push(imgObj);
        this._cache["colliderBox"].push({ x: imgObj.x, y: imgObj.y, belong: null });
        return imgObj;
    }

    private _onDragMove(evt: fgui.Event): void {
        this._dragging = true;
    }

    private _onDragEnd(evt: fgui.Event): void {
        if (!this._dragging) return;
        this._dragging = false;

        let collider: any = fgui.GObject.cast(evt.currentTarget);
        let colliderIndex: number = this._colliderBox.findIndex((v: any) => v == collider);
        let obj: any = this._adsorb(collider);
        let state: any = globalThis._.cloneDeep(this._state);
        // this.playSound('ui://ik5aab9i98t375');
        if (obj.bool) {
            let isHas: boolean = state.collider.find((v: any, i: number) => {
                return v.belong == obj.collideredIndex
            });
            state.collider[colliderIndex] = {
                x: isHas ? this._cache["colliderBox"][obj.collideredIndex].x : obj.pos.x,
                y: isHas ? this._cache["colliderBox"][obj.collideredIndex].y : obj.pos.y,
                belong: isHas ? null : obj.collideredIndex
            }
            if (state.collider.length < 9) {
                state.isCreate = true;
            }
        } else {
            // this.playSound(obj.s == -1 ? 'ui://ik5aab9i98t375' : 'ui://ik5aab9i98t374');
            for (let i = 0; i < this._colliderBox.length; i++) {
                if (collider == this._colliderBox[i]) {
                    state.collider[colliderIndex] = {
                        x: this._cache["colliderBox"][i].x,
                        y: this._cache["colliderBox"][i].y,
                        belong: null
                    }
                }
            }
        }
        state.drag = "end";
        state.colliderIndex = colliderIndex;
        state.submit = false;

        // let answerBool = state.collider.map((v: any) => v.belong).filter((v: any) => v).join("");
        // console.log(state);
        // if (answerBool) {
        //     state.submit = true;
        // }

        this.updateState(state);
    }

    // 区域所属判断
    private _adsorb(obj: any) {
        let a: any;
        let b: any;
        let c: any;
        let collideredIndex: any;
        for (let i = 0; i < this._collideredBox.length; i++) {
            a = obj.x - this._collideredBox[i].x;
            b = obj.y - this._collideredBox[i].y;
            if (c) {
                if (c > Math.sqrt(a * a + b * b)) {
                    c = Math.sqrt(a * a + b * b);
                    collideredIndex = i;
                }
            } else {
                c = Math.sqrt(a * a + b * b);
                collideredIndex = i;
            }
        }
        return {
            bool: c < 80,
            collideredIndex: collideredIndex,
            pos: {
                x: this._collideredBox[collideredIndex].x,
                y: this._collideredBox[collideredIndex].y,
            }
        };
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        let answer: any = state.collider.map((v: any) => v.belong).filter((v: any) => v || v == 0);
        state.answer = this._answer.sort().toString() == answer.sort().toString()
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
                    if (this._colliderBox[i]) {
                        // 放置声
                        // if (state.collider[i].x != this._colliderBox[i].x && this._colliderBox[i].y != state.collider[i].y) {
                        //     // 放置的声音先给我注释掉先
                        //     this.playPlace();
                        // }
                        this._colliderBox[i].x = state.collider[i].x;
                        this._colliderBox[i].y = state.collider[i].y;
                    }
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
                    bool ? this.onHandleGuide() : this.answerFeedback(state.answer);
                } else {
                    this.disableForbidHandle();
                }
            }

            // 动态创建矩形
            if (!globalThis._.isEqual(oldState.isCreate, state.isCreate)) {
                state.isCreate = false;
                let imgObj = this.createDragObj();
                state.collider.push({ x: imgObj.x, y: imgObj.y, belong: null })
            }
        }
    }

    playSound(url: string) {
        let s = this;
        let item = fgui.UIPackage.getItemByURL(url);
        loadResource(item.file, cc.AudioClip).then((audio: cc.AudioClip) => {
            cc.audioEngine.play(audio, false, 1);
        });
    }

    // 播放 放置声效
    async playPlace() {
        cc.audioEngine.stopAll();
        let place = this._view.getChild("place").asButton;
        if (place) {
            let item = fgui.UIPackage.getItemByURL(place["_sound"]);
            let audio: cc.AudioClip = await loadResource(item.file, cc.AudioClip);
            cc.audioEngine.play(audio, false, 1);
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
        // 拖拽定时器先关掉
        this.schedule(this.dragSchedule, this._scheduleTime);
    }

    onDisable() {
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
