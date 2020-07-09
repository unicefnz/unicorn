import { newSpecPage } from '@stencil/core/testing';
import { UniTagChip } from '../uni-tag-chip';

describe('uni-tag-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTagChip],
      html: `<uni-tag-chip></uni-tag-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-tag-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-tag-chip>
    `);
  });
});
