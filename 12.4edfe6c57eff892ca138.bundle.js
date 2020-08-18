(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{434:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_checkbox",(function(){return UniCheckbox}));__webpack_require__(23);var _index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var nextUniqueId=0,UniCheckbox=function(){function UniCheckbox(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniCheckbox),Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.k)(this,hostRef),this.uniChange=Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.f)(this,"uniChange",7),this.checked=!1,this.indeterminate=!1,this.readonly=!1,this.disabled=!1,this.uniqueId="uni-checkbox-"+nextUniqueId++}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniCheckbox,[{key:"render",value:function render(){var _this=this;return Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.b,{class:{"uni-disabled":this.disabled,"uni-checked":this.checked,"uni-indeterminate":this.indeterminate}},Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)("div",{class:"uni-checkbox"},Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)("input",{id:this.uniqueId,type:"checkbox",onChange:function onChange(e){return _this.uniChange.emit(e.target.checked)},disabled:this.disabled,checked:this.checked,value:this.value,readOnly:this.readonly}),Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)("div",{class:"uni-checkbox-icon"},Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"uni-checkbox-check"},Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)("polyline",{points:"416 128 192 384 96 288",style:{fill:"none",stroke:"var(--uni-dark)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"56px"}})),Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)("div",{class:"uni-checkbox-indeterminate"})),Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)("div",{class:"uni-checkbox-visual"})),Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)("label",{htmlFor:this.uniqueId},Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",null)))}},{key:"el",get:function get(){return Object(_index_49c088d0_js__WEBPACK_IMPORTED_MODULE_1__.h)(this)}}]),UniCheckbox}();UniCheckbox.style=":host{display:block}.uni-checkbox-indeterminate{width:8px;border:1px solid var(--uni-accent-contrast);border-radius:1px}.uni-checkbox-check{width:1rem;height:1rem;color:var(--uni-accent-contrast)}.uni-checkbox input,label{cursor:pointer}label{vertical-align:middle}.uni-checkbox{position:relative;vertical-align:middle;margin-right:0.5rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px}.uni-checkbox input{margin:0;width:100%;height:100%;position:absolute;opacity:0;cursor:pointer;z-index:2}.uni-checkbox .uni-checkbox-visual{width:16px;height:16px;border:2px solid var(--uni-accent-contrast);border-radius:4px;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}.uni-checkbox .uni-checkbox-icon{position:absolute;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden;color:var(--uni-accent-contrast);opacity:0;-webkit-transition:opacity 0.3s;transition:opacity 0.3s}:host(.uni-disabled) .uni-checkbox input,:host(.uni-disabled) label{cursor:not-allowed}:host(.uni-disabled) .uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-light)}:host(.uni-disabled) label{opacity:0.5}.uni-checkbox input:checked~.uni-checkbox-visual,:host(.uni-indeterminate) .uni-checkbox-visual{background:var(--uni-accent)}.uni-checkbox input:checked~.uni-checkbox-icon,:host(.uni-indeterminate) .uni-checkbox-icon{opacity:1}:host(:not(.uni-indeterminate)) .uni-checkbox-indeterminate{display:none}:host(.uni-indeterminate) .uni-checkbox-icon .uni-checkbox-check,.uni-checkbox input:not(:checked)~.uni-checkbox-icon .uni-checkbox-check{display:none}"}}]);
//# sourceMappingURL=12.4edfe6c57eff892ca138.bundle.js.map