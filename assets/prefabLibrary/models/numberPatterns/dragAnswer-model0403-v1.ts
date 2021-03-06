/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 15:25:51
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass, property } = cc._decorator;

@ccclass
export default class dragAnswer_model0403_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _state = {}

    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;
    private _answerLoader: fgui.GLoader[];
    private _c2: fgui.Controller;
    private _answerComBG: fgui.GLoader;

    private _scheduleTime = .3;
    private _cache = {};
    private _colliderBox = [];
    private _collideredBox = [];
    private _answerBox = [];
    private _dragging = false;

    private _answer = "";
    private _questionUrl = [];
    private _optionsUrl = [];
    private _answerUrl = []
    private _answerbgSkin = [];
  
    // fairygui 组件
    private handleGuide: any;
    // 远程动态组件
    private feedback: any;

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

        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);
        this._title = this._view.getChild("title").asButton;
        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        //问题 + 答题区

        let answerBox = this._view.getChild("answerBox").asGroup;
        this._answerLoader = [];
        this._cache['answerColliderBox'] = []
        this._cache['answerColliderBoxOrigin'] = []
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == answerBox) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                this._cache['answerColliderBox'].push({ x: btn.x, y: btn.y, belong: -1 });
                this._cache['answerColliderBoxOrigin'].push({ x: btn.x, y: btn.y, deep: this._view.getChildIndex(btn)})
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._answerBox.push(btn);

                let com  = this._view.getChildAt(i).asCom;
                let loader = com.getChild("answerValue1").asLoader;
                this._answerLoader.push(loader)
            }
        }
        let question = this._view.getChild("question").asGroup;
        let question_index = 0;
        
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == question) {
                let com = this._view.getChildAt(i).asCom;
                let bg_loader = com.getChild("bg") as fgui.GLoader
                bg_loader.url = this._answerbgSkin[0]
                if (question_index == 3) {
                    for (let i = 1; i < 5; i++) {
                        let value_loader = com.getChild("value" + i).asLoader
                        value_loader.url = ""
                    }
                    this._answerComBG = bg_loader
                }
                else {
                    let pos = this._questionUrl[question_index]["pos"]
                    let value = this._questionUrl[question_index]["value"]
                    let value_url = this._answerUrl[value]
                    let value_loader = com.getChild("value" + pos) as fgui.GLoader
                    value_loader.url = value_url
                }
                question_index++
            }
        }

        //选项
        let colliderBox = this._view.getChild("colliderBox").asGroup;
        this._cache['colliderBox'] = []
        this._cache['colliderBoxOrigin'] = []
        let index = 1
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == colliderBox) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                this._cache['colliderBox'].push({ x: btn.x, y: btn.y, belong: -1 });
                this._cache['colliderBoxOrigin'].push({ x: btn.x, y: btn.y, deep: this._view.getChildIndex(btn)})
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);

                let com = this._view.getChildAt(i).asCom;
                if (index <= 10) {
                    let bg_loader = com.getChild("bg") as fgui.GLoader
                    bg_loader.url = this._optionsUrl[0]
                    let value_loader = com.getChild("value") as fgui.GLoader
                    value_loader.url = this._optionsUrl[index]
                }
                index++
            }
        }

        //放置区
        let collideredBox = this._view.getChild("collideredBox").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredBox) {
                let btn: fgui.GComponent = this._view.getChildAt(i).asCom;
                this._collideredBox.push(btn);
            }
        }

        // 初始化state （colliderIndex 0-9  collideredIndex 0-3）
        this._state = {
            drag: "end",
            collider: this._cache["colliderBox"].map((v: any) => v),
            colliderIndex: null,
            answerCollider: this._cache["answerColliderBox"].map((v: any) => v),
            answerIndex: null,
            isHasCollide: false,
            title: false,
            submit: false,
            answer: false,
            isLock:false
        }

        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        this.disableForbidHandleBesidesTitle()
        // 销毁反馈
        let feedback: any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        let { answer, questionUrl, optionsUrl, answerbgSkin, answerUrl, ae } = model.config;

        if (model.config) {
            if (answer) this._answer = answer;
            if (questionUrl) this._questionUrl = questionUrl;
            if (optionsUrl) this._optionsUrl = optionsUrl;
            if (answerbgSkin) this._answerbgSkin = answerbgSkin;

            if(answerUrl) {
                this._answerUrl = answerUrl
            }
            else if(optionsUrl){
                this._answerUrl = optionsUrl
            }

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

    playSound(url: string) {
        cc.audioEngine.stopAll();
        let item = fgui.UIPackage.getItemByURL(url);
        loadResource(item.file, cc.AudioClip).then((audio: cc.AudioClip) => {
            cc.audioEngine.play(audio, false, 1);
        });
    }

    private _onDragStart(evt: fgui.Event): void {
        evt.captureTouch();
        this.playSound('ui://k4ucnbrrt68d4r');
        let collider = fgui.GObject.cast(evt.currentTarget);
        this._view.setChildIndex(collider, this._view.numChildren - 1);
        let colliderIndex = this._colliderBox.findIndex(v => v == collider);

        let state: any = globalThis._.cloneDeep(this._state);
        if(colliderIndex != -1){
            state.colliderIndex = colliderIndex;
            state.answerIndex = -1
            
        }
        else{
            let answerIndex = this._answerBox.findIndex(v => v == collider);
            state.colliderIndex = -1;
            state.answerIndex = answerIndex
        }
        state.isHasCollide = true;
        this.updateState(state);
    }

    private _onDragMove(evt: fgui.Event): void {
        this._dragging = true;
    }

    private _onDragEnd(evt: fgui.Event): void {
        let s = this
        let collider = fgui.GObject.cast(evt.currentTarget);
        let colliderIndex: number = this._colliderBox.findIndex((v: any) => v == collider);
        let answerIndex: number = this._answerBox.findIndex((v: any) => v == collider);

        let deep = this._view.numChildren - 1
        if(colliderIndex != -1){
            deep = this._cache['colliderBoxOrigin'][colliderIndex].deep
        }
        else if(answerIndex != -1){
            deep = this._cache['answerColliderBoxOrigin'][answerIndex].deep
        }
        this._view.setChildIndex(collider, deep);
        //处理点击发光隐藏
        if (!this._dragging){
            let state: any = globalThis._.cloneDeep(this._state)
            state.isHasCollide = false
            this.updateState(state);
            return;
        } 
        this._dragging = false;

        let arr: any = [];
        let collidered: any;
        this._collideredBox.forEach((v: any, i: any) => {
            if (s.isCollisionWithRect(v, collider)) arr.push(v);
        });
        let curMaxArea = 0
        arr.forEach((v: any, i: any) => {
            if (i == 0) {
                collidered = v
                curMaxArea = this._getDistance(collider, v);
            } else {
                let area = this._getDistance(collider, v);
                if (area > curMaxArea) {
                    curMaxArea = area
                    collidered = v
                }
            }
        });
        let collideredIndex: number = this._collideredBox.findIndex((v: any) => v == collidered);

        
        let state: any = globalThis._.cloneDeep(this._state);
        if(colliderIndex != -1){
            //如果没有触发定时器， state.collider[colliderIndex]坐标没变化，不会重置位置
            this._colliderBox[colliderIndex].x = this._cache["colliderBoxOrigin"][colliderIndex].x
            this._colliderBox[colliderIndex].y = this._cache["colliderBoxOrigin"][colliderIndex].y
            state.collider[colliderIndex].x = this._cache["colliderBoxOrigin"][colliderIndex].x
            state.collider[colliderIndex].y = this._cache["colliderBoxOrigin"][colliderIndex].y
            state.colliderIndex = colliderIndex
            if (collideredIndex != -1) {
                for (let i = 0; i < state.collider.length; i++) {
                    if (colliderIndex == i) {
                        state.collider[i].belong = collideredIndex
                    }
                    else {
                        state.collider[i].belong = -1
                    }
                }
            }
        }
        else{
            if(answerIndex != -1){
                this._answerBox[answerIndex].x = this._cache['answerColliderBoxOrigin'][answerIndex].x
                this._answerBox[answerIndex].y = this._cache['answerColliderBoxOrigin'][answerIndex].y
                state.answerCollider[answerIndex].x = this._cache['answerColliderBoxOrigin'][answerIndex].x
                state.answerCollider[answerIndex].y = this._cache['answerColliderBoxOrigin'][answerIndex].y
                state.answerIndex = answerIndex
            }

            if (collideredIndex != -1) {
                for (let i = 0; i < state.collider.length; i++) {
                    if (state.collider[i].belong == answerIndex) {
                        state.collider[i].belong = collideredIndex
                    }
                }
            }
            else{
                for (let i = 0; i < state.collider.length; i++) {
                    state.collider[i].belong = -1
                }
            }
        } 
        state.drag = "end";
        state.submit = false;
        state.isHasCollide = false;
        this.updateState(state);
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

    private _getDistance(collider: any, collidered: any) {
        let width = collider.width - Math.abs(collider.x - collidered.x)
        let height = collider.height - Math.abs(collider.y - collidered.y)
        let distance = width * height
        return distance;
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private async _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        
        let arr =  state.collider.map((v: any) => v.belong)
        let key = -1,value = -1
        for (let i in arr) {
            if(arr[i] != -1) {
                value = arr[i] + 1
                key = Number(i) + 1
            } 
        }
        let str = "" + value.toString() + key.toString()
        state.answer = this._answer === str
        state.submit = true;
        state.isHasCollide = state.answer
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
            if(state.colliderIndex!=-1){
                this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
                this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
            }
            else if(state.answerIndex!=-1){ 
                this._answerBox[state.answerIndex].x = state.answerCollider[state.answerIndex].x;
                this._answerBox[state.answerIndex].y = state.answerCollider[state.answerIndex].y;
            }
            
            if (!globalThis._.isEqual(oldState.isHasCollide, state.isHasCollide)) {
                if(state.isHasCollide){
                    this._answerComBG.url = this._answerbgSkin[1]
                }
                else{
                    this._answerComBG.url = this._answerbgSkin[0]
                }
            }
        }

        if (state.drag == "end") {
            console.log("end",oldState,state)
            if (!globalThis._.isEqual(oldState.isHasCollide, state.isHasCollide)) {
                if(state.isHasCollide){
                    this._answerComBG.url = this._answerbgSkin[1]
                }
                else{
                    this._answerComBG.url = this._answerbgSkin[0]
                }
            }
           
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                if(state.colliderIndex || state.colliderIndex==0){
                    if(state.colliderIndex != -1){
                        this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
                        this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
                        let index = state.collider[state.colliderIndex].belong
                        if ( index!= -1) {
                            this.playSound("ui://k4ucnbrrt68d4v");
                            for (let i = 0; i < this._answerLoader.length; i++) {
                                if (i == index) {
                                    this._answerLoader[i].url = this._answerUrl[state.colliderIndex + 1]
                                }
                                else {
                                    this._answerLoader[i].url = ""
                                }
                            }
                        }
                    }
                    else if(state.answerIndex != -1){
                        let value = 0
                        let index = -1
                        let isExit = false
                        for (let i = 0; i < state.collider.length; i++) {
                            if(state.collider[i].belong!=-1){
                                value = i
                                index = state.collider[i].belong
                                isExit = true
                            }
                        }
                        for (let i = 0; i < this._answerLoader.length; i++) {
                            if(isExit ){
                                if (i == index) {
                                    this._answerLoader[i].url = this._answerUrl[value + 1]
                                }
                                else {
                                    this._answerLoader[i].url = ""
                                }
                            }
                            else{
                                this._answerLoader[i].url = ""
                            }
                        }


                    }
                    for (let i = 0; i <  this._colliderBox.length; i++) {
                        if (state.collider[i].belong != -1){
                            this._colliderBox[i].visible = false
                        }
                        else{
                            this._colliderBox[i].visible = true
                        }
                    }
                }
            }

            if (!globalThis._.isEqual(oldState.answerCollider, state.collider.answerCollider)) {
                if(state.answerIndex || state.answerIndex==0){
                    if(state.answerIndex != -1){
                        this._answerBox[state.answerIndex].x = state.answerCollider[state.answerIndex].x;
                        this._answerBox[state.answerIndex].y = state.answerCollider[state.answerIndex].y;
                    }
                }
            }

            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }

            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    let bool: boolean = state.collider.every((v: any) => v.belong == -1);
                    bool ? this.onHandleGuide() : this.answerFeedback(state.answer);
                }
            }

            if (!globalThis._.isEqual(oldState.isLock, state.isLock)) {
                if(state.isLock){
                    this.forbidHandleBesidesTitle();
                }
                else{
                    this.disableForbidHandleBesidesTitle();
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
        }
        else{
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
            state.isHasCollide = bool
            state.isLock = bool
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

    // 临时
    // 拖拽定时器
    dragSchedule() {
        if (this._dragging) {
            let state: any = globalThis._.cloneDeep(this._state);
            state.isHasCollide = true
            state.drag = "move";
            if(state.colliderIndex != -1){
                state.collider[state.colliderIndex].x  = this._colliderBox[state.colliderIndex].x
                state.collider[state.colliderIndex].y  = this._colliderBox[state.colliderIndex].y
            }
            else if(state.answerIndex != -1){
                state.answerCollider[state.answerIndex].x  = this._answerBox[state.answerIndex].x
                state.answerCollider[state.answerIndex].y  = this._answerBox[state.answerIndex].y
            }
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

    // 运行时 禁止操作
    forbidHandleBesidesTitle() {
        let mask = this._view.getChild("mask")
        if(mask){
            mask.visible = true
        }
    }

    //消除禁止
    disableForbidHandleBesidesTitle() {
        let mask = this._view.getChild("mask")
        if(mask){
            mask.visible = false
        }
    }

    onEnable() {
        this.registerState();
        this.schedule(this.dragSchedule, this._scheduleTime);
    }

    onDisable() {
        this.relieveState();
    }
}
