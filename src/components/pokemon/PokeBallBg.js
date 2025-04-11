import { View, Text, Image } from "react-native";
import React from "react";

const PokeBallBg = ({ style }) => {
  const pokeBallImage = require("../../../assets/pokeball-dark.png");
  return (
    <Image
      source={pokeBallImage}
      style={[
        {
          width: 300,
          height: 300,
          opacity: 0.3
        },
        style,
      ]}
    />
  );
};

export default PokeBallBg;
