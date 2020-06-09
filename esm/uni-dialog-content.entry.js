import { r as registerInstance, h, H as Host } from './index-d50bc264.js';

const dialogContentCss = ":host{display:block;background:white;border-radius:12px;padding:16px;min-width:300px}.dialog-actions{margin-top:16px;text-align:right}";

const DialogContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null), h("div", { class: "dialog-actions" }, h("slot", { name: "actions" }))));
    }
};
DialogContent.style = dialogContentCss;

export { DialogContent as uni_dialog_content };
