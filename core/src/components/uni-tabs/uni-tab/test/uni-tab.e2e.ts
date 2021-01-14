import { newE2EPage } from '@stencil/core/testing';

describe('uni-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-tab></uni-tab>');

    const element = await page.find('uni-tab');
    expect(element).toHaveClass('hydrated');
  });
});
