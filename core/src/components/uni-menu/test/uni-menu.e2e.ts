import { newE2EPage } from '@stencil/core/testing';

describe('uni-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-menu></uni-menu>');

    const element = await page.find('uni-menu');
    expect(element).toHaveClass('hydrated');
  });
});
