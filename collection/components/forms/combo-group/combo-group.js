import { Component, Host, h, Prop, Event, Watch, State } from '@stencil/core';
export class ComboGroup {
    constructor() {
        /**
         * Available options in the combo group
        * */
        this.options = [];
    }
    onValueChange() {
        this.internalSelected = this.value;
    }
    connectedCallback() {
        this.onValueChange();
    }
    optClick(opt) {
        if (this.internalSelected === opt.id)
            return;
        this.internalSelected = opt.id;
        this.uniChange.emit(opt.id);
    }
    render() {
        return (h(Host, null, this.options.map(opt => (h("button", { class: {
                selected: opt.id === this.internalSelected,
                'combo-item': true
            }, onClick: () => this.optClick(opt), type: "button" }, opt.title)))));
    }
    static get is() { return "uni-combo-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["combo-group.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["combo-group.css"]
    }; }
    static get properties() { return {
        "options": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ComboOption[]",
                "resolved": "ComboOption[]",
                "references": {
                    "ComboOption": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Available options in the combo group"
            },
            "defaultValue": "[]"
        },
        "value": {
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
                "text": "ID of the selected option"
            },
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get states() { return {
        "internalSelected": {}
    }; }
    static get events() { return [{
            "method": "uniChange",
            "name": "uniChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the selected option changes"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "onValueChange"
        }]; }
}
