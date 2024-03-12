// import { StatusBar } from "expo-status-bar";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-xl">Let us build shange-it.</Text>
      {/* <StatusBar /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
