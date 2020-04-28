'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-bbabf9be.js');

const BarText = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null)));
    }
    static get style() { return ":host{display:inline;background:var(--uni-color,var(--uni-primary));color:var(--uni-color-contrast,var(--uni-primary-contrast));padding:.6rem 0}"; }
};

const Button = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Defines the main color of the button
         * Eg. accent, primary
         * */
        this.color = 'accent';
        /**
         * Sets the style of the button
         * One of 'solid' or 'border'
         * */
        this.buttonStyle = 'solid';
        /**
         * Type of the underlying button
         * See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
         * One of 'button', 'submit', or 'reset'
         * */
        this.type = 'button';
    }
    render() {
        return (core.h(core.Host, { class: {
                ['style-' + this.buttonStyle]: true,
                [`uni-color-${this.color}`]: true
            } }, core.h("button", { class: "button", type: this.type }, this.prependIcon && core.h("ion-icon", { name: this.prependIcon, class: "prepend-icon" }), core.h("div", null, core.h("slot", null)))));
    }
    static get style() { return ":host{display:inline-block;min-width:120px}.button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem;border:none;border-radius:20px;background:none;height:40px;width:100%;cursor:pointer;font-size:1rem;font-family:inherit}.prepend-icon{margin-right:10px}:host(.style-border) .button{border:2px solid var(--uni-color,var(--uni-accent));-webkit-transition:background-color .3s,color .3s;transition:background-color .3s,color .3s;color:var(--uni-color,var(--uni-accent))}:host(.style-border) .button:focus,:host(.style-border) .button:hover,:host(.style-solid) .button{color:var(--uni-color-contrast,var(--uni-accent-contrast));background:var(--uni-color,var(--uni-accent))}:host(.style-solid) .button{-webkit-transition:-webkit-filter .3s;transition:-webkit-filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s}:host(.style-solid) .button:focus,:host(.style-solid) .button:hover{-webkit-filter:brightness(90%);filter:brightness(90%)}"; }
};

let nextUniqueId = 0;
const Checkbox = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return (core.h(core.Host, { class: { 'uni-disabled': this.disabled } }, core.h("div", { class: "uni-checkbox" }, core.h("input", { id: this.uniqueId, type: "checkbox", disabled: this.disabled, checked: this.value }), core.h("ion-icon", { class: "uni-checkbox-check", name: "checkmark-sharp" }), core.h("div", { class: "uni-checkbox-visual" })), core.h("label", { htmlFor: this.uniqueId }, core.h("slot", null))));
    }
    static get style() { return ":host{display:block}:host(.uni-disabled) .uni-checkbox input,:host(.uni-disabled) label{cursor:not-allowed}:host(.uni-disabled) .uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-light)}:host(.uni-disabled) label{opacity:.5}.uni-checkbox input,label{cursor:pointer}.uni-checkbox{position:relative;vertical-align:middle;margin-right:.5rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px}.uni-checkbox input{margin:0;width:100%;height:100%;position:absolute;opacity:0;cursor:pointer;z-index:2}.uni-checkbox .uni-checkbox-visual{width:16px;height:16px;border:2px solid var(--uni-accent-contrast);border-radius:4px}.uni-checkbox .uni-checkbox-check{position:absolute;display:none;-ms-flex-align:center;align-items:center;overflow:hidden;color:var(--uni-accent-contrast)}.uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-accent)}.uni-checkbox input:checked~.uni-checkbox-check{display:-ms-flexbox;display:flex}label{vertical-align:middle}"; }
};

const Dialog = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Whether the dialog is currently open
        * */
        this.open = false;
        /**
         * Controls whether clicking on the backdrop will dismiss the dialog
         * */
        this.backdropDismiss = true;
        this.shakeTimer = null;
        this.close = core.createEvent(this, "close", 3);
    }
    onClose() {
        this.el.removeAttribute('open');
        this.close.emit();
    }
    doShake() {
        if (this.shakeTimer)
            clearTimeout(this.shakeTimer);
        this.shakeTimer = setTimeout(() => {
            this.shakeTimer = null;
        }, 200); // TODO Fix typing so setTimeout uses correct browser types
    }
    backdropClick() {
        if (this.backdropDismiss)
            this.onClose();
        else
            this.doShake();
    }
    render() {
        return (core.h(core.Host, { class: {
                'is-open': this.open
            } }, core.h("div", { class: "dialog-backdrop", onClick: () => this.backdropClick() }), core.h("div", { class: {
                'dialog-pane': true,
                shaking: !!this.shakeTimer
            } }, core.h("slot", null))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host{position:fixed;top:0;left:0;height:100%;width:100%;z-index:1000;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host(:not(.is-open)){display:none}.dialog-backdrop{position:absolute;z-index:-1;top:0;height:100%;width:100%;background:rgba(0,0,0,.4)}.dialog-pane{position:relative;margin:32px;max-height:100vh;overflow-y:auto}.dialog-pane.shaking{-webkit-animation:uni-dialog-grow .1s ease-in-out infinite alternate;animation:uni-dialog-grow .1s ease-in-out infinite alternate}\@-webkit-keyframes uni-dialog-grow{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}\@keyframes uni-dialog-grow{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}"; }
};

const DialogContent = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null), core.h("div", { class: "dialog-actions" }, core.h("slot", { name: "actions" }))));
    }
    static get style() { return ":host{display:block;background:#fff;border-radius:12px;padding:16px;min-width:300px}.dialog-actions{margin-top:16px;text-align:right}"; }
};

