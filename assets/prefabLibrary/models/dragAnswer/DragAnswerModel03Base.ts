import IDragAnswerModel03Base from "./IDragAnswerModel03Base";
const { loadBundle, loadPrefab, loadResource } = window['GlobalData'].sample;

const { ccclass, property } = cc._decorator;

export default interface PageData {
    pathConfig: any,
    model: any,
    components: any
}
@ccclass
export default class DragAnswerModel03Base extends cc.Component {

    protected _readTitleBtn: fgui.GComponent;
    protected _submitBtn: fgui.GComponent;

    protected _view: fgui.GComponent;
    public pageData: any;

    /* private _state = {};

    get state(): any {
        return this._state;
    }

    set state(v: any) {
        this.updateUi(this._state, v);
        this._state = v;

        this.mergeState();
    } */


    async init(data) {
        let s = this;
        s.pageData = data;
        let { pathConfig, model, components } = data;
        let Package = pathConfig.packageName;
        let GComponent = model.uiPath;
        let { answer, ae } = model.config;

        if (model.uiPath) {
            GComponent = model.uiPath;
            this._view = fgui.UIPackage.createObject(Package, GComponent).asCom;
        }

        s._readTitleBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'TitleCom').asCom;

        (s._readTitleBtn.getChild('title') as fgui.GLoader).url = fgui.UIPackage.createObject('t4-trialClass-01', 'title_3').asImage.resourceURL;
        s._readTitleBtn.x = 20;
        s._readTitleBtn.y = 50;
        this._view.addChild(s._readTitleBtn);
        

        s._submitBtn = fgui.UIPackage.createObject('t4-trialClass-01', 'SubmitBtn').asCom;
        s._submitBtn.x = 1676;
        s._submitBtn.y = 806;
        this._view.addChild(s._submitBtn);

        if (model.config) {
            // if (answer) this._answer = answer;
            // 动效注册
            if (ae) {
                for (let v in ae) {
                    if (ae[v]) {
                        this[v] = {};
                        if (ae[v].component) this[v].component = fgui.UIPackage.createObject(Package, ae[v].component).asCom;
                        if (ae[v].pos) this[v].pos = ae[v].pos;
                    }
                }
            }
        }

        if (components) {
            for (const key in components) {
                let componentPath: any = `${pathConfig.remoteUrl}${pathConfig.componentBundlePath}${components[key].bundleName}`;
                let componentBundle: any = await loadBundle(componentPath);
                let componentPrefab: any = await loadPrefab(componentBundle, components[key].prefabName);
                this[key] = componentPrefab;
            }
        }

        
        
    }


}