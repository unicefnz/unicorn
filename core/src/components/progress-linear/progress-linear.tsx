import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-progress-linear',
  styleUrl: 'progress-linear.scss',
  shadow: true
})
export class ProgressLinear {
  /**
   * Controls if the loading bar is visible
   * * */
  @Prop() value: boolean = true;

  /**
   * Set the bar's color
   * */
  @Prop() color?: string;

  render() {
    return (
      <Host class={{ 'uni-loading-active': this.value, ['uni-color-' + this.color]: !!this.color }}>
        <slot />
      </Host>
    );
  }
}
