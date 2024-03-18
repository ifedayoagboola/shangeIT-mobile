import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LogoScreen from "./LogoScreen";
import ExchangeCard from "../components/ExchangeCard";
import OfferList from "../components/OfferList";

const HomeScreen = () => {
  const [showLogoScreen, setShowLogoScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogoScreen(false);
    }, 1000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timeout);
  }, []); // Runs once on component mount

  return (
    <>
      {showLogoScreen ? (
        <LogoScreen />
      ) : (
        <SafeAreaView style={styles.container} className="">
          <View className="px-[30px]">
            <Text className="text-2xl font-semibold text-left py-4">
              Welcome Awa Abigail
            </Text>
            <ExchangeCard />
            <SafeAreaView>
              <Text className="text-lg font-semibold text-left py-4">
                Available Offers
              </Text>
              <OfferList />
            </SafeAreaView>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default HomeScreen;