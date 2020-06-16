import { Component, h, Element, Prop, Event, EventEmitter, Watch, ComponentInterface, Listen } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

interface HTMLUniRadioOptionElement extends HTMLStencilElement {
  selected: boolean;
  value: string;
}

@Component({
  tag: 'uni-radio-controller',
  shadow: true,
})
export class UniRadioController implements ComponentInterface {
  @Element() readonly el: HTMLUniRadioControllerElement;

  /**
   * Value of the selected option
   * */
  @Prop() readonly value: string;

  /**
   * Emitted when the selected option changes
   * */
  @Event() readonly uniChange: EventEmitter<string>;

  private selected: HTMLUniRadioOptionElement;

  componentDidLoad() {
    // Initialise the opts - called after shadow dom is ready!
    this.getOpts().forEach((opt, index) => {
      // eslint-disable-next-line no-param-reassign
      if (!opt.value) opt.value = index.toString();
    });

    if (this.value) this.onValueChange(this.value);
  }

  render() {
    return (
      <slot />
    );
  }

  @Watch('value')
  public onValueChange(val: string) {
    const opt = this.getOpts().find(o => o.value === val);
    this.selectOpt(opt);
  }

  @Listen('uniSelect')
  public onSelect(event: CustomEvent) {
    this.selectOpt(event.target as HTMLUniRadioOptionElement);
    event.stopPropagation();
  }

  private selectOpt(opt?: HTMLUniRadioOptionElement) {
    if (this.selected === opt) return; // If it's already selected, do nothing

    if (this.selected) this.selected.selected = false;
    if (!opt) return;

    this.selected = opt;
    // eslint-disable-next-line no-param-reassign
    opt.selected = true;

    this.uniChange.emit(opt.value);
  }

  private getOpts(): HTMLUniRadioOptionElement[] {
    return Array.from(this.el.shadowRoot.querySelector('slot').assignedElements({ flatten: true })) as HTMLUniRadioOptionElement[];
  }
}
