import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  PlatformColor,
  View,
  Text,
} from 'react-native';

import { Card, Button } from '../components';
import { dogs } from '../data';
import { Animated } from '../components/Animated';
import ReAnimated from '../components/Reanimated/Reanimated';
import { globalStyles } from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyles.screenContainer, styles.container]}>
      <Button
        onPress={() => {
          navigation.navigate('Settings' as never);
        }}
      >
        <Text>Go to Settings!!</Text>
      </Button>

      <ScrollView
        contentContainerStyle={{
          marginHorizontal: 18,
        }}
        style={styles.scrollSafeArea}
      >
        <View style={styles.box}>
          <Text style={globalStyles.title}>ReAnimated</Text>
          <ReAnimated />
        </View>

        <View style={styles.box}>
          <Text style={globalStyles.title}>Animated</Text>
          <Animated />
        </View>

        <View style={styles.box}>
          <Text style={globalStyles.title}>Buttons</Text>
          <Button
            onPress={() => {
              console.log('press btn default');
            }}
          >
            Primary
          </Button>
          <Button variant="secondary">Primary</Button>
          <Button variant="tertiary">Primary</Button>
        </View>

        <View style={styles.box}>
          <Text style={globalStyles.title}>Perritos</Text>

          {dogs.map((dog, index) => (
            <Card
              key={index}
              title={dog.name}
              description={dog.description}
              image={dog.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: PlatformColor('systemIndigo'),
      },
      android: {
        backgroundColor: PlatformColor('@android:color/holo_purple'),
      },
      default: {
        backgroundColor: 'white',
      },
    }),
  },
  scrollSafeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 30 : 30,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
