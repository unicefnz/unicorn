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
   * Changes the button into a loading state
   * */
  @Prop() readonly loading: boolean;

  /**
   * Disables the button, preventing input
   * */
  @Prop() readonly disabled: boolean;

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
  @Prop() readonly buttonType: string = 'button';

  /**
   * Make this button a link to `href` instead
   * */
  @Prop() readonly href?: string;

  render() {
    const isDisabled = this.disabled || this.loading;
    const contents = [
      this.prependIcon && <ion-icon name={this.prependIcon} class="prepend-icon" />,
      (<div class="button-content"><slot /></div>)
    ];

    return (
      <Host class={{
        ['uni-style-' + this.buttonStyle]: true,
        [`uni-color-${this.color}`]: true,
        'uni-loading': this.loading,
        'uni-disabled': isDisabled
      }}
      >
        {this.href ? (
          <a class="button" href={this.href} onClick={e => isDisabled && e.preventDefault()}>
            {contents}
          </a>
        ) : (
          // eslint-disable-next-line react/button-has-type
          <button class="button" type={this.buttonType} disabled={isDisabled}>
            {contents}
          </button>
        )}
      </Host>
    );
  }
}
