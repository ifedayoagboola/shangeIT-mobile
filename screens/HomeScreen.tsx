import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LogoScreen from "./LogoScreen";
import ExchangeCard from "../components/ExchangeCard";
import OfferList from "../components/OfferList";
import NavHeader from "../components/NavHeader";
import Screen from "../components/Screen";

const HomeScreen = () => {
  return (
    <Screen style={styles.screen}>
      {/* <StatusBar /> */}
      <NavHeader />
      <Text className="text-2xl font-semibold text-left py-4">
        Welcome Awa Abigail
      </Text>
      <ExchangeCard />

      <Text className="text-lg font-semibold text-left py-4">
        Available Offers
      </Text>
      <OfferList />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
