import { Button } from "native-base";
import React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(signin(user, navigation));
  };
  return (
    <View>
      <Text>Signin</Text>
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
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Signin</Text>
      </TouchableOpacity>
      <Button onPress={() => navigation.navigate("Signup")}>
        <Text>Press here to create an account</Text>
      </Button>
    </View>
  );
};

export default Signin;
