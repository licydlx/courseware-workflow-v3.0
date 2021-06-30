import t3_courseware from '../../../entrances/javascripts/courseware';

/*
 * @Descripttion: 
 * @version: 
 * @Author: ruzhuan
 * @Date: 2021-06-08 18:00:00
 * @LastEditors: ruzhuan
 * @LastEditTime: 2021-06-08 18:00:00
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { ccclass, property } = cc._decorator;

@ccclass
export default class choose_model03_v2 extends cc.Component {
    private _worldRoot: cc.Node;
    private _view: fgui.GComponent;
    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _boyFood: any = [];
    private _girlFood: any = [];
    private _gameFood: any = [];

    private _gameOver: boolean = false;
    private _gameStart: boolean = false;

    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    // 1s *60 = 60
    private _gameTime: number = 0;

    /** 我自己的对象池 */
    private myFoodPools: any = [];

    private _rightIndexs: any = [];

    private _playBtn: fgui.GButton;

    private _replayBtn: fgui.GButton;

    private _package: any;

    private timeText: fgui.GLabel;

    private _dropSpeed: number = 3.0;

    private _framesSecond: number = 10;

    private _interTimeLimit: number = this._framesSecond * 1.0; // 60/10

    private _interTime: number = this._interTimeLimit;

    private _gameMusic: cc.AudioClip;
    private _wrongSound: cc.AudioClip;
    private _rightSound: cc.AudioClip;
    private _readySound: cc.AudioClip;

    private _boySound: string;
    private _girlSound: string;

    private _boy3D: fgui.GLoader3D;

    private _girl3D: fgui.GLoader3D;

    private _readyGroup: fgui.GGroup;
    private _ready: fgui.GImage;
    private _go: fgui.GImage;
    private _over: fgui.GGroup;

    private _scoreGrop: fgui.GGroup;
    private _curScoreText: fgui.GLabel;
    private _topText: fgui.GLabel;

    private _gameFoodSize: any;

    private _gameAllFoodData: any = {};

    private _foodTag: number = 0;

    private _boySoundTime: number;

    private _girlSoundTime: number;

    private _isCanSendUpdate: boolean = true;

    private _signalingModel: number;

    private feedbackType: any = cc.Enum({
        No: 0,
        GuideShow: 1,
        WrongFeed: 2,
        RightFeed: 3
    });

    private canPlayType: any = cc.Enum({
        UnEnable: 0,
        Show: 1,
        Hide: 2,
    });

    // 远程动态组件
    private feedback: any;

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

        this._framesSecond = 10;
        this._interTimeLimit = this._framesSecond * 1.0;
        this._dropSpeed = 3.0;
        this._interTime = this._interTimeLimit;
        this._foodTag = 0;
        this._gameAllFoodData = {};
        this.myFoodPools = [];

        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;

        fgui.GRoot.inst.addChild(this._view);

        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");

        // 臨時
        // bug 初始设置不播放不生效
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        this._scoreGrop = this._view.getChild("score").asGroup;
        this._scoreGrop.sortingOrder = 10;

        this._topText = this._view.getChild("top").asLabel;
        this._curScoreText = this._view.getChild("cur").asLabel;

        this._topText.text = '0';
        this._curScoreText.text = '0';

        this._view.getChild("total").asLabel.text = '';

        this.timeText = this._view.getChild("n32").asLabel;
        this.timeText.text = this._gameTime + '';

        this._readyGroup = this._view.getChild('readyGroup').asGroup;
        this._ready = this._view.getChild('ready').asImage;
        this._go = this._view.getChild('go').asImage;
        this._over = this._view.getChild('over').asGroup;

        this._readyGroup.visible = false;
        this._ready.visible = false;
        this._go.visible = false;
        this._over.visible = false;

        this._boy3D = this._view.getChild('boy') as fgui.GLoader3D;
        this._girl3D = this._view.getChild('girl') as fgui.GLoader3D;

        this._boy3D.url = "ui://733aoo45gzaz6z";
        this._girl3D.url = "ui://733aoo45gzaz6z";

        this._boy3D.animationName = 'b_idle';
        this._girl3D.animationName = 'g_idle';

        this._boy3D.on(fgui.Event.CLICK, this._clickElves, this);
        this._girl3D.on(fgui.Event.CLICK, this._clickElves, this);

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        this._title = this._view.getChild("title").asButton;
        this._title.sortingOrder = 11;

        this._playBtn = this._view.getChild("play").asButton;
        if (this._playBtn) this._playBtn.on(fgui.Event.CLICK, this._clickStartPlay, this);
        this._playBtn.enabled = false;

        this._replayBtn = this._view.getChild("replay").asButton;
        if (this._replayBtn) this._replayBtn.on(fgui.Event.CLICK, this._clickStartPlay, this);
        this._replayBtn.visible = false;

        let boyFoodGroup = this._view.getChild("boyFood").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == boyFoodGroup) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                btn.alpha = 0;
                this._boyFood.push(btn);
            }
        }

        let girlFoodGroup = this._view.getChild("girlFood").asGroup;
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == girlFoodGroup) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                btn.alpha = 0;
                this._girlFood.push(btn);
            }
        }

        // 初始化state
        this._state = {
            title: false,
            elvesPlay: false,
            rightSoundFile: [{ sex: 1, file: this._boySound, time: this._boySoundTime }, { sex: 2, file: this._girlSound, time: this._girlSoundTime }],
            gameCanPlay: this.canPlayType.UnEnable,
            gameOver: false,
            gameStart: false,
            submitFeedback: this.feedbackType.No,
            gameTime: 0,
            clickFoodTag: -1,
            gameAllFoodData: {},
            dropSpeed: this._dropSpeed,
            interTimeLimit: this._interTimeLimit,
            interTime: this._interTime,
            foodTag: this._foodTag,
            curScore: 0,
            topScore: 0,
            isReplayShow: false,
        }

        // 临时 
        // 禁止操作期间 切页
        this.disableForbidHandle();
        // 销毁反馈
        let feedback: any = this._worldRoot.getChildByName("feedback");
        if (feedback) feedback.destroy();
        cc.audioEngine.stopAll();

    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { gameFood, gameFoodSize, rightIndexs, boySoundPath, girlSoundPath, boySoundTime, girlSoundTime } = model.config;
        this._package = Package;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        if (gameFood) this._gameFood = gameFood;
        if (gameFoodSize) this._gameFoodSize = gameFoodSize;
        if (rightIndexs) this._rightIndexs = rightIndexs;
        if (boySoundTime) this._boySoundTime = boySoundTime;
        if (girlSoundTime) this._girlSoundTime = girlSoundTime;

        let item = fgui.UIPackage.getItemByURL('ui://733aoo45r3754m');
        this._gameMusic = await loadResource(item.file, cc.AudioClip);

        item = fgui.UIPackage.getItemByURL('ui://733aoo45r3754p');
        this._wrongSound = await loadResource(item.file, cc.AudioClip);

        item = fgui.UIPackage.getItemByURL('ui://733aoo45r3754o');
        this._rightSound = await loadResource(item.file, cc.AudioClip);

        this._boySound = fgui.UIPackage.getItemByURL(boySoundPath).file;

        this._girlSound = fgui.UIPackage.getItemByURL(girlSoundPath).file;

        item = fgui.UIPackage.getItemByURL('ui://733aoo45r3754n');
        this._readySound = await loadResource(item.file, cc.AudioClip);

        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
    }

    protected updateAdd(dt: number): void {

        if (!this._gameStart || this._gameOver || this._signalingModel === 3) {

            for (let i = 0; i < this.myFoodPools.length; i++) {

                this.myFoodPools[i].removeFromParent();
            }
            this.myFoodPools = [];
            this.unschedule(this.updateAdd);
            return;
        }

        this._gameTime++;

        console.log('====  _signalingModel ====' + this._signalingModel);

        console.log('====  updateAdd _gameTime ====' + this._gameTime);

        this.timeText.text = parseInt(this._gameTime / 10 + '') + 's';

        if (this._gameTime >= 10 * 15) {

            this.unschedule(this.updateAdd);

            let state: any = globalThis._.cloneDeep(this._state);

            let showTotal = 0;
            // 增加正确显示的个数
            for (let i = 0; i <= this._foodTag; i++) {

                for (let j = 0; j < this._rightIndexs.length; j++) {
                    if (this._rightIndexs[j] === state.gameAllFoodData[i].index) {
                        showTotal++;
                        break;
                    }
                }
            }
            if (state.curScore / showTotal < 0.5) {

                state.submitFeedback = this.feedbackType.WrongFeed;

            } else {

                state.submitFeedback = this.feedbackType.RightFeed;

            }

            console.log('==== showTotal  ====' + showTotal);

            state.gameTime = this._gameTime;
            state.gameOver = true;
            state.gameStart = false;

            if (state.curScore > state.topScore) {
                state.topScore = state.curScore;
            }
            this.updateState(state);
            return;
        }

        if (this._gameTime <= 5 * 10) {

            this._dropSpeed = 3.0; // 3.5
            this._interTimeLimit = this._framesSecond * 1.0;
            this.updateAllSpeed();

        } else if (this._gameTime > 5 * 10 && this._gameTime <= 10 * 10) {

            this._dropSpeed = 4.5; // 5.0
            this._interTimeLimit = this._framesSecond * 0.85;
            this.updateAllSpeed();

        } else if (this._gameTime > 10 * 10) {

            this._dropSpeed = 5.5; // 6.5
            this._interTimeLimit = this._framesSecond * 0.8;
            this.updateAllSpeed();
        }

        this._interTime++;
        if (this._interTime >= this._interTimeLimit) {
            this._interTime = 0;
            this.foodDropUpdate();
        }

        if (this._gameTime % 50 === 0 && this._isCanSendUpdate) {

            let state: any = globalThis._.cloneDeep(this._state);
            state.gameTime = this._gameTime;
            state.interTime = this._interTime;
            state.foodTag = this._foodTag;
            this.updateState(state);
        }
    }

    private _addAllFoodData(state: any) {

        state.gameAllFoodData = {};
        let arrWrongIndex = [];
        let rightNums = 0;
        let rightNumMin = 8;
        for (let i = 0; i < 40; i++) {
            let randIndex: number = Math.floor(Math.random() * this._gameFood.length);
            let max = 1775 - this._gameFoodSize[randIndex].w;
            let randPosX: number = Math.floor(Math.random() * (max - 1000 + 1) + 1000);
            let tempData = { index: randIndex, isShow: true, tag: i, x: randPosX, y: 70, speed: this._dropSpeed };
            state.gameAllFoodData[tempData.tag] = tempData;
            if (i < 15) {
                let isWrongIndex = true;
                for (let j = 0; j < this._rightIndexs.length; j++) {

                    if (randIndex === this._rightIndexs[j]) {
                        isWrongIndex = false;
                        break;
                    }
                }
                if (isWrongIndex) {
                    arrWrongIndex.push(i);

                } else {
                    rightNums++;
                }

            }
        }

        if (rightNums < rightNumMin) {

            for (let i = 0; i < rightNumMin - rightNums; i++) {
                let randRightIndex: number = Math.floor(Math.random() * this._rightIndexs.length);
                let tiHuanIndex: number = Math.floor(Math.random() * arrWrongIndex.length);
                let max = 1775 - this._gameFoodSize[this._rightIndexs[randRightIndex]].w;
                let randPosX: number = Math.floor(Math.random() * (max - 1000 + 1) + 1000);
                state.gameAllFoodData[arrWrongIndex[tiHuanIndex]].index = this._rightIndexs[randRightIndex];
                state.gameAllFoodData[arrWrongIndex[tiHuanIndex]].x = randPosX;
            }
        }
    }

    private updateAllSpeed() {

        for (let i = 0; i < this.myFoodPools.length; i++) {

            this.myFoodPools[i].setNewSpeed(this._dropSpeed);
        }
    }

    private foodDropUpdate() {

        console.log('====== foodDropUpdate ===== ' + this._foodTag);
        let foodData = this._gameAllFoodData[this._foodTag];

        // 判断是否重叠
        let isOverlap = false;
        let curRect = new cc.Rect(foodData.x, foodData.y, this._gameFoodSize[foodData.index].w, this._gameFoodSize[foodData.index].h);
        for (let i = 0; i < this.myFoodPools.length; i++) {

            if (this.myFoodPools[i].data.isShow) {
                let foodRect = new cc.Rect(this.myFoodPools[i].x, this.myFoodPools[i].y, this.myFoodPools[i].width, this.myFoodPools[i].height);
                if (foodRect.intersects(curRect)) {
                    isOverlap = true;
                    break;
                }
            }
        }

        if (isOverlap) {

            return;
        }

        let isHave = false;
        let food = null;
        for (let i = 0; i < this.myFoodPools.length; i++) {

            if (this.myFoodPools[i].data.index === foodData.index && !this.myFoodPools[i].data.isShow) {
                isHave = true;
                food = this.myFoodPools[i];
                food.repeatShow(foodData);
                break;
            }
        }

        if (!isHave) {

            food = new MyDropFood(this._gameFood[foodData.index], foodData);
            food.on(fgui.Event.CLICK, this._clickDropFood, this);
            this._view.addChild(food);
            this.myFoodPools.push(food);
        }
        this._foodTag++;
        if (this._foodTag >= Object.keys(this._gameAllFoodData).length) {

            this._foodTag = 0;
        }
    }

    private _clickDropFood(evt: any) {

        let state: any = globalThis._.cloneDeep(this._state);

        let obj: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let btn = obj.asButton;
        btn.touchable = false;
        state.clickFoodTag = btn.data.tag;

        // 是正确的
        let isRight = false;
        for (let i = 0; i < this._rightIndexs.length; i++) {
            if (btn.data.index === this._rightIndexs[i]) {
                isRight = true;
                break;
            }
        }
        if (isRight) {
            //点击正确
            state.curScore++;
        }
        this.updateState(state);
    }

    private _clickElves(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        if (btn.name === 'boy') {

            state.rightSoundFile = [{ sex: 1, file: this._boySound, time: this._boySoundTime }, { sex: 2, file: this._girlSound, time: this._girlSoundTime }];

        } else {

            state.rightSoundFile = [{ sex: 2, file: this._girlSound, time: this._girlSoundTime }, { sex: 1, file: this._boySound, time: this._boySoundTime }];
        }
        state.elvesPlay = true;
        this.updateState(state);
    }

    private _clickStartPlay(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.play = true;
        this._addAllFoodData(state);
        this.updateState(state);
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
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

        console.log('==== 更新ui层 ====');
        console.log(state);

        //signalingModel 1: 演示 2 答题 3投放
        //role 0：教师 2学生

        if (state.elvesPlay) {
            this.playElvesSpeak(state.elvesPlay, state.rightSoundFile);
        }

        // 播放过精灵对话后游戏能玩，并且玩过游戏后能否重玩
        if (!globalThis._.isEqual(oldState.isReplayShow, state.isReplayShow)) {

            if (state.isReplayShow) {

                this._replayBtn.visible = true;

            } else {

                this._replayBtn.visible = false;
            }

            this._readyGroup.visible = false;
            this._ready.visible = false;
            this._over.visible = false;
            this._go.visible = false;
        }

        if (!globalThis._.isEqual(oldState.gameCanPlay, state.gameCanPlay)) {

            if (state.gameCanPlay === this.canPlayType.UnEnable) {

                this._playBtn.enabled = false;
                this._playBtn.visible = true;

            } else if (state.gameCanPlay === this.canPlayType.Show) {

                this._playBtn.enabled = true;
                this._playBtn.visible = true;

            } else if (state.gameCanPlay === this.canPlayType.Hide) {

                this._playBtn.visible = false;
            }
            this._readyGroup.visible = false;
            this._ready.visible = false;
            this._over.visible = false;
            this._go.visible = false;
        }

        if (!globalThis._.isEqual(oldState.gameStart, state.gameStart)) {

            this._gameStart = state.gameStart;

            if (state.gameStart) {

                let { role, signalingModel } = window['GlobalData'].courseData; // 危险的做法。。。
                if (signalingModel === 1 && role === 2) {

                    this._isCanSendUpdate = false;
                }
                this._signalingModel = signalingModel;

                let boy = this._view.getChild("boy").asButton;
                let girl = this._view.getChild("girl").asButton;
                boy.touchable = false;
                girl.touchable = false;

                cc.audioEngine.stopMusic();

                if (this._signalingModel !== 3) {

                    cc.audioEngine.playMusic(this._gameMusic, true);

                    this.unschedule(this.updateAdd);
                    this.schedule(this.updateAdd, 0.1);
                }

            } else {
                let boy = this._view.getChild("boy").asButton;
                let girl = this._view.getChild("girl").asButton;
                boy.touchable = true;
                girl.touchable = true;
                cc.audioEngine.stopMusic();
            }
        }

        if (!globalThis._.isEqual(oldState.gameOver, state.gameOver)) {

            this._gameOver = state.gameOver;

            if (state.gameOver) {
                for (let i = 0; i < this.myFoodPools.length; i++) {

                    this.myFoodPools[i].removeFromParent();
                }
                this.myFoodPools = [];
                this._over.visible = true;
            } else {

                this._over.visible = false;
            }

        }

        if (!globalThis._.isEqual(oldState.play, state.play)) {

            if (state.play) {

                cc.audioEngine.play(this._readySound, false, 1);

                this._replayBtn.visible = false;
                this._playBtn.visible = false;
                this._readyGroup.visible = true;
                this._ready.visible = true;
                this._go.visible = false;

                cc.tween(this)
                    .delay(0.7)
                    .call(() => {
                        this._go.visible = true;
                        this._ready.visible = false;
                    })
                    .delay(1.0)
                    .call(() => {

                        this._readyGroup.visible = false;

                        let state1: any = globalThis._.cloneDeep(this._state);
                        state1.play = false;
                        state1.isReplayShow = false;
                        state1.gameCanPlay = this.canPlayType.Hide;
                        state1.gameStart = true;
                        state1.dropSpeed = 3.0
                        state1.curScore = 0;
                        state1.gameTime = 0;
                        state1.interTime = 0;
                        state1.interTimeLimit = this._framesSecond * 1.0;
                        state1.clickFoodTag = -1;
                        state1.foodTag = 0;
                        this.updateState(state1);

                    })
                    .start();
            }
        }

        if (!globalThis._.isEqual(oldState.clickFoodTag, state.clickFoodTag)) {

            let btn = null;
            for (let i = 0; i < this.myFoodPools.length; i++) {

                if (state.clickFoodTag === this.myFoodPools[i].data.tag) {
                    btn = this.myFoodPools[i];
                    break;
                }
            }

            if (btn) {

                // 是正确的
                let isRight = false;
                for (let i = 0; i < this._rightIndexs.length; i++) {
                    if (btn.data.index === this._rightIndexs[i]) {
                        isRight = true;
                        break;
                    }
                }
                if (isRight) {
                    //点击正确
                    btn.clickChangeIcon();
                    cc.audioEngine.playEffect(this._rightSound, false);

                } else {
                    btn.clickWrongAnimate();
                    //点击错误
                    cc.audioEngine.playEffect(this._wrongSound, false);

                }

                setTimeout(() => {

                    btn.touchable = true;
                    let state2: any = globalThis._.cloneDeep(this._state);
                    state2.clickFoodTag = '';
                    this.updateState(state2);

                }, 100);
            }
        }

        if (!globalThis._.isEqual(oldState.submitFeedback, state.submitFeedback)) {

            if (state.submitFeedback === this.feedbackType.RightFeed) {

                this.answerFeedback(true);

            } else if (state.submitFeedback === this.feedbackType.WrongFeed) {

                this.answerFeedback(false);
            }
        }

        if (!globalThis._.isEqual(oldState.gameTime, state.gameTime)) {

            this._gameTime = state.gameTime;
        }

        if (!globalThis._.isEqual(oldState.interTime, state.interTime)) {

            this._interTime = state.interTime;
        }


        if (!globalThis._.isEqual(oldState.foodTag, state.foodTag)) {

            let cha = Math.abs(state.foodTag - this._foodTag);
            if (cha > 2) {
                this._foodTag = state.foodTag;
            }
        }

        if (!globalThis._.isEqual(oldState.curScore, state.curScore)) {

            this._curScoreText.text = state.curScore + '';
        }

        if (!globalThis._.isEqual(oldState.topScore, state.topScore)) {

            this._topText.text = state.topScore + '';
        }

        if (!globalThis._.isEqual(oldState.gameAllFoodData, state.gameAllFoodData)) {

            // 获取正确字母数组中的2个字母 可均衡获取0到length的随机整数。
            // 1058 ----1693 Math.floor(Math.random()*(max-min+1)+min)
            this._gameAllFoodData = state.gameAllFoodData;
        }

        if (!globalThis._.isEqual(oldState.title, state.title)) {
            this.playTitle(state.title);
        }
    }


    async playTitle(bool: boolean) {
        this._c1.selectedIndex = bool ? 1 : 0;
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

    playElvesSpeak(bool: boolean, rightSoundFile: any) {
        if (bool) {
            cc.audioEngine.stopAll();
            this.forbidHandle();
            this.playRightSound(0, rightSoundFile);

        } else {
            this._c2.selectedIndex = 0;
            this.disableForbidHandle();
        }
    }

    async playRightSound(curIndex: number, rightSoundFile: any) {

        let foodArr = [];
        if (rightSoundFile[curIndex].sex === 1) {

            foodArr = this._boyFood;
            this._boy3D.animationName = 'b_speak';

        } else {
            foodArr = this._girlFood;
            this._girl3D.animationName = 'g_speak';
        }

        for (let i = 0; i < foodArr.length; i++) {
            foodArr[i].alpha = 0;
        }

        cc.tween(this)
            .delay(0.5)
            .call(() => {

                this._c2.selectedIndex = rightSoundFile[curIndex].sex;
                this.playFoodShowAnimate(0, foodArr);
            })
            .start();

        let audio: cc.AudioClip = await loadResource(rightSoundFile[curIndex].file, cc.AudioClip);
        cc.audioEngine.play(audio, false, 1);

        cc.tween(this)
            .delay(rightSoundFile[curIndex].time)
            .call(() => {

                if (rightSoundFile[curIndex].sex === 1) {

                    this._boy3D.animationName = 'b_idle';

                } else {
                    this._girl3D.animationName = 'g_idle';
                }

                if (curIndex >= rightSoundFile.length - 1) {
                    this.disableForbidHandle();
                    for (let i = 0; i < this._boyFood.length; i++) {
                        this._boyFood[i].alpha = 0;
                    }
                    for (let i = 0; i < this._girlFood.length; i++) {
                        this._girlFood[i].alpha = 0;
                    }

                    this._c2.selectedIndex = 0;

                    let state: any = globalThis._.cloneDeep(this._state);
                    state.elvesPlay = false;
                    state.gameCanPlay = this.canPlayType.Show;
                    this.updateState(state);

                } else {

                    curIndex++;
                    this.playRightSound(curIndex, rightSoundFile);
                }

            })
            .start();
    }

    playFoodShowAnimate(index: number, foodArr: any) {

        if (!foodArr[index]) {
            return;
        }
        cc.tween(foodArr[index])
            .to(1.0, { alpha: 1 })
            .call(() => {
                index++;
                if (index < foodArr.length) {
                    this.playFoodShowAnimate(index, foodArr);
                }
            })
            .start()

    }

    answerFeedback(bool: boolean) {
        if (!this.feedback) return;
        let feedback: any = cc.instantiate(this.feedback);
        feedback.x = 960;
        feedback.y = 540;
        let feedbackJs: any = feedback.getComponent(cc.Component);
        feedbackJs.init(bool);
        feedback.parent = cc.find("Canvas").parent;

        setTimeout(() => {
            feedback.destroy();
            let state: any = globalThis._.cloneDeep(this._state);
            state.submitFeedback = this.feedbackType.No;
            //游戏重新能玩
            state.isReplayShow = true;
            state.gameOver = false;
            this.updateState(state);
        }, 2000);
    }


    /**
     * 点击指引
     * @param obj 点击对象
     */
    handTips2(obj: fgui.GObject) {
        let hand = fgui.UIPackage.createObject(this._package, 'hand');
        this._view.addChild(hand);
        let tempX = obj.x + obj.width / 2;
        let tempY = obj.y + obj.height / 2;

        hand.x = tempX;
        hand.y = tempY;

        cc.tween(hand).to(0.3, {
            x: tempX - 30,
            y: tempY - 30
        }).to(0.3, {
            x: tempX,
            y: tempY
        }).to(0.3, {
            x: tempX - 30,
            y: tempY - 30
        }).to(0.3, {
            x: tempX,
            y: tempY
        }).call(() => {
            this._view.removeChild(hand);
            hand = null;
            let state: any = globalThis._.cloneDeep(this._state);
            state.submit = this.feedbackType.No;
            this.updateState(state)
        }).start();
    }

    // 运行时 禁止操作
    forbidHandle() {
        console.log('===  运行时 禁止操作 =====');
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
        console.log('===== 游戏 onDisable =====');
        let state: any = globalThis._.cloneDeep(this._state);
        state.gameOver = false;
        state.gameStart = false;
        this.updateState(state);
        cc.Tween.stopAll();
        this.unschedule(this.updateAdd);
        this.relieveState();
        cc.audioEngine.stopAll();
    }

    protected onDestroy(): void {

        console.log('===== 游戏 onDestroy =====');

    }
}


