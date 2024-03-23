import React from "react";
import { Text, StyleSheet, Platform, StyleProp, TextStyle } from "react-native";

interface AppTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<AppTextProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
