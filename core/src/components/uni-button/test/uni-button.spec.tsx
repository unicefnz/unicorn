import { newSpecPage } from '@stencil/core/testing';
import { UniButton } from '../uni-button';

describe('uni-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniButton],
      html: '<uni-button></uni-button>',
    });
    expect(page.root).toEqualHtml(`
      <uni-button class="uni-color-accent uni-variant-solid">
        <mock:shadow-root>
          <button class="button" type="button">
            <slot name="prepend-icon"></slot>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </uni-button>
    `);
  });
});
