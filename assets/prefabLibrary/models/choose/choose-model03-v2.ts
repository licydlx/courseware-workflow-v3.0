import chooseAnswer_model0403_v2 from '../numberPatterns/chooseAnswer-model0403-v2';

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

    private _package: any;

    private timeText: fgui.GLabel;

    private _dropSpeed: number = 3.5;

    private _interTimeLimit: number = 6; // 60/10

    private _interTime: number = this._interTimeLimit;

    private _framesSecond: number = 6;

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

    private feedbackType: any = cc.Enum({

        No: 0,
        GuideShow: 1,
        WrongFeed: 2,
        RightFeed: 3
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

    async onLoad() {

        this._framesSecond = 6;
        this._interTimeLimit = this._framesSecond * 0.8;
        this._dropSpeed = 3.5;
        this._interTime = this._interTimeLimit;

        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;

        fgui.GRoot.inst.addChild(this._view);

        this.myFoodPools = [];

        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");

        // 臨時
        // bug 初始设置不播放不生效
        if (this._c1) {
            this._c1.selectedIndex = 1;
            this._c1.selectedIndex = 0;
        }

        this._scoreGrop = this._view.getChild("score").asGroup;
        this._scoreGrop.sortingOrder = 999;

        this._topText = this._view.getChild("top").asLabel;
        this._curScoreText = this._view.getChild("cur").asLabel;

        this._topText.text = '--';
        this._curScoreText.text = '0';

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

        this._playBtn = this._view.getChild("play").asButton;
        if (this._playBtn) this._playBtn.on(fgui.Event.CLICK, this._clickStartPlay, this);
        this._playBtn.enabled = false;

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

        let rigthTotalTemp = {};
        let temp = {};
        for (let i = 0; i < this._rightIndexs.length; i++) {
            temp = { 'clickTotle': 0, 'showTotal': 0 };
            rigthTotalTemp[this._rightIndexs[i]] = temp;
        }
        // 初始化state
        this._state = {
            title: false,
            elvesPlay: false,
            rightSoundFile: [{ sex: 1, file: this._boySound }, { sex: 2, file: this._girlSound }],
            gameCanPlay: false,
            gameOver: false,
            gameStart: false,
            submitFeedback: this.feedbackType.No,
            gameTime: 0,
            clickFoodTag: -1,
            rigthTotal: rigthTotalTemp,
            gameFoodData: {},
            dropSpeed: this._dropSpeed,
            interTimeLimit: this._interTimeLimit,
            interTime: this._interTime,
            foodTag: 1,
            curScore: 0,
            topScore: 0
        }
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { gameFood, gameFoodSize, rightIndexs, boySoundPath, girlSoundPath } = model.config;
        this._package = Package;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        if (gameFood) this._gameFood = gameFood;
        if (gameFoodSize) this._gameFoodSize = gameFoodSize;
        if (rightIndexs) this._rightIndexs = rightIndexs;

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

        if (!this._gameStart || this._gameOver) {

            this.unschedule(this.updateAdd);
            return;
        }
        this._gameTime++;

        console.log('=== updateAdd =====' + this._gameTime);

        if (this._gameTime >= this._framesSecond * 15) {

            this.unschedule(this.updateAdd);

            let state: any = globalThis._.cloneDeep(this._state);
            let tempClickTotle = 0;
            let tempShowTotal = 0;
            for (var key in state.rigthTotal) {

                tempClickTotle += state.rigthTotal[key].clickTotle;
                tempShowTotal += state.rigthTotal[key].showTotal;
            }

            if (tempClickTotle / tempShowTotal < 0.5) {

                state.submitFeedback = this.feedbackType.WrongFeed;

            } else {

                state.submitFeedback = this.feedbackType.RightFeed;

            }
            state.gameOver = true;
            state.gameStart = false;
            if (state.curScore > state.topScore) {
                state.topScore = state.curScore;
            }
            this.updateState(state);
            return;
        }

        this._interTime++;
        if (this._interTime >= this._interTimeLimit) {

            if (this._gameTime <= 5 * this._framesSecond) {

                this._dropSpeed = 3.0; // 3.5
                this._interTimeLimit = this._framesSecond * 0.8;

            } else if (this._gameTime > 5 * this._framesSecond && this._gameTime <= 10 * this._framesSecond) {

                this._dropSpeed = 4.5; // 5.0
                this._interTimeLimit = this._framesSecond * 0.7;

            } else if (this._gameTime > 10 * this._framesSecond) {

                this._dropSpeed = 5.5; // 6.5
                this._interTimeLimit = this._framesSecond * 0.65;
            }

            this._interTime = 0;
            let state: any = globalThis._.cloneDeep(this._state);

            let randIndex: number = Math.floor(Math.random() * this._gameFood.length);
            let max = 1775 - this._gameFoodSize[randIndex].w;
            let randPosX: number = Math.floor(Math.random() * (max - 1000 + 1) + 1000);
            let tempData = { index: randIndex, isShow: true, tag: state.foodTag, x: randPosX, y: 70, speed: this._dropSpeed };

            let isOverlap = false;
            let curRect = new cc.Rect(tempData.x, tempData.y, this._gameFoodSize[randIndex].w, this._gameFoodSize[randIndex].h);
            for (let i = 0; i < this.myFoodPools.length; i++) {

                if (this.myFoodPools[i].data.isShow) {
                    let foodRect = new cc.Rect(this.myFoodPools[i].x, this.myFoodPools[i].y, this.myFoodPools[i].width, this.myFoodPools[i].height);
                    if (foodRect.intersects(curRect)) {
                        isOverlap = true;
                        break;
                    }
                }
            }


            if (!isOverlap) {
                state.gameFoodData = tempData;
                state.dropSpeed = this._dropSpeed;
                state.interTimeLimit = this._interTimeLimit;
                state.interTime = this._interTime;
                state.foodTag += 1;
                state.gameTime = this._gameTime;
                for (let i = 0; i < this._rightIndexs.length; i++) {
                    if (this._rightIndexs[i] === tempData.index) {
                        state.rigthTotal[tempData.index].showTotal++;
                        break;
                    }
                }

            } else {
                state.dropSpeed = this._dropSpeed;
                state.interTimeLimit = this._interTimeLimit;
                state.interTime = this._interTime;
                state.gameTime = this._gameTime;
            }
            this.updateState(state);
        }
    }

    private foodDropAnimate(state: any, foodData) {

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
    }

    private _clickDropFood(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);

        let obj: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let btn = obj.asButton;
        state.clickFoodTag = btn.data.tag;
        this.updateState(state);

    }

    private _clickElves(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        if (btn.name === 'boy') {

            state.rightSoundFile = [{ sex: 1, file: this._boySound }, { sex: 2, file: this._girlSound }];

        } else {

            state.rightSoundFile = [{ sex: 2, file: this._girlSound }, { sex: 1, file: this._boySound }];
        }
        state.elvesPlay = true;
        this.updateState(state);
    }

    private _clickStartPlay(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.play = true;
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

        console.log('===== 更新ui层 =====');
        console.log(state);

        if (!globalThis._.isEqual(oldState.elvesPlay, state.elvesPlay)) {
            if (state.elvesPlay) {
                this.playElvesSpeak(state.elvesPlay, state.rightSoundFile);
            }
        }

        if (!globalThis._.isEqual(oldState.gameStart, state.gameStart)) {
            this._gameStart = state.gameStart;
            if (state.gameStart && !state.gameOver) {
                let boy = this._view.getChild("boy").asButton;
                let girl = this._view.getChild("girl").asButton;
                boy.touchable = false;
                girl.touchable = false;

                for (let i = 0; i < this.myFoodPools.length; i++) {

                    this.myFoodPools[i].removeFromParent();
                }

                cc.audioEngine.playMusic(this._gameMusic, true);

                this.schedule(this.updateAdd, 0.1);

            } else {
                let boy = this._view.getChild("boy").asButton;
                let girl = this._view.getChild("girl").asButton;
                boy.touchable = true;
                girl.touchable = true;
                cc.audioEngine.stopMusic();
            }
        }

        if (!globalThis._.isEqual(oldState.play, state.play)) {

            if (state.play) {
                this._playBtn.visible = false;
                this._readyGroup.visible = true;
                this._ready.visible = true;
                cc.tween(this)
                    .delay(0.7)
                    .call(() => {
                        this._go.visible = true;
                        this._ready.visible = false;
                    })
                    .start();

                let audioId = cc.audioEngine.play(this._readySound, false, 1);
                cc.audioEngine.setFinishCallback(audioId, () => {

                    this._readyGroup.visible = false;

                    let state1: any = globalThis._.cloneDeep(this._state);
                    state1.gameStart = true;
                    state1.curScore = 0;
                    state1.gameTime = 0;
                    state1.dropSpeed = 3.5;
                    state1.interTimeLimit = this._framesSecond * 0.8;
                    state1.interTime = this._framesSecond * 0.8;
                    state1.foodTag = 1;
                    state1.gameCanPlay = false;
                    state1.clickFoodTag = -1;
                    let rigthTotalTemp = {};
                    let temp = {};
                    for (let i = 0; i < this._rightIndexs.length; i++) {
                        temp = { 'clickTotle': 0, 'showTotal': 0 };
                        rigthTotalTemp[this._rightIndexs[i]] = temp;
                    }
                    state1.rigthTotal = rigthTotalTemp;
                    this.myFoodPools = [];
                    this.updateState(state1);
                });

            } else {
                this._readyGroup.visible = false;
                this._playBtn.visible = true;
            }
        }

        if (!globalThis._.isEqual(oldState.gameOver, state.gameOver)) {

            this._gameOver = state.gameOver;
            if (state.gameOver) {
                this._over.visible = true;
            } else {

                this._over.visible = false;
            }
        }

        if (!globalThis._.isEqual(oldState.clickFoodTag, state.clickFoodTag)) {

            if (state.clickFoodTag != '') {
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
                        setTimeout(() => {

                            let state2: any = globalThis._.cloneDeep(this._state);
                            state2.rigthTotal[btn.data.index].clickTotle++;
                            state2.clickFoodTag = '';
                            state2.curScore++;
                            this.updateState(state2);

                        }, 0.02);

                    } else {

                        btn.clickWrongAnimate();
                        setTimeout(() => {

                            let state2: any = globalThis._.cloneDeep(this._state);
                            state2.clickFoodTag = '';
                            this.updateState(state2);

                        }, 0.03);

                        //点击错误
                        cc.audioEngine.playEffect(this._wrongSound, false);

                    }
                }
            }
        }

        if (!globalThis._.isEqual(oldState.submitFeedback, state.submitFeedback)) {

            if (state.submitFeedback === this.feedbackType.RightFeed) {

                this.answerFeedback(true);

            } else if (state.submitFeedback === this.feedbackType.WrongFeed) {

                this.answerFeedback(false);
            }
        }

        if (!globalThis._.isEqual(oldState.gameCanPlay, state.gameCanPlay)) {

            this._readyGroup.visible = false;
            this._ready.visible = false;
            this._go.visible = false;
            this._over.visible = false;

            if (state.gameCanPlay) {

                this._playBtn.enabled = true;

            } else {

                this._playBtn.enabled = false;
            }
        }

        if (!globalThis._.isEqual(oldState.gameTime, state.gameTime)) {

            this._gameTime = state.gameTime;
            this._interTimeLimit = state.interTimeLimit;
            this._interTime = state.interTime;
            this._dropSpeed = state.dropSpeed;

            for (let i = 0; i < this.myFoodPools.length; i++) {

                this.myFoodPools[i].setNewSpeed(this._dropSpeed);
            }
        }

        if (!globalThis._.isEqual(oldState.gameTime, state.gameTime)) {

            this._gameTime = state.gameTime;
        }

        if (!globalThis._.isEqual(oldState.interTimeLimit, state.interTimeLimit)) {

            this._interTimeLimit = state.interTimeLimit;
            this._interTime = state.interTime;
        }

        if (!globalThis._.isEqual(oldState.dropSpeed, state.dropSpeed)) {

            this._dropSpeed = state.dropSpeed;

            for (let i = 0; i < this.myFoodPools.length; i++) {

                this.myFoodPools[i].setNewSpeed(this._dropSpeed);
            }
        }

        if (!globalThis._.isEqual(oldState.curScore, state.curScore)) {

            this._curScoreText.text = state.curScore + '';
        }

        if (!globalThis._.isEqual(oldState.topScore, state.topScore)) {

            this._topText.text = state.curScore + '';
        }

        if (!globalThis._.isEqual(oldState.gameTime, state.gameTime)) {

            this._gameTime = state.gameTime;
        }

        if (!globalThis._.isEqual(oldState.gameFoodData, state.gameFoodData)) {

            // 获取正确字母数组中的2个字母 可均衡获取0到length的随机整数。
            // 1058 ----1693 Math.floor(Math.random()*(max-min+1)+min)
            this.foodDropAnimate(state, state.gameFoodData);

            this.timeText.text = parseInt(state.gameTime / this._framesSecond + '') + 's';
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
        let audioId = cc.audioEngine.play(audio, false, 1);
        cc.audioEngine.setFinishCallback(audioId, () => {

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
                state.gameCanPlay = true;
                this.updateState(state);

            } else {

                curIndex++;
                this.playRightSound(curIndex, rightSoundFile);
            }

        });
    }

    playFoodShowAnimate(index: number, foodArr: any) {

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
            state.gameCanPlay = true;
            state.play = false;
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

    private _isDou: boolean;

    private _speed: number;

    private _MaxY: number;

    constructor(url: string, foodData: any) {

        let _item = super();

        this._isDou = false;

        this._itemR = _item;
        this._iconLoader = new fgui.GLoader();
        this._iconLoader.name = 'icon';
        this._iconLoader.url = url;
        this._iconLoader.autoSize = true;
        this.addChild(this._iconLoader);

        this._url = url;

        this._MaxY = 1000 - this._iconLoader.height;
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

        this._isDou = true;

        let tempX = this.x;
        let tempY = this.y;
        let offset = 10;
        cc.tween(this._itemR)
            .to(0.02, { x: tempX + (5 + offset), y: tempY + (offset + 7) })
            .to(0.02, { x: tempX - (6 + offset), y: tempY + (offset + 7) })
            .repeat(5)
            .call(() => {

                this.x = tempX;
                this.y = tempY;

                this._isDou = false;

            })
            .start();
    }

    protected clickChangeIcon(): void {

        this._iconLoader.url = 'ui://733aoo45r3753l';
        cc.tween(this)
            .delay(0.06)
            .call(() => {

                this.data.isShow = false;
                this.visible = false;
                this._iconLoader.url = this._url;
            })
            .start();
    }


    protected onUpdate() {

        if (this.data.isShow === false) {

            this.data.y = 70;
            this.visible = false;
            return;
        }

        if (this._isDou) {
            return;
        }

        this.y += this._speed;

        if (this.y >= this._MaxY) {

            this.data.isShow = false;
        }
    }

    protected onDestroy() {


    }



}

