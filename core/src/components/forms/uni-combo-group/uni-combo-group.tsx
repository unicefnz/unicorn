import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-combo-group',
  styleUrl: 'uni-combo-group.scss',
  shadow: true,
})
export class UniComboGroup {
  /**
   * Value of the selected option
   * */
  @Prop() readonly value: string;

  /**
   * Display a different style radio group, either a "combo" row or "button" group
   * */
  @Prop() readonly variant: 'combo' | 'button' = 'combo';

  render() {
    return (
      <Host>
        <fieldset class={'radio-fieldset uni-variant-' + this.variant}>
          <uni-radio-controller value={this.value} part="layout">
            <slot />
          </uni-radio-controller>
        </fieldset>
      </Host>
    );
  }
}
