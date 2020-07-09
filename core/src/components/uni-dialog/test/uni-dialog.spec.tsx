import { newSpecPage } from '@stencil/core/testing';
import { UniDialog } from '../uni-dialog';

describe('uni-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDialog],
      html: `<uni-dialog></uni-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-dialog aria-modal="true" id="ion-overlay-1" role="dialog" style="z-index: 2001;">
        <mock:shadow-root>
          <uni-backdrop></uni-backdrop>
          <div class="dialog-pane">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </uni-dialog>
    `);
  });
});
