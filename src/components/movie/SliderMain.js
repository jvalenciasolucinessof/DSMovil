import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'
import Carousel from "react-native-reanimated-carousel";
import Poster from './Poster';


const SliderMain = ({ movies }) => {
    const width = useWindowDimensions().width;
    const ref = useRef()
    return (
        <View style={style.containerprim}>
            <Carousel
                ref={ref}
                data={movies}
                renderItem={({ item }) => (
                    <Poster id={item.id} poster={item.poster_path} />
                )}
                width={200}
                height={350}
                style={{ width, height: 250, justifyContent: 'center', alignContent: 'center' }}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingOffset: 50,
                    parallaxScrollingScale: 0.9
                }}
                defaultIndex={1}
            />
        </View>
    )
}

const style = StyleSheet.create({
    containerprim: {
        height: '250px',
        width: '100%',
    },
})

export default SliderMain