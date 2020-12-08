import {
  Component, Host, h, Prop, Event, EventEmitter, Watch, Element, Method
} from '@stencil/core';
import ComboItemComponentInterface from '../uni-combo-group/combo-item';

let itemId = 0;

@Component({
  tag: 'uni-combo-text',
  styleUrl: 'uni-combo-text.scss',
  shadow: true
})
export class UniComboText implements ComboItemComponentInterface {
  private uniqueId = `uni-combo-text-${itemId++}`;

  private parentGroup: HTMLUniComboGroupElement | null = null;

  @Element() el: HTMLUniComboTextElement;

  /**
   * Marks this option as disabled
   * */
  @Prop() disabled: boolean = false;

  /** @internal */
  @Prop() selected: boolean;

  /**
   * Event to fire the select event on
   * - focus: when the input is focused
   * - uniInput: when the input's value is changed
   * */
  @Prop() selectOn: string = 'focusin';

  /**
   * Machine value for the option
   * */
  @Prop() value: string | number;

  /**
   * Emitted when the button is clicked
   * */
  @Event() public uniSelect: EventEmitter<void>;

  @Watch('selectOn')
  public onSelectTriggerChange(newVal: string, oldVal?: string) {
    if (oldVal) this.el.removeEventListener(oldVal, this.selectEmitter);
    this.el.addEventListener(newVal, this.selectEmitter);
  }

  private selectEmitter = () => this.uniSelect.emit();

  /** @internal */
  @Method()
  async setFocus(ev: any) {
    ev.stopPropagation();
    ev.preventDefault();

    this.el.focus();
  }

  connectedCallback() {
    // If no value is set, use the uniqueId
    if (this.value === undefined) this.value = this.uniqueId;

    this.onSelectTriggerChange(this.selectOn);

    this.parentGroup = this.el.closest('uni-combo-group');
    if (this.parentGroup) {
      this.updateState();
      this.parentGroup.addEventListener('uniChange', this.updateState);
    }
  }

  disconnectedCallback() {
    if (this.parentGroup) {
      this.parentGroup.removeEventListener('uniChange', this.updateState);
      this.parentGroup = null;
    }
  }

  private updateState = () => {
    this.selected = this.parentGroup?.value === this.value;
  };

  render() {
    return (
      <Host
        class={{ 'uni-selected': this.selected, 'uni-disabled': this.disabled }}
        uni-radio-option
        onUniChange={e => e.stopPropagation()}
      >
        <slot />
      </Host>
    );
  }
}
