import React, { useMemo, useState } from "react";
import { SafeAreaView, View, Text, FlatList, Alert } from "react-native";
import productsJSON from "./data/products.json";
import SearchBar from "./components/SearchBar";
import ProductItem from "./components/ProductItem";
import CartSummary from "./components/CartSummary";
import useDebounce from "./hooks/useDebounce";
import useCart from "./hooks/useCart";
import { calcTotals } from "./lib/cartUtils";

export default function App() {
  const products = productsJSON || [];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const debounced = useDebounce(query, 300);
  const { cart, inc, dec, reset } = useCart({});

  const filtered = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return p.name.toLowerCase().includes(q);
    });
  }, [products, debounced, category]);

  const totals = useMemo(() => calcTotals(cart, products), [cart, products]);

  const handleCheckout = () => {
    Alert.alert(
      "Quick order created",
      `${totals.totalQty} items — ${totals.totalAmount.toLocaleString()} VND`,
    );
    reset();
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 12, backgroundColor: "#f8fafc" }}>
      <View style={{ marginBottom: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Quick Order</Text>
      </View>

      <SearchBar
        value={query}
        onChange={setQuery}
        category={category}
        onCategory={setCategory}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            qty={cart[item.id] || 0}
            onInc={inc}
            onDec={dec}
          />
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              padding: 28,
              borderRadius: 10,
              backgroundColor: "#fff",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 28 }}>🧾</Text>
            <Text style={{ marginTop: 8, color: "#6b7280" }}>
              No products found
            </Text>
          </View>
        )}
      />

      <CartSummary totals={totals} onCheckout={handleCheckout} />
    </SafeAreaView>
  );
}
