
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
 * @LastEditTime: 2021-05-12 14:31:12
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xccGFnZUNvbnRyb2xsZXItbW9kZWwwMS12MVxcamF2YXNjcmlwdHNcXHBhZ2VDb250cm9sbGVyLW1vZGVsMDEtdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVELDZDQUFZO0lBQW5FOztJQWtCQSxDQUFDO0lBZkcsMENBQU0sR0FBTjtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELDBDQUFNLEdBQU4sVUFBTyxDQUFNLEVBQUUsR0FBUTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFBRSxPQUFPO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCwwQ0FBTSxHQUFOLFVBQU8sQ0FBTSxFQUFFLEdBQVE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQUUsT0FBTztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBaEJnQix5QkFBeUI7UUFEN0MsT0FBTztPQUNhLHlCQUF5QixDQWtCN0M7SUFBRCxnQ0FBQztDQWxCRCxBQWtCQyxDQWxCc0QsRUFBRSxDQUFDLFNBQVMsR0FrQmxFO2tCQWxCb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0dGlvbjogXHJcbiAqIEB2ZXJzaW9uOiBcclxuICogQEF1dGhvcjogeWRseFxyXG4gKiBARGF0ZTogMjAyMC0xMi0yMiAxMTowMjo0NVxyXG4gKiBATGFzdEVkaXRvcnM6IHlkbHhcclxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNS0xMiAxNDozMToxMlxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2VDb250cm9sbGVyX21vZGVsMDFfdjEgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfY29udHJvbGxlckpzOiBhbnk7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImNvbnRyb2xsZXItbW9kZWwwMVwiKTtcclxuICAgICAgICB0aGlzLl9jb250cm9sbGVySnMgPSBjb250cm9sbGVyLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvUHJldihlOiBhbnksIGNlZDogYW55KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250cm9sbGVySnMpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9jb250cm9sbGVySnMub25KdW1wQ29uZmlnKHRoaXMuX2NvbnRyb2xsZXJKcy5fY1BhZ2UgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBnb05leHQoZTogYW55LCBjZWQ6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udHJvbGxlckpzKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fY29udHJvbGxlckpzLm9uSnVtcENvbmZpZyh0aGlzLl9jb250cm9sbGVySnMuX2NQYWdlICsgMSk7XHJcbiAgICB9XHJcblxyXG59Il19