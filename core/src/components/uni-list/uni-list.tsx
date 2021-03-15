import {
  Component, Host, h, Prop
} from '@stencil/core';

@Component({
  tag: 'uni-list',
  styleUrl: 'uni-list.scss',
  shadow: true
})
export class UniList {
  /**
   * If true, uses an <ol> element instead
   * */
  @Prop() public ordered: boolean = false;

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
