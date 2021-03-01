import React from "react";
import {
  ActivityIndicator,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color="#1ABC9C" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const ContentView = ({ navigation }) => {
  const onNavChange = (state) => {
    // const navigation = useNavigation();

    console.log("Perubahan:", state);
    // // const urlSuccess = 'Ridwan';
    const titleWeb = "404 Page Not Found";
    if (state.title === titleWeb) {
      return navigation.replace("Handleerror");
    }

    if (state.url.includes(".pdf")) {
      return Linking.openURL(state.url);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        startInLoadingState={true}
        source={{ uri: "https://ridwanromadhon.com/" }}
        style={{ marginTop: 20 }}
        renderLoading={() => <Loading />}
        onNavigationStateChange={onNavChange}
      />
    </View>
  );
};

export default ContentView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 199, 0, 0.2)",
  },
  text: {
    fontSize: 18,
    color: "#1ABC9C",
    marginTop: 12,
  },
});
