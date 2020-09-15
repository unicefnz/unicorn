import { newSpecPage } from '@stencil/core/testing';
import { UniUnderline } from '../uni-underline';

describe('uni-underline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniUnderline],
      html: '<uni-underline></uni-underline>'
    });
    expect(page.root).toEqualHtml(`
      <uni-underline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-underline>
    `);
  });
});
