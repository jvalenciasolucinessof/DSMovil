import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Image source={require('../../assets/icon.png')} style={{resizeMode:"repeat"}}/>
      <Text>HomeScreen</Text>
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

export default HomeScreen;
