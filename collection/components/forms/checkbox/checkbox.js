import { Host, h } from "@stencil/core";
let nextUniqueId = 0;
export class Checkbox {
    constructor() {
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
        return (h(Host, { class: { 'uni-disabled': this.disabled } },
            h("div", { class: "uni-checkbox" },
                h("input", { id: this.uniqueId, type: "checkbox", disabled: this.disabled, checked: this.value }),
                h("ion-icon", { class: "uni-checkbox-check", name: "checkmark-sharp" }),
                h("div", { class: "uni-checkbox-visual" })),
            h("label", { htmlFor: this.uniqueId },
                h("slot", null))));
    }
    static get is() { return "uni-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["checkbox.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["checkbox.css"]
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
                "text": "Whether the checkbox is checked"
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "false"
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
                "text": "When set to true, the state cannot be modified"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
