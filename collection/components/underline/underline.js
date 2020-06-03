import { Component, Host, h } from '@stencil/core';
export class Underline {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "uni-underline"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["underline.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["underline.css"]
    }; }
}
