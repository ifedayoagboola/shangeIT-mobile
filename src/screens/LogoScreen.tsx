import React from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";

const LogoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={require("../assets/logo2.png")}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2934D0",
  },
});

export default LogoScreen;
