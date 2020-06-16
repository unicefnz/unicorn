import { newSpecPage } from '@stencil/core/testing';
import { UniRadioGroup } from '../uni-radio-group';

describe('uni-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniRadioGroup],
      html: `<uni-radio-group></uni-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-radio-group>
    `);
  });
});
