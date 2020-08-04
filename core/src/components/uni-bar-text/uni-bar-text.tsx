import { Component, h } from '@stencil/core';

@Component({
  tag: 'uni-bar-text',
  styleUrl: 'uni-bar-text.scss',
  shadow: true,
})
export class UniBarText {
  render() {
    return <slot />;
  }
}
