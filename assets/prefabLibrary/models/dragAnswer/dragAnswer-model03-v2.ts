import DragAnswerModel03Base from "./DragAnswerModel03Base";

/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-17 15:25:58
 */
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;
const { pointBelongArea } = window['GlobalData'].utils;

const { ccclass, property } = cc._decorator;

@ccclass
export default class dragAnswer_model03_v2 extends cc.Component {
    private _worldRoot: cc.Node;
    private _c1: fgui.Controller;
    private _c2: fgui.Controller;

    private _dragBtn: fgui.GButton;
    private _btnBox: fgui.GButton;

    private dragBox: fgui.GComponent;
    private dropBox: fgui.GComponent;

    private _submit: fgui.GButton;
    private _title: fgui.GButton;
    private _titleTrigger: fgui.GLoader;

    protected _view: fgui.GComponent;

    private _packName: string;
    // fairygui 组件
    private handleGuide: any;
    private lineBlink: any;

    // 远程动态组件
    private feedback: any;

    /** 拖拽物数组 */
    private _colliderBox = [];
    /** 放置区数组 */
    private _collideredBox = [];

    private _cache = {};
    private _scheduleTime = .3;
    private _dragging = false;

    private _answer;
    private _roleUrl;
    private _gameType = 0;
    /** 角色数量 */
    private _roleCount = 0;

    public pageData: any;

