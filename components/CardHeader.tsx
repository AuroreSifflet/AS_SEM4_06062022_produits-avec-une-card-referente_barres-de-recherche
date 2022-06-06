//price: "249", //CardHeader
import * as React from "react";

import { Text, View, StyleSheet } from "react-native";

interface CardHeaderprops {
  price: string;
}
const CardHeader = ({ price }: CardHeaderprops) => {
  //console.log(price);
  return (
    <View style={styles.viewPartie}>
      <Text style={styles.textService}>{price} $</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles des View - Flex
  viewPartie: {
    flex: 1,
    borderColor: "blue",
    borderWidth: 1,
    maxHeight: 50,
    minHeight: 50,
    justifyContent: "center",
  },

  //styles des éléments text
  textService: {
    paddingRight: 10,
    textAlign: "right",
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CardHeader;
