export default {
  title: 'Combo Group'
};

export const WithTextField = () => `
<uni-combo-group variant="button">
  <uni-combo-item value="val1">Option one</uni-combo-item>
  <uni-combo-item value="val2">Option two</uni-combo-item>
  <uni-combo-item value="val3">Option three</uni-combo-item>
  <uni-combo-item value="val4">Option four</uni-combo-item>
  <uni-combo-text value="other" select-on="uniInput">
    <uni-text-field placeholder="Other">
      <span slot="prepend">$</slot>
    </uni-text-field>
  </uni-combo-text>
</uni-combo-group>
<style>
uni-combo-group {
  max-width: 550px;
}
uni-combo-item {
  flex: 1;
  min-width: 120px;
}
uni-combo-text {
  flex: 2;
}
</style>
`;
