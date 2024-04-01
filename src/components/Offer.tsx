import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./Text";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface OfferProps {
  title?: string;
  subTitle?: string;
  userId?: number;
  fromCurrency?: string;
  toCurrency?: string;
  rate?: string;
  amount?: string;
  image?: any;
  IconComponent?: React.ReactNode;
  onPress?: () => void;
  renderRightActions?: () => React.ReactNode;
  style?: object;
}

const Offer: React.FC<OfferProps> = ({
  title,
  subTitle,
  image,
  IconComponent,
  userId,
  fromCurrency,
  toCurrency,
  rate,
  amount,
  onPress,
  renderRightActions,
  style,
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
    case "Dollars":
      currency = "$";
      break;
    default:
      break;
  }
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={[styles.container, style]}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} numberOfLines={2}>
                {userId} wants to exchange {currency}
                <AppText className="font-bold">{amount}</AppText> to{" "}
                {toCurrency} at <AppText className="font-bold">{rate}</AppText>{" "}
                rate
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 6,
    // backgroundColor: colors.white,
    width: "85%",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "600",
    flexWrap: "wrap",
  },
});

export default Offer;
