import React from "react";
import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
  },
});

export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Image
        source={require("../assets/images/reverse.png")}
        style={styles.btnIcon}
        resizeMode="contain"
      />
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};
