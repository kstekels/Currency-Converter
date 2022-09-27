import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { format } from "date-fns";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { conversionContext } from "../util/ConversionContext";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
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
  inputContainer: {
    marginBottom: 10,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});

export default ({ navigation }) => {
  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading,
  } = useContext(conversionContext);
  const [value, setValue] = useState("1");

  const conversionRate = rates[quoteCurrency];
  console.log(conversionRate);

  console.log(rates);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.content}>
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

          {isLoading ? (
            <ActivityIndicator color={colors.white} size="large" />
          ) : (
            <>
              <View style={styles.inputContainer}>
                <ConversionInput
                  text={baseCurrency}
                  value={value}
                  onBtnPress={() =>
                    navigation.push("CurrencyList", {
                      title: "Base Currency",
                      isBaseCurrency: true,
                    })
                  }
                  onChangeText={(text) => setValue(text)}
                  keyboardType="numeric"
                />

                <ConversionInput
                  text={quoteCurrency}
                  value={
                    value &&
                    `${(parseFloat(value) * conversionRate).toFixed(2)}`
                  }
                  onBtnPress={() =>
                    navigation.push("CurrencyList", {
                      title: "Quote Currency",
                      isBaseCurrency: false,
                    })
                  }
                  editable={false}
                />
              </View>

              <Text
                style={styles.text}
              >{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                date && format(new Date(date), "MMMM do, yyyy")
              }.`}</Text>
              <Button
                text="Reverse Currencies"
                onPress={() => swapCurrencies()}
              />
            </>
          )}

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
