import { newE2EPage } from '@stencil/core/testing';

describe('uni-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-list-item></uni-list-item>');

    const element = await page.find('uni-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
