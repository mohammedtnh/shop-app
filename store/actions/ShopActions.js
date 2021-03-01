import * as types from "./actionTypes";
import instance from "./instance";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("shops");
      dispatch({
        type: types.FETCH_SHOPS,
        payload: { shops: response.data },
      });
    } catch (error) {
      console.log(`GET Request Error: ${error}`);
    }
  };
};
