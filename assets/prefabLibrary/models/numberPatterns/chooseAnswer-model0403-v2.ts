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
export default class chooseAnswer_model0403_v2 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _state = {}

    private _c2: fgui.Controller;
    private _c1: fgui.Controller;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;
    private _wheelCom: fgui.GComponent;
    private _wheelArr: fgui.GComponent[] = [];


    private _submit: fgui.GButton;
    private _answerLoader: fgui.GLoader;

    private _currentAnswer = 0;
    private _answer = 0;
    private _questionUrl= [];
    private _optionsUrl= [];

    private _btnAdd: fgui.GButton;
    private _btnReduce: fgui.GButton;

    // fairygui 组件
    private handleGuide: any;
    // 远程动态组件
    private feedback: any;

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state,v);
        this._state = v;
        this.mergeState();
    }

    onLoad() {
        this._worldRoot = cc.find("Canvas").parent;
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;

        fgui.GRoot.inst.addChild(this._view);

        this._c2 = this._view.getController("c2");
        this._c1 = this._view.getController("c1");
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

        this._btnReduce = this._view.getChild("btn_up").asButton;
        this._btnReduce.on(fgui.Event.CLICK, this._clickReduce, this);
        this._btnAdd = this._view.getChild("btn_down").asButton;
        this._btnAdd.on(fgui.Event.CLICK, this._clickAddNum, this);


        this._wheelCom = this._view.getChild("wheelCom").asCom;
        this._wheelArr = []
        let group_1 = this._wheelCom.getChild("group_1").asCom;
        let group_2 = this._wheelCom.getChild("group_2").asCom;
        let group_3 = this._wheelCom.getChild("group_3").asCom;
        this._wheelArr.push(group_1)
        this._wheelArr.push(group_2)
        this._wheelArr.push(group_3)
        this._answerLoader = group_2.getChild("value").asLoader;
        this._answerLoader.url = this._optionsUrl[0]
        
        //问题 + 答题区
        let question = this._view.getChild("question").asGroup;
        let question_index = 0;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == question) {
                if(question_index<3){
                    let num_loader = this._view.getChildAt(i).asLoader;
                    num_loader.url = this._optionsUrl[this._questionUrl[question_index]]
                }
                question_index++
            }
        }
       
        // 初始化state
        this._state = {
            option:-1,
            typeChange: 0,
            title: false,
            submit: false,
            answer: false,
            isLock: false
        }
        this._currentAnswer = 0
        
        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback:any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
    }

    private _clickAddNum(evt: any) {
        if(this._currentAnswer == 9){
            this._currentAnswer = 0
        }
        else{
            this._currentAnswer++
        }
        let state: any = globalThis._.cloneDeep(this._state);
        state.option = this._currentAnswer
        state.typeChange = 2
        this.updateState(state);
    }

    private _clickReduce(evt: any) {
        if(this._currentAnswer == 0){
            this._currentAnswer = 9
        }
        else{
            this._currentAnswer--
        }
        let state: any = globalThis._.cloneDeep(this._state);
        state.option = this._currentAnswer
        state.typeChange = 1
        this.updateState(state);
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        let { answer, questionUrl, optionsUrl,ae } = model.config;
        if (model.config) {
            if (answer)this._answer = answer;
            if (questionUrl) this._questionUrl = questionUrl;
            if (optionsUrl) this._optionsUrl =optionsUrl;
        }

        // 动效注册
        for (let v in ae) {
            if (ae[v]) {
                this[v] = {};
                if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                if (ae[v].pos) this[v].pos = ae[v].pos;
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

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        state.isLock = true
        this.updateState(state);
    }

    private async _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.answer = state.option === this._answer;
        state.submit = true;
        this.updateState(state);
    }

    private _getAfterValue(value: any) {
        if(value == 0){
            value = 9
        }
        else{
            value--
        }
        return value
    }

    private _getBefore(value: any) {
        if(value == 9){
            value = 0
        }
        else{
            value++
        }
        return value
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
        if (!globalThis._.isEqual(oldState.option, state.option)) {
            if(state.typeChange == 1){
                this.forbidHandle()
                cc.Tween.stopAll();
                for (let i = 0; i < this._wheelArr.length; i++) {
                    //let bg = this._wheelArr[i].getChild("bg").asLoader;
                    let value = this._wheelArr[i].getChild("value").asLoader;
                    if(i == 0){
                        value.url = this._optionsUrl[this._getBefore(this._getBefore(state.option))]
                    }
                    else if(i == 1){
                        value.url = this._optionsUrl[this._getBefore(state.option)]
                    }
                    else if(i == 2){
                        value.url = this._optionsUrl[state.option]
                    }
                }
                for (let i = 0; i < this._wheelArr.length; i++) {
                    cc.tween(this._wheelArr[i])
                    .to(0.2, {
                        x: this._wheelArr[i].x,
                        y: this._wheelArr[i].y - 318
                    })
                    .call(()=>{
                        console.log("pos",this._wheelArr[0].y,this._wheelArr[1].y,this._wheelArr[2].y)
                    })
                    .start();
                }
                cc.tween(this._wheelCom)
                    .delay(0.2)
                    .call(()=>{
                        this._wheelArr[0].y = this._wheelArr[2].y + 318
                        this._wheelArr.sort((a,b)=>{
                            return  a.y -b.y
                        })
                        this.disableForbidHandle()
                    }).start();
            }
            else if(state.typeChange == 2){
                this.forbidHandle()
                cc.Tween.stopAll();
                for (let i = 0; i < this._wheelArr.length; i++) {
                    //let bg = this._wheelArr[i].getChild("bg").asLoader;
                    let value = this._wheelArr[i].getChild("value").asLoader;
                    if(i == 0){
                        value.url = this._optionsUrl[state.option]
                    }
                    else if(i == 1){
                        value.url = this._optionsUrl[this._getBefore(state.option)]
                    }
                    else if(i == 2){
                        value.url = this._optionsUrl[this._getBefore(this._getBefore(state.option))]
                    }
                }
                for (let i = 0; i < this._wheelArr.length; i++) {
                    cc.tween(this._wheelArr[i])
                    .to(0.2, {
                        x: this._wheelArr[i].x,
                        y: this._wheelArr[i].y + 318
                    })
                    .call(()=>{
                        console.log("pos",this._wheelArr[0].y,this._wheelArr[1].y,this._wheelArr[2].y)
                    })
                    .start();
                    
                } 
                cc.tween(this._wheelCom)
                .delay(0.2)
                .call(()=>{
                    console.log("pos",this._wheelArr[0].y,this._wheelArr[1].y,this._wheelArr[2].y)
                    this._wheelArr[2].y = this._wheelArr[0].y - 318
                    this._wheelArr.sort((a,b)=>{
                        return a.y -b.y
                    })
                    this.disableForbidHandle()
                }).start();
            } 
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }

        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                if(state.option>=0){
                    this.answerFeedback(state.answer);
                }
                else{
                    this.onHandleGuide()
                }
            }
         }

        if (!globalThis._.isEqual(oldState.isLock, state.isLock)) {
            if(state.isLock){
                this.forbidHandle();
                if(state.title){
                    this._c1.selectedIndex = 0
                }
                else{
                    this._c1.selectedIndex = 1
                }
            }
            else{
                this._c1.selectedIndex = 0
                this.disableForbidHandle();
            }
        }
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
            state.isLock = bool;
            this.updateState(state);
        }, 2000);
    }

    // 提交后 动画
    afterSubmit(){
        let state: any = globalThis._.cloneDeep(this._state);
        state.answer = state.option == this._answer;
        state.submit = false;
        this.updateState(state);
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

        let t: fgui.Transition = this.handleGuide.component.getTransition("t1");
        t.play(() => {
            fgui.GRoot.inst.removeChild(this.handleGuide.component);
            state.submit = false;
            this.updateState(state);
        }, 2);
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

    onEnable() {
        this.registerState();
    }

    onDisable() {
        this.relieveState();
    }
}
