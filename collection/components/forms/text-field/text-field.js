import { Component, Host, h, Prop, Event } from '@stencil/core';
let nextUniqueId = 0;
export class TextField {
    constructor() {
        /**
         * Marks the field as optional
         * */
        this.optional = false;
        /**
         * Displays errors below the input
         * */
        this.errors = '';
        this.uniqueId = 'uni-input-' + nextUniqueId++;
    }
    get errorList() {
        const errors = Array.isArray(this.errors) ? this.errors : [this.errors];
        return errors.filter(e => e);
    }
    render() {
        const optional = this.optional && (h("span", { class: "optional-label" }, "(optional)"));
        const prependIcon = this.prependIcon && (h("ion-icon", { name: this.prependIcon }));
        const prepend = (this.prependText || this.prependIcon) && (h("span", { class: "input-prepend" },
            prependIcon,
            this.prependText));
        const errors = this.renderErrors();
        return (h(Host, { class: { 'input--has-errors': !!this.errorList.length } },
            this.label && h("label", { htmlFor: this.uniqueId, class: "caption" },
                this.label,
                " ",
                optional),
            h("div", { class: "input-field" },
                prepend,
                h("input", { class: "input-elem", id: this.uniqueId, disabled: this.disabled, readOnly: this.readonly, placeholder: this.placeholder, required: !this.optional, value: this.value, onChange: e => this.uniChange.emit(e.target.value), onInput: e => this.uniInput.emit(e.target.value) })),
            errors));
    }
    renderErrors() {
        const errors = this.errorList;
        if (!errors.length)
            return null;
        return (h("div", { class: "input-errors" },
            h("ion-icon", { name: "warning" }),
            h("ul", null, errors.map(e => h("li", null, e)))));
    }
    static get is() { return "uni-text-field"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["text-field.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["text-field.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Label text above the field"
            },
            "attribute": "label",
            "reflect": false
        },
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Placeholder displayed inside the field"
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Makes the field disabled and unselectable"
            },
            "attribute": "disabled",
            "reflect": false
        },
        "readonly": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Prevents editing the field, but allows selecting text"
            },
            "attribute": "readonly",
            "reflect": false
        },
        "optional": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Marks the field as optional"
            },
            "attribute": "optional",
            "reflect": false,
            "defaultValue": "false"
        },
        "prependText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Optionally prepend some text inside the field, eg a $ prefix"
            },
            "attribute": "prepend-text",
            "reflect": false
        },
        "prependIcon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Optionally prepend an icon to the inside of the field, eg a search icon"
            },
            "attribute": "prepend-icon",
            "reflect": false
        },
        "errors": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | string[]",
                "resolved": "string | string[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Displays errors below the input"
            },
            "attribute": "errors",
            "reflect": false,
            "defaultValue": "''"
        },
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set the value of the field"
            },
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "uniChange",
            "name": "uniChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when form field value is committed"
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }, {
            "method": "uniInput",
            "name": "uniInput",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the form field value changes"
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
}
