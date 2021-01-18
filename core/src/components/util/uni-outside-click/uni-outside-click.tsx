import {
  Component, ComponentInterface, Element, Event, EventEmitter, h, Prop
} from '@stencil/core';

@Component({
  tag: 'uni-outside-click',
  shadow: true
})
export class UniOutsideClick implements ComponentInterface {
  @Element() el!: HTMLUniOutsideClickElement;

  /**
   * Specify a root to listen on, anything "outside" this will trigger. Useful for escaping shadowDOM
   * */
  @Prop() root?: HTMLElement;

  /**
   * Emitted when the document is clicked outside this tree
   * */
  @Event({ bubbles: false }) public uniOutsideClick!: EventEmitter<MouseEvent>;

  private get rootOrEl() {
    return this.root || this.el;
  }

  connectedCallback() {
    document.addEventListener('mousedown', this.onMouseDown, { capture: true });
  }

  disconnectedCallback() {
    document.removeEventListener('mousedown', this.onMouseDown, { capture: true });

    // Yeah this might not be registered, but it should be fineeeee
    document.removeEventListener('mouseup', this.onMouseUp, { capture: true });
  }

  render() {
    return (
      <slot />
    );
  }

  private onMouseDown = (e: any) => {
    if (!this.rootOrEl.contains(e.target)) {
      document.addEventListener('mouseup', this.onMouseUp, { capture: true });
    }
  };

  private onMouseUp = (e: any) => {
    if (!this.rootOrEl.contains(e.target)) {
      this.uniOutsideClick.emit(e);
    }
  };
}
