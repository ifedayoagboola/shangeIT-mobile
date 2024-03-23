import React from "react";
import { Text, StyleSheet, Platform, StyleProp, TextStyle } from "react-native";

interface AppTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  className?: string;
}

const AppText: React.FC<AppTextProps> = ({ children, style, ...args }) => {
  return (
    <Text style={[styles.text, style]} {...args}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: Platform.OS === "android" ? 15 : 17,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
