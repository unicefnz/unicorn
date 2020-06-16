import { action } from '@storybook/addon-actions';

export default {
  title: 'Radio'
};

export const Default = () => `
<p>Default</p>
<uni-radio-group>
  <uni-radio-option value="monthly">Monthly</uni-radio-option>
  <uni-radio-option value="once">Once</uni-radio-option>
</uni-radio-group>

<p>No values</p>
<uni-radio-group>
  <uni-radio-option>Monthly</uni-radio-option>
  <uni-radio-option>Once</uni-radio-option>
</uni-radio-group>
`;

export const WithSelected = () => `
<p>Default</p>
<uni-radio-group value="monthly">
  <uni-radio-option value="monthly">Monthly</uni-radio-option>
  <uni-radio-option value="once">Once</uni-radio-option>
</uni-radio-group>

<p>No values</p>
<uni-radio-group value="0">
  <uni-radio-option>Monthly</uni-radio-option>
  <uni-radio-option>Once</uni-radio-option>
</uni-radio-group>
`;

export const Event = () => {
  const group = document.createElement('uni-radio-group');

  function addOption() {
    const vals = Array.from(group.children).map((opt: HTMLUniRadioOptionElement) => +opt.value);
    const id = (Math.max(0, ...vals) || 0) + 1;
    const newOpt = document.createElement('uni-radio-option');
    newOpt.value = '' + id;
    newOpt.innerText = 'Option ' + id;
    group.append(newOpt);
    return false; // Don't rerender
  }

  function removeOpt() {
    const opts = Array.from(group.children);
    const opt = opts[Math.floor(Math.random() * opts.length)];
    group.removeChild(opt);
    return false; // Don't rerender
  }

  addOption();
  addOption();

  const onChange = action('change');
  group.addEventListener('uniChange', (e: CustomEvent) => onChange(e.detail));

  const addButton = document.createElement('button');
  addButton.addEventListener('click', addOption);
  addButton.innerText = 'Add Button';

  const removeButton = document.createElement('button');
  removeButton.addEventListener('click', removeOpt);
  removeButton.innerText = 'Remove Button';

  const container = document.createElement('div');
  container.append(group, addButton, removeButton);
  return container;
};
