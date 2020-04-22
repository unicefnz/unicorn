import { action } from '@storybook/addon-actions';
import { ComboOption } from './combo-group';

export default {
  title: 'Combo Group'
};

const OPTIONS: ComboOption[] = [
  {
    id: 'monthly',
    title: 'Monthly'
  },
  {
    id: 'once',
    title: 'Once'
  }
];

export const Default = () => {
  const group = document.createElement('uni-combo-group') as HTMLUniComboGroupElement;
  group.options = OPTIONS;
  group.value = 'monthly';

  group.addEventListener('uniChange', action('change'));

  return group;
};
