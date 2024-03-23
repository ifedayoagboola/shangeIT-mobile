import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
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
    case "Dollar":
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
              <AppText style={styles.title}>
                {userId} wants to exchange {currency}
                {amount} to {toCurrency} at {rate} rate
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
    paddingVertical: 10,
    backgroundColor: colors.white,
    width: "90%",
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
    fontWeight: "500",
  },
});

export default Offer;
