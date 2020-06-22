import { action } from '@storybook/addon-actions';
import { HTMLUniRadioItemElement } from '../uni-radio-controller/radio-item-interface';

export default {
  title: 'Combo Group'
};

export const ComboVariant = () => `
<p>Default</p>
<uni-combo-group>
  <uni-combo-item value="monthly">Monthly</uni-combo-item>
  <uni-combo-item value="once">Once</uni-combo-item>
</uni-combo-group>

<p>Without item values</p>
<uni-combo-group>
  <uni-combo-item>Monthly</uni-combo-item>
  <uni-combo-item disabled>Once</uni-combo-item>
</uni-combo-group>

<p>With default</p>
<uni-combo-group value="monthly">
  <uni-combo-item value="monthly">Monthly</uni-combo-item>
  <uni-combo-item value="once">Once</uni-combo-item>
</uni-combo-group>

<p>Default without values</p>
<uni-combo-group value="0">
  <uni-combo-item>Monthly</uni-combo-item>
  <uni-combo-item>Once</uni-combo-item>
</uni-combo-group>
`;

export const ButtonVariant = () => `
<p>Default</p>
<uni-combo-group variant="button">
  <uni-combo-item value="one">Option one</uni-combo-item>
  <uni-combo-item value="two">Option two</uni-combo-item>
  <uni-combo-item value="three">Option one</uni-combo-item>
</uni-combo-group>

<p>Without item values</p>
<uni-combo-group variant="button">
  <uni-combo-item>Option one</uni-combo-item>
  <uni-combo-item>Option two</uni-combo-item>
  <uni-combo-item>Option one</uni-combo-item>
</uni-combo-group>

<p>With default</p>
<uni-combo-group variant="button" value="one">
  <uni-combo-item value="one">Option one</uni-combo-item>
  <uni-combo-item value="two">Option two</uni-combo-item>
  <uni-combo-item value="three" disabled>Option one</uni-combo-item>
</uni-combo-group>

<p>With default, without values</p>
<uni-combo-group variant="button" value="1">
  <uni-combo-item>Option one</uni-combo-item>
  <uni-combo-item>Option two</uni-combo-item>
  <uni-combo-item>Option one</uni-combo-item>
</uni-combo-group>
`;

export const Event = () => {
  const group = document.createElement('uni-combo-group');

  function addOption() {
    const vals = Array.from(group.children).map((opt: HTMLUniRadioItemElement) => +opt.value);
    const id = (Math.max(0, ...vals) || 0) + 1;
    const newOpt = document.createElement('uni-combo-item');
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
