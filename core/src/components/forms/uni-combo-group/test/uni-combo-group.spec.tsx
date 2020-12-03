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
          <div class="wrapper">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </uni-combo-group>
    `);
  });
});
