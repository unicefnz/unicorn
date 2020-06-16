import { newSpecPage } from '@stencil/core/testing';
import { UniRadioOption } from '../uni-radio-option';

describe('uni-radio-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniRadioOption],
      html: `<uni-radio-option></uni-radio-option>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-radio-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-radio-option>
    `);
  });
});
