import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { COLOR, SIZES, DATA } from "../constants/index";
import LightCard from "../components/LightCard/LightCard";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  const [Items, setItems] = useState(DATA);
  const [notFound, setNotFound] = useState(false);
  const searchHandler = (value) => {
    const foundItems = DATA.filter((item) =>
      item.name.toLowerCase().startsWith(value.toLowerCase())
    );
    if (foundItems.length <= 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
      setItems(foundItems);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchItems}>
          <Ionicons style={styles.icon} name="search" size={24} color="white" />
          <TextInput
            placeholder="Search Item"
            placeholderTextColor={COLOR.mainColor}
            style={{ color: COLOR.mainColor }}
            onChangeText={searchHandler}
          />
        </View>
      </View>
      <View style={styles.flatList}>
        {notFound ? (
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              color: COLOR.mainColor,
            }}
          >
            Not Found Item
          </Text>
        ) : (
          <FlatList
            data={Items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <LightCard data={item} id={item.id.toString()} />
            )}
            initialNumToRender={10}
            windowSize={2}
            // numColumns={2}
            getItemLayout={(data, index) => ({
              length: 100,
              offset: 100 * index,
              index,
            })}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small + 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: COLOR.bg,
    paddingBottom: SIZES.small + 30,
  },
  flatList: {
    flex: 1,
    width: "100%",
    marginTop: 25,
  },
  searchContainer: {
    paddingTop: 50,
    width: "100%",
    alignItems: "center",
  },
  searchItems: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#00000090",
    padding: 10,
    borderRadius: 20,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
