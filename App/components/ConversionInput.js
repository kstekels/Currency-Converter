import React from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
} from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
  },
  containerDisabled: {
    backgroundColor: colors.offWhite,
  },
  btn: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  btnText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: colors.textLight,
  },
});

export const ConversionInput = ({ text, onBtnPress, ...props }) => {
  const containerStyles = [styles.container];
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity style={styles.btn} onPress={onBtnPress}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
