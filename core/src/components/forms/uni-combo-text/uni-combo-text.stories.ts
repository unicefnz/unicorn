export default {
  title: 'Forms/Combo Text'
};

export const ButtonsWithText = () => `
<p>Text on single line options</p>
<uni-combo-group variant="button">
  <uni-combo-item value="val1">Option one</uni-combo-item>
  <uni-combo-text value="other" select-on="uniInput">
    <uni-text-field placeholder="Other">
      <span slot="prepend">$</slot>
    </uni-text-field>
  </uni-combo-text>
</uni-combo-group>

<p>Text on own line</p>
<uni-combo-group variant="button">
  <uni-combo-item value="val1">Option one</uni-combo-item>
  <uni-combo-item value="val2">Option two</uni-combo-item>
  <uni-combo-text value="other" select-on="uniInput">
    <uni-text-field placeholder="Other">
      <span slot="prepend">$</slot>
    </uni-text-field>
  </uni-combo-text>
</uni-combo-group>

<p>Lots of options</p>
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
  margin: 1rem 0;
  max-width: 550px;
}
uni-combo-item {
  flex: 1;
  min-width: 140px;
}
uni-combo-text {
  flex: 2 0 2rem;
}
</style>
`;

export const ComboWithText = () => `
<p>Text on single line options</p>
<uni-combo-group>
  <uni-combo-item value="val1">Option one</uni-combo-item>
  <uni-combo-text value="other" select-on="uniInput">
    <uni-text-field placeholder="Other">
      <span slot="prepend">$</slot>
    </uni-text-field>
  </uni-combo-text>
</uni-combo-group>

<p>Text on own line</p>
<uni-combo-group>
  <uni-combo-item value="val1">Option one</uni-combo-item>
  <uni-combo-item value="val2">Option two</uni-combo-item>
  <uni-combo-text value="other" select-on="uniInput">
    <uni-text-field placeholder="Other">
      <span slot="prepend">$</slot>
    </uni-text-field>
  </uni-combo-text>
</uni-combo-group>

<p>Lots of options</p>
<uni-combo-group>
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
  margin: 1rem 0;
  max-width: 550px;
}
uni-combo-item {
  flex: 1;
  min-width: 140px;
}

uni-combo-text {
  flex: 2;
}
</style>
`;
