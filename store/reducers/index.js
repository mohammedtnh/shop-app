import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  productReducer,
  shopReducer,
  cartReducer,
  authReducer,
});

export default rootReducer;
