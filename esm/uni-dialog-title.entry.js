import { r as registerInstance, h } from './index-61d4a425.js';

const dialogTitleCss = ":host{display:block;margin-bottom:16px}h2{margin:0}";

class DialogTitle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("h2", { class: "dialog-title" }, h("uni-underline", null, h("slot", null))));
    }
}
DialogTitle.style = dialogTitleCss;

export { DialogTitle as uni_dialog_title };
