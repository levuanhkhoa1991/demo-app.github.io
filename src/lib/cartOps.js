// pure operations for cart mutation used in tests
export function incQty(cart, productId) {
  const next = { ...cart };
  const cur = next[productId] || 0;
  next[productId] = Math.min(99, cur + 1);
  return next;
}

export function decQty(cart, productId) {
  const next = { ...cart };
  const cur = next[productId] || 0;
  const nextQty = Math.max(0, cur - 1);
  if (nextQty <= 0) delete next[productId];
  else next[productId] = nextQty;
  return next;
}
