import { newE2EPage } from '@stencil/core/testing';

describe('uni-radio-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-radio-option></uni-radio-option>');

    const element = await page.find('uni-radio-option');
    expect(element).toHaveClass('hydrated');
  });
});
