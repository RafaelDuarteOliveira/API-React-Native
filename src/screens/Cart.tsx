import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 22,
  },
});
