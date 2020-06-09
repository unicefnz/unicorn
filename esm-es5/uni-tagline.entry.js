import { r as registerInstance, h, H as Host } from './index-d50bc264.js';

const taglineCss = ":host{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:bold;text-transform:uppercase;display:inline-block;margin:0.5rem 0;min-width:40px;text-align:center;padding:0.7em 1em;background:var(--uni-color, var(--uni-accent));color:var(--uni-color-contrast, var(--uni-accent-contrast))}";

const Tagline = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { class: { ['uni-color-' + this.color]: !!this.color } }, h("slot", null)));
    }
};
Tagline.style = taglineCss;

export { Tagline as uni_tagline };
