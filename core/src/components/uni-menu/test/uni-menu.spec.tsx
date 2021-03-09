import { newSpecPage } from '@stencil/core/testing';
import { UniMenu } from '../uni-menu';

describe('uni-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniMenu],
      html: `<uni-menu></uni-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-menu>
    `);
  });
});
