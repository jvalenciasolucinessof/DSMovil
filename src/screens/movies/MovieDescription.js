import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Formatter from '../../../helpers/Formatter'


const MovieDescription = ({ movie }) => {
    const genres = movie.genres.map((g) => g.name)
    return (
        <View style={style.descripcions}>
            <View style={style.rating}>
                <Text>{movie.vote_average}</Text>
                <Text> - { genres.join(', ')}</Text>
            </View>

            <Text style={{fontWeight:'bold',marginTop:25}}>Historia </Text>
            <Text style={{fontWeight:'normal'}}>{movie.overview}</Text>
            <Text style={{fontWeight:'bold', fontSize:18,marginTop:10}}>{Formatter.currency(movie.budget)}</Text>
            
            
        </View>
    )
}
const style = StyleSheet.create({
    descripcions: {
        marginInline: 20,
    },
    rating:{
        flex:1,
        flexDirection: 'row'
    }
})
export default MovieDescription