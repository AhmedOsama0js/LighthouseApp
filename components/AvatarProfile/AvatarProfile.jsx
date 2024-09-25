import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import avatar from "../../assets/images/stock-photo-avatar-male-in-glasses-people-icon-character-cartoon-33074-removebg-preview.png";
import { COLOR } from "@/constants";

export default function AvatarProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.img} source={avatar} />
      </View>
      <Text style={styles.text}>AvatarProfile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  containerImage: {
    backgroundColor: "#33333350",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    borderStyle: "solid",
    borderColor: COLOR.mainColor,
    borderWidth: 2,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLOR.mainColor,
    textShadowColor: "black",
    textShadowOffset: { width: 5, height: 5 },
  },
});
