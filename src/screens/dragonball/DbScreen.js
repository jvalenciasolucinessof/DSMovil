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
import color from "../../constants/color";
import PokeBallBg from "../../components/pokemon/PokeBallBg";
import { useDragonBall } from "../../hooks/dragonball/useDragonBall";
import DragonCard from "../../components/dragonball/DragonCard";

const DbScreen = () => {
  const navigation = useNavigation();
  const { getDragonBallTQ } = useDragonBall();
  // console.log('getDragonBallTQ.data', JSON.stringify(getDragonBallTQ.data.pages, null, 2))
  const safeArea = useSafeAreaInsets();
  // const characters = getDragonBallTQ.data.pages.map((page) => page.items)[0];

  if (getDragonBallTQ.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={color.primary2} />
      </View>
    );
  }
  
  if (getDragonBallTQ.isError) {
    return (
      <View style={styles.container}>
        <Text>Error al cargar personajes</Text>
      </View>
    );
  }
  
  const characters =
    getDragonBallTQ.data?.pages?.flatMap((page) => page.items) ?? [];

  return (
    <SafeAreaView>
      <PokeBallBg style={styles.imgPosition} tipoImg="DBZ" />
      <View style={{ paddingBottom: 20 }}>
        <View style={styles.containerText}>
          <View
            style={{ position: "absolute", zIndex: 99, elevation: 9, left: 10 }}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </Pressable>
          </View>
          <Text style={styles.textPrim}>DRAGON BALL</Text>
        </View>
        {/* {getDragonBallTQ.data?.pages.flat().map((item, index) => (
          <Text key={index}>{item.name}</Text>
        ))} */}
        <FlatList
            data={characters}
            keyExtractor={(item) => `${item.id}`}
            numColumns={2}
            style={{ paddingTop: 20 }}
            renderItem={({item}) =><DragonCard characters={item} />}
            onEndReached={() => getDragonBallTQ.fetchNextPage()}
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
    top: -40,
    right: -50,
  },
});

export default DbScreen;
