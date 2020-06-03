import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-61d4a425.js';
var dialogCss = ":host{position:fixed;top:0;left:0;height:100%;width:100%;z-index:1000;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host(:not(.is-open)){display:none}.dialog-backdrop{position:absolute;z-index:-1;top:0;height:100%;width:100%;background:rgba(0, 0, 0, 0.4)}.dialog-pane{position:relative;margin:32px;max-height:100vh;overflow-y:auto}.dialog-pane.shaking{-webkit-animation:0.1s ease-in-out alternate infinite uni-dialog-grow;animation:0.1s ease-in-out alternate infinite uni-dialog-grow}@-webkit-keyframes uni-dialog-grow{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}@keyframes uni-dialog-grow{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.02);transform:scale(1.02)}}";
/*
* When open is set to true, do present action
* When it's set to false, or dismissed otherwise, do dismiss action
* */
/*
* TODO Add esc key handler to support dismissing via keyboard
* */
var Dialog = /** @class */ (function () {
    function Dialog(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Whether the dialog is currently open
        * */
        this.open = false;
        /**
         * Controls whether clicking on the backdrop will dismiss the dialog
         * */
        this.backdropDismiss = true;
        this.shakeTimer = null;
        this.close = createEvent(this, "close", 3);
    }
    Dialog.prototype.onClose = function () {
        this.el.removeAttribute('open');
        this.close.emit();
    };
    Dialog.prototype.doShake = function () {
        var _this = this;
        if (this.shakeTimer)
            clearTimeout(this.shakeTimer);
        this.shakeTimer = setTimeout(function () {
            _this.shakeTimer = null;
        }, 200); // TODO Fix typing so setTimeout uses correct browser types
    };
    Dialog.prototype.backdropClick = function () {
        if (this.backdropDismiss)
            this.onClose();
        else
            this.doShake();
    };
    Dialog.prototype.render = function () {
        var _this = this;
        return (h(Host, { class: {
                'is-open': this.open
            } }, h("div", { class: "dialog-backdrop", onClick: function () { return _this.backdropClick(); } }), h("div", { class: {
                'dialog-pane': true,
                shaking: !!this.shakeTimer
            } }, h("slot", null))));
    };
    Object.defineProperty(Dialog.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return Dialog;
}());
Dialog.style = dialogCss;
export { Dialog as uni_dialog };
