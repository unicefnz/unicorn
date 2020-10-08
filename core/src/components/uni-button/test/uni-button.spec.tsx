import { newSpecPage } from '@stencil/core/testing';
import { UniButton } from '../uni-button';

describe('uni-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniButton],
      html: '<uni-button></uni-button>'
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

  it('uses an anchor for links', async () => {
    const page = await newSpecPage({
      components: [UniButton],
      html: '<uni-button href="//example.com/?1234"></uni-button>'
    });
    expect(page.root).toEqualHtml(`
      <uni-button class="uni-color-accent uni-variant-solid" href="//example.com/?1234">
        <mock:shadow-root>
          <a class="button" href="//example.com/?1234">
            <slot name="prepend-icon"></slot>
            <slot></slot>
          </a>
        </mock:shadow-root>
      </uni-button>
    `);
  });

  it('disables the button while loading', async () => {
    const page = await newSpecPage({
      components: [UniButton],
      html: '<uni-button loading></uni-button>'
    });
    expect(page.root).toEqualHtml(`
      <uni-button class="uni-color-accent uni-disabled uni-loading uni-variant-solid" loading>
        <mock:shadow-root>
          <button class="button" type="button" disabled>
            <slot name="prepend-icon"></slot>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </uni-button>
    `);
  });
});
