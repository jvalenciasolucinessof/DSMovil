import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { nowPlayingAction } from '../../../core/accion/movies/now-playing.action'
import { globalStyles } from '../../constants/CustomTheme.js'
import { Image } from 'react-native'
const MoviesScreen = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        nowPlayingAction().then(setMovies)
    }, [])
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>MoviesScreen</Text>
      {movies.map((movie) => (
        <View key={movie.id}>
            <Image source={{uri: `${process.env.EXPO_PUBLIC_MOVIE_DB_API_URL_IMAGE}${movie.poster_path}`}} style={{width: 100, height: 100}} />
            <Text>{movie.title}</Text>
        </View>
      ))}
    </SafeAreaView>
  )
}

export default MoviesScreen