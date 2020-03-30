import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'uni-hero',
  styleUrl: 'hero.scss',
  shadow: true
})
export class Hero {
  @Prop()
  public backgroundUrl?: string;

  render() {
    return (
      <Host>
        <div class="hero-wrapper" style={{ backgroundImage: `url("${this.backgroundUrl}")` }}>
          <div class="hero-content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
