import { Hero } from './hero';

describe('uniform-hero', () => {
  it('builds', () => {
    expect(new Hero()).toBeTruthy();
  });
});
