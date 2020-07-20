import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'uni-errors',
  styleUrl: 'uni-errors.scss',
  shadow: true,
})
export class UniErrors {
  /**
   * Display one or more errors
  * */
  @Prop() error?: string | string[];

  render() {
    const errorList = (Array.isArray(this.error) ? this.error : [this.error]).filter(e => e);

    if (!this.error && !errorList.length) return null;

    return (
      <Host>
        {errorList.length > 1 ? (
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
