import { Component, Host, h, Prop, Event, EventEmitter, Listen, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'uni-backdrop',
  styleUrl: 'uni-backdrop.scss',
  shadow: true
})
export class UniBackdrop implements ComponentInterface {
  /**
   * If `true`, the backdrop will be visible.
   */
  @Prop() visible = true;

  /**
   * If `true`, the backdrop will can be clicked and will emit the `uniBackdropTap` event.
   */
  @Prop() tappable = true;

  /**
   * Emitted when the backdrop is tapped.
   */
  @Event() uniBackdropTap!: EventEmitter<void>;


  @Listen('click', { passive: false, capture: true })
  protected onMouseDown(ev: TouchEvent) {
    this.emitTap(ev);
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
        tabindex={-1}
        class={{
          'uni-backdrop--hidden': !this.visible,
          'uni-backdrop--no-interact': !this.tappable,
        }}
      />
    );
  }
}
