import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLOR } from "../constants/index.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Product({ route }) {
  const [like, setLike] = useState(false);
  const { data } = route.params;
  const navigate = useNavigation();

  const goBackHandler = () => {
    navigate.goBack();
  };
  const likeHandler = () => {
    setLike(!like);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={data.img} />
      </View>
      <TouchableOpacity onPress={goBackHandler} style={styles.backPage}>
        <Ionicons name="chevron-back-sharp" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={likeHandler} style={styles.likeItem}>
        <AntDesign
          name={like ? "heart" : "hearto"}
          size={24}
          color={like ? COLOR.good : "#fff"}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bg,
    alignItems: "center",
    // justifyContent: "center",
    position: "relative",
  },
  imageContainer: {
    height: "50%",
    width: "95%",
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backPage: {
    position: "absolute",
    top: 30,
    left: 20,
    padding: 10,
    backgroundColor: "#00000070",
    borderRadius: 100,
  },
  likeItem: {
    position: "absolute",
    top: 30,
    right: 20,
    padding: 10,
    backgroundColor: "#00000070",
    borderRadius: 100,
  },
});
