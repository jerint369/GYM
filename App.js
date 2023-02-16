import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./screen/LoginScreen";
import SignupPage from "./screen/SignupPage";
import forgotPassword from "./screen/forgotPassword";
import homePage from "./screen/homePage";


const Stack = createStackNavigator();

export default function App() {
  

return (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupPage" component={SignupPage} />
      <Stack.Screen name="forgotPassword" component={forgotPassword} />
      <Stack.Screen name="homePage" component={homePage}/>
    </Stack.Navigator>
  </NavigationContainer>
);

  
}


