import {
  Component, Host, h, Prop, Event, EventEmitter, Element, State
} from '@stencil/core';

/*
* When open is set to true, do present action
* When it's set to false, or dismissed otherwise, do dismiss action
* */
/*
* TODO Add esc key handler to support dismissing via keyboard
* */

@Component({
  tag: 'uni-dialog',
  styleUrl: 'dialog.scss',
  shadow: true
})
export class Dialog {
  @Element() el: HTMLUniDialogElement;

  /**
   * Whether the dialog is currently open
  * */
  @Prop() public open = false;

  /**
   * Controls whether clicking on the backdrop will dismiss the dialog
   * */
  @Prop() public backdropDismiss = true;

  /**
   * Emitted when the dialog is closed
  * */
  @Event({ bubbles: false }) public close: EventEmitter;

  @State() private shakeTimer: number | null = null;

  private onClose() {
    this.el.removeAttribute('open');
    this.close.emit();
  }

  private doShake() {
    if (this.shakeTimer) clearTimeout(this.shakeTimer);
    this.shakeTimer = setTimeout(() => {
      this.shakeTimer = null;
    }, 200) as unknown as number; // TODO Fix typing so setTimeout uses correct browser types
  }

  private backdropClick() {
    if (this.backdropDismiss) this.onClose();
    else this.doShake();
  }

  render() {
    return (
      <Host
        class={{
          'is-open': this.open
        }}
      >
        {/* The backdrop is a graphical only way of dismissing the dialog, there should be a cancel button somewhere? */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div class="dialog-backdrop" onClick={() => this.backdropClick()} />
        <div
          class={{
            'dialog-pane': true,
            shaking: !!this.shakeTimer
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
