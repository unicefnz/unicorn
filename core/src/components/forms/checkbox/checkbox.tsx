import { Component, Host, h, Prop } from '@stencil/core';

let nextUniqueId = 0;

@Component({
  tag: 'uni-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})
export class Checkbox {
  /**
   * Whether the checkbox is checked
   * */
  @Prop() public value: boolean = false;

  /**
   * When set to true, the state cannot be modified
   * */
  @Prop() public disabled: boolean = false;

  private uniqueId = 'uni-checkbox-' + nextUniqueId++;

  render() {
    return (
      <Host class={{ 'uni-disabled': this.disabled }}>
        <div class="uni-checkbox">
          <input id={this.uniqueId} type="checkbox" disabled={this.disabled} checked={this.value} />
          <ion-icon class="uni-checkbox-check" name="checkmark-sharp" />
          <div class="uni-checkbox-visual" />
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor={this.uniqueId}><slot /></label>
      </Host>
    );
  }
}
