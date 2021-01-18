import { newSpecPage } from '@stencil/core/testing';
import { UniTab } from '../uni-tab';

describe('uni-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTab],
      html: '<uni-tab></uni-tab>'
    });
    expect(page.root).toEqualHtml(`
      <uni-tab aria-controls="uni-tab-0" aria-disabled="false" aria-selected="false" class="display-overline" id="uni-tab-0" role="tab" uni-radio-option="">
        <mock:shadow-root>
          <li>
            <button class="radio-elem" tabindex="-1" type="button">
              <slot></slot>
            </button>
          </li>
        </mock:shadow-root>
      </uni-tab>
    `);
  });
});
