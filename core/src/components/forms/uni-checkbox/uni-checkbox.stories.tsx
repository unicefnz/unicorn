export default {
  title: 'Forms/Checkbox'
};

export const Default = () => `
<uni-checkbox>Checkbox</uni-checkbox>
<uni-checkbox indeterminate>Checkbox</uni-checkbox>
<uni-checkbox disabled>Checkbox</uni-checkbox>

<uni-checkbox checked>Checkedbox</uni-checkbox>
<uni-checkbox checked indeterminate>Checkedbox</uni-checkbox>
<uni-checkbox checked disabled>Checkedbox</uni-checkbox>

<uni-checkbox style="max-width: 200px">Looooooooong text that should definitely wrap eventually</uni-checkbox>
`;
