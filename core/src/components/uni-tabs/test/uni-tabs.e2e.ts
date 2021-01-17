import { newE2EPage } from '@stencil/core/testing';

describe('uni-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-tabs></uni-tabs>');

    const element = await page.find('uni-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
