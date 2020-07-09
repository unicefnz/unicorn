import { newSpecPage } from '@stencil/core/testing';
import { UniCheckbox } from '../uni-checkbox';

describe('uni-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniCheckbox],
      html: `<uni-checkbox></uni-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-checkbox>
    `);
  });
});
