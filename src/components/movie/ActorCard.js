import { View, Text, Image, StyleSheet } from 'react-native';

const ActorCard = ({ actor }) => {
    console.log('actor', JSON.stringify(actor.profile_path, null, 2))
    const avatar = actor.profile_path
    ? `${process.env.EXPO_PUBLIC_MOVIE_DB_API_URL_IMAGE}${actor.profile_path}`
    : 'https://i.stack.imgur.com/l60Hf.png';

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: avatar }}
        style={styles.image}
        resizeMode="cover"
      />
      <View>
        <Text numberOfLines={2} adjustsFontSizeToFit style={styles.name}>
          {actor.name}
        </Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    width: 60,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  character: {
    color: '#6b7280', // equivalente a text-gray-600
    fontSize: 12,
  },
});

export default ActorCard;
