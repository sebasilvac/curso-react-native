import { StyleSheet } from "react-native";
import { Colors } from "../constans/colors";

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.ligth,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    // fontFamily: "nunito-bold",
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  // container: {
  //   flex: 1,
  //   padding: 24,
  // },
  
  // paragraph: {
  //   marginVertical: 8,
  //   lineHeight: 20,
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: "#ddd",
  //   padding: 10,
  //   fontSize: 18,
  //   borderRadius: 6,
  // },
  // errorText: {
  //   color: "crimson",
  //   fontWeight: "bold",
  //   marginBottom: 10,
  //   marginTop: 6,
  //   textAlign: "center",
  // },
});