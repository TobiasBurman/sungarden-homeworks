import { orderDrink } from '../../src/coffeeshop';

describe('orderDrink integration', () => {
  it('full flow returns true for latte', () => {
    expect(orderDrink("latte")).toBe(true);
  });
});