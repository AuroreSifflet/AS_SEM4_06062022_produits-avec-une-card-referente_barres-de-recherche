import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import CardLikeBtn from "./CardLikeBtn";
interface CardFooterprops {
  size: string;
  likes?: string;
}
const CardFooter = ({ likes, size }: CardFooterprops) => {
  //console.log(price);
  return (
    <View style={styles.viewPartie}>
      <View style={styles.Viewtextsize}>
        <Text style={styles.textsize}>Taille {size}</Text>
      </View>
      <View style={styles.ViewtLikes}>
        <CardLikeBtn likes={likes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles des View - Flex
  viewPartie: {
    /*  borderColor: "red",
    borderWidth: 1, */
    textAlign: "right",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  Viewtextsize: {
    flex: 3,
  },
  ViewtLikes: {
    flex: 1,
  },
  //styles des éléments text
  textsize: {
    paddingLeft: 10,
    paddingRight: 10,
    color: "gray",
    fontSize: 14,
  },
});

export default CardFooter;
