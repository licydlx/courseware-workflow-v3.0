/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-29 16:51:02
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;

const { ccclass, property } = cc._decorator;
@ccclass
export default class clcikAnswer_model01_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _btnBox: fgui.GButton;
    private _submit: fgui.GButton;
    private _launchBtn: fgui.GButton;
    private _imgObj: fgui.GLoader;

    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    // fairygui 组件
    // 动效
    private handleGuide: any;
    private lineBlink: any;
    private catchObj: any;

    // 远程动态组件
    private feedback: any;

    private _grids = [];
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
        fgui.GRoot.inst.addChild(this._view);

        // 控制器
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

        // launch 触发器按钮
        this._launchBtn = this._view.getChild("launchBtn").asButton;
        this._launchBtn.on(fgui.Event.CLICK, this._clickLaunch, this);

        // 容器天枰
        this._btnBox = this._view.getChild("btnBox").asButton;
        this._btnBox.on(fgui.Event.CLICK, this._clickLibra, this);

        this._imgObj = this._view.getChild("imgObj").asLoader;
        this.catchObj = this._view.getChild("catchStone").asCom;

        // 天枰 子栏
        let aGroup = this._btnBox.getChild("grids").asGroup;

        for (let i = this._btnBox.numChildren - 1; i > -1; i--) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                let grid: fgui.GLoader = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }

        // 初始化state
        this._state = {
            drops: 0,
            submit: false,
            answer: false,
            catch: false,
            title: false,
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

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    // 点击天枰 消除一个
    private _clickLibra(evt: any): void {
        let state: any = globalThis._.cloneDeep(this._state);

        let index: number = this._grids.findIndex((v: any) => v.url === null);
        if (index !== 0) {
            let grid: fgui.GLoader = this._grids[index == -1 ? this._grids.length - 1 : index - 1];
            grid.url = null;

            state.drops = state.drops - 1;
            state.answer = state.drops === this._answer;
            this.updateState(state);
        }
    }

    // 触发器点击
    private _clickLaunch(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.catch = true;
        this.updateState(state);
    }

    // 提交点击
    private _clickSubmit(evt: any): void {
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
        if (state.catch) {
            this.onCatchObj();
        } else {
            if (!globalThis._.isEqual(oldState.drops, state.drops)) {
                for (let i = 0; i < this._grids.length; i++) {
                    let grid: fgui.GLoader = this._grids[i];
                    if (state.drops > i) {
                        if (!grid.url) {
                            grid.url = this._imgObj.url;
                        }
                    } else {
                        if (grid.url) grid.url = null;
                    }
                }
                this._c1.selectedIndex = state.drops;

                if (!state.answer) this.onLibraHint();
            }

            if (!globalThis._.isEqual(oldState.title, state.title)) {
                // title
                this.playTitle(state.title);
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

    // 答案反馈
    answerFeedback(bool: boolean) {
        // let component: any;
        // let pos: any;
        // if (bool) {
        //     component = this.rightFeed.component;
        //     pos = this.rightFeed.pos;
        // } else {
        //     component = this.errorFeed.component;
        //     pos = this.errorFeed.pos;
        // }

        // fgui.GRoot.inst.addChild(component);

        // console.log(component);
        // if (pos) {
        //     component.x = (fgui.GRoot.inst.width - component.width) / 2 + pos.x;
        //     component.y = (fgui.GRoot.inst.height - component.height) / 2 + pos.y;
        // } else {
        //     component.y = (fgui.GRoot.inst.height - component.height) / 2;
        // }

        // let t: fgui.Transition = component.getTransition("t0");
        // t.play(() => {
        //     fgui.GRoot.inst.removeChild(component);

        //     state.submit = false;
        //     this.updateState(state);
        // }, 2);
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

    // 抓取某物
    onCatchObj() {
        // if (!this.catchObj) return;
        let t0: fgui.Transition = this.catchObj.getTransition("t0");
        t0.play(() => {

            let state: any = globalThis._.cloneDeep(this._state);
            state.catch = false;

            let grid: fgui.GLoader = this._grids.find(v => v.url === null);
            if (grid) {
                state.drops = state.drops + 1;
            }
            
            state.answer = state.drops === this._answer;
            this.updateState(state);

            let t1: fgui.Transition = this.catchObj.getTransition("t1");
            t1.play();
        }, 1);
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
    }

    onDisable() {
        this.relieveState();
        cc.audioEngine.stopAll();
    }

}
