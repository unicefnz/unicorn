import { newSpecPage } from '@stencil/core/testing';
import { UniComboItem } from '../uni-combo-item';

describe('uni-combo-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniComboItem],
      html: '<uni-combo-item></uni-combo-item>'
    });
    expect(page.root).toEqualHtml(`
      <uni-combo-item uni-radio-option="">
        <mock:shadow-root>
          <button class="button" type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </uni-combo-item>
    `);
  });
});
