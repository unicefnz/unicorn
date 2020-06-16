import { newE2EPage } from '@stencil/core/testing';

describe('uni-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-radio-group></uni-radio-group>');

    const element = await page.find('uni-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
