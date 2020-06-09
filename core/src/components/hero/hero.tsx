import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'uni-hero',
  styleUrl: 'hero.scss',
  shadow: true
})
export class Hero {
  /**
   * URL of an image to use for the background
  * */
  @Prop() public backgroundUrl?: string;

  /**
   * How to align the text
   * */
  @Prop() public align?: 'left' | 'start' | 'center' | 'right' | 'end'; // TODO Make a type for this

  render() {
    return (
      <Host
        style={{
          backgroundImage: this.backgroundUrl && `url("${this.backgroundUrl}")`,
          justifyContent: this.align
        }}
      >
        <div class="hero-content" style={{ textAlign: this.align }}>
          <slot />
        </div>
      </Host>
    );
  }
}