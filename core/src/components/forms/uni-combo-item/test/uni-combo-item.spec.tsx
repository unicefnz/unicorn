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
          <label htmlfor="uni-combo-item-0">
            <span>
              <slot></slot>
            </span>
          </label>
          <input class="radio-elem" id="uni-combo-item-0" type="radio" value="uni-combo-item-0" />
        </mock:shadow-root>
      </uni-combo-item>
    `);
  });
});
