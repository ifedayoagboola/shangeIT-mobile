import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const [showLogoScreen, setShowLogoScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogoScreen(false);
    }, 700); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timeout);
  }, []); // Runs once on component mount

  return (
    <>
      {showLogoScreen ? (
        <SafeAreaView style={styles.container}>
          <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            source={require("../assets/logo2.png")}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container2}>
          <Text className="text-black text-lg">
            Welcome to the Home screen!
          </Text>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2934D0",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});

export default HomeScreen;
