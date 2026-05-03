import { buyBook } from '../../src/bookstore';

describe('buyBook integration', () => {
  it('full flow returns success true for dune', () => {
    const result = buyBook("dune");
    expect(result.success).toBe(true);
  });
});