window.__require=function t(e,o,i){function r(a,c){if(!o[a]){if(!e[a]){var s=a.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!c&&l)return l(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var p=o[a]={exports:{}};e[a][0].call(p.exports,function(t){return r(e[a][1][t]||t)},p,p.exports,t,e,o,i)}return o[a].exports}for(var n="function"==typeof __require&&__require,a=0;a<i.length;a++)r(i[a]);return r}({"radioSwitch-model01-v1":[function(t,e,o){"use strict";cc._RF.push(e,"e2903Q08CdDsbxFFPnHTXWq","radioSwitch-model01-v1");var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator,c=a.ccclass,s=(a.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._state={},e}return r(e,t),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},set:function(t){this._state=t,this.updateUi(this._state),this.mergeState()},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){this._view.y=(fgui.GRoot.inst.height-this._view.height)/2,fgui.GRoot.inst.addChild(this._view),this._radioSwitch1=this._view.getController("radioSwitch1"),this._radioSwitch1.on(fgui.Event.STATUS_CHANGED,this.onSwitchChanged,this),this._state={selectedIndex:this._radioSwitch1.selectedIndex}},e.prototype.init=function(t){var e=t.Package,o=t.GComponent;this._view=fgui.UIPackage.createObject(e,o).asCom},e.prototype.onSwitchChanged=function(t){var e=globalThis._.cloneDeep(this._state);e.selectedIndex=t._selectedIndex,this.updateState(e)},e.prototype.getState=function(t){this.updateState(t)},e.prototype.updateState=function(t){globalThis._.isEqual(this._state,t)||(this.state=t)},e.prototype.updateUi=function(t){t.selectedIndex!==this._radioSwitch1.selectedIndex&&(this._radioSwitch1.selectedIndex=t.selectedIndex)},e.prototype.registerState=function(){window.GlobalData.sample.registerState&&window.GlobalData.sample.registerState.call(this)},e.prototype.relieveState=function(){window.GlobalData.sample.relieveState&&window.GlobalData.sample.relieveState.call(this)},e.prototype.mergeState=function(){window.GlobalData.sample.mergeState&&window.GlobalData.sample.mergeState.call(this)},e.prototype.onEnable=function(){this.registerState()},e.prototype.onDisable=function(){this.relieveState()},n([c],e)}(cc.Component));o.default=s,cc._RF.pop()},{}]},{},["radioSwitch-model01-v1"]);