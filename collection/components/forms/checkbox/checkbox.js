import { Host, h } from "@stencil/core";
let nextUniqueId = 0;
export class Checkbox {
    constructor() {
        this.uniqueId = 'uni-checkbox-' + nextUniqueId++;
    }
    render() {
        return (h(Host, null,
            h("div", { class: "uni-checkbox" },
                h("input", { id: this.uniqueId, type: "checkbox" }),
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
}
