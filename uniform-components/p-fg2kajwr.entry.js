import{r as t,h as s,H as i,c as n,g as e}from"./p-7ca79c41.js";const l=class{constructor(s){t(this,s)}render(){return s(i,null,s("slot",null))}static get style(){return":host{display:inline;background:var(--uni-color,var(--uni-primary));color:var(--uni-color-contrast,var(--uni-primary-contrast));padding:.6rem 0}"}},r=class{constructor(s){t(this,s),this.color="accent",this.buttonStyle="solid",this.buttonType="button"}render(){return s(i,{class:{["style-"+this.buttonStyle]:!0,[`uni-color-${this.color}`]:!0,loading:this.loading}},s("button",{class:"button",type:this.buttonType,disabled:this.disabled||this.loading},this.prependIcon&&s("ion-icon",{name:this.prependIcon,class:"prepend-icon"}),s("div",{class:"button-content"},s("slot",null))))}static get style(){return":host{display:inline-block;min-width:120px;--background:var(--uni-color,var(--uni-accent));--contrast:var(--uni-color-contrast,var(--uni-accent-contrast))}.button{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem;border:none;border-radius:20px;background:none;height:40px;width:100%;font:inherit;font-size:1rem}.button:not([disabled]){cursor:pointer}.prepend-icon{margin-right:10px}:host(.loading) .button-content,:host(.loading) .prepend-icon{opacity:.5}:host(.loading) .button{background-image:-webkit-gradient(linear,left top,right top,color-stop(25%,transparent),color-stop(37.5%,hsla(0,0%,100%,.5)),color-stop(50%,transparent));background-image:linear-gradient(90deg,transparent 25%,hsla(0,0%,100%,.5) 37.5%,transparent 50%);background-size:400% 400%;-webkit-animation:uni-loading-pill 1.5s linear infinite;animation:uni-loading-pill 1.5s linear infinite}:host(.style-border:not(.loading)) .button{border:2px solid var(--background);-webkit-transition:background-color .3s,color .3s;transition:background-color .3s,color .3s;color:var(--background)}:host(.loading) .button,:host(.style-border:not(.loading)) .button:focus,:host(.style-border:not(.loading)) .button:not([disabled]):hover,:host(.style-solid) .button{color:var(--contrast);background-color:var(--background)}:host(.loading) .button,:host(.style-solid) .button{-webkit-transition:-webkit-filter .3s;transition:-webkit-filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s}:host(.loading) .button:focus,:host(.loading) .button:not([disabled]):hover,:host(.style-solid) .button:focus,:host(.style-solid) .button:not([disabled]):hover{-webkit-filter:brightness(90%);filter:brightness(90%)}\@-webkit-keyframes uni-loading-pill{0%{background-position-x:75%}to{background-position-x:0}}\@keyframes uni-loading-pill{0%{background-position-x:75%}to{background-position-x:0}}"}};let c=0;const o=class{constructor(s){t(this,s),this.value=!1,this.disabled=!1,this.uniqueId="uni-checkbox-"+c++}render(){return s(i,{class:{"uni-disabled":this.disabled}},s("div",{class:"uni-checkbox"},s("input",{id:this.uniqueId,type:"checkbox",disabled:this.disabled,checked:this.value}),s("ion-icon",{class:"uni-checkbox-check",name:"checkmark-sharp"}),s("div",{class:"uni-checkbox-visual"})),s("label",{htmlFor:this.uniqueId},s("slot",null)))}static get style(){return":host{display:block}:host(.uni-disabled) .uni-checkbox input,:host(.uni-disabled) label{cursor:not-allowed}:host(.uni-disabled) .uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-light)}:host(.uni-disabled) label{opacity:.5}.uni-checkbox input,label{cursor:pointer}.uni-checkbox{position:relative;vertical-align:middle;margin-right:.5rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px}.uni-checkbox input{margin:0;width:100%;height:100%;position:absolute;opacity:0;cursor:pointer;z-index:2}.uni-checkbox .uni-checkbox-visual{width:16px;height:16px;border:2px solid var(--uni-accent-contrast);border-radius:4px}.uni-checkbox .uni-checkbox-check{position:absolute;display:none;-ms-flex-align:center;align-items:center;overflow:hidden;color:var(--uni-accent-contrast)}.uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-accent)}.uni-checkbox input:checked~.uni-checkbox-check{display:-ms-flexbox;display:flex}label{vertical-align:middle}"}},a=class{constructor(s){t(this,s),this.open=!1,this.backdropDismiss=!0,this.shakeTimer=null,this.close=n(this,"close",3)}onClose(){this.el.removeAttribute("open"),this.close.emit()}doShake(){this.shakeTimer&&clearTimeout(this.shakeTimer),this.shakeTimer=setTimeout(()=>{this.shakeTimer=null},200)}backdropClick(){this.backdropDismiss?this.onClose():this.doShake()}render(){return s(i,{class:{"is-open":this.open}},s("div",{class:"dialog-backdrop",onClick:()=>this.backdropClick()}),s("div",{class:{"dialog-pane":!0,shaking:!!this.shakeTimer}},s("slot",null)))}get el(){return e(this)}static get style(){return":host{position:fixed;top:0;left:0;height:100%;width:100%;z-index:1000;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host(:not(.is-open)){display:none}.dialog-backdrop{position:absolute;z-index:-1;top:0;height:100%;width:100%;background:rgba(0,0,0,.4)}.dialog-pane{position:relative;margin:32px;max-height:100vh;overflow-y:auto}.dialog-pane.shaking{-webkit-animation:uni-dialog-grow .1s ease-in-out infinite alternate;animation:uni-dialog-grow .1s ease-in-out infinite alternate}\@-webkit-keyframes uni-dialog-grow{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}\@keyframes uni-dialog-grow{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}"}},u=class{constructor(s){t(this,s)}render(){return s(i,null,s("slot",null),s("div",{class:"dialog-actions"},s("slot",{name:"actions"})))}static get style(){return":host{display:block;background:#fff;border-radius:12px;padding:16px;min-width:300px}.dialog-actions{margin-top:16px;text-align:right}"}},h=class{constructor(s){t(this,s)}render(){return s("h2",{class:"dialog-title"},s("uni-underline",null,s("slot",null)))}static get style(){return":host{display:block;margin-bottom:16px}h2{margin:0}"}},d=class{constructor(s){t(this,s)}render(){return s(i,{style:{backgroundImage:this.backgroundUrl&&`url("${this.backgroundUrl}")`,justifyContent:this.align}},s("div",{class:"hero-content",style:{textAlign:this.align}},s("slot",null)))}static get style(){return":host{background-repeat:no-repeat;background-size:cover;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:300px;padding:40px 100px}.hero-content{max-width:600px}"}},E=class{constructor(s){t(this,s)}render(){return s(i,{class:{["uni-color-"+this.color]:!!this.color}},s("slot",null))}static get style(){return":host{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:700;text-transform:uppercase;display:inline-block;margin:.5rem 0;min-width:40px;text-align:center;padding:.7em 1em;background:var(--uni-color,var(--uni-accent));color:var(--uni-color-contrast,var(--uni-accent-contrast))}"}};let _=0;const g=class{constructor(s){t(this,s),this.optional=!1,this.errors="",this.uniqueId="uni-input-"+_++,this.uniChange=n(this,"uniChange",7),this.uniInput=n(this,"uniInput",7)}get errorList(){return(Array.isArray(this.errors)?this.errors:[this.errors]).filter(t=>t)}render(){const t=this.optional&&s("span",{class:"optional-label"},"(optional)"),n=this.prependIcon&&s("ion-icon",{name:this.prependIcon}),e=(this.prependText||this.prependIcon)&&s("span",{class:"input-prepend"},n,this.prependText),l=this.renderErrors();return s(i,{class:{"input--has-errors":!!this.errorList.length}},this.label&&s("label",{htmlFor:this.uniqueId,class:"caption"},this.label," ",t),s("div",{class:"input-field"},e,s("input",{class:"input-elem",id:this.uniqueId,disabled:this.disabled,placeholder:this.placeholder,required:!this.optional,value:this.value,onChange:t=>this.uniChange.emit(t.target.value),onInput:t=>this.uniInput.emit(t.target.value)})),l)}renderErrors(){const t=this.errorList;return t.length?s("div",{class:"input-errors"},s("ion-icon",{name:"warning"}),s("ul",null,t.map(t=>s("li",null,t)))):null}static get style(){return":host{display:block;margin:1rem 0;text-align:start}.caption{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:700;text-transform:uppercase;display:block;margin:4px 0}.optional-label{color:var(--uni-medium)}.input-field{position:relative;overflow:hidden;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;border:1px solid var(--uni-color,var(--uni-dark));border-radius:4px}:host(.input--has-errors) .input-field{border-color:var(--uni-danger)}.input-field:focus-within{-webkit-box-shadow:0 0 0 2px rgba(0,128,255,.5);box-shadow:0 0 0 2px rgba(0,128,255,.5)}.input-prepend{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 10px;background:var(--uni-light);min-width:20px}.input-elem{padding:10px 12px;font-family:inherit;font-size:1rem;border:none}.input-errors{margin-top:.3rem;color:var(--uni-danger)}.input-errors ion-icon{vertical-align:top;margin-right:.5rem;display:inline-block;font-size:24px}.input-errors ul{display:inline-block;padding:0;margin:0;list-style-type:none;font-size:.9rem}"}},T=class{constructor(s){t(this,s)}render(){return s(i,null,s("slot",null))}static get style(){return":host{font-size:calc(4rem / 3);font-weight:500;font-family:var(--font-header);display:inline-block;padding:4px 0;border-bottom:2px var(--uni-color,var(--uni-primary)) solid}"}};export{l as uni_bar_text,r as uni_button,o as uni_checkbox,a as uni_dialog,u as uni_dialog_content,h as uni_dialog_title,d as uni_hero,E as uni_tagline,g as uni_text_field,T as uni_underline};