import {
  Component, Host, h, Prop, Event, EventEmitter, Watch, Element, Method
} from '@stencil/core';
import { RadioItemComponentInterface } from '../../../lib/radio/radio-item';
import { HTMLUniRadioControllerElement } from '../../../lib/radio/radio-controller';

let itemId = 0;
const parentTag = 'uni-combo-group';

@Component({
  tag: 'uni-combo-text',
  styleUrl: 'uni-combo-text.scss',
  shadow: true
})
export class UniComboText implements RadioItemComponentInterface {
  /* Begin abstract class RadioItem */
  private uniqueId = `uni-combo-text-item-${itemId++}`;

  private parentGroup: HTMLUniRadioControllerElement | null = null;

  @Element() el!: HTMLUniComboTextElement;

  /** @internal */
  @Prop() selected: boolean = false;

  /**
   * Machine value for the option
   * */
  @Prop() value: string | number = this.uniqueId;

  /**
   * Marks this option as disabled
   * */
  @Prop() disabled: boolean = false;

  /**
   * Emitted when this option is selected (usually when clicked and not disabled)
   * */
  @Event() uniSelect!: EventEmitter<void>;

  /** @internal */
  @Method()
  async setFocus(ev: any) {
    ev.stopPropagation();
    ev.preventDefault();

    this.el.focus();
  }

  @Watch('value')
  onValueChange() {
    this.updateState();
  }

  connectedCallback() {
    this.onSelectTriggerChange(this.selectOn);

    this.parentGroup = this.el.closest(parentTag);
    if (this.parentGroup) {
      this.updateState();
      this.parentGroup.addEventListener('uniInternalChange', this.updateState);
    }
  }

  disconnectedCallback() {
    if (this.parentGroup) {
      this.parentGroup.removeEventListener('uniInternalChange', this.updateState);
      this.parentGroup = null;
    }
  }

  private updateState = () => {
    this.selected = this.parentGroup?.value === this.value;
  };
  /* End abstract class RadioItem */

  /**
   * Event to fire the select event on
   * - focus: when the input is focused
   * - uniInput: when the input's value is changed
   * */
  @Prop() selectOn: string = 'focusin';

  @Watch('selectOn')
  public onSelectTriggerChange(newVal: string, oldVal?: string) {
    if (oldVal && this.childField) this.childField.removeEventListener(oldVal, this.selectEmitter);
    this.childField = this.el.querySelector('uni-text-field');
    if (this.childField) this.childField.addEventListener(newVal, this.selectEmitter);
  }

  private selectEmitter = () => this.uniSelect.emit();

  private childField: HTMLUniTextFieldElement | null = null;

  render() {
    return (
      <Host
        class={{ 'uni-selected': this.selected, 'uni-disabled': this.disabled }}
        uni-radio-option
      >
        <slot />
      </Host>
    );
  }
}
