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
    <View style={styles.page}>
      <View style={styles.content}>
        <Logo />
        <Text style={styles.textTitle}>Ridwan</Text>
        <Text style={styles.textTitleDesc}>Ganteng</Text>
        <Text style={styles.textDescPrimary}>Welcome to Ajheryuk</Text>
        <Text style={styles.textDescSeccoundary}>
          Best and popular apps for live education course from home
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 19,
  },
  content: {
    alignItems: "center",
  },
  textTitle: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#EC5F5F",
  },
  textTitleDesc: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
  textDescPrimary: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    marginTop: 80,
  },
  textDescSeccoundary: {
    color: "#8C8C8C",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
  },
});
