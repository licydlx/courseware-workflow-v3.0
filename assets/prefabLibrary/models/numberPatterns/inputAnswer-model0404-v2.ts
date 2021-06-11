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
export default class inputAnswer_model0404_v2 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _state = {}

    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;
    private _c2: fgui.Controller;

    private _value_wh: fgui.GLoader;
    private _answer_value: fgui.GTextField;

    private _question;
    private _answer = 0;

    private _inputBox: fgui.GLoader[] = []
   
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
        state.answer = this._answer == state.option
        state.submit = true;
        this.updateState(state);
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        let { answer, question, ae } = model.config;
        if (model.config) {
            if (answer) this._answer = answer;
            if (question) this._question = question;
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
        this._state = {
            option: -1,
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
        let questionGroup = this._view.getChild("questionGroup").asGroup;
        let inputGroup = this._view.getChild("inputGroup").asGroup;
       
        this._inputBox = []
        let questionindex = 0
        for(let i = 0; i < this._view.numChildren; i++) {
            if(this._view.getChildAt(i).group == questionGroup) {
                let com: fgui.GComponent = this._view.getChildAt(i).asCom;
                let value1: fgui.GTextField = com.getChild("11").asTextField
                let value2 = com.getChild("22").asLabel
                let value3 = com.getChild("33").asLabel
                let value4 = com.getChild("44").asLabel
                value1.text = this._question[questionindex][0]
                value2.text = this._question[questionindex][1]
                value3.text = this._question[questionindex][2]
                value4.text = this._question[questionindex][3]
                questionindex++
            }

            if(this._view.getChildAt(i).group == inputGroup) {
                let loader: fgui.GLoader = this._view.getChildAt(i).asLoader;
                loader.on(fgui.Event.CLICK, this._inputClick, this);
                this._inputBox.push(loader)
            }

        }
        this._value_wh = this._view.getChild("value_wh").asLoader;
        this._value_wh.visible = true
        this._answer_value = this._view.getChild("answer_value").asTextField;
        this._answer_value.visible = false

        let btn_delect = this._view.getChild("btn_delect").asButton;
        if (btn_delect) btn_delect.on(fgui.Event.CLICK, this._inputReset, this);
        
    }

    //输入
    _inputClick(evt: fgui.Event){
        this.playSound('ui://dj5ft8zhcxq01');
        let btn_input = fgui.GObject.cast(evt.currentTarget);
        let inputBoxIndex = this._inputBox.findIndex(v => v == btn_input);
        console.log("111",inputBoxIndex)

        let state: any = globalThis._.cloneDeep(this._state);
        //初始值
        if(state.option == -1){
            state.option = inputBoxIndex
        }
        else if(state.option<10){
            state.option = state.option*10 + inputBoxIndex
        }
        else{
            return
        }
        state.submit = false;
        this.updateState(state);
    }

    //重置
    _inputReset(){
        this.playSound('ui://dj5ft8zhcxq01');
        let state: any = globalThis._.cloneDeep(this._state);
        state.option = -1 
        state.submit = false;
        this.updateState(state);
    }

    // 更新ui层
    updateUi(oldState: any, state: any) {
        //读题
        console.log("end",oldState,state)
        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }

        //提交
        if (!globalThis._.isEqual(oldState.submit, state.submit)) {
            if (state.submit) {
                let bool: boolean = state.option == -1
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
        if (!globalThis._.isEqual(oldState.option, state.option)) {
            if(state.option == -1){
                this._value_wh.visible = true
                this._answer_value.visible = false
            }
            else{
                this._value_wh.visible = false
                this._answer_value.visible = true
                this._answer_value.text = state.option
            }
        }
        
    }   
}
