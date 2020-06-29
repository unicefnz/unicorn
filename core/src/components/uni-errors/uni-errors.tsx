import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'uni-errors',
  styleUrl: 'uni-errors.scss',
  shadow: true,
})
export class UniErrors {
  /**
   * Display a single error
   * Will be overridden by errors[]
  * */
  @Prop() error?: string;

  /**
   * Displays a list of errors.
   * Will override error
   * */
  @Prop() errors?: string | string[];

  render() {
    const errorList = (Array.isArray(this.errors) ? this.errors : [this.errors]).filter(e => e);

    if (!this.error && !errorList.length) return null;

    return (
      <Host>
        {/* ionicons alert */}
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
        {errorList.length ? (
          <ul>
            {errorList.map(e => <li>{e}</li>)}
          </ul>
        ) : (
          <p>{this.error}</p>
        )}
      </Host>
    );
  }

}
