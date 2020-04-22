import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Button'
};

export const Default = () => `
<uni-button>Default</uni-button>
<uni-button color="${text('Danger Color', 'danger')}">Danger!</uni-button>
<uni-button button-style="border">Border</uni-button>
<uni-button button-style="border" color="dark"">Dark Border</uni-button>
`;

export const Interactivity = () => {
  const button = document.createElement('uni-button');
  button.innerHTML = text('Text', 'Button Text!');
  button.onclick = action('onclick');

  return button;
};
