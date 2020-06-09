import { r as registerInstance, h, H as Host } from './index-d50bc264.js';

const heroCss = ":host{background-repeat:no-repeat;background-size:cover;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:300px;padding:40px 100px}.hero-content{max-width:600px}";

const Hero = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { style: {
                backgroundImage: this.backgroundUrl && `url("${this.backgroundUrl}")`,
                justifyContent: this.align
            } }, h("div", { class: "hero-content", style: { textAlign: this.align } }, h("slot", null))));
    }
};
Hero.style = heroCss;

export { Hero as uni_hero };
