(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{697:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_button",(function(){return UniButton}));__webpack_require__(36);var _index_35a1466c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var UniButton=function(){function UniButton(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniButton),Object(_index_35a1466c_js__WEBPACK_IMPORTED_MODULE_1__.k)(this,hostRef),this.type="button",this.color="accent",this.variant="solid"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniButton,[{key:"handleClick",value:function handleClick(e){if("button"!==this.type){var form=this.el.closest("form");if(form){e.preventDefault();var fakeButton=document.createElement("button");fakeButton.type=this.type,fakeButton.style.display="none",form.appendChild(fakeButton),fakeButton.click(),fakeButton.remove()}}}},{key:"render",value:function render(){var _class,_this=this,isDisabled=this.disabled||this.loading,contents=[Object(_index_35a1466c_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",{name:"prepend-icon"}),Object(_index_35a1466c_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",null)];return Object(_index_35a1466c_js__WEBPACK_IMPORTED_MODULE_1__.i)(_index_35a1466c_js__WEBPACK_IMPORTED_MODULE_1__.b,{class:(_class={},_defineProperty(_class,"uni-variant-"+this.variant,!0),_defineProperty(_class,"uni-color-".concat(this.color),!0),_defineProperty(_class,"uni-loading",this.loading),_defineProperty(_class,"uni-disabled",isDisabled),_defineProperty(_class,"uni-button-icon",this.icon),_class),onClick:function onClick(e){return _this.handleClick(e)}},this.href?Object(_index_35a1466c_js__WEBPACK_IMPORTED_MODULE_1__.i)("a",{class:"button",href:this.href,onClick:function onClick(e){return isDisabled&&e.preventDefault()}},contents):Object(_index_35a1466c_js__WEBPACK_IMPORTED_MODULE_1__.i)("button",{class:"button",type:this.type,disabled:isDisabled},contents))}},{key:"el",get:function get(){return Object(_index_35a1466c_js__WEBPACK_IMPORTED_MODULE_1__.h)(this)}}]),UniButton}();UniButton.style=":host{display:inline-block;--background:var(--uni-color, var(--uni-accent));--contrast:var(--uni-color-contrast, var(--uni-accent-contrast))}.button{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 18px;height:40px;min-width:120px;width:100%;border:none;border-radius:20px;background:none;cursor:pointer;font:inherit;font-size:1rem;text-decoration:none;white-space:nowrap}.button-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}::slotted([slot=prepend-icon]){margin-right:10px}:host(.uni-button-icon) .button{min-width:40px;padding:0 !important}:host(.uni-disabled) .button{cursor:not-allowed;opacity:0.7}:host(.uni-loading) .button{cursor:progress}:host(.uni-loading) .button{background-image:-webkit-gradient(linear, left top, right top, color-stop(25%, transparent), color-stop(37.5%, rgba(255, 255, 255, 0.5)), color-stop(50%, transparent));background-image:linear-gradient(90deg, transparent 25%, rgba(255, 255, 255, 0.5) 37.5%, transparent 50%);background-size:400% 400%;-webkit-animation:uni-loading-pill 1.5s infinite linear;animation:uni-loading-pill 1.5s infinite linear}:host(.uni-variant-border:not(.uni-loading)) .button{padding:0 16px;border:2px solid var(--background);-webkit-transition:background-color 0.3s, color 0.3s;transition:background-color 0.3s, color 0.3s;color:var(--background)}:host(.uni-variant-border:not(.uni-disabled):hover) .button,:host(.uni-variant-border:not(.uni-disabled)) .button:focus{color:var(--contrast);background-color:var(--background)}:host(.uni-variant-solid) .button,:host(.uni-loading) .button{background-color:var(--background);-webkit-transition:-webkit-filter 0.3s;transition:-webkit-filter 0.3s;transition:filter 0.3s;transition:filter 0.3s, -webkit-filter 0.3s;color:var(--contrast)}:host(.uni-variant-solid:not(.uni-disabled)) .button:hover,:host(.uni-variant-solid:not(.uni-disabled)) .button:focus{-webkit-filter:brightness(90%);filter:brightness(90%)}@-webkit-keyframes uni-loading-pill{from{background-position-x:75%}to{background-position-x:0}}@keyframes uni-loading-pill{from{background-position-x:75%}to{background-position-x:0}}"}}]);
//# sourceMappingURL=11.564f0cb168e892e13f02.bundle.js.map