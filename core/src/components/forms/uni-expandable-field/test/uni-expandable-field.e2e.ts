import { newE2EPage } from '@stencil/core/testing';

describe('uni-expandable-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-expandable-field></uni-expandable-field>');

    const element = await page.find('uni-expandable-field');
    expect(element).toHaveClass('hydrated');
  });
});
