import { newE2EPage } from '@stencil/core/testing';

describe('uni-dialog-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-dialog-content></uni-dialog-content>');

    const element = await page.find('uni-dialog-content');
    expect(element).toHaveClass('hydrated');
  });
});
