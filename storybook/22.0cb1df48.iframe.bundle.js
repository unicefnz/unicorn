(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{866:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_dialog",(function(){return uni_dialog_entry_UniDialog}));__webpack_require__(438),__webpack_require__(280);var index_37b167c4=__webpack_require__(203);__webpack_require__(46),__webpack_require__(104),__webpack_require__(39),__webpack_require__(105),__webpack_require__(50),__webpack_require__(18),__webpack_require__(6);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var lastId=0;function getOverlay(doc,overlayTag,id){var overlays=function getOverlays(doc,selectorProp){var selector=null!=selectorProp?selectorProp:"[uni-overlay]";return Array.from(doc.querySelectorAll(selector)).filter((function(c){return c.overlayIndex>0}))}(doc,overlayTag);return void 0===id?overlays[overlays.length-1]:overlays.find((function(o){return o.id===id}))}function prepareOverlay(el){!function connectListeners(doc){0===lastId&&(lastId=1,doc.addEventListener("focusin",(function(ev){var lastOverlay=getOverlay(doc);if(lastOverlay&&lastOverlay.backdropDismiss&&!function isDescendant(parent,child){for(var currentNode=child;currentNode;){if(currentNode===parent)return!0;currentNode=currentNode.parentElement}return!1}(lastOverlay,ev.target)){var firstInput=lastOverlay.querySelector("input,button");firstInput&&firstInput.focus()}})),doc.addEventListener("keyup",(function(ev){if("Escape"===ev.key){var lastOverlay=getOverlay(doc);lastOverlay&&lastOverlay.backdropDismiss&&lastOverlay.dismiss(void 0,"backdrop")}})))}(document);var overlayIndex=lastId++;el.overlayIndex=overlayIndex,el.hasAttribute("id")||(el.id="uni-overlay-".concat(overlayIndex))}function _present(){return(_present=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(overlay){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(!overlay.presented){_context2.next=2;break}return _context2.abrupt("return");case 2:overlay.presented=!0,overlay.willPresent.emit(),document.body.classList.add("uni-lock-scroll"),overlay.el.classList.remove("overlay-hidden"),overlay.didPresent.emit(),overlay.keyboardClose&&overlay.el.focus();case 8:case"end":return _context2.stop()}}),_callee2)})))).apply(this,arguments)}function _dismiss(){return(_dismiss=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(overlay,data,role){return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(overlay.presented){_context3.next=2;break}return _context3.abrupt("return",!1);case 2:return overlay.presented=!1,overlay.willDismiss.emit({data:data,role:role}),document.body.classList.remove("uni-lock-scroll"),overlay.didDismiss.emit({data:data,role:role}),overlay.el.remove(),_context3.abrupt("return",!0);case 8:case"end":return _context3.stop()}}),_callee3)})))).apply(this,arguments)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var uni_dialog_entry_UniDialog=function(){function UniDialog(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniDialog),Object(index_37b167c4.g)(this,hostRef),this.didPresent=Object(index_37b167c4.c)(this,"uniDidPresent",7),this.willPresent=Object(index_37b167c4.c)(this,"uniWillPresent",7),this.willDismiss=Object(index_37b167c4.c)(this,"uniWillDismiss",7),this.didDismiss=Object(index_37b167c4.c)(this,"uniDidDismiss",7),this.presented=!1,this.backdropDismiss=!0,this.keyboardClose=!0,this.shakeTimer=null}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniDialog,[{key:"connectedCallback",value:function connectedCallback(){prepareOverlay(this.el)}},{key:"present",value:function present(){return function overlays_b002d35b_present(_x3){return _present.apply(this,arguments)}(this)}},{key:"dismiss",value:function dismiss(data,role){return function overlays_b002d35b_dismiss(_x4,_x5,_x6){return _dismiss.apply(this,arguments)}(this,data,role)}},{key:"doShake",value:function doShake(){var _this=this;this.shakeTimer&&clearTimeout(this.shakeTimer),this.shakeTimer=setTimeout((function(){_this.shakeTimer=null}),200)}},{key:"onBackdropTap",value:function onBackdropTap(){this.backdropDismiss?this.dismiss(void 0,"backdrop"):this.doShake()}},{key:"render",value:function render(){var _this2=this;return Object(index_37b167c4.e)(index_37b167c4.a,{role:"dialog","aria-modal":"true",tabindex:-1,style:{zIndex:"".concat(2e3+this.overlayIndex)},onUniBackdropTap:this.onBackdropTap,"uni-overlay":!0},Object(index_37b167c4.e)("uni-backdrop",{tappable:this.backdropDismiss,onClick:function onClick(){return _this2.backdropDismiss||_this2.doShake()}}),Object(index_37b167c4.e)("div",{class:"flex-wrapper"},Object(index_37b167c4.e)("uni-dialog-content",{shaking:!!this.shakeTimer},Object(index_37b167c4.e)("slot",null))))}},{key:"el",get:function get(){return Object(index_37b167c4.d)(this)}}]),UniDialog}();uni_dialog_entry_UniDialog.style=":host{position:fixed;top:0;bottom:0;left:0;right:0;z-index:2000;max-height:100vh;overflow-y:scroll}.flex-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100%}:host(.overlay-hidden){display:none}"}}]);