import { StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type EventType = {
  translationX: number;
  translationY: number;
}

type ContextType = {
  startX: number;
  startY: number;
};

const Events = () => {
  const startingPosition = 50;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event: EventType, ctx: ContextType) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event: EventType, ctx: ContextType) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      y.value = withSpring(startingPosition);
      x.value = withSpring(startingPosition);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? "tomato" : "dodgerblue",
      borderRadius: pressed.value ? 30 : 0,
      transform: [
        {
          translateX: x.value
        },
        {
          translateY: y.value
        },
      ],
    };
  });

  return (
    <>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </PanGestureHandler>
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

export default Events;
