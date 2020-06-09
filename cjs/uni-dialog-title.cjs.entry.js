'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-82b860da.js');

const dialogTitleCss = ":host{display:block;margin-bottom:16px}h2{margin:0}";

const DialogTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("h2", { class: "dialog-title" }, index.h("uni-underline", null, index.h("slot", null))));
    }
};
DialogTitle.style = dialogTitleCss;

exports.uni_dialog_title = DialogTitle;
