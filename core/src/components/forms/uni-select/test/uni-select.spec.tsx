import { newSpecPage } from '@stencil/core/testing';
import { UniSelect } from '../uni-select';

describe('uni-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniSelect],
      html: '<uni-select></uni-select>'
    });
    expect(page.root).toEqualHtml(`
      <uni-select>
        <mock:shadow-root>
          <div class="select-box">
            <slot></slot>
            <div class="select-icons">
              <div class="drop-icon"></div>
            </div>
          </div>
        </mock:shadow-root>
      </uni-select>
    `);
  });

  it('renders with a label', async () => {
    const page = await newSpecPage({
      components: [UniSelect],
      html: '<uni-select label="Hello!"></uni-select>'
    });
    expect(page.root).toEqualHtml(`
      <uni-select label="Hello!">
        <mock:shadow-root>
          <label>
            <div class="select-label">
              Hello!
            </div>
            <div class="select-box">
              <slot></slot>
              <div class="select-icons">
                <div class="drop-icon"></div>
              </div>
            </div>
          </label>
        </mock:shadow-root>
      </uni-select>
    `);
  });
});
