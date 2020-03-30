import { newE2EPage } from '@stencil/core/testing';

describe('uni-bar-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-bar-text></uni-bar-text>');

    const element = await page.find('uni-bar-text');
    expect(element).toHaveClass('hydrated');
  });
});
