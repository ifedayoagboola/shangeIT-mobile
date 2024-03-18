import React from "react";
import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import Link from "./Link";

const ExchangeCard = () => {
  return (
    <View className="bg-[#E0E1F6] rounded-xl flex flex-row items-center justify-center p-4 m-auto">
      <View className="space-y-4 w-1/2">
        <Image
          source={require("../assets/Polygon 1.png")}
          alt="burger illustration"
        />

        <Text className="text-sm text-black text-left">
          Let’s exchange your currency in no time
        </Text>
        <View className="">
          <TouchableOpacity className="bg-blue-800 flex items-center rounded-lg">
            <Text className="p-3 font-medium text-white">Exchange</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-1/2">
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
