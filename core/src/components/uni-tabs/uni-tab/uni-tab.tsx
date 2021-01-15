import {
  Component, Host, h, Element, Prop,
  Event, EventEmitter, Method, Watch
} from '@stencil/core';
import { RadioItemComponentInterface } from '../../../lib/radio/radio-item';
import { HTMLUniRadioControllerElement } from '../../../lib/radio/radio-controller';

let itemId = 0;
const parentTag = 'uni-tabs';

@Component({
  tag: 'uni-tab',
  styleUrl: 'uni-tab.scss',
  shadow: true
})
export class UniTab implements RadioItemComponentInterface {
  /* Begin abstract class RadioItem */
  private uniqueId = `uni-tab-item-${itemId++}`;

  private parentGroup: HTMLUniRadioControllerElement | null = null;

  @Element() el!: HTMLUniTabElement;

  /**
   * Render this option as selected
   * (used internally)
   *  */
  @Prop() selected: boolean;

  /**
   * Machine value for the option
   * */
  @Prop() value: string | number;

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

  @Watch('value')
  onValueChange() {
    this.updateState();
  }

  connectedCallback() {
    // If no value is set, use the uniqueId
    if (this.value === undefined) this.value = this.uniqueId;

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

  render() {
    return (
      <Host
        class={{ 'uni-selected': this.selected, 'uni-disabled': this.disabled, 'display-overline': true }}
        uni-radio-option
      >
        <button
          onClick={() => this.uniSelect.emit()}
          disabled={this.disabled}
          value={this.value}
          class="radio-elem"
          tabIndex={-1}
          type="button"
        >
          <slot />
        </button>
      </Host>
    );
  }
}
