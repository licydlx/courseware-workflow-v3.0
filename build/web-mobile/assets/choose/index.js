window.__require=function t(e,i,o){function n(s,r){if(!i[s]){if(!e[s]){var l=s.split("/");if(l=l[l.length-1],!e[l]){var c="function"==typeof __require&&__require;if(!r&&c)return c(l,!0);if(a)return a(l,!0);throw new Error("Cannot find module '"+s+"'")}s=l}var h=i[s]={exports:{}};e[s][0].call(h.exports,function(t){return n(e[s][1][t]||t)},h,h.exports,t,e,i,o)}return i[s].exports}for(var a="function"==typeof __require&&__require,s=0;s<o.length;s++)n(o[s]);return n}({"choose-model01-v1":[function(t,e,i){"use strict";cc._RF.push(e,"cd05919cBRDMbpAcmU8if2h","choose-model01-v1");var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=this&&this.__decorate||function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s},s=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))(function(n,a){function s(t){try{l(o.next(t))}catch(e){a(e)}}function r(t){try{l(o.throw(t))}catch(e){a(e)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(s,r)}l((o=o.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){var i,o,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(t){return function(e){return l([t,e])}}function l(a){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(r){a=[6,r],o=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(i,"__esModule",{value:!0});var l=window.GlobalData.sample,c=l.loadBundle,h=l.loadPrefab,u=l.loadResource,p=(window.GlobalData.utils.pointBelongArea,cc._decorator),d=p.ccclass,f=(p.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._options=[],e._cache={},e._answer=0,e._state={},e}return n(e,t),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},set:function(t){this.updateUi(this._state,t),this._state=t,this.mergeState()},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){this._worldRoot=cc.find("Canvas").parent,this._view.y=(fgui.GRoot.inst.height-this._view.height)/2,this._view.x=(fgui.GRoot.inst.width-this._view.width)/2,fgui.GRoot.inst.addChild(this._view),this._c1=this._view.getController("c1"),this._c2=this._view.getController("c2"),this._c2&&(this._c2.selectedIndex=1,this._c2.selectedIndex=0),this._submit=this._view.getChild("submit").asButton,this._submit&&this._submit.on(fgui.Event.CLICK,this._clickSubmit,this),this._titleTrigger=this._view.getChild("titleTrigger").asLoader,this._titleTrigger&&this._titleTrigger.on(fgui.Event.CLICK,this._clickTitle,this),this._title=this._view.getChild("title").asButton;for(var t=this._view.getChild("optionBox").asGroup,e=0;e<this._view.numChildren;e++)if(this._view.getChildAt(e).group==t){var i=this._view.getChildAt(e).asButton;i.on(fgui.Event.CLICK,this._clickOption,this),this._options.push(i)}this._state={option:0,title:!1,submit:!1,checkAnswer:!1,answer:!1},this.disableForbidHandle()},e.prototype.init=function(t){return s(this,void 0,void 0,function(){var e,i,o,n,a,s,l,u,p,d,f,_,g,b,w,y;return r(this,function(r){switch(r.label){case 0:for(p in e=t.pathConfig,i=t.model,o=t.components,n=e.packageName,a=i.uiPath,s=i.config,l=s.answer,u=s.ae,this._view=fgui.UIPackage.createObject(n,a).asCom,u)u[p]&&(this[p]={},u[p].component&&(this[p].component=fgui.UIPackage.createObject(n,u[p].component).asCom),u[p].pos&&(this[p].pos=u[p].pos));if(l&&(this._answer=l),!o)return[3,5];for(f in d=[],o)d.push(f);_=0,r.label=1;case 1:return _<d.length?(g=d[_],b=""+e.remoteUrl+e.componentBundlePath+o[g].bundleName,[4,c(b)]):[3,5];case 2:return w=r.sent(),[4,h(w,o[g].prefabName)];case 3:y=r.sent(),this[g]=y,r.label=4;case 4:return _++,[3,1];case 5:return[2]}})})},e.prototype._clickTitle=function(){var t=globalThis._.cloneDeep(this._state);t.title=!0,this.updateState(t)},e.prototype._clickOption=function(t){var e=globalThis._.cloneDeep(this._state),i=fgui.GObject.cast(t.currentTarget),o=this._options.findIndex(function(t){return t==i});e.option=o+1,this.updateState(e)},e.prototype._clickSubmit=function(){var t=globalThis._.cloneDeep(this._state);t.answer=t.option==this._answer,t.submit=!0,this.updateState(t)},e.prototype.getState=function(t){this.updateState(t)},e.prototype.updateState=function(t){globalThis._.isEqual(this._state,t)||(this.state=t)},e.prototype.updateUi=function(t,e){globalThis._.isEqual(t.option,e.option)||(this._c1.selectedIndex=e.option),globalThis._.isEqual(t.title,e.title)||this.playTitle(e.title),globalThis._.isEqual(t.submit,e.submit)||e.submit&&(e.option?this.afterSubmit():this.onHandleGuide()),globalThis._.isEqual(t.checkAnswer,e.checkAnswer)||e.checkAnswer&&this.answerFeedback(e.answer)},e.prototype.playTitle=function(t){return s(this,void 0,void 0,function(){var e,i,o,n=this;return r(this,function(a){switch(a.label){case 0:return this._c2.selectedIndex=t?1:0,t?(cc.audioEngine.stopAll(),this.forbidHandle(),e=fgui.UIPackage.getItemByURL(this._title._sound),[4,u(e.file,cc.AudioClip)]):[3,2];case 1:return i=a.sent(),o=cc.audioEngine.play(i,!1,1),cc.audioEngine.setFinishCallback(o,function(){var t=globalThis._.cloneDeep(n._state);t.title=!1,n.updateState(t)}),[3,3];case 2:this.disableForbidHandle(),a.label=3;case 3:return[2]}})})},e.prototype.answerFeedback=function(t){var e=this;if(this.feedback){var i=globalThis._.cloneDeep(this._state),o=cc.instantiate(this.feedback);o.x=960,o.y=540,o.getComponent(cc.Component).init(t),o.parent=cc.find("Canvas").parent,setTimeout(function(){o.destroy(),i.submit=!1,i.checkAnswer=!1,e.updateState(i)},2e3)}},e.prototype.afterSubmit=function(){var t=this,e=globalThis._.cloneDeep(this._state);this._view.getTransition("t1").play(function(){e.answer=e.option==t._answer,e.submit=!1,e.checkAnswer=!0,t.updateState(e)},1)},e.prototype.onHandleGuide=function(){var t=this;if(this.handleGuide){var e=globalThis._.cloneDeep(this._state);fgui.GRoot.inst.addChild(this.handleGuide.component),this.handleGuide.pos?(this.handleGuide.component.x=(fgui.GRoot.inst.width-this.handleGuide.component.width)/2+this.handleGuide.pos.x,this.handleGuide.component.y=(fgui.GRoot.inst.height-this.handleGuide.component.height)/2+this.handleGuide.pos.y):this.handleGuide.component.y=(fgui.GRoot.inst.height-this.handleGuide.component.height)/2,this.handleGuide.component.getTransition("t0").play(function(){fgui.GRoot.inst.removeChild(t.handleGuide.component),e.submit=!1,t.updateState(e)},2)}},e.prototype.forbidHandle=function(){if(!this._worldRoot.getChildByName("handleMask")){var t=new cc.Node("handleMask");t.addComponent(cc.BlockInputEvents),t.parent=this._worldRoot,t.width=1920,t.height=1080,t.x=960,t.y=540}},e.prototype.disableForbidHandle=function(){var t=this._worldRoot.getChildByName("handleMask");t&&t.destroy()},e.prototype.registerState=function(){window.GlobalData.sample.registerState&&window.GlobalData.sample.registerState.call(this)},e.prototype.relieveState=function(){window.GlobalData.sample.relieveState&&window.GlobalData.sample.relieveState.call(this)},e.prototype.mergeState=function(){window.GlobalData.sample.mergeState&&window.GlobalData.sample.mergeState.call(this)},e.prototype.onEnable=function(){this.registerState()},e.prototype.onDisable=function(){this.relieveState(),cc.audioEngine.stopAll()},a([d],e)}(cc.Component));i.default=f,cc._RF.pop()},{}],"choose-model02-v1":[function(t,e,i){"use strict";cc._RF.push(e,"41ef5ejRahHr5aGeE9q9lTi","choose-model02-v1");var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=this&&this.__decorate||function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s},s=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))(function(n,a){function s(t){try{l(o.next(t))}catch(e){a(e)}}function r(t){try{l(o.throw(t))}catch(e){a(e)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(s,r)}l((o=o.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){var i,o,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(t){return function(e){return l([t,e])}}function l(a){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(r){a=[6,r],o=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}};Object.defineProperty(i,"__esModule",{value:!0});var l=window.GlobalData.sample,c=l.loadBundle,h=l.loadPrefab,u=l.loadResource,p=cc._decorator,d=p.ccclass,f=(p.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._options=[],e._cache={},e._answer=0,e._state={},e}return n(e,t),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},set:function(t){this.updateUi(this._state,t),this._state=t,this.mergeState()},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){this._worldRoot=cc.find("Canvas").parent,this._view.y=(fgui.GRoot.inst.height-this._view.height)/2,this._view.x=(fgui.GRoot.inst.width-this._view.width)/2,fgui.GRoot.inst.addChild(this._view),this._c1=this._view.getController("c1"),this._c2=this._view.getController("c2"),this._c2&&(this._c2.selectedIndex=1,this._c2.selectedIndex=0),this._submit=this._view.getChild("submit").asButton,this._submit&&this._submit.on(fgui.Event.CLICK,this._clickSubmit,this),this._titleTrigger=this._view.getChild("titleTrigger").asLoader,this._titleTrigger&&this._titleTrigger.on(fgui.Event.CLICK,this._clickTitle,this),this._title=this._view.getChild("title").asButton;for(var t=this._view.getChild("optionBox").asGroup,e=0;e<this._view.numChildren;e++)if(this._view.getChildAt(e).group==t){var i=this._view.getChildAt(e).asButton;i.on(fgui.Event.CLICK,this._clickOption,this),this._options.push(i)}this._state={option:null,title:!1,submit:!1,checkAnswer:!1,answer:!1},this.disableForbidHandle()},e.prototype.init=function(t){return s(this,void 0,void 0,function(){var e,i,o,n,a,s,l,u,p,d,f,_,g,b,w,y;return r(this,function(r){switch(r.label){case 0:for(p in e=t.pathConfig,i=t.model,o=t.components,n=e.packageName,a=i.uiPath,s=i.config,l=s.answer,u=s.ae,this._view=fgui.UIPackage.createObject(n,a).asCom,u)u[p]&&(this[p]={},u[p].component&&(this[p].component=fgui.UIPackage.createObject(n,u[p].component).asCom),u[p].pos&&(this[p].pos=u[p].pos));if(l&&(this._answer=l),!o)return[3,5];for(f in d=[],o)d.push(f);_=0,r.label=1;case 1:return _<d.length?(g=d[_],b=""+e.remoteUrl+e.componentBundlePath+o[g].bundleName,[4,c(b)]):[3,5];case 2:return w=r.sent(),[4,h(w,o[g].prefabName)];case 3:y=r.sent(),this[g]=y,r.label=4;case 4:return _++,[3,1];case 5:return[2]}})})},e.prototype._clickTitle=function(){var t=globalThis._.cloneDeep(this._state);t.title=!0,this.updateState(t)},e.prototype._clickOption=function(t){var e=globalThis._.cloneDeep(this._state),i=fgui.GObject.cast(t.currentTarget),o=this._options.findIndex(function(t){return t==i});e.option=e.option===o?null:o,this.updateState(e)},e.prototype._clickSubmit=function(){var t=globalThis._.cloneDeep(this._state);t.answer=t.option==this._answer,t.submit=!0,this.updateState(t)},e.prototype.getState=function(t){this.updateState(t)},e.prototype.updateState=function(t){globalThis._.isEqual(this._state,t)||(this.state=t)},e.prototype.updateUi=function(t,e){globalThis._.isEqual(t.option,e.option)||((e.option||0===e.option)&&((t.option||0===t.option)&&this._options[t.option].getTransition("t1").play(),this._options[e.option].getTransition("t0").play()),null===e.option&&this._options[t.option].getTransition("t1").play()),globalThis._.isEqual(t.title,e.title)||this.playTitle(e.title),globalThis._.isEqual(t.submit,e.submit)||e.submit&&(e.option||0===e.option?this.afterSubmit():this.onHandleGuide()),globalThis._.isEqual(t.checkAnswer,e.checkAnswer)||e.checkAnswer&&this.answerFeedback(e.answer)},e.prototype.playTitle=function(t){return s(this,void 0,void 0,function(){var e,i,o,n=this;return r(this,function(a){switch(a.label){case 0:return this._c2.selectedIndex=t?1:0,t?(cc.audioEngine.stopAll(),this.forbidHandle(),e=fgui.UIPackage.getItemByURL(this._title._sound),[4,u(e.file,cc.AudioClip)]):[3,2];case 1:return i=a.sent(),o=cc.audioEngine.play(i,!1,1),cc.audioEngine.setFinishCallback(o,function(){var t=globalThis._.cloneDeep(n._state);t.title=!1,n.updateState(t)}),[3,3];case 2:this.disableForbidHandle(),a.label=3;case 3:return[2]}})})},e.prototype.answerFeedback=function(t){var e=this;if(this.feedback){var i=globalThis._.cloneDeep(this._state),o=cc.instantiate(this.feedback);o.x=960,o.y=540,o.getComponent(cc.Component).init(t),o.parent=cc.find("Canvas").parent,setTimeout(function(){o.destroy(),i.submit=!1,i.checkAnswer=!1,e.updateState(i)},2e3)}},e.prototype.afterSubmit=function(){var t=globalThis._.cloneDeep(this._state);t.answer=t.option==this._answer,t.submit=!1,t.checkAnswer=!0,this.updateState(t)},e.prototype.onHandleGuide=function(){var t=this;if(this.handleGuide){var e=globalThis._.cloneDeep(this._state);fgui.GRoot.inst.addChild(this.handleGuide.component),this.handleGuide.pos?(this.handleGuide.component.x=(fgui.GRoot.inst.width-this.handleGuide.component.width)/2+this.handleGuide.pos.x,this.handleGuide.component.y=(fgui.GRoot.inst.height-this.handleGuide.component.height)/2+this.handleGuide.pos.y):this.handleGuide.component.y=(fgui.GRoot.inst.height-this.handleGuide.component.height)/2,this.handleGuide.component.getTransition("t0").play(function(){fgui.GRoot.inst.removeChild(t.handleGuide.component),e.submit=!1,t.updateState(e)},2)}},e.prototype.forbidHandle=function(){if(!this._worldRoot.getChildByName("handleMask")){var t=new cc.Node("handleMask");t.addComponent(cc.BlockInputEvents),t.parent=this._worldRoot,t.width=1920,t.height=1080,t.x=960,t.y=540}},e.prototype.disableForbidHandle=function(){var t=this._worldRoot.getChildByName("handleMask");t&&t.destroy()},e.prototype.registerState=function(){window.GlobalData.sample.registerState&&window.GlobalData.sample.registerState.call(this)},e.prototype.relieveState=function(){window.GlobalData.sample.relieveState&&window.GlobalData.sample.relieveState.call(this)},e.prototype.mergeState=function(){window.GlobalData.sample.mergeState&&window.GlobalData.sample.mergeState.call(this)},e.prototype.onEnable=function(){this.registerState()},e.prototype.onDisable=function(){this.relieveState(),cc.audioEngine.stopAll()},a([d],e)}(cc.Component));i.default=f,cc._RF.pop()},{}]},{},["choose-model01-v1","choose-model02-v1"]);