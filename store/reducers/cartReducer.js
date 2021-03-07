import * as types from "../actions/actionTypes";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECKOUT:
      alert("Done");
      return {
        ...state,
        items: [],
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    case types.ADD_ITEM:
      const foundItem = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (foundItem)
        return {
          ...state,
          items: state.items.map((item) =>
            item === foundItem
              ? {
                  productId: foundItem.productId,
                  quantity: foundItem.quantity + action.payload.quantity,
                }
              : item
          ),
        };
      else
        return {
          ...state,
          items: [...state.items, action.payload],
        };
    default:
      return state;
  }
};

export default reducer;
