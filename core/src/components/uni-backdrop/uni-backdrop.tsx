import { Component, Host, h, Prop, Event, EventEmitter, Listen, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'uni-backdrop',
  styleUrl: 'uni-backdrop.scss'
})
export class UniBackdrop implements ComponentInterface {
  private lastClick = -10000;

  /**
   * If `true`, the backdrop will be visible.
   */
  @Prop() visible = true;

  /**
   * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
   */
  @Prop() tappable = true;

  /**
   * Emitted when the backdrop is tapped.
   */
  @Event() uniBackdropTap!: EventEmitter<void>;


  @Listen('touchstart', { passive: false, capture: true })
  protected onTouchStart(ev: TouchEvent) {
    this.lastClick = ev.timeStamp || Date.now();
    this.emitTap(ev);
  }

  @Listen('click', { passive: false, capture: true })
  @Listen('mousedown', { passive: false, capture: true })
  protected onMouseDown(ev: TouchEvent) {
    if (this.lastClick < (ev.timeStamp || Date.now()) - 2500) {
      this.emitTap(ev);
    }
  }

  private emitTap(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();

    if (this.tappable) {
      this.uniBackdropTap.emit();
    }
  }

  render() {
    return (
      <Host
        class={{
          'backdrop-hide': !this.visible,
          'backdrop-no-tappable': !this.tappable,
        }}
      />
    );
  }
}
