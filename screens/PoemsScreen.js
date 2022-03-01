import { View, Text, TouchableOpacity, ScrollView, Button } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PoemBody from "./PoemBody";

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

const Stack = createNativeStackNavigator();

export default function PoemsScreen({ navigation }) {
  function handlePass() {
    console.log(1);
    navigation.navigate("Poem");
  }

  return (
    <View>
      <NavigationContainer independent={true}>
        <Button title="Navigate" onPress={() => handlePass()}></Button>
        <Stack.Navigator>
          <Stack.Screen name="Poem" component={PoemBody} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

// <View style={{ backgroundColor: "white", height: "100%", paddingTop: 20 }}>
//   <ScrollView showsVerticalScrollIndicator={false}>
//     {poems.map((poem, index) => (
//       <TouchableOpacity
//         key={index}
//         activeOpacity={0.5}
//         onPress={handlePass}
//       >
//         <View
//           style={{
//             marginHorizontal: 15,
//             padding: 20,
//             marginVertical: 10,
//             backgroundColor: "#D2C5FF",
//             borderRadius: 10,
//             shadowColor: "#b8abfd",
//             elevation: 20,
//           }}
//         >
//           <Text>{poem.name}</Text>
//         </View>
//       </TouchableOpacity>
//     ))}
//   </ScrollView>
// </View>
