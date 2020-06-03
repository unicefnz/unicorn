import { r as registerInstance, h, H as Host } from './index-61d4a425.js';
var taglineCss = ":host{font-size:calc(2rem / 3);font-family:var(--font-body);font-weight:bold;text-transform:uppercase;display:inline-block;margin:0.5rem 0;min-width:40px;text-align:center;padding:0.7em 1em;background:var(--uni-color, var(--uni-accent));color:var(--uni-color-contrast, var(--uni-accent-contrast))}";
var Tagline = /** @class */ (function () {
    function Tagline(hostRef) {
        registerInstance(this, hostRef);
    }
    Tagline.prototype.render = function () {
        var _a;
        return (h(Host, { class: (_a = {}, _a['uni-color-' + this.color] = !!this.color, _a) }, h("slot", null)));
    };
    return Tagline;
}());
Tagline.style = taglineCss;
export { Tagline as uni_tagline };
