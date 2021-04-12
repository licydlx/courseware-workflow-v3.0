"use strict";
cc._RF.push(module, 'e032bSegH1C+6Fjdc8INtab', 'formal-panle-model02-studentList');
// prefabLibrary/components/formal-panle-model02/javascripts/formal-panle-model02-studentList.ts

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
 * @Date: 2020-11-19 18:05:09
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 17:51:44
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var formal_panle_model02_studentList = /** @class */ (function (_super) {
    __extends(formal_panle_model02_studentList, _super);
    function formal_panle_model02_studentList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    formal_panle_model02_studentList.prototype.onLoad = function () { };
    // 渲染层
    formal_panle_model02_studentList.prototype.updateUi = function (state) {
        var _loop_1 = function (i) {
            var student = this_1.node.children[i];
            if (state.studentList[i]) {
                student.active = true;
                // 设置名字
                var name = student.getChildByName('head').getChildByName('name');
                name.getComponent(cc.Label).string = state.studentList[i].nickname;
                // 设置 监控
                var monitored = student.getChildByName('body').getChildByName('monitored');
                var monitoredShow = monitored.getChildByName('show');
                var monitoredHide = monitored.getChildByName('hide');
                if (state.signalingModel == 1)
                    monitored.active = false;
                if (state.signalingModel == 2)
                    monitored.active = true;
                if (state.signalingModel == 3)
                    monitored.active = false;
                if (state.monitored == state.studentList[i].id) {
                    monitoredShow.active = true;
                    monitoredHide.active = false;
                }
                else {
                    monitoredShow.active = false;
                    monitoredHide.active = true;
                }
                // 设置 投放
                var launch = student.getChildByName('body').getChildByName('launch');
                var launchShow = launch.getChildByName('show');
                var launchHide = launch.getChildByName('hide');
                if (state.signalingModel == 1)
                    launch.active = false;
                if (state.signalingModel == 2)
                    launch.active = false;
                if (state.signalingModel == 3)
                    launch.active = true;
                if (state.launch == state.studentList[i].id) {
                    launchShow.active = true;
                    launchHide.active = false;
                }
                else {
                    launchShow.active = false;
                    launchHide.active = true;
                }
                // 设置排名
                var rankLabel = student.getChildByName('head').getChildByName('rank').getComponent(cc.Label);
                var index = state.ranking.findIndex(function (v) { return state.studentList[i].id == v; });
                rankLabel.string = index == -1 ? "" : (index + 1).toString();
            }
            else {
                student.active = false;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.node.children.length; i++) {
            _loop_1(i);
        }
    };
    // 数据层
    formal_panle_model02_studentList.prototype.updateData = function (data) { };
    formal_panle_model02_studentList = __decorate([
        ccclass
    ], formal_panle_model02_studentList);
    return formal_panle_model02_studentList;
}(cc.Component));
exports.default = formal_panle_model02_studentList;

cc._RF.pop();