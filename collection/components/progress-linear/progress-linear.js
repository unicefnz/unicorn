import { Component, Host, h, Prop } from '@stencil/core';
export class ProgressLinear {
    constructor() {
        /**
         * Controls if the loading bar is visible
         * * */
        this.value = true;
    }
    render() {
        return (h(Host, { class: { 'uni-loading-active': this.value, ['uni-color-' + this.color]: !!this.color } },
            h("slot", null)));
    }
    static get is() { return "uni-progress-linear"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["progress-linear.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["progress-linear.css"]
    }; }
    static get properties() { return {
        "value": {
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
                "text": "Controls if the loading bar is visible\n*"
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "true"
        },
        "color": {
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
                "text": "Set the bar's color"
            },
            "attribute": "color",
            "reflect": false
        }
    }; }
}
