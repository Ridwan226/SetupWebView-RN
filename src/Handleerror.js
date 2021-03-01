import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Handleerror = ({ navigation }) => {
  const onBack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SplashScreen" }],
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/errorilustration.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Terjadi Kesalahan</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={onBack}>
        <View style={styles.wrapperButton}>
          <Text style={styles.textButton}>Keluar Aplikasi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Handleerror;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  wrapperButton: {
    backgroundColor: "#CAA84A",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
