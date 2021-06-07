const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass } = cc._decorator;

@ccclass
export default class threeViews_model03_v1 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _c2: fgui.Controller;
    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;
    /** 底层方块配置信息，包含坐标，排序顺序，楼层，深度*/
    private _createFloorBlockData = [
        { x: 661, y: 603, sortIndex: 0, floor: 0, zIndex: 3 },
        { x: 793, y: 603, sortIndex: 1, floor: 0, zIndex: 2 },
        { x: 925, y: 603, sortIndex: 2, floor: 0, zIndex: 1 },
        { x: 1057, y: 603, sortIndex: 3, floor: 0, zIndex: 0 },

        { x: 701, y: 647, sortIndex: 4, floor: 0, zIndex: 7 },
        { x: 833, y: 647, sortIndex: 5, floor: 0, zIndex: 6 },
        { x: 965, y: 647, sortIndex: 6, floor: 0, zIndex: 5 },
        { x: 1097, y: 647, sortIndex: 7, floor: 0, zIndex: 4 },

        { x: 742, y: 692, sortIndex: 8, floor: 0, zIndex: 11 },
        { x: 874, y: 692, sortIndex: 9, floor: 0, zIndex: 10 },
        { x: 1006, y: 692, sortIndex: 10, floor: 0, zIndex: 9 },
        { x: 1138, y: 692, sortIndex: 11, floor: 0, zIndex: 8 }
    ]
    // fairygui 组件
    private handleGuide: any;
    // 远程动态组件
    private feedback: any;
    private _blocks: Array<CreatedBlockData> = [];
    private _scheduleTime = .3;
    private _dragging = false;
    /** 是否拖拽过,用于解决方块拖拽和点击事件冲突*/
    private _isDrag = false;
    private _answer: any = {};
    /** 当前作答数据*/
    private _curAnswer: any = {};
    /** 当前地板格子总个数*/
    private _floorNum: number = 12;
    private _rectUrl: string;
    private _blockDatas: Array<Block> = [];
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
        // 初始化state
        this._state = {
            drag: "end",
            blockDatas: this._blockDatas,
            curMoveBlock: null,
            curMoveBlockIndex: null,
            title: false,
            submit: false,
            answer: false,
            isCreateBlock: false,
            createBlockData: null
        }
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
        this._initFloorBtn();
        this._initCurFloorAnswer();
    }

    private _initCurFloorAnswer() {
        let obj = {
            floor_0: [],
            floor_1: []
        }
        for (let i = 0; i < this._floorNum; i++) {
            obj.floor_0.push(0);
            obj.floor_1.push(0);
        }
        this._curAnswer = obj;
    }

    private floorBtns: Array<fairygui.GButton>;
    private _initFloorBtn() {
        this.floorBtns = [];
        let group = this._view.getChild("groupFloorBtn").asGroup;
        for (var i = 0; i < this._createFloorBlockData.length; i++) {
            let floorBtn = fgui.UIPackage.createObject("t4-02", "createBlockFloorBtn").asButton;
            floorBtn.on(fgui.Event.CLICK, this._onFloorBtnClick, this);
            floorBtn.x = this._createFloorBlockData[i].x;
            floorBtn.y = this._createFloorBlockData[i].y;
            floorBtn.group = group;
            floorBtn.name = i.toString();
            this._view.addChild(floorBtn);
            this.floorBtns.push(floorBtn);
        }
    }

    private _onFloorBtnClick(evt: fgui.Event) {
        let target: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        target.touchable = false;
        let createIndex = Number(target.name);
        this._setBlockDataByIndex(createIndex);
    }

    private _startDragTime: number;
    private _onDragStart(evt: fgui.Event): void {
        this._isDrag = false;
        let time = new Date()
        this._startDragTime = time.getTime();
        evt.captureTouch();
        // this.playSound('ui://tfsfm7mbt1pw9');
        let state: any = globalThis._.cloneDeep(this._state);
        let curMoveBlock: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let index = this._blocks.findIndex((v: CreatedBlockData) => v.target == curMoveBlock);
        state.curMoveBlockIndex = index;
        this.updateState(state);
    }

    private _onDragMove(evt: fgui.Event): void {
        this._dragging = true;
        this._isDrag = true;
    }

    private _onDragEnd(evt: fgui.Event): void {
        if (!this._dragging) return;
        this._dragging = false;

        let curMoveBlock: fairygui.GObject = fgui.GObject.cast(evt.currentTarget);
        let curMoveBlockIndex: number = this._blocks.findIndex((v: CreatedBlockData) => v.target == curMoveBlock);
        let bool: any = this._adsorb(curMoveBlock, curMoveBlockIndex);
        let state: any = globalThis._.cloneDeep(this._state);
        // this.playSound('ui://ik5aab9i98t375');
        state.isBack = bool;
        state.drag = "end";
        state.curMoveBlockIndex = curMoveBlockIndex;
        this.updateState(state);
    }

    // 区域所属判断
    private _adsorb(obj: fairygui.GObject, curMoveIndex: number) {
        let a: any;
        let b: any;
        let c: any;
        a = obj.x - this._blocks[curMoveIndex].data.x;
        b = obj.y - this._blocks[curMoveIndex].data.y;
        c = Math.sqrt(a * a + b * b);
        return c < 200;
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private _clickSubmit(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.answer = this._judgeAnswer();
        state.submit = true;
        this.updateState(state);
    }

    private _judgeAnswer() {
        if (this._blocks.length < 1) {
            return false;
        }
        let arr0 = this._blocks.filter((v: CreatedBlockData) => v.data.floor == 0);
        let arr1 = this._blocks.filter((v: CreatedBlockData) => v.data.floor == 1);
        this._curAnswer.floor_0.forEach((value, i) => this._curAnswer.floor_0[i] = 0);
        this._curAnswer.floor_1.forEach((value, i) => this._curAnswer.floor_1[i] = 0);
        this._curAnswer.floor_1.forEach((v: number) => v = 0);
        if (arr0) {
            arr0.map((v: CreatedBlockData) => {
                this._curAnswer.floor_0[v.data.sortIndex] = 1;
            })
        }
        if (arr1) {
            arr1.map((v: CreatedBlockData) => {
                this._curAnswer.floor_1[v.data.sortIndex] = 1;
            })
        }
        var configFloor0 = this._filterAnswer(this._answer.floor_0);
        var configFloor1 = this._filterAnswer(this._answer.floor_1, configFloor0.startIndex);
        var curFloor0 = this._filterAnswer(this._curAnswer.floor_0);
        var curFloor1 = this._filterAnswer(this._curAnswer.floor_1, curFloor0.startIndex);
        let configAnswer = configFloor0.answer.concat(configFloor1.answer).join("");
        let curAnswer = curFloor0.answer.concat(curFloor1.answer).join("");
        return configAnswer == curAnswer;
    }

    private _filterAnswer(arr: Array<number>, index?: number) {
        let startIndex: number = index == undefined ? null : index;
        let filterNums: Array<number> = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 1 && startIndex == null) {
                startIndex = i;
                filterNums.push(0);
                continue;
            }
            if (arr[i] == 1) {
                filterNums.push(i - startIndex);
            }
        }
        return {
            answer: filterNums,
            startIndex: startIndex
        };
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
            this._blocks[state.curMoveBlockIndex].target.x = state.blockDatas[state.curMoveBlockIndex].x
            this._blocks[state.curMoveBlockIndex].target.y = state.blockDatas[state.curMoveBlockIndex].y
        }

        if (state.drag == "end") {
            if (!globalThis._.isEqual(oldState.isBack, state.isBack)) {
                //         // 放置声
                // if (state.collider[i].x != this._colliderBox[i].x && this._colliderBox[i].y != state.collider[i].y) {
                //     // 放置的声音先给我注释掉先
                //         //     this.playPlace();
                //         // }
                if (state.isBack) {
                    cc.tween(this._blocks[state.curMoveBlockIndex].target)
                        .to(0.1, { x: this._blocks[state.curMoveBlockIndex].data.x, y: this._blocks[state.curMoveBlockIndex].data.y })
                        .start();
                } else {
                    this._judgeFloorBtnTouch(this._blocks[state.curMoveBlockIndex].data.sortIndex);
                    this._judgeDown(state.curMoveBlockIndex);
                    this._view.removeChild(this._blocks[state.curMoveBlockIndex].target);
                    this._blocks.splice(state.curMoveBlockIndex, 1);
                    state.blockDatas.splice(state.curMoveBlockIndex, 1);
                }
                state.isBack = null;
                state.curMoveBlockIndex = null;
            }

            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }

            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    let bool = this._blocks.length < 1;
                    bool ? this.onHandleGuide() : this.answerFeedback(state.answer);
                } else {
                    this.disableForbidHandle();
                }
            }

            if (!globalThis._.isEqual(oldState.isCreateBlock, state.isCreateBlock)) {
                state.isCreateBlock = false;
                this._createBlockUI(state)
            }
        }
    }

    // 判断下层是否还有方块，没有重新开启地板创建按钮
    private _judgeFloorBtnTouch(sortIndex: number) {
        if (this._blocks.length < 1) {
            this.floorBtns[sortIndex].touchable = true;
            return;
        }
        let topBlock = this._blocks.find((v: CreatedBlockData) => {
            return v.data.sortIndex == sortIndex && v.data.floor == 1
        })
        if (!topBlock) {
            this.floorBtns[sortIndex].touchable = true;
        }
    }

    // 寻找上层是否有方块
    private _judgeDown(curMoveBlockIndex: number) {
        let data = this._blocks[curMoveBlockIndex].data;
        let topBlock = this._blocks.find((v: CreatedBlockData) => {
            return data.sortIndex == v.data.sortIndex && v.data.floor == 1
        })
        if (topBlock) {
            cc.tween(topBlock.target)
                .to(0.1, { y: topBlock.data.y + 134 })
                .call(() => {
                    topBlock.data.y += 134;
                    topBlock.data.floor = 0;
                })
                .start()
        }
    }

    private _createBlockUI(state: any) {
        let block = fgui.UIPackage.createObject("t4-02", "blockCom").asCom;
        let loader = block.getChild("imgLoader") as fgui.GLoader;
        loader.url = this._rectUrl;
        block.x = state.createBlockData.x;
        block.y = state.createBlockData.y - 150;
        block.draggable = true;
        block.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
        block.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        block.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
        let topBtn = block.getChild('topBtn').asButton;
        let leftBtn = block.getChild('leftBtn').asButton;
        let frontBtn = block.getChild('frontBtn').asButton;
        topBtn.on(fgui.Event.CLICK, this._setCreateTopBlockData, this);
        leftBtn.on(fgui.Event.CLICK, this._setCreateLeftBlockData, this);
        frontBtn.on(fgui.Event.CLICK, this._setCreatefrontBlockData, this);
        this._view.addChildAt(block, this._view.numChildren - 1)
        var obj = new CreatedBlockData();
        obj.data = state.createBlockData
        obj.target = block;
        this._blocks.push(obj);
        this._sortBlocks();
        cc.tween(block)
            .to(0.1, { y: state.createBlockData.y })
            .start();
        return block;
    }

    private _setCreatefrontBlockData(evt: fgui.Event) {
        let curBlock: fgui.GObject = fgui.GObject.cast(evt.currentTarget).parent;
        let block = this._blocks.find((v: CreatedBlockData) => v.target == curBlock);
        let createIndex = block.data.sortIndex + 4;
        if (createIndex > this._createFloorBlockData.length - 1) {
            return;
        }
        if (this._isDrag) {
            return;
        }
        this._setBlockDataByIndex(createIndex);
    }

    private _setCreateLeftBlockData(evt: fgui.Event) {
        let curBlock: fgui.GObject = fgui.GObject.cast(evt.currentTarget).parent;
        let block = this._blocks.find((v: CreatedBlockData) => v.target == curBlock);
        let createIndex = block.data.sortIndex - 1;
        if (createIndex == -1 || createIndex == 3 || createIndex == 7) {
            return;
        }
        if (this._isDrag) {
            return;
        }
        this._setBlockDataByIndex(createIndex);
    }

    private _setCreateTopBlockData(evt: fgui.Event) {
        let curBlock: fgui.GObject = fgui.GObject.cast(evt.currentTarget).parent;
        let block = this._blocks.find((v: CreatedBlockData) => v.target == curBlock);
        let createIndex = block.data.sortIndex;
        if (block.data.floor == 1) {
            return;
        }
        if (this._isDrag) {
            return;
        }
        this._setBlockDataByIndex(createIndex);
    }
    private _setBlockDataByIndex(index: number) {
        // 创建对象数据
        let createData = this._createFloorBlockData[Number(index)];
        let floor = this._judgeBlocksIsExist(createData.sortIndex);
        let data = new Block();
        data.x = createData.x
        data.y = floor == 0 ? createData.y : createData.y - 134;
        data.sortIndex = createData.sortIndex
        data.floor = floor;
        data.zIndex = createData.zIndex
        // 数据驱动创建对象
        let state: any = globalThis._.cloneDeep(this._state);
        state.isCreateBlock = true;
        state.createBlockData = data;
        state.blockDatas.push(data)
        this.updateState(state);
    }

    private _judgeBlocksIsExist(sortIndex: number) {
        let isExist = this._blocks.find((v: CreatedBlockData) => v.data.sortIndex == sortIndex && v.data.floor == 0);
        return isExist ? 1 : 0;
    }

    private _sortBlocks() {
        let indexArr = []
        for (var i = 0; i < this._blocks.length; i++) {
            indexArr.push(this._view.getChildIndex(this._blocks[i].target));
        }
        this._blocks = this._blocks.sort((x, y) => {
            return x.data.zIndex - y.data.zIndex
        })
        for (var i = 0; i < indexArr.length; i++) {
            this._view.setChildIndex(this._blocks[i].target, indexArr[i]);
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
        setTimeout(() => {
            let state: any = globalThis._.cloneDeep(this._state);
            state.submit = false;
            this.updateState(state);
        }, 2000);

        // if (!this.handleGuide) return;
        // let state: any = globalThis._.cloneDeep(this._state);
        // fgui.GRoot.inst.addChild(this.handleGuide.component);
        // if (this.handleGuide.pos) {
        //     this.handleGuide.component.x = (fgui.GRoot.inst.width - this.handleGuide.component.width) / 2 + this.handleGuide.pos.x;
        //     this.handleGuide.component.y = (fgui.GRoot.inst.height - this.handleGuide.component.height) / 2 + this.handleGuide.pos.y;
        // } else {
        //     this.handleGuide.component.y = (fgui.GRoot.inst.height - this.handleGuide.component.height) / 2;
        // }

        // let t: fgui.Transition = this.handleGuide.component.getTransition("t0");
        // t.play(() => {
        //     fgui.GRoot.inst.removeChild(this.handleGuide.component);
        //     state.submit = false;
        //     this.updateState(state);
        // }, 2);
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
            state.blockDatas[state.curMoveBlockIndex] = {
                x: this._blocks[state.curMoveBlockIndex].target.x,
                y: this._blocks[state.curMoveBlockIndex].target.y,
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

        var data = new CreatedBlockData()
        data.target
    }
}

export class CreatedBlockData {
    /** 地板方块数据 */
    data: Block
    /** 地板方块UI组件 */
    target: fairygui.GComponent
}


export class Block {
    x: number
    y: number
    /** 方块排序，区分当前方块在当前层数的排列序号 */
    sortIndex: number
    /** 方块层级，区分当前方块属于第一层还是第二层 */
    floor: number
    /** 方块深度，区分当前方块在容器的深度childIndex */
    zIndex: number
}
