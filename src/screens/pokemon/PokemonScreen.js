import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PokemonScreen = () => {
  const navigation = useNavigation()
  const safeArea = useSafeAreaInsets()
  return (
    <ScrollView>
      <View style={{ paddingTop: safeArea.top, paddingBottom: 20 }}>
        <View style={styles.containerText}>
          <View style={{ position: 'absolute', zIndex: 99, elevation: 9, left: 10 }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back' size={30} color="black" />
            </Pressable>
          </View>
          <Text style={styles.textPrim}>Pokemon</Text>
        </View>
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

export default PokemonScreen