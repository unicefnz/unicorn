(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1152:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_combo_group",(function(){return UniComboGroup}));__webpack_require__(17),__webpack_require__(52),__webpack_require__(100),__webpack_require__(1175),__webpack_require__(39),__webpack_require__(24),__webpack_require__(62),__webpack_require__(22),__webpack_require__(33),__webpack_require__(77),__webpack_require__(13),__webpack_require__(40);var _index_19bb2650_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(209);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var UniComboGroup=function(){function UniComboGroup(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniComboGroup),Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_12__.g)(this,hostRef),this.uniChange=Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_12__.c)(this,"uniChange",3),this.variant="combo",this.setRadioTabindex=function(value){var radios=_this.getOpts(),first=radios.find((function(radio){return!radio.disabled})),checked=radios.find((function(radio){return radio.value===value&&!radio.disabled}));if(first||checked){var focusable=checked||first;radios.forEach((function(radio){radio.setAttribute("tabIndex",radio===focusable?"0":"-1")}))}}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniComboGroup,[{key:"valueChanged",value:function valueChanged(value){this.setRadioTabindex(value)}},{key:"componentDidLoad",value:function componentDidLoad(){this.setRadioTabindex(this.value)}},{key:"getOpts",value:function getOpts(){var _ref,children=Array.from(this.el.shadowRoot.querySelector("slot").assignedElements({flatten:!0}));return(_ref=[]).concat.apply(_ref,_toConsumableArray(children.map((function(child){return child.matches("[uni-radio-option]")?[child]:Array.from(child.querySelectorAll("[uni-radio-option]"))}))))}},{key:"onSelect",value:function onSelect(e){var target=e.target&&e.target.closest("[uni-radio-option]");target&&this.value!==target.value&&(this.value=target.value,this.uniChange.emit(this.value))}},{key:"onKeydown",value:function onKeydown(ev){if(!ev.target||this.el.contains(ev.target)){var radios=Array.from(this.el.querySelectorAll("[uni-radio-option]")).filter((function(radio){return!radio.disabled}));if(ev.target&&radios.includes(ev.target)){var next,index=radios.findIndex((function(radio){return radio===ev.target})),current=radios[index];["ArrowDown","ArrowRight"].includes(ev.code)&&(next=index===radios.length-1?radios[0]:radios[index+1]),["ArrowUp","ArrowLeft"].includes(ev.code)&&(next=0===index?radios[radios.length-1]:radios[index-1]),next&&radios.includes(next)&&(next.setFocus(ev),this.value=next.value),["Space"].includes(ev.code)&&(this.value=current.value)}}}},{key:"render",value:function render(){return Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_12__.e)(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_12__.a,{onUniSelect:this.onSelect,class:"uni-variant-"+this.variant,role:"radiogroup"},Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_12__.e)("div",{class:"wrapper"},Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_12__.e)("slot",null)))}},{key:"el",get:function get(){return Object(_index_19bb2650_js__WEBPACK_IMPORTED_MODULE_12__.d)(this)}}],[{key:"watchers",get:function get(){return{value:["valueChanged"]}}}]),UniComboGroup}();UniComboGroup.style=":host{display:block}.wrapper{display:flex;justify-content:stretch;align-items:stretch;flex-wrap:wrap}:host(.uni-variant-button) .wrapper{margin:-0.6rem}:host(.uni-variant-button) ::slotted([uni-radio-option]){--uni-border-width:2px;--uni-border-radius:4px;margin:0.6rem;flex:1}:host(.uni-variant-combo){border:2px solid var(--uni-dark);border-radius:4px}:host(.uni-variant-combo) .wrapper{overflow:hidden;margin:-1px}:host(.uni-variant-combo) ::slotted([uni-radio-option]){--uni-border-width:1px;--uni-border-radius:0;flex:1}"},1175:function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(9),$findIndex=__webpack_require__(91).findIndex,addToUnscopables=__webpack_require__(211),arrayMethodUsesToLength=__webpack_require__(68),SKIPS_HOLES=!0,USES_TO_LENGTH=arrayMethodUsesToLength("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){SKIPS_HOLES=!1})),$({target:"Array",proto:!0,forced:SKIPS_HOLES||!USES_TO_LENGTH},{findIndex:function findIndex(callbackfn){return $findIndex(this,callbackfn,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables("findIndex")}}]);
//# sourceMappingURL=7.5c07ba96147e6e174b5e.bundle.js.map