import React from "react";

import { ImageContainer, Imaged, Header } from "./Landing.styles";

import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const landing = () => {
  const navigation: any = useNavigation();

  const onPress = () => {};

  return (
    <View style={styles.container}>
      <ImageContainer>
        <Imaged source={require("../../assets/landing-dog.png")} />
      </ImageContainer>
      <View style={styles.screen}>
        <Header>
          <Text style={styles.title}>Find a Partner for Your Pet</Text>
        </Header>
        <View style={styles.body}>
          <Text style={styles.subtitle}>
            <Text style={styles.subtitleText}>Get Started</Text>
            <AntDesign
              name="doubleright"
              style={styles.icon}
              size={14}
              color="white"
            />
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              color="#fff"
              style={[styles.button, styles.buttonPrimary]}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
            </Button>
            <Button
              color="#000"
              style={[styles.button, styles.buttonSecondary]}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default landing;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#B2E0DA",
  },
  screen: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    marginTop: 45,
    paddingHorizontal: 10,
    width: "65%",
    lineHeight: 50,
    color: "#4B465D",
    fontFamily: "Poppins_700Bold",
  },
  body: {
    flex: 0.35,
    backgroundColor: "#47456D",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  subtitle: {
    marginTop: 20,
    padding: 30,
    fontSize: 15,
    color: "#dadada",
    fontFamily: "Poppins_400Regular",
  },
  subtitleText: {
    marginRight: 20,
  },
  icon: {
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 25,
    textTransform: "lowercase",
  },
  buttonPrimary: {
    flex: 1,
    backgroundColor: "#5E5D8D",
    marginRight: 20,
  },
  buttonSecondary: {
    flex: 0.3,
    backgroundColor: "#FFD3A4",
  },
});
