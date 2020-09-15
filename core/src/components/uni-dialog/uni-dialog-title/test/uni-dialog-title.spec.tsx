import { newSpecPage } from '@stencil/core/testing';
import { UniDialogTitle } from '../uni-dialog-title';

describe('uni-dialog-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDialogTitle],
      html: '<uni-dialog-title>Hello!</uni-dialog-title>'
    });
    expect(page.root).toEqualHtml(`
      <uni-dialog-title>
        <h1 class="dialog-title">
          <uni-underline>Hello!</uni-underline>
        </h1>
      </uni-dialog-title>
    `);
  });
});
