import { StyleSheet, Button } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Colors } from "../../constans/colors";

const Box = () => {
  const offset = useSharedValue(0);

  const config = {
    damping: 40,
    stiffness: 90,
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform:[
        {
          translateX: withSpring(offset.value * 255, config),
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
          offset.value = withSpring(Math.random());
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
    margin: 30,
    borderRadius: 10,
  },
});

export default Box;
