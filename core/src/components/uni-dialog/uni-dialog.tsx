import {
  Component, Host, h, Prop, Event, EventEmitter, Element, State, ComponentInterface, Method
} from '@stencil/core';
import { OverlayEventDetail, OverlayInterface } from '../../lib/OverlayInterface';
import { prepareOverlay, dismiss, present, BACKDROP } from '../../lib/overlays';

@Component({
  tag: 'uni-dialog',
  styleUrl: 'uni-dialog.scss',
  shadow: true
})
export class UniDialog implements ComponentInterface, OverlayInterface {
  @Element() el: HTMLUniDialogElement;

  /** @internal */
  @Prop() public presented = false;

  /** @internal */
  @Prop() public overlayIndex!: number;

  /**
   * Controls whether clicking on the backdrop will dismiss the dialog
   * */
  @Prop() public backdropDismiss = true;

  /**
   * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
   */
  @Prop() keyboardClose = true;

  /**
   * Emitted after the alert has presented.
   */
  @Event({ eventName: 'uniDidPresent' }) didPresent!: EventEmitter<void>;

  /**
   * Emitted before the alert has presented.
   */
  @Event({ eventName: 'uniWillPresent' }) willPresent!: EventEmitter<void>;

  /**
   * Emitted before the alert has dismissed.
   */
  @Event({ eventName: 'uniWillDismiss' }) willDismiss!: EventEmitter<OverlayEventDetail>;

  /**
   * Emitted after the alert has dismissed.
   */
  @Event({ eventName: 'uniDidDismiss' }) didDismiss!: EventEmitter<OverlayEventDetail>;

  @State() private shakeTimer: number | null = null;

  constructor() {
    prepareOverlay<HTMLUniDialogElement>(this.el);
  }

  /**
   * Present the alert overlay after it has been created.
   */
  @Method()
  present(): Promise<void> {
    return present(this);
  }

  /**
   * Dismiss the alert overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the alert.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the alert.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  @Method()
  dismiss(data?: any, role?: string): Promise<boolean> {
    return dismiss(this, data, role);
  }

  private doShake() {
    if (this.shakeTimer) clearTimeout(this.shakeTimer);
    this.shakeTimer = setTimeout(() => {
      this.shakeTimer = null;
    }, 200) as unknown as number; // TODO Fix typing so setTimeout uses correct browser types
  }

  private onBackdropTap() {
    if (this.backdropDismiss) this.dismiss(undefined, BACKDROP);
    else this.doShake();
  }

  render() {
    return (
      <Host
        role="dialog"
        aria-modal="true"
        tabindex={-1}
        style={{
          zIndex: `${2000 + this.overlayIndex}`,
        }}
        onUniBackdropTap={this.onBackdropTap}
        uni-overlay
      >
        <uni-backdrop tappable={this.backdropDismiss} onClick={() => this.backdropDismiss || this.doShake()} />
        <uni-dialog-content shaking={!!this.shakeTimer}>
          <slot name="title" slot="title" />
          <slot />
          <slot name="actions" slot="actions" />
        </uni-dialog-content>
      </Host>
    );
  }
}
