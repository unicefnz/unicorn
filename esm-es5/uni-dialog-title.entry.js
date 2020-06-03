import { r as registerInstance, h } from './index-61d4a425.js';
var dialogTitleCss = ":host{display:block;margin-bottom:16px}h2{margin:0}";
var DialogTitle = /** @class */ (function () {
    function DialogTitle(hostRef) {
        registerInstance(this, hostRef);
    }
    DialogTitle.prototype.render = function () {
        return (h("h2", { class: "dialog-title" }, h("uni-underline", null, h("slot", null))));
    };
    return DialogTitle;
}());
DialogTitle.style = dialogTitleCss;
export { DialogTitle as uni_dialog_title };
