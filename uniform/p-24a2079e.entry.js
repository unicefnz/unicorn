import{r as t,h as o,H as n}from"./p-90d9bba9.js";class i{constructor(o){t(this,o),this.color="accent",this.buttonStyle="solid",this.buttonType="button"}render(){return o(n,{class:{["style-"+this.buttonStyle]:!0,["uni-color-"+this.color]:!0,loading:this.loading}},o("button",{class:"button",type:this.buttonType,disabled:this.disabled||this.loading},this.prependIcon&&o("ion-icon",{name:this.prependIcon,class:"prepend-icon"}),o("div",{class:"button-content"},o("slot",null))))}}i.style=":host{display:inline-block;min-width:120px;--background:var(--uni-color, var(--uni-accent));--contrast:var(--uni-color-contrast, var(--uni-accent-contrast))}.button{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem;border:none;border-radius:20px;background:none;height:40px;width:100%;font:inherit;font-size:1rem}.button:not([disabled]){cursor:pointer}.button[disabled]{opacity:0.7}.prepend-icon{margin-right:10px}:host(.loading) .button-content,:host(.loading) .prepend-icon{opacity:0.5}:host(.loading) .button{background-image:-webkit-gradient(linear, left top, right top, color-stop(25%, transparent), color-stop(37.5%, rgba(255, 255, 255, 0.5)), color-stop(50%, transparent));background-image:linear-gradient(90deg, transparent 25%, rgba(255, 255, 255, 0.5) 37.5%, transparent 50%);background-size:400% 400%;-webkit-animation:uni-loading-pill 1.5s infinite linear;animation:uni-loading-pill 1.5s infinite linear}:host(.style-border:not(.loading)) .button{border:2px solid var(--background);-webkit-transition:background-color 0.3s, color 0.3s;transition:background-color 0.3s, color 0.3s;color:var(--background)}:host(.style-border:not(.loading)) .button:not([disabled]):hover,:host(.style-border:not(.loading)) .button:focus{color:var(--contrast);background-color:var(--background)}:host(.style-solid) .button,:host(.loading) .button{background-color:var(--background);-webkit-transition:-webkit-filter 0.3s;transition:-webkit-filter 0.3s;transition:filter 0.3s;transition:filter 0.3s, -webkit-filter 0.3s;color:var(--contrast)}:host(.style-solid) .button:not([disabled]):hover,:host(.style-solid) .button:focus,:host(.loading) .button:not([disabled]):hover,:host(.loading) .button:focus{-webkit-filter:brightness(90%);filter:brightness(90%)}@-webkit-keyframes uni-loading-pill{from{background-position-x:75%}to{background-position-x:0}}@keyframes uni-loading-pill{from{background-position-x:75%}to{background-position-x:0}}";export{i as uni_button}