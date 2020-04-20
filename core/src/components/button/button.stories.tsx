import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import h from '../../h';

const onClick = action('onClick');

export default {
  title: 'Button'
};

export const Default = () => (
  <uni-button onclick={onClick}>
    {text('Text!', 'Hello')}
  </uni-button>
);
