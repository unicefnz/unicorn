export default {
  title: 'Dialog'
};

export const Default = () => `
<uni-dialog open>
  <span slot="title"><uni-underline>Hello!</uni-underline></span>
  <p>Are you sure?</p>
  <div slot="actions">
    <uni-button>Confirm</uni-button>
  </div>
</uni-dialog>
`;
