import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-underline',
  styleUrl: 'underline.scss',
  shadow: true
})
export class Underline {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
