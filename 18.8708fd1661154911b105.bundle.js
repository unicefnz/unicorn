(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{705:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_outside_click",(function(){return UniOutsideClick}));__webpack_require__(35);var _index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}var UniOutsideClick=function(){function UniOutsideClick(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniOutsideClick),Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_1__.k)(this,hostRef),this.onMouseDown=function(e){_this.rootOrEl.contains(e.target)||document.addEventListener("mouseup",_this.onMouseUp,{capture:!0})},this.onMouseUp=function(e){_this.rootOrEl.contains(e.target)||_this.uniOutsideClick.emit(e)},this.uniOutsideClick=Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_1__.f)(this,"uniOutsideClick",3)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniOutsideClick,[{key:"connectedCallback",value:function connectedCallback(){document.addEventListener("mousedown",this.onMouseDown,{capture:!0})}},{key:"disconnectedCallback",value:function disconnectedCallback(){document.removeEventListener("mousedown",this.onMouseDown,{capture:!0}),document.removeEventListener("mouseup",this.onMouseUp,{capture:!0})}},{key:"render",value:function render(){return Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",null)}},{key:"rootOrEl",get:function get(){return this.root||this.el}},{key:"el",get:function get(){return Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_1__.h)(this)}}]),UniOutsideClick}()}}]);
//# sourceMappingURL=18.8708fd1661154911b105.bundle.js.map