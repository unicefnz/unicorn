import {
  Component, Host, h, Prop
} from '@stencil/core';

@Component({
  tag: 'uni-list-item',
  styleUrl: 'uni-list-item.scss',
  shadow: true
})
export class UniListItem {
  /**
   * A url to pass to the underlying <a> tag
   * Optional, will not use an anchor tag unless this is set
   * */
  @Prop() public href?: string;

  /**
   * Disable this item (only works with button type)
   * */
  @Prop() public disabled?: boolean;

  /**
   * Use an underling <button> element for actions
   * Note: href will take precedence, remove href to use a button
   * */
  @Prop() public button: boolean = false;

  render() {
    let TagName = 'div';
    if (this.href) TagName = 'a';
    else if (this.button) TagName = 'button';

    return (
      <Host
        class={{
          'uni-button': TagName === 'button',
          'uni-link': TagName === 'a',
          'uni-clickable': !this.disabled && (TagName === 'button' || TagName === 'a'),
          'uni-disabled': !!this.disabled
        }}
      >
        <li class="item">
          <TagName
            href={this.href}
            disabled={this.disabled}
            aria-disabled={this.disabled}
            class="item-inner"
          >
            <slot />
          </TagName>
        </li>
      </Host>
    );
  }
}
