import * as types from "./actionTypes";
import instance from "./instance";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/products");
      dispatch({
        type: types.FETCH_PRODUCTS,
        payload: { products: response.data },
      });
    } catch (error) {
      console.log(`GET Request Error: ${error}`);
    }
  };
};
