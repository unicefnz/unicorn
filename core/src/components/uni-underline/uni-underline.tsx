import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-underline',
  styleUrl: 'uni-underline.scss',
  shadow: true,
})
export class UniUnderline {

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }

}
