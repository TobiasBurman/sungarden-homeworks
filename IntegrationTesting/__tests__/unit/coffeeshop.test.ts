import { createDrink, prepareOrder, processPayment } from '../../src/coffeeshop';

describe('createDrink', () => {
  it('returns correct type and price for latte', () => {
    expect(createDrink("latte")).toEqual({ type: "latte", price: 45 });
  });

  it('returns undefined price for unknown drink', () => {
    expect(createDrink("juice").price).toBeUndefined();
  });
});

describe('prepareOrder', () => {
  it('returns a number between 0 and 999', () => {
    const ticket = prepareOrder({ type: "latte" });
    expect(typeof ticket).toBe("number");
    expect(ticket).toBeGreaterThanOrEqual(0);
    expect(ticket).toBeLessThan(1000);
  });
});

describe('processPayment', () => {
  it('throws if no ticket number provided', () => {
    expect(() => processPayment(null as any, 45)).toThrow("No ticket number provided");
  });

  it('returns true when payment is processed', () => {
    expect(processPayment(123, 45)).toBe(true);
  });
});