import { newSpecPage } from '@stencil/core/testing';
import { UniTabPanel } from '../uni-tab-panel';

describe('uni-tab-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTabPanel],
      html: `<uni-tab-panel></uni-tab-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-tab-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-tab-panel>
    `);
  });
});
