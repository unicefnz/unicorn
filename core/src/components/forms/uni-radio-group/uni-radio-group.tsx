import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'uni-radio-group',
  styleUrl: 'uni-radio-group.scss',
  shadow: true,
})
export class UniRadioGroup {
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
        <uni-radio-controller value={this.value}>
          <fieldset class={'uni-variant-' + this.variant}>
            <slot />
          </fieldset>
        </uni-radio-controller>
      </Host>
    );
  }
}
