import { Host, h } from "@stencil/core";
export class Tagline {
    render() {
        return (h(Host, null,
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
}
