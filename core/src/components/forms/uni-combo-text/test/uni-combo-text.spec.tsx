import { newSpecPage } from '@stencil/core/testing';
import { UniComboText } from '../uni-combo-text';

describe('uni-combo-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UniComboText],
      html: `
        <uni-combo-text>
          <uni-text-field></uni-text-field>
        </uni-combo-text>
      `,
    });
    expect(page.root).toEqualHtml(`
      <uni-combo-text uni-radio-option="">
        <uni-text-field></uni-text-field>
      </uni-combo-text>
    `);
  });
});
