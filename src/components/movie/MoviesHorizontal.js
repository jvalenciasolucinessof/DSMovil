import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Poster from './Poster'

const MoviesHorizontal = ({ movies, title = '' }) => {
    return (
        <View>
            {title && <Text style={style.text}>{title}</Text>}
            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => <Poster id={item.id} poster={item.poster_path} smallPoster />}
                style={style.list}
            />
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginBottom: 5
    },
    list: {
        marginHorizontal: 10
    }
})

export default MoviesHorizontal