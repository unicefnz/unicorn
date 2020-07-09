import { newE2EPage } from '@stencil/core/testing';

describe('uni-backdrop', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-backdrop></uni-backdrop>');

    const element = await page.find('uni-backdrop');
    expect(element).toHaveClass('hydrated');
  });
});
