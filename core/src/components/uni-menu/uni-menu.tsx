import {
  Component, Host, h, State, Prop, Watch, Element, readTask
} from '@stencil/core';

@Component({
  tag: 'uni-menu',
  styleUrl: 'uni-menu.scss',
  shadow: true
})
export class UniMenu {
  @Element() el!: HTMLUniMenuElement;

  /**
   * Programmatically set the menu as open
   * */
  @Prop({ reflect: true }) open: boolean = false;

  @State() isOpen: boolean = false;

  @Watch('open')
  setOpen(newVal: boolean) {
    if (newVal) this.openMenu();
    else this.closeMenu();
  }

  private openMenu() {
    this.isOpen = true;
    this.getMenuItems().some((el: any) => {
      if (typeof el.setFocus === 'function') {
        // setTimeout(() => el.setFocus(), 0);
        // eslint-disable-next-line no-new
        readTask(() => el.setFocus());
        return true;
      }
      return false;
    });
  }

  private closeMenu() {
    this.isOpen = false;
  }

  private slotRef: HTMLSlotElement | null = null;

  private getMenuItems(): Element[] {
    return this.slotRef?.assignedElements({ flatten: true }) || [];
  }

  private onContentBlur(e: FocusEvent): void {
    // TODO will this be needed once keyboard nav is implemented
    if (
      // if the focus has gone off the page...
      !e.relatedTarget
      // ...or if the focussed element can't be found as a child...
      || !this.getMenuItems().some(child => child.contains(e.relatedTarget as Node))
    ) {
      // ...then hide the menu
      this.closeMenu();
    }
  }

  render() {
    return (
      <Host>
        {/* This element is designed to work with a button within the slot, which will provide these a11y features */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          class="trigger"
          onClick={() => this.openMenu()}
        >
          <slot name="trigger" />
        </div>
        <uni-outside-click onUniOutsideClick={() => this.closeMenu()}>
          <div
            class={'menu' + (this.isOpen ? ' menu-open' : '')}
            onFocusout={e => this.onContentBlur(e)}
          >
            {/* <slot /> types don't have the slot prop, so hack the types to work around it */}
            <slot {...{ ref: (el: HTMLSlotElement) => { this.slotRef = el; } } as any} />
          </div>
        </uni-outside-click>
      </Host>
    );
  }
}
