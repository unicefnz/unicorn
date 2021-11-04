import { newSpecPage } from '@stencil/core/testing';
import { UniList } from '../uni-list';

describe('uni-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniList],
      html: '<uni-list></uni-list>'
    });
    expect(page.root).toEqualHtml(`
      <uni-list>
        <mock:shadow-root>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </uni-list>
    `);
  });
});
