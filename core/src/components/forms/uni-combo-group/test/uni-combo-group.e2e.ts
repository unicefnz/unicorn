import { newE2EPage } from '@stencil/core/testing';

describe('uni-combo-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-combo-group></uni-combo-group>');

    const element = await page.find('uni-combo-group');
    expect(element).toHaveClass('hydrated');
  });
});
