import { newE2EPage } from '@stencil/core/testing';

describe('uni-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-text-field></uni-text-field>');

    const element = await page.find('uni-text-field');
    expect(element).toHaveClass('hydrated');
  });
});
