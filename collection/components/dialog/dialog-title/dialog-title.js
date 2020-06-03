import { Component, h } from '@stencil/core';
export class DialogTitle {
    render() {
        return (h("h2", { class: "dialog-title" },
            h("uni-underline", null,
                h("slot", null))));
    }
    static get is() { return "uni-dialog-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dialog-title.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dialog-title.css"]
    }; }
}