    private _state: any = {};

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;
        this.mergeState();
    }


    onLoad() {
        let s = this;
        this._worldRoot = cc.find("Canvas").parent;

        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        this._view.x = (fgui.GRoot.inst.width - this._view.width) / 2;
        fgui.GRoot.inst.addChild(this._view);

        this._c1 = this._view.getController("c1");
        this._c2 = this._view.getController("c2");
        // 臨時
        // bug 初始设置不播放不生效
        if (this._c2) {
            this._c2.selectedIndex = 1;
            this._c2.selectedIndex = 0;
        }

        s.createUI();
        s.addEvent();

        // 初始化state
        this._state = {
            drag: "end",
            getDropArr: [],
            collider: s._cache["colliderBox"].map((v: any) => v),//拖拽物的位置数组
            colliderIndex: null,//当前拖拽物在数组内的索引
            collidered: this._cache["collideredBox"].map((v: any) => v),//二维数组，存放每个放置区对应的被放置元素
            dropArr: [],
            title: false,
            submit: false,
            answer: false
        }

        // 临时 禁止操作期间 切页
        this.disableForbidHandle();
    }

    createUI() {
        let s = this;
        this._submit = this._view.getChild("submit").asButton;
        if (this._submit) this._submit.on(fgui.Event.CLICK, this._clickSubmit, this);

        this._title = this._view.getChild("title").asButton;
        this._title.alpha = 1;

        this._titleTrigger = this._view.getChild("titleTrigger").asLoader;
        if (this._titleTrigger) this._titleTrigger.on(fgui.Event.CLICK, this._clickTitle, this);

        let colliderGroup = this._view.getChild("colliderBox").asGroup;
        let collideredGroup = this._view.getChild("collideredBox").asGroup;

        s._cache["colliderBox"] = [];
        for (let i = 0; i < this._view.numChildren; i++) {
            if (s._view.getChildAt(i).group == colliderGroup) {
                let btn: fgui.GButton = this._view.getChildAt(i).asButton;
                s._cache['colliderBox'].push({ x: btn.x, y: btn.y, collideredIndex: -1, roleType: btn.data });
                btn['collideredIndex'] = -1;
                btn.draggable = true;
                btn.on(fgui.Event.TOUCH_BEGIN, this._onDragStart, this);
                btn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
                btn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
                this._colliderBox.push(btn);
            }
        }
        // console.log('this._colliderBox', s._colliderBox);

        s._cache["collideredBox"] = [];
        for (let i = 0; i < this._view.numChildren; i++) {
            if (this._view.getChildAt(i).group == collideredGroup) {
                let btn: fgui.GComponent = this._view.getChildAt(i).asCom;
                s._cache['collideredBox'].push([]);
                this._collideredBox.push(btn);
            }
        }
        // console.log('this._collideredBox', s._collideredBox);

    }

    addEvent() {
        // let s = this;
        // s._submitBtn.on(fgui.Event.CLICK, s._clickSubmit, s);
        // s._readTitleBtn.on(fgui.Event.CLICK, s._clickTitle, s);
    }

    async init(data: any) {
        let s = this;
        s.pageData = data;
        let { pathConfig, model, components } = data;
        s._packName = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { answer, roleUrl, ae, gameType, roleCount } = model.config;

        if (model.uiPath) {
            GComponent = model.uiPath;
            this._view = fgui.UIPackage.createObject(s._packName, GComponent).asCom;
        }

        /* s._readTitleBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'TitleCom').asCom;

        (s._readTitleBtn.getChild('title') as fgui.GLoader).url = fgui.UIPackage.createObject('t4-trialClass-01', 'title_3').asImage.resourceURL;
        s._readTitleBtn.x = 20;
        s._readTitleBtn.y = 50;
        this._view.addChild(s._readTitleBtn);


        s._submitBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'SubmitBtn').asCom;
        s._submitBtn.x = 1676;
        s._submitBtn.y = 806;
        this._view.addChild(s._submitBtn); */

        if (model.config) {
            if (answer) s._answer = answer;
            if (roleUrl) s._roleUrl = roleUrl;
            if (gameType) s._gameType = gameType;
            if (roleCount) s._roleCount = roleCount;
            // 动效注册
            if (ae) {
                for (let v in ae) {
                    if (ae[v]) {
                        this[v] = {};
                        if (ae[v].component) this[v].component = fgui.UIPackage.createObject(s._packName, ae[v].component).asCom;
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

    getOriginValue(v: any) {
        return {
            x: v.x,
            y: v.y
        }
    }

    // private _curDragIcon: cc.Node = null;
    // private _offsetPos: cc.Vec2 = new cc.Vec2();
    private _onDragStart(evt: fgui.Event): void {
        let s = this;
        evt.captureTouch();
        s.playSound('ui://rokozlzwkxox11');
        let collider = fgui.GObject.cast(evt.currentTarget);
        s._view.setChildIndex(collider, s._view.numChildren - 2);
        let colliderIndex = s._colliderBox.findIndex(v => v == collider);

        let state: any = globalThis._.cloneDeep(s._state);
        let collideredIndex = state.collider[colliderIndex].collideredIndex;
        if (collideredIndex != -1) {
            let index = state.collidered.findIndex(v => v.name == collider.name)
            state.collidered[collideredIndex].splice(index, 1);
            // state.collider[colliderIndex].collideredIndex = -1;
        }

        state.colliderIndex = colliderIndex;
        s.updateState(state);
        s.showTips(true);
    }

    private _onDragMove(evt: fgui.Event): void {
        let s = this;
        s._dragging = true;
    }

    // private dropArr = [];
    private _onDragEnd(evt: fgui.Event): void {
        let s = this;
        s.showTips(false);
        s.playSound('ui://rokozlzwku3e2t');
        if (!this._dragging) return;
        this._dragging = false;

        let collider: any = fgui.GObject.cast(evt.currentTarget);
        let colliderIndex: number = this._colliderBox.findIndex((v: any) => v == collider);

        let arr: any = [];
        let collidered: any;
        this._collideredBox.forEach((v: any, i: any) => {
            // if (this._belongArea(collider, v, 500) == true) arr.push(v);
            if (s.isCollisionWithRect(v, collider)) arr.push(v);
        });


        arr.forEach((v: any, i: any) => {
            if (i == 0) {
                collidered = v;
            } else {
                let pd = this._getDistance(collider, arr[i - 1]);
                let cd = this._getDistance(collider, v);
                if (cd < pd) collidered = v;
            }
        });

        // 放置区索引，定位到放入了那个放置区
        let collideredIndex: number = this._collideredBox.findIndex((v: any) => v == collidered);
        console.log('collideredIndex = ', collideredIndex);


        let state: any = globalThis._.cloneDeep(this._state);
        console.log('this state = ', this._state);
        console.log('clone state = ', state);

        let dropArr = state.collidered[collideredIndex];

        let colliderName: string = collider.name;
        let matchCollideredIndex = -1;
        let matchCollinderArr = [];

        if (collideredIndex != -1) {
            let collideredName: string = collidered.name;
            console.log('colliderName = ', colliderName);
            console.log('collideredName = ', collideredName);
            // 如果头和脚放置位置不匹配则重置位置 head dropBox1 || foot dropBox2
            let matchFlag = colliderName.indexOf('head') > -1 && collideredName.indexOf('dropBox1') > - 1 || colliderName.indexOf('foot') > -1 && collideredName.indexOf('dropBox2') > - 1;
            console.log('matchFlag ', matchFlag);

            // 1.拿到当前放置区对应的放置区 2.获取对应放置区内的元素 3.判断元素的namee是否为相同role
            if (collideredIndex < s._roleCount) {
                matchCollideredIndex = collideredIndex + s._roleCount;
            } else {
                matchCollideredIndex = collideredIndex - s._roleCount;
            }
            matchCollinderArr = state.collidered[matchCollideredIndex];

            if (s._gameType == 1) {
                // 修改需求，已组合好的可以替换
                /* if ((!matchFlag || dropArr.length == 0) && (!matchFlag || (matchCollinderArr.length > 0 && !(matchCollinderArr[0].roleType == collider.data)))) {
                    collideredIndex = -1;
                } */
                // dropArr.length> 0 && 
                if ((!matchFlag || (dropArr.length == 0 && matchCollinderArr.length > 0 && !(matchCollinderArr[0].roleType == collider.data)))) {
                    collideredIndex = -1;
                }
            } else if (s._gameType == 2) {
                if (!matchFlag) {
                    collideredIndex = -1;
                }
            }
        }
        collider['collideredIndex'] = collideredIndex;

        // 1.重置位置 
        // collideredIndex == -1 || 头和脚放置位置不匹配 || 头和脚无法组合 -> 重置回初始位置
        // 2.放入放置区
        if (collideredIndex == -1) {
            // reset
            console.log('reset');

            state.collider[colliderIndex] = {
                x: s._cache["colliderBox"][colliderIndex].x,
                y: s._cache["colliderBox"][colliderIndex].y,
                collideredIndex: -1,
                roleType: state.collider[colliderIndex].roleType
            }
        } else {
            // 如果放置区已有元素
            if (dropArr.length == 1) {
                // 移除原有的元素
                let existColliderData = dropArr.splice(0, 1);
                console.log(existColliderData[0]);

                let existColliderIndex: number = this._colliderBox.findIndex((v: any, i: number) => v.name == existColliderData[0].name);
                state.collider[existColliderIndex] = {
                    x: s._cache["colliderBox"][existColliderIndex].x,
                    y: s._cache["colliderBox"][existColliderIndex].y,
                    collideredIndex: -1,
                    roleType: state.collider[existColliderIndex].roleType
                }

                // 修改需求：可以替换已组合好的元素
                if (s._gameType == 1 && matchCollinderArr.length > 0) {
                    let matchExistColliderIndex = this._colliderBox.findIndex((v: any, i: number) => v.name == matchCollinderArr[0].name);
                    state.collidered[state.collider[matchExistColliderIndex].collideredIndex] = [];
                    state.collider[matchExistColliderIndex] = {
                        x: s._cache["colliderBox"][matchExistColliderIndex].x,
                        y: s._cache["colliderBox"][matchExistColliderIndex].y,
                        collideredIndex: -1,
                        roleType: state.collider[matchExistColliderIndex].roleType
                    }
                }
            }
            dropArr.push({
                'name': colliderName,
                roleType: collider.data,
                collideredIndex: collideredIndex
            });
            console.log('pushhh', dropArr);

            state.collider[colliderIndex] = {
                x: s._collideredBox[collideredIndex].x,
                y: s._collideredBox[collideredIndex].y,
                collideredIndex: collideredIndex,
                roleType: state.collider[collideredIndex].roleType
            }
            state.collidered[collideredIndex] = dropArr;
        }
        console.log('state.collidered = ', state.collidered);


        state.drag = "end";
        state.submit = false;
        state.colliderIndex = colliderIndex;

        s.updateState(state);
        console.log('------------------------------------------------');

    }

    private showTips(isShow: boolean) {
        let s = this;
        let colliderIndex: number = s._state.colliderIndex;
        let colliderName: string = s._colliderBox[colliderIndex].name;

        if (isShow) {
            let filterTag: string;
            if (colliderName.indexOf('head') > -1) {
                filterTag = 'dropBox1';
            } else {
                filterTag = 'dropBox2';
            }
            s._collideredBox.forEach((v: fgui.GComboBox) => {
                if (v.name.indexOf(filterTag) > -1) {
                    v.getController('c1').selectedIndex = 1;
                } else {
                    v.getController('c1').selectedIndex = 0;
                }
            });
        } else {
            s._collideredBox.forEach((v: fgui.GComboBox) => {
                v.getController('c1').selectedIndex = 0;
            });
        }

    }

    private _getDistance(self: any, area: any) {
        let width = (self.x + self.width / 2) - (area.x + area.width / 2);
        let height = (self.y + self.height / 2) - (area.y + area.height / 2);
        let distance = Math.sqrt(width * width + height * height);
        return distance;
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

    private _belongArea(self: any, area: any, gap: number = 10) {
        let width = (self.x + self.width / 2) - (area.x + area.width / 2);
        let height = (self.y + self.height / 2) - (area.y + area.height / 2);
        let distance = Math.sqrt(width * width + height * height);
        return distance < gap;
    }

    private _clickTitle(evt: any) {
        let state: any = globalThis._.cloneDeep(this._state);
        state.title = true;
        this.updateState(state);
    }

    private async _clickSubmit(evt: any) {
        let s = this;
        let state: any = globalThis._.cloneDeep(this._state);
        let userAnswer = {
            role1: 0,
            role2: 0
        };
        let collideredCount = 0;
        state.collidered.forEach((v, i) => {
            if (v.length > 0) collideredCount++;
            if (i < (state.collidered.length / 2) >> 0) {
                let topCollidered = v;
                let bottomCollidered = state.collidered[i + s._roleCount];
                if (s._gameType == 1) {
                    if (v.length > 0 && bottomCollidered.length > 0 && v[0].roleType == bottomCollidered[0].roleType) {
                        userAnswer[v[0].roleType]++;
                    }
                } else if (s._gameType == 2) {
                    if (v.length > 0 && bottomCollidered.length > 0) {
                        userAnswer[bottomCollidered[0].roleType]++;
                    }
                }

            }
        })
        console.log(userAnswer);
        console.log(s._answer);

        state.answer = JSON.stringify(userAnswer) === JSON.stringify(s._answer) && collideredCount == (s._answer.role1 + s._answer.role2) * 2;
        state.submit = true;
        this.updateState(state);


    }

    private showEndAnim(callbackFun: Function = null, callbackThis: any = null): void {
        let s = this;
        s.state.collider.forEach((v, i) => {
            // if (v['collideredIndex'] == -1) {
            s._colliderBox[i].visible = false;
            // }
        });
        s._view.touchable = false;
        s.state.collidered.forEach((v, i) => {
            if (i < (s.state.collidered.length / 2) >> 0 && v.length > 0) {
                let bottomCollidered = s.state.collidered[i + s._roleCount];
                let roleUrl = s._roleUrl[bottomCollidered[0].roleType];


                // if (s._gameType === 1) {
                let role = fgui.UIPackage.createObject(s._packName, 'Combination').asCom;
                (role.getChild('n2') as fgui.GLoader).url = roleUrl;
                (role.getChild('smoke') as fgui.GLoader3D).animationName = 'smoke_ani';
                role.setPivot(0.5, 0.5, true);
                if (s._gameType === 1) {

                    role.x = s._collideredBox[i].x + s._collideredBox[i].width / 2;
                    role.y = s._collideredBox[i].y + 200;
                } else if (s._gameType === 2) {
                    role.x = s._collideredBox[i].x;
                    role.y = s._collideredBox[i].y + 100;
                }
                role.alpha = 0;
                s._view.addChild(role);

                let mask = s._view.getChild('mask');
                mask.visible = true;

                cc.tween(role).to(1.5, {
                    alpha: 1
                }).call(() => {
                    if (callbackFun) {
                        callbackFun.call(callbackThis);
                        callbackFun = null;
                        callbackThis = null;
                    }
                }).start();
                /* } else if (s._gameType === 2) {
                    let role = fgui.UIPackage.createObjectFromURL(roleUrl);
                    role.setPivot(0.5, 0.5, true);
                    role.x = s._collideredBox[i].x;
                    role.y = s._collideredBox[i].y + 100;
                    role.alpha = 0;
                    s._view.addChild(role);

                    if (s.pageData.model.uiPath == 'Question4Page01') {
                        role.scaleX = role.scaleY = 0.7;
                    }
                    let offsetY = s.pageData.model.uiPath == 'Question4Page01' ? 220 : 350;
                    cc.tween(role).to(1, {
                        alpha: 1
                    }).delay(0.5).to(1.5, {
                        y: role.y + offsetY
                    }).call(() => {
                        if (callbackFun) {
                            callbackFun.call(callbackThis);
                            callbackFun = null;
                            callbackThis = null;
                        }
                    }).start();
                } */

            }
        });
    }

    // 获取状态
    getState(data: any) {
        this.updateState(data);
    }

    // 更新状态层
    updateState(curState: any) {
        // if (globalThis._.isEqual(this._state, curState)) return
        this.state = curState;
    }


    // 更新ui层
    updateUi(oldState: any, state: any) {
        let s = this;
        // console.log('updateUi = ', state);

        if (state.drag == "move") {
            if (s._view.getChildIndex(this._colliderBox[state.colliderIndex]) != s._view.numChildren - 2) {
                s._view.setChildIndex(this._colliderBox[state.colliderIndex], s._view.numChildren - 2);
            }
            this._colliderBox[state.colliderIndex].x = state.collider[state.colliderIndex].x;
            this._colliderBox[state.colliderIndex].y = state.collider[state.colliderIndex].y;

            // state.curDragIcon.x = state.curDragIconsPos.x;
            // state.curDragIcon.y = state.curDragIconsPos.y;
        }

        if (state.drag == "end") {
            // if (!globalThis._.isEqual(oldState.collider, state.collider)) {
            // console.log('endddddddddd update ui', state);

            for (let i = 0; i < state.collider.length; i++) {
                this._colliderBox[i].x = state.collider[i].x;
                this._colliderBox[i].y = state.collider[i].y;
            }
            // }
            if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                // console.log('submittttttt');

                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    let nv: any = this._colliderBox.map((v: any) => { return { "x": v.x, "y": v.y } });
                    let bool: boolean = s._cache["colliderBox"].every((v: any, i: any) => v.x == nv[i].x && v.y == nv[i].y);
                    if (bool) {
                        s.handTips1(s._colliderBox[0], s._collideredBox[0], s._gameType === 1);
                        return;
                    }
                    if (state.answer) {
                        s.showEndAnim(() => {
                            this.answerFeedback(state.answer);
                        });
                    } else {
                        this.answerFeedback(state.answer);
                    }
                }
            }

            if (!globalThis._.isEqual(oldState.title, state.title)) {
                this.playTitle(state.title);
            }

            /* if (!globalThis._.isEqual(oldState.submit, state.submit)) {
                if (state.submit) {
                    // 根据collider 初始位置 判断 是否被操作过
                    let nv: any = this._colliderBox.map((v: any) => { return { "x": v.x, "y": v.y } });
                    let bool: boolean = s._cache["colliderBox"].every((v: any, i: any) => v.x == nv[i].x && v.y == nv[i].y);
                    bool ? this.onHandleGuide() : this.onFlicker(state.answer);
                }
            } */

        }
    }

    async playTitle(bool: boolean) {
        this._c2.selectedIndex = bool ? 1 : 0;
        this._title.alpha = 1;

        if (bool) {
            cc.audioEngine.stopAll();
            this.forbidHandle();

            let item = fgui.UIPackage.getItemByURL(this._title["_sound"]);
            let audio: cc.AudioClip = await loadResource(item.file, cc.AudioClip);
            let audioId = cc.audioEngine.play(audio, false, 1);
            cc.audioEngine.setFinishCallback(audioId, () => {
                this._c2.selectedIndex = 0;
                let state: any = globalThis._.cloneDeep(this._state);
                state.title = false;
                this.updateState(state);
            });
        } else {
            this.disableForbidHandle();
        }
    }

    playSound(url: string) {
        let s = this;
        let item = fgui.UIPackage.getItemByURL(url);
        loadResource(item.file, cc.AudioClip).then((audio) => {
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

    handTips1(fromObj: fgui.GObject, toObj: fgui.GObject, center: boolean = true) {
        let s = this;
        let hand = fgui.UIPackage.createObjectFromURL('ui://rokozlzwku3e3f');
        s._view.addChild(hand);
        hand.x = fromObj.x + (center ? fromObj.width / 2 : 0);
        hand.y = fromObj.y + (center ? fromObj.height / 2 : 0);
        cc.tween(hand).to(2, {
            x: toObj.x + (center ? toObj.width / 2 : 0),
            y: toObj.y + (center ? toObj.height / 2 : 0)
        }).call(() => {
            s._view.removeChild(hand);
            hand = null;
            let state: any = globalThis._.cloneDeep(this._state);
            state.submit = false;
            this.updateState(state)
        }).start();
    }

    // TS
    drawLineOfDashes(g: cc.Graphics, from: cc.Vec2, to: cc.Vec2, stroke: boolean = true, length: number = 8, interval: number = 4): void {
        if (g) {
            let off = to.sub(from);
            let dir = off.normalize();
            let dis = off.mag();
            let delta = dir.mul(length + interval);
            let delta1 = dir.mul(length);
            let n = Math.floor(dis / (length + interval));
            for (let i = 0; i < n; ++i) {
                let start = from.add(delta.mul(i));
                g.moveTo(start.x, start.y);
                let end = start.add(delta1);
                g.lineTo(end.x, end.y);
            }
            let start1 = from.add(delta.mul(n));
            g.moveTo(start1.x, start1.y);
            if (length < dis - (length + interval) * n) {
                let end = start1.add(delta1);
                g.lineTo(end.x, end.y);
            } else {
                g.lineTo(to.x, to.y);
            }
            if (stroke) g.stroke();
        }
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
        let s = this;
        if (s._dragging) {
            let state: any = globalThis._.cloneDeep(s._state);
            state.drag = "move";
            state.collider[state.colliderIndex] = {
                x: this._colliderBox[state.colliderIndex].x,
                y: this._colliderBox[state.colliderIndex].y,
                collideredIndex: state.collider[state.colliderIndex].collideredIndex,
                roleType: state.collider[state.colliderIndex].roleType
            };
            s.updateState(state);
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
        this.schedule(this.dragSchedule, this._scheduleTime);
    }

    onDisable() {
        this.relieveState();
        cc.audioEngine.stopAll();
    }
}
