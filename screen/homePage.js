import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignupPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = () => {
    Alert.alert("Reset Link Sent");
  };

  const login = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo-colour.png")}
          style={styles.image}
        />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  header: {
    width: "10%",
    
    padding:"10%",
    
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
  signupBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signupText: {
    color: "white",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    paddingTop: 30,
    color: "white",
  },
});
