import { newE2EPage } from '@stencil/core/testing';

describe('uni-outside-click', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uni-outside-click></uni-outside-click>');

    const element = await page.find('uni-outside-click');
    expect(element).toHaveClass('hydrated');
  });
});
