System.register(["./p-67f67a3b.system.js"],(function(e){"use strict";var t,i,o,s,n;return{setters:[function(e){t=e.r;i=e.c;o=e.h;s=e.H;n=e.g}],execute:function(){var a=":host{position:fixed;top:0;left:0;height:100%;width:100%;z-index:1000;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host(:not(.is-open)){display:none}.dialog-backdrop{position:absolute;z-index:-1;top:0;height:100%;width:100%;background:rgba(0, 0, 0, 0.4)}.dialog-pane{position:relative;margin:32px;max-height:100vh;overflow-y:auto}.dialog-pane.shaking{-webkit-animation:0.1s ease-in-out alternate infinite uni-dialog-grow;animation:0.1s ease-in-out alternate infinite uni-dialog-grow}@-webkit-keyframes uni-dialog-grow{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}@keyframes uni-dialog-grow{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}";var r=function(){function e(e){t(this,e);this.open=false;this.backdropDismiss=true;this.shakeTimer=null;this.close=i(this,"close",3)}e.prototype.onClose=function(){this.el.removeAttribute("open");this.close.emit()};e.prototype.doShake=function(){var e=this;if(this.shakeTimer)clearTimeout(this.shakeTimer);this.shakeTimer=setTimeout((function(){e.shakeTimer=null}),200)};e.prototype.backdropClick=function(){if(this.backdropDismiss)this.onClose();else this.doShake()};e.prototype.render=function(){var e=this;return o(s,{class:{"is-open":this.open}},o("div",{class:"dialog-backdrop",onClick:function(){return e.backdropClick()}}),o("div",{class:{"dialog-pane":true,shaking:!!this.shakeTimer}},o("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}();e("uni_dialog",r);r.style=a}}}));