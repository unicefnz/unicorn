import {
  ComponentInterface, Element, Event,
  EventEmitter, Method, Prop, Watch
} from '@stencil/core';
import type { HTMLStencilElement } from '@stencil/core/internal';
import type { HTMLUniRadioControllerElement } from './radio-controller';

export interface RadioItemComponentInterface extends ComponentInterface {
  selected: boolean;
  disabled?: boolean;
  value: string | number;
  setFocus(ev: Event): Promise<void>;
}

export interface HTMLRadioItemElement extends HTMLStencilElement {
  selected: boolean;
  disabled?: boolean;
  value: string | number;
  setFocus(ev: Event): Promise<void>;
}

let itemId = 0;

/*
  Stencil doesn't support @Components extending classes.
  Instead, copy and paste this code into classes that require it.
  Elegant, I know
*/
export abstract class RadioItem implements RadioItemComponentInterface {
  /* Begin abstract class RadioItem */
  private uniqueId = `uni-PLEASE_CHANGE-${itemId++}`;

  private parentGroup: HTMLUniRadioControllerElement | null = null;

  @Element() el!: HTMLRadioItemElement;

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
    // If no value is set, use the uniqueId
    if (this.value === undefined) this.value = this.uniqueId;

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

  abstract render(): any;
}
