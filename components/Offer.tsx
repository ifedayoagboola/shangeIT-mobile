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
    <View className="w-full ">
      <TouchableOpacity className="flex-row items-center justify-start gap-4">
        <View className="w-[50px] h-[50px]">
          <Image
            source={require("../assets/Ellipse 23.png")}
            alt="burger illustration"
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View className="w-[80%]">
          <Text className="border-b border-gray-100 py-3 text-sm">
            {userId} wants to exchange
            <Text className="font-semibold">
              {currency}
              {amount}
            </Text>
            to <Text className="font-semibold">{toCurrency}</Text> at{" "}
            <Text className="font-semibold">{rate}</Text> rate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Offer;
