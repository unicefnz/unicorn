import {
  Component, Host, h, Prop, EventEmitter, Event, Method, ComponentInterface
} from '@stencil/core';

let nextUniqueId = 0;

@Component({
  tag: 'uni-text-field',
  styleUrl: 'uni-text-field.scss',
  shadow: true
})
export class UniTextField implements ComponentInterface {
  /**
   * Hint to the user agent how this field should be autocompleted
   * */
  @Prop() public autocomplete: string;

  /**
   * Makes the field disabled and unselectable
   * */
  @Prop() public disabled: boolean;

  /**
   * Displays errors below the input, or puts field into error state
   * */
  @Prop() public error: string | string[] | boolean = '';

  /**
   * Label text above the field
   * */
  @Prop() public label: string;

  /**
   * Alternatively, use a slot inside the label to render custom contents.
   * */
  @Prop() public labelSlot = false;

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
   * Name of the native input element
   * */
  @Prop() public name: string;

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
   * Type for the underlying input element or "textarea" to switch out the element
   * */
  @Prop() public type: string;

  /**
   * Emitted when the native input is blurred / focus is lost
   * */
  @Event({ bubbles: false }) public uniBlur: EventEmitter<FocusEvent>;

  /**
   * Emitted when form field value is committed
   * */
  @Event({ bubbles: false }) public uniChange: EventEmitter<string>;

  /**
   * Emitted when the native input is focused
   * */
  @Event({ bubbles: false }) public uniFocus: EventEmitter<FocusEvent>;

  /**
   * Emitted when the form field value changes
   * */
  @Event({ bubbles: false }) public uniInput: EventEmitter<string>;

  /**
   * Set the value of the field
   * */
  @Prop() public value: string;

  private uniqueId = 'uni-input-' + nextUniqueId++;

  private inputElem: HTMLInputElement | HTMLTextAreaElement;

  // The next 3 properties are a hack to make sure that getInputElement waits until the first render has occurred
  private markReady: () => void;

  private ready = new Promise((r) => { this.markReady = r; });

  componentDidLoad() {
    this.markReady();
  }

  /**
   * Get the underlying input DOM node
   * */
  @Method()
  public async getInputElement(): Promise<HTMLInputElement | HTMLTextAreaElement> {
    await this.ready;
    return this.inputElem;
  }

  render() {
    const optional = this.optional && (<span class="optional-label">(optional)</span>);
    const Elem = this.type === 'textarea' ? 'textarea' : 'input';

    return (
      <Host class={{ 'input--has-errors': !!this.error, 'uni-disabled': this.disabled }}>
        {this.labelSlot ? (
          // I think the rule isn't picking up the htmlFor attr? Idk
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label htmlFor={this.uniqueId} class="caption">
            <slot name="label" />
          </label>
        ) : (this.label && (
          <label htmlFor={this.uniqueId} class="caption">{this.label} {optional}</label>
        ))}
        <div class="input-field">
          <div class="prepend-wrapper">
            <slot name="prepend" />
          </div>
          <Elem
            autocomplete={this.autocomplete}
            class="input-elem"
            disabled={this.disabled}
            id={this.uniqueId}
            max={this.max}
            maxlength={this.maxlength}
            min={this.min}
            minlength={this.minlength}
            name={this.name}
            onBlur={e => this.uniBlur.emit(e)}
            onChange={e => this.uniChange.emit((e.target as any).value)}
            onFocus={e => this.uniFocus.emit(e)}
            onInput={e => this.uniInput.emit((e.target as any).value)}
            placeholder={this.placeholder}
            readOnly={this.readonly}
            ref={(el) => { this.inputElem = el; }}
            required={this.required}
            type={Elem === 'input' && this.type}
            value={this.value}
          />
          {this.error ? (
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
          ) : null}
        </div>
        {this.error && this.error !== true && <uni-errors error={this.error} />}
      </Host>
    );
  }
}
