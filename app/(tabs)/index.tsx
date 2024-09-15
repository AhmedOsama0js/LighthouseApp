import React from 'react'
import { useFonts } from "expo-font"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../../screens/Home"
import Welcome from "../../screens/Welcome"
import Product from "../../screens/Product"
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [fontLoaded] = useFonts({
    InterBold: require("../../assets/fonts/Harmattan-SemiBold.ttf")
  })

  if (!fontLoaded) return null

const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style='light' animated={true} />
      <Stack.Navigator
        initialRouteName='welcome'
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="product" component={Product} />
      </Stack.Navigator>
      </>
  );
}

