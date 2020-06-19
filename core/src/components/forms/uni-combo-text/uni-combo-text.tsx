import { Component, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'uni-combo-text',
  styleUrl: 'uni-combo-text.scss',
  shadow: true,
})
export class UniComboText {
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
   * When to fire the select event
   * - focus: when the input is focused
   * - change: when the input's value is changed
   * */
  @Prop() readonly selectOn: 'focus' | 'change' | 'input' = 'focus';

  /**
   * Emitted when the button is clicked
   * */
  @Event() public uniSelect: EventEmitter<void>;

  @Listen('focusin')
  public onInputFocus() {
    if (this.selectOn === 'focus') this.uniSelect.emit();
  }

  @Listen('uniChange')
  public onInputChange() {
    if (this.selectOn === 'change') this.uniSelect.emit();
  }

  @Listen('uniInput')
  public onInput() {
    if (this.selectOn === 'input') this.uniSelect.emit();
  }

  render() {
    return (
      <Host class={{ 'uni-selected': this.selected, 'uni-disabled': this.disabled }} uni-radio-option>
        <slot />
      </Host>
    );
  }
}
