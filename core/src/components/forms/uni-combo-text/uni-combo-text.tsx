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
   * Emitted when the button is clicked
   * */
  @Event() public uniSelect: EventEmitter<void>;

  @Listen('focus')
  public onInputFocus() {
    this.uniSelect.emit();
  }

  render() {
    return (
      <Host class={{ 'uni-selected': this.selected, 'uni-disabled': this.disabled }}>
        <slot />
      </Host>
    );
  }
}
