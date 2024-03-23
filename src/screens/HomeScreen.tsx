import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LogoScreen from "./LogoScreen";
import ExchangeCard from "../components/ExchangeCard";
import OfferList from "../components/OfferList";
import NavHeader from "../components/NavHeader";
import Screen from "../components/Screen";

const HomeScreen = () => {
  return (
    <Screen style={styles.screen}>
      <NavHeader />
      <Text className="text-xl font-semibold text-left py-4">
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
    paddingHorizontal: 30,
  },
});

export default HomeScreen;
