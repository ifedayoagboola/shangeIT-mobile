import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import LogoScreen from "./screens/LogoScreen";
import OfferList from "./components/OfferList";
import Screen from "./components/Screen";

export default function App() {
  const [showLogoScreen, setShowLogoScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogoScreen(false);
    }, 1000); // 2000 milliseconds = 2 seconds
    return () => clearTimeout(timeout);
  }, []); // Runs once on component mount
  return (
    <Provider store={store}>
      {showLogoScreen ? <LogoScreen /> : <HomeScreen />}
    </Provider>
  );
}
