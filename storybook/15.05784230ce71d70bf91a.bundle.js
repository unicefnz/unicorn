(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1066:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_combo_text",(function(){return UniComboText}));__webpack_require__(30),__webpack_require__(90),__webpack_require__(12),__webpack_require__(130);var _index_dcbf0b6f_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(203);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var itemId=0,UniComboText=function(){function UniComboText(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniComboText),Object(_index_dcbf0b6f_js__WEBPACK_IMPORTED_MODULE_4__.g)(this,hostRef),this.uniSelect=Object(_index_dcbf0b6f_js__WEBPACK_IMPORTED_MODULE_4__.c)(this,"uniSelect",7),this.uniqueId="uni-combo-text-item-".concat(itemId++),this.parentGroup=null,this.selected=!1,this.value=this.uniqueId,this.disabled=!1,this.updateState=function(){var _a;_this.selected=(null===(_a=_this.parentGroup)||void 0===_a?void 0:_a.value)===_this.value},this.selectOn="focusin",this.selectEmitter=function(){return _this.uniSelect.emit()},this.childField=null}var _setFocus;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniComboText,[{key:"setFocus",value:(_setFocus=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(ev){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:ev.stopPropagation(),ev.preventDefault(),this.el.focus();case 3:case"end":return _context.stop()}}),_callee,this)}))),function setFocus(_x){return _setFocus.apply(this,arguments)})},{key:"onValueChange",value:function onValueChange(){this.updateState()}},{key:"connectedCallback",value:function connectedCallback(){this.onSelectTriggerChange(this.selectOn),this.parentGroup=this.el.closest("uni-combo-group"),this.parentGroup&&(this.updateState(),this.parentGroup.addEventListener("uniInternalChange",this.updateState))}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.parentGroup&&(this.parentGroup.removeEventListener("uniInternalChange",this.updateState),this.parentGroup=null)}},{key:"onSelectTriggerChange",value:function onSelectTriggerChange(newVal,oldVal){oldVal&&this.childField&&this.childField.removeEventListener(oldVal,this.selectEmitter),this.childField=this.el.querySelector("uni-text-field"),this.childField&&this.childField.addEventListener(newVal,this.selectEmitter)}},{key:"render",value:function render(){return Object(_index_dcbf0b6f_js__WEBPACK_IMPORTED_MODULE_4__.e)(_index_dcbf0b6f_js__WEBPACK_IMPORTED_MODULE_4__.a,{class:{"uni-selected":this.selected,"uni-disabled":this.disabled},"uni-radio-option":!0},Object(_index_dcbf0b6f_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",null))}},{key:"el",get:function get(){return Object(_index_dcbf0b6f_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)}}],[{key:"watchers",get:function get(){return{value:["onValueChange"],selectOn:["onSelectTriggerChange"]}}}]),UniComboText}();UniComboText.style=":host{display:block}::slotted(uni-text-field){margin:0;height:100%}:host(.uni-selected) ::slotted(uni-text-field){--uni-color:var(--uni-accent);height:100%}"}}]);
//# sourceMappingURL=15.05784230ce71d70bf91a.bundle.js.map