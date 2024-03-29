export default {
  title: 'Forms/Expandable Field'
};

export const Default = () => `
  <uni-expandable-field>
    <p>Hello!</p>
  </uni-expandable-field>

  <uni-expandable-field label="Label" display-text="Display text" disabled>
    <p>Hello!</p>
  </uni-expandable-field>
  <uni-expandable-field label="Label" display-text="Display text" error="Errors!">
    <p>Hello!</p>
  </uni-expandable-field>
`;
