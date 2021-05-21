/*
 * @Descripttion: 
 * @version: 
 * @Author: ydlx
 * @Date: 2020-11-19 18:05:09
 * @LastEditors: ydlx
 * @LastEditTime: 2021-04-12 17:51:44
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class formal_panle_model02_studentList extends cc.Component {
    onLoad() { }

    // 渲染层
    updateUi(state: any) {
        for (let i = 0; i < this.node.children.length; i++) {
            let student = this.node.children[i];
            if (state.studentList[i]) {
                student.active = true;
                // 设置名字
                let name = student.getChildByName('head').getChildByName('name');
                name.getComponent(cc.Label).string = state.studentList[i].nickname;

                // 设置 监控
                let monitored = student.getChildByName('body').getChildByName('monitored');
                let monitoredShow = monitored.getChildByName('show');
                let monitoredHide = monitored.getChildByName('hide');
                
                if (state.signalingModel == 1) monitored.active = false;
                if (state.signalingModel == 2) monitored.active = true;
                if (state.signalingModel == 3) monitored.active = false;
                if (state.monitored == state.studentList[i].id) {
                    monitoredShow.active = true;
                    monitoredHide.active = false;
                } else {
                    monitoredShow.active = false;
                    monitoredHide.active = true;
                }

                // 设置 投放
                let launch = student.getChildByName('body').getChildByName('launch');
                let launchShow = launch.getChildByName('show');
                let launchHide = launch.getChildByName('hide');
                
                if (state.signalingModel == 1) launch.active = false;
                if (state.signalingModel == 2) launch.active = false;
                if (state.signalingModel == 3) launch.active = true;
                if (state.launch == state.studentList[i].id) {
                    launchShow.active = true;
                    launchHide.active = false;
                } else {
                    launchShow.active = false;
                    launchHide.active = true;
                }
                                
                // 设置排名
                let rankLabel = student.getChildByName('head').getChildByName('rank').getComponent(cc.Label);
                let index: number = state.ranking.findIndex((v: any) => state.studentList[i].id == v);
                rankLabel.string = index == -1 ? "" : (index + 1).toString();
            } else {
                student.active = false;
            }
        }
    }

    // 数据层
    updateData(data: any) {}
    
    // update (dt) {}
}
