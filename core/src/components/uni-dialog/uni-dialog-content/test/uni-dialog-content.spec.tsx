import { newSpecPage } from '@stencil/core/testing';
import { UniDialogContent } from '../uni-dialog-content';

describe('uni-dialog-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDialogContent],
      html: '<uni-dialog-content>Hello!</uni-dialog-content>',
    });
    expect(page.root).toEqualHtml(`
      <uni-dialog-content>Hello!</uni-dialog-content>
    `);
  });
});
