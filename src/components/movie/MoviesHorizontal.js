import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Poster from './Poster'

const MoviesHorizontal = ({ movies, title = '', loadNextPage }) => {
    const isLoading = useRef(false);
    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies])
    const onScroll = (event) => {
        if (isLoading.current) return;
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
        if (!isEndReached) return;
        isLoading.current = true;
        loadNextPage && loadNextPage()
    }

    return (
        <View>
            {title && <Text style={style.text}>{title}</Text>}
            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item.id}`}
                renderItem={({ item }) => <Poster id={item.id} poster={item.poster_path} smallPoster />}
                style={style.list}
                onScroll={onScroll}
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