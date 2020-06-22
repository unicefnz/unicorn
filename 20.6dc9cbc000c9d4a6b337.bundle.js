(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{706:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_text_field",(function(){return TextField}));__webpack_require__(72),__webpack_require__(22),__webpack_require__(36),__webpack_require__(34);var _index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(135);function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}var nextUniqueId=0,TextField=function(){function TextField(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TextField),Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.g)(this,hostRef),this.optional=!1,this.errors="",this.uniqueId="uni-input-"+nextUniqueId++,this.uniChange=Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.d)(this,"uniChange",7),this.uniInput=Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.d)(this,"uniInput",7)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(TextField,[{key:"render",value:function render(){var _this=this,optional=this.optional&&Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("span",{class:"optional-label"},"(optional)"),errors=this.renderErrors();return Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.a,{class:{"input--has-errors":!!this.errorList.length}},this.label&&Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("label",{htmlFor:this.uniqueId,class:"caption"},this.label," ",optional),Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{class:"input-field"},Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{class:"prepend-wrapper"},Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("slot",{name:"prepend"})),Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("input",{class:"input-elem",id:this.uniqueId,type:this.type,disabled:this.disabled,readOnly:this.readonly,placeholder:this.placeholder,required:!this.optional,value:this.value,onChange:function onChange(e){return _this.uniChange.emit(e.target.value)},onInput:function onInput(e){return _this.uniInput.emit(e.target.value)}})),errors)}},{key:"renderErrors",value:function renderErrors(){var errors=this.errorList;return errors.length?Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{class:"input-errors"},Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"error-icon"},Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("path",{d:"M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z",style:{fill:"none",stroke:"inherit",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}),Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("circle",{cx:"256",cy:"416",r:"16",style:{fill:"none",stroke:"inherit",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}})),Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("ul",null,errors.map((function(e){return Object(_index_6999723c_js__WEBPACK_IMPORTED_MODULE_4__.f)("li",null,e)})))):null}},{key:"errorList",get:function get(){return(Array.isArray(this.errors)?this.errors:[this.errors]).filter((function(e){return e}))}}]),TextField}();TextField.style=":host{--uni-border:2px solid var(--uni-dark);--uni-border-radius:4px;display:block;text-align:start;margin:1rem 0}.caption{font-size:calc(14rem / 18);font-family:var(--font-body);font-weight:bold;text-transform:uppercase;display:block;margin:0 0 4px}.optional-label{color:var(--uni-medium)}.input-field{position:relative;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;border:var(--uni-border);border-radius:var(--uni-border-radius)}:host(.input--has-errors) .input-field{border-color:var(--uni-danger)}.input-field:focus-within{-webkit-box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5);box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5)}.prepend-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--uni-color, var(--uni-light));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}::slotted([slot=prepend]){min-width:20px;padding:0 10px;margin:0;text-align:center}.input-elem{-ms-flex:1;flex:1;padding:10px 12px;font-family:inherit;font-size:1rem;border:none}.input-errors{margin-top:0.3rem;color:var(--uni-danger);stroke:var(--uni-danger)}.input-errors .error-icon{vertical-align:top;margin-right:0.5rem;display:inline-block;width:24px;height:24px}.input-errors ul{display:inline-block;padding:0;margin:0;list-style-type:none;font-size:0.9rem}"}}]);
//# sourceMappingURL=20.6dc9cbc000c9d4a6b337.bundle.js.map