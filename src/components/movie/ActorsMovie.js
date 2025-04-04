import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import ActorCard from './ActorCard';

const ActorsMovie = ({ ActorsMovie }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>Actores</Text>
            <FlatList
                data={ActorsMovie}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <ActorCard actor={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 250
    }
});


export default ActorsMovie