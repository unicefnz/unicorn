(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1153:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_text_field",(function(){return UniTextField}));__webpack_require__(5),__webpack_require__(31),__webpack_require__(12),__webpack_require__(92),__webpack_require__(132);var _index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(211);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var nextUniqueId=0,UniTextField=function(){function UniTextField(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniTextField),Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.g)(this,hostRef),this.uniBlur=Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.c)(this,"uniBlur",3),this.uniChange=Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.c)(this,"uniChange",3),this.uniFocus=Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.c)(this,"uniFocus",3),this.uniInput=Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.c)(this,"uniInput",3),this.disabled=!1,this.error="",this.labelSlot=!1,this.optional=!1,this.readonly=!1,this.required=!1,this.uniqueId="uni-input-"+nextUniqueId++,this.ready=new Promise((function(r){_this.markReady=r}))}var _getInputElement;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniTextField,[{key:"componentDidLoad",value:function componentDidLoad(){this.markReady()}},{key:"getInputElement",value:(_getInputElement=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,this.ready;case 2:return _context.abrupt("return",this.inputElem);case 3:case"end":return _context.stop()}}),_callee,this)}))),function getInputElement(){return _getInputElement.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this,optional=this.optional&&Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("span",{class:"optional-label"},"(optional)"),Elem="textarea"===this.type?"textarea":"input";return Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.a,{class:{"input--has-errors":!!this.error,"uni-disabled":this.disabled}},this.labelSlot?Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("label",{htmlFor:this.uniqueId,class:"caption"},Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("slot",{name:"label"})):this.label&&Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("label",{htmlFor:this.uniqueId,class:"caption"},this.label," ",optional),Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("div",{class:"input-field"},Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("div",{class:"prepend-wrapper"},Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("slot",{name:"prepend"})),Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)(Elem,{autocomplete:this.autocomplete,class:"input-elem",disabled:this.disabled,id:this.uniqueId,max:this.max,maxlength:this.maxlength,min:this.min,minlength:this.minlength,name:this.name,onBlur:function onBlur(e){return _this2.uniBlur.emit(e)},onChange:function onChange(e){return _this2.uniChange.emit(e.target.value)},onFocus:function onFocus(e){return _this2.uniFocus.emit(e)},onInput:function onInput(e){return _this2.uniInput.emit(e.target.value)},placeholder:this.placeholder,readOnly:this.readonly,ref:function ref(el){_this2.inputElem=el},required:this.required,type:"input"===Elem?this.type:void 0,value:this.value}),this.error?Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"error-icon"},Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("path",{d:"M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z",style:{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("circle",{cx:"256",cy:"416",r:"16",style:{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}})):null),this.error&&!0!==this.error&&Object(_index_ac07c777_js__WEBPACK_IMPORTED_MODULE_5__.e)("uni-errors",{error:this.error}))}}]),UniTextField}();UniTextField.style=":host{display:flex;flex-direction:column;text-align:start;margin:1rem 0}:host(.uni-disabled){opacity:0.6}.caption{font-size:0.7rem;font-family:var(--font-body);font-weight:700;text-transform:uppercase;display:block;margin:0 0 4px}.optional-label{color:var(--uni-medium)}.input-field{position:relative;overflow:hidden;display:flex;align-items:stretch;flex:1;border:var(--uni-border-width, 2px) solid var(--uni-border-color, var(--uni-dark));border-radius:var(--uni-border-radius, 4px)}:host(.input--has-errors) .input-field{border-color:var(--uni-danger)}.input-field:focus-within{box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5)}.prepend-wrapper{display:inline-flex;align-items:center;justify-content:center;background:var(--uni-color, var(--uni-light));user-select:none}::slotted([slot=prepend]){min-width:20px;padding:0 10px;margin:0;text-align:center}.input-elem{max-width:100%;width:100%;box-sizing:border-box;flex:1;padding:0.6rem 0.7rem;font-family:inherit;font-size:1rem;border:none}.error-icon{position:absolute;top:0;bottom:0;right:0.4rem;margin:auto;width:24px;height:24px;color:var(--uni-danger)}.input-errors{color:var(--uni-danger);margin-top:0.3rem}ul.input-errors{padding:0;list-style-type:none}:host(.uni-disabled) .input-elem{cursor:not-allowed;background:none}.input-elem:focus{outline:none}"}}]);
//# sourceMappingURL=27.e317f13ca4909c14286d.bundle.js.map