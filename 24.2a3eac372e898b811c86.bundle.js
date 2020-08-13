(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1513:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_text_field",(function(){return UniTextField}));__webpack_require__(3),__webpack_require__(34),__webpack_require__(9),__webpack_require__(109),__webpack_require__(165);var _index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(30);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var nextUniqueId=0,UniTextField=function(){function UniTextField(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniTextField),Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.k)(this,hostRef),this.uniBlur=Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.f)(this,"uniBlur",7),this.uniChange=Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.f)(this,"uniChange",7),this.uniFocus=Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.f)(this,"uniFocus",7),this.uniInput=Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.f)(this,"uniInput",7),this.error="",this.labelSlot=!1,this.optional=!1,this.uniqueId="uni-input-"+nextUniqueId++}var _getInputElement;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniTextField,[{key:"getInputElement",value:(_getInputElement=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",this.inputElem);case 1:case"end":return _context.stop()}}),_callee,this)}))),function getInputElement(){return _getInputElement.apply(this,arguments)})},{key:"render",value:function render(){var _this=this,optional=this.optional&&Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("span",{class:"optional-label"},"(optional)"),Elem="textarea"===this.type?"textarea":"input";return Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.b,{class:{"input--has-errors":!!this.error,"uni-disabled":this.disabled}},this.labelSlot?Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("label",{htmlFor:this.uniqueId,class:"caption"},Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("slot",{name:"label"})):this.label&&Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("label",{htmlFor:this.uniqueId,class:"caption"},this.label," ",optional),Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("div",{class:"input-field"},Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("div",{class:"prepend-wrapper"},Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("slot",{name:"prepend"})),Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)(Elem,{autocomplete:this.autocomplete,class:"input-elem",disabled:this.disabled,id:this.uniqueId,max:this.max,maxlength:this.maxlength,min:this.min,minlength:this.minlength,name:this.name,onBlur:function onBlur(e){return _this.uniBlur.emit(e)},onChange:function onChange(e){return _this.uniChange.emit(e.target.value)},onFocus:function onFocus(e){return _this.uniFocus.emit(e)},onInput:function onInput(e){return _this.uniInput.emit(e.target.value)},placeholder:this.placeholder,readOnly:this.readonly,ref:function ref(el){_this.inputElem=el},required:this.required,type:"input"===Elem&&this.type,value:this.value}),this.error?Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"error-icon"},Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("path",{d:"M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z",style:{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("circle",{cx:"256",cy:"416",r:"16",style:{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}})):null),this.error&&!0!==this.error&&Object(_index_a9502303_js__WEBPACK_IMPORTED_MODULE_5__.i)("uni-errors",{error:this.error}))}}]),UniTextField}();UniTextField.style=":host{--uni-border:2px solid var(--uni-dark);--uni-border-radius:4px;display:block;text-align:start;margin:1rem 0}:host(.uni-disabled){opacity:0.6}.caption{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:700;text-transform:uppercase;display:block;margin:0 0 4px}.optional-label{color:var(--uni-medium)}.input-field{position:relative;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;border:var(--uni-border);border-radius:var(--uni-border-radius)}:host(.input--has-errors) .input-field{border-color:var(--uni-danger)}.input-field:focus-within{-webkit-box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5);box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5)}.prepend-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--uni-color, var(--uni-light));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::slotted([slot=prepend]){min-width:20px;padding:0 10px;margin:0;text-align:center}.input-elem{max-width:100%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex:1;flex:1;padding:0.6rem 0.7rem;font-family:inherit;font-size:1rem;border:none}.error-icon{position:absolute;top:0;bottom:0;right:0.4rem;margin:auto;width:24px;height:24px;color:var(--uni-danger)}.input-errors{color:var(--uni-danger);margin-top:0.3rem}ul.input-errors{padding:0;list-style-type:none}:host(.uni-disabled) .input-elem{cursor:not-allowed;background:none}.input-elem:focus{outline:none}"}}]);
//# sourceMappingURL=24.2a3eac372e898b811c86.bundle.js.map