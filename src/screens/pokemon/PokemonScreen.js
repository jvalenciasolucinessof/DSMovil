import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePokemons } from "../../hooks/pokemon/usePokemon";
import color from "../../constants/color";
import { getPokemons } from "../../../core/accion/pokemon/get-pokemon.action";
import PokeBallBg from "../../components/pokemon/PokeBallBg";
import PokemonCard from "../../components/pokemon/PokemonCard";

const PokemonScreen = () => {
  const navigation = useNavigation();
  const { getPokemonTQ } = usePokemons();
  const safeArea = useSafeAreaInsets();
  if (getPokemonTQ.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={color.primary2} />
      </View>
    );
  }
  return (
    <SafeAreaView>
      <PokeBallBg style={styles.imgPosition} />
      <View style={{paddingBottom: 20 }}>
        <View style={styles.containerText}>
          <View
            style={{ position: "absolute", zIndex: 99, elevation: 9, left: 10 }}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </Pressable>
          </View>
          <Text style={styles.textPrim}>Pokemon</Text>
        </View>
          <FlatList
            data={getPokemonTQ.data?.pages.flat() ?? []}
            keyExtractor={(pokemon, i) => `${pokemon.id}-${i}`}
            numColumns={2}
            style={{ paddingTop: 20 }}
            renderItem={({item}) =><PokemonCard pokemon={item} />}
            onEndReached={() => getPokemonTQ.fetchNextPage()}
            showsVerticalScrollIndicator={false}
          />


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerText: {
    alignItems: "center",
  },
  textPrim: {
    fontSize: 30,
    fontWeight: "bold",
  },
  imgPosition: {
    position: "absolute",
    top: -100,
    right: -100,
  },
});

export default PokemonScreen;
