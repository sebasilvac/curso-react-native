import { Animated } from "react-native"

interface SequenceProps {
  children: React.ReactNode
}

const Sequence = (props: SequenceProps) => {
  const { children } = props;

  const animatedValue = new Animated.Value(1);

  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.9,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <Animated.View
      style={{
        transform: [{ scale: animatedValue }],
      }}
    >
      {children}
    </Animated.View>
  )
}

export default Sequence