import { newSpecPage } from '@stencil/core/testing';
import { UniProgressLinear } from '../uni-progress-linear';

describe('uni-progress-linear', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniProgressLinear],
      html: `<uni-progress-linear></uni-progress-linear>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-progress-linear class="uni-loading-active">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-progress-linear>
    `);
  });
});
