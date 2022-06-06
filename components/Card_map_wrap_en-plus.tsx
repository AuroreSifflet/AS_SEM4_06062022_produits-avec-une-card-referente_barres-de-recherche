import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import dataCard from "../js/data.js";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

interface Cardprops {
  price: string;
  title: string;
  desc: string;
  likes?: string;
  photo: any;
  id: string;
  size: string;
}
//extension esLint

const Card = () => {
  return (
    <View style={styles.containerCard}>
      {dataCard.map((val) => {
        return (
          <View style={styles.viewCard} key={val.id}>
            <CardHeader price={val.price} />
            <CardBody title={val.title} desc={val.desc} photo={val.photo} />
            <CardFooter likes={val.likes} size={val.size} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  //styles des View - Flex
  containerCard: {
    // margin: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "blue",
    borderWidth: 1,
  },
  viewCard: {
    backgroundColor: "#fff",
    marginBottom: 10,
    width: "44%",
    borderColor: "blue",
    borderWidth: 1,
  },
  //styles des éléments text
  textsize: {
    paddingLeft: 10,
    paddingRight: 10,
    color: "gray",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Card;
