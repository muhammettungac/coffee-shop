import { getAllCoffeeReducer } from "./reducers/CoffeeReducers";
import { addToCartReducer } from "./reducers/CartReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";

const compose = composeWithDevTools({});

const finalReducers = combineReducers({
  getAllCoffeeReducer: getAllCoffeeReducer,
  addToCartReducer: addToCartReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  addToCartReducer: {
    cartItems: cartItems,
  },
};

const store = createStore(
  finalReducers,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
