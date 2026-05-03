import { findBook, reserveStock, confirmPurchase } from '../../src/bookstore';

describe('findBook', () => {
  it('returns correct title and price for dune', () => {
    expect(findBook("dune")).toEqual({ title: "dune", price: 89 });
  });

  it('returns undefined price for unknown book', () => {
    expect(findBook("unknown").price).toBeUndefined();
  });
});

describe('reserveStock', () => {
  it('returns a number between 1000 and 9999', () => {
    const code = reserveStock({ title: "dune" });
    expect(typeof code).toBe("number");
    expect(code).toBeGreaterThanOrEqual(1000);
    expect(code).toBeLessThanOrEqual(9999);
  });
});

describe('confirmPurchase', () => {
  it('throws if no reservation code provided', () => {
    expect(() => confirmPurchase(0, 89)).toThrow("Invalid reservation");
  });

  it('returns success object with correct code', () => {
    expect(confirmPurchase(1234, 89)).toEqual({ success: true, code: 1234 });
  });
});