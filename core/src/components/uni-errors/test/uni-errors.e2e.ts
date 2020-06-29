import { newE2EPage } from '@stencil/core/testing';

describe('uni-errors', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-errors></uni-errors>');

    const element = await page.find('uni-errors');
    expect(element).toHaveClass('hydrated');
  });
});
