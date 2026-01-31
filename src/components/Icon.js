import React from "react";
import { Text } from "react-native";

export default function Icon({ name, size = 18 }) {
  const style = { fontSize: size };
  switch (name) {
    case "search":
      return <Text style={style}>🔎</Text>;
    case "plus":
      return <Text style={style}>➕</Text>;
    case "minus":
      return <Text style={style}>➖</Text>;
    case "cart":
      return <Text style={style}>🛒</Text>;
    case "rx":
      return <Text style={style}>💊</Text>;
    default:
      return null;
  }
}
