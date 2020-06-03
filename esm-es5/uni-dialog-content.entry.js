import { r as registerInstance, h, H as Host } from './index-61d4a425.js';
var dialogContentCss = ":host{display:block;background:white;border-radius:12px;padding:16px;min-width:300px}.dialog-actions{margin-top:16px;text-align:right}";
var DialogContent = /** @class */ (function () {
    function DialogContent(hostRef) {
        registerInstance(this, hostRef);
    }
    DialogContent.prototype.render = function () {
        return (h(Host, null, h("slot", null), h("div", { class: "dialog-actions" }, h("slot", { name: "actions" }))));
    };
    return DialogContent;
}());
DialogContent.style = dialogContentCss;
export { DialogContent as uni_dialog_content };
