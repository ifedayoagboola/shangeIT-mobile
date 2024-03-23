import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

interface ScreenProps {
  children: any;
  style?: any;
}

const Screen: React.FC<ScreenProps> = ({ children, style }) => {
  // console.log(Constants.statusBarHeight);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
