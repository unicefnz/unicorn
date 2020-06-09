'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-82b860da.js');

const heroCss = ":host{background-repeat:no-repeat;background-size:cover;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:300px;padding:40px 100px}.hero-content{max-width:600px}";

const Hero = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { style: {
                backgroundImage: this.backgroundUrl && `url("${this.backgroundUrl}")`,
                justifyContent: this.align
            } }, index.h("div", { class: "hero-content", style: { textAlign: this.align } }, index.h("slot", null))));
    }
};
Hero.style = heroCss;

exports.uni_hero = Hero;
