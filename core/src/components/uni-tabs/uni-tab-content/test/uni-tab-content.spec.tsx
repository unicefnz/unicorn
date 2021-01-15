import { newSpecPage } from '@stencil/core/testing';
import { UniTabContent } from '../uni-tab-content';

describe('uni-tab-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTabContent],
      html: '<uni-tab-content></uni-tab-content>'
    });
    expect(page.root).toEqualHtml(`
      <uni-tab-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-tab-content>
    `);
  });
});
