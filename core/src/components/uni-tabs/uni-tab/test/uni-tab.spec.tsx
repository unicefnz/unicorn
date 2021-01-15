import { newSpecPage } from '@stencil/core/testing';
import { UniTab } from '../uni-tab';

describe('uni-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTab],
      html: '<uni-tab></uni-tab>'
    });
    expect(page.root).toEqualHtml(`
      <uni-tab class="display-overline" uni-radio-option="">
        <mock:shadow-root>
          <button class="radio-elem" tabindex="-1" type="button" value="uni-tab-item-0">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </uni-tab>
    `);
  });
});
