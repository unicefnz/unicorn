import {Component, Host, h, Prop} from '@stencil/core';

export type ButtonStyle = 'solid' | 'border';

@Component({
  tag: 'uni-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop()
  readonly color: string | null = null;

  @Prop()
  readonly textColor: string | null = null;

  @Prop()
  readonly buttonStyle: ButtonStyle = 'solid';

  render() {
    const color = this.color && `var(--uni-color-` + this.color + ')';
    const textColor = this.textColor && 'var(--uni-color-' + this.textColor + ')';
    return (
      <Host style={{ '--color': color, '--text-color': textColor }} class={"style-" + this.buttonStyle}>
        <button class="button">
          <slot />
        </button>
      </Host>
    );
  }
}
