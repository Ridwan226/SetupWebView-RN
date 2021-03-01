import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import ContentView from "./src/ContentView";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/SplashScreen";
import Router from "./router";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
      {/* <View>
        <SplashScreen />
      </View> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//   },
// });