class MyDropFood extends fgui.GButton {

    private _url: string;

    private _iconLoader: fgui.GLoader;

    private _itemR: any;

    private _speed: number;

    private _MaxY: number;

    private _shouX: number;
    private _shouY: number;

    constructor(url: string, foodData: any) {

        let _item = super();

        this._shouX = 996;
        this._shouY = 203;
        this._itemR = _item;
        this._iconLoader = new fgui.GLoader();
        this._iconLoader.name = 'icon';
        this._iconLoader.url = url;
        this._iconLoader.autoSize = true;
        this.addChild(this._iconLoader);

        this._url = url;

        this._MaxY = 1000 - this._iconLoader.height;
        foodData['isShou'] = false;
        this._speed = foodData.speed;


        this.data = foodData;

        this.x = this.data.x;
        this.y = this.data.y;
        this.visible = this.data.isShow;

    }

    protected setNewSpeed(newSpeed: number) {

        this._speed = newSpeed;
    }

    protected repeatShow(foodData: any): void {

        this._speed = foodData.speed;

        this.data = foodData;

        this.x = this.data.x;
        this.y = this.data.y;
        this.visible = this.data.isShow;

    }


    protected clickWrongAnimate(): void {

        let tempX = this.data.x;
        let offset = 10;
        cc.tween(this._itemR)
            .sequence(cc.tween().to(0.02, { x: tempX + (5 + offset) }),
                cc.tween().to(0.02, { x: tempX - (6 + offset) }))
            .repeat(8)
            .call(() => {

                this.x = tempX;

                this.data.isShou = false;

            })
            .start();

    }

    protected clickChangeIcon(): void {

        this.data.isShou = true;
        this._iconLoader.url = 'ui://733aoo45r3753l';
        cc.tween(this._itemR)
            .to(0.2, { x: this._shouX, y: this._shouY })
            .to(0.2, { scaleX: 0.45, scaleY: 0.45 })
            .to(0.2, { alpha: 0 })
            .call(() => {

                this.scaleX = 1;
                this.scaleY = 1;
                this.alpha = 1;
                this.data.isShow = false;
                this.visible = false;
                this._iconLoader.url = this._url;
                this.data.isShou = false;
            })
            .start();
    }

    protected onUpdate() {

        if (this.data.isShow === false) {

            this.data.y = 70;
            this.visible = false;
            return;
        }

        if (this.data.isShou) {

            return;
        }
        this.y += this._speed;
        if (this.y >= this._MaxY) {

            this.data.isShow = false;
        }

    }

    protected onDestroy() {
        cc.Tween.stopAll();
    }



}

