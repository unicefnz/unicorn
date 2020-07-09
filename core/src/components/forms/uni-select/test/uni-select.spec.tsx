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
          <slot></slot>
        </mock:shadow-root>
      </uni-select>
    `);
  });
});
