import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Colors } from "../../constans/colors";
import AnimatedButton from './AnimatedButton';
import Sequence from "./Sequence";

interface AnimatedProps {}

const Animated = (props: AnimatedProps) => {
  // const { children, onPress, variant = "primary" } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Buttons</Text>
      <AnimatedButton
        title="Press me !!"
      />
      
      <Text style={styles.subTitle}>Icon with Sequence</Text>

      <Sequence>
        <FontAwesome name="bell" size={50} color={'gold'} />
      </Sequence>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
  },
  subTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginTop: 20,
  },
});

export default Animated;
