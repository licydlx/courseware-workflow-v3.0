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
export default class dragAnswer_model0404_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _state = {}

    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;
    private _c2: fgui.Controller;

    private _scheduleTime = .3;
    private _cache = {};
    private _colliderBox = [];
    private _collideredBox = [];
    private _dragging = false;

    private _answer;
    private _pos;
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

    // 获取状态
    getState(data: any) {
        this.updateState(data);
    }

    // 更新状态层
    updateState(curState: any) {
        if (globalThis._.isEqual(this._state, curState)) return;
        this.state = curState;
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

    // 运行时禁止操作
    forbidHandle() {
        this._view.touchable = false
    }

    // 消除禁止
    disableForbidHandle() {
        this._view.touchable = true
    }

    onEnable() {
        this.registerState();
        this.schedule(this.dragSchedule, this._scheduleTime);
    }

    onDisable() {
        this.relieveState();
    }

    playSound(url: string) {
        cc.audioEngine.stopAll();
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
            state.isLock = bool
            this.updateState(state);
        }, 2000);
    }

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


    async playTitle(bool: boolean) {
        this._c2.selectedIndex = bool ? 1 : 0;
        if (bool) {
            cc.audioEngine.stopAll();
            let item = fgui.UIPackage.getItemByURL(this._title["_sound"]);
            let audio: cc.AudioClip = await loadResource(item.file, cc.AudioClip);
            let audioId = cc.audioEngine.play(audio, false, 1);
            cc.audioEngine.setFinishCallback(audioId, () => {
                let state: any = globalThis._.cloneDeep(this._state);
                state.title = false;
                state.isLock = false;
                this.updateState(state);
            });
        }
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        state.isLock = true
        this.updateState(state);
    }

    //答案检测
    private async _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        let index = -1
        for (let i = 0; i < state.collider.length; i++) {
            if(state.collider[i].isSelect){
                index = i+1
                break
            }
        }
        state.answer = this._answer == index
        state.submit = true;
        this.updateState(state);
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        let { answer, pos, ae } = model.config;
        if (model.config) {
            if (answer) this._answer = answer;
            if (pos) this._pos = pos;
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

    onLoad() {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        this._c2 = this._view.getController("c2");
        
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

        //界面初始化
        this.createUI()
        // 初始化state （colliderIndex 0-9  collideredIndex 0-3）
        this._state = {
            drag: "end",
            collider: this._cache["colliderBox"].map((v: any) => v),
            colliderIndex: null,
            title: false,
            submit: false,
            answer: false,
            isLock:false
        }
        

        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback: any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
    }

    private createUI(){
        //选项
        let colliderBox = this._view.getChild("colliderBox").asGroup;
        this._cache['colliderBox'] = []
        this._cache['colliderBoxOrigin'] = []
        this._colliderBox = []
        for(let i = 0; i < this._view.numChildren; i++) {
            if(this._view.getChildAt(i).group == colliderBox) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                this._cache['colliderBox'].push({ x: btn.x, y: btn.y, isSelect: false});
                this._cache['colliderBoxOrigin'].push({ x: btn.x, y: btn.y})
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }

        //目标区域
        this._collideredBox = []
        let collidered = this._view.getChild("collidered").asCom;
        this._collideredBox.push(collidered);
    }

    private _onDragStart(evt: fgui.Event): void {
        evt.captureTouch();
        this.playSound('ui://dj5ft8zhcxq01');
        let collider = fgui.GObject.cast(evt.currentTarget);
        this._view.setChildIndex(collider, this._view.numChildren - 1);
        let colliderIndex = this._colliderBox.findIndex(v => v == collider);
        let state: any = globalThis._.cloneDeep(this._state);
        state.colliderIndex = colliderIndex
        this.updateState(state);
    }

    private _onDragMove(evt: fgui.Event): void {
        this._dragging = true;
    }

    private _onDragEnd(evt: fgui.Event): void {
        if (!this._dragging) return;
        this._dragging = false;

        let collider = fgui.GObject.cast(evt.currentTarget);
        let arr: any = [];
        let collidered: any = null;
        this._collideredBox.forEach((v: any, i: any) => {
            if (this.isCollisionWithRect(v, collider)) arr.push(v);
        });

        if(arr.length > 0){
            collidered = arr[0]
        }

        let colliderIndex = this._colliderBox.findIndex(v => v == collider);
        let state: any = globalThis._.cloneDeep(this._state);
        if(collidered){
            for (let i = 0; i < state.collider.length; i++) {
                if(i == colliderIndex){
                    state.collider[i].isSelect = true
                    state.collider[i].x  = this._pos.x
                    state.collider[i].y  = this._pos.y
                    this._colliderBox[i].x  = this._pos.x;
                    this._colliderBox[i].y  = this._pos.y;
                }
                else{
                    state.collider[i].x  = this._cache['colliderBoxOrigin'][i].x;
                    state.collider[i].y  = this._cache['colliderBoxOrigin'][i].y;
                }
            }

           
        }
        else{
            this._colliderBox[colliderIndex].x  = this._cache['colliderBoxOrigin'][colliderIndex].x;
            this._colliderBox[colliderIndex].y  = this._cache['colliderBoxOrigin'][colliderIndex].y;
            for (let i = 0; i < state.collider.length; i++) {
                state.collider[i].x  = this._cache['colliderBoxOrigin'][i].x;
                state.collider[i].y  = this._cache['colliderBoxOrigin'][i].y;
                state.collider[i].isSelect = false
            }
        }
        state.drag = "end";
        state.submit = false;
        this.updateState(state);
    }

    //矩形碰撞
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

    // 拖拽定时器
    dragSchedule() {
        if (this._dragging) {
            let state: any = globalThis._.cloneDeep(this._state);
            state.drag = "move";
            state.collider[state.colliderIndex].x  = this._colliderBox[state.colliderIndex].x
            state.collider[state.colliderIndex].y  = this._colliderBox[state.colliderIndex].y
            this.updateState(state);
        }
    }

    // 更新ui层
    updateUi(oldState: any, state: any) {
        if (state.drag == "move") {
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;
        }

        if (state.drag == "end") {
            //读题
            console.log("end",oldState,state)
            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }

            //提交
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    let bool: boolean = state.collider.every((v: any) => v.isSelect == false);
                    bool ? this.onHandleGuide() : this.answerFeedback(state.answer);
                }
            }
            //锁屏
            if (!globalThis._.isEqual(oldState.isLock, state.isLock)) {
                if(state.isLock){
                    this.forbidHandle();
                }
                else{
                    this.disableForbidHandle();
                }
            }

            //数据变化更新UI
            if (!globalThis._.isEqual(oldState.collider, state.collider)) {
                this.playSound("ui://dj5ft8zhcxq02");
                for (let i = 0; i < this._colliderBox.length; i++) {
                    this._colliderBox[i].x = state.collider[i].x;
                    this._colliderBox[i].y = state.collider[i].y;
                    
                }
            }
        }
    }   
}
