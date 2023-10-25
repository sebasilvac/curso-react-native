import { StyleSheet, Button } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "../../constans/colors";

const SharedValues = () => {
  const randomWith = useSharedValue(10);
  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWith.value, config),
    };
  });

  return (
    <>
      <Animated.View style={[styles.animatedView, style]} />
      <Button
        title="toggle"
        onPress={() => {
          randomWith.value = Math.random() * 350;
        }}
        color={Colors.secondary}
      />
    </>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    height: 30,
    backgroundColor: "gold",
    margin: 30,
    borderRadius: 20,
  },
});

export default SharedValues;
