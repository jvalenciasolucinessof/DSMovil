import React, { use, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {useNavigation} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import color  from '../constants/color.js'
const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("main");
    }, 3000)
    return () => clearTimeout(timer);

  }, [navigation]);

  return (
    <LinearGradient colors={ color.gradient1 } style={style.container}>
        <Image source={require('../../assets/goku-dance.gif')} style={style.logo} />
        <Text style={style.text}>Dame tu energia para la henki-dama</Text>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo:{
    width : 100,
    height:200
  },
  text:{
    color:color.text,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default SplashScreen;
