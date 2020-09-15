import { newSpecPage } from '@stencil/core/testing';
import { UniOutsideClick } from '../uni-outside-click';

describe('uni-outside-click', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniOutsideClick],
      html: '<uni-outside-click></uni-outside-click>'
    });
    expect(page.root).toEqualHtml(`
      <uni-outside-click>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-outside-click>
    `);
  });
});
