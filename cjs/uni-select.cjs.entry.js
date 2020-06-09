'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-82b860da.js');

const selectCss = ":host{display:block;text-align:start}.select-label{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:bold;text-transform:uppercase;margin:0.4em 0}.select-box{position:relative}.select-box ion-icon{position:absolute;right:16px;top:0;bottom:0;margin:auto}select{width:100%;border:1px solid var(--uni-color, var(--uni-dark));border-radius:4px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font:inherit;padding:10px 12px;background:#FFF}select:focus{-webkit-box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5);box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5)}";

const Select = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const select = (index.h("div", { class: "select-box" }, index.h("slot", null), index.h("ion-icon", { name: "caret-down" })));
        return (index.h(index.Host, null, this.label ? (index.h("label", null, index.h("span", { class: "select-label" }, this.label), select)) : select));
    }
};
Select.style = selectCss;

exports.uni_select = Select;
