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
   * Eg. accent, primary
   * */
  @Prop() readonly color: string | null = 'accent';

  /**
   * Sets the style of the button
   * One of 'solid' or 'border'
   * */
  @Prop() readonly buttonStyle: ButtonStyle = 'solid';

  /**
   * Name of a icon to prepend inside the button
   * Eg. logo-google
   * */
  @Prop() readonly prependIcon?: string;

  /**
   * Type of the underlying button
   * See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
   * One of 'button', 'submit', or 'reset'
   * */
  @Prop() readonly type: string = 'button';

  render() {
    return (
      <Host class={{
        ['style-' + this.buttonStyle]: true,
        [`uni-color-${this.color}`]: true
      }}
      >
        {/* eslint-disable-next-line react/button-has-type */}
        <button class="button" type={this.type}>
          {this.prependIcon && <ion-icon name={this.prependIcon} class="prepend-icon" />}
          <div><slot /></div>
        </button>
      </Host>
    );
  }
}
