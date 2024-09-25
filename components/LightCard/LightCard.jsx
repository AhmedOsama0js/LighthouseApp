import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import React from "react";
import { COLOR, SIZES } from "../../constants/index";
import { useNavigation } from "expo-router";

export default function LightCard({ data, id }) {
  const navigate = useNavigation();

  const pressHandler = () => {
    navigate.navigate("product", { data });
  };
  return (
    <SafeAreaView key={id} style={styles.container}>
      <TouchableOpacity onPress={pressHandler} style={styles.touch}>
        <Image style={styles.image} source={data.img} />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>{data.name}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>{`${data.price} $`}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.iconData}>
          <Text style={styles.iconText}>{data.comments}</Text>
          <FontAwesome5 name="comment" size={24} color="white" />
        </View>
        <View style={styles.iconData}>
          <Text style={styles.iconText}>{data.views}</Text>
          <SimpleLineIcons name="eye" size={24} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d4af3730",
    borderRadius: 12,
    marginBottom: SIZES.xLarge,
    marginHorizontal: SIZES.small + 5,
    padding: 12,
  },
  touch: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: SIZES.medium,
  },
  title: {
    width: "100%",
    paddingVertical: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: SIZES.large + 8,
    fontWeight: "bold",
    color: COLOR.mainColor,
    // textShadowColor: COLOR.good,
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconData: {
    backgroundColor: "#ccc3",
    borderRadius: SIZES.medium,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    color: COLOR.mainColor,
    fontSize: SIZES.medium + 2,
    fontWeight: "bold",
  },
  price: {
    marginBottom: 15,
  },
  priceText: {
    textAlign: "center",
    color: COLOR.good,
    fontSize: SIZES.xLarge + 2,
    fontWeight: "bold",
    textShadowColor: COLOR.mainColor,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});
