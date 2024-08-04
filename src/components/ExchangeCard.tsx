import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ExchangeCard = () => {
  return (
    <View className="bg-[#E0E1F6] rounded-xl flex flex-row items-center justify-center p-4">
      <View className="space-y-4 w-1/2 justify-center items-start">
        <Image
          source={require("../assets/Polygon 1.png")}
          alt="burger illustration"
        />
        <Text className="text-sm text-black text-left">
          Let’s exchange your currency in no time
        </Text>

        <TouchableOpacity className="bg-blue-800 items-center rounded-lg w-32">
          <Text className="p-2 font-medium text-white">Exchange</Text>
        </TouchableOpacity>
      </View>
      <View className="w-1/2 items-center justify-center">
        <Image
          source={require("../assets/g10.png")}
          alt="burger illustration"
          style={{ width: 140, height: 140, resizeMode: "contain" }}
        />
      </View>
    </View>
  );
};

export default ExchangeCard;
