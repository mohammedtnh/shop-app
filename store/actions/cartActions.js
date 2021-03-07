import * as types from "./actionTypes";
import instance from "./instance";

export const addItemToCart = (newItem) => ({
  type: types.ADD_ITEM,
  payload: newItem,
});

export const removeItemFromCart = (productId) => ({
  type: types.REMOVE_ITEM,
  payload: productId,
});

export const checkout = (items) => async (dispatch) => {
  try {
    const res = await instance.post("/checkout", items);
    dispatch({
      type: types.CHECKOUT,
    });
  } catch (error) {
    console.log("CartStore -> checkout -> error", error);
  }
};
