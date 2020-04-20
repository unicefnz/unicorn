import { newE2EPage } from '@stencil/core/testing';

describe('uni-underline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-underline></uni-underline>');

    const element = await page.find('uni-underline');
    expect(element).toHaveClass('hydrated');
  });
});
