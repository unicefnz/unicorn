import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from './core-244a4bc2.js';

const BarText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host{display:inline;background:var(--uni-color,var(--uni-primary));color:var(--uni-color-contrast,var(--uni-primary-contrast));padding:.6rem 0}"; }
};

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { class: {
                ['style-' + this.buttonStyle]: true,
                [`uni-color-${this.color}`]: true
            } }, h("button", { class: "button", type: this.type }, this.prependIcon && h("ion-icon", { name: this.prependIcon, class: "prepend-icon" }), h("div", null, h("slot", null)))));
    }
    static get style() { return ":host{display:inline-block;min-width:120px}.button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 1rem;border:none;border-radius:20px;background:none;height:40px;width:100%;cursor:pointer;font-size:1rem;font-family:inherit}.prepend-icon{margin-right:10px}:host(.style-border) .button{border:2px solid var(--uni-color,var(--uni-accent));-webkit-transition:background-color .3s,color .3s;transition:background-color .3s,color .3s;color:var(--uni-color,var(--uni-accent))}:host(.style-border) .button:focus,:host(.style-border) .button:hover,:host(.style-solid) .button{color:var(--uni-color-contrast,var(--uni-accent-contrast));background:var(--uni-color,var(--uni-accent))}:host(.style-solid) .button{-webkit-transition:-webkit-filter .3s;transition:-webkit-filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s}:host(.style-solid) .button:focus,:host(.style-solid) .button:hover{-webkit-filter:brightness(90%);filter:brightness(90%)}"; }
};

let nextUniqueId = 0;
const Checkbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uniqueId = 'uni-checkbox-' + nextUniqueId++;
    }
    render() {
        return (h(Host, null, h("div", { class: "uni-checkbox" }, h("input", { id: this.uniqueId, type: "checkbox" }), h("ion-icon", { class: "uni-checkbox-check", name: "checkmark-sharp" }), h("div", { class: "uni-checkbox-visual" })), h("label", { htmlFor: this.uniqueId }, h("slot", null))));
    }
    static get style() { return ":host{display:block}.uni-checkbox{position:relative;vertical-align:middle;margin-right:.5rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:24px;height:24px}.uni-checkbox input{margin:0;width:100%;height:100%;position:absolute;opacity:0;cursor:pointer;z-index:2}.uni-checkbox .uni-checkbox-visual{width:16px;height:16px;border:2px solid var(--uni-accent-contrast);border-radius:4px}.uni-checkbox .uni-checkbox-check{position:absolute;display:none;-ms-flex-align:center;align-items:center;overflow:hidden;color:var(--uni-accent-contrast)}.uni-checkbox input:checked~.uni-checkbox-visual{background:var(--uni-accent)}.uni-checkbox input:checked~.uni-checkbox-check{display:-ms-flexbox;display:flex}label{vertical-align:middle}"; }
};

const Dialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Whether the dialog is currently open
        * */
        this.open = false;
        /**
         * Controls whether clicking on the backdrop will dismiss the dialog
         * */
        this.backdropDismiss = true;
        this.shakeTimer = null;
        this.close = createEvent(this, "close", 3);
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
        return (h(Host, { class: {
                'is-open': this.open
            } }, h("div", { class: "dialog-backdrop", onClick: () => this.backdropClick() }), h("div", { class: {
                'dialog-pane': true,
                shaking: !!this.shakeTimer
            } }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host{position:fixed;top:0;left:0;height:100%;width:100%;z-index:1000;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host(:not(.is-open)){display:none}.dialog-backdrop{position:absolute;z-index:-1;top:0;height:100%;width:100%;background:rgba(0,0,0,.4)}.dialog-pane{position:relative;margin:32px;max-height:100vh;overflow-y:auto}.dialog-pane.shaking{-webkit-animation:uni-dialog-grow .1s ease-in-out infinite alternate;animation:uni-dialog-grow .1s ease-in-out infinite alternate}\@-webkit-keyframes uni-dialog-grow{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}\@keyframes uni-dialog-grow{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}"; }
};

const DialogContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null), h("div", { class: "dialog-actions" }, h("slot", { name: "actions" }))));
    }
    static get style() { return ":host{display:block;background:#fff;border-radius:12px;padding:16px;min-width:300px}.dialog-actions{margin-top:16px;text-align:right}"; }
};

const DialogTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("h2", { class: "dialog-title" }, h("uni-underline", null, h("slot", null))));
    }
    static get style() { return ":host{display:block;margin-bottom:16px}h2{margin:0}"; }
};

const Hero = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { style: {
                backgroundImage: this.backgroundUrl && `url("${this.backgroundUrl}")`,
                justifyContent: this.align
            } }, h("div", { class: "hero-content", style: { textAlign: this.align } }, h("slot", null))));
    }
    static get style() { return ":host{background-repeat:no-repeat;background-size:cover;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:300px;padding:40px 100px}.hero-content{max-width:600px}"; }
};

const Tagline = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:700;text-transform:uppercase;display:inline-block;margin:.5rem 0;min-width:40px;text-align:center;padding:.7em 1em;background:var(--uni-color,var(--uni-accent));color:var(--uni-color-contrast,var(--uni-accent-contrast))}"; }
};

let nextUniqueId$1 = 0;
const TextField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        const optional = this.optional && (h("span", { class: "optional-label" }, "(optional)"));
        const prependIcon = this.prependIcon && (h("ion-icon", { name: this.prependIcon }));
        const prepend = (this.prependText || this.prependIcon) && (h("span", { class: "input-prepend" }, prependIcon, this.prependText));
        const errors = this.renderErrors();
        return (h(Host, { class: { 'input--has-errors': !!this.errorList.length } }, this.label && h("label", { htmlFor: this.uniqueId, class: "caption" }, this.label, " ", optional), h("div", { class: "input-field" }, prepend, h("input", { class: "input-elem", id: this.uniqueId, placeholder: this.placeholder, required: !this.optional })), errors));
    }
    renderErrors() {
        const errors = this.errorList;
        if (!errors.length)
            return null;
        return (h("div", { class: "input-errors" }, h("ion-icon", { name: "warning" }), h("ul", null, errors.map(e => h("li", null, e)))));
    }
    static get style() { return ":host{display:block;margin:1rem 0}.caption{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:700;text-transform:uppercase;display:block;margin:4px 0}.optional-label{color:var(--uni-medium)}.input-field{position:relative;overflow:hidden;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;border:1px solid var(--uni-color,var(--uni-dark));border-radius:4px}:host(.input--has-errors) .input-field{border-color:var(--uni-danger)}.input-field:focus-within{-webkit-box-shadow:0 0 0 2px rgba(0,128,255,.5);box-shadow:0 0 0 2px rgba(0,128,255,.5)}.input-prepend{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 10px;background:var(--uni-light);min-width:20px}.input-elem{padding:10px 12px;font-family:inherit;font-size:1rem;border:none}.input-errors{margin-top:.3rem;color:var(--uni-danger)}.input-errors ion-icon{vertical-align:top;margin-right:.5rem;display:inline-block;font-size:24px}.input-errors ul{display:inline-block;padding:0;margin:0;list-style-type:none;font-size:.9rem}"; }
};

const Underline = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    static get style() { return ":host{font-size:calc(4rem / 3);font-weight:500;font-family:var(--font-header);display:inline-block;padding:4px 0;border-bottom:2px var(--uni-color,var(--uni-primary)) solid}"; }
};

export { BarText as uni_bar_text, Button as uni_button, Checkbox as uni_checkbox, Dialog as uni_dialog, DialogContent as uni_dialog_content, DialogTitle as uni_dialog_title, Hero as uni_hero, Tagline as uni_tagline, TextField as uni_text_field, Underline as uni_underline };
