import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import color from '../../constants/color'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ModalImagePicker = ({ visible, imageUri, onChooseImage, onSave, onCancel }) => {
    return (
        <Modal visible={visible} animationType='slide' transparent={true} onRequestClose={onCancel} >
            <View style={style.modalContainer}>
                <View style={style.modalContent}>
                    <Text style={style.modalTitle}>Cambiar Foto de Perfil</Text>
                    <Image source={{uri: imageUri}} style={style.imagePreview}/>
                    <TouchableOpacity style={style.imageBotton} onPress={onChooseImage}>
                        <Text style={style.imageBottonText}>Seleccionar Imagen</Text>
                    </TouchableOpacity>
                    <View style={style.modalButtoms}>
                        <TouchableOpacity style={style.modalBotton} onPress={onCancel}>
                            <Text style={style.modalButtomText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.modalBotton} onPress={onSave}>
                            <Text style={style.modalButtomText}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const style = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        borderRadius: 3,
    },
    modalContent: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imagePreview:{
        width: 100,
        height:100,
        borderRadius: 50,
        marginBottom:20,
    },
    imageBotton:{
        backgroundColor:color.primary2,
        padding: 10,
        borderRadius:5,
        marginBottom:20,
    },
    imageBottonText:{
        color: 'white',
        fontWeight:'bold',
        textAlign:'center'
    },
    modalButtoms:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '100%'
    },
    modalBotton:{
        flex:1,
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:5,
        marginHorizontal:10,
        alignItems: 'center',
        backgroundColor:color.primary2,
    },
    modalButtomText:{
        color:'white',
        fontWeight:'bold'
    }
})

export default ModalImagePicker