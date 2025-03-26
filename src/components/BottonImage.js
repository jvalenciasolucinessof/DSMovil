import { Pressable, Image, StyleSheet } from "react-native";

const image = {
    DBZ: require("../../assets/bannerDB.jpg"),
    MV: require("../../assets/bannerMV.jpg"),
    PK: require("../../assets/bannerPK.jpg"),
    RM: require("../../assets/bannerRM.jpg"), 
}

export default function BottonImage(props) {
  const { onPress,titleimage } = props;
  return (
    <Pressable 
      style={styles.button}
      onPress={onPress}
    >
      <Image
        source={image[titleimage]}
        style={styles.image}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
    height: "15%",
    marginTop: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    resizeMode: "cover",
  },
});
