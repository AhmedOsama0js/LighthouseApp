import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ButtonsComponent({
  pressHandler,
  icon,
  styleText,
  title,
  styleButton,
}) {
  const renderComponentIconOrText = () => {
    if (!icon) {
      return <Text style={styleText}>{title && title}</Text>;
    } else {
      return icon;
    }
  };

  return (
    <TouchableOpacity onPress={pressHandler} style={styleButton}>
      {renderComponentIconOrText()}
    </TouchableOpacity>
  );
}
