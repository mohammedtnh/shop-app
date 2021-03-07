import { Button } from "native-base";
import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = () => {
    dispatch(signup(user, navigation));
  };
  return (
    <View>
      <Text>Signup</Text>
      <TextInput
        placeholder="username"
        autoCapitalize="none"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <TextInput
        placeholder="email"
        autoCapitalize="none"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <TextInput
        placeholder="firstName"
        autoCapitalize="none"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <TextInput
        placeholder="lastName"
        autoCapitalize="none"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Signup</Text>
      </TouchableOpacity>
      <Button onPress={() => navigation.navigate("Signin")}>
        <Text>already have an account? Signin</Text>
      </Button>
    </View>
  );
};

export default Signin;
