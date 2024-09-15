import { StyleSheet, Animated, SafeAreaView, Text } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import { COLOR, SIZES } from "../constants/index";
import ButtonComponent from "../components/ButtonsComponent/ButtonsComponent";
import { useNavigation } from "@react-navigation/native";
import WelcomeImageContainer from "../components/WelcomeImageContainer/WelcomeImageContainer";
import WelcomeTextContainer from "../components/WelcomeTextContainer/WelcomeTextContainer";

export default function Welcome() {
  const navigation = useNavigation();
  const moveButtonAnimation = useRef(new Animated.Value(1)).current;
  const duration = 1000;
  const delay = duration + 300;

  const ButtonAnimatedHandler = useCallback(() => {
    Animated.spring(moveButtonAnimation, {
      toValue: 0,
      friction: 4,
      delay,
      useNativeDriver: true,
    }).start();
  }, [ButtonAnimatedHandler]);

  const pressHandler = () => {
    navigation.navigate("home");
  };

  useEffect(() => {
    ButtonAnimatedHandler();
  }, [ButtonAnimatedHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>Lighthouse</Text>
      <WelcomeImageContainer />
      <WelcomeTextContainer />
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [
              {
                translateY: moveButtonAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      >
        <ButtonComponent
          title="get start"
          pressHandler={pressHandler}
          styleButton={styles.buttons}
          styleText={styles.buttonText}
        />
      </Animated.View>
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
    backgroundColor: COLOR.bg,
  },
  mainText: {
    fontWeight: "900",
    fontSize: SIZES.xLarge + 10,
    textAlign: "center",
    color: COLOR.mainColor,
    marginBottom: 20,
    textShadowColor: COLOR.good,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: SIZES.xLarge + 10,
    marginVertical: SIZES.xLarge,
  },
  buttons: {
    backgroundColor: COLOR.mainColor,
    width: 240,
    alignItems: "center",
    borderRadius: SIZES.medium,
    padding: SIZES.small + 6,
  },
  buttonText: {
    color: COLOR.good,
    fontWeight: "bold",
    fontSize: SIZES.medium + 8,
  },
});
