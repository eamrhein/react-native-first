import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.main}>
      <Text style={{ fontSize: 30, fontWeight: "bold", margin: 10 }}>
        Restraunt 411
      </Text>
      <View
        style={{ flex: 1, backgroundColor: "white", borderWidth: 0.5, borderRadius: 10 }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 10,
    textAlign: "center"
  }
});
