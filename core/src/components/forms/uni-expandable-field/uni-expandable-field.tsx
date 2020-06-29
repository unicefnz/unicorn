import { Component, Host, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'uni-expandable-field',
  styleUrl: 'uni-expandable-field.scss',
  shadow: true,
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
   * Displays errors below the input
   * */
  @Prop() public errors: string | string[] = '';

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

    return (
      <Host class={{ 'uni-expanded': this.expanded, 'uni-errors': !!this.errors.length }}>
        {this.label && <p class="caption">{this.label} {optional}</p>}
        <div class="expansion-wrapper" aria-expanded={this.expanded}>
          <button
            class="expansion-trigger"
            type="button"
            disabled={this.disabled}
            onClick={() => this.open()}
            onFocus={() => this.close()}
          >
            {this.displayText}
          </button>
          {this.expanded && (
            <div class="expansion-content">
              <slot />
            </div>
          )}
        </div>
        {this.errors && this.errors.length && <uni-errors errors={this.errors} />}

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
