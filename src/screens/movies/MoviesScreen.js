import { View, StyleSheet, ActivityIndicator, Text, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// import { nowPlayingAction } from '../../../core/accion/movies/now-playing.action'

import color from '../../constants/color.js'

import SliderMain from '../../components/movie/SliderMain'

import { useMovies } from '../../hooks/movies/useMovies.js'
import MoviesHorizontal from '../../components/movie/MoviesHorizontal.js'

const MoviesScreen = () => {
  const safeArea = useSafeAreaInsets()

  const { NowPlayingQuery, PopularQuery, TopQuery, UpComingQuery } = useMovies()

  if (NowPlayingQuery.isLoading && PopularQuery.isLoading && TopQuery.isLoading && UpComingQuery.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={color.primary2} />
      </View>
    );

  }

  return (
    <ScrollView>
      <View style={{ paddingTop: safeArea.top,paddingBottom:20 }}>
        <View style={styles.containerText}>
          <Text style={styles.textPrim}>Peliculas</Text>
        </View>
        <SliderMain movies={NowPlayingQuery.data ?? []} />
        <MoviesHorizontal title='Populares' movies={PopularQuery.data ?? []} />
        <MoviesHorizontal title='Mejor Calificadas' movies={TopQuery.data ?? []} />
        <MoviesHorizontal title='Proximamente' movies={UpComingQuery.data ?? []} />
      </View>

    </ScrollView>
  )
}

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
    // marginBottom: 20,
    // paddingHorizontal: 40,
  }

})


export default MoviesScreen