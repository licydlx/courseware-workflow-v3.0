
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
    private _gameFood: any = ['food_1', 'food_2', 'food_3', 'food_4'];

    private _gameOver: boolean = false;
    private _gameStart: boolean = false;

    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    // 1s *60 = 60
    private _gameTime: number = 0;

    private _interTime: number = 0;

    private _interTimeLimit: number = 0;

    /** 我自己的对象池 */
    private myFoodPools: any = [];

    private _dropSpeed: number = 2.5;

    private _playBtn: fgui.GButton;

    private _package: any;

    private timeText: fgui.GLabel;

    private _gameMusic: cc.AudioClip;
    private _wrongSound: cc.AudioClip;
    private _rightSound: cc.AudioClip;

    private _boySound: string;
    private _girlSound: string;


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

        this.timeText = this._view.getChild("n32").asLabel;
        this.timeText.text = this._gameTime + '';

        let boy = this._view.getChild("boy").asButton;
        this._boySound = fgui.UIPackage.getItemByURL(boy.sound).file;
        boy.on(fgui.Event.CLICK, this._clickElves, this);

        let girl = this._view.getChild("girl").asButton;
        this._girlSound = fgui.UIPackage.getItemByURL(girl.sound).file;
        girl.on(fgui.Event.CLICK, this._clickElves, this);

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
            clickTotal: 0,
        }
    }

    async init(data: any) {
        // 临时 model component json 配置加载
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { type, ae } = model.config;
        this._package = Package;

        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;

        let item = fgui.UIPackage.getItemByURL('ui://733aoo45r3754m');
        this._gameMusic = await loadResource(item.file, cc.AudioClip);

        item = fgui.UIPackage.getItemByURL('ui://733aoo45r3754p');
        this._wrongSound = await loadResource(item.file, cc.AudioClip);

        item = fgui.UIPackage.getItemByURL('ui://733aoo45r3754o');
        this._rightSound = await loadResource(item.file, cc.AudioClip);

        // 动效注册
        // for (let v in ae) {
        //     if (ae[v]) {
        //         this[v] = {};
        //         if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
        //         if (ae[v].pos) this[v].pos = ae[v].pos;
        //     }
        // }

        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }
    }

    protected update(dt: number): void {

        if (!this._gameStart || this._gameOver) {

            return;
        }

        let state: any = globalThis._.cloneDeep(this._state);
        if (state.gameTime >= 60 * 15) {
            this._interTime = 0;
            state.gameOver = true;
            state.gameTime = 0;
            if (state.clickTotal >= 5) {

                state.submitFeedback = this.feedbackType.RightFeed;
            } else {
                state.submitFeedback = this.feedbackType.WrongFeed;
            }
            this.updateState(state);
            return;
        }
        state.gameTime++;
        this._interTime++;
        if (state.gameTime <= 5 * 60) {

            this._dropSpeed = 2.5; // 2.5 ----> 60*1.5
            this._interTimeLimit = 60 * 1.5;

        } else if (state.gameTime > 5 * 60 && state.gameTime <= 10 * 60) {

            this._dropSpeed = 2.1; //2.0 ----> 60 * 0.6
            this._interTimeLimit = 60 * 0.7;

        } else if (state.gameTime > 10 * 60) {

            this._dropSpeed = 1.8; // 1.8 ----> 60 * 0.4
            this._interTimeLimit = 60 * 0.5;
        }
        if (this._interTime >= this._interTimeLimit) {
            this._interTime = 0;
            // 获取正确字母数组中的2个字母 可均衡获取0到length的随机整数。
            let randIndex: number = Math.floor(Math.random() * this._gameFood.length);
            this.foodDropAnimate(randIndex);
        }
        this.timeText.text = parseInt(state.gameTime / 60 + '') + 's';
        this.updateState(state);
    }

    private foodDropAnimate(index: number) {

        if (!this._gameStart || this._gameOver) {

            return;
        }
        console.log('==== length ====' + this.myFoodPools.length);

        let isHave = false;
        let food = null;
        for (let i = 0; i < this.myFoodPools.length; i++) {

            if (this.myFoodPools[i].data.index === index && !this.myFoodPools[i].data.isShow) {
                isHave = true;
                food = this.myFoodPools[i];
                food.data.isShow = true;
                food.data.total++;
                break;
            }
        }
        if (!isHave) {
            food = fgui.UIPackage.createObject(this._package, this._gameFood[index]).asButton;
            food.on(fgui.Event.CLICK, this._clickDropFood, this);

            let temp = { index: index, isShow: true, total: 1 };
            food.data = temp;
            this._view.addChild(food);
            this.myFoodPools.push(food);
        }
        // 1058 ----1693 Math.floor(Math.random()*(max-min+1)+min)
        let randPosX: number = Math.floor(Math.random() * (1693 - 1058 + 1) + 1058);
        food.x = randPosX;
        food.y = 100;
        food.visible = true;

        if (food.data.index === 0) {

            console.log('==== 蛋糕次数 ====' + food.data.total);
        } else if (food.data.index === 1) {
            console.log('==== 薯条次数 ====' + food.data.total);
        }

        cc.tween(food)
            .to(this._dropSpeed, { x: food.x, y: 970 })
            .call(() => {
                food.y = 100;
                food.visible = false;
                food.data.isShow = false;

            })
            .start();
    }

    private _clickDropFood(evt: any) {

        let obj: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        let btn = obj.asButton;
        // 是正确的
        if (btn.data.index === 0 || btn.data.index === 1) {

            //点击正确
            btn.icon = 'ui://733aoo45r3753l';
            btn.data.isShow = true;
            cc.tween(this)
                .delay(0.1)
                .call(() => {

                    for (let i = 0; i < this.myFoodPools.length; i++) {
                        if (this.myFoodPools[i] === btn) {
                            this.myFoodPools.splice(i, 1);
                            btn.removeFromParent();
                            break;
                        }
                    }
                })
                .start()
            cc.audioEngine.playEffect(this._rightSound, false);

            let state: any = globalThis._.cloneDeep(this._state);
            state.clickTotal++;
            this.updateState(state);
        } else {

            //点击错误
            cc.audioEngine.playEffect(this._wrongSound, false);

        }

    }

    private _clickElves(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        var btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        if (btn.name === 'boy') {

            state.rightSoundFile = [{ sex: 1, file: this._boySound }, { sex: 2, file: this._girlSound }];

        } else {

            state.rightSoundFile = [{ sex: 2, file: this._girlSound }, { sex: 1, file: this._boySound }];
        }

        console.log('===== click 1111  ====');

        state.elvesPlay = true;
        this.updateState(state);
    }

    private _clickStartPlay(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.play = true;
        state.gameStart = true;
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
                this.myFoodPools = [];
                cc.audioEngine.playMusic(this._gameMusic, true);
                // 第一个开始
                let randIndex: number = Math.floor(Math.random() * this._gameFood.length);
                this.foodDropAnimate(randIndex);

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
            } else {
                this._playBtn.visible = true;
            }
        }

        if (!globalThis._.isEqual(oldState.gameOver, state.gameOver)) {

            this._gameOver = state.gameOver;
            if (state.gameOver) {
                let boy = this._view.getChild("boy").asButton;
                let girl = this._view.getChild("girl").asButton;
                boy.touchable = false;
                girl.touchable = false;
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

            if (state.gameCanPlay) {

                this._playBtn.enabled = true;

            } else {

                this._playBtn.enabled = false;
            }
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

        } else {
            foodArr = this._girlFood;
        }
        this.playFoodShowAnimate(0, foodArr);

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
            if (curIndex >= rightSoundFile.length - 1) {
                this.disableForbidHandle();
                this._c2.selectedIndex = 0;
                let state: any = globalThis._.cloneDeep(this._state);
                state.elvesPlay = false;
                state.gameCanPlay = true;
                this.updateState(state);
                for (let i = 0; i < this._boyFood.length; i++) {
                    this._boyFood[i].alpha = 0;
                }
                for (let i = 0; i < this._girlFood.length; i++) {
                    this._girlFood[i].alpha = 0;
                }

            } else {

                curIndex++;
                this.playRightSound(curIndex, rightSoundFile);
            }

        });
    }

    playFoodShowAnimate(index: number, foodArr: any) {

        cc.tween(foodArr[index])
            .to(0.5, { alpha: 1 })
            .call(() => {
                index++;
                if (index < foodArr.length) {
                    console.log('=== index ===' + index)
                    this.playFoodShowAnimate(index, foodArr);
                }
            })
            .start()

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
            let state: any = globalThis._.cloneDeep(this._state);
            state.clickTotal = 0;
            state.submitFeedback = this.feedbackType.No;
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
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
