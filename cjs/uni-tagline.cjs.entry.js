'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-80028a92.js');

const taglineCss = ":host{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:bold;text-transform:uppercase;display:inline-block;margin:0.5rem 0;min-width:40px;text-align:center;padding:0.7em 1em;background:var(--uni-color, var(--uni-accent));color:var(--uni-color-contrast, var(--uni-accent-contrast))}";

class Tagline {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { class: { ['uni-color-' + this.color]: !!this.color } }, index.h("slot", null)));
    }
}
Tagline.style = taglineCss;

exports.uni_tagline = Tagline;
