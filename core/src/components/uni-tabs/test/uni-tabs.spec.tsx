import { newSpecPage } from '@stencil/core/testing';
import { UniTabs } from '../uni-tabs';

describe('uni-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTabs],
      html: '<uni-tabs></uni-tabs>'
    });
    expect(page.root).toEqualHtml(`
      <uni-tabs uni-radio-controller="">
        <mock:shadow-root>
          <ul class="tab-list" role="tablist">
            <slot name="tabs"></slot>
          </ul>
          <slot></slot>
        </mock:shadow-root>
      </uni-tabs>
    `);
  });
});
