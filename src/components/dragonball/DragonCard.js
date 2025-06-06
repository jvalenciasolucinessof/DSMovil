import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { FadeInImage } from "../FadeInImage";
import { useNavigation } from "@react-navigation/native";

const DragonCard = ({ characters }) => {
  const navigation = useNavigation();
  // console.log('first', JSON.stringify(characters, null, 2))
  return (
    <Pressable
    style={{flex:1}}
      // onPress={() => navigation.navigate('dbdetail',{personId:characters.id })}
    >
      <View style={styles.cardContainer}>
        <Text style={styles.name}>
          {characters.name} {"\n#" + characters.id}{" "}{"\nRaza: " + characters.race}{" "}
        </Text>
        {/* pokemon ball imagen */}

        <View style={styles.pokeballContainer}>
          <Image
            source={require("../../../assets/Ball.png")}
            style={styles.pokeball}
          />
        </View>
        {/* pokemon avatar imagen */}

        <FadeInImage uri={characters.image} style={styles.DBImage} />

        {/* <Text style={[styles.name, { marginTop: 35 }]}>{pokemon.types[0]}</Text> */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: "#ffa300",
    height: 150,
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
  DBImage: {
    width: 150,
    height: 150,
    position: "absolute",
    right: -30,
    top: -20,
  },

  pokeballContainer: {
    alignItems: "flex-end",
    width: "100%",
    position: "absolute",

    overflow: "hidden",
    opacity: 0.5,
  },
});

export default DragonCard;
