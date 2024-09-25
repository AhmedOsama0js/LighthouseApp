import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, Text } from 'react-native';
import {COLOR }from "../../constants/index"

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: styles.container
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? COLOR.good:"#fff"}  />
          ),
          tabBarLabel: ({ focused }) => <Text style={{color: focused ? COLOR.good:"#fff"}}>Home</Text>
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "person" : "person-outline"} color={focused ? COLOR.good:"#fff"} />
          ),
                    tabBarLabel: ({ focused }) => <Text style={{color: focused ? COLOR.good:"#fff"}}>Profile</Text>
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222', 
    borderRadius: 25, 
    position: "absolute", 
    marginHorizontal: 20,
    marginBottom: 2,
    borderTopColor:"transparent"
  }
})