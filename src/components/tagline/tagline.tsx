import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-tagline',
  styleUrl: 'tagline.scss',
  shadow: true
})
export class Tagline {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
