(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{711:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_tooltip",(function(){return UniTooltip}));__webpack_require__(35),__webpack_require__(56);var _index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}var UniTooltip=function(){function UniTooltip(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniTooltip),Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_2__.k)(this,hostRef),this.arrow=!0,this.hideDelay=300,this.position="right",this.useHover=!0,this.useFocus=!0,this.shown=!1,this.focused=!1,this.offsets={left:0,top:0},this.onMouseEnter=function(){_this.focused||(_this.show(),_this.el.addEventListener("mouseleave",_this.onMouseLeave))},this.onMouseLeave=function(){_this.hide(),_this.el.removeEventListener("mouseleave",_this.onMouseLeave)},this.onFocus=function(){_this.show(),_this.focused=!0,_this.el.addEventListener("focusout",_this.onBlur)},this.onBlur=function(){_this.hide(),_this.focused=!1,_this.el.removeEventListener("focusout",_this.onBlur)}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniTooltip,[{key:"connectedCallback",value:function connectedCallback(){this.useHoverChange(this.useHover),this.useFocusChange(this.useFocus)}},{key:"onValueChange",value:function onValueChange(newVal){newVal&&!this.shown?this.show():this.shown&&this.hide()}},{key:"useHoverChange",value:function useHoverChange(newVal){newVal?this.el.addEventListener("mouseenter",this.onMouseEnter):this.el.removeEventListener("mouseenter",this.onMouseEnter)}},{key:"useFocusChange",value:function useFocusChange(newVal){newVal?this.el.addEventListener("focusin",this.onFocus):this.el.removeEventListener("focusin",this.onFocus)}},{key:"render",value:function render(){var _class;return this.shown&&this.computeOffsets(),this.value&&!this.shown&&this.onValueChange(this.value),Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_2__.i)(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_2__.b,{class:(_class={},_defineProperty(_class,"uni-tooltip--position-"+this.position,!0),_defineProperty(_class,"uni-tooltip--open",this.shown),_defineProperty(_class,"uni-tooltip--has-arrow",this.arrow),_class)},Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_2__.i)("slot",null),Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_2__.i)("div",{class:"tooltip-content",style:{left:this.offsets.left?this.offsets.left+"px":void 0,top:this.offsets.top?this.offsets.top+"px":void 0}},this.text||Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_2__.i)("slot",{name:"content"})))}},{key:"show",value:function show(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null),this.shown||(this.shown=!0)}},{key:"hide",value:function hide(){var _this2=this;this.shown&&(this.hideTimeout||(this.hideTimeout=setTimeout((function(){_this2.hideTimeout=null,_this2.shown=!1}),this.hideDelay)))}},{key:"computeOffsets",value:function computeOffsets(){var contentEl=this.el.shadowRoot.querySelector(".tooltip-content");contentEl.style.visibility="hidden",contentEl.style.display="block";var contentBox=contentEl.getBoundingClientRect();contentEl.style.visibility=null,contentEl.style.display=null;var triggerBox=this.el.getBoundingClientRect();if("top"===this.position||"bottom"===this.position){var docWidth=document.body.clientWidth,triggerCenter=window.scrollX+triggerBox.left+triggerBox.width/2,contentLeft=window.scrollX+contentBox.left,offset=triggerCenter-(contentLeft+contentBox.width/2);contentBox.right+offset>docWidth&&(offset=docWidth-contentBox.right),0>contentLeft+offset&&(offset=-contentLeft),this.offsets={top:0,left:this.offsets.left+offset}}else{var _triggerCenter=window.scrollY+triggerBox.top+triggerBox.height/2,contentTop=window.scrollY+contentBox.top,_offset=_triggerCenter-(contentTop+contentBox.height/2);0>contentTop+_offset&&(_offset=-contentTop),this.offsets={top:this.offsets.top+_offset,left:0}}}},{key:"el",get:function get(){return Object(_index_0f5e3df3_js__WEBPACK_IMPORTED_MODULE_2__.h)(this)}}],[{key:"watchers",get:function get(){return{value:["onValueChange"],useHover:["useHoverChange"],useFocus:["useFocusChange"]}}}]),UniTooltip}();UniTooltip.style=':host{--border-color:var(--uni-dark);--animation-name:tooltip-enter-horiz;position:relative;display:inline-block}.tooltip-content{display:none;position:absolute;z-index:999;padding:0.4rem;min-width:140px;max-width:400px;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid var(--border-color);border-radius:8px;background:#FFF}:host(.uni-tooltip--has-arrow)::after{content:"";position:absolute;z-index:999;display:none;margin:auto;width:0;height:0;border-style:solid}:host(.uni-tooltip--open) .tooltip-content{display:block}:host(.uni-tooltip--open)::after{display:block}:host::after{-webkit-transition:opacity 0.5s, -webkit-transform 0.5s;transition:opacity 0.5s, -webkit-transform 0.5s;transition:opacity 0.5s, transform 0.5s;transition:opacity 0.5s, transform 0.5s, -webkit-transform 0.5s}:host(.uni-tooltip--position-top)::after,:host(.uni-tooltip--position-top) .tooltip-content,:host(.uni-tooltip--position-bottom)::after,:host(.uni-tooltip--position-bottom) .tooltip-content{-webkit-animation:tooltip-enter-vert 0.3s 1 cubic-bezier(0.03, 1.05, 0.83, 1.02) forwards;animation:tooltip-enter-vert 0.3s 1 cubic-bezier(0.03, 1.05, 0.83, 1.02) forwards}:host(.uni-tooltip--position-left)::after,:host(.uni-tooltip--position-left) .tooltip-content,:host(.uni-tooltip--position-right)::after,:host(.uni-tooltip--position-right) .tooltip-content{-webkit-animation:tooltip-enter-horiz 0.3s 1 cubic-bezier(0.03, 1.05, 0.83, 1.02) forwards;animation:tooltip-enter-horiz 0.3s 1 cubic-bezier(0.03, 1.05, 0.83, 1.02) forwards}:host(.uni-tooltip--position-top) .tooltip-content{bottom:calc(100% + 12px);left:0}:host(.uni-tooltip--position-top)::after{bottom:calc(100% + 2px);left:0;right:0;border-width:12px 8px 0 8px;border-color:var(--border-color) transparent transparent transparent}:host(.uni-tooltip--position-bottom) .tooltip-content{top:calc(100% + 12px);left:0}:host(.uni-tooltip--position-bottom)::after{top:calc(100% + 2px);left:0;right:0;border-width:0 8px 12px 8px;border-color:transparent transparent var(--border-color) transparent}:host(.uni-tooltip--position-left) .tooltip-content{right:calc(100% + 12px);top:0}:host(.uni-tooltip--position-left)::after{right:calc(100% + 2px);top:0;bottom:0;border-width:8px 0 8px 12px;border-color:transparent transparent transparent var(--border-color)}:host(.uni-tooltip--position-right) .tooltip-content{left:calc(100% + 12px);top:0}:host(.uni-tooltip--position-right)::after{left:calc(100% + 2px);top:0;bottom:0;border-width:8px 12px 8px 0;border-color:transparent var(--border-color) transparent transparent}@-webkit-keyframes tooltip-enter-horiz{from{opacity:0;-webkit-transform:translateX(-4px);transform:translateX(-4px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes tooltip-enter-horiz{from{opacity:0;-webkit-transform:translateX(-4px);transform:translateX(-4px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes tooltip-enter-vert{from{opacity:0;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes tooltip-enter-vert{from{opacity:0;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}'}}]);
//# sourceMappingURL=24.8708fd1661154911b105.bundle.js.map