import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserScreen = () => {
  return (
    <View style={style.container}>
      <Text>UserScreen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});

export default UserScreen;
