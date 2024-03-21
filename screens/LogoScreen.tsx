import React from "react";
import { Image, View } from "react-native";

const LogoScreen = () => {
  return (
    <View className="items-center justify-center bg-[#2934D0] w-[100%] h-[100%]">
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={require("../assets/logo2.png")}
      />
    </View>
  );
};

export default LogoScreen;
