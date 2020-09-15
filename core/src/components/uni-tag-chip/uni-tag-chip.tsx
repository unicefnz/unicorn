import {
  Component, Host, h, Prop
} from '@stencil/core';

@Component({
  tag: 'uni-tag-chip',
  styleUrl: 'uni-tag-chip.scss',
  shadow: true
})
export class UniTagChip {
  /**
   * Override the default color
   * */
  @Prop() color: string;

  render() {
    return (
      <Host class={{ ['uni-color-' + this.color]: !!this.color }}>
        <slot />
      </Host>
    );
  }
}
