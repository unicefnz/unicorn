import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

const onClick = action('onClick');

export default {
  title: 'Button'
};

export const Default = () => {
  const button = document.createElement('uni-button');
  button.innerHTML = text('Text', 'Button Text!');
  button.onclick = onClick;

  return button;
};

// export const Default = () => (
//   <uni-button onclick={onClick}>
//     {text('Text!', 'Hello')}
//   </uni-button>
// );
