import { newSpecPage } from '@stencil/core/testing';
import { UniTextField } from '../uni-text-field';

describe('uni-text-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTextField],
      html: `<uni-text-field></uni-text-field>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-text-field>
        <mock:shadow-root>
          <div class="input-field">
              <div class="prepend-wrapper">
                  <slot name="prepend"></slot>
              </div>
              <input class="input-elem" id="uni-input-0">
          </div>
        </mock:shadow-root>
      </uni-text-field>
    `);
  });
});
