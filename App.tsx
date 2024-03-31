import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import HomeScreen from "./src/screens/HomeScreen";
import LogoScreen from "./src/screens/LogoScreen";
import OfferList from "./src/components/OfferList";
import { StyleSheet } from "react-native";

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
