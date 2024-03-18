import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface OfferProps {
  userId: number;
  fromCurrency: string;
  toCurrency: string;
  rate: string;
  amount: string;
}

const Offer: React.FC<OfferProps> = ({
  userId,
  fromCurrency,
  toCurrency,
  rate,
  amount,
}) => {
  let currency: string = "";
  switch (fromCurrency) {
    case "Pounds":
      currency = "P";
      break;
    case "Euro":
      currency = "E";
      break;
    case "Naira":
      currency = "N";
      break;
    case "Dollar":
      currency = "$";
      break;
    default:
      break;
  }
  return (
    <TouchableOpacity className="flex flex-row items-center justify-center gap-1 px-2">
      <View className="w-[20%]">
        <Image
          source={require("../assets/Ellipse 23.png")}
          alt="burger illustration"
          style={{ width: 35, height: 35 }}
        />
      </View>
      <Text className="w-[80%] border-b border-gray-100 py-3 text-sm">
        {userId} wants to exchange{" "}
        <Text className="font-semibold">
          {currency}
          {amount}
        </Text>{" "}
        to
        <Text className="font-semibold"> {toCurrency}</Text> at{" "}
        <Text className="font-semibold">{rate}</Text> rate
      </Text>
    </TouchableOpacity>
  );
};

export default Offer;
