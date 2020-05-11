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
   * Optionally prepend some text inside the field, eg a $ prefix
   * */
  @Prop() public prependText: string;

  /**
   * Optionally prepend an icon to the inside of the field, eg a search icon
   * */
  @Prop() public prependIcon: string;

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
    const prependIcon = this.prependIcon && (<ion-icon name={this.prependIcon} />);
    const prepend = (this.prependText || this.prependIcon) && (
      <span class="input-prepend">{prependIcon}{this.prependText}</span>
    );
    const errors = this.renderErrors();

    return (
      <Host class={{ 'input--has-errors': !!this.errorList.length }}>
        {this.label && <label htmlFor={this.uniqueId} class="caption">{this.label} {optional}</label>}
        <div class="input-field">
          {prepend}
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
        <ion-icon name="warning" />
        <ul>
          {errors.map(e => <li>{e}</li>)}
        </ul>
      </div>
    );
  }
}
