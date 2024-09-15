import React, { useCallback, useEffect, useRef } from "react";
import { StyleSheet, Animated, Text } from "react-native";
import { COLOR, SIZES } from "../../constants/index";

export default function WelcomeTextContainer() {
  const duration = 1000;
  const delay = duration + 300;
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;

  const textAnimatedHandler = useCallback(() => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  }, [textAnimatedHandler]);

  useEffect(() => {
    textAnimatedHandler();
  }, [textAnimatedHandler]);

  return (
    <Animated.View
      style={[styles.textContainer, { opacity: fadeTextAnimation }]}
    >
      <Text style={styles.mainText}>Find your home lighting</Text>
      <Text style={styles.subText}>
        text good function rely ahned osama awad elsaeed awad
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    margin: SIZES.small,
    padding: SIZES.small,
    marginVertical: SIZES.xLarge + 6,
    paddingTop: 40,
    
  },
  mainText: {
    fontWeight: "700",
    fontSize: SIZES.xLarge + 6,
    textAlign: "center",
    color: COLOR.mainColor,
    
  },
  subText: {
    textAlign: "center",
    margin: SIZES.large,
    color: COLOR.good,
    fontSize: SIZES.large,
  },
});
