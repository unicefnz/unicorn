import {
  Component, h, Element, Prop, Event, EventEmitter, Watch, ComponentInterface, Listen
} from '@stencil/core';
import { HTMLUniRadioItemElement } from './radio-item-interface';

@Component({
  tag: 'uni-radio-controller',
  shadow: true
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
  @Event({ bubbles: false }) readonly uniChange: EventEmitter<string>;

  private selected: HTMLUniRadioItemElement;

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
    this.selectOpt(event.target as HTMLUniRadioItemElement);
    event.stopPropagation();
  }

  private selectOpt(opt?: HTMLUniRadioItemElement) {
    if (this.selected === opt) return; // If it's already selected, do nothing

    if (this.selected) this.selected.selected = false;
    if (!opt) return;

    this.selected = opt;
    // eslint-disable-next-line no-param-reassign
    opt.selected = true;

    this.uniChange.emit(opt.value);
  }

  private getOpts(): HTMLUniRadioItemElement[] {
    const children = Array.from(this.el.shadowRoot.querySelector('slot').assignedElements({ flatten: true }));
    return [].concat(...children.map((child) => {
      if (child.matches('[uni-radio-option]')) return [child];
      return Array.from(child.querySelectorAll('[uni-radio-option]'));
    }));
  }
}
