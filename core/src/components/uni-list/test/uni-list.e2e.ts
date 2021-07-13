import { newE2EPage } from '@stencil/core/testing';

describe('uni-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-list></uni-list>');

    const element = await page.find('uni-list');
    expect(element).toHaveClass('hydrated');
  });
});
