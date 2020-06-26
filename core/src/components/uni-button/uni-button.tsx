import { Component, Host, h, Prop } from '@stencil/core';

export type ButtonVariant = 'solid' | 'border';

@Component({
  tag: 'uni-button',
  styleUrl: 'uni-button.scss',
  shadow: true,
})
export class UniButton {
  /**
   * Type of the underlying button
   * See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
   * One of 'button', 'submit', or 'reset'
   * */
  @Prop() readonly buttonType: string = 'button';

  /**
   * Defines the main color of the button
   * Eg. accent, primary
   * */
  @Prop() readonly color: string | null = 'accent';

  /**
   * Disables the button, preventing input
   * */
  @Prop() readonly disabled: boolean;

  /**
   * Make this button a link to `href` instead
   * */
  @Prop() readonly href?: string;

  /**
   * Display as an icon button
   * */
  @Prop() readonly icon?: boolean;

  /**
   * Changes the button into a loading state
   * */
  @Prop() readonly loading: boolean;

  /**
   * Name of a icon to prepend inside the button
   * Eg. logo-google
   * */
  @Prop() readonly prependIcon?: string;

  /**
   * Sets the variant of the button
   * One of 'solid' or 'border'
   * */
  @Prop() readonly variant: ButtonVariant = 'solid';

  render() {
    const isDisabled = this.disabled || this.loading;
    const contents = [
      <slot name="prepend-icon" />,
      <slot />
    ];

    return (
      <Host class={{
        ['uni-variant-' + this.variant]: true,
        [`uni-color-${this.color}`]: true,
        'uni-loading': this.loading,
        'uni-disabled': isDisabled,
        'uni-button-icon': this.icon
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
