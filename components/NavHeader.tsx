import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NavHeader = () => {
  return (
    <View className="flex-row items-center justify-between">
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
