import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import RadioItemInterface from '../uni-radio-controller/radio-item-interface';

@Component({
  tag: 'uni-combo-item',
  styleUrl: 'uni-combo-item.scss',
  shadow: true,
})
export class UniComboItem implements RadioItemInterface {
  /** @internal */
  @Prop() readonly selected: boolean;

  /**
   * Machine value for the option
   * */
  @Prop() readonly value: string;

  /**
   * Marks this option as disabled
   * */
  @Prop() readonly disabled: boolean = false;

  /**
   * Emitted when the button is clicked
   * */
  @Event() public uniSelect: EventEmitter<void>;

  render() {
    return (
      <Host class={{ 'uni-selected': this.selected }}>
        <button
          class="combo-item"
          onClick={() => this.uniSelect.emit()}
          disabled={this.disabled}
          type="button"
        >
          <slot />
        </button>
      </Host>
    );
  }
}
