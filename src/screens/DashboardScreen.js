import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import color from "../constants/color";
import BottonImage from "../components/BottonImage.js";
import { globalStyles } from "../constants/CustomTheme.js";
const DashboardScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globalStyles.containerDashboard}>
      <BottonImage
        titleimage="MV"
        onPress={() => navigation.navigate("movies")}
      />
      <BottonImage
        titleimage="PK"
        onPress={() => navigation.navigate("movies")}
      />
      <BottonImage
        titleimage="RM"
        onPress={() => navigation.navigate("movies")}
      />
      <BottonImage
        titleimage="DBZ"
        onPress={() => navigation.navigate("movies")}
      />
      {/* <BottonImage
        titleimage="DBZ"
        onPress={() => navigation.navigate("main")}
      /> */}
      {/* <Pressable onPress={() => navigation.navigate("main")}> */}
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.textLink}> Cerrar sesion </Text>
        </TouchableOpacity>
      {/* </Pressable> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  textLink: {
    marginTop: 50,
    fontSize: 18,
    color: color.primary2,
    fontWeight: "bold",
  },
});

export default DashboardScreen;
