import {
  Component,
  Host,
  h,
  Element,
  Prop,
  Watch,
  ComponentInterface, State
} from '@stencil/core';
import type { HTMLUniRadioControllerElement } from '../../../lib/radio/radio-controller';
import type { RadioItemComponentInterface } from '../../../lib/radio/radio-item';

let itemId = 0;
const parentTag = 'uni-tabs';

@Component({
  tag: 'uni-tab-content',
  styleUrl: 'uni-tab-content.scss',
  shadow: true
})
export class UniTabContent implements ComponentInterface, Partial<RadioItemComponentInterface> {
  /* Begin abstract class RadioItem */
  private uniqueId = `uni-tab-content-${itemId++}`;

  private parentGroup: HTMLUniRadioControllerElement | null = null;

  @Element() el!: HTMLUniTabContentElement;

  /** @internal */
  @Prop() selected: boolean;

  /**
   * Machine value for the option
   * */
  @Prop() value: string | number;

  @State() ariaLabelledBy: string | null = null;

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
        uni-selected={this.selected}
        role="tabpanel"
        aria-labelledby={this.ariaLabelledBy}
      >
        <slot />
      </Host>
    );
  }
}
