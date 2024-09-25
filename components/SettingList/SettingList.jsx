import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLOR } from "../../constants/index.js";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function SettingList() {
  const list = [
    { title: "Account Management", icon: "account-edit" },
    { title: "Notifications Settings", icon: "bell" },
    { title: "Privacy and Security", icon: "shield-lock" },
    { title: "Language and Region", icon: "translate" },
    { title: "Storage and Data Management", icon: "database" },
    { title: "Help and Support", icon: "help-circle" },
  ];

  return (
    <View style={styles.container}>
      {list.map((item, index) => (
        <View
          key={index}
          style={[
            styles.divItem,
            index === list.length - 1 ? { borderBottomWidth: 0 } : {},
          ]}
        >
          <View style={styles.itemContent}>
            <MaterialCommunityIcons
              name={item.icon}
              size={35}
              color={COLOR.good}
            />
            <Text style={styles.text}>{item.title}</Text>
          </View>
          <Entypo name="chevron-right" size={25} color="white" />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  divItem: {
    padding: 15,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    color: COLOR.mainColor,
  },
});
