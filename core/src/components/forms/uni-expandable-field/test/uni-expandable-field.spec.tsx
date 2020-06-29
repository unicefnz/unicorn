import { newSpecPage } from '@stencil/core/testing';
import { UniExpandableField } from '../uni-expandable-field';

describe('uni-expandable-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniExpandableField],
      html: `<uni-expandable-field></uni-expandable-field>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-expandable-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-expandable-field>
    `);
  });
});
