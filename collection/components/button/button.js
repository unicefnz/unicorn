import { Host, h } from "@stencil/core";
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
        this.type = 'button';
    }
    render() {
        return (h(Host, { class: {
                ['style-' + this.buttonStyle]: true,
                [`uni-color-${this.color}`]: true
            } },
            h("button", { class: "button", type: this.type },
                this.prependIcon && h("ion-icon", { name: this.prependIcon, class: "prepend-icon" }),
                h("div", null,
                    h("slot", null)))));
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
        "type": {
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
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'button'"
        }
    }; }
}
