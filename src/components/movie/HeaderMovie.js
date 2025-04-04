import { View, Text, useWindowDimensions, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';



const HeaderMovie = ({ imageUri, title, originalTitle }) => {
    const navigation = useNavigation()
    const { height } = useWindowDimensions()
    return (
        <>
            <LinearGradient colors={['rgba(0,0,0,0.3)', 'transparent']} start={[0,0]}
                style={{ position: 'absolute', zIndex: 1, height: height * 0.4, width: '100%' }}
            />

            <View style={{ position: 'absolute', zIndex: 99, elevation: 9, top: 50, left: 10 }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons name='arrow-back' size={30} color="white" />
                </Pressable>
            </View>
            <View style={{ ...style.container1, height: height * 0.7 }}>
                <View style={style.containeImage}>
                    <Image
                        source={{ uri: process.env.EXPO_PUBLIC_MOVIE_DB_API_URL_IMAGE + imageUri }}
                        resizeMode='cover'
                        style={{ flex: 1 }}
                    />
                </View>

                <View style={{ paddingInline: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 12 }}>{title}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'semibold' }}>{originalTitle}</Text>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container1: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.1,
        shadowRadius: 25,
        elevation: 5, // Esto es necesario para que funcione en Android
    },
    containeImage: {
        flex: 1,
        borderBottomLeftRadius: 30,  // Redondear la parte inferior izquierda
        borderBottomRightRadius: 30, // Redondear la parte inferior derecha
        overflow: 'hidden', // Esto es necesario para que los bordes redondeados se muestren correctamente
    }
})

export default HeaderMovie