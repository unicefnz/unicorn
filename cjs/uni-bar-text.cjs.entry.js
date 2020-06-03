'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-80028a92.js');

const barTextCss = ":host{display:inline;background:var(--uni-color, var(--uni-primary));color:var(--uni-color-contrast, var(--uni-primary-contrast));padding:0.6rem 0}";

class BarText {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
}
BarText.style = barTextCss;

exports.uni_bar_text = BarText;
