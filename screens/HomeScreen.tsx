import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text className="flex-1 items-center justify-center bg-red-500 text-2xl">
        Let us build shange-it.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
