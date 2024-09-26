import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLOR } from "../../constants/index";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ProductDetails({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.nameAPrice}>
        <Text style={{ fontSize: 25, color: COLOR.mainColor }}>
          {data.name}
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: COLOR.good,
            textShadowRadius: 5,
            textShadowColor: COLOR.mainColor,
            textShadowOffset: { width: 1, height: 1 },
          }}
        >
          {data.price}$
        </Text>
      </View>
      <View style={styles.ratingContainer}>
        <AntDesign
          style={styles.goldText}
          name="star"
          size={24}
          color="black"
        />
        <Text style={styles.goldText}>{data.rating}</Text>
        <Text style={styles.goldText}>{`(${data.comments} Review)`}</Text>
      </View>
      <View>
        <Text
          style={{ fontSize: 20, color: COLOR.mainColor, paddingBottom: 5 }}
        >
          Details:
        </Text>
        <Text style={{ fontSize: 16, color: COLOR.gray }}>
          {data.description}
        </Text>
      </View>
      <View style={[styles.nameAPrice, { marginVertical: 10 }]}>
        <Text
          style={{
            fontSize: 20,
            color: COLOR.mainColor,
          }}
        >
          Dimensions:
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: COLOR.mainColor,
            backgroundColor: `${COLOR.good}70`,
            padding: 5,
            borderRadius: 8,
          }}
        >{`(width ${data.dimensions.width})`}</Text>
        <Text
          style={{
            fontSize: 16,
            color: COLOR.mainColor,
            backgroundColor: `${COLOR.good}70`,
            padding: 5,
            borderRadius: 8,
          }}
        >{`(height ${data.dimensions.height})`}</Text>
      </View>
      <View style={styles.weightWattage}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: COLOR.mainColor }}>weight:</Text>
          <Text style={{ marginLeft: 5, fontSize: 18, color: COLOR.good }}>
            {data.weight}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: COLOR.mainColor }}>wattage:</Text>
          <Text style={{ marginLeft: 5, fontSize: 18, color: COLOR.good }}>
            {data.wattage}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20, color: COLOR.mainColor }}>
          specialFeatures:
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          {data.specialFeatures.map((m, i) => (
            <Text
              key={i}
              style={{ marginLeft: 5, fontSize: 16, color: COLOR.gray }}
            >{`${i + 1}- ${m}`}</Text>
          ))}
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          width: "100%",
          flexDirection: "row",
          alignContent: "center",
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontSize: 20, color: COLOR.mainColor }}>Material:</Text>
        <Text style={{ marginLeft: 5, fontSize: 20, color: COLOR.gray }}>
          {data.material}
        </Text>
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 16,
            color: COLOR.mainColor,
            backgroundColor: `${COLOR.good}70`,
            borderRadius: 8,
            padding: 5,
          }}
        >
          Warranty: {data.warranty}
        </Text>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 16,
            color: COLOR.mainColor,
            backgroundColor: `${COLOR.good}80`,
            borderRadius: 8,
            padding: 5,
          }}
        >
          Date Added: {data.dateAdded}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "100%",
    padding: 15,
    backgroundColor: "#00000090",
    marginTop: -65,
    gap: 15,
  },
  nameAPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    // paddingVertical: 10,
  },
  goldText: {
    fontSize: 20,
    color: COLOR.good,
  },
  weightWattage: {
    flexDirection: "row",
    justifyContent: "space-around",
    // paddingVertical: 10,
  },
});
