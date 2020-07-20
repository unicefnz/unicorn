/*! For license information please see 5.b78fa144d373ca4d5e43.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{693:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scopeCss",(function(){return scopeCss}));__webpack_require__(23),__webpack_require__(26),__webpack_require__(27),__webpack_require__(10),__webpack_require__(11),__webpack_require__(36),__webpack_require__(84),__webpack_require__(24),__webpack_require__(12),__webpack_require__(313),__webpack_require__(38),__webpack_require__(75),__webpack_require__(65),__webpack_require__(20),__webpack_require__(44),__webpack_require__(8),__webpack_require__(317),__webpack_require__(29),__webpack_require__(25),__webpack_require__(16),__webpack_require__(74),__webpack_require__(85),__webpack_require__(211),__webpack_require__(712),__webpack_require__(316),__webpack_require__(713),__webpack_require__(13),__webpack_require__(19);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _parenSuffix=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",_cssColonHostRe=new RegExp("(-shadowcsshost"+_parenSuffix,"gim"),_cssColonHostContextRe=new RegExp("(-shadowcsscontext"+_parenSuffix,"gim"),_cssColonSlottedRe=new RegExp("(-shadowcssslotted"+_parenSuffix,"gim"),_polyfillHostNoCombinatorRe=/-shadowcsshost-no-combinator([^\s]*)/,_shadowDOMSelectorsRe=[/::shadow/g,/::content/g],_polyfillHostRe=/-shadowcsshost/gim,_colonHostRe=/:host/gim,_colonSlottedRe=/::slotted/gim,_colonHostContextRe=/:host-context/gim,_commentRe=/\/\*\s*[\s\S]*?\*\//g,_commentWithHashRe=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_ruleRe=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_curlyRe=/([{}])/g,processRules=function(input,ruleCallback){var inputWithEscapedBlocks=escapeBlocks(input),nextBlockIndex=0;return inputWithEscapedBlocks.escapedString.replace(_ruleRe,(function(){var selector=2>=arguments.length?void 0:arguments[2],content="",suffix=4>=arguments.length?void 0:arguments[4],contentPrefix="";suffix&&suffix.startsWith("{%BLOCK%")&&(content=inputWithEscapedBlocks.blocks[nextBlockIndex++],suffix=suffix.substring("%BLOCK%".length+1),contentPrefix="{");var cssRule={selector:selector,content:content},rule=ruleCallback(cssRule);return"".concat(1>=arguments.length?void 0:arguments[1]).concat(rule.selector).concat(3>=arguments.length?void 0:arguments[3]).concat(contentPrefix).concat(rule.content).concat(suffix)}))},escapeBlocks=function(input){for(var part,inputParts=input.split(_curlyRe),resultParts=[],escapedBlocks=[],bracketCount=0,currentBlockParts=[],partIndex=0;partIndex<inputParts.length;partIndex++)"}"===(part=inputParts[partIndex])&&bracketCount--,0<bracketCount?currentBlockParts.push(part):(0<currentBlockParts.length&&(escapedBlocks.push(currentBlockParts.join("")),resultParts.push("%BLOCK%"),currentBlockParts=[]),resultParts.push(part)),"{"===part&&bracketCount++;return 0<currentBlockParts.length&&(escapedBlocks.push(currentBlockParts.join("")),resultParts.push("%BLOCK%")),{escapedString:resultParts.join(""),blocks:escapedBlocks}},convertColonRule=function(cssText,regExp,partReplacer){return cssText.replace(regExp,(function(){for(var _len=arguments.length,m=Array(_len),_key=0;_key<_len;_key++)m[_key]=arguments[_key];if(m[2]){for(var p,parts=m[2].split(","),r=[],i=0;i<parts.length&&(p=parts[i].trim());i++)r.push(partReplacer("-shadowcsshost-no-combinator",p,m[3]));return r.join(",")}return"-shadowcsshost-no-combinator"+m[3]}))},colonHostPartReplacer=function(host,part,suffix){return host+part.replace("-shadowcsshost","")+suffix},colonHostContextPartReplacer=function(host,part,suffix){return-1<part.indexOf("-shadowcsshost")?colonHostPartReplacer(host,part,suffix):host+part+suffix+", "+part+" "+host+suffix},selectorNeedsScoping=function(selector,scopeSelector){return!function(scopeSelector){return scopeSelector=scopeSelector.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+scopeSelector+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(scopeSelector).test(selector)},applyStrictSelectorScope=function(selector,scopeSelector,hostSelector){for(var res,className="."+(scopeSelector=scopeSelector.replace(/\[is=([^\]]*)\]/g,(function(){return 1>=arguments.length?void 0:arguments[1]}))),_scopeSelectorPart=function(p){var scopedP=p.trim();if(!scopedP)return"";if(-1<p.indexOf("-shadowcsshost-no-combinator"))scopedP=function(selector,scopeSelector,hostSelector){if(_polyfillHostRe.lastIndex=0,_polyfillHostRe.test(selector)){var replaceBy=".".concat(hostSelector);return selector.replace(_polyfillHostNoCombinatorRe,(function(_,selector){return selector.replace(/([^:]*)(:*)(.*)/,(function(_,before,colon,after){return before+replaceBy+colon+after}))})).replace(_polyfillHostRe,replaceBy+" ")}return scopeSelector+" "+selector}(p,scopeSelector,hostSelector);else{var t=p.replace(_polyfillHostRe,"");if(0<t.length){var matches=t.match(/([^:]*)(:*)(.*)/);matches&&(scopedP=matches[1]+className+matches[2]+matches[3])}}return scopedP},safeContent=function(selector){var placeholders=[],index=0;return{content:(selector=selector.replace(/(\[[^\]]*\])/g,(function(_,keep){var replaceBy="__ph-".concat(index,"__");return placeholders.push(keep),index++,replaceBy}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(_,pseudo,exp){var replaceBy="__ph-".concat(index,"__");return placeholders.push(exp),index++,pseudo+replaceBy})),placeholders:placeholders}}(selector),scopedSelector="",startIndex=0,sep=/( |>|\+|~(?!=))\s*/g,shouldScope=!(-1<(selector=safeContent.content).indexOf("-shadowcsshost-no-combinator"));null!==(res=sep.exec(selector));){var separator=res[1],_part=selector.slice(startIndex,res.index).trim(),scopedPart=(shouldScope=shouldScope||-1<_part.indexOf("-shadowcsshost-no-combinator"))?_scopeSelectorPart(_part):_part;scopedSelector+="".concat(scopedPart," ").concat(separator," "),startIndex=sep.lastIndex}var placeholders,part=selector.substring(startIndex);return scopedSelector+=(shouldScope=shouldScope||-1<part.indexOf("-shadowcsshost-no-combinator"))?_scopeSelectorPart(part):part,placeholders=safeContent.placeholders,scopedSelector.replace(/__ph-(\d+)__/g,(function(_,index){return placeholders[+index]}))},scopeSelectors=function(cssText,scopeSelectorText,hostSelector,slotSelector){return processRules(cssText,(function(rule){var selector=rule.selector,content=rule.content;return"@"!==rule.selector[0]?selector=function(selector,scopeSelectorText,hostSelector,slotSelector){return selector.split(",").map((function(shallowPart){return slotSelector&&-1<shallowPart.indexOf("."+slotSelector)?shallowPart.trim():selectorNeedsScoping(shallowPart,scopeSelectorText)?applyStrictSelectorScope(shallowPart,scopeSelectorText,hostSelector).trim():shallowPart.trim()})).join(", ")}(rule.selector,scopeSelectorText,hostSelector,slotSelector):(rule.selector.startsWith("@media")||rule.selector.startsWith("@supports")||rule.selector.startsWith("@page")||rule.selector.startsWith("@document"))&&(content=scopeSelectors(rule.content,scopeSelectorText,hostSelector,slotSelector)),{selector:selector.replace(/\s{2,}/g," ").trim(),content:content}}))},scopeCssText=function(cssText,scopeId,hostScopeId,slotScopeId){var slotted=function(cssText,slotScopeId){var selectors=[];return cssText=cssText.replace(_cssColonSlottedRe,(function(){for(var _len2=arguments.length,m=Array(_len2),_key2=0;_key2<_len2;_key2++)m[_key2]=arguments[_key2];if(m[2]){for(var _char,compound=m[2].trim(),suffix=m[3],slottedSelector="."+slotScopeId+" > "+compound+suffix,prefixSelector="",i=m[4]-1;0<=i&&("}"!==(_char=m[5][i])&&","!==_char);i--)prefixSelector=_char+prefixSelector;var orgSelector=prefixSelector+slottedSelector,addedSelector="".concat(prefixSelector.trimRight()).concat(slottedSelector.trim());if(orgSelector.trim()!==addedSelector.trim()){var updatedSelector="".concat(addedSelector,", ").concat(orgSelector);selectors.push({orgSelector:orgSelector,updatedSelector:updatedSelector})}return slottedSelector}return"-shadowcsshost-no-combinator"+m[3]})),{selectors:selectors,cssText:cssText}}(cssText=function(cssText){return convertColonRule(cssText,_cssColonHostContextRe,colonHostContextPartReplacer)}(cssText=function(cssText){return convertColonRule(cssText,_cssColonHostRe,colonHostPartReplacer)}(cssText=cssText.replace(_colonHostContextRe,"-shadowcsscontext").replace(_colonHostRe,"-shadowcsshost").replace(_colonSlottedRe,"-shadowcssslotted"))),slotScopeId);return cssText=function(cssText){return _shadowDOMSelectorsRe.reduce((function(result,pattern){return result.replace(pattern," ")}),cssText)}(cssText=slotted.cssText),scopeId&&(cssText=scopeSelectors(cssText,scopeId,hostScopeId,slotScopeId)),{cssText:(cssText=(cssText=cssText.replace(/-shadowcsshost-no-combinator/g,".".concat(hostScopeId))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:slotted.selectors}},scopeCss=function(cssText,scopeId,commentOriginalSelector){var commentsWithHash=cssText.match(_commentWithHashRe)||[];cssText=function(input){return input.replace(_commentRe,"")}(cssText);var orgSelectors=[];if(commentOriginalSelector){var processCommentedSelector=function(rule){var placeholder="/*!@___".concat(orgSelectors.length,"___*/"),comment="/*!@".concat(rule.selector,"*/");return orgSelectors.push({placeholder:placeholder,comment:comment}),rule.selector=placeholder+rule.selector,rule};cssText=processRules(cssText,(function(rule){return"@"!==rule.selector[0]?processCommentedSelector(rule):rule.selector.startsWith("@media")||rule.selector.startsWith("@supports")||rule.selector.startsWith("@page")||rule.selector.startsWith("@document")?(rule.content=processRules(rule.content,processCommentedSelector),rule):rule}))}var scoped=scopeCssText(cssText,scopeId,scopeId+"-h",scopeId+"-s");return cssText=[scoped.cssText].concat(_toConsumableArray(commentsWithHash)).join("\n"),commentOriginalSelector&&orgSelectors.forEach((function(_ref){var placeholder=_ref.placeholder,comment=_ref.comment;cssText=cssText.replace(placeholder,comment)})),scoped.slottedSelectors.forEach((function(slottedSelector){cssText=cssText.replace(slottedSelector.orgSelector,slottedSelector.updatedSelector)})),cssText}},712:function(module,exports,__webpack_require__){"use strict";var descriptor,$=__webpack_require__(1),getOwnPropertyDescriptor=__webpack_require__(83).f,toLength=__webpack_require__(39),notARegExp=__webpack_require__(314),requireObjectCoercible=__webpack_require__(49),correctIsRegExpLogic=__webpack_require__(315),IS_PURE=__webpack_require__(73),nativeStartsWith="".startsWith,min=Math.min,CORRECT_IS_REGEXP_LOGIC=correctIsRegExpLogic("startsWith");$({target:"String",proto:!0,forced:!!(IS_PURE||CORRECT_IS_REGEXP_LOGIC||(descriptor=getOwnPropertyDescriptor(String.prototype,"startsWith"),!descriptor||descriptor.writable))&&!CORRECT_IS_REGEXP_LOGIC},{startsWith:function startsWith(searchString){var that=String(requireObjectCoercible(this));notARegExp(searchString);var index=toLength(min(arguments.length>1?arguments[1]:void 0,that.length)),search=String(searchString);return nativeStartsWith?nativeStartsWith.call(that,search,index):that.slice(index,index+search.length)===search}})},713:function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(1),$trimEnd=__webpack_require__(138).end,FORCED=__webpack_require__(318)("trimEnd"),trimEnd=FORCED?function trimEnd(){return $trimEnd(this)}:"".trimEnd;$({target:"String",proto:!0,forced:FORCED},{trimEnd:trimEnd,trimRight:trimEnd})}}]);
//# sourceMappingURL=5.b78fa144d373ca4d5e43.bundle.js.map