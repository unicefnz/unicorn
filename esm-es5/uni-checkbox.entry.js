import { r as registerInstance, h, H as Host } from './index-d50bc264.js';

const checkboxCss = ":host{display:block}:host(.uni-disabled) .uni-checkbox input,:host(.uni-disabled) label{cursor:not-allowed}:host(.uni-disabled) .uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-light)}:host(.uni-disabled) label{opacity:0.5}.uni-checkbox input,label{cursor:pointer}.uni-checkbox{position:relative;vertical-align:middle;margin-right:0.5rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px}.uni-checkbox input{margin:0;width:100%;height:100%;position:absolute;opacity:0;cursor:pointer;z-index:2}.uni-checkbox .uni-checkbox-visual{width:16px;height:16px;border:2px solid var(--uni-accent-contrast);border-radius:4px}.uni-checkbox .uni-checkbox-check{position:absolute;display:none;-ms-flex-align:center;align-items:center;overflow:hidden;color:var(--uni-accent-contrast)}.uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-accent)}.uni-checkbox input:checked~.uni-checkbox-check{display:-ms-flexbox;display:flex}label{vertical-align:middle}";

let nextUniqueId = 0;
const Checkbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { class: { 'uni-disabled': this.disabled } }, h("div", { class: "uni-checkbox" }, h("input", { id: this.uniqueId, type: "checkbox", disabled: this.disabled, checked: this.value }), h("ion-icon", { class: "uni-checkbox-check", name: "checkmark-sharp" }), h("div", { class: "uni-checkbox-visual" })), h("label", { htmlFor: this.uniqueId }, h("slot", null))));
    }
};
Checkbox.style = checkboxCss;

export { Checkbox as uni_checkbox };
