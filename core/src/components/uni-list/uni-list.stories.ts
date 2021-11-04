export default {
  title: 'List'
};

export const Default = () => `
<uni-list>
  <uni-list-item>Item One</uni-list-item>
  <uni-list-item>Item Two</uni-list-item>
  <uni-list-item>Item Three</uni-list-item>
  <uni-list-item>Item Four</uni-list-item>
</uni-list>
`;

export const Buttons = () => `
<uni-list>
  <uni-list-item button>Item One</uni-list-item>
  <uni-list-item button>Item Two</uni-list-item>
  <uni-list-item button>Item Three</uni-list-item>
  <uni-list-item button>Item Four</uni-list-item>
</uni-list>
`;

export const Links = () => `
<uni-list>
  <uni-list-item href="#">Item One</uni-list-item>
  <uni-list-item href="#">Item Two</uni-list-item>
  <uni-list-item href="#">Item Three</uni-list-item>
  <uni-list-item href="#">Item Four</uni-list-item>
</uni-list>
`;
