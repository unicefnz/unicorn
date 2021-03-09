import {
  Component, Host, h, State, Prop, Watch
} from '@stencil/core';

@Component({
  tag: 'uni-menu',
  styleUrl: 'uni-menu.scss',
  shadow: true
})
export class UniMenu {
  /**
   * Programmatically set the menu as open
   * */
  @Prop({ reflect: true }) open: boolean = false;

  @State() isOpen: boolean = false;

  @Watch('open')
  onOpenPropChange(newVal: boolean) {
    this.isOpen = newVal;
  }

  private onTriggerClick(): void {
    this.isOpen = true; // We could make this toggle, however this behaviour isn't really needed
  }

  private slotRef: HTMLSlotElement | null = null;

  private onContentBlur(e: FocusEvent): void {
    // console.log(e.currentTarget, 'Blur from', e.target, 'to', e.relatedTarget);
    // TODO will this be needed once keyboard nav is implemented
    if (
      // if the focus has gone off the page...
      !e.relatedTarget
      // ...or if the focussed element can't be found as a child...
      || !this.slotRef?.assignedElements({ flatten: true }).some(child => child.contains(e.relatedTarget as Node))
    ) {
      // ...then hide the menu
      this.isOpen = false;
    }
  }

  render() {
    return (
      <Host>
        <div
          class="trigger"
          onClick={() => this.onTriggerClick()}
        >
          <slot name="trigger" />
        </div>
        <div
          class={'menu' + (this.isOpen ? ' menu-open' : '')}
          onFocusout={e => this.onContentBlur(e)}
        >
          {/* <slot /> types don't have the slot prop, so hack the types to work around it */}
          <slot {...{ ref: (el: HTMLSlotElement) => { this.slotRef = el; } } as any} />
        </div>
      </Host>
    );
  }
}
