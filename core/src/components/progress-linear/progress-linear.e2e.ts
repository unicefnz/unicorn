import { newE2EPage } from '@stencil/core/testing';

describe('uni-progress-linear', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-progress-linear></uni-progress-linear>');

    const element = await page.find('uni-progress-linear');
    expect(element).toHaveClass('hydrated');
  });
});
