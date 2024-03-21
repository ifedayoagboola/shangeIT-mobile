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
    <View className="flex-row items-center justify-center ">
      <View className=" flex-1">
        <TouchableOpacity>
          <Image
            source={require("../assets/face.png")}
            alt="burger illustration"
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        <Text className="text-2xl font-semibold">Home</Text>
      </View>
      <View className="">
        <TouchableOpacity className="border border-gray-200 p-4 rounded-2xl">
          <Image
            source={require("../assets/Notification.png")}
            alt="burger illustration"
            style={{ width: 17, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavHeader;
