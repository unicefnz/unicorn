import { newSpecPage } from '@stencil/core/testing';
import { UniDialog } from '../uni-dialog';

describe('uni-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniDialog],
      html: '<uni-dialog></uni-dialog>'
    });
    expect(page.root).toEqualHtml(`
      <uni-dialog aria-modal="true" id="uni-overlay-1" tabindex="-1" uni-overlay="" role="dialog" style="z-index: 2001;">
        <mock:shadow-root>
          <uni-backdrop tappable=""></uni-backdrop>
          <div class="flex-wrapper">
            <uni-dialog-content>
              <slot />
            </uni-dialog-content>
          </div>
        </mock:shadow-root>
      </uni-dialog>
    `);
  });
});
