
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/components/pageController-model01-v1/javascripts/pageController-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e38d6/0G0NNdpig5hZ0ad6E', 'pageController-model01-v1');
// prefabLibrary/components/pageController-model01-v1/javascripts/pageController-model01-v1.ts

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
 * @Date: 2020-12-22 11:02:45
 * @LastEditors: ydlx
 * @LastEditTime: 2021-05-13 21:29:35
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var pageController_model01_v1 = /** @class */ (function (_super) {
    __extends(pageController_model01_v1, _super);
    function pageController_model01_v1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    pageController_model01_v1.prototype.onLoad = function () {
        var controller = this.node.parent.getChildByName("controller-model01");
        this._controllerJs = controller.getComponent(cc.Component);
    };
    pageController_model01_v1.prototype.init = function (data) {
        var prev = this.node.getChildByName("prev");
        var next = this.node.getChildByName("next");
        switch (data) {
            case "start":
                prev.active = false;
                next.active = true;
                break;
            case "end":
                prev.active = true;
                next.active = false;
                break;
            case "normal":
                prev.active = true;
                next.active = true;
                break;
            default:
                break;
        }
    };
    pageController_model01_v1.prototype.goPrev = function (e, ced) {
        if (!this._controllerJs)
            return;
        this._controllerJs.onJumpConfig(this._controllerJs._cPage - 1);
    };
    pageController_model01_v1.prototype.goNext = function (e, ced) {
        if (!this._controllerJs)
            return;
        this._controllerJs.onJumpConfig(this._controllerJs._cPage + 1);
    };
    pageController_model01_v1 = __decorate([
        ccclass
    ], pageController_model01_v1);
    return pageController_model01_v1;
}(cc.Component));
exports.default = pageController_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xccGFnZUNvbnRyb2xsZXItbW9kZWwwMS12MVxcamF2YXNjcmlwdHNcXHBhZ2VDb250cm9sbGVyLW1vZGVsMDEtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVELDZDQUFZO0lBQW5FOztJQXdDQSxDQUFDO0lBckNHLDBDQUFNLEdBQU47UUFDSSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCx3Q0FBSSxHQUFKLFVBQUssSUFBUTtRQUNULElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVDLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELDBDQUFNLEdBQU4sVUFBTyxDQUFNLEVBQUUsR0FBUTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCwwQ0FBTSxHQUFOLFVBQU8sQ0FBTSxFQUFFLEdBQVE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBdENnQix5QkFBeUI7UUFEN0MsT0FBTztPQUNhLHlCQUF5QixDQXdDN0M7SUFBRCxnQ0FBQztDQXhDRCxBQXdDQyxDQXhDc0QsRUFBRSxDQUFDLFNBQVMsR0F3Q2xFO2tCQXhDb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMC0xMi0yMiAxMTowMjo0NVxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMyAyMToyOTozNVxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2VDb250cm9sbGVyX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlckpzOiBhbnk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImNvbnRyb2xsZXItbW9kZWwwMVwiKTtcclxuICAgICAgICB0aGlzLl9jb250cm9sbGVySnMgPSBjb250cm9sbGVyLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZGF0YTphbnkpe1xyXG4gICAgICAgIGxldCBwcmV2ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJldlwiKTtcclxuICAgICAgICBsZXQgbmV4dCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5leHRcIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGF0YSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgICAgIHByZXYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBuZXh0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxyXG4gICAgICAgICAgICAgICAgcHJldi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV4dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICBwcmV2LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBuZXh0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnb1ByZXYoZTogYW55LCBjZWQ6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udHJvbGxlckpzKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fY29udHJvbGxlckpzLm9uSnVtcENvbmZpZyh0aGlzLl9jb250cm9sbGVySnMuX2NQYWdlIC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29OZXh0KGU6IGFueSwgY2VkOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRyb2xsZXJKcykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJKcy5vbkp1bXBDb25maWcodGhpcy5fY29udHJvbGxlckpzLl9jUGFnZSArIDEpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==