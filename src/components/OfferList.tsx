import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Offer from "./Offer";
import Screen from "./Screen";
import ListItemSeparator from "./ListItemSeparator";

// import ellipseImage from "../assets/Ellipse-23.png";
const ellipseImage = require("../assets/Ellipse-23.png");

interface OfferData {
  id: number;
  userId: number;
  fromCurrency: string;
  toCurrency: string;
  rate: string;
  amount: string;
  image?: any;
  createdAt: string;
  updatedAt: string;
}

const data: { count: number; data: OfferData[] } = {
  count: 3,
  data: [
    {
      id: 1,
      userId: 2387,
      fromCurrency: "Dollar",
      toCurrency: "Naira",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:39:53.063Z",
      updatedAt: "2024-03-06T16:39:53.063Z",
    },
    {
      id: 2,
      userId: 3879,
      fromCurrency: "Dollar",
      toCurrency: "Naira",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:41:37.026Z",
      updatedAt: "2024-03-06T16:41:37.026Z",
    },
    {
      id: 3,
      userId: 23092,
      fromCurrency: "Dollar",
      toCurrency: "Dollar",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:41:46.329Z",
      updatedAt: "2024-03-06T16:41:46.329Z",
    },
    {
      id: 4,
      userId: 30492,
      fromCurrency: "Dollar",
      toCurrency: "Dollar",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:41:46.329Z",
      updatedAt: "2024-03-06T16:41:46.329Z",
    },
    {
      id: 5,
      userId: 24509,
      fromCurrency: "Dollar",
      toCurrency: "Dollar",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:41:46.329Z",
      updatedAt: "2024-03-06T16:41:46.329Z",
    },
    {
      id: 6,
      userId: 2237,
      fromCurrency: "Dollar",
      toCurrency: "Dollar",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:41:46.329Z",
      updatedAt: "2024-03-06T16:41:46.329Z",
    },
    {
      id: 7,
      userId: 203972,
      fromCurrency: "Dollar",
      toCurrency: "Dollar",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:41:46.329Z",
      updatedAt: "2024-03-06T16:41:46.329Z",
    },
    {
      id: 8,
      userId: 3479082,
      fromCurrency: "Dollar",
      toCurrency: "Dollar",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:41:46.329Z",
      updatedAt: "2024-03-06T16:41:46.329Z",
    },
    {
      id: 9,
      userId: 30492,
      fromCurrency: "Dollar",
      toCurrency: "Dollar",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:41:46.329Z",
      updatedAt: "2024-03-06T16:41:46.329Z",
    },
    {
      id: 10,
      userId: 24509,
      fromCurrency: "Dollar",
      toCurrency: "Dollar",
      rate: "2060",
      amount: "5500",
      image: ellipseImage,
      createdAt: "2024-03-06T16:41:46.329Z",
      updatedAt: "2024-03-06T16:41:46.329Z",
    },
  ],
};

const OfferList = () => {
  const [offers, setOffers] = useState(data.data);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <FlatList
      style={styles.container}
      data={offers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Offer
          userId={item.userId}
          fromCurrency={item.fromCurrency}
          toCurrency={item.toCurrency}
          rate={item.rate}
          amount={item.amount}
          image={item.image}
          onPress={() => console.log("touched")}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() => {
        setOffers([
          {
            id: 5,
            userId: 24509,
            fromCurrency: "Dollar",
            toCurrency: "Dollar",
            rate: "2060",
            amount: "5500",
            image: ellipseImage,
            createdAt: "2024-03-06T16:41:46.329Z",
            updatedAt: "2024-03-06T16:41:46.329Z",
          },
          {
            id: 6,
            userId: 2237,
            fromCurrency: "Dollar",
            toCurrency: "Dollar",
            rate: "2060",
            amount: "5500",
            image: ellipseImage,
            createdAt: "2024-03-06T16:41:46.329Z",
            updatedAt: "2024-03-06T16:41:46.329Z",
          },
        ]);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
});

export default OfferList;
