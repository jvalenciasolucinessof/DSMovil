import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { usePokemonsDetail } from "../../hooks/pokemon/usePokemonDetail";
import { FullScreenLoader } from "../../components/FullLoarder";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Formatter from "../../../helpers/Formatter";
import { FadeInImage } from "../../components/FadeInImage";

const PokemonDetailScreen = ({ navifation, route }) => {
  const { top } = useSafeAreaInsets();
  const { pokemonId } = route.params;
  const { getPokemonByIdTQ } = usePokemonsDetail(pokemonId);
  const pokeballImg = require("../../../assets/pokeball-dark.png");
  if (!getPokemonByIdTQ.data) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Container */}
      <View style={styles.headerContainer}>
        {/* Nombre del Pokemon */}
        <Text
          style={{
            ...styles.pokemonName,
            top: top + 5,
          }}
        >
          {Formatter.capitalize(getPokemonByIdTQ.data.name) + "\n"}#
          {getPokemonByIdTQ.data.id}
        </Text>

        {/* Pokeball */}
        <Image source={pokeballImg} style={styles.pokeball} />

        <FadeInImage
          uri={getPokemonByIdTQ.data.avatar}
          style={styles.pokemonImage}
        />
      </View>

      {/* Types */}
      <View
        style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 10 }}
      >
        {getPokemonByIdTQ.data.types.map((type) => (
          <View
            key={type}
            style={{
              marginLeft: 10,
              paddingVertical: 6,
              paddingHorizontal: 14,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "black", // Borde blanco (como outlined)
              backgroundColor: "black",
            }}
          >
            <Text style={{ color: "white", fontSize: 14 }}>{type}</Text>
          </View>
        ))}
      </View>

      {/* Sprites */}
      <FlatList
        data={getPokemonByIdTQ.data.sprites}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        centerContent
        style={{
          marginTop: 20,
          height: 100,
        }}
        renderItem={({ item }) => (
          <FadeInImage
            uri={item}
            style={{ width: 100, height: 100, marginHorizontal: 5 }}
          />
        )}
      />

      {/* abilities */}
      <Text style={styles.subTitle}>Habilidades</Text>
      <FlatList
        data={getPokemonByIdTQ.data.abilities}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            key={item}
            style={{
              marginLeft: 10,
              paddingVertical: 6,
              paddingHorizontal: 14,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "black",
              backgroundColor: "black",
            }}
          >
            <Text style={{ color: "white", fontSize: 14 }}>
              {Formatter.capitalize(item)}
            </Text>
          </View>

          //   <Text >{Formatter.capitalize(item)}</Text>
        )}
      />

      {/* Stats */}
      <Text style={styles.subTitle}>Estadisticas</Text>

      <FlatList
        data={getPokemonByIdTQ.data.stats}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.statsContainer}>
            <Text style={{ flex: 1, color: "black" }}>
              {Formatter.capitalize(item.name)}
            </Text>
            <Text style={{ color: "black" }}>{item.value}</Text>
          </View>
        )}
      />

      {/* Moves */}
      <Text style={styles.subTitle}>Movimientos</Text>
      <FlatList
        data={getPokemonByIdTQ.data.moves}
        horizontal
        showsHorizontalScrollIndicator={false}
        centerContent
        renderItem={({ item }) => (
          <View style={styles.statsContainer}>
            <Text style={{ flex: 1, color: "black" }}>
              {Formatter.capitalize(item.name)}
            </Text>
            <Text style={{ color: "black" }}>lvl {item.level}</Text>
          </View>
        )}
      />

      {/* Games */}
      <Text style={styles.subTitle}>Juegos</Text>
      <FlatList
        data={getPokemonByIdTQ.data.games}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        centerContent
        renderItem={({ item }) => (
          <View
            key={item}
            style={{
              marginLeft: 10,
              paddingVertical: 6,
              paddingHorizontal: 14,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "black",
              backgroundColor: "black",
            }}
          >
            <Text style={{ color: "white", fontSize: 14 }}>
              {Formatter.capitalize(item)}
            </Text>
          </View>

          //   <Text >{Formatter.capitalize(item)}</Text>
        )}
      />

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: "center",
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  pokemonName: {
    color: "black",
    fontSize: 40,
    alignSelf: "flex-start",
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 240,
    height: 240,
    position: "absolute",
    bottom: -40,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  },
  statsContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
    alignItems: "center",
    borderWidth:1,
    padding:10,
    borderRadius:10
  },

});

export default PokemonDetailScreen;
