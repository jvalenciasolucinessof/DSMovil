import { View, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext.js";
import color from '../../constants/color.js';
import ModalEdit from '../../components/auth/ModalEdit.js';
import { updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig.js';
import { showMessage } from 'react-native-flash-message';


const CustomScreen = () => {
  const safeArea = useSafeAreaInsets()
  const navigation = useNavigation();
  const { user } = useAuth()
  const [modalVisible, setModalVisible] = useState("")
  const [modalTitle, setModalTitle] = useState("")
  const [fieldValue, setFieldValue] = useState("")
  const handleEdit = (field) => {
    setModalVisible(true)
    setModalTitle(field)
    setFieldValue(
      field === 'Nombre' ? user.displayName || '' :
        field === 'Correo' ? user.email || '' :
          field === 'Contraseña' ? '' : ''
    )
  };
  const handeleSave = async () => {
    try {
      if (modalTitle === 'Nombre') {
        await updateProfile(auth.currentUser, { displayName: fieldValue })
        showMessage({
          message:"Actualizacion",
          description: 'Nombre actualizado correctamente',
          type: 'success'
        })
      } else if (modalTitle === 'Correo') {
        await updateEmail(auth.currentUser, fieldValue )
        showMessage({
          message:"Actualizacion",
          description: 'Correo actualizado correctamente',
          type: 'success'
        })
      } else if (modalTitle === 'Contraseña') {
        await updatePassword(auth.currentUser, fieldValue )
        showMessage({
          message:"Actualizacion",
          description: 'Nombre actualizado correctamente',
          type: 'success'
        })
      }
     
    } catch (error) {
      showMessage({
        message:"Error",
        description: 'No se puedo realizar la actualizacion',
        type: 'danger'
      })
    }finally{
      setModalVisible(false)
    }
  }
  return (
    <View style={{ paddingTop: safeArea.top, paddingBottom: 20 }}>
      <View style={styles.containerText}>
        <View style={{ position: 'absolute', zIndex: 99, elevation: 9, left: 10 }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back' size={30} color="black" />
          </Pressable>
        </View>
        <Text style={styles.textPrim}>Usuarios</Text>
      </View>
      <View style={styles.infoUser}>
        <View style={{ flex: 2 }}>
          <Text style={styles.textProp}>Nombre de Usuario</Text>
          <Text style={styles.textPropData}>{user?.displayName || ' '}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleEdit("Nombre")}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoUser}>
        <View style={{ flex: 2 }}>
          <Text style={styles.textProp}>Correo</Text>
          <Text style={styles.textPropData}>{user?.email || ' '}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleEdit("Correo")}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoUser}>
        <View style={{ flex: 2 }}>
          <Text style={styles.textProp}>Contraseña</Text>
          <Text style={styles.textPropData}>****************</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleEdit("Contraseña")}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <ModalEdit
        visible={modalVisible}
        title={modalTitle}
        value={fieldValue}
        onChangeText={setFieldValue}
        onSave={handeleSave}
        onCancel={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerText: {
    alignItems: 'center'
  },
  textPrim: {
    fontSize: 30,
    fontWeight: 'bold',
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
    fontWeight: 'thin',
    marginTop: 2
  },
  textProp: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoUser: {
    flexDirection: 'row',
    marginInline: 20,
    marginTop: 30,
    alignItems: 'center'
  },

});
export default CustomScreen;
