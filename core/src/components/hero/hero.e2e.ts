import { newE2EPage } from '@stencil/core/testing';

describe('uni-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-hero></uni-hero>');

    const element = await page.find('uni-hero');
    expect(element).toHaveClass('hydrated');
  });
});
