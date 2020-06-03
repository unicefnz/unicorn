import { r as registerInstance, h, H as Host } from './index-61d4a425.js';

const underlineCss = ":host{font-size:calc(4rem / 3);font-weight:500;font-family:var(--font-header);display:inline-block;padding:4px 0;border-bottom:2px var(--uni-color, var(--uni-primary)) solid}";

class Underline {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
}
Underline.style = underlineCss;

export { Underline as uni_underline };
