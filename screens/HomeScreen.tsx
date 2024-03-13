import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView
      className="flex-1 items-center justify-center"
      style={styles.container}
    >
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={require("../assets/logo2.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2934D0",
  },
});

export default HomeScreen;
