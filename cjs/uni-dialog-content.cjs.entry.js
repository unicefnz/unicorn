'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-80028a92.js');

const dialogContentCss = ":host{display:block;background:white;border-radius:12px;padding:16px;min-width:300px}.dialog-actions{margin-top:16px;text-align:right}";

class DialogContent {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null), index.h("div", { class: "dialog-actions" }, index.h("slot", { name: "actions" }))));
    }
}
DialogContent.style = dialogContentCss;

exports.uni_dialog_content = DialogContent;
