import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Header({ navigation }) {
  return (
    <View
      style={{
        paddingTop: 50,
        paddingBottom: 15,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#b8abfd",
          fontSize: 20,
          fontWeight: "700",
          letterSpacing: 0.5,
        }}
      >
        Zulfiya
      </Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.openDrawer()}
      >
        <Image
          style={{
            width: 25,
            height: 25,
            tintColor: "#b8abfd",
          }}
          source={require("../assets/icons/menu.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
