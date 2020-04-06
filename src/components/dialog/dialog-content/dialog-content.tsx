import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-dialog-content',
  styleUrl: 'dialog-content.scss',
  shadow: true
})
export class DialogContent {

  render() {
    return (
      <Host>
        <slot />
        <div class="dialog-actions">
          <slot name="actions" />
        </div>
      </Host>
    );
  }
}
