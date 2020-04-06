import {Component, Host, h, Prop, Event, EventEmitter, Element} from '@stencil/core';

@Component({
  tag: 'uni-dialog',
  styleUrl: 'dialog.scss',
  shadow: true
})
export class Dialog {
  @Element()
  el: HTMLElement;

  @Prop()
  public open = false;

  @Event({ bubbles: false })
  public close: EventEmitter;

  public onClose() {
    this.el.removeAttribute('open');
    this.close.emit();
  }

  render() {
    return (
      <Host class={this.open ? 'is-open' : ''}>
        <div class="dialog-backdrop" onClick={() => this.onClose()} />
        <slot />
      </Host>
    );
  }

}
