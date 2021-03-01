import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../src/SplashScreen";
import ContentView from "../src/ContentView";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContentView"
        component={ContentView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;