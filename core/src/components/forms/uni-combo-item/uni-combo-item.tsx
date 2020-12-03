import {
  Component, Host, h, Prop, Event, Element, Method, EventEmitter
} from '@stencil/core';
import RadioItemInterface from '../../util/uni-radio-controller/radio-item-interface';

let itemId = 0;

@Component({
  tag: 'uni-combo-item',
  styleUrl: 'uni-combo-item.scss',
  shadow: true
})
export class UniComboItem implements RadioItemInterface {
  private uniqueId = `uni-combo-item-${itemId++}`;

  private parentGroup: HTMLUniComboGroupElement | null = null;

  @Element() el!: HTMLUniComboItemElement;

  /** @internal */
  @Prop() selected: boolean;

  /**
   * Machine value for the option
   * */
  @Prop() value: string;

  /**
   * Marks this option as disabled
   * */
  @Prop() disabled: boolean = false;

  /**
   * Emitted when this option is selected (usually when clicked and not disabled)
   * */
  @Event() uniSelect: EventEmitter<void>;

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
        onClick={() => this.disabled || this.uniSelect.emit()}
      >
        <label htmlFor={this.uniqueId}>
          <slot />
        </label>
        <input
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
