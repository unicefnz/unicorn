import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-list',
  styleUrl: 'uni-list.scss',
  shadow: true
})
export class UniList {
  render() {
    return (
      <Host>
        <ul>
          <slot />
        </ul>
      </Host>
    );
  }
}
