import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "./Icon";

const categories = [
  "All",
  "Pain Relief",
  "Antibiotic",
  "Supplement",
  "Allergy",
  "Gastro",
];

export default function SearchBar({ value, onChange, category, onCategory }) {
  return (
    <View style={{ marginVertical: 12 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Icon name="search" />
        <TextInput
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#e5e7eb",
            backgroundColor: "#fff",
          }}
          placeholder="Search products"
          value={value}
          onChangeText={onChange}
        />
      </View>
      <ScrollView
        horizontal
        style={{ marginTop: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((c) => (
          <TouchableOpacity
            key={c}
            onPress={() => onCategory(c)}
            style={{
              padding: 8,
              marginRight: 8,
              backgroundColor: category === c ? "#dbeafe" : "#f8fafc",
              borderRadius: 8,
            }}
          >
            <Text>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
