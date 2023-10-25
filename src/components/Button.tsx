import { Colors } from "../constans/colors";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  children?: React.ReactNode;
  onPress?: () => void;
}

const Button = (props: ButtonProps) => {
  const { children, onPress, variant = "primary" } = props;

  return (
    <TouchableOpacity
      style={[styles.btn, styles[variant]]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.textBtn}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "90%",
    padding: 13,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    elevation: 10,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  tertiary: {
    backgroundColor: Colors.tertiary,
  },
  textBtn: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
});

export default Button;
