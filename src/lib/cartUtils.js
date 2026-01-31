export function calcTotals(cartMap, products) {
  const result = { totalSkus: 0, totalQty: 0, totalAmount: 0 };
  if (!cartMap) return result;
  for (const [idStr, qty] of Object.entries(cartMap)) {
    const id = Number(idStr);
    if (!qty || qty <= 0) continue;
    const product = products.find((p) => p.id === id);
    if (!product) continue;
    result.totalSkus += 1;
    result.totalQty += qty;
    result.totalAmount += product.price * qty;
  }
  return result;
}
