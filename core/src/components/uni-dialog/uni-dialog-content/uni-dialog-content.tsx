import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-dialog-content',
  styleUrl: 'uni-dialog-content.scss',
  scoped: true
})
export class UniDialogContent {
  /**
   * Whether to play the shaking animation
   * */
  @Prop() shaking = false;

  render() {
    return (
      <Host
        class={{
          'uni-dialog--shaking': this.shaking
        }}
      >
        <slot />
      </Host>
    );
  }
}
