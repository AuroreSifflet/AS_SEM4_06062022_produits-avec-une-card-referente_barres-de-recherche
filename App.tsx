import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as React from "react";
// import dataCard from "./js/data.js";
// import CardHeader from "./components/CardHeader";
// import CardBody from "./components/CardBody";

// import CardFooter from "./components/CardFooter";
import Card from "./components/Card";

interface CardLikeBtnprops {
  price: string;
  title: string;
  desc: string;
  likes?: string;
  photo: any;
  id: string;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Card
      /* price={price}
            title={title}
            desc={desc}
            photo={photo}
            likes={likes}
            key={id} */
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "red",
  },

  viewCard: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    flex: 1,
  },
});
