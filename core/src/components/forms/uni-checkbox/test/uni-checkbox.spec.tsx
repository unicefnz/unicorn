import { newSpecPage } from '@stencil/core/testing';
import { UniCheckbox } from '../uni-checkbox';

describe('uni-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniCheckbox],
      html: '<uni-checkbox></uni-checkbox>'
    });
    expect(page.root).toEqualHtml(`
      <uni-checkbox>
        <mock:shadow-root>
          <div class="uni-checkbox">
            <input id="uni-checkbox-0" type="checkbox">
            <div class="uni-checkbox-icon">
              <svg class="uni-checkbox-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <polyline points="416 128 192 384 96 288" style="fill: none; stroke: var(--uni-dark); stroke-linecap: round; stroke-linejoin: round; stroke-width: 56px;"></polyline>
              </svg>
              <div class="uni-checkbox-indeterminate"></div>
            </div>
            <div class="uni-checkbox-visual"></div>
          </div>
          <label htmlfor="uni-checkbox-0">
            <slot></slot>
          </label>
        </mock:shadow-root>
      </uni-checkbox>
    `);
  });

  it('renders as a checked box', async () => {
    const page = await newSpecPage({
      components: [UniCheckbox],
      html: '<uni-checkbox checked></uni-checkbox>'
    });
    expect(page.root).toEqualHtml(`
      <uni-checkbox checked class="uni-checked">
        <mock:shadow-root>
          <div class="uni-checkbox">
            <input checked id="uni-checkbox-1" type="checkbox">
            <div class="uni-checkbox-icon">
              <svg class="uni-checkbox-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <polyline points="416 128 192 384 96 288" style="fill: none; stroke: var(--uni-dark); stroke-linecap: round; stroke-linejoin: round; stroke-width: 56px;"></polyline>
              </svg>
              <div class="uni-checkbox-indeterminate"></div>
            </div>
            <div class="uni-checkbox-visual"></div>
          </div>
          <label htmlFor="uni-checkbox-1">
            <slot></slot>
          </label>
        </mock:shadow-root>
      </uni-checkbox>
    `);
  });
});
