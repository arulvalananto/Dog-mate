import React from "react";
import { StyleSheet, View } from "react-native";
import Landing from "./src/screens/Landing.screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
      <Landing />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
