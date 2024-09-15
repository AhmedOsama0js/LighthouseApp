import { PixelRatio } from "react-native";

const fontScale = PixelRatio.getFontScale();

export const SIZES = {
  small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xLarge: 24 * fontScale,
};

export const COLOR = {
  mainColor: "#fff",
  bg: "#343434",
  gray: "#CCC",
  good: "#d4af37",
};
