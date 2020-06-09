'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-82b860da.js');

const dialogCss = ":host{position:fixed;top:0;left:0;height:100%;width:100%;z-index:1000;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host(:not(.is-open)){display:none}.dialog-backdrop{position:absolute;z-index:-1;top:0;height:100%;width:100%;background:rgba(0, 0, 0, 0.4)}.dialog-pane{position:relative;margin:32px;max-height:100vh;overflow-y:auto}.dialog-pane.shaking{-webkit-animation:0.1s ease-in-out alternate infinite uni-dialog-grow;animation:0.1s ease-in-out alternate infinite uni-dialog-grow}@-webkit-keyframes uni-dialog-grow{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}@keyframes uni-dialog-grow{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}";

const Dialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Whether the dialog is currently open
        * */
        this.open = false;
        /**
         * Controls whether clicking on the backdrop will dismiss the dialog
         * */
        this.backdropDismiss = true;
        this.shakeTimer = null;
        this.close = index.createEvent(this, "close", 3);
    }
    onClose() {
        this.el.removeAttribute('open');
        this.close.emit();
    }
    doShake() {
        if (this.shakeTimer)
            clearTimeout(this.shakeTimer);
        this.shakeTimer = setTimeout(() => {
            this.shakeTimer = null;
        }, 200); // TODO Fix typing so setTimeout uses correct browser types
    }
    backdropClick() {
        if (this.backdropDismiss)
            this.onClose();
        else
            this.doShake();
    }
    render() {
        return (index.h(index.Host, { class: {
                'is-open': this.open
            } }, index.h("div", { class: "dialog-backdrop", onClick: () => this.backdropClick() }), index.h("div", { class: {
                'dialog-pane': true,
                shaking: !!this.shakeTimer
            } }, index.h("slot", null))));
    }
    get el() { return index.getElement(this); }
};
Dialog.style = dialogCss;

exports.uni_dialog = Dialog;
