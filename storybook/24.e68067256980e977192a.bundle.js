(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1163:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_tab_content",(function(){return UniTabContent}));__webpack_require__(99),__webpack_require__(24),__webpack_require__(33),__webpack_require__(13);var _index_19bb2650_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(209);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var itemId=0,UniTabContent=function(){function UniTabContent(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniTabContent),Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_4__.g)(this,hostRef),this.uniqueId="uni-tab-content-".concat(itemId++),this.parentGroup=null,this.selected=!1,this.value=this.uniqueId,this.ariaLabelledBy=null,this.updateState=function(){var _a,_b,_c;_this.selected=(null===(_a=_this.parentGroup)||void 0===_a?void 0:_a.value)===_this.value,_this.ariaLabelledBy=(null===(_c=Array.from((null===(_b=_this.parentGroup)||void 0===_b?void 0:_b.querySelectorAll("uni-tab"))||[]).find((function(el){return el.value===_this.value})))||void 0===_c?void 0:_c.id)||null}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniTabContent,[{key:"onValueChange",value:function onValueChange(){this.updateState()}},{key:"connectedCallback",value:function connectedCallback(){this.parentGroup=this.el.closest("uni-tabs"),this.parentGroup&&(this.updateState(),this.parentGroup.addEventListener("uniInternalChange",this.updateState))}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.parentGroup&&(this.parentGroup.removeEventListener("uniInternalChange",this.updateState),this.parentGroup=null)}},{key:"render",value:function render(){return Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_4__.e)(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_4__.a,{"uni-selected":this.selected,role:"tabpanel","aria-labelledby":this.ariaLabelledBy},Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_4__.e)("slot",null))}},{key:"el",get:function get(){return Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_4__.d)(this)}}],[{key:"watchers",get:function get(){return{value:["onValueChange"]}}}]),UniTabContent}();UniTabContent.style=":host{display:none;padding-top:0.5rem}:host([uni-selected]){display:block}"}}]);
//# sourceMappingURL=24.e68067256980e977192a.bundle.js.map