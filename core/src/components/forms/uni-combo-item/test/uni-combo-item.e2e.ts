import { newE2EPage } from '@stencil/core/testing';

describe('uni-combo-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-combo-item></uni-combo-item>');

    const element = await page.find('uni-combo-item');
    expect(element).toHaveClass('hydrated');
  });
});
