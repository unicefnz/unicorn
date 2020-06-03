'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-80028a92.js');

const checkboxCss = ":host{display:block}:host(.uni-disabled) .uni-checkbox input,:host(.uni-disabled) label{cursor:not-allowed}:host(.uni-disabled) .uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-light)}:host(.uni-disabled) label{opacity:0.5}.uni-checkbox input,label{cursor:pointer}.uni-checkbox{position:relative;vertical-align:middle;margin-right:0.5rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px}.uni-checkbox input{margin:0;width:100%;height:100%;position:absolute;opacity:0;cursor:pointer;z-index:2}.uni-checkbox .uni-checkbox-visual{width:16px;height:16px;border:2px solid var(--uni-accent-contrast);border-radius:4px}.uni-checkbox .uni-checkbox-check{position:absolute;display:none;-ms-flex-align:center;align-items:center;overflow:hidden;color:var(--uni-accent-contrast)}.uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-accent)}.uni-checkbox input:checked~.uni-checkbox-check{display:-ms-flexbox;display:flex}label{vertical-align:middle}";

let nextUniqueId = 0;
class Checkbox {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Whether the checkbox is checked
         * */
        this.value = false;
        /**
         * When set to true, the state cannot be modified
         * */
        this.disabled = false;
        this.uniqueId = 'uni-checkbox-' + nextUniqueId++;
    }
    render() {
        return (index.h(index.Host, { class: { 'uni-disabled': this.disabled } }, index.h("div", { class: "uni-checkbox" }, index.h("input", { id: this.uniqueId, type: "checkbox", disabled: this.disabled, checked: this.value }), index.h("ion-icon", { class: "uni-checkbox-check", name: "checkmark-sharp" }), index.h("div", { class: "uni-checkbox-visual" })), index.h("label", { htmlFor: this.uniqueId }, index.h("slot", null))));
    }
}
Checkbox.style = checkboxCss;

exports.uni_checkbox = Checkbox;