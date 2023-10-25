import { StyleSheet, Button } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const Wobble = () => {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform:[
        {
          rotateZ: `${rotation.value} deg}`,
        }
      ],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button
        title="Move"
        onPress={() => {
          rotation.value = withSequence(
            withTiming(-10, {duration: 500}),
            withRepeat(withTiming(20, {duration: 1000}), 1, true),
            withTiming(0, {duration: 500}),
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "tomato",
    margin: 30,
    borderRadius: 10,
  },
});

export default Wobble;
