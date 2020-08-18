import { newSpecPage } from '@stencil/core/testing';
import { UniDialogActions } from '../uni-dialog-actions';

describe('uni-dialog-actions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDialogActions],
      html: `
        <uni-dialog-actions>
          <button>Button!</button>
        </uni-dialog-actions>
      `
    });
    expect(page.root).toEqualHtml(`
      <uni-dialog-actions>
        <button>Button!</button>
      </uni-dialog-actions>
    `);
  });
});
