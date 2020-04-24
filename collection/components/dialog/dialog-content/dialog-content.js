import { Host, h } from "@stencil/core";
export class DialogContent {
    render() {
        return (h(Host, null,
            h("slot", null),
            h("div", { class: "dialog-actions" },
                h("slot", { name: "actions" }))));
    }
    static get is() { return "uni-dialog-content"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dialog-content.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dialog-content.css"]
    }; }
}
