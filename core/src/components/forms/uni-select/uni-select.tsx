import {
  Component, Host, h, Prop
} from '@stencil/core';

@Component({
  tag: 'uni-select',
  styleUrl: 'uni-select.scss',
  shadow: true
})
export class UniSelect {
  /**
   * Displays error(s) below the input
   * */
  @Prop() public error: string | string[] = '';

  /**
   * Label to display above the select box
   * */
  @Prop() public label?: string;

  render() {
    const isErrored = !!this.error?.length;

    const select = (
      <div class="select-box">
        <slot />
        <div class="select-icons">
          {isErrored && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="error-icon">
              <path
                d="M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z"
                style={{
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px'
                }}
              />
              <circle
                cx="256"
                cy="416"
                r="16"
                style={{
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeWidth: '32px'
                }}
              />
            </svg>
          )}
          <div class="drop-icon" />
        </div>
      </div>
    );
    return (
      <Host class={{ 'uni-select--errored': isErrored }}>
        {this.label ? (
          // Associated input is rendered in a slot
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>
            <div class="select-label">{this.label}</div>
            {select}
          </label>
        ) : select}
      </Host>
    );
  }
}
