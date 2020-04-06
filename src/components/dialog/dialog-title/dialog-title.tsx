import { Component, h } from '@stencil/core';

@Component({
  tag: 'uni-dialog-title',
  styleUrl: 'dialog-title.scss',
  shadow: true
})
export class DialogTitle {

  render() {
    return (
      <h2 class="dialog-title">
        <uni-underline>
          <slot />
        </uni-underline>
      </h2>
    );
  }

}
