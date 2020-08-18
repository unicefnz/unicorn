import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'uni-dialog-title',
  styleUrl: 'uni-dialog-title.scss',
  scoped: true
})
export class UniDialogTitle {
  render() {
    return (
      <Host>
        <h1 class="dialog-title">
          <uni-underline>
            <slot />
          </uni-underline>
        </h1>
      </Host>
    );
  }
}
