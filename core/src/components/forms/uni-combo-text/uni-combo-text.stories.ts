export default {
  title: 'Combo Group'
};

export const WithTextField = () => `
<uni-combo-group variant="button">
  <uni-combo-item value="val1">Option one</uni-combo-item>
  <uni-combo-item value="val2">Option two</uni-combo-item>
  <uni-combo-item value="val3">Option three</uni-combo-item>
  <uni-combo-text value="other">
    <uni-text-field placeholder="Other"></uni-text-field>
  </uni-combo-text>
</uni-combo-group>
<style>
uni-combo-group {
  max-width: 400px;
}
uni-combo-item {
  min-width: 120px;
}
</style>
`;
