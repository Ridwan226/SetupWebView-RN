import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const Loading = () => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color="#1ABC9C" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const ContentView = () => {
  const onNavChange = (state) => {
    console.log("Perubahan:", state);
    // // const urlSuccess = 'http://fmadmin.ridwanromadhon.com/midtrans/success';
    // const titleWeb = 'Laravel';
    // if (state.title === titleWeb) {
    //   navigation.reset('SuccessOrder');
    // }
  };

  return (
    <View style={styles.container}>
      <WebView
        startInLoadingState={true}
        source={{ uri: "https://ridwanromadhon.com" }}
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
