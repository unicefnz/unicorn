'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-82b860da.js');

const progressLinearCss = ":host{display:block;height:0;background:var(--uni-color, var(--uni-primary));-webkit-transition:height 0.3s ease-in-out;transition:height 0.3s ease-in-out}:host(.uni-loading-active){height:8px;background-image:-webkit-gradient(linear, left top, right top, color-stop(42%, transparent), color-stop(46%, rgba(255, 255, 255, 0.5)), color-stop(50%, transparent));background-image:linear-gradient(90deg, transparent 42%, rgba(255, 255, 255, 0.5) 46%, transparent 50%);background-size:400% 400%;-webkit-animation:uni-loading-indeterminate 1.5s infinite linear;animation:uni-loading-indeterminate 1.5s infinite linear}@-webkit-keyframes uni-loading-indeterminate{from{background-position-x:75%}to{background-position-x:0}}@keyframes uni-loading-indeterminate{from{background-position-x:75%}to{background-position-x:0}}";

const ProgressLinear = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Controls if the loading bar is visible
         * * */
        this.value = true;
    }
    render() {
        return (index.h(index.Host, { class: { 'uni-loading-active': this.value, ['uni-color-' + this.color]: !!this.color } }, index.h("slot", null)));
    }
};
ProgressLinear.style = progressLinearCss;

exports.uni_progress_linear = ProgressLinear;
