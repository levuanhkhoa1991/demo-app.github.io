import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "quick_order_cart_v1";

export default function useCart(initial = {}) {
  const [cart, setCart] = useState(initial);

  useEffect(() => {
    let mounted = true;
    AsyncStorage.getItem(STORAGE_KEY).then((raw) => {
      if (!mounted) return;
      try {
        if (raw) setCart(JSON.parse(raw));
      } catch (e) {
        // ignore
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cart)).catch(() => {});
  }, [cart]);

  const setQty = useCallback((productId, qty) => {
    setCart((prev) => {
      const next = { ...prev };
      if (!qty || qty <= 0) delete next[productId];
      else next[productId] = Math.max(0, Math.min(99, Math.floor(qty)));
      return next;
    });
  }, []);

  const inc = useCallback((productId) => {
    setCart((prev) => {
      const next = { ...prev };
      const cur = next[productId] || 0;
      next[productId] = Math.min(99, cur + 1);
      return next;
    });
  }, []);

  const dec = useCallback((productId) => {
    setCart((prev) => {
      const next = { ...prev };
      const cur = next[productId] || 0;
      const nextQty = Math.max(0, cur - 1);
      if (nextQty <= 0) delete next[productId];
      else next[productId] = nextQty;
      return next;
    });
  }, []);

  const reset = useCallback(() => setCart({}), []);

  return { cart, setQty, inc, dec, reset };
}
