import { Component, h, Element, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

interface HTMLUniRadioOptionElement extends HTMLStencilElement {
  selected: boolean;
  value: string;
}

@Component({
  tag: 'uni-radio-controller',
  shadow: true,
})
export class UniRadioController {
  @Element() readonly el: HTMLUniRadioControllerElement;

  /**
   * Value of the selected option
   * */
  @Prop() readonly value: string;

  /**
   * Emitted when the selected option changes
   * */
  @Event() readonly uniChange: EventEmitter<string>;

  @Watch('value')
  public onValueChange(val: string) {
    const opt = this.activeOpts.find(o => o.value === val);
    this.selectOpt(opt);
  }

  private selected: string;

  private optRoot = this.el.querySelector('slot');

  private activeOpts: HTMLUniRadioOptionElement[] = [];

  connectedCallback() {
    // Initialise the opts
    this.getOpts().forEach((opt, index) => {
      // eslint-disable-next-line no-param-reassign
      if (!opt.value) opt.value = index.toString();
      this.initOpt(opt);
    });

    if (this.value) this.onValueChange(this.value);

    // this.optRoot.addEventListener('keydown', this.onKeydown);
  }

  disconnectedCallback() {
    this.activeOpts.forEach(opt => this.uninitOpt(opt));
    // this.optRoot.removeEventListener('keydown', this.onKeydown);
  }

  render() {
    return (
      <slot onSlotchange={() => this.onSlotchange()} />
    );
  }

  private onOptSelect = (evt: Event) => {
    const opt = evt.target as HTMLUniRadioOptionElement;
    this.selectOpt(opt);
  };

  private onSlotchange() {
    const opts = this.getOpts();
    // Uninit removed nodes
    this.activeOpts.forEach((opt) => {
      if (!opts.includes(opt)) this.uninitOpt(opt);
    });
    // Init new nodes
    opts.forEach((opt) => {
      if (!this.activeOpts.includes(opt)) this.initOpt(opt);
    });
  }

  // private onKeydown = (e: KeyboardEvent) => {
  //   const opts = this.getOpts();
  //   const activeOpt = opts.findIndex(opt => opt.value === this.selected);
  //   let newOpt: HTMLUniRadioOptionElement;
  //   if (e.key === 'ArrowRight') {
  //     if (activeOpt > -1) {
  //       if (activeOpt < opts.length - 1) newOpt = opts[(activeOpt + 1)];
  //     } else {
  //       newOpt = opts[0];
  //     }
  //   } else if (e.key === 'ArrowLeft') {
  //     if (activeOpt > 0) {
  //       newOpt = opts[(activeOpt - 1)];
  //     } else if (activeOpt === -1) {
  //       newOpt = opts[opts.length - 1];
  //     }
  //   }
  //
  //   if (newOpt) {
  //     newOpt.focus();
  //     this.selectOpt(newOpt);
  //   }
  // };

  private selectOpt(opt?: HTMLUniRadioOptionElement) {
    if (this.selected === opt?.value) return; // If it's already selected, do nothing

    this.activeOpts.forEach(o => o.selected = false); // Unselect everything else
    if (!opt) return;

    this.selected = opt.value;

    // eslint-disable-next-line no-param-reassign
    opt.selected = true;
    this.uniChange.emit(opt.value);
  }

  private getOpts(): HTMLUniRadioOptionElement[] {
    return Array.from(this.optRoot.assignedElements()) as HTMLUniRadioOptionElement[];
  }

  private initOpt(opt: HTMLUniRadioOptionElement) {
    opt.addEventListener('uniSelect', this.onOptSelect);
    this.activeOpts.push(opt);
  }

  private uninitOpt(opt: HTMLUniRadioOptionElement) {
    opt.removeEventListener('uniSelect', this.onOptSelect);
    this.activeOpts.splice(this.activeOpts.indexOf(opt), 1);
  }
}
