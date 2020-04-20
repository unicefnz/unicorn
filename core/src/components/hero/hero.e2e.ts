import { newE2EPage } from '@stencil/core/testing';

describe('uniform-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uniform-hero></uniform-hero>');

    const element = await page.find('uniform-hero');
    expect(element).toHaveClass('hydrated');
  });
});
