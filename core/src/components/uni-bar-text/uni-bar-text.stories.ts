import { text } from '@storybook/addon-knobs';

export default {
  title: 'Typography/Bar Text'
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
    <uni-bar-text>qy This is to check that the text wraps correctly</uni-bar-text>
  </h1>
  <p class="display-h3">
    <uni-bar-text>Bar text in h1</uni-bar-text>
  </p>
  <p class="display-h3">
    <uni-bar-text>qy This is to check that the text wraps correctly</uni-bar-text>
  </p>
  <p>
    <uni-bar-text>This should look ok</uni-bar-text>
  </p>
  <p>
    <uni-bar-text>
      qy Mollitia esse optio tenetur. Minus vel non qui voluptatum ut. Voluptatum ut a quae et. Quis eveniet accusantium qui dolores. Sed corrupti optio aspernatur possimus.
      Sint error praesentium et et sapiente. Error ut ipsam sint perspiciatis beatae. Aut cum necessitatibus deserunt.
    </uni-bar-text>
  </p>
</div>
`;
