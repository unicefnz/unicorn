import { EventEmitter } from '@stencil/core';
export declare class Dialog {
    el: HTMLUniDialogElement;
    /**
     * Whether the dialog is currently open
    * */
    open: boolean;
    /**
     * Controls whether clicking on the backdrop will dismiss the dialog
     * */
    backdropDismiss: boolean;
    /**
     * Emitted when the dialog is closed
    * */
    close: EventEmitter;
    private shakeTimer;
    private onClose;
    private doShake;
    private backdropClick;
    render(): any;
}
