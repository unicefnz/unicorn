import { text } from '@storybook/addon-knobs';

export default {
  title: 'Forms/Text Field'
};

export const Default = () => `
<uni-text-field></uni-text-field>
<uni-text-field optional label="Label here"></uni-text-field>
<uni-text-field optional></uni-text-field>
<uni-text-field placeholder="Placeholder" label="Label"></uni-text-field>
<uni-text-field value="With value" label="Label here"></uni-text-field>
<uni-text-field value="Read only text field" readonly></uni-text-field>
<uni-text-field label="Disabled text field" value="Disabled text field" disabled></uni-text-field>
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

export const Errors = () => {
  const inputOne = document.createElement('uni-text-field');
  inputOne.value = 'example@example.invalid';
  inputOne.error = text('Errors', 'Invalid Email');

  const inputTwo = document.createElement('uni-text-field');
  inputTwo.error = 'Another error';

  const inputThree = document.createElement('uni-text-field');
  inputThree.error = ['Error one', 'Error two'];

  const wrapper = document.createElement('div');
  wrapper.append(inputOne, inputTwo, inputThree);

  return wrapper;
};

export const OtherTypes = () => `
<uni-text-field type="number"></uni-text-field>
<uni-text-field type="number" min="0" value="1"></uni-text-field>
<uni-text-field type="number" placeholder="Pick number"></uni-text-field>
<uni-text-field type="textarea" label="Textarea"></uni-text-field>
<uni-text-field type="textarea" label="Textarea" value="Test value"></uni-text-field>
<uni-text-field type="textarea" label="Textarea" placeholder="Test placeholder"></uni-text-field>
`;
