import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icon'
})
export class Icon {
  /** Icon name */
  @Prop() name: string;

  render() {
    return (
      <i class="material-icons">{this.name}</i>
    );
  }
}
