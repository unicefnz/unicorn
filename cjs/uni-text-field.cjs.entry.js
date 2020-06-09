'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-82b860da.js');

const textFieldCss = ":host{display:block;margin:1rem 0;text-align:start}.caption{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:bold;text-transform:uppercase;display:block;margin:4px 0}.optional-label{color:var(--uni-medium)}.input-field{position:relative;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;border:1px solid var(--uni-color, var(--uni-dark));border-radius:4px}:host(.input--has-errors) .input-field{border-color:var(--uni-danger)}.input-field:focus-within{-webkit-box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5);box-shadow:0 0 0 2px rgba(0, 128, 255, 0.5)}.input-prepend{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 10px;background:var(--uni-light);min-width:20px}.input-elem{-ms-flex:1;flex:1;padding:10px 12px;font-family:inherit;font-size:1rem;border:none}.input-errors{margin-top:0.3rem;color:var(--uni-danger)}.input-errors ion-icon{vertical-align:top;margin-right:0.5rem;display:inline-block;font-size:24px}.input-errors ul{display:inline-block;padding:0;margin:0;list-style-type:none;font-size:0.9rem}";

let nextUniqueId = 0;
const TextField = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Marks the field as optional
         * */
        this.optional = false;
        /**
         * Displays errors below the input
         * */
        this.errors = '';
        this.uniqueId = 'uni-input-' + nextUniqueId++;
        this.uniChange = index.createEvent(this, "uniChange", 7);
        this.uniInput = index.createEvent(this, "uniInput", 7);
    }
    get errorList() {
        const errors = Array.isArray(this.errors) ? this.errors : [this.errors];
        return errors.filter(e => e);
    }
    render() {
        const optional = this.optional && (index.h("span", { class: "optional-label" }, "(optional)"));
        const prependIcon = this.prependIcon && (index.h("ion-icon", { name: this.prependIcon }));
        const prepend = (this.prependText || this.prependIcon) && (index.h("span", { class: "input-prepend" }, prependIcon, this.prependText));
        const errors = this.renderErrors();
        return (index.h(index.Host, { class: { 'input--has-errors': !!this.errorList.length } }, this.label && index.h("label", { htmlFor: this.uniqueId, class: "caption" }, this.label, " ", optional), index.h("div", { class: "input-field" }, prepend, index.h("input", { class: "input-elem", id: this.uniqueId, disabled: this.disabled, readOnly: this.readonly, placeholder: this.placeholder, required: !this.optional, value: this.value, onChange: e => this.uniChange.emit(e.target.value), onInput: e => this.uniInput.emit(e.target.value) })), errors));
    }
    renderErrors() {
        const errors = this.errorList;
        if (!errors.length)
            return null;
        return (index.h("div", { class: "input-errors" }, index.h("ion-icon", { name: "warning" }), index.h("ul", null, errors.map(e => index.h("li", null, e)))));
    }
};
TextField.style = textFieldCss;

exports.uni_text_field = TextField;
