import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  render() {
    return (
      <Host>
        <button class="button"><slot></slot></button>
      </Host>
    );
  }

}
