import { Component, Host, h, Prop, Element, ComponentInterface, Watch, State } from '@stencil/core';

@Component({
  tag: 'uni-tooltip',
  styleUrl: 'uni-tooltip.scss',
  shadow: true,
})
export class UniTooltip implements ComponentInterface {
  @Element() el: HTMLUniTooltipElement;

  /**
   * Delay before hiding the tooltip after mouseleave/blur
   * */
  @Prop() hideDelay = 400;

  /**
   * Which side to position the tooltip on
   * */
  @Prop() position?: 'top' | 'bottom' | 'left' | 'right' = 'right';

  /**
   * Text content to display inside the tooltip. Overrides the `content` slot
   * */
  @Prop() text?: string;

  /**
   * Control whether the tooltip shows on hover
   * */
  @Prop() useHover = true;

  /**
   * Control whether the tooltip shows on focus
   * */
  @Prop() useFocus = true;

  /**
   * Programmatically show the tooltip
   * */
  @Prop() value?: boolean;

  connectedCallback() {
    this.useHoverChange(this.useHover);
    this.useFocusChange(this.useFocus);
  }
  // In theory, we don't need a disconnectedCallback to remove listeners, because the element has just been destroyed

  @Watch('value')
  onValueChange(newVal) {
    if (newVal && !this.shown) {
      this.show();
    } else if (this.shown) {
      this.hide();
    }
  }

  @Watch('useHover')
  useHoverChange(newVal) {
    if (newVal) {
      this.el.addEventListener('mouseenter', this.onMouseEnter);
    } else {
      this.el.removeEventListener('mouseenter', this.onMouseEnter);
    }
  }

  @Watch('useFocus')
  useFocusChange(newVal) {
    if (newVal) {
      this.el.addEventListener('focusin', this.onFocus);
    } else {
      this.el.removeEventListener('focusin', this.onFocus);
    }
  }

  render() {
    return (
      <Host
        class={{
          ['uni-tooltip-position-' + this.position]: true,
          'uni-shown': this.shown,
        }}
      >
        <slot />
        {this.shown && (
          <div class="tooltip-content">
            {this.text || <slot name="content" />}
          </div>
        )}
      </Host>
    );
  }

  @State() shown = false;

  private hideTimeout: NodeJS.Timeout;

  private focused = false;


  private show() {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    if (this.shown) return;
    console.log('Showing!');
    this.shown = true;
  }

  private hide() {
    if (!this.shown) return;
    this.hideTimeout = setTimeout(() => {
      console.log('Hiding!');
      this.shown = false;
    }, this.hideDelay);
  }

  private onMouseEnter = () => {
    console.log('Mouse enter');
    if (this.focused) return;
    this.show();
    this.el.addEventListener('mouseleave', this.onMouseLeave);
  };

  private onMouseLeave = () => {
    console.log('Mouse leave');
    this.hide();
    this.el.removeEventListener('mouseleave', this.onMouseLeave);
  };

  private onFocus = () => {
    this.show();
    this.focused = true;
    this.el.addEventListener('focusout', this.onBlur);
  };

  private onBlur = () => {
    this.hide();
    this.focused = false;
    this.el.removeEventListener('focusout', this.onBlur);
  };
}
