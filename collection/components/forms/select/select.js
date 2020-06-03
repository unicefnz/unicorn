import { Component, Host, h, Prop } from '@stencil/core';
export class Select {
    render() {
        const select = (h("div", { class: "select-box" },
            h("slot", null),
            h("ion-icon", { name: "caret-down" })));
        return (h(Host, null, this.label ? (h("label", null,
            h("span", { class: "select-label" }, this.label),
            select)) : select));
    }
    static get is() { return "uni-select"; }
    static get originalStyleUrls() { return {
        "$": ["select.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["select.css"]
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
                "text": "Label to display above the select box"
            },
            "attribute": "label",
            "reflect": false
        }
    }; }
}
