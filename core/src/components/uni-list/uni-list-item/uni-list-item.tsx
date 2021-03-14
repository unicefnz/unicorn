import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-list-item',
  styleUrl: 'uni-list-item.scss',
  shadow: true
})
export class UniListItem {
  @Prop()
  public href?: string;

  @Prop()
  public disabled?: boolean;

  @Prop()
  public button: boolean = false;

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
