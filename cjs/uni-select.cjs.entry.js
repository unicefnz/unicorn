'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-bbabf9be.js');

const Select = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        const select = (core.h("div", { class: "select-box" }, core.h("slot", null), core.h("ion-icon", { name: "caret-down" })));
        return (core.h(core.Host, null, this.label ? (core.h("label", null, core.h("span", { class: "select-label" }, this.label), select)) : select));
    }
    static get style() { return ":host{display:block}.select-label{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:700;text-transform:uppercase;margin:.4em 0}.select-box{position:relative}.select-box ion-icon{position:absolute;right:16px;top:0;bottom:0;margin:auto}select{width:100%;border:1px solid var(--uni-color,var(--uni-dark));border-radius:4px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font:inherit;padding:10px 12px;background:#fff}select:focus{-webkit-box-shadow:0 0 0 2px rgba(0,128,255,.5);box-shadow:0 0 0 2px rgba(0,128,255,.5)}"; }
};

exports.uni_select = Select;
