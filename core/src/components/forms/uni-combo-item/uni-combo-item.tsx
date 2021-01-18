import {
  Component, Host, h, Element, Prop,
  Event, EventEmitter, Method, Watch
} from '@stencil/core';
import { RadioItemComponentInterface } from '../../../lib/radio/radio-item';
import { HTMLUniRadioControllerElement } from '../../../lib/radio/radio-controller';

let itemId = 0;

@Component({
  tag: 'uni-combo-item',
  styleUrl: 'uni-combo-item.scss',
  shadow: true
})
export class UniComboItem implements RadioItemComponentInterface {
  /* Begin abstract class RadioItem */
  private uniqueId = `uni-combo-item-${itemId++}`;

  private parentGroup: HTMLUniRadioControllerElement | null = null;

  @Element() el!: HTMLUniComboItemElement;

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
    this.parentGroup = this.el.closest('[uni-radio-controller]');
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

  render() {
    return (
      <Host
        class={{ 'uni-selected': this.selected, 'uni-disabled': this.disabled }}
        uni-radio-option
      >
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor={this.uniqueId}>
          <span>
            <slot />
          </span>
        </label>
        <input
          onClick={() => this.uniSelect.emit()}
          class="radio-elem"
          type="radio"
          checked={this.selected}
          disabled={this.disabled}
          value={this.value}
          id={this.uniqueId}
        />
      </Host>
    );
  }
}
