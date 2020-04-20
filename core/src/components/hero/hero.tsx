import { Component, h, Prop } from '@stencil/core';

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
      <div
        class="hero-wrapper"
        style={{
          backgroundImage: `url("${this.backgroundUrl}")`,
          align: this.align
        }}
      >
        <div class="hero-content">
          <slot />
        </div>
      </div>
    );
  }
}
