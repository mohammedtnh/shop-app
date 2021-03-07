import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { fetchProducts } from "./actions/ProductActions";
import { fetchShops } from "./actions/ShopActions";
import { checkForToken } from "./actions/authActions";

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchProducts());
store.dispatch(fetchShops());
store.dispatch(checkForToken());
export default store;
