import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Digimon } from "../types/digimon";
import DigimonCard from "../components/DigimonCard";

const Home = () => {
  const [digimonList, setDigimonList] = useState<Digimon[]>([]);
  const URL = "https://digimon-api.vercel.app/api/digimon";
  const navigation = useNavigation();

  useEffect(() => {
    const fetchDigimons = async () => {
      try {
        const response = await axios.get<Digimon[]>(URL);
        setDigimonList(response.data);
      } catch (error) {
        console.log('Error fetching digimons:', error);
      }
    };

    fetchDigimons();
  }, []);

  const handleDigimonPress = (digimon: Digimon) => {
    navigation.navigate('Details', { digimon });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Digimons</Text>
      <FlatList
        data={digimonList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDigimonPress(item)}>
            <DigimonCard digimon={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
});

export default Home;
