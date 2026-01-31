import { incQty, decQty } from "../lib/cartOps";

describe("cartOps", () => {
  it("increments quantity and caps at 99", () => {
    let c = {};
    c = incQty(c, 1);
    expect(c[1]).toBe(1);
    c = { 1: 99 };
    c = incQty(c, 1);
    expect(c[1]).toBe(99);
  });

  it("decrements quantity and removes item at 0", () => {
    let c = { 1: 2 };
    c = decQty(c, 1);
    expect(c[1]).toBe(1);
    c = decQty(c, 1);
    expect(c[1]).toBeUndefined();
  });
});
