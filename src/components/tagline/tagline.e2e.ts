import { newE2EPage } from '@stencil/core/testing';

describe('uni-tagline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-tagline></uni-tagline>');

    const element = await page.find('uni-tagline');
    expect(element).toHaveClass('hydrated');
  });
});
