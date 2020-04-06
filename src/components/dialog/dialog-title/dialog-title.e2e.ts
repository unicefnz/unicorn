import { newE2EPage } from '@stencil/core/testing';

describe('uni-dialog-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-dialog-title></uni-dialog-title>');

    const element = await page.find('uni-dialog-title');
    expect(element).toHaveClass('hydrated');
  });
});
