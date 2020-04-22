import { text } from '@storybook/addon-knobs';

export default {
  title: 'Bar Text'
};

export const Default = () => `
<div style="text-align: ${text('Text Align', 'left')}; max-width: 500px; margin: auto;">
  <span>
    <uni-bar-text>Plain bar text</uni-bar-text>
  </span>
  <h1>
    <uni-bar-text>Bar text in h1</uni-bar-text>
  </h1>
  <h1>
    <uni-bar-text>This is to check that the text wraps correctly</uni-bar-text>
  </h1>
</div>
`;
