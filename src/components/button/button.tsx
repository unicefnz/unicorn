import {
  Component, Host, h, Prop
} from '@stencil/core';

export type ButtonStyle = 'solid' | 'border';

@Component({
  tag: 'uni-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  /**
   * Defines the main color of the button
   * Eg. blue or blue-dark
   * */
  @Prop() readonly color: string | null = null;

  /**
   * Defines the text color (hover text color on a border button)
   * Eg. grey or grey-dark
   * */
  @Prop() readonly textColor: string | null = null;

  /**
   * Sets the style of the button
   * One of 'solid' or 'border'
   * */
  @Prop() readonly buttonStyle: ButtonStyle = 'solid';

  /**
   * Type of the underlying button
   * See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
   * One of 'button', 'submit', or 'reset'
   * */
  @Prop() readonly type: string = 'button';

  render() {
    const color = this.color && `var(--uni-color-${this.color})`;
    const textColor = this.textColor && `var(--uni-color-${this.textColor})`;
    return (
      <Host style={{ '--color': color, '--text-color': textColor }} class={'style-' + this.buttonStyle}>
        {/* eslint-disable-next-line react/button-has-type */}
        <button class="button" type={this.type}>
          <slot />
        </button>
      </Host>
    );
  }
}
