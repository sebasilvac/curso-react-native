import { View, Text, StyleSheet, Image } from 'react-native';

interface CardProps {
  title: string;
  image?: string;
  description?: string;
}

const Card = (props: CardProps) => {
  const { title, image, description } = props;

  return (
    <View style={styles.container}>
      {image && <Image
        style={styles.image}
        source={{ uri: image }}
      />}

      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 30,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    width: 320,
    height: 526
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 10,
    color: '#fff',
  },
  description: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fff',
  }
})

export default Card;
