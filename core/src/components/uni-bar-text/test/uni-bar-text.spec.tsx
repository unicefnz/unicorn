import { newSpecPage } from '@stencil/core/testing';
import { UniBarText } from '../uni-bar-text';

describe('uni-bar-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniBarText],
      html: '<uni-bar-text></uni-bar-text>'
    });
    expect(page.root).toEqualHtml(`
      <uni-bar-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uni-bar-text>
    `);
  });
});
