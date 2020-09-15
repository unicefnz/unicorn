import {
  Component, Host, h, Prop, State, Element
} from '@stencil/core';

@Component({
  tag: 'uni-expandable-field',
  styleUrl: 'uni-expandable-field.scss',
  shadow: true
})
export class UniExpandableField {
  @Element() el: HTMLUniExpandableFieldElement;

  /**
   * Makes the field disabled and unselectable
   * */
  @Prop() public disabled: boolean;

  /**
   * Display text inside the trigger
   * */
  @Prop() public displayText: string;

  /**
   * Displays error(s) below the input
   * */
  @Prop() public error: string | string[] = '';

  /**
   * Label text above the field
   * */
  @Prop() public label: string;

  /**
   * Displays a visual (optional) marker
   * */
  @Prop() public optional = false;

  @State() expanded: boolean = false;

  render() {
    const optional = this.optional && (<span class="optional-label">(optional)</span>);
    const isErrored = !!this.error?.length;

    return (
      <Host class={{ 'uni-expanded': this.expanded, 'uni-errors': isErrored }}>
        {this.label && <p class="label">{this.label} {optional}</p>}
        <div class="expansion-wrapper" aria-expanded={this.expanded}>
          <button
            class="expansion-trigger"
            type="button"
            disabled={this.disabled}
            onClick={() => this.open()}
            onFocus={() => this.close()}
          >
            {this.displayText}
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
          </button>
          {this.expanded && (
            <div class="expansion-content">
              <slot />
            </div>
          )}
        </div>
        {isErrored && <uni-errors error={this.error} />}

        {/* We can just chuck this anywhere */}
        <uni-outside-click onUniOutsideClick={() => this.expanded && this.close()} root={this.el} />
      </Host>
    );
  }

  private open() {
    this.expanded = true;
  }

  private close() {
    this.expanded = false;
  }
}
