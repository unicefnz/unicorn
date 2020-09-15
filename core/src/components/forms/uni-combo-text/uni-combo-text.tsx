import {
  Component, Host, h, Prop, Event, EventEmitter, Watch, Element
} from '@stencil/core';

@Component({
  tag: 'uni-combo-text',
  styleUrl: 'uni-combo-text.scss',
  shadow: true
})
export class UniComboText {
  @Element() el: HTMLUniComboTextElement;

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
   * Event to fire the select event on
   * - focus: when the input is focused
   * - uniInput: when the input's value is changed
   * */
  @Prop() readonly selectOn: string = 'focusin';

  /**
   * Emitted when the button is clicked
   * */
  @Event() public uniSelect: EventEmitter<void>;

  @Watch('selectOn')
  public onSelectOnChange(newVal: string, oldVal?: string) {
    if (oldVal) this.el.removeEventListener(oldVal, this.selectEmitter);
    this.el.addEventListener(newVal, this.selectEmitter);
  }

  private selectEmitter = () => this.uniSelect.emit();

  public connectedCallback() {
    this.onSelectOnChange(this.selectOn);
  }

  render() {
    return (
      <Host class={{ 'uni-selected': this.selected, 'uni-disabled': this.disabled }} uni-radio-option>
        <slot />
      </Host>
    );
  }
}
