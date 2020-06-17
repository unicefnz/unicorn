import { newE2EPage } from '@stencil/core/testing';

describe('uni-combo-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-combo-text></uni-combo-text>');

    const element = await page.find('uni-combo-text');
    expect(element).toHaveClass('hydrated');
  });
});
