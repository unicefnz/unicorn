import {
  Component, Element, Host, h, Prop
} from '@stencil/core';

export type ButtonVariant = 'solid' | 'border';

@Component({
  tag: 'uni-button',
  styleUrl: 'uni-button.scss',
  shadow: true
})
export class UniButton {
  @Element() el: HTMLUniButtonElement;

  /**
   * Type of the underlying button
   * See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
   * One of 'button', 'submit', or 'reset'
   * */
  @Prop() readonly type: string = 'button';

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

  private handleClick(e: MouseEvent) {
    // Only use special shadowDOM escaping logic if we are using native shadowDOM
    if (this.type !== 'button' && this.el.shadowRoot && this.el.attachShadow) {
      // this button wants to specifically submit a form
      // climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      const form = this.el.closest('form');
      if (form) {
        e.preventDefault();

        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }

  render() {
    const isDisabled = this.disabled || this.loading;
    const contents = [
      <slot name="prepend-icon" />,
      <slot />
    ];

    return (
      <Host
        class={{
          ['uni-variant-' + this.variant]: true,
          [`uni-color-${this.color}`]: true,
          'uni-loading': this.loading,
          'uni-disabled': isDisabled,
          'uni-button-icon': this.icon
        }}
        onClick={e => this.handleClick(e)}
      >
        {this.href ? (
          <a class="button" href={this.href} onClick={e => isDisabled && e.preventDefault()}>
            {contents}
          </a>
        ) : (
          // eslint-disable-next-line react/button-has-type
          <button class="button" type={this.type} disabled={isDisabled}>
            {contents}
          </button>
        )}
      </Host>
    );
  }
}
