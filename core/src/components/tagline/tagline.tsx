import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-tagline',
  styleUrl: 'tagline.scss',
  shadow: true
})
export class Tagline {
  /**
   * Override the default color
   * */
  @Prop() color: string;

  render() {
    return (
      <Host class={{ ['uni-color-' + this.color]: !!this.color }}>
        <slot />
      </Host>
    );
  }
}
