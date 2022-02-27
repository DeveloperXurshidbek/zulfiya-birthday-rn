import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import PoemsScreen from "./screens/PoemsScreen";
import Header from "./components/Header";
import AboutScreen from "./screens/AboutScreen";

const homeName = "Home";
const poemsScreen = "Poems";
const aboutScreen = "About";

// Icons
const homeIcon = require("./assets/icons/home.png");
const playIcon = require("./assets/icons/play.png");
const notepadIcon = require("./assets/icons/notepad.png");

const homeIconO = require("./assets/icons/home-outline.png");
const playIconO = require("./assets/icons/play-outline.png");
const notepadIconO = require("./assets/icons/notepad-outline.png");

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
              iconName = focused ? homeIcon : homeIconO;
            } else if (rn === poemsScreen) {
              iconName = focused ? playIcon : playIconO;
            } else if (rn === aboutScreen) {
              iconName = focused ? notepadIcon : notepadIconO;
            }

            return (
              <Image
                source={iconName}
                style={{ width: 30, height: 30, tintColor: "#b8abfd" }}
              />
            );
          },
          tabBarActiveTintColor: "#b8abfd",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={poemsScreen} component={PoemsScreen} />
        <Tab.Screen name={aboutScreen} component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
