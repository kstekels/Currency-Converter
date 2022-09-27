import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import home from "../screens/home";
import Options from "../screens/Options";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  //   headerMode="none"
  // initialRouteName="Options"
  >
    <MainStack.Screen
      name="Home"
      component={home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
