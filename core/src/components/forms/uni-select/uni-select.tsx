import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-select',
  styleUrl: 'uni-select.scss',
  shadow: true
})
export class UniSelect {
  /**
   * Label to display above the select box
   * */
  @Prop() public label: string;

  render() {
    const select = (
      <div class="select-box">
        <slot />
        <div class="select-icon" />
      </div>
    );
    return (
      <Host>
        {this.label ? (
          <label>
            <span class="select-label">{this.label}</span>
            {select}
          </label>
        ) : select}
      </Host>
    );
  }
}
