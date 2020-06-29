import { newSpecPage } from '@stencil/core/testing';
import { UniErrors } from '../uni-errors';

describe('uni-errors', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniErrors],
      html: `<uni-errors></uni-errors>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-errors>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-errors>
    `);
  });
});
