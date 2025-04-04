import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'


import { useDetailMovie } from '../../hooks/movies/useDetailMovie.js'
import color from '../../constants/color.js';
import HeaderMovie from '../../components/movie/HeaderMovie.js';
import MovieDescription from './MovieDescription.js';
import ActorsMovie from '../../components/movie/ActorsMovie.js';

const DetailMovieScreen = ({ route }) => {
    const { idmovie } = route.params;

    const { detailMovie,actorsMovie } = useDetailMovie(+idmovie)

    // console.log('first', JSON.stringify(actorsMovie.data, null, 2))

    if (detailMovie.isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color={color.primary2} />
            </View>
        );
    }

    return (
        <ScrollView>
            <HeaderMovie imageUri={detailMovie.data?.poster_path} title={detailMovie.data?.title} originalTitle={detailMovie.data?.original_title}/>
            <MovieDescription movie={detailMovie.data} />
            <ActorsMovie ActorsMovie={actorsMovie.data?.cast}/>
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
    }

})



export default DetailMovieScreen