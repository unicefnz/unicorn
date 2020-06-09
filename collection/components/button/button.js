import { Component, Host, h, Prop } from '@stencil/core';
export class Button {
    constructor() {
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
        this.buttonType = 'button';
    }
    render() {
        const isDisabled = this.disabled || this.loading;
        const contents = [
            this.prependIcon && h("ion-icon", { name: this.prependIcon, class: "prepend-icon" }),
            (h("div", { class: "button-content" },
                h("slot", null)))
        ];
        return (h(Host, { class: {
                ['uni-style-' + this.buttonStyle]: true,
                [`uni-color-${this.color}`]: true,
                'uni-loading': this.loading,
                'uni-disabled': isDisabled
            } }, this.href ? (h("a", { class: "button", href: this.href, onClick: e => isDisabled && e.preventDefault() }, contents)) : (
        // eslint-disable-next-line react/button-has-type
        h("button", { class: "button", type: this.buttonType, disabled: isDisabled }, contents))));
    }
    static get is() { return "uni-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "loading": {
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
                "text": "Changes the button into a loading state"
            },
            "attribute": "loading",
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
                "text": "Disables the button, preventing input"
            },
            "attribute": "disabled",
            "reflect": false
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | null",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Defines the main color of the button\nEg. accent, primary"
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "'accent'"
        },
        "buttonStyle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "ButtonStyle",
                "resolved": "\"border\" | \"solid\"",
                "references": {
                    "ButtonStyle": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Sets the style of the button\nOne of 'solid' or 'border'"
            },
            "attribute": "button-style",
            "reflect": false,
            "defaultValue": "'solid'"
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Name of a icon to prepend inside the button\nEg. logo-google"
            },
            "attribute": "prepend-icon",
            "reflect": false
        },
        "buttonType": {
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
                "text": "Type of the underlying button\nSee https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md\nOne of 'button', 'submit', or 'reset'"
            },
            "attribute": "button-type",
            "reflect": false,
            "defaultValue": "'button'"
        },
        "href": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Make this button a link to `href` instead"
            },
            "attribute": "href",
            "reflect": false
        }
    }; }
}
