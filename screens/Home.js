import { View, Image, StyleSheet } from "react-native";
import React from "react";
import Biography from "../components/Biography";

export default function Home() {
  return (
    <View>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={90}
      />
      <Biography />
    </View>
  );
}
