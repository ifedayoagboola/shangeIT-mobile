import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import HomeScreen from "./src/screens/HomeScreen";
import LogoScreen from "./src/screens/LogoScreen";
import OfferList from "./src/components/OfferList";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [showLogoScreen, setShowLogoScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogoScreen(false);
    }, 1000); // 2000 milliseconds = 2 seconds
    return () => clearTimeout(timeout);
  }, []); // Runs once on component mount

  const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={LogoScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        {showLogoScreen ? <LogoScreen /> : <StackNavigator />}
      </NavigationContainer>
    </Provider>
  );
}
