import { Host, h } from "@stencil/core";
export class BarText {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "uni-bar-text"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["bar-text.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["bar-text.css"]
    }; }
}
