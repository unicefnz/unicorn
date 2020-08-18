import { newE2EPage } from '@stencil/core/testing';

describe('uni-dialog-actions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-dialog-actions></uni-dialog-actions>');

    const element = await page.find('uni-dialog-actions');
    expect(element).toHaveClass('hydrated');
  });
});
