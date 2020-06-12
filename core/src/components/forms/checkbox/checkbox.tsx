import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';

let nextUniqueId = 0;

@Component({
  tag: 'uni-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true
})
export class Checkbox {
  @Element() el: HTMLUniCheckboxElement;

  /**
   * HTML Form value. This is not the checked state, use checked instead
   * */
  @Prop() public value?: string;

  /**
   * The checked state of the checkbox
   * */
  @Prop() public checked: boolean = false;

  /**
   * Puts the checkbox in an indeterminate state ( [-] )
   * */
  @Prop() public indeterminate: boolean = false;

  /**
   * Prevents the state from being modified
   * */
  @Prop() public readonly: boolean = false;

  /**
   * When true, the checkbox is marked as disabled and state cannot be modified
   * */
  @Prop() public disabled: boolean = false;

  /**
   * Emitted when checkbox value is changed
   * */
  @Event() public uniChange: EventEmitter<boolean>;


  private uniqueId = 'uni-checkbox-' + nextUniqueId++;

  render() {
    return (
      <Host class={{ 'uni-disabled': this.disabled, 'uni-checked': this.checked, 'uni-indeterminate': this.indeterminate }}>
        <div class="uni-checkbox">
          <input
            id={this.uniqueId}
            type="checkbox"
            onChange={e => this.uniChange.emit((e.target as HTMLInputElement).checked)}
            disabled={this.disabled}
            checked={this.checked}
            value={this.value}
            readOnly={this.readonly}
          />
          <div class="uni-checkbox-icon">
            <ion-icon class="uni-checkbox-check" name="checkmark-sharp" />
            <div class="uni-checkbox-indeterminate" />
          </div>
          <div class="uni-checkbox-visual" />
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor={this.uniqueId}><slot /></label>
      </Host>
    );
  }
}
