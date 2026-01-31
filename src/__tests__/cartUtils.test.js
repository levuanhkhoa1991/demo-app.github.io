import { calcTotals } from "../lib/cartUtils";

const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
];

describe("calcTotals", () => {
  it("calculates totals correctly", () => {
    const cart = { 1: 2, 2: 3 };
    const res = calcTotals(cart, products);
    expect(res.totalSkus).toBe(2);
    expect(res.totalQty).toBe(5);
    expect(res.totalAmount).toBe(2 * 100 + 3 * 200);
  });

  it("handles empty or missing products gracefully", () => {
    const cart = { 1: 1 };
    const res = calcTotals(cart, []);
    expect(res.totalSkus).toBe(0);
    expect(res.totalQty).toBe(0);
    expect(res.totalAmount).toBe(0);
  });
});
