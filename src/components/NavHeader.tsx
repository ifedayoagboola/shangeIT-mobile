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
    <SafeAreaView>
      <View className="flex flex-row items-center justify-between">
        <Image
          source={require("../assets/face.png")}
          alt="burger illustration"
          style={{ width: 50, height: 50 }}
        />
        <Text className="text-2xl font-semibold">Home</Text>
        <View className="border border-gray-200 p-4 rounded-2xl">
          <Image
            source={require("../assets/outline.png")}
            alt="burger illustration"
            style={{ width: 17, height: 20 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavHeader;