const DialogTitle = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("h2", { class: "dialog-title" }, core.h("uni-underline", null, core.h("slot", null))));
    }
    static get style() { return ":host{display:block;margin-bottom:16px}h2{margin:0}"; }
};

const Hero = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { style: {
                backgroundImage: this.backgroundUrl && `url("${this.backgroundUrl}")`,
                justifyContent: this.align
            } }, core.h("div", { class: "hero-content", style: { textAlign: this.align } }, core.h("slot", null))));
    }
    static get style() { return ":host{background-repeat:no-repeat;background-size:cover;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:300px;padding:40px 100px}.hero-content{max-width:600px}"; }
};

const Tagline = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, { class: { ['uni-color-' + this.color]: !!this.color } }, core.h("slot", null)));
    }
    static get style() { return ":host{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:700;text-transform:uppercase;display:inline-block;margin:.5rem 0;min-width:40px;text-align:center;padding:.7em 1em;background:var(--uni-color,var(--uni-accent));color:var(--uni-color-contrast,var(--uni-accent-contrast))}"; }
};

let nextUniqueId$1 = 0;
const TextField = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Marks the field as optional
         * */
        this.optional = false;
        /**
         * Displays errors below the input
         * */
        this.errors = '';
        this.uniqueId = 'uni-input-' + nextUniqueId$1++;
    }
    get errorList() {
        const errors = Array.isArray(this.errors) ? this.errors : [this.errors];
        return errors.filter(e => e);
    }
    render() {
        const optional = this.optional && (core.h("span", { class: "optional-label" }, "(optional)"));
        const prependIcon = this.prependIcon && (core.h("ion-icon", { name: this.prependIcon }));
        const prepend = (this.prependText || this.prependIcon) && (core.h("span", { class: "input-prepend" }, prependIcon, this.prependText));
        const errors = this.renderErrors();
        return (core.h(core.Host, { class: { 'input--has-errors': !!this.errorList.length } }, this.label && core.h("label", { htmlFor: this.uniqueId, class: "caption" }, this.label, " ", optional), core.h("div", { class: "input-field" }, prepend, core.h("input", { class: "input-elem", id: this.uniqueId, placeholder: this.placeholder, required: !this.optional })), errors));
    }
    renderErrors() {
        const errors = this.errorList;
        if (!errors.length)
            return null;
        return (core.h("div", { class: "input-errors" }, core.h("ion-icon", { name: "warning" }), core.h("ul", null, errors.map(e => core.h("li", null, e)))));
    }
    static get style() { return ":host{display:block;margin:1rem 0}.caption{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:700;text-transform:uppercase;display:block;margin:4px 0}.optional-label{color:var(--uni-medium)}.input-field{position:relative;overflow:hidden;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;border:1px solid var(--uni-color,var(--uni-dark));border-radius:4px}:host(.input--has-errors) .input-field{border-color:var(--uni-danger)}.input-field:focus-within{-webkit-box-shadow:0 0 0 2px rgba(0,128,255,.5);box-shadow:0 0 0 2px rgba(0,128,255,.5)}.input-prepend{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 10px;background:var(--uni-light);min-width:20px}.input-elem{padding:10px 12px;font-family:inherit;font-size:1rem;border:none}.input-errors{margin-top:.3rem;color:var(--uni-danger)}.input-errors ion-icon{vertical-align:top;margin-right:.5rem;display:inline-block;font-size:24px}.input-errors ul{display:inline-block;padding:0;margin:0;list-style-type:none;font-size:.9rem}"; }
};

const Underline = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null)));
    }
    static get style() { return ":host{font-size:calc(4rem / 3);font-weight:500;font-family:var(--font-header);display:inline-block;padding:4px 0;border-bottom:2px var(--uni-color,var(--uni-primary)) solid}"; }
};

exports.uni_bar_text = BarText;
exports.uni_button = Button;
exports.uni_checkbox = Checkbox;
exports.uni_dialog = Dialog;
exports.uni_dialog_content = DialogContent;
exports.uni_dialog_title = DialogTitle;
exports.uni_hero = Hero;
exports.uni_tagline = Tagline;
exports.uni_text_field = TextField;
exports.uni_underline = Underline;
