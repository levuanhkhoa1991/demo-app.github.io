import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from "./Icon";

export default function CartSummary({ totals, onCheckout }) {
  return (
    <View style={{ marginTop: 12 }}>
      <View
        style={{
          padding: 12,
          backgroundColor: "#fff",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <View
            style={{ backgroundColor: "#eef2ff", padding: 8, borderRadius: 8 }}
          >
            <Icon name="cart" />
          </View>
          <View>
            <Text style={{ color: "#6b7280" }}>
              SKUs: {totals.totalSkus} • Qty: {totals.totalQty}
            </Text>
            <Text style={{ fontWeight: "700" }}>
              {totals.totalAmount.toLocaleString()} VND
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              if (totals.totalQty === 0) Alert.alert("Cart empty");
              else onCheckout();
            }}
            style={{ padding: 8, backgroundColor: "#efefef", borderRadius: 6 }}
          >
            <Text>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
