import { newE2EPage } from '@stencil/core/testing';

describe('uni-radio-controller', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-radio-controller></uni-radio-controller>');

    const element = await page.find('uni-radio-controller');
    expect(element).toHaveClass('hydrated');
  });
});
