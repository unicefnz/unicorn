import { text } from '@storybook/addon-knobs';

export default {
  title: 'Text Field'
};

export const Default = () => `
<uni-text-field></uni-text-field>
<uni-text-field placeholder="Placeholder" label="Label"></uni-text-field>
<uni-text-field optional label="Label here"></uni-text-field>
<uni-text-field value="With value" label="Label here"></uni-text-field>
`;

export const PrependIcon = () => `
<uni-text-field label="Label Text" prepend-icon="${text('Icon Name', 'warning')}" placeholder="Placeholder"></uni-text-field>
<uni-text-field label="Label Text" prepend-text="${text('Prepend Text', '$')}" placeholder="Enter amount"></uni-text-field>
`;

export const Errors = () => `
<uni-text-field label="Email" value="example@example.invalid+" errors="${text('Errors', 'Invalid Email')}"></uni-text-field>
`;
