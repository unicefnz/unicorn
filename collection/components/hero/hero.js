import { h, Host } from "@stencil/core";
export class Hero {
    render() {
        return (h(Host, { style: {
                backgroundImage: this.backgroundUrl && `url("${this.backgroundUrl}")`,
                justifyContent: this.align
            } },
            h("div", { class: "hero-content", style: { textAlign: this.align } },
                h("slot", null))));
    }
    static get is() { return "uni-hero"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["hero.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["hero.css"]
    }; }
    static get properties() { return {
        "backgroundUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "URL of an image to use for the background"
            },
            "attribute": "background-url",
            "reflect": false
        },
        "align": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'left' | 'start' | 'center' | 'right' | 'end'",
                "resolved": "\"center\" | \"end\" | \"left\" | \"right\" | \"start\"",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "How to align the text"
            },
            "attribute": "align",
            "reflect": false
        }
    }; }
}
