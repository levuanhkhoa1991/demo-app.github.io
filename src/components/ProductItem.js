import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

export default function ProductItem({ product, qty = 0, onInc, onDec }) {
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 8,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            backgroundColor: "#f1f5f9",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
          }}
        >
          <Text style={{ fontWeight: "700" }}>
            {product.name
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("")}
          </Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text style={{ fontWeight: "600" }}>{product.name}</Text>
            {product.isPrescription && (
              <View
                style={{
                  backgroundColor: "#ffe9e9",
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                  borderRadius: 6,
                }}
              >
                <Text style={{ fontWeight: "700" }}>Rx</Text>
              </View>
            )}
          </View>
          <Text style={{ color: "#6b7280" }}>
            {product.category} • {product.price.toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <TouchableOpacity
          onPress={() => onDec(product.id)}
          style={{ padding: 6, backgroundColor: "#efefef", borderRadius: 6 }}
        >
          <Icon name="minus" />
        </TouchableOpacity>
        <Text style={{ minWidth: 24, textAlign: "center" }}>{qty || 0}</Text>
        <TouchableOpacity
          onPress={() => onInc(product.id)}
          style={{ padding: 6, backgroundColor: "#efefef", borderRadius: 6 }}
        >
          <Icon name="plus" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
