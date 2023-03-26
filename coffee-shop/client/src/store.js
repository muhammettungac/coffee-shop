import { getAllCoffeeReducer } from "./reducers/CoffeeReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";

const compose = composeWithDevTools({});

const finalReducers = combineReducers({
  getAllCoffeeReducer: getAllCoffeeReducer,
});

const initialState = {};

const store = createStore(
  finalReducers,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
