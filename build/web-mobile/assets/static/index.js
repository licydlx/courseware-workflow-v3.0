window.__require=function t(e,n,o){function r(a,c){if(!n[a]){if(!e[a]){var u=a.split("/");if(u=u[u.length-1],!e[u]){var l="function"==typeof __require&&__require;if(!c&&l)return l(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+a+"'")}a=u}var s=n[a]={exports:{}};e[a][0].call(s.exports,function(t){return r(e[a][1][t]||t)},s,s.exports,t,e,n,o)}return n[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<o.length;a++)r(o[a]);return r}({"static-model01-v1":[function(t,e,n){"use strict";cc._RF.push(e,"f41ddVtkPxCUaECni2GZeWU","static-model01-v1");var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{u(o.next(t))}catch(e){i(e)}}function c(t){try{u(o.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,c)}u((o=o.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(t){return function(e){return u([t,e])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var u=cc._decorator,l=u.ccclass,s=(u.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._state={},e}return r(e,t),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},set:function(t){this._state=t,this.updateUi(this._state),this.mergeState()},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){this._view.y=(fgui.GRoot.inst.height-this._view.height)/2,this._view.x=(fgui.GRoot.inst.width-this._view.width)/2,fgui.GRoot.inst.addChild(this._view)},e.prototype.init=function(t){return a(this,void 0,void 0,function(){var e,n,o,r;return c(this,function(){return e=t.pathConfig,n=t.model,t.components,o=e.packageName,r=n.uiPath,this._view=fgui.UIPackage.createObject(o,r).asCom,[2]})})},e.prototype.getState=function(t){this.updateState(t)},e.prototype.updateState=function(t){globalThis._.isEqual(this._state,t)||(this.state=t)},e.prototype.updateUi=function(){},e.prototype.registerState=function(){window.GlobalData.sample.registerState&&window.GlobalData.sample.registerState.call(this)},e.prototype.relieveState=function(){window.GlobalData.sample.relieveState&&window.GlobalData.sample.relieveState.call(this)},e.prototype.mergeState=function(){window.GlobalData.sample.mergeState&&window.GlobalData.sample.mergeState.call(this)},e.prototype.onEnable=function(){this.registerState()},e.prototype.onDisable=function(){this.relieveState()},i([l],e)}(cc.Component));n.default=s,cc._RF.pop()},{}]},{},["static-model01-v1"]);