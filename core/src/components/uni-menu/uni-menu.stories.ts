export default {
  title: 'Menu'
};

export const Default = () => `
<uni-menu>
  <uni-button slot="trigger" onClick="void 1;">Trigger</uni-button>
  <uni-list>
    <uni-list-item button>Option one</uni-list-item>
    <uni-list-item button>Option two</uni-list-item>
    <uni-list-item button>Option three</uni-list-item>
  </uni-list>
</uni-menu>
`;
