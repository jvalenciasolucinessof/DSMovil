import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { FadeInImage } from "../FadeInImage";
import { useNavigation } from "@react-navigation/native";

const PokemonCard = ({ pokemon }) => {
  const navigation = useNavigation();

  return (
    <Pressable
    style={{flex:1}}
      onPress={() => navigation.navigate('pokemondetail',{pokemonId:pokemon.id })}
    >
      <View style={styles.cardContainer}>
        <Text style={styles.name}>
          {pokemon.name} {"\n#" + pokemon.id}{" "}
        </Text>
        {/* pokemon ball imagen */}
        <View style={styles.pokeballContainer}>
          <Image
            source={require("../../../assets/pokeball-light.png")}
            style={styles.pokeball}
          />
        </View>
        {/* pokemon avatar imagen */}
        <FadeInImage uri={pokemon.avatar} style={styles.pokemonImage} />

        <Text style={[styles.name, { marginTop: 35 }]}>{pokemon.types[0]}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: "black",
    height: 120,
    flex: 0.5,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: "white",
    top: 10,
    left: 10,
  },
  pokeball: {
    width: 100,
    height: 100,
    left: -100,
    top: -25,
    opacity: 0.4,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: "absolute",
    right: -15,
    top: -30,
  },

  pokeballContainer: {
    alignItems: "flex-end",
    width: "100%",
    position: "absolute",

    overflow: "hidden",
    opacity: 0.5,
  },
});

export default PokemonCard;
