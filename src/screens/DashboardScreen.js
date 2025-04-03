import { View, Text, Image, Pressable, Alert } from "react-native";
import React from "react";
import { TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import color from "../constants/color";
import BottonImage from "../components/BottonImage.js";
import { globalStyles } from "../constants/CustomTheme.js";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
const DashboardScreen = () => {
  const navigation = useNavigation();

  const handelLogout = () => {
    signOut(auth).then(()=>{navigation.replace('login')}).catch( err => Alert.alert('Error','No se pudo cerrar la sesion'))
  }
  return (
    <SafeAreaView style={globalStyles.containerDashboard}>
      <BottonImage titleimage="MV" onPress={() => navigation.navigate("movies")} />
      <BottonImage titleimage="PK" onPress={() => navigation.navigate("movies")} />
      <BottonImage titleimage="RM" onPress={() => navigation.navigate("movies")} />
      <BottonImage titleimage="DBZ" onPress={() => navigation.navigate("movies")} />
        <TouchableOpacity onPress={handelLogout}>
          <Text style={styles.textLink}> Cerrar sesion </Text>
        </TouchableOpacity>
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
