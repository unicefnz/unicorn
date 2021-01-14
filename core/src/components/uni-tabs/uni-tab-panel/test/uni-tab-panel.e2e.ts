import { newE2EPage } from '@stencil/core/testing';

describe('uni-tab-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-tab-panel></uni-tab-panel>');

    const element = await page.find('uni-tab-panel');
    expect(element).toHaveClass('hydrated');
  });
});
