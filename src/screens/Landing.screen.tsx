import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { colors } from "../utils/colors.js";
import { Button } from "react-native-elements";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const landing = () => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onPress = () => {};

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/dog1.gif")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign In" type="outline" />
        <Button title="Sign Up" type="outline" />
      </View>
    </View>
  );
};

export default landing;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: `#B2E0DA`,
    flex: 1,
  },
  imageContainer: {
    flex: 0.7,
  },
  buttonContainer: {
    flex: 0.3,
    backgroundColor: "#47456D",
    borderRadius: 5,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    width: 100,
    height: 100,
  },
  buttonPrimary: {
    backgroundColor: "#47456D",
  },
  buttonText: {
    color: "#fff",
  },
  buttonSecondary: {
    backgroundColor: "#ffd3a4",
  },
});
