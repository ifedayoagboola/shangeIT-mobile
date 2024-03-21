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
  return (
    <View className="w-full items-center justify-center">
      <NavHeader />
      <View className="w-full">
        <View className="">
          <Text className="text-2xl font-semibold text-left py-4">
            Welcome Awa Abigail
          </Text>
          <ExchangeCard />
        </View>
        <View className="">
          <Text className="text-lg font-semibold text-left py-4">
            Available Offers
          </Text>
          <OfferList />
        </View>
      </View>
    </View>
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
