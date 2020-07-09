import { newE2EPage } from '@stencil/core/testing';

describe('uni-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-select></uni-select>');

    const element = await page.find('uni-select');
    expect(element).toHaveClass('hydrated');
  });
});
