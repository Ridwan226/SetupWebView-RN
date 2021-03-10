import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import Router from "./src/router";
import * as Font from "expo-font";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
