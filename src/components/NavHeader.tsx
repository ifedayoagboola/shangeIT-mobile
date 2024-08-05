import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const NavHeader = () => {
  return (
    <View className="flex flex-row items-center justify-between bg-red-600 mb-8">
      <TouchableOpacity>
        <Image
          source={require("../assets/face.png")}
          alt="burger illustration"
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>

      <Text className="text-2xl font-semibold">Home</Text>

      <TouchableOpacity className="border border-gray-200 p-4 rounded-2xl">
        <Image
          source={require("../assets/Notification.png")}
          alt="burger illustration"
          style={{ width: 17, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavHeader;
