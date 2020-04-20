import { Component, Host, h } from '@stencil/core';

let nextUniqueId = 0;

@Component({
  tag: 'uni-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})
export class Checkbox {
  private uniqueId = 'uni-checkbox-' + nextUniqueId++;

  render() {
    return (
      <Host>
        <div class="uni-checkbox">
          <input id={this.uniqueId} type="checkbox" />
          <ion-icon class="uni-checkbox-check" name="checkmark-sharp" />
          <div class="uni-checkbox-visual" />
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor={this.uniqueId}><slot /></label>
      </Host>
    );
  }
}
