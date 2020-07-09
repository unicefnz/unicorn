import { newSpecPage } from '@stencil/core/testing';
import { UniDialogContent } from '../uni-dialog-content';

describe('uni-dialog-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDialogContent],
      html: `<uni-dialog-content></uni-dialog-content>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-dialog-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-dialog-content>
    `);
  });
});
