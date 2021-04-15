
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/models/dragAnswer/dragAnswer-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcbW9kZWxzXFxkcmFnQW5zd2VyXFxkcmFnQW5zd2VyLW1vZGVsMDEtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNLLElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLGdCQUEvQixDQUFnQztBQUVqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQW1QQztRQTlPVyxZQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVosY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUlkLFlBQU0sR0FBRyxFQUFFLENBQUE7O0lBd092QixDQUFDO0lBdE9HLHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsQ0FBTTtZQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDOzs7T0FOQTtJQVFELHNDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxR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LFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsNENBQVksR0FBWjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxhQUFhO0lBQ2IsMENBQVUsR0FBVjtRQUNJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFsUGdCLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBbVB6QztJQUFELDRCQUFDO0NBblBELEFBbVBDLENBblBrRCxFQUFFLENBQUMsU0FBUyxHQW1QOUQ7a0JBblBvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTAzLTI2IDE4OjA1OjEyXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTE1IDE5OjA0OjE0XHJcbiAqL1xyXG5jb25zdCB7IHBvaW50QmVsb25nQXJlYSB9ID0gd2luZG93WydHbG9iYWxEYXRhJ10udXRpbHM7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZHJhZ0Fuc3dlcl9tb2RlbDAxX3YxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3ZpZXc6IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX2RyYWdCdG46IGZndWkuR0J1dHRvbjtcclxuICAgIHByaXZhdGUgX2J0bkJveDogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ0ljb246IGZndWkuR0ltYWdlO1xyXG4gICAgcHJpdmF0ZSBfZ3JpZHMgPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9tb3ZlQXJyID0gW107XHJcbiAgICBwcml2YXRlIF90ZXN0OmZndWkuR0xvYWRlcjtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSB7fVxyXG5cclxuICAgIGdldCBzdGF0ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdGUodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVWkodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHRoaXMubWVyZ2VTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLl92aWV3LnkgPSAoZmd1aS5HUm9vdC5pbnN0LmhlaWdodCAtIHRoaXMuX3ZpZXcuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuX3ZpZXcpO1xyXG5cclxuICAgICAgICB0aGlzLl9kcmFnQnRuID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImRyYWdCdG5cIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5fZHJhZ0J0bi5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4ub24oZmd1aS5FdmVudC5EUkFHX1NUQVJULCB0aGlzLl9vbkRyYWdTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0J0bi5vbihmZ3VpLkV2ZW50LlRPVUNIX01PVkUsIHRoaXMuX29uRHJhZ01vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2RyYWdCdG4ub24oZmd1aS5FdmVudC5UT1VDSF9FTkQsIHRoaXMuX29uRHJhZ0VuZCwgdGhpcyk7XHJcbiAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5fYnRuQm94ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImJ0bkJveFwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLl9idG5Cb3gub24oZmd1aS5FdmVudC5EUk9QLCB0aGlzLl9vbkRyYWdEcm9wLCB0aGlzKTtcclxuICAgICAgICBsZXQgYUdyb3VwID0gdGhpcy5fYnRuQm94LmdldENoaWxkKFwiZ3JpZHNcIikuYXNHcm91cDtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhZ0ljb24gPSB0aGlzLl92aWV3LmdldENoaWxkKFwiZHJhZ0ljb25cIikuYXNJbWFnZTtcclxuICAgICAgICB0aGlzLl90ZXN0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcInRlc3RcIikuYXNMb2FkZXI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYnRuQm94Lm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmdyb3VwID09IGFHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyaWQ6IGZndWkuR0xvYWRlciA9IHRoaXMuX2J0bkJveC5nZXRDaGlsZEF0KGkpLmFzTG9hZGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JpZHMucHVzaChncmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5fZHJhZ0J0bi54ID0gMTQwMDtcclxuICAgICAgICAvLyB0aGlzLl9kcmFnQnRuLnkgPSA0MDA7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuX2J0bkJveC54ID0gMTQwMDtcclxuICAgICAgICAvLyB0aGlzLl9idG5Cb3gueSA9IDQwMDtcclxuXHJcbiAgICAgICAgbGV0IGFyciA9IFt7XCJ4XCI6MCxcInlcIjowfSx7XCJ4XCI6MTAwMS4yNSxcInlcIjoxMDMxLjI1fSx7XCJ4XCI6MTAwMS4yNSxcInlcIjoxMDMxLjI1fSx7XCJ4XCI6MTAyMixcInlcIjoxMDEzfSx7XCJ4XCI6MTA1MCxcInlcIjo5OTJ9LHtcInhcIjoxMDk3LFwieVwiOjk1Nn0se1wieFwiOjExNjQsXCJ5XCI6OTA0fSx7XCJ4XCI6MTIwNixcInlcIjo4NjZ9LHtcInhcIjoxMjU0LFwieVwiOjgyOX0se1wieFwiOjEzMDEsXCJ5XCI6Nzg4fSx7XCJ4XCI6MTMyMCxcInlcIjo3NjF9LHtcInhcIjoxMzQxLFwieVwiOjczMX0se1wieFwiOjEzNTYsXCJ5XCI6NzAxfSx7XCJ4XCI6MTM2NSxcInlcIjo2ODN9LHtcInhcIjoxMzY5LFwieVwiOjY2MH0se1wieFwiOjEzNzMsXCJ5XCI6NjQ3fSx7XCJ4XCI6MTM3NCxcInlcIjo2MzJ9LHtcInhcIjoxMzc0LFwieVwiOjYxOX0se1wieFwiOjEzNzQsXCJ5XCI6NjA5fSx7XCJ4XCI6MTM3NCxcInlcIjo2MDR9LHtcInhcIjoxMzc0LFwieVwiOjU5Nn0se1wieFwiOjEzNzQsXCJ5XCI6NTkzfV1cclxuICAgICAgICAvLyB0aGlzLl9kcmFnQnRuLnN0b3BEcmFnKCk7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2codGhpcy5fZ3JpZHMpO1xyXG4gICAgICAgIC8vIGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3Quc3RhcnREcmFnKHRoaXMuX2RyYWdCdG4sIHRoaXMuX2RyYWdCdG4uaWNvbiwgdGhpcy5fZHJhZ0J0bi5pY29uKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHRhZyA9IDA7XHJcbiAgICAgICAgLy8gLy8g5Lul56eS5Li65Y2V5L2N55qE5pe26Ze06Ze06ZqUXHJcbiAgICAgICAgLy8gdmFyIGludGVydmFsID0gLjU7XHJcbiAgICAgICAgLy8gLy8g6YeN5aSN5qyh5pWwXHJcbiAgICAgICAgLy8gdmFyIHJlcGVhdCA9IGFyci5sZW5ndGggLSAxO1xyXG4gICAgICAgIC8vIC8vIOW8gOWni+W7tuaXtlxyXG4gICAgICAgIC8vIHZhciBkZWxheSA9IDE7XHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSgoKT0+IHtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5fZHJhZ0ljb24ueCA9IGFyclt0YWddLng7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuX2RyYWdJY29uLnkgPSBhcnJbdGFnXS55O1xyXG4gICAgICAgIC8vICAgICAvLyBsZXQgYSA9IHRoaXMuX2RyYWdJY29uLmxvY2FsVG9HbG9iYWwoYXJyW3RhZ10ueCxhcnJbdGFnXS55KTtcclxuICAgICAgICAvLyAgICAgLy8gbGV0IGIgPSB0aGlzLl9kcmFnSWNvbi5nbG9iYWxUb0xvY2FsKGFyclt0YWddLngsYXJyW3RhZ10ueSk7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwi56ysXCIgKyB0YWcpXHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwieDpcIiArIGFyclt0YWddLnggKyBcIjt5OlwiICsgYXJyW3RhZ10ueSlcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJUb0dsb2JhbFwiKVxyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIng6XCIgKyBhLnggKyBcIjt5OlwiICsgYS55KVxyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIlRvTG9jYWxcIilcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJ4OlwiICsgYi54ICsgXCI7eTpcIiArIGIueSlcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuX2RyYWdJY29uLnggPSBhcnJbdGFnXS54O1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9kcmFnSWNvbi55ID0gYXJyW3RhZ10ueTtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCLnrKxcIiArIHRhZylcclxuICAgICAgICAvLyAgICAgLy8gbGV0IHRlc3Q6YW55ID0gZ2xvYmFsVGhpcy5fLmNsb25lRGVlcCh0aGlzLl9kcmFnSWNvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0YWcrKztcclxuICAgICAgICAvLyB9LCBpbnRlcnZhbCwgcmVwZWF0LCBkZWxheSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuX2RyYWdJY29uLnggPSAxMzc0O1xyXG4gICAgICAgIC8vIHRoaXMuX2RyYWdJY29uLnkgPSA1OTM7XHJcblxyXG4gICAgICAgIC8vIGxldCBidG46Zmd1aS5HT2JqZWN0ID0gdGhpcy5fdmlldy5nZXRDaGlsZChcImRyYWdCdG5cIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYnRuKVxyXG5cclxuICAgICAgICAvLyBsZXQgYTpjYy5WZWMyID0gYnRuLmxvY2FsVG9HbG9iYWwoYnRuLngsYnRuLnkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGEpXHJcblxyXG4gICAgICAgIC8vIGxldCBiID0gYnRuLmdsb2JhbFRvTG9jYWwoMTgzOCwyMDA0KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGIpXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2J0bkJveCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgeyBQYWNrYWdlLCBHQ29tcG9uZW50IH0gPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuX3ZpZXcgPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoUGFja2FnZSwgR0NvbXBvbmVudCkuYXNDb207XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnU3RhcnQoZXZ0OiBmZ3VpLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGJ0bjogZmd1aS5HT2JqZWN0ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIC8vIOWPlua2iOWvueWOn+ebruagh+eahOaLluWKqO+8jOaNouaIkOS4gOS4quabv+S7o+WTgVxyXG4gICAgICAgIC8vIGJ0bi5zdG9wRHJhZygpO1xyXG4gICAgICAgIC8vIGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3Quc3RhcnREcmFnKGJ0biwgYnRuLmljb24sYnRuLmljb24pO1xyXG4gICAgICAgIC8vIHRoaXMuX3Rlc3Quc3RhcnREcmFnKCk7XHJcbiAgICAgICAgLy8gZmd1aS5EcmFnRHJvcE1hbmFnZXIuaW5zdC5zdGFydERyYWcodGhpcy5fdGVzdCwgdGhpcy5fdGVzdC5pY29uLCB0aGlzLl90ZXN0Lmljb24pO1xyXG4gICAgICAgIC8vIGlmIChldnQpIHtcclxuICAgICAgICAvLyAgICAgbGV0IGJ0bjogZmd1aS5HT2JqZWN0ID0gZmd1aS5HT2JqZWN0LmNhc3QoZXZ0LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgIC8vICAgICAvLyDlj5bmtojlr7nljp/nm67moIfnmoTmi5bliqjvvIzmjaLmiJDkuIDkuKrmm7/ku6Plk4FcclxuICAgICAgICAvLyAgICAgYnRuLnN0b3BEcmFnKCk7XHJcbiAgICAgICAgLy8gICAgIGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3Quc3RhcnREcmFnKGJ0biwgYnRuLmljb24sIGJ0bi5pY29uKTsgXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgbGV0IGJ0bjpmZ3VpLkdPYmplY3QgPSB0aGlzLl92aWV3LmdldENoaWxkKFwiZHJhZ0J0blwiKTtcclxuICAgICAgICAvLyAgICAgYnRuLnN0b3BEcmFnKCk7XHJcbiAgICAgICAgLy8gICAgIGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3Quc3RhcnREcmFnKGJ0biwgYnRuLmljb24sIGJ0bi5pY29uKTsgXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0LmRyYWdBZ2VudC5vbihmZ3VpLkV2ZW50LlRPVUNIX0VORCwgdGhpcy5fYWdlbnRUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5kaXIoZmd1aS5EcmFnRHJvcE1hbmFnZXIuaW5zdC5kcmFnQWdlbnQpXHJcbiAgICAgICAgLy8gZmd1aS5EcmFnRHJvcE1hbmFnZXIuaW5zdC5kcmFnQWdlbnQueCA9IDEzNzQ7XHJcbiAgICAgICAgLy8gZmd1aS5EcmFnRHJvcE1hbmFnZXIuaW5zdC5kcmFnQWdlbnQueSA9IDU5MztcclxuICAgICAgICAvLyBsZXQgYTpjYy5WZWMyID0gZmd1aS5EcmFnRHJvcE1hbmFnZXIuaW5zdC5kcmFnQWdlbnQubG9jYWxUb0dsb2JhbChmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0LmRyYWdBZ2VudC54LGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3QuZHJhZ0FnZW50LnkpO1xyXG4gICAgICAgIC8vIGxldCBiID0gdGhpcy5fZHJhZ0ljb24uZ2xvYmFsVG9Mb2NhbChhLngsYS55KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7eDpmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0LmRyYWdBZ2VudC54LHk6Zmd1aS5EcmFnRHJvcE1hbmFnZXIuaW5zdC5kcmFnQWdlbnQueX0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGIpO1xyXG4gICAgICAgIC8vIHRoaXMuX2RyYWdJY29uLnggPSBiLnggLSA5ODtcclxuICAgICAgICAvLyB0aGlzLl9kcmFnSWNvbi55ID0gYi55IC0gNzI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmd1aS5EcmFnRHJvcE1hbmFnZXIuaW5zdC5kcmFnQWdlbnQpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZHJhZ0J0bilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9kcmFnSWNvbilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hZ2VudFRvdWNoRW5kKGV2dDogZmd1aS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuX21vdmVBcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRyYWdNb3ZlKGV2dDogZmd1aS5FdmVudCwgcG9zOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIng6XCIgKyBmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3QuZHJhZ2dpbmcpO1xyXG4gICAgICAgIC8vIGxldCBhOmNjLlZlYzIgPSBmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0LmRyYWdBZ2VudC5sb2NhbFRvR2xvYmFsKGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3QuZHJhZ0FnZW50LngsZmd1aS5EcmFnRHJvcE1hbmFnZXIuaW5zdC5kcmFnQWdlbnQueSk7XHJcbiAgICAgICAgLy8gdGhpcy5fbW92ZUFyci5wdXNoKHt4OmZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3QuZHJhZ0FnZW50LngseTpmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0LmRyYWdBZ2VudC55fSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJfb25EcmFnTW92ZVwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldnQpO1xyXG4gICAgICAgIC8vIGxldCB0OmFueSA9IGdsb2JhbFRoaXMuXy5jbG9uZURlZXAoZXZ0LnBvcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHt4OiR7dC54fSx5OiR7dC55fX1gKTtcclxuICAgICAgICAvLyBpZiAoZXZ0KSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGB7eDoke2ZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3QuZHJhZ0FnZW50Lnh9LHk6JHtmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0LmRyYWdBZ2VudC55fX1gKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0LmRyYWdBZ2VudC54ID0gcG9zLng7XHJcbiAgICAgICAgLy8gICAgIGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3QuZHJhZ0FnZW50LnkgPSBwb3MueTsgXHJcblxyXG4gICAgICAgIC8vICAgICBsZXQgdGVzdDphbnkgPSBnbG9iYWxUaGlzLl8uY2xvbmVEZWVwKGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3QuZHJhZ0FnZW50KTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGVzdCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldnQpXHJcbiAgICAgICAgLy8gdGhpcy5fZHJhZ0J0bi54ID0gZXZ0LnBvcy54O1xyXG4gICAgICAgIC8vIHRoaXMuX2RyYWdCdG4ueSA9IGV2dC5wb3MueTtcclxuICAgICAgICAvLyBmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0LmRyYWdBZ2VudC54ID0gZXZ0LnBvcy54O1xyXG4gICAgICAgIC8vIGZndWkuRHJhZ0Ryb3BNYW5hZ2VyLmluc3QuZHJhZ0FnZW50LnkgPSBldnQucG9zLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnRW5kKGV2dDogZmd1aS5FdmVudCk6IHZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJfb25EcmFnRW5kXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2dC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLl9kcmFnQnRuOlwiICsgYHg6JHt0aGlzLl9kcmFnQnRuLnh9O3k6JHt0aGlzLl9kcmFnQnRuLnl9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGE6Y2MuVmVjMiA9IHRoaXMuX2RyYWdCdG4ubG9jYWxUb0dsb2JhbCh0aGlzLl9kcmFnQnRuLngsdGhpcy5fZHJhZ0J0bi55KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKVxyXG5cclxuICAgICAgICBsZXQgYiA9IHRoaXMuX2J0bkJveC5nbG9iYWxUb0xvY2FsKGEueCxhLnkpXHJcbiAgICAgICAgY29uc29sZS5sb2coYilcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuX2J0bkJveDpcIiArIGB4OiR7dGhpcy5fYnRuQm94Lnh9O3k6JHt0aGlzLl9idG5Cb3gueX1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9idG5Cb3gud2lkdGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2J0bkJveC5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0ZXN0ID0gcG9pbnRCZWxvbmdBcmVhKFwicmVjdGFuZ2xlXCIsdGhpcy5fYnRuQm94LHRoaXMuX2RyYWdCdG4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlc3QpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHJpdmF0ZSBfb25EcmFnRHJvcCh0YXJnZXQ6IGZndWkuR0NvbXBvbmVudCwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJfb25EcmFnRHJvcFwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldClcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmZ3VpLkRyYWdEcm9wTWFuYWdlci5pbnN0LmRyYWdBZ2VudClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAvLyBsZXQgZ3JpZDphbnkgPSB0aGlzLl9ncmlkcy5maW5kKHYgPT4gdi51cmwgPT09IG51bGwpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWQpO1xyXG4gICAgICAgIC8vIGlmIChncmlkKSB7XHJcbiAgICAgICAgLy8gICAgIGdyaWQudXJsID0gZGF0YTtcclxuICAgICAgICAvLyB9IFxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgZ2V0U3RhdGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrDnirbmgIHlsYJcclxuICAgIHVwZGF0ZVN0YXRlKGN1clN0YXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZ2xvYmFsVGhpcy5fLmlzRXF1YWwodGhpcy5fc3RhdGUsIGN1clN0YXRlKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjdXJTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmm7TmlrB1aeWxglxyXG4gICAgdXBkYXRlVWkoc3RhdGU6IGFueSkgeyB9XHJcblxyXG4gICAgLy8g5rOo5YaM54q25oCB77yM5Y+K6I635Y+W54q25oCB55qE5pa55rOVXHJcbiAgICByZWdpc3RlclN0YXRlKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3dbJ0dsb2JhbERhdGEnXS5zYW1wbGUucmVnaXN0ZXJTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlZ2lzdGVyU3RhdGUuY2FsbCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDop6PpmaTnirbmgIHvvIzlj4rojrflj5bnirbmgIHnmoTmlrnms5VcclxuICAgIHJlbGlldmVTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZSkgd2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLnJlbGlldmVTdGF0ZS5jYWxsKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOacrOe7hOS7tueKtuaAgeWQiOW5tuWIsOWFqOWxgFxyXG4gICAgbWVyZ2VTdGF0ZSgpIHtcclxuICAgICAgICBpZiAod2luZG93WydHbG9iYWxEYXRhJ10uc2FtcGxlLm1lcmdlU3RhdGUpIHdpbmRvd1snR2xvYmFsRGF0YSddLnNhbXBsZS5tZXJnZVN0YXRlLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVsaWV2ZVN0YXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19