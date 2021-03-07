import decode from "jwt-decode";
import instance from "./instance";
import * as types from "./actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setUser = (token) => {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch({
        type: types.SET_USER,
        payload: decode(token),
      });
    } catch (error) {
      console.log(`SetUser Request Error: ${error}`);
    }
  };
};

export const signin = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", newUser);
      dispatch(setUser(res.data.token));
      alert("Signed in Successfully");
      // navigation.replace("Home");
      navigation.goBack();
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};

export const signup = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      await dispatch(setUser(res.data.token));
      alert("Signed up Successfully");
      navigation.goBack();
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;

      await dispatch({
        type: types.SET_USER,
        payload: null,
      });
      alert("Signed out Successfully");
    } catch (error) {
      console.log(`Signout Request Error: ${error}`);
    }
  };
};

export const checkForToken = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const user = decode(token);
      const currentTime = Date.now();

      if (currentTime < user.exp) {
        dispatch(setUser(token));
      } else {
        dispatch(signout());
      }
    }
  } catch (error) {
    console.log(`checkForToken Request Error: ${error}`);
  }
};
