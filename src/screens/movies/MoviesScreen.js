import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { nowPlayingAction } from '../../../core/accion/movies/now-playing.action'
import { globalStyles } from '../../constants/CustomTheme.js'
import { Image } from 'react-native'
import { useMovies } from '../../../presentataion/hooks/movies/useMovies.js'
const MoviesScreen = () => {

  const {NowPlayingQuery} = useMovies()

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>MoviesScreen</Text>
      
    </SafeAreaView>
  )
}

export default MoviesScreen