import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";
import color from "../../constants/color.js";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebaseConfig.js";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const navigation = useNavigation();

  const handleRegister = () => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, { displayName: name }).then(() => {
        Alert.alert("Registro exitoso", "Usuario registrado correctamente");
        navigation.reset({
          index: 0,
          routes: [{ name: "login" }],
        });
      }).catch((error) => {
        Alert.alert("Error", error.message);
      });
    })
    .catch((error) => {
      Alert.alert("Error", error.message);
    });
  };
  
  return (
    <View style={styles.container}>
      {/* <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/goku-dance.gif")}
          style={styles.logo}
          contentFit="contain"
        />
      </View> */}
      <Text style={styles.title}>Registrate</Text>
      <View style={styles.inputContainer}>
        <Icon name="account-outline" size={20} color={color.primary2} />
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="email-outline" size={20} color={color.primary2} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock-outline" size={20} color={color.primary2} />
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    alignItems: "center",
    backgroundColor: color.backgroud,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: color.primary2,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    borderColor: color.primary2,
    borderWidth: 1.5,
    marginTop: 30,
    width: "80%",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: color.backgroud,
  },
  button: {
    backgroundColor: color.primary2,
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    width: "80%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: color.text2,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    color: color.text,
  },
  textLink: {
    fontSize: 18,
    color: color.primary2,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: 200,
    height: 100,
    top: -100,
  },
  logo: {
    width: "200",
    height: "200",
  },
});

export default RegisterScreen;
