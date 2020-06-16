import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'uni-radio-option',
  styleUrl: 'uni-radio-option.scss',
  shadow: true,
})
export class UniRadioOption {
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
      <Host>
        <button
          class={{
            'uni-selected': this.selected,
            'uni-radio-option': true
          }}
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
