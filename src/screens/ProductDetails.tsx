import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Digimon } from "../types/digimon";

type Props = {
  route: { params: { digimon: Digimon } };
};

const ProductDetails: React.FC<Props> = ({ route }) => {
  const { digimon } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: digimon.img }} style={styles.image} />
      <Text style={styles.name}>{digimon.name}</Text>
      <Text style={styles.detail}>{digimon.level}</Text>
      <Text style={styles.detail}>{digimon.attribute}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  detail: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 5,
  },
});
