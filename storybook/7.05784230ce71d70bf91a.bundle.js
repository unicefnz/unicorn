/*! For license information please see 7.05784230ce71d70bf91a.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1059:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scopeCss",(function(){return scopeCss}));__webpack_require__(54),__webpack_require__(26),__webpack_require__(306),__webpack_require__(21),__webpack_require__(102),__webpack_require__(207),__webpack_require__(18),__webpack_require__(55),__webpack_require__(61),__webpack_require__(117),__webpack_require__(15),__webpack_require__(1090),__webpack_require__(69),__webpack_require__(11),__webpack_require__(23),__webpack_require__(38),__webpack_require__(39),__webpack_require__(16),__webpack_require__(4),__webpack_require__(9),__webpack_require__(12),__webpack_require__(19),__webpack_require__(13),__webpack_require__(14),__webpack_require__(17),__webpack_require__(24),__webpack_require__(5);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _parenSuffix=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",_cssColonHostRe=new RegExp("(-shadowcsshost"+_parenSuffix,"gim"),_cssColonHostContextRe=new RegExp("(-shadowcsscontext"+_parenSuffix,"gim"),_cssColonSlottedRe=new RegExp("(-shadowcssslotted"+_parenSuffix,"gim"),_polyfillHostNoCombinatorRe=/-shadowcsshost-no-combinator([^\s]*)/,_shadowDOMSelectorsRe=[/::shadow/g,/::content/g],_polyfillHostRe=/-shadowcsshost/gim,_colonHostRe=/:host/gim,_colonSlottedRe=/::slotted/gim,_colonHostContextRe=/:host-context/gim,_commentRe=/\/\*\s*[\s\S]*?\*\//g,_commentWithHashRe=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_ruleRe=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_curlyRe=/([{}])/g,processRules=function processRules(input,ruleCallback){var inputWithEscapedBlocks=escapeBlocks(input),nextBlockIndex=0;return inputWithEscapedBlocks.escapedString.replace(_ruleRe,(function(){var selector=arguments.length<=2?void 0:arguments[2],content="",suffix=arguments.length<=4?void 0:arguments[4],contentPrefix="";suffix&&suffix.startsWith("{%BLOCK%")&&(content=inputWithEscapedBlocks.blocks[nextBlockIndex++],suffix=suffix.substring("%BLOCK%".length+1),contentPrefix="{");var cssRule={selector:selector,content:content},rule=ruleCallback(cssRule);return"".concat(arguments.length<=1?void 0:arguments[1]).concat(rule.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(contentPrefix).concat(rule.content).concat(suffix)}))},escapeBlocks=function escapeBlocks(input){for(var inputParts=input.split(_curlyRe),resultParts=[],escapedBlocks=[],bracketCount=0,currentBlockParts=[],partIndex=0;partIndex<inputParts.length;partIndex++){var part=inputParts[partIndex];"}"===part&&bracketCount--,bracketCount>0?currentBlockParts.push(part):(currentBlockParts.length>0&&(escapedBlocks.push(currentBlockParts.join("")),resultParts.push("%BLOCK%"),currentBlockParts=[]),resultParts.push(part)),"{"===part&&bracketCount++}return currentBlockParts.length>0&&(escapedBlocks.push(currentBlockParts.join("")),resultParts.push("%BLOCK%")),{escapedString:resultParts.join(""),blocks:escapedBlocks}},convertColonRule=function convertColonRule(cssText,regExp,partReplacer){return cssText.replace(regExp,(function(){for(var _len=arguments.length,m=new Array(_len),_key=0;_key<_len;_key++)m[_key]=arguments[_key];if(m[2]){for(var parts=m[2].split(","),r=[],i=0;i<parts.length;i++){var p=parts[i].trim();if(!p)break;r.push(partReplacer("-shadowcsshost-no-combinator",p,m[3]))}return r.join(",")}return"-shadowcsshost-no-combinator"+m[3]}))},colonHostPartReplacer=function colonHostPartReplacer(host,part,suffix){return host+part.replace("-shadowcsshost","")+suffix},colonHostContextPartReplacer=function colonHostContextPartReplacer(host,part,suffix){return part.indexOf("-shadowcsshost")>-1?colonHostPartReplacer(host,part,suffix):host+part+suffix+", "+part+" "+host+suffix},selectorNeedsScoping=function selectorNeedsScoping(selector,scopeSelector){return!function makeScopeMatcher(scopeSelector){return scopeSelector=scopeSelector.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+scopeSelector+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(scopeSelector).test(selector)},applyStrictSelectorScope=function applyStrictSelectorScope(selector,scopeSelector,hostSelector){for(var res,className="."+(scopeSelector=scopeSelector.replace(/\[is=([^\]]*)\]/g,(function(_){return arguments.length<=1?void 0:arguments[1]}))),_scopeSelectorPart=function _scopeSelectorPart(p){var scopedP=p.trim();if(!scopedP)return"";if(p.indexOf("-shadowcsshost-no-combinator")>-1)scopedP=function applySimpleSelectorScope(selector,scopeSelector,hostSelector){if(_polyfillHostRe.lastIndex=0,_polyfillHostRe.test(selector)){var replaceBy=".".concat(hostSelector);return selector.replace(_polyfillHostNoCombinatorRe,(function(_,selector){return selector.replace(/([^:]*)(:*)(.*)/,(function(_,before,colon,after){return before+replaceBy+colon+after}))})).replace(_polyfillHostRe,replaceBy+" ")}return scopeSelector+" "+selector}(p,scopeSelector,hostSelector);else{var t=p.replace(_polyfillHostRe,"");if(t.length>0){var matches=t.match(/([^:]*)(:*)(.*)/);matches&&(scopedP=matches[1]+className+matches[2]+matches[3])}}return scopedP},safeContent=function safeSelector(selector){var placeholders=[],index=0;return{content:(selector=selector.replace(/(\[[^\]]*\])/g,(function(_,keep){var replaceBy="__ph-".concat(index,"__");return placeholders.push(keep),index++,replaceBy}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(_,pseudo,exp){var replaceBy="__ph-".concat(index,"__");return placeholders.push(exp),index++,pseudo+replaceBy})),placeholders:placeholders}}(selector),scopedSelector="",startIndex=0,sep=/( |>|\+|~(?!=))\s*/g,shouldScope=!((selector=safeContent.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(res=sep.exec(selector));){var separator=res[1],_part=selector.slice(startIndex,res.index).trim(),scopedPart=(shouldScope=shouldScope||_part.indexOf("-shadowcsshost-no-combinator")>-1)?_scopeSelectorPart(_part):_part;scopedSelector+="".concat(scopedPart," ").concat(separator," "),startIndex=sep.lastIndex}var part=selector.substring(startIndex);return scopedSelector+=(shouldScope=shouldScope||part.indexOf("-shadowcsshost-no-combinator")>-1)?_scopeSelectorPart(part):part,function restoreSafeSelector(placeholders,content){return content.replace(/__ph-(\d+)__/g,(function(_,index){return placeholders[+index]}))}(safeContent.placeholders,scopedSelector)},scopeSelectors=function scopeSelectors(cssText,scopeSelectorText,hostSelector,slotSelector,commentOriginalSelector){return processRules(cssText,(function(rule){var selector=rule.selector,content=rule.content;return"@"!==rule.selector[0]?selector=function scopeSelector(selector,scopeSelectorText,hostSelector,slotSelector){return selector.split(",").map((function(shallowPart){return slotSelector&&shallowPart.indexOf("."+slotSelector)>-1?shallowPart.trim():selectorNeedsScoping(shallowPart,scopeSelectorText)?applyStrictSelectorScope(shallowPart,scopeSelectorText,hostSelector).trim():shallowPart.trim()})).join(", ")}(rule.selector,scopeSelectorText,hostSelector,slotSelector):(rule.selector.startsWith("@media")||rule.selector.startsWith("@supports")||rule.selector.startsWith("@page")||rule.selector.startsWith("@document"))&&(content=scopeSelectors(rule.content,scopeSelectorText,hostSelector,slotSelector)),{selector:selector.replace(/\s{2,}/g," ").trim(),content:content}}))},scopeCssText=function scopeCssText(cssText,scopeId,hostScopeId,slotScopeId,commentOriginalSelector){var slotted=function convertColonSlotted(cssText,slotScopeId){var slotClass="."+slotScopeId+" > ",selectors=[];return cssText=cssText.replace(_cssColonSlottedRe,(function(){for(var _len2=arguments.length,m=new Array(_len2),_key2=0;_key2<_len2;_key2++)m[_key2]=arguments[_key2];if(m[2]){for(var compound=m[2].trim(),suffix=m[3],slottedSelector=slotClass+compound+suffix,prefixSelector="",i=m[4]-1;i>=0;i--){var _char=m[5][i];if("}"===_char||","===_char)break;prefixSelector=_char+prefixSelector}var orgSelector=prefixSelector+slottedSelector,addedSelector="".concat(prefixSelector.trimRight()).concat(slottedSelector.trim());if(orgSelector.trim()!==addedSelector.trim()){var updatedSelector="".concat(addedSelector,", ").concat(orgSelector);selectors.push({orgSelector:orgSelector,updatedSelector:updatedSelector})}return slottedSelector}return"-shadowcsshost-no-combinator"+m[3]})),{selectors:selectors,cssText:cssText}}(cssText=function convertColonHostContext(cssText){return convertColonRule(cssText,_cssColonHostContextRe,colonHostContextPartReplacer)}(cssText=function convertColonHost(cssText){return convertColonRule(cssText,_cssColonHostRe,colonHostPartReplacer)}(cssText=function insertPolyfillHostInCssText(selector){return selector=selector.replace(_colonHostContextRe,"-shadowcsscontext").replace(_colonHostRe,"-shadowcsshost").replace(_colonSlottedRe,"-shadowcssslotted")}(cssText))),slotScopeId);return cssText=function convertShadowDOMSelectors(cssText){return _shadowDOMSelectorsRe.reduce((function(result,pattern){return result.replace(pattern," ")}),cssText)}(cssText=slotted.cssText),scopeId&&(cssText=scopeSelectors(cssText,scopeId,hostScopeId,slotScopeId)),{cssText:(cssText=(cssText=cssText.replace(/-shadowcsshost-no-combinator/g,".".concat(hostScopeId))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:slotted.selectors}},scopeCss=function scopeCss(cssText,scopeId,commentOriginalSelector){var hostScopeId=scopeId+"-h",slotScopeId=scopeId+"-s",commentsWithHash=function extractCommentsWithHash(input){return input.match(_commentWithHashRe)||[]}(cssText);cssText=function stripComments(input){return input.replace(_commentRe,"")}(cssText);var orgSelectors=[];if(commentOriginalSelector){var processCommentedSelector=function processCommentedSelector(rule){var placeholder="/*!@___".concat(orgSelectors.length,"___*/"),comment="/*!@".concat(rule.selector,"*/");return orgSelectors.push({placeholder:placeholder,comment:comment}),rule.selector=placeholder+rule.selector,rule};cssText=processRules(cssText,(function(rule){return"@"!==rule.selector[0]?processCommentedSelector(rule):rule.selector.startsWith("@media")||rule.selector.startsWith("@supports")||rule.selector.startsWith("@page")||rule.selector.startsWith("@document")?(rule.content=processRules(rule.content,processCommentedSelector),rule):rule}))}var scoped=scopeCssText(cssText,scopeId,hostScopeId,slotScopeId);return cssText=[scoped.cssText].concat(_toConsumableArray(commentsWithHash)).join("\n"),commentOriginalSelector&&orgSelectors.forEach((function(_ref){var placeholder=_ref.placeholder,comment=_ref.comment;cssText=cssText.replace(placeholder,comment)})),scoped.slottedSelectors.forEach((function(slottedSelector){cssText=cssText.replace(slottedSelector.orgSelector,slottedSelector.updatedSelector)})),cssText}},1090:function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(10),$trimEnd=__webpack_require__(159).end,FORCED=__webpack_require__(462)("trimEnd"),trimEnd=FORCED?function trimEnd(){return $trimEnd(this)}:"".trimEnd;$({target:"String",proto:!0,forced:FORCED},{trimEnd:trimEnd,trimRight:trimEnd})}}]);
//# sourceMappingURL=7.05784230ce71d70bf91a.bundle.js.map