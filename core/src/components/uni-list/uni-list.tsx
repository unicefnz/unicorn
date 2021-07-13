import {
  Component, Host, h, Prop, Listen, Element, Method
} from '@stencil/core';

const childSelector = 'uni-list-item';

@Component({
  tag: 'uni-list',
  styleUrl: 'uni-list.scss',
  shadow: true
})
export class UniList {
  @Element() el!: HTMLUniListElement;

  /**
   * If true, uses an <ol> element instead
   * */
  @Prop() public ordered: boolean = false;

  @Listen('keydown', { target: 'document' })
  onKeydown(ev: any) {
    if (ev.target && !this.el?.contains(ev.target)) {
      return;
    }

    // Get all radios inside of the radio group and then
    // filter out disabled radios since we need to skip those
    const items = this.getListItems().filter(item => !item.disabled);

    // Only move the radio if the current focus is in the radio group
    if (ev.target && items.includes(ev.target)) {
      const index = items.findIndex(radio => radio === ev.target);

      let next;

      // If hitting arrow down or arrow right, move to the next radio
      if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
        // If we're on the last radio, move to the first radio
        next = (index === items.length - 1)
          ? items[0]
          : items[index + 1];
      }

      // If hitting arrow up or arrow left, move to the previous radio
      if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
        // If we're on the first radio, move to the last radio
        next = (index === 0)
          ? items[items.length - 1]
          : items[index - 1];
      }

      if (ev.code === 'Escape') {
        ev.target?.blur();
      }

      if (next && items.includes(next)) {
        if (typeof next.setFocus === 'function') next.setFocus(ev);
        else next.focus();
      }
    }
  }

  /** @internal */
  @Method()
  public async setFocus(ev: any) {
    this.getListItems()[0]?.setFocus?.(ev);
  }

  private getListItems() {
    return Array.from(this.el.querySelectorAll(childSelector));
  }

  render() {
    const List = this.ordered ? 'ol' : 'ul';

    return (
      <Host>
        <List>
          <slot />
        </List>
      </Host>
    );
  }
}
