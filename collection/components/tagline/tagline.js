import { Component, Host, h, Prop } from '@stencil/core';
export class Tagline {
    render() {
        return (h(Host, { class: { ['uni-color-' + this.color]: !!this.color } },
            h("slot", null)));
    }
    static get is() { return "uni-tagline"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tagline.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tagline.css"]
    }; }
    static get properties() { return {
        "color": {
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
                "text": "Override the default color"
            },
            "attribute": "color",
            "reflect": false
        }
    }; }
}
