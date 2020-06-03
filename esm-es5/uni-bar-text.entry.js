import { r as registerInstance, h, H as Host } from './index-61d4a425.js';
var barTextCss = ":host{display:inline;background:var(--uni-color, var(--uni-primary));color:var(--uni-color-contrast, var(--uni-primary-contrast));padding:0.6rem 0}";
var BarText = /** @class */ (function () {
    function BarText(hostRef) {
        registerInstance(this, hostRef);
    }
    BarText.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return BarText;
}());
BarText.style = barTextCss;
export { BarText as uni_bar_text };
