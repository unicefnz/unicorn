import { r as registerInstance, h, H as Host } from './core-244a4bc2.js';

const ProgressLinear = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Controls if the loading bar is visible
         * * */
        this.value = true;
    }
    render() {
        return (h(Host, { class: { 'uni-loading-active': this.value } }, h("slot", null)));
    }
    static get style() { return ":host{display:block;height:0;background:var(--uni-color,var(--uni-primary));-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out}:host(.uni-loading-active){height:8px;background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,transparent),color-stop(35%,rgba(0,0,0,.5)),color-stop(50%,transparent));background-image:linear-gradient(90deg,transparent 30%,rgba(0,0,0,.5) 35%,transparent 50%);background-size:400% 400%;-webkit-animation:uni-loading-indeterminate 1.5s linear infinite;animation:uni-loading-indeterminate 1.5s linear infinite}\@-webkit-keyframes uni-loading-indeterminate{0%{background-position-x:75%}to{background-position-x:0}}\@keyframes uni-loading-indeterminate{0%{background-position-x:75%}to{background-position-x:0}}"; }
};

export { ProgressLinear as uni_progress_linear };
