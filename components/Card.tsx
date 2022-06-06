import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TextInput } from "react-native";
import dataCard from "../js/data.js";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

/* interface Cardprops {
  price: string;
  title: string;
  desc: string;
  likes?: string;
  photo: any;
  id: string;
  size: string;
} */
type Props = {
  onChangeText: (text: string) => void;
  search: string;
};
const RenderHeader = ({ onChangeText, search }: Props) => {
  return (
    <View
      style={{
        backgroundColor: "#FF337A",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
      }}
    >
      <TextInput
        value={search}
        onChangeText={onChangeText}
        style={{ backgroundColor: "pink" }}
      />
    </View>
  );
};
/* Ajouter un état
L'étape suivante consiste à ajouter un état à l'application. Nous ajoutons un état à une application React en utilisant le le hook State — useState. */
const Card = () => {
  const [search, setNewSearch] = useState<string>("");

  const filtered = !search
    ? dataCard
    : dataCard.filter(
        (dataCard) => dataCard.title.includes(search)
        // dataCard.title.toLowerCase().includes(search.toLowerCase())
      );
  //console.log(filtered);

  return (
    /*     <View style={styles.containerCard}>
      {dataCard.map((val) => {
        return (
          <View style={styles.viewCard} key={val.id}>
            <CardHeader price={val.price} />
            <CardBody title={val.title} desc={val.desc} photo={val.photo} />
            <CardFooter likes={val.likes} size={val.size} />
          </View>
        );
      })}
    </View> */

    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <RenderHeader
            onChangeText={(text: string) => setNewSearch(text)}
            search={search}
          />
        }
        columnWrapperStyle={{ justifyContent: "space-between" }}
        style={styles.flatlist}
        numColumns={2}
        data={filtered}
        renderItem={({ item }) => (
          <View style={styles.viewCard} key={item.id}>
            <CardHeader price={item.price} />
            <CardBody title={item.title} desc={item.desc} photo={item.photo} />
            <CardFooter likes={item.likes} size={item.size} />
          </View>
        )}
      />
    </View>
  );
};

{
  /*  <FlatList
    data={[
      {key: 'Devin'},
      {key: 'Dan'},
      {key: 'Dominic'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ]}
    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
  /> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    paddingTop: 52,
    paddingHorizontal: 12,

    //spaddingHorizontal: 10,
  },
  flatlist: {
    //paddingHorizontal: 20,
  },
  //styles des View - Flex
  /*  containerCard: {
    // margin: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "blue",
    borderWidth: 1,
  }, */
  viewCard: {
    backgroundColor: "#fff",
    //marginRight: 10,
    width: "48%",
    borderColor: "blue",
    borderWidth: 1,
    alignContent: "center",
    marginBottom: 20,
  },
  //styles des éléments text
  textsize: {
    paddingLeft: 10,
    paddingRight: 5,
    color: "gray",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Card;
