//price: "249", //CardHeader
import * as React from "react";

import { Text, View, StyleSheet, Image } from "react-native";
/* id: "1",
brand: "Lidl",
title: "Taglia",
desc: "Baskets TGL EU ",
price: "249",
likes: "2",
size: "45",
stocked: "true",
photo: require("../assets/1.png"), */
interface CardBodyprops {
  photo: any;
  title: string;
  desc: string;
}
const CardBody = ({ title, desc, photo }: CardBodyprops) => {
  //console.log(title);
  return (
    <View style={styles.viewPartie}>
      <View style={styles.viewSectionImage}>
        <Image source={photo} style={styles.Image} />
      </View>
      <View style={styles.viewSection}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDesc}>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPartie: {
    flex: 1,
  },
  viewSection: {
    paddingHorizontal: 5,
    /*  borderColor: "blue",
    borderWidth: 1, */
    paddingVertical: 10,
  },
  viewSectionImage: {
    borderColor: "blue",
    borderWidth: 1,
    maxHeight: 170,
  },
  //styles des éléments text
  textTitle: {
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  textDesc: {
    fontSize: 17,
  },

  Image: {
    resizeMode: "contain",
    alignContent: "center",
    width: "100%",
    maxHeight: 150,
  },
});

export default CardBody;
