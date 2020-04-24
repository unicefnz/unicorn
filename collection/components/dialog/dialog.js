import { Host, h } from "@stencil/core";
/*
* When open is set to true, do present action
* When it's set to false, or dismissed otherwise, do dismiss action
* */
/*
* TODO Add esc key handler to support dismissing via keyboard
* */
export class Dialog {
    constructor() {
        /**
         * Whether the dialog is currently open
        * */
        this.open = false;
        /**
         * Controls whether clicking on the backdrop will dismiss the dialog
         * */
        this.backdropDismiss = true;
        this.shakeTimer = null;
    }
    onClose() {
        this.el.removeAttribute('open');
        this.close.emit();
    }
    doShake() {
        if (this.shakeTimer)
            clearTimeout(this.shakeTimer);
        this.shakeTimer = setTimeout(() => {
            this.shakeTimer = null;
        }, 200); // TODO Fix typing so setTimeout uses correct browser types
    }
    backdropClick() {
        if (this.backdropDismiss)
            this.onClose();
        else
            this.doShake();
    }
    render() {
        return (h(Host, { class: {
                'is-open': this.open
            } },
            h("div", { class: "dialog-backdrop", onClick: () => this.backdropClick() }),
            h("div", { class: {
                    'dialog-pane': true,
                    shaking: !!this.shakeTimer
                } },
                h("slot", null))));
    }
    static get is() { return "uni-dialog"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["dialog.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dialog.css"]
    }; }
    static get properties() { return {
        "open": {
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
                "text": "Whether the dialog is currently open"
            },
            "attribute": "open",
            "reflect": false,
            "defaultValue": "false"
        },
        "backdropDismiss": {
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
                "text": "Controls whether clicking on the backdrop will dismiss the dialog"
            },
            "attribute": "backdrop-dismiss",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
    static get states() { return {
        "shakeTimer": {}
    }; }
    static get events() { return [{
            "method": "close",
            "name": "close",
            "bubbles": false,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the dialog is closed"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
}
