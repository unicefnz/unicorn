import { newSpecPage } from '@stencil/core/testing';
import { UniComboText } from '../uni-combo-text';

describe('uni-combo-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniComboText],
      html: '<uni-combo-text></uni-combo-text>'
    });
    expect(page.root).toEqualHtml(`
      <uni-combo-text uni-radio-option="">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-combo-text>
    `);
  });
});
