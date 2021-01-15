import { newE2EPage } from '@stencil/core/testing';

describe('uni-tab-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-tab-content></uni-tab-content>');

    const element = await page.find('uni-tab-content');
    expect(element).toHaveClass('hydrated');
  });
});
