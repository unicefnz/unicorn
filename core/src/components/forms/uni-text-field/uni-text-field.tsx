import {
  Component, Host, h, Prop, EventEmitter, Event
} from '@stencil/core';

let nextUniqueId = 0;

@Component({
  tag: 'uni-text-field',
  styleUrl: 'uni-text-field.scss',
  shadow: true
})
export class UniTextField {
  /**
   * Makes the field disabled and unselectable
   * */
  @Prop() public disabled: boolean;

  /**
   * Displays errors below the input
   * */
  @Prop() public errors: string | string[] = '';

  /**
   * Label text above the field
   * */
  @Prop() public label: string;

  /**
   * Maximum value when the input is in number mode
   * */
  @Prop() public max: number;

  /**
   * Maximum string length
   * */
  @Prop() public maxlength: number;

  /**
   * Minimum value when the input is in number mode
   * */
  @Prop() public min: number;

  /**
   * Minimum string length
   * */
  @Prop() public minlength: number;

  /**
   * Displays a visual (optional) marker
   * */
  @Prop() public optional = false;

  /**
   * Placeholder displayed inside the field
   * */
  @Prop() public placeholder: string;

  /**
   * Prevents editing the field, but allows selecting text
   * */
  @Prop() public readonly: boolean;

  /**
   * Marks the input as required
   * */
  @Prop() public required: boolean;

  /**
   * Type for the underlying <input> or "textarea" to switch out the element
   * */
  @Prop() public type: string;

  /**
   * Emitted when form field value is committed
   * */
  @Event() public uniChange: EventEmitter<string>;

  /**
   * Emitted when the form field value changes
   * */
  @Event() public uniInput: EventEmitter<string>;

  /**
   * Set the value of the field
   * */
  @Prop() public value: string;

  private uniqueId = 'uni-input-' + nextUniqueId++;

  render() {
    const optional = this.optional && (<span class="optional-label">(optional)</span>);
    const Elem = this.type === 'textarea' ? 'textarea' : 'input';

    return (
      <Host class={{ 'input--has-errors': !!this.errors, 'uni-disabled': this.disabled }}>
        {this.label && <label htmlFor={this.uniqueId} class="caption">{this.label} {optional}</label>}
        <div class="input-field">
          <div class="prepend-wrapper">
            <slot name="prepend" />
          </div>
          <Elem
            class="input-elem"
            id={this.uniqueId}
            type={Elem === 'input' && this.type}
            disabled={this.disabled}
            max={this.max}
            maxlength={this.maxlength}
            min={this.min}
            minlength={this.minlength}
            placeholder={this.placeholder}
            readOnly={this.readonly}
            required={this.required}
            value={this.value}
            onChange={e => this.uniChange.emit((e.target as any).value)}
            onInput={e => this.uniInput.emit((e.target as any).value)}
          />
        </div>
        {this.errors?.length && <uni-errors errors={this.errors} />}
      </Host>
    );
  }
}
