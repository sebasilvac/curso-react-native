import { Animated, StyleSheet, View, TouchableHighlight } from "react-native";
import * as Haptics from "expo-haptics";
import { Colors } from "../../constans/colors";

interface AnimatedButtonProps {
  title: string;
}

const AnimatedButton = (props: AnimatedButtonProps) => {

  const animatedValue = new Animated.Value(1);

  const handlePressIn = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Animated.spring(animatedValue, {
      toValue: 0.96,
      // friction: 5,
      speed: 200,
      useNativeDriver: true,
    }).start();
  }

  const handlePressOut = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Animated.spring(animatedValue, {
      toValue: 1,
      // friction: 5,
      speed: 200,
      useNativeDriver: true,
    }).start();
  }

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  return (
    <Animated.View
      style={[styles.container, animatedStyle]}
    >
      <TouchableHighlight
        style={styles.button}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        underlayColor={Colors.primary}
        onPress={() => {
          //Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        }}
        activeOpacity={0.9}
      >
        <View>
          <Animated.Text style={styles.textBtn}>{props.title}</Animated.Text>
        </View>
      </TouchableHighlight>

    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: 50,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  textBtn: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "transparent",
  }
});

export default AnimatedButton;
