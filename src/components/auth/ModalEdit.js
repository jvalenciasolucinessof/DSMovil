import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import color from '../../constants/color'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ModalEdit = ({ visible, title, value, onChangeText, onSave, onCancel }) => {
    return (
        <Modal visible={visible} animationType='slide' transparent={true} onRequestClose={onCancel} >
            <View style={style.modalContainer}>
                <View style={style.modalContent}>
                    <Text style={style.modalTitle}>{title}</Text>
                    <View style={style.inputContainer}>
                        <TextInput
                            placeholder="Password"
                            style={style.input}
                            value={value}
                            onChangeText={onChangeText}
                        />
                    </View>
                    <View style={style.modalBottons}>
                        <TouchableOpacity style={style.modalBotton} onPress={onCancel}>
                            <Text style={style.modalTextBotton}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.modalBotton} onPress={onSave}>
                            <Text style={style.modalTextBotton}>Guardar</Text>
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
        // flex: 1,
        padding: 10,
        borderRadius: 3,
        // backgroundColor: color.backgroud,
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
    modalBottons: {
        flexDirection: 'row'
    },
    modalBotton: {
        backgroundColor: color.primary2,
        padding: 10,
        borderRadius: 10,
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginInline:6
    },
    modalTextBotton: {
        color: color.text2,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        borderColor: color.primary2,
        borderWidth: 1.5,
        marginVertical: 30,
        width: "80%",
    },
})

export default ModalEdit