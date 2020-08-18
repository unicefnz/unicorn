import { Component, h } from '@stencil/core';

@Component({
  tag: 'uni-dialog-actions',
  styleUrl: 'uni-dialog-actions.scss',
  scoped: true
})
export class UniDialogActions {
  render() {
    return <slot />;
  }
}
