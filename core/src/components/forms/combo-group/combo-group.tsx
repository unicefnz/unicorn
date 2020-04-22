import {
  Component, Host, h, Prop,
  EventEmitter, Event, Watch, State
} from '@stencil/core';

export interface ComboOption {
  id: string;
  title: string;
}

@Component({
  tag: 'uni-combo-group',
  styleUrl: 'combo-group.scss',
  shadow: true
})
export class ComboGroup {
  /**
   * Available options in the combo group
  * */
  @Prop() readonly options: ComboOption[] = [];

  /**
   * ID of the selected option
  * */
  @Prop() readonly value: string;

  /**
   * Emitted when the selected option changes
   * */
  @Event() readonly change: EventEmitter;

  @Watch('value')
  public onValueChange() {
    this.internalSelected = this.value;
  }

  @State() private internalSelected: string;

  public connectedCallback() {
    this.onValueChange();
  }

  private optClick(opt: ComboOption) {
    if (this.internalSelected === opt.id) return;
    this.internalSelected = opt.id;
    this.change.emit(opt.id);
  }

  render() {
    return (
      <Host>
        {this.options.map(opt => (
          <button
            class={{
              selected: opt.id === this.internalSelected,
              'combo-item': true
            }}
            onClick={() => this.optClick(opt)}
            type="button"
          >
            {opt.title}
          </button>
        ))}
      </Host>
    );
  }
}
