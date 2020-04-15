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
  @Prop() readonly color: string | null = 'yellow';

  /**
   * Overrides the text color (hover text color on a border button)
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
    // const color = getColor(this.color);
    // const textColor = this.textColor ? getColor(this.textColor) : getTextColor(this.color);
    return (
      <Host class={{
        ['style-' + this.buttonStyle]: true,
        [`uni-color-${this.color}`]: true
      }}
      >
        {/*<Host class={'style-' + this.buttonStyle}>*/}
        {/* eslint-disable-next-line react/button-has-type */}
        <button class="button" type={this.type}>
          <slot />
        </button>
      </Host>
    );
  }
}
