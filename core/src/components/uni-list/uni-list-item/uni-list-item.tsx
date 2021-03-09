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

  render() {
    const TagName = this.href ? 'a' : 'button';

    return (
      <Host>
        <li class="item">
          <TagName
            href={this.href}
            disabled={this.disabled}
            aria-disabled={this.disabled}
            class="item-button"
          >
            <slot />
          </TagName>
        </li>
      </Host>
    );
  }
}
