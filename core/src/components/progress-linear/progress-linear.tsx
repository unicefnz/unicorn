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


  render() {
    return (
      <Host class={{ 'uni-loading-active': this.value }}>
        <slot></slot>
      </Host>
    );
  }

}
