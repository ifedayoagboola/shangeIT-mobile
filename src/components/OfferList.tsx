import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Offer from "./Offer";
import Screen from "./Screen";

import ellipseImage from "../assets/Ellipse-23.png";

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
      userId: 2,
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
      userId: 2,
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
      userId: 2,
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
      userId: 2,
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
      userId: 2,
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
      userId: 2,
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
      userId: 2,
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
      userId: 2,
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
  return (
    <FlatList
      data={data.data}
      renderItem={({ item }) => (
        <Offer
          userId={item.userId}
          fromCurrency={item.fromCurrency}
          toCurrency={item.toCurrency}
          rate={item.rate}
          amount={item.amount}
          image={item.image}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default OfferList;