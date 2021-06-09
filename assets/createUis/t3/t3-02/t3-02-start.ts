
const { loadPrefab, loadBundle, loadResource } = window['GlobalData'].sample;

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    onLoad() {
        // 加载ui 预制件
        // let kv = {};
        // kv["t3-02-part1"] = await loadResource("t3-02-part1", cc.Prefab );
        // kv["t3-02-part1b"] = await loadResource("t3-02-part1b", cc.Prefab);
        // kv["t3-02-part2"] = await loadResource("t3-02-part2", cc.Prefab);
        // kv["t3-02-part2b"] = await loadResource("t3-02-part2b", cc.Prefab);
        // kv["t3-02-part2c"] = await loadResource("t3-02-part2c", cc.Prefab);
        // kv["t3-02-part3"] = await loadResource("t3-02-part3", cc.Prefab);
        // kv["t3-02-part3b"] = await loadResource("t3-02-part3b", cc.Prefab);
        // kv["t3-02-part3c"] = await loadResource("t3-02-part3c", cc.Prefab);
        // kv["t3-02-part4"] = await loadResource("t3-02-part4", cc.Prefab);
        // kv["t3-02-end"] = await loadResource("t3-02-end", cc.Prefab);

        // window["t3-02-ui-prefab"] = kv;

        console.log("");
    }
}
