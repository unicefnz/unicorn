import {
  Component, Host, h, Prop, EventEmitter, Event
} from '@stencil/core';

let nextUniqueId = 0;

@Component({
  tag: 'uni-text-field',
  styleUrl: 'text-field.scss',
  shadow: true
})
export class TextField {
  /**
   * Label text above the field
  * */
  @Prop() public label: string;

  /**
   * Placeholder displayed inside the field
   * */
  @Prop() public placeholder: string;

  /**
   * Makes the field disabled and unselectable
   * */
  @Prop() public disabled: boolean;

  /**
   * Prevents editing the field, but allows selecting text
   * */
  @Prop() public readonly: boolean;

  /**
   * Marks the field as optional
   * */
  @Prop() public optional = false;

  /**
   * Displays errors below the input
   * */
  @Prop() public errors: string | string[] = '';

  /**
   * Set the value of the field
   * */
  @Prop() public value: string;

  /**
   * Emitted when form field value is committed
  * */
  @Event() public uniChange: EventEmitter<string>;

  /**
   * Emitted when the form field value changes
  * */
  @Event() public uniInput: EventEmitter<string>;

  private uniqueId = 'uni-input-' + nextUniqueId++;

  private get errorList(): string[] {
    const errors = Array.isArray(this.errors) ? this.errors : [this.errors];
    return errors.filter(e => e);
  }

  render() {
    const optional = this.optional && (<span class="optional-label">(optional)</span>);
    const errors = this.renderErrors();

    return (
      <Host class={{ 'input--has-errors': !!this.errorList.length }}>
        {this.label && <label htmlFor={this.uniqueId} class="caption">{this.label} {optional}</label>}
        <div class="input-field">
          <div class="prepend-wrapper">
            <slot name="prepend" />
          </div>
          <input
            class="input-elem"
            id={this.uniqueId}
            disabled={this.disabled}
            readOnly={this.readonly}
            placeholder={this.placeholder}
            required={!this.optional}
            value={this.value}
            onChange={e => this.uniChange.emit((e.target as any).value)}
            onInput={e => this.uniInput.emit((e.target as any).value)}
          />
        </div>
        {errors}
      </Host>
    );
  }

  private renderErrors() {
    const errors = this.errorList;
    if (!errors.length) return null;

    return (
      <div class="input-errors">
        {/* ionicons alert */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="error-icon">
          <path
            d="M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z"
            style={{
              fill: 'none',
              stroke: 'inherit',
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
              stroke: 'inherit',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '32px'
            }}
          />
        </svg>
        <ul>
          {errors.map(e => <li>{e}</li>)}
        </ul>
      </div>
    );
  }
}
