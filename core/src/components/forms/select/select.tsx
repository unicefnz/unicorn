import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-select',
  styleUrl: 'select.scss',
  // shadow: true
})
export class Select {
  /**
   * Label to display above the select box
   * */
  @Prop() public label: string;

  render() {
    const select = (
      <div class="select-box">
        <slot />
        <ion-icon name="caret-down" />
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
