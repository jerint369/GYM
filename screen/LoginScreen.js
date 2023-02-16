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
import { useNavigation } from "@react-navigation/native";


export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here, such as checking user credentials
    if (email === "user" && password === "password") {
      navigation.navigate("homePage");
    } else {
      Alert.alert("Login failed");
    }
  };

  const signUp = () => {
    navigation.navigate("SignupPage");
  };
  const forgotPass = () => {
    navigation.navigate("forgotPassword");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo-colour.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.logo}>GYM +</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={signUp}>
        <Text style={styles.label}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={forgotPass}>
        <Text style={styles.label1}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    width: "10%",
    padding: 10,
  },

  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },

  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    paddingTop: 30,
    color: "white",
  },
  label1: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "white",
  },
});
