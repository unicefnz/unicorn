import { r as registerInstance, h, H as Host } from './index-61d4a425.js';
var underlineCss = ":host{font-size:calc(4rem / 3);font-weight:500;font-family:var(--font-header);display:inline-block;padding:4px 0;border-bottom:2px var(--uni-color, var(--uni-primary)) solid}";
var Underline = /** @class */ (function () {
    function Underline(hostRef) {
        registerInstance(this, hostRef);
    }
    Underline.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return Underline;
}());
Underline.style = underlineCss;
export { Underline as uni_underline };
