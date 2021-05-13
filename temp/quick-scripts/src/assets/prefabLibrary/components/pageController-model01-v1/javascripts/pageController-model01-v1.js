"use strict";
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