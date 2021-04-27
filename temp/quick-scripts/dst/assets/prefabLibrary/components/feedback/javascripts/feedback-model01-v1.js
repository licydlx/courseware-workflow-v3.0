
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/prefabLibrary/components/feedback/javascripts/feedback-model01-v1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35aa1v1qOxNSpoXD1Ook21Z', 'feedback-model01-v1');
// prefabLibrary/components/feedback/javascripts/feedback-model01-v1.ts

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
 * @Date: 2021-04-26 09:54:41
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-26 10:06:29
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var feedback_model01_v1 = /** @class */ (function (_super) {
    __extends(feedback_model01_v1, _super);
    function feedback_model01_v1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rightAudio = null;
        _this.errorAudio = null;
        _this._answer = false;
        return _this;
    }
    feedback_model01_v1.prototype.onLoad = function () {
        var spine = this.node.getChildByName("spine").getComponent(sp.Skeleton);
        this.playAudio(this._answer ? this.rightAudio : this.errorAudio);
        spine.setSkin(this._answer ? "win" : "lose");
        spine.setAnimation(0, this._answer ? 'win' : 'lose', true);
    };
    feedback_model01_v1.prototype.init = function (bool) {
        this._answer = bool;
    };
    feedback_model01_v1.prototype.playAudio = function (audio) {
        cc.audioEngine.stopAll();
        cc.audioEngine.play(audio, false, 1);
    };
    __decorate([
        property({
            type: cc.AudioClip,
            displayName: '正确音效'
        })
    ], feedback_model01_v1.prototype, "rightAudio", void 0);
    __decorate([
        property({
            type: cc.AudioClip,
            displayName: '错误音效'
        })
    ], feedback_model01_v1.prototype, "errorAudio", void 0);
    feedback_model01_v1 = __decorate([
        ccclass
    ], feedback_model01_v1);
    return feedback_model01_v1;
}(cc.Component));
exports.default = feedback_model01_v1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccHJlZmFiTGlicmFyeVxcY29tcG9uZW50c1xcZmVlZGJhY2tcXGphdmFzY3JpcHRzXFxmZWVkYmFjay1tb2RlbDAxLXYxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0dBT0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQWlDQztRQTNCRyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFNaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBRyxLQUFLLENBQUM7O0lBbUI1QixDQUFDO0lBakJHLG9DQUFNLEdBQU47UUFDSSxJQUFJLEtBQUssR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGtDQUFJLEdBQUosVUFBSyxJQUFhO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxLQUFtQjtRQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXhCRDtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOzJEQUM4QjtJQU1oQztRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUztZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOzJEQUM4QjtJQVpmLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBaUN2QztJQUFELDBCQUFDO0NBakNELEFBaUNDLENBakNnRCxFQUFFLENBQUMsU0FBUyxHQWlDNUQ7a0JBakNvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiBcclxuICogQHZlcnNpb246IFxyXG4gKiBAQXV0aG9yOiB5ZGx4XHJcbiAqIEBEYXRlOiAyMDIxLTA0LTI2IDA5OjU0OjQxXHJcbiAqIEBMYXN0RWRpdG9yczogeWRseFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTI2IDEwOjA2OjI5XHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmVlZGJhY2tfbW9kZWwwMV92MSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfmraPnoa7pn7PmlYgnXHJcbiAgICB9KVxyXG4gICAgcmlnaHRBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ+mUmeivr+mfs+aViCdcclxuICAgIH0pXHJcbiAgICBlcnJvckF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2Fuc3dlciA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgc3BpbmU6IHNwLlNrZWxldG9uID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BpbmVcIikuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICB0aGlzLnBsYXlBdWRpbyh0aGlzLl9hbnN3ZXIgPyB0aGlzLnJpZ2h0QXVkaW8gOiB0aGlzLmVycm9yQXVkaW8pO1xyXG4gICAgICAgIHNwaW5lLnNldFNraW4odGhpcy5fYW5zd2VyID8gXCJ3aW5cIiA6IFwibG9zZVwiKTtcclxuICAgICAgICBzcGluZS5zZXRBbmltYXRpb24oMCwgdGhpcy5fYW5zd2VyID8gJ3dpbicgOiAnbG9zZScsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoYm9vbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2Fuc3dlciA9IGJvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUF1ZGlvKGF1ZGlvOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShhdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19