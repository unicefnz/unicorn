(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{442:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"uni_radio_controller",(function(){return UniRadioController}));__webpack_require__(3),__webpack_require__(7),__webpack_require__(18),__webpack_require__(16),__webpack_require__(50),__webpack_require__(25),__webpack_require__(20),__webpack_require__(11),__webpack_require__(13),__webpack_require__(19),__webpack_require__(9),__webpack_require__(17),__webpack_require__(4),__webpack_require__(23),__webpack_require__(8),__webpack_require__(15),__webpack_require__(12),__webpack_require__(26),__webpack_require__(14);var _index_d39d7150_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(22);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var UniRadioController=function(){function UniRadioController(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,UniRadioController),Object(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_19__.k)(this,hostRef),this.uniChange=Object(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_19__.f)(this,"uniChange",3)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(UniRadioController,[{key:"componentDidLoad",value:function componentDidLoad(){this.getOpts().forEach((function(opt,index){opt.value||(opt.value=index.toString())})),this.value&&this.onValueChange(this.value)}},{key:"render",value:function render(){return Object(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_19__.i)("slot",null)}},{key:"onValueChange",value:function onValueChange(val){var opt=this.getOpts().find((function(o){return o.value===val}));this.selectOpt(opt)}},{key:"onSelect",value:function onSelect(event){this.selectOpt(event.target),event.stopPropagation()}},{key:"selectOpt",value:function selectOpt(opt){this.selected!==opt&&(this.selected&&(this.selected.selected=!1),opt&&(this.selected=opt,opt.selected=!0,this.uniChange.emit(opt.value)))}},{key:"getOpts",value:function getOpts(){var _ref,children=Array.from(this.el.shadowRoot.querySelector("slot").assignedElements({flatten:!0}));return(_ref=[]).concat.apply(_ref,_toConsumableArray(children.map((function(child){return child.matches("[uni-radio-option]")?[child]:Array.from(child.querySelectorAll("[uni-radio-option]"))}))))}},{key:"el",get:function get(){return Object(_index_d39d7150_js__WEBPACK_IMPORTED_MODULE_19__.h)(this)}}],[{key:"watchers",get:function get(){return{value:["onValueChange"]}}}]),UniRadioController}()}}]);
//# sourceMappingURL=21.b72027abb154e4a3250b.bundle.js.map