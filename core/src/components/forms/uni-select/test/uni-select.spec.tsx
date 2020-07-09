import { newSpecPage } from '@stencil/core/testing';
import { UniSelect } from '../uni-select';

describe('uni-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniSelect],
      html: `<uni-select></uni-select>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-select>
        <mock:shadow-root>
          <div class="select-box">
            <slot></slot>
            <div class="select-icon"></div>
          </div>
        </mock:shadow-root>
      </uni-select>
    `);
  });
});
