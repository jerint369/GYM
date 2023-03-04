import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class LoginScreen extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      gestureEnabled: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Home screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
