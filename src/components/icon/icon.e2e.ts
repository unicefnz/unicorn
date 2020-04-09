import { newE2EPage } from '@stencil/core/testing';

describe('uni-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-icon></uni-icon>');

    const element = await page.find('uni-icon');
    expect(element).toHaveClass('hydrated');
  });
});
