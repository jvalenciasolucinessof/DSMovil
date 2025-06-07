import { View, Text, Image } from "react-native";
import React from "react";


const image = {
  DBZ: require("../../../assets/db.png"),
  MV: require("../../../assets/bannerMV.jpg"),
  PK: require("../../../assets/pokeball-dark.png"),
  RM: require("../../../assets/bannerRM.jpg"), 
}
const PokeBallBg = ({ style,tipoImg= 'PK' }) => {
  return (
    <Image
    source={image[tipoImg]}
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
