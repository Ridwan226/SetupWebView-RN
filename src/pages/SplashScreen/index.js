import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Logo } from "../../assets";

const SplashScreen = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace("ContentView");
  //   }, 3000);
  // }, []);

  return (
    <View style={styles.pages}>
      <Logo />
      <Text style={styles.textTitle}>Ridwan</Text>
      <Text style={styles.textTitle}>Ganteng</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  pages: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textTitle: {
    fontSize: 24,
  },
});
