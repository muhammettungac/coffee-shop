import { getAllCoffeeReducer } from "./reducers/CoffeeReducers";
import { addToCartReducer } from "./reducers/CartReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  registerUserReducer,
  loginUserReducer,
  logoutUserReducer,
  getAllUserReducer,
} from "./reducers/UserReducers";
import { getUserOrdersReducer } from "./reducers/OrderReducers";

const compose = composeWithDevTools({});

const finalReducers = combineReducers({
  getAllCoffeeReducer: getAllCoffeeReducer,
  addToCartReducer: addToCartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  logoutUserReducer: logoutUserReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  getAllUserReducer: getAllUserReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  addToCartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const store = createStore(
  finalReducers,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
