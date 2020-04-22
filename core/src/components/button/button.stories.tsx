import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Button'
};

export const Default = () => `
<uni-button>Default</uni-button>
<uni-button color="${text('Color', 'danger')}">Alt Color</uni-button>
`;

export const Border = () => `
<uni-button button-style="border">Border</uni-button>
<uni-button button-style="border" color="${text('Color', 'dark')}">Alt Color</uni-button>
`;

export const Icon = () => `
<uni-button prepend-icon="${text('Icon', 'logo-google')}">Login with Google</uni-button>
<br>
<uni-button button-style="border" prepend-icon="logo-facebook">Login with Facebook</uni-button>
`;

export const Interactivity = () => {
  const button = document.createElement('uni-button');
  button.innerHTML = text('Text', 'Button Text!');
  button.onclick = action('onclick');

  return button;
};
