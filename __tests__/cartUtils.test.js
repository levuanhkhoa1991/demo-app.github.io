import { calcTotals } from "../src/lib/cartUtils";

describe("calcTotals", () => {
  it("calculates totals correctly", () => {
    const products = [
      { id: 1, price: 100 },
      { id: 2, price: 200 },
    ];
    const cart = { 1: 2, 2: 3 };
    const res = calcTotals(cart, products);
    expect(res.totalSkus).toBe(2);
    expect(res.totalQty).toBe(5);
    expect(res.totalAmount).toBe(2 * 100 + 3 * 200);
  });

  it("handles missing products gracefully", () => {
    const res = calcTotals({ 1: 1 }, []);
    expect(res.totalSkus).toBe(0);
    expect(res.totalQty).toBe(0);
    expect(res.totalAmount).toBe(0);
  });
});
