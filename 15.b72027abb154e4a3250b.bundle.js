(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{437:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_combo_text",(function(){return UniComboText}));__webpack_require__(23);var _index_d39d7150_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var UniComboText=function(){function UniComboText(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniComboText),Object(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_1__.k)(this,hostRef),this.uniSelect=Object(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_1__.f)(this,"uniSelect",7),this.disabled=!1,this.selectOn="focusin",this.selectEmitter=function(){return _this.uniSelect.emit()}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniComboText,[{key:"onSelectOnChange",value:function onSelectOnChange(newVal,oldVal){oldVal&&this.el.removeEventListener(oldVal,this.selectEmitter),this.el.addEventListener(newVal,this.selectEmitter)}},{key:"connectedCallback",value:function connectedCallback(){this.onSelectOnChange(this.selectOn)}},{key:"render",value:function render(){return Object(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_1__.i)(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_1__.b,{class:{"uni-selected":this.selected,"uni-disabled":this.disabled},"uni-radio-option":!0},Object(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",null))}},{key:"el",get:function get(){return Object(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_1__.h)(this)}}],[{key:"watchers",get:function get(){return{selectOn:["onSelectOnChange"]}}}]),UniComboText}();UniComboText.style=":host{--uni-border:none;--uni-border-radius:0;--uni-x-border:var(--uni-border);--uni-x-border-radius:var(--uni-border-radius);display:block}::slotted(uni-text-field){--uni-border:var(--uni-x-border);--uni-border-radius:var(--uni-x-border-radius);margin:0;height:100%}:host(.uni-selected) ::slotted(uni-text-field){--uni-color:var(--uni-accent)}"}}]);
//# sourceMappingURL=15.b72027abb154e4a3250b.bundle.js.map