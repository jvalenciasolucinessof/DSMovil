import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Poster = ({ id, poster, smallPoster = false }) => {
  const navigation = useNavigation();
  return (
    <Pressable 
    style={({pressed}) => [{ opacity: pressed ? 0.9 : 1, paddingTop: pressed ? 5 : 0, marginHorizontal:4}]} 
    onPress={() => navigation.navigate('detail',{idmovie:id})}
    >
      <Image style={[{ ...style.image, width: smallPoster ? 81 : 150, height: smallPoster ? 120 : 250 }]}
        source={{ uri: process.env.EXPO_PUBLIC_MOVIE_DB_API_URL_IMAGE+poster}}
        />
    </Pressable>
  )
}

const style = StyleSheet.create({
  image: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius:20
  }
})

export default Poster