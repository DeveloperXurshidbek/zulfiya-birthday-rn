import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const poems = [
  {
    name: "Poem 1",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
  {
    name: "Poem 2",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
  {
    name: "Poem 3",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
  {
    name: "Poem 4",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
  {
    name: "Poem 4",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
  {
    name: "Poem 4",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
  {
    name: "Poem 4",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
  {
    name: "Poem 4",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
  {
    name: "Poem 4",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
  {
    name: "Poem 4",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam",
  },
];

export default function PoemsScreen() {
  return (
    <View style={{ backgroundColor: "white", height: "100%", paddingTop: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {poems.map((poem, index) => (
          <TouchableOpacity key={index} activeOpacity={0.5}>
            <View
              style={{
                marginHorizontal: 15,
                padding: 20,
                marginVertical: 10,
                backgroundColor: "#D2C5FF",
                borderRadius: 10,
                shadowColor: "#b8abfd",
                elevation: 20,
              }}
            >
              <Text>{poem.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
