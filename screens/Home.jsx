import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { COLOR, SIZES, DATA } from "../constants/index";
import LightCard from "../components/LightCard/LightCard";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatList}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <LightCard data={item} id={item.id} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small + 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  flatList: {
    flex: 1,
    width: "100%",
   marginTop:25
  }
});
