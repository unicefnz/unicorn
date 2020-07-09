import { newE2EPage } from '@stencil/core/testing';

describe('uni-tag-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-tag-chip></uni-tag-chip>');

    const element = await page.find('uni-tag-chip');
    expect(element).toHaveClass('hydrated');
  });
});
