import React from "react";
import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import Link from "./Link";

const ExchangeCard = () => {
  return (
    <View className="bg-[#E0E1F6] rounded-xl flex flex-row items-center justify-center p-4 m-auto w-full">
      <View className="space-y-4 flex-1 justify-center items-start">
        <Image
          source={require("../assets/Polygon 1.png")}
          alt="burger illustration"
        />
        <Text className="text-sm text-black text-left w-full">
          Let’s exchange your currency in no time
        </Text>

        <TouchableOpacity className="bg-blue-800 items-center rounded-lg w-32">
          <Text className="p-2 font-medium text-white">Exchange</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 items-center justify-center">
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
