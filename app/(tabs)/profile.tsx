import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from "../../constants/index"
import AvatarProfile from "../../components/AvatarProfile/AvatarProfile"
import SettingList from "../../components/SettingList/SettingList"


export default function profile() {
  return (
    <View style={styles.container} >
      <View style={styles.topContainer}>
        <AvatarProfile />
      </View>
      <View style={styles.settingList}>
        <SettingList/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:COLOR.bg
  },
  topContainer: {
    height: '50%',
    width:"100%",
    backgroundColor: COLOR.good,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: "center",
    justifyContent:"center"
  },
  settingList: {
    backgroundColor: "#00000080",
    height: "45%",
    // height:"auto",
    width: "85%",
    borderStyle: "solid",
    borderColor: COLOR.mainColor,
    borderWidth: 1,
    marginTop: -65,
    borderRadius:18
  }
})