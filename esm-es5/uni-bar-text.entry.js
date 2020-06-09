import { r as registerInstance, h, H as Host } from './index-d50bc264.js';

const barTextCss = ":host{display:inline;background:var(--uni-color, var(--uni-primary));color:var(--uni-color-contrast, var(--uni-primary-contrast));padding:0.6rem 0}";

const BarText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
BarText.style = barTextCss;

export { BarText as uni_bar_text };
