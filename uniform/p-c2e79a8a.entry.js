import{r as i,c as e,h as n,H as t}from"./p-90d9bba9.js";let s=0;class r{constructor(n){i(this,n),this.optional=!1,this.errors="",this.uniqueId="uni-input-"+s++,this.uniChange=e(this,"uniChange",7),this.uniInput=e(this,"uniInput",7)}get errorList(){return(Array.isArray(this.errors)?this.errors:[this.errors]).filter(i=>i)}render(){const i=this.optional&&n("span",{class:"optional-label"},"(optional)"),e=this.prependIcon&&n("ion-icon",{name:this.prependIcon}),s=(this.prependText||this.prependIcon)&&n("span",{class:"input-prepend"},e,this.prependText),r=this.renderErrors();return n(t,{class:{"input--has-errors":!!this.errorList.length}},this.label&&n("label",{htmlFor:this.uniqueId,class:"caption"},this.label," ",i),n("div",{class:"input-field"},s,n("input",{class:"input-elem",id:this.uniqueId,disabled:this.disabled,readOnly:this.readonly,placeholder:this.placeholder,required:!this.optional,value:this.value,onChange:i=>this.uniChange.emit(i.target.value),onInput:i=>this.uniInput.emit(i.target.value)})),r)}renderErrors(){const i=this.errorList;return i.length?n("div",{class:"input-errors"},n("ion-icon",{name:"warning"}),n("ul",null,i.map(i=>n("li",null,i)))):null}}r.style=":host{display:block;margin:1rem 0;text-align:start}.caption{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:bold;text-transform:uppercase;display:block;margin:4px 0}.optional-label{color:var(--uni-medium)}.input-field{position:relative;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;border:1px solid var(--uni-color, var(--uni-dark));border-radius:4px}:host(.input--has-errors) .input-field{border-color:var(--uni-danger)}.input-field:focus-within{-webkit-box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5);box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5)}.input-prepend{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 10px;background:var(--uni-light);min-width:20px}.input-elem{-ms-flex:1;flex:1;padding:10px 12px;font-family:inherit;font-size:1rem;border:none}.input-errors{margin-top:0.3rem;color:var(--uni-danger)}.input-errors ion-icon{vertical-align:top;margin-right:0.5rem;display:inline-block;font-size:24px}.input-errors ul{display:inline-block;padding:0;margin:0;list-style-type:none;font-size:0.9rem}";export{r as uni_text_field}