import { newSpecPage } from '@stencil/core/testing';
import { UniBackdrop } from '../uni-backdrop';

describe('uni-backdrop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniBackdrop],
      html: '<uni-backdrop></uni-backdrop>',
    });
    expect(page.root).toEqualHtml(`
      <uni-backdrop tabindex="-1">
        <mock:shadow-root></mock:shadow-root>
      </uni-backdrop>
    `);
  });
});
