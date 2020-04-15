import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-bar-text',
  styleUrl: 'bar-text.scss',
  shadow: true
})
export class BarText {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
