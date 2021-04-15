"use strict";
cc._RF.push(module, 'a13c8/eIVFLEpkoqHBFYILF', 'dragAnswer-model01-v1');
// prefabLibrary/models/dragAnswer/dragAnswer-model01-v1.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Descripttion:
 * @version:
 * @Author: ydlx
 * @Date: 2021-03-26 18:05:12
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-15 19:04:14
 */
var pointBelongArea = window['GlobalData'].utils.pointBelongArea;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var dragAnswer_model01_v1 = /** @class */ (function (_super) {
    __extends(dragAnswer_model01_v1, _super);
    function dragAnswer_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._grids = [];
        _this._moveArr = [];
        _this._state = {};
        return _this;
    }
    Object.defineProperty(dragAnswer_model01_v1.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (v) {
            this._state = v;
            this.updateUi(this._state);
            this.mergeState();
        },
        enumerable: false,
        configurable: true
    });
    dragAnswer_model01_v1.prototype.onLoad = function () {
        this._view.y = (fgui.GRoot.inst.height - this._view.height) / 2;
        fgui.GRoot.inst.addChild(this._view);
        this._dragBtn = this._view.getChild("dragBtn").asButton;
        this._dragBtn.draggable = true;
        this._dragBtn.on(fgui.Event.DRAG_START, this._onDragStart, this);
        this._dragBtn.on(fgui.Event.TOUCH_MOVE, this._onDragMove, this);
        this._dragBtn.on(fgui.Event.TOUCH_END, this._onDragEnd, this);
        this._btnBox = this._view.getChild("btnBox").asButton;
        this._btnBox.on(fgui.Event.DROP, this._onDragDrop, this);
        var aGroup = this._btnBox.getChild("grids").asGroup;
        this._dragIcon = this._view.getChild("dragIcon").asImage;
        this._test = this._view.getChild("test").asLoader;
        for (var i = 0; i < this._btnBox.numChildren; i++) {
            if (this._btnBox.getChildAt(i).group == aGroup) {
                var grid = this._btnBox.getChildAt(i).asLoader;
                this._grids.push(grid);
            }
        }
        // this._dragBtn.x = 1400;
        // this._dragBtn.y = 400;
        // this._btnBox.x = 1400;
        // this._btnBox.y = 400;
        var arr = [{ "x": 0, "y": 0 }, { "x": 1001.25, "y": 1031.25 }, { "x": 1001.25, "y": 1031.25 }, { "x": 1022, "y": 1013 }, { "x": 1050, "y": 992 }, { "x": 1097, "y": 956 }, { "x": 1164, "y": 904 }, { "x": 1206, "y": 866 }, { "x": 1254, "y": 829 }, { "x": 1301, "y": 788 }, { "x": 1320, "y": 761 }, { "x": 1341, "y": 731 }, { "x": 1356, "y": 701 }, { "x": 1365, "y": 683 }, { "x": 1369, "y": 660 }, { "x": 1373, "y": 647 }, { "x": 1374, "y": 632 }, { "x": 1374, "y": 619 }, { "x": 1374, "y": 609 }, { "x": 1374, "y": 604 }, { "x": 1374, "y": 596 }, { "x": 1374, "y": 593 }];
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
    };
    dragAnswer_model01_v1.prototype.init = function (data) {
        var Package = data.Package, GComponent = data.GComponent;
        this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
    };
    dragAnswer_model01_v1.prototype._onDragStart = function (evt) {
        var btn = fgui.GObject.cast(evt.currentTarget);
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
    };
    dragAnswer_model01_v1.prototype._agentTouchEnd = function (evt) {
        console.log(JSON.stringify(this._moveArr));
    };
    dragAnswer_model01_v1.prototype._onDragMove = function (evt, pos) {
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
    };
    dragAnswer_model01_v1.prototype._onDragEnd = function (evt) {
        console.log("_onDragEnd");
        console.log(evt.currentTarget);
        console.log("this._dragBtn:" + ("x:" + this._dragBtn.x + ";y:" + this._dragBtn.y));
        var a = this._dragBtn.localToGlobal(this._dragBtn.x, this._dragBtn.y);
        console.log(a);
        var b = this._btnBox.globalToLocal(a.x, a.y);
        console.log(b);
        console.log("this._btnBox:" + ("x:" + this._btnBox.x + ";y:" + this._btnBox.y));
        console.log(this._btnBox.width);
        console.log(this._btnBox.height);
        var test = pointBelongArea("rectangle", this._btnBox, this._dragBtn);
        console.log(test);
    };
    dragAnswer_model01_v1.prototype._onDragDrop = function (target, data) {
        console.log("_onDragDrop");
        console.log(target);
        console.log(data);
        // console.log(fgui.DragDropManager.inst.dragAgent)
        // console.log(data);
        // let grid:any = this._grids.find(v => v.url === null);
        // console.log(grid);
        // if (grid) {
        //     grid.url = data;
        // } 
    };
    // 获取状态
    dragAnswer_model01_v1.prototype.getState = function (data) {
        this.updateState(data);
    };
    // 更新状态层
    dragAnswer_model01_v1.prototype.updateState = function (curState) {
        if (globalThis._.isEqual(this._state, curState))
            return;
        this.state = curState;
    };
    // 更新ui层
    dragAnswer_model01_v1.prototype.updateUi = function (state) { };
    // 注册状态，及获取状态的方法
    dragAnswer_model01_v1.prototype.registerState = function () {
        if (window['GlobalData'].sample.registerState)
            window['GlobalData'].sample.registerState.call(this);
    };
    // 解除状态，及获取状态的方法
    dragAnswer_model01_v1.prototype.relieveState = function () {
        if (window['GlobalData'].sample.relieveState)
            window['GlobalData'].sample.relieveState.call(this);
    };
    // 本组件状态合并到全局
    dragAnswer_model01_v1.prototype.mergeState = function () {
        if (window['GlobalData'].sample.mergeState)
            window['GlobalData'].sample.mergeState.call(this);
    };
    dragAnswer_model01_v1.prototype.onEnable = function () {
        this.registerState();
    };
    dragAnswer_model01_v1.prototype.onDisable = function () {
        this.relieveState();
    };
    dragAnswer_model01_v1 = __decorate([
        ccclass
    ], dragAnswer_model01_v1);
    return dragAnswer_model01_v1;
}(cc.Component));
exports.default = dragAnswer_model01_v1;

cc._RF.pop();