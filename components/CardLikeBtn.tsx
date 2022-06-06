//price: "249", //CardHeader
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface CardLikeBtnprops {
  likes?: string;
}
const CardLikeBtn = ({ likes }: CardLikeBtnprops) => {
  //console.log(price);
  return (
    <View style={styles.viewPartie}>
      <MaterialCommunityIcons name="cards-heart" color="blue" size={13} />
      <Text style={styles.textLikes}>{likes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles des View - Flex
  viewPartie: {
    flex: 1,

    textAlign: "right",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  //styles des éléments text
  textLikes: {
    paddingLeft: 5,
    paddingRight: 5,
    color: "blue",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CardLikeBtn;
