import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Digimon } from "../types/digimon";

type Props = {
  digimon: Digimon;
  onPress?: () => void;
};

const DigimonCard: React.FC<Props> = ({ digimon, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: digimon.img }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{digimon.name}</Text>
        <Text style={styles.level}>{digimon.level}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DigimonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333333",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  level: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});
