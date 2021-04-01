import { newSpecPage } from '@stencil/core/testing';
import { UniDialogTitle } from '../uni-dialog-title';

describe('uni-dialog-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDialogTitle],
      html: '<uni-dialog-title></uni-dialog-title>'
    });
    expect(page.root).toEqualHtml(`
      <uni-dialog-title>
        <mock:shadow-root>
          <h1 class="dialog-title">
            <uni-underline>
              <slot></slot>
            </uni-underline>
          </h1>
        </mock:shadow-root>
      </uni-dialog-title>
    `);
  });
});
