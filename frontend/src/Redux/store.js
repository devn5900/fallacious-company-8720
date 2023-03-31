import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./cartReducer/reducer";
const combineReducer = combineReducers({
  // add your reducer here
  cartReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  combineReducer,
  composeEnhancer(applyMiddleware(thunk))
);
