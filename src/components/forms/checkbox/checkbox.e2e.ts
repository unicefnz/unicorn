import { newE2EPage } from '@stencil/core/testing';

describe('uni-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-checkbox></uni-checkbox>');

    const element = await page.find('uni-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
