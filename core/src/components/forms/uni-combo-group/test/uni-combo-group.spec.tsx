import { newSpecPage } from '@stencil/core/testing';
import { UniComboGroup } from '../uni-combo-group';

describe('uni-combo-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniComboGroup],
      html: '<uni-combo-group></uni-combo-group>'
    });
    expect(page.root).toEqualHtml(`
      <uni-combo-group>
        <mock:shadow-root>
          <fieldset class="radio-fieldset uni-variant-combo">
            <uni-radio-controller part="layout">
              <slot></slot>
            </uni-radio-controller>
          </fieldset>
        </mock:shadow-root>
      </uni-combo-group>
    `);
  });
});
