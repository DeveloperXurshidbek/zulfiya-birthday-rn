import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./screens/Home";
import PoemsScreen from "./screens/PoemsScreen";
import Header from "./components/Header";

const homeName = "Home";
const poemsScreen = "Poems";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarLabel: () => {
            return null;
          },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === poemsScreen) {
              iconName = focused ? "list" : "list-outline";
            }

            return <Ionicons name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: "#b8abfd",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={poemsScreen} component={PoemsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
