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
          <uni-radio-controller>
            <fieldset class="uni-variant-combo">
              <slot></slot>
            </fieldset>
          </uni-radio-controller>
        </mock:shadow-root>
      </uni-radio-group>
    `);
  });
});
