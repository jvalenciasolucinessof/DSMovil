import React, { use, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {useNavigation} from "@react-navigation/native";

const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("main");
    }, 3000)
    return () => clearTimeout(timer);

  }, [navigation]);

  return (
    <View style={style.container}>
        <Image source={require('../../assets/goku-dance.gif')} style={{width : 100, height:200}} />
        <Text style={{fontSize:30, color: '#f1940f' }}>Dame tu energia para la henki-dama</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
