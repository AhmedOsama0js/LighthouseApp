import { View, StyleSheet, Image, Animated } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import { COLOR, SIZES } from "../../constants/index";
import nft1 from "../../assets/images/light/24.jpeg";
import nft2 from "../../assets/images/light/12.jpeg";
import nft3 from "../../assets/images/light/13.jpeg";

export default function WelcomeImageContainer() {
  const image = [nft1, nft2, nft3];
  const duration = 1000;
  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 100 })
  ).current;

  const imagesAnimatedHandler = useCallback(() => {
    Animated.sequence([
      Animated.timing(fadeImagesAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.spring(moveImagesAnimation, {
        toValue: { x: 0, y: 0 },
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeImagesAnimation, moveImagesAnimation]);

  useEffect(() => {
    imagesAnimatedHandler();
  }, [imagesAnimatedHandler]);

  return (
    <Animated.View
      style={[
        styles.imageContainer,
        {
          opacity: fadeImagesAnimation,
          transform: moveImagesAnimation.getTranslateTransform(),
        },
      ]}
    >
      {image.map((img, i) => (
        <View
          key={i}
          style={[styles.imageCard, i === 1 && { top: SIZES.medium + 18 }]}
        >
          <Image style={styles.image} source={img} />
        </View>
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    top: SIZES.medium,
    flexDirection: "row",
    gap: SIZES.small,
  },
  imageCard: {
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLOR.gray,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: SIZES.medium,
  },
});
