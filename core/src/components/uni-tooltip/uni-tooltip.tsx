import {
  Component, Host, h, Prop, Element, ComponentInterface, Watch, State
} from '@stencil/core';

@Component({
  tag: 'uni-tooltip',
  styleUrl: 'uni-tooltip.scss',
  shadow: true
})
export class UniTooltip implements ComponentInterface {
  @Element() el: HTMLUniTooltipElement;

  /**
   * Whether to display an arrow pointing from the tooltip bubble
   * */
  @Prop() arrow = true;

  /**
   * Delay before hiding the tooltip after mouseleave/blur
   * */
  @Prop() hideDelay = 300;

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
    // TODO on first render, onValueChange will cause state to change but does not trigger a rerender
    if (this.shown) this.computeOffsets();
    if (this.value && !this.shown) this.onValueChange(this.value); // Risky, but allows us to delay computing sizes until after first render

    return (
      <Host
        class={{
          ['uni-tooltip--position-' + this.position]: true,
          'uni-tooltip--open': this.shown,
          'uni-tooltip--has-arrow': this.arrow
        }}
      >
        <slot />
        <div
          class="tooltip-content"
          style={{
            left: this.offsets.left ? this.offsets.left + 'px' : undefined,
            top: this.offsets.top ? this.offsets.top + 'px' : undefined
          }}
        >
          {this.text || <slot name="content" />}
        </div>
      </Host>
    );
  }

  @State() shown = false;

  private hideTimeout: NodeJS.Timeout;

  private focused = false;

  private offsets = { left: 0, top: 0 };

  private show() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    if (this.shown) return;
    this.shown = true;
  }

  private hide() {
    if (!this.shown) return;
    if (this.hideTimeout) return; // Already hiding, edge case
    this.hideTimeout = setTimeout(() => {
      this.hideTimeout = null;
      this.shown = false;
    }, this.hideDelay);
  }

  private onMouseEnter = () => {
    if (this.focused) return;
    this.show();
    this.el.addEventListener('mouseleave', this.onMouseLeave);
  };

  private onMouseLeave = () => {
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

  /**
   * This function is responsible for centering the tooltip relative to the trigger,
   * as well as ensuring it doesn't render offscreen
   * */
  private computeOffsets() {
    const contentEl = this.el.shadowRoot.querySelector('.tooltip-content') as HTMLDivElement;

    contentEl.style.visibility = 'hidden';
    contentEl.style.display = 'block';

    const contentBox = contentEl.getBoundingClientRect();

    contentEl.style.visibility = null;
    contentEl.style.display = null;

    const triggerBox = this.el.getBoundingClientRect();

    if (this.position === 'top' || this.position === 'bottom') {
      const docWidth = document.body.clientWidth;
      const triggerLeft = window.scrollX + triggerBox.left;
      const triggerCenter = triggerLeft + triggerBox.width / 2;

      const contentLeft = window.scrollX + contentBox.left;
      const contentCenter = contentLeft + contentBox.width / 2;

      let offset = triggerCenter - contentCenter; // top: offset px;
      if (contentBox.right + offset > docWidth) offset = docWidth - contentBox.right; // If it's too far right, move to right edge
      if (contentLeft + offset < 0) offset = -contentLeft; // If it's too far left, move to left edge

      this.offsets = {
        top: 0,
        left: this.offsets.left + offset // Because the measurements are based on the current position, we must add it
      };
    } else {
      // const docMax = document.body.clientHeight;
      const triggerTop = window.scrollY + triggerBox.top;
      const triggerCenter = triggerTop + triggerBox.height / 2;

      const contentTop = window.scrollY + contentBox.top;
      const contentCenter = contentTop + contentBox.height / 2;

      let offset = triggerCenter - contentCenter; // top: offset px;
      if (contentTop + offset < 0) offset = -contentTop; // Set it to the top
      // if (contentBox.bottom + offset > docMax) offset = docMax - contentBox.bottom; // Lower it as much as possible

      this.offsets = {
        top: this.offsets.top + offset, // Because the measurements are based on the current position, we must add it
        left: 0
      };
    }
  }
}
