import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("ContentView");
    }, 3000);
  }, []);

  return (
    <View>
      <ImageBackground
        source={require("../assets/imagesplash.png")}
        style={styles.image}
      />
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
