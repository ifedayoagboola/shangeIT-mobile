import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import HomeScreen from "./src/screens/HomeScreen";
import LogoScreen from "./src/screens/LogoScreen";
import OfferList from "./src/components/OfferList";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavHeader from "./src/components/NavHeader";
import Text from "./src/components/Text";
import Button from "./src/components/Button";

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
        <Stack.Screen name="Welcome" component={LogoScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <TouchableOpacity>
                <Image
                  source={require("./src/assets/face.png")}
                  alt="burger illustration"
                  style={{ width: 50, height: 50 }}
                />
              </TouchableOpacity>
            ),

            headerTitle: (props) => <Text>Home</Text>,
            headerRight: () => (
              <TouchableOpacity className="border border-gray-200 p-4 rounded-2xl">
                <Image
                  source={require("./src/assets/Notification.png")}
                  alt="burger illustration"
                  style={{ width: 17, height: 20 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
