import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext.js";
import color from "../../constants/color.js";
import ModalEdit from "../../components/auth/ModalEdit.js";
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebaseConfig.js";
import { showMessage } from "react-native-flash-message";
import * as ImagePicker from "expo-image-picker";
import ModalImagePicker from "../../components/auth/ModalImagePicker.js";

const CustomScreen = () => {
  const safeArea = useSafeAreaInsets();
  const navigation = useNavigation();
  const { user, setUser } = useAuth();
  // const defaultImage = require('../../../assets/userImage.jpg');
  const defaultImage =
    "https://icon-library.com/images/default-user-icon/default-user-icon-3.jpg";

  const [imageUri, setImageUri] = useState(null);

  const [modalVisible, setModalVisible] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [isImageModalVisible, setModalImageVisible] = useState("");

  const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/daalcja1j/image/upload`;
  const UPLOAD_PRESET = "JVALENCIA_SS";

  useEffect(() => {
    // console.log(user.photoURL)
    // console.log('user', JSON.stringify(user, null, 2))
    if (user && user.photoURL) {
      setImageUri(user.photoURL);
    } else {
      setImageUri(defaultImage);
    }
  }, [user]);

  const handleChooseImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          `Permiso denegado`,
          "No cuentas con el permiso para acceder a la galeria"
        );
        return false;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1,
        base64: true,
      });
      if (result.canceled) {
        Alert.alert(`Cancelado`, "No se selecciono ninguna imagen");
        return false;
      }

      const imageBase64 = result.assets[0].base64;
      const imageType = result.assets[0].type || "image/jpeg";

      const base64String = `data:${imageType};base64,${imageBase64}`;
      setFieldValue(base64String);
      setModalVisible(true);
    } catch (error) {
      Alert.alert(
        "upssss",
        "algo salido mal en la ejecucion comunicate con tu administrador TI"
      );
      console.log(error);
    }
  };

  const uploadImage = async () => {
    if (!user || !fieldValue) {
      console.error("Usuario o URL de imagen no validos: ", {
        user,
        fieldValue,
      });
      return false;
    }
    try {
      if (!fieldValue.startsWith("data:image")) {
        throw new Error("Formato de imagen no soportado");
      }

      const formData = new FormData();
      formData.append("file", fieldValue);
      formData.append("upload_preset", UPLOAD_PRESET);
      const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      // console.log("respuesta de cloundinary: ", data);
      if (data.secure_url) {
        console.log("URL de la imagen cargada: " + data.secure_url);
        await updateProfile(auth.currentUser, { photoURL: data.secure_url });
        setUser({ ...user, photoURL: data.secure_url });
        setImageUri(data.secure_url);
        showMessage({
          message: "Exito",
          description: "Foto de perfil actualizada correctamente",
          type: "success",
        });
      } else {
        throw new Error(
          data.error?.message || "No se pudo optener la URL de la imagen"
        );
      }
    } catch (error) {
      showMessage({
        message: "Error",
        description: error.message,
        type: "danger",
      });
    } finally {
      setModalVisible(false);
      setModalImageVisible(false)
    }
  };

  const handleEdit = (field) => {
    setModalVisible(true);
    setModalTitle(field);
    setFieldValue(
      field === "Nombre"
        ? user.displayName || ""
        : field === "Correo"
        ? user.email || ""
        : field === "Contraseña"
        ? ""
        : ""
    );
  };
  const handeleSave = async () => {
    try {
      if (modalTitle === "Nombre") {
        await updateProfile(auth.currentUser, { displayName: fieldValue });
        showMessage({
          message: "Actualizacion",
          description: "Nombre actualizado correctamente",
          type: "success",
        });
      } else if (modalTitle === "Correo") {
        await updateEmail(auth.currentUser, fieldValue);
        showMessage({
          message: "Actualizacion",
          description: "Correo actualizado correctamente",
          type: "success",
        });
      } else if (modalTitle === "Contraseña") {
        await updatePassword(auth.currentUser, fieldValue);
        showMessage({
          message: "Actualizacion",
          description: "Nombre actualizado correctamente",
          type: "success",
        });
      } else if (modalTitle === "FotoProfile") {
        await uploadImage();
      }
    } catch (error) {
      showMessage({
        message: "Error",
        description: "No se puedo realizar la actualizacion",
        type: "danger",
      });
    } finally {
      setModalVisible(false);
    }
  };
  return (
    <View style={{ paddingTop: safeArea.top, paddingBottom: 20 }}>
      <View style={styles.containerText}>
        <View
          style={{ position: "absolute", zIndex: 99, elevation: 9, left: 10 }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </Pressable>
        </View>
        <Text style={styles.textPrim}>Usuarios</Text>
      </View>
      {/* fotoPerfil */}
      <View style={styles.infoUser}>
        <View style={{ flex: 2 }}>
          <Text style={styles.textProp}>Foto de Perfil</Text>
          <Image
            source={{ uri: imageUri || defaultImage }}
            style={styles.profileImage}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalImageVisible(true)}
        >
          <Text style={styles.buttonText}>Cambiar</Text>
        </TouchableOpacity>
      </View>

      {/* Nombre */}
      <View style={styles.infoUser}>
        <View style={{ flex: 2 }}>
          <Text style={styles.textProp}>Nombre de Usuario</Text>
          <Text style={styles.textPropData}>{user?.displayName || " "}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEdit("Nombre")}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoUser}>
        <View style={{ flex: 2 }}>
          <Text style={styles.textProp}>Correo</Text>
          <Text style={styles.textPropData}>{user?.email || " "}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEdit("Correo")}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoUser}>
        <View style={{ flex: 2 }}>
          <Text style={styles.textProp}>Contraseña</Text>
          <Text style={styles.textPropData}>****************</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEdit("Contraseña")}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <ModalEdit
        visible={modalVisible}
        title={modalTitle}
        value={modalTitle === "FotoProfile" ? imageUri : fieldValue}
        onChangeText={
          modalTitle === "FotoProfile" ? handleChooseImage : setFieldValue
        }
        onSave={modalTitle === "FotoProfile" ? uploadImage : handeleSave}
        onCancel={() => setModalVisible(false)}
        isImage={modalTitle === "FotoProfile"}
      />
      <ModalImagePicker
        visible={isImageModalVisible}
        imageUri={imageUri}
        onChooseImage={handleChooseImage}
        onSave={uploadImage}
        onCancel={() => setModalImageVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    alignItems: "center",
  },
  textPrim: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    backgroundColor: color.primary2,
    padding: 10,
    borderRadius: 10,
    width: "80%",
    height: 45,
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
  textPropData: {
    fontSize: 15,
    fontWeight: "thin",
    marginTop: 2,
  },
  textProp: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infoUser: {
    flexDirection: "row",
    marginInline: 20,
    marginTop: 30,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
export default CustomScreen;
