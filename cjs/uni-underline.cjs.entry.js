'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-82b860da.js');

const underlineCss = ":host{font-size:calc(4rem / 3);font-weight:500;font-family:var(--font-header);display:inline-block;padding:4px 0;border-bottom:2px var(--uni-color, var(--uni-primary)) solid}";

const Underline = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
Underline.style = underlineCss;

exports.uni_underline = Underline;
