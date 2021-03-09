import { newSpecPage } from '@stencil/core/testing';
import { UniListItem } from '../uni-list-item';

describe('uni-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniListItem],
      html: `<uni-list-item></uni-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-list-item>
    `);
  });
});
