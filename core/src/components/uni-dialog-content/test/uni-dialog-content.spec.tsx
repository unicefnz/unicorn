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
          <h2 class="dialog-title">
            <uni-underline>
              <slot name="title"></slot>
            </uni-underline>
          </h2>
          <slot></slot>
          <div class="dialog-actions">
            <slot name="actions"></slot>
          </div>
        </mock:shadow-root>
      </uni-dialog-content>
    `);
  });
});
