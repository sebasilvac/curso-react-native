import { StyleSheet, View, Text } from "react-native";
import SharedValues from "./SharedValues";
import Box from "./Box";
import Wobble from "./Wobble";
import Events from "./Events";
import { GestureHandlerRootView } from "react-native-gesture-handler";



const ReAnimated = () => {


  return (
    <GestureHandlerRootView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.subTitle}>with random</Text>
        <SharedValues />

        <Text style={styles.subTitle}>Box</Text>
        <Box />

        {/* <Text style={styles.subTitle}>Noti</Text>
        <Wobble /> */}

        <Text style={styles.subTitle}>Noti</Text>
        <Events />
      </View>
    </GestureHandlerRootView>
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
  },
});

export default ReAnimated;
