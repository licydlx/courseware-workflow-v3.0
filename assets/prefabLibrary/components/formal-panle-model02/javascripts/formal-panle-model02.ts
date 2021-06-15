/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2020-11-19 18:05:09
 * @LastEditors: ydlx
 * @LastEditTime: 2021-06-10 18:15:21
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class formal_panle_model02 extends cc.Component {
    @property({
        type: cc.Node,
        displayName: 'modelList 节点'
    })
    modelList: cc.Node = null;

    @property({
        type: cc.Node,
        displayName: 'studentList 节点'
    })
    studentList: cc.Node = null;

    @property({
        type: [cc.Node],
        displayName: '模式节点'
    })
    models: cc.Node[] = [];

    public _state = {
        show: false,
        signalingModel: 1,
        monitored: null,
        monitoredName:null,
        launch: null,
        studentList: [],
        ranking: [],
        snapshoot: {}
    };

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this._state = v;
        this.updateUi(this._state);
        this._stJs.updateUi(this._state);

        this.mergeState();
    }

    private _stJs = null;

    onLoad() {
        let student = this.node.getChildByName('studentList');
        this._stJs = student.getComponent(cc.Component);
    }

    // 初始化
    async init() { }

    reset() {
        let state: any = globalThis._.cloneDeep(this._state);
        state.signalingModel = 1;
        state.snapshoot = {};
        state.monitored = null;
        state.monitoredName = null;
        state.launch = null;
        state.ranking = [];

        this.state = state;
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

    // 获取状态
    getState(data: any) {
        this.updateState(data);
    }

    // 切换面板
    switchBox(e: any, ced: any) {
        if (window['GlobalData'].courseData.role != 0) return;

        let state: any = globalThis._.cloneDeep(this._state);
        state.show = !state.show;
        this.updateState(state);
    }

    // 切换模式
    changeSignalingModel(e: any, ced: any) {
        if (window['GlobalData'].courseData.role != 0) return;

        if (ced == window['GlobalData'].courseData.signalingModel) return;
        let state: any = globalThis._.cloneDeep(this._state);
        state.signalingModel = parseInt(ced);

        if (ced == 1) {
            state.monitored = null;
            state.monitoredName = null;
            state.launch = null;
            state.ranking = [];
        } else if (ced == 2) {
            state.launch = null;
            state.snapshoot = {};
        } else if (ced == 3) {
            state.monitored = null;
            state.monitoredName = null;
        }

        let prevState = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
        let curState: any = window['GlobalData'].courseData.stateShoot;

        if (curState) {
            Object.keys(prevState).forEach((v) => {
                if (!(globalThis._.isEqual(prevState[v], curState[v])) && v != "formal-panle-model02") {
                    window['GlobalData'].stateProxy[v] = "";
                    window['GlobalData'].pubSub.emit(curState[v], v);
                }
            });
        }

        this.updateState(state);
    }

    // 切换监控
    changeMonitored(e: any, ced: any) {
        if (window['GlobalData'].courseData.role != 0) return;

        let state: any = globalThis._.cloneDeep(this._state);

        let monitored = state.studentList[parseInt(ced)].id;
        let monitoredName = encodeURIComponent(state.studentList[parseInt(ced)].nickname);

        let prevState = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
        let curState: any;

        if (state.monitored == monitored) {
            state.monitored = null;
            state.monitoredName = null;
            curState = window['GlobalData'].courseData.stateShoot;
        } else {
            state.monitored = monitored;
            state.monitoredName = monitoredName;
            // 兼容
            // 安卓ipad 部分账户 无法获取userid 用name替代
            if (state.snapshoot[monitored]) {
                curState = state.snapshoot[monitored];
            } else if (state.snapshoot[monitoredName]) {
                curState = state.snapshoot[monitoredName];
            } else {
                // bug場景
                // 答題模式：a學生答題，b學生沒答題；老師監控a學生，在監控b學生=>看到a學生的答案
                curState = window['GlobalData'].courseData.stateShoot;
            }
        }

        if (curState) {
            Object.keys(prevState).forEach((v) => {
                if (!(globalThis._.isEqual(prevState[v], curState[v])) && v != "formal-panle-model02") {
                    window['GlobalData'].stateProxy[v] = "";
                    window['GlobalData'].pubSub.emit(curState[v], v);
                }
            });
        }

        this.updateState(state);
    }

    // 切換投放
    changeLaunch(e: any, ced: any) {
        if (window['GlobalData'].courseData.role != 0) return;

        let state: any = globalThis._.cloneDeep(this._state);
        let launch = state.studentList[parseInt(ced)].id;
        let launchName = encodeURIComponent(state.studentList[parseInt(ced)].nickname);

        let prevState = globalThis._.cloneDeep(window['GlobalData'].stateProxy["state"]);
        let curState: any;
        if (state.launch == launch) {
            state.launch = null;
            curState = window['GlobalData'].courseData.stateShoot;
        } else {
            state.launch = launch;

            // 兼容
            // 安卓ipad 部分账户 无法获取userid 用name替代
            if (state.snapshoot[launch]) {
                curState = state.snapshoot[launch];
            } else if (state.snapshoot[launchName]) {
                curState = state.snapshoot[launchName];
            } else {
                // bug場景
                // 投放模式：a學生有答題，b學生沒答題；老師投放a學生，在投放b學生=>看到a學生的答案
                curState = window['GlobalData'].courseData.stateShoot;
            }
        }

        if (curState) {
            Object.keys(prevState).forEach((v) => {
                if (!(globalThis._.isEqual(prevState[v], curState[v])) && v != "formal-panle-model02") {
                    window['GlobalData'].stateProxy[v] = "";
                    window['GlobalData'].pubSub.emit(curState[v], v);
                }
            });
        }

        this.updateState(state);
    }

    // 更新学生列表 
    changeStudentList(data: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.studentList = data;
        this.updateState(state);
    }

    // 更新 答案提交 先后
    changeRanking(userid: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        let index = state.ranking.findIndex((v: any) => v == userid);
        if (index == -1) {
            state.ranking.push(userid)
            this.updateState(state);
        }
    }

    // 更新状态层
    updateState(curState: any) {
        // 临时代码
        // 某些情况下 全局面板state = ""， 新赋值的面板curState == this._state，导致全局面板 state = ""
        if (!globalThis._.isEqual(this._state, curState)) this.state = curState;
        if (!window['GlobalData'].stateProxy["formal-panle-model02"]) this.state = curState; 
    }

    // ui层
    updateUi(state: any) {
        // 模式栏 人员栏 显示与隐藏
        this.modelList.stopAllActions();
        this.studentList.stopAllActions();
        cc.tween(this.modelList)
            .to(.2, { x: state.show ? -930 : -990 })
            .start();

        cc.tween(this.studentList)
            .to(.2, { y: state.show ? 540 : 640 })
            .start();

        // 模式栏 激活样式
        for (let i = 0; i < this.models.length; i++) {
            let bg = this.models[i].getChildByName("bg");
            let text = this.models[i].getChildByName("text");
            bg.color = i == (state.signalingModel - 1) ? cc.color(15, 187, 233, 255) : cc.color(255, 255, 255, 255);
            text.color = i == (state.signalingModel - 1) ? cc.color(255, 255, 255, 255) : cc.color(59, 59, 59, 255);
        }

        // 信令模式 赋值 全局变量
        window['GlobalData'].courseData.signalingModel = state.signalingModel;
        // 监控模式 监控谁
        window['GlobalData'].courseData.monitored = state.monitored;
        window['GlobalData'].courseData.monitoredName = state.monitoredName;
    }

    userCreate(users: any) {
        return users.filter((v: any) => v.role == 2);
    }

    userJoin(users: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        let arr = state.studentList.map((v: any) => v);
        let index = state.studentList.findIndex((v: any) => v.id == users[0].id)
        if (users[0].role == 2 && index == -1) {
            arr.push(users[0]);
        }
        return arr;
    }

    userLeave(users: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        return state.studentList.filter((v: any) => v.id !== users[0].id);
    }

    signalCallback(data: any) {
        // console.log('signalCallback');
        // console.log(data);
        if (data && data.type) {
            let list: any;
            if (data.type == 'create') {
                list = this.userCreate(data.users);
            }

            if (data.type == 'leave') {
                list = this.userLeave(data.users);
            }

            if (data.type == 'join') {
                list = this.userJoin(data.users);
            }

            this.changeStudentList(list);
        }
    }

    onEnable() {
        this.registerState();
    }

    onDisable() {
        this.relieveState();
    }
}
