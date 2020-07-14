import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-dialog-content',
  styleUrl: 'uni-dialog-content.scss',
  shadow: true,
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
        <h1 class="dialog-title">
          <uni-underline>
            <slot name="title" />
          </uni-underline>
        </h1>
        <slot />
        <div class="dialog-actions">
          <slot name="actions" />
        </div>
      </Host>
    );
  }
}
