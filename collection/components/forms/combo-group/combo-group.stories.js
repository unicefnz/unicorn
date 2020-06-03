import { action } from '@storybook/addon-actions';
export default {
    title: 'Combo Group'
};
const OPTIONS = [
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
    const group = document.createElement('uni-combo-group');
    group.options = OPTIONS;
    group.value = 'monthly';
    group.addEventListener('uniChange', action('change'));
    return group;
};
