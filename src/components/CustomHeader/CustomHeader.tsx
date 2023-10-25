import { View, Text, Button, StyleSheet, PlatformColor, Platform } from 'react-native';
import { Colors } from '../../constans/colors';
import { useNavigation } from '@react-navigation/native';

interface CustomHeaderProps {
  title: string;
}

const CustomHeader = ({ title }: CustomHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstColumn}>
        {title !== 'Home' && (
          <Button
            title="Back"
            onPress={() => navigation.goBack()}
            color={colorText}
          />
        )}
      </View>

      <View style={styles.secondColumn}>
        <Text style={styles.text}>{title}</Text>
      </View>

      <View style={styles.firstColumn} />
    </View>
  );
};

const colorText = Platform.select({
  ios: Colors.ligth,
  //android: PlatformColor('?attr/textColorPrimary'),
  default: '#000',
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 10,
    elevation: 10,
  },
  firstColumn: {
    flex: 1,
    marginTop: 30,
    paddingTop: 10,
    alignContent: 'flex-end',
    color: Colors.ligth,
  },
  secondColumn: {
    flex: 3,
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.ligth,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
