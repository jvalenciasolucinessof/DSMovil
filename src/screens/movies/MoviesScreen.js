import { View, StyleSheet, ActivityIndicator, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";

// import { nowPlayingAction } from '../../../core/accion/movies/now-playing.action'

import color from '../../constants/color.js'

import SliderMain from '../../components/movie/SliderMain'

import { useMovies } from '../../hooks/movies/useMovies.js'
import MoviesHorizontal from '../../components/movie/MoviesHorizontal.js'
import { useNavigation } from '@react-navigation/native';

const MoviesScreen = () => {
  const safeArea = useSafeAreaInsets()
  const navigation = useNavigation()

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
      <View style={{ paddingTop: safeArea.top, paddingBottom: 20 }}>
        <View style={styles.containerText}>
          <View style={{ position: 'absolute', zIndex: 99, elevation: 9,  left: 10 }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back' size={30} color="black" />
            </Pressable>
          </View>
          <Text style={styles.textPrim}>Peliculas</Text>
        </View>
        <SliderMain movies={NowPlayingQuery.data ?? []} />
        <MoviesHorizontal title='Populares' movies={PopularQuery.data ?? []} />
        <MoviesHorizontal title='Mejor Calificadas' movies={TopQuery.data?.pages.flat() ?? []} loadNextPage={TopQuery.fetchNextPage} />
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