import { newSpecPage } from '@stencil/core/testing';
import { UniTooltip } from '../uni-tooltip';

describe('uni-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniTooltip],
      html: `<uni-tooltip></uni-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <uni-tooltip class="uni-tooltip--has-arrow uni-tooltip--position-right">
        <mock:shadow-root>
          <slot></slot>
          <div class="tooltip-content">
            <slot name="content"></slot>
          </div>
        </mock:shadow-root>
      </uni-tooltip>
    `);
  });
});
