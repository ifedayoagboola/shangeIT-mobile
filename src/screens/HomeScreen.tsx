import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LogoScreen from "./LogoScreen";
import ExchangeCard from "../components/ExchangeCard";
import OfferList from "../components/OfferList";
import NavHeader from "../components/NavHeader";

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
        <View style={styles.container} className="px-[30px]">
          <NavHeader />
          <View className="">
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
        </View>
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
