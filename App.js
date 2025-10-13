import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

// Importar pantallas
import HomeScreen from "./src/screens/HomeScreen";
import DayScreen from "./src/screens/DayScreen";
import MusicScreen from "./src/screens/MusicScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Novena Navideña" }}
        />
        <Stack.Screen
          name="Day"
          component={DayScreen}
          options={{ title: "Oración del Día" }}
        />
        <Stack.Screen
          name="Music"
          component={MusicScreen}
          options={{ title: "Villancicos Navideños" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
