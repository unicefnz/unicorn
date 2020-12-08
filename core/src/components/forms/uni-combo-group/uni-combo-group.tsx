import {
  Component, Host, h, Prop, Event, EventEmitter, Watch, Element, Listen, ComponentInterface
} from '@stencil/core';
import type { ComboItemElement } from './combo-item';

@Component({
  tag: 'uni-combo-group',
  styleUrl: 'uni-combo-group.scss',
  shadow: true
})
export class UniComboGroup implements ComponentInterface {
  @Element() el!: HTMLUniComboGroupElement;

  /**
   * Value of the selected option
   * */
  @Prop() value: string | number;

  /**
   * Display a different style radio group, either a "combo" row or "button" group
   * */
  @Prop() readonly variant: 'combo' | 'button' = 'combo';

  /**
   * Emitted when the selected option changes
   * */
  @Event({ bubbles: false }) uniChange: EventEmitter<string | number>;

  @Watch('value')
  valueChanged(value: string | number) {
    this.setRadioTabindex(value);
  }

  componentDidLoad() {
    this.setRadioTabindex(this.value);
  }

  private setRadioTabindex = (value: any | undefined) => {
    const radios = this.getOpts();

    // Get the first radio that is not disabled and the checked one
    const first = radios.find(radio => !radio.disabled);
    const checked = radios.find(radio => (radio.value === value && !radio.disabled));

    if (!first && !checked) {
      return;
    }

    // If an enabled checked radio exists, set it to be the focusable radio
    // otherwise we default to focus the first radio
    const focusable = checked || first;

    radios.forEach((radio) => {
      radio.setAttribute('tabIndex', radio === focusable ? '0' : '-1');
    });
  };

  private getOpts(): ComboItemElement[] {
    const children = Array.from(this.el.shadowRoot.querySelector('slot').assignedElements({ flatten: true }));
    return [].concat(...children.map((child) => {
      if (child.matches('[uni-radio-option]')) return [child];
      return Array.from(child.querySelectorAll('[uni-radio-option]'));
    }));
  }

  private onSelect(e: CustomEvent) {
    const target = e.target && (e.target as HTMLElement).closest('[uni-radio-option]') as ComboItemElement;

    if (!target) return; // We don't care about this click event

    if (this.value !== target.value) {
      this.value = target.value;
      this.uniChange.emit(this.value); // Only emit when it changes due to user input
    }
  }

  @Listen('keydown', { target: 'document' })
  onKeydown(ev: any) {
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }

    // Get all radios inside of the radio group and then
    // filter out disabled radios since we need to skip those
    const radios = (Array.from(this.el.querySelectorAll('[uni-radio-option]')) as ComboItemElement[]).filter(radio => !radio.disabled);

    // Only move the radio if the current focus is in the radio group
    if (ev.target && radios.includes(ev.target)) {
      const index = radios.findIndex(radio => radio === ev.target);
      const current = radios[index];

      let next;

      // If hitting arrow down or arrow right, move to the next radio
      if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
        // If we're on the last radio, move to the first radio
        next = (index === radios.length - 1)
          ? radios[0]
          : radios[index + 1];
      }

      // If hitting arrow up or arrow left, move to the previous radio
      if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
        // If we're on the first radio, move to the last radio
        next = (index === 0)
          ? radios[radios.length - 1]
          : radios[index - 1];
      }

      if (next && radios.includes(next)) {
        next.setFocus(ev);

        this.value = next.value;
      }

      // Update the radio group value when a user presses the
      // space bar on top of a selected radio (only applies
      // to radios in a select popover)
      if (['Space'].includes(ev.code)) {
        this.value = current.value;
      }
    }
  }

  render() {
    return (
      <Host
        onUniSelect={this.onSelect}
        class={'uni-variant-' + this.variant}
        role="radiogroup"
      >
        <div class="wrapper">
          <slot />
        </div>
      </Host>
    );
  }
}
