import { newSpecPage } from '@stencil/core/testing';
import { UniList } from '../uni-list';

describe('uni-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniList],
      html: `<uni-list></uni-list>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-list>
    `);
  });
});
