/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-15 19:04:14
 */
const { pointBelongArea } = window['GlobalData'].utils;

const { ccclass, property } = cc._decorator;

@ccclass
export default class dragAnswer_model01_v1 extends cc.Component {
    private _view: fgui.GComponent;
    private _dragBtn: fgui.GButton;
    private _btnBox: fgui.GButton;
    private _dragIcon: fgui.GImage;
    private _grids = [];

    private _moveArr = [];
    private _test:fgui.GLoader;


    private _state = {}

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this._state = v;
        this.updateUi(this._state);
        this.mergeState();
    }

    onLoad() {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        fgui.GRoot.inst.addChild(this._view);

        this._dragBtn = this._view.getChild("dragBtn").asButton;
        this._dragBtn.draggable = true;
        this._dragBtn.on(fgui.Event.DRAG_START, this._onDragStart, this);
        this._dragBtn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        this._dragBtn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
         


        this._btnBox = this._view.getChild("btnBox").asButton;
        this._btnBox.on(fgui.Event.DROP, this._onDragDrop, this);
        let aGroup = this._btnBox.getChild("grids").asGroup;

        this._dragIcon = this._view.getChild("dragIcon").asImage;
        this._test = this._view.getChild("test").asLoader;

        for (let i = 0; i < this._btnBox.numChildren; i++) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                let grid: fgui.GLoader = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }

        // this._dragBtn.x = 1400;
        // this._dragBtn.y = 400;

        // this._btnBox.x = 1400;
        // this._btnBox.y = 400;

        let arr = [{"x":0,"y":0},{"x":1001.25,"y":1031.25},{"x":1001.25,"y":1031.25},{"x":1022,"y":1013},{"x":1050,"y":992},{"x":1097,"y":956},{"x":1164,"y":904},{"x":1206,"y":866},{"x":1254,"y":829},{"x":1301,"y":788},{"x":1320,"y":761},{"x":1341,"y":731},{"x":1356,"y":701},{"x":1365,"y":683},{"x":1369,"y":660},{"x":1373,"y":647},{"x":1374,"y":632},{"x":1374,"y":619},{"x":1374,"y":609},{"x":1374,"y":604},{"x":1374,"y":596},{"x":1374,"y":593}]
        // this._dragBtn.stopDrag();
        // // console.log(this._grids);
        // fgui.DragDropManager.inst.startDrag(this._dragBtn, this._dragBtn.icon, this._dragBtn.icon);

        // let tag = 0;
        // // 以秒为单位的时间间隔
        // var interval = .5;
        // // 重复次数
        // var repeat = arr.length - 1;
        // // 开始延时
        // var delay = 1;
        // this.schedule(()=> {
        //     // this._dragIcon.x = arr[tag].x;
        //     // this._dragIcon.y = arr[tag].y;
        //     // let a = this._dragIcon.localToGlobal(arr[tag].x,arr[tag].y);
        //     // let b = this._dragIcon.globalToLocal(arr[tag].x,arr[tag].y);
        //     // console.log("第" + tag)
        //     // console.log("x:" + arr[tag].x + ";y:" + arr[tag].y)
        //     // console.log("ToGlobal")
        //     // console.log("x:" + a.x + ";y:" + a.y)
        //     // console.log("ToLocal")
        //     // console.log("x:" + b.x + ";y:" + b.y)

        //     this._dragIcon.x = arr[tag].x;
        //     this._dragIcon.y = arr[tag].y;
        //     // console.log("第" + tag)
        //     // let test:any = globalThis._.cloneDeep(this._dragIcon);
            
        //     tag++;
        // }, interval, repeat, delay);

        // this._dragIcon.x = 1374;
        // this._dragIcon.y = 593;

        // let btn:fgui.GObject = this._view.getChild("dragBtn");
        // console.log(btn)

        // let a:cc.Vec2 = btn.localToGlobal(btn.x,btn.y);
        // console.log(a)

        // let b = btn.globalToLocal(1838,2004)
        // console.log(b)

        console.log(this._btnBox);
    }

    init(data: any) {
        let { Package, GComponent } = data;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
    }

    private _onDragStart(evt: fgui.Event): void {
        let btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        // 取消对原目标的拖动，换成一个替代品
        // btn.stopDrag();
        // fgui.DragDropManager.inst.startDrag(btn, btn.icon,btn.icon);
        // this._test.startDrag();
        // fgui.DragDropManager.inst.startDrag(this._test, this._test.icon, this._test.icon);
        // if (evt) {
        //     let btn: fgui.GObject = fgui.GObject.cast(evt.currentTarget);
        //     // 取消对原目标的拖动，换成一个替代品
        //     btn.stopDrag();
        //     fgui.DragDropManager.inst.startDrag(btn, btn.icon, btn.icon); 
        // } else {
        //     let btn:fgui.GObject = this._view.getChild("dragBtn");
        //     btn.stopDrag();
        //     fgui.DragDropManager.inst.startDrag(btn, btn.icon, btn.icon); 
        // }

        // fgui.DragDropManager.inst.dragAgent.on(fgui.Event.TOUCH_END, this._agentTouchEnd, this);
        // console.dir(fgui.DragDropManager.inst.dragAgent)
        // fgui.DragDropManager.inst.dragAgent.x = 1374;
        // fgui.DragDropManager.inst.dragAgent.y = 593;
        // let a:cc.Vec2 = fgui.DragDropManager.inst.dragAgent.localToGlobal(fgui.DragDropManager.inst.dragAgent.x,fgui.DragDropManager.inst.dragAgent.y);
        // let b = this._dragIcon.globalToLocal(a.x,a.y);
        // console.log({x:fgui.DragDropManager.inst.dragAgent.x,y:fgui.DragDropManager.inst.dragAgent.y});
        // console.log(a);
        // console.log(b);
        // this._dragIcon.x = b.x - 98;
        // this._dragIcon.y = b.y - 72;
        // console.log(fgui.DragDropManager.inst.dragAgent)
        // console.log(this._dragBtn)
        // console.log(this._dragIcon)
    }

    private _agentTouchEnd(evt: fgui.Event): void {
        console.log(JSON.stringify(this._moveArr));
    }

    private _onDragMove(evt: fgui.Event, pos: any): void {
        // console.log("x:" + fgui.DragDropManager.inst)
        
        // console.log(fgui.DragDropManager.inst.dragging);
        // let a:cc.Vec2 = fgui.DragDropManager.inst.dragAgent.localToGlobal(fgui.DragDropManager.inst.dragAgent.x,fgui.DragDropManager.inst.dragAgent.y);
        // this._moveArr.push({x:fgui.DragDropManager.inst.dragAgent.x,y:fgui.DragDropManager.inst.dragAgent.y});
        
        // console.log("_onDragMove");
        // console.log(evt);
        // let t:any = globalThis._.cloneDeep(evt.pos);
        // console.log(`{x:${t.x},y:${t.y}}`);
        // if (evt) {
        //     console.log(`{x:${fgui.DragDropManager.inst.dragAgent.x},y:${fgui.DragDropManager.inst.dragAgent.y}}`);
        // } else {
        //     fgui.DragDropManager.inst.dragAgent.x = pos.x;
        //     fgui.DragDropManager.inst.dragAgent.y = pos.y; 

        //     let test:any = globalThis._.cloneDeep(fgui.DragDropManager.inst.dragAgent);
        //     console.log(test);
        // }

        // console.log(evt)
        // this._dragBtn.x = evt.pos.x;
        // this._dragBtn.y = evt.pos.y;
        // fgui.DragDropManager.inst.dragAgent.x = evt.pos.x;
        // fgui.DragDropManager.inst.dragAgent.y = evt.pos.y;
    }

    private _onDragEnd(evt: fgui.Event): void{
        console.log("_onDragEnd");
        console.log(evt.currentTarget);

        console.log("this._dragBtn:" + `x:${this._dragBtn.x};y:${this._dragBtn.y}`);
        
        let a:cc.Vec2 = this._dragBtn.localToGlobal(this._dragBtn.x,this._dragBtn.y);
        console.log(a)

        let b = this._btnBox.globalToLocal(a.x,a.y)
        console.log(b)
        console.log("this._btnBox:" + `x:${this._btnBox.x};y:${this._btnBox.y}`);
        console.log(this._btnBox.width);
        console.log(this._btnBox.height);
        
        let test = pointBelongArea("rectangle",this._btnBox,this._dragBtn);
        console.log(test);
    }
    

    private _onDragDrop(target: fgui.GComponent, data: any): void {
        console.log("_onDragDrop")
        console.log(target)
        console.log(data)

        // console.log(fgui.DragDropManager.inst.dragAgent)
        // console.log(data);
        // let grid:any = this._grids.find(v => v.url === null);
        // console.log(grid);
        // if (grid) {
        //     grid.url = data;
        // } 
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
    updateUi(state: any) { }

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
    }
}
