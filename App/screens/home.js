import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  Keyboard,
} from "react-native";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { format } from "date-fns";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.2,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: "center",
  },
});

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "EUR";
  const conversionRate = 1.03;
  const date = new Date();

  const [scrollEnabled, setScrollEnabled] = useState(false);

  //   useEffect(() => {
  //     const showListener = Keyboard.addListener("keyboardDidShow", () => {
  //       setScrollEnabled(true);
  //     });

  //     const hideListener = Keyboard.addListener("keyboardDidHide", () => {
  //       setScrollEnabled(false);
  //     });

  //     return () => {
  //       showListener.remove();
  //       hideListener.remove();
  //     };
  //   }, []);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <StatusBar barStyle={"light-content"} />
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>

          <ConversionInput
            text={baseCurrency}
            value="123"
            onBtnPress={() => alert("todo!")}
            onChangeText={(text) => console.log("text", text)}
            keyboardType="numeric"
          />

          <ConversionInput
            text="EUR"
            value="123"
            onBtnPress={() => alert("todo!")}
            editable={false}
          />

          <Text
            style={styles.text}
          >{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
            date,
            "MMMM do, yyyy"
          )}.`}</Text>
          <Button text="Reverse Currencies" onPress={() => alert("To do!")} />
          <KeyboardSpacer
            onToggle={(keyboardIsVisible) =>
              setScrollEnabled(keyboardIsVisible)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
