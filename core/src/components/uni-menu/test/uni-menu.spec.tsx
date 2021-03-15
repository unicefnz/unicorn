import { newSpecPage } from '@stencil/core/testing';
import { UniMenu } from '../uni-menu';

describe('uni-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniMenu],
      html: '<uni-menu></uni-menu>'
    });
    expect(page.root).toEqualHtml(`
      <uni-menu>
        <mock:shadow-root>
          <div class="trigger">
            <slot name="trigger"></slot>
          </div>
          <uni-outside-click>
            <div class="menu">
              <slot></slot>
            </div>
          </uni-outside-click>
        </mock:shadow-root>
      </uni-menu>
    `);
  });
});
