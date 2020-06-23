import { text } from '@storybook/addon-knobs';

export default {
  title: 'Text Field'
};

export const Default = () => `
<uni-text-field></uni-text-field>
<uni-text-field optional label="Label here"></uni-text-field>
<uni-text-field optional></uni-text-field>
<uni-text-field placeholder="Placeholder" label="Label"></uni-text-field>
<uni-text-field value="With value" label="Label here"></uni-text-field>
<uni-text-field value="Read only text field" readonly></uni-text-field>
<uni-text-field value="Disabled text field" disabled></uni-text-field>
`;

export const PrependIcon = () => `
<uni-text-field label="Label Text" placeholder="Placeholder">
    <ion-icon slot="prepend" name="${text('Icon Name', 'warning')}"></p>
</uni-text-field>
<uni-text-field placeholder="Enter amount">
    <p slot="prepend">${text('Prepend Text', '$')}</p>
</uni-text-field>
<uni-text-field label="Label Text" placeholder="Enter amount" disabled>
    <p slot="prepend">${text('Prepend Text', '$')}</p>
</uni-text-field>
`;

export const Errors = () => `
<uni-text-field label="Email" value="example@example.invalid+" errors="${text('Errors', 'Invalid Email')}"></uni-text-field>
<uni-text-field errors="Uh oh"></uni-text-field>
`;
