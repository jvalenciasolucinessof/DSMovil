import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import color from "../../constants/color.js";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig.js";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { globalStyles } from "../../constants/CustomTheme.js";

const LoginScreen = () => {
  const [email, setEmail] = useState("1@1.com");
  const [password, setPassword] = useState("123456");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === "") {
      Alert.alert('❌❌❌', 'El correo no puede ser vacio')
      return false
    }
    if (password === "") {
      Alert.alert('❌❌❌', 'El Contraseña no puede ser vacia')
      return false
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      })
      .catch((error) => {
        Alert.alert("❌❌❌", error.code);
      });
  };
  return (
    <View style={globalStyles.containerLogin}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/goku-dance.gif")}
          style={styles.logo}
          contentFit="contain"
        />
      </View>
      <Text style={styles.title}>Inicia sesion</Text>
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color={color.primary2} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color={color.primary2} />
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesion</Text>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.text}>No tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={styles.textLink}> Registrate </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    resizeMode: "contain",
  },
});
export default LoginScreen;
